// Compiled by ClojureScript 1.9.494 {}
goog.provide('wesele_app.events.navbar');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('day8.re_frame.http_fx');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"request-login","request-login",-1181366312),(function (p__17669,p__17670){
var map__17671 = p__17669;
var map__17671__$1 = ((((!((map__17671 == null)))?((((map__17671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17671.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17671):map__17671);
var db = cljs.core.get.call(null,map__17671__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__17672 = p__17670;
var _ = cljs.core.nth.call(null,vec__17672,(0),null);
var data = cljs.core.nth.call(null,vec__17672,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"/login",new cljs.core.Keyword(null,"params","params",710516235),data,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login-response","login-response",844783698)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-response","bad-response",1911422950)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"request-logout","request-logout",371025838),(function (p__17676,p__17677){
var map__17678 = p__17676;
var map__17678__$1 = ((((!((map__17678 == null)))?((((map__17678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17678.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17678):map__17678);
var db = cljs.core.get.call(null,map__17678__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__17679 = p__17677;
var _ = cljs.core.nth.call(null,vec__17679,(0),null);
var data = cljs.core.nth.call(null,vec__17679,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"/logout",new cljs.core.Keyword(null,"params","params",710516235),data,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"logout-response","logout-response",1914098858)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-response","bad-response",1911422950)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"request-user-data","request-user-data",-997363435),(function (p__17683,p__17684){
var map__17685 = p__17683;
var map__17685__$1 = ((((!((map__17685 == null)))?((((map__17685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17685.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17685):map__17685);
var db = cljs.core.get.call(null,map__17685__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__17686 = p__17684;
var _ = cljs.core.nth.call(null,vec__17686,(0),null);
var data = cljs.core.nth.call(null,vec__17686,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("/user/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)].join(''),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login-response","login-response",844783698)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-response","bad-response",1911422950)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"login-response","login-response",844783698),(function (p__17690,p__17691){
var map__17692 = p__17690;
var map__17692__$1 = ((((!((map__17692 == null)))?((((map__17692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17692.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17692):map__17692);
var db = cljs.core.get.call(null,map__17692__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__17693 = p__17691;
var _ = cljs.core.nth.call(null,vec__17693,(0),null);
var response = cljs.core.nth.call(null,vec__17693,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356)], null),response),new cljs.core.Keyword(null,"adduser-to-localstorage","adduser-to-localstorage",1002781956),response,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-page","home-page",1804156194)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"logout-response","logout-response",1914098858),(function (p__17697,_){
var map__17698 = p__17697;
var map__17698__$1 = ((((!((map__17698 == null)))?((((map__17698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17698.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17698):map__17698);
var db = cljs.core.get.call(null,map__17698__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356)], null),null),new cljs.core.Keyword(null,"removeuser-from-localstorage","removeuser-from-localstorage",264849682),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-page","login-page",2028706789)], null)], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"adduser-to-localstorage","adduser-to-localstorage",1002781956),(function (data){
var map__17700 = data;
var map__17700__$1 = ((((!((map__17700 == null)))?((((map__17700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17700.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17700):map__17700);
var login = cljs.core.get.call(null,map__17700__$1,new cljs.core.Keyword(null,"login","login",55217519));
var exp = cljs.core.get.call(null,map__17700__$1,new cljs.core.Keyword(null,"exp","exp",-261706262));
var s = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
s.set("login",login);

return s.set("login-exp",exp);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"removeuser-from-localstorage","removeuser-from-localstorage",264849682),(function (){
var s = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
s.remove("login");

return s.remove("login-exp");
}));

//# sourceMappingURL=navbar.js.map?rel=1513114954019