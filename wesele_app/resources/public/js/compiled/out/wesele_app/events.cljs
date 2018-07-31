(ns wesele-app.events
    (:require [re-frame.core :as re-frame]
              [wesele-app.db :as db]
              [wesele-app.events.gallery]
              [wesele-app.events.index]
              [wesele-app.events.navbar]
              [wesele-app.events.rsvp]
              [wesele-app.utils.login :refer [check-login-time get-login-type]]
              ))

(defn check-user []
  (let [uname (get-login-type :user)]
    (if (and (false? (check-login-time))
             (not (false? uname)))
      (re-frame/dispatch [:request-logout {:username uname}])
      (let [db-user @(re-frame/subscribe [:get-user])]
        (if (and (nil? db-user)
                 (not (false? uname)))
          (re-frame/dispatch [:request-user-data uname]))
        true))))

(re-frame/reg-event-db
 :initialize-db
 (fn  [_ _]
   db/default-db))

(re-frame/reg-event-db
 :set-active-panel
 (fn [db [_ active-panel]]
   (do
     (check-user)
     (assoc db :active-panel active-panel)
     )
   ))



(re-frame/reg-event-fx
 :bad-response
 (fn
   [{:keys [db]} [_]]
   (js/console.log "ERR")))


