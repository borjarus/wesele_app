(ns wesele-app.subs.gallery
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-sub
 :loadingp-sub
 (fn [db _]
   (:loading? db)))

(re-frame/reg-sub
 :img-items-sub
 (fn [db _]
   (:items (:gallery db))))


(re-frame/reg-sub
 :gallery-sub
 (fn [db _]
   (:gallery db)))
