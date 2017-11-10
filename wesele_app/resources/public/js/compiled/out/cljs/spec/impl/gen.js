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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__33945__auto__,writer__33946__auto__,opt__33947__auto__){
return cljs.core._write.call(null,writer__33946__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__34454__auto__ = [];
var len__34447__auto___61957 = arguments.length;
var i__34448__auto___61958 = (0);
while(true){
if((i__34448__auto___61958 < len__34447__auto___61957)){
args__34454__auto__.push((arguments[i__34448__auto___61958]));

var G__61959 = (i__34448__auto___61958 + (1));
i__34448__auto___61958 = G__61959;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq61956){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61956));
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
var args__34454__auto__ = [];
var len__34447__auto___61961 = arguments.length;
var i__34448__auto___61962 = (0);
while(true){
if((i__34448__auto___61962 < len__34447__auto___61961)){
args__34454__auto__.push((arguments[i__34448__auto___61962]));

var G__61963 = (i__34448__auto___61962 + (1));
i__34448__auto___61962 = G__61963;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq61960){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61960));
});

var g_QMARK__61964 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_61965 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__61964){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__61964))
,null));
var mkg_61966 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__61964,g_61965){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__61964,g_61965))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__61964,g_61965,mkg_61966){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__61964).call(null,x);
});})(g_QMARK__61964,g_61965,mkg_61966))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__61964,g_61965,mkg_61966){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_61966).call(null,gfn);
});})(g_QMARK__61964,g_61965,mkg_61966))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__61964,g_61965,mkg_61966){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_61965).call(null,generator);
});})(g_QMARK__61964,g_61965,mkg_61966))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__45177__auto___61986 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__45177__auto___61986){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__34454__auto__ = [];
var len__34447__auto___61987 = arguments.length;
var i__34448__auto___61988 = (0);
while(true){
if((i__34448__auto___61988 < len__34447__auto___61987)){
args__34454__auto__.push((arguments[i__34448__auto___61988]));

var G__61989 = (i__34448__auto___61988 + (1));
i__34448__auto___61988 = G__61989;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});})(g__45177__auto___61986))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45177__auto___61986){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45177__auto___61986),args);
});})(g__45177__auto___61986))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__45177__auto___61986){
return (function (seq61967){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61967));
});})(g__45177__auto___61986))
;


var g__45177__auto___61990 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__45177__auto___61990){
return (function cljs$spec$impl$gen$list(var_args){
var args__34454__auto__ = [];
var len__34447__auto___61991 = arguments.length;
var i__34448__auto___61992 = (0);
while(true){
if((i__34448__auto___61992 < len__34447__auto___61991)){
args__34454__auto__.push((arguments[i__34448__auto___61992]));

var G__61993 = (i__34448__auto___61992 + (1));
i__34448__auto___61992 = G__61993;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});})(g__45177__auto___61990))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45177__auto___61990){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45177__auto___61990),args);
});})(g__45177__auto___61990))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__45177__auto___61990){
return (function (seq61968){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61968));
});})(g__45177__auto___61990))
;


var g__45177__auto___61994 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__45177__auto___61994){
return (function cljs$spec$impl$gen$map(var_args){
var args__34454__auto__ = [];
var len__34447__auto___61995 = arguments.length;
var i__34448__auto___61996 = (0);
while(true){
if((i__34448__auto___61996 < len__34447__auto___61995)){
args__34454__auto__.push((arguments[i__34448__auto___61996]));

var G__61997 = (i__34448__auto___61996 + (1));
i__34448__auto___61996 = G__61997;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});})(g__45177__auto___61994))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45177__auto___61994){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45177__auto___61994),args);
});})(g__45177__auto___61994))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__45177__auto___61994){
return (function (seq61969){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61969));
});})(g__45177__auto___61994))
;


