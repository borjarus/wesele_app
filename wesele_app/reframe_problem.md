 In my opinion when I declare (re-frame/subsciption
[:sth]) always when data change in app-db also it should change in place when
I put my subscription.
In my code I insert subscription in rsvp-page function

```clojure
(defn rsvp-page []
  (fn []
    (let [user (re-frame/subscribe [:get-user])
          r (re-frame/subscribe [:get-rsvp])]
      [:div
       [nav-bar]
       [:div.container
        [:div.row
         [:div.col-md-12
          [:h1 "RSVP PAGE"]]
         ]
        [:div.row
         [:div.col-md-10.offset-md-1
          [:blockquote.blockquote.text-justify "Aenean libero enim, semper id neque sit amet, luctus varius purus. Suspendisse ultricies porta elementum. Vestibulum iaculis mattis turpis, vitae condimentum justo vehicula eu."]]]
        [:div.row
         [:div.col-md-12.text-center
          [ios-swichery "RSVP1" r]
          [ios-swichery "RSVP2" r]
          ]]
        ]])))

(defn ios-swichery [n val]
  (r/create-class
    {:component-did-mount #(switchery-change val n)
    :display-name "ios-swichery"
    :reagent-render
    (fn []
      ^{:key n} [:input.js-switch {:type "checkbox" :value (if (nil? @val) 0 @val) :id n}])
    }))
```

And this is my event handlers and subs :

```clojure
(re-frame/reg-event-fx
 :process-rsvp
 (fn
   [{:keys [db]} [_ data]]
   {:http-xhrio {:method :post
                 :uri "/rsvp"
                 :params data
                 :format          (ajax/json-request-format)
                 :response-format (ajax/json-response-format {:keywords? true})  
                 :on-success [:rsvp-response]
                 :on-failure [:bad-response]}
    :db  (assoc db :loading? true)}))

(re-frame/reg-event-fx
 :rsvp-response
 (fn
   [{:keys [db]} [_ response]]
   {:db (-> db
            (assoc :loading? false)  
            (assoc-in [:user :details :rsvp] (:answer response)))
    }))
 
 (re-frame/reg-sub
   :get-rsvp
   (fn [db _]
   (get-in db [:user :details :rsvp])))
```

When :process-rsvp is dispatched and ajax return data [:user :details :rsvp] 
was changenged in app-db but in place when 
I put my subscription it wasn't change that I think it  supposed do.
