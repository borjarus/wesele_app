// Compiled by ClojureScript 1.9.494 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__40093__auto__,writer__40094__auto__,opt__40095__auto__){
return cljs.core._write.call(null,writer__40094__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__40602__auto__ = [];
var len__40595__auto___46661 = arguments.length;
var i__40596__auto___46662 = (0);
while(true){
if((i__40596__auto___46662 < len__40595__auto___46661)){
args__40602__auto__.push((arguments[i__40596__auto___46662]));

var G__46663 = (i__40596__auto___46662 + (1));
i__40596__auto___46662 = G__46663;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((0) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__40603__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq46660){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46660));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__40602__auto__ = [];
var len__40595__auto___46665 = arguments.length;
var i__40596__auto___46666 = (0);
while(true){
if((i__40596__auto___46666 < len__40595__auto___46665)){
args__40602__auto__.push((arguments[i__40596__auto___46666]));

var G__46667 = (i__40596__auto___46666 + (1));
i__40596__auto___46666 = G__46667;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((0) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__40603__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq46664){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46664));
});

var g_QMARK__46668 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_46669 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__46668){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__46668))
,null));
var mkg_46670 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__46668,g_46669){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__46668,g_46669))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__46668,g_46669,mkg_46670){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__46668).call(null,x);
});})(g_QMARK__46668,g_46669,mkg_46670))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__46668,g_46669,mkg_46670){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_46670).call(null,gfn);
});})(g_QMARK__46668,g_46669,mkg_46670))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__46668,g_46669,mkg_46670){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_46669).call(null,generator);
});})(g_QMARK__46668,g_46669,mkg_46670))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__46632__auto___46690 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__46632__auto___46690){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__40602__auto__ = [];
var len__40595__auto___46691 = arguments.length;
var i__40596__auto___46692 = (0);
while(true){
if((i__40596__auto___46692 < len__40595__auto___46691)){
args__40602__auto__.push((arguments[i__40596__auto___46692]));

var G__46693 = (i__40596__auto___46692 + (1));
i__40596__auto___46692 = G__46693;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((0) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__40603__auto__);
});})(g__46632__auto___46690))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46632__auto___46690){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46632__auto___46690),args);
});})(g__46632__auto___46690))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__46632__auto___46690){
return (function (seq46671){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46671));
});})(g__46632__auto___46690))
;


var g__46632__auto___46694 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__46632__auto___46694){
return (function cljs$spec$impl$gen$list(var_args){
var args__40602__auto__ = [];
var len__40595__auto___46695 = arguments.length;
var i__40596__auto___46696 = (0);
while(true){
if((i__40596__auto___46696 < len__40595__auto___46695)){
args__40602__auto__.push((arguments[i__40596__auto___46696]));

var G__46697 = (i__40596__auto___46696 + (1));
i__40596__auto___46696 = G__46697;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((0) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__40603__auto__);
});})(g__46632__auto___46694))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46632__auto___46694){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46632__auto___46694),args);
});})(g__46632__auto___46694))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__46632__auto___46694){
return (function (seq46672){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46672));
});})(g__46632__auto___46694))
;


var g__46632__auto___46698 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__46632__auto___46698){
return (function cljs$spec$impl$gen$map(var_args){
var args__40602__auto__ = [];
var len__40595__auto___46699 = arguments.length;
var i__40596__auto___46700 = (0);
while(true){
if((i__40596__auto___46700 < len__40595__auto___46699)){
args__40602__auto__.push((arguments[i__40596__auto___46700]));

var G__46701 = (i__40596__auto___46700 + (1));
i__40596__auto___46700 = G__46701;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((0) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__40603__auto__);
});})(g__46632__auto___46698))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46632__auto___46698){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46632__auto___46698),args);
});})(g__46632__auto___46698))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__46632__auto___46698){
return (function (seq46673){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46673));
});})(g__46632__auto___46698))
;


