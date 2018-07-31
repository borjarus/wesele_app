// Compiled by ClojureScript 1.9.494 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__37742,handler){
var map__37743 = p__37742;
var map__37743__$1 = ((((!((map__37743 == null)))?((((map__37743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37743.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37743):map__37743);
var uri = cljs.core.get.call(null,map__37743__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__37743__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__37743__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__37743__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__37743__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__37743__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__37743__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__37743,map__37743__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__37741_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__37741_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__37743,map__37743__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___37755 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___37755)){
var response_type_37756 = temp__4657__auto___37755;
this$__$1.responseType = cljs.core.name.call(null,response_type_37756);
} else {
}

var seq__37745_37757 = cljs.core.seq.call(null,headers);
var chunk__37746_37758 = null;
var count__37747_37759 = (0);
var i__37748_37760 = (0);
while(true){
if((i__37748_37760 < count__37747_37759)){
var vec__37749_37761 = cljs.core._nth.call(null,chunk__37746_37758,i__37748_37760);
var k_37762 = cljs.core.nth.call(null,vec__37749_37761,(0),null);
var v_37763 = cljs.core.nth.call(null,vec__37749_37761,(1),null);
this$__$1.setRequestHeader(k_37762,v_37763);

var G__37764 = seq__37745_37757;
var G__37765 = chunk__37746_37758;
var G__37766 = count__37747_37759;
var G__37767 = (i__37748_37760 + (1));
seq__37745_37757 = G__37764;
chunk__37746_37758 = G__37765;
count__37747_37759 = G__37766;
i__37748_37760 = G__37767;
continue;
} else {
var temp__4657__auto___37768 = cljs.core.seq.call(null,seq__37745_37757);
if(temp__4657__auto___37768){
var seq__37745_37769__$1 = temp__4657__auto___37768;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37745_37769__$1)){
var c__34631__auto___37770 = cljs.core.chunk_first.call(null,seq__37745_37769__$1);
var G__37771 = cljs.core.chunk_rest.call(null,seq__37745_37769__$1);
var G__37772 = c__34631__auto___37770;
var G__37773 = cljs.core.count.call(null,c__34631__auto___37770);
var G__37774 = (0);
seq__37745_37757 = G__37771;
chunk__37746_37758 = G__37772;
count__37747_37759 = G__37773;
i__37748_37760 = G__37774;
continue;
} else {
var vec__37752_37775 = cljs.core.first.call(null,seq__37745_37769__$1);
var k_37776 = cljs.core.nth.call(null,vec__37752_37775,(0),null);
var v_37777 = cljs.core.nth.call(null,vec__37752_37775,(1),null);
this$__$1.setRequestHeader(k_37776,v_37777);

var G__37778 = cljs.core.next.call(null,seq__37745_37769__$1);
var G__37779 = null;
var G__37780 = (0);
var G__37781 = (0);
seq__37745_37757 = G__37778;
chunk__37746_37758 = G__37779;
count__37747_37759 = G__37780;
i__37748_37760 = G__37781;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__33812__auto__ = body;
if(cljs.core.truth_(or__33812__auto__)){
return or__33812__auto__;
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

//# sourceMappingURL=xml_http_request.js.map?rel=1526470051234