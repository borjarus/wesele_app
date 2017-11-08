// Compiled by ClojureScript 1.9.494 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(!((reagent.dom.imported == null))){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__43494__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__43494__auto__)){
return or__43494__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_57940 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_57940){
return (function (){
var _STAR_always_update_STAR_57941 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_57941;
}});})(_STAR_always_update_STAR_57940))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_57940;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args57942 = [];
var len__44607__auto___57945 = arguments.length;
var i__44608__auto___57946 = (0);
while(true){
if((i__44608__auto___57946 < len__44607__auto___57945)){
args57942.push((arguments[i__44608__auto___57946]));

var G__57947 = (i__44608__auto___57946 + (1));
i__44608__auto___57946 = G__57947;
continue;
} else {
}
break;
}

var G__57944 = args57942.length;
switch (G__57944) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args57942.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__57953_57957 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__57954_57958 = null;
var count__57955_57959 = (0);
var i__57956_57960 = (0);
while(true){
if((i__57956_57960 < count__57955_57959)){
var v_57961 = cljs.core._nth.call(null,chunk__57954_57958,i__57956_57960);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_57961);

var G__57962 = seq__57953_57957;
var G__57963 = chunk__57954_57958;
var G__57964 = count__57955_57959;
var G__57965 = (i__57956_57960 + (1));
seq__57953_57957 = G__57962;
chunk__57954_57958 = G__57963;
count__57955_57959 = G__57964;
i__57956_57960 = G__57965;
continue;
} else {
var temp__4657__auto___57966 = cljs.core.seq.call(null,seq__57953_57957);
if(temp__4657__auto___57966){
var seq__57953_57967__$1 = temp__4657__auto___57966;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57953_57967__$1)){
var c__44313__auto___57968 = cljs.core.chunk_first.call(null,seq__57953_57967__$1);
var G__57969 = cljs.core.chunk_rest.call(null,seq__57953_57967__$1);
var G__57970 = c__44313__auto___57968;
var G__57971 = cljs.core.count.call(null,c__44313__auto___57968);
var G__57972 = (0);
seq__57953_57957 = G__57969;
chunk__57954_57958 = G__57970;
count__57955_57959 = G__57971;
i__57956_57960 = G__57972;
continue;
} else {
var v_57973 = cljs.core.first.call(null,seq__57953_57967__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_57973);

var G__57974 = cljs.core.next.call(null,seq__57953_57967__$1);
var G__57975 = null;
var G__57976 = (0);
var G__57977 = (0);
seq__57953_57957 = G__57974;
chunk__57954_57958 = G__57975;
count__57955_57959 = G__57976;
i__57956_57960 = G__57977;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1494353123860