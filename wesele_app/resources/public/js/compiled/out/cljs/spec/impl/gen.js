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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__34423__auto__,writer__34424__auto__,opt__34425__auto__){
return cljs.core._write.call(null,writer__34424__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__34932__auto__ = [];
var len__34925__auto___46226 = arguments.length;
var i__34926__auto___46227 = (0);
while(true){
if((i__34926__auto___46227 < len__34925__auto___46226)){
args__34932__auto__.push((arguments[i__34926__auto___46227]));

var G__46228 = (i__34926__auto___46227 + (1));
i__34926__auto___46227 = G__46228;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq46225){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46225));
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
var args__34932__auto__ = [];
var len__34925__auto___46230 = arguments.length;
var i__34926__auto___46231 = (0);
while(true){
if((i__34926__auto___46231 < len__34925__auto___46230)){
args__34932__auto__.push((arguments[i__34926__auto___46231]));

var G__46232 = (i__34926__auto___46231 + (1));
i__34926__auto___46231 = G__46232;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq46229){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46229));
});

var g_QMARK__46233 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_46234 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__46233){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__46233))
,null));
var mkg_46235 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__46233,g_46234){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__46233,g_46234))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__46233,g_46234,mkg_46235){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__46233).call(null,x);
});})(g_QMARK__46233,g_46234,mkg_46235))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__46233,g_46234,mkg_46235){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_46235).call(null,gfn);
});})(g_QMARK__46233,g_46234,mkg_46235))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__46233,g_46234,mkg_46235){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_46234).call(null,generator);
});})(g_QMARK__46233,g_46234,mkg_46235))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__46197__auto___46255 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__46197__auto___46255){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__34932__auto__ = [];
var len__34925__auto___46256 = arguments.length;
var i__34926__auto___46257 = (0);
while(true){
if((i__34926__auto___46257 < len__34925__auto___46256)){
args__34932__auto__.push((arguments[i__34926__auto___46257]));

var G__46258 = (i__34926__auto___46257 + (1));
i__34926__auto___46257 = G__46258;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});})(g__46197__auto___46255))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46197__auto___46255){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46197__auto___46255),args);
});})(g__46197__auto___46255))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__46197__auto___46255){
return (function (seq46236){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46236));
});})(g__46197__auto___46255))
;


var g__46197__auto___46259 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__46197__auto___46259){
return (function cljs$spec$impl$gen$list(var_args){
var args__34932__auto__ = [];
var len__34925__auto___46260 = arguments.length;
var i__34926__auto___46261 = (0);
while(true){
if((i__34926__auto___46261 < len__34925__auto___46260)){
args__34932__auto__.push((arguments[i__34926__auto___46261]));

var G__46262 = (i__34926__auto___46261 + (1));
i__34926__auto___46261 = G__46262;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});})(g__46197__auto___46259))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46197__auto___46259){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46197__auto___46259),args);
});})(g__46197__auto___46259))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__46197__auto___46259){
return (function (seq46237){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46237));
});})(g__46197__auto___46259))
;


var g__46197__auto___46263 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__46197__auto___46263){
return (function cljs$spec$impl$gen$map(var_args){
var args__34932__auto__ = [];
var len__34925__auto___46264 = arguments.length;
var i__34926__auto___46265 = (0);
while(true){
if((i__34926__auto___46265 < len__34925__auto___46264)){
args__34932__auto__.push((arguments[i__34926__auto___46265]));

var G__46266 = (i__34926__auto___46265 + (1));
i__34926__auto___46265 = G__46266;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});})(g__46197__auto___46263))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46197__auto___46263){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46197__auto___46263),args);
});})(g__46197__auto___46263))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__46197__auto___46263){
return (function (seq46238){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46238));
});})(g__46197__auto___46263))
;