var g__45177__auto___61998 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__45177__auto___61998){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__34454__auto__ = [];
var len__34447__auto___61999 = arguments.length;
var i__34448__auto___62000 = (0);
while(true){
if((i__34448__auto___62000 < len__34447__auto___61999)){
args__34454__auto__.push((arguments[i__34448__auto___62000]));

var G__62001 = (i__34448__auto___62000 + (1));
i__34448__auto___62000 = G__62001;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});})(g__45177__auto___61998))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45177__auto___61998){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45177__auto___61998),args);
});})(g__45177__auto___61998))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__45177__auto___61998){
return (function (seq61970){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61970));
});})(g__45177__auto___61998))
;


var g__45177__auto___62002 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__45177__auto___62002){
return (function cljs$spec$impl$gen$set(var_args){
var args__34454__auto__ = [];
var len__34447__auto___62003 = arguments.length;
var i__34448__auto___62004 = (0);
while(true){
if((i__34448__auto___62004 < len__34447__auto___62003)){
args__34454__auto__.push((arguments[i__34448__auto___62004]));

var G__62005 = (i__34448__auto___62004 + (1));
i__34448__auto___62004 = G__62005;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});})(g__45177__auto___62002))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45177__auto___62002){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45177__auto___62002),args);
});})(g__45177__auto___62002))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__45177__auto___62002){
return (function (seq61971){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61971));
});})(g__45177__auto___62002))
;


var g__45177__auto___62006 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__45177__auto___62006){
return (function cljs$spec$impl$gen$vector(var_args){
var args__34454__auto__ = [];
var len__34447__auto___62007 = arguments.length;
var i__34448__auto___62008 = (0);
while(true){
if((i__34448__auto___62008 < len__34447__auto___62007)){
args__34454__auto__.push((arguments[i__34448__auto___62008]));

var G__62009 = (i__34448__auto___62008 + (1));
i__34448__auto___62008 = G__62009;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});})(g__45177__auto___62006))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45177__auto___62006){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45177__auto___62006),args);
});})(g__45177__auto___62006))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__45177__auto___62006){
return (function (seq61972){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61972));
});})(g__45177__auto___62006))
;


var g__45177__auto___62010 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__45177__auto___62010){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__34454__auto__ = [];
var len__34447__auto___62011 = arguments.length;
var i__34448__auto___62012 = (0);
while(true){
if((i__34448__auto___62012 < len__34447__auto___62011)){
args__34454__auto__.push((arguments[i__34448__auto___62012]));

var G__62013 = (i__34448__auto___62012 + (1));
i__34448__auto___62012 = G__62013;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});})(g__45177__auto___62010))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45177__auto___62010){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45177__auto___62010),args);
});})(g__45177__auto___62010))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__45177__auto___62010){
return (function (seq61973){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61973));
});})(g__45177__auto___62010))
;


var g__45177__auto___62014 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__45177__auto___62014){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__34454__auto__ = [];
var len__34447__auto___62015 = arguments.length;
var i__34448__auto___62016 = (0);
while(true){
if((i__34448__auto___62016 < len__34447__auto___62015)){
args__34454__auto__.push((arguments[i__34448__auto___62016]));

var G__62017 = (i__34448__auto___62016 + (1));
i__34448__auto___62016 = G__62017;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});})(g__45177__auto___62014))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45177__auto___62014){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45177__auto___62014),args);
});})(g__45177__auto___62014))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__45177__auto___62014){
return (function (seq61974){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61974));
});})(g__45177__auto___62014))
;


var g__45177__auto___62018 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__45177__auto___62018){
return (function cljs$spec$impl$gen$elements(var_args){
var args__34454__auto__ = [];
var len__34447__auto___62019 = arguments.length;
var i__34448__auto___62020 = (0);
while(true){
if((i__34448__auto___62020 < len__34447__auto___62019)){
args__34454__auto__.push((arguments[i__34448__auto___62020]));

var G__62021 = (i__34448__auto___62020 + (1));
i__34448__auto___62020 = G__62021;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});})(g__45177__auto___62018))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45177__auto___62018){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45177__auto___62018),args);
});})(g__45177__auto___62018))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__45177__auto___62018){
return (function (seq61975){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61975));
});})(g__45177__auto___62018))
;


