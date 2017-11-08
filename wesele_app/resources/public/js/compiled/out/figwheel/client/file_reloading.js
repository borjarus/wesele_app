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
var or__43494__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__43494__auto__){
return or__43494__auto__;
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
var or__43494__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__43494__auto__)){
return or__43494__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__64513_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__64513_SHARP_));
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
var seq__64518 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__64519 = null;
var count__64520 = (0);
var i__64521 = (0);
while(true){
if((i__64521 < count__64520)){
var n = cljs.core._nth.call(null,chunk__64519,i__64521);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__64522 = seq__64518;
var G__64523 = chunk__64519;
var G__64524 = count__64520;
var G__64525 = (i__64521 + (1));
seq__64518 = G__64522;
chunk__64519 = G__64523;
count__64520 = G__64524;
i__64521 = G__64525;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__64518);
if(temp__4657__auto__){
var seq__64518__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64518__$1)){
var c__44313__auto__ = cljs.core.chunk_first.call(null,seq__64518__$1);
var G__64526 = cljs.core.chunk_rest.call(null,seq__64518__$1);
var G__64527 = c__44313__auto__;
var G__64528 = cljs.core.count.call(null,c__44313__auto__);
var G__64529 = (0);
seq__64518 = G__64526;
chunk__64519 = G__64527;
count__64520 = G__64528;
i__64521 = G__64529;
continue;
} else {
var n = cljs.core.first.call(null,seq__64518__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__64530 = cljs.core.next.call(null,seq__64518__$1);
var G__64531 = null;
var G__64532 = (0);
var G__64533 = (0);
seq__64518 = G__64530;
chunk__64519 = G__64531;
count__64520 = G__64532;
i__64521 = G__64533;
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

var seq__64584_64595 = cljs.core.seq.call(null,deps);
var chunk__64585_64596 = null;
var count__64586_64597 = (0);
var i__64587_64598 = (0);
while(true){
if((i__64587_64598 < count__64586_64597)){
var dep_64599 = cljs.core._nth.call(null,chunk__64585_64596,i__64587_64598);
topo_sort_helper_STAR_.call(null,dep_64599,(depth + (1)),state);

var G__64600 = seq__64584_64595;
var G__64601 = chunk__64585_64596;
var G__64602 = count__64586_64597;
var G__64603 = (i__64587_64598 + (1));
seq__64584_64595 = G__64600;
chunk__64585_64596 = G__64601;
count__64586_64597 = G__64602;
i__64587_64598 = G__64603;
continue;
} else {
var temp__4657__auto___64604 = cljs.core.seq.call(null,seq__64584_64595);
if(temp__4657__auto___64604){
var seq__64584_64605__$1 = temp__4657__auto___64604;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64584_64605__$1)){
var c__44313__auto___64606 = cljs.core.chunk_first.call(null,seq__64584_64605__$1);
var G__64607 = cljs.core.chunk_rest.call(null,seq__64584_64605__$1);
var G__64608 = c__44313__auto___64606;
var G__64609 = cljs.core.count.call(null,c__44313__auto___64606);
var G__64610 = (0);
seq__64584_64595 = G__64607;
chunk__64585_64596 = G__64608;
count__64586_64597 = G__64609;
i__64587_64598 = G__64610;
continue;
} else {
var dep_64611 = cljs.core.first.call(null,seq__64584_64605__$1);
topo_sort_helper_STAR_.call(null,dep_64611,(depth + (1)),state);

var G__64612 = cljs.core.next.call(null,seq__64584_64605__$1);
var G__64613 = null;
var G__64614 = (0);
var G__64615 = (0);
seq__64584_64595 = G__64612;
chunk__64585_64596 = G__64613;
count__64586_64597 = G__64614;
i__64587_64598 = G__64615;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__64588){
var vec__64592 = p__64588;
var seq__64593 = cljs.core.seq.call(null,vec__64592);
var first__64594 = cljs.core.first.call(null,seq__64593);
var seq__64593__$1 = cljs.core.next.call(null,seq__64593);
var x = first__64594;
var xs = seq__64593__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__64592,seq__64593,first__64594,seq__64593__$1,x,xs,get_deps__$1){
return (function (p1__64534_SHARP_){
return clojure.set.difference.call(null,p1__64534_SHARP_,x);
});})(vec__64592,seq__64593,first__64594,seq__64593__$1,x,xs,get_deps__$1))
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
var seq__64628 = cljs.core.seq.call(null,provides);
var chunk__64629 = null;
var count__64630 = (0);
var i__64631 = (0);
while(true){
if((i__64631 < count__64630)){
var prov = cljs.core._nth.call(null,chunk__64629,i__64631);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__64632_64640 = cljs.core.seq.call(null,requires);
var chunk__64633_64641 = null;
var count__64634_64642 = (0);
var i__64635_64643 = (0);
while(true){
if((i__64635_64643 < count__64634_64642)){
var req_64644 = cljs.core._nth.call(null,chunk__64633_64641,i__64635_64643);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_64644,prov);

var G__64645 = seq__64632_64640;
var G__64646 = chunk__64633_64641;
var G__64647 = count__64634_64642;
var G__64648 = (i__64635_64643 + (1));
seq__64632_64640 = G__64645;
chunk__64633_64641 = G__64646;
count__64634_64642 = G__64647;
i__64635_64643 = G__64648;
continue;
} else {
var temp__4657__auto___64649 = cljs.core.seq.call(null,seq__64632_64640);
if(temp__4657__auto___64649){
var seq__64632_64650__$1 = temp__4657__auto___64649;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64632_64650__$1)){
var c__44313__auto___64651 = cljs.core.chunk_first.call(null,seq__64632_64650__$1);
var G__64652 = cljs.core.chunk_rest.call(null,seq__64632_64650__$1);
var G__64653 = c__44313__auto___64651;
var G__64654 = cljs.core.count.call(null,c__44313__auto___64651);
var G__64655 = (0);
seq__64632_64640 = G__64652;
chunk__64633_64641 = G__64653;
count__64634_64642 = G__64654;
i__64635_64643 = G__64655;
continue;
} else {
var req_64656 = cljs.core.first.call(null,seq__64632_64650__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_64656,prov);

var G__64657 = cljs.core.next.call(null,seq__64632_64650__$1);
var G__64658 = null;
var G__64659 = (0);
var G__64660 = (0);
seq__64632_64640 = G__64657;
chunk__64633_64641 = G__64658;
count__64634_64642 = G__64659;
i__64635_64643 = G__64660;
continue;
}
} else {
}
}
break;
}

