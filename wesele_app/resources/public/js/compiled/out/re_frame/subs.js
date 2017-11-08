// Compiled by ClojureScript 1.9.494 {}
goog.provide('re_frame.subs');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('re_frame.utils');
goog.require('re_frame.registrar');
goog.require('re_frame.trace');
re_frame.subs.kind = new cljs.core.Keyword(null,"sub","sub",-2093760025);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.subs.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.subs.query__GT_reaction = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Runs on-dispose for all subscriptions we have in the subscription cache.
 *   Used to force recreation of new subscriptions. Should only be necessary
 *   in development.
 * 
 *   The on-dispose functions for the subscriptions will remove themselves from the
 *   cache.
 * 
 *   Useful when reloading Figwheel code after a React exception, as React components
 *   aren't cleaned up properly. This means a subscription's on-dispose function isn't
 *   run when the components are destroyed. If a bad subscription caused your exception,
 *   then you can't fix it without reloading your browser.
 */
re_frame.subs.clear_subscription_cache_BANG_ = (function re_frame$subs$clear_subscription_cache_BANG_(){
var seq__58458_58468 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction));
var chunk__58459_58469 = null;
var count__58460_58470 = (0);
var i__58461_58471 = (0);
while(true){
if((i__58461_58471 < count__58460_58470)){
var vec__58462_58472 = cljs.core._nth.call(null,chunk__58459_58469,i__58461_58471);
var k_58473 = cljs.core.nth.call(null,vec__58462_58472,(0),null);
var rxn_58474 = cljs.core.nth.call(null,vec__58462_58472,(1),null);
re_frame.interop.dispose_BANG_.call(null,rxn_58474);

var G__58475 = seq__58458_58468;
var G__58476 = chunk__58459_58469;
var G__58477 = count__58460_58470;
var G__58478 = (i__58461_58471 + (1));
seq__58458_58468 = G__58475;
chunk__58459_58469 = G__58476;
count__58460_58470 = G__58477;
i__58461_58471 = G__58478;
continue;
} else {
var temp__4657__auto___58479 = cljs.core.seq.call(null,seq__58458_58468);
if(temp__4657__auto___58479){
var seq__58458_58480__$1 = temp__4657__auto___58479;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58458_58480__$1)){
var c__44313__auto___58481 = cljs.core.chunk_first.call(null,seq__58458_58480__$1);
var G__58482 = cljs.core.chunk_rest.call(null,seq__58458_58480__$1);
var G__58483 = c__44313__auto___58481;
var G__58484 = cljs.core.count.call(null,c__44313__auto___58481);
var G__58485 = (0);
seq__58458_58468 = G__58482;
chunk__58459_58469 = G__58483;
count__58460_58470 = G__58484;
i__58461_58471 = G__58485;
continue;
} else {
var vec__58465_58486 = cljs.core.first.call(null,seq__58458_58480__$1);
var k_58487 = cljs.core.nth.call(null,vec__58465_58486,(0),null);
var rxn_58488 = cljs.core.nth.call(null,vec__58465_58486,(1),null);
re_frame.interop.dispose_BANG_.call(null,rxn_58488);

var G__58489 = cljs.core.next.call(null,seq__58458_58480__$1);
var G__58490 = null;
var G__58491 = (0);
var G__58492 = (0);
seq__58458_58468 = G__58489;
chunk__58459_58469 = G__58490;
count__58460_58470 = G__58491;
i__58461_58471 = G__58492;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Subscription cache should be empty after clearing it.");
} else {
return null;
}
});
/**
 * Unregisters all existing subscription handlers
 */
re_frame.subs.clear_all_handlers_BANG_ = (function re_frame$subs$clear_all_handlers_BANG_(){
re_frame.registrar.clear_handlers.call(null,re_frame.subs.kind);

return re_frame.subs.clear_subscription_cache_BANG_.call(null);
});
/**
 * cache the reaction r
 */
