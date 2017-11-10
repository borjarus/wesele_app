// Compiled by ClojureScript 1.9.494 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('cljs_http.core');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('no.en.core');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__33322__auto__ = v;
if(cljs.core.truth_(and__33322__auto__)){
return (v > (0));
} else {
return and__33322__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__59483_SHARP_,p2__59482_SHARP_){
var vec__59487 = clojure.string.split.call(null,p2__59482_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__59487,(0),null);
var v = cljs.core.nth.call(null,vec__59487,(1),null);
return cljs.core.assoc.call(null,p1__59483_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__59490_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__59490_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__59491){
var vec__59495 = p__59491;
var k = cljs.core.nth.call(null,vec__59495,(0),null);
var v = cljs.core.nth.call(null,vec__59495,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__59498_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\\"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__59498_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__33322__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__33322__auto__){
var and__33322__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__33322__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("(?i)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__33322__auto____$1;
}
} else {
return and__33322__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__59499_SHARP_){
return cljs_http.client.decode_body.call(null,p1__59499_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__34454__auto__ = [];
var len__34447__auto___59506 = arguments.length;
var i__34448__auto___59507 = (0);
while(true){
if((i__34448__auto___59507 < len__34447__auto___59506)){
args__34454__auto__.push((arguments[i__34448__auto___59507]));

var G__59508 = (i__34448__auto___59507 + (1));
i__34448__auto___59507 = G__59508;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((1) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__34455__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__59502){
var vec__59503 = p__59502;
var default_headers = cljs.core.nth.call(null,vec__59503,(0),null);
return ((function (vec__59503,default_headers){
return (function (request){
var temp__4655__auto__ = (function (){var or__33334__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__33334__auto__)){
return or__33334__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var default_headers__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__59503,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq59500){
var G__59501 = cljs.core.first.call(null,seq59500);
var seq59500__$1 = cljs.core.next.call(null,seq59500);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__59501,seq59500__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__34454__auto__ = [];
var len__34447__auto___59515 = arguments.length;
var i__34448__auto___59516 = (0);
while(true){
if((i__34448__auto___59516 < len__34447__auto___59515)){
args__34454__auto__.push((arguments[i__34448__auto___59516]));

var G__59517 = (i__34448__auto___59516 + (1));
i__34448__auto___59516 = G__59517;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((1) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__34455__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__59511){
var vec__59512 = p__59511;
var accept = cljs.core.nth.call(null,vec__59512,(0),null);
return ((function (vec__59512,accept){
return (function (request){
var temp__4655__auto__ = (function (){var or__33334__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__33334__auto__)){
return or__33334__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var accept__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__59512,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq59509){
var G__59510 = cljs.core.first.call(null,seq59509);
var seq59509__$1 = cljs.core.next.call(null,seq59509);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__59510,seq59509__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__34454__auto__ = [];
var len__34447__auto___59524 = arguments.length;
var i__34448__auto___59525 = (0);
while(true){
if((i__34448__auto___59525 < len__34447__auto___59524)){
args__34454__auto__.push((arguments[i__34448__auto___59525]));

var G__59526 = (i__34448__auto___59525 + (1));
i__34448__auto___59525 = G__59526;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((1) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__34455__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__59520){
var vec__59521 = p__59520;
var content_type = cljs.core.nth.call(null,vec__59521,(0),null);
return ((function (vec__59521,content_type){
return (function (request){
var temp__4655__auto__ = (function (){var or__33334__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__33334__auto__)){
return or__33334__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var content_type__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__59521,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq59518){
var G__59519 = cljs.core.first.call(null,seq59518);
var seq59518__$1 = cljs.core.next.call(null,seq59518);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__59519,seq59518__$1);
});

cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var map__59529 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__59529__$1 = ((((!((map__59529 == null)))?((((map__59529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59529.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59529):map__59529);
var encoding = cljs.core.get.call(null,map__59529__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__59529__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__59535 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__59535__$1 = ((((!((map__59535 == null)))?((((map__59535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59535.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59535):map__59535);
var decoding = cljs.core.get.call(null,map__59535__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__59535__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__59535,map__59535__$1,decoding,decoding_opts){
return (function (p1__59531_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__59531_SHARP_,decoding,decoding_opts);
});})(map__59535,map__59535__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__59535,map__59535__$1,decoding,decoding_opts,transit_decode){
return (function (p1__59532_SHARP_){
return cljs_http.client.decode_body.call(null,p1__59532_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__59535,map__59535__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__59537_SHARP_){
return cljs_http.client.decode_body.call(null,p1__59537_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__59541){
var map__59542 = p__59541;
var map__59542__$1 = ((((!((map__59542 == null)))?((((map__59542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59542.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59542):map__59542);
var req = map__59542__$1;
var query_params = cljs.core.get.call(null,map__59542__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__59547){
var map__59548 = p__59547;
var map__59548__$1 = ((((!((map__59548 == null)))?((((map__59548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59548.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59548):map__59548);
var request = map__59548__$1;
var form_params = cljs.core.get.call(null,map__59548__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__59548__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__59548__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__33322__auto__ = form_params;
if(cljs.core.truth_(and__33322__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__33322__auto__;
}
})())){
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers);
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__59560_59570 = cljs.core.seq.call(null,params);
var chunk__59561_59571 = null;
var count__59562_59572 = (0);
var i__59563_59573 = (0);
while(true){
if((i__59563_59573 < count__59562_59572)){
var vec__59564_59574 = cljs.core._nth.call(null,chunk__59561_59571,i__59563_59573);
var k_59575 = cljs.core.nth.call(null,vec__59564_59574,(0),null);
var v_59576 = cljs.core.nth.call(null,vec__59564_59574,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_59576)){
form_data.append(cljs.core.name.call(null,k_59575),cljs.core.first.call(null,v_59576),cljs.core.second.call(null,v_59576));
} else {
form_data.append(cljs.core.name.call(null,k_59575),v_59576);
}

var G__59577 = seq__59560_59570;
var G__59578 = chunk__59561_59571;
var G__59579 = count__59562_59572;
var G__59580 = (i__59563_59573 + (1));
seq__59560_59570 = G__59577;
chunk__59561_59571 = G__59578;
count__59562_59572 = G__59579;
i__59563_59573 = G__59580;
continue;
} else {
var temp__4657__auto___59581 = cljs.core.seq.call(null,seq__59560_59570);
if(temp__4657__auto___59581){
var seq__59560_59582__$1 = temp__4657__auto___59581;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59560_59582__$1)){
var c__34153__auto___59583 = cljs.core.chunk_first.call(null,seq__59560_59582__$1);
var G__59584 = cljs.core.chunk_rest.call(null,seq__59560_59582__$1);
var G__59585 = c__34153__auto___59583;
var G__59586 = cljs.core.count.call(null,c__34153__auto___59583);
var G__59587 = (0);
seq__59560_59570 = G__59584;
chunk__59561_59571 = G__59585;
count__59562_59572 = G__59586;
i__59563_59573 = G__59587;
continue;
} else {
var vec__59567_59588 = cljs.core.first.call(null,seq__59560_59582__$1);
var k_59589 = cljs.core.nth.call(null,vec__59567_59588,(0),null);
var v_59590 = cljs.core.nth.call(null,vec__59567_59588,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_59590)){
form_data.append(cljs.core.name.call(null,k_59589),cljs.core.first.call(null,v_59590),cljs.core.second.call(null,v_59590));
} else {
form_data.append(cljs.core.name.call(null,k_59589),v_59590);
}

var G__59591 = cljs.core.next.call(null,seq__59560_59582__$1);
var G__59592 = null;
var G__59593 = (0);
var G__59594 = (0);
seq__59560_59570 = G__59591;
chunk__59561_59571 = G__59592;
count__59562_59572 = G__59593;
i__59563_59573 = G__59594;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__59598){
var map__59599 = p__59598;
var map__59599__$1 = ((((!((map__59599 == null)))?((((map__59599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59599.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59599):map__59599);
var request = map__59599__$1;
var multipart_params = cljs.core.get.call(null,map__59599__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__59599__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__33322__auto__ = multipart_params;
if(cljs.core.truth_(and__33322__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__33322__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4655__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var m = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__59601_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__59601_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__59606){
var map__59607 = p__59606;
var map__59607__$1 = ((((!((map__59607 == null)))?((((map__59607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59607.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59607):map__59607);
var req = map__59607__$1;
var query_params = cljs.core.get.call(null,map__59607__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4655__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4655__auto__,map__59607,map__59607__$1,req,query_params){
return (function (p1__59602_SHARP_){
return cljs.core.merge.call(null,p1__59602_SHARP_,query_params);
});})(spec,temp__4655__auto__,map__59607,map__59607__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__34454__auto__ = [];
var len__34447__auto___59615 = arguments.length;
var i__34448__auto___59616 = (0);
while(true){
if((i__34448__auto___59616 < len__34447__auto___59615)){
args__34454__auto__.push((arguments[i__34448__auto___59616]));

var G__59617 = (i__34448__auto___59616 + (1));
i__34448__auto___59616 = G__59617;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((1) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__34455__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__59611){
var vec__59612 = p__59611;
var credentials = cljs.core.nth.call(null,vec__59612,(0),null);
return ((function (vec__59612,credentials){
return (function (req){
var credentials__$1 = (function (){var or__33334__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__33334__auto__)){
return or__33334__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__59612,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq59609){
var G__59610 = cljs.core.first.call(null,seq59609);
var seq59609__$1 = cljs.core.next.call(null,seq59609);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__59610,seq59609__$1);
});

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4655__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var oauth_token = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bearer "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var custom_channel = temp__4655__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__34454__auto__ = [];
var len__34447__auto___59624 = arguments.length;
var i__34448__auto___59625 = (0);
while(true){
if((i__34448__auto___59625 < len__34447__auto___59624)){
args__34454__auto__.push((arguments[i__34448__auto___59625]));

var G__59626 = (i__34448__auto___59625 + (1));
i__34448__auto___59625 = G__59626;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((1) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__34455__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__59620){
var vec__59621 = p__59620;
var req = cljs.core.nth.call(null,vec__59621,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq59618){
var G__59619 = cljs.core.first.call(null,seq59618);
var seq59618__$1 = cljs.core.next.call(null,seq59618);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__59619,seq59618__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__34454__auto__ = [];
var len__34447__auto___59633 = arguments.length;
var i__34448__auto___59634 = (0);
while(true){
if((i__34448__auto___59634 < len__34447__auto___59633)){
args__34454__auto__.push((arguments[i__34448__auto___59634]));

var G__59635 = (i__34448__auto___59634 + (1));
i__34448__auto___59634 = G__59635;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((1) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__34455__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__59629){
var vec__59630 = p__59629;
var req = cljs.core.nth.call(null,vec__59630,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq59627){
var G__59628 = cljs.core.first.call(null,seq59627);
var seq59627__$1 = cljs.core.next.call(null,seq59627);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__59628,seq59627__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__34454__auto__ = [];
var len__34447__auto___59642 = arguments.length;
var i__34448__auto___59643 = (0);
while(true){
if((i__34448__auto___59643 < len__34447__auto___59642)){
args__34454__auto__.push((arguments[i__34448__auto___59643]));

var G__59644 = (i__34448__auto___59643 + (1));
i__34448__auto___59643 = G__59644;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((1) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__34455__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__59638){
var vec__59639 = p__59638;
var req = cljs.core.nth.call(null,vec__59639,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq59636){
var G__59637 = cljs.core.first.call(null,seq59636);
var seq59636__$1 = cljs.core.next.call(null,seq59636);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__59637,seq59636__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__34454__auto__ = [];
var len__34447__auto___59651 = arguments.length;
var i__34448__auto___59652 = (0);
while(true){
if((i__34448__auto___59652 < len__34447__auto___59651)){
args__34454__auto__.push((arguments[i__34448__auto___59652]));

var G__59653 = (i__34448__auto___59652 + (1));
i__34448__auto___59652 = G__59653;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((1) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__34455__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__59647){
var vec__59648 = p__59647;
var req = cljs.core.nth.call(null,vec__59648,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq59645){
var G__59646 = cljs.core.first.call(null,seq59645);
var seq59645__$1 = cljs.core.next.call(null,seq59645);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__59646,seq59645__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__34454__auto__ = [];
var len__34447__auto___59660 = arguments.length;
var i__34448__auto___59661 = (0);
while(true){
if((i__34448__auto___59661 < len__34447__auto___59660)){
args__34454__auto__.push((arguments[i__34448__auto___59661]));

var G__59662 = (i__34448__auto___59661 + (1));
i__34448__auto___59661 = G__59662;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((1) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__34455__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__59656){
var vec__59657 = p__59656;
var req = cljs.core.nth.call(null,vec__59657,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq59654){
var G__59655 = cljs.core.first.call(null,seq59654);
var seq59654__$1 = cljs.core.next.call(null,seq59654);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__59655,seq59654__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__34454__auto__ = [];
var len__34447__auto___59669 = arguments.length;
var i__34448__auto___59670 = (0);
while(true){
if((i__34448__auto___59670 < len__34447__auto___59669)){
args__34454__auto__.push((arguments[i__34448__auto___59670]));

var G__59671 = (i__34448__auto___59670 + (1));
i__34448__auto___59670 = G__59671;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((1) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__34455__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__59665){
var vec__59666 = p__59665;
var req = cljs.core.nth.call(null,vec__59666,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq59663){
var G__59664 = cljs.core.first.call(null,seq59663);
var seq59663__$1 = cljs.core.next.call(null,seq59663);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__59664,seq59663__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__34454__auto__ = [];
var len__34447__auto___59678 = arguments.length;
var i__34448__auto___59679 = (0);
while(true){
if((i__34448__auto___59679 < len__34447__auto___59678)){
args__34454__auto__.push((arguments[i__34448__auto___59679]));

var G__59680 = (i__34448__auto___59679 + (1));
i__34448__auto___59679 = G__59680;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((1) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__34455__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__59674){
var vec__59675 = p__59674;
var req = cljs.core.nth.call(null,vec__59675,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq59672){
var G__59673 = cljs.core.first.call(null,seq59672);
var seq59672__$1 = cljs.core.next.call(null,seq59672);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__59673,seq59672__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__34454__auto__ = [];
var len__34447__auto___59687 = arguments.length;
var i__34448__auto___59688 = (0);
while(true){
if((i__34448__auto___59688 < len__34447__auto___59687)){
args__34454__auto__.push((arguments[i__34448__auto___59688]));

var G__59689 = (i__34448__auto___59688 + (1));
i__34448__auto___59688 = G__59689;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((1) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__34455__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__59683){
var vec__59684 = p__59683;
var req = cljs.core.nth.call(null,vec__59684,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq59681){
var G__59682 = cljs.core.first.call(null,seq59681);
var seq59681__$1 = cljs.core.next.call(null,seq59681);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__59682,seq59681__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__34454__auto__ = [];
var len__34447__auto___59696 = arguments.length;
var i__34448__auto___59697 = (0);
while(true){
if((i__34448__auto___59697 < len__34447__auto___59696)){
args__34454__auto__.push((arguments[i__34448__auto___59697]));

var G__59698 = (i__34448__auto___59697 + (1));
i__34448__auto___59697 = G__59698;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((1) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__34455__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__59692){
var vec__59693 = p__59692;
var req = cljs.core.nth.call(null,vec__59693,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq59690){
var G__59691 = cljs.core.first.call(null,seq59690);
var seq59690__$1 = cljs.core.next.call(null,seq59690);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__59691,seq59690__$1);
});


//# sourceMappingURL=client.js.map?rel=1510317451646