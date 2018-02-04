(ns wesele-app.events.index
  (:require [re-frame.core :as re-frame]
            [ajax.core :as ajax :refer [GET]]
            [cljs-time.core :refer [in-seconds interval now date-time]]))

;(def test-data (in-seconds (interval (date-time (now)) (date-time 2018 8 18 16 0))))


(defn quot-rem [a b]
  (let [x (rem a b)
        y (quot a b)]
    [y x]))

(defn wedding-countdown [s]
  (let [[m seconds] (quot-rem s 60)
        [h minutes] (quot-rem m 60)
        [days hours] (quot-rem h 24)]
    [days hours minutes seconds]))

;;(wedding-countdown test-data)

(re-frame/reg-event-db
 :set-wedding-counter
 (fn [db _]
   (let [now (in-seconds (interval (date-time (now)) (date-time 2018 8 18 17 0)))]
     (assoc db :wedding-counter (wedding-countdown now)))))


