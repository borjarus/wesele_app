(ns wesele-app.views.login
  (:require
   [ajax.core :refer [POST]]
   [reagent.core :as r]
   [re-frame.core :as re-frame]
   ))


(defn handle-login [e u p n]
  (if  (or (and (not (empty? u))
              (= 13 (.-charCode e)))
            (and (not (nil? n))
              (not (empty? u))))
    (let [data {:username u
                :password p}]
      (.preventDefault e)
      (re-frame/dispatch [:request-login data]))))


(defn login-page []
  (let [form-params (r/atom {:username "" :password ""})]
  (fn []

    [:form.form-login {:action "#/login" :method "post"}
     [:div.header
      [:span "Zaloguj się"]]
     [:div.avatar
      [:img {:src "img/logotyp.svg" :alt ""}]]
     [:div.inputs
      [:input {:name "username" :id "username" :type "text" :placeholder "Login"
               :on-key-press #(handle-login % (-> (.getElementById js/document "username") .-value)
                                            (-> (.getElementById js/document "password") .-value)
                                            nil)}]
      [:input {:name "password" :id "password" :value "An1@&m1ReK" :type "hidden" :placeholder "Password"}]]
     [:div.clear]
     [:div.button-login
      [:input {:type "button" :value "Zaloguj" :on-click (fn [e]
                                                           (handle-login e
                                                                         (-> (.getElementById js/document "username") .-value)
                                                                         (-> (.getElementById js/document "password") .-value)
                                                                         "button"))
               }]]
     [:div.clear]]
    )))

