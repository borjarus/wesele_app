// Compiled by ClojureScript 1.9.494 {}
goog.provide('cljs_time.coerce');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('cljs_time.format');
goog.require('goog.date.UtcDateTime');

/**
 * @interface
 */
cljs_time.coerce.ICoerce = function(){};

/**
 * Convert `obj` to a goog.date.DateTime instance.
 */
cljs_time.coerce.to_date_time = (function cljs_time$coerce$to_date_time(obj){
if((!((obj == null))) && (!((obj.cljs_time$coerce$ICoerce$to_date_time$arity$1 == null)))){
return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else {
var x__44162__auto__ = (((obj == null))?null:obj);
var m__44163__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__44162__auto__)]);
if(!((m__44163__auto__ == null))){
return m__44163__auto__.call(null,obj);
} else {
var m__44163__auto____$1 = (cljs_time.coerce.to_date_time["_"]);
if(!((m__44163__auto____$1 == null))){
return m__44163__auto____$1.call(null,obj);
} else {
throw cljs.core.missing_protocol.call(null,"ICoerce.to-date-time",obj);
}
}
}
});

/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.from_long = (function cljs_time$coerce$from_long(millis){
var G__64044 = millis;
if((G__64044 == null)){
return null;
} else {
return goog.date.UtcDateTime.fromTimestamp.call(null,G__64044);
}
});
/**
 * Returns DateTime instance from string using formatters in cljs-time.format,
 *   returning first which parses
 */
