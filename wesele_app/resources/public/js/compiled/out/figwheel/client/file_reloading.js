// Compiled by ClojureScript 1.9.494 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__33334__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__33334__auto__){
return or__33334__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("goog/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__33334__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__33334__auto__)){
return or__33334__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__60899_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__60899_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__60904 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__60905 = null;
var count__60906 = (0);
var i__60907 = (0);
while(true){
if((i__60907 < count__60906)){
var n = cljs.core._nth.call(null,chunk__60905,i__60907);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__60908 = seq__60904;
var G__60909 = chunk__60905;
var G__60910 = count__60906;
var G__60911 = (i__60907 + (1));
seq__60904 = G__60908;
chunk__60905 = G__60909;
count__60906 = G__60910;
i__60907 = G__60911;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__60904);
if(temp__4657__auto__){
var seq__60904__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60904__$1)){
var c__34153__auto__ = cljs.core.chunk_first.call(null,seq__60904__$1);
var G__60912 = cljs.core.chunk_rest.call(null,seq__60904__$1);
var G__60913 = c__34153__auto__;
var G__60914 = cljs.core.count.call(null,c__34153__auto__);
var G__60915 = (0);
seq__60904 = G__60912;
chunk__60905 = G__60913;
count__60906 = G__60914;
i__60907 = G__60915;
continue;
} else {
var n = cljs.core.first.call(null,seq__60904__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__60916 = cljs.core.next.call(null,seq__60904__$1);
var G__60917 = null;
var G__60918 = (0);
var G__60919 = (0);
seq__60904 = G__60916;
chunk__60905 = G__60917;
count__60906 = G__60918;
i__60907 = G__60919;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__60970_60981 = cljs.core.seq.call(null,deps);
var chunk__60971_60982 = null;
var count__60972_60983 = (0);
var i__60973_60984 = (0);
while(true){
if((i__60973_60984 < count__60972_60983)){
var dep_60985 = cljs.core._nth.call(null,chunk__60971_60982,i__60973_60984);
topo_sort_helper_STAR_.call(null,dep_60985,(depth + (1)),state);

var G__60986 = seq__60970_60981;
var G__60987 = chunk__60971_60982;
var G__60988 = count__60972_60983;
var G__60989 = (i__60973_60984 + (1));
seq__60970_60981 = G__60986;
chunk__60971_60982 = G__60987;
count__60972_60983 = G__60988;
i__60973_60984 = G__60989;
continue;
} else {
var temp__4657__auto___60990 = cljs.core.seq.call(null,seq__60970_60981);
if(temp__4657__auto___60990){
var seq__60970_60991__$1 = temp__4657__auto___60990;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60970_60991__$1)){
var c__34153__auto___60992 = cljs.core.chunk_first.call(null,seq__60970_60991__$1);
var G__60993 = cljs.core.chunk_rest.call(null,seq__60970_60991__$1);
var G__60994 = c__34153__auto___60992;
var G__60995 = cljs.core.count.call(null,c__34153__auto___60992);
var G__60996 = (0);
seq__60970_60981 = G__60993;
chunk__60971_60982 = G__60994;
count__60972_60983 = G__60995;
i__60973_60984 = G__60996;
continue;
} else {
var dep_60997 = cljs.core.first.call(null,seq__60970_60991__$1);
topo_sort_helper_STAR_.call(null,dep_60997,(depth + (1)),state);

var G__60998 = cljs.core.next.call(null,seq__60970_60991__$1);
var G__60999 = null;
var G__61000 = (0);
var G__61001 = (0);
seq__60970_60981 = G__60998;
chunk__60971_60982 = G__60999;
count__60972_60983 = G__61000;
i__60973_60984 = G__61001;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__60974){
var vec__60978 = p__60974;
var seq__60979 = cljs.core.seq.call(null,vec__60978);
var first__60980 = cljs.core.first.call(null,seq__60979);
var seq__60979__$1 = cljs.core.next.call(null,seq__60979);
var x = first__60980;
var xs = seq__60979__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__60978,seq__60979,first__60980,seq__60979__$1,x,xs,get_deps__$1){
return (function (p1__60920_SHARP_){
return clojure.set.difference.call(null,p1__60920_SHARP_,x);
});})(vec__60978,seq__60979,first__60980,seq__60979__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__61014 = cljs.core.seq.call(null,provides);
var chunk__61015 = null;
var count__61016 = (0);
var i__61017 = (0);
while(true){
if((i__61017 < count__61016)){
var prov = cljs.core._nth.call(null,chunk__61015,i__61017);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__61018_61026 = cljs.core.seq.call(null,requires);
var chunk__61019_61027 = null;
var count__61020_61028 = (0);
var i__61021_61029 = (0);
while(true){
if((i__61021_61029 < count__61020_61028)){
var req_61030 = cljs.core._nth.call(null,chunk__61019_61027,i__61021_61029);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_61030,prov);

var G__61031 = seq__61018_61026;
var G__61032 = chunk__61019_61027;
var G__61033 = count__61020_61028;
var G__61034 = (i__61021_61029 + (1));
seq__61018_61026 = G__61031;
chunk__61019_61027 = G__61032;
count__61020_61028 = G__61033;
i__61021_61029 = G__61034;
continue;
} else {
var temp__4657__auto___61035 = cljs.core.seq.call(null,seq__61018_61026);
if(temp__4657__auto___61035){
var seq__61018_61036__$1 = temp__4657__auto___61035;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61018_61036__$1)){
var c__34153__auto___61037 = cljs.core.chunk_first.call(null,seq__61018_61036__$1);
var G__61038 = cljs.core.chunk_rest.call(null,seq__61018_61036__$1);
var G__61039 = c__34153__auto___61037;
var G__61040 = cljs.core.count.call(null,c__34153__auto___61037);
var G__61041 = (0);
seq__61018_61026 = G__61038;
chunk__61019_61027 = G__61039;
count__61020_61028 = G__61040;
i__61021_61029 = G__61041;
continue;
} else {
var req_61042 = cljs.core.first.call(null,seq__61018_61036__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_61042,prov);

var G__61043 = cljs.core.next.call(null,seq__61018_61036__$1);
var G__61044 = null;
var G__61045 = (0);
var G__61046 = (0);
seq__61018_61026 = G__61043;
chunk__61019_61027 = G__61044;
count__61020_61028 = G__61045;
i__61021_61029 = G__61046;
continue;
}
} else {
}
}
break;
}

var G__61047 = seq__61014;
var G__61048 = chunk__61015;
var G__61049 = count__61016;
var G__61050 = (i__61017 + (1));
seq__61014 = G__61047;
chunk__61015 = G__61048;
count__61016 = G__61049;
i__61017 = G__61050;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__61014);
if(temp__4657__auto__){
var seq__61014__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61014__$1)){
var c__34153__auto__ = cljs.core.chunk_first.call(null,seq__61014__$1);
var G__61051 = cljs.core.chunk_rest.call(null,seq__61014__$1);
var G__61052 = c__34153__auto__;
var G__61053 = cljs.core.count.call(null,c__34153__auto__);
var G__61054 = (0);
seq__61014 = G__61051;
chunk__61015 = G__61052;
count__61016 = G__61053;
i__61017 = G__61054;
continue;
} else {
var prov = cljs.core.first.call(null,seq__61014__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__61022_61055 = cljs.core.seq.call(null,requires);
var chunk__61023_61056 = null;
var count__61024_61057 = (0);
var i__61025_61058 = (0);
while(true){
if((i__61025_61058 < count__61024_61057)){
var req_61059 = cljs.core._nth.call(null,chunk__61023_61056,i__61025_61058);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_61059,prov);

var G__61060 = seq__61022_61055;
var G__61061 = chunk__61023_61056;
var G__61062 = count__61024_61057;
var G__61063 = (i__61025_61058 + (1));
seq__61022_61055 = G__61060;
chunk__61023_61056 = G__61061;
count__61024_61057 = G__61062;
i__61025_61058 = G__61063;
continue;
} else {
var temp__4657__auto___61064__$1 = cljs.core.seq.call(null,seq__61022_61055);
if(temp__4657__auto___61064__$1){
var seq__61022_61065__$1 = temp__4657__auto___61064__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61022_61065__$1)){
var c__34153__auto___61066 = cljs.core.chunk_first.call(null,seq__61022_61065__$1);
var G__61067 = cljs.core.chunk_rest.call(null,seq__61022_61065__$1);
var G__61068 = c__34153__auto___61066;
var G__61069 = cljs.core.count.call(null,c__34153__auto___61066);
var G__61070 = (0);
seq__61022_61055 = G__61067;
chunk__61023_61056 = G__61068;
count__61024_61057 = G__61069;
i__61025_61058 = G__61070;
continue;
} else {
var req_61071 = cljs.core.first.call(null,seq__61022_61065__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_61071,prov);

var G__61072 = cljs.core.next.call(null,seq__61022_61065__$1);
var G__61073 = null;
var G__61074 = (0);
var G__61075 = (0);
seq__61022_61055 = G__61072;
chunk__61023_61056 = G__61073;
count__61024_61057 = G__61074;
i__61025_61058 = G__61075;
continue;
}
} else {
}
}
break;
}