var g__46197__auto___46267 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__46197__auto___46267){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__34932__auto__ = [];
var len__34925__auto___46268 = arguments.length;
var i__34926__auto___46269 = (0);
while(true){
if((i__34926__auto___46269 < len__34925__auto___46268)){
args__34932__auto__.push((arguments[i__34926__auto___46269]));

var G__46270 = (i__34926__auto___46269 + (1));
i__34926__auto___46269 = G__46270;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});})(g__46197__auto___46267))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46197__auto___46267){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46197__auto___46267),args);
});})(g__46197__auto___46267))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__46197__auto___46267){
return (function (seq46239){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46239));
});})(g__46197__auto___46267))
;


var g__46197__auto___46271 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__46197__auto___46271){
return (function cljs$spec$impl$gen$set(var_args){
var args__34932__auto__ = [];
var len__34925__auto___46272 = arguments.length;
var i__34926__auto___46273 = (0);
while(true){
if((i__34926__auto___46273 < len__34925__auto___46272)){
args__34932__auto__.push((arguments[i__34926__auto___46273]));

var G__46274 = (i__34926__auto___46273 + (1));
i__34926__auto___46273 = G__46274;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});})(g__46197__auto___46271))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46197__auto___46271){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46197__auto___46271),args);
});})(g__46197__auto___46271))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__46197__auto___46271){
return (function (seq46240){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46240));
});})(g__46197__auto___46271))
;


var g__46197__auto___46275 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__46197__auto___46275){
return (function cljs$spec$impl$gen$vector(var_args){
var args__34932__auto__ = [];
var len__34925__auto___46276 = arguments.length;
var i__34926__auto___46277 = (0);
while(true){
if((i__34926__auto___46277 < len__34925__auto___46276)){
args__34932__auto__.push((arguments[i__34926__auto___46277]));

var G__46278 = (i__34926__auto___46277 + (1));
i__34926__auto___46277 = G__46278;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});})(g__46197__auto___46275))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46197__auto___46275){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46197__auto___46275),args);
});})(g__46197__auto___46275))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__46197__auto___46275){
return (function (seq46241){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46241));
});})(g__46197__auto___46275))
;


var g__46197__auto___46279 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__46197__auto___46279){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__34932__auto__ = [];
var len__34925__auto___46280 = arguments.length;
var i__34926__auto___46281 = (0);
while(true){
if((i__34926__auto___46281 < len__34925__auto___46280)){
args__34932__auto__.push((arguments[i__34926__auto___46281]));

var G__46282 = (i__34926__auto___46281 + (1));
i__34926__auto___46281 = G__46282;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});})(g__46197__auto___46279))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46197__auto___46279){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46197__auto___46279),args);
});})(g__46197__auto___46279))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__46197__auto___46279){
return (function (seq46242){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46242));
});})(g__46197__auto___46279))
;


var g__46197__auto___46283 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__46197__auto___46283){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__34932__auto__ = [];
var len__34925__auto___46284 = arguments.length;
var i__34926__auto___46285 = (0);
while(true){
if((i__34926__auto___46285 < len__34925__auto___46284)){
args__34932__auto__.push((arguments[i__34926__auto___46285]));

var G__46286 = (i__34926__auto___46285 + (1));
i__34926__auto___46285 = G__46286;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});})(g__46197__auto___46283))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46197__auto___46283){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46197__auto___46283),args);
});})(g__46197__auto___46283))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__46197__auto___46283){
return (function (seq46243){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46243));
});})(g__46197__auto___46283))
;


var g__46197__auto___46287 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__46197__auto___46287){
return (function cljs$spec$impl$gen$elements(var_args){
var args__34932__auto__ = [];
var len__34925__auto___46288 = arguments.length;
var i__34926__auto___46289 = (0);
while(true){
if((i__34926__auto___46289 < len__34925__auto___46288)){
args__34932__auto__.push((arguments[i__34926__auto___46289]));

var G__46290 = (i__34926__auto___46289 + (1));
i__34926__auto___46289 = G__46290;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});})(g__46197__auto___46287))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46197__auto___46287){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46197__auto___46287),args);
});})(g__46197__auto___46287))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__46197__auto___46287){
return (function (seq46244){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46244));
});})(g__46197__auto___46287))
;


