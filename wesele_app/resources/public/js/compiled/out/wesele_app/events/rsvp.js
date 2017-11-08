// Compiled by ClojureScript 1.9.494 {}
goog.provide('wesele_app.events.rsvp');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('day8.re_frame.http_fx');
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"process-rsvp","process-rsvp",392823672),(function (p__51326,p__51327){
var map__51328 = p__51326;
var map__51328__$1 = ((((!((map__51328 == null)))?((((map__51328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51328.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51328):map__51328);
var db = cljs.core.get.call(null,map__51328__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51329 = p__51327;
var _ = cljs.core.nth.call(null,vec__51329,(0),null);
var data = cljs.core.nth.call(null,vec__51329,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"/rsvp",new cljs.core.Keyword(null,"params","params",710516235),data,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rsvp-response","rsvp-response",1487179431)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-response","bad-response",1911422950)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"rsvp-response","rsvp-response",1487179431),(function (p__51333,p__51334){
var map__51335 = p__51333;
var map__51335__$1 = ((((!((map__51335 == null)))?((((map__51335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51335.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51335):map__51335);
var db = cljs.core.get.call(null,map__51335__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51336 = p__51334;
var _ = cljs.core.nth.call(null,vec__51336,(0),null);
var response = cljs.core.nth.call(null,vec__51336,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"details","details",1956795411),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response))], null),new cljs.core.Keyword(null,"answer","answer",-742633163).cljs$core$IFn$_invoke$arity$1(response))], null);
}));

//# sourceMappingURL=rsvp.js.map?rel=1495132063463