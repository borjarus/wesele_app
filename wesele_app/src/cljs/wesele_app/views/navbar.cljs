(ns wesele-app.views.navbar
  (:require [re-frame.core :as re-frame]

            )) 

(defn handle-login [e u p]
  (if (= 13 (.-charCode e))
    (let [data {:username u
                :password p}]
      (re-frame/dispatch [:request-login data]))))


(defn inic-2-letters [n]
  (let [col (map #(clojure.string/split % #"\s+")
                 (map #(clojure.string/trim %) (clojure.string/split n #"\|")))]
    (map #(apply str %)
         (map flatten (map (fn [c]
                             (map #(take 2 %) c)) col)))))

(defn users-name [name ver]
  (let [inicj (clojure.string/join "|" (inic-2-letters name))
        and1 (clojure.string/replace inicj #"\|" " & ")
        and2 (clojure.string/replace name #"\|" " & ")]
    (if (= ver 1)
      and1
      and2)))

(defn get-menu-icon []
  (let [active-link (re-frame/subscribe [:active-panel])]
    [:span.menu-icon
     (condp = @active-link
       :home-page "a"
       :rsvp-page "d"
       :church-page "b"
       :wedding-hall-page "c"
       :gallery-page "e"
       :gifts-page "f"
       :accomodations-page "g"
       "a")]))

(defn nav-item []
  (let [active-link (re-frame/subscribe [:active-panel])]
    (fn [item]
      (let [active-class (if (= (name @active-link) (:sname item)) " active " "")]
        [:li {:class (str "nav-item" active-class)}
       [:a.nav-link {:href (:href item) :title (:title item)} (:title item)]]))))

(defn nav-bar []
  (let [menu (re-frame/subscribe [:menu])
        user (re-frame/subscribe [:get-user])]
    (fn []
      [:div
       [:div.header-top
        [:div.row
         [:div.col-md-8.offset-md-2.header-top-container
          [:div.row
           [:div.col-5 "Ania"]
           [:div.col-2
            [:img.bird {:src "img/bird.png" :alt ""}]]
           [:div.col-5 "Mirek"]
           ]]]
        ]
       [:nav.navbar.navbar-expand-md.navbar-light.main-navbar
        [:button.navbar-toggler {:type "button" :data-toggle "collapse" :data-target "#exCollapsingNavbar2" :aria-controls "exCollapsingNavbar2" :aria-expanded "false" :aria-label "Toggle navigation"} \u2630]
        [:div.collapse.navbar-collapse  {:id "exCollapsingNavbar2"}
         [:a.navbar-brand {:href "#/"}
          (get-menu-icon)]
         [:ul.nav.navbar-nav
          (map (fn [x]
                 (if (= (:on-off x) 1)
                   ^{:key (:id x)} [nav-item x])) @menu)]]
         (if (nil? @user)
           [:div.search-panel
             [:i.fa.fa-lock {:aria-hidden "true"}]
             [:input.form-control {:type "text" :placeholder "Login" :name "username" :id "username"
                                   :on-key-press #(handle-login % (-> % .-target .-value)
                                                                (-> (.getElementById js/document "password")
                                                                    .-value))}]
             [:input {:type "hidden" :value "An1@&m1ReK" :name "password" :id "password"}]]
           (let [nazwa (get (:details @user) :nazwa)] 
             [:div.search-panel {:title (users-name nazwa 2)} (users-name nazwa 1) " "
              [:i.fa.fa-user  {:aria-hidden "true" :title (users-name nazwa 2)}]
              [:a {:href ""
                   :on-click (fn [e]
                               (.preventDefault e)
                               (re-frame/dispatch [:request-logout {:username (:login @user)}]))} [:i.fa.fa-unlock-alt  {:aria-hidden "true" :title "Wyloguj"}]]
              ]))
        ]
        [:div.row.header-bottom]
       ])))
