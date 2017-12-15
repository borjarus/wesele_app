(ns wesele-app.views.gifts
  (:require [wesele-app.views.navbar :refer [nav-bar]]
            [reagent.core :as r]
            [re-frame.core :as rf]
            [re-frame.core :as re-frame])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn gifts-page []
    (r/create-class
     {:display-name "gifts"
      :reagent-render
      (fn []
        [:div
         [nav-bar]
          [:div.container-fluid.container_bg
           [:div.container
          [:div.row
           [:div.col-md-12
            [:p.pt-4 ""]]]
            [:div.row
             [:div.col-md-12
              [:p.h5.pb-2 "Lista sklepów z piwem rzemieślniczym:"]
              [:ul.gifts-special
               [:li.beer "Szczecin"
                [:ol
                 [:li "Piwa regionalne Elta, al. Niepodległości 16"]
                 [:li "Elysium, ul. Monte Cassino 5"]
                 [:li "Studium Dobrego Piwa, ul. Chopina 55"]
                 [:li "Chmiel - Świat Piwa, ul. Duńska 74"]
                 [:li "Elysium - filia,  ul. Łukasińskiego 13"]]]
               [:li.beer "Goleniów"
                [:ol
                 [:li "Chmiel do uwolnienia, ul. Tadeusza Kościuszki 10"]]]
               [:li.beer "Warszawa"
                [:ol
                 [:li "PIWOmaniak, ul. Al. Jana Pawła II 61"]
                 [:li "Piwonia - Piwa z duszą, ul. Belgradzka 48 lok. U3"]
                 [:li "Czarodziejka Gorzałka, ul. Kabacki Dukt 4/3"]
                 [:li "A może pifko, ul. Kabacki Dukt 8"]
                 [:li "Stacja Piwa, ul. Al. KEN 53 lok. U6"]
                 [:li "Stan Umysłu, ul. Żeromskiego 17c"]
                 [:li "Źródło Niebanalnych Piw i Alkoholi, ul. Towarowa 35"]
                 [:li "Świątynia Piwa, ul. Skoroszewska 26/U1"]
                 [:li "Chmiel i żyto, ul. Skoroszewska 5c lok. 5U"]]]
               [:li.beer "Poznań"
                [:ol
                 [:li "Piwa Świata, ul. Głogowska 115"]
                 [:li "Centrala piwna, ul. Mickiewicza 33 (wejście od Sienkiewicza)"]
                 [:li "Piwna Strefa, ul. Kościuszki 74"]]]
               [:li.beer "Trójmiasto"
                [:ol
                 [:li "Sklepzpiwem.pl, ul. Zbigniewa Burzyńskiego 9 Gdańsk"]
                 [:li "Bocian, ul. Grunwaldzka 130 Gdańsk"]
                 [:li "Alkostacja, ul. Wolności 4 Gdynia"]]]
               [:li.beer "Toruń"
                [:ol
                 [:li "ZygZak, ul. św. Ducha 15"]
                 [:li "Piwex, ul. Moniuszki 30"]]]
               [:li.beer "Garwolin"
                [:ol
                 [:li "Kapsel i Korkociąg, ul. Tadeusza Kościuszki 23"]]]]]]
          [:p.h5.pb-2 "Lista internetowych sklepów z książkami:"]
          [:ul.gifts-special
           [:li.book
            [:a {:href "http://www.aros.pl"} "www.aros.pl (najtaniej :))"]]
           [:li.book
            [:a {:href "http://www.empik.com/ksiazki"} "www.empik.com/ksiazki"]]
           [:li.book
            [:a {:href "http://www.taniaksiazka.pl"} "www.taniaksiazka.pl"]]
           ]
          [:p.pb-2]]]])}))