var g__46197__auto___46291 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__46197__auto___46291){
return (function cljs$spec$impl$gen$bind(var_args){
var args__34932__auto__ = [];
var len__34925__auto___46292 = arguments.length;
var i__34926__auto___46293 = (0);
while(true){
if((i__34926__auto___46293 < len__34925__auto___46292)){
args__34932__auto__.push((arguments[i__34926__auto___46293]));

var G__46294 = (i__34926__auto___46293 + (1));
i__34926__auto___46293 = G__46294;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});})(g__46197__auto___46291))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46197__auto___46291){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46197__auto___46291),args);
});})(g__46197__auto___46291))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__46197__auto___46291){
return (function (seq46245){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46245));
});})(g__46197__auto___46291))
;


var g__46197__auto___46295 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__46197__auto___46295){
return (function cljs$spec$impl$gen$choose(var_args){
var args__34932__auto__ = [];
var len__34925__auto___46296 = arguments.length;
var i__34926__auto___46297 = (0);
while(true){
if((i__34926__auto___46297 < len__34925__auto___46296)){
args__34932__auto__.push((arguments[i__34926__auto___46297]));

var G__46298 = (i__34926__auto___46297 + (1));
i__34926__auto___46297 = G__46298;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});})(g__46197__auto___46295))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46197__auto___46295){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46197__auto___46295),args);
});})(g__46197__auto___46295))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__46197__auto___46295){
return (function (seq46246){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46246));
});})(g__46197__auto___46295))
;


var g__46197__auto___46299 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__46197__auto___46299){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__34932__auto__ = [];
var len__34925__auto___46300 = arguments.length;
var i__34926__auto___46301 = (0);
while(true){
if((i__34926__auto___46301 < len__34925__auto___46300)){
args__34932__auto__.push((arguments[i__34926__auto___46301]));

var G__46302 = (i__34926__auto___46301 + (1));
i__34926__auto___46301 = G__46302;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});})(g__46197__auto___46299))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46197__auto___46299){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46197__auto___46299),args);
});})(g__46197__auto___46299))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__46197__auto___46299){
return (function (seq46247){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46247));
});})(g__46197__auto___46299))
;


var g__46197__auto___46303 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__46197__auto___46303){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__34932__auto__ = [];
var len__34925__auto___46304 = arguments.length;
var i__34926__auto___46305 = (0);
while(true){
if((i__34926__auto___46305 < len__34925__auto___46304)){
args__34932__auto__.push((arguments[i__34926__auto___46305]));

var G__46306 = (i__34926__auto___46305 + (1));
i__34926__auto___46305 = G__46306;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});})(g__46197__auto___46303))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46197__auto___46303){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46197__auto___46303),args);
});})(g__46197__auto___46303))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__46197__auto___46303){
return (function (seq46248){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46248));
});})(g__46197__auto___46303))
;


var g__46197__auto___46307 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__46197__auto___46307){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__34932__auto__ = [];
var len__34925__auto___46308 = arguments.length;
var i__34926__auto___46309 = (0);
while(true){
if((i__34926__auto___46309 < len__34925__auto___46308)){
args__34932__auto__.push((arguments[i__34926__auto___46309]));

var G__46310 = (i__34926__auto___46309 + (1));
i__34926__auto___46309 = G__46310;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});})(g__46197__auto___46307))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46197__auto___46307){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46197__auto___46307),args);
});})(g__46197__auto___46307))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__46197__auto___46307){
return (function (seq46249){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46249));
});})(g__46197__auto___46307))
;