var g__46632__auto___46702 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__46632__auto___46702){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__40602__auto__ = [];
var len__40595__auto___46703 = arguments.length;
var i__40596__auto___46704 = (0);
while(true){
if((i__40596__auto___46704 < len__40595__auto___46703)){
args__40602__auto__.push((arguments[i__40596__auto___46704]));

var G__46705 = (i__40596__auto___46704 + (1));
i__40596__auto___46704 = G__46705;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((0) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__40603__auto__);
});})(g__46632__auto___46702))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46632__auto___46702){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46632__auto___46702),args);
});})(g__46632__auto___46702))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__46632__auto___46702){
return (function (seq46674){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46674));
});})(g__46632__auto___46702))
;


var g__46632__auto___46706 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__46632__auto___46706){
return (function cljs$spec$impl$gen$set(var_args){
var args__40602__auto__ = [];
var len__40595__auto___46707 = arguments.length;
var i__40596__auto___46708 = (0);
while(true){
if((i__40596__auto___46708 < len__40595__auto___46707)){
args__40602__auto__.push((arguments[i__40596__auto___46708]));

var G__46709 = (i__40596__auto___46708 + (1));
i__40596__auto___46708 = G__46709;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((0) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__40603__auto__);
});})(g__46632__auto___46706))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46632__auto___46706){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46632__auto___46706),args);
});})(g__46632__auto___46706))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__46632__auto___46706){
return (function (seq46675){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46675));
});})(g__46632__auto___46706))
;


var g__46632__auto___46710 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__46632__auto___46710){
return (function cljs$spec$impl$gen$vector(var_args){
var args__40602__auto__ = [];
var len__40595__auto___46711 = arguments.length;
var i__40596__auto___46712 = (0);
while(true){
if((i__40596__auto___46712 < len__40595__auto___46711)){
args__40602__auto__.push((arguments[i__40596__auto___46712]));

var G__46713 = (i__40596__auto___46712 + (1));
i__40596__auto___46712 = G__46713;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((0) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__40603__auto__);
});})(g__46632__auto___46710))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46632__auto___46710){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46632__auto___46710),args);
});})(g__46632__auto___46710))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__46632__auto___46710){
return (function (seq46676){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46676));
});})(g__46632__auto___46710))
;


var g__46632__auto___46714 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__46632__auto___46714){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__40602__auto__ = [];
var len__40595__auto___46715 = arguments.length;
var i__40596__auto___46716 = (0);
while(true){
if((i__40596__auto___46716 < len__40595__auto___46715)){
args__40602__auto__.push((arguments[i__40596__auto___46716]));

var G__46717 = (i__40596__auto___46716 + (1));
i__40596__auto___46716 = G__46717;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((0) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__40603__auto__);
});})(g__46632__auto___46714))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46632__auto___46714){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46632__auto___46714),args);
});})(g__46632__auto___46714))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__46632__auto___46714){
return (function (seq46677){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46677));
});})(g__46632__auto___46714))
;


var g__46632__auto___46718 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__46632__auto___46718){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__40602__auto__ = [];
var len__40595__auto___46719 = arguments.length;
var i__40596__auto___46720 = (0);
while(true){
if((i__40596__auto___46720 < len__40595__auto___46719)){
args__40602__auto__.push((arguments[i__40596__auto___46720]));

var G__46721 = (i__40596__auto___46720 + (1));
i__40596__auto___46720 = G__46721;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((0) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__40603__auto__);
});})(g__46632__auto___46718))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46632__auto___46718){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46632__auto___46718),args);
});})(g__46632__auto___46718))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__46632__auto___46718){
return (function (seq46678){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46678));
});})(g__46632__auto___46718))
;


var g__46632__auto___46722 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__46632__auto___46722){
return (function cljs$spec$impl$gen$elements(var_args){
var args__40602__auto__ = [];
var len__40595__auto___46723 = arguments.length;
var i__40596__auto___46724 = (0);
while(true){
if((i__40596__auto___46724 < len__40595__auto___46723)){
args__40602__auto__.push((arguments[i__40596__auto___46724]));

var G__46725 = (i__40596__auto___46724 + (1));
i__40596__auto___46724 = G__46725;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((0) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__40603__auto__);
});})(g__46632__auto___46722))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46632__auto___46722){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46632__auto___46722),args);
});})(g__46632__auto___46722))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__46632__auto___46722){
return (function (seq46679){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46679));
});})(g__46632__auto___46722))
;


