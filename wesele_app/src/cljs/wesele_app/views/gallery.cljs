(ns wesele-app.views.gallery
  (:require [wesele-app.views.navbar :refer [nav-bar]]
            [reagent.core :as r]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [cognitect.transit :as t]
            [re-frame.core :as rf]

            [re-frame.core :as re-frame])
  (:require-macros [cljs.core.async.macros :refer [go]]))


(declare single-image-obj)


(defn tag-ling-sample-generator [n]
  (for [n1 (range 1 (inc n))]
    (let [genx (name (gensym "tag"))]
      ^{:key genx} [:div.col-md-1
        [:a.badge.badge-pill.badge-primary {:href "#/galeria"
                            :on-click (fn [event]
                                        (do
                                          (set!(.-innerHTML (.getElementById js/document "wedding-gallery")) "")
                                          (.nanoGallery (js/jQuery "#wedding-gallery") "destroy")
                                          (re-frame/dispatch [:request-gallery (str "/gallery/tags/tag" n1)])
                                          (.preventDefault event)
                                          nil))
                            } (str "Tag" n1)]])))


(defn gallery-page []
    (r/create-class
     {:display-name "gallery"
      :reagent-render
      (fn []
        [:div
         [nav-bar]
       [:div.container
        [:div.row
           [:div.col-md-12
            [:h1 "GALLERY PAGE"]]]
        [:div.row
         (tag-ling-sample-generator 5)]
        [:div.row
         [:div.col-md-12
          [:div#wedding-gallery]
          ]]]])}))



(comment
(defn reset-app-by-tag [tag-name]
  (let [out (go
              (let [r (t/reader :json)
                    response (<! (http/get (str "/gallery/tags/" tag-name)
                                           {:with-credentials? false
                                            }))
                    resp (t/read r (:body response))
                    out (into [] (map #(single-image-obj (str (get % "path_src") (get % "filename")) (str (get % "path_src") (get % "filename")) "Title" "Bla Bla Bla") resp))]
                out))]
    (rf/dispatch [:img-items out])))
)




