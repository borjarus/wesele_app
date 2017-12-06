(ns wesele-app.handler
  (:require [compojure.core :refer [ANY GET PUT POST DELETE defroutes]]
            [compojure.route :refer [resources not-found]]
            [ring.util.response :refer [resource-response]]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.middleware.webjars :refer [wrap-webjars]]
            [ring.middleware.json :refer [wrap-json-response wrap-json-body]]
            [hiccup.page :refer [html5 include-js include-css]]
            [hiccup.core :as h]
            [clj-time.core :as time]
            [clj-time.local :as l]
            [clj-time.format :as f]
            [clj-time.coerce :as c]
            [buddy.sign.jwt :as jwt]
            [buddy.auth :refer [authenticated? throw-unauthorized]]
            [buddy.auth.backends.token :refer [jws-backend]]
            [buddy.auth.middleware :refer [wrap-authentication wrap-authorization]]
            [ring.middleware.params :refer [wrap-params]]
            [monger.core :as mg]
            [monger.collection :as mc]
            [monger.operators :refer :all]
            clojure.data.json
            [clojure.tools.logging :as log]
            monger.json
            [wesele-app.galery-api :refer [get-all-images gallery-pagination filter-by-tag]]
            [monger.credentials :as mcred] 
            )
  (:import [org.bson.types ObjectId]
           [com.mongodb DB WriteConcern])
  )

(def secret "mysupersecret")

(comment 
(defonce db-conn
  (try
    (let [host (if (nil? (System/getenv "WESELE_MONGO_PORT_27017_TCP_ADDR"))
                 "127.0.0.1"
                 (System/getenv "WESELE_MONGO_PORT_27017_TCP_ADDR"))
          port (if (nil? (System/getenv "WESELE_MONGO_PORT_27017_TCP_PORT"))
                 "27017"
                 (System/getenv "WESELE_MONGO_PORT_27017_TCP_PORT"))]
      (println (str host " -- " port))
      (mg/connect {:host host :port (Integer/parseInt port)}))
    (catch Exception e (println (str "[DB-ERROR] " (.getMessage e))))))
  )



(defonce db-conn
  (try
    (let [host "mongo"
          port "27017"
          db "wesele-app"
          user "wesele-mila"
          password (slurp "config/wesele-mongo")]
      ;;(println (str host " -- " port))
      (mg/connect-with-credentials host (Integer/parseInt port) (mcred/create user db password)))
    (catch Exception e (println (str "[DB-ERROR] " (.getMessage e))))))

;;db-conn
;(get-all-images db-conn)
;

(defn ok [d] {:status 200 :body d})
(defn bad-request [d] {:status 400 :body d})

(def authdata (atom {}))

(defn error-page []
  (html5
   [:div "ERROR 404"]))


(defn home-page []
  (html5
   [:head
    [:title "Wesele APP"]
    (include-css "/assets/bootstrap/css/bootstrap.min.css"
                "/assets/leaflet/dist/leaflet.css"
                "/assets/switchery/dist/switchery.min.css"
                "/assets/font-awesome/css/font-awesome.min.css"
                "css/themes/light/nanogallery_light.min.css"
                "css/nanogallery.min.css"
                "css/wedding-icons.min.css"
                "css/additional.css"
                "css/main.css"
                )]
   [:body.diagonal-line-bg
    [:div {:id "app"} ""]
    (include-js "/assets/jquery/jquery.min.js"
                "js/jquery.nanogallery.min.js"
                "js/jquery.easypiechart.min.js"
                "/assets/tether/dist/js/tether.min.js"
                "/assets/popper.js/dist/umd/popper.min.js"
                "/assets/switchery/dist/switchery.min.js"
                "/assets/bootstrap/js/bootstrap.min.js"
                "/assets/leaflet/dist/leaflet.js"
                "js/compiled/app.js")]
   [:script {:type "text/javascript"} "wesele_app.core.init();"]
    ))


(defn check-user-valid? [name password]
  (let [conn db-conn
        db   (mg/get-db conn "wesele-app")
        coll "users"]
    (mc/any? db coll {:login name :password password})))

