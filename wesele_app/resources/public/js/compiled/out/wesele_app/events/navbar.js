// Compiled by ClojureScript 1.9.494 {}
goog.provide('wesele_app.events.navbar');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('day8.re_frame.http_fx');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"request-login","request-login",-1181366312),(function (p__60734,p__60735){
var map__60736 = p__60734;
var map__60736__$1 = ((((!((map__60736 == null)))?((((map__60736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60736.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60736):map__60736);
var db = cljs.core.get.call(null,map__60736__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__60737 = p__60735;
var _ = cljs.core.nth.call(null,vec__60737,(0),null);
var data = cljs.core.nth.call(null,vec__60737,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"/login",new cljs.core.Keyword(null,"params","params",710516235),data,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login-response","login-response",844783698)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-response","bad-response",1911422950)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"request-logout","request-logout",371025838),(function (p__60741,p__60742){
var map__60743 = p__60741;
var map__60743__$1 = ((((!((map__60743 == null)))?((((map__60743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60743.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60743):map__60743);
var db = cljs.core.get.call(null,map__60743__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__60744 = p__60742;
var _ = cljs.core.nth.call(null,vec__60744,(0),null);
var data = cljs.core.nth.call(null,vec__60744,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"/logout",new cljs.core.Keyword(null,"params","params",710516235),data,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"logout-response","logout-response",1914098858)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-response","bad-response",1911422950)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"request-user-data","request-user-data",-997363435),(function (p__60748,p__60749){
var map__60750 = p__60748;
var map__60750__$1 = ((((!((map__60750 == null)))?((((map__60750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60750.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60750):map__60750);
var db = cljs.core.get.call(null,map__60750__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__60751 = p__60749;
var _ = cljs.core.nth.call(null,vec__60751,(0),null);
var data = cljs.core.nth.call(null,vec__60751,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("/user/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)].join(''),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login-response","login-response",844783698)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-response","bad-response",1911422950)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"login-response","login-response",844783698),(function (p__60755,p__60756){
var map__60757 = p__60755;
var map__60757__$1 = ((((!((map__60757 == null)))?((((map__60757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60757.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60757):map__60757);
var db = cljs.core.get.call(null,map__60757__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__60758 = p__60756;
var _ = cljs.core.nth.call(null,vec__60758,(0),null);
var response = cljs.core.nth.call(null,vec__60758,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356)], null),response),new cljs.core.Keyword(null,"adduser-to-localstorage","adduser-to-localstorage",1002781956),response,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-page","home-page",1804156194)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"logout-response","logout-response",1914098858),(function (p__60762,_){
var map__60763 = p__60762;
var map__60763__$1 = ((((!((map__60763 == null)))?((((map__60763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60763.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60763):map__60763);
var db = cljs.core.get.call(null,map__60763__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356)], null),null),new cljs.core.Keyword(null,"removeuser-from-localstorage","removeuser-from-localstorage",264849682),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-page","login-page",2028706789)], null)], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"adduser-to-localstorage","adduser-to-localstorage",1002781956),(function (data){
var map__60765 = data;
var map__60765__$1 = ((((!((map__60765 == null)))?((((map__60765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60765.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60765):map__60765);
var login = cljs.core.get.call(null,map__60765__$1,new cljs.core.Keyword(null,"login","login",55217519));
var exp = cljs.core.get.call(null,map__60765__$1,new cljs.core.Keyword(null,"exp","exp",-261706262));
var s = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
s.set("login",login);

return s.set("login-exp",exp);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"removeuser-from-localstorage","removeuser-from-localstorage",264849682),(function (){
var s = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
s.remove("login");

return s.remove("login-exp");
}));

//# sourceMappingURL=navbar.js.map?rel=1510317478510