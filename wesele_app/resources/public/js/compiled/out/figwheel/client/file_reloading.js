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
var or__33812__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__33812__auto__){
return or__33812__auto__;
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
var or__33812__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__33812__auto__)){
return or__33812__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__45118_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__45118_SHARP_));
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
var seq__45123 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__45124 = null;
var count__45125 = (0);
var i__45126 = (0);
while(true){
if((i__45126 < count__45125)){
var n = cljs.core._nth.call(null,chunk__45124,i__45126);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__45127 = seq__45123;
var G__45128 = chunk__45124;
var G__45129 = count__45125;
var G__45130 = (i__45126 + (1));
seq__45123 = G__45127;
chunk__45124 = G__45128;
count__45125 = G__45129;
i__45126 = G__45130;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45123);
if(temp__4657__auto__){
var seq__45123__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45123__$1)){
var c__34631__auto__ = cljs.core.chunk_first.call(null,seq__45123__$1);
var G__45131 = cljs.core.chunk_rest.call(null,seq__45123__$1);
var G__45132 = c__34631__auto__;
var G__45133 = cljs.core.count.call(null,c__34631__auto__);
var G__45134 = (0);
seq__45123 = G__45131;
chunk__45124 = G__45132;
count__45125 = G__45133;
i__45126 = G__45134;
continue;
} else {
var n = cljs.core.first.call(null,seq__45123__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__45135 = cljs.core.next.call(null,seq__45123__$1);
var G__45136 = null;
var G__45137 = (0);
var G__45138 = (0);
seq__45123 = G__45135;
chunk__45124 = G__45136;
count__45125 = G__45137;
i__45126 = G__45138;
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

var seq__45189_45200 = cljs.core.seq.call(null,deps);
var chunk__45190_45201 = null;
var count__45191_45202 = (0);
var i__45192_45203 = (0);
while(true){
if((i__45192_45203 < count__45191_45202)){
var dep_45204 = cljs.core._nth.call(null,chunk__45190_45201,i__45192_45203);
topo_sort_helper_STAR_.call(null,dep_45204,(depth + (1)),state);

var G__45205 = seq__45189_45200;
var G__45206 = chunk__45190_45201;
var G__45207 = count__45191_45202;
var G__45208 = (i__45192_45203 + (1));
seq__45189_45200 = G__45205;
chunk__45190_45201 = G__45206;
count__45191_45202 = G__45207;
i__45192_45203 = G__45208;
continue;
} else {
var temp__4657__auto___45209 = cljs.core.seq.call(null,seq__45189_45200);
if(temp__4657__auto___45209){
var seq__45189_45210__$1 = temp__4657__auto___45209;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45189_45210__$1)){
var c__34631__auto___45211 = cljs.core.chunk_first.call(null,seq__45189_45210__$1);
var G__45212 = cljs.core.chunk_rest.call(null,seq__45189_45210__$1);
var G__45213 = c__34631__auto___45211;
var G__45214 = cljs.core.count.call(null,c__34631__auto___45211);
var G__45215 = (0);
seq__45189_45200 = G__45212;
chunk__45190_45201 = G__45213;
count__45191_45202 = G__45214;
i__45192_45203 = G__45215;
continue;
} else {
var dep_45216 = cljs.core.first.call(null,seq__45189_45210__$1);
topo_sort_helper_STAR_.call(null,dep_45216,(depth + (1)),state);

var G__45217 = cljs.core.next.call(null,seq__45189_45210__$1);
var G__45218 = null;
var G__45219 = (0);
var G__45220 = (0);
seq__45189_45200 = G__45217;
chunk__45190_45201 = G__45218;
count__45191_45202 = G__45219;
i__45192_45203 = G__45220;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__45193){
var vec__45197 = p__45193;
var seq__45198 = cljs.core.seq.call(null,vec__45197);
var first__45199 = cljs.core.first.call(null,seq__45198);
var seq__45198__$1 = cljs.core.next.call(null,seq__45198);
var x = first__45199;
var xs = seq__45198__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__45197,seq__45198,first__45199,seq__45198__$1,x,xs,get_deps__$1){
return (function (p1__45139_SHARP_){
return clojure.set.difference.call(null,p1__45139_SHARP_,x);
});})(vec__45197,seq__45198,first__45199,seq__45198__$1,x,xs,get_deps__$1))
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
var seq__45233 = cljs.core.seq.call(null,provides);
var chunk__45234 = null;
var count__45235 = (0);
var i__45236 = (0);
while(true){
if((i__45236 < count__45235)){
var prov = cljs.core._nth.call(null,chunk__45234,i__45236);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__45237_45245 = cljs.core.seq.call(null,requires);
var chunk__45238_45246 = null;
var count__45239_45247 = (0);
var i__45240_45248 = (0);
while(true){
if((i__45240_45248 < count__45239_45247)){
var req_45249 = cljs.core._nth.call(null,chunk__45238_45246,i__45240_45248);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45249,prov);

var G__45250 = seq__45237_45245;
var G__45251 = chunk__45238_45246;
var G__45252 = count__45239_45247;
var G__45253 = (i__45240_45248 + (1));
seq__45237_45245 = G__45250;
chunk__45238_45246 = G__45251;
count__45239_45247 = G__45252;
i__45240_45248 = G__45253;
continue;
} else {
var temp__4657__auto___45254 = cljs.core.seq.call(null,seq__45237_45245);
if(temp__4657__auto___45254){
var seq__45237_45255__$1 = temp__4657__auto___45254;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45237_45255__$1)){
var c__34631__auto___45256 = cljs.core.chunk_first.call(null,seq__45237_45255__$1);
var G__45257 = cljs.core.chunk_rest.call(null,seq__45237_45255__$1);
var G__45258 = c__34631__auto___45256;
var G__45259 = cljs.core.count.call(null,c__34631__auto___45256);
var G__45260 = (0);
seq__45237_45245 = G__45257;
chunk__45238_45246 = G__45258;
count__45239_45247 = G__45259;
i__45240_45248 = G__45260;
continue;
} else {
var req_45261 = cljs.core.first.call(null,seq__45237_45255__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45261,prov);

var G__45262 = cljs.core.next.call(null,seq__45237_45255__$1);
var G__45263 = null;
var G__45264 = (0);
var G__45265 = (0);
seq__45237_45245 = G__45262;
chunk__45238_45246 = G__45263;
count__45239_45247 = G__45264;
i__45240_45248 = G__45265;
continue;
}
} else {
}
}
break;
}