var g__45177__auto___62022 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__45177__auto___62022){
return (function cljs$spec$impl$gen$bind(var_args){
var args__34454__auto__ = [];
var len__34447__auto___62023 = arguments.length;
var i__34448__auto___62024 = (0);
while(true){
if((i__34448__auto___62024 < len__34447__auto___62023)){
args__34454__auto__.push((arguments[i__34448__auto___62024]));

var G__62025 = (i__34448__auto___62024 + (1));
i__34448__auto___62024 = G__62025;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});})(g__45177__auto___62022))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45177__auto___62022){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45177__auto___62022),args);
});})(g__45177__auto___62022))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__45177__auto___62022){
return (function (seq61976){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61976));
});})(g__45177__auto___62022))
;


var g__45177__auto___62026 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__45177__auto___62026){
return (function cljs$spec$impl$gen$choose(var_args){
var args__34454__auto__ = [];
var len__34447__auto___62027 = arguments.length;
var i__34448__auto___62028 = (0);
while(true){
if((i__34448__auto___62028 < len__34447__auto___62027)){
args__34454__auto__.push((arguments[i__34448__auto___62028]));

var G__62029 = (i__34448__auto___62028 + (1));
i__34448__auto___62028 = G__62029;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});})(g__45177__auto___62026))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45177__auto___62026){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45177__auto___62026),args);
});})(g__45177__auto___62026))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__45177__auto___62026){
return (function (seq61977){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61977));
});})(g__45177__auto___62026))
;


var g__45177__auto___62030 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__45177__auto___62030){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__34454__auto__ = [];
var len__34447__auto___62031 = arguments.length;
var i__34448__auto___62032 = (0);
while(true){
if((i__34448__auto___62032 < len__34447__auto___62031)){
args__34454__auto__.push((arguments[i__34448__auto___62032]));

var G__62033 = (i__34448__auto___62032 + (1));
i__34448__auto___62032 = G__62033;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});})(g__45177__auto___62030))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45177__auto___62030){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45177__auto___62030),args);
});})(g__45177__auto___62030))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__45177__auto___62030){
return (function (seq61978){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61978));
});})(g__45177__auto___62030))
;


var g__45177__auto___62034 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__45177__auto___62034){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__34454__auto__ = [];
var len__34447__auto___62035 = arguments.length;
var i__34448__auto___62036 = (0);
while(true){
if((i__34448__auto___62036 < len__34447__auto___62035)){
args__34454__auto__.push((arguments[i__34448__auto___62036]));

var G__62037 = (i__34448__auto___62036 + (1));
i__34448__auto___62036 = G__62037;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});})(g__45177__auto___62034))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45177__auto___62034){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45177__auto___62034),args);
});})(g__45177__auto___62034))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__45177__auto___62034){
return (function (seq61979){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61979));
});})(g__45177__auto___62034))
;


var g__45177__auto___62038 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__45177__auto___62038){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__34454__auto__ = [];
var len__34447__auto___62039 = arguments.length;
var i__34448__auto___62040 = (0);
while(true){
if((i__34448__auto___62040 < len__34447__auto___62039)){
args__34454__auto__.push((arguments[i__34448__auto___62040]));

var G__62041 = (i__34448__auto___62040 + (1));
i__34448__auto___62040 = G__62041;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});})(g__45177__auto___62038))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45177__auto___62038){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45177__auto___62038),args);
});})(g__45177__auto___62038))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__45177__auto___62038){
return (function (seq61980){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61980));
});})(g__45177__auto___62038))
;