;(check-user-valid? "admin" "test123")

(defn get-user [login]
  (let [conn db-conn
        db   (mg/get-db conn "wesele-app")
        coll "users"]
    (mc/find-maps db coll { :login login })))


(defn user-structure [uname]
  (let [m (dissoc (first (get-user uname)) :_id :password)]
    {:token (:token m)
     :login (:login m)
     :exp (:exp m)
     :details m}))


(defn insert-user [name password]
  (let [conn db-conn
        db   (mg/get-db conn "wesele-app")]
      (mc/insert db "users" { :_id (ObjectId.) :login name :password password})
    ))

;(insert-user "admin" "test123")
;(insert-user "user" "bez_hasla")
;(insert-user "test" "test")

(defn update-token-in-user [name token exp]
  (let [conn db-conn
        db   (mg/get-db conn "wesele-app")
        coll "users"]
    (mc/update db coll {:login name} {$set {:token token :exp exp}})
    ))

(defn logout-user-db [name]
  (let [conn db-conn
        db   (mg/get-db conn "wesele-app")
        coll "users"]
    (print name)
    (mc/update db coll {:login name} {$unset {:token "" :exp ""}})
    ))

                                        ;(update-token-in-user "admin" "xxxx" 34354543)

(defn login
  [request]
  (let [username (get-in request [:body :username])
        password (get-in request [:body :password])
        valid? (check-user-valid? username password)]
    (if valid?
      (let [claims {:user (keyword username)
                    :exp (time/plus (l/local-now) (time/hours 1))}
            token (jwt/sign claims secret {:alg :hs512})
            exp (f/unparse-local (f/formatter "YYYY-MM-dd HH:mm")
                           (c/to-local-date-time (:exp claims)))
            details (get-user username)]
        (update-token-in-user username token exp)
        (ok (user-structure username)))
      (bad-request {:message "wrong auth data"}))))

(defn get-user-structure [request]
  (let [username request]
    (println request)
    (if-not (nil? username)
        (ok (user-structure username))
        (bad-request {:message "problem with logout"}))))

(defn logout [request]
  (let [username (get-in request [:body :username])]
    (if-not (nil? username)
      (do (logout-user-db username)
          (ok {:message "OK"}))
          (bad-request {:message "problem with get user structure"}))))


;; RSVP
(defn do-rsvp [name answer type]
  (let [conn db-conn
        db   (mg/get-db conn "wesele-app")
        coll "users"
        set-map (condp = type
                      "rsvp1" {:rsvp1 answer}
                      "rsvp2" {:rsvp2 answer})]
    (println set-map)
    (mc/update db coll {:login name} {$set set-map})))

(defn rsvp [request]
  (let [login (get-in request [:body :login])
        answer (get-in request [:body :answer])
        type (get-in request [:body :type])]
    (do
      (do-rsvp login answer type)
      (ok {:message "OK" :answer answer :type type}))))


(defroutes routes
  ;(GET "/" [] {:status 200 :body (home-page)})
  (GET "/" [] (home-page))
  (POST "/login" req (login req))
  (POST "/logout" req (logout req))
  (POST "/rsvp" req (rsvp req))
  (GET "/user/:login" [login] (get-user-structure login))
  (GET "/gallery/tags/:tag" [tag] (filter-by-tag db-conn tag))
  (GET "/gallery/:id{[0-9]+}" [id] (let [id (Integer/parseInt id)]
                                       (gallery-pagination db-conn id 5))) 
  (resources "/")
  (not-found (error-page)))

(def auth-backend (jws-backend {:secret secret :options {:alg :hs512}}))

(def dev-handler (-> routes
                     ;;(wrap-authorization auth-backend)
                     ;;(wrap-authentication auth-backend)
                     ;(wrap-params)
                     wrap-reload
                     (wrap-json-response {:pretty false})
                     (wrap-json-body {:keywords? true :bigdecimals? true})
                     wrap-webjars))
(def handler (-> routes
                 (wrap-json-response {:pretty false})
                 (wrap-json-body {:keywords? true :bigdecimals? true})
                 wrap-reload
                 wrap-webjars))

;(def handler routes)
