// Compiled by ClojureScript 1.9.494 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__10712,handler){
var map__10713 = p__10712;
var map__10713__$1 = ((((!((map__10713 == null)))?((((map__10713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10713.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10713):map__10713);
var uri = cljs.core.get.call(null,map__10713__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__10713__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__10713__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__10713__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__10713__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__10713__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__10713__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__10713,map__10713__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__10711_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__10711_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__10713,map__10713__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___10725 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___10725)){
var response_type_10726 = temp__4657__auto___10725;
this$__$1.responseType = cljs.core.name.call(null,response_type_10726);
} else {
}

var seq__10715_10727 = cljs.core.seq.call(null,headers);
var chunk__10716_10728 = null;
var count__10717_10729 = (0);
var i__10718_10730 = (0);
while(true){
if((i__10718_10730 < count__10717_10729)){
var vec__10719_10731 = cljs.core._nth.call(null,chunk__10716_10728,i__10718_10730);
var k_10732 = cljs.core.nth.call(null,vec__10719_10731,(0),null);
var v_10733 = cljs.core.nth.call(null,vec__10719_10731,(1),null);
this$__$1.setRequestHeader(k_10732,v_10733);

var G__10734 = seq__10715_10727;
var G__10735 = chunk__10716_10728;
var G__10736 = count__10717_10729;
var G__10737 = (i__10718_10730 + (1));
seq__10715_10727 = G__10734;
chunk__10716_10728 = G__10735;
count__10717_10729 = G__10736;
i__10718_10730 = G__10737;
continue;
} else {
var temp__4657__auto___10738 = cljs.core.seq.call(null,seq__10715_10727);
if(temp__4657__auto___10738){
var seq__10715_10739__$1 = temp__4657__auto___10738;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10715_10739__$1)){
var c__7584__auto___10740 = cljs.core.chunk_first.call(null,seq__10715_10739__$1);
var G__10741 = cljs.core.chunk_rest.call(null,seq__10715_10739__$1);
var G__10742 = c__7584__auto___10740;
var G__10743 = cljs.core.count.call(null,c__7584__auto___10740);
var G__10744 = (0);
seq__10715_10727 = G__10741;
chunk__10716_10728 = G__10742;
count__10717_10729 = G__10743;
i__10718_10730 = G__10744;
continue;
} else {
var vec__10722_10745 = cljs.core.first.call(null,seq__10715_10739__$1);
var k_10746 = cljs.core.nth.call(null,vec__10722_10745,(0),null);
var v_10747 = cljs.core.nth.call(null,vec__10722_10745,(1),null);
this$__$1.setRequestHeader(k_10746,v_10747);

var G__10748 = cljs.core.next.call(null,seq__10715_10739__$1);
var G__10749 = null;
var G__10750 = (0);
var G__10751 = (0);
seq__10715_10727 = G__10748;
chunk__10716_10728 = G__10749;
count__10717_10729 = G__10750;
i__10718_10730 = G__10751;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__6765__auto__ = body;
if(cljs.core.truth_(or__6765__auto__)){
return or__6765__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map?rel=1513114922949