var g__46197__auto___46311 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__46197__auto___46311){
return (function cljs$spec$impl$gen$sample(var_args){
var args__34932__auto__ = [];
var len__34925__auto___46312 = arguments.length;
var i__34926__auto___46313 = (0);
while(true){
if((i__34926__auto___46313 < len__34925__auto___46312)){
args__34932__auto__.push((arguments[i__34926__auto___46313]));

var G__46314 = (i__34926__auto___46313 + (1));
i__34926__auto___46313 = G__46314;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});})(g__46197__auto___46311))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46197__auto___46311){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46197__auto___46311),args);
});})(g__46197__auto___46311))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__46197__auto___46311){
return (function (seq46250){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46250));
});})(g__46197__auto___46311))
;


var g__46197__auto___46315 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__46197__auto___46315){
return (function cljs$spec$impl$gen$return(var_args){
var args__34932__auto__ = [];
var len__34925__auto___46316 = arguments.length;
var i__34926__auto___46317 = (0);
while(true){
if((i__34926__auto___46317 < len__34925__auto___46316)){
args__34932__auto__.push((arguments[i__34926__auto___46317]));

var G__46318 = (i__34926__auto___46317 + (1));
i__34926__auto___46317 = G__46318;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});})(g__46197__auto___46315))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46197__auto___46315){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46197__auto___46315),args);
});})(g__46197__auto___46315))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__46197__auto___46315){
return (function (seq46251){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46251));
});})(g__46197__auto___46315))
;


var g__46197__auto___46319 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__46197__auto___46319){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__34932__auto__ = [];
var len__34925__auto___46320 = arguments.length;
var i__34926__auto___46321 = (0);
while(true){
if((i__34926__auto___46321 < len__34925__auto___46320)){
args__34932__auto__.push((arguments[i__34926__auto___46321]));

var G__46322 = (i__34926__auto___46321 + (1));
i__34926__auto___46321 = G__46322;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});})(g__46197__auto___46319))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46197__auto___46319){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46197__auto___46319),args);
});})(g__46197__auto___46319))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__46197__auto___46319){
return (function (seq46252){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46252));
});})(g__46197__auto___46319))
;


var g__46197__auto___46323 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__46197__auto___46323){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__34932__auto__ = [];
var len__34925__auto___46324 = arguments.length;
var i__34926__auto___46325 = (0);
while(true){
if((i__34926__auto___46325 < len__34925__auto___46324)){
args__34932__auto__.push((arguments[i__34926__auto___46325]));

var G__46326 = (i__34926__auto___46325 + (1));
i__34926__auto___46325 = G__46326;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});})(g__46197__auto___46323))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46197__auto___46323){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46197__auto___46323),args);
});})(g__46197__auto___46323))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__46197__auto___46323){
return (function (seq46253){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46253));
});})(g__46197__auto___46323))
;


var g__46197__auto___46327 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__46197__auto___46327){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__34932__auto__ = [];
var len__34925__auto___46328 = arguments.length;
var i__34926__auto___46329 = (0);
while(true){
if((i__34926__auto___46329 < len__34925__auto___46328)){
args__34932__auto__.push((arguments[i__34926__auto___46329]));

var G__46330 = (i__34926__auto___46329 + (1));
i__34926__auto___46329 = G__46330;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});})(g__46197__auto___46327))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46197__auto___46327){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46197__auto___46327),args);
});})(g__46197__auto___46327))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__46197__auto___46327){
return (function (seq46254){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46254));
});})(g__46197__auto___46327))
;

var g__46210__auto___46352 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__46210__auto___46352){
return (function cljs$spec$impl$gen$any(var_args){
var args__34932__auto__ = [];
var len__34925__auto___46353 = arguments.length;
var i__34926__auto___46354 = (0);
while(true){
if((i__34926__auto___46354 < len__34925__auto___46353)){
args__34932__auto__.push((arguments[i__34926__auto___46354]));

var G__46355 = (i__34926__auto___46354 + (1));
i__34926__auto___46354 = G__46355;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});})(g__46210__auto___46352))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46210__auto___46352){
return (function (args){
return cljs.core.deref.call(null,g__46210__auto___46352);
});})(g__46210__auto___46352))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__46210__auto___46352){
return (function (seq46331){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46331));
});})(g__46210__auto___46352))
;