var G__64661 = seq__64628;
var G__64662 = chunk__64629;
var G__64663 = count__64630;
var G__64664 = (i__64631 + (1));
seq__64628 = G__64661;
chunk__64629 = G__64662;
count__64630 = G__64663;
i__64631 = G__64664;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__64628);
if(temp__4657__auto__){
var seq__64628__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64628__$1)){
var c__44313__auto__ = cljs.core.chunk_first.call(null,seq__64628__$1);
var G__64665 = cljs.core.chunk_rest.call(null,seq__64628__$1);
var G__64666 = c__44313__auto__;
var G__64667 = cljs.core.count.call(null,c__44313__auto__);
var G__64668 = (0);
seq__64628 = G__64665;
chunk__64629 = G__64666;
count__64630 = G__64667;
i__64631 = G__64668;
continue;
} else {
var prov = cljs.core.first.call(null,seq__64628__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__64636_64669 = cljs.core.seq.call(null,requires);
var chunk__64637_64670 = null;
var count__64638_64671 = (0);
var i__64639_64672 = (0);
while(true){
if((i__64639_64672 < count__64638_64671)){
var req_64673 = cljs.core._nth.call(null,chunk__64637_64670,i__64639_64672);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_64673,prov);

var G__64674 = seq__64636_64669;
var G__64675 = chunk__64637_64670;
var G__64676 = count__64638_64671;
var G__64677 = (i__64639_64672 + (1));
seq__64636_64669 = G__64674;
chunk__64637_64670 = G__64675;
count__64638_64671 = G__64676;
i__64639_64672 = G__64677;
continue;
} else {
var temp__4657__auto___64678__$1 = cljs.core.seq.call(null,seq__64636_64669);
if(temp__4657__auto___64678__$1){
var seq__64636_64679__$1 = temp__4657__auto___64678__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64636_64679__$1)){
var c__44313__auto___64680 = cljs.core.chunk_first.call(null,seq__64636_64679__$1);
var G__64681 = cljs.core.chunk_rest.call(null,seq__64636_64679__$1);
var G__64682 = c__44313__auto___64680;
var G__64683 = cljs.core.count.call(null,c__44313__auto___64680);
var G__64684 = (0);
seq__64636_64669 = G__64681;
chunk__64637_64670 = G__64682;
count__64638_64671 = G__64683;
i__64639_64672 = G__64684;
continue;
} else {
var req_64685 = cljs.core.first.call(null,seq__64636_64679__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_64685,prov);

var G__64686 = cljs.core.next.call(null,seq__64636_64679__$1);
var G__64687 = null;
var G__64688 = (0);
var G__64689 = (0);
seq__64636_64669 = G__64686;
chunk__64637_64670 = G__64687;
count__64638_64671 = G__64688;
i__64639_64672 = G__64689;
continue;
}
} else {
}
}
break;
}

