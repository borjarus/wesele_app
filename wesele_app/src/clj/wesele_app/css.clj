(ns wesele-app.css
  (:require [garden.def :as d]
            [garden.core :as g]
            [garden.units :as u]
            [garden.selectors :as s]
            [garden.stylesheet :as stylesheet]))


;; color vars 
(def color-primary-0 "#DFDBE5")
(def color-primary-1 "#AA71A7")
(def color-primary-2 "#8D478A")
;(def color-primary-3 "#71266E")
  (def color-primary-3 "#AA9BC6")
(def color-primary-4 "#550E52")
(def color-primary-5 "#390036")
  (def color-dropshadow-1 "#8775aa")

;; new colors

(def color-body-bg "#DFDBE5")
  (def color-primary-n-0 "#AA9BC6")
  (def color-primary-n-1 "#F1EFF4")

  (def color-text-1 "#783276")

;; font-face styles 
(d/defstyles css
  (stylesheet/at-font-face {:font-family "'Courgette regular'"
                            :src "url('fonts/CourgetteRegular.ttf') format('truetype')"})

  (stylesheet/at-font-face {:font-family "'Didact Gothic regular'"
                            :src "url('fonts/DidactGothicRegular.ttf') format('truetype')"})

  (stylesheet/at-font-face {:font-family "wedding1"
                            :src "url('fonts/wedding-webfont.woff2') format('woff2'), url('fonts/wedding-webfont.woff') format('woff')"
                            :font-weight "normal"
                            :font-style "normal"})



;; body
[:body {:background-color color-body-bg
        ;; :background-image "url('../img/diagonal-lines.svg')"
        }]

;; h1 style
  [:h1 {:padding-bottom "0.6em"
        :padding-top "0.2em"
        :font-family "'Didact Gothic regular'"}]

[:.container_bg {:background #{"-moz-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(245,245,245,1) 51%, rgba(236,236,236,1) 100%)"
                                "-webkit-linear-gradient(top, rgba(255,255,255,0) 0%,rgba(245,245,245,1) 51%,rgba(236,236,236,1) 100%)"
                                "linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(245,245,245,1) 51%,rgba(236,236,236,1) 100%)"}
                  :filter "progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ececec',GradientType=0 )"}]


;; navbar style
[:.main-navbar
        {:background-color color-primary-3
         :font-family "'Courgette regular'"
         :font-size "20px"}
        [:a.navbar-brand
         [:span.menu-icon {:font-family "wedding1"
                           :font-size "1.5em"
                           :color "#AA71A7"}]]
        [:.nav-item.active
         [:a {:color color-primary-5}]
         [:a.nav-link {:color color-primary-1}
          [:&:hover :&:active {:color color-primary-5}]]]]

 [:.map-view-container {:height "500px"}]

 [:.wrapper {:margin-top "80px"
             :margin-bottom "20px"}]

;; forms styles

[:.form-signin {:max-width "420px"
                :padding "30px 38px 66px"
                :margin "0 auto"
                :background-color "#eee"
                :border "3px dotted rgba(0,0,0,0.1)"}]

[:.form-signin-heading {:text-align "center"
                        :margin-bottom "30px"}]

[:.form-control {:position "relative"
                 :font-size "16px"
                 :height "auto"
                 :padding "10px"}]


 [(s/input (s/attr= :type :text))
  {:margin-bottom "0px"
   :border-bottom-left-radius 0
   :border-bottom-right-radius 0}]

 [(s/input (s/attr= :type :password))
  {:margin-bottom "20px"
   :border-top-left-radius 0
   :border-top-right-radius 0}]

 [:.colorgraph
  {:height "7px"
   :border-top 0
   :background "#c4e17f"
   :border-radius "5px"
   :background-image #{"-webkit-linear-gradient(left, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4)"
                       "-moz-linear-gradient(left, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4)"

                       "-o-linear-gradient(left, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4)"
                       "linear-gradient(to right, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4)"
                       }}]

;;  header styles
  (def heder-grad-main-color "rgba(170, 155, 198,.9)")
 [:.header-top
  {:background #{"-moz-linear-gradient(top,  rgba(255,255,255,.9) 0%, rgba(255,255,255,.7) 70%, rgba(255,255,255,.25) 100%)"
                 "-webkit-linear-gradient(top,  rgba(255,255,255,.9) 0%,rgba(255,255,255,.7) 70%,rgba(255,255,255,.25) 100%)"
                 (str "linear-gradient(to top, " heder-grad-main-color " 0%,rgba(255,255,255,.7) 70%,rgba(255,255,255,.25) 100%)")}
   :height "195px"}
   [:.header-top-container
    {:font-family "'Courgette regular'"
     :font-size "3em"
     :color color-primary-1
     :text-align "center"
     :line-height "4em"}]
    [:img.bird {:width "80px"}]]

 [:.header-bottom
  {:height "20px" :background-image "url('../img/header-bottom.png')"
   :background-repeat "repeat-x"
   :background-position-y "-2px"}]

