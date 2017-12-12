(ns wesele-app.core
    (:require [reagent.core :as reagent]
              [re-frame.core :as re-frame]
              [wesele-app.events]
              [wesele-app.subs]
              [wesele-app.routes :as routes]
              [wesele-app.views :as views]
              [wesele-app.config :as config]
              [re-frisk.core :refer [enable-re-frisk!]]))

(defn scroll-event []
  (.scroll (js/jQuery js/window)
          (fn []
            (let [st (.scrollTop (js/jQuery js/document))]
              (if (> st 195)
                (.addClass (js/jQuery ".navbar.main-navbar") "fixed-top"))
              (if (< st 170)
                (.removeClass (js/jQuery ".navbar.main-navbar") "fixed-top"))))))

(defn dev-setup []
  (when config/debug?
    (enable-console-print!)
    (enable-re-frisk!)
    (println "dev mode")))

(defn mount-root []
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn ^:export init []
  (routes/app-routes)
  (re-frame/dispatch-sync [:initialize-db])
  (dev-setup)
  (scroll-event)
  (wesele-app.events/check-user)
  (mount-root))
