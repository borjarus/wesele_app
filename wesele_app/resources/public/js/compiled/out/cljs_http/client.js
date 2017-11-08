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
if(cljs.core.truth_((function (){var and__43482__auto__ = v;
if(cljs.core.truth_(and__43482__auto__)){
return (v > (0));
} else {
return and__43482__auto__;
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
return cljs.core.reduce.call(null,(function (p1__63140_SHARP_,p2__63139_SHARP_){
var vec__63144 = clojure.string.split.call(null,p2__63139_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__63144,(0),null);
var v = cljs.core.nth.call(null,vec__63144,(1),null);
return cljs.core.assoc.call(null,p1__63140_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
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
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__63147_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__63147_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__63148){
var vec__63152 = p__63148;
var k = cljs.core.nth.call(null,vec__63152,(0),null);
var v = cljs.core.nth.call(null,vec__63152,(1),null);
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
return (function (p1__63155_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\\"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__63155_SHARP_)].join('');
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
if(cljs.core.truth_((function (){var and__43482__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__43482__auto__){
var and__43482__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__43482__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("(?i)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__43482__auto____$1;
}
} else {
return and__43482__auto__;
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
return cljs.core.async.map.call(null,(function (p1__63156_SHARP_){
return cljs_http.client.decode_body.call(null,p1__63156_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__44614__auto__ = [];
var len__44607__auto___63163 = arguments.length;
var i__44608__auto___63164 = (0);
while(true){
if((i__44608__auto___63164 < len__44607__auto___63163)){
args__44614__auto__.push((arguments[i__44608__auto___63164]));

var G__63165 = (i__44608__auto___63164 + (1));
i__44608__auto___63164 = G__63165;
continue;
} else {
}
break;
}

var argseq__44615__auto__ = ((((1) < args__44614__auto__.length))?(new cljs.core.IndexedSeq(args__44614__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44615__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__63159){
var vec__63160 = p__63159;
var default_headers = cljs.core.nth.call(null,vec__63160,(0),null);
return ((function (vec__63160,default_headers){
return (function (request){
var temp__4655__auto__ = (function (){var or__43494__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__43494__auto__)){
return or__43494__auto__;
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
;})(vec__63160,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq63157){
var G__63158 = cljs.core.first.call(null,seq63157);
var seq63157__$1 = cljs.core.next.call(null,seq63157);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__63158,seq63157__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__44614__auto__ = [];
var len__44607__auto___63172 = arguments.length;
var i__44608__auto___63173 = (0);
while(true){
if((i__44608__auto___63173 < len__44607__auto___63172)){
args__44614__auto__.push((arguments[i__44608__auto___63173]));

var G__63174 = (i__44608__auto___63173 + (1));
i__44608__auto___63173 = G__63174;
continue;
} else {
}
break;
}

var argseq__44615__auto__ = ((((1) < args__44614__auto__.length))?(new cljs.core.IndexedSeq(args__44614__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44615__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__63168){
var vec__63169 = p__63168;
var accept = cljs.core.nth.call(null,vec__63169,(0),null);
return ((function (vec__63169,accept){
return (function (request){
var temp__4655__auto__ = (function (){var or__43494__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__43494__auto__)){
return or__43494__auto__;
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
;})(vec__63169,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq63166){
var G__63167 = cljs.core.first.call(null,seq63166);
var seq63166__$1 = cljs.core.next.call(null,seq63166);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__63167,seq63166__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__44614__auto__ = [];
var len__44607__auto___63181 = arguments.length;
var i__44608__auto___63182 = (0);
while(true){
if((i__44608__auto___63182 < len__44607__auto___63181)){
args__44614__auto__.push((arguments[i__44608__auto___63182]));

var G__63183 = (i__44608__auto___63182 + (1));
i__44608__auto___63182 = G__63183;
continue;
} else {
}
break;
}

var argseq__44615__auto__ = ((((1) < args__44614__auto__.length))?(new cljs.core.IndexedSeq(args__44614__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44615__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__63177){
var vec__63178 = p__63177;
var content_type = cljs.core.nth.call(null,vec__63178,(0),null);
return ((function (vec__63178,content_type){
return (function (request){
var temp__4655__auto__ = (function (){var or__43494__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__43494__auto__)){
return or__43494__auto__;
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
;})(vec__63178,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq63175){
var G__63176 = cljs.core.first.call(null,seq63175);
var seq63175__$1 = cljs.core.next.call(null,seq63175);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__63176,seq63175__$1);
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
var map__63186 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__63186__$1 = ((((!((map__63186 == null)))?((((map__63186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63186.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63186):map__63186);
var encoding = cljs.core.get.call(null,map__63186__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__63186__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
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
var map__63192 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__63192__$1 = ((((!((map__63192 == null)))?((((map__63192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63192.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63192):map__63192);
var decoding = cljs.core.get.call(null,map__63192__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__63192__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__63192,map__63192__$1,decoding,decoding_opts){
return (function (p1__63188_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__63188_SHARP_,decoding,decoding_opts);
});})(map__63192,map__63192__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__63192,map__63192__$1,decoding,decoding_opts,transit_decode){
return (function (p1__63189_SHARP_){
return cljs_http.client.decode_body.call(null,p1__63189_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__63192,map__63192__$1,decoding,decoding_opts,transit_decode))
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
return cljs.core.async.map.call(null,(function (p1__63194_SHARP_){
return cljs_http.client.decode_body.call(null,p1__63194_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__63198){
var map__63199 = p__63198;
var map__63199__$1 = ((((!((map__63199 == null)))?((((map__63199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63199.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63199):map__63199);
var req = map__63199__$1;
var query_params = cljs.core.get.call(null,map__63199__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__63204){
var map__63205 = p__63204;
var map__63205__$1 = ((((!((map__63205 == null)))?((((map__63205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63205.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63205):map__63205);
var request = map__63205__$1;
var form_params = cljs.core.get.call(null,map__63205__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__63205__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__63205__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__43482__auto__ = form_params;
if(cljs.core.truth_(and__43482__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__43482__auto__;
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
var seq__63217_63227 = cljs.core.seq.call(null,params);
var chunk__63218_63228 = null;
var count__63219_63229 = (0);
var i__63220_63230 = (0);
while(true){
if((i__63220_63230 < count__63219_63229)){
var vec__63221_63231 = cljs.core._nth.call(null,chunk__63218_63228,i__63220_63230);
var k_63232 = cljs.core.nth.call(null,vec__63221_63231,(0),null);
var v_63233 = cljs.core.nth.call(null,vec__63221_63231,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_63233)){
form_data.append(cljs.core.name.call(null,k_63232),cljs.core.first.call(null,v_63233),cljs.core.second.call(null,v_63233));
} else {
form_data.append(cljs.core.name.call(null,k_63232),v_63233);
}

var G__63234 = seq__63217_63227;
var G__63235 = chunk__63218_63228;
var G__63236 = count__63219_63229;
var G__63237 = (i__63220_63230 + (1));
seq__63217_63227 = G__63234;
chunk__63218_63228 = G__63235;
count__63219_63229 = G__63236;
i__63220_63230 = G__63237;
continue;
} else {
var temp__4657__auto___63238 = cljs.core.seq.call(null,seq__63217_63227);
if(temp__4657__auto___63238){
var seq__63217_63239__$1 = temp__4657__auto___63238;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63217_63239__$1)){
var c__44313__auto___63240 = cljs.core.chunk_first.call(null,seq__63217_63239__$1);
var G__63241 = cljs.core.chunk_rest.call(null,seq__63217_63239__$1);
var G__63242 = c__44313__auto___63240;
var G__63243 = cljs.core.count.call(null,c__44313__auto___63240);
var G__63244 = (0);
seq__63217_63227 = G__63241;
chunk__63218_63228 = G__63242;
count__63219_63229 = G__63243;
i__63220_63230 = G__63244;
continue;
} else {
var vec__63224_63245 = cljs.core.first.call(null,seq__63217_63239__$1);
var k_63246 = cljs.core.nth.call(null,vec__63224_63245,(0),null);
var v_63247 = cljs.core.nth.call(null,vec__63224_63245,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_63247)){
form_data.append(cljs.core.name.call(null,k_63246),cljs.core.first.call(null,v_63247),cljs.core.second.call(null,v_63247));
} else {
form_data.append(cljs.core.name.call(null,k_63246),v_63247);
}

var G__63248 = cljs.core.next.call(null,seq__63217_63239__$1);
var G__63249 = null;
var G__63250 = (0);
var G__63251 = (0);
seq__63217_63227 = G__63248;
chunk__63218_63228 = G__63249;
count__63219_63229 = G__63250;
i__63220_63230 = G__63251;
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
return (function (p__63255){
var map__63256 = p__63255;
var map__63256__$1 = ((((!((map__63256 == null)))?((((map__63256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63256.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63256):map__63256);
var request = map__63256__$1;
var multipart_params = cljs.core.get.call(null,map__63256__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__63256__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__43482__auto__ = multipart_params;
if(cljs.core.truth_(and__43482__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__43482__auto__;
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
return (function (p1__63258_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__63258_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__63263){
var map__63264 = p__63263;
var map__63264__$1 = ((((!((map__63264 == null)))?((((map__63264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63264.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63264):map__63264);
var req = map__63264__$1;
var query_params = cljs.core.get.call(null,map__63264__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4655__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4655__auto__,map__63264,map__63264__$1,req,query_params){
return (function (p1__63259_SHARP_){
return cljs.core.merge.call(null,p1__63259_SHARP_,query_params);
});})(spec,temp__4655__auto__,map__63264,map__63264__$1,req,query_params))
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
var args__44614__auto__ = [];
var len__44607__auto___63272 = arguments.length;
var i__44608__auto___63273 = (0);
while(true){
if((i__44608__auto___63273 < len__44607__auto___63272)){
args__44614__auto__.push((arguments[i__44608__auto___63273]));

var G__63274 = (i__44608__auto___63273 + (1));
i__44608__auto___63273 = G__63274;
continue;
} else {
}
break;
}

var argseq__44615__auto__ = ((((1) < args__44614__auto__.length))?(new cljs.core.IndexedSeq(args__44614__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44615__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__63268){
var vec__63269 = p__63268;
var credentials = cljs.core.nth.call(null,vec__63269,(0),null);
return ((function (vec__63269,credentials){
return (function (req){
var credentials__$1 = (function (){var or__43494__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__43494__auto__)){
return or__43494__auto__;
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
;})(vec__63269,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq63266){
var G__63267 = cljs.core.first.call(null,seq63266);
var seq63266__$1 = cljs.core.next.call(null,seq63266);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__63267,seq63266__$1);
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
var args__44614__auto__ = [];
var len__44607__auto___63281 = arguments.length;
var i__44608__auto___63282 = (0);
while(true){
if((i__44608__auto___63282 < len__44607__auto___63281)){
args__44614__auto__.push((arguments[i__44608__auto___63282]));

var G__63283 = (i__44608__auto___63282 + (1));
i__44608__auto___63282 = G__63283;
continue;
} else {
}
break;
}

var argseq__44615__auto__ = ((((1) < args__44614__auto__.length))?(new cljs.core.IndexedSeq(args__44614__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44615__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__63277){
var vec__63278 = p__63277;
var req = cljs.core.nth.call(null,vec__63278,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq63275){
var G__63276 = cljs.core.first.call(null,seq63275);
var seq63275__$1 = cljs.core.next.call(null,seq63275);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__63276,seq63275__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__44614__auto__ = [];
var len__44607__auto___63290 = arguments.length;
var i__44608__auto___63291 = (0);
while(true){
if((i__44608__auto___63291 < len__44607__auto___63290)){
args__44614__auto__.push((arguments[i__44608__auto___63291]));

var G__63292 = (i__44608__auto___63291 + (1));
i__44608__auto___63291 = G__63292;
continue;
} else {
}
break;
}

var argseq__44615__auto__ = ((((1) < args__44614__auto__.length))?(new cljs.core.IndexedSeq(args__44614__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44615__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__63286){
var vec__63287 = p__63286;
var req = cljs.core.nth.call(null,vec__63287,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq63284){
var G__63285 = cljs.core.first.call(null,seq63284);
var seq63284__$1 = cljs.core.next.call(null,seq63284);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__63285,seq63284__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__44614__auto__ = [];
var len__44607__auto___63299 = arguments.length;
var i__44608__auto___63300 = (0);
while(true){
if((i__44608__auto___63300 < len__44607__auto___63299)){
args__44614__auto__.push((arguments[i__44608__auto___63300]));

var G__63301 = (i__44608__auto___63300 + (1));
i__44608__auto___63300 = G__63301;
continue;
} else {
}
break;
}

var argseq__44615__auto__ = ((((1) < args__44614__auto__.length))?(new cljs.core.IndexedSeq(args__44614__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44615__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__63295){
var vec__63296 = p__63295;
var req = cljs.core.nth.call(null,vec__63296,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq63293){
var G__63294 = cljs.core.first.call(null,seq63293);
var seq63293__$1 = cljs.core.next.call(null,seq63293);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__63294,seq63293__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__44614__auto__ = [];
var len__44607__auto___63308 = arguments.length;
var i__44608__auto___63309 = (0);
while(true){
if((i__44608__auto___63309 < len__44607__auto___63308)){
args__44614__auto__.push((arguments[i__44608__auto___63309]));

var G__63310 = (i__44608__auto___63309 + (1));
i__44608__auto___63309 = G__63310;
continue;
} else {
}
break;
}

var argseq__44615__auto__ = ((((1) < args__44614__auto__.length))?(new cljs.core.IndexedSeq(args__44614__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44615__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__63304){
var vec__63305 = p__63304;
var req = cljs.core.nth.call(null,vec__63305,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq63302){
var G__63303 = cljs.core.first.call(null,seq63302);
var seq63302__$1 = cljs.core.next.call(null,seq63302);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__63303,seq63302__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__44614__auto__ = [];
var len__44607__auto___63317 = arguments.length;
var i__44608__auto___63318 = (0);
while(true){
if((i__44608__auto___63318 < len__44607__auto___63317)){
args__44614__auto__.push((arguments[i__44608__auto___63318]));

var G__63319 = (i__44608__auto___63318 + (1));
i__44608__auto___63318 = G__63319;
continue;
} else {
}
break;
}

var argseq__44615__auto__ = ((((1) < args__44614__auto__.length))?(new cljs.core.IndexedSeq(args__44614__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44615__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__63313){
var vec__63314 = p__63313;
var req = cljs.core.nth.call(null,vec__63314,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq63311){
var G__63312 = cljs.core.first.call(null,seq63311);
var seq63311__$1 = cljs.core.next.call(null,seq63311);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__63312,seq63311__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__44614__auto__ = [];
var len__44607__auto___63326 = arguments.length;
var i__44608__auto___63327 = (0);
while(true){
if((i__44608__auto___63327 < len__44607__auto___63326)){
args__44614__auto__.push((arguments[i__44608__auto___63327]));

var G__63328 = (i__44608__auto___63327 + (1));
i__44608__auto___63327 = G__63328;
continue;
} else {
}
break;
}

var argseq__44615__auto__ = ((((1) < args__44614__auto__.length))?(new cljs.core.IndexedSeq(args__44614__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44615__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__63322){
var vec__63323 = p__63322;
var req = cljs.core.nth.call(null,vec__63323,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq63320){
var G__63321 = cljs.core.first.call(null,seq63320);
var seq63320__$1 = cljs.core.next.call(null,seq63320);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__63321,seq63320__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__44614__auto__ = [];
var len__44607__auto___63335 = arguments.length;
var i__44608__auto___63336 = (0);
while(true){
if((i__44608__auto___63336 < len__44607__auto___63335)){
args__44614__auto__.push((arguments[i__44608__auto___63336]));

var G__63337 = (i__44608__auto___63336 + (1));
i__44608__auto___63336 = G__63337;
continue;
} else {
}
break;
}

var argseq__44615__auto__ = ((((1) < args__44614__auto__.length))?(new cljs.core.IndexedSeq(args__44614__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44615__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__63331){
var vec__63332 = p__63331;
var req = cljs.core.nth.call(null,vec__63332,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq63329){
var G__63330 = cljs.core.first.call(null,seq63329);
var seq63329__$1 = cljs.core.next.call(null,seq63329);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__63330,seq63329__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__44614__auto__ = [];
var len__44607__auto___63344 = arguments.length;
var i__44608__auto___63345 = (0);
while(true){
if((i__44608__auto___63345 < len__44607__auto___63344)){
args__44614__auto__.push((arguments[i__44608__auto___63345]));

var G__63346 = (i__44608__auto___63345 + (1));
i__44608__auto___63345 = G__63346;
continue;
} else {
}
break;
}

var argseq__44615__auto__ = ((((1) < args__44614__auto__.length))?(new cljs.core.IndexedSeq(args__44614__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44615__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__63340){
var vec__63341 = p__63340;
var req = cljs.core.nth.call(null,vec__63341,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq63338){
var G__63339 = cljs.core.first.call(null,seq63338);
var seq63338__$1 = cljs.core.next.call(null,seq63338);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__63339,seq63338__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__44614__auto__ = [];
var len__44607__auto___63353 = arguments.length;
var i__44608__auto___63354 = (0);
while(true){
if((i__44608__auto___63354 < len__44607__auto___63353)){
args__44614__auto__.push((arguments[i__44608__auto___63354]));

var G__63355 = (i__44608__auto___63354 + (1));
i__44608__auto___63354 = G__63355;
continue;
} else {
}
break;
}

var argseq__44615__auto__ = ((((1) < args__44614__auto__.length))?(new cljs.core.IndexedSeq(args__44614__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44615__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__63349){
var vec__63350 = p__63349;
var req = cljs.core.nth.call(null,vec__63350,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq63347){
var G__63348 = cljs.core.first.call(null,seq63347);
var seq63347__$1 = cljs.core.next.call(null,seq63347);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__63348,seq63347__$1);
});


//# sourceMappingURL=client.js.map?rel=1494353177757