var g__45177__auto___62042 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__45177__auto___62042){
return (function cljs$spec$impl$gen$sample(var_args){
var args__34454__auto__ = [];
var len__34447__auto___62043 = arguments.length;
var i__34448__auto___62044 = (0);
while(true){
if((i__34448__auto___62044 < len__34447__auto___62043)){
args__34454__auto__.push((arguments[i__34448__auto___62044]));

var G__62045 = (i__34448__auto___62044 + (1));
i__34448__auto___62044 = G__62045;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});})(g__45177__auto___62042))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45177__auto___62042){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45177__auto___62042),args);
});})(g__45177__auto___62042))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__45177__auto___62042){
return (function (seq61981){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61981));
});})(g__45177__auto___62042))
;


var g__45177__auto___62046 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__45177__auto___62046){
return (function cljs$spec$impl$gen$return(var_args){
var args__34454__auto__ = [];
var len__34447__auto___62047 = arguments.length;
var i__34448__auto___62048 = (0);
while(true){
if((i__34448__auto___62048 < len__34447__auto___62047)){
args__34454__auto__.push((arguments[i__34448__auto___62048]));

var G__62049 = (i__34448__auto___62048 + (1));
i__34448__auto___62048 = G__62049;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});})(g__45177__auto___62046))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45177__auto___62046){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45177__auto___62046),args);
});})(g__45177__auto___62046))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__45177__auto___62046){
return (function (seq61982){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61982));
});})(g__45177__auto___62046))
;


var g__45177__auto___62050 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__45177__auto___62050){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__34454__auto__ = [];
var len__34447__auto___62051 = arguments.length;
var i__34448__auto___62052 = (0);
while(true){
if((i__34448__auto___62052 < len__34447__auto___62051)){
args__34454__auto__.push((arguments[i__34448__auto___62052]));

var G__62053 = (i__34448__auto___62052 + (1));
i__34448__auto___62052 = G__62053;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});})(g__45177__auto___62050))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45177__auto___62050){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45177__auto___62050),args);
});})(g__45177__auto___62050))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__45177__auto___62050){
return (function (seq61983){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61983));
});})(g__45177__auto___62050))
;


var g__45177__auto___62054 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__45177__auto___62054){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__34454__auto__ = [];
var len__34447__auto___62055 = arguments.length;
var i__34448__auto___62056 = (0);
while(true){
if((i__34448__auto___62056 < len__34447__auto___62055)){
args__34454__auto__.push((arguments[i__34448__auto___62056]));

var G__62057 = (i__34448__auto___62056 + (1));
i__34448__auto___62056 = G__62057;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});})(g__45177__auto___62054))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45177__auto___62054){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45177__auto___62054),args);
});})(g__45177__auto___62054))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__45177__auto___62054){
return (function (seq61984){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61984));
});})(g__45177__auto___62054))
;


var g__45177__auto___62058 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__45177__auto___62058){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__34454__auto__ = [];
var len__34447__auto___62059 = arguments.length;
var i__34448__auto___62060 = (0);
while(true){
if((i__34448__auto___62060 < len__34447__auto___62059)){
args__34454__auto__.push((arguments[i__34448__auto___62060]));

var G__62061 = (i__34448__auto___62060 + (1));
i__34448__auto___62060 = G__62061;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});})(g__45177__auto___62058))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45177__auto___62058){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45177__auto___62058),args);
});})(g__45177__auto___62058))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__45177__auto___62058){
return (function (seq61985){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61985));
});})(g__45177__auto___62058))
;

var g__45190__auto___62083 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__45190__auto___62083){
return (function cljs$spec$impl$gen$any(var_args){
var args__34454__auto__ = [];
var len__34447__auto___62084 = arguments.length;
var i__34448__auto___62085 = (0);
while(true){
if((i__34448__auto___62085 < len__34447__auto___62084)){
args__34454__auto__.push((arguments[i__34448__auto___62085]));

var G__62086 = (i__34448__auto___62085 + (1));
i__34448__auto___62085 = G__62086;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});})(g__45190__auto___62083))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45190__auto___62083){
return (function (args){
return cljs.core.deref.call(null,g__45190__auto___62083);
});})(g__45190__auto___62083))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__45190__auto___62083){
return (function (seq62062){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62062));
});})(g__45190__auto___62083))
;