var g__46632__auto___46726 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__46632__auto___46726){
return (function cljs$spec$impl$gen$bind(var_args){
var args__40602__auto__ = [];
var len__40595__auto___46727 = arguments.length;
var i__40596__auto___46728 = (0);
while(true){
if((i__40596__auto___46728 < len__40595__auto___46727)){
args__40602__auto__.push((arguments[i__40596__auto___46728]));

var G__46729 = (i__40596__auto___46728 + (1));
i__40596__auto___46728 = G__46729;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((0) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__40603__auto__);
});})(g__46632__auto___46726))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46632__auto___46726){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46632__auto___46726),args);
});})(g__46632__auto___46726))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__46632__auto___46726){
return (function (seq46680){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46680));
});})(g__46632__auto___46726))
;


var g__46632__auto___46730 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__46632__auto___46730){
return (function cljs$spec$impl$gen$choose(var_args){
var args__40602__auto__ = [];
var len__40595__auto___46731 = arguments.length;
var i__40596__auto___46732 = (0);
while(true){
if((i__40596__auto___46732 < len__40595__auto___46731)){
args__40602__auto__.push((arguments[i__40596__auto___46732]));

var G__46733 = (i__40596__auto___46732 + (1));
i__40596__auto___46732 = G__46733;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((0) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__40603__auto__);
});})(g__46632__auto___46730))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46632__auto___46730){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46632__auto___46730),args);
});})(g__46632__auto___46730))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__46632__auto___46730){
return (function (seq46681){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46681));
});})(g__46632__auto___46730))
;


var g__46632__auto___46734 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__46632__auto___46734){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__40602__auto__ = [];
var len__40595__auto___46735 = arguments.length;
var i__40596__auto___46736 = (0);
while(true){
if((i__40596__auto___46736 < len__40595__auto___46735)){
args__40602__auto__.push((arguments[i__40596__auto___46736]));

var G__46737 = (i__40596__auto___46736 + (1));
i__40596__auto___46736 = G__46737;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((0) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__40603__auto__);
});})(g__46632__auto___46734))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46632__auto___46734){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46632__auto___46734),args);
});})(g__46632__auto___46734))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__46632__auto___46734){
return (function (seq46682){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46682));
});})(g__46632__auto___46734))
;


var g__46632__auto___46738 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__46632__auto___46738){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__40602__auto__ = [];
var len__40595__auto___46739 = arguments.length;
var i__40596__auto___46740 = (0);
while(true){
if((i__40596__auto___46740 < len__40595__auto___46739)){
args__40602__auto__.push((arguments[i__40596__auto___46740]));

var G__46741 = (i__40596__auto___46740 + (1));
i__40596__auto___46740 = G__46741;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((0) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__40603__auto__);
});})(g__46632__auto___46738))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46632__auto___46738){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46632__auto___46738),args);
});})(g__46632__auto___46738))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__46632__auto___46738){
return (function (seq46683){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46683));
});})(g__46632__auto___46738))
;


var g__46632__auto___46742 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__46632__auto___46742){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__40602__auto__ = [];
var len__40595__auto___46743 = arguments.length;
var i__40596__auto___46744 = (0);
while(true){
if((i__40596__auto___46744 < len__40595__auto___46743)){
args__40602__auto__.push((arguments[i__40596__auto___46744]));

var G__46745 = (i__40596__auto___46744 + (1));
i__40596__auto___46744 = G__46745;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((0) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__40603__auto__);
});})(g__46632__auto___46742))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46632__auto___46742){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46632__auto___46742),args);
});})(g__46632__auto___46742))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__46632__auto___46742){
return (function (seq46684){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46684));
});})(g__46632__auto___46742))
;


