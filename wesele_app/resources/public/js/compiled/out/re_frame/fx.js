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
var seq__54659 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__54660 = null;
var count__54661 = (0);
var i__54662 = (0);
while(true){
if((i__54662 < count__54661)){
var vec__54663 = cljs.core._nth.call(null,chunk__54660,i__54662);
var effect_k = cljs.core.nth.call(null,vec__54663,(0),null);
var value = cljs.core.nth.call(null,vec__54663,(1),null);
var temp__4655__auto___54669 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___54669)){
var effect_fn_54670 = temp__4655__auto___54669;
effect_fn_54670.call(null,value);
} else {
}

var G__54671 = seq__54659;
var G__54672 = chunk__54660;
var G__54673 = count__54661;
var G__54674 = (i__54662 + (1));
seq__54659 = G__54671;
chunk__54660 = G__54672;
count__54661 = G__54673;
i__54662 = G__54674;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__54659);
if(temp__4657__auto__){
var seq__54659__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54659__$1)){
var c__34153__auto__ = cljs.core.chunk_first.call(null,seq__54659__$1);
var G__54675 = cljs.core.chunk_rest.call(null,seq__54659__$1);
var G__54676 = c__34153__auto__;
var G__54677 = cljs.core.count.call(null,c__34153__auto__);
var G__54678 = (0);
seq__54659 = G__54675;
chunk__54660 = G__54676;
count__54661 = G__54677;
i__54662 = G__54678;
continue;
} else {
var vec__54666 = cljs.core.first.call(null,seq__54659__$1);
var effect_k = cljs.core.nth.call(null,vec__54666,(0),null);
var value = cljs.core.nth.call(null,vec__54666,(1),null);
var temp__4655__auto___54679 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___54679)){
var effect_fn_54680 = temp__4655__auto___54679;
effect_fn_54680.call(null,value);
} else {
}

var G__54681 = cljs.core.next.call(null,seq__54659__$1);
var G__54682 = null;
var G__54683 = (0);
var G__54684 = (0);
seq__54659 = G__54681;
chunk__54660 = G__54682;
count__54661 = G__54683;
i__54662 = G__54684;
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
var seq__54685 = cljs.core.seq.call(null,value);
var chunk__54686 = null;
var count__54687 = (0);
var i__54688 = (0);
while(true){
if((i__54688 < count__54687)){
var map__54689 = cljs.core._nth.call(null,chunk__54686,i__54688);
var map__54689__$1 = ((((!((map__54689 == null)))?((((map__54689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54689.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54689):map__54689);
var effect = map__54689__$1;
var ms = cljs.core.get.call(null,map__54689__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__54689__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__54685,chunk__54686,count__54687,i__54688,map__54689,map__54689__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__54685,chunk__54686,count__54687,i__54688,map__54689,map__54689__$1,effect,ms,dispatch))
,ms);
}

var G__54693 = seq__54685;
var G__54694 = chunk__54686;
var G__54695 = count__54687;
var G__54696 = (i__54688 + (1));
seq__54685 = G__54693;
chunk__54686 = G__54694;
count__54687 = G__54695;
i__54688 = G__54696;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__54685);
if(temp__4657__auto__){
var seq__54685__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54685__$1)){
var c__34153__auto__ = cljs.core.chunk_first.call(null,seq__54685__$1);
var G__54697 = cljs.core.chunk_rest.call(null,seq__54685__$1);
var G__54698 = c__34153__auto__;
var G__54699 = cljs.core.count.call(null,c__34153__auto__);
var G__54700 = (0);
seq__54685 = G__54697;
chunk__54686 = G__54698;
count__54687 = G__54699;
i__54688 = G__54700;
continue;
} else {
var map__54691 = cljs.core.first.call(null,seq__54685__$1);
var map__54691__$1 = ((((!((map__54691 == null)))?((((map__54691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54691.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54691):map__54691);
var effect = map__54691__$1;
var ms = cljs.core.get.call(null,map__54691__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__54691__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__54685,chunk__54686,count__54687,i__54688,map__54691,map__54691__$1,effect,ms,dispatch,seq__54685__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__54685,chunk__54686,count__54687,i__54688,map__54691,map__54691__$1,effect,ms,dispatch,seq__54685__$1,temp__4657__auto__))
,ms);
}

var G__54701 = cljs.core.next.call(null,seq__54685__$1);
var G__54702 = null;
var G__54703 = (0);
var G__54704 = (0);
seq__54685 = G__54701;
chunk__54686 = G__54702;
count__54687 = G__54703;
i__54688 = G__54704;
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

var seq__54705 = cljs.core.seq.call(null,value);
var chunk__54706 = null;
var count__54707 = (0);
var i__54708 = (0);
while(true){
if((i__54708 < count__54707)){
var event = cljs.core._nth.call(null,chunk__54706,i__54708);
re_frame.router.dispatch.call(null,event);

var G__54709 = seq__54705;
var G__54710 = chunk__54706;
var G__54711 = count__54707;
var G__54712 = (i__54708 + (1));
seq__54705 = G__54709;
chunk__54706 = G__54710;
count__54707 = G__54711;
i__54708 = G__54712;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__54705);
if(temp__4657__auto__){
var seq__54705__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54705__$1)){
var c__34153__auto__ = cljs.core.chunk_first.call(null,seq__54705__$1);
var G__54713 = cljs.core.chunk_rest.call(null,seq__54705__$1);
var G__54714 = c__34153__auto__;
var G__54715 = cljs.core.count.call(null,c__34153__auto__);
var G__54716 = (0);
seq__54705 = G__54713;
chunk__54706 = G__54714;
count__54707 = G__54715;
i__54708 = G__54716;
continue;
} else {
var event = cljs.core.first.call(null,seq__54705__$1);
re_frame.router.dispatch.call(null,event);

var G__54717 = cljs.core.next.call(null,seq__54705__$1);
var G__54718 = null;
var G__54719 = (0);
var G__54720 = (0);
seq__54705 = G__54717;
chunk__54706 = G__54718;
count__54707 = G__54719;
i__54708 = G__54720;
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
var seq__54721 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__54722 = null;
var count__54723 = (0);
var i__54724 = (0);
while(true){
if((i__54724 < count__54723)){
var event = cljs.core._nth.call(null,chunk__54722,i__54724);
clear_event.call(null,event);

var G__54725 = seq__54721;
var G__54726 = chunk__54722;
var G__54727 = count__54723;
var G__54728 = (i__54724 + (1));
seq__54721 = G__54725;
chunk__54722 = G__54726;
count__54723 = G__54727;
i__54724 = G__54728;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__54721);
if(temp__4657__auto__){
var seq__54721__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54721__$1)){
var c__34153__auto__ = cljs.core.chunk_first.call(null,seq__54721__$1);
var G__54729 = cljs.core.chunk_rest.call(null,seq__54721__$1);
var G__54730 = c__34153__auto__;
var G__54731 = cljs.core.count.call(null,c__34153__auto__);
var G__54732 = (0);
seq__54721 = G__54729;
chunk__54722 = G__54730;
count__54723 = G__54731;
i__54724 = G__54732;
continue;
} else {
var event = cljs.core.first.call(null,seq__54721__$1);
clear_event.call(null,event);

var G__54733 = cljs.core.next.call(null,seq__54721__$1);
var G__54734 = null;
var G__54735 = (0);
var G__54736 = (0);
seq__54721 = G__54733;
chunk__54722 = G__54734;
count__54723 = G__54735;
i__54724 = G__54736;
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

//# sourceMappingURL=fx.js.map?rel=1510317334341