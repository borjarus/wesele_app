// Compiled by ClojureScript 1.9.494 {}
goog.provide('wesele_app.events.index');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('cljs_time.core');
wesele_app.events.index.quot_rem = (function wesele_app$events$index$quot_rem(a,b){
var x = cljs.core.rem.call(null,a,b);
var y = cljs.core.quot.call(null,a,b);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null);
});
wesele_app.events.index.wedding_countdown = (function wesele_app$events$index$wedding_countdown(s){
var vec__38784 = wesele_app.events.index.quot_rem.call(null,s,(60));
var m = cljs.core.nth.call(null,vec__38784,(0),null);
var seconds = cljs.core.nth.call(null,vec__38784,(1),null);
var vec__38787 = wesele_app.events.index.quot_rem.call(null,m,(60));
var h = cljs.core.nth.call(null,vec__38787,(0),null);
var minutes = cljs.core.nth.call(null,vec__38787,(1),null);
var vec__38790 = wesele_app.events.index.quot_rem.call(null,h,(24));
var days = cljs.core.nth.call(null,vec__38790,(0),null);
var hours = cljs.core.nth.call(null,vec__38790,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [days,hours,minutes,seconds], null);
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-wedding-counter","set-wedding-counter",894595243),(function (db,_){
var now = cljs_time.core.in_seconds.call(null,cljs_time.core.interval.call(null,cljs_time.core.date_time.call(null,cljs_time.core.now.call(null)),cljs_time.core.local_date_time.call(null,(2018),(8),(18),(17),(0))));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"wedding-counter","wedding-counter",-545242594),wesele_app.events.index.wedding_countdown.call(null,now));
}));

//# sourceMappingURL=index.js.map?rel=1526470064677