var g__46632__auto___46746 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__46632__auto___46746){
return (function cljs$spec$impl$gen$sample(var_args){
var args__40602__auto__ = [];
var len__40595__auto___46747 = arguments.length;
var i__40596__auto___46748 = (0);
while(true){
if((i__40596__auto___46748 < len__40595__auto___46747)){
args__40602__auto__.push((arguments[i__40596__auto___46748]));

var G__46749 = (i__40596__auto___46748 + (1));
i__40596__auto___46748 = G__46749;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((0) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__40603__auto__);
});})(g__46632__auto___46746))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46632__auto___46746){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46632__auto___46746),args);
});})(g__46632__auto___46746))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__46632__auto___46746){
return (function (seq46685){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46685));
});})(g__46632__auto___46746))
;


var g__46632__auto___46750 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__46632__auto___46750){
return (function cljs$spec$impl$gen$return(var_args){
var args__40602__auto__ = [];
var len__40595__auto___46751 = arguments.length;
var i__40596__auto___46752 = (0);
while(true){
if((i__40596__auto___46752 < len__40595__auto___46751)){
args__40602__auto__.push((arguments[i__40596__auto___46752]));

var G__46753 = (i__40596__auto___46752 + (1));
i__40596__auto___46752 = G__46753;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((0) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__40603__auto__);
});})(g__46632__auto___46750))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46632__auto___46750){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46632__auto___46750),args);
});})(g__46632__auto___46750))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__46632__auto___46750){
return (function (seq46686){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46686));
});})(g__46632__auto___46750))
;


var g__46632__auto___46754 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__46632__auto___46754){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__40602__auto__ = [];
var len__40595__auto___46755 = arguments.length;
var i__40596__auto___46756 = (0);
while(true){
if((i__40596__auto___46756 < len__40595__auto___46755)){
args__40602__auto__.push((arguments[i__40596__auto___46756]));

var G__46757 = (i__40596__auto___46756 + (1));
i__40596__auto___46756 = G__46757;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((0) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__40603__auto__);
});})(g__46632__auto___46754))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46632__auto___46754){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46632__auto___46754),args);
});})(g__46632__auto___46754))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__46632__auto___46754){
return (function (seq46687){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46687));
});})(g__46632__auto___46754))
;


var g__46632__auto___46758 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__46632__auto___46758){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__40602__auto__ = [];
var len__40595__auto___46759 = arguments.length;
var i__40596__auto___46760 = (0);
while(true){
if((i__40596__auto___46760 < len__40595__auto___46759)){
args__40602__auto__.push((arguments[i__40596__auto___46760]));

var G__46761 = (i__40596__auto___46760 + (1));
i__40596__auto___46760 = G__46761;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((0) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__40603__auto__);
});})(g__46632__auto___46758))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46632__auto___46758){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46632__auto___46758),args);
});})(g__46632__auto___46758))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__46632__auto___46758){
return (function (seq46688){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46688));
});})(g__46632__auto___46758))
;


var g__46632__auto___46762 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__46632__auto___46762){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__40602__auto__ = [];
var len__40595__auto___46763 = arguments.length;
var i__40596__auto___46764 = (0);
while(true){
if((i__40596__auto___46764 < len__40595__auto___46763)){
args__40602__auto__.push((arguments[i__40596__auto___46764]));

var G__46765 = (i__40596__auto___46764 + (1));
i__40596__auto___46764 = G__46765;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((0) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__40603__auto__);
});})(g__46632__auto___46762))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46632__auto___46762){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46632__auto___46762),args);
});})(g__46632__auto___46762))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__46632__auto___46762){
return (function (seq46689){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46689));
});})(g__46632__auto___46762))
;

var g__46645__auto___46787 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__46645__auto___46787){
return (function cljs$spec$impl$gen$any(var_args){
var args__40602__auto__ = [];
var len__40595__auto___46788 = arguments.length;
var i__40596__auto___46789 = (0);
while(true){
if((i__40596__auto___46789 < len__40595__auto___46788)){
args__40602__auto__.push((arguments[i__40596__auto___46789]));

var G__46790 = (i__40596__auto___46789 + (1));
i__40596__auto___46789 = G__46790;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((0) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__40603__auto__);
});})(g__46645__auto___46787))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46645__auto___46787){
return (function (args){
return cljs.core.deref.call(null,g__46645__auto___46787);
});})(g__46645__auto___46787))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__46645__auto___46787){
return (function (seq46766){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46766));
});})(g__46645__auto___46787))
;


