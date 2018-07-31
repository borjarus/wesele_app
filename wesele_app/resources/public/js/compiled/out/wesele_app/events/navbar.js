// Compiled by ClojureScript 1.9.494 {}
goog.provide('wesele_app.events.navbar');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('day8.re_frame.http_fx');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"request-login","request-login",-1181366312),(function (p__44867,p__44868){
var map__44869 = p__44867;
var map__44869__$1 = ((((!((map__44869 == null)))?((((map__44869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44869.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44869):map__44869);
var db = cljs.core.get.call(null,map__44869__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44870 = p__44868;
var _ = cljs.core.nth.call(null,vec__44870,(0),null);
var data = cljs.core.nth.call(null,vec__44870,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"/login",new cljs.core.Keyword(null,"params","params",710516235),data,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login-response","login-response",844783698)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-response","bad-response",1911422950)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"request-logout","request-logout",371025838),(function (p__44874,p__44875){
var map__44876 = p__44874;
var map__44876__$1 = ((((!((map__44876 == null)))?((((map__44876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44876.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44876):map__44876);
var db = cljs.core.get.call(null,map__44876__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44877 = p__44875;
var _ = cljs.core.nth.call(null,vec__44877,(0),null);
var data = cljs.core.nth.call(null,vec__44877,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"/logout",new cljs.core.Keyword(null,"params","params",710516235),data,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"logout-response","logout-response",1914098858)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-response","bad-response",1911422950)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"request-user-data","request-user-data",-997363435),(function (p__44881,p__44882){
var map__44883 = p__44881;
var map__44883__$1 = ((((!((map__44883 == null)))?((((map__44883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44883.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44883):map__44883);
var db = cljs.core.get.call(null,map__44883__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44884 = p__44882;
var _ = cljs.core.nth.call(null,vec__44884,(0),null);
var data = cljs.core.nth.call(null,vec__44884,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("/user/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)].join(''),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login-response","login-response",844783698)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-response","bad-response",1911422950)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"login-response","login-response",844783698),(function (p__44888,p__44889){
var map__44890 = p__44888;
var map__44890__$1 = ((((!((map__44890 == null)))?((((map__44890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44890.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44890):map__44890);
var db = cljs.core.get.call(null,map__44890__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44891 = p__44889;
var _ = cljs.core.nth.call(null,vec__44891,(0),null);
var response = cljs.core.nth.call(null,vec__44891,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356)], null),response),new cljs.core.Keyword(null,"adduser-to-localstorage","adduser-to-localstorage",1002781956),response,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-page","home-page",1804156194)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"logout-response","logout-response",1914098858),(function (p__44895,_){
var map__44896 = p__44895;
var map__44896__$1 = ((((!((map__44896 == null)))?((((map__44896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44896.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44896):map__44896);
var db = cljs.core.get.call(null,map__44896__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356)], null),null),new cljs.core.Keyword(null,"removeuser-from-localstorage","removeuser-from-localstorage",264849682),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-page","login-page",2028706789)], null)], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"adduser-to-localstorage","adduser-to-localstorage",1002781956),(function (data){
var map__44898 = data;
var map__44898__$1 = ((((!((map__44898 == null)))?((((map__44898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44898.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44898):map__44898);
var login = cljs.core.get.call(null,map__44898__$1,new cljs.core.Keyword(null,"login","login",55217519));
var exp = cljs.core.get.call(null,map__44898__$1,new cljs.core.Keyword(null,"exp","exp",-261706262));
var s = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
s.set("login",login);

return s.set("login-exp",exp);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"removeuser-from-localstorage","removeuser-from-localstorage",264849682),(function (){
var s = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
s.remove("login");

return s.remove("login-exp");
}));

//# sourceMappingURL=navbar.js.map?rel=1526470112295