re_frame.subs.cache_and_return = (function re_frame$subs$cache_and_return(query_v,dynv,r){
var cache_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dynv], null);
re_frame.interop.add_on_dispose_BANG_.call(null,r,((function (cache_key){
return (function (){
cljs.core.swap_BANG_.call(null,re_frame.subs.query__GT_reaction,cljs.core.dissoc,cache_key);

if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_58506 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null));

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__46330__auto___58519 = re_frame.interop.now.call(null);
var duration__46331__auto___58520 = (end__46330__auto___58519 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__58507_58521 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__58508_58522 = null;
var count__58509_58523 = (0);
var i__58510_58524 = (0);
while(true){
if((i__58510_58524 < count__58509_58523)){
var vec__58511_58525 = cljs.core._nth.call(null,chunk__58508_58522,i__58510_58524);
var k__46332__auto___58526 = cljs.core.nth.call(null,vec__58511_58525,(0),null);
var cb__46333__auto___58527 = cljs.core.nth.call(null,vec__58511_58525,(1),null);
try{cb__46333__auto___58527.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__46331__auto___58520,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e58514){if((e58514 instanceof java.lang.Exception)){
var e__46334__auto___58528 = e58514;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__46332__auto___58526,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__46334__auto___58528);
} else {
throw e58514;

}
}
var G__58529 = seq__58507_58521;
var G__58530 = chunk__58508_58522;
var G__58531 = count__58509_58523;
var G__58532 = (i__58510_58524 + (1));
seq__58507_58521 = G__58529;
chunk__58508_58522 = G__58530;
count__58509_58523 = G__58531;
i__58510_58524 = G__58532;
continue;
} else {
var temp__4657__auto___58533 = cljs.core.seq.call(null,seq__58507_58521);
if(temp__4657__auto___58533){
var seq__58507_58534__$1 = temp__4657__auto___58533;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58507_58534__$1)){
var c__44313__auto___58535 = cljs.core.chunk_first.call(null,seq__58507_58534__$1);
var G__58536 = cljs.core.chunk_rest.call(null,seq__58507_58534__$1);
var G__58537 = c__44313__auto___58535;
var G__58538 = cljs.core.count.call(null,c__44313__auto___58535);
var G__58539 = (0);
seq__58507_58521 = G__58536;
chunk__58508_58522 = G__58537;
count__58509_58523 = G__58538;
i__58510_58524 = G__58539;
continue;
} else {
var vec__58515_58540 = cljs.core.first.call(null,seq__58507_58534__$1);
var k__46332__auto___58541 = cljs.core.nth.call(null,vec__58515_58540,(0),null);
var cb__46333__auto___58542 = cljs.core.nth.call(null,vec__58515_58540,(1),null);
try{cb__46333__auto___58542.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__46331__auto___58520,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e58518){if((e58518 instanceof java.lang.Exception)){
var e__46334__auto___58543 = e58518;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__46332__auto___58541,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__46334__auto___58543);
} else {
throw e58518;

}
}
var G__58544 = cljs.core.next.call(null,seq__58507_58534__$1);
var G__58545 = null;
var G__58546 = (0);
var G__58547 = (0);
seq__58507_58521 = G__58544;
chunk__58508_58522 = G__58545;
count__58509_58523 = G__58546;
i__58510_58524 = G__58547;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_58506;
}} else {
return null;
}
});})(cache_key))
);

cljs.core.swap_BANG_.call(null,re_frame.subs.query__GT_reaction,cljs.core.assoc,cache_key,r);

if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__46347__auto___58548 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__46347__auto___58548;

} else {
}

return r;
});
re_frame.subs.cache_lookup = (function re_frame$subs$cache_lookup(var_args){
var args58549 = [];
var len__44607__auto___58552 = arguments.length;
var i__44608__auto___58553 = (0);
while(true){
if((i__44608__auto___58553 < len__44607__auto___58552)){
args58549.push((arguments[i__44608__auto___58553]));

var G__58554 = (i__44608__auto___58553 + (1));
i__44608__auto___58553 = G__58554;
continue;
} else {
}
break;
}

var G__58551 = args58549.length;
switch (G__58551) {
case 1:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args58549.length)].join('')));

}
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return re_frame.subs.cache_lookup.call(null,query_v,cljs.core.PersistentVector.EMPTY);
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2 = (function (query_v,dyn_v){
return cljs.core.get.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dyn_v], null));
});

re_frame.subs.cache_lookup.cljs$lang$maxFixedArity = 2;

