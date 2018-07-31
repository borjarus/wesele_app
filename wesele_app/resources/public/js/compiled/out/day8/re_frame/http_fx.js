// Compiled by ClojureScript 1.9.494 {}
goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.core');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__44831){
var vec__44835 = p__44831;
var success_QMARK_ = cljs.core.nth.call(null,vec__44835,(0),null);
var response = cljs.core.nth.call(null,vec__44835,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return on_success.call(null,response);
} else {
var details = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response);
return on_failure.call(null,details);
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__44840){
var map__44843 = p__44840;
var map__44843__$1 = ((((!((map__44843 == null)))?((((map__44843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44843.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44843):map__44843);
var request = map__44843__$1;
var on_success = cljs.core.get.call(null,map__44843__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.call(null,map__44843__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"api","api",-899839580),api,new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.call(null,day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__44843,map__44843__$1,request,on_success,on_failure){
return (function (p1__44838_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_success,p1__44838_SHARP_));
});})(api,map__44843,map__44843__$1,request,on_success,on_failure))
,((function (api,map__44843,map__44843__$1,request,on_success,on_failure){
return (function (p1__44839_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_failure,p1__44839_SHARP_));
});})(api,map__44843,map__44843__$1,request,on_success,on_failure))
,api)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),(function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_.call(null,request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__44849 = cljs.core.seq.call(null,seq_request_maps);
var chunk__44850 = null;
var count__44851 = (0);
var i__44852 = (0);
while(true){
if((i__44852 < count__44851)){
var request__$1 = cljs.core._nth.call(null,chunk__44850,i__44852);
ajax.core.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));

var G__44853 = seq__44849;
var G__44854 = chunk__44850;
var G__44855 = count__44851;
var G__44856 = (i__44852 + (1));
seq__44849 = G__44853;
chunk__44850 = G__44854;
count__44851 = G__44855;
i__44852 = G__44856;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44849);
if(temp__4657__auto__){
var seq__44849__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44849__$1)){
var c__34631__auto__ = cljs.core.chunk_first.call(null,seq__44849__$1);
var G__44857 = cljs.core.chunk_rest.call(null,seq__44849__$1);
var G__44858 = c__34631__auto__;
var G__44859 = cljs.core.count.call(null,c__34631__auto__);
var G__44860 = (0);
seq__44849 = G__44857;
chunk__44850 = G__44858;
count__44851 = G__44859;
i__44852 = G__44860;
continue;
} else {
var request__$1 = cljs.core.first.call(null,seq__44849__$1);
ajax.core.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));

var G__44861 = cljs.core.next.call(null,seq__44849__$1);
var G__44862 = null;
var G__44863 = (0);
var G__44864 = (0);
seq__44849 = G__44861;
chunk__44850 = G__44862;
count__44851 = G__44863;
i__44852 = G__44864;
continue;
}
} else {
return null;
}
}
break;
}
}));

//# sourceMappingURL=http_fx.js.map?rel=1526470111763