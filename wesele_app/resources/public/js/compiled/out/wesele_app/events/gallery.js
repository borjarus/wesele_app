// Compiled by ClojureScript 1.9.494 {}
goog.provide('wesele_app.events.gallery');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('day8.re_frame.http_fx');
wesele_app.events.gallery.single_image_obj = (function wesele_app$events$gallery$single_image_obj(url,t_url,title,description){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),url,new cljs.core.Keyword(null,"srct","srct",-1744368747),t_url,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"description","description",-1428560544),description], null);
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"gallery","gallery",1782868083),(function (db,p__60771){
var vec__60772 = p__60771;
var _ = cljs.core.nth.call(null,vec__60772,(0),null);
var gallery_opts = cljs.core.nth.call(null,vec__60772,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"gallery","gallery",1782868083),gallery_opts);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"request-gallery","request-gallery",1471550078),(function (p__60775,p__60776){
var map__60777 = p__60775;
var map__60777__$1 = ((((!((map__60777 == null)))?((((map__60777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60777.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60777):map__60777);
var db = cljs.core.get.call(null,map__60777__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__60778 = p__60776;
var _ = cljs.core.nth.call(null,vec__60778,(0),null);
var url = cljs.core.nth.call(null,vec__60778,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),url,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-response","process-response",-26308683)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-response","bad-response",1911422950)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true)], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"show-nano-gallery","show-nano-gallery",-1207070006),(function (){
var gallery = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gallery-sub","gallery-sub",886328274)], null));
return jQuery("#wedding-gallery").nanoGallery(cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,gallery)));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"process-response","process-response",-26308683),(function (p__60783,p__60784){
var map__60785 = p__60783;
var map__60785__$1 = ((((!((map__60785 == null)))?((((map__60785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60785.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60785):map__60785);
var db = cljs.core.get.call(null,map__60785__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__60786 = p__60784;
var _ = cljs.core.nth.call(null,vec__60786,(0),null);
var response = cljs.core.nth.call(null,vec__60786,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var out = cljs.core.map.call(null,((function (map__60785,map__60785__$1,db,vec__60786,_,response){
return (function (p1__60782_SHARP_){
return wesele_app.events.gallery.single_image_obj.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path_src","path_src",1161642275).cljs$core$IFn$_invoke$arity$1(p1__60782_SHARP_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"filename","filename",-1428840783).cljs$core$IFn$_invoke$arity$1(p1__60782_SHARP_))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path_src","path_src",1161642275).cljs$core$IFn$_invoke$arity$1(p1__60782_SHARP_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"filename","filename",-1428840783).cljs$core$IFn$_invoke$arity$1(p1__60782_SHARP_))].join(''),"Title","Bla Bla Bla");
});})(map__60785,map__60785__$1,db,vec__60786,_,response))
,response);
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gallery","gallery",1782868083),new cljs.core.Keyword(null,"items","items",1031954938)], null),out);
})(),new cljs.core.Keyword(null,"show-nano-gallery","show-nano-gallery",-1207070006),_], null);
}));

//# sourceMappingURL=gallery.js.map?rel=1510317479640