var g__46210__auto___46356 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__46210__auto___46356){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__34932__auto__ = [];
var len__34925__auto___46357 = arguments.length;
var i__34926__auto___46358 = (0);
while(true){
if((i__34926__auto___46358 < len__34925__auto___46357)){
args__34932__auto__.push((arguments[i__34926__auto___46358]));

var G__46359 = (i__34926__auto___46358 + (1));
i__34926__auto___46358 = G__46359;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});})(g__46210__auto___46356))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46210__auto___46356){
return (function (args){
return cljs.core.deref.call(null,g__46210__auto___46356);
});})(g__46210__auto___46356))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__46210__auto___46356){
return (function (seq46332){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46332));
});})(g__46210__auto___46356))
;


var g__46210__auto___46360 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__46210__auto___46360){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__34932__auto__ = [];
var len__34925__auto___46361 = arguments.length;
var i__34926__auto___46362 = (0);
while(true){
if((i__34926__auto___46362 < len__34925__auto___46361)){
args__34932__auto__.push((arguments[i__34926__auto___46362]));

var G__46363 = (i__34926__auto___46362 + (1));
i__34926__auto___46362 = G__46363;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});})(g__46210__auto___46360))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46210__auto___46360){
return (function (args){
return cljs.core.deref.call(null,g__46210__auto___46360);
});})(g__46210__auto___46360))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__46210__auto___46360){
return (function (seq46333){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46333));
});})(g__46210__auto___46360))
;


var g__46210__auto___46364 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__46210__auto___46364){
return (function cljs$spec$impl$gen$char(var_args){
var args__34932__auto__ = [];
var len__34925__auto___46365 = arguments.length;
var i__34926__auto___46366 = (0);
while(true){
if((i__34926__auto___46366 < len__34925__auto___46365)){
args__34932__auto__.push((arguments[i__34926__auto___46366]));

var G__46367 = (i__34926__auto___46366 + (1));
i__34926__auto___46366 = G__46367;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});})(g__46210__auto___46364))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46210__auto___46364){
return (function (args){
return cljs.core.deref.call(null,g__46210__auto___46364);
});})(g__46210__auto___46364))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__46210__auto___46364){
return (function (seq46334){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46334));
});})(g__46210__auto___46364))
;


var g__46210__auto___46368 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__46210__auto___46368){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__34932__auto__ = [];
var len__34925__auto___46369 = arguments.length;
var i__34926__auto___46370 = (0);
while(true){
if((i__34926__auto___46370 < len__34925__auto___46369)){
args__34932__auto__.push((arguments[i__34926__auto___46370]));

var G__46371 = (i__34926__auto___46370 + (1));
i__34926__auto___46370 = G__46371;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});})(g__46210__auto___46368))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46210__auto___46368){
return (function (args){
return cljs.core.deref.call(null,g__46210__auto___46368);
});})(g__46210__auto___46368))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__46210__auto___46368){
return (function (seq46335){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46335));
});})(g__46210__auto___46368))
;


var g__46210__auto___46372 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__46210__auto___46372){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__34932__auto__ = [];
var len__34925__auto___46373 = arguments.length;
var i__34926__auto___46374 = (0);
while(true){
if((i__34926__auto___46374 < len__34925__auto___46373)){
args__34932__auto__.push((arguments[i__34926__auto___46374]));

var G__46375 = (i__34926__auto___46374 + (1));
i__34926__auto___46374 = G__46375;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});})(g__46210__auto___46372))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46210__auto___46372){
return (function (args){
return cljs.core.deref.call(null,g__46210__auto___46372);
});})(g__46210__auto___46372))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__46210__auto___46372){
return (function (seq46336){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46336));
});})(g__46210__auto___46372))
;


