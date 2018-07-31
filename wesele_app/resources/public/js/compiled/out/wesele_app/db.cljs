(ns wesele-app.db)

(def default-db
  {:menu [
          {:title "Home" :href "#/" :id "navbar-1" :sname "home-page" :on-off 1}
          {:title "RSVP" :href "#/rsvp" :id "navbar-2" :sname "rsvp-page" :on-off 0}
          {:title "Aktualności" :href "#/news" :id "navbar-2" :sname "news-page" :on-off 0}
          {:title "Kościół" :href "#/church" :id "navbar-3" :sname "church-page" :on-off 1}
          {:title "Sala weselna" :href "#/wedding-hall" :id "navbar-4" :sname "wedding-hall-page" :on-off 1}
          {:title "Galeria" :href "#/galeria" :id "navbar-5" :sname "gallery-page" :on-off 1}
          {:title "Noclegi" :href "#/accomodations" :id "navbar-7" :sname "accomodations-page" :on-off 1}
          {:title "Skąd prezent zamiast kwiatów?" :href "#/gifts" :id "navbar-6" :sname "gifts-page" :on-off 1}
          ]
   :gallery {:thumbnailWidth "auto"
             :thumbnailHeight 200
             :colorScheme "none"
             :thumbnailHoverEffect
             [{:name "labelAppear75"
               :duration 300}]
             :theme "light"
             :thumbnailGutterWidth 0
             :thumbnailGutterHeight 0
             :i18n {:thumbnailImageDescription "Zobacz"
                    :thumbnailAlbumDescription "Otwórz"}
             :thumbnailLabel {:display true
                              :position "overImageOnMiddle"
                              :align "center"}
             :items nil}
   :wedding-counter []
   :user nil
   :pre-gallery 1
   :dropbox-api-key "JPL-j9Iw1DAAAAAAAAAACPjLZDgxjrZp5-kHQjPL7I2m67_wOSYAZ-06vDXPSmhZ"
   :flickr-key "8cf8229832e3162896662389aef3fba2"
   :imgur-key "aead0b343314366"})