var g__45190__auto___62087 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__45190__auto___62087){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__34454__auto__ = [];
var len__34447__auto___62088 = arguments.length;
var i__34448__auto___62089 = (0);
while(true){
if((i__34448__auto___62089 < len__34447__auto___62088)){
args__34454__auto__.push((arguments[i__34448__auto___62089]));

var G__62090 = (i__34448__auto___62089 + (1));
i__34448__auto___62089 = G__62090;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});})(g__45190__auto___62087))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45190__auto___62087){
return (function (args){
return cljs.core.deref.call(null,g__45190__auto___62087);
});})(g__45190__auto___62087))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__45190__auto___62087){
return (function (seq62063){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62063));
});})(g__45190__auto___62087))
;


var g__45190__auto___62091 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__45190__auto___62091){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__34454__auto__ = [];
var len__34447__auto___62092 = arguments.length;
var i__34448__auto___62093 = (0);
while(true){
if((i__34448__auto___62093 < len__34447__auto___62092)){
args__34454__auto__.push((arguments[i__34448__auto___62093]));

var G__62094 = (i__34448__auto___62093 + (1));
i__34448__auto___62093 = G__62094;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});})(g__45190__auto___62091))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45190__auto___62091){
return (function (args){
return cljs.core.deref.call(null,g__45190__auto___62091);
});})(g__45190__auto___62091))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__45190__auto___62091){
return (function (seq62064){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62064));
});})(g__45190__auto___62091))
;


var g__45190__auto___62095 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__45190__auto___62095){
return (function cljs$spec$impl$gen$char(var_args){
var args__34454__auto__ = [];
var len__34447__auto___62096 = arguments.length;
var i__34448__auto___62097 = (0);
while(true){
if((i__34448__auto___62097 < len__34447__auto___62096)){
args__34454__auto__.push((arguments[i__34448__auto___62097]));

var G__62098 = (i__34448__auto___62097 + (1));
i__34448__auto___62097 = G__62098;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});})(g__45190__auto___62095))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45190__auto___62095){
return (function (args){
return cljs.core.deref.call(null,g__45190__auto___62095);
});})(g__45190__auto___62095))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__45190__auto___62095){
return (function (seq62065){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62065));
});})(g__45190__auto___62095))
;


var g__45190__auto___62099 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__45190__auto___62099){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__34454__auto__ = [];
var len__34447__auto___62100 = arguments.length;
var i__34448__auto___62101 = (0);
while(true){
if((i__34448__auto___62101 < len__34447__auto___62100)){
args__34454__auto__.push((arguments[i__34448__auto___62101]));

var G__62102 = (i__34448__auto___62101 + (1));
i__34448__auto___62101 = G__62102;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});})(g__45190__auto___62099))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45190__auto___62099){
return (function (args){
return cljs.core.deref.call(null,g__45190__auto___62099);
});})(g__45190__auto___62099))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__45190__auto___62099){
return (function (seq62066){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62066));
});})(g__45190__auto___62099))
;


var g__45190__auto___62103 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__45190__auto___62103){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__34454__auto__ = [];
var len__34447__auto___62104 = arguments.length;
var i__34448__auto___62105 = (0);
while(true){
if((i__34448__auto___62105 < len__34447__auto___62104)){
args__34454__auto__.push((arguments[i__34448__auto___62105]));

var G__62106 = (i__34448__auto___62105 + (1));
i__34448__auto___62105 = G__62106;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});})(g__45190__auto___62103))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45190__auto___62103){
return (function (args){
return cljs.core.deref.call(null,g__45190__auto___62103);
});})(g__45190__auto___62103))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__45190__auto___62103){
return (function (seq62067){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62067));
});})(g__45190__auto___62103))
;


