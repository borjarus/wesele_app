// Compiled by ClojureScript 1.9.494 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot compare "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot compare "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("#uuid \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid__$1.toString()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__58935_58939 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__58936_58940 = null;
var count__58937_58941 = (0);
var i__58938_58942 = (0);
while(true){
if((i__58938_58942 < count__58937_58941)){
var k_58943 = cljs.core._nth.call(null,chunk__58936_58940,i__58938_58942);
var v_58944 = (b[k_58943]);
(a[k_58943] = v_58944);

var G__58945 = seq__58935_58939;
var G__58946 = chunk__58936_58940;
var G__58947 = count__58937_58941;
var G__58948 = (i__58938_58942 + (1));
seq__58935_58939 = G__58945;
chunk__58936_58940 = G__58946;
count__58937_58941 = G__58947;
i__58938_58942 = G__58948;
continue;
} else {
var temp__4657__auto___58949 = cljs.core.seq.call(null,seq__58935_58939);
if(temp__4657__auto___58949){
var seq__58935_58950__$1 = temp__4657__auto___58949;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58935_58950__$1)){
var c__44313__auto___58951 = cljs.core.chunk_first.call(null,seq__58935_58950__$1);
var G__58952 = cljs.core.chunk_rest.call(null,seq__58935_58950__$1);
var G__58953 = c__44313__auto___58951;
var G__58954 = cljs.core.count.call(null,c__44313__auto___58951);
var G__58955 = (0);
seq__58935_58939 = G__58952;
chunk__58936_58940 = G__58953;
count__58937_58941 = G__58954;
i__58938_58942 = G__58955;
continue;
} else {
var k_58956 = cljs.core.first.call(null,seq__58935_58950__$1);
var v_58957 = (b[k_58956]);
(a[k_58956] = v_58957);

var G__58958 = cljs.core.next.call(null,seq__58935_58950__$1);
var G__58959 = null;
var G__58960 = (0);
var G__58961 = (0);
seq__58935_58939 = G__58958;
chunk__58936_58940 = G__58959;
count__58937_58941 = G__58960;
i__58938_58942 = G__58961;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__44105__auto__,writer__44106__auto__,opt__44107__auto__){
return cljs.core._write.call(null,writer__44106__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__44105__auto__,writer__44106__auto__,opt__44107__auto__){
return cljs.core._write.call(null,writer__44106__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args58962 = [];
var len__44607__auto___58965 = arguments.length;
var i__44608__auto___58966 = (0);
while(true){
if((i__44608__auto___58966 < len__44607__auto___58965)){
args58962.push((arguments[i__44608__auto___58966]));

var G__58967 = (i__44608__auto___58966 + (1));
i__44608__auto___58966 = G__58967;
continue;
} else {
}
break;
}

var G__58964 = args58962.length;
switch (G__58964) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args58962.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__58969 = (i + (2));
var G__58970 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__58969;
ret = G__58970;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__44105__auto__,writer__44106__auto__,opt__44107__auto__){
return cljs.core._write.call(null,writer__44106__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__44105__auto__,writer__44106__auto__,opt__44107__auto__){
return cljs.core._write.call(null,writer__44106__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__58971_58975 = cljs.core.seq.call(null,v);
var chunk__58972_58976 = null;
var count__58973_58977 = (0);
var i__58974_58978 = (0);
while(true){
if((i__58974_58978 < count__58973_58977)){
var x_58979 = cljs.core._nth.call(null,chunk__58972_58976,i__58974_58978);
ret.push(x_58979);

var G__58980 = seq__58971_58975;
var G__58981 = chunk__58972_58976;
var G__58982 = count__58973_58977;
var G__58983 = (i__58974_58978 + (1));
seq__58971_58975 = G__58980;
chunk__58972_58976 = G__58981;
count__58973_58977 = G__58982;
i__58974_58978 = G__58983;
continue;
} else {
var temp__4657__auto___58984 = cljs.core.seq.call(null,seq__58971_58975);
if(temp__4657__auto___58984){
var seq__58971_58985__$1 = temp__4657__auto___58984;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58971_58985__$1)){
var c__44313__auto___58986 = cljs.core.chunk_first.call(null,seq__58971_58985__$1);
var G__58987 = cljs.core.chunk_rest.call(null,seq__58971_58985__$1);
var G__58988 = c__44313__auto___58986;
var G__58989 = cljs.core.count.call(null,c__44313__auto___58986);
var G__58990 = (0);
seq__58971_58975 = G__58987;
chunk__58972_58976 = G__58988;
count__58973_58977 = G__58989;
i__58974_58978 = G__58990;
continue;
} else {
var x_58991 = cljs.core.first.call(null,seq__58971_58985__$1);
ret.push(x_58991);

var G__58992 = cljs.core.next.call(null,seq__58971_58985__$1);
var G__58993 = null;
var G__58994 = (0);
var G__58995 = (0);
seq__58971_58975 = G__58992;
chunk__58972_58976 = G__58993;
count__58973_58977 = G__58994;
i__58974_58978 = G__58995;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__44105__auto__,writer__44106__auto__,opt__44107__auto__){
return cljs.core._write.call(null,writer__44106__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__44105__auto__,writer__44106__auto__,opt__44107__auto__){
return cljs.core._write.call(null,writer__44106__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__58996_59000 = cljs.core.seq.call(null,v);
var chunk__58997_59001 = null;
var count__58998_59002 = (0);
var i__58999_59003 = (0);
while(true){
if((i__58999_59003 < count__58998_59002)){
var x_59004 = cljs.core._nth.call(null,chunk__58997_59001,i__58999_59003);
ret.push(x_59004);

var G__59005 = seq__58996_59000;
var G__59006 = chunk__58997_59001;
var G__59007 = count__58998_59002;
var G__59008 = (i__58999_59003 + (1));
seq__58996_59000 = G__59005;
chunk__58997_59001 = G__59006;
count__58998_59002 = G__59007;
i__58999_59003 = G__59008;
continue;
} else {
var temp__4657__auto___59009 = cljs.core.seq.call(null,seq__58996_59000);
if(temp__4657__auto___59009){
var seq__58996_59010__$1 = temp__4657__auto___59009;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58996_59010__$1)){
var c__44313__auto___59011 = cljs.core.chunk_first.call(null,seq__58996_59010__$1);
var G__59012 = cljs.core.chunk_rest.call(null,seq__58996_59010__$1);
var G__59013 = c__44313__auto___59011;
var G__59014 = cljs.core.count.call(null,c__44313__auto___59011);
var G__59015 = (0);
seq__58996_59000 = G__59012;
chunk__58997_59001 = G__59013;
count__58998_59002 = G__59014;
i__58999_59003 = G__59015;
continue;
} else {
var x_59016 = cljs.core.first.call(null,seq__58996_59010__$1);
ret.push(x_59016);

var G__59017 = cljs.core.next.call(null,seq__58996_59010__$1);
var G__59018 = null;
var G__59019 = (0);
var G__59020 = (0);
seq__58996_59000 = G__59017;
chunk__58997_59001 = G__59018;
count__58998_59002 = G__59019;
i__58999_59003 = G__59020;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__44105__auto__,writer__44106__auto__,opt__44107__auto__){
return cljs.core._write.call(null,writer__44106__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__59021_59025 = cljs.core.seq.call(null,v);
var chunk__59022_59026 = null;
var count__59023_59027 = (0);
var i__59024_59028 = (0);
while(true){
if((i__59024_59028 < count__59023_59027)){
var x_59029 = cljs.core._nth.call(null,chunk__59022_59026,i__59024_59028);
ret.push(x_59029);

var G__59030 = seq__59021_59025;
var G__59031 = chunk__59022_59026;
var G__59032 = count__59023_59027;
var G__59033 = (i__59024_59028 + (1));
seq__59021_59025 = G__59030;
chunk__59022_59026 = G__59031;
count__59023_59027 = G__59032;
i__59024_59028 = G__59033;
continue;
} else {
var temp__4657__auto___59034 = cljs.core.seq.call(null,seq__59021_59025);
if(temp__4657__auto___59034){
var seq__59021_59035__$1 = temp__4657__auto___59034;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59021_59035__$1)){
var c__44313__auto___59036 = cljs.core.chunk_first.call(null,seq__59021_59035__$1);
var G__59037 = cljs.core.chunk_rest.call(null,seq__59021_59035__$1);
var G__59038 = c__44313__auto___59036;
var G__59039 = cljs.core.count.call(null,c__44313__auto___59036);
var G__59040 = (0);
seq__59021_59025 = G__59037;
chunk__59022_59026 = G__59038;
count__59023_59027 = G__59039;
i__59024_59028 = G__59040;
continue;
} else {
var x_59041 = cljs.core.first.call(null,seq__59021_59035__$1);
ret.push(x_59041);

var G__59042 = cljs.core.next.call(null,seq__59021_59035__$1);
var G__59043 = null;
var G__59044 = (0);
var G__59045 = (0);
seq__59021_59025 = G__59042;
chunk__59022_59026 = G__59043;
count__59023_59027 = G__59044;
i__59024_59028 = G__59045;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__44105__auto__,writer__44106__auto__,opt__44107__auto__){
return cljs.core._write.call(null,writer__44106__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__44105__auto__,writer__44106__auto__,opt__44107__auto__){
return cljs.core._write.call(null,writer__44106__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args59046 = [];
var len__44607__auto___59061 = arguments.length;
var i__44608__auto___59062 = (0);
while(true){
if((i__44608__auto___59062 < len__44607__auto___59061)){
args59046.push((arguments[i__44608__auto___59062]));

var G__59063 = (i__44608__auto___59062 + (1));
i__44608__auto___59062 = G__59063;
continue;
} else {
}
break;
}

var G__59048 = args59046.length;
switch (G__59048) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args59046.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__59049 = obj;
G__59049.push(kfn.call(null,k),vfn.call(null,v));

return G__59049;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x59050 = cljs.core.clone.call(null,handlers);
x59050.forEach = ((function (x59050,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__59051 = cljs.core.seq.call(null,coll);
var chunk__59052 = null;
var count__59053 = (0);
var i__59054 = (0);
while(true){
if((i__59054 < count__59053)){
var vec__59055 = cljs.core._nth.call(null,chunk__59052,i__59054);
var k = cljs.core.nth.call(null,vec__59055,(0),null);
var v = cljs.core.nth.call(null,vec__59055,(1),null);
f.call(null,v,k);

var G__59065 = seq__59051;
var G__59066 = chunk__59052;
var G__59067 = count__59053;
var G__59068 = (i__59054 + (1));
seq__59051 = G__59065;
chunk__59052 = G__59066;
count__59053 = G__59067;
i__59054 = G__59068;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__59051);
if(temp__4657__auto__){
var seq__59051__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59051__$1)){
var c__44313__auto__ = cljs.core.chunk_first.call(null,seq__59051__$1);
var G__59069 = cljs.core.chunk_rest.call(null,seq__59051__$1);
var G__59070 = c__44313__auto__;
var G__59071 = cljs.core.count.call(null,c__44313__auto__);
var G__59072 = (0);
seq__59051 = G__59069;
chunk__59052 = G__59070;
count__59053 = G__59071;
i__59054 = G__59072;
continue;
} else {
var vec__59058 = cljs.core.first.call(null,seq__59051__$1);
var k = cljs.core.nth.call(null,vec__59058,(0),null);
var v = cljs.core.nth.call(null,vec__59058,(1),null);
f.call(null,v,k);

var G__59073 = cljs.core.next.call(null,seq__59051__$1);
var G__59074 = null;
var G__59075 = (0);
var G__59076 = (0);
seq__59051 = G__59073;
chunk__59052 = G__59074;
count__59053 = G__59075;
i__59054 = G__59076;
continue;
}
} else {
return null;
}
}
break;
}
});})(x59050,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x59050;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args59077 = [];
var len__44607__auto___59083 = arguments.length;
var i__44608__auto___59084 = (0);
while(true){
if((i__44608__auto___59084 < len__44607__auto___59083)){
args59077.push((arguments[i__44608__auto___59084]));

var G__59085 = (i__44608__auto___59084 + (1));
i__44608__auto___59084 = G__59085;
continue;
} else {
}
break;
}

var G__59079 = args59077.length;
switch (G__59079) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args59077.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit59080 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit59080 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta59081){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta59081 = meta59081;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit59080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59082,meta59081__$1){
var self__ = this;
var _59082__$1 = this;
return (new cognitect.transit.t_cognitect$transit59080(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta59081__$1));
});

cognitect.transit.t_cognitect$transit59080.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59082){
var self__ = this;
var _59082__$1 = this;
return self__.meta59081;
});

cognitect.transit.t_cognitect$transit59080.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit59080.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit59080.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit59080.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit59080.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta59081","meta59081",1012033069,null)], null);
});

cognitect.transit.t_cognitect$transit59080.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit59080.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit59080";

cognitect.transit.t_cognitect$transit59080.cljs$lang$ctorPrWriter = (function (this__44105__auto__,writer__44106__auto__,opt__44107__auto__){
return cljs.core._write.call(null,writer__44106__auto__,"cognitect.transit/t_cognitect$transit59080");
});

cognitect.transit.__GT_t_cognitect$transit59080 = (function cognitect$transit$__GT_t_cognitect$transit59080(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta59081){
return (new cognitect.transit.t_cognitect$transit59080(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta59081));
});

}

return (new cognitect.transit.t_cognitect$transit59080(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__43494__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__43494__auto__)){
return or__43494__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1494353141782