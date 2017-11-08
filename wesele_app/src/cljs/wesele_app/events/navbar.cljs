(ns wesele-app.events.navbar
  (:require [re-frame.core :as re-frame]
            [ajax.core :as ajax :refer [GET]]
            [day8.re-frame.http-fx]
            goog.storage.Storage
            goog.storage.mechanism.HTML5LocalStorage
            ))

(re-frame/reg-event-fx
 :request-login
 (fn
   [{:keys [db]} [_ data]]
   {:http-xhrio {:method :post
                 :uri "/login"
                 :params data
                 :format          (ajax/json-request-format)
                 :response-format (ajax/json-response-format {:keywords? true}) 
                 :on-success [:login-response]
                 :on-failure [:bad-response]}
    :db  (assoc db :loading? true)}))


(re-frame/reg-event-fx
 :request-logout
 (fn
   [{:keys [db]} [_ data]]
   {:http-xhrio {:method :post
                 :uri "/logout"
                 :params data
                 :format          (ajax/json-request-format)
                 :response-format (ajax/json-response-format {:keywords? true}) 
                 :on-success [:logout-response]
                 :on-failure [:bad-response]}
    :db  (assoc db :loading? true)}))


(re-frame/reg-event-fx
 :request-user-data
 (fn
   [{:keys [db]} [_ data]]
   {:http-xhrio {:method :get
                 :uri (str "/user/" data)
                 :format          (ajax/json-request-format)
                 :response-format (ajax/json-response-format {:keywords? true}) 
                 :on-success [:login-response]
                 :on-failure [:bad-response]}
    :db  (assoc db :loading? true)}))

(re-frame/reg-event-fx
 :login-response
 (fn
   [{:keys [db]} [_ response]]
   {:db (-> db
            (assoc :loading? false) 
            (assoc-in [:user] response))
    :adduser-to-localstorage response
    :dispatch [:set-active-panel :home-page]}))

(re-frame/reg-event-fx
 :logout-response
 (fn
   [{:keys [db]} _]
   {:db (-> db
            (assoc :loading? false) 
            (assoc-in [:user] nil))
    :removeuser-from-localstorage nil
    :dispatch [:set-active-panel :login-page]}))

(re-frame/reg-fx
 :adduser-to-localstorage
 (fn [data]
   (let [{:keys [login exp]} data
         s (goog.storage.Storage. (goog.storage.mechanism.HTML5LocalStorage.))]
     (.set s "login" login)
     (.set s "login-exp" exp))))

(re-frame/reg-fx
 :removeuser-from-localstorage
 (fn []
   (let [s (goog.storage.Storage. (goog.storage.mechanism.HTML5LocalStorage.))]
     (.remove s "login")
     (.remove s "login-exp"))))
