// Compiled by ClojureScript 1.9.494 {}
goog.provide('wesele_app.views.index');
goog.require('cljs.core');
goog.require('wesele_app.views.navbar');
goog.require('re_frame.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('wesele_app.events.index');
wesele_app.views.index.class$ = (function wesele_app$views$index$class(class$){
return getElementByClassName(class$);
});
wesele_app.views.index.round = (function wesele_app$views$index$round(x){
return Math.round(x);
});
wesele_app.views.index.get_new_offset = (function wesele_app$views$index$get_new_offset(val,max_val){
return wesele_app.views.index.round.call(null,(((100) * val) / max_val));
});
wesele_app.views.index.countdown_run = (function wesele_app$views$index$countdown_run(){
return setInterval((function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-wedding-counter","set-wedding-counter",894595243)], null));
}),(1000));
});
wesele_app.views.index.func_a = (function wesele_app$views$index$func_a(name,state){
var vec__15942 = state;
var d = cljs.core.nth.call(null,vec__15942,(0),null);
var h = cljs.core.nth.call(null,vec__15942,(1),null);
var m = cljs.core.nth.call(null,vec__15942,(2),null);
var s = cljs.core.nth.call(null,vec__15942,(3),null);
var pred__15945 = cljs.core._EQ_;
var expr__15946 = name;
if(cljs.core.truth_(pred__15945.call(null,new cljs.core.Keyword(null,"d","d",1972142424),expr__15946))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,(730),"dni"], null);
} else {
if(cljs.core.truth_(pred__15945.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__15946))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,(24),"godzin"], null);
} else {
if(cljs.core.truth_(pred__15945.call(null,new cljs.core.Keyword(null,"m","m",1632677161),expr__15946))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,(60),"minut"], null);
} else {
if(cljs.core.truth_(pred__15945.call(null,new cljs.core.Keyword(null,"s","s",1705939918),expr__15946))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,(60),"sekund"], null);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__15946)].join('')));
}
}
}
}
});
wesele_app.views.index.update_countdown_status = (function wesele_app$views$index$update_countdown_status(typ,val,max_val){
var el = goog.dom.getElementByClass([cljs.core.str.cljs$core$IFn$_invoke$arity$1("time-out-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(typ)].join(''));
var total_svg_length = el.getTotalLength();
var new_offset = wesele_app.views.index.round.call(null,(total_svg_length - ((wesele_app.views.index.get_new_offset.call(null,val,max_val) * total_svg_length) / (100))));
el.setAttribute("stroke-dasharray",total_svg_length);

return el.setAttribute("stroke-dashoffset",new_offset);
});
wesele_app.views.index.countdown_component = (function wesele_app$views$index$countdown_component(typ){
var db = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"countdown","countdown",-1468813996),null], null));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (db){
return (function (){
var state = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wedding-counter","wedding-counter",-545242594)], null));
var vec__15957 = wesele_app.views.index.func_a.call(null,typ,cljs.core.deref.call(null,state));
var val = cljs.core.nth.call(null,vec__15957,(0),null);
var max_val = cljs.core.nth.call(null,vec__15957,(1),null);
var _ = cljs.core.nth.call(null,vec__15957,(2),null);
var t = cljs.core.name.call(null,typ);
var ___$1 = cljs.core.swap_BANG_.call(null,db,cljs.core.assoc,new cljs.core.Keyword(null,"countdown","countdown",-1468813996),wesele_app.views.index.countdown_run.call(null));
return wesele_app.views.index.update_countdown_status.call(null,t,val,max_val);
});})(db))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (db){
return (function (){
var state = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wedding-counter","wedding-counter",-545242594)], null));
var vec__15960 = wesele_app.views.index.func_a.call(null,typ,cljs.core.deref.call(null,state));
var val = cljs.core.nth.call(null,vec__15960,(0),null);
var max_val = cljs.core.nth.call(null,vec__15960,(1),null);
var _ = cljs.core.nth.call(null,vec__15960,(2),null);
var t = cljs.core.name.call(null,typ);
return wesele_app.views.index.update_countdown_status.call(null,t,val,max_val);
});})(db))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (db){
return (function (){
clearInterval(new cljs.core.Keyword(null,"countdown","countdown",-1468813996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)));

return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc,new cljs.core.Keyword(null,"countdown","countdown",-1468813996),null);
});})(db))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (db){
return (function (){
var state = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wedding-counter","wedding-counter",-545242594)], null));
var vec__15963 = wesele_app.views.index.func_a.call(null,typ,cljs.core.deref.call(null,state));
var val = cljs.core.nth.call(null,vec__15963,(0),null);
var _ = cljs.core.nth.call(null,vec__15963,(1),null);
var namex = cljs.core.nth.call(null,vec__15963,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.clock","div.clock",297094939),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("time-out time-out-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,typ))].join(''),new cljs.core.Keyword(null,"d","d",1972142424),"m 80, 6 a 50,50 0 1,0 0,120 a 50,50 0 1,0 0,-120"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.seconds","div.seconds",-369940629),val], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sec-text","div.sec-text",-832984684),namex], null)], null)], null);
});})(db))
], null));
});
wesele_app.views.index.index_page = (function wesele_app$views$index$index_page(){
var wedding_counter = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wedding-counter","wedding-counter",-545242594)], null));
return ((function (wedding_counter){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wesele_app.views.navbar.nav_bar], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.pt-4","p.pt-4",2055159176),""], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-3","div.col-md-3",1386112129),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.justify-content-center","div.row.justify-content-center",754397026),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.icon-kalendarz_02","i.icon.icon-kalendarz_02",1188303357),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"3rem"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.justify-content-center.font-weight-bold","div.row.justify-content-center.font-weight-bold",-348363660),"Data"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.justify-content-center","div.row.justify-content-center",754397026),"18 Sierpnia 2018"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-3","div.col-md-3",1386112129),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.justify-content-center","div.row.justify-content-center",754397026),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.icon-cat-256","i.icon.icon-cat-256",965349714),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"3rem"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.justify-content-center.font-weight-bold","div.row.justify-content-center.font-weight-bold",-348363660),"Godzina"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.justify-content-center","div.row.justify-content-center",754397026),"17:00"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-3","div.col-md-3",1386112129),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.justify-content-center","div.row.justify-content-center",754397026),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.icon-cat-290","i.icon.icon-cat-290",-1646717048),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"3rem"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.justify-content-center.font-weight-bold","div.row.justify-content-center.font-weight-bold",-348363660),"Miejsce \u015Blubu"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.justify-content-center.text-center","div.row.justify-content-center.text-center",-1411181738),"Ko\u015Bci\u00F3\u0142 Rzymskokatolicki \u015Bw. Jana Chrzciciela"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-3","div.col-md-3",1386112129),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.justify-content-center","div.row.justify-content-center",754397026),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.icon-cat-301","i.icon.icon-cat-301",665781528),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"3rem"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.justify-content-center.font-weight-bold","div.row.justify-content-center.font-weight-bold",-348363660),"Wesele"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.justify-content-center","div.row.justify-content-center",754397026),"Lila Park"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.pt-4","p.pt-4",2055159176),""], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12.section-wrapper","div.col-md-12.section-wrapper",-1622312052),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wesele_app.views.index.countdown_component,new cljs.core.Keyword(null,"d","d",1972142424)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wesele_app.views.index.countdown_component,new cljs.core.Keyword(null,"h","h",1109658740)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wesele_app.views.index.countdown_component,new cljs.core.Keyword(null,"m","m",1632677161)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wesele_app.views.index.countdown_component,new cljs.core.Keyword(null,"s","s",1705939918)], null)], null)], null)], null)], null);
});
;})(wedding_counter))
});

//# sourceMappingURL=index.js.map?rel=1511981859539