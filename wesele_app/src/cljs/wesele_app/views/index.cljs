(ns wesele-app.views.index
  (:require [wesele-app.views.navbar :refer [nav-bar]]
            [re-frame.core :as re-frame]
            [goog.dom :as dom]
            [reagent.core :as r]
            [wesele-app.events.index]))


(defn class [class] (js/getElementByClassName class))
(defn round [x] (js/Math.round x))

(defn get-new-offset [val max-val]
  (round (/ (* 100 val) max-val)))

;(defonce countdown-run (js/setInterval #(re-frame/dispatch [:set-wedding-counter]) 1000))
(defn countdown-run []
  (js/setInterval #(re-frame/dispatch [:set-wedding-counter]) 1000))

(defn func-a [name state]
  (let [[d h m s] state]
    (condp = name
      :d [d 730 "dni"]
      :h [h 24 "godzin"]
      :m [m 60 "minut"]
      :s [s 60 "sekund"])))

(defn update-countdown-status [typ val max-val]
  (let [el (dom/getElementByClass (str "time-out-" typ))
        total-svg-length (.getTotalLength el)
        new-offset (round (- total-svg-length (/ (* (get-new-offset val max-val) total-svg-length) 100)))]
    (.setAttribute el "stroke-dasharray" total-svg-length)
    (.setAttribute el "stroke-dashoffset" new-offset)))

(defn countdown-component [typ]
  (let [db (atom {:countdown nil})]
    (r/create-class
     {:component-did-mount
      (fn []
        (let [state (re-frame/subscribe [:wedding-counter])
              [val max-val _] (func-a typ @state)
              t (name typ)
              _ (swap! db assoc :countdown (countdown-run))]
        (update-countdown-status t val max-val)))
      :component-did-update
      (fn []
        (let [state (re-frame/subscribe [:wedding-counter])
              [val max-val _] (func-a typ @state)
              t (name typ)]
        (update-countdown-status t val max-val)))
      :component-will-unmount
      (fn []
        (js/clearInterval (:countdown @db))
        (swap! db assoc :countdown nil))
      :reagent-render
      (fn []
        (let [state (re-frame/subscribe [:wedding-counter])
              [val _ namex] (func-a typ @state)]
          [:div.clock
           [:svg 
            ;;[:path.time-out {:d "m 90, 6 a 84,84 0 1,0 0,168 a 84,84 0 1,0 0,-168"}]]
            [:path {:class (str "time-out time-out-" (name typ)) :d "m 80, 6 a 50,50 0 1,0 0,120 a 50,50 0 1,0 0,-120"}]]
           [:div.content
            [:div.seconds val]
            [:div.sec-text namex]]]))
      })))

;; ===========

(defn index-page []
  (let [wedding-counter (re-frame/subscribe [:wedding-counter])]
  (fn []
    [:div
     [nav-bar]
     [:div.container
      [:div.row
       [:div.col-md-12
        [:p.pt-4 ""]]]
      [:div.row
       [:div.col-md-3
        [:div.row.justify-content-center [:i.icon.icon-kalendarz_02 {:style {:font-size "3rem"}}]]
        
        [:div.row.justify-content-center.font-weight-bold "Data"]
        [:div.row.justify-content-center "18 Sierpnia 2018"]
        ]
       [:div.col-md-3
        [:div.row.justify-content-center [:i.icon.icon-cat-256 {:style {:font-size "3rem"}}]]
        [:div.row.justify-content-center.font-weight-bold "Godzina"]
        [:div.row.justify-content-center "17:00"]]
       [:div.col-md-3
        [:div.row.justify-content-center [:i.icon.icon-cat-290 {:style {:font-size "3rem"}}]]
        [:div.row.justify-content-center.font-weight-bold "Miejsce ślubu"]
        [:div.row.justify-content-center.text-center "Kościół Rzymskokatolicki św. Jana Chrzciciela"]]
       [:div.col-md-3
        [:div.row.justify-content-center [:i.icon.icon-cat-301 {:style {:font-size "3rem"}}]]
        [:div.row.justify-content-center.font-weight-bold "Wesele"]
        [:div.row.justify-content-center "Lila Park"]]]
      [:div.row
       [:div.col-md-12
        [:p.pt-4 ""]]]
      [:div.row
       [:div.col-md-12.section-wrapper
        [countdown-component :d]
        [countdown-component :h]
        [countdown-component :m]
        [countdown-component :s]
        ]
      ]]])))
