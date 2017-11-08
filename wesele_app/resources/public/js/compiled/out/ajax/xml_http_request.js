// Compiled by ClojureScript 1.9.494 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__58889,handler){
var map__58890 = p__58889;
var map__58890__$1 = ((((!((map__58890 == null)))?((((map__58890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58890.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58890):map__58890);
var uri = cljs.core.get.call(null,map__58890__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__58890__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__58890__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__58890__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__58890__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__58890__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__58890__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__58890,map__58890__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__58888_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__58888_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__58890,map__58890__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___58902 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___58902)){
var response_type_58903 = temp__4657__auto___58902;
this$__$1.responseType = cljs.core.name.call(null,response_type_58903);
} else {
}

var seq__58892_58904 = cljs.core.seq.call(null,headers);
var chunk__58893_58905 = null;
var count__58894_58906 = (0);
var i__58895_58907 = (0);
while(true){
if((i__58895_58907 < count__58894_58906)){
var vec__58896_58908 = cljs.core._nth.call(null,chunk__58893_58905,i__58895_58907);
var k_58909 = cljs.core.nth.call(null,vec__58896_58908,(0),null);
var v_58910 = cljs.core.nth.call(null,vec__58896_58908,(1),null);
this$__$1.setRequestHeader(k_58909,v_58910);

var G__58911 = seq__58892_58904;
var G__58912 = chunk__58893_58905;
var G__58913 = count__58894_58906;
var G__58914 = (i__58895_58907 + (1));
seq__58892_58904 = G__58911;
chunk__58893_58905 = G__58912;
count__58894_58906 = G__58913;
i__58895_58907 = G__58914;
continue;
} else {
var temp__4657__auto___58915 = cljs.core.seq.call(null,seq__58892_58904);
if(temp__4657__auto___58915){
var seq__58892_58916__$1 = temp__4657__auto___58915;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58892_58916__$1)){
var c__44313__auto___58917 = cljs.core.chunk_first.call(null,seq__58892_58916__$1);
var G__58918 = cljs.core.chunk_rest.call(null,seq__58892_58916__$1);
var G__58919 = c__44313__auto___58917;
var G__58920 = cljs.core.count.call(null,c__44313__auto___58917);
var G__58921 = (0);
seq__58892_58904 = G__58918;
chunk__58893_58905 = G__58919;
count__58894_58906 = G__58920;
i__58895_58907 = G__58921;
continue;
} else {
var vec__58899_58922 = cljs.core.first.call(null,seq__58892_58916__$1);
var k_58923 = cljs.core.nth.call(null,vec__58899_58922,(0),null);
var v_58924 = cljs.core.nth.call(null,vec__58899_58922,(1),null);
this$__$1.setRequestHeader(k_58923,v_58924);

var G__58925 = cljs.core.next.call(null,seq__58892_58916__$1);
var G__58926 = null;
var G__58927 = (0);
var G__58928 = (0);
seq__58892_58904 = G__58925;
chunk__58893_58905 = G__58926;
count__58894_58906 = G__58927;
i__58895_58907 = G__58928;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__43494__auto__ = body;
if(cljs.core.truth_(or__43494__auto__)){
return or__43494__auto__;
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

//# sourceMappingURL=xml_http_request.js.map?rel=1494353140145