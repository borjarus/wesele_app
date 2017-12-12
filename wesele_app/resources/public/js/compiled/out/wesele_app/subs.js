// Compiled by ClojureScript 1.9.494 {}
goog.provide('wesele_app.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('wesele_app.subs.gallery');
goog.require('wesele_app.subs.index');
goog.require('wesele_app.subs.navbar');
goog.require('wesele_app.subs.rsvp');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"menu","menu",352255198),(function (db){
return new cljs.core.Keyword(null,"menu","menu",352255198).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),(function (db,_){
return new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"pre-gallery","pre-gallery",-1163625256),(function (db){
return new cljs.core.Keyword(null,"pre-gallery","pre-gallery",-1163625256).cljs$core$IFn$_invoke$arity$1(db);
}));

//# sourceMappingURL=subs.js.map?rel=1513114955839