var g__46210__auto___46376 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__46210__auto___46376){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__34932__auto__ = [];
var len__34925__auto___46377 = arguments.length;
var i__34926__auto___46378 = (0);
while(true){
if((i__34926__auto___46378 < len__34925__auto___46377)){
args__34932__auto__.push((arguments[i__34926__auto___46378]));

var G__46379 = (i__34926__auto___46378 + (1));
i__34926__auto___46378 = G__46379;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});})(g__46210__auto___46376))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46210__auto___46376){
return (function (args){
return cljs.core.deref.call(null,g__46210__auto___46376);
});})(g__46210__auto___46376))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__46210__auto___46376){
return (function (seq46337){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46337));
});})(g__46210__auto___46376))
;


var g__46210__auto___46380 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__46210__auto___46380){
return (function cljs$spec$impl$gen$double(var_args){
var args__34932__auto__ = [];
var len__34925__auto___46381 = arguments.length;
var i__34926__auto___46382 = (0);
while(true){
if((i__34926__auto___46382 < len__34925__auto___46381)){
args__34932__auto__.push((arguments[i__34926__auto___46382]));

var G__46383 = (i__34926__auto___46382 + (1));
i__34926__auto___46382 = G__46383;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});})(g__46210__auto___46380))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46210__auto___46380){
return (function (args){
return cljs.core.deref.call(null,g__46210__auto___46380);
});})(g__46210__auto___46380))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__46210__auto___46380){
return (function (seq46338){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46338));
});})(g__46210__auto___46380))
;


var g__46210__auto___46384 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__46210__auto___46384){
return (function cljs$spec$impl$gen$int(var_args){
var args__34932__auto__ = [];
var len__34925__auto___46385 = arguments.length;
var i__34926__auto___46386 = (0);
while(true){
if((i__34926__auto___46386 < len__34925__auto___46385)){
args__34932__auto__.push((arguments[i__34926__auto___46386]));

var G__46387 = (i__34926__auto___46386 + (1));
i__34926__auto___46386 = G__46387;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});})(g__46210__auto___46384))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46210__auto___46384){
return (function (args){
return cljs.core.deref.call(null,g__46210__auto___46384);
});})(g__46210__auto___46384))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__46210__auto___46384){
return (function (seq46339){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46339));
});})(g__46210__auto___46384))
;


var g__46210__auto___46388 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__46210__auto___46388){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__34932__auto__ = [];
var len__34925__auto___46389 = arguments.length;
var i__34926__auto___46390 = (0);
while(true){
if((i__34926__auto___46390 < len__34925__auto___46389)){
args__34932__auto__.push((arguments[i__34926__auto___46390]));

var G__46391 = (i__34926__auto___46390 + (1));
i__34926__auto___46390 = G__46391;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});})(g__46210__auto___46388))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46210__auto___46388){
return (function (args){
return cljs.core.deref.call(null,g__46210__auto___46388);
});})(g__46210__auto___46388))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__46210__auto___46388){
return (function (seq46340){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46340));
});})(g__46210__auto___46388))
;


var g__46210__auto___46392 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__46210__auto___46392){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__34932__auto__ = [];
var len__34925__auto___46393 = arguments.length;
var i__34926__auto___46394 = (0);
while(true){
if((i__34926__auto___46394 < len__34925__auto___46393)){
args__34932__auto__.push((arguments[i__34926__auto___46394]));

var G__46395 = (i__34926__auto___46394 + (1));
i__34926__auto___46394 = G__46395;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});})(g__46210__auto___46392))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46210__auto___46392){
return (function (args){
return cljs.core.deref.call(null,g__46210__auto___46392);
});})(g__46210__auto___46392))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__46210__auto___46392){
return (function (seq46341){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46341));
});})(g__46210__auto___46392))
;


