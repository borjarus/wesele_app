// Compiled by ClojureScript 1.9.494 {}
goog.provide('wesele_app.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('wesele_app.events');
goog.require('wesele_app.subs');
goog.require('wesele_app.routes');
goog.require('wesele_app.views');
goog.require('wesele_app.config');
goog.require('re_frisk.core');
wesele_app.core.scroll_event = (function wesele_app$core$scroll_event(){
return jQuery(window).scroll((function (){
var st = jQuery(document).scrollTop();
if((st > (195))){
jQuery(".navbar.main-navbar").addClass("fixed-top");
} else {
}

if((st < (170))){
return jQuery(".navbar.main-navbar").removeClass("fixed-top");
} else {
return null;
}
}));
});
wesele_app.core.dev_setup = (function wesele_app$core$dev_setup(){
if(cljs.core.truth_(wesele_app.config.debug_QMARK_)){
cljs.core.enable_console_print_BANG_.call(null);

re_frisk.core.enable_re_frisk_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
wesele_app.core.mount_root = (function wesele_app$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wesele_app.views.main_panel], null),document.getElementById("app"));
});
wesele_app.core.init = (function wesele_app$core$init(){
wesele_app.routes.app_routes.call(null);

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

wesele_app.core.scroll_event.call(null);

wesele_app.events.check_user.call(null);

return wesele_app.core.mount_root.call(null);
});
goog.exportSymbol('wesele_app.core.init', wesele_app.core.init);

//# sourceMappingURL=core.js.map?rel=1515680988335