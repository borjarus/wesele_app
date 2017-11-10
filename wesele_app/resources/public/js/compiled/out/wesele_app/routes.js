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
var G__60618 = (new goog.History());
goog.events.listen(G__60618,goog.history.EventType.NAVIGATE,((function (G__60618){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__60618))
);

G__60618.setEnabled(true);

return G__60618;
});
wesele_app.routes.app_routes = (function wesele_app$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__43569__auto___60689 = (function (params__43570__auto__){
if(cljs.core.map_QMARK_.call(null,params__43570__auto__)){
var map__60654 = params__43570__auto__;
var map__60654__$1 = ((((!((map__60654 == null)))?((((map__60654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60654.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60654):map__60654);
if(wesele_app.utils.login.check_login_time.call(null) === false){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-page","login-page",2028706789)], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-page","home-page",1804156194)], null));
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__43570__auto__)){
var vec__60656 = params__43570__auto__;
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
secretary.core.add_route_BANG_.call(null,"/",action__43569__auto___60689);


var action__43569__auto___60690 = (function (params__43570__auto__){
if(cljs.core.map_QMARK_.call(null,params__43570__auto__)){
var map__60659 = params__43570__auto__;
var map__60659__$1 = ((((!((map__60659 == null)))?((((map__60659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60659.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60659):map__60659);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-page","login-page",2028706789)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__43570__auto__)){
var vec__60661 = params__43570__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-page","login-page",2028706789)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/login",action__43569__auto___60690);


var action__43569__auto___60691 = (function (params__43570__auto__){
if(cljs.core.map_QMARK_.call(null,params__43570__auto__)){
var map__60664 = params__43570__auto__;
var map__60664__$1 = ((((!((map__60664 == null)))?((((map__60664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60664.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60664):map__60664);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"rsvp-page","rsvp-page",2134532812)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__43570__auto__)){
var vec__60666 = params__43570__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"rsvp-page","rsvp-page",2134532812)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/rsvp",action__43569__auto___60691);


var action__43569__auto___60692 = (function (params__43570__auto__){
if(cljs.core.map_QMARK_.call(null,params__43570__auto__)){
var map__60669 = params__43570__auto__;
var map__60669__$1 = ((((!((map__60669 == null)))?((((map__60669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60669.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60669):map__60669);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"news-page","news-page",2102188526)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__43570__auto__)){
var vec__60671 = params__43570__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"news-page","news-page",2102188526)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/news",action__43569__auto___60692);


var action__43569__auto___60693 = (function (params__43570__auto__){
if(cljs.core.map_QMARK_.call(null,params__43570__auto__)){
var map__60674 = params__43570__auto__;
var map__60674__$1 = ((((!((map__60674 == null)))?((((map__60674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60674.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60674):map__60674);
if(wesele_app.utils.login.check_login_time.call(null) === false){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-page","login-page",2028706789)], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"church-page","church-page",1788377738)], null));
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__43570__auto__)){
var vec__60676 = params__43570__auto__;
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
secretary.core.add_route_BANG_.call(null,"/church",action__43569__auto___60693);


var action__43569__auto___60694 = (function (params__43570__auto__){
if(cljs.core.map_QMARK_.call(null,params__43570__auto__)){
var map__60679 = params__43570__auto__;
var map__60679__$1 = ((((!((map__60679 == null)))?((((map__60679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60679.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60679):map__60679);
if(wesele_app.utils.login.check_login_time.call(null) === false){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-page","login-page",2028706789)], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"wedding-hall-page","wedding-hall-page",1494295634)], null));
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__43570__auto__)){
var vec__60681 = params__43570__auto__;
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
secretary.core.add_route_BANG_.call(null,"/wedding-hall",action__43569__auto___60694);


var action__43569__auto___60695 = (function (params__43570__auto__){
if(cljs.core.map_QMARK_.call(null,params__43570__auto__)){
var map__60684 = params__43570__auto__;
var map__60684__$1 = ((((!((map__60684 == null)))?((((map__60684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60684.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60684):map__60684);
if(wesele_app.utils.login.check_login_time.call(null) === false){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-page","login-page",2028706789)], null));
} else {
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request-gallery","request-gallery",1471550078),"gallery/1"], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"gallery-page","gallery-page",-1458032316)], null));
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__43570__auto__)){
var vec__60686 = params__43570__auto__;
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
secretary.core.add_route_BANG_.call(null,"/galeria",action__43569__auto___60695);


return wesele_app.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1510317476740