/**
 * Returns a Reagent/reaction which contains a computation
 */
re_frame.subs.subscribe = (function re_frame$subs$subscribe(var_args){
var args58556 = [];
var len__44607__auto___58585 = arguments.length;
var i__44608__auto___58586 = (0);
while(true){
if((i__44608__auto___58586 < len__44607__auto___58585)){
args58556.push((arguments[i__44608__auto___58586]));

var G__58587 = (i__44608__auto___58586 + (1));
i__44608__auto___58586 = G__58587;
continue;
} else {
}
break;
}

var G__58558 = args58556.length;
switch (G__58558) {
case 1:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args58556.length)].join('')));

}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_58559 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v], null)], null));

try{try{var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,query_v);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__46347__auto___58589 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__46347__auto___58589;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query_v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__46347__auto___58590 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__46347__auto___58590;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__46347__auto___58591 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__46347__auto___58591;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join(''));
} else {
return re_frame.subs.cache_and_return.call(null,query_v,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,re_frame.db.app_db,query_v));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__46330__auto___58592 = re_frame.interop.now.call(null);
var duration__46331__auto___58593 = (end__46330__auto___58592 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__58560_58594 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__58561_58595 = null;
var count__58562_58596 = (0);
var i__58563_58597 = (0);
while(true){
if((i__58563_58597 < count__58562_58596)){
var vec__58564_58598 = cljs.core._nth.call(null,chunk__58561_58595,i__58563_58597);
var k__46332__auto___58599 = cljs.core.nth.call(null,vec__58564_58598,(0),null);
var cb__46333__auto___58600 = cljs.core.nth.call(null,vec__58564_58598,(1),null);
try{cb__46333__auto___58600.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__46331__auto___58593,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e58567){if((e58567 instanceof java.lang.Exception)){
var e__46334__auto___58601 = e58567;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__46332__auto___58599,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__46334__auto___58601);
} else {
throw e58567;

}
}
var G__58602 = seq__58560_58594;
var G__58603 = chunk__58561_58595;
var G__58604 = count__58562_58596;
var G__58605 = (i__58563_58597 + (1));
seq__58560_58594 = G__58602;
chunk__58561_58595 = G__58603;
count__58562_58596 = G__58604;
i__58563_58597 = G__58605;
continue;
} else {
var temp__4657__auto___58606 = cljs.core.seq.call(null,seq__58560_58594);
if(temp__4657__auto___58606){
var seq__58560_58607__$1 = temp__4657__auto___58606;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58560_58607__$1)){
var c__44313__auto___58608 = cljs.core.chunk_first.call(null,seq__58560_58607__$1);
var G__58609 = cljs.core.chunk_rest.call(null,seq__58560_58607__$1);
var G__58610 = c__44313__auto___58608;
var G__58611 = cljs.core.count.call(null,c__44313__auto___58608);
var G__58612 = (0);
seq__58560_58594 = G__58609;
chunk__58561_58595 = G__58610;
count__58562_58596 = G__58611;
i__58563_58597 = G__58612;
continue;
} else {
var vec__58568_58613 = cljs.core.first.call(null,seq__58560_58607__$1);
var k__46332__auto___58614 = cljs.core.nth.call(null,vec__58568_58613,(0),null);
var cb__46333__auto___58615 = cljs.core.nth.call(null,vec__58568_58613,(1),null);
try{cb__46333__auto___58615.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__46331__auto___58593,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e58571){if((e58571 instanceof java.lang.Exception)){
var e__46334__auto___58616 = e58571;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__46332__auto___58614,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__46334__auto___58616);
} else {
throw e58571;

}
}
var G__58617 = cljs.core.next.call(null,seq__58560_58607__$1);
var G__58618 = null;
var G__58619 = (0);
var G__58620 = (0);
seq__58560_58594 = G__58617;
chunk__58561_58595 = G__58618;
count__58562_58596 = G__58619;
i__58563_58597 = G__58620;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_58559;
}} else {
var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,query_v);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__46347__auto___58621 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__46347__auto___58621;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query_v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__46347__auto___58622 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__46347__auto___58622;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__46347__auto___58623 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__46347__auto___58623;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join(''));
} else {
return re_frame.subs.cache_and_return.call(null,query_v,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,re_frame.db.app_db,query_v));
}
}
}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (v,dynv){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_58572 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),v,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dynv], null)], null));

