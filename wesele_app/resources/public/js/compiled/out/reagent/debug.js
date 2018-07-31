// Compiled by ClojureScript 1.9.494 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__36222__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__36222 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36223__i = 0, G__36223__a = new Array(arguments.length -  0);
while (G__36223__i < G__36223__a.length) {G__36223__a[G__36223__i] = arguments[G__36223__i + 0]; ++G__36223__i;}
  args = new cljs.core.IndexedSeq(G__36223__a,0);
} 
return G__36222__delegate.call(this,args);};
G__36222.cljs$lang$maxFixedArity = 0;
G__36222.cljs$lang$applyTo = (function (arglist__36224){
var args = cljs.core.seq(arglist__36224);
return G__36222__delegate(args);
});
G__36222.cljs$core$IFn$_invoke$arity$variadic = G__36222__delegate;
return G__36222;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__36225__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__36225 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36226__i = 0, G__36226__a = new Array(arguments.length -  0);
while (G__36226__i < G__36226__a.length) {G__36226__a[G__36226__i] = arguments[G__36226__i + 0]; ++G__36226__i;}
  args = new cljs.core.IndexedSeq(G__36226__a,0);
} 
return G__36225__delegate.call(this,args);};
G__36225.cljs$lang$maxFixedArity = 0;
G__36225.cljs$lang$applyTo = (function (arglist__36227){
var args = cljs.core.seq(arglist__36227);
return G__36225__delegate(args);
});
G__36225.cljs$core$IFn$_invoke$arity$variadic = G__36225__delegate;
return G__36225;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1526470026967