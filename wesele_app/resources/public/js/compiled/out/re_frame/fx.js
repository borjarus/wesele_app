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
var seq__10114 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__10115 = null;
var count__10116 = (0);
var i__10117 = (0);
while(true){
if((i__10117 < count__10116)){
var vec__10118 = cljs.core._nth.call(null,chunk__10115,i__10117);
var effect_k = cljs.core.nth.call(null,vec__10118,(0),null);
var value = cljs.core.nth.call(null,vec__10118,(1),null);
var temp__4655__auto___10124 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___10124)){
var effect_fn_10125 = temp__4655__auto___10124;
effect_fn_10125.call(null,value);
} else {
}

var G__10126 = seq__10114;
var G__10127 = chunk__10115;
var G__10128 = count__10116;
var G__10129 = (i__10117 + (1));
seq__10114 = G__10126;
chunk__10115 = G__10127;
count__10116 = G__10128;
i__10117 = G__10129;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10114);
if(temp__4657__auto__){
var seq__10114__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10114__$1)){
var c__7584__auto__ = cljs.core.chunk_first.call(null,seq__10114__$1);
var G__10130 = cljs.core.chunk_rest.call(null,seq__10114__$1);
var G__10131 = c__7584__auto__;
var G__10132 = cljs.core.count.call(null,c__7584__auto__);
var G__10133 = (0);
seq__10114 = G__10130;
chunk__10115 = G__10131;
count__10116 = G__10132;
i__10117 = G__10133;
continue;
} else {
var vec__10121 = cljs.core.first.call(null,seq__10114__$1);
var effect_k = cljs.core.nth.call(null,vec__10121,(0),null);
var value = cljs.core.nth.call(null,vec__10121,(1),null);
var temp__4655__auto___10134 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___10134)){
var effect_fn_10135 = temp__4655__auto___10134;
effect_fn_10135.call(null,value);
} else {
}

var G__10136 = cljs.core.next.call(null,seq__10114__$1);
var G__10137 = null;
var G__10138 = (0);
var G__10139 = (0);
seq__10114 = G__10136;
chunk__10115 = G__10137;
count__10116 = G__10138;
i__10117 = G__10139;
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
var seq__10140 = cljs.core.seq.call(null,value);
var chunk__10141 = null;
var count__10142 = (0);
var i__10143 = (0);
while(true){
if((i__10143 < count__10142)){
var map__10144 = cljs.core._nth.call(null,chunk__10141,i__10143);
var map__10144__$1 = ((((!((map__10144 == null)))?((((map__10144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10144.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10144):map__10144);
var effect = map__10144__$1;
var ms = cljs.core.get.call(null,map__10144__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__10144__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__10140,chunk__10141,count__10142,i__10143,map__10144,map__10144__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__10140,chunk__10141,count__10142,i__10143,map__10144,map__10144__$1,effect,ms,dispatch))
,ms);
}

var G__10148 = seq__10140;
var G__10149 = chunk__10141;
var G__10150 = count__10142;
var G__10151 = (i__10143 + (1));
seq__10140 = G__10148;
chunk__10141 = G__10149;
count__10142 = G__10150;
i__10143 = G__10151;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10140);
if(temp__4657__auto__){
var seq__10140__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10140__$1)){
var c__7584__auto__ = cljs.core.chunk_first.call(null,seq__10140__$1);
var G__10152 = cljs.core.chunk_rest.call(null,seq__10140__$1);
var G__10153 = c__7584__auto__;
var G__10154 = cljs.core.count.call(null,c__7584__auto__);
var G__10155 = (0);
seq__10140 = G__10152;
chunk__10141 = G__10153;
count__10142 = G__10154;
i__10143 = G__10155;
continue;
} else {
var map__10146 = cljs.core.first.call(null,seq__10140__$1);
var map__10146__$1 = ((((!((map__10146 == null)))?((((map__10146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10146.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10146):map__10146);
var effect = map__10146__$1;
var ms = cljs.core.get.call(null,map__10146__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__10146__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__10140,chunk__10141,count__10142,i__10143,map__10146,map__10146__$1,effect,ms,dispatch,seq__10140__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__10140,chunk__10141,count__10142,i__10143,map__10146,map__10146__$1,effect,ms,dispatch,seq__10140__$1,temp__4657__auto__))
,ms);
}

var G__10156 = cljs.core.next.call(null,seq__10140__$1);
var G__10157 = null;
var G__10158 = (0);
var G__10159 = (0);
seq__10140 = G__10156;
chunk__10141 = G__10157;
count__10142 = G__10158;
i__10143 = G__10159;
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

var seq__10160 = cljs.core.seq.call(null,value);
var chunk__10161 = null;
var count__10162 = (0);
var i__10163 = (0);
while(true){
if((i__10163 < count__10162)){
var event = cljs.core._nth.call(null,chunk__10161,i__10163);
re_frame.router.dispatch.call(null,event);

var G__10164 = seq__10160;
var G__10165 = chunk__10161;
var G__10166 = count__10162;
var G__10167 = (i__10163 + (1));
seq__10160 = G__10164;
chunk__10161 = G__10165;
count__10162 = G__10166;
i__10163 = G__10167;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10160);
if(temp__4657__auto__){
var seq__10160__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10160__$1)){
var c__7584__auto__ = cljs.core.chunk_first.call(null,seq__10160__$1);
var G__10168 = cljs.core.chunk_rest.call(null,seq__10160__$1);
var G__10169 = c__7584__auto__;
var G__10170 = cljs.core.count.call(null,c__7584__auto__);
var G__10171 = (0);
seq__10160 = G__10168;
chunk__10161 = G__10169;
count__10162 = G__10170;
i__10163 = G__10171;
continue;
} else {
var event = cljs.core.first.call(null,seq__10160__$1);
re_frame.router.dispatch.call(null,event);

var G__10172 = cljs.core.next.call(null,seq__10160__$1);
var G__10173 = null;
var G__10174 = (0);
var G__10175 = (0);
seq__10160 = G__10172;
chunk__10161 = G__10173;
count__10162 = G__10174;
i__10163 = G__10175;
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
var seq__10176 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__10177 = null;
var count__10178 = (0);
var i__10179 = (0);
while(true){
if((i__10179 < count__10178)){
var event = cljs.core._nth.call(null,chunk__10177,i__10179);
clear_event.call(null,event);

var G__10180 = seq__10176;
var G__10181 = chunk__10177;
var G__10182 = count__10178;
var G__10183 = (i__10179 + (1));
seq__10176 = G__10180;
chunk__10177 = G__10181;
count__10178 = G__10182;
i__10179 = G__10183;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10176);
if(temp__4657__auto__){
var seq__10176__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10176__$1)){
var c__7584__auto__ = cljs.core.chunk_first.call(null,seq__10176__$1);
var G__10184 = cljs.core.chunk_rest.call(null,seq__10176__$1);
var G__10185 = c__7584__auto__;
var G__10186 = cljs.core.count.call(null,c__7584__auto__);
var G__10187 = (0);
seq__10176 = G__10184;
chunk__10177 = G__10185;
count__10178 = G__10186;
i__10179 = G__10187;
continue;
} else {
var event = cljs.core.first.call(null,seq__10176__$1);
clear_event.call(null,event);

var G__10188 = cljs.core.next.call(null,seq__10176__$1);
var G__10189 = null;
var G__10190 = (0);
var G__10191 = (0);
seq__10176 = G__10188;
chunk__10177 = G__10189;
count__10178 = G__10190;
i__10179 = G__10191;
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

//# sourceMappingURL=fx.js.map?rel=1513114918920