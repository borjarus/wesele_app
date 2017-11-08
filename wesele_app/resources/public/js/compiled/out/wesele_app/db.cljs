(ns wesele-app.db)

(def default-db
  {:menu [
          {:title "Home" :href "#/" :id "navbar-1" :sname "home-page" :on-off 1}
          {:title "RSVP" :href "#/rsvp" :id "navbar-2" :sname "rsvp-page" :on-off 1}
          {:title "Kościół" :href "#/church" :id "navbar-3" :sname "church-page" :on-off 1}
          {:title "Sala weselna" :href "#/wedding-hall" :id "navbar-4" :sname "wedding-hall-page" :on-off 1}
          {:title "Galeria" :href "#/galeria" :id "navbar-5" :sname "gallery-page" :on-off 1}
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
   :user nil})