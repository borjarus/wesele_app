(ns wesele-app.events.gallery
  (:require [re-frame.core :as re-frame]
            [ajax.core :as ajax :refer [GET]]
            [day8.re-frame.http-fx]))


(defn single-image-obj [url t-url title description]
  {:src url
   :srct t-url
   :title title
   :description description})

(re-frame/reg-event-db
 :gallery
 (fn [db [_ gallery-opts]]
   (assoc db :gallery gallery-opts)))

(re-frame/reg-event-fx
 :add-to-gallery-db
 (fn
   [{:keys [db]} [_ params]]
   {:http-xhrio {:method :post
                 :params params
                 :format          (ajax/json-request-format)
                 :uri "/gallery/add"
                 :response-format (ajax/json-response-format {:keywords? true}) 
                 :on-success [:add-process]
                 :on-failure [:bad-response]}
    :db  (assoc db :loading? true)}))

(re-frame/reg-event-fx
 :request-gallery
 (fn
   [{:keys [db]} [_ url]]
   {:http-xhrio {:method :get
                 :uri url
                 :response-format (ajax/json-response-format {:keywords? true}) 
                 :on-success [:process-response]
                 :on-failure [:bad-response]}
    :db  (assoc db :loading? true)}))

(re-frame/reg-fx
 :show-nano-gallery
 (fn []
   (let [gallery (re-frame/subscribe [:gallery-sub])]
     ;(print @gallery)
     (.nanoGallery (js/jQuery "#wedding-gallery") (clj->js @gallery)))))

(re-frame/reg-event-fx
 :add-process
 (fn
   [{:keys [db]} [_ response]]
   (js/console.log response)))

(re-frame/reg-event-fx
 :process-response
 (fn
   [{:keys [db]} [_ response]]
   {:db (let [out (map #(single-image-obj (str (:path_src %) (:filename %)) (str (:path_src %) (:filename %)) "Title" "Bla Bla Bla") response)]
          (-> db
            (assoc :loading? false) 
            (assoc-in [:gallery :items] out)))
    :show-nano-gallery _}))

;; @re-frame.db/app-db
