// Compiled by ClojureScript 1.9.494 {}
goog.provide('wesele_app.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('wesele_app.views.index');
goog.require('wesele_app.views.news');
goog.require('wesele_app.views.church');
goog.require('wesele_app.views.wedding_hall');
goog.require('wesele_app.views.gallery');
goog.require('wesele_app.views.login');
goog.require('wesele_app.views.rsvp');
if(typeof wesele_app.views.panels !== 'undefined'){
} else {
wesele_app.views.panels = (function (){var method_table__44439__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__44440__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__44441__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__44442__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__44443__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"wesele-app.views","panels"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__44443__auto__,method_table__44439__auto__,prefer_table__44440__auto__,method_cache__44441__auto__,cached_hierarchy__44442__auto__));
})();
}
cljs.core._add_method.call(null,wesele_app.views.panels,new cljs.core.Keyword(null,"login-page","login-page",2028706789),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wesele_app.views.login.login_page], null);
}));
cljs.core._add_method.call(null,wesele_app.views.panels,new cljs.core.Keyword(null,"home-page","home-page",1804156194),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wesele_app.views.index.index_page], null);
}));
cljs.core._add_method.call(null,wesele_app.views.panels,new cljs.core.Keyword(null,"news-page","news-page",2102188526),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wesele_app.views.news.news_page], null);
}));
cljs.core._add_method.call(null,wesele_app.views.panels,new cljs.core.Keyword(null,"rsvp-page","rsvp-page",2134532812),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wesele_app.views.rsvp.rsvp_page], null);
}));
cljs.core._add_method.call(null,wesele_app.views.panels,new cljs.core.Keyword(null,"church-page","church-page",1788377738),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wesele_app.views.church.church_page], null);
}));
cljs.core._add_method.call(null,wesele_app.views.panels,new cljs.core.Keyword(null,"wedding-hall-page","wedding-hall-page",1494295634),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wesele_app.views.wedding_hall.wedding_hall_page], null);
}));
cljs.core._add_method.call(null,wesele_app.views.panels,new cljs.core.Keyword(null,"gallery-page","gallery-page",-1458032316),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wesele_app.views.gallery.gallery_page], null);
}));
cljs.core._add_method.call(null,wesele_app.views.panels,new cljs.core.Keyword(null,"default","default",-1987822328),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
}));
wesele_app.views.show_panel = (function wesele_app$views$show_panel(panel_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wesele_app.views.panels,panel_name], null);
});
wesele_app.views.main_panel = (function wesele_app$views$main_panel(){
var active_panel = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994)], null));
return ((function (active_panel){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wesele_app.views.show_panel,cljs.core.deref.call(null,active_panel)], null);
});
;})(active_panel))
});

//# sourceMappingURL=views.js.map?rel=1495560853161