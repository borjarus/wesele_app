// Compiled by ClojureScript 1.9.494 {}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__58147_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__58147_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected a collection of interceptors, got:")].join(''),interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", given an empty interceptor chain")].join(''));
} else {
}

var temp__4657__auto___58148 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___58148)){
var not_i_58149 = temp__4657__auto___58148;
if(cljs.core.fn_QMARK_.call(null,not_i_58149)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:")].join(''),not_i_58149);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected interceptors, but got:")].join(''),not_i_58149);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * An `event handler` will likely be at the end of the chain (wrapped in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector, look up the associated intercepter chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: while handling \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_frame.events._STAR_handling_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\", dispatch-sync was called for \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_v),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". You can't call dispatch-sync within an event handler.")].join(''));
} else {
var _STAR_handling_STAR_58164 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_58165 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__46330__auto___58178 = re_frame.interop.now.call(null);
var duration__46331__auto___58179 = (end__46330__auto___58178 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__58166_58180 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__58167_58181 = null;
var count__58168_58182 = (0);
var i__58169_58183 = (0);
while(true){
if((i__58169_58183 < count__58168_58182)){
var vec__58170_58184 = cljs.core._nth.call(null,chunk__58167_58181,i__58169_58183);
var k__46332__auto___58185 = cljs.core.nth.call(null,vec__58170_58184,(0),null);
var cb__46333__auto___58186 = cljs.core.nth.call(null,vec__58170_58184,(1),null);
try{cb__46333__auto___58186.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__46331__auto___58179,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e58173){if((e58173 instanceof java.lang.Exception)){
var e__46334__auto___58187 = e58173;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__46332__auto___58185,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__46334__auto___58187);
} else {
throw e58173;

}
}
var G__58188 = seq__58166_58180;
var G__58189 = chunk__58167_58181;
var G__58190 = count__58168_58182;
var G__58191 = (i__58169_58183 + (1));
seq__58166_58180 = G__58188;
chunk__58167_58181 = G__58189;
count__58168_58182 = G__58190;
i__58169_58183 = G__58191;
continue;
} else {
var temp__4657__auto___58192 = cljs.core.seq.call(null,seq__58166_58180);
if(temp__4657__auto___58192){
var seq__58166_58193__$1 = temp__4657__auto___58192;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58166_58193__$1)){
var c__44313__auto___58194 = cljs.core.chunk_first.call(null,seq__58166_58193__$1);
var G__58195 = cljs.core.chunk_rest.call(null,seq__58166_58193__$1);
var G__58196 = c__44313__auto___58194;
var G__58197 = cljs.core.count.call(null,c__44313__auto___58194);
var G__58198 = (0);
seq__58166_58180 = G__58195;
chunk__58167_58181 = G__58196;
count__58168_58182 = G__58197;
i__58169_58183 = G__58198;
continue;
} else {
var vec__58174_58199 = cljs.core.first.call(null,seq__58166_58193__$1);
var k__46332__auto___58200 = cljs.core.nth.call(null,vec__58174_58199,(0),null);
var cb__46333__auto___58201 = cljs.core.nth.call(null,vec__58174_58199,(1),null);
try{cb__46333__auto___58201.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__46331__auto___58179,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e58177){if((e58177 instanceof java.lang.Exception)){
var e__46334__auto___58202 = e58177;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__46332__auto___58200,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__46334__auto___58202);
} else {
throw e58177;

}
}
var G__58203 = cljs.core.next.call(null,seq__58166_58193__$1);
var G__58204 = null;
var G__58205 = (0);
var G__58206 = (0);
seq__58166_58180 = G__58203;
chunk__58167_58181 = G__58204;
count__58168_58182 = G__58205;
i__58169_58183 = G__58206;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_58165;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_58164;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1494353128561