var g__46645__auto___46791 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__46645__auto___46791){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__40602__auto__ = [];
var len__40595__auto___46792 = arguments.length;
var i__40596__auto___46793 = (0);
while(true){
if((i__40596__auto___46793 < len__40595__auto___46792)){
args__40602__auto__.push((arguments[i__40596__auto___46793]));

var G__46794 = (i__40596__auto___46793 + (1));
i__40596__auto___46793 = G__46794;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((0) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__40603__auto__);
});})(g__46645__auto___46791))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46645__auto___46791){
return (function (args){
return cljs.core.deref.call(null,g__46645__auto___46791);
});})(g__46645__auto___46791))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__46645__auto___46791){
return (function (seq46767){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46767));
});})(g__46645__auto___46791))
;


var g__46645__auto___46795 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__46645__auto___46795){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__40602__auto__ = [];
var len__40595__auto___46796 = arguments.length;
var i__40596__auto___46797 = (0);
while(true){
if((i__40596__auto___46797 < len__40595__auto___46796)){
args__40602__auto__.push((arguments[i__40596__auto___46797]));

var G__46798 = (i__40596__auto___46797 + (1));
i__40596__auto___46797 = G__46798;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((0) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__40603__auto__);
});})(g__46645__auto___46795))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46645__auto___46795){
return (function (args){
return cljs.core.deref.call(null,g__46645__auto___46795);
});})(g__46645__auto___46795))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__46645__auto___46795){
return (function (seq46768){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46768));
});})(g__46645__auto___46795))
;


var g__46645__auto___46799 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__46645__auto___46799){
return (function cljs$spec$impl$gen$char(var_args){
var args__40602__auto__ = [];
var len__40595__auto___46800 = arguments.length;
var i__40596__auto___46801 = (0);
while(true){
if((i__40596__auto___46801 < len__40595__auto___46800)){
args__40602__auto__.push((arguments[i__40596__auto___46801]));

var G__46802 = (i__40596__auto___46801 + (1));
i__40596__auto___46801 = G__46802;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((0) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__40603__auto__);
});})(g__46645__auto___46799))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46645__auto___46799){
return (function (args){
return cljs.core.deref.call(null,g__46645__auto___46799);
});})(g__46645__auto___46799))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__46645__auto___46799){
return (function (seq46769){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46769));
});})(g__46645__auto___46799))
;


var g__46645__auto___46803 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__46645__auto___46803){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__40602__auto__ = [];
var len__40595__auto___46804 = arguments.length;
var i__40596__auto___46805 = (0);
while(true){
if((i__40596__auto___46805 < len__40595__auto___46804)){
args__40602__auto__.push((arguments[i__40596__auto___46805]));

var G__46806 = (i__40596__auto___46805 + (1));
i__40596__auto___46805 = G__46806;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((0) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__40603__auto__);
});})(g__46645__auto___46803))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46645__auto___46803){
return (function (args){
return cljs.core.deref.call(null,g__46645__auto___46803);
});})(g__46645__auto___46803))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__46645__auto___46803){
return (function (seq46770){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46770));
});})(g__46645__auto___46803))
;


var g__46645__auto___46807 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__46645__auto___46807){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__40602__auto__ = [];
var len__40595__auto___46808 = arguments.length;
var i__40596__auto___46809 = (0);
while(true){
if((i__40596__auto___46809 < len__40595__auto___46808)){
args__40602__auto__.push((arguments[i__40596__auto___46809]));

var G__46810 = (i__40596__auto___46809 + (1));
i__40596__auto___46809 = G__46810;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((0) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__40603__auto__);
});})(g__46645__auto___46807))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46645__auto___46807){
return (function (args){
return cljs.core.deref.call(null,g__46645__auto___46807);
});})(g__46645__auto___46807))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__46645__auto___46807){
return (function (seq46771){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46771));
});})(g__46645__auto___46807))
;


