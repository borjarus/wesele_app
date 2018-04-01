(ns wesele-app.views
  (:require [re-frame.core :as re-frame]
            [wesele-app.views.index :refer [index-page]]
            [wesele-app.views.news :refer [news-page]]
            [wesele-app.views.church :refer [church-page]]
            [wesele-app.views.wedding-hall :refer [wedding-hall-page]]
            [wesele-app.views.gallery :refer [gallery-page]]
            [wesele-app.views.login :refer [login-page]]
            [wesele-app.views.rsvp :refer [rsvp-page]] 
            [wesele-app.views.gifts :refer [gifts-page]] 
            [wesele-app.views.accomodations :refer [accomodations-page]] 
            ))

;; main
(defmulti panels identity)
(defmethod panels :login-page [] [login-page])
(defmethod panels :home-page [] [index-page])
(defmethod panels :news-page [] [news-page])
(defmethod panels :rsvp-page [] [rsvp-page])
(defmethod panels :church-page [] [church-page])
(defmethod panels :wedding-hall-page [] [wedding-hall-page])
(defmethod panels :gallery-page [] [gallery-page])
(defmethod panels :gifts-page [] [gifts-page])
(defmethod panels :accomodations-page [] [accomodations-page])
(defmethod panels :default [] [:div])

(defn show-panel
  [panel-name]
  [panels panel-name])

(defn main-panel []
  (let [active-panel (re-frame/subscribe [:active-panel])]
    (fn []
      [show-panel @active-panel])))
