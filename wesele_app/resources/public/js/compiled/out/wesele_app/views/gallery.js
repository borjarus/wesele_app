// Compiled by ClojureScript 1.9.494 {}
goog.provide('wesele_app.views.gallery');
goog.require('cljs.core');
goog.require('wesele_app.views.navbar');
goog.require('reagent.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cognitect.transit');
goog.require('re_frame.core');
wesele_app.views.gallery.tag_ling_sample_generator = (function wesele_app$views$gallery$tag_ling_sample_generator(n){
var iter__34122__auto__ = (function wesele_app$views$gallery$tag_ling_sample_generator_$_iter__59705(s__59706){
return (new cljs.core.LazySeq(null,(function (){
var s__59706__$1 = s__59706;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__59706__$1);
if(temp__4657__auto__){
var s__59706__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__59706__$2)){
var c__34120__auto__ = cljs.core.chunk_first.call(null,s__59706__$2);
var size__34121__auto__ = cljs.core.count.call(null,c__34120__auto__);
var b__59708 = cljs.core.chunk_buffer.call(null,size__34121__auto__);
if((function (){var i__59707 = (0);
while(true){
if((i__59707 < size__34121__auto__)){
var n1 = cljs.core._nth.call(null,c__34120__auto__,i__59707);
cljs.core.chunk_append.call(null,b__59708,(function (){var genx = cljs.core.name.call(null,cljs.core.gensym.call(null,"tag"));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-1","div.col-md-1",45581582),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.badge.badge-pill.badge-primary","a.badge.badge-pill.badge-primary",-2070164061),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#/galeria",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__59707,genx,n1,c__34120__auto__,size__34121__auto__,b__59708,s__59706__$2,temp__4657__auto__){
return (function (event){
document.getElementById("wedding-gallery").innerHTML = "";

jQuery("#wedding-gallery").nanoGallery("destroy");

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request-gallery","request-gallery",1471550078),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("/gallery/tags/tag"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n1)].join('')], null));

event.preventDefault();

return null;
});})(i__59707,genx,n1,c__34120__auto__,size__34121__auto__,b__59708,s__59706__$2,temp__4657__auto__))
], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Tag"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n1)].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),genx], null));
})());

var G__59709 = (i__59707 + (1));
i__59707 = G__59709;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__59708),wesele_app$views$gallery$tag_ling_sample_generator_$_iter__59705.call(null,cljs.core.chunk_rest.call(null,s__59706__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__59708),null);
}
} else {
var n1 = cljs.core.first.call(null,s__59706__$2);
return cljs.core.cons.call(null,(function (){var genx = cljs.core.name.call(null,cljs.core.gensym.call(null,"tag"));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-1","div.col-md-1",45581582),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.badge.badge-pill.badge-primary","a.badge.badge-pill.badge-primary",-2070164061),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#/galeria",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (genx,n1,s__59706__$2,temp__4657__auto__){
return (function (event){
document.getElementById("wedding-gallery").innerHTML = "";

jQuery("#wedding-gallery").nanoGallery("destroy");

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request-gallery","request-gallery",1471550078),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("/gallery/tags/tag"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n1)].join('')], null));

event.preventDefault();

return null;
});})(genx,n1,s__59706__$2,temp__4657__auto__))
], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Tag"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n1)].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),genx], null));
})(),wesele_app$views$gallery$tag_ling_sample_generator_$_iter__59705.call(null,cljs.core.rest.call(null,s__59706__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__34122__auto__.call(null,cljs.core.range.call(null,(1),(n + (1))));
});
wesele_app.views.gallery.gallery_page = (function wesele_app$views$gallery$gallery_page(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"gallery",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wesele_app.views.navbar.nav_bar], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"GALLERY PAGE"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),wesele_app.views.gallery.tag_ling_sample_generator.call(null,(5))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#wedding-gallery","div#wedding-gallery",620178236)], null)], null)], null)], null)], null);
})], null));
});

//# sourceMappingURL=gallery.js.map?rel=1510317453130