try{try{var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,v,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__46347__auto___58624 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__46347__auto___58624;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__46347__auto___58625 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__46347__auto___58625;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___58626 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___58626)){
var not_reactive_58627 = temp__4657__auto___58626;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_58627);
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__46347__auto___58628 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__46347__auto___58628;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join(''));
} else {
var dyn_vals = re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_58572){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_58572))
);
var sub = re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_58572){
return (function (){
return handler_fn.call(null,re_frame.db.app_db,v,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_58572))
);
return re_frame.subs.cache_and_return.call(null,v,dynv,re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_58572){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_58572))
));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__46330__auto___58629 = re_frame.interop.now.call(null);
var duration__46331__auto___58630 = (end__46330__auto___58629 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__58573_58631 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__58574_58632 = null;
var count__58575_58633 = (0);
var i__58576_58634 = (0);
while(true){
if((i__58576_58634 < count__58575_58633)){
var vec__58577_58635 = cljs.core._nth.call(null,chunk__58574_58632,i__58576_58634);
var k__46332__auto___58636 = cljs.core.nth.call(null,vec__58577_58635,(0),null);
var cb__46333__auto___58637 = cljs.core.nth.call(null,vec__58577_58635,(1),null);
try{cb__46333__auto___58637.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__46331__auto___58630,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e58580){if((e58580 instanceof java.lang.Exception)){
var e__46334__auto___58638 = e58580;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__46332__auto___58636,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__46334__auto___58638);
} else {
throw e58580;

}
}
var G__58639 = seq__58573_58631;
var G__58640 = chunk__58574_58632;
var G__58641 = count__58575_58633;
var G__58642 = (i__58576_58634 + (1));
seq__58573_58631 = G__58639;
chunk__58574_58632 = G__58640;
count__58575_58633 = G__58641;
i__58576_58634 = G__58642;
continue;
} else {
var temp__4657__auto___58643 = cljs.core.seq.call(null,seq__58573_58631);
if(temp__4657__auto___58643){
var seq__58573_58644__$1 = temp__4657__auto___58643;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58573_58644__$1)){
var c__44313__auto___58645 = cljs.core.chunk_first.call(null,seq__58573_58644__$1);
var G__58646 = cljs.core.chunk_rest.call(null,seq__58573_58644__$1);
var G__58647 = c__44313__auto___58645;
var G__58648 = cljs.core.count.call(null,c__44313__auto___58645);
var G__58649 = (0);
seq__58573_58631 = G__58646;
chunk__58574_58632 = G__58647;
count__58575_58633 = G__58648;
i__58576_58634 = G__58649;
continue;
} else {
var vec__58581_58650 = cljs.core.first.call(null,seq__58573_58644__$1);
var k__46332__auto___58651 = cljs.core.nth.call(null,vec__58581_58650,(0),null);
var cb__46333__auto___58652 = cljs.core.nth.call(null,vec__58581_58650,(1),null);
try{cb__46333__auto___58652.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__46331__auto___58630,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e58584){if((e58584 instanceof java.lang.Exception)){
var e__46334__auto___58653 = e58584;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__46332__auto___58651,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__46334__auto___58653);
} else {
throw e58584;

}
}
var G__58654 = cljs.core.next.call(null,seq__58573_58644__$1);
var G__58655 = null;
var G__58656 = (0);
var G__58657 = (0);
seq__58573_58631 = G__58654;
chunk__58574_58632 = G__58655;
count__58575_58633 = G__58656;
i__58576_58634 = G__58657;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_58572;
}} else {
var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,v,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__46347__auto___58658 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__46347__auto___58658;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__46347__auto___58659 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__46347__auto___58659;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___58660 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___58660)){
var not_reactive_58661 = temp__4657__auto___58660;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_58661);
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__46347__auto___58662 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__46347__auto___58662;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join(''));
} else {
var dyn_vals = re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__4655__auto__){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__))
);
var sub = re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__4655__auto__){
return (function (){
return handler_fn.call(null,re_frame.db.app_db,v,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__))
);
return re_frame.subs.cache_and_return.call(null,v,dynv,re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__))
));
}
}
}
});

