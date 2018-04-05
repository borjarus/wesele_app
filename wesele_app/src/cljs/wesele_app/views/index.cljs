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
  (let [wedding-counter (re-frame/subscribe [:wedding-counter])
        user (re-frame/subscribe [:get-user])
        special1 (-> @user
                     :details
                     :special1)
        invitation_confirmed (-> @user
                     :details
                     :invitation_confirmed)
        ]
  (fn []
    [:div
     [nav-bar]
     [:div.container-fluid.container_bg
     [:div.container
      [:div.row
       [:div.col-md-12
        [:p.pt-4 ""]]]
      [:div.row
       [:div.col-md-12.section-wrapper.d-flex.justify-content-center
        (if (= 1 invitation_confirmed)
          [:p.alert.alert-success.p-3 "Potwierdzono przybycie " [:i.fa.fa-check.fa-lg.pl-1]]
          [:p.alert.alert-warning.p-3 "Oczekiwanie na potwierdzenie przybycia " [:i.fa.fa-times.fa-lg.pl-1]])
        ]]
      [:div.row
       [:div.col-md-12
        [:p.pt-4 ""]]]
      ;; wstawka z zaproszeniem dla martyny - PROJECT MARTINA
      (if (= special1 1)
        [:div#special1.row
         [:div.col-md-12
          [:h2.pt-4.text-center.font-italic "Droga Martyno!"]
          [:p.pt-4 "Jak wiesz, zostałam chwilowo bez świadkowej. Zostałam postawiona w trudnym położeniu z ciężką decyzją. Łatwiej było wybierać wspólnie menu:"]
          [:p.pt-4
           [:img.special1-img.rounded-circle.mx-auto.d-block {:src "img/special1/001.jpg"}]]
          [:p.pt-4 "Molly może i by wiedziała co robić?!"]
          [:p.pt-4
           [:img.special1-img.rounded-circle.mx-auto.d-block {:src "img/special1/002.jpg"}]]
          [:p.pt-4 "Więc siadłam rozważając wszelkie napływające argumenty! Doradzała mi niedoszła świadkowa i inne zaufane osoby. Rozważanie było tak poważne niczym czekanie na samolot:"]
          [:p.pt-4
           [:img.special1-img.rounded-circle.mx-auto.d-block {:src "img/special1/003.jpg"}]]
          [:p.pt-4 "Argumenty mają silne podstawy!"]
          [:ul.list-unstyled
           [:li "1. Lubimy ploteczki i babskie sprawy! (no jak nie jak tak!):"]
           [:li.special1-img.pt-4.pb-4
            [:img.special1-img.rounded-circle.mx-auto.d-block {:src "img/special1/004.jpg"}]]
           [:li "2. Jesteś od dawna częścią naszej arcy specyficznej rodziny :D :"]
           [:li.special1-img.pt-4.pb-4
            [:img.special1-img.rounded-circle.mx-auto.d-block {:src "img/special1/005.jpg"}]]
           [:li "3. Jak już coś robimy to porządnie! (po co robić za mało jak można zrobić za dużo!) :"]
           [:li.special1-img.pt-4.pb-4
            [:img.special1-img.rounded-circle.mx-auto.d-block {:src "img/special1/006.jpg"}]]
           [:li "4. Mamy podobne i prawidłowe gusty muzyczne, więc czeka nas niejeden fajny koncert!"]
           [:li.special1-img.pt-4.pb-4
            [:img.special1-img.rounded-circle.mx-auto.d-block {:src "img/special1/007.jpg"}]]
           [:li "5. Jako jedna z niewielu szczerze i żywo interesujesz się naszymi przygotowaniami"]
           [:p.pt-4 "Zatem ja i mój narzeczony mamy to jedno ważne pytanie:"]
           [:li.special1-img.pt-4.pb-4
            [:img.special1-img.rounded-circle.mx-auto.d-block {:src "img/special1/008.jpg"}]]
           ]
          [:p.pt-4.display-4.font-italic.text-center "Czy zechcesz zostać w tej wyjątkowej sytuacji"
           [:br]
           "i w tym wyjątkowym dniu moją świadkową?"]
          [:p.pt-4.text-center
           [:i#heart_icon.fa.fa-heart]]
          ]])
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
       [:div.col-md-12.section-wrapper.d-flex.justify-content-center
        [countdown-component :d]
        [countdown-component :h]
        [countdown-component :m]
        [countdown-component :s]
        ]
       ]
      [:div.row
       [:div.col-md-12
        [:p.pt-4 ""]]]]
      ]])))
