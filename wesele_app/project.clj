(defproject wesele-app "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.494" :scope "provided"]
                 [reagent-utils "0.2.0"]
                 [reagent "0.6.0"]
                 [re-frame "0.9.2"]
                 [secretary "1.2.3"]
                 [garden "1.3.2"]
                 [ns-tracker "0.3.0"]
                 [compojure "1.5.0"]
                 [yogthos/config "0.8"]
                 [org.clojure/tools.logging "0.3.1"]
                 [org.slf4j/slf4j-log4j12 "1.7.25"]
                 [log4j/log4j "1.2.17"]
                 [ring "1.4.0"]
                 [ring-webjars "0.1.1"]
                 [ring/ring-defaults "0.2.1"]
                 [ring/ring-json "0.4.0"]
                 [org.webjars.bower/fastclick "0.6.11"]
                 [org.webjars.npm/popper.js "1.12.5"]
                 [org.webjars/jquery "3.1.1"]
                 [org.webjars.bower/tether "1.3.7"]
                 [org.webjars/bootstrap "4.0.0-beta.2"]
                 [org.webjars.bower/leaflet "1.0.1"]
                 [org.webjars/font-awesome "4.7.0"]
                 [org.webjars.bower/switchery "0.8.1"]
                 [hiccup "1.0.5"]
                 [buddy/buddy-auth "1.2.0"]
                 [buddy/buddy-sign "1.2.0"]
                 [clj-time "0.12.2"]
                 [cljs-ajax "0.5.8"]
                 [digest "1.4.5"]
                 [cheshire "5.6.3"]
                 [org.clojure/data.json "0.2.6"] 
                 [com.novemberain/monger "3.1.0"]
                 [org.clojure/tools.nrepl "0.2.12"]
                 [cljs-http "0.1.42"]
                 [org.clojure/core.async "0.2.395"]
                 [com.cognitect/transit-cljs "0.8.239"]
                 [day8.re-frame/http-fx "0.1.3"]
                 [re-frisk "0.3.2"]
                 [adzerk/env "0.4.0"] 
                 [com.andrewmcveigh/cljs-time "0.5.0-alpha2"]
                 ]

  :plugins [[lein-cljsbuild "1.1.4"]
            [lein-garden "0.3.0"]]

  :min-lein-version "2.5.3"

  :local-repo "repo"

  :source-paths ["src/clj"]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"
                                    "test/js"]

  :figwheel {:css-dirs ["resources/public/css"]
             :ring-handler wesele-app.handler/dev-handler}

  :garden {:builds [{:id           "css"
                     :source-paths ["src/clj"]
                     :stylesheet   wesele-app.css/css
                     :compiler     {:output-to     "resources/public/css/main.css"
                                    :pretty-print? true}}]}

  :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]
                 :timeout 120000}

  :profiles
  {:dev
   {:dependencies [[binaryage/devtools "0.8.2"]
                   [figwheel-sidecar "0.5.7"]
                   [com.cemerick/piggieback "0.2.1"]]

    :plugins      [[lein-figwheel "0.5.7"]
                   [lein-doo "0.1.7"]
                   [cider/cider-nrepl "0.13.0"]]
    }}

  :cljsbuild
  {:builds
   [{:id           "dev"
     :source-paths ["src/cljs"]
     :figwheel     {:on-jsload "wesele-app.core/mount-root"}
     :compiler     {:main                 wesele-app.core
                    :output-to            "resources/public/js/compiled/app.js"
                    :output-dir           "resources/public/js/compiled/out"
                    :asset-path           "js/compiled/out"
                    :source-map-timestamp true
                    :preloads             [devtools.preload]
                    :external-config      {:devtools/config {:features-to-install :all}}
                    }}
    {:id           "prod"
     :source-paths ["src/cljs"]
     :compiler     {:main                 wesele-app.core
                    :output-to            "resources/public/js/compiled/app.js"
                    :asset-path           "js/compiled/out"
                    :source-map-timestamp true
                    :optimizations :simple
                    }}
    ]}

  :main wesele-app.server

  :aot [wesele-app.server]

  :uberjar-name "wesele_app.jar"

  ;:prep-tasks [["cljsbuild" "once" "min"]["garden" "once"] "compile"]
  ;:prep-tasks [["cljsbuild" "once" "min"] "compile"]
  )
