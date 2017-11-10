// Compiled by ClojureScript 1.9.494 {}
goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.core');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__60698){
var vec__60702 = p__60698;
var success_QMARK_ = cljs.core.nth.call(null,vec__60702,(0),null);
var response = cljs.core.nth.call(null,vec__60702,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return on_success.call(null,response);
} else {
var details = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response);
return on_failure.call(null,details);
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__60707){
var map__60710 = p__60707;
var map__60710__$1 = ((((!((map__60710 == null)))?((((map__60710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60710.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60710):map__60710);
var request = map__60710__$1;
var on_success = cljs.core.get.call(null,map__60710__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.call(null,map__60710__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"api","api",-899839580),api,new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.call(null,day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__60710,map__60710__$1,request,on_success,on_failure){
return (function (p1__60705_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_success,p1__60705_SHARP_));
});})(api,map__60710,map__60710__$1,request,on_success,on_failure))
,((function (api,map__60710,map__60710__$1,request,on_success,on_failure){
return (function (p1__60706_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_failure,p1__60706_SHARP_));
});})(api,map__60710,map__60710__$1,request,on_success,on_failure))
,api)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),(function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_.call(null,request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__60716 = cljs.core.seq.call(null,seq_request_maps);
var chunk__60717 = null;
var count__60718 = (0);
var i__60719 = (0);
while(true){
if((i__60719 < count__60718)){
var request__$1 = cljs.core._nth.call(null,chunk__60717,i__60719);
ajax.core.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));

var G__60720 = seq__60716;
var G__60721 = chunk__60717;
var G__60722 = count__60718;
var G__60723 = (i__60719 + (1));
seq__60716 = G__60720;
chunk__60717 = G__60721;
count__60718 = G__60722;
i__60719 = G__60723;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__60716);
if(temp__4657__auto__){
var seq__60716__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60716__$1)){
var c__34153__auto__ = cljs.core.chunk_first.call(null,seq__60716__$1);
var G__60724 = cljs.core.chunk_rest.call(null,seq__60716__$1);
var G__60725 = c__34153__auto__;
var G__60726 = cljs.core.count.call(null,c__34153__auto__);
var G__60727 = (0);
seq__60716 = G__60724;
chunk__60717 = G__60725;
count__60718 = G__60726;
i__60719 = G__60727;
continue;
} else {
var request__$1 = cljs.core.first.call(null,seq__60716__$1);
ajax.core.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));

var G__60728 = cljs.core.next.call(null,seq__60716__$1);
var G__60729 = null;
var G__60730 = (0);
var G__60731 = (0);
seq__60716 = G__60728;
chunk__60717 = G__60729;
count__60718 = G__60730;
i__60719 = G__60731;
continue;
}
} else {
return null;
}
}
break;
}
}));

//# sourceMappingURL=http_fx.js.map?rel=1510317477559