var g__46210__auto___46396 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__46210__auto___46396){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__34932__auto__ = [];
var len__34925__auto___46397 = arguments.length;
var i__34926__auto___46398 = (0);
while(true){
if((i__34926__auto___46398 < len__34925__auto___46397)){
args__34932__auto__.push((arguments[i__34926__auto___46398]));

var G__46399 = (i__34926__auto___46398 + (1));
i__34926__auto___46398 = G__46399;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});})(g__46210__auto___46396))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46210__auto___46396){
return (function (args){
return cljs.core.deref.call(null,g__46210__auto___46396);
});})(g__46210__auto___46396))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__46210__auto___46396){
return (function (seq46342){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46342));
});})(g__46210__auto___46396))
;


var g__46210__auto___46400 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__46210__auto___46400){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__34932__auto__ = [];
var len__34925__auto___46401 = arguments.length;
var i__34926__auto___46402 = (0);
while(true){
if((i__34926__auto___46402 < len__34925__auto___46401)){
args__34932__auto__.push((arguments[i__34926__auto___46402]));

var G__46403 = (i__34926__auto___46402 + (1));
i__34926__auto___46402 = G__46403;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});})(g__46210__auto___46400))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46210__auto___46400){
return (function (args){
return cljs.core.deref.call(null,g__46210__auto___46400);
});})(g__46210__auto___46400))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__46210__auto___46400){
return (function (seq46343){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46343));
});})(g__46210__auto___46400))
;


var g__46210__auto___46404 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__46210__auto___46404){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__34932__auto__ = [];
var len__34925__auto___46405 = arguments.length;
var i__34926__auto___46406 = (0);
while(true){
if((i__34926__auto___46406 < len__34925__auto___46405)){
args__34932__auto__.push((arguments[i__34926__auto___46406]));

var G__46407 = (i__34926__auto___46406 + (1));
i__34926__auto___46406 = G__46407;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});})(g__46210__auto___46404))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46210__auto___46404){
return (function (args){
return cljs.core.deref.call(null,g__46210__auto___46404);
});})(g__46210__auto___46404))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__46210__auto___46404){
return (function (seq46344){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46344));
});})(g__46210__auto___46404))
;


var g__46210__auto___46408 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__46210__auto___46408){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__34932__auto__ = [];
var len__34925__auto___46409 = arguments.length;
var i__34926__auto___46410 = (0);
while(true){
if((i__34926__auto___46410 < len__34925__auto___46409)){
args__34932__auto__.push((arguments[i__34926__auto___46410]));

var G__46411 = (i__34926__auto___46410 + (1));
i__34926__auto___46410 = G__46411;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});})(g__46210__auto___46408))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46210__auto___46408){
return (function (args){
return cljs.core.deref.call(null,g__46210__auto___46408);
});})(g__46210__auto___46408))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__46210__auto___46408){
return (function (seq46345){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46345));
});})(g__46210__auto___46408))
;


var g__46210__auto___46412 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__46210__auto___46412){
return (function cljs$spec$impl$gen$string(var_args){
var args__34932__auto__ = [];
var len__34925__auto___46413 = arguments.length;
var i__34926__auto___46414 = (0);
while(true){
if((i__34926__auto___46414 < len__34925__auto___46413)){
args__34932__auto__.push((arguments[i__34926__auto___46414]));

var G__46415 = (i__34926__auto___46414 + (1));
i__34926__auto___46414 = G__46415;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});})(g__46210__auto___46412))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46210__auto___46412){
return (function (args){
return cljs.core.deref.call(null,g__46210__auto___46412);
});})(g__46210__auto___46412))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__46210__auto___46412){
return (function (seq46346){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46346));
});})(g__46210__auto___46412))
;


