// Compiled by ClojureScript 1.9.494 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__55257,handler){
var map__55258 = p__55257;
var map__55258__$1 = ((((!((map__55258 == null)))?((((map__55258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55258.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55258):map__55258);
var uri = cljs.core.get.call(null,map__55258__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__55258__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__55258__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__55258__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__55258__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__55258__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__55258__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__55258,map__55258__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__55256_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__55256_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__55258,map__55258__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___55270 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___55270)){
var response_type_55271 = temp__4657__auto___55270;
this$__$1.responseType = cljs.core.name.call(null,response_type_55271);
} else {
}

var seq__55260_55272 = cljs.core.seq.call(null,headers);
var chunk__55261_55273 = null;
var count__55262_55274 = (0);
var i__55263_55275 = (0);
while(true){
if((i__55263_55275 < count__55262_55274)){
var vec__55264_55276 = cljs.core._nth.call(null,chunk__55261_55273,i__55263_55275);
var k_55277 = cljs.core.nth.call(null,vec__55264_55276,(0),null);
var v_55278 = cljs.core.nth.call(null,vec__55264_55276,(1),null);
this$__$1.setRequestHeader(k_55277,v_55278);

var G__55279 = seq__55260_55272;
var G__55280 = chunk__55261_55273;
var G__55281 = count__55262_55274;
var G__55282 = (i__55263_55275 + (1));
seq__55260_55272 = G__55279;
chunk__55261_55273 = G__55280;
count__55262_55274 = G__55281;
i__55263_55275 = G__55282;
continue;
} else {
var temp__4657__auto___55283 = cljs.core.seq.call(null,seq__55260_55272);
if(temp__4657__auto___55283){
var seq__55260_55284__$1 = temp__4657__auto___55283;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55260_55284__$1)){
var c__34153__auto___55285 = cljs.core.chunk_first.call(null,seq__55260_55284__$1);
var G__55286 = cljs.core.chunk_rest.call(null,seq__55260_55284__$1);
var G__55287 = c__34153__auto___55285;
var G__55288 = cljs.core.count.call(null,c__34153__auto___55285);
var G__55289 = (0);
seq__55260_55272 = G__55286;
chunk__55261_55273 = G__55287;
count__55262_55274 = G__55288;
i__55263_55275 = G__55289;
continue;
} else {
var vec__55267_55290 = cljs.core.first.call(null,seq__55260_55284__$1);
var k_55291 = cljs.core.nth.call(null,vec__55267_55290,(0),null);
var v_55292 = cljs.core.nth.call(null,vec__55267_55290,(1),null);
this$__$1.setRequestHeader(k_55291,v_55292);

var G__55293 = cljs.core.next.call(null,seq__55260_55284__$1);
var G__55294 = null;
var G__55295 = (0);
var G__55296 = (0);
seq__55260_55272 = G__55293;
chunk__55261_55273 = G__55294;
count__55262_55274 = G__55295;
i__55263_55275 = G__55296;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__33334__auto__ = body;
if(cljs.core.truth_(or__33334__auto__)){
return or__33334__auto__;
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

//# sourceMappingURL=xml_http_request.js.map?rel=1510317358265