var g__45190__auto___62107 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__45190__auto___62107){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__34454__auto__ = [];
var len__34447__auto___62108 = arguments.length;
var i__34448__auto___62109 = (0);
while(true){
if((i__34448__auto___62109 < len__34447__auto___62108)){
args__34454__auto__.push((arguments[i__34448__auto___62109]));

var G__62110 = (i__34448__auto___62109 + (1));
i__34448__auto___62109 = G__62110;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});})(g__45190__auto___62107))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45190__auto___62107){
return (function (args){
return cljs.core.deref.call(null,g__45190__auto___62107);
});})(g__45190__auto___62107))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__45190__auto___62107){
return (function (seq62068){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62068));
});})(g__45190__auto___62107))
;


var g__45190__auto___62111 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__45190__auto___62111){
return (function cljs$spec$impl$gen$double(var_args){
var args__34454__auto__ = [];
var len__34447__auto___62112 = arguments.length;
var i__34448__auto___62113 = (0);
while(true){
if((i__34448__auto___62113 < len__34447__auto___62112)){
args__34454__auto__.push((arguments[i__34448__auto___62113]));

var G__62114 = (i__34448__auto___62113 + (1));
i__34448__auto___62113 = G__62114;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});})(g__45190__auto___62111))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45190__auto___62111){
return (function (args){
return cljs.core.deref.call(null,g__45190__auto___62111);
});})(g__45190__auto___62111))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__45190__auto___62111){
return (function (seq62069){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62069));
});})(g__45190__auto___62111))
;


var g__45190__auto___62115 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__45190__auto___62115){
return (function cljs$spec$impl$gen$int(var_args){
var args__34454__auto__ = [];
var len__34447__auto___62116 = arguments.length;
var i__34448__auto___62117 = (0);
while(true){
if((i__34448__auto___62117 < len__34447__auto___62116)){
args__34454__auto__.push((arguments[i__34448__auto___62117]));

var G__62118 = (i__34448__auto___62117 + (1));
i__34448__auto___62117 = G__62118;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});})(g__45190__auto___62115))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45190__auto___62115){
return (function (args){
return cljs.core.deref.call(null,g__45190__auto___62115);
});})(g__45190__auto___62115))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__45190__auto___62115){
return (function (seq62070){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62070));
});})(g__45190__auto___62115))
;


var g__45190__auto___62119 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__45190__auto___62119){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__34454__auto__ = [];
var len__34447__auto___62120 = arguments.length;
var i__34448__auto___62121 = (0);
while(true){
if((i__34448__auto___62121 < len__34447__auto___62120)){
args__34454__auto__.push((arguments[i__34448__auto___62121]));

var G__62122 = (i__34448__auto___62121 + (1));
i__34448__auto___62121 = G__62122;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});})(g__45190__auto___62119))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45190__auto___62119){
return (function (args){
return cljs.core.deref.call(null,g__45190__auto___62119);
});})(g__45190__auto___62119))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__45190__auto___62119){
return (function (seq62071){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62071));
});})(g__45190__auto___62119))
;


var g__45190__auto___62123 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__45190__auto___62123){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__34454__auto__ = [];
var len__34447__auto___62124 = arguments.length;
var i__34448__auto___62125 = (0);
while(true){
if((i__34448__auto___62125 < len__34447__auto___62124)){
args__34454__auto__.push((arguments[i__34448__auto___62125]));

var G__62126 = (i__34448__auto___62125 + (1));
i__34448__auto___62125 = G__62126;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});})(g__45190__auto___62123))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45190__auto___62123){
return (function (args){
return cljs.core.deref.call(null,g__45190__auto___62123);
});})(g__45190__auto___62123))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__45190__auto___62123){
return (function (seq62072){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62072));
});})(g__45190__auto___62123))
;


