// Compiled by ClojureScript 1.9.494 {}
goog.provide('wesele_app.views.navbar');
goog.require('cljs.core');
goog.require('re_frame.core');
wesele_app.views.navbar.handle_login = (function wesele_app$views$navbar$handle_login(e,u,p){
if(cljs.core._EQ_.call(null,(13),e.charCode)){
var data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),u,new cljs.core.Keyword(null,"password","password",417022471),p], null);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request-login","request-login",-1181366312),data], null));
} else {
return null;
}
});
wesele_app.views.navbar.inic_2_letters = (function wesele_app$views$navbar$inic_2_letters(n){
var col = cljs.core.map.call(null,(function (p1__15608_SHARP_){
return clojure.string.split.call(null,p1__15608_SHARP_,/\s+/);
}),cljs.core.map.call(null,(function (p1__15609_SHARP_){
return clojure.string.trim.call(null,p1__15609_SHARP_);
}),clojure.string.split.call(null,n,/\|/)));
return cljs.core.map.call(null,((function (col){
return (function (p1__15610_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,p1__15610_SHARP_);
});})(col))
,cljs.core.map.call(null,cljs.core.flatten,cljs.core.map.call(null,((function (col){
return (function (c){
return cljs.core.map.call(null,((function (col){
return (function (p1__15611_SHARP_){
return cljs.core.take.call(null,(2),p1__15611_SHARP_);
});})(col))
,c);
});})(col))
,col)));
});
wesele_app.views.navbar.users_name = (function wesele_app$views$navbar$users_name(name,ver){
var inicj = clojure.string.join.call(null,"|",wesele_app.views.navbar.inic_2_letters.call(null,name));
var and1 = clojure.string.replace.call(null,inicj,/\|/," & ");
var and2 = clojure.string.replace.call(null,name,/\|/," & ");
if(cljs.core._EQ_.call(null,ver,(1))){
return and1;
} else {
return and2;
}
});
wesele_app.views.navbar.get_menu_icon = (function wesele_app$views$navbar$get_menu_icon(){
var active_link = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.menu-icon","span.menu-icon",-986462898),(function (){var pred__15615 = cljs.core._EQ_;
var expr__15616 = cljs.core.deref.call(null,active_link);
if(cljs.core.truth_(pred__15615.call(null,new cljs.core.Keyword(null,"home-page","home-page",1804156194),expr__15616))){
return "a";
} else {
if(cljs.core.truth_(pred__15615.call(null,new cljs.core.Keyword(null,"rsvp-page","rsvp-page",2134532812),expr__15616))){
return "d";
} else {
if(cljs.core.truth_(pred__15615.call(null,new cljs.core.Keyword(null,"church-page","church-page",1788377738),expr__15616))){
return "b";
} else {
if(cljs.core.truth_(pred__15615.call(null,new cljs.core.Keyword(null,"wedding-hall-page","wedding-hall-page",1494295634),expr__15616))){
return "c";
} else {
if(cljs.core.truth_(pred__15615.call(null,new cljs.core.Keyword(null,"gallery-page","gallery-page",-1458032316),expr__15616))){
return "e";
} else {
if(cljs.core.truth_(pred__15615.call(null,new cljs.core.Keyword(null,"gifts-page","gifts-page",-826646564),expr__15616))){
return "f";
} else {
return "a";
}
}
}
}
}
}
})()], null);
});
wesele_app.views.navbar.nav_item = (function wesele_app$views$navbar$nav_item(){
var active_link = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994)], null));
return ((function (active_link){
return (function (item){
var active_class = ((cljs.core._EQ_.call(null,cljs.core.name.call(null,cljs.core.deref.call(null,active_link)),new cljs.core.Keyword(null,"sname","sname",-1950917667).cljs$core$IFn$_invoke$arity$1(item)))?" active ":"");
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("nav-item"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(active_class)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-link","a.nav-link",-1155633499),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(item)], null)], null);
});
;})(active_link))
});
wesele_app.views.navbar.nav_bar = (function wesele_app$views$navbar$nav_bar(){
var menu = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu","menu",352255198)], null));
var user = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-user","get-user",-990309598)], null));
return ((function (menu,user){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header-top","div.header-top",-460304949),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-8.offset-md-2.header-top-container","div.col-md-8.offset-md-2.header-top-container",-332898139),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-5","div.col-5",-2108746862),"Ania"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-2","div.col-2",-1787809207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.bird","img.bird",222875218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/bird.png",new cljs.core.Keyword(null,"alt","alt",-3214426),""], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-5","div.col-5",-2108746862),"Mirek"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.navbar.navbar-expand-md.navbar-light.main-navbar","nav.navbar.navbar-expand-md.navbar-light.main-navbar",641037753),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.navbar-toggler","button.navbar-toggler",-295102866),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"collapse",new cljs.core.Keyword(null,"data-target","data-target",-113904678),"#exCollapsingNavbar2",new cljs.core.Keyword(null,"aria-controls","aria-controls",-1872379154),"exCollapsingNavbar2",new cljs.core.Keyword(null,"aria-expanded","aria-expanded",-1360942393),"false",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Toggle navigation"], null),"\u2630"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.collapse.navbar-collapse","div.collapse.navbar-collapse",-2098143156),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"exCollapsingNavbar2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-brand","a.navbar-brand",691442118),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),wesele_app.views.navbar.get_menu_icon.call(null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.navbar-nav","ul.nav.navbar-nav",1805559761),cljs.core.map.call(null,((function (menu,user){
return (function (x){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"on-off","on-off",420433376).cljs$core$IFn$_invoke$arity$1(x),(1))){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wesele_app.views.navbar.nav_item,x], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(x)], null));
} else {
return null;
}
});})(menu,user))
,cljs.core.deref.call(null,menu))], null)], null),(((cljs.core.deref.call(null,user) == null))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.search-panel","div.search-panel",1701190536),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-lock","i.fa.fa-lock",-861743067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Login",new cljs.core.Keyword(null,"name","name",1843675177),"username",new cljs.core.Keyword(null,"id","id",-1388402092),"username",new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),((function (menu,user){
return (function (p1__15618_SHARP_){
return wesele_app.views.navbar.handle_login.call(null,p1__15618_SHARP_,p1__15618_SHARP_.target.value,document.getElementById("password").value);
});})(menu,user))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"hidden",new cljs.core.Keyword(null,"value","value",305978217),"An1@&m1ReK",new cljs.core.Keyword(null,"name","name",1843675177),"password",new cljs.core.Keyword(null,"id","id",-1388402092),"password"], null)], null)], null):(function (){var nazwa = cljs.core.get.call(null,new cljs.core.Keyword(null,"details","details",1956795411).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,user)),new cljs.core.Keyword(null,"nazwa","nazwa",-1360021634));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.search-panel","div.search-panel",1701190536),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),wesele_app.views.navbar.users_name.call(null,nazwa,(2))], null),wesele_app.views.navbar.users_name.call(null,nazwa,(1))," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-user","i.fa.fa-user",382004105),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true",new cljs.core.Keyword(null,"title","title",636505583),wesele_app.views.navbar.users_name.call(null,nazwa,(2))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (nazwa,menu,user){
return (function (e){
e.preventDefault();

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request-logout","request-logout",371025838),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,user))], null)], null));
});})(nazwa,menu,user))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-unlock-alt","i.fa.fa-unlock-alt",-2116864882),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true",new cljs.core.Keyword(null,"title","title",636505583),"Wyloguj"], null)], null)], null)], null);
})())], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.header-bottom","div.row.header-bottom",-683154169)], null)], null);
});
;})(menu,user))
});

//# sourceMappingURL=navbar.js.map?rel=1513371122174