var g__46645__auto___46811 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__46645__auto___46811){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__40602__auto__ = [];
var len__40595__auto___46812 = arguments.length;
var i__40596__auto___46813 = (0);
while(true){
if((i__40596__auto___46813 < len__40595__auto___46812)){
args__40602__auto__.push((arguments[i__40596__auto___46813]));

var G__46814 = (i__40596__auto___46813 + (1));
i__40596__auto___46813 = G__46814;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((0) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__40603__auto__);
});})(g__46645__auto___46811))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46645__auto___46811){
return (function (args){
return cljs.core.deref.call(null,g__46645__auto___46811);
});})(g__46645__auto___46811))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__46645__auto___46811){
return (function (seq46772){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46772));
});})(g__46645__auto___46811))
;


var g__46645__auto___46815 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__46645__auto___46815){
return (function cljs$spec$impl$gen$double(var_args){
var args__40602__auto__ = [];
var len__40595__auto___46816 = arguments.length;
var i__40596__auto___46817 = (0);
while(true){
if((i__40596__auto___46817 < len__40595__auto___46816)){
args__40602__auto__.push((arguments[i__40596__auto___46817]));

var G__46818 = (i__40596__auto___46817 + (1));
i__40596__auto___46817 = G__46818;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((0) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__40603__auto__);
});})(g__46645__auto___46815))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46645__auto___46815){
return (function (args){
return cljs.core.deref.call(null,g__46645__auto___46815);
});})(g__46645__auto___46815))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__46645__auto___46815){
return (function (seq46773){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46773));
});})(g__46645__auto___46815))
;


var g__46645__auto___46819 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__46645__auto___46819){
return (function cljs$spec$impl$gen$int(var_args){
var args__40602__auto__ = [];
var len__40595__auto___46820 = arguments.length;
var i__40596__auto___46821 = (0);
while(true){
if((i__40596__auto___46821 < len__40595__auto___46820)){
args__40602__auto__.push((arguments[i__40596__auto___46821]));

var G__46822 = (i__40596__auto___46821 + (1));
i__40596__auto___46821 = G__46822;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((0) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__40603__auto__);
});})(g__46645__auto___46819))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46645__auto___46819){
return (function (args){
return cljs.core.deref.call(null,g__46645__auto___46819);
});})(g__46645__auto___46819))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__46645__auto___46819){
return (function (seq46774){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46774));
});})(g__46645__auto___46819))
;


var g__46645__auto___46823 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__46645__auto___46823){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__40602__auto__ = [];
var len__40595__auto___46824 = arguments.length;
var i__40596__auto___46825 = (0);
while(true){
if((i__40596__auto___46825 < len__40595__auto___46824)){
args__40602__auto__.push((arguments[i__40596__auto___46825]));

var G__46826 = (i__40596__auto___46825 + (1));
i__40596__auto___46825 = G__46826;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((0) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__40603__auto__);
});})(g__46645__auto___46823))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46645__auto___46823){
return (function (args){
return cljs.core.deref.call(null,g__46645__auto___46823);
});})(g__46645__auto___46823))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__46645__auto___46823){
return (function (seq46775){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46775));
});})(g__46645__auto___46823))
;


var g__46645__auto___46827 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__46645__auto___46827){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__40602__auto__ = [];
var len__40595__auto___46828 = arguments.length;
var i__40596__auto___46829 = (0);
while(true){
if((i__40596__auto___46829 < len__40595__auto___46828)){
args__40602__auto__.push((arguments[i__40596__auto___46829]));

var G__46830 = (i__40596__auto___46829 + (1));
i__40596__auto___46829 = G__46830;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((0) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__40603__auto__);
});})(g__46645__auto___46827))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46645__auto___46827){
return (function (args){
return cljs.core.deref.call(null,g__46645__auto___46827);
});})(g__46645__auto___46827))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__46645__auto___46827){
return (function (seq46776){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46776));
});})(g__46645__auto___46827))
;


