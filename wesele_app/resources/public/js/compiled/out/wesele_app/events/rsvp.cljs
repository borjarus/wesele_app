(ns wesele-app.events.rsvp
  (:require [re-frame.core :as re-frame]
            [ajax.core :as ajax :refer [GET]]
            [day8.re-frame.http-fx]))

(re-frame/reg-event-fx
 :process-rsvp
 (fn
   [{:keys [db]} [_ data]]
   {:http-xhrio {:method :post
                 :uri "/rsvp"
                 :params data
                 :format          (ajax/json-request-format)
                 :response-format (ajax/json-response-format {:keywords? true}) 
                 :on-success [:rsvp-response]
                 :on-failure [:bad-response]}
    :db  (assoc db :loading? true)}))


(re-frame/reg-event-fx
 :rsvp-response
 (fn
   [{:keys [db]} [_ response]]
   {:db (-> db
            (assoc :loading? false) 
            (assoc-in [:user :details (keyword (:type response))] (:answer response)))
    }))
