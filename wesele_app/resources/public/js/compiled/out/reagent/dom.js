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
var or__33334__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__33334__auto__)){
return or__33334__auto__;
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
var _STAR_always_update_STAR_54308 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_54308){
return (function (){
var _STAR_always_update_STAR_54309 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_54309;
}});})(_STAR_always_update_STAR_54308))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_54308;
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
var args54310 = [];
var len__34447__auto___54313 = arguments.length;
var i__34448__auto___54314 = (0);
while(true){
if((i__34448__auto___54314 < len__34447__auto___54313)){
args54310.push((arguments[i__34448__auto___54314]));

var G__54315 = (i__34448__auto___54314 + (1));
i__34448__auto___54314 = G__54315;
continue;
} else {
}
break;
}

var G__54312 = args54310.length;
switch (G__54312) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args54310.length)].join('')));

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

var seq__54321_54325 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__54322_54326 = null;
var count__54323_54327 = (0);
var i__54324_54328 = (0);
while(true){
if((i__54324_54328 < count__54323_54327)){
var v_54329 = cljs.core._nth.call(null,chunk__54322_54326,i__54324_54328);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_54329);

var G__54330 = seq__54321_54325;
var G__54331 = chunk__54322_54326;
var G__54332 = count__54323_54327;
var G__54333 = (i__54324_54328 + (1));
seq__54321_54325 = G__54330;
chunk__54322_54326 = G__54331;
count__54323_54327 = G__54332;
i__54324_54328 = G__54333;
continue;
} else {
var temp__4657__auto___54334 = cljs.core.seq.call(null,seq__54321_54325);
if(temp__4657__auto___54334){
var seq__54321_54335__$1 = temp__4657__auto___54334;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54321_54335__$1)){
var c__34153__auto___54336 = cljs.core.chunk_first.call(null,seq__54321_54335__$1);
var G__54337 = cljs.core.chunk_rest.call(null,seq__54321_54335__$1);
var G__54338 = c__34153__auto___54336;
var G__54339 = cljs.core.count.call(null,c__34153__auto___54336);
var G__54340 = (0);
seq__54321_54325 = G__54337;
chunk__54322_54326 = G__54338;
count__54323_54327 = G__54339;
i__54324_54328 = G__54340;
continue;
} else {
var v_54341 = cljs.core.first.call(null,seq__54321_54335__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_54341);

var G__54342 = cljs.core.next.call(null,seq__54321_54335__$1);
var G__54343 = null;
var G__54344 = (0);
var G__54345 = (0);
seq__54321_54325 = G__54342;
chunk__54322_54326 = G__54343;
count__54323_54327 = G__54344;
i__54324_54328 = G__54345;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1510317294774