var g__45190__auto___62127 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__45190__auto___62127){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__34454__auto__ = [];
var len__34447__auto___62128 = arguments.length;
var i__34448__auto___62129 = (0);
while(true){
if((i__34448__auto___62129 < len__34447__auto___62128)){
args__34454__auto__.push((arguments[i__34448__auto___62129]));

var G__62130 = (i__34448__auto___62129 + (1));
i__34448__auto___62129 = G__62130;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});})(g__45190__auto___62127))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45190__auto___62127){
return (function (args){
return cljs.core.deref.call(null,g__45190__auto___62127);
});})(g__45190__auto___62127))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__45190__auto___62127){
return (function (seq62073){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62073));
});})(g__45190__auto___62127))
;


var g__45190__auto___62131 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__45190__auto___62131){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__34454__auto__ = [];
var len__34447__auto___62132 = arguments.length;
var i__34448__auto___62133 = (0);
while(true){
if((i__34448__auto___62133 < len__34447__auto___62132)){
args__34454__auto__.push((arguments[i__34448__auto___62133]));

var G__62134 = (i__34448__auto___62133 + (1));
i__34448__auto___62133 = G__62134;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});})(g__45190__auto___62131))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45190__auto___62131){
return (function (args){
return cljs.core.deref.call(null,g__45190__auto___62131);
});})(g__45190__auto___62131))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__45190__auto___62131){
return (function (seq62074){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62074));
});})(g__45190__auto___62131))
;


var g__45190__auto___62135 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__45190__auto___62135){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__34454__auto__ = [];
var len__34447__auto___62136 = arguments.length;
var i__34448__auto___62137 = (0);
while(true){
if((i__34448__auto___62137 < len__34447__auto___62136)){
args__34454__auto__.push((arguments[i__34448__auto___62137]));

var G__62138 = (i__34448__auto___62137 + (1));
i__34448__auto___62137 = G__62138;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});})(g__45190__auto___62135))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45190__auto___62135){
return (function (args){
return cljs.core.deref.call(null,g__45190__auto___62135);
});})(g__45190__auto___62135))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__45190__auto___62135){
return (function (seq62075){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62075));
});})(g__45190__auto___62135))
;


var g__45190__auto___62139 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__45190__auto___62139){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__34454__auto__ = [];
var len__34447__auto___62140 = arguments.length;
var i__34448__auto___62141 = (0);
while(true){
if((i__34448__auto___62141 < len__34447__auto___62140)){
args__34454__auto__.push((arguments[i__34448__auto___62141]));

var G__62142 = (i__34448__auto___62141 + (1));
i__34448__auto___62141 = G__62142;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});})(g__45190__auto___62139))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45190__auto___62139){
return (function (args){
return cljs.core.deref.call(null,g__45190__auto___62139);
});})(g__45190__auto___62139))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__45190__auto___62139){
return (function (seq62076){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62076));
});})(g__45190__auto___62139))
;


var g__45190__auto___62143 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__45190__auto___62143){
return (function cljs$spec$impl$gen$string(var_args){
var args__34454__auto__ = [];
var len__34447__auto___62144 = arguments.length;
var i__34448__auto___62145 = (0);
while(true){
if((i__34448__auto___62145 < len__34447__auto___62144)){
args__34454__auto__.push((arguments[i__34448__auto___62145]));

var G__62146 = (i__34448__auto___62145 + (1));
i__34448__auto___62145 = G__62146;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});})(g__45190__auto___62143))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45190__auto___62143){
return (function (args){
return cljs.core.deref.call(null,g__45190__auto___62143);
});})(g__45190__auto___62143))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__45190__auto___62143){
return (function (seq62077){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62077));
});})(g__45190__auto___62143))
;