var g__46645__auto___46831 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__46645__auto___46831){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__40602__auto__ = [];
var len__40595__auto___46832 = arguments.length;
var i__40596__auto___46833 = (0);
while(true){
if((i__40596__auto___46833 < len__40595__auto___46832)){
args__40602__auto__.push((arguments[i__40596__auto___46833]));

var G__46834 = (i__40596__auto___46833 + (1));
i__40596__auto___46833 = G__46834;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((0) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__40603__auto__);
});})(g__46645__auto___46831))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46645__auto___46831){
return (function (args){
return cljs.core.deref.call(null,g__46645__auto___46831);
});})(g__46645__auto___46831))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__46645__auto___46831){
return (function (seq46777){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46777));
});})(g__46645__auto___46831))
;


var g__46645__auto___46835 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__46645__auto___46835){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__40602__auto__ = [];
var len__40595__auto___46836 = arguments.length;
var i__40596__auto___46837 = (0);
while(true){
if((i__40596__auto___46837 < len__40595__auto___46836)){
args__40602__auto__.push((arguments[i__40596__auto___46837]));

var G__46838 = (i__40596__auto___46837 + (1));
i__40596__auto___46837 = G__46838;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((0) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__40603__auto__);
});})(g__46645__auto___46835))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46645__auto___46835){
return (function (args){
return cljs.core.deref.call(null,g__46645__auto___46835);
});})(g__46645__auto___46835))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__46645__auto___46835){
return (function (seq46778){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46778));
});})(g__46645__auto___46835))
;


var g__46645__auto___46839 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__46645__auto___46839){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__40602__auto__ = [];
var len__40595__auto___46840 = arguments.length;
var i__40596__auto___46841 = (0);
while(true){
if((i__40596__auto___46841 < len__40595__auto___46840)){
args__40602__auto__.push((arguments[i__40596__auto___46841]));

var G__46842 = (i__40596__auto___46841 + (1));
i__40596__auto___46841 = G__46842;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((0) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__40603__auto__);
});})(g__46645__auto___46839))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46645__auto___46839){
return (function (args){
return cljs.core.deref.call(null,g__46645__auto___46839);
});})(g__46645__auto___46839))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__46645__auto___46839){
return (function (seq46779){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46779));
});})(g__46645__auto___46839))
;


var g__46645__auto___46843 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__46645__auto___46843){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__40602__auto__ = [];
var len__40595__auto___46844 = arguments.length;
var i__40596__auto___46845 = (0);
while(true){
if((i__40596__auto___46845 < len__40595__auto___46844)){
args__40602__auto__.push((arguments[i__40596__auto___46845]));

var G__46846 = (i__40596__auto___46845 + (1));
i__40596__auto___46845 = G__46846;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((0) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__40603__auto__);
});})(g__46645__auto___46843))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46645__auto___46843){
return (function (args){
return cljs.core.deref.call(null,g__46645__auto___46843);
});})(g__46645__auto___46843))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__46645__auto___46843){
return (function (seq46780){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46780));
});})(g__46645__auto___46843))
;


var g__46645__auto___46847 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__46645__auto___46847){
return (function cljs$spec$impl$gen$string(var_args){
var args__40602__auto__ = [];
var len__40595__auto___46848 = arguments.length;
var i__40596__auto___46849 = (0);
while(true){
if((i__40596__auto___46849 < len__40595__auto___46848)){
args__40602__auto__.push((arguments[i__40596__auto___46849]));

var G__46850 = (i__40596__auto___46849 + (1));
i__40596__auto___46849 = G__46850;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((0) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__40603__auto__);
});})(g__46645__auto___46847))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46645__auto___46847){
return (function (args){
return cljs.core.deref.call(null,g__46645__auto___46847);
});})(g__46645__auto___46847))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__46645__auto___46847){
return (function (seq46781){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46781));
});})(g__46645__auto___46847))
;


