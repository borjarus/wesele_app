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
var G__14678 = (new goog.History());
goog.events.listen(G__14678,goog.history.EventType.NAVIGATE,((function (G__14678){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__14678))
);

G__14678.setEnabled(true);

return G__14678;
});
wesele_app.routes.app_routes = (function wesele_app$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__9971__auto___14759 = (function (params__9972__auto__){
if(cljs.core.map_QMARK_.call(null,params__9972__auto__)){
var map__14719 = params__9972__auto__;
var map__14719__$1 = ((((!((map__14719 == null)))?((((map__14719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14719.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14719):map__14719);
if(wesele_app.utils.login.check_login_time.call(null) === false){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-page","login-page",2028706789)], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-page","home-page",1804156194)], null));
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__9972__auto__)){
var vec__14721 = params__9972__auto__;
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
secretary.core.add_route_BANG_.call(null,"/",action__9971__auto___14759);


var action__9971__auto___14760 = (function (params__9972__auto__){
if(cljs.core.map_QMARK_.call(null,params__9972__auto__)){
var map__14724 = params__9972__auto__;
var map__14724__$1 = ((((!((map__14724 == null)))?((((map__14724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14724.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14724):map__14724);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-page","login-page",2028706789)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__9972__auto__)){
var vec__14726 = params__9972__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-page","login-page",2028706789)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/login",action__9971__auto___14760);


var action__9971__auto___14761 = (function (params__9972__auto__){
if(cljs.core.map_QMARK_.call(null,params__9972__auto__)){
var map__14729 = params__9972__auto__;
var map__14729__$1 = ((((!((map__14729 == null)))?((((map__14729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14729.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14729):map__14729);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"rsvp-page","rsvp-page",2134532812)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__9972__auto__)){
var vec__14731 = params__9972__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"rsvp-page","rsvp-page",2134532812)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/rsvp",action__9971__auto___14761);


var action__9971__auto___14762 = (function (params__9972__auto__){
if(cljs.core.map_QMARK_.call(null,params__9972__auto__)){
var map__14734 = params__9972__auto__;
var map__14734__$1 = ((((!((map__14734 == null)))?((((map__14734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14734.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14734):map__14734);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"news-page","news-page",2102188526)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__9972__auto__)){
var vec__14736 = params__9972__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"news-page","news-page",2102188526)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/news",action__9971__auto___14762);


var action__9971__auto___14763 = (function (params__9972__auto__){
if(cljs.core.map_QMARK_.call(null,params__9972__auto__)){
var map__14739 = params__9972__auto__;
var map__14739__$1 = ((((!((map__14739 == null)))?((((map__14739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14739.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14739):map__14739);
if(wesele_app.utils.login.check_login_time.call(null) === false){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-page","login-page",2028706789)], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"church-page","church-page",1788377738)], null));
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__9972__auto__)){
var vec__14741 = params__9972__auto__;
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
secretary.core.add_route_BANG_.call(null,"/church",action__9971__auto___14763);


var action__9971__auto___14764 = (function (params__9972__auto__){
if(cljs.core.map_QMARK_.call(null,params__9972__auto__)){
var map__14744 = params__9972__auto__;
var map__14744__$1 = ((((!((map__14744 == null)))?((((map__14744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14744.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14744):map__14744);
if(wesele_app.utils.login.check_login_time.call(null) === false){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-page","login-page",2028706789)], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"wedding-hall-page","wedding-hall-page",1494295634)], null));
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__9972__auto__)){
var vec__14746 = params__9972__auto__;
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
secretary.core.add_route_BANG_.call(null,"/wedding-hall",action__9971__auto___14764);


var action__9971__auto___14765 = (function (params__9972__auto__){
if(cljs.core.map_QMARK_.call(null,params__9972__auto__)){
var map__14749 = params__9972__auto__;
var map__14749__$1 = ((((!((map__14749 == null)))?((((map__14749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14749.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14749):map__14749);
if(wesele_app.utils.login.check_login_time.call(null) === false){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-page","login-page",2028706789)], null));
} else {
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request-gallery","request-gallery",1471550078),"gallery/1"], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"gallery-page","gallery-page",-1458032316)], null));
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__9972__auto__)){
var vec__14751 = params__9972__auto__;
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
secretary.core.add_route_BANG_.call(null,"/galeria",action__9971__auto___14765);


var action__9971__auto___14766 = (function (params__9972__auto__){
if(cljs.core.map_QMARK_.call(null,params__9972__auto__)){
var map__14754 = params__9972__auto__;
var map__14754__$1 = ((((!((map__14754 == null)))?((((map__14754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14754.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14754):map__14754);
if(wesele_app.utils.login.check_login_time.call(null) === false){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"login-page","login-page",2028706789)], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"gifts-page","gifts-page",-826646564)], null));
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__9972__auto__)){
var vec__14756 = params__9972__auto__;
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
secretary.core.add_route_BANG_.call(null,"/gifts",action__9971__auto___14766);


return wesele_app.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1511870149239