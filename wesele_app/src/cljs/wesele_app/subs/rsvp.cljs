(ns wesele-app.subs.rsvp
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-sub
 :get-rsvp1
 (fn [db _]
   (get-in db [:user :details :rsvp1])))

(re-frame/reg-sub
 :get-rsvp2
 (fn [db _]
   (get-in db [:user :details :rsvp2])))


(re-frame/reg-sub
 :is-rsvp2
 (fn [db _]
   (get-in db [:user :details :is_rsvp2])))
