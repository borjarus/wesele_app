// Compiled by ClojureScript 1.9.494 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__58291 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__58292 = null;
var count__58293 = (0);
var i__58294 = (0);
while(true){
if((i__58294 < count__58293)){
var vec__58295 = cljs.core._nth.call(null,chunk__58292,i__58294);
var effect_k = cljs.core.nth.call(null,vec__58295,(0),null);
var value = cljs.core.nth.call(null,vec__58295,(1),null);
var temp__4655__auto___58301 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___58301)){
var effect_fn_58302 = temp__4655__auto___58301;
effect_fn_58302.call(null,value);
} else {
}

var G__58303 = seq__58291;
var G__58304 = chunk__58292;
var G__58305 = count__58293;
var G__58306 = (i__58294 + (1));
seq__58291 = G__58303;
chunk__58292 = G__58304;
count__58293 = G__58305;
i__58294 = G__58306;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__58291);
if(temp__4657__auto__){
var seq__58291__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58291__$1)){
var c__44313__auto__ = cljs.core.chunk_first.call(null,seq__58291__$1);
var G__58307 = cljs.core.chunk_rest.call(null,seq__58291__$1);
var G__58308 = c__44313__auto__;
var G__58309 = cljs.core.count.call(null,c__44313__auto__);
var G__58310 = (0);
seq__58291 = G__58307;
chunk__58292 = G__58308;
count__58293 = G__58309;
i__58294 = G__58310;
continue;
} else {
var vec__58298 = cljs.core.first.call(null,seq__58291__$1);
var effect_k = cljs.core.nth.call(null,vec__58298,(0),null);
var value = cljs.core.nth.call(null,vec__58298,(1),null);
var temp__4655__auto___58311 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___58311)){
var effect_fn_58312 = temp__4655__auto___58311;
effect_fn_58312.call(null,value);
} else {
}

var G__58313 = cljs.core.next.call(null,seq__58291__$1);
var G__58314 = null;
var G__58315 = (0);
var G__58316 = (0);
seq__58291 = G__58313;
chunk__58292 = G__58314;
count__58293 = G__58315;
i__58294 = G__58316;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__58317 = cljs.core.seq.call(null,value);
var chunk__58318 = null;
var count__58319 = (0);
var i__58320 = (0);
while(true){
if((i__58320 < count__58319)){
var map__58321 = cljs.core._nth.call(null,chunk__58318,i__58320);
var map__58321__$1 = ((((!((map__58321 == null)))?((((map__58321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58321.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58321):map__58321);
var effect = map__58321__$1;
var ms = cljs.core.get.call(null,map__58321__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__58321__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__58317,chunk__58318,count__58319,i__58320,map__58321,map__58321__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__58317,chunk__58318,count__58319,i__58320,map__58321,map__58321__$1,effect,ms,dispatch))
,ms);
}

var G__58325 = seq__58317;
var G__58326 = chunk__58318;
var G__58327 = count__58319;
var G__58328 = (i__58320 + (1));
seq__58317 = G__58325;
chunk__58318 = G__58326;
count__58319 = G__58327;
i__58320 = G__58328;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__58317);
if(temp__4657__auto__){
var seq__58317__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58317__$1)){
var c__44313__auto__ = cljs.core.chunk_first.call(null,seq__58317__$1);
var G__58329 = cljs.core.chunk_rest.call(null,seq__58317__$1);
var G__58330 = c__44313__auto__;
var G__58331 = cljs.core.count.call(null,c__44313__auto__);
var G__58332 = (0);
seq__58317 = G__58329;
chunk__58318 = G__58330;
count__58319 = G__58331;
i__58320 = G__58332;
continue;
} else {
var map__58323 = cljs.core.first.call(null,seq__58317__$1);
var map__58323__$1 = ((((!((map__58323 == null)))?((((map__58323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58323.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58323):map__58323);
var effect = map__58323__$1;
var ms = cljs.core.get.call(null,map__58323__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__58323__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__58317,chunk__58318,count__58319,i__58320,map__58323,map__58323__$1,effect,ms,dispatch,seq__58317__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__58317,chunk__58318,count__58319,i__58320,map__58323,map__58323__$1,effect,ms,dispatch,seq__58317__$1,temp__4657__auto__))
,ms);
}

var G__58333 = cljs.core.next.call(null,seq__58317__$1);
var G__58334 = null;
var G__58335 = (0);
var G__58336 = (0);
seq__58317 = G__58333;
chunk__58318 = G__58334;
count__58319 = G__58335;
i__58320 = G__58336;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
}

var seq__58337 = cljs.core.seq.call(null,value);
var chunk__58338 = null;
var count__58339 = (0);
var i__58340 = (0);
while(true){
if((i__58340 < count__58339)){
var event = cljs.core._nth.call(null,chunk__58338,i__58340);
re_frame.router.dispatch.call(null,event);

var G__58341 = seq__58337;
var G__58342 = chunk__58338;
var G__58343 = count__58339;
var G__58344 = (i__58340 + (1));
seq__58337 = G__58341;
chunk__58338 = G__58342;
count__58339 = G__58343;
i__58340 = G__58344;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__58337);
if(temp__4657__auto__){
var seq__58337__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58337__$1)){
var c__44313__auto__ = cljs.core.chunk_first.call(null,seq__58337__$1);
var G__58345 = cljs.core.chunk_rest.call(null,seq__58337__$1);
var G__58346 = c__44313__auto__;
var G__58347 = cljs.core.count.call(null,c__44313__auto__);
var G__58348 = (0);
seq__58337 = G__58345;
chunk__58338 = G__58346;
count__58339 = G__58347;
i__58340 = G__58348;
continue;
} else {
var event = cljs.core.first.call(null,seq__58337__$1);
re_frame.router.dispatch.call(null,event);

var G__58349 = cljs.core.next.call(null,seq__58337__$1);
var G__58350 = null;
var G__58351 = (0);
var G__58352 = (0);
seq__58337 = G__58349;
chunk__58338 = G__58350;
count__58339 = G__58351;
i__58340 = G__58352;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__58353 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__58354 = null;
var count__58355 = (0);
var i__58356 = (0);
while(true){
if((i__58356 < count__58355)){
var event = cljs.core._nth.call(null,chunk__58354,i__58356);
clear_event.call(null,event);

var G__58357 = seq__58353;
var G__58358 = chunk__58354;
var G__58359 = count__58355;
var G__58360 = (i__58356 + (1));
seq__58353 = G__58357;
chunk__58354 = G__58358;
count__58355 = G__58359;
i__58356 = G__58360;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__58353);
if(temp__4657__auto__){
var seq__58353__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58353__$1)){
var c__44313__auto__ = cljs.core.chunk_first.call(null,seq__58353__$1);
var G__58361 = cljs.core.chunk_rest.call(null,seq__58353__$1);
var G__58362 = c__44313__auto__;
var G__58363 = cljs.core.count.call(null,c__44313__auto__);
var G__58364 = (0);
seq__58353 = G__58361;
chunk__58354 = G__58362;
count__58355 = G__58363;
i__58356 = G__58364;
continue;
} else {
var event = cljs.core.first.call(null,seq__58353__$1);
clear_event.call(null,event);

var G__58365 = cljs.core.next.call(null,seq__58353__$1);
var G__58366 = null;
var G__58367 = (0);
var G__58368 = (0);
seq__58353 = G__58365;
chunk__58354 = G__58366;
count__58355 = G__58367;
i__58356 = G__58368;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map?rel=1494353130357