// Compiled by ClojureScript 1.9.494 {}
goog.provide('wesele_app.events.rsvp');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('day8.re_frame.http_fx');
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"process-rsvp","process-rsvp",392823672),(function (p__17727,p__17728){
var map__17729 = p__17727;
var map__17729__$1 = ((((!((map__17729 == null)))?((((map__17729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17729.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17729):map__17729);
var db = cljs.core.get.call(null,map__17729__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__17730 = p__17728;
var _ = cljs.core.nth.call(null,vec__17730,(0),null);
var data = cljs.core.nth.call(null,vec__17730,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"/rsvp",new cljs.core.Keyword(null,"params","params",710516235),data,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rsvp-response","rsvp-response",1487179431)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-response","bad-response",1911422950)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"rsvp-response","rsvp-response",1487179431),(function (p__17734,p__17735){
var map__17736 = p__17734;
var map__17736__$1 = ((((!((map__17736 == null)))?((((map__17736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17736.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17736):map__17736);
var db = cljs.core.get.call(null,map__17736__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__17737 = p__17735;
var _ = cljs.core.nth.call(null,vec__17737,(0),null);
var response = cljs.core.nth.call(null,vec__17737,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"details","details",1956795411),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response))], null),new cljs.core.Keyword(null,"answer","answer",-742633163).cljs$core$IFn$_invoke$arity$1(response))], null);
}));

//# sourceMappingURL=rsvp.js.map?rel=1513114954539