var G__61076 = cljs.core.next.call(null,seq__61014__$1);
var G__61077 = null;
var G__61078 = (0);
var G__61079 = (0);
seq__61014 = G__61076;
chunk__61015 = G__61077;
count__61016 = G__61078;
i__61017 = G__61079;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__61084_61088 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__61085_61089 = null;
var count__61086_61090 = (0);
var i__61087_61091 = (0);
while(true){
if((i__61087_61091 < count__61086_61090)){
var ns_61092 = cljs.core._nth.call(null,chunk__61085_61089,i__61087_61091);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_61092);

var G__61093 = seq__61084_61088;
var G__61094 = chunk__61085_61089;
var G__61095 = count__61086_61090;
var G__61096 = (i__61087_61091 + (1));
seq__61084_61088 = G__61093;
chunk__61085_61089 = G__61094;
count__61086_61090 = G__61095;
i__61087_61091 = G__61096;
continue;
} else {
var temp__4657__auto___61097 = cljs.core.seq.call(null,seq__61084_61088);
if(temp__4657__auto___61097){
var seq__61084_61098__$1 = temp__4657__auto___61097;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61084_61098__$1)){
var c__34153__auto___61099 = cljs.core.chunk_first.call(null,seq__61084_61098__$1);
var G__61100 = cljs.core.chunk_rest.call(null,seq__61084_61098__$1);
var G__61101 = c__34153__auto___61099;
var G__61102 = cljs.core.count.call(null,c__34153__auto___61099);
var G__61103 = (0);
seq__61084_61088 = G__61100;
chunk__61085_61089 = G__61101;
count__61086_61090 = G__61102;
i__61087_61091 = G__61103;
continue;
} else {
var ns_61104 = cljs.core.first.call(null,seq__61084_61098__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_61104);

var G__61105 = cljs.core.next.call(null,seq__61084_61098__$1);
var G__61106 = null;
var G__61107 = (0);
var G__61108 = (0);
seq__61084_61088 = G__61105;
chunk__61085_61089 = G__61106;
count__61086_61090 = G__61107;
i__61087_61091 = G__61108;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__33334__auto__ = goog.require__;
if(cljs.core.truth_(or__33334__auto__)){
return or__33334__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__61109__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__61109 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61110__i = 0, G__61110__a = new Array(arguments.length -  0);
while (G__61110__i < G__61110__a.length) {G__61110__a[G__61110__i] = arguments[G__61110__i + 0]; ++G__61110__i;}
  args = new cljs.core.IndexedSeq(G__61110__a,0);
} 
return G__61109__delegate.call(this,args);};
G__61109.cljs$lang$maxFixedArity = 0;
G__61109.cljs$lang$applyTo = (function (arglist__61111){
var args = cljs.core.seq(arglist__61111);
return G__61109__delegate(args);
});
G__61109.cljs$core$IFn$_invoke$arity$variadic = G__61109__delegate;
return G__61109;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__61113 = cljs.core._EQ_;
var expr__61114 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__61113.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__61114))){
var path_parts = ((function (pred__61113,expr__61114){
return (function (p1__61112_SHARP_){
return clojure.string.split.call(null,p1__61112_SHARP_,/[\/\\]/);
});})(pred__61113,expr__61114))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__61113,expr__61114){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e61116){if((e61116 instanceof Error)){
var e = e61116;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e61116;

}
}})());
});
;})(path_parts,sep,root,pred__61113,expr__61114))
} else {
if(cljs.core.truth_(pred__61113.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__61114))){
return ((function (pred__61113,expr__61114){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__61113,expr__61114){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__61113,expr__61114))
);

return deferred.addErrback(((function (deferred,pred__61113,expr__61114){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__61113,expr__61114))
);
});
;})(pred__61113,expr__61114))
} else {
return ((function (pred__61113,expr__61114){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__61113,expr__61114))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__61117,callback){
var map__61120 = p__61117;
var map__61120__$1 = ((((!((map__61120 == null)))?((((map__61120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61120.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61120):map__61120);
var file_msg = map__61120__$1;
var request_url = cljs.core.get.call(null,map__61120__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__61120,map__61120__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__61120,map__61120__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__39642__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39642__auto__){
return (function (){
var f__39643__auto__ = (function (){var switch__39530__auto__ = ((function (c__39642__auto__){
return (function (state_61144){
var state_val_61145 = (state_61144[(1)]);
if((state_val_61145 === (7))){
var inst_61140 = (state_61144[(2)]);
var state_61144__$1 = state_61144;
var statearr_61146_61166 = state_61144__$1;
(statearr_61146_61166[(2)] = inst_61140);

(statearr_61146_61166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61145 === (1))){
var state_61144__$1 = state_61144;
var statearr_61147_61167 = state_61144__$1;
(statearr_61147_61167[(2)] = null);

(statearr_61147_61167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61145 === (4))){
var inst_61124 = (state_61144[(7)]);
var inst_61124__$1 = (state_61144[(2)]);
var state_61144__$1 = (function (){var statearr_61148 = state_61144;
(statearr_61148[(7)] = inst_61124__$1);

return statearr_61148;
})();
if(cljs.core.truth_(inst_61124__$1)){
var statearr_61149_61168 = state_61144__$1;
(statearr_61149_61168[(1)] = (5));

} else {
var statearr_61150_61169 = state_61144__$1;
(statearr_61150_61169[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61145 === (6))){
var state_61144__$1 = state_61144;
var statearr_61151_61170 = state_61144__$1;
(statearr_61151_61170[(2)] = null);

(statearr_61151_61170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61145 === (3))){
var inst_61142 = (state_61144[(2)]);
var state_61144__$1 = state_61144;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61144__$1,inst_61142);
} else {
if((state_val_61145 === (2))){
var state_61144__$1 = state_61144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61144__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_61145 === (11))){
var inst_61136 = (state_61144[(2)]);
var state_61144__$1 = (function (){var statearr_61152 = state_61144;
(statearr_61152[(8)] = inst_61136);

return statearr_61152;
})();
var statearr_61153_61171 = state_61144__$1;
(statearr_61153_61171[(2)] = null);

(statearr_61153_61171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61145 === (9))){
var inst_61128 = (state_61144[(9)]);
var inst_61130 = (state_61144[(10)]);
var inst_61132 = inst_61130.call(null,inst_61128);
var state_61144__$1 = state_61144;
var statearr_61154_61172 = state_61144__$1;
(statearr_61154_61172[(2)] = inst_61132);

(statearr_61154_61172[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61145 === (5))){
var inst_61124 = (state_61144[(7)]);
var inst_61126 = figwheel.client.file_reloading.blocking_load.call(null,inst_61124);
var state_61144__$1 = state_61144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61144__$1,(8),inst_61126);
} else {
if((state_val_61145 === (10))){
var inst_61128 = (state_61144[(9)]);
var inst_61134 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_61128);
var state_61144__$1 = state_61144;
var statearr_61155_61173 = state_61144__$1;
(statearr_61155_61173[(2)] = inst_61134);

(statearr_61155_61173[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61145 === (8))){
var inst_61130 = (state_61144[(10)]);
var inst_61124 = (state_61144[(7)]);
var inst_61128 = (state_61144[(2)]);
var inst_61129 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_61130__$1 = cljs.core.get.call(null,inst_61129,inst_61124);
var state_61144__$1 = (function (){var statearr_61156 = state_61144;
(statearr_61156[(9)] = inst_61128);

(statearr_61156[(10)] = inst_61130__$1);

return statearr_61156;
})();
if(cljs.core.truth_(inst_61130__$1)){
var statearr_61157_61174 = state_61144__$1;
(statearr_61157_61174[(1)] = (9));

} else {
var statearr_61158_61175 = state_61144__$1;
(statearr_61158_61175[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__39642__auto__))
;
return ((function (switch__39530__auto__,c__39642__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__39531__auto__ = null;
var figwheel$client$file_reloading$state_machine__39531__auto____0 = (function (){
var statearr_61162 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_61162[(0)] = figwheel$client$file_reloading$state_machine__39531__auto__);

(statearr_61162[(1)] = (1));

return statearr_61162;
});
var figwheel$client$file_reloading$state_machine__39531__auto____1 = (function (state_61144){
while(true){
var ret_value__39532__auto__ = (function (){try{while(true){
var result__39533__auto__ = switch__39530__auto__.call(null,state_61144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39533__auto__;
}
break;
}
}catch (e61163){if((e61163 instanceof Object)){
var ex__39534__auto__ = e61163;
var statearr_61164_61176 = state_61144;
(statearr_61164_61176[(5)] = ex__39534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61177 = state_61144;
state_61144 = G__61177;
continue;
} else {
return ret_value__39532__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__39531__auto__ = function(state_61144){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__39531__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__39531__auto____1.call(this,state_61144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__39531__auto____0;
figwheel$client$file_reloading$state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__39531__auto____1;
return figwheel$client$file_reloading$state_machine__39531__auto__;
})()
;})(switch__39530__auto__,c__39642__auto__))
})();
var state__39644__auto__ = (function (){var statearr_61165 = f__39643__auto__.call(null);
(statearr_61165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39642__auto__);

return statearr_61165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39644__auto__);
});})(c__39642__auto__))
);

return c__39642__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__61178,callback){
var map__61181 = p__61178;
var map__61181__$1 = ((((!((map__61181 == null)))?((((map__61181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61181.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61181):map__61181);
var file_msg = map__61181__$1;
var namespace = cljs.core.get.call(null,map__61181__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__61181,map__61181__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__61181,map__61181__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__61183){
var map__61186 = p__61183;
var map__61186__$1 = ((((!((map__61186 == null)))?((((map__61186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61186.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61186):map__61186);
var file_msg = map__61186__$1;
var namespace = cljs.core.get.call(null,map__61186__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__33322__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__33322__auto__){
var or__33334__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__33334__auto__)){
return or__33334__auto__;
} else {
var or__33334__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__33334__auto____$1)){
return or__33334__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__33322__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__61188,callback){
var map__61191 = p__61188;
var map__61191__$1 = ((((!((map__61191 == null)))?((((map__61191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61191.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61191):map__61191);
var file_msg = map__61191__$1;
var request_url = cljs.core.get.call(null,map__61191__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__61191__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__39642__auto___61295 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39642__auto___61295,out){
return (function (){
var f__39643__auto__ = (function (){var switch__39530__auto__ = ((function (c__39642__auto___61295,out){
return (function (state_61277){
var state_val_61278 = (state_61277[(1)]);
if((state_val_61278 === (1))){
var inst_61251 = cljs.core.seq.call(null,files);
var inst_61252 = cljs.core.first.call(null,inst_61251);
var inst_61253 = cljs.core.next.call(null,inst_61251);
var inst_61254 = files;
var state_61277__$1 = (function (){var statearr_61279 = state_61277;
(statearr_61279[(7)] = inst_61254);

(statearr_61279[(8)] = inst_61253);

(statearr_61279[(9)] = inst_61252);

return statearr_61279;
})();
var statearr_61280_61296 = state_61277__$1;
(statearr_61280_61296[(2)] = null);

(statearr_61280_61296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61278 === (2))){
var inst_61254 = (state_61277[(7)]);
var inst_61260 = (state_61277[(10)]);
var inst_61259 = cljs.core.seq.call(null,inst_61254);
var inst_61260__$1 = cljs.core.first.call(null,inst_61259);
var inst_61261 = cljs.core.next.call(null,inst_61259);
var inst_61262 = (inst_61260__$1 == null);
var inst_61263 = cljs.core.not.call(null,inst_61262);
var state_61277__$1 = (function (){var statearr_61281 = state_61277;
(statearr_61281[(11)] = inst_61261);

(statearr_61281[(10)] = inst_61260__$1);

return statearr_61281;
})();
if(inst_61263){
var statearr_61282_61297 = state_61277__$1;
(statearr_61282_61297[(1)] = (4));

} else {
var statearr_61283_61298 = state_61277__$1;
(statearr_61283_61298[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61278 === (3))){
var inst_61275 = (state_61277[(2)]);
var state_61277__$1 = state_61277;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61277__$1,inst_61275);
} else {
if((state_val_61278 === (4))){
var inst_61260 = (state_61277[(10)]);
var inst_61265 = figwheel.client.file_reloading.reload_js_file.call(null,inst_61260);
var state_61277__$1 = state_61277;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61277__$1,(7),inst_61265);
} else {
if((state_val_61278 === (5))){
var inst_61271 = cljs.core.async.close_BANG_.call(null,out);
var state_61277__$1 = state_61277;
var statearr_61284_61299 = state_61277__$1;
(statearr_61284_61299[(2)] = inst_61271);

(statearr_61284_61299[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61278 === (6))){
var inst_61273 = (state_61277[(2)]);
var state_61277__$1 = state_61277;
var statearr_61285_61300 = state_61277__$1;
(statearr_61285_61300[(2)] = inst_61273);

(statearr_61285_61300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61278 === (7))){
var inst_61261 = (state_61277[(11)]);
var inst_61267 = (state_61277[(2)]);
var inst_61268 = cljs.core.async.put_BANG_.call(null,out,inst_61267);
var inst_61254 = inst_61261;
var state_61277__$1 = (function (){var statearr_61286 = state_61277;
(statearr_61286[(7)] = inst_61254);

(statearr_61286[(12)] = inst_61268);

return statearr_61286;
})();
var statearr_61287_61301 = state_61277__$1;
(statearr_61287_61301[(2)] = null);

(statearr_61287_61301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__39642__auto___61295,out))
;
return ((function (switch__39530__auto__,c__39642__auto___61295,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__39531__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__39531__auto____0 = (function (){
var statearr_61291 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61291[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__39531__auto__);

(statearr_61291[(1)] = (1));

return statearr_61291;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__39531__auto____1 = (function (state_61277){
while(true){
var ret_value__39532__auto__ = (function (){try{while(true){
var result__39533__auto__ = switch__39530__auto__.call(null,state_61277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39533__auto__;
}
break;
}
}catch (e61292){if((e61292 instanceof Object)){
var ex__39534__auto__ = e61292;
var statearr_61293_61302 = state_61277;
(statearr_61293_61302[(5)] = ex__39534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61292;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61303 = state_61277;
state_61277 = G__61303;
continue;
} else {
return ret_value__39532__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__39531__auto__ = function(state_61277){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__39531__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__39531__auto____1.call(this,state_61277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__39531__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__39531__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__39531__auto__;
})()
;})(switch__39530__auto__,c__39642__auto___61295,out))
})();
var state__39644__auto__ = (function (){var statearr_61294 = f__39643__auto__.call(null);
(statearr_61294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39642__auto___61295);

return statearr_61294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39644__auto__);
});})(c__39642__auto___61295,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__61304,opts){
var map__61308 = p__61304;
var map__61308__$1 = ((((!((map__61308 == null)))?((((map__61308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61308.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61308):map__61308);
var eval_body = cljs.core.get.call(null,map__61308__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__61308__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__33322__auto__ = eval_body;
if(cljs.core.truth_(and__33322__auto__)){
return typeof eval_body === 'string';
} else {
return and__33322__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e61310){var e = e61310;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__61311_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__61311_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__61320){
var vec__61321 = p__61320;
var k = cljs.core.nth.call(null,vec__61321,(0),null);
var v = cljs.core.nth.call(null,vec__61321,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__61324){
var vec__61325 = p__61324;
var k = cljs.core.nth.call(null,vec__61325,(0),null);
var v = cljs.core.nth.call(null,vec__61325,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__61331,p__61332){
var map__61580 = p__61331;
var map__61580__$1 = ((((!((map__61580 == null)))?((((map__61580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61580.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61580):map__61580);
var opts = map__61580__$1;
var before_jsload = cljs.core.get.call(null,map__61580__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__61580__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__61580__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__61581 = p__61332;
var map__61581__$1 = ((((!((map__61581 == null)))?((((map__61581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61581.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61581):map__61581);
var msg = map__61581__$1;
var files = cljs.core.get.call(null,map__61581__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__61581__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__61581__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__39642__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39642__auto__,map__61580,map__61580__$1,opts,before_jsload,on_jsload,reload_dependents,map__61581,map__61581__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__39643__auto__ = (function (){var switch__39530__auto__ = ((function (c__39642__auto__,map__61580,map__61580__$1,opts,before_jsload,on_jsload,reload_dependents,map__61581,map__61581__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_61735){
var state_val_61736 = (state_61735[(1)]);
if((state_val_61736 === (7))){
var inst_61595 = (state_61735[(7)]);
var inst_61598 = (state_61735[(8)]);
var inst_61596 = (state_61735[(9)]);
var inst_61597 = (state_61735[(10)]);
var inst_61603 = cljs.core._nth.call(null,inst_61596,inst_61598);
var inst_61604 = figwheel.client.file_reloading.eval_body.call(null,inst_61603,opts);
var inst_61605 = (inst_61598 + (1));
var tmp61737 = inst_61595;
var tmp61738 = inst_61596;
var tmp61739 = inst_61597;
var inst_61595__$1 = tmp61737;
var inst_61596__$1 = tmp61738;
var inst_61597__$1 = tmp61739;
var inst_61598__$1 = inst_61605;
var state_61735__$1 = (function (){var statearr_61740 = state_61735;
(statearr_61740[(7)] = inst_61595__$1);

(statearr_61740[(8)] = inst_61598__$1);

(statearr_61740[(11)] = inst_61604);

(statearr_61740[(9)] = inst_61596__$1);

(statearr_61740[(10)] = inst_61597__$1);

return statearr_61740;
})();
var statearr_61741_61827 = state_61735__$1;
(statearr_61741_61827[(2)] = null);

(statearr_61741_61827[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (20))){
var inst_61638 = (state_61735[(12)]);
var inst_61646 = figwheel.client.file_reloading.sort_files.call(null,inst_61638);
var state_61735__$1 = state_61735;
var statearr_61742_61828 = state_61735__$1;
(statearr_61742_61828[(2)] = inst_61646);

(statearr_61742_61828[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (27))){
var state_61735__$1 = state_61735;
var statearr_61743_61829 = state_61735__$1;
(statearr_61743_61829[(2)] = null);

(statearr_61743_61829[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (1))){
var inst_61587 = (state_61735[(13)]);
var inst_61584 = before_jsload.call(null,files);
var inst_61585 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_61586 = (function (){return ((function (inst_61587,inst_61584,inst_61585,state_val_61736,c__39642__auto__,map__61580,map__61580__$1,opts,before_jsload,on_jsload,reload_dependents,map__61581,map__61581__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__61328_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__61328_SHARP_);
});
;})(inst_61587,inst_61584,inst_61585,state_val_61736,c__39642__auto__,map__61580,map__61580__$1,opts,before_jsload,on_jsload,reload_dependents,map__61581,map__61581__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_61587__$1 = cljs.core.filter.call(null,inst_61586,files);
var inst_61588 = cljs.core.not_empty.call(null,inst_61587__$1);
var state_61735__$1 = (function (){var statearr_61744 = state_61735;
(statearr_61744[(13)] = inst_61587__$1);

(statearr_61744[(14)] = inst_61585);

(statearr_61744[(15)] = inst_61584);

return statearr_61744;
})();
if(cljs.core.truth_(inst_61588)){
var statearr_61745_61830 = state_61735__$1;
(statearr_61745_61830[(1)] = (2));

} else {
var statearr_61746_61831 = state_61735__$1;
(statearr_61746_61831[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (24))){
var state_61735__$1 = state_61735;
var statearr_61747_61832 = state_61735__$1;
(statearr_61747_61832[(2)] = null);

(statearr_61747_61832[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (39))){
var inst_61688 = (state_61735[(16)]);
var state_61735__$1 = state_61735;
var statearr_61748_61833 = state_61735__$1;
(statearr_61748_61833[(2)] = inst_61688);

(statearr_61748_61833[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (46))){
var inst_61730 = (state_61735[(2)]);
var state_61735__$1 = state_61735;
var statearr_61749_61834 = state_61735__$1;
(statearr_61749_61834[(2)] = inst_61730);

(statearr_61749_61834[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (4))){
var inst_61632 = (state_61735[(2)]);
var inst_61633 = cljs.core.List.EMPTY;
var inst_61634 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_61633);
var inst_61635 = (function (){return ((function (inst_61632,inst_61633,inst_61634,state_val_61736,c__39642__auto__,map__61580,map__61580__$1,opts,before_jsload,on_jsload,reload_dependents,map__61581,map__61581__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__61329_SHARP_){
var and__33322__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__61329_SHARP_);
if(cljs.core.truth_(and__33322__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__61329_SHARP_));
} else {
return and__33322__auto__;
}
});
;})(inst_61632,inst_61633,inst_61634,state_val_61736,c__39642__auto__,map__61580,map__61580__$1,opts,before_jsload,on_jsload,reload_dependents,map__61581,map__61581__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_61636 = cljs.core.filter.call(null,inst_61635,files);
var inst_61637 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_61638 = cljs.core.concat.call(null,inst_61636,inst_61637);
var state_61735__$1 = (function (){var statearr_61750 = state_61735;
(statearr_61750[(12)] = inst_61638);

(statearr_61750[(17)] = inst_61634);

(statearr_61750[(18)] = inst_61632);

return statearr_61750;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_61751_61835 = state_61735__$1;
(statearr_61751_61835[(1)] = (16));

} else {
var statearr_61752_61836 = state_61735__$1;
(statearr_61752_61836[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (15))){
var inst_61622 = (state_61735[(2)]);
var state_61735__$1 = state_61735;
var statearr_61753_61837 = state_61735__$1;
(statearr_61753_61837[(2)] = inst_61622);

(statearr_61753_61837[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (21))){
var inst_61648 = (state_61735[(19)]);
var inst_61648__$1 = (state_61735[(2)]);
var inst_61649 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_61648__$1);
var state_61735__$1 = (function (){var statearr_61754 = state_61735;
(statearr_61754[(19)] = inst_61648__$1);

return statearr_61754;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61735__$1,(22),inst_61649);
} else {
if((state_val_61736 === (31))){
var inst_61733 = (state_61735[(2)]);
var state_61735__$1 = state_61735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61735__$1,inst_61733);
} else {
if((state_val_61736 === (32))){
var inst_61688 = (state_61735[(16)]);
var inst_61693 = inst_61688.cljs$lang$protocol_mask$partition0$;
var inst_61694 = (inst_61693 & (64));
var inst_61695 = inst_61688.cljs$core$ISeq$;
var inst_61696 = (cljs.core.PROTOCOL_SENTINEL === inst_61695);
var inst_61697 = (inst_61694) || (inst_61696);
var state_61735__$1 = state_61735;
if(cljs.core.truth_(inst_61697)){
var statearr_61755_61838 = state_61735__$1;
(statearr_61755_61838[(1)] = (35));

} else {
var statearr_61756_61839 = state_61735__$1;
(statearr_61756_61839[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (40))){
var inst_61710 = (state_61735[(20)]);
var inst_61709 = (state_61735[(2)]);
var inst_61710__$1 = cljs.core.get.call(null,inst_61709,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_61711 = cljs.core.get.call(null,inst_61709,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_61712 = cljs.core.not_empty.call(null,inst_61710__$1);
var state_61735__$1 = (function (){var statearr_61757 = state_61735;
(statearr_61757[(21)] = inst_61711);

(statearr_61757[(20)] = inst_61710__$1);

return statearr_61757;
})();
if(cljs.core.truth_(inst_61712)){
var statearr_61758_61840 = state_61735__$1;
(statearr_61758_61840[(1)] = (41));

} else {
var statearr_61759_61841 = state_61735__$1;
(statearr_61759_61841[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (33))){
var state_61735__$1 = state_61735;
var statearr_61760_61842 = state_61735__$1;
(statearr_61760_61842[(2)] = false);

(statearr_61760_61842[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (13))){
var inst_61608 = (state_61735[(22)]);
var inst_61612 = cljs.core.chunk_first.call(null,inst_61608);
var inst_61613 = cljs.core.chunk_rest.call(null,inst_61608);
var inst_61614 = cljs.core.count.call(null,inst_61612);
var inst_61595 = inst_61613;
var inst_61596 = inst_61612;
var inst_61597 = inst_61614;
var inst_61598 = (0);
var state_61735__$1 = (function (){var statearr_61761 = state_61735;
(statearr_61761[(7)] = inst_61595);

(statearr_61761[(8)] = inst_61598);

(statearr_61761[(9)] = inst_61596);

(statearr_61761[(10)] = inst_61597);

return statearr_61761;
})();
var statearr_61762_61843 = state_61735__$1;
(statearr_61762_61843[(2)] = null);

(statearr_61762_61843[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (22))){
var inst_61651 = (state_61735[(23)]);
var inst_61652 = (state_61735[(24)]);
var inst_61656 = (state_61735[(25)]);
var inst_61648 = (state_61735[(19)]);
var inst_61651__$1 = (state_61735[(2)]);
var inst_61652__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_61651__$1);
var inst_61653 = (function (){var all_files = inst_61648;
var res_SINGLEQUOTE_ = inst_61651__$1;
var res = inst_61652__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_61651,inst_61652,inst_61656,inst_61648,inst_61651__$1,inst_61652__$1,state_val_61736,c__39642__auto__,map__61580,map__61580__$1,opts,before_jsload,on_jsload,reload_dependents,map__61581,map__61581__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__61330_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__61330_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_61651,inst_61652,inst_61656,inst_61648,inst_61651__$1,inst_61652__$1,state_val_61736,c__39642__auto__,map__61580,map__61580__$1,opts,before_jsload,on_jsload,reload_dependents,map__61581,map__61581__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_61654 = cljs.core.filter.call(null,inst_61653,inst_61651__$1);
var inst_61655 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_61656__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_61655);
var inst_61657 = cljs.core.not_empty.call(null,inst_61656__$1);
var state_61735__$1 = (function (){var statearr_61763 = state_61735;
(statearr_61763[(23)] = inst_61651__$1);

(statearr_61763[(24)] = inst_61652__$1);

(statearr_61763[(25)] = inst_61656__$1);

(statearr_61763[(26)] = inst_61654);

return statearr_61763;
})();
if(cljs.core.truth_(inst_61657)){
var statearr_61764_61844 = state_61735__$1;
(statearr_61764_61844[(1)] = (23));

} else {
var statearr_61765_61845 = state_61735__$1;
(statearr_61765_61845[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (36))){
var state_61735__$1 = state_61735;
var statearr_61766_61846 = state_61735__$1;
(statearr_61766_61846[(2)] = false);

(statearr_61766_61846[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (41))){
var inst_61710 = (state_61735[(20)]);
var inst_61714 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_61715 = cljs.core.map.call(null,inst_61714,inst_61710);
var inst_61716 = cljs.core.pr_str.call(null,inst_61715);
var inst_61717 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_61716)].join('');
var inst_61718 = figwheel.client.utils.log.call(null,inst_61717);
var state_61735__$1 = state_61735;
var statearr_61767_61847 = state_61735__$1;
(statearr_61767_61847[(2)] = inst_61718);

(statearr_61767_61847[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (43))){
var inst_61711 = (state_61735[(21)]);
var inst_61721 = (state_61735[(2)]);
var inst_61722 = cljs.core.not_empty.call(null,inst_61711);
var state_61735__$1 = (function (){var statearr_61768 = state_61735;
(statearr_61768[(27)] = inst_61721);

return statearr_61768;
})();
if(cljs.core.truth_(inst_61722)){
var statearr_61769_61848 = state_61735__$1;
(statearr_61769_61848[(1)] = (44));

} else {
var statearr_61770_61849 = state_61735__$1;
(statearr_61770_61849[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (29))){
var inst_61651 = (state_61735[(23)]);
var inst_61652 = (state_61735[(24)]);
var inst_61656 = (state_61735[(25)]);
var inst_61688 = (state_61735[(16)]);
var inst_61654 = (state_61735[(26)]);
var inst_61648 = (state_61735[(19)]);
var inst_61684 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_61687 = (function (){var all_files = inst_61648;
var res_SINGLEQUOTE_ = inst_61651;
var res = inst_61652;
var files_not_loaded = inst_61654;
var dependencies_that_loaded = inst_61656;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_61651,inst_61652,inst_61656,inst_61688,inst_61654,inst_61648,inst_61684,state_val_61736,c__39642__auto__,map__61580,map__61580__$1,opts,before_jsload,on_jsload,reload_dependents,map__61581,map__61581__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__61686){
var map__61771 = p__61686;
var map__61771__$1 = ((((!((map__61771 == null)))?((((map__61771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61771.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61771):map__61771);
var namespace = cljs.core.get.call(null,map__61771__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_61651,inst_61652,inst_61656,inst_61688,inst_61654,inst_61648,inst_61684,state_val_61736,c__39642__auto__,map__61580,map__61580__$1,opts,before_jsload,on_jsload,reload_dependents,map__61581,map__61581__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_61688__$1 = cljs.core.group_by.call(null,inst_61687,inst_61654);
var inst_61690 = (inst_61688__$1 == null);
var inst_61691 = cljs.core.not.call(null,inst_61690);
var state_61735__$1 = (function (){var statearr_61773 = state_61735;
(statearr_61773[(16)] = inst_61688__$1);

(statearr_61773[(28)] = inst_61684);

return statearr_61773;
})();
if(inst_61691){
var statearr_61774_61850 = state_61735__$1;
(statearr_61774_61850[(1)] = (32));

} else {
var statearr_61775_61851 = state_61735__$1;
(statearr_61775_61851[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (44))){
var inst_61711 = (state_61735[(21)]);
var inst_61724 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_61711);
var inst_61725 = cljs.core.pr_str.call(null,inst_61724);
var inst_61726 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_61725)].join('');
var inst_61727 = figwheel.client.utils.log.call(null,inst_61726);
var state_61735__$1 = state_61735;
var statearr_61776_61852 = state_61735__$1;
(statearr_61776_61852[(2)] = inst_61727);

(statearr_61776_61852[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (6))){
var inst_61629 = (state_61735[(2)]);
var state_61735__$1 = state_61735;
var statearr_61777_61853 = state_61735__$1;
(statearr_61777_61853[(2)] = inst_61629);

(statearr_61777_61853[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (28))){
var inst_61654 = (state_61735[(26)]);
var inst_61681 = (state_61735[(2)]);
var inst_61682 = cljs.core.not_empty.call(null,inst_61654);
var state_61735__$1 = (function (){var statearr_61778 = state_61735;
(statearr_61778[(29)] = inst_61681);

return statearr_61778;
})();
if(cljs.core.truth_(inst_61682)){
var statearr_61779_61854 = state_61735__$1;
(statearr_61779_61854[(1)] = (29));

} else {
var statearr_61780_61855 = state_61735__$1;
(statearr_61780_61855[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (25))){
var inst_61652 = (state_61735[(24)]);
var inst_61668 = (state_61735[(2)]);
var inst_61669 = cljs.core.not_empty.call(null,inst_61652);
var state_61735__$1 = (function (){var statearr_61781 = state_61735;
(statearr_61781[(30)] = inst_61668);

return statearr_61781;
})();
if(cljs.core.truth_(inst_61669)){
var statearr_61782_61856 = state_61735__$1;
(statearr_61782_61856[(1)] = (26));

} else {
var statearr_61783_61857 = state_61735__$1;
(statearr_61783_61857[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (34))){
var inst_61704 = (state_61735[(2)]);
var state_61735__$1 = state_61735;
if(cljs.core.truth_(inst_61704)){
var statearr_61784_61858 = state_61735__$1;
(statearr_61784_61858[(1)] = (38));

} else {
var statearr_61785_61859 = state_61735__$1;
(statearr_61785_61859[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (17))){
var state_61735__$1 = state_61735;
var statearr_61786_61860 = state_61735__$1;
(statearr_61786_61860[(2)] = recompile_dependents);

(statearr_61786_61860[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (3))){
var state_61735__$1 = state_61735;
var statearr_61787_61861 = state_61735__$1;
(statearr_61787_61861[(2)] = null);

(statearr_61787_61861[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (12))){
var inst_61625 = (state_61735[(2)]);
var state_61735__$1 = state_61735;
var statearr_61788_61862 = state_61735__$1;
(statearr_61788_61862[(2)] = inst_61625);

(statearr_61788_61862[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (2))){
var inst_61587 = (state_61735[(13)]);
var inst_61594 = cljs.core.seq.call(null,inst_61587);
var inst_61595 = inst_61594;
var inst_61596 = null;
var inst_61597 = (0);
var inst_61598 = (0);
var state_61735__$1 = (function (){var statearr_61789 = state_61735;
(statearr_61789[(7)] = inst_61595);

(statearr_61789[(8)] = inst_61598);

(statearr_61789[(9)] = inst_61596);

(statearr_61789[(10)] = inst_61597);

return statearr_61789;
})();
var statearr_61790_61863 = state_61735__$1;
(statearr_61790_61863[(2)] = null);

(statearr_61790_61863[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (23))){
var inst_61651 = (state_61735[(23)]);
var inst_61652 = (state_61735[(24)]);
var inst_61656 = (state_61735[(25)]);
var inst_61654 = (state_61735[(26)]);
var inst_61648 = (state_61735[(19)]);
var inst_61659 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_61661 = (function (){var all_files = inst_61648;
var res_SINGLEQUOTE_ = inst_61651;
var res = inst_61652;
var files_not_loaded = inst_61654;
var dependencies_that_loaded = inst_61656;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_61651,inst_61652,inst_61656,inst_61654,inst_61648,inst_61659,state_val_61736,c__39642__auto__,map__61580,map__61580__$1,opts,before_jsload,on_jsload,reload_dependents,map__61581,map__61581__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__61660){
var map__61791 = p__61660;
var map__61791__$1 = ((((!((map__61791 == null)))?((((map__61791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61791.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61791):map__61791);
var request_url = cljs.core.get.call(null,map__61791__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_61651,inst_61652,inst_61656,inst_61654,inst_61648,inst_61659,state_val_61736,c__39642__auto__,map__61580,map__61580__$1,opts,before_jsload,on_jsload,reload_dependents,map__61581,map__61581__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_61662 = cljs.core.reverse.call(null,inst_61656);
var inst_61663 = cljs.core.map.call(null,inst_61661,inst_61662);
var inst_61664 = cljs.core.pr_str.call(null,inst_61663);
var inst_61665 = figwheel.client.utils.log.call(null,inst_61664);
var state_61735__$1 = (function (){var statearr_61793 = state_61735;
(statearr_61793[(31)] = inst_61659);

return statearr_61793;
})();
var statearr_61794_61864 = state_61735__$1;
(statearr_61794_61864[(2)] = inst_61665);

(statearr_61794_61864[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (35))){
var state_61735__$1 = state_61735;
var statearr_61795_61865 = state_61735__$1;
(statearr_61795_61865[(2)] = true);

(statearr_61795_61865[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (19))){
var inst_61638 = (state_61735[(12)]);
var inst_61644 = figwheel.client.file_reloading.expand_files.call(null,inst_61638);
var state_61735__$1 = state_61735;
var statearr_61796_61866 = state_61735__$1;
(statearr_61796_61866[(2)] = inst_61644);

(statearr_61796_61866[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (11))){
var state_61735__$1 = state_61735;
var statearr_61797_61867 = state_61735__$1;
(statearr_61797_61867[(2)] = null);

(statearr_61797_61867[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (9))){
var inst_61627 = (state_61735[(2)]);
var state_61735__$1 = state_61735;
var statearr_61798_61868 = state_61735__$1;
(statearr_61798_61868[(2)] = inst_61627);

(statearr_61798_61868[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (5))){
var inst_61598 = (state_61735[(8)]);
var inst_61597 = (state_61735[(10)]);
var inst_61600 = (inst_61598 < inst_61597);
var inst_61601 = inst_61600;
var state_61735__$1 = state_61735;
if(cljs.core.truth_(inst_61601)){
var statearr_61799_61869 = state_61735__$1;
(statearr_61799_61869[(1)] = (7));

} else {
var statearr_61800_61870 = state_61735__$1;
(statearr_61800_61870[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (14))){
var inst_61608 = (state_61735[(22)]);
var inst_61617 = cljs.core.first.call(null,inst_61608);
var inst_61618 = figwheel.client.file_reloading.eval_body.call(null,inst_61617,opts);
var inst_61619 = cljs.core.next.call(null,inst_61608);
var inst_61595 = inst_61619;
var inst_61596 = null;
var inst_61597 = (0);
var inst_61598 = (0);
var state_61735__$1 = (function (){var statearr_61801 = state_61735;
(statearr_61801[(32)] = inst_61618);

(statearr_61801[(7)] = inst_61595);

(statearr_61801[(8)] = inst_61598);

(statearr_61801[(9)] = inst_61596);

(statearr_61801[(10)] = inst_61597);

return statearr_61801;
})();
var statearr_61802_61871 = state_61735__$1;
(statearr_61802_61871[(2)] = null);

(statearr_61802_61871[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (45))){
var state_61735__$1 = state_61735;
var statearr_61803_61872 = state_61735__$1;
(statearr_61803_61872[(2)] = null);

(statearr_61803_61872[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (26))){
var inst_61651 = (state_61735[(23)]);
var inst_61652 = (state_61735[(24)]);
var inst_61656 = (state_61735[(25)]);
var inst_61654 = (state_61735[(26)]);
var inst_61648 = (state_61735[(19)]);
var inst_61671 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_61673 = (function (){var all_files = inst_61648;
var res_SINGLEQUOTE_ = inst_61651;
var res = inst_61652;
var files_not_loaded = inst_61654;
var dependencies_that_loaded = inst_61656;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_61651,inst_61652,inst_61656,inst_61654,inst_61648,inst_61671,state_val_61736,c__39642__auto__,map__61580,map__61580__$1,opts,before_jsload,on_jsload,reload_dependents,map__61581,map__61581__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__61672){
var map__61804 = p__61672;
var map__61804__$1 = ((((!((map__61804 == null)))?((((map__61804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61804.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61804):map__61804);
var namespace = cljs.core.get.call(null,map__61804__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__61804__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_61651,inst_61652,inst_61656,inst_61654,inst_61648,inst_61671,state_val_61736,c__39642__auto__,map__61580,map__61580__$1,opts,before_jsload,on_jsload,reload_dependents,map__61581,map__61581__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_61674 = cljs.core.map.call(null,inst_61673,inst_61652);
var inst_61675 = cljs.core.pr_str.call(null,inst_61674);
var inst_61676 = figwheel.client.utils.log.call(null,inst_61675);
var inst_61677 = (function (){var all_files = inst_61648;
var res_SINGLEQUOTE_ = inst_61651;
var res = inst_61652;
var files_not_loaded = inst_61654;
var dependencies_that_loaded = inst_61656;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_61651,inst_61652,inst_61656,inst_61654,inst_61648,inst_61671,inst_61673,inst_61674,inst_61675,inst_61676,state_val_61736,c__39642__auto__,map__61580,map__61580__$1,opts,before_jsload,on_jsload,reload_dependents,map__61581,map__61581__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_61651,inst_61652,inst_61656,inst_61654,inst_61648,inst_61671,inst_61673,inst_61674,inst_61675,inst_61676,state_val_61736,c__39642__auto__,map__61580,map__61580__$1,opts,before_jsload,on_jsload,reload_dependents,map__61581,map__61581__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_61678 = setTimeout(inst_61677,(10));
var state_61735__$1 = (function (){var statearr_61806 = state_61735;
(statearr_61806[(33)] = inst_61671);

(statearr_61806[(34)] = inst_61676);

return statearr_61806;
})();
var statearr_61807_61873 = state_61735__$1;
(statearr_61807_61873[(2)] = inst_61678);

(statearr_61807_61873[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (16))){
var state_61735__$1 = state_61735;
var statearr_61808_61874 = state_61735__$1;
(statearr_61808_61874[(2)] = reload_dependents);

(statearr_61808_61874[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (38))){
var inst_61688 = (state_61735[(16)]);
var inst_61706 = cljs.core.apply.call(null,cljs.core.hash_map,inst_61688);
var state_61735__$1 = state_61735;
var statearr_61809_61875 = state_61735__$1;
(statearr_61809_61875[(2)] = inst_61706);

(statearr_61809_61875[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (30))){
var state_61735__$1 = state_61735;
var statearr_61810_61876 = state_61735__$1;
(statearr_61810_61876[(2)] = null);

(statearr_61810_61876[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (10))){
var inst_61608 = (state_61735[(22)]);
var inst_61610 = cljs.core.chunked_seq_QMARK_.call(null,inst_61608);
var state_61735__$1 = state_61735;
if(inst_61610){
var statearr_61811_61877 = state_61735__$1;
(statearr_61811_61877[(1)] = (13));

} else {
var statearr_61812_61878 = state_61735__$1;
(statearr_61812_61878[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (18))){
var inst_61642 = (state_61735[(2)]);
var state_61735__$1 = state_61735;
if(cljs.core.truth_(inst_61642)){
var statearr_61813_61879 = state_61735__$1;
(statearr_61813_61879[(1)] = (19));

} else {
var statearr_61814_61880 = state_61735__$1;
(statearr_61814_61880[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (42))){
var state_61735__$1 = state_61735;
var statearr_61815_61881 = state_61735__$1;
(statearr_61815_61881[(2)] = null);

(statearr_61815_61881[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (37))){
var inst_61701 = (state_61735[(2)]);
var state_61735__$1 = state_61735;
var statearr_61816_61882 = state_61735__$1;
(statearr_61816_61882[(2)] = inst_61701);

(statearr_61816_61882[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61736 === (8))){
var inst_61608 = (state_61735[(22)]);
var inst_61595 = (state_61735[(7)]);
var inst_61608__$1 = cljs.core.seq.call(null,inst_61595);
var state_61735__$1 = (function (){var statearr_61817 = state_61735;
(statearr_61817[(22)] = inst_61608__$1);

return statearr_61817;
})();
if(inst_61608__$1){
var statearr_61818_61883 = state_61735__$1;
(statearr_61818_61883[(1)] = (10));

} else {
var statearr_61819_61884 = state_61735__$1;
(statearr_61819_61884[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__39642__auto__,map__61580,map__61580__$1,opts,before_jsload,on_jsload,reload_dependents,map__61581,map__61581__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__39530__auto__,c__39642__auto__,map__61580,map__61580__$1,opts,before_jsload,on_jsload,reload_dependents,map__61581,map__61581__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__39531__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__39531__auto____0 = (function (){
var statearr_61823 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61823[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__39531__auto__);

(statearr_61823[(1)] = (1));

return statearr_61823;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__39531__auto____1 = (function (state_61735){
while(true){
var ret_value__39532__auto__ = (function (){try{while(true){
var result__39533__auto__ = switch__39530__auto__.call(null,state_61735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39533__auto__;
}
break;
}
}catch (e61824){if((e61824 instanceof Object)){
var ex__39534__auto__ = e61824;
var statearr_61825_61885 = state_61735;
(statearr_61825_61885[(5)] = ex__39534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61886 = state_61735;
state_61735 = G__61886;
continue;
} else {
return ret_value__39532__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__39531__auto__ = function(state_61735){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__39531__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__39531__auto____1.call(this,state_61735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__39531__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__39531__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__39531__auto__;
})()
;})(switch__39530__auto__,c__39642__auto__,map__61580,map__61580__$1,opts,before_jsload,on_jsload,reload_dependents,map__61581,map__61581__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__39644__auto__ = (function (){var statearr_61826 = f__39643__auto__.call(null);
(statearr_61826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39642__auto__);

return statearr_61826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39644__auto__);
});})(c__39642__auto__,map__61580,map__61580__$1,opts,before_jsload,on_jsload,reload_dependents,map__61581,map__61581__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__39642__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__61889,link){
var map__61892 = p__61889;
var map__61892__$1 = ((((!((map__61892 == null)))?((((map__61892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61892.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61892):map__61892);
var file = cljs.core.get.call(null,map__61892__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__61892,map__61892__$1,file){
return (function (p1__61887_SHARP_,p2__61888_SHARP_){
if(cljs.core._EQ_.call(null,p1__61887_SHARP_,p2__61888_SHARP_)){
return p1__61887_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__61892,map__61892__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__61898){
var map__61899 = p__61898;
var map__61899__$1 = ((((!((map__61899 == null)))?((((map__61899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61899.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61899):map__61899);
var match_length = cljs.core.get.call(null,map__61899__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__61899__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__61894_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__61894_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args61901 = [];
var len__34447__auto___61904 = arguments.length;
var i__34448__auto___61905 = (0);
while(true){
if((i__34448__auto___61905 < len__34447__auto___61904)){
args61901.push((arguments[i__34448__auto___61905]));

var G__61906 = (i__34448__auto___61905 + (1));
i__34448__auto___61905 = G__61906;
continue;
} else {
}
break;
}

var G__61903 = args61901.length;
switch (G__61903) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args61901.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__61908_SHARP_,p2__61909_SHARP_){
return cljs.core.assoc.call(null,p1__61908_SHARP_,cljs.core.get.call(null,p2__61909_SHARP_,key),p2__61909_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__61910){
var map__61913 = p__61910;
var map__61913__$1 = ((((!((map__61913 == null)))?((((map__61913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61913.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61913):map__61913);
var f_data = map__61913__$1;
var file = cljs.core.get.call(null,map__61913__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__61915,p__61916){
var map__61925 = p__61915;
var map__61925__$1 = ((((!((map__61925 == null)))?((((map__61925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61925.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61925):map__61925);
var opts = map__61925__$1;
var on_cssload = cljs.core.get.call(null,map__61925__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__61926 = p__61916;
var map__61926__$1 = ((((!((map__61926 == null)))?((((map__61926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61926.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61926):map__61926);
var files_msg = map__61926__$1;
var files = cljs.core.get.call(null,map__61926__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__61929_61933 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__61930_61934 = null;
var count__61931_61935 = (0);
var i__61932_61936 = (0);
while(true){
if((i__61932_61936 < count__61931_61935)){
var f_61937 = cljs.core._nth.call(null,chunk__61930_61934,i__61932_61936);
figwheel.client.file_reloading.reload_css_file.call(null,f_61937);

var G__61938 = seq__61929_61933;
var G__61939 = chunk__61930_61934;
var G__61940 = count__61931_61935;
var G__61941 = (i__61932_61936 + (1));
seq__61929_61933 = G__61938;
chunk__61930_61934 = G__61939;
count__61931_61935 = G__61940;
i__61932_61936 = G__61941;
continue;
} else {
var temp__4657__auto___61942 = cljs.core.seq.call(null,seq__61929_61933);
if(temp__4657__auto___61942){
var seq__61929_61943__$1 = temp__4657__auto___61942;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61929_61943__$1)){
var c__34153__auto___61944 = cljs.core.chunk_first.call(null,seq__61929_61943__$1);
var G__61945 = cljs.core.chunk_rest.call(null,seq__61929_61943__$1);
var G__61946 = c__34153__auto___61944;
var G__61947 = cljs.core.count.call(null,c__34153__auto___61944);
var G__61948 = (0);
seq__61929_61933 = G__61945;
chunk__61930_61934 = G__61946;
count__61931_61935 = G__61947;
i__61932_61936 = G__61948;
continue;
} else {
var f_61949 = cljs.core.first.call(null,seq__61929_61943__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_61949);

var G__61950 = cljs.core.next.call(null,seq__61929_61943__$1);
var G__61951 = null;
var G__61952 = (0);
var G__61953 = (0);
seq__61929_61933 = G__61950;
chunk__61930_61934 = G__61951;
count__61931_61935 = G__61952;
i__61932_61936 = G__61953;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__61925,map__61925__$1,opts,on_cssload,map__61926,map__61926__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__61925,map__61925__$1,opts,on_cssload,map__61926,map__61926__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1510317502375