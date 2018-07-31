// Compiled by ClojureScript 1.9.494 {}
goog.provide('wesele_app.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('wesele_app.db');
goog.require('wesele_app.events.gallery');
goog.require('wesele_app.events.index');
goog.require('wesele_app.events.navbar');
goog.require('wesele_app.events.rsvp');
goog.require('wesele_app.utils.login');
wesele_app.events.check_user = (function wesele_app$events$check_user(){
var uname = wesele_app.utils.login.get_login_type.call(null,new cljs.core.Keyword(null,"user","user",1532431356));
if((wesele_app.utils.login.check_login_time.call(null) === false) && (!(uname === false))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request-logout","request-logout",371025838),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"username","username",1605666410),uname], null)], null));
} else {
var db_user = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-user","get-user",-990309598)], null)));
if(((db_user == null)) && (!(uname === false))){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request-user-data","request-user-data",-997363435),uname], null));
} else {
}

return true;
}
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return wesele_app.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),(function (db,p__44988){
var vec__44989 = p__44988;
var _ = cljs.core.nth.call(null,vec__44989,(0),null);
var active_panel = cljs.core.nth.call(null,vec__44989,(1),null);
wesele_app.events.check_user.call(null);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),(function (p__44992,p__44993){
var map__44994 = p__44992;
var map__44994__$1 = ((((!((map__44994 == null)))?((((map__44994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44994.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44994):map__44994);
var db = cljs.core.get.call(null,map__44994__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44995 = p__44993;
var _ = cljs.core.nth.call(null,vec__44995,(0),null);
return console.log("ERR");
}));

//# sourceMappingURL=events.js.map?rel=1526470114145