var G__45266 = seq__45233;
var G__45267 = chunk__45234;
var G__45268 = count__45235;
var G__45269 = (i__45236 + (1));
seq__45233 = G__45266;
chunk__45234 = G__45267;
count__45235 = G__45268;
i__45236 = G__45269;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45233);
if(temp__4657__auto__){
var seq__45233__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45233__$1)){
var c__34631__auto__ = cljs.core.chunk_first.call(null,seq__45233__$1);
var G__45270 = cljs.core.chunk_rest.call(null,seq__45233__$1);
var G__45271 = c__34631__auto__;
var G__45272 = cljs.core.count.call(null,c__34631__auto__);
var G__45273 = (0);
seq__45233 = G__45270;
chunk__45234 = G__45271;
count__45235 = G__45272;
i__45236 = G__45273;
continue;
} else {
var prov = cljs.core.first.call(null,seq__45233__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__45241_45274 = cljs.core.seq.call(null,requires);
var chunk__45242_45275 = null;
var count__45243_45276 = (0);
var i__45244_45277 = (0);
while(true){
if((i__45244_45277 < count__45243_45276)){
var req_45278 = cljs.core._nth.call(null,chunk__45242_45275,i__45244_45277);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45278,prov);

var G__45279 = seq__45241_45274;
var G__45280 = chunk__45242_45275;
var G__45281 = count__45243_45276;
var G__45282 = (i__45244_45277 + (1));
seq__45241_45274 = G__45279;
chunk__45242_45275 = G__45280;
count__45243_45276 = G__45281;
i__45244_45277 = G__45282;
continue;
} else {
var temp__4657__auto___45283__$1 = cljs.core.seq.call(null,seq__45241_45274);
if(temp__4657__auto___45283__$1){
var seq__45241_45284__$1 = temp__4657__auto___45283__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45241_45284__$1)){
var c__34631__auto___45285 = cljs.core.chunk_first.call(null,seq__45241_45284__$1);
var G__45286 = cljs.core.chunk_rest.call(null,seq__45241_45284__$1);
var G__45287 = c__34631__auto___45285;
var G__45288 = cljs.core.count.call(null,c__34631__auto___45285);
var G__45289 = (0);
seq__45241_45274 = G__45286;
chunk__45242_45275 = G__45287;
count__45243_45276 = G__45288;
i__45244_45277 = G__45289;
continue;
} else {
var req_45290 = cljs.core.first.call(null,seq__45241_45284__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45290,prov);

var G__45291 = cljs.core.next.call(null,seq__45241_45284__$1);
var G__45292 = null;
var G__45293 = (0);
var G__45294 = (0);
seq__45241_45274 = G__45291;
chunk__45242_45275 = G__45292;
count__45243_45276 = G__45293;
i__45244_45277 = G__45294;
continue;
}
} else {
}
}
break;
}

