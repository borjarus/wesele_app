(ns wesele-app.views.wedding-hall
  (:require [wesele-app.views.navbar :refer [nav-bar]]
            [reagent.core :as r]))

(defn map-view []
  (fn []
    [:div#map1.map-view-container]))

(defn wedding-hall-page []
  (r/create-class
   {:component-did-mount
    (fn []
      (let [map (.map js/L "map1")
            ;;osm-link "http://www.openstreetmap.org/#map=17/53.42700/14.54861"
            osm-link "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            osm-attr "Map data © <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors';"]
        (.setView map #js [53.42156 14.37590] 17)
        (-> js/L
            (.tileLayer osm-link #js {:attribution osm-attr :maxZoom 18})
            (.addTo map))
        (-> js/L
            (.marker #js [53.42156 14.37590])
            (.addTo map)
            (.bindPopup (str "<address><b>LILA PARK</b><br>"
                             "Kościno 1A<br>72-002, Dołuje"
                             "</address>"))
            (.openPopup))
        ))
    :display-name "church page"
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
          [:p.lead.text-center "Po uroczystości będziemy bawić się i radować wspólnie w pięknej sali weselnej Lila Park w Kościnie,
znajdującej się 15 km od centrum Szczecina."]
[:p.lead.text-center "Mili goście, na poniższej mapie znajduje się lokalizacja sali, abyście szybko i bez trudu dotarli na wesele."]]]
        [:div.row
         [:p ""]]
        [:div.row
         [:div.col-md-8.offset-md-2 [map-view]]]]]]
      )}))
