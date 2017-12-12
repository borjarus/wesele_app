(ns wesele-app.utils.login
  (:require [cljs-time.format :refer [formatter unparse parse-local]]
            [cljs-time.core :refer [time-now in-seconds interval]]
            [cljs-time.coerce :refer [to-long]]
            goog.storage.Storage
            goog.storage.mechanism.HTML5LocalStorage
   ))

(defn get-login-type [type]
  (let [s (goog.storage.Storage. (goog.storage.mechanism.HTML5LocalStorage.))
        v (condp = type
            :time (.get s "login-exp")
            :user (.get s "login"))]
    (if-not (nil? v)
      v
      false)))

(defn remove-login-from-storage []
  (let [s (goog.storage.Storage. (goog.storage.mechanism.HTML5LocalStorage.))]
    (.remove s "login-exp")
    (.remove s "login")
    false))

(defn milis-to-sec [milis]
  (quot milis 1000))

(defn check-login-time []
  (if-let [lt (get-login-type :time)]
    (let [login-time (milis-to-sec (parse-local (formatter "yyyy-MM-dd HH:mm") lt))
          login-interval (- login-time (milis-to-sec (to-long (time-now))))]
      (if (neg? login-interval)
        (remove-login-from-storage)
        true))
    false))

;(remove-login-from-storage)
(let [user (get-login-type :user)
      clt (check-login-time)]
  [user clt])