var g__45190__auto___62147 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__45190__auto___62147){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__34454__auto__ = [];
var len__34447__auto___62148 = arguments.length;
var i__34448__auto___62149 = (0);
while(true){
if((i__34448__auto___62149 < len__34447__auto___62148)){
args__34454__auto__.push((arguments[i__34448__auto___62149]));

var G__62150 = (i__34448__auto___62149 + (1));
i__34448__auto___62149 = G__62150;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});})(g__45190__auto___62147))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45190__auto___62147){
return (function (args){
return cljs.core.deref.call(null,g__45190__auto___62147);
});})(g__45190__auto___62147))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__45190__auto___62147){
return (function (seq62078){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62078));
});})(g__45190__auto___62147))
;


var g__45190__auto___62151 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__45190__auto___62151){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__34454__auto__ = [];
var len__34447__auto___62152 = arguments.length;
var i__34448__auto___62153 = (0);
while(true){
if((i__34448__auto___62153 < len__34447__auto___62152)){
args__34454__auto__.push((arguments[i__34448__auto___62153]));

var G__62154 = (i__34448__auto___62153 + (1));
i__34448__auto___62153 = G__62154;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});})(g__45190__auto___62151))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45190__auto___62151){
return (function (args){
return cljs.core.deref.call(null,g__45190__auto___62151);
});})(g__45190__auto___62151))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__45190__auto___62151){
return (function (seq62079){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62079));
});})(g__45190__auto___62151))
;


var g__45190__auto___62155 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__45190__auto___62155){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__34454__auto__ = [];
var len__34447__auto___62156 = arguments.length;
var i__34448__auto___62157 = (0);
while(true){
if((i__34448__auto___62157 < len__34447__auto___62156)){
args__34454__auto__.push((arguments[i__34448__auto___62157]));

var G__62158 = (i__34448__auto___62157 + (1));
i__34448__auto___62157 = G__62158;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});})(g__45190__auto___62155))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45190__auto___62155){
return (function (args){
return cljs.core.deref.call(null,g__45190__auto___62155);
});})(g__45190__auto___62155))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__45190__auto___62155){
return (function (seq62080){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62080));
});})(g__45190__auto___62155))
;


var g__45190__auto___62159 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__45190__auto___62159){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__34454__auto__ = [];
var len__34447__auto___62160 = arguments.length;
var i__34448__auto___62161 = (0);
while(true){
if((i__34448__auto___62161 < len__34447__auto___62160)){
args__34454__auto__.push((arguments[i__34448__auto___62161]));

var G__62162 = (i__34448__auto___62161 + (1));
i__34448__auto___62161 = G__62162;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});})(g__45190__auto___62159))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45190__auto___62159){
return (function (args){
return cljs.core.deref.call(null,g__45190__auto___62159);
});})(g__45190__auto___62159))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__45190__auto___62159){
return (function (seq62081){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62081));
});})(g__45190__auto___62159))
;


var g__45190__auto___62163 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__45190__auto___62163){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__34454__auto__ = [];
var len__34447__auto___62164 = arguments.length;
var i__34448__auto___62165 = (0);
while(true){
if((i__34448__auto___62165 < len__34447__auto___62164)){
args__34454__auto__.push((arguments[i__34448__auto___62165]));

var G__62166 = (i__34448__auto___62165 + (1));
i__34448__auto___62165 = G__62166;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});})(g__45190__auto___62163))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45190__auto___62163){
return (function (args){
return cljs.core.deref.call(null,g__45190__auto___62163);
});})(g__45190__auto___62163))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__45190__auto___62163){
return (function (seq62082){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62082));
});})(g__45190__auto___62163))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__34454__auto__ = [];
var len__34447__auto___62169 = arguments.length;
var i__34448__auto___62170 = (0);
while(true){
if((i__34448__auto___62170 < len__34447__auto___62169)){
args__34454__auto__.push((arguments[i__34448__auto___62170]));

var G__62171 = (i__34448__auto___62170 + (1));
i__34448__auto___62170 = G__62171;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__62167_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__62167_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq62168){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62168));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__62172_SHARP_){
return (new Date(p1__62172_SHARP_));
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

//# sourceMappingURL=gen.js.map?rel=1510317506462