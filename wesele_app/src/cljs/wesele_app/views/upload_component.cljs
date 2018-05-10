(ns wesele-app.views.upload-component
  (:require [re-frame.core :as re-frame]
            [goog.dom :as dom]
            [reagent.core :as r]
            [goog.crypt.base64 :as b64]
            [cljs-http.client :as http]
            [cljs.core.async :refer [put! chan <! >!]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(def file-data (atom {:file-props nil
                      :file-data nil}))

;; lastModified : 1524643650815
;; lastModifiedDate : Wed Apr 25 2018 10:07:30 GMT+0200 (Środkowoeuropejski czas letni) {}
;; name : "Przechwytywanie.PNG"
;; size : 16983
;; type : "image/png"

(defn clj->json
  [ds]
  (.stringify js/JSON (clj->js ds)))

(def first-file
  (map (fn [e]
         (let [target (.-currentTarget e)
               file (-> target .-files (aget 0))]
           (set! (.-value target) "")
           file))))

(def extract-result
  (map #(-> % .-target .-result js->clj)))

(def upload-reqs (chan 1 first-file))
(def file-reads (chan 1 extract-result))

(defn put-upload [e]
  (put! upload-reqs e))

(defn upload-test [name data]
  (go (let [progress-channel (chan)
            token (re-frame/subscribe [:dropbox-api-key])
            response (http/post "https://content.dropboxapi.com/2/files/upload"
                                {
                                 :with-credentials? false
                                 :headers {"Authorization" (str "Bearer " @token)
                                           "Content-Type" "application/octet-stream"
                                           "Dropbox-API-Arg" (clj->json {"path" (str "/upload/" name)
                                                                       "mode" "add"
                                                                       "autorename" true
                                                                       "mute" false
                                                                       })
                                           }
                                 :progress progress-channel
                                 :body data})]
        ;; action after update 
         (js/console.log  (get-in (<! response) [:body :id]))
        )))


(go-loop []
  (let [reader (js/FileReader.)
        file (<! upload-reqs)]
    (swap! file-data assoc :file-props file)
    (set! (.-onload reader) #(put! file-reads %))
    ;; (.readAsText reader file)
    ;; (.readAsDataURL reader file)
    (.readAsArrayBuffer reader file)
    (recur)))

(go-loop []
    (swap! file-data assoc :file-data (<! file-reads))
    ;; (js/console.log "TEST")
    (when-let [file-props (:file-props @file-data)]
      (upload-test (.-name file-props) (:file-data @file-data)))
    (recur))



(defn on-click-upload-handler [el]
  (.click (js/document.getElementById "upload_file")))


(defn upload-component []
  (fn []
    [:div#special1.row
     [:div.col-md-12
      [:form#upload_file_component {:method "post" :enctype "multipart/form-data"}
       [:button.btn.btn-primary.btn-block {:type "button"  :onClick on-click-upload-handler} "Wgraj zdjęcia"]
       [:input.form-control-file {:type "file" :id "upload_file" :onChange put-upload :accept "image/*"}]]]]
  ))

