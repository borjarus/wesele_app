(ns wesele-app.subs.index
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-sub
 :wedding-counter
 (fn [db _]
   (:wedding-counter db)))
