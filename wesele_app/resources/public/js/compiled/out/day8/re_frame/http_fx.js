// Compiled by ClojureScript 1.9.494 {}
goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.core');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__64330){
var vec__64334 = p__64330;
var success_QMARK_ = cljs.core.nth.call(null,vec__64334,(0),null);
var response = cljs.core.nth.call(null,vec__64334,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return on_success.call(null,response);
} else {
var details = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response);
return on_failure.call(null,details);
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__64339){
var map__64342 = p__64339;
var map__64342__$1 = ((((!((map__64342 == null)))?((((map__64342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64342.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64342):map__64342);
var request = map__64342__$1;
var on_success = cljs.core.get.call(null,map__64342__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.call(null,map__64342__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"api","api",-899839580),api,new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.call(null,day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__64342,map__64342__$1,request,on_success,on_failure){
return (function (p1__64337_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_success,p1__64337_SHARP_));
});})(api,map__64342,map__64342__$1,request,on_success,on_failure))
,((function (api,map__64342,map__64342__$1,request,on_success,on_failure){
return (function (p1__64338_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_failure,p1__64338_SHARP_));
});})(api,map__64342,map__64342__$1,request,on_success,on_failure))
,api)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),(function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_.call(null,request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__64348 = cljs.core.seq.call(null,seq_request_maps);
var chunk__64349 = null;
var count__64350 = (0);
var i__64351 = (0);
while(true){
if((i__64351 < count__64350)){
var request__$1 = cljs.core._nth.call(null,chunk__64349,i__64351);
ajax.core.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));

var G__64352 = seq__64348;
var G__64353 = chunk__64349;
var G__64354 = count__64350;
var G__64355 = (i__64351 + (1));
seq__64348 = G__64352;
chunk__64349 = G__64353;
count__64350 = G__64354;
i__64351 = G__64355;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__64348);
if(temp__4657__auto__){
var seq__64348__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64348__$1)){
var c__44313__auto__ = cljs.core.chunk_first.call(null,seq__64348__$1);
var G__64356 = cljs.core.chunk_rest.call(null,seq__64348__$1);
var G__64357 = c__44313__auto__;
var G__64358 = cljs.core.count.call(null,c__44313__auto__);
var G__64359 = (0);
seq__64348 = G__64356;
chunk__64349 = G__64357;
count__64350 = G__64358;
i__64351 = G__64359;
continue;
} else {
var request__$1 = cljs.core.first.call(null,seq__64348__$1);
ajax.core.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));

var G__64360 = cljs.core.next.call(null,seq__64348__$1);
var G__64361 = null;
var G__64362 = (0);
var G__64363 = (0);
seq__64348 = G__64360;
chunk__64349 = G__64361;
count__64350 = G__64362;
i__64351 = G__64363;
continue;
}
} else {
return null;
}
}
break;
}
}));

//# sourceMappingURL=http_fx.js.map?rel=1494353189958