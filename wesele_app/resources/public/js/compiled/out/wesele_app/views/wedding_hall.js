// Compiled by ClojureScript 1.9.494 {}
goog.provide('wesele_app.views.wedding_hall');
goog.require('cljs.core');
goog.require('wesele_app.views.navbar');
goog.require('reagent.core');
wesele_app.views.wedding_hall.map_view = (function wesele_app$views$wedding_hall$map_view(){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#map1.map-view-container","div#map1.map-view-container",1736663204)], null);
});
});
wesele_app.views.wedding_hall.wedding_hall_page = (function wesele_app$views$wedding_hall$wedding_hall_page(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
var map = L.map("map1");
var osm_link = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
var osm_attr = "Map data \u00A9 <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors';";
map.setView([53.42156,14.3759],(17));

L.tileLayer(osm_link,({"attribution": osm_attr, "maxZoom": (18)})).addTo(map);

return L.marker([53.42156,14.3759]).addTo(map).bindPopup([cljs.core.str.cljs$core$IFn$_invoke$arity$1("<address><b>LILA PARK</b><br>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Ko\u015Bcino 1A<br>72-002, Do\u0142uje"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</address>")].join('')).openPopup();
}),new cljs.core.Keyword(null,"display-name","display-name",694513143),"church page",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wesele_app.views.navbar.nav_bar], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.container_bg","div.container.container_bg",345838364),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.pt-4","p.pt-4",2055159176),""], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.lead.text-center","p.lead.text-center",-595720185),"Po uroczysto\u015Bci b\u0119dziemy bawi\u0107 si\u0119 i radowa\u0107 wsp\u00F3lnie w pi\u0119knej sali weselnej Lila Park w Ko\u015Bcinie,\nznajduj\u0105cej si\u0119 15 km od centrum Szczecina."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.lead.text-center","p.lead.text-center",-595720185),"Mili go\u015Bcie, na poni\u017Cszej mapie znajduje si\u0119 lokalizacja sali, aby\u015Bcie szybko i bez trudu dotarli na wesele."], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),""], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-8.offset-md-2","div.col-md-8.offset-md-2",-1267109186),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wesele_app.views.wedding_hall.map_view], null)], null)], null)], null)], null);
})], null));
});

//# sourceMappingURL=wedding_hall.js.map?rel=1513114931519