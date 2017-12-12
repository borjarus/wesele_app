// Compiled by ClojureScript 1.9.494 {}
goog.provide('wesele_app.views.rsvp');
goog.require('cljs.core');
goog.require('wesele_app.views.navbar');
goog.require('reagent.core');
goog.require('re_frame.core');
wesele_app.views.rsvp.switchery_change_event = (function wesele_app$views$rsvp$switchery_change_event(typ,name,el,user_db){
return el.onchange = (function (){
var answer = ((el.checked === true)?(1):(0));
var user = cljs.core.get.call(null,cljs.core.deref.call(null,user_db),new cljs.core.Keyword(null,"login","login",55217519));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-rsvp","process-rsvp",392823672),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"login","login",55217519),user,new cljs.core.Keyword(null,"answer","answer",-742633163),answer,new cljs.core.Keyword(null,"type","type",1174270348),typ], null)], null));
});
});
wesele_app.views.rsvp.check_checkbox = (function wesele_app$views$rsvp$check_checkbox(elem,v){
if(cljs.core._EQ_.call(null,v,(1))){
return elem.checked = true;
} else {
return elem.checked = false;
}
});
wesele_app.views.rsvp.ios_swichery = (function wesele_app$views$rsvp$ios_swichery(n,val){
var comp = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (comp){
return (function (this$){
var elem = document.querySelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
var user_db = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-user","get-user",-990309598)], null));
var vec__16624 = reagent.core.argv.call(null,this$);
var _ = cljs.core.nth.call(null,vec__16624,(0),null);
var n__$1 = cljs.core.nth.call(null,vec__16624,(1),null);
var v = cljs.core.nth.call(null,vec__16624,(2),null);
var typ = clojure.string.lower_case.call(null,n__$1);
wesele_app.views.rsvp.switchery_change_event.call(null,typ,n__$1,elem,user_db);

wesele_app.views.rsvp.check_checkbox.call(null,elem,v);

return cljs.core.swap_BANG_.call(null,comp,cljs.core.assoc,new cljs.core.Keyword(null,"switchery","switchery",-1899436739),Switchery(elem,({"color": "#71266E", "jackColor": "#AA71A7"})));
});})(comp))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (comp){
return (function (this$){
var elem = document.querySelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
var user_db = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-user","get-user",-990309598)], null));
var vec__16627 = reagent.core.argv.call(null,this$);
var _ = cljs.core.nth.call(null,vec__16627,(0),null);
var n__$1 = cljs.core.nth.call(null,vec__16627,(1),null);
var v = cljs.core.nth.call(null,vec__16627,(2),null);
return wesele_app.views.rsvp.check_checkbox.call(null,elem,v);
});})(comp))
,new cljs.core.Keyword(null,"display-name","display-name",694513143),"ios-swichery",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (comp){
return (function (){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.js-switch","input.js-switch",199172941),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"id","id",-1388402092),n], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null));
});})(comp))
], null));
});
wesele_app.views.rsvp.rsvp_page = (function wesele_app$views$rsvp$rsvp_page(){
var user = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-user","get-user",-990309598)], null));
var r1 = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-rsvp1","get-rsvp1",-105922859)], null));
var r2 = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-rsvp2","get-rsvp2",1042252446)], null));
var is_rsvp2 = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"is-rsvp2","is-rsvp2",732284911)], null));
return ((function (user,r1,r2,is_rsvp2){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wesele_app.views.navbar.nav_bar], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"RSVP PAGE"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-10.offset-md-1","div.col-md-10.offset-md-1",-701837108),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blockquote.blockquote.text-justify","blockquote.blockquote.text-justify",1643961759),"Aenean libero enim, semper id neque sit amet, luctus varius purus. Suspendisse ultricies porta elementum. Vestibulum iaculis mattis turpis, vitae condimentum justo vehicula eu."], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12.text-center","div.col-md-12.text-center",272188955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Wesele ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wesele_app.views.rsvp.ios_swichery,"RSVP1",cljs.core.deref.call(null,r1)], null)], null)," ",((cljs.core._EQ_.call(null,cljs.core.deref.call(null,is_rsvp2),(1)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Poprawiny ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wesele_app.views.rsvp.ios_swichery,"RSVP2",cljs.core.deref.call(null,r2)], null)], null):null)], null)], null)], null)], null);
});
;})(user,r1,r2,is_rsvp2))
});

//# sourceMappingURL=rsvp.js.map?rel=1513114946542