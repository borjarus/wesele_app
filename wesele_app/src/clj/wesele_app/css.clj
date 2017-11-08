(ns wesele-app.css
  (:require [garden.def :refer [defstyles]]
            [garden.core :refer [css]]))


(def color-primary-0 "#ffffff")
(def color-primary-1 "#AA71A7")
(def color-primary-2 "#8D478A")
(def color-primary-3 "#71266E")
(def color-primary-4 "#550E52")
(def color-primary-5 "#390036")

(defstyles style
  [:body {:background-color color-primary-0}]
  [:h1 {:text-decoration "underline" }]

(css
  [:.main-navbar {:background-color color-primary-3}
   [:a.navbar-brand {:color color-primary-5}
    [:.nav-item.active
     [:a {:color color-primary-5}]
     [:a.nav-link {:color color-primary-1}
      [:&:hover, :&:active {:color color-primary-5}]]]]]
  )

)

p
.main-navbar {\n  background-color: #71266E;\n}\n\n
              .main-navbar a.navbar-brand {\n  color: #390036;\n}\n\n
                                           .main-navbar a.navbar-brand .nav-item.active a {\n  color: #390036;\n}\n\n.main-navbar a.navbar-brand .nav-item.active a.nav-link {\n  color: #AA71A7;\n}\n\n.main-navbar a.navbar-brand .nav-item.active a.nav-link:hover, .main-navbar a.navbar-brand .nav-item.active a.nav-link:active {\n  color: #390036;\n}


.map-view-container{
    height: 500px; 
}

.wrapper {    
	margin-top: 80px;
	margin-bottom: 20px;
}

.form-signin {
  max-width: 420px;
  padding: 30px 38px 66px;
  margin: 0 auto;
  background-color: #eee;
  border: 3px dotted rgba(0,0,0,0.1);  
  }

.form-signin-heading {
  text-align:center;
  margin-bottom: 30px;
}

.form-control {
  position: relative;
  font-size: 16px;
  height: auto;
  padding: 10px;
}

input[type="text"] {
  margin-bottom: 0px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

input[type="password"] {
  margin-bottom: 20px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.colorgraph {
  height: 7px;
  border-top: 0;
  background: #c4e17f;
  border-radius: 5px;
  background-image: -webkit-linear-gradient(left, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4);
  background-image: -moz-linear-gradient(left, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4);
  background-image: -o-linear-gradient(left, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4);
  background-image: linear-gradient(to right, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4);
}



