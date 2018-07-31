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
if(cljs.core.truth_((function (){var and__33800__auto__ = v;
if(cljs.core.truth_(and__33800__auto__)){
return (v > (0));
} else {
return and__33800__auto__;
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
return cljs.core.reduce.call(null,(function (p1__43040_SHARP_,p2__43039_SHARP_){
var vec__43044 = clojure.string.split.call(null,p2__43039_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__43044,(0),null);
var v = cljs.core.nth.call(null,vec__43044,(1),null);
return cljs.core.assoc.call(null,p1__43040_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
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
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__43047_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__43047_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__43048){
var vec__43052 = p__43048;
var k = cljs.core.nth.call(null,vec__43052,(0),null);
var v = cljs.core.nth.call(null,vec__43052,(1),null);
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
return (function (p1__43055_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\\"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__43055_SHARP_)].join('');
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
if(cljs.core.truth_((function (){var and__33800__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__33800__auto__){
var and__33800__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__33800__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("(?i)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__33800__auto____$1;
}
} else {
return and__33800__auto__;
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
return cljs.core.async.map.call(null,(function (p1__43056_SHARP_){
return cljs_http.client.decode_body.call(null,p1__43056_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__34932__auto__ = [];
var len__34925__auto___43063 = arguments.length;
var i__34926__auto___43064 = (0);
while(true){
if((i__34926__auto___43064 < len__34925__auto___43063)){
args__34932__auto__.push((arguments[i__34926__auto___43064]));

var G__43065 = (i__34926__auto___43064 + (1));
i__34926__auto___43064 = G__43065;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((1) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__34933__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__43059){
var vec__43060 = p__43059;
var default_headers = cljs.core.nth.call(null,vec__43060,(0),null);
return ((function (vec__43060,default_headers){
return (function (request){
var temp__4655__auto__ = (function (){var or__33812__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__33812__auto__)){
return or__33812__auto__;
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
;})(vec__43060,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq43057){
var G__43058 = cljs.core.first.call(null,seq43057);
var seq43057__$1 = cljs.core.next.call(null,seq43057);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__43058,seq43057__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__34932__auto__ = [];
var len__34925__auto___43072 = arguments.length;
var i__34926__auto___43073 = (0);
while(true){
if((i__34926__auto___43073 < len__34925__auto___43072)){
args__34932__auto__.push((arguments[i__34926__auto___43073]));

var G__43074 = (i__34926__auto___43073 + (1));
i__34926__auto___43073 = G__43074;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((1) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__34933__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__43068){
var vec__43069 = p__43068;
var accept = cljs.core.nth.call(null,vec__43069,(0),null);
return ((function (vec__43069,accept){
return (function (request){
var temp__4655__auto__ = (function (){var or__33812__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__33812__auto__)){
return or__33812__auto__;
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
;})(vec__43069,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq43066){
var G__43067 = cljs.core.first.call(null,seq43066);
var seq43066__$1 = cljs.core.next.call(null,seq43066);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__43067,seq43066__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__34932__auto__ = [];
var len__34925__auto___43081 = arguments.length;
var i__34926__auto___43082 = (0);
while(true){
if((i__34926__auto___43082 < len__34925__auto___43081)){
args__34932__auto__.push((arguments[i__34926__auto___43082]));

var G__43083 = (i__34926__auto___43082 + (1));
i__34926__auto___43082 = G__43083;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((1) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__34933__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__43077){
var vec__43078 = p__43077;
var content_type = cljs.core.nth.call(null,vec__43078,(0),null);
return ((function (vec__43078,content_type){
return (function (request){
var temp__4655__auto__ = (function (){var or__33812__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__33812__auto__)){
return or__33812__auto__;
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
;})(vec__43078,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq43075){
var G__43076 = cljs.core.first.call(null,seq43075);
var seq43075__$1 = cljs.core.next.call(null,seq43075);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__43076,seq43075__$1);
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
var map__43086 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__43086__$1 = ((((!((map__43086 == null)))?((((map__43086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43086.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43086):map__43086);
var encoding = cljs.core.get.call(null,map__43086__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__43086__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
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
var map__43092 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__43092__$1 = ((((!((map__43092 == null)))?((((map__43092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43092.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43092):map__43092);
var decoding = cljs.core.get.call(null,map__43092__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__43092__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__43092,map__43092__$1,decoding,decoding_opts){
return (function (p1__43088_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__43088_SHARP_,decoding,decoding_opts);
});})(map__43092,map__43092__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__43092,map__43092__$1,decoding,decoding_opts,transit_decode){
return (function (p1__43089_SHARP_){
return cljs_http.client.decode_body.call(null,p1__43089_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__43092,map__43092__$1,decoding,decoding_opts,transit_decode))
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
return cljs.core.async.map.call(null,(function (p1__43094_SHARP_){
return cljs_http.client.decode_body.call(null,p1__43094_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__43098){
var map__43099 = p__43098;
var map__43099__$1 = ((((!((map__43099 == null)))?((((map__43099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43099.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43099):map__43099);
var req = map__43099__$1;
var query_params = cljs.core.get.call(null,map__43099__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__43104){
var map__43105 = p__43104;
var map__43105__$1 = ((((!((map__43105 == null)))?((((map__43105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43105.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43105):map__43105);
var request = map__43105__$1;
var form_params = cljs.core.get.call(null,map__43105__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__43105__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__43105__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__33800__auto__ = form_params;
if(cljs.core.truth_(and__33800__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__33800__auto__;
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
var seq__43117_43127 = cljs.core.seq.call(null,params);
var chunk__43118_43128 = null;
var count__43119_43129 = (0);
var i__43120_43130 = (0);
while(true){
if((i__43120_43130 < count__43119_43129)){
var vec__43121_43131 = cljs.core._nth.call(null,chunk__43118_43128,i__43120_43130);
var k_43132 = cljs.core.nth.call(null,vec__43121_43131,(0),null);
var v_43133 = cljs.core.nth.call(null,vec__43121_43131,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_43133)){
form_data.append(cljs.core.name.call(null,k_43132),cljs.core.first.call(null,v_43133),cljs.core.second.call(null,v_43133));
} else {
form_data.append(cljs.core.name.call(null,k_43132),v_43133);
}

var G__43134 = seq__43117_43127;
var G__43135 = chunk__43118_43128;
var G__43136 = count__43119_43129;
var G__43137 = (i__43120_43130 + (1));
seq__43117_43127 = G__43134;
chunk__43118_43128 = G__43135;
count__43119_43129 = G__43136;
i__43120_43130 = G__43137;
continue;
} else {
var temp__4657__auto___43138 = cljs.core.seq.call(null,seq__43117_43127);
if(temp__4657__auto___43138){
var seq__43117_43139__$1 = temp__4657__auto___43138;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43117_43139__$1)){
var c__34631__auto___43140 = cljs.core.chunk_first.call(null,seq__43117_43139__$1);
var G__43141 = cljs.core.chunk_rest.call(null,seq__43117_43139__$1);
var G__43142 = c__34631__auto___43140;
var G__43143 = cljs.core.count.call(null,c__34631__auto___43140);
var G__43144 = (0);
seq__43117_43127 = G__43141;
chunk__43118_43128 = G__43142;
count__43119_43129 = G__43143;
i__43120_43130 = G__43144;
continue;
} else {
var vec__43124_43145 = cljs.core.first.call(null,seq__43117_43139__$1);
var k_43146 = cljs.core.nth.call(null,vec__43124_43145,(0),null);
var v_43147 = cljs.core.nth.call(null,vec__43124_43145,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_43147)){
form_data.append(cljs.core.name.call(null,k_43146),cljs.core.first.call(null,v_43147),cljs.core.second.call(null,v_43147));
} else {
form_data.append(cljs.core.name.call(null,k_43146),v_43147);
}

var G__43148 = cljs.core.next.call(null,seq__43117_43139__$1);
var G__43149 = null;
var G__43150 = (0);
var G__43151 = (0);
seq__43117_43127 = G__43148;
chunk__43118_43128 = G__43149;
count__43119_43129 = G__43150;
i__43120_43130 = G__43151;
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
return (function (p__43155){
var map__43156 = p__43155;
var map__43156__$1 = ((((!((map__43156 == null)))?((((map__43156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43156.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43156):map__43156);
var request = map__43156__$1;
var multipart_params = cljs.core.get.call(null,map__43156__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__43156__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__33800__auto__ = multipart_params;
if(cljs.core.truth_(and__33800__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__33800__auto__;
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
return (function (p1__43158_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__43158_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__43163){
var map__43164 = p__43163;
var map__43164__$1 = ((((!((map__43164 == null)))?((((map__43164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43164.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43164):map__43164);
var req = map__43164__$1;
var query_params = cljs.core.get.call(null,map__43164__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4655__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4655__auto__,map__43164,map__43164__$1,req,query_params){
return (function (p1__43159_SHARP_){
return cljs.core.merge.call(null,p1__43159_SHARP_,query_params);
});})(spec,temp__4655__auto__,map__43164,map__43164__$1,req,query_params))
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
var args__34932__auto__ = [];
var len__34925__auto___43172 = arguments.length;
var i__34926__auto___43173 = (0);
while(true){
if((i__34926__auto___43173 < len__34925__auto___43172)){
args__34932__auto__.push((arguments[i__34926__auto___43173]));

var G__43174 = (i__34926__auto___43173 + (1));
i__34926__auto___43173 = G__43174;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((1) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__34933__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__43168){
var vec__43169 = p__43168;
var credentials = cljs.core.nth.call(null,vec__43169,(0),null);
return ((function (vec__43169,credentials){
return (function (req){
var credentials__$1 = (function (){var or__33812__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__33812__auto__)){
return or__33812__auto__;
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
;})(vec__43169,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq43166){
var G__43167 = cljs.core.first.call(null,seq43166);
var seq43166__$1 = cljs.core.next.call(null,seq43166);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__43167,seq43166__$1);
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
var args__34932__auto__ = [];
var len__34925__auto___43181 = arguments.length;
var i__34926__auto___43182 = (0);
while(true){
if((i__34926__auto___43182 < len__34925__auto___43181)){
args__34932__auto__.push((arguments[i__34926__auto___43182]));

var G__43183 = (i__34926__auto___43182 + (1));
i__34926__auto___43182 = G__43183;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((1) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__34933__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__43177){
var vec__43178 = p__43177;
var req = cljs.core.nth.call(null,vec__43178,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq43175){
var G__43176 = cljs.core.first.call(null,seq43175);
var seq43175__$1 = cljs.core.next.call(null,seq43175);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__43176,seq43175__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__34932__auto__ = [];
var len__34925__auto___43190 = arguments.length;
var i__34926__auto___43191 = (0);
while(true){
if((i__34926__auto___43191 < len__34925__auto___43190)){
args__34932__auto__.push((arguments[i__34926__auto___43191]));

var G__43192 = (i__34926__auto___43191 + (1));
i__34926__auto___43191 = G__43192;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((1) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__34933__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__43186){
var vec__43187 = p__43186;
var req = cljs.core.nth.call(null,vec__43187,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq43184){
var G__43185 = cljs.core.first.call(null,seq43184);
var seq43184__$1 = cljs.core.next.call(null,seq43184);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__43185,seq43184__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__34932__auto__ = [];
var len__34925__auto___43199 = arguments.length;
var i__34926__auto___43200 = (0);
while(true){
if((i__34926__auto___43200 < len__34925__auto___43199)){
args__34932__auto__.push((arguments[i__34926__auto___43200]));

var G__43201 = (i__34926__auto___43200 + (1));
i__34926__auto___43200 = G__43201;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((1) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__34933__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__43195){
var vec__43196 = p__43195;
var req = cljs.core.nth.call(null,vec__43196,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq43193){
var G__43194 = cljs.core.first.call(null,seq43193);
var seq43193__$1 = cljs.core.next.call(null,seq43193);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__43194,seq43193__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__34932__auto__ = [];
var len__34925__auto___43208 = arguments.length;
var i__34926__auto___43209 = (0);
while(true){
if((i__34926__auto___43209 < len__34925__auto___43208)){
args__34932__auto__.push((arguments[i__34926__auto___43209]));

var G__43210 = (i__34926__auto___43209 + (1));
i__34926__auto___43209 = G__43210;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((1) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__34933__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__43204){
var vec__43205 = p__43204;
var req = cljs.core.nth.call(null,vec__43205,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq43202){
var G__43203 = cljs.core.first.call(null,seq43202);
var seq43202__$1 = cljs.core.next.call(null,seq43202);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__43203,seq43202__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__34932__auto__ = [];
var len__34925__auto___43217 = arguments.length;
var i__34926__auto___43218 = (0);
while(true){
if((i__34926__auto___43218 < len__34925__auto___43217)){
args__34932__auto__.push((arguments[i__34926__auto___43218]));

var G__43219 = (i__34926__auto___43218 + (1));
i__34926__auto___43218 = G__43219;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((1) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__34933__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__43213){
var vec__43214 = p__43213;
var req = cljs.core.nth.call(null,vec__43214,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq43211){
var G__43212 = cljs.core.first.call(null,seq43211);
var seq43211__$1 = cljs.core.next.call(null,seq43211);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__43212,seq43211__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__34932__auto__ = [];
var len__34925__auto___43226 = arguments.length;
var i__34926__auto___43227 = (0);
while(true){
if((i__34926__auto___43227 < len__34925__auto___43226)){
args__34932__auto__.push((arguments[i__34926__auto___43227]));

var G__43228 = (i__34926__auto___43227 + (1));
i__34926__auto___43227 = G__43228;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((1) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__34933__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__43222){
var vec__43223 = p__43222;
var req = cljs.core.nth.call(null,vec__43223,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq43220){
var G__43221 = cljs.core.first.call(null,seq43220);
var seq43220__$1 = cljs.core.next.call(null,seq43220);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__43221,seq43220__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__34932__auto__ = [];
var len__34925__auto___43235 = arguments.length;
var i__34926__auto___43236 = (0);
while(true){
if((i__34926__auto___43236 < len__34925__auto___43235)){
args__34932__auto__.push((arguments[i__34926__auto___43236]));

var G__43237 = (i__34926__auto___43236 + (1));
i__34926__auto___43236 = G__43237;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((1) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__34933__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__43231){
var vec__43232 = p__43231;
var req = cljs.core.nth.call(null,vec__43232,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq43229){
var G__43230 = cljs.core.first.call(null,seq43229);
var seq43229__$1 = cljs.core.next.call(null,seq43229);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__43230,seq43229__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__34932__auto__ = [];
var len__34925__auto___43244 = arguments.length;
var i__34926__auto___43245 = (0);
while(true){
if((i__34926__auto___43245 < len__34925__auto___43244)){
args__34932__auto__.push((arguments[i__34926__auto___43245]));

var G__43246 = (i__34926__auto___43245 + (1));
i__34926__auto___43245 = G__43246;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((1) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__34933__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__43240){
var vec__43241 = p__43240;
var req = cljs.core.nth.call(null,vec__43241,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq43238){
var G__43239 = cljs.core.first.call(null,seq43238);
var seq43238__$1 = cljs.core.next.call(null,seq43238);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__43239,seq43238__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__34932__auto__ = [];
var len__34925__auto___43253 = arguments.length;
var i__34926__auto___43254 = (0);
while(true){
if((i__34926__auto___43254 < len__34925__auto___43253)){
args__34932__auto__.push((arguments[i__34926__auto___43254]));

var G__43255 = (i__34926__auto___43254 + (1));
i__34926__auto___43254 = G__43255;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((1) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__34933__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__43249){
var vec__43250 = p__43249;
var req = cljs.core.nth.call(null,vec__43250,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq43247){
var G__43248 = cljs.core.first.call(null,seq43247);
var seq43247__$1 = cljs.core.next.call(null,seq43247);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__43248,seq43247__$1);
});


//# sourceMappingURL=client.js.map?rel=1526470087738