cljs_time.coerce.from_string = (function cljs_time$coerce$from_string(s){
if(cljs.core.truth_(s)){
return cljs.core.first.call(null,(function (){var iter__44282__auto__ = (function cljs_time$coerce$from_string_$_iter__64053(s__64054){
return (new cljs.core.LazySeq(null,(function (){
var s__64054__$1 = s__64054;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__64054__$1);
if(temp__4657__auto__){
var s__64054__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__64054__$2)){
var c__44280__auto__ = cljs.core.chunk_first.call(null,s__64054__$2);
var size__44281__auto__ = cljs.core.count.call(null,c__44280__auto__);
var b__64056 = cljs.core.chunk_buffer.call(null,size__44281__auto__);
if((function (){var i__64055 = (0);
while(true){
if((i__64055 < size__44281__auto__)){
var f = cljs.core._nth.call(null,c__44280__auto__,i__64055);
var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e64059){if((e64059 instanceof Error)){
var _ = e64059;
return null;
} else {
throw e64059;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append.call(null,b__64056,d);

var G__64061 = (i__64055 + (1));
i__64055 = G__64061;
continue;
} else {
var G__64062 = (i__64055 + (1));
i__64055 = G__64062;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__64056),cljs_time$coerce$from_string_$_iter__64053.call(null,cljs.core.chunk_rest.call(null,s__64054__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__64056),null);
}
} else {
var f = cljs.core.first.call(null,s__64054__$2);
var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e64060){if((e64060 instanceof Error)){
var _ = e64060;
return null;
} else {
throw e64060;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons.call(null,d,cljs_time$coerce$from_string_$_iter__64053.call(null,cljs.core.rest.call(null,s__64054__$2)));
} else {
var G__64063 = cljs.core.rest.call(null,s__64054__$2);
s__64054__$1 = G__64063;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__44282__auto__.call(null,cljs.core.vals.call(null,cljs_time.format.formatters));
})());
} else {
return null;
}
});
/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   js Date object.
 */
cljs_time.coerce.from_date = (function cljs_time$coerce$from_date(date){
var G__64065 = date;
var G__64065__$1 = (((G__64065 == null))?null:G__64065.getTime());
if((G__64065__$1 == null)){
return null;
} else {
return cljs_time.coerce.from_long.call(null,G__64065__$1);
}
});
/**
 * Convert `obj` to the number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.to_long = (function cljs_time$coerce$to_long(obj){
var G__64067 = obj;
var G__64067__$1 = (((G__64067 == null))?null:cljs_time.coerce.to_date_time.call(null,G__64067));
if((G__64067__$1 == null)){
return null;
} else {
return G__64067__$1.getTime();
}
});
/**
 * Convert `obj` to Unix epoch.
 */
cljs_time.coerce.to_epoch = (function cljs_time$coerce$to_epoch(obj){
var G__64069 = obj;
var G__64069__$1 = (((G__64069 == null))?null:cljs_time.coerce.to_long.call(null,G__64069));
if((G__64069__$1 == null)){
return null;
} else {
return (G__64069__$1 / (1000));
}
});
/**
 * Convert `obj` to a JavaScript Date instance.
 */
cljs_time.coerce.to_date = (function cljs_time$coerce$to_date(obj){
var G__64071 = obj;
var G__64071__$1 = (((G__64071 == null))?null:cljs_time.coerce.to_date_time.call(null,G__64071));
var G__64071__$2 = (((G__64071__$1 == null))?null:G__64071__$1.getTime());
if((G__64071__$2 == null)){
return null;
} else {
return (new Date(G__64071__$2));
}
});
/**
 * Returns a string representation of obj in UTC time-zone
 *   using "yyyy-MM-dd'T'HH:mm:ss.SSSZZ" date-time representation.
 */
cljs_time.coerce.to_string = (function cljs_time$coerce$to_string(obj){
var G__64073 = obj;
var G__64073__$1 = (((G__64073 == null))?null:cljs_time.coerce.to_date_time.call(null,G__64073));
if((G__64073__$1 == null)){
return null;
} else {
return cljs_time.format.unparse.call(null,new cljs.core.Keyword(null,"date-time","date-time",177938180).cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),G__64073__$1);
}
});
/**
 * Convert `obj` to a goog.date.Date instance
 */
cljs_time.coerce.to_local_date = (function cljs_time$coerce$to_local_date(obj){
if(cljs.core.truth_(obj)){
var temp__4655__auto__ = cljs_time.coerce.to_date_time.call(null,obj);
if(cljs.core.truth_(temp__4655__auto__)){
var dt = temp__4655__auto__;
return (new goog.date.Date(dt.getYear(),dt.getMonth(),dt.getDate()));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Convert `obj` to a goog.date.DateTime instance
 */
cljs_time.coerce.to_local_date_time = (function cljs_time$coerce$to_local_date_time(obj){
if(cljs.core.truth_(obj)){
var temp__4655__auto__ = cljs_time.coerce.to_date_time.call(null,obj);
if(cljs.core.truth_(temp__4655__auto__)){
var dt = temp__4655__auto__;
var G__64075 = (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate()));
G__64075.setHours(dt.getHours());

G__64075.setMinutes(dt.getMinutes());

G__64075.setSeconds(dt.getSeconds());

G__64075.setMilliseconds(dt.getMilliseconds());

return G__64075;
} else {
return null;
}
} else {
return null;
}
});
(cljs_time.coerce.ICoerce["null"] = true);

(cljs_time.coerce.to_date_time["null"] = (function (_){
return null;
}));

Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.coerce.from_date.call(null,date__$1);
});

goog.date.Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date){
var local_date__$1 = this;
if(cljs.core.truth_(local_date__$1)){
return cljs_time.core.to_utc_time_zone.call(null,local_date__$1);
} else {
return null;
}
});

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date_time){
var local_date_time__$1 = this;
if(cljs.core.truth_(local_date_time__$1)){
return cljs_time.core.to_utc_time_zone.call(null,local_date_time__$1);
} else {
return null;
}
});

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return date_time__$1;
});

(cljs_time.coerce.ICoerce["number"] = true);

(cljs_time.coerce.to_date_time["number"] = (function (long$){
return cljs_time.coerce.from_long.call(null,long$);
}));

(cljs_time.coerce.ICoerce["string"] = true);

(cljs_time.coerce.to_date_time["string"] = (function (string){
return cljs_time.coerce.from_string.call(null,string);
}));

//# sourceMappingURL=coerce.js.map?rel=1494353187099