re_frame.subs.subscribe.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new version of 'm' in which 'f' has been applied to each value.
 *   (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}
 */
re_frame.subs.map_vals = (function re_frame$subs$map_vals(f,m){
return cljs.core.into.call(null,cljs.core.empty.call(null,m),cljs.core.map.call(null,(function (p__58667){
var vec__58668 = p__58667;
var k = cljs.core.nth.call(null,vec__58668,(0),null);
var v = cljs.core.nth.call(null,vec__58668,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null);
})),m);
});
re_frame.subs.deref_input_signals = (function re_frame$subs$deref_input_signals(signals,query_id){
var signals__$1 = ((cljs.core.sequential_QMARK_.call(null,signals))?cljs.core.map.call(null,cljs.core.deref,signals):((cljs.core.map_QMARK_.call(null,signals))?re_frame.subs.map_vals.call(null,cljs.core.deref,signals):(cljs.core.truth_(re_frame.interop.deref_QMARK_.call(null,signals))?cljs.core.deref.call(null,signals):re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: in the reg-sub for ",query_id,", the input-signals function returns: ",signals)
)));
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__46347__auto___58671 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,re_frame.interop.reagent_id,signals__$1)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,re_frame.interop.reagent_id,signals__$1)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__46347__auto___58671;

} else {
}

return signals__$1;
});
/**
 * Associate the given `query id` with a handler function and an optional signal function.
 * 
 *   There's 3 ways this function can be called
 * 
 *   1. (reg-sub
 *     :test-sub
 *     (fn [db [_]] db))
 *   The value in app-db is passed to the computation function as the 1st argument.
 * 
 *   2. (reg-sub
 *     :a-b-sub
 *     (fn [q-vec d-vec]
 *       [(subs/subscribe [:a-sub])
 *        (subs/subscribe [:b-sub])])
 *     (fn [[a b] [_]] {:a a :b b}))
 * 
 *   Two functions provided. The 2nd is computation function, as before. The 1st
 *   is returns what `input signals` should be provided to the computation. The
 *   `input signals` function is called with two arguments: the query vector
 *   and the dynamic vector. The return value can be singleton reaction or
 *   a sequence of reactions.
 * 
 *   3. (reg-sub
 *     :a-b-sub
 *     :<- [:a-sub]
 *     :<- [:b-sub]
 *     (fn [[a b] [_]] {:a a :b b}))```
 *   This 3rd variation is just syntactic sugar for the 2nd. Pairs are supplied instead
 *   of an `input signals` functions. `:<-` is supplied followed by the subscription
 *   vector.
 *   
 */
re_frame.subs.reg_sub = (function re_frame$subs$reg_sub(var_args){
var args__44614__auto__ = [];
var len__44607__auto___58727 = arguments.length;
var i__44608__auto___58728 = (0);
while(true){
if((i__44608__auto___58728 < len__44607__auto___58727)){
args__44614__auto__.push((arguments[i__44608__auto___58728]));

var G__58729 = (i__44608__auto___58728 + (1));
i__44608__auto___58728 = G__58729;
continue;
} else {
}
break;
}

var argseq__44615__auto__ = ((((1) < args__44614__auto__.length))?(new cljs.core.IndexedSeq(args__44614__auto__.slice((1)),(0),null)):null);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44615__auto__);
});

