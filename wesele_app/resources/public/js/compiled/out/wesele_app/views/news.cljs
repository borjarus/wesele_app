(ns wesele-app.views.news
  (:require [wesele-app.views.navbar :refer [nav-bar]]))

(defn news-page []
  (fn []
    [:div
     [nav-bar]
     [:div.container
      [:div.row
       [:div.col-md-12
        [:h1 "NEWS PAGE"]]]]]))
