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
var seq__37144 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__37145 = null;
var count__37146 = (0);
var i__37147 = (0);
while(true){
if((i__37147 < count__37146)){
var vec__37148 = cljs.core._nth.call(null,chunk__37145,i__37147);
var effect_k = cljs.core.nth.call(null,vec__37148,(0),null);
var value = cljs.core.nth.call(null,vec__37148,(1),null);
var temp__4655__auto___37154 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___37154)){
var effect_fn_37155 = temp__4655__auto___37154;
effect_fn_37155.call(null,value);
} else {
}

var G__37156 = seq__37144;
var G__37157 = chunk__37145;
var G__37158 = count__37146;
var G__37159 = (i__37147 + (1));
seq__37144 = G__37156;
chunk__37145 = G__37157;
count__37146 = G__37158;
i__37147 = G__37159;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37144);
if(temp__4657__auto__){
var seq__37144__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37144__$1)){
var c__34631__auto__ = cljs.core.chunk_first.call(null,seq__37144__$1);
var G__37160 = cljs.core.chunk_rest.call(null,seq__37144__$1);
var G__37161 = c__34631__auto__;
var G__37162 = cljs.core.count.call(null,c__34631__auto__);
var G__37163 = (0);
seq__37144 = G__37160;
chunk__37145 = G__37161;
count__37146 = G__37162;
i__37147 = G__37163;
continue;
} else {
var vec__37151 = cljs.core.first.call(null,seq__37144__$1);
var effect_k = cljs.core.nth.call(null,vec__37151,(0),null);
var value = cljs.core.nth.call(null,vec__37151,(1),null);
var temp__4655__auto___37164 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___37164)){
var effect_fn_37165 = temp__4655__auto___37164;
effect_fn_37165.call(null,value);
} else {
}

var G__37166 = cljs.core.next.call(null,seq__37144__$1);
var G__37167 = null;
var G__37168 = (0);
var G__37169 = (0);
seq__37144 = G__37166;
chunk__37145 = G__37167;
count__37146 = G__37168;
i__37147 = G__37169;
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
var seq__37170 = cljs.core.seq.call(null,value);
var chunk__37171 = null;
var count__37172 = (0);
var i__37173 = (0);
while(true){
if((i__37173 < count__37172)){
var map__37174 = cljs.core._nth.call(null,chunk__37171,i__37173);
var map__37174__$1 = ((((!((map__37174 == null)))?((((map__37174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37174.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37174):map__37174);
var effect = map__37174__$1;
var ms = cljs.core.get.call(null,map__37174__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__37174__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__37170,chunk__37171,count__37172,i__37173,map__37174,map__37174__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__37170,chunk__37171,count__37172,i__37173,map__37174,map__37174__$1,effect,ms,dispatch))
,ms);
}

var G__37178 = seq__37170;
var G__37179 = chunk__37171;
var G__37180 = count__37172;
var G__37181 = (i__37173 + (1));
seq__37170 = G__37178;
chunk__37171 = G__37179;
count__37172 = G__37180;
i__37173 = G__37181;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37170);
if(temp__4657__auto__){
var seq__37170__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37170__$1)){
var c__34631__auto__ = cljs.core.chunk_first.call(null,seq__37170__$1);
var G__37182 = cljs.core.chunk_rest.call(null,seq__37170__$1);
var G__37183 = c__34631__auto__;
var G__37184 = cljs.core.count.call(null,c__34631__auto__);
var G__37185 = (0);
seq__37170 = G__37182;
chunk__37171 = G__37183;
count__37172 = G__37184;
i__37173 = G__37185;
continue;
} else {
var map__37176 = cljs.core.first.call(null,seq__37170__$1);
var map__37176__$1 = ((((!((map__37176 == null)))?((((map__37176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37176.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37176):map__37176);
var effect = map__37176__$1;
var ms = cljs.core.get.call(null,map__37176__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__37176__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__37170,chunk__37171,count__37172,i__37173,map__37176,map__37176__$1,effect,ms,dispatch,seq__37170__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__37170,chunk__37171,count__37172,i__37173,map__37176,map__37176__$1,effect,ms,dispatch,seq__37170__$1,temp__4657__auto__))
,ms);
}

var G__37186 = cljs.core.next.call(null,seq__37170__$1);
var G__37187 = null;
var G__37188 = (0);
var G__37189 = (0);
seq__37170 = G__37186;
chunk__37171 = G__37187;
count__37172 = G__37188;
i__37173 = G__37189;
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

var seq__37190 = cljs.core.seq.call(null,value);
var chunk__37191 = null;
var count__37192 = (0);
var i__37193 = (0);
while(true){
if((i__37193 < count__37192)){
var event = cljs.core._nth.call(null,chunk__37191,i__37193);
re_frame.router.dispatch.call(null,event);

var G__37194 = seq__37190;
var G__37195 = chunk__37191;
var G__37196 = count__37192;
var G__37197 = (i__37193 + (1));
seq__37190 = G__37194;
chunk__37191 = G__37195;
count__37192 = G__37196;
i__37193 = G__37197;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37190);
if(temp__4657__auto__){
var seq__37190__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37190__$1)){
var c__34631__auto__ = cljs.core.chunk_first.call(null,seq__37190__$1);
var G__37198 = cljs.core.chunk_rest.call(null,seq__37190__$1);
var G__37199 = c__34631__auto__;
var G__37200 = cljs.core.count.call(null,c__34631__auto__);
var G__37201 = (0);
seq__37190 = G__37198;
chunk__37191 = G__37199;
count__37192 = G__37200;
i__37193 = G__37201;
continue;
} else {
var event = cljs.core.first.call(null,seq__37190__$1);
re_frame.router.dispatch.call(null,event);

var G__37202 = cljs.core.next.call(null,seq__37190__$1);
var G__37203 = null;
var G__37204 = (0);
var G__37205 = (0);
seq__37190 = G__37202;
chunk__37191 = G__37203;
count__37192 = G__37204;
i__37193 = G__37205;
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
var seq__37206 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__37207 = null;
var count__37208 = (0);
var i__37209 = (0);
while(true){
if((i__37209 < count__37208)){
var event = cljs.core._nth.call(null,chunk__37207,i__37209);
clear_event.call(null,event);

var G__37210 = seq__37206;
var G__37211 = chunk__37207;
var G__37212 = count__37208;
var G__37213 = (i__37209 + (1));
seq__37206 = G__37210;
chunk__37207 = G__37211;
count__37208 = G__37212;
i__37209 = G__37213;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37206);
if(temp__4657__auto__){
var seq__37206__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37206__$1)){
var c__34631__auto__ = cljs.core.chunk_first.call(null,seq__37206__$1);
var G__37214 = cljs.core.chunk_rest.call(null,seq__37206__$1);
var G__37215 = c__34631__auto__;
var G__37216 = cljs.core.count.call(null,c__34631__auto__);
var G__37217 = (0);
seq__37206 = G__37214;
chunk__37207 = G__37215;
count__37208 = G__37216;
i__37209 = G__37217;
continue;
} else {
var event = cljs.core.first.call(null,seq__37206__$1);
clear_event.call(null,event);

var G__37218 = cljs.core.next.call(null,seq__37206__$1);
var G__37219 = null;
var G__37220 = (0);
var G__37221 = (0);
seq__37206 = G__37218;
chunk__37207 = G__37219;
count__37208 = G__37220;
i__37209 = G__37221;
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

//# sourceMappingURL=fx.js.map?rel=1526470044844