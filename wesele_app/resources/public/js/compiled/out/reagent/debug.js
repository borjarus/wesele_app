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
var G__57507__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__57507 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57508__i = 0, G__57508__a = new Array(arguments.length -  0);
while (G__57508__i < G__57508__a.length) {G__57508__a[G__57508__i] = arguments[G__57508__i + 0]; ++G__57508__i;}
  args = new cljs.core.IndexedSeq(G__57508__a,0);
} 
return G__57507__delegate.call(this,args);};
G__57507.cljs$lang$maxFixedArity = 0;
G__57507.cljs$lang$applyTo = (function (arglist__57509){
var args = cljs.core.seq(arglist__57509);
return G__57507__delegate(args);
});
G__57507.cljs$core$IFn$_invoke$arity$variadic = G__57507__delegate;
return G__57507;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__57510__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__57510 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57511__i = 0, G__57511__a = new Array(arguments.length -  0);
while (G__57511__i < G__57511__a.length) {G__57511__a[G__57511__i] = arguments[G__57511__i + 0]; ++G__57511__i;}
  args = new cljs.core.IndexedSeq(G__57511__a,0);
} 
return G__57510__delegate.call(this,args);};
G__57510.cljs$lang$maxFixedArity = 0;
G__57510.cljs$lang$applyTo = (function (arglist__57512){
var args = cljs.core.seq(arglist__57512);
return G__57510__delegate(args);
});
G__57510.cljs$core$IFn$_invoke$arity$variadic = G__57510__delegate;
return G__57510;
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

//# sourceMappingURL=debug.js.map?rel=1494353115876