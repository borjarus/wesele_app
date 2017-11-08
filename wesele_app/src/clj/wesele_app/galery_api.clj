(ns wesele-app.galery-api
  (:require [monger.core :as mg]
            [monger.collection :as mc]
            [monger.operators :refer :all]
            [monger.query :refer :all]
            )
  (:import [org.bson.types ObjectId])
  )


(defn insert-to-gallery [db-conn name path th-src tags]
  (let [conn db-conn
        db   (mg/get-db conn "wesele-app")]
    (mc/insert db "gallery" { :_id (ObjectId.) :filename name :path_src path :path_thumb_src th-src :tags tags})
    ))

(defn random-tags [n]
  (into [] (map (fn [_]
         (str "tag" (rand-int 10))) (range n))))

(random-tags 5)

(defn generate-12-examples [db-conn]
  (for [i (range 12)]
    (let [rand1 (rand-int 5)
          rand2 (inc (rand-int 3))]
    (insert-to-gallery db-conn (str "00" rand2 ".png") "img/example/" "img/example/" (random-tags rand1))
    )))

(defn get-all-images [db-conn]
  (let [conn db-conn
        db   (mg/get-db conn "wesele-app")]
    (mc/find-maps db "gallery")
    ))



(defn gallery-pagination [db-conn n & [nmax]]
  (let [nmax (or nmax 10)
        conn db-conn
        db   (mg/get-db conn "wesele-app")
        coll "gallery"]
    (with-collection db coll
      (find {})
      (paginate :page n :per-page nmax)
      )))

(defn filter-by-tag [db-conn tag]
  (let [conn db-conn
        db   (mg/get-db conn "wesele-app")]
    (mc/find-maps db "gallery" { :tags tag })))
