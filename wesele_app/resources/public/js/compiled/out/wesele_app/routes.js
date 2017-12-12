// Compiled by ClojureScript 1.9.494 {}
goog.provide('wesele_app.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
goog.require('wesele_app.utils.login');
wesele_app.routes.hook_browser_navigation_BANG_ = (function wesele_app$routes$hook_browser_navigation_BANG_(){
var G__17542 = (new goog.History());
goog.events.listen(G__17542,goog.history.EventType.NAVIGATE,((function (G__17542){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__17542))
);

G__17542.setEnabled(true);

return G__17542;
});
wesele_app.routes.app_routes = (function wesele_app$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__17359__auto___17623 = (function (params__17360__auto__){
if(cljs.core.map_QMARK_.call(null,params__17360__auto__)){
var map__17583 = params__17360__auto__;
var map__17583__$1 = ((((!((map__17583 == null)))?((((map__17583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17583.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17583):map__17583);
if(wesele_app.utils.login.check_login_time.call(null) === false){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-page","login-page",2028706789)], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-page","home-page",1804156194)], null));
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__17360__auto__)){
var vec__17585 = params__17360__auto__;
if(wesele_app.utils.login.check_login_time.call(null) === false){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-page","login-page",2028706789)], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-page","home-page",1804156194)], null));
}
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__17359__auto___17623);


var action__17359__auto___17624 = (function (params__17360__auto__){
if(cljs.core.map_QMARK_.call(null,params__17360__auto__)){
var map__17588 = params__17360__auto__;
var map__17588__$1 = ((((!((map__17588 == null)))?((((map__17588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17588.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17588):map__17588);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-page","login-page",2028706789)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__17360__auto__)){
var vec__17590 = params__17360__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-page","login-page",2028706789)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/login",action__17359__auto___17624);


var action__17359__auto___17625 = (function (params__17360__auto__){
if(cljs.core.map_QMARK_.call(null,params__17360__auto__)){
var map__17593 = params__17360__auto__;
var map__17593__$1 = ((((!((map__17593 == null)))?((((map__17593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17593.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17593):map__17593);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"rsvp-page","rsvp-page",2134532812)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__17360__auto__)){
var vec__17595 = params__17360__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"rsvp-page","rsvp-page",2134532812)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/rsvp",action__17359__auto___17625);


var action__17359__auto___17626 = (function (params__17360__auto__){
if(cljs.core.map_QMARK_.call(null,params__17360__auto__)){
var map__17598 = params__17360__auto__;
var map__17598__$1 = ((((!((map__17598 == null)))?((((map__17598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17598.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17598):map__17598);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"news-page","news-page",2102188526)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__17360__auto__)){
var vec__17600 = params__17360__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"news-page","news-page",2102188526)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/news",action__17359__auto___17626);


var action__17359__auto___17627 = (function (params__17360__auto__){
if(cljs.core.map_QMARK_.call(null,params__17360__auto__)){
var map__17603 = params__17360__auto__;
var map__17603__$1 = ((((!((map__17603 == null)))?((((map__17603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17603.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17603):map__17603);
if(wesele_app.utils.login.check_login_time.call(null) === false){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-page","login-page",2028706789)], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"church-page","church-page",1788377738)], null));
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__17360__auto__)){
var vec__17605 = params__17360__auto__;
if(wesele_app.utils.login.check_login_time.call(null) === false){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-page","login-page",2028706789)], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"church-page","church-page",1788377738)], null));
}
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/church",action__17359__auto___17627);


var action__17359__auto___17628 = (function (params__17360__auto__){
if(cljs.core.map_QMARK_.call(null,params__17360__auto__)){
var map__17608 = params__17360__auto__;
var map__17608__$1 = ((((!((map__17608 == null)))?((((map__17608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17608.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17608):map__17608);
if(wesele_app.utils.login.check_login_time.call(null) === false){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-page","login-page",2028706789)], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"wedding-hall-page","wedding-hall-page",1494295634)], null));
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__17360__auto__)){
var vec__17610 = params__17360__auto__;
if(wesele_app.utils.login.check_login_time.call(null) === false){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-page","login-page",2028706789)], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"wedding-hall-page","wedding-hall-page",1494295634)], null));
}
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/wedding-hall",action__17359__auto___17628);


var action__17359__auto___17629 = (function (params__17360__auto__){
if(cljs.core.map_QMARK_.call(null,params__17360__auto__)){
var map__17613 = params__17360__auto__;
var map__17613__$1 = ((((!((map__17613 == null)))?((((map__17613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17613.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17613):map__17613);
if(wesele_app.utils.login.check_login_time.call(null) === false){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-page","login-page",2028706789)], null));
} else {
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request-gallery","request-gallery",1471550078),"gallery/1"], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"gallery-page","gallery-page",-1458032316)], null));
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__17360__auto__)){
var vec__17615 = params__17360__auto__;
if(wesele_app.utils.login.check_login_time.call(null) === false){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-page","login-page",2028706789)], null));
} else {
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request-gallery","request-gallery",1471550078),"gallery/1"], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"gallery-page","gallery-page",-1458032316)], null));
}
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/galeria",action__17359__auto___17629);


var action__17359__auto___17630 = (function (params__17360__auto__){
if(cljs.core.map_QMARK_.call(null,params__17360__auto__)){
var map__17618 = params__17360__auto__;
var map__17618__$1 = ((((!((map__17618 == null)))?((((map__17618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17618.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17618):map__17618);
if(wesele_app.utils.login.check_login_time.call(null) === false){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-page","login-page",2028706789)], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"gifts-page","gifts-page",-826646564)], null));
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__17360__auto__)){
var vec__17620 = params__17360__auto__;
if(wesele_app.utils.login.check_login_time.call(null) === false){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-page","login-page",2028706789)], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"gifts-page","gifts-page",-826646564)], null));
}
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/gifts",action__17359__auto___17630);


return wesele_app.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1513114953427