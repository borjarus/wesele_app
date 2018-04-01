(ns wesele-app.views.accomodations
  (:require [wesele-app.views.navbar :refer [nav-bar]]
            [reagent.core :as r]
            [re-frame.core :as rf]
            [re-frame.core :as re-frame])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn accomodations-page []
    (r/create-class
     {:display-name "accomodations"
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
              [:p.h5.pb-2 "Blisko Sali weselnej:"]
              [:ul
               [:li 
                [:a {:href "http://www.pensjonatpodlipami.pl/" :target "_blank"} 
                 "Pensjonat pod Lipami (najbliżej)" [:i.fa.fa-chevron-right.arrow_link.class]]]
               [:li
                "Zacisze Brzozowe – Mierzyn " [:i.fa.fa-chevron-right.arrow_link.class]]
               [:li
                [:a {:href "http://zajazdpodlipami.com/" :target "_blank"}
                 "Zajazd pod Lipami – Wołczkowo " [:i.fa.fa-chevron-right.arrow_link.class]]]
               [:li
                [:a {:href "http://www.hotel-julian.com.pl/" :target "_blank"}
                 "Hotel Julian - Mierzyn " [:i.fa.fa-chevron-right.arrow_link.class]]]
               [:li
                [:a {:href "https://meteor-turystyka.pl/ewa-wolczkowo,wolczkowo.html" :target "_blank"}
                 "Pokoje Gościnne na Słonecznej – Wołczkowo " [:i.fa.fa-chevron-right.arrow_link.class]]]
               [:li
                [:a {:href "http://www.hotelsens.pl/" :target "_blank"}
                 "Hotel Sens – Lubieszyn " [:i.fa.fa-chevron-right.arrow_link.class]]]
               [:li
                [:a {:href "https://www.booking.com/hotel/pl/apartamenty-przygodna-park.pl.html" :target "_blank"}
                 "Apartamenty Przygodna Park " [:i.fa.fa-chevron-right.arrow_link.class]]]
               [:li
                "Eskulap – Szczecin " [:i.fa.fa-chevron-right.arrow_link.class]]
               [:li
                [:a {:href "http://szwejk-szczecin.pl/" :target "_blank"}
                 "Hostel Szwejk – Szczecin " [:i.fa.fa-chevron-right.arrow_link.class]]]
               [:li
                [:a {:href "http://www.hotele-tur.com.pl/0cpoe_informacje_o_hotelu_jatnar_w_szczecine.htm" :target "_blank"}
                 "Hotel Jantar - Szczecin " [:i.fa.fa-chevron-right.arrow_link.class]]]
               ]
              [:p.h5.pb-2 "Blisko Kościoła (centrum Szczecina):"]
              [:ul
               [:li
                [:a {:href "https://www.accorhotels.com/pl/hotel-3367-novotel-szczecin-centrum/index.shtml" :target "_blank"}
                 "Novotel " [:i.fa.fa-chevron-right.arrow_link.class]]]
               [:li
                [:a {:href "https://www.campanile.com/pl/hotels/campanile-szczecin" :target "_blank"}
                 "Campanile " [:i.fa.fa-chevron-right.arrow_link.class]]]
               [:li
                [:a {:href "http://www.hotelewam.pl/633-hotel-rycerski-szczecin.html" :target "_blank"}
                 "Hotel Rycerski " [:i.fa.fa-chevron-right.arrow_link.class]]]
               [:li
                [:a {:href "http://www.elkasen.szczecin.pl/" :target "_blank"}
                 "Hotelik Elka-Sen " [:i.fa.fa-chevron-right.arrow_link.class]]]
               [:li
                [:a {:href "https://www.accorhotels.com/pl/hotel-3428-ibis-budget-szczecin/index.shtml" :target "_blank"}
                 "Ibis Budget " [:i.fa.fa-chevron-right.arrow_link.class]]]
               [:li
                [:a {:href "http://www.hotelewam.pl/632-hotel-kapitan-szczecin.html" :target "_blank"}
                 "Hotel Kapitan " [:i.fa.fa-chevron-right.arrow_link.class]]]]
              ]]]]])}))
               
          





