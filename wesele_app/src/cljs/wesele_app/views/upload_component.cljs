(ns wesele-app.views.upload-component
  (:require [re-frame.core :as re-frame]
            [goog.dom :as dom]
            [reagent.core :as r]
            [goog.crypt.base64 :as b64]
            [cljs-http.client :as http]
            [cljs.core.async :refer [put! chan <! >!]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                   [adzerk.env :as env]))

(def file-data (atom {:file-props nil
                      :file-data nil}))
;;
;; https://imgur.com/#access_token=9b74614850b9abfbf9bdcd3ac512bddbb873bd95&expires_in=315360000&token_type=bearer&refresh_token=41931c18bab55d96b7a0433c99d7503536d7379a&account_username=SlubnyZakatek&account_id=87365999

(env/def FLICKR_SECRET)


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

(defn return-extension-from-link [link]
  (let [re (re-pattern (str "EScAwAz" "\\.(.+)"))
        [_ out] (re-find re link)]
    (if-not (nil? out)
      out
      "jpg")))


;; UPLOAD
;; curl -X POST \
;; https://api.imgur.com/3/image \
;; -H 'Authorization: Client-ID aead0b343314366' \
;; -H 'Cache-Control: no-cache' \
;; -H 'Postman-Token: 5e86172b-602d-4950-b47d-3509ff6ef18a' \
;; -H 'content-type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' \
;; -F 'image=@C:\Users\Admin\Pictures\dzik.jpg' \
;; -F album=OKSsS5CbN8duoui

;; Response:
;; {"data":{"id":"EScAwAz","title":null,"description":null,"datetime":1526549233,"type":"image\/jpeg","animated":false,"width":320,"height":320,"size":21258,"views":0,"bandwidth":0,"vote":null,"favorite":false,"nsfw":null,"section":null,"account_url":null,"account_id":0,"is_ad":false,"in_most_viral":false,"has_sound":false,"tags":[],"ad_type":0,"ad_url":"","in_gallery":false,"deletehash":"7hjWPZdURIvWWdA","name":"","link":"https:\/\/i.imgur.com\/EScAwAz.jpg"},"success":true,"status":200}
(defn upload-to-imgur [name data]
  (go (let [progress-channel (chan)
            parsed-data (clojure.string/replace data #"data:.+?," "") 
            token (re-frame/subscribe [:imgur-client-id])
            user (re-frame/subscribe [:get-user])
            response (http/post "https://api.imgur.com/3/image"
                                {
                                 :with-credentials? false
                                 :headers {"Authorization" (str "Client-ID " @token)}
                                 :progress progress-channel
                                 :multipart-params [["image" parsed-data] ["album" "OKSsS5CbN8duoui"]]})]
        (if-let [r (:body (<! response))]
          (let [row  (:data r)]
            (re-frame/dispatch [:add-to-gallery-db
                                {:name name
                                 :path (:link row)
                                 :th-src (str "https://i.imgur.com/" (:id row) "s." (return-extension-from-link (:link row)))
                                 :tags ["upload" (-> @user
                                                     :details
                                                     :login)]
                                 :type "url"
                                 :url-folder "upload/"
                                 :parsed-data (pr-str row)
                                }])
           ))
        )))

(defn upload-to-dropbox [name data]
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
        (if-let [{keys [name]} (:body (<! response))]
          (re-frame/dispatch [:add-to-gallery-db {
                                                  :name name
                                                  :path "http://examplepic.com"
                                                  :th-src "http://examplethumbpic.com"
                                                  :tags ["tag0" "tag6" "tag0" "tag6" "tag3"]
                                                  :type "url"
                                                  :url-folder "upload/"
                                                  }]))
         ;; (js/console.log  (get-in (<! response) [:body :id]))
        )))

;; (defn get-folder-list-dropbox [name]
;;   (go (let [token (re-frame/subscribe [:dropbox-api-key])
;;             response (http/post "https://api.dropboxapi.com/2/files/list_folder"
;;                                 {:with-credentials? false
;;                                  :headers {
;;                                            "Authorization" (str "Bearer " @token)
;;                                            "Content-Type" "application/json"
;;                                            }
;;                                  :body (clj->json {
;;                                                    "path" name
;;                                                    "recursive" false
;;                                                    "include_media_info" true
;;                                                    "include_deleted" false
;;                                                    "include_has_explicit_shared_members" false
;;                                                    "include_mounted_folders" true
;;                                                    })})]
;;         ;; action after update 
;;         (if-let [{:keys [entries]} (get-in (<! response) [:body])]
;;           ;;(js/console.log (clj->js entries)))
        
;;         ))))

(def test-data {:name "file1.jpg", :path "http://examplepic.com", :th-src "http://examplethumbpic.com", :tags ["tag0" "tag6" "tag0" "tag6" "tag3"], :type "url", :url-folder "upload/"})

(re-frame/dispatch [:add-to-gallery-db test-data])

;;(get-folder-list-dropbox "/upload")

(go-loop []
  (let [reader (js/FileReader.)
        file (<! upload-reqs)]
    (swap! file-data assoc :file-props file)
    (set! (.-onload reader) #(put! file-reads %))
    ;;(.readAsText reader file)
    (.readAsDataURL reader file)
    ;; (.readAsArrayBuffer reader file)
    (recur)))

(go-loop []
    (swap! file-data assoc :file-data (<! file-reads))
    ;; (js/console.log "TEST")
    (when-let [file-props (:file-props @file-data)]
      ;;(upload-to-dropbox (.-name file-props) (:file-data @file-data)))
      (upload-to-imgur (.-name file-props) (:file-data @file-data)))
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

