(ns wesele-app.views.news
  (:require [wesele-app.views.navbar :refer [nav-bar]]))

(defn news-page []
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
         [:h1 "NEWS PAGE"]]]

       ]]]))