var g__46210__auto___46416 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__46210__auto___46416){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__34932__auto__ = [];
var len__34925__auto___46417 = arguments.length;
var i__34926__auto___46418 = (0);
while(true){
if((i__34926__auto___46418 < len__34925__auto___46417)){
args__34932__auto__.push((arguments[i__34926__auto___46418]));

var G__46419 = (i__34926__auto___46418 + (1));
i__34926__auto___46418 = G__46419;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});})(g__46210__auto___46416))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46210__auto___46416){
return (function (args){
return cljs.core.deref.call(null,g__46210__auto___46416);
});})(g__46210__auto___46416))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__46210__auto___46416){
return (function (seq46347){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46347));
});})(g__46210__auto___46416))
;


var g__46210__auto___46420 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__46210__auto___46420){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__34932__auto__ = [];
var len__34925__auto___46421 = arguments.length;
var i__34926__auto___46422 = (0);
while(true){
if((i__34926__auto___46422 < len__34925__auto___46421)){
args__34932__auto__.push((arguments[i__34926__auto___46422]));

var G__46423 = (i__34926__auto___46422 + (1));
i__34926__auto___46422 = G__46423;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});})(g__46210__auto___46420))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46210__auto___46420){
return (function (args){
return cljs.core.deref.call(null,g__46210__auto___46420);
});})(g__46210__auto___46420))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__46210__auto___46420){
return (function (seq46348){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46348));
});})(g__46210__auto___46420))
;


var g__46210__auto___46424 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__46210__auto___46424){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__34932__auto__ = [];
var len__34925__auto___46425 = arguments.length;
var i__34926__auto___46426 = (0);
while(true){
if((i__34926__auto___46426 < len__34925__auto___46425)){
args__34932__auto__.push((arguments[i__34926__auto___46426]));

var G__46427 = (i__34926__auto___46426 + (1));
i__34926__auto___46426 = G__46427;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});})(g__46210__auto___46424))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46210__auto___46424){
return (function (args){
return cljs.core.deref.call(null,g__46210__auto___46424);
});})(g__46210__auto___46424))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__46210__auto___46424){
return (function (seq46349){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46349));
});})(g__46210__auto___46424))
;


var g__46210__auto___46428 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__46210__auto___46428){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__34932__auto__ = [];
var len__34925__auto___46429 = arguments.length;
var i__34926__auto___46430 = (0);
while(true){
if((i__34926__auto___46430 < len__34925__auto___46429)){
args__34932__auto__.push((arguments[i__34926__auto___46430]));

var G__46431 = (i__34926__auto___46430 + (1));
i__34926__auto___46430 = G__46431;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});})(g__46210__auto___46428))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46210__auto___46428){
return (function (args){
return cljs.core.deref.call(null,g__46210__auto___46428);
});})(g__46210__auto___46428))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__46210__auto___46428){
return (function (seq46350){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46350));
});})(g__46210__auto___46428))
;


var g__46210__auto___46432 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__46210__auto___46432){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__34932__auto__ = [];
var len__34925__auto___46433 = arguments.length;
var i__34926__auto___46434 = (0);
while(true){
if((i__34926__auto___46434 < len__34925__auto___46433)){
args__34932__auto__.push((arguments[i__34926__auto___46434]));

var G__46435 = (i__34926__auto___46434 + (1));
i__34926__auto___46434 = G__46435;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});})(g__46210__auto___46432))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46210__auto___46432){
return (function (args){
return cljs.core.deref.call(null,g__46210__auto___46432);
});})(g__46210__auto___46432))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__46210__auto___46432){
return (function (seq46351){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46351));
});})(g__46210__auto___46432))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__34932__auto__ = [];
var len__34925__auto___46438 = arguments.length;
var i__34926__auto___46439 = (0);
while(true){
if((i__34926__auto___46439 < len__34925__auto___46438)){
args__34932__auto__.push((arguments[i__34926__auto___46439]));

var G__46440 = (i__34926__auto___46439 + (1));
i__34926__auto___46439 = G__46440;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__46436_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__46436_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq46437){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46437));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__46441_SHARP_){
return (new Date(p1__46441_SHARP_));
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

//# sourceMappingURL=gen.js.map?rel=1526470137580