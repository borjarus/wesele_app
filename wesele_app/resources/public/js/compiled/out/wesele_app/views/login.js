// Compiled by ClojureScript 1.9.494 {}
goog.provide('wesele_app.views.login');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('reagent.core');
goog.require('re_frame.core');
wesele_app.views.login.handle_login = (function wesele_app$views$login$handle_login(e,u,p,n){
if(((!(cljs.core.empty_QMARK_.call(null,u))) && (cljs.core._EQ_.call(null,(13),e.charCode))) || ((!((n == null))) && (!(cljs.core.empty_QMARK_.call(null,u))))){
var data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),u,new cljs.core.Keyword(null,"password","password",417022471),p], null);
e.preventDefault();

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request-login","request-login",-1181366312),data], null));
} else {
return null;
}
});
wesele_app.views.login.login_page = (function wesele_app$views$login$login_page(){
var form_params = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),"",new cljs.core.Keyword(null,"password","password",417022471),""], null));
return ((function (form_params){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.form-login","form.form-login",2080339814),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),"#/login",new cljs.core.Keyword(null,"method","method",55703592),"post"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header","div.header",1964513620),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Zaloguj si\u0119"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.avatar","div.avatar",-935122004),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/logotyp.png",new cljs.core.Keyword(null,"alt","alt",-3214426),""], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inputs","div.inputs",-928782237),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"username",new cljs.core.Keyword(null,"id","id",-1388402092),"username",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Login",new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),((function (form_params){
return (function (p1__14347_SHARP_){
return wesele_app.views.login.handle_login.call(null,p1__14347_SHARP_,document.getElementById("username").value,document.getElementById("password").value,null);
});})(form_params))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"password",new cljs.core.Keyword(null,"id","id",-1388402092),"password",new cljs.core.Keyword(null,"value","value",305978217),"An1@&m1ReK",new cljs.core.Keyword(null,"type","type",1174270348),"hidden",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Password"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.clear","div.clear",1593273433)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button-login","div.button-login",-988269686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Zaloguj",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (form_params){
return (function (e){
return wesele_app.views.login.handle_login.call(null,e,document.getElementById("username").value,document.getElementById("password").value,"button");
});})(form_params))
], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.clear","div.clear",1593273433)], null)], null);
});
;})(form_params))
});

//# sourceMappingURL=login.js.map?rel=1511860585538