;; clock styles

 [:.clock
  {:width "160px"
   :height "140px"
   :position "relative"
   :display "inline-block"}
  [:svg
   {:width "100%"
    :height "100%"}
   [:path
    {:stroke-width "12px"
     :fill "#fff"
     :stroke color-primary-3}
    [:&.time-out
     {:fill "none"
      :stroke color-primary-3 }]]]]

;; content style
 [:.content
  {:position "absolute"
   :display "flex"
   :flex-direction "column"
   :justify-content "center"
   :align-items "center"
   :width "100px"
   :height "100px"
   :left "50%"
   :top "50%"
   :transform "translate(-50%, -50%)"
   :color color-primary-1}
  [:.seconds
   {:font-size "35px"
    :color color-primary-1
    :padding-right "7px"}]]


;; SEARCH PANEL
 [:.search-panel
  {:display "inline-block"
   :width "170px"}
  [:a:visited {:color "rgba(0,0,0,.5)"}
   [:i, :i:before {:color "rgba(0,0,0,.5)"}]]
  [:a:hover {:color "#000"}]
  [:i
   {:display "inline-block"
    :margin "0 5px"}]
  [:input
   {:display "inline-block"
    :width "105px"
    :padding "5px"}]]

;; MEDIA SCREEN STYLES
 (stylesheet/at-media
  {:screen :only :max-width (u/px 650)}
  [:.clock
   {:font-size "0.5em"
    :width "25vw"}
   [:svg {:display "none"}]]

  [:.header-bottom {:display "none"}]

  [:.header-top
   {:height "auto"}
   [:.header-top-container
    {:font-size "1.5em"}
    [:img.bird {:width "85%"}]]])


;; -- LOGIN STYLES --
 [:.form-login
  {:background color-primary-n-1
   :right "0px"
   :margin "0px auto"
   :margin-top "100px"
   :width "400px"
   :padding-bottom "20px"}]

 [:.header
  {:height "60px"
   :background color-primary-n-0
   :text-align "center"
   :font-size "18px"
   :font-weight "bold"
   :text-transform "uppercase"
   :color color-text-1}
   [:span
    {:padding-top "20px"
     :float "left"
     :text-align "center"
     :width "278px"}]]

 [:.link-head-left
  {:display "block"
   :float "left"
   :height "60px"
   :width "60px"
   :border-right "1px solid #232323"}]

 [:.link-head-right
  {:display "block"
   :float "right"
   :height "60px"
   :width "60px"
   :border-left "1px solid #232323"}]

 [:.avatar
  {:margin-top "25px"
   :text-align "center"}
  [:img
   {:width "180px"
    :height "180px"}]]

 [:.inputs
  {
	  :margin-top:10px;
	  :color:#4d4d4d;
   }
  [(s/input (s/attr= :type :text))
   {:width "360px"
    :height "45px"
    :background "#1b1b1b"
    :color "#ffffff"
    :font-size "16px"
    :margin-top "15px"
    :-webkit-border-radius "5px"
    :-moz-border-radius "5px"
    :border-radius "5px"
    :border 0
    :margin-left "20px"
    :padding "0px 10px"}]]



 [:.button-login
  [(s/input (s/attr= :type :button))
   {:width "360px"
    :height "55px"
    :margin-left "20px"
    :margin-top "25px"
    :font-size "18px"
    :font-weight "bold"
    :text-transform "uppercase"
    :outline "none"
    :position "relative"
    :cursor "pointer"
    :border-radius "5px"
    :color color-text-1
    :border 0
    :box-shadow
    (str "inset 0 1px " color-dropshadow-1 ","
          "inset 1px 0 " color-dropshadow-1 ","
          "inset -1px 0 " color-dropshadow-1 ","
          "inset 0 -1px " color-dropshadow-1 ","
          "0 2px " color-dropshadow-1 ","
          "0 3px " color-dropshadow-1 ","
          "0 4px 2px rgba(0,0,0,0.0)")
    :background color-primary-n-0}
    [:&:hover {:opacity "0.9"}]
    [:&:active
     {:top "3px"
      :background "#e84c3d"
      :box-shadow "inset 0 1px 2px #ba3c30"}]]]

  ;; GIFTS STYLES
  
  [:ul.gifts-special
   {:list-style "none"
    :padding 0}
   [:li {:font-weight "bold"}
    [:ol :li {:font-weight "normal"}]]]

  [(s/> :ul.gifts-special :li)  {:padding-left "2em"}
   [:&:before
    {:font-family "'FontAwesome'"
     :display "inline-block"
     :margin-left "-1.3em"
     :width "1.3em"}]
   [:&.beer:before {:content "'\\f0fc'"}]
   [:&.book:before {:content "'\\f02d'"}]
   ]

  ;; SPECIAL 1
  [:#special1_div
   {:height "500px"
    :overflow "auto"}]
  [:div#special1
   {:font-size "22px"}
   [:#heart_icon
    {:font-size "142px"
     :color "rebeccapurple"}]]

  ;; UPLOAD-FILE COMPONENT
  [:#upload_file
   {
    :width 0
    :height 0
    :visibility "hidden"
    }]

  )




