(ns wesele-app.views.church
  (:require [wesele-app.views.navbar :refer [nav-bar]]
            [reagent.core :as r]))

(defn map-view []
  (fn []
    [:div#map1.map-view-container]))

(defn church-page []
  (r/create-class
   {:component-did-mount
    (fn []
      (let [map (.map js/L "map1")
            ;;osm-link "http://www.openstreetmap.org/#map=18/53.42700/14.54861"
            osm-link "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            osm-attr "Map data © <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors';"]
        (.setView map #js [53.42713 14.54928] 17)
        (-> js/L
            (.tileLayer osm-link #js {:attribution osm-attr :maxZoom 18})
            (.addTo map))
        (-> js/L
            (.marker #js [53.42713 14.54928])
            (.addTo map)
            (.bindPopup (str "<address><b>Parafia Rzymskokatolicka<br>św. Jana Chrzciciela</b><br>"
                             "Bogurodzicy 3A,<br>70-001 Szczecin"
                             "</address>"))
            (.openPopup))
        ))
    :display-name "church page"
    :reagent-render
    (fn []
      [:div
       [nav-bar]
       [:div.container.container_bg
        [:div.row
         [:div.col-md-12
          [:p.pt-4 ""]]]
        [:div.row
         [:div.col-md-12
          [:p.lead.text-center "Uroczystość zawarcia Sakramentu Małżeństwa, odbędzie się dnia 18 sierpnia 2018 roku o godzinie
17.00 w Bazylice pw. św. Jana Chrzciciela przy ul. Bogurodzicy w Szczecinie."]
          [:p.lead.text-center "Drodzy goście, na poniższej mapie znajduje się lokalizacja Bazyliki, abyście mogli do nas bez problemu dotrzeć."]]]
        [:div.row
         [:p ""]]
        [:div.row
         [:div.col-md-8.offset-md-2 [map-view]]]]]
      )}))
