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
var G__55565 = (new goog.History());
goog.events.listen(G__55565,goog.history.EventType.NAVIGATE,((function (G__55565){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__55565))
);

G__55565.setEnabled(true);

return G__55565;
});
wesele_app.routes.app_routes = (function wesele_app$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__47566__auto___55636 = (function (params__47567__auto__){
if(cljs.core.map_QMARK_.call(null,params__47567__auto__)){
var map__55601 = params__47567__auto__;
var map__55601__$1 = ((((!((map__55601 == null)))?((((map__55601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55601.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55601):map__55601);
if(wesele_app.utils.login.check_login_time.call(null) === false){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-page","login-page",2028706789)], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-page","home-page",1804156194)], null));
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__47567__auto__)){
var vec__55603 = params__47567__auto__;
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
secretary.core.add_route_BANG_.call(null,"/",action__47566__auto___55636);


var action__47566__auto___55637 = (function (params__47567__auto__){
if(cljs.core.map_QMARK_.call(null,params__47567__auto__)){
var map__55606 = params__47567__auto__;
var map__55606__$1 = ((((!((map__55606 == null)))?((((map__55606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55606.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55606):map__55606);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-page","login-page",2028706789)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__47567__auto__)){
var vec__55608 = params__47567__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-page","login-page",2028706789)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/login",action__47566__auto___55637);


var action__47566__auto___55638 = (function (params__47567__auto__){
if(cljs.core.map_QMARK_.call(null,params__47567__auto__)){
var map__55611 = params__47567__auto__;
var map__55611__$1 = ((((!((map__55611 == null)))?((((map__55611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55611.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55611):map__55611);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"rsvp-page","rsvp-page",2134532812)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__47567__auto__)){
var vec__55613 = params__47567__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"rsvp-page","rsvp-page",2134532812)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/rsvp",action__47566__auto___55638);


var action__47566__auto___55639 = (function (params__47567__auto__){
if(cljs.core.map_QMARK_.call(null,params__47567__auto__)){
var map__55616 = params__47567__auto__;
var map__55616__$1 = ((((!((map__55616 == null)))?((((map__55616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55616.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55616):map__55616);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"news-page","news-page",2102188526)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__47567__auto__)){
var vec__55618 = params__47567__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"news-page","news-page",2102188526)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/news",action__47566__auto___55639);


var action__47566__auto___55640 = (function (params__47567__auto__){
if(cljs.core.map_QMARK_.call(null,params__47567__auto__)){
var map__55621 = params__47567__auto__;
var map__55621__$1 = ((((!((map__55621 == null)))?((((map__55621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55621.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55621):map__55621);
if(wesele_app.utils.login.check_login_time.call(null) === false){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-page","login-page",2028706789)], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"church-page","church-page",1788377738)], null));
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__47567__auto__)){
var vec__55623 = params__47567__auto__;
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
secretary.core.add_route_BANG_.call(null,"/church",action__47566__auto___55640);


var action__47566__auto___55641 = (function (params__47567__auto__){
if(cljs.core.map_QMARK_.call(null,params__47567__auto__)){
var map__55626 = params__47567__auto__;
var map__55626__$1 = ((((!((map__55626 == null)))?((((map__55626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55626.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55626):map__55626);
if(wesele_app.utils.login.check_login_time.call(null) === false){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-page","login-page",2028706789)], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"wedding-hall-page","wedding-hall-page",1494295634)], null));
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__47567__auto__)){
var vec__55628 = params__47567__auto__;
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
secretary.core.add_route_BANG_.call(null,"/wedding-hall",action__47566__auto___55641);


var action__47566__auto___55642 = (function (params__47567__auto__){
if(cljs.core.map_QMARK_.call(null,params__47567__auto__)){
var map__55631 = params__47567__auto__;
var map__55631__$1 = ((((!((map__55631 == null)))?((((map__55631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55631.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55631):map__55631);
if(wesele_app.utils.login.check_login_time.call(null) === false){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-page","login-page",2028706789)], null));
} else {
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request-gallery","request-gallery",1471550078),"gallery/1"], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"gallery-page","gallery-page",-1458032316)], null));
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__47567__auto__)){
var vec__55633 = params__47567__auto__;
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
secretary.core.add_route_BANG_.call(null,"/galeria",action__47566__auto___55642);


return wesele_app.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1495135401280