(ns wesele-app.subs
    (:require-macros [reagent.ratom :refer [reaction]])
    (:require [re-frame.core :as re-frame]
              [wesele-app.subs.gallery]
              [wesele-app.subs.index]
              [wesele-app.subs.navbar]
              [wesele-app.subs.rsvp]))

(re-frame/reg-sub
 :menu
 (fn [db]
   (:menu db)))

(re-frame/reg-sub
 :active-panel
 (fn [db _]
   (:active-panel db)))


;; ========================= REGISTER SUBS ==================================

