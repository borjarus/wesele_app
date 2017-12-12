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
var G__9175__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9175 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9176__i = 0, G__9176__a = new Array(arguments.length -  0);
while (G__9176__i < G__9176__a.length) {G__9176__a[G__9176__i] = arguments[G__9176__i + 0]; ++G__9176__i;}
  args = new cljs.core.IndexedSeq(G__9176__a,0);
} 
return G__9175__delegate.call(this,args);};
G__9175.cljs$lang$maxFixedArity = 0;
G__9175.cljs$lang$applyTo = (function (arglist__9177){
var args = cljs.core.seq(arglist__9177);
return G__9175__delegate(args);
});
G__9175.cljs$core$IFn$_invoke$arity$variadic = G__9175__delegate;
return G__9175;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__9178__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9178 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9179__i = 0, G__9179__a = new Array(arguments.length -  0);
while (G__9179__i < G__9179__a.length) {G__9179__a[G__9179__i] = arguments[G__9179__i + 0]; ++G__9179__i;}
  args = new cljs.core.IndexedSeq(G__9179__a,0);
} 
return G__9178__delegate.call(this,args);};
G__9178.cljs$lang$maxFixedArity = 0;
G__9178.cljs$lang$applyTo = (function (arglist__9180){
var args = cljs.core.seq(arglist__9180);
return G__9178__delegate(args);
});
G__9178.cljs$core$IFn$_invoke$arity$variadic = G__9178__delegate;
return G__9178;
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

//# sourceMappingURL=debug.js.map?rel=1513114908296