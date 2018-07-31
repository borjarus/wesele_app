// Compiled by ClojureScript 1.9.494 {}
goog.provide('wesele_app.utils.login');
goog.require('cljs.core');
goog.require('cljs_time.format');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
wesele_app.utils.login.get_login_type = (function wesele_app$utils$login$get_login_type(type){
var s = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
var v = (function (){var pred__44530 = cljs.core._EQ_;
var expr__44531 = type;
if(cljs.core.truth_(pred__44530.call(null,new cljs.core.Keyword(null,"time","time",1385887882),expr__44531))){
return s.get("login-exp");
} else {
if(cljs.core.truth_(pred__44530.call(null,new cljs.core.Keyword(null,"user","user",1532431356),expr__44531))){
return s.get("login");
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__44531)].join('')));
}
}
})();
if(!((v == null))){
return v;
} else {
return false;
}
});
wesele_app.utils.login.remove_login_from_storage = (function wesele_app$utils$login$remove_login_from_storage(){
var s = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
s.remove("login-exp");

s.remove("login");

return false;
});
wesele_app.utils.login.milis_to_sec = (function wesele_app$utils$login$milis_to_sec(milis){
return cljs.core.quot.call(null,milis,(1000));
});
wesele_app.utils.login.check_login_time = (function wesele_app$utils$login$check_login_time(){
var temp__4655__auto__ = wesele_app.utils.login.get_login_type.call(null,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(temp__4655__auto__)){
var lt = temp__4655__auto__;
var login_time = wesele_app.utils.login.milis_to_sec.call(null,cljs_time.format.parse_local.call(null,cljs_time.format.formatter.call(null,"yyyy-MM-dd HH:mm"),lt));
var login_interval = (login_time - wesele_app.utils.login.milis_to_sec.call(null,cljs_time.coerce.to_long.call(null,cljs_time.core.time_now.call(null))));
if((login_interval < (0))){
return wesele_app.utils.login.remove_login_from_storage.call(null);
} else {
return true;
}
} else {
return false;
}
});
var user_44533 = wesele_app.utils.login.get_login_type.call(null,new cljs.core.Keyword(null,"user","user",1532431356));
var clt_44534 = wesele_app.utils.login.check_login_time.call(null);
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [user_44533,clt_44534], null);

//# sourceMappingURL=login.js.map?rel=1526470108937