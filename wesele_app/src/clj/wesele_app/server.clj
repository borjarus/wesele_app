(ns wesele-app.server
  (:require [wesele-app.handler :refer [handler]]
            [config.core :refer [env]]
            [ring.adapter.jetty :refer [run-jetty]]
            [clojure.tools.logging :as log]
            [clojure.tools.nrepl.server :refer (start-server stop-server)])
  (:gen-class))

;(def nrepl-server (do
;                        (println "nREPL start at port 7888")
 ;                       (start-server :port 7888)))
 (defn -main [& args]
   (let [port (Integer/parseInt (or (env :port) "10535"))]
     (println "[P] Service is running!")
     (log/info "[INFO] Service is running!")
     ;;nrepl-server
     (run-jetty handler {:port port :join? false})))