re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
var computation_fn = cljs.core.last.call(null,args);
var input_args = cljs.core.butlast.call(null,args);
var err_header = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: reg-sub for "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", ")].join('');
var inputs_fn = (function (){var G__58674 = cljs.core.count.call(null,input_args);
switch (G__58674) {
case (0):
return ((function (G__58674,computation_fn,input_args,err_header){
return (function() {
var G__58731 = null;
var G__58731__1 = (function (_){
return re_frame.db.app_db;
});
var G__58731__2 = (function (_,___$1){
return re_frame.db.app_db;
});
G__58731 = function(_,___$1){
switch(arguments.length){
case 1:
return G__58731__1.call(this,_);
case 2:
return G__58731__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__58731.cljs$core$IFn$_invoke$arity$1 = G__58731__1;
G__58731.cljs$core$IFn$_invoke$arity$2 = G__58731__2;
return G__58731;
})()
;})(G__58674,computation_fn,input_args,err_header))

break;
case (1):
var f = cljs.core.first.call(null,input_args);
if(cljs.core.fn_QMARK_.call(null,f)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"2nd argument expected to be an inputs function, got:",f);
}

return f;

break;
case (2):
return ((function (G__58674,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return re_frame.subs.subscribe.call(null,cljs.core.second.call(null,input_args));
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return re_frame.subs.subscribe.call(null,cljs.core.second.call(null,input_args));
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(G__58674,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.call(null,(2),input_args);
var vecs = cljs.core.map.call(null,cljs.core.last,pairs);
if(cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,vecs)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected pairs of :<- and vectors, got:",pairs);
}

return ((function (pairs,vecs,G__58674,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return cljs.core.map.call(null,re_frame.subs.subscribe,vecs);
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return cljs.core.map.call(null,re_frame.subs.subscribe,vecs);
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(pairs,vecs,G__58674,computation_fn,input_args,err_header))

}
})();
return re_frame.registrar.register_handler.call(null,re_frame.subs.kind,query_id,((function (computation_fn,input_args,err_header,inputs_fn){
return (function() {
var re_frame$subs$subs_handler_fn = null;
var re_frame$subs$subs_handler_fn__2 = (function (db,query_vec){
var subscriptions = inputs_fn.call(null,query_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_58701 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__46330__auto___58732 = re_frame.interop.now.call(null);
var duration__46331__auto___58733 = (end__46330__auto___58732 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__58702_58734 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__58703_58735 = null;
var count__58704_58736 = (0);
var i__58705_58737 = (0);
while(true){
if((i__58705_58737 < count__58704_58736)){
var vec__58706_58738 = cljs.core._nth.call(null,chunk__58703_58735,i__58705_58737);
var k__46332__auto___58739 = cljs.core.nth.call(null,vec__58706_58738,(0),null);
var cb__46333__auto___58740 = cljs.core.nth.call(null,vec__58706_58738,(1),null);
try{cb__46333__auto___58740.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__46331__auto___58733,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e58709){if((e58709 instanceof java.lang.Exception)){
var e__46334__auto___58741 = e58709;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__46332__auto___58739,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__46334__auto___58741);
} else {
throw e58709;

}
}
var G__58742 = seq__58702_58734;
var G__58743 = chunk__58703_58735;
var G__58744 = count__58704_58736;
var G__58745 = (i__58705_58737 + (1));
seq__58702_58734 = G__58742;
chunk__58703_58735 = G__58743;
count__58704_58736 = G__58744;
i__58705_58737 = G__58745;
continue;
} else {
var temp__4657__auto___58746 = cljs.core.seq.call(null,seq__58702_58734);
if(temp__4657__auto___58746){
var seq__58702_58747__$1 = temp__4657__auto___58746;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58702_58747__$1)){
var c__44313__auto___58748 = cljs.core.chunk_first.call(null,seq__58702_58747__$1);
var G__58749 = cljs.core.chunk_rest.call(null,seq__58702_58747__$1);
var G__58750 = c__44313__auto___58748;
var G__58751 = cljs.core.count.call(null,c__44313__auto___58748);
var G__58752 = (0);
seq__58702_58734 = G__58749;
chunk__58703_58735 = G__58750;
count__58704_58736 = G__58751;
i__58705_58737 = G__58752;
continue;
} else {
var vec__58710_58753 = cljs.core.first.call(null,seq__58702_58747__$1);
var k__46332__auto___58754 = cljs.core.nth.call(null,vec__58710_58753,(0),null);
var cb__46333__auto___58755 = cljs.core.nth.call(null,vec__58710_58753,(1),null);
try{cb__46333__auto___58755.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__46331__auto___58733,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e58713){if((e58713 instanceof java.lang.Exception)){
var e__46334__auto___58756 = e58713;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__46332__auto___58754,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__46334__auto___58756);
} else {
throw e58713;

}
}
var G__58757 = cljs.core.next.call(null,seq__58702_58747__$1);
var G__58758 = null;
var G__58759 = (0);
var G__58760 = (0);
seq__58702_58734 = G__58757;
chunk__58703_58735 = G__58758;
count__58704_58736 = G__58759;
i__58705_58737 = G__58760;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_58701;
}} else {
return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
var re_frame$subs$subs_handler_fn__3 = (function (db,query_vec,dyn_vec){
var subscriptions = inputs_fn.call(null,query_vec,dyn_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_58714 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dyn_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__46330__auto___58761 = re_frame.interop.now.call(null);
var duration__46331__auto___58762 = (end__46330__auto___58761 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__58715_58763 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__58716_58764 = null;
var count__58717_58765 = (0);
var i__58718_58766 = (0);
while(true){
if((i__58718_58766 < count__58717_58765)){
var vec__58719_58767 = cljs.core._nth.call(null,chunk__58716_58764,i__58718_58766);
var k__46332__auto___58768 = cljs.core.nth.call(null,vec__58719_58767,(0),null);
var cb__46333__auto___58769 = cljs.core.nth.call(null,vec__58719_58767,(1),null);
try{cb__46333__auto___58769.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__46331__auto___58762,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e58722){if((e58722 instanceof java.lang.Exception)){
var e__46334__auto___58770 = e58722;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__46332__auto___58768,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__46334__auto___58770);
} else {
throw e58722;

}
}
var G__58771 = seq__58715_58763;
var G__58772 = chunk__58716_58764;
var G__58773 = count__58717_58765;
var G__58774 = (i__58718_58766 + (1));
seq__58715_58763 = G__58771;
chunk__58716_58764 = G__58772;
count__58717_58765 = G__58773;
i__58718_58766 = G__58774;
continue;
} else {
var temp__4657__auto___58775 = cljs.core.seq.call(null,seq__58715_58763);
if(temp__4657__auto___58775){
var seq__58715_58776__$1 = temp__4657__auto___58775;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58715_58776__$1)){
var c__44313__auto___58777 = cljs.core.chunk_first.call(null,seq__58715_58776__$1);
var G__58778 = cljs.core.chunk_rest.call(null,seq__58715_58776__$1);
var G__58779 = c__44313__auto___58777;
var G__58780 = cljs.core.count.call(null,c__44313__auto___58777);
var G__58781 = (0);
seq__58715_58763 = G__58778;
chunk__58716_58764 = G__58779;
count__58717_58765 = G__58780;
i__58718_58766 = G__58781;
continue;
} else {
var vec__58723_58782 = cljs.core.first.call(null,seq__58715_58776__$1);
var k__46332__auto___58783 = cljs.core.nth.call(null,vec__58723_58782,(0),null);
var cb__46333__auto___58784 = cljs.core.nth.call(null,vec__58723_58782,(1),null);
try{cb__46333__auto___58784.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__46331__auto___58762,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e58726){if((e58726 instanceof java.lang.Exception)){
var e__46334__auto___58785 = e58726;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__46332__auto___58783,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__46334__auto___58785);
} else {
throw e58726;

}
}
var G__58786 = cljs.core.next.call(null,seq__58715_58776__$1);
var G__58787 = null;
var G__58788 = (0);
var G__58789 = (0);
seq__58715_58763 = G__58786;
chunk__58716_58764 = G__58787;
count__58717_58765 = G__58788;
i__58718_58766 = G__58789;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_58714;
}} else {
return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
re_frame$subs$subs_handler_fn = function(db,query_vec,dyn_vec){
switch(arguments.length){
case 2:
return re_frame$subs$subs_handler_fn__2.call(this,db,query_vec);
case 3:
return re_frame$subs$subs_handler_fn__3.call(this,db,query_vec,dyn_vec);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$subs_handler_fn__2;
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$3 = re_frame$subs$subs_handler_fn__3;
return re_frame$subs$subs_handler_fn;
})()
;})(computation_fn,input_args,err_header,inputs_fn))
);
});

re_frame.subs.reg_sub.cljs$lang$maxFixedArity = (1);

re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq58672){
var G__58673 = cljs.core.first.call(null,seq58672);
var seq58672__$1 = cljs.core.next.call(null,seq58672);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic(G__58673,seq58672__$1);
});


//# sourceMappingURL=subs.js.map?rel=1494353134742