(ns wesele-app.views.rsvp
  (:require [wesele-app.views.navbar :refer [nav-bar]]
            [reagent.core :as r]
            [re-frame.core :as re-frame]))

(defn switchery-change-event [typ name el user-db]
  (set! (.-onchange el)
        (fn []
          (let [answer (if (true? el.checked) 1 0)
                user (get @user-db :login)]
            (re-frame/dispatch [:process-rsvp {:login user :answer answer :type typ}])))))

(defn check-checkbox [elem v]
  (if (= v 1)
    (set! (.-checked elem) true)
    (set! (.-checked elem) false)))

(defn ios-swichery [n val] 
  (let [comp (atom {})]
  (r/create-class
   {:component-did-mount
    (fn [this]
      (let [elem (.querySelector js/document (str "#" n))
            user-db (re-frame/subscribe [:get-user])
            [_ n v]  (r/argv this)
            typ (clojure.string/lower-case n)]
        (switchery-change-event typ n elem user-db)
        (check-checkbox elem v)
        (swap! comp assoc :switchery (js/Switchery elem #js {:color "#71266E", :jackColor "#AA71A7"}))))
    :component-did-update
    (fn [this]
      (let [elem (.querySelector js/document (str "#" n))
            user-db (re-frame/subscribe [:get-user])
            [_ n v]  (r/argv this)]
        (check-checkbox elem v)))
    :display-name "ios-swichery"
    :reagent-render
    (fn []
      ^{:key n} [:input.js-switch {:type "checkbox" :id n}])
    }
   )))


(defn rsvp-page []
  (let [user (re-frame/subscribe [:get-user])
        r1 (re-frame/subscribe [:get-rsvp1])
        r2 (re-frame/subscribe [:get-rsvp2])
        is-rsvp2 (re-frame/subscribe [:is-rsvp2])]
    (fn []
      [:div
       [nav-bar]
       [:div.container
        [:div.row
         [:div.col-md-12
          [:h1 "RSVP PAGE"]]
         ]
        [:div.row
         [:div.col-md-10.offset-md-1
          [:blockquote.blockquote.text-justify "Aenean libero enim, semper id neque sit amet, luctus varius purus. Suspendisse ultricies porta elementum. Vestibulum iaculis mattis turpis, vitae condimentum justo vehicula eu."]]]
        [:div.row
         [:div.col-md-12.text-center
          [:span "Wesele "
           [ios-swichery "RSVP1" @r1]]
          " "
          (if (= @is-rsvp2 1)
            [:span "Poprawiny "
             [ios-swichery "RSVP2" @r2]])
          ]]
        ]])))


