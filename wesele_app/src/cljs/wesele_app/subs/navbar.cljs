(ns wesele-app.subs.navbar
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-sub
 :get-user
 (fn [db _]
   (:user db)))

(re-frame/reg-sub
 :is-loading?
 (fn [db _]
   (:loading? db)))