var G__45295 = cljs.core.next.call(null,seq__45233__$1);
var G__45296 = null;
var G__45297 = (0);
var G__45298 = (0);
seq__45233 = G__45295;
chunk__45234 = G__45296;
count__45235 = G__45297;
i__45236 = G__45298;
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
var seq__45303_45307 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__45304_45308 = null;
var count__45305_45309 = (0);
var i__45306_45310 = (0);
while(true){
if((i__45306_45310 < count__45305_45309)){
var ns_45311 = cljs.core._nth.call(null,chunk__45304_45308,i__45306_45310);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_45311);

var G__45312 = seq__45303_45307;
var G__45313 = chunk__45304_45308;
var G__45314 = count__45305_45309;
var G__45315 = (i__45306_45310 + (1));
seq__45303_45307 = G__45312;
chunk__45304_45308 = G__45313;
count__45305_45309 = G__45314;
i__45306_45310 = G__45315;
continue;
} else {
var temp__4657__auto___45316 = cljs.core.seq.call(null,seq__45303_45307);
if(temp__4657__auto___45316){
var seq__45303_45317__$1 = temp__4657__auto___45316;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45303_45317__$1)){
var c__34631__auto___45318 = cljs.core.chunk_first.call(null,seq__45303_45317__$1);
var G__45319 = cljs.core.chunk_rest.call(null,seq__45303_45317__$1);
var G__45320 = c__34631__auto___45318;
var G__45321 = cljs.core.count.call(null,c__34631__auto___45318);
var G__45322 = (0);
seq__45303_45307 = G__45319;
chunk__45304_45308 = G__45320;
count__45305_45309 = G__45321;
i__45306_45310 = G__45322;
continue;
} else {
var ns_45323 = cljs.core.first.call(null,seq__45303_45317__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_45323);

var G__45324 = cljs.core.next.call(null,seq__45303_45317__$1);
var G__45325 = null;
var G__45326 = (0);
var G__45327 = (0);
seq__45303_45307 = G__45324;
chunk__45304_45308 = G__45325;
count__45305_45309 = G__45326;
i__45306_45310 = G__45327;
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
goog.require_figwheel_backup_ = (function (){var or__33812__auto__ = goog.require__;
if(cljs.core.truth_(or__33812__auto__)){
return or__33812__auto__;
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
var G__45328__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__45328 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45329__i = 0, G__45329__a = new Array(arguments.length -  0);
while (G__45329__i < G__45329__a.length) {G__45329__a[G__45329__i] = arguments[G__45329__i + 0]; ++G__45329__i;}
  args = new cljs.core.IndexedSeq(G__45329__a,0);
} 
return G__45328__delegate.call(this,args);};
G__45328.cljs$lang$maxFixedArity = 0;
G__45328.cljs$lang$applyTo = (function (arglist__45330){
var args = cljs.core.seq(arglist__45330);
return G__45328__delegate(args);
});
G__45328.cljs$core$IFn$_invoke$arity$variadic = G__45328__delegate;
return G__45328;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__45332 = cljs.core._EQ_;
var expr__45333 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__45332.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__45333))){
var path_parts = ((function (pred__45332,expr__45333){
return (function (p1__45331_SHARP_){
return clojure.string.split.call(null,p1__45331_SHARP_,/[\/\\]/);
});})(pred__45332,expr__45333))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__45332,expr__45333){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e45335){if((e45335 instanceof Error)){
var e = e45335;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e45335;

}
}})());
});
;})(path_parts,sep,root,pred__45332,expr__45333))
} else {
if(cljs.core.truth_(pred__45332.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__45333))){
return ((function (pred__45332,expr__45333){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__45332,expr__45333){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__45332,expr__45333))
);

return deferred.addErrback(((function (deferred,pred__45332,expr__45333){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__45332,expr__45333))
);
});
;})(pred__45332,expr__45333))
} else {
return ((function (pred__45332,expr__45333){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__45332,expr__45333))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__45336,callback){
var map__45339 = p__45336;
var map__45339__$1 = ((((!((map__45339 == null)))?((((map__45339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45339.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45339):map__45339);
var file_msg = map__45339__$1;
var request_url = cljs.core.get.call(null,map__45339__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__45339,map__45339__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__45339,map__45339__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__40084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40084__auto__){
return (function (){
var f__40085__auto__ = (function (){var switch__39972__auto__ = ((function (c__40084__auto__){
return (function (state_45363){
var state_val_45364 = (state_45363[(1)]);
if((state_val_45364 === (7))){
var inst_45359 = (state_45363[(2)]);
var state_45363__$1 = state_45363;
var statearr_45365_45385 = state_45363__$1;
(statearr_45365_45385[(2)] = inst_45359);

(statearr_45365_45385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (1))){
var state_45363__$1 = state_45363;
var statearr_45366_45386 = state_45363__$1;
(statearr_45366_45386[(2)] = null);

(statearr_45366_45386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (4))){
var inst_45343 = (state_45363[(7)]);
var inst_45343__$1 = (state_45363[(2)]);
var state_45363__$1 = (function (){var statearr_45367 = state_45363;
(statearr_45367[(7)] = inst_45343__$1);

return statearr_45367;
})();
if(cljs.core.truth_(inst_45343__$1)){
var statearr_45368_45387 = state_45363__$1;
(statearr_45368_45387[(1)] = (5));

} else {
var statearr_45369_45388 = state_45363__$1;
(statearr_45369_45388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (6))){
var state_45363__$1 = state_45363;
var statearr_45370_45389 = state_45363__$1;
(statearr_45370_45389[(2)] = null);

(statearr_45370_45389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (3))){
var inst_45361 = (state_45363[(2)]);
var state_45363__$1 = state_45363;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45363__$1,inst_45361);
} else {
if((state_val_45364 === (2))){
var state_45363__$1 = state_45363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45363__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_45364 === (11))){
var inst_45355 = (state_45363[(2)]);
var state_45363__$1 = (function (){var statearr_45371 = state_45363;
(statearr_45371[(8)] = inst_45355);

return statearr_45371;
})();
var statearr_45372_45390 = state_45363__$1;
(statearr_45372_45390[(2)] = null);

(statearr_45372_45390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (9))){
var inst_45347 = (state_45363[(9)]);
var inst_45349 = (state_45363[(10)]);
var inst_45351 = inst_45349.call(null,inst_45347);
var state_45363__$1 = state_45363;
var statearr_45373_45391 = state_45363__$1;
(statearr_45373_45391[(2)] = inst_45351);

(statearr_45373_45391[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (5))){
var inst_45343 = (state_45363[(7)]);
var inst_45345 = figwheel.client.file_reloading.blocking_load.call(null,inst_45343);
var state_45363__$1 = state_45363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45363__$1,(8),inst_45345);
} else {
if((state_val_45364 === (10))){
var inst_45347 = (state_45363[(9)]);
var inst_45353 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_45347);
var state_45363__$1 = state_45363;
var statearr_45374_45392 = state_45363__$1;
(statearr_45374_45392[(2)] = inst_45353);

(statearr_45374_45392[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (8))){
var inst_45349 = (state_45363[(10)]);
var inst_45343 = (state_45363[(7)]);
var inst_45347 = (state_45363[(2)]);
var inst_45348 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_45349__$1 = cljs.core.get.call(null,inst_45348,inst_45343);
var state_45363__$1 = (function (){var statearr_45375 = state_45363;
(statearr_45375[(9)] = inst_45347);

(statearr_45375[(10)] = inst_45349__$1);

return statearr_45375;
})();
if(cljs.core.truth_(inst_45349__$1)){
var statearr_45376_45393 = state_45363__$1;
(statearr_45376_45393[(1)] = (9));

} else {
var statearr_45377_45394 = state_45363__$1;
(statearr_45377_45394[(1)] = (10));

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
});})(c__40084__auto__))
;
return ((function (switch__39972__auto__,c__40084__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__39973__auto__ = null;
var figwheel$client$file_reloading$state_machine__39973__auto____0 = (function (){
var statearr_45381 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45381[(0)] = figwheel$client$file_reloading$state_machine__39973__auto__);

(statearr_45381[(1)] = (1));

return statearr_45381;
});
var figwheel$client$file_reloading$state_machine__39973__auto____1 = (function (state_45363){
while(true){
var ret_value__39974__auto__ = (function (){try{while(true){
var result__39975__auto__ = switch__39972__auto__.call(null,state_45363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39975__auto__;
}
break;
}
}catch (e45382){if((e45382 instanceof Object)){
var ex__39976__auto__ = e45382;
var statearr_45383_45395 = state_45363;
(statearr_45383_45395[(5)] = ex__39976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45396 = state_45363;
state_45363 = G__45396;
continue;
} else {
return ret_value__39974__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__39973__auto__ = function(state_45363){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__39973__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__39973__auto____1.call(this,state_45363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__39973__auto____0;
figwheel$client$file_reloading$state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__39973__auto____1;
return figwheel$client$file_reloading$state_machine__39973__auto__;
})()
;})(switch__39972__auto__,c__40084__auto__))
})();
var state__40086__auto__ = (function (){var statearr_45384 = f__40085__auto__.call(null);
(statearr_45384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40084__auto__);

return statearr_45384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40086__auto__);
});})(c__40084__auto__))
);

return c__40084__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__45397,callback){
var map__45400 = p__45397;
var map__45400__$1 = ((((!((map__45400 == null)))?((((map__45400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45400.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45400):map__45400);
var file_msg = map__45400__$1;
var namespace = cljs.core.get.call(null,map__45400__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__45400,map__45400__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__45400,map__45400__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__45402){
var map__45405 = p__45402;
var map__45405__$1 = ((((!((map__45405 == null)))?((((map__45405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45405.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45405):map__45405);
var file_msg = map__45405__$1;
var namespace = cljs.core.get.call(null,map__45405__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__33800__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__33800__auto__){
var or__33812__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__33812__auto__)){
return or__33812__auto__;
} else {
var or__33812__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__33812__auto____$1)){
return or__33812__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__33800__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__45407,callback){
var map__45410 = p__45407;
var map__45410__$1 = ((((!((map__45410 == null)))?((((map__45410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45410.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45410):map__45410);
var file_msg = map__45410__$1;
var request_url = cljs.core.get.call(null,map__45410__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__45410__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__40084__auto___45514 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40084__auto___45514,out){
return (function (){
var f__40085__auto__ = (function (){var switch__39972__auto__ = ((function (c__40084__auto___45514,out){
return (function (state_45496){
var state_val_45497 = (state_45496[(1)]);
if((state_val_45497 === (1))){
var inst_45470 = cljs.core.seq.call(null,files);
var inst_45471 = cljs.core.first.call(null,inst_45470);
var inst_45472 = cljs.core.next.call(null,inst_45470);
var inst_45473 = files;
var state_45496__$1 = (function (){var statearr_45498 = state_45496;
(statearr_45498[(7)] = inst_45473);

(statearr_45498[(8)] = inst_45471);

(statearr_45498[(9)] = inst_45472);

return statearr_45498;
})();
var statearr_45499_45515 = state_45496__$1;
(statearr_45499_45515[(2)] = null);

(statearr_45499_45515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45497 === (2))){
var inst_45479 = (state_45496[(10)]);
var inst_45473 = (state_45496[(7)]);
var inst_45478 = cljs.core.seq.call(null,inst_45473);
var inst_45479__$1 = cljs.core.first.call(null,inst_45478);
var inst_45480 = cljs.core.next.call(null,inst_45478);
var inst_45481 = (inst_45479__$1 == null);
var inst_45482 = cljs.core.not.call(null,inst_45481);
var state_45496__$1 = (function (){var statearr_45500 = state_45496;
(statearr_45500[(10)] = inst_45479__$1);

(statearr_45500[(11)] = inst_45480);

return statearr_45500;
})();
if(inst_45482){
var statearr_45501_45516 = state_45496__$1;
(statearr_45501_45516[(1)] = (4));

} else {
var statearr_45502_45517 = state_45496__$1;
(statearr_45502_45517[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45497 === (3))){
var inst_45494 = (state_45496[(2)]);
var state_45496__$1 = state_45496;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45496__$1,inst_45494);
} else {
if((state_val_45497 === (4))){
var inst_45479 = (state_45496[(10)]);
var inst_45484 = figwheel.client.file_reloading.reload_js_file.call(null,inst_45479);
var state_45496__$1 = state_45496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45496__$1,(7),inst_45484);
} else {
if((state_val_45497 === (5))){
var inst_45490 = cljs.core.async.close_BANG_.call(null,out);
var state_45496__$1 = state_45496;
var statearr_45503_45518 = state_45496__$1;
(statearr_45503_45518[(2)] = inst_45490);

(statearr_45503_45518[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45497 === (6))){
var inst_45492 = (state_45496[(2)]);
var state_45496__$1 = state_45496;
var statearr_45504_45519 = state_45496__$1;
(statearr_45504_45519[(2)] = inst_45492);

(statearr_45504_45519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45497 === (7))){
var inst_45480 = (state_45496[(11)]);
var inst_45486 = (state_45496[(2)]);
var inst_45487 = cljs.core.async.put_BANG_.call(null,out,inst_45486);
var inst_45473 = inst_45480;
var state_45496__$1 = (function (){var statearr_45505 = state_45496;
(statearr_45505[(12)] = inst_45487);

(statearr_45505[(7)] = inst_45473);

return statearr_45505;
})();
var statearr_45506_45520 = state_45496__$1;
(statearr_45506_45520[(2)] = null);

(statearr_45506_45520[(1)] = (2));


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
});})(c__40084__auto___45514,out))
;
return ((function (switch__39972__auto__,c__40084__auto___45514,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__39973__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__39973__auto____0 = (function (){
var statearr_45510 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45510[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__39973__auto__);

(statearr_45510[(1)] = (1));

return statearr_45510;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__39973__auto____1 = (function (state_45496){
while(true){
var ret_value__39974__auto__ = (function (){try{while(true){
var result__39975__auto__ = switch__39972__auto__.call(null,state_45496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39975__auto__;
}
break;
}
}catch (e45511){if((e45511 instanceof Object)){
var ex__39976__auto__ = e45511;
var statearr_45512_45521 = state_45496;
(statearr_45512_45521[(5)] = ex__39976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45522 = state_45496;
state_45496 = G__45522;
continue;
} else {
return ret_value__39974__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__39973__auto__ = function(state_45496){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__39973__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__39973__auto____1.call(this,state_45496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__39973__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__39973__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__39973__auto__;
})()
;})(switch__39972__auto__,c__40084__auto___45514,out))
})();
var state__40086__auto__ = (function (){var statearr_45513 = f__40085__auto__.call(null);
(statearr_45513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40084__auto___45514);

return statearr_45513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40086__auto__);
});})(c__40084__auto___45514,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__45523,opts){
var map__45527 = p__45523;
var map__45527__$1 = ((((!((map__45527 == null)))?((((map__45527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45527.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45527):map__45527);
var eval_body = cljs.core.get.call(null,map__45527__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__45527__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__33800__auto__ = eval_body;
if(cljs.core.truth_(and__33800__auto__)){
return typeof eval_body === 'string';
} else {
return and__33800__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e45529){var e = e45529;
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
return (function (p1__45530_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__45530_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__45539){
var vec__45540 = p__45539;
var k = cljs.core.nth.call(null,vec__45540,(0),null);
var v = cljs.core.nth.call(null,vec__45540,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__45543){
var vec__45544 = p__45543;
var k = cljs.core.nth.call(null,vec__45544,(0),null);
var v = cljs.core.nth.call(null,vec__45544,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__45550,p__45551){
var map__45799 = p__45550;
var map__45799__$1 = ((((!((map__45799 == null)))?((((map__45799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45799.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45799):map__45799);
var opts = map__45799__$1;
var before_jsload = cljs.core.get.call(null,map__45799__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__45799__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__45799__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__45800 = p__45551;
var map__45800__$1 = ((((!((map__45800 == null)))?((((map__45800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45800.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45800):map__45800);
var msg = map__45800__$1;
var files = cljs.core.get.call(null,map__45800__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__45800__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__45800__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__40084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40084__auto__,map__45799,map__45799__$1,opts,before_jsload,on_jsload,reload_dependents,map__45800,map__45800__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__40085__auto__ = (function (){var switch__39972__auto__ = ((function (c__40084__auto__,map__45799,map__45799__$1,opts,before_jsload,on_jsload,reload_dependents,map__45800,map__45800__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_45954){
var state_val_45955 = (state_45954[(1)]);
if((state_val_45955 === (7))){
var inst_45815 = (state_45954[(7)]);
var inst_45816 = (state_45954[(8)]);
var inst_45814 = (state_45954[(9)]);
var inst_45817 = (state_45954[(10)]);
var inst_45822 = cljs.core._nth.call(null,inst_45815,inst_45817);
var inst_45823 = figwheel.client.file_reloading.eval_body.call(null,inst_45822,opts);
var inst_45824 = (inst_45817 + (1));
var tmp45956 = inst_45815;
var tmp45957 = inst_45816;
var tmp45958 = inst_45814;
var inst_45814__$1 = tmp45958;
var inst_45815__$1 = tmp45956;
var inst_45816__$1 = tmp45957;
var inst_45817__$1 = inst_45824;
var state_45954__$1 = (function (){var statearr_45959 = state_45954;
(statearr_45959[(11)] = inst_45823);

(statearr_45959[(7)] = inst_45815__$1);

(statearr_45959[(8)] = inst_45816__$1);

(statearr_45959[(9)] = inst_45814__$1);

(statearr_45959[(10)] = inst_45817__$1);

return statearr_45959;
})();
var statearr_45960_46046 = state_45954__$1;
(statearr_45960_46046[(2)] = null);

(statearr_45960_46046[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (20))){
var inst_45857 = (state_45954[(12)]);
var inst_45865 = figwheel.client.file_reloading.sort_files.call(null,inst_45857);
var state_45954__$1 = state_45954;
var statearr_45961_46047 = state_45954__$1;
(statearr_45961_46047[(2)] = inst_45865);

(statearr_45961_46047[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (27))){
var state_45954__$1 = state_45954;
var statearr_45962_46048 = state_45954__$1;
(statearr_45962_46048[(2)] = null);

(statearr_45962_46048[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (1))){
var inst_45806 = (state_45954[(13)]);
var inst_45803 = before_jsload.call(null,files);
var inst_45804 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_45805 = (function (){return ((function (inst_45806,inst_45803,inst_45804,state_val_45955,c__40084__auto__,map__45799,map__45799__$1,opts,before_jsload,on_jsload,reload_dependents,map__45800,map__45800__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45547_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__45547_SHARP_);
});
;})(inst_45806,inst_45803,inst_45804,state_val_45955,c__40084__auto__,map__45799,map__45799__$1,opts,before_jsload,on_jsload,reload_dependents,map__45800,map__45800__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45806__$1 = cljs.core.filter.call(null,inst_45805,files);
var inst_45807 = cljs.core.not_empty.call(null,inst_45806__$1);
var state_45954__$1 = (function (){var statearr_45963 = state_45954;
(statearr_45963[(13)] = inst_45806__$1);

(statearr_45963[(14)] = inst_45803);

(statearr_45963[(15)] = inst_45804);

return statearr_45963;
})();
if(cljs.core.truth_(inst_45807)){
var statearr_45964_46049 = state_45954__$1;
(statearr_45964_46049[(1)] = (2));

} else {
var statearr_45965_46050 = state_45954__$1;
(statearr_45965_46050[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (24))){
var state_45954__$1 = state_45954;
var statearr_45966_46051 = state_45954__$1;
(statearr_45966_46051[(2)] = null);

(statearr_45966_46051[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (39))){
var inst_45907 = (state_45954[(16)]);
var state_45954__$1 = state_45954;
var statearr_45967_46052 = state_45954__$1;
(statearr_45967_46052[(2)] = inst_45907);

(statearr_45967_46052[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (46))){
var inst_45949 = (state_45954[(2)]);
var state_45954__$1 = state_45954;
var statearr_45968_46053 = state_45954__$1;
(statearr_45968_46053[(2)] = inst_45949);

(statearr_45968_46053[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (4))){
var inst_45851 = (state_45954[(2)]);
var inst_45852 = cljs.core.List.EMPTY;
var inst_45853 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_45852);
var inst_45854 = (function (){return ((function (inst_45851,inst_45852,inst_45853,state_val_45955,c__40084__auto__,map__45799,map__45799__$1,opts,before_jsload,on_jsload,reload_dependents,map__45800,map__45800__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45548_SHARP_){
var and__33800__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__45548_SHARP_);
if(cljs.core.truth_(and__33800__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__45548_SHARP_));
} else {
return and__33800__auto__;
}
});
;})(inst_45851,inst_45852,inst_45853,state_val_45955,c__40084__auto__,map__45799,map__45799__$1,opts,before_jsload,on_jsload,reload_dependents,map__45800,map__45800__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45855 = cljs.core.filter.call(null,inst_45854,files);
var inst_45856 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_45857 = cljs.core.concat.call(null,inst_45855,inst_45856);
var state_45954__$1 = (function (){var statearr_45969 = state_45954;
(statearr_45969[(17)] = inst_45853);

(statearr_45969[(12)] = inst_45857);

(statearr_45969[(18)] = inst_45851);

return statearr_45969;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_45970_46054 = state_45954__$1;
(statearr_45970_46054[(1)] = (16));

} else {
var statearr_45971_46055 = state_45954__$1;
(statearr_45971_46055[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (15))){
var inst_45841 = (state_45954[(2)]);
var state_45954__$1 = state_45954;
var statearr_45972_46056 = state_45954__$1;
(statearr_45972_46056[(2)] = inst_45841);

(statearr_45972_46056[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (21))){
var inst_45867 = (state_45954[(19)]);
var inst_45867__$1 = (state_45954[(2)]);
var inst_45868 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_45867__$1);
var state_45954__$1 = (function (){var statearr_45973 = state_45954;
(statearr_45973[(19)] = inst_45867__$1);

return statearr_45973;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45954__$1,(22),inst_45868);
} else {
if((state_val_45955 === (31))){
var inst_45952 = (state_45954[(2)]);
var state_45954__$1 = state_45954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45954__$1,inst_45952);
} else {
if((state_val_45955 === (32))){
var inst_45907 = (state_45954[(16)]);
var inst_45912 = inst_45907.cljs$lang$protocol_mask$partition0$;
var inst_45913 = (inst_45912 & (64));
var inst_45914 = inst_45907.cljs$core$ISeq$;
var inst_45915 = (cljs.core.PROTOCOL_SENTINEL === inst_45914);
var inst_45916 = (inst_45913) || (inst_45915);
var state_45954__$1 = state_45954;
if(cljs.core.truth_(inst_45916)){
var statearr_45974_46057 = state_45954__$1;
(statearr_45974_46057[(1)] = (35));

} else {
var statearr_45975_46058 = state_45954__$1;
(statearr_45975_46058[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (40))){
var inst_45929 = (state_45954[(20)]);
var inst_45928 = (state_45954[(2)]);
var inst_45929__$1 = cljs.core.get.call(null,inst_45928,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_45930 = cljs.core.get.call(null,inst_45928,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_45931 = cljs.core.not_empty.call(null,inst_45929__$1);
var state_45954__$1 = (function (){var statearr_45976 = state_45954;
(statearr_45976[(21)] = inst_45930);

(statearr_45976[(20)] = inst_45929__$1);

return statearr_45976;
})();
if(cljs.core.truth_(inst_45931)){
var statearr_45977_46059 = state_45954__$1;
(statearr_45977_46059[(1)] = (41));

} else {
var statearr_45978_46060 = state_45954__$1;
(statearr_45978_46060[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (33))){
var state_45954__$1 = state_45954;
var statearr_45979_46061 = state_45954__$1;
(statearr_45979_46061[(2)] = false);

(statearr_45979_46061[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (13))){
var inst_45827 = (state_45954[(22)]);
var inst_45831 = cljs.core.chunk_first.call(null,inst_45827);
var inst_45832 = cljs.core.chunk_rest.call(null,inst_45827);
var inst_45833 = cljs.core.count.call(null,inst_45831);
var inst_45814 = inst_45832;
var inst_45815 = inst_45831;
var inst_45816 = inst_45833;
var inst_45817 = (0);
var state_45954__$1 = (function (){var statearr_45980 = state_45954;
(statearr_45980[(7)] = inst_45815);

(statearr_45980[(8)] = inst_45816);

(statearr_45980[(9)] = inst_45814);

(statearr_45980[(10)] = inst_45817);

return statearr_45980;
})();
var statearr_45981_46062 = state_45954__$1;
(statearr_45981_46062[(2)] = null);

(statearr_45981_46062[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (22))){
var inst_45870 = (state_45954[(23)]);
var inst_45875 = (state_45954[(24)]);
var inst_45871 = (state_45954[(25)]);
var inst_45867 = (state_45954[(19)]);
var inst_45870__$1 = (state_45954[(2)]);
var inst_45871__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_45870__$1);
var inst_45872 = (function (){var all_files = inst_45867;
var res_SINGLEQUOTE_ = inst_45870__$1;
var res = inst_45871__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_45870,inst_45875,inst_45871,inst_45867,inst_45870__$1,inst_45871__$1,state_val_45955,c__40084__auto__,map__45799,map__45799__$1,opts,before_jsload,on_jsload,reload_dependents,map__45800,map__45800__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45549_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__45549_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_45870,inst_45875,inst_45871,inst_45867,inst_45870__$1,inst_45871__$1,state_val_45955,c__40084__auto__,map__45799,map__45799__$1,opts,before_jsload,on_jsload,reload_dependents,map__45800,map__45800__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45873 = cljs.core.filter.call(null,inst_45872,inst_45870__$1);
var inst_45874 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_45875__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_45874);
var inst_45876 = cljs.core.not_empty.call(null,inst_45875__$1);
var state_45954__$1 = (function (){var statearr_45982 = state_45954;
(statearr_45982[(26)] = inst_45873);

(statearr_45982[(23)] = inst_45870__$1);

(statearr_45982[(24)] = inst_45875__$1);

(statearr_45982[(25)] = inst_45871__$1);

return statearr_45982;
})();
if(cljs.core.truth_(inst_45876)){
var statearr_45983_46063 = state_45954__$1;
(statearr_45983_46063[(1)] = (23));

} else {
var statearr_45984_46064 = state_45954__$1;
(statearr_45984_46064[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (36))){
var state_45954__$1 = state_45954;
var statearr_45985_46065 = state_45954__$1;
(statearr_45985_46065[(2)] = false);

(statearr_45985_46065[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (41))){
var inst_45929 = (state_45954[(20)]);
var inst_45933 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_45934 = cljs.core.map.call(null,inst_45933,inst_45929);
var inst_45935 = cljs.core.pr_str.call(null,inst_45934);
var inst_45936 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_45935)].join('');
var inst_45937 = figwheel.client.utils.log.call(null,inst_45936);
var state_45954__$1 = state_45954;
var statearr_45986_46066 = state_45954__$1;
(statearr_45986_46066[(2)] = inst_45937);

(statearr_45986_46066[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (43))){
var inst_45930 = (state_45954[(21)]);
var inst_45940 = (state_45954[(2)]);
var inst_45941 = cljs.core.not_empty.call(null,inst_45930);
var state_45954__$1 = (function (){var statearr_45987 = state_45954;
(statearr_45987[(27)] = inst_45940);

return statearr_45987;
})();
if(cljs.core.truth_(inst_45941)){
var statearr_45988_46067 = state_45954__$1;
(statearr_45988_46067[(1)] = (44));

} else {
var statearr_45989_46068 = state_45954__$1;
(statearr_45989_46068[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (29))){
var inst_45907 = (state_45954[(16)]);
var inst_45873 = (state_45954[(26)]);
var inst_45870 = (state_45954[(23)]);
var inst_45875 = (state_45954[(24)]);
var inst_45871 = (state_45954[(25)]);
var inst_45867 = (state_45954[(19)]);
var inst_45903 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_45906 = (function (){var all_files = inst_45867;
var res_SINGLEQUOTE_ = inst_45870;
var res = inst_45871;
var files_not_loaded = inst_45873;
var dependencies_that_loaded = inst_45875;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45907,inst_45873,inst_45870,inst_45875,inst_45871,inst_45867,inst_45903,state_val_45955,c__40084__auto__,map__45799,map__45799__$1,opts,before_jsload,on_jsload,reload_dependents,map__45800,map__45800__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__45905){
var map__45990 = p__45905;
var map__45990__$1 = ((((!((map__45990 == null)))?((((map__45990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45990.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45990):map__45990);
var namespace = cljs.core.get.call(null,map__45990__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45907,inst_45873,inst_45870,inst_45875,inst_45871,inst_45867,inst_45903,state_val_45955,c__40084__auto__,map__45799,map__45799__$1,opts,before_jsload,on_jsload,reload_dependents,map__45800,map__45800__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45907__$1 = cljs.core.group_by.call(null,inst_45906,inst_45873);
var inst_45909 = (inst_45907__$1 == null);
var inst_45910 = cljs.core.not.call(null,inst_45909);
var state_45954__$1 = (function (){var statearr_45992 = state_45954;
(statearr_45992[(16)] = inst_45907__$1);

(statearr_45992[(28)] = inst_45903);

return statearr_45992;
})();
if(inst_45910){
var statearr_45993_46069 = state_45954__$1;
(statearr_45993_46069[(1)] = (32));

} else {
var statearr_45994_46070 = state_45954__$1;
(statearr_45994_46070[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (44))){
var inst_45930 = (state_45954[(21)]);
var inst_45943 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_45930);
var inst_45944 = cljs.core.pr_str.call(null,inst_45943);
var inst_45945 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_45944)].join('');
var inst_45946 = figwheel.client.utils.log.call(null,inst_45945);
var state_45954__$1 = state_45954;
var statearr_45995_46071 = state_45954__$1;
(statearr_45995_46071[(2)] = inst_45946);

(statearr_45995_46071[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (6))){
var inst_45848 = (state_45954[(2)]);
var state_45954__$1 = state_45954;
var statearr_45996_46072 = state_45954__$1;
(statearr_45996_46072[(2)] = inst_45848);

(statearr_45996_46072[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (28))){
var inst_45873 = (state_45954[(26)]);
var inst_45900 = (state_45954[(2)]);
var inst_45901 = cljs.core.not_empty.call(null,inst_45873);
var state_45954__$1 = (function (){var statearr_45997 = state_45954;
(statearr_45997[(29)] = inst_45900);

return statearr_45997;
})();
if(cljs.core.truth_(inst_45901)){
var statearr_45998_46073 = state_45954__$1;
(statearr_45998_46073[(1)] = (29));

} else {
var statearr_45999_46074 = state_45954__$1;
(statearr_45999_46074[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (25))){
var inst_45871 = (state_45954[(25)]);
var inst_45887 = (state_45954[(2)]);
var inst_45888 = cljs.core.not_empty.call(null,inst_45871);
var state_45954__$1 = (function (){var statearr_46000 = state_45954;
(statearr_46000[(30)] = inst_45887);

return statearr_46000;
})();
if(cljs.core.truth_(inst_45888)){
var statearr_46001_46075 = state_45954__$1;
(statearr_46001_46075[(1)] = (26));

} else {
var statearr_46002_46076 = state_45954__$1;
(statearr_46002_46076[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (34))){
var inst_45923 = (state_45954[(2)]);
var state_45954__$1 = state_45954;
if(cljs.core.truth_(inst_45923)){
var statearr_46003_46077 = state_45954__$1;
(statearr_46003_46077[(1)] = (38));

} else {
var statearr_46004_46078 = state_45954__$1;
(statearr_46004_46078[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (17))){
var state_45954__$1 = state_45954;
var statearr_46005_46079 = state_45954__$1;
(statearr_46005_46079[(2)] = recompile_dependents);

(statearr_46005_46079[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (3))){
var state_45954__$1 = state_45954;
var statearr_46006_46080 = state_45954__$1;
(statearr_46006_46080[(2)] = null);

(statearr_46006_46080[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (12))){
var inst_45844 = (state_45954[(2)]);
var state_45954__$1 = state_45954;
var statearr_46007_46081 = state_45954__$1;
(statearr_46007_46081[(2)] = inst_45844);

(statearr_46007_46081[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (2))){
var inst_45806 = (state_45954[(13)]);
var inst_45813 = cljs.core.seq.call(null,inst_45806);
var inst_45814 = inst_45813;
var inst_45815 = null;
var inst_45816 = (0);
var inst_45817 = (0);
var state_45954__$1 = (function (){var statearr_46008 = state_45954;
(statearr_46008[(7)] = inst_45815);

(statearr_46008[(8)] = inst_45816);

(statearr_46008[(9)] = inst_45814);

(statearr_46008[(10)] = inst_45817);

return statearr_46008;
})();
var statearr_46009_46082 = state_45954__$1;
(statearr_46009_46082[(2)] = null);

(statearr_46009_46082[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (23))){
var inst_45873 = (state_45954[(26)]);
var inst_45870 = (state_45954[(23)]);
var inst_45875 = (state_45954[(24)]);
var inst_45871 = (state_45954[(25)]);
var inst_45867 = (state_45954[(19)]);
var inst_45878 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_45880 = (function (){var all_files = inst_45867;
var res_SINGLEQUOTE_ = inst_45870;
var res = inst_45871;
var files_not_loaded = inst_45873;
var dependencies_that_loaded = inst_45875;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45873,inst_45870,inst_45875,inst_45871,inst_45867,inst_45878,state_val_45955,c__40084__auto__,map__45799,map__45799__$1,opts,before_jsload,on_jsload,reload_dependents,map__45800,map__45800__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__45879){
var map__46010 = p__45879;
var map__46010__$1 = ((((!((map__46010 == null)))?((((map__46010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46010.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46010):map__46010);
var request_url = cljs.core.get.call(null,map__46010__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45873,inst_45870,inst_45875,inst_45871,inst_45867,inst_45878,state_val_45955,c__40084__auto__,map__45799,map__45799__$1,opts,before_jsload,on_jsload,reload_dependents,map__45800,map__45800__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45881 = cljs.core.reverse.call(null,inst_45875);
var inst_45882 = cljs.core.map.call(null,inst_45880,inst_45881);
var inst_45883 = cljs.core.pr_str.call(null,inst_45882);
var inst_45884 = figwheel.client.utils.log.call(null,inst_45883);
var state_45954__$1 = (function (){var statearr_46012 = state_45954;
(statearr_46012[(31)] = inst_45878);

return statearr_46012;
})();
var statearr_46013_46083 = state_45954__$1;
(statearr_46013_46083[(2)] = inst_45884);

(statearr_46013_46083[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (35))){
var state_45954__$1 = state_45954;
var statearr_46014_46084 = state_45954__$1;
(statearr_46014_46084[(2)] = true);

(statearr_46014_46084[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (19))){
var inst_45857 = (state_45954[(12)]);
var inst_45863 = figwheel.client.file_reloading.expand_files.call(null,inst_45857);
var state_45954__$1 = state_45954;
var statearr_46015_46085 = state_45954__$1;
(statearr_46015_46085[(2)] = inst_45863);

(statearr_46015_46085[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (11))){
var state_45954__$1 = state_45954;
var statearr_46016_46086 = state_45954__$1;
(statearr_46016_46086[(2)] = null);

(statearr_46016_46086[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (9))){
var inst_45846 = (state_45954[(2)]);
var state_45954__$1 = state_45954;
var statearr_46017_46087 = state_45954__$1;
(statearr_46017_46087[(2)] = inst_45846);

(statearr_46017_46087[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (5))){
var inst_45816 = (state_45954[(8)]);
var inst_45817 = (state_45954[(10)]);
var inst_45819 = (inst_45817 < inst_45816);
var inst_45820 = inst_45819;
var state_45954__$1 = state_45954;
if(cljs.core.truth_(inst_45820)){
var statearr_46018_46088 = state_45954__$1;
(statearr_46018_46088[(1)] = (7));

} else {
var statearr_46019_46089 = state_45954__$1;
(statearr_46019_46089[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (14))){
var inst_45827 = (state_45954[(22)]);
var inst_45836 = cljs.core.first.call(null,inst_45827);
var inst_45837 = figwheel.client.file_reloading.eval_body.call(null,inst_45836,opts);
var inst_45838 = cljs.core.next.call(null,inst_45827);
var inst_45814 = inst_45838;
var inst_45815 = null;
var inst_45816 = (0);
var inst_45817 = (0);
var state_45954__$1 = (function (){var statearr_46020 = state_45954;
(statearr_46020[(32)] = inst_45837);

(statearr_46020[(7)] = inst_45815);

(statearr_46020[(8)] = inst_45816);

(statearr_46020[(9)] = inst_45814);

(statearr_46020[(10)] = inst_45817);

return statearr_46020;
})();
var statearr_46021_46090 = state_45954__$1;
(statearr_46021_46090[(2)] = null);

(statearr_46021_46090[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (45))){
var state_45954__$1 = state_45954;
var statearr_46022_46091 = state_45954__$1;
(statearr_46022_46091[(2)] = null);

(statearr_46022_46091[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (26))){
var inst_45873 = (state_45954[(26)]);
var inst_45870 = (state_45954[(23)]);
var inst_45875 = (state_45954[(24)]);
var inst_45871 = (state_45954[(25)]);
var inst_45867 = (state_45954[(19)]);
var inst_45890 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_45892 = (function (){var all_files = inst_45867;
var res_SINGLEQUOTE_ = inst_45870;
var res = inst_45871;
var files_not_loaded = inst_45873;
var dependencies_that_loaded = inst_45875;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45873,inst_45870,inst_45875,inst_45871,inst_45867,inst_45890,state_val_45955,c__40084__auto__,map__45799,map__45799__$1,opts,before_jsload,on_jsload,reload_dependents,map__45800,map__45800__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__45891){
var map__46023 = p__45891;
var map__46023__$1 = ((((!((map__46023 == null)))?((((map__46023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46023.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46023):map__46023);
var namespace = cljs.core.get.call(null,map__46023__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__46023__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45873,inst_45870,inst_45875,inst_45871,inst_45867,inst_45890,state_val_45955,c__40084__auto__,map__45799,map__45799__$1,opts,before_jsload,on_jsload,reload_dependents,map__45800,map__45800__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45893 = cljs.core.map.call(null,inst_45892,inst_45871);
var inst_45894 = cljs.core.pr_str.call(null,inst_45893);
var inst_45895 = figwheel.client.utils.log.call(null,inst_45894);
var inst_45896 = (function (){var all_files = inst_45867;
var res_SINGLEQUOTE_ = inst_45870;
var res = inst_45871;
var files_not_loaded = inst_45873;
var dependencies_that_loaded = inst_45875;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45873,inst_45870,inst_45875,inst_45871,inst_45867,inst_45890,inst_45892,inst_45893,inst_45894,inst_45895,state_val_45955,c__40084__auto__,map__45799,map__45799__$1,opts,before_jsload,on_jsload,reload_dependents,map__45800,map__45800__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45873,inst_45870,inst_45875,inst_45871,inst_45867,inst_45890,inst_45892,inst_45893,inst_45894,inst_45895,state_val_45955,c__40084__auto__,map__45799,map__45799__$1,opts,before_jsload,on_jsload,reload_dependents,map__45800,map__45800__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45897 = setTimeout(inst_45896,(10));
var state_45954__$1 = (function (){var statearr_46025 = state_45954;
(statearr_46025[(33)] = inst_45895);

(statearr_46025[(34)] = inst_45890);

return statearr_46025;
})();
var statearr_46026_46092 = state_45954__$1;
(statearr_46026_46092[(2)] = inst_45897);

(statearr_46026_46092[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (16))){
var state_45954__$1 = state_45954;
var statearr_46027_46093 = state_45954__$1;
(statearr_46027_46093[(2)] = reload_dependents);

(statearr_46027_46093[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (38))){
var inst_45907 = (state_45954[(16)]);
var inst_45925 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45907);
var state_45954__$1 = state_45954;
var statearr_46028_46094 = state_45954__$1;
(statearr_46028_46094[(2)] = inst_45925);

(statearr_46028_46094[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (30))){
var state_45954__$1 = state_45954;
var statearr_46029_46095 = state_45954__$1;
(statearr_46029_46095[(2)] = null);

(statearr_46029_46095[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (10))){
var inst_45827 = (state_45954[(22)]);
var inst_45829 = cljs.core.chunked_seq_QMARK_.call(null,inst_45827);
var state_45954__$1 = state_45954;
if(inst_45829){
var statearr_46030_46096 = state_45954__$1;
(statearr_46030_46096[(1)] = (13));

} else {
var statearr_46031_46097 = state_45954__$1;
(statearr_46031_46097[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (18))){
var inst_45861 = (state_45954[(2)]);
var state_45954__$1 = state_45954;
if(cljs.core.truth_(inst_45861)){
var statearr_46032_46098 = state_45954__$1;
(statearr_46032_46098[(1)] = (19));

} else {
var statearr_46033_46099 = state_45954__$1;
(statearr_46033_46099[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (42))){
var state_45954__$1 = state_45954;
var statearr_46034_46100 = state_45954__$1;
(statearr_46034_46100[(2)] = null);

(statearr_46034_46100[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (37))){
var inst_45920 = (state_45954[(2)]);
var state_45954__$1 = state_45954;
var statearr_46035_46101 = state_45954__$1;
(statearr_46035_46101[(2)] = inst_45920);

(statearr_46035_46101[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45955 === (8))){
var inst_45827 = (state_45954[(22)]);
var inst_45814 = (state_45954[(9)]);
var inst_45827__$1 = cljs.core.seq.call(null,inst_45814);
var state_45954__$1 = (function (){var statearr_46036 = state_45954;
(statearr_46036[(22)] = inst_45827__$1);

return statearr_46036;
})();
if(inst_45827__$1){
var statearr_46037_46102 = state_45954__$1;
(statearr_46037_46102[(1)] = (10));

} else {
var statearr_46038_46103 = state_45954__$1;
(statearr_46038_46103[(1)] = (11));

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
});})(c__40084__auto__,map__45799,map__45799__$1,opts,before_jsload,on_jsload,reload_dependents,map__45800,map__45800__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__39972__auto__,c__40084__auto__,map__45799,map__45799__$1,opts,before_jsload,on_jsload,reload_dependents,map__45800,map__45800__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__39973__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__39973__auto____0 = (function (){
var statearr_46042 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46042[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__39973__auto__);

(statearr_46042[(1)] = (1));

return statearr_46042;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__39973__auto____1 = (function (state_45954){
while(true){
var ret_value__39974__auto__ = (function (){try{while(true){
var result__39975__auto__ = switch__39972__auto__.call(null,state_45954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39975__auto__;
}
break;
}
}catch (e46043){if((e46043 instanceof Object)){
var ex__39976__auto__ = e46043;
var statearr_46044_46104 = state_45954;
(statearr_46044_46104[(5)] = ex__39976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46105 = state_45954;
state_45954 = G__46105;
continue;
} else {
return ret_value__39974__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__39973__auto__ = function(state_45954){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__39973__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__39973__auto____1.call(this,state_45954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__39973__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__39973__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__39973__auto__;
})()
;})(switch__39972__auto__,c__40084__auto__,map__45799,map__45799__$1,opts,before_jsload,on_jsload,reload_dependents,map__45800,map__45800__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__40086__auto__ = (function (){var statearr_46045 = f__40085__auto__.call(null);
(statearr_46045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40084__auto__);

return statearr_46045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40086__auto__);
});})(c__40084__auto__,map__45799,map__45799__$1,opts,before_jsload,on_jsload,reload_dependents,map__45800,map__45800__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__40084__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__46108,link){
var map__46111 = p__46108;
var map__46111__$1 = ((((!((map__46111 == null)))?((((map__46111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46111.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46111):map__46111);
var file = cljs.core.get.call(null,map__46111__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__46111,map__46111__$1,file){
return (function (p1__46106_SHARP_,p2__46107_SHARP_){
if(cljs.core._EQ_.call(null,p1__46106_SHARP_,p2__46107_SHARP_)){
return p1__46106_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__46111,map__46111__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__46117){
var map__46118 = p__46117;
var map__46118__$1 = ((((!((map__46118 == null)))?((((map__46118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46118.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46118):map__46118);
var match_length = cljs.core.get.call(null,map__46118__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__46118__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__46113_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__46113_SHARP_);
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
var args46120 = [];
var len__34925__auto___46123 = arguments.length;
var i__34926__auto___46124 = (0);
while(true){
if((i__34926__auto___46124 < len__34925__auto___46123)){
args46120.push((arguments[i__34926__auto___46124]));

var G__46125 = (i__34926__auto___46124 + (1));
i__34926__auto___46124 = G__46125;
continue;
} else {
}
break;
}

var G__46122 = args46120.length;
switch (G__46122) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46120.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__46127_SHARP_,p2__46128_SHARP_){
return cljs.core.assoc.call(null,p1__46127_SHARP_,cljs.core.get.call(null,p2__46128_SHARP_,key),p2__46128_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__46129){
var map__46132 = p__46129;
var map__46132__$1 = ((((!((map__46132 == null)))?((((map__46132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46132.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46132):map__46132);
var f_data = map__46132__$1;
var file = cljs.core.get.call(null,map__46132__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__46134,p__46135){
var map__46144 = p__46134;
var map__46144__$1 = ((((!((map__46144 == null)))?((((map__46144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46144.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46144):map__46144);
var opts = map__46144__$1;
var on_cssload = cljs.core.get.call(null,map__46144__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__46145 = p__46135;
var map__46145__$1 = ((((!((map__46145 == null)))?((((map__46145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46145.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46145):map__46145);
var files_msg = map__46145__$1;
var files = cljs.core.get.call(null,map__46145__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__46148_46152 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__46149_46153 = null;
var count__46150_46154 = (0);
var i__46151_46155 = (0);
while(true){
if((i__46151_46155 < count__46150_46154)){
var f_46156 = cljs.core._nth.call(null,chunk__46149_46153,i__46151_46155);
figwheel.client.file_reloading.reload_css_file.call(null,f_46156);

var G__46157 = seq__46148_46152;
var G__46158 = chunk__46149_46153;
var G__46159 = count__46150_46154;
var G__46160 = (i__46151_46155 + (1));
seq__46148_46152 = G__46157;
chunk__46149_46153 = G__46158;
count__46150_46154 = G__46159;
i__46151_46155 = G__46160;
continue;
} else {
var temp__4657__auto___46161 = cljs.core.seq.call(null,seq__46148_46152);
if(temp__4657__auto___46161){
var seq__46148_46162__$1 = temp__4657__auto___46161;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46148_46162__$1)){
var c__34631__auto___46163 = cljs.core.chunk_first.call(null,seq__46148_46162__$1);
var G__46164 = cljs.core.chunk_rest.call(null,seq__46148_46162__$1);
var G__46165 = c__34631__auto___46163;
var G__46166 = cljs.core.count.call(null,c__34631__auto___46163);
var G__46167 = (0);
seq__46148_46152 = G__46164;
chunk__46149_46153 = G__46165;
count__46150_46154 = G__46166;
i__46151_46155 = G__46167;
continue;
} else {
var f_46168 = cljs.core.first.call(null,seq__46148_46162__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_46168);

var G__46169 = cljs.core.next.call(null,seq__46148_46162__$1);
var G__46170 = null;
var G__46171 = (0);
var G__46172 = (0);
seq__46148_46152 = G__46169;
chunk__46149_46153 = G__46170;
count__46150_46154 = G__46171;
i__46151_46155 = G__46172;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__46144,map__46144__$1,opts,on_cssload,map__46145,map__46145__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__46144,map__46144__$1,opts,on_cssload,map__46145,map__46145__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1526470132067