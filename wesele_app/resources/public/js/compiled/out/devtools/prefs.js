// Compiled by ClojureScript 1.9.494 {}
goog.provide('devtools.prefs');
goog.require('cljs.core');
goog.require('devtools.defaults');
devtools.prefs._STAR_prefs_STAR_ = devtools.defaults.prefs;
devtools.prefs.get_prefs = (function devtools$prefs$get_prefs(){
return devtools.prefs._STAR_prefs_STAR_;
});
devtools.prefs.pref = (function devtools$prefs$pref(key){
return key.call(null,devtools.prefs._STAR_prefs_STAR_);
});
devtools.prefs.set_prefs_BANG_ = (function devtools$prefs$set_prefs_BANG_(new_prefs){
return devtools.prefs._STAR_prefs_STAR_ = new_prefs;
});
devtools.prefs.set_pref_BANG_ = (function devtools$prefs$set_pref_BANG_(key,val){
return devtools.prefs.set_prefs_BANG_.call(null,cljs.core.assoc.call(null,devtools.prefs.get_prefs.call(null),key,val));
});
devtools.prefs.merge_prefs_BANG_ = (function devtools$prefs$merge_prefs_BANG_(m){
return devtools.prefs.set_prefs_BANG_.call(null,cljs.core.merge.call(null,devtools.prefs.get_prefs.call(null),m));
});
devtools.prefs.update_pref_BANG_ = (function devtools$prefs$update_pref_BANG_(var_args){
var args__34454__auto__ = [];
var len__34447__auto___66463 = arguments.length;
var i__34448__auto___66464 = (0);
while(true){
if((i__34448__auto___66464 < len__34447__auto___66463)){
args__34454__auto__.push((arguments[i__34448__auto___66464]));

var G__66465 = (i__34448__auto___66464 + (1));
i__34448__auto___66464 = G__66465;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((2) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((2)),(0),null)):null);
return devtools.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__34455__auto__);
});

devtools.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (key,f,args){
var new_val = cljs.core.apply.call(null,f,devtools.prefs.pref.call(null,key),args);
return devtools.prefs.set_pref_BANG_.call(null,key,new_val);
});

devtools.prefs.update_pref_BANG_.cljs$lang$maxFixedArity = (2);

devtools.prefs.update_pref_BANG_.cljs$lang$applyTo = (function (seq66460){
var G__66461 = cljs.core.first.call(null,seq66460);
var seq66460__$1 = cljs.core.next.call(null,seq66460);
var G__66462 = cljs.core.first.call(null,seq66460__$1);
var seq66460__$2 = cljs.core.next.call(null,seq66460__$1);
return devtools.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__66461,G__66462,seq66460__$2);
});


//# sourceMappingURL=prefs.js.map?rel=1510317575492