var g__46645__auto___46851 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__46645__auto___46851){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__40602__auto__ = [];
var len__40595__auto___46852 = arguments.length;
var i__40596__auto___46853 = (0);
while(true){
if((i__40596__auto___46853 < len__40595__auto___46852)){
args__40602__auto__.push((arguments[i__40596__auto___46853]));

var G__46854 = (i__40596__auto___46853 + (1));
i__40596__auto___46853 = G__46854;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((0) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__40603__auto__);
});})(g__46645__auto___46851))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46645__auto___46851){
return (function (args){
return cljs.core.deref.call(null,g__46645__auto___46851);
});})(g__46645__auto___46851))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__46645__auto___46851){
return (function (seq46782){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46782));
});})(g__46645__auto___46851))
;


var g__46645__auto___46855 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__46645__auto___46855){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__40602__auto__ = [];
var len__40595__auto___46856 = arguments.length;
var i__40596__auto___46857 = (0);
while(true){
if((i__40596__auto___46857 < len__40595__auto___46856)){
args__40602__auto__.push((arguments[i__40596__auto___46857]));

var G__46858 = (i__40596__auto___46857 + (1));
i__40596__auto___46857 = G__46858;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((0) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__40603__auto__);
});})(g__46645__auto___46855))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46645__auto___46855){
return (function (args){
return cljs.core.deref.call(null,g__46645__auto___46855);
});})(g__46645__auto___46855))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__46645__auto___46855){
return (function (seq46783){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46783));
});})(g__46645__auto___46855))
;


var g__46645__auto___46859 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__46645__auto___46859){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__40602__auto__ = [];
var len__40595__auto___46860 = arguments.length;
var i__40596__auto___46861 = (0);
while(true){
if((i__40596__auto___46861 < len__40595__auto___46860)){
args__40602__auto__.push((arguments[i__40596__auto___46861]));

var G__46862 = (i__40596__auto___46861 + (1));
i__40596__auto___46861 = G__46862;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((0) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__40603__auto__);
});})(g__46645__auto___46859))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46645__auto___46859){
return (function (args){
return cljs.core.deref.call(null,g__46645__auto___46859);
});})(g__46645__auto___46859))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__46645__auto___46859){
return (function (seq46784){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46784));
});})(g__46645__auto___46859))
;


var g__46645__auto___46863 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__46645__auto___46863){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__40602__auto__ = [];
var len__40595__auto___46864 = arguments.length;
var i__40596__auto___46865 = (0);
while(true){
if((i__40596__auto___46865 < len__40595__auto___46864)){
args__40602__auto__.push((arguments[i__40596__auto___46865]));

var G__46866 = (i__40596__auto___46865 + (1));
i__40596__auto___46865 = G__46866;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((0) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__40603__auto__);
});})(g__46645__auto___46863))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46645__auto___46863){
return (function (args){
return cljs.core.deref.call(null,g__46645__auto___46863);
});})(g__46645__auto___46863))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__46645__auto___46863){
return (function (seq46785){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46785));
});})(g__46645__auto___46863))
;


var g__46645__auto___46867 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__46645__auto___46867){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__40602__auto__ = [];
var len__40595__auto___46868 = arguments.length;
var i__40596__auto___46869 = (0);
while(true){
if((i__40596__auto___46869 < len__40595__auto___46868)){
args__40602__auto__.push((arguments[i__40596__auto___46869]));

var G__46870 = (i__40596__auto___46869 + (1));
i__40596__auto___46869 = G__46870;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((0) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__40603__auto__);
});})(g__46645__auto___46867))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46645__auto___46867){
return (function (args){
return cljs.core.deref.call(null,g__46645__auto___46867);
});})(g__46645__auto___46867))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__46645__auto___46867){
return (function (seq46786){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46786));
});})(g__46645__auto___46867))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__40602__auto__ = [];
var len__40595__auto___46873 = arguments.length;
var i__40596__auto___46874 = (0);
while(true){
if((i__40596__auto___46874 < len__40595__auto___46873)){
args__40602__auto__.push((arguments[i__40596__auto___46874]));

var G__46875 = (i__40596__auto___46874 + (1));
i__40596__auto___46874 = G__46875;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((0) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__40603__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__46871_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__46871_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq46872){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46872));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__46876_SHARP_){
return (new Date(p1__46876_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1515676037837