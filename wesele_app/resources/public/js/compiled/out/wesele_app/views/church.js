// Compiled by ClojureScript 1.9.494 {}
goog.provide('wesele_app.views.church');
goog.require('cljs.core');
goog.require('wesele_app.views.navbar');
goog.require('reagent.core');
wesele_app.views.church.map_view = (function wesele_app$views$church$map_view(){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#map1.map-view-container","div#map1.map-view-container",1736663204)], null);
});
});
wesele_app.views.church.church_page = (function wesele_app$views$church$church_page(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
var map = L.map("map1");
var osm_link = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
var osm_attr = "Map data \u00A9 <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors';";
map.setView([53.42713,14.54928],(17));

L.tileLayer(osm_link,({"attribution": osm_attr, "maxZoom": (18)})).addTo(map);

return L.marker([53.42713,14.54928]).addTo(map).bindPopup([cljs.core.str.cljs$core$IFn$_invoke$arity$1("<address><b>Parafia Rzymskokatolicka<br>\u015Bw. Jana Chrzciciela</b><br>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bogurodzicy 3A,<br>70-001 Szczecin"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</address>")].join('')).openPopup();
}),new cljs.core.Keyword(null,"display-name","display-name",694513143),"church page",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wesele_app.views.navbar.nav_bar], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.container_bg","div.container.container_bg",345838364),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.display-3","h1.display-3",-2052701562),"Ko\u015Bci\u00F3\u0142"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.lead","p.lead",-1826375077),"Uroczysto\u015B\u0107 zawarcia Sakramentu Ma\u0142\u017Ce\u0144stwa, odb\u0119dzie si\u0119 dnia 18 sierpnia 2018 roku o godzinie\n17.00 w Bazylice pw. \u015Bw. Jana Chrzciciela przy ul. Bogurodzicy w Szczecinie."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.lead","p.lead",-1826375077),"Na poni\u017Cszej mapie znajduje si\u0119 lokalizacja Bazyliki, aby\u015Bcie drodzy go\u015Bcie, mogli do nas bez problemu\ndotrze\u0107."], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),""], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-8.offset-md-2","div.col-md-8.offset-md-2",-1267109186),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wesele_app.views.church.map_view], null)], null)], null)], null)], null);
})], null));
});

//# sourceMappingURL=church.js.map?rel=1511615361029