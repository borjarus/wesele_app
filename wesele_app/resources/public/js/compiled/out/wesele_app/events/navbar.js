// Compiled by ClojureScript 1.9.494 {}
goog.provide('wesele_app.events.navbar');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('day8.re_frame.http_fx');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"request-login","request-login",-1181366312),(function (p__46940,p__46941){
var map__46942 = p__46940;
var map__46942__$1 = ((((!((map__46942 == null)))?((((map__46942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46942.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46942):map__46942);
var db = cljs.core.get.call(null,map__46942__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__46943 = p__46941;
var _ = cljs.core.nth.call(null,vec__46943,(0),null);
var data = cljs.core.nth.call(null,vec__46943,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"/login",new cljs.core.Keyword(null,"params","params",710516235),data,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login-response","login-response",844783698)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-response","bad-response",1911422950)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"request-logout","request-logout",371025838),(function (p__46947,p__46948){
var map__46949 = p__46947;
var map__46949__$1 = ((((!((map__46949 == null)))?((((map__46949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46949.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46949):map__46949);
var db = cljs.core.get.call(null,map__46949__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__46950 = p__46948;
var _ = cljs.core.nth.call(null,vec__46950,(0),null);
var data = cljs.core.nth.call(null,vec__46950,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"/logout",new cljs.core.Keyword(null,"params","params",710516235),data,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"logout-response","logout-response",1914098858)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-response","bad-response",1911422950)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"request-user-data","request-user-data",-997363435),(function (p__46954,p__46955){
var map__46956 = p__46954;
var map__46956__$1 = ((((!((map__46956 == null)))?((((map__46956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46956.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46956):map__46956);
var db = cljs.core.get.call(null,map__46956__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__46957 = p__46955;
var _ = cljs.core.nth.call(null,vec__46957,(0),null);
var data = cljs.core.nth.call(null,vec__46957,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("/user/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)].join(''),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login-response","login-response",844783698)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-response","bad-response",1911422950)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"login-response","login-response",844783698),(function (p__46961,p__46962){
var map__46963 = p__46961;
var map__46963__$1 = ((((!((map__46963 == null)))?((((map__46963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46963.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46963):map__46963);
var db = cljs.core.get.call(null,map__46963__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__46964 = p__46962;
var _ = cljs.core.nth.call(null,vec__46964,(0),null);
var response = cljs.core.nth.call(null,vec__46964,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356)], null),response),new cljs.core.Keyword(null,"adduser-to-localstorage","adduser-to-localstorage",1002781956),response,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-page","home-page",1804156194)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"logout-response","logout-response",1914098858),(function (p__46968,_){
var map__46969 = p__46968;
var map__46969__$1 = ((((!((map__46969 == null)))?((((map__46969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46969.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46969):map__46969);
var db = cljs.core.get.call(null,map__46969__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356)], null),null),new cljs.core.Keyword(null,"removeuser-from-localstorage","removeuser-from-localstorage",264849682),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-page","login-page",2028706789)], null)], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"adduser-to-localstorage","adduser-to-localstorage",1002781956),(function (data){
var map__46971 = data;
var map__46971__$1 = ((((!((map__46971 == null)))?((((map__46971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46971.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46971):map__46971);
var login = cljs.core.get.call(null,map__46971__$1,new cljs.core.Keyword(null,"login","login",55217519));
var exp = cljs.core.get.call(null,map__46971__$1,new cljs.core.Keyword(null,"exp","exp",-261706262));
var s = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
s.set("login",login);

return s.set("login-exp",exp);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"removeuser-from-localstorage","removeuser-from-localstorage",264849682),(function (){
var s = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
s.remove("login");

return s.remove("login-exp");
}));

//# sourceMappingURL=navbar.js.map?rel=1495352509946