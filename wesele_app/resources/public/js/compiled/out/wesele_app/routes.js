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
var G__44729 = (new goog.History());
goog.events.listen(G__44729,goog.history.EventType.NAVIGATE,((function (G__44729){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__44729))
);

G__44729.setEnabled(true);

return G__44729;
});
wesele_app.routes.app_routes = (function wesele_app$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__44546__auto___44820 = (function (params__44547__auto__){
if(cljs.core.map_QMARK_.call(null,params__44547__auto__)){
var map__44775 = params__44547__auto__;
var map__44775__$1 = ((((!((map__44775 == null)))?((((map__44775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44775.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44775):map__44775);
if(wesele_app.utils.login.check_login_time.call(null) === false){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-page","login-page",2028706789)], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-page","home-page",1804156194)], null));
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__44547__auto__)){
var vec__44777 = params__44547__auto__;
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
secretary.core.add_route_BANG_.call(null,"/",action__44546__auto___44820);


var action__44546__auto___44821 = (function (params__44547__auto__){
if(cljs.core.map_QMARK_.call(null,params__44547__auto__)){
var map__44780 = params__44547__auto__;
var map__44780__$1 = ((((!((map__44780 == null)))?((((map__44780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44780.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44780):map__44780);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-page","login-page",2028706789)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__44547__auto__)){
var vec__44782 = params__44547__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-page","login-page",2028706789)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/login",action__44546__auto___44821);


var action__44546__auto___44822 = (function (params__44547__auto__){
if(cljs.core.map_QMARK_.call(null,params__44547__auto__)){
var map__44785 = params__44547__auto__;
var map__44785__$1 = ((((!((map__44785 == null)))?((((map__44785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44785.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44785):map__44785);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"rsvp-page","rsvp-page",2134532812)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__44547__auto__)){
var vec__44787 = params__44547__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"rsvp-page","rsvp-page",2134532812)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/rsvp",action__44546__auto___44822);


var action__44546__auto___44823 = (function (params__44547__auto__){
if(cljs.core.map_QMARK_.call(null,params__44547__auto__)){
var map__44790 = params__44547__auto__;
var map__44790__$1 = ((((!((map__44790 == null)))?((((map__44790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44790.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44790):map__44790);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"news-page","news-page",2102188526)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__44547__auto__)){
var vec__44792 = params__44547__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"news-page","news-page",2102188526)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/news",action__44546__auto___44823);


var action__44546__auto___44824 = (function (params__44547__auto__){
if(cljs.core.map_QMARK_.call(null,params__44547__auto__)){
var map__44795 = params__44547__auto__;
var map__44795__$1 = ((((!((map__44795 == null)))?((((map__44795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44795.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44795):map__44795);
if(wesele_app.utils.login.check_login_time.call(null) === false){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-page","login-page",2028706789)], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"church-page","church-page",1788377738)], null));
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__44547__auto__)){
var vec__44797 = params__44547__auto__;
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
secretary.core.add_route_BANG_.call(null,"/church",action__44546__auto___44824);


var action__44546__auto___44825 = (function (params__44547__auto__){
if(cljs.core.map_QMARK_.call(null,params__44547__auto__)){
var map__44800 = params__44547__auto__;
var map__44800__$1 = ((((!((map__44800 == null)))?((((map__44800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44800.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44800):map__44800);
if(wesele_app.utils.login.check_login_time.call(null) === false){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-page","login-page",2028706789)], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"wedding-hall-page","wedding-hall-page",1494295634)], null));
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__44547__auto__)){
var vec__44802 = params__44547__auto__;
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
secretary.core.add_route_BANG_.call(null,"/wedding-hall",action__44546__auto___44825);


var action__44546__auto___44826 = (function (params__44547__auto__){
if(cljs.core.map_QMARK_.call(null,params__44547__auto__)){
var map__44805 = params__44547__auto__;
var map__44805__$1 = ((((!((map__44805 == null)))?((((map__44805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44805.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44805):map__44805);
if(wesele_app.utils.login.check_login_time.call(null) === false){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-page","login-page",2028706789)], null));
} else {
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request-gallery","request-gallery",1471550078),"gallery/1"], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"gallery-page","gallery-page",-1458032316)], null));
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__44547__auto__)){
var vec__44807 = params__44547__auto__;
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
secretary.core.add_route_BANG_.call(null,"/galeria",action__44546__auto___44826);


var action__44546__auto___44827 = (function (params__44547__auto__){
if(cljs.core.map_QMARK_.call(null,params__44547__auto__)){
var map__44810 = params__44547__auto__;
var map__44810__$1 = ((((!((map__44810 == null)))?((((map__44810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44810.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44810):map__44810);
if(wesele_app.utils.login.check_login_time.call(null) === false){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-page","login-page",2028706789)], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"gifts-page","gifts-page",-826646564)], null));
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__44547__auto__)){
var vec__44812 = params__44547__auto__;
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
secretary.core.add_route_BANG_.call(null,"/gifts",action__44546__auto___44827);


var action__44546__auto___44828 = (function (params__44547__auto__){
if(cljs.core.map_QMARK_.call(null,params__44547__auto__)){
var map__44815 = params__44547__auto__;
var map__44815__$1 = ((((!((map__44815 == null)))?((((map__44815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44815.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44815):map__44815);
if(wesele_app.utils.login.check_login_time.call(null) === false){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-page","login-page",2028706789)], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"accomodations-page","accomodations-page",-920276277)], null));
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__44547__auto__)){
var vec__44817 = params__44547__auto__;
if(wesele_app.utils.login.check_login_time.call(null) === false){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-page","login-page",2028706789)], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"accomodations-page","accomodations-page",-920276277)], null));
}
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/accomodations",action__44546__auto___44828);


return wesele_app.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1526470111265