var G__64690 = cljs.core.next.call(null,seq__64628__$1);
var G__64691 = null;
var G__64692 = (0);
var G__64693 = (0);
seq__64628 = G__64690;
chunk__64629 = G__64691;
count__64630 = G__64692;
i__64631 = G__64693;
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
var seq__64698_64702 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__64699_64703 = null;
var count__64700_64704 = (0);
var i__64701_64705 = (0);
while(true){
if((i__64701_64705 < count__64700_64704)){
var ns_64706 = cljs.core._nth.call(null,chunk__64699_64703,i__64701_64705);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_64706);

var G__64707 = seq__64698_64702;
var G__64708 = chunk__64699_64703;
var G__64709 = count__64700_64704;
var G__64710 = (i__64701_64705 + (1));
seq__64698_64702 = G__64707;
chunk__64699_64703 = G__64708;
count__64700_64704 = G__64709;
i__64701_64705 = G__64710;
continue;
} else {
var temp__4657__auto___64711 = cljs.core.seq.call(null,seq__64698_64702);
if(temp__4657__auto___64711){
var seq__64698_64712__$1 = temp__4657__auto___64711;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64698_64712__$1)){
var c__44313__auto___64713 = cljs.core.chunk_first.call(null,seq__64698_64712__$1);
var G__64714 = cljs.core.chunk_rest.call(null,seq__64698_64712__$1);
var G__64715 = c__44313__auto___64713;
var G__64716 = cljs.core.count.call(null,c__44313__auto___64713);
var G__64717 = (0);
seq__64698_64702 = G__64714;
chunk__64699_64703 = G__64715;
count__64700_64704 = G__64716;
i__64701_64705 = G__64717;
continue;
} else {
var ns_64718 = cljs.core.first.call(null,seq__64698_64712__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_64718);

var G__64719 = cljs.core.next.call(null,seq__64698_64712__$1);
var G__64720 = null;
var G__64721 = (0);
var G__64722 = (0);
seq__64698_64702 = G__64719;
chunk__64699_64703 = G__64720;
count__64700_64704 = G__64721;
i__64701_64705 = G__64722;
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
goog.require_figwheel_backup_ = (function (){var or__43494__auto__ = goog.require__;
if(cljs.core.truth_(or__43494__auto__)){
return or__43494__auto__;
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
var G__64723__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__64723 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64724__i = 0, G__64724__a = new Array(arguments.length -  0);
while (G__64724__i < G__64724__a.length) {G__64724__a[G__64724__i] = arguments[G__64724__i + 0]; ++G__64724__i;}
  args = new cljs.core.IndexedSeq(G__64724__a,0);
} 
return G__64723__delegate.call(this,args);};
G__64723.cljs$lang$maxFixedArity = 0;
G__64723.cljs$lang$applyTo = (function (arglist__64725){
var args = cljs.core.seq(arglist__64725);
return G__64723__delegate(args);
});
G__64723.cljs$core$IFn$_invoke$arity$variadic = G__64723__delegate;
return G__64723;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__64727 = cljs.core._EQ_;
var expr__64728 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__64727.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__64728))){
var path_parts = ((function (pred__64727,expr__64728){
return (function (p1__64726_SHARP_){
return clojure.string.split.call(null,p1__64726_SHARP_,/[\/\\]/);
});})(pred__64727,expr__64728))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__64727,expr__64728){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e64730){if((e64730 instanceof Error)){
var e = e64730;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e64730;

}
}})());
});
;})(path_parts,sep,root,pred__64727,expr__64728))
} else {
if(cljs.core.truth_(pred__64727.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__64728))){
return ((function (pred__64727,expr__64728){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__64727,expr__64728){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__64727,expr__64728))
);

return deferred.addErrback(((function (deferred,pred__64727,expr__64728){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__64727,expr__64728))
);
});
;})(pred__64727,expr__64728))
} else {
return ((function (pred__64727,expr__64728){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__64727,expr__64728))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__64731,callback){
var map__64734 = p__64731;
var map__64734__$1 = ((((!((map__64734 == null)))?((((map__64734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64734.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64734):map__64734);
var file_msg = map__64734__$1;
var request_url = cljs.core.get.call(null,map__64734__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__64734,map__64734__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__64734,map__64734__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__49215__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49215__auto__){
return (function (){
var f__49216__auto__ = (function (){var switch__49159__auto__ = ((function (c__49215__auto__){
return (function (state_64758){
var state_val_64759 = (state_64758[(1)]);
if((state_val_64759 === (7))){
var inst_64754 = (state_64758[(2)]);
var state_64758__$1 = state_64758;
var statearr_64760_64780 = state_64758__$1;
(statearr_64760_64780[(2)] = inst_64754);

(statearr_64760_64780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64759 === (1))){
var state_64758__$1 = state_64758;
var statearr_64761_64781 = state_64758__$1;
(statearr_64761_64781[(2)] = null);

(statearr_64761_64781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64759 === (4))){
var inst_64738 = (state_64758[(7)]);
var inst_64738__$1 = (state_64758[(2)]);
var state_64758__$1 = (function (){var statearr_64762 = state_64758;
(statearr_64762[(7)] = inst_64738__$1);

return statearr_64762;
})();
if(cljs.core.truth_(inst_64738__$1)){
var statearr_64763_64782 = state_64758__$1;
(statearr_64763_64782[(1)] = (5));

} else {
var statearr_64764_64783 = state_64758__$1;
(statearr_64764_64783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64759 === (6))){
var state_64758__$1 = state_64758;
var statearr_64765_64784 = state_64758__$1;
(statearr_64765_64784[(2)] = null);

(statearr_64765_64784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64759 === (3))){
var inst_64756 = (state_64758[(2)]);
var state_64758__$1 = state_64758;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64758__$1,inst_64756);
} else {
if((state_val_64759 === (2))){
var state_64758__$1 = state_64758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64758__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_64759 === (11))){
var inst_64750 = (state_64758[(2)]);
var state_64758__$1 = (function (){var statearr_64766 = state_64758;
(statearr_64766[(8)] = inst_64750);

return statearr_64766;
})();
var statearr_64767_64785 = state_64758__$1;
(statearr_64767_64785[(2)] = null);

(statearr_64767_64785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64759 === (9))){
var inst_64742 = (state_64758[(9)]);
var inst_64744 = (state_64758[(10)]);
var inst_64746 = inst_64744.call(null,inst_64742);
var state_64758__$1 = state_64758;
var statearr_64768_64786 = state_64758__$1;
(statearr_64768_64786[(2)] = inst_64746);

(statearr_64768_64786[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64759 === (5))){
var inst_64738 = (state_64758[(7)]);
var inst_64740 = figwheel.client.file_reloading.blocking_load.call(null,inst_64738);
var state_64758__$1 = state_64758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64758__$1,(8),inst_64740);
} else {
if((state_val_64759 === (10))){
var inst_64742 = (state_64758[(9)]);
var inst_64748 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_64742);
var state_64758__$1 = state_64758;
var statearr_64769_64787 = state_64758__$1;
(statearr_64769_64787[(2)] = inst_64748);

(statearr_64769_64787[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64759 === (8))){
var inst_64738 = (state_64758[(7)]);
var inst_64744 = (state_64758[(10)]);
var inst_64742 = (state_64758[(2)]);
var inst_64743 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_64744__$1 = cljs.core.get.call(null,inst_64743,inst_64738);
var state_64758__$1 = (function (){var statearr_64770 = state_64758;
(statearr_64770[(9)] = inst_64742);

(statearr_64770[(10)] = inst_64744__$1);

return statearr_64770;
})();
if(cljs.core.truth_(inst_64744__$1)){
var statearr_64771_64788 = state_64758__$1;
(statearr_64771_64788[(1)] = (9));

} else {
var statearr_64772_64789 = state_64758__$1;
(statearr_64772_64789[(1)] = (10));

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
});})(c__49215__auto__))
;
return ((function (switch__49159__auto__,c__49215__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__49160__auto__ = null;
var figwheel$client$file_reloading$state_machine__49160__auto____0 = (function (){
var statearr_64776 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_64776[(0)] = figwheel$client$file_reloading$state_machine__49160__auto__);

(statearr_64776[(1)] = (1));

return statearr_64776;
});
var figwheel$client$file_reloading$state_machine__49160__auto____1 = (function (state_64758){
while(true){
var ret_value__49161__auto__ = (function (){try{while(true){
var result__49162__auto__ = switch__49159__auto__.call(null,state_64758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49162__auto__;
}
break;
}
}catch (e64777){if((e64777 instanceof Object)){
var ex__49163__auto__ = e64777;
var statearr_64778_64790 = state_64758;
(statearr_64778_64790[(5)] = ex__49163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64791 = state_64758;
state_64758 = G__64791;
continue;
} else {
return ret_value__49161__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__49160__auto__ = function(state_64758){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__49160__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__49160__auto____1.call(this,state_64758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__49160__auto____0;
figwheel$client$file_reloading$state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__49160__auto____1;
return figwheel$client$file_reloading$state_machine__49160__auto__;
})()
;})(switch__49159__auto__,c__49215__auto__))
})();
var state__49217__auto__ = (function (){var statearr_64779 = f__49216__auto__.call(null);
(statearr_64779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49215__auto__);

return statearr_64779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49217__auto__);
});})(c__49215__auto__))
);

return c__49215__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__64792,callback){
var map__64795 = p__64792;
var map__64795__$1 = ((((!((map__64795 == null)))?((((map__64795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64795.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64795):map__64795);
var file_msg = map__64795__$1;
var namespace = cljs.core.get.call(null,map__64795__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__64795,map__64795__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__64795,map__64795__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__64797){
var map__64800 = p__64797;
var map__64800__$1 = ((((!((map__64800 == null)))?((((map__64800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64800.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64800):map__64800);
var file_msg = map__64800__$1;
var namespace = cljs.core.get.call(null,map__64800__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__43482__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__43482__auto__){
var or__43494__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__43494__auto__)){
return or__43494__auto__;
} else {
var or__43494__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__43494__auto____$1)){
return or__43494__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__43482__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__64802,callback){
var map__64805 = p__64802;
var map__64805__$1 = ((((!((map__64805 == null)))?((((map__64805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64805.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64805):map__64805);
var file_msg = map__64805__$1;
var request_url = cljs.core.get.call(null,map__64805__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__64805__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__49215__auto___64909 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49215__auto___64909,out){
return (function (){
var f__49216__auto__ = (function (){var switch__49159__auto__ = ((function (c__49215__auto___64909,out){
return (function (state_64891){
var state_val_64892 = (state_64891[(1)]);
if((state_val_64892 === (1))){
var inst_64865 = cljs.core.seq.call(null,files);
var inst_64866 = cljs.core.first.call(null,inst_64865);
var inst_64867 = cljs.core.next.call(null,inst_64865);
var inst_64868 = files;
var state_64891__$1 = (function (){var statearr_64893 = state_64891;
(statearr_64893[(7)] = inst_64867);

(statearr_64893[(8)] = inst_64868);

(statearr_64893[(9)] = inst_64866);

return statearr_64893;
})();
var statearr_64894_64910 = state_64891__$1;
(statearr_64894_64910[(2)] = null);

(statearr_64894_64910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64892 === (2))){
var inst_64868 = (state_64891[(8)]);
var inst_64874 = (state_64891[(10)]);
var inst_64873 = cljs.core.seq.call(null,inst_64868);
var inst_64874__$1 = cljs.core.first.call(null,inst_64873);
var inst_64875 = cljs.core.next.call(null,inst_64873);
var inst_64876 = (inst_64874__$1 == null);
var inst_64877 = cljs.core.not.call(null,inst_64876);
var state_64891__$1 = (function (){var statearr_64895 = state_64891;
(statearr_64895[(11)] = inst_64875);

(statearr_64895[(10)] = inst_64874__$1);

return statearr_64895;
})();
if(inst_64877){
var statearr_64896_64911 = state_64891__$1;
(statearr_64896_64911[(1)] = (4));

} else {
var statearr_64897_64912 = state_64891__$1;
(statearr_64897_64912[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64892 === (3))){
var inst_64889 = (state_64891[(2)]);
var state_64891__$1 = state_64891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64891__$1,inst_64889);
} else {
if((state_val_64892 === (4))){
var inst_64874 = (state_64891[(10)]);
var inst_64879 = figwheel.client.file_reloading.reload_js_file.call(null,inst_64874);
var state_64891__$1 = state_64891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64891__$1,(7),inst_64879);
} else {
if((state_val_64892 === (5))){
var inst_64885 = cljs.core.async.close_BANG_.call(null,out);
var state_64891__$1 = state_64891;
var statearr_64898_64913 = state_64891__$1;
(statearr_64898_64913[(2)] = inst_64885);

(statearr_64898_64913[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64892 === (6))){
var inst_64887 = (state_64891[(2)]);
var state_64891__$1 = state_64891;
var statearr_64899_64914 = state_64891__$1;
(statearr_64899_64914[(2)] = inst_64887);

(statearr_64899_64914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64892 === (7))){
var inst_64875 = (state_64891[(11)]);
var inst_64881 = (state_64891[(2)]);
var inst_64882 = cljs.core.async.put_BANG_.call(null,out,inst_64881);
var inst_64868 = inst_64875;
var state_64891__$1 = (function (){var statearr_64900 = state_64891;
(statearr_64900[(8)] = inst_64868);

(statearr_64900[(12)] = inst_64882);

return statearr_64900;
})();
var statearr_64901_64915 = state_64891__$1;
(statearr_64901_64915[(2)] = null);

(statearr_64901_64915[(1)] = (2));


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
});})(c__49215__auto___64909,out))
;
return ((function (switch__49159__auto__,c__49215__auto___64909,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__49160__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__49160__auto____0 = (function (){
var statearr_64905 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64905[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__49160__auto__);

(statearr_64905[(1)] = (1));

return statearr_64905;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__49160__auto____1 = (function (state_64891){
while(true){
var ret_value__49161__auto__ = (function (){try{while(true){
var result__49162__auto__ = switch__49159__auto__.call(null,state_64891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49162__auto__;
}
break;
}
}catch (e64906){if((e64906 instanceof Object)){
var ex__49163__auto__ = e64906;
var statearr_64907_64916 = state_64891;
(statearr_64907_64916[(5)] = ex__49163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64917 = state_64891;
state_64891 = G__64917;
continue;
} else {
return ret_value__49161__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__49160__auto__ = function(state_64891){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__49160__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__49160__auto____1.call(this,state_64891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__49160__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__49160__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__49160__auto__;
})()
;})(switch__49159__auto__,c__49215__auto___64909,out))
})();
var state__49217__auto__ = (function (){var statearr_64908 = f__49216__auto__.call(null);
(statearr_64908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49215__auto___64909);

return statearr_64908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49217__auto__);
});})(c__49215__auto___64909,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__64918,opts){
var map__64922 = p__64918;
var map__64922__$1 = ((((!((map__64922 == null)))?((((map__64922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64922.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64922):map__64922);
var eval_body = cljs.core.get.call(null,map__64922__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__64922__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__43482__auto__ = eval_body;
if(cljs.core.truth_(and__43482__auto__)){
return typeof eval_body === 'string';
} else {
return and__43482__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e64924){var e = e64924;
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
return (function (p1__64925_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__64925_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__64934){
var vec__64935 = p__64934;
var k = cljs.core.nth.call(null,vec__64935,(0),null);
var v = cljs.core.nth.call(null,vec__64935,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__64938){
var vec__64939 = p__64938;
var k = cljs.core.nth.call(null,vec__64939,(0),null);
var v = cljs.core.nth.call(null,vec__64939,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__64945,p__64946){
var map__65194 = p__64945;
var map__65194__$1 = ((((!((map__65194 == null)))?((((map__65194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65194.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65194):map__65194);
var opts = map__65194__$1;
var before_jsload = cljs.core.get.call(null,map__65194__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__65194__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__65194__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__65195 = p__64946;
var map__65195__$1 = ((((!((map__65195 == null)))?((((map__65195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65195.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65195):map__65195);
var msg = map__65195__$1;
var files = cljs.core.get.call(null,map__65195__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__65195__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__65195__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__49215__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49215__auto__,map__65194,map__65194__$1,opts,before_jsload,on_jsload,reload_dependents,map__65195,map__65195__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__49216__auto__ = (function (){var switch__49159__auto__ = ((function (c__49215__auto__,map__65194,map__65194__$1,opts,before_jsload,on_jsload,reload_dependents,map__65195,map__65195__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_65349){
var state_val_65350 = (state_65349[(1)]);
if((state_val_65350 === (7))){
var inst_65211 = (state_65349[(7)]);
var inst_65210 = (state_65349[(8)]);
var inst_65212 = (state_65349[(9)]);
var inst_65209 = (state_65349[(10)]);
var inst_65217 = cljs.core._nth.call(null,inst_65210,inst_65212);
var inst_65218 = figwheel.client.file_reloading.eval_body.call(null,inst_65217,opts);
var inst_65219 = (inst_65212 + (1));
var tmp65351 = inst_65211;
var tmp65352 = inst_65210;
var tmp65353 = inst_65209;
var inst_65209__$1 = tmp65353;
var inst_65210__$1 = tmp65352;
var inst_65211__$1 = tmp65351;
var inst_65212__$1 = inst_65219;
var state_65349__$1 = (function (){var statearr_65354 = state_65349;
(statearr_65354[(11)] = inst_65218);

(statearr_65354[(7)] = inst_65211__$1);

(statearr_65354[(8)] = inst_65210__$1);

(statearr_65354[(9)] = inst_65212__$1);

(statearr_65354[(10)] = inst_65209__$1);

return statearr_65354;
})();
var statearr_65355_65441 = state_65349__$1;
(statearr_65355_65441[(2)] = null);

(statearr_65355_65441[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65350 === (20))){
var inst_65252 = (state_65349[(12)]);
var inst_65260 = figwheel.client.file_reloading.sort_files.call(null,inst_65252);
var state_65349__$1 = state_65349;
var statearr_65356_65442 = state_65349__$1;
(statearr_65356_65442[(2)] = inst_65260);

(statearr_65356_65442[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65350 === (27))){
var state_65349__$1 = state_65349;
var statearr_65357_65443 = state_65349__$1;
(statearr_65357_65443[(2)] = null);

(statearr_65357_65443[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65350 === (1))){
var inst_65201 = (state_65349[(13)]);
var inst_65198 = before_jsload.call(null,files);
var inst_65199 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_65200 = (function (){return ((function (inst_65201,inst_65198,inst_65199,state_val_65350,c__49215__auto__,map__65194,map__65194__$1,opts,before_jsload,on_jsload,reload_dependents,map__65195,map__65195__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__64942_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__64942_SHARP_);
});
;})(inst_65201,inst_65198,inst_65199,state_val_65350,c__49215__auto__,map__65194,map__65194__$1,opts,before_jsload,on_jsload,reload_dependents,map__65195,map__65195__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_65201__$1 = cljs.core.filter.call(null,inst_65200,files);
var inst_65202 = cljs.core.not_empty.call(null,inst_65201__$1);
var state_65349__$1 = (function (){var statearr_65358 = state_65349;
(statearr_65358[(14)] = inst_65199);

(statearr_65358[(13)] = inst_65201__$1);

(statearr_65358[(15)] = inst_65198);

return statearr_65358;
})();
if(cljs.core.truth_(inst_65202)){
var statearr_65359_65444 = state_65349__$1;
(statearr_65359_65444[(1)] = (2));

} else {
var statearr_65360_65445 = state_65349__$1;
(statearr_65360_65445[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65350 === (24))){
var state_65349__$1 = state_65349;
var statearr_65361_65446 = state_65349__$1;
(statearr_65361_65446[(2)] = null);

(statearr_65361_65446[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65350 === (39))){
var inst_65302 = (state_65349[(16)]);
var state_65349__$1 = state_65349;
var statearr_65362_65447 = state_65349__$1;
(statearr_65362_65447[(2)] = inst_65302);

(statearr_65362_65447[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65350 === (46))){
var inst_65344 = (state_65349[(2)]);
var state_65349__$1 = state_65349;
var statearr_65363_65448 = state_65349__$1;
(statearr_65363_65448[(2)] = inst_65344);

(statearr_65363_65448[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65350 === (4))){
var inst_65246 = (state_65349[(2)]);
var inst_65247 = cljs.core.List.EMPTY;
var inst_65248 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_65247);
var inst_65249 = (function (){return ((function (inst_65246,inst_65247,inst_65248,state_val_65350,c__49215__auto__,map__65194,map__65194__$1,opts,before_jsload,on_jsload,reload_dependents,map__65195,map__65195__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__64943_SHARP_){
var and__43482__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__64943_SHARP_);
if(cljs.core.truth_(and__43482__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__64943_SHARP_));
} else {
return and__43482__auto__;
}
});
;})(inst_65246,inst_65247,inst_65248,state_val_65350,c__49215__auto__,map__65194,map__65194__$1,opts,before_jsload,on_jsload,reload_dependents,map__65195,map__65195__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_65250 = cljs.core.filter.call(null,inst_65249,files);
var inst_65251 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_65252 = cljs.core.concat.call(null,inst_65250,inst_65251);
var state_65349__$1 = (function (){var statearr_65364 = state_65349;
(statearr_65364[(17)] = inst_65248);

(statearr_65364[(18)] = inst_65246);

(statearr_65364[(12)] = inst_65252);

return statearr_65364;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_65365_65449 = state_65349__$1;
(statearr_65365_65449[(1)] = (16));

} else {
var statearr_65366_65450 = state_65349__$1;
(statearr_65366_65450[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65350 === (15))){
var inst_65236 = (state_65349[(2)]);
var state_65349__$1 = state_65349;
var statearr_65367_65451 = state_65349__$1;
(statearr_65367_65451[(2)] = inst_65236);

(statearr_65367_65451[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65350 === (21))){
var inst_65262 = (state_65349[(19)]);
var inst_65262__$1 = (state_65349[(2)]);
var inst_65263 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_65262__$1);
var state_65349__$1 = (function (){var statearr_65368 = state_65349;
(statearr_65368[(19)] = inst_65262__$1);

return statearr_65368;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65349__$1,(22),inst_65263);
} else {
if((state_val_65350 === (31))){
var inst_65347 = (state_65349[(2)]);
var state_65349__$1 = state_65349;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65349__$1,inst_65347);
} else {
if((state_val_65350 === (32))){
var inst_65302 = (state_65349[(16)]);
var inst_65307 = inst_65302.cljs$lang$protocol_mask$partition0$;
var inst_65308 = (inst_65307 & (64));
var inst_65309 = inst_65302.cljs$core$ISeq$;
var inst_65310 = (cljs.core.PROTOCOL_SENTINEL === inst_65309);
var inst_65311 = (inst_65308) || (inst_65310);
var state_65349__$1 = state_65349;
if(cljs.core.truth_(inst_65311)){
var statearr_65369_65452 = state_65349__$1;
(statearr_65369_65452[(1)] = (35));

} else {
var statearr_65370_65453 = state_65349__$1;
(statearr_65370_65453[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65350 === (40))){
var inst_65324 = (state_65349[(20)]);
var inst_65323 = (state_65349[(2)]);
var inst_65324__$1 = cljs.core.get.call(null,inst_65323,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_65325 = cljs.core.get.call(null,inst_65323,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_65326 = cljs.core.not_empty.call(null,inst_65324__$1);
var state_65349__$1 = (function (){var statearr_65371 = state_65349;
(statearr_65371[(21)] = inst_65325);

(statearr_65371[(20)] = inst_65324__$1);

return statearr_65371;
})();
if(cljs.core.truth_(inst_65326)){
var statearr_65372_65454 = state_65349__$1;
(statearr_65372_65454[(1)] = (41));

} else {
var statearr_65373_65455 = state_65349__$1;
(statearr_65373_65455[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65350 === (33))){
var state_65349__$1 = state_65349;
var statearr_65374_65456 = state_65349__$1;
(statearr_65374_65456[(2)] = false);

(statearr_65374_65456[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65350 === (13))){
var inst_65222 = (state_65349[(22)]);
var inst_65226 = cljs.core.chunk_first.call(null,inst_65222);
var inst_65227 = cljs.core.chunk_rest.call(null,inst_65222);
var inst_65228 = cljs.core.count.call(null,inst_65226);
var inst_65209 = inst_65227;
var inst_65210 = inst_65226;
var inst_65211 = inst_65228;
var inst_65212 = (0);
var state_65349__$1 = (function (){var statearr_65375 = state_65349;
(statearr_65375[(7)] = inst_65211);

(statearr_65375[(8)] = inst_65210);

(statearr_65375[(9)] = inst_65212);

(statearr_65375[(10)] = inst_65209);

return statearr_65375;
})();
var statearr_65376_65457 = state_65349__$1;
(statearr_65376_65457[(2)] = null);

(statearr_65376_65457[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65350 === (22))){
var inst_65266 = (state_65349[(23)]);
var inst_65270 = (state_65349[(24)]);
var inst_65262 = (state_65349[(19)]);
var inst_65265 = (state_65349[(25)]);
var inst_65265__$1 = (state_65349[(2)]);
var inst_65266__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_65265__$1);
var inst_65267 = (function (){var all_files = inst_65262;
var res_SINGLEQUOTE_ = inst_65265__$1;
var res = inst_65266__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_65266,inst_65270,inst_65262,inst_65265,inst_65265__$1,inst_65266__$1,state_val_65350,c__49215__auto__,map__65194,map__65194__$1,opts,before_jsload,on_jsload,reload_dependents,map__65195,map__65195__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__64944_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__64944_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_65266,inst_65270,inst_65262,inst_65265,inst_65265__$1,inst_65266__$1,state_val_65350,c__49215__auto__,map__65194,map__65194__$1,opts,before_jsload,on_jsload,reload_dependents,map__65195,map__65195__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_65268 = cljs.core.filter.call(null,inst_65267,inst_65265__$1);
var inst_65269 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_65270__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_65269);
var inst_65271 = cljs.core.not_empty.call(null,inst_65270__$1);
var state_65349__$1 = (function (){var statearr_65377 = state_65349;
(statearr_65377[(23)] = inst_65266__$1);

(statearr_65377[(24)] = inst_65270__$1);

(statearr_65377[(25)] = inst_65265__$1);

(statearr_65377[(26)] = inst_65268);

return statearr_65377;
})();
if(cljs.core.truth_(inst_65271)){
var statearr_65378_65458 = state_65349__$1;
(statearr_65378_65458[(1)] = (23));

} else {
var statearr_65379_65459 = state_65349__$1;
(statearr_65379_65459[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65350 === (36))){
var state_65349__$1 = state_65349;
var statearr_65380_65460 = state_65349__$1;
(statearr_65380_65460[(2)] = false);

(statearr_65380_65460[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65350 === (41))){
var inst_65324 = (state_65349[(20)]);
var inst_65328 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_65329 = cljs.core.map.call(null,inst_65328,inst_65324);
var inst_65330 = cljs.core.pr_str.call(null,inst_65329);
var inst_65331 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_65330)].join('');
var inst_65332 = figwheel.client.utils.log.call(null,inst_65331);
var state_65349__$1 = state_65349;
var statearr_65381_65461 = state_65349__$1;
(statearr_65381_65461[(2)] = inst_65332);

(statearr_65381_65461[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65350 === (43))){
var inst_65325 = (state_65349[(21)]);
var inst_65335 = (state_65349[(2)]);
var inst_65336 = cljs.core.not_empty.call(null,inst_65325);
var state_65349__$1 = (function (){var statearr_65382 = state_65349;
(statearr_65382[(27)] = inst_65335);

return statearr_65382;
})();
if(cljs.core.truth_(inst_65336)){
var statearr_65383_65462 = state_65349__$1;
(statearr_65383_65462[(1)] = (44));

} else {
var statearr_65384_65463 = state_65349__$1;
(statearr_65384_65463[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65350 === (29))){
var inst_65266 = (state_65349[(23)]);
var inst_65270 = (state_65349[(24)]);
var inst_65262 = (state_65349[(19)]);
var inst_65302 = (state_65349[(16)]);
var inst_65265 = (state_65349[(25)]);
var inst_65268 = (state_65349[(26)]);
var inst_65298 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_65301 = (function (){var all_files = inst_65262;
var res_SINGLEQUOTE_ = inst_65265;
var res = inst_65266;
var files_not_loaded = inst_65268;
var dependencies_that_loaded = inst_65270;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_65266,inst_65270,inst_65262,inst_65302,inst_65265,inst_65268,inst_65298,state_val_65350,c__49215__auto__,map__65194,map__65194__$1,opts,before_jsload,on_jsload,reload_dependents,map__65195,map__65195__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__65300){
var map__65385 = p__65300;
var map__65385__$1 = ((((!((map__65385 == null)))?((((map__65385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65385.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65385):map__65385);
var namespace = cljs.core.get.call(null,map__65385__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_65266,inst_65270,inst_65262,inst_65302,inst_65265,inst_65268,inst_65298,state_val_65350,c__49215__auto__,map__65194,map__65194__$1,opts,before_jsload,on_jsload,reload_dependents,map__65195,map__65195__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_65302__$1 = cljs.core.group_by.call(null,inst_65301,inst_65268);
var inst_65304 = (inst_65302__$1 == null);
var inst_65305 = cljs.core.not.call(null,inst_65304);
var state_65349__$1 = (function (){var statearr_65387 = state_65349;
(statearr_65387[(16)] = inst_65302__$1);

(statearr_65387[(28)] = inst_65298);

return statearr_65387;
})();
if(inst_65305){
var statearr_65388_65464 = state_65349__$1;
(statearr_65388_65464[(1)] = (32));

} else {
var statearr_65389_65465 = state_65349__$1;
(statearr_65389_65465[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65350 === (44))){
var inst_65325 = (state_65349[(21)]);
var inst_65338 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_65325);
var inst_65339 = cljs.core.pr_str.call(null,inst_65338);
var inst_65340 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_65339)].join('');
var inst_65341 = figwheel.client.utils.log.call(null,inst_65340);
var state_65349__$1 = state_65349;
var statearr_65390_65466 = state_65349__$1;
(statearr_65390_65466[(2)] = inst_65341);

(statearr_65390_65466[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65350 === (6))){
var inst_65243 = (state_65349[(2)]);
var state_65349__$1 = state_65349;
var statearr_65391_65467 = state_65349__$1;
(statearr_65391_65467[(2)] = inst_65243);

(statearr_65391_65467[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65350 === (28))){
var inst_65268 = (state_65349[(26)]);
var inst_65295 = (state_65349[(2)]);
var inst_65296 = cljs.core.not_empty.call(null,inst_65268);
var state_65349__$1 = (function (){var statearr_65392 = state_65349;
(statearr_65392[(29)] = inst_65295);

return statearr_65392;
})();
if(cljs.core.truth_(inst_65296)){
var statearr_65393_65468 = state_65349__$1;
(statearr_65393_65468[(1)] = (29));

} else {
var statearr_65394_65469 = state_65349__$1;
(statearr_65394_65469[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65350 === (25))){
var inst_65266 = (state_65349[(23)]);
var inst_65282 = (state_65349[(2)]);
var inst_65283 = cljs.core.not_empty.call(null,inst_65266);
var state_65349__$1 = (function (){var statearr_65395 = state_65349;
(statearr_65395[(30)] = inst_65282);

return statearr_65395;
})();
if(cljs.core.truth_(inst_65283)){
var statearr_65396_65470 = state_65349__$1;
(statearr_65396_65470[(1)] = (26));

} else {
var statearr_65397_65471 = state_65349__$1;
(statearr_65397_65471[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65350 === (34))){
var inst_65318 = (state_65349[(2)]);
var state_65349__$1 = state_65349;
if(cljs.core.truth_(inst_65318)){
var statearr_65398_65472 = state_65349__$1;
(statearr_65398_65472[(1)] = (38));

} else {
var statearr_65399_65473 = state_65349__$1;
(statearr_65399_65473[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65350 === (17))){
var state_65349__$1 = state_65349;
var statearr_65400_65474 = state_65349__$1;
(statearr_65400_65474[(2)] = recompile_dependents);

(statearr_65400_65474[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65350 === (3))){
var state_65349__$1 = state_65349;
var statearr_65401_65475 = state_65349__$1;
(statearr_65401_65475[(2)] = null);

(statearr_65401_65475[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65350 === (12))){
var inst_65239 = (state_65349[(2)]);
var state_65349__$1 = state_65349;
var statearr_65402_65476 = state_65349__$1;
(statearr_65402_65476[(2)] = inst_65239);

(statearr_65402_65476[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65350 === (2))){
var inst_65201 = (state_65349[(13)]);
var inst_65208 = cljs.core.seq.call(null,inst_65201);
var inst_65209 = inst_65208;
var inst_65210 = null;
var inst_65211 = (0);
var inst_65212 = (0);
var state_65349__$1 = (function (){var statearr_65403 = state_65349;
(statearr_65403[(7)] = inst_65211);

(statearr_65403[(8)] = inst_65210);

(statearr_65403[(9)] = inst_65212);

(statearr_65403[(10)] = inst_65209);

return statearr_65403;
})();
var statearr_65404_65477 = state_65349__$1;
(statearr_65404_65477[(2)] = null);

(statearr_65404_65477[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65350 === (23))){
var inst_65266 = (state_65349[(23)]);
var inst_65270 = (state_65349[(24)]);
var inst_65262 = (state_65349[(19)]);
var inst_65265 = (state_65349[(25)]);
var inst_65268 = (state_65349[(26)]);
var inst_65273 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_65275 = (function (){var all_files = inst_65262;
var res_SINGLEQUOTE_ = inst_65265;
var res = inst_65266;
var files_not_loaded = inst_65268;
var dependencies_that_loaded = inst_65270;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_65266,inst_65270,inst_65262,inst_65265,inst_65268,inst_65273,state_val_65350,c__49215__auto__,map__65194,map__65194__$1,opts,before_jsload,on_jsload,reload_dependents,map__65195,map__65195__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__65274){
var map__65405 = p__65274;
var map__65405__$1 = ((((!((map__65405 == null)))?((((map__65405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65405.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65405):map__65405);
var request_url = cljs.core.get.call(null,map__65405__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_65266,inst_65270,inst_65262,inst_65265,inst_65268,inst_65273,state_val_65350,c__49215__auto__,map__65194,map__65194__$1,opts,before_jsload,on_jsload,reload_dependents,map__65195,map__65195__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_65276 = cljs.core.reverse.call(null,inst_65270);
var inst_65277 = cljs.core.map.call(null,inst_65275,inst_65276);
var inst_65278 = cljs.core.pr_str.call(null,inst_65277);
var inst_65279 = figwheel.client.utils.log.call(null,inst_65278);
var state_65349__$1 = (function (){var statearr_65407 = state_65349;
(statearr_65407[(31)] = inst_65273);

return statearr_65407;
})();
var statearr_65408_65478 = state_65349__$1;
(statearr_65408_65478[(2)] = inst_65279);

(statearr_65408_65478[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65350 === (35))){
var state_65349__$1 = state_65349;
var statearr_65409_65479 = state_65349__$1;
(statearr_65409_65479[(2)] = true);

(statearr_65409_65479[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65350 === (19))){
var inst_65252 = (state_65349[(12)]);
var inst_65258 = figwheel.client.file_reloading.expand_files.call(null,inst_65252);
var state_65349__$1 = state_65349;
var statearr_65410_65480 = state_65349__$1;
(statearr_65410_65480[(2)] = inst_65258);

(statearr_65410_65480[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65350 === (11))){
var state_65349__$1 = state_65349;
var statearr_65411_65481 = state_65349__$1;
(statearr_65411_65481[(2)] = null);

(statearr_65411_65481[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65350 === (9))){
var inst_65241 = (state_65349[(2)]);
var state_65349__$1 = state_65349;
var statearr_65412_65482 = state_65349__$1;
(statearr_65412_65482[(2)] = inst_65241);

(statearr_65412_65482[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65350 === (5))){
var inst_65211 = (state_65349[(7)]);
var inst_65212 = (state_65349[(9)]);
var inst_65214 = (inst_65212 < inst_65211);
var inst_65215 = inst_65214;
var state_65349__$1 = state_65349;
if(cljs.core.truth_(inst_65215)){
var statearr_65413_65483 = state_65349__$1;
(statearr_65413_65483[(1)] = (7));

} else {
var statearr_65414_65484 = state_65349__$1;
(statearr_65414_65484[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65350 === (14))){
var inst_65222 = (state_65349[(22)]);
var inst_65231 = cljs.core.first.call(null,inst_65222);
var inst_65232 = figwheel.client.file_reloading.eval_body.call(null,inst_65231,opts);
var inst_65233 = cljs.core.next.call(null,inst_65222);
var inst_65209 = inst_65233;
var inst_65210 = null;
var inst_65211 = (0);
var inst_65212 = (0);
var state_65349__$1 = (function (){var statearr_65415 = state_65349;
(statearr_65415[(7)] = inst_65211);

(statearr_65415[(8)] = inst_65210);

(statearr_65415[(9)] = inst_65212);

(statearr_65415[(10)] = inst_65209);

(statearr_65415[(32)] = inst_65232);

return statearr_65415;
})();
var statearr_65416_65485 = state_65349__$1;
(statearr_65416_65485[(2)] = null);

(statearr_65416_65485[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65350 === (45))){
var state_65349__$1 = state_65349;
var statearr_65417_65486 = state_65349__$1;
(statearr_65417_65486[(2)] = null);

(statearr_65417_65486[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65350 === (26))){
var inst_65266 = (state_65349[(23)]);
var inst_65270 = (state_65349[(24)]);
var inst_65262 = (state_65349[(19)]);
var inst_65265 = (state_65349[(25)]);
var inst_65268 = (state_65349[(26)]);
var inst_65285 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_65287 = (function (){var all_files = inst_65262;
var res_SINGLEQUOTE_ = inst_65265;
var res = inst_65266;
var files_not_loaded = inst_65268;
var dependencies_that_loaded = inst_65270;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_65266,inst_65270,inst_65262,inst_65265,inst_65268,inst_65285,state_val_65350,c__49215__auto__,map__65194,map__65194__$1,opts,before_jsload,on_jsload,reload_dependents,map__65195,map__65195__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__65286){
var map__65418 = p__65286;
var map__65418__$1 = ((((!((map__65418 == null)))?((((map__65418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65418.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65418):map__65418);
var namespace = cljs.core.get.call(null,map__65418__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__65418__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_65266,inst_65270,inst_65262,inst_65265,inst_65268,inst_65285,state_val_65350,c__49215__auto__,map__65194,map__65194__$1,opts,before_jsload,on_jsload,reload_dependents,map__65195,map__65195__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_65288 = cljs.core.map.call(null,inst_65287,inst_65266);
var inst_65289 = cljs.core.pr_str.call(null,inst_65288);
var inst_65290 = figwheel.client.utils.log.call(null,inst_65289);
var inst_65291 = (function (){var all_files = inst_65262;
var res_SINGLEQUOTE_ = inst_65265;
var res = inst_65266;
var files_not_loaded = inst_65268;
var dependencies_that_loaded = inst_65270;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_65266,inst_65270,inst_65262,inst_65265,inst_65268,inst_65285,inst_65287,inst_65288,inst_65289,inst_65290,state_val_65350,c__49215__auto__,map__65194,map__65194__$1,opts,before_jsload,on_jsload,reload_dependents,map__65195,map__65195__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_65266,inst_65270,inst_65262,inst_65265,inst_65268,inst_65285,inst_65287,inst_65288,inst_65289,inst_65290,state_val_65350,c__49215__auto__,map__65194,map__65194__$1,opts,before_jsload,on_jsload,reload_dependents,map__65195,map__65195__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_65292 = setTimeout(inst_65291,(10));
var state_65349__$1 = (function (){var statearr_65420 = state_65349;
(statearr_65420[(33)] = inst_65290);

(statearr_65420[(34)] = inst_65285);

return statearr_65420;
})();
var statearr_65421_65487 = state_65349__$1;
(statearr_65421_65487[(2)] = inst_65292);

(statearr_65421_65487[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65350 === (16))){
var state_65349__$1 = state_65349;
var statearr_65422_65488 = state_65349__$1;
(statearr_65422_65488[(2)] = reload_dependents);

(statearr_65422_65488[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65350 === (38))){
var inst_65302 = (state_65349[(16)]);
var inst_65320 = cljs.core.apply.call(null,cljs.core.hash_map,inst_65302);
var state_65349__$1 = state_65349;
var statearr_65423_65489 = state_65349__$1;
(statearr_65423_65489[(2)] = inst_65320);

(statearr_65423_65489[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65350 === (30))){
var state_65349__$1 = state_65349;
var statearr_65424_65490 = state_65349__$1;
(statearr_65424_65490[(2)] = null);

(statearr_65424_65490[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65350 === (10))){
var inst_65222 = (state_65349[(22)]);
var inst_65224 = cljs.core.chunked_seq_QMARK_.call(null,inst_65222);
var state_65349__$1 = state_65349;
if(inst_65224){
var statearr_65425_65491 = state_65349__$1;
(statearr_65425_65491[(1)] = (13));

} else {
var statearr_65426_65492 = state_65349__$1;
(statearr_65426_65492[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65350 === (18))){
var inst_65256 = (state_65349[(2)]);
var state_65349__$1 = state_65349;
if(cljs.core.truth_(inst_65256)){
var statearr_65427_65493 = state_65349__$1;
(statearr_65427_65493[(1)] = (19));

} else {
var statearr_65428_65494 = state_65349__$1;
(statearr_65428_65494[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65350 === (42))){
var state_65349__$1 = state_65349;
var statearr_65429_65495 = state_65349__$1;
(statearr_65429_65495[(2)] = null);

(statearr_65429_65495[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65350 === (37))){
var inst_65315 = (state_65349[(2)]);
var state_65349__$1 = state_65349;
var statearr_65430_65496 = state_65349__$1;
(statearr_65430_65496[(2)] = inst_65315);

(statearr_65430_65496[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65350 === (8))){
var inst_65222 = (state_65349[(22)]);
var inst_65209 = (state_65349[(10)]);
var inst_65222__$1 = cljs.core.seq.call(null,inst_65209);
var state_65349__$1 = (function (){var statearr_65431 = state_65349;
(statearr_65431[(22)] = inst_65222__$1);

return statearr_65431;
})();
if(inst_65222__$1){
var statearr_65432_65497 = state_65349__$1;
(statearr_65432_65497[(1)] = (10));

} else {
var statearr_65433_65498 = state_65349__$1;
(statearr_65433_65498[(1)] = (11));

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
});})(c__49215__auto__,map__65194,map__65194__$1,opts,before_jsload,on_jsload,reload_dependents,map__65195,map__65195__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__49159__auto__,c__49215__auto__,map__65194,map__65194__$1,opts,before_jsload,on_jsload,reload_dependents,map__65195,map__65195__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__49160__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__49160__auto____0 = (function (){
var statearr_65437 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65437[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__49160__auto__);

(statearr_65437[(1)] = (1));

return statearr_65437;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__49160__auto____1 = (function (state_65349){
while(true){
var ret_value__49161__auto__ = (function (){try{while(true){
var result__49162__auto__ = switch__49159__auto__.call(null,state_65349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49162__auto__;
}
break;
}
}catch (e65438){if((e65438 instanceof Object)){
var ex__49163__auto__ = e65438;
var statearr_65439_65499 = state_65349;
(statearr_65439_65499[(5)] = ex__49163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65500 = state_65349;
state_65349 = G__65500;
continue;
} else {
return ret_value__49161__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__49160__auto__ = function(state_65349){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__49160__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__49160__auto____1.call(this,state_65349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__49160__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__49160__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__49160__auto__;
})()
;})(switch__49159__auto__,c__49215__auto__,map__65194,map__65194__$1,opts,before_jsload,on_jsload,reload_dependents,map__65195,map__65195__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__49217__auto__ = (function (){var statearr_65440 = f__49216__auto__.call(null);
(statearr_65440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49215__auto__);

return statearr_65440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49217__auto__);
});})(c__49215__auto__,map__65194,map__65194__$1,opts,before_jsload,on_jsload,reload_dependents,map__65195,map__65195__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__49215__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__65503,link){
var map__65506 = p__65503;
var map__65506__$1 = ((((!((map__65506 == null)))?((((map__65506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65506.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65506):map__65506);
var file = cljs.core.get.call(null,map__65506__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__65506,map__65506__$1,file){
return (function (p1__65501_SHARP_,p2__65502_SHARP_){
if(cljs.core._EQ_.call(null,p1__65501_SHARP_,p2__65502_SHARP_)){
return p1__65501_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__65506,map__65506__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__65512){
var map__65513 = p__65512;
var map__65513__$1 = ((((!((map__65513 == null)))?((((map__65513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65513.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65513):map__65513);
var match_length = cljs.core.get.call(null,map__65513__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__65513__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__65508_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__65508_SHARP_);
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
var args65515 = [];
var len__44607__auto___65518 = arguments.length;
var i__44608__auto___65519 = (0);
while(true){
if((i__44608__auto___65519 < len__44607__auto___65518)){
args65515.push((arguments[i__44608__auto___65519]));

var G__65520 = (i__44608__auto___65519 + (1));
i__44608__auto___65519 = G__65520;
continue;
} else {
}
break;
}

var G__65517 = args65515.length;
switch (G__65517) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args65515.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__65522_SHARP_,p2__65523_SHARP_){
return cljs.core.assoc.call(null,p1__65522_SHARP_,cljs.core.get.call(null,p2__65523_SHARP_,key),p2__65523_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__65524){
var map__65527 = p__65524;
var map__65527__$1 = ((((!((map__65527 == null)))?((((map__65527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65527.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65527):map__65527);
var f_data = map__65527__$1;
var file = cljs.core.get.call(null,map__65527__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__65529,p__65530){
var map__65539 = p__65529;
var map__65539__$1 = ((((!((map__65539 == null)))?((((map__65539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65539.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65539):map__65539);
var opts = map__65539__$1;
var on_cssload = cljs.core.get.call(null,map__65539__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__65540 = p__65530;
var map__65540__$1 = ((((!((map__65540 == null)))?((((map__65540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65540.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65540):map__65540);
var files_msg = map__65540__$1;
var files = cljs.core.get.call(null,map__65540__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__65543_65547 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__65544_65548 = null;
var count__65545_65549 = (0);
var i__65546_65550 = (0);
while(true){
if((i__65546_65550 < count__65545_65549)){
var f_65551 = cljs.core._nth.call(null,chunk__65544_65548,i__65546_65550);
figwheel.client.file_reloading.reload_css_file.call(null,f_65551);

var G__65552 = seq__65543_65547;
var G__65553 = chunk__65544_65548;
var G__65554 = count__65545_65549;
var G__65555 = (i__65546_65550 + (1));
seq__65543_65547 = G__65552;
chunk__65544_65548 = G__65553;
count__65545_65549 = G__65554;
i__65546_65550 = G__65555;
continue;
} else {
var temp__4657__auto___65556 = cljs.core.seq.call(null,seq__65543_65547);
if(temp__4657__auto___65556){
var seq__65543_65557__$1 = temp__4657__auto___65556;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65543_65557__$1)){
var c__44313__auto___65558 = cljs.core.chunk_first.call(null,seq__65543_65557__$1);
var G__65559 = cljs.core.chunk_rest.call(null,seq__65543_65557__$1);
var G__65560 = c__44313__auto___65558;
var G__65561 = cljs.core.count.call(null,c__44313__auto___65558);
var G__65562 = (0);
seq__65543_65547 = G__65559;
chunk__65544_65548 = G__65560;
count__65545_65549 = G__65561;
i__65546_65550 = G__65562;
continue;
} else {
var f_65563 = cljs.core.first.call(null,seq__65543_65557__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_65563);

var G__65564 = cljs.core.next.call(null,seq__65543_65557__$1);
var G__65565 = null;
var G__65566 = (0);
var G__65567 = (0);
seq__65543_65547 = G__65564;
chunk__65544_65548 = G__65565;
count__65545_65549 = G__65566;
i__65546_65550 = G__65567;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__65539,map__65539__$1,opts,on_cssload,map__65540,map__65540__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__65539,map__65539__$1,opts,on_cssload,map__65540,map__65540__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1494353204353