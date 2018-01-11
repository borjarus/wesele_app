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
var or__39482__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__39482__auto__){
return or__39482__auto__;
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
var or__39482__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__39482__auto__)){
return or__39482__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__45553_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__45553_SHARP_));
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
var seq__45558 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__45559 = null;
var count__45560 = (0);
var i__45561 = (0);
while(true){
if((i__45561 < count__45560)){
var n = cljs.core._nth.call(null,chunk__45559,i__45561);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__45562 = seq__45558;
var G__45563 = chunk__45559;
var G__45564 = count__45560;
var G__45565 = (i__45561 + (1));
seq__45558 = G__45562;
chunk__45559 = G__45563;
count__45560 = G__45564;
i__45561 = G__45565;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45558);
if(temp__4657__auto__){
var seq__45558__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45558__$1)){
var c__40301__auto__ = cljs.core.chunk_first.call(null,seq__45558__$1);
var G__45566 = cljs.core.chunk_rest.call(null,seq__45558__$1);
var G__45567 = c__40301__auto__;
var G__45568 = cljs.core.count.call(null,c__40301__auto__);
var G__45569 = (0);
seq__45558 = G__45566;
chunk__45559 = G__45567;
count__45560 = G__45568;
i__45561 = G__45569;
continue;
} else {
var n = cljs.core.first.call(null,seq__45558__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__45570 = cljs.core.next.call(null,seq__45558__$1);
var G__45571 = null;
var G__45572 = (0);
var G__45573 = (0);
seq__45558 = G__45570;
chunk__45559 = G__45571;
count__45560 = G__45572;
i__45561 = G__45573;
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

var seq__45624_45635 = cljs.core.seq.call(null,deps);
var chunk__45625_45636 = null;
var count__45626_45637 = (0);
var i__45627_45638 = (0);
while(true){
if((i__45627_45638 < count__45626_45637)){
var dep_45639 = cljs.core._nth.call(null,chunk__45625_45636,i__45627_45638);
topo_sort_helper_STAR_.call(null,dep_45639,(depth + (1)),state);

var G__45640 = seq__45624_45635;
var G__45641 = chunk__45625_45636;
var G__45642 = count__45626_45637;
var G__45643 = (i__45627_45638 + (1));
seq__45624_45635 = G__45640;
chunk__45625_45636 = G__45641;
count__45626_45637 = G__45642;
i__45627_45638 = G__45643;
continue;
} else {
var temp__4657__auto___45644 = cljs.core.seq.call(null,seq__45624_45635);
if(temp__4657__auto___45644){
var seq__45624_45645__$1 = temp__4657__auto___45644;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45624_45645__$1)){
var c__40301__auto___45646 = cljs.core.chunk_first.call(null,seq__45624_45645__$1);
var G__45647 = cljs.core.chunk_rest.call(null,seq__45624_45645__$1);
var G__45648 = c__40301__auto___45646;
var G__45649 = cljs.core.count.call(null,c__40301__auto___45646);
var G__45650 = (0);
seq__45624_45635 = G__45647;
chunk__45625_45636 = G__45648;
count__45626_45637 = G__45649;
i__45627_45638 = G__45650;
continue;
} else {
var dep_45651 = cljs.core.first.call(null,seq__45624_45645__$1);
topo_sort_helper_STAR_.call(null,dep_45651,(depth + (1)),state);

var G__45652 = cljs.core.next.call(null,seq__45624_45645__$1);
var G__45653 = null;
var G__45654 = (0);
var G__45655 = (0);
seq__45624_45635 = G__45652;
chunk__45625_45636 = G__45653;
count__45626_45637 = G__45654;
i__45627_45638 = G__45655;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__45628){
var vec__45632 = p__45628;
var seq__45633 = cljs.core.seq.call(null,vec__45632);
var first__45634 = cljs.core.first.call(null,seq__45633);
var seq__45633__$1 = cljs.core.next.call(null,seq__45633);
var x = first__45634;
var xs = seq__45633__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__45632,seq__45633,first__45634,seq__45633__$1,x,xs,get_deps__$1){
return (function (p1__45574_SHARP_){
return clojure.set.difference.call(null,p1__45574_SHARP_,x);
});})(vec__45632,seq__45633,first__45634,seq__45633__$1,x,xs,get_deps__$1))
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
var seq__45668 = cljs.core.seq.call(null,provides);
var chunk__45669 = null;
var count__45670 = (0);
var i__45671 = (0);
while(true){
if((i__45671 < count__45670)){
var prov = cljs.core._nth.call(null,chunk__45669,i__45671);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__45672_45680 = cljs.core.seq.call(null,requires);
var chunk__45673_45681 = null;
var count__45674_45682 = (0);
var i__45675_45683 = (0);
while(true){
if((i__45675_45683 < count__45674_45682)){
var req_45684 = cljs.core._nth.call(null,chunk__45673_45681,i__45675_45683);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45684,prov);

var G__45685 = seq__45672_45680;
var G__45686 = chunk__45673_45681;
var G__45687 = count__45674_45682;
var G__45688 = (i__45675_45683 + (1));
seq__45672_45680 = G__45685;
chunk__45673_45681 = G__45686;
count__45674_45682 = G__45687;
i__45675_45683 = G__45688;
continue;
} else {
var temp__4657__auto___45689 = cljs.core.seq.call(null,seq__45672_45680);
if(temp__4657__auto___45689){
var seq__45672_45690__$1 = temp__4657__auto___45689;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45672_45690__$1)){
var c__40301__auto___45691 = cljs.core.chunk_first.call(null,seq__45672_45690__$1);
var G__45692 = cljs.core.chunk_rest.call(null,seq__45672_45690__$1);
var G__45693 = c__40301__auto___45691;
var G__45694 = cljs.core.count.call(null,c__40301__auto___45691);
var G__45695 = (0);
seq__45672_45680 = G__45692;
chunk__45673_45681 = G__45693;
count__45674_45682 = G__45694;
i__45675_45683 = G__45695;
continue;
} else {
var req_45696 = cljs.core.first.call(null,seq__45672_45690__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45696,prov);

var G__45697 = cljs.core.next.call(null,seq__45672_45690__$1);
var G__45698 = null;
var G__45699 = (0);
var G__45700 = (0);
seq__45672_45680 = G__45697;
chunk__45673_45681 = G__45698;
count__45674_45682 = G__45699;
i__45675_45683 = G__45700;
continue;
}
} else {
}
}
break;
}

var G__45701 = seq__45668;
var G__45702 = chunk__45669;
var G__45703 = count__45670;
var G__45704 = (i__45671 + (1));
seq__45668 = G__45701;
chunk__45669 = G__45702;
count__45670 = G__45703;
i__45671 = G__45704;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45668);
if(temp__4657__auto__){
var seq__45668__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45668__$1)){
var c__40301__auto__ = cljs.core.chunk_first.call(null,seq__45668__$1);
var G__45705 = cljs.core.chunk_rest.call(null,seq__45668__$1);
var G__45706 = c__40301__auto__;
var G__45707 = cljs.core.count.call(null,c__40301__auto__);
var G__45708 = (0);
seq__45668 = G__45705;
chunk__45669 = G__45706;
count__45670 = G__45707;
i__45671 = G__45708;
continue;
} else {
var prov = cljs.core.first.call(null,seq__45668__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__45676_45709 = cljs.core.seq.call(null,requires);
var chunk__45677_45710 = null;
var count__45678_45711 = (0);
var i__45679_45712 = (0);
while(true){
if((i__45679_45712 < count__45678_45711)){
var req_45713 = cljs.core._nth.call(null,chunk__45677_45710,i__45679_45712);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45713,prov);

var G__45714 = seq__45676_45709;
var G__45715 = chunk__45677_45710;
var G__45716 = count__45678_45711;
var G__45717 = (i__45679_45712 + (1));
seq__45676_45709 = G__45714;
chunk__45677_45710 = G__45715;
count__45678_45711 = G__45716;
i__45679_45712 = G__45717;
continue;
} else {
var temp__4657__auto___45718__$1 = cljs.core.seq.call(null,seq__45676_45709);
if(temp__4657__auto___45718__$1){
var seq__45676_45719__$1 = temp__4657__auto___45718__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45676_45719__$1)){
var c__40301__auto___45720 = cljs.core.chunk_first.call(null,seq__45676_45719__$1);
var G__45721 = cljs.core.chunk_rest.call(null,seq__45676_45719__$1);
var G__45722 = c__40301__auto___45720;
var G__45723 = cljs.core.count.call(null,c__40301__auto___45720);
var G__45724 = (0);
seq__45676_45709 = G__45721;
chunk__45677_45710 = G__45722;
count__45678_45711 = G__45723;
i__45679_45712 = G__45724;
continue;
} else {
var req_45725 = cljs.core.first.call(null,seq__45676_45719__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45725,prov);

var G__45726 = cljs.core.next.call(null,seq__45676_45719__$1);
var G__45727 = null;
var G__45728 = (0);
var G__45729 = (0);
seq__45676_45709 = G__45726;
chunk__45677_45710 = G__45727;
count__45678_45711 = G__45728;
i__45679_45712 = G__45729;
continue;
}
} else {
}
}
break;
}

var G__45730 = cljs.core.next.call(null,seq__45668__$1);
var G__45731 = null;
var G__45732 = (0);
var G__45733 = (0);
seq__45668 = G__45730;
chunk__45669 = G__45731;
count__45670 = G__45732;
i__45671 = G__45733;
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
var seq__45738_45742 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__45739_45743 = null;
var count__45740_45744 = (0);
var i__45741_45745 = (0);
while(true){
if((i__45741_45745 < count__45740_45744)){
var ns_45746 = cljs.core._nth.call(null,chunk__45739_45743,i__45741_45745);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_45746);

var G__45747 = seq__45738_45742;
var G__45748 = chunk__45739_45743;
var G__45749 = count__45740_45744;
var G__45750 = (i__45741_45745 + (1));
seq__45738_45742 = G__45747;
chunk__45739_45743 = G__45748;
count__45740_45744 = G__45749;
i__45741_45745 = G__45750;
continue;
} else {
var temp__4657__auto___45751 = cljs.core.seq.call(null,seq__45738_45742);
if(temp__4657__auto___45751){
var seq__45738_45752__$1 = temp__4657__auto___45751;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45738_45752__$1)){
var c__40301__auto___45753 = cljs.core.chunk_first.call(null,seq__45738_45752__$1);
var G__45754 = cljs.core.chunk_rest.call(null,seq__45738_45752__$1);
var G__45755 = c__40301__auto___45753;
var G__45756 = cljs.core.count.call(null,c__40301__auto___45753);
var G__45757 = (0);
seq__45738_45742 = G__45754;
chunk__45739_45743 = G__45755;
count__45740_45744 = G__45756;
i__45741_45745 = G__45757;
continue;
} else {
var ns_45758 = cljs.core.first.call(null,seq__45738_45752__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_45758);

var G__45759 = cljs.core.next.call(null,seq__45738_45752__$1);
var G__45760 = null;
var G__45761 = (0);
var G__45762 = (0);
seq__45738_45742 = G__45759;
chunk__45739_45743 = G__45760;
count__45740_45744 = G__45761;
i__45741_45745 = G__45762;
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
goog.require_figwheel_backup_ = (function (){var or__39482__auto__ = goog.require__;
if(cljs.core.truth_(or__39482__auto__)){
return or__39482__auto__;
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
var G__45763__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__45763 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45764__i = 0, G__45764__a = new Array(arguments.length -  0);
while (G__45764__i < G__45764__a.length) {G__45764__a[G__45764__i] = arguments[G__45764__i + 0]; ++G__45764__i;}
  args = new cljs.core.IndexedSeq(G__45764__a,0);
} 
return G__45763__delegate.call(this,args);};
G__45763.cljs$lang$maxFixedArity = 0;
G__45763.cljs$lang$applyTo = (function (arglist__45765){
var args = cljs.core.seq(arglist__45765);
return G__45763__delegate(args);
});
G__45763.cljs$core$IFn$_invoke$arity$variadic = G__45763__delegate;
return G__45763;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__45767 = cljs.core._EQ_;
var expr__45768 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__45767.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__45768))){
var path_parts = ((function (pred__45767,expr__45768){
return (function (p1__45766_SHARP_){
return clojure.string.split.call(null,p1__45766_SHARP_,/[\/\\]/);
});})(pred__45767,expr__45768))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__45767,expr__45768){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e45770){if((e45770 instanceof Error)){
var e = e45770;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e45770;

}
}})());
});
;})(path_parts,sep,root,pred__45767,expr__45768))
} else {
if(cljs.core.truth_(pred__45767.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__45768))){
return ((function (pred__45767,expr__45768){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__45767,expr__45768){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__45767,expr__45768))
);

return deferred.addErrback(((function (deferred,pred__45767,expr__45768){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__45767,expr__45768))
);
});
;})(pred__45767,expr__45768))
} else {
return ((function (pred__45767,expr__45768){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__45767,expr__45768))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__45771,callback){
var map__45774 = p__45771;
var map__45774__$1 = ((((!((map__45774 == null)))?((((map__45774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45774.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45774):map__45774);
var file_msg = map__45774__$1;
var request_url = cljs.core.get.call(null,map__45774__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__45774,map__45774__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__45774,map__45774__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__43194__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43194__auto__){
return (function (){
var f__43195__auto__ = (function (){var switch__43138__auto__ = ((function (c__43194__auto__){
return (function (state_45798){
var state_val_45799 = (state_45798[(1)]);
if((state_val_45799 === (7))){
var inst_45794 = (state_45798[(2)]);
var state_45798__$1 = state_45798;
var statearr_45800_45820 = state_45798__$1;
(statearr_45800_45820[(2)] = inst_45794);

(statearr_45800_45820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45799 === (1))){
var state_45798__$1 = state_45798;
var statearr_45801_45821 = state_45798__$1;
(statearr_45801_45821[(2)] = null);

(statearr_45801_45821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45799 === (4))){
var inst_45778 = (state_45798[(7)]);
var inst_45778__$1 = (state_45798[(2)]);
var state_45798__$1 = (function (){var statearr_45802 = state_45798;
(statearr_45802[(7)] = inst_45778__$1);

return statearr_45802;
})();
if(cljs.core.truth_(inst_45778__$1)){
var statearr_45803_45822 = state_45798__$1;
(statearr_45803_45822[(1)] = (5));

} else {
var statearr_45804_45823 = state_45798__$1;
(statearr_45804_45823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45799 === (6))){
var state_45798__$1 = state_45798;
var statearr_45805_45824 = state_45798__$1;
(statearr_45805_45824[(2)] = null);

(statearr_45805_45824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45799 === (3))){
var inst_45796 = (state_45798[(2)]);
var state_45798__$1 = state_45798;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45798__$1,inst_45796);
} else {
if((state_val_45799 === (2))){
var state_45798__$1 = state_45798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45798__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_45799 === (11))){
var inst_45790 = (state_45798[(2)]);
var state_45798__$1 = (function (){var statearr_45806 = state_45798;
(statearr_45806[(8)] = inst_45790);

return statearr_45806;
})();
var statearr_45807_45825 = state_45798__$1;
(statearr_45807_45825[(2)] = null);

(statearr_45807_45825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45799 === (9))){
var inst_45782 = (state_45798[(9)]);
var inst_45784 = (state_45798[(10)]);
var inst_45786 = inst_45784.call(null,inst_45782);
var state_45798__$1 = state_45798;
var statearr_45808_45826 = state_45798__$1;
(statearr_45808_45826[(2)] = inst_45786);

(statearr_45808_45826[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45799 === (5))){
var inst_45778 = (state_45798[(7)]);
var inst_45780 = figwheel.client.file_reloading.blocking_load.call(null,inst_45778);
var state_45798__$1 = state_45798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45798__$1,(8),inst_45780);
} else {
if((state_val_45799 === (10))){
var inst_45782 = (state_45798[(9)]);
var inst_45788 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_45782);
var state_45798__$1 = state_45798;
var statearr_45809_45827 = state_45798__$1;
(statearr_45809_45827[(2)] = inst_45788);

(statearr_45809_45827[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45799 === (8))){
var inst_45778 = (state_45798[(7)]);
var inst_45784 = (state_45798[(10)]);
var inst_45782 = (state_45798[(2)]);
var inst_45783 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_45784__$1 = cljs.core.get.call(null,inst_45783,inst_45778);
var state_45798__$1 = (function (){var statearr_45810 = state_45798;
(statearr_45810[(9)] = inst_45782);

(statearr_45810[(10)] = inst_45784__$1);

return statearr_45810;
})();
if(cljs.core.truth_(inst_45784__$1)){
var statearr_45811_45828 = state_45798__$1;
(statearr_45811_45828[(1)] = (9));

} else {
var statearr_45812_45829 = state_45798__$1;
(statearr_45812_45829[(1)] = (10));

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
});})(c__43194__auto__))
;
return ((function (switch__43138__auto__,c__43194__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__43139__auto__ = null;
var figwheel$client$file_reloading$state_machine__43139__auto____0 = (function (){
var statearr_45816 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45816[(0)] = figwheel$client$file_reloading$state_machine__43139__auto__);

(statearr_45816[(1)] = (1));

return statearr_45816;
});
var figwheel$client$file_reloading$state_machine__43139__auto____1 = (function (state_45798){
while(true){
var ret_value__43140__auto__ = (function (){try{while(true){
var result__43141__auto__ = switch__43138__auto__.call(null,state_45798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43141__auto__;
}
break;
}
}catch (e45817){if((e45817 instanceof Object)){
var ex__43142__auto__ = e45817;
var statearr_45818_45830 = state_45798;
(statearr_45818_45830[(5)] = ex__43142__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45831 = state_45798;
state_45798 = G__45831;
continue;
} else {
return ret_value__43140__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__43139__auto__ = function(state_45798){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__43139__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__43139__auto____1.call(this,state_45798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__43139__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__43139__auto____0;
figwheel$client$file_reloading$state_machine__43139__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__43139__auto____1;
return figwheel$client$file_reloading$state_machine__43139__auto__;
})()
;})(switch__43138__auto__,c__43194__auto__))
})();
var state__43196__auto__ = (function (){var statearr_45819 = f__43195__auto__.call(null);
(statearr_45819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43194__auto__);

return statearr_45819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43196__auto__);
});})(c__43194__auto__))
);

return c__43194__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__45832,callback){
var map__45835 = p__45832;
var map__45835__$1 = ((((!((map__45835 == null)))?((((map__45835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45835.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45835):map__45835);
var file_msg = map__45835__$1;
var namespace = cljs.core.get.call(null,map__45835__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__45835,map__45835__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__45835,map__45835__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__45837){
var map__45840 = p__45837;
var map__45840__$1 = ((((!((map__45840 == null)))?((((map__45840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45840.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45840):map__45840);
var file_msg = map__45840__$1;
var namespace = cljs.core.get.call(null,map__45840__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__39470__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__39470__auto__){
var or__39482__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__39482__auto__)){
return or__39482__auto__;
} else {
var or__39482__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__39482__auto____$1)){
return or__39482__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__39470__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__45842,callback){
var map__45845 = p__45842;
var map__45845__$1 = ((((!((map__45845 == null)))?((((map__45845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45845.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45845):map__45845);
var file_msg = map__45845__$1;
var request_url = cljs.core.get.call(null,map__45845__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__45845__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__43194__auto___45949 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43194__auto___45949,out){
return (function (){
var f__43195__auto__ = (function (){var switch__43138__auto__ = ((function (c__43194__auto___45949,out){
return (function (state_45931){
var state_val_45932 = (state_45931[(1)]);
if((state_val_45932 === (1))){
var inst_45905 = cljs.core.seq.call(null,files);
var inst_45906 = cljs.core.first.call(null,inst_45905);
var inst_45907 = cljs.core.next.call(null,inst_45905);
var inst_45908 = files;
var state_45931__$1 = (function (){var statearr_45933 = state_45931;
(statearr_45933[(7)] = inst_45908);

(statearr_45933[(8)] = inst_45907);

(statearr_45933[(9)] = inst_45906);

return statearr_45933;
})();
var statearr_45934_45950 = state_45931__$1;
(statearr_45934_45950[(2)] = null);

(statearr_45934_45950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45932 === (2))){
var inst_45908 = (state_45931[(7)]);
var inst_45914 = (state_45931[(10)]);
var inst_45913 = cljs.core.seq.call(null,inst_45908);
var inst_45914__$1 = cljs.core.first.call(null,inst_45913);
var inst_45915 = cljs.core.next.call(null,inst_45913);
var inst_45916 = (inst_45914__$1 == null);
var inst_45917 = cljs.core.not.call(null,inst_45916);
var state_45931__$1 = (function (){var statearr_45935 = state_45931;
(statearr_45935[(11)] = inst_45915);

(statearr_45935[(10)] = inst_45914__$1);

return statearr_45935;
})();
if(inst_45917){
var statearr_45936_45951 = state_45931__$1;
(statearr_45936_45951[(1)] = (4));

} else {
var statearr_45937_45952 = state_45931__$1;
(statearr_45937_45952[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45932 === (3))){
var inst_45929 = (state_45931[(2)]);
var state_45931__$1 = state_45931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45931__$1,inst_45929);
} else {
if((state_val_45932 === (4))){
var inst_45914 = (state_45931[(10)]);
var inst_45919 = figwheel.client.file_reloading.reload_js_file.call(null,inst_45914);
var state_45931__$1 = state_45931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45931__$1,(7),inst_45919);
} else {
if((state_val_45932 === (5))){
var inst_45925 = cljs.core.async.close_BANG_.call(null,out);
var state_45931__$1 = state_45931;
var statearr_45938_45953 = state_45931__$1;
(statearr_45938_45953[(2)] = inst_45925);

(statearr_45938_45953[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45932 === (6))){
var inst_45927 = (state_45931[(2)]);
var state_45931__$1 = state_45931;
var statearr_45939_45954 = state_45931__$1;
(statearr_45939_45954[(2)] = inst_45927);

(statearr_45939_45954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45932 === (7))){
var inst_45915 = (state_45931[(11)]);
var inst_45921 = (state_45931[(2)]);
var inst_45922 = cljs.core.async.put_BANG_.call(null,out,inst_45921);
var inst_45908 = inst_45915;
var state_45931__$1 = (function (){var statearr_45940 = state_45931;
(statearr_45940[(12)] = inst_45922);

(statearr_45940[(7)] = inst_45908);

return statearr_45940;
})();
var statearr_45941_45955 = state_45931__$1;
(statearr_45941_45955[(2)] = null);

(statearr_45941_45955[(1)] = (2));


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
});})(c__43194__auto___45949,out))
;
return ((function (switch__43138__auto__,c__43194__auto___45949,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__43139__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__43139__auto____0 = (function (){
var statearr_45945 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45945[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__43139__auto__);

(statearr_45945[(1)] = (1));

return statearr_45945;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__43139__auto____1 = (function (state_45931){
while(true){
var ret_value__43140__auto__ = (function (){try{while(true){
var result__43141__auto__ = switch__43138__auto__.call(null,state_45931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43141__auto__;
}
break;
}
}catch (e45946){if((e45946 instanceof Object)){
var ex__43142__auto__ = e45946;
var statearr_45947_45956 = state_45931;
(statearr_45947_45956[(5)] = ex__43142__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45957 = state_45931;
state_45931 = G__45957;
continue;
} else {
return ret_value__43140__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__43139__auto__ = function(state_45931){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__43139__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__43139__auto____1.call(this,state_45931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__43139__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__43139__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__43139__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__43139__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__43139__auto__;
})()
;})(switch__43138__auto__,c__43194__auto___45949,out))
})();
var state__43196__auto__ = (function (){var statearr_45948 = f__43195__auto__.call(null);
(statearr_45948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43194__auto___45949);

return statearr_45948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43196__auto__);
});})(c__43194__auto___45949,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__45958,opts){
var map__45962 = p__45958;
var map__45962__$1 = ((((!((map__45962 == null)))?((((map__45962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45962.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45962):map__45962);
var eval_body = cljs.core.get.call(null,map__45962__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__45962__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__39470__auto__ = eval_body;
if(cljs.core.truth_(and__39470__auto__)){
return typeof eval_body === 'string';
} else {
return and__39470__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e45964){var e = e45964;
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
return (function (p1__45965_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__45965_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__45974){
var vec__45975 = p__45974;
var k = cljs.core.nth.call(null,vec__45975,(0),null);
var v = cljs.core.nth.call(null,vec__45975,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__45978){
var vec__45979 = p__45978;
var k = cljs.core.nth.call(null,vec__45979,(0),null);
var v = cljs.core.nth.call(null,vec__45979,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__45985,p__45986){
var map__46234 = p__45985;
var map__46234__$1 = ((((!((map__46234 == null)))?((((map__46234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46234.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46234):map__46234);
var opts = map__46234__$1;
var before_jsload = cljs.core.get.call(null,map__46234__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__46234__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__46234__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__46235 = p__45986;
var map__46235__$1 = ((((!((map__46235 == null)))?((((map__46235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46235.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46235):map__46235);
var msg = map__46235__$1;
var files = cljs.core.get.call(null,map__46235__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__46235__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__46235__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__43194__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43194__auto__,map__46234,map__46234__$1,opts,before_jsload,on_jsload,reload_dependents,map__46235,map__46235__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__43195__auto__ = (function (){var switch__43138__auto__ = ((function (c__43194__auto__,map__46234,map__46234__$1,opts,before_jsload,on_jsload,reload_dependents,map__46235,map__46235__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_46389){
var state_val_46390 = (state_46389[(1)]);
if((state_val_46390 === (7))){
var inst_46249 = (state_46389[(7)]);
var inst_46252 = (state_46389[(8)]);
var inst_46250 = (state_46389[(9)]);
var inst_46251 = (state_46389[(10)]);
var inst_46257 = cljs.core._nth.call(null,inst_46250,inst_46252);
var inst_46258 = figwheel.client.file_reloading.eval_body.call(null,inst_46257,opts);
var inst_46259 = (inst_46252 + (1));
var tmp46391 = inst_46249;
var tmp46392 = inst_46250;
var tmp46393 = inst_46251;
var inst_46249__$1 = tmp46391;
var inst_46250__$1 = tmp46392;
var inst_46251__$1 = tmp46393;
var inst_46252__$1 = inst_46259;
var state_46389__$1 = (function (){var statearr_46394 = state_46389;
(statearr_46394[(7)] = inst_46249__$1);

(statearr_46394[(8)] = inst_46252__$1);

(statearr_46394[(11)] = inst_46258);

(statearr_46394[(9)] = inst_46250__$1);

(statearr_46394[(10)] = inst_46251__$1);

return statearr_46394;
})();
var statearr_46395_46481 = state_46389__$1;
(statearr_46395_46481[(2)] = null);

(statearr_46395_46481[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (20))){
var inst_46292 = (state_46389[(12)]);
var inst_46300 = figwheel.client.file_reloading.sort_files.call(null,inst_46292);
var state_46389__$1 = state_46389;
var statearr_46396_46482 = state_46389__$1;
(statearr_46396_46482[(2)] = inst_46300);

(statearr_46396_46482[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (27))){
var state_46389__$1 = state_46389;
var statearr_46397_46483 = state_46389__$1;
(statearr_46397_46483[(2)] = null);

(statearr_46397_46483[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (1))){
var inst_46241 = (state_46389[(13)]);
var inst_46238 = before_jsload.call(null,files);
var inst_46239 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_46240 = (function (){return ((function (inst_46241,inst_46238,inst_46239,state_val_46390,c__43194__auto__,map__46234,map__46234__$1,opts,before_jsload,on_jsload,reload_dependents,map__46235,map__46235__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45982_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__45982_SHARP_);
});
;})(inst_46241,inst_46238,inst_46239,state_val_46390,c__43194__auto__,map__46234,map__46234__$1,opts,before_jsload,on_jsload,reload_dependents,map__46235,map__46235__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46241__$1 = cljs.core.filter.call(null,inst_46240,files);
var inst_46242 = cljs.core.not_empty.call(null,inst_46241__$1);
var state_46389__$1 = (function (){var statearr_46398 = state_46389;
(statearr_46398[(13)] = inst_46241__$1);

(statearr_46398[(14)] = inst_46238);

(statearr_46398[(15)] = inst_46239);

return statearr_46398;
})();
if(cljs.core.truth_(inst_46242)){
var statearr_46399_46484 = state_46389__$1;
(statearr_46399_46484[(1)] = (2));

} else {
var statearr_46400_46485 = state_46389__$1;
(statearr_46400_46485[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (24))){
var state_46389__$1 = state_46389;
var statearr_46401_46486 = state_46389__$1;
(statearr_46401_46486[(2)] = null);

(statearr_46401_46486[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (39))){
var inst_46342 = (state_46389[(16)]);
var state_46389__$1 = state_46389;
var statearr_46402_46487 = state_46389__$1;
(statearr_46402_46487[(2)] = inst_46342);

(statearr_46402_46487[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (46))){
var inst_46384 = (state_46389[(2)]);
var state_46389__$1 = state_46389;
var statearr_46403_46488 = state_46389__$1;
(statearr_46403_46488[(2)] = inst_46384);

(statearr_46403_46488[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (4))){
var inst_46286 = (state_46389[(2)]);
var inst_46287 = cljs.core.List.EMPTY;
var inst_46288 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_46287);
var inst_46289 = (function (){return ((function (inst_46286,inst_46287,inst_46288,state_val_46390,c__43194__auto__,map__46234,map__46234__$1,opts,before_jsload,on_jsload,reload_dependents,map__46235,map__46235__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45983_SHARP_){
var and__39470__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__45983_SHARP_);
if(cljs.core.truth_(and__39470__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__45983_SHARP_));
} else {
return and__39470__auto__;
}
});
;})(inst_46286,inst_46287,inst_46288,state_val_46390,c__43194__auto__,map__46234,map__46234__$1,opts,before_jsload,on_jsload,reload_dependents,map__46235,map__46235__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46290 = cljs.core.filter.call(null,inst_46289,files);
var inst_46291 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_46292 = cljs.core.concat.call(null,inst_46290,inst_46291);
var state_46389__$1 = (function (){var statearr_46404 = state_46389;
(statearr_46404[(17)] = inst_46288);

(statearr_46404[(12)] = inst_46292);

(statearr_46404[(18)] = inst_46286);

return statearr_46404;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_46405_46489 = state_46389__$1;
(statearr_46405_46489[(1)] = (16));

} else {
var statearr_46406_46490 = state_46389__$1;
(statearr_46406_46490[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (15))){
var inst_46276 = (state_46389[(2)]);
var state_46389__$1 = state_46389;
var statearr_46407_46491 = state_46389__$1;
(statearr_46407_46491[(2)] = inst_46276);

(statearr_46407_46491[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (21))){
var inst_46302 = (state_46389[(19)]);
var inst_46302__$1 = (state_46389[(2)]);
var inst_46303 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_46302__$1);
var state_46389__$1 = (function (){var statearr_46408 = state_46389;
(statearr_46408[(19)] = inst_46302__$1);

return statearr_46408;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46389__$1,(22),inst_46303);
} else {
if((state_val_46390 === (31))){
var inst_46387 = (state_46389[(2)]);
var state_46389__$1 = state_46389;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46389__$1,inst_46387);
} else {
if((state_val_46390 === (32))){
var inst_46342 = (state_46389[(16)]);
var inst_46347 = inst_46342.cljs$lang$protocol_mask$partition0$;
var inst_46348 = (inst_46347 & (64));
var inst_46349 = inst_46342.cljs$core$ISeq$;
var inst_46350 = (cljs.core.PROTOCOL_SENTINEL === inst_46349);
var inst_46351 = (inst_46348) || (inst_46350);
var state_46389__$1 = state_46389;
if(cljs.core.truth_(inst_46351)){
var statearr_46409_46492 = state_46389__$1;
(statearr_46409_46492[(1)] = (35));

} else {
var statearr_46410_46493 = state_46389__$1;
(statearr_46410_46493[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (40))){
var inst_46364 = (state_46389[(20)]);
var inst_46363 = (state_46389[(2)]);
var inst_46364__$1 = cljs.core.get.call(null,inst_46363,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_46365 = cljs.core.get.call(null,inst_46363,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_46366 = cljs.core.not_empty.call(null,inst_46364__$1);
var state_46389__$1 = (function (){var statearr_46411 = state_46389;
(statearr_46411[(20)] = inst_46364__$1);

(statearr_46411[(21)] = inst_46365);

return statearr_46411;
})();
if(cljs.core.truth_(inst_46366)){
var statearr_46412_46494 = state_46389__$1;
(statearr_46412_46494[(1)] = (41));

} else {
var statearr_46413_46495 = state_46389__$1;
(statearr_46413_46495[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (33))){
var state_46389__$1 = state_46389;
var statearr_46414_46496 = state_46389__$1;
(statearr_46414_46496[(2)] = false);

(statearr_46414_46496[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (13))){
var inst_46262 = (state_46389[(22)]);
var inst_46266 = cljs.core.chunk_first.call(null,inst_46262);
var inst_46267 = cljs.core.chunk_rest.call(null,inst_46262);
var inst_46268 = cljs.core.count.call(null,inst_46266);
var inst_46249 = inst_46267;
var inst_46250 = inst_46266;
var inst_46251 = inst_46268;
var inst_46252 = (0);
var state_46389__$1 = (function (){var statearr_46415 = state_46389;
(statearr_46415[(7)] = inst_46249);

(statearr_46415[(8)] = inst_46252);

(statearr_46415[(9)] = inst_46250);

(statearr_46415[(10)] = inst_46251);

return statearr_46415;
})();
var statearr_46416_46497 = state_46389__$1;
(statearr_46416_46497[(2)] = null);

(statearr_46416_46497[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (22))){
var inst_46302 = (state_46389[(19)]);
var inst_46306 = (state_46389[(23)]);
var inst_46305 = (state_46389[(24)]);
var inst_46310 = (state_46389[(25)]);
var inst_46305__$1 = (state_46389[(2)]);
var inst_46306__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_46305__$1);
var inst_46307 = (function (){var all_files = inst_46302;
var res_SINGLEQUOTE_ = inst_46305__$1;
var res = inst_46306__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_46302,inst_46306,inst_46305,inst_46310,inst_46305__$1,inst_46306__$1,state_val_46390,c__43194__auto__,map__46234,map__46234__$1,opts,before_jsload,on_jsload,reload_dependents,map__46235,map__46235__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45984_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__45984_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_46302,inst_46306,inst_46305,inst_46310,inst_46305__$1,inst_46306__$1,state_val_46390,c__43194__auto__,map__46234,map__46234__$1,opts,before_jsload,on_jsload,reload_dependents,map__46235,map__46235__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46308 = cljs.core.filter.call(null,inst_46307,inst_46305__$1);
var inst_46309 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_46310__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_46309);
var inst_46311 = cljs.core.not_empty.call(null,inst_46310__$1);
var state_46389__$1 = (function (){var statearr_46417 = state_46389;
(statearr_46417[(23)] = inst_46306__$1);

(statearr_46417[(24)] = inst_46305__$1);

(statearr_46417[(25)] = inst_46310__$1);

(statearr_46417[(26)] = inst_46308);

return statearr_46417;
})();
if(cljs.core.truth_(inst_46311)){
var statearr_46418_46498 = state_46389__$1;
(statearr_46418_46498[(1)] = (23));

} else {
var statearr_46419_46499 = state_46389__$1;
(statearr_46419_46499[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (36))){
var state_46389__$1 = state_46389;
var statearr_46420_46500 = state_46389__$1;
(statearr_46420_46500[(2)] = false);

(statearr_46420_46500[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (41))){
var inst_46364 = (state_46389[(20)]);
var inst_46368 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_46369 = cljs.core.map.call(null,inst_46368,inst_46364);
var inst_46370 = cljs.core.pr_str.call(null,inst_46369);
var inst_46371 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_46370)].join('');
var inst_46372 = figwheel.client.utils.log.call(null,inst_46371);
var state_46389__$1 = state_46389;
var statearr_46421_46501 = state_46389__$1;
(statearr_46421_46501[(2)] = inst_46372);

(statearr_46421_46501[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (43))){
var inst_46365 = (state_46389[(21)]);
var inst_46375 = (state_46389[(2)]);
var inst_46376 = cljs.core.not_empty.call(null,inst_46365);
var state_46389__$1 = (function (){var statearr_46422 = state_46389;
(statearr_46422[(27)] = inst_46375);

return statearr_46422;
})();
if(cljs.core.truth_(inst_46376)){
var statearr_46423_46502 = state_46389__$1;
(statearr_46423_46502[(1)] = (44));

} else {
var statearr_46424_46503 = state_46389__$1;
(statearr_46424_46503[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (29))){
var inst_46302 = (state_46389[(19)]);
var inst_46306 = (state_46389[(23)]);
var inst_46305 = (state_46389[(24)]);
var inst_46342 = (state_46389[(16)]);
var inst_46310 = (state_46389[(25)]);
var inst_46308 = (state_46389[(26)]);
var inst_46338 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_46341 = (function (){var all_files = inst_46302;
var res_SINGLEQUOTE_ = inst_46305;
var res = inst_46306;
var files_not_loaded = inst_46308;
var dependencies_that_loaded = inst_46310;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46302,inst_46306,inst_46305,inst_46342,inst_46310,inst_46308,inst_46338,state_val_46390,c__43194__auto__,map__46234,map__46234__$1,opts,before_jsload,on_jsload,reload_dependents,map__46235,map__46235__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__46340){
var map__46425 = p__46340;
var map__46425__$1 = ((((!((map__46425 == null)))?((((map__46425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46425.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46425):map__46425);
var namespace = cljs.core.get.call(null,map__46425__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46302,inst_46306,inst_46305,inst_46342,inst_46310,inst_46308,inst_46338,state_val_46390,c__43194__auto__,map__46234,map__46234__$1,opts,before_jsload,on_jsload,reload_dependents,map__46235,map__46235__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46342__$1 = cljs.core.group_by.call(null,inst_46341,inst_46308);
var inst_46344 = (inst_46342__$1 == null);
var inst_46345 = cljs.core.not.call(null,inst_46344);
var state_46389__$1 = (function (){var statearr_46427 = state_46389;
(statearr_46427[(28)] = inst_46338);

(statearr_46427[(16)] = inst_46342__$1);

return statearr_46427;
})();
if(inst_46345){
var statearr_46428_46504 = state_46389__$1;
(statearr_46428_46504[(1)] = (32));

} else {
var statearr_46429_46505 = state_46389__$1;
(statearr_46429_46505[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (44))){
var inst_46365 = (state_46389[(21)]);
var inst_46378 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_46365);
var inst_46379 = cljs.core.pr_str.call(null,inst_46378);
var inst_46380 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_46379)].join('');
var inst_46381 = figwheel.client.utils.log.call(null,inst_46380);
var state_46389__$1 = state_46389;
var statearr_46430_46506 = state_46389__$1;
(statearr_46430_46506[(2)] = inst_46381);

(statearr_46430_46506[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (6))){
var inst_46283 = (state_46389[(2)]);
var state_46389__$1 = state_46389;
var statearr_46431_46507 = state_46389__$1;
(statearr_46431_46507[(2)] = inst_46283);

(statearr_46431_46507[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (28))){
var inst_46308 = (state_46389[(26)]);
var inst_46335 = (state_46389[(2)]);
var inst_46336 = cljs.core.not_empty.call(null,inst_46308);
var state_46389__$1 = (function (){var statearr_46432 = state_46389;
(statearr_46432[(29)] = inst_46335);

return statearr_46432;
})();
if(cljs.core.truth_(inst_46336)){
var statearr_46433_46508 = state_46389__$1;
(statearr_46433_46508[(1)] = (29));

} else {
var statearr_46434_46509 = state_46389__$1;
(statearr_46434_46509[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (25))){
var inst_46306 = (state_46389[(23)]);
var inst_46322 = (state_46389[(2)]);
var inst_46323 = cljs.core.not_empty.call(null,inst_46306);
var state_46389__$1 = (function (){var statearr_46435 = state_46389;
(statearr_46435[(30)] = inst_46322);

return statearr_46435;
})();
if(cljs.core.truth_(inst_46323)){
var statearr_46436_46510 = state_46389__$1;
(statearr_46436_46510[(1)] = (26));

} else {
var statearr_46437_46511 = state_46389__$1;
(statearr_46437_46511[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (34))){
var inst_46358 = (state_46389[(2)]);
var state_46389__$1 = state_46389;
if(cljs.core.truth_(inst_46358)){
var statearr_46438_46512 = state_46389__$1;
(statearr_46438_46512[(1)] = (38));

} else {
var statearr_46439_46513 = state_46389__$1;
(statearr_46439_46513[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (17))){
var state_46389__$1 = state_46389;
var statearr_46440_46514 = state_46389__$1;
(statearr_46440_46514[(2)] = recompile_dependents);

(statearr_46440_46514[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (3))){
var state_46389__$1 = state_46389;
var statearr_46441_46515 = state_46389__$1;
(statearr_46441_46515[(2)] = null);

(statearr_46441_46515[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (12))){
var inst_46279 = (state_46389[(2)]);
var state_46389__$1 = state_46389;
var statearr_46442_46516 = state_46389__$1;
(statearr_46442_46516[(2)] = inst_46279);

(statearr_46442_46516[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (2))){
var inst_46241 = (state_46389[(13)]);
var inst_46248 = cljs.core.seq.call(null,inst_46241);
var inst_46249 = inst_46248;
var inst_46250 = null;
var inst_46251 = (0);
var inst_46252 = (0);
var state_46389__$1 = (function (){var statearr_46443 = state_46389;
(statearr_46443[(7)] = inst_46249);

(statearr_46443[(8)] = inst_46252);

(statearr_46443[(9)] = inst_46250);

(statearr_46443[(10)] = inst_46251);

return statearr_46443;
})();
var statearr_46444_46517 = state_46389__$1;
(statearr_46444_46517[(2)] = null);

(statearr_46444_46517[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (23))){
var inst_46302 = (state_46389[(19)]);
var inst_46306 = (state_46389[(23)]);
var inst_46305 = (state_46389[(24)]);
var inst_46310 = (state_46389[(25)]);
var inst_46308 = (state_46389[(26)]);
var inst_46313 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_46315 = (function (){var all_files = inst_46302;
var res_SINGLEQUOTE_ = inst_46305;
var res = inst_46306;
var files_not_loaded = inst_46308;
var dependencies_that_loaded = inst_46310;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46302,inst_46306,inst_46305,inst_46310,inst_46308,inst_46313,state_val_46390,c__43194__auto__,map__46234,map__46234__$1,opts,before_jsload,on_jsload,reload_dependents,map__46235,map__46235__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__46314){
var map__46445 = p__46314;
var map__46445__$1 = ((((!((map__46445 == null)))?((((map__46445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46445.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46445):map__46445);
var request_url = cljs.core.get.call(null,map__46445__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46302,inst_46306,inst_46305,inst_46310,inst_46308,inst_46313,state_val_46390,c__43194__auto__,map__46234,map__46234__$1,opts,before_jsload,on_jsload,reload_dependents,map__46235,map__46235__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46316 = cljs.core.reverse.call(null,inst_46310);
var inst_46317 = cljs.core.map.call(null,inst_46315,inst_46316);
var inst_46318 = cljs.core.pr_str.call(null,inst_46317);
var inst_46319 = figwheel.client.utils.log.call(null,inst_46318);
var state_46389__$1 = (function (){var statearr_46447 = state_46389;
(statearr_46447[(31)] = inst_46313);

return statearr_46447;
})();
var statearr_46448_46518 = state_46389__$1;
(statearr_46448_46518[(2)] = inst_46319);

(statearr_46448_46518[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (35))){
var state_46389__$1 = state_46389;
var statearr_46449_46519 = state_46389__$1;
(statearr_46449_46519[(2)] = true);

(statearr_46449_46519[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (19))){
var inst_46292 = (state_46389[(12)]);
var inst_46298 = figwheel.client.file_reloading.expand_files.call(null,inst_46292);
var state_46389__$1 = state_46389;
var statearr_46450_46520 = state_46389__$1;
(statearr_46450_46520[(2)] = inst_46298);

(statearr_46450_46520[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (11))){
var state_46389__$1 = state_46389;
var statearr_46451_46521 = state_46389__$1;
(statearr_46451_46521[(2)] = null);

(statearr_46451_46521[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (9))){
var inst_46281 = (state_46389[(2)]);
var state_46389__$1 = state_46389;
var statearr_46452_46522 = state_46389__$1;
(statearr_46452_46522[(2)] = inst_46281);

(statearr_46452_46522[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (5))){
var inst_46252 = (state_46389[(8)]);
var inst_46251 = (state_46389[(10)]);
var inst_46254 = (inst_46252 < inst_46251);
var inst_46255 = inst_46254;
var state_46389__$1 = state_46389;
if(cljs.core.truth_(inst_46255)){
var statearr_46453_46523 = state_46389__$1;
(statearr_46453_46523[(1)] = (7));

} else {
var statearr_46454_46524 = state_46389__$1;
(statearr_46454_46524[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (14))){
var inst_46262 = (state_46389[(22)]);
var inst_46271 = cljs.core.first.call(null,inst_46262);
var inst_46272 = figwheel.client.file_reloading.eval_body.call(null,inst_46271,opts);
var inst_46273 = cljs.core.next.call(null,inst_46262);
var inst_46249 = inst_46273;
var inst_46250 = null;
var inst_46251 = (0);
var inst_46252 = (0);
var state_46389__$1 = (function (){var statearr_46455 = state_46389;
(statearr_46455[(32)] = inst_46272);

(statearr_46455[(7)] = inst_46249);

(statearr_46455[(8)] = inst_46252);

(statearr_46455[(9)] = inst_46250);

(statearr_46455[(10)] = inst_46251);

return statearr_46455;
})();
var statearr_46456_46525 = state_46389__$1;
(statearr_46456_46525[(2)] = null);

(statearr_46456_46525[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (45))){
var state_46389__$1 = state_46389;
var statearr_46457_46526 = state_46389__$1;
(statearr_46457_46526[(2)] = null);

(statearr_46457_46526[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (26))){
var inst_46302 = (state_46389[(19)]);
var inst_46306 = (state_46389[(23)]);
var inst_46305 = (state_46389[(24)]);
var inst_46310 = (state_46389[(25)]);
var inst_46308 = (state_46389[(26)]);
var inst_46325 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_46327 = (function (){var all_files = inst_46302;
var res_SINGLEQUOTE_ = inst_46305;
var res = inst_46306;
var files_not_loaded = inst_46308;
var dependencies_that_loaded = inst_46310;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46302,inst_46306,inst_46305,inst_46310,inst_46308,inst_46325,state_val_46390,c__43194__auto__,map__46234,map__46234__$1,opts,before_jsload,on_jsload,reload_dependents,map__46235,map__46235__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__46326){
var map__46458 = p__46326;
var map__46458__$1 = ((((!((map__46458 == null)))?((((map__46458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46458.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46458):map__46458);
var namespace = cljs.core.get.call(null,map__46458__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__46458__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46302,inst_46306,inst_46305,inst_46310,inst_46308,inst_46325,state_val_46390,c__43194__auto__,map__46234,map__46234__$1,opts,before_jsload,on_jsload,reload_dependents,map__46235,map__46235__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46328 = cljs.core.map.call(null,inst_46327,inst_46306);
var inst_46329 = cljs.core.pr_str.call(null,inst_46328);
var inst_46330 = figwheel.client.utils.log.call(null,inst_46329);
var inst_46331 = (function (){var all_files = inst_46302;
var res_SINGLEQUOTE_ = inst_46305;
var res = inst_46306;
var files_not_loaded = inst_46308;
var dependencies_that_loaded = inst_46310;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46302,inst_46306,inst_46305,inst_46310,inst_46308,inst_46325,inst_46327,inst_46328,inst_46329,inst_46330,state_val_46390,c__43194__auto__,map__46234,map__46234__$1,opts,before_jsload,on_jsload,reload_dependents,map__46235,map__46235__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46302,inst_46306,inst_46305,inst_46310,inst_46308,inst_46325,inst_46327,inst_46328,inst_46329,inst_46330,state_val_46390,c__43194__auto__,map__46234,map__46234__$1,opts,before_jsload,on_jsload,reload_dependents,map__46235,map__46235__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46332 = setTimeout(inst_46331,(10));
var state_46389__$1 = (function (){var statearr_46460 = state_46389;
(statearr_46460[(33)] = inst_46325);

(statearr_46460[(34)] = inst_46330);

return statearr_46460;
})();
var statearr_46461_46527 = state_46389__$1;
(statearr_46461_46527[(2)] = inst_46332);

(statearr_46461_46527[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (16))){
var state_46389__$1 = state_46389;
var statearr_46462_46528 = state_46389__$1;
(statearr_46462_46528[(2)] = reload_dependents);

(statearr_46462_46528[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (38))){
var inst_46342 = (state_46389[(16)]);
var inst_46360 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46342);
var state_46389__$1 = state_46389;
var statearr_46463_46529 = state_46389__$1;
(statearr_46463_46529[(2)] = inst_46360);

(statearr_46463_46529[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (30))){
var state_46389__$1 = state_46389;
var statearr_46464_46530 = state_46389__$1;
(statearr_46464_46530[(2)] = null);

(statearr_46464_46530[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (10))){
var inst_46262 = (state_46389[(22)]);
var inst_46264 = cljs.core.chunked_seq_QMARK_.call(null,inst_46262);
var state_46389__$1 = state_46389;
if(inst_46264){
var statearr_46465_46531 = state_46389__$1;
(statearr_46465_46531[(1)] = (13));

} else {
var statearr_46466_46532 = state_46389__$1;
(statearr_46466_46532[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (18))){
var inst_46296 = (state_46389[(2)]);
var state_46389__$1 = state_46389;
if(cljs.core.truth_(inst_46296)){
var statearr_46467_46533 = state_46389__$1;
(statearr_46467_46533[(1)] = (19));

} else {
var statearr_46468_46534 = state_46389__$1;
(statearr_46468_46534[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (42))){
var state_46389__$1 = state_46389;
var statearr_46469_46535 = state_46389__$1;
(statearr_46469_46535[(2)] = null);

(statearr_46469_46535[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (37))){
var inst_46355 = (state_46389[(2)]);
var state_46389__$1 = state_46389;
var statearr_46470_46536 = state_46389__$1;
(statearr_46470_46536[(2)] = inst_46355);

(statearr_46470_46536[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (8))){
var inst_46262 = (state_46389[(22)]);
var inst_46249 = (state_46389[(7)]);
var inst_46262__$1 = cljs.core.seq.call(null,inst_46249);
var state_46389__$1 = (function (){var statearr_46471 = state_46389;
(statearr_46471[(22)] = inst_46262__$1);

return statearr_46471;
})();
if(inst_46262__$1){
var statearr_46472_46537 = state_46389__$1;
(statearr_46472_46537[(1)] = (10));

} else {
var statearr_46473_46538 = state_46389__$1;
(statearr_46473_46538[(1)] = (11));

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
});})(c__43194__auto__,map__46234,map__46234__$1,opts,before_jsload,on_jsload,reload_dependents,map__46235,map__46235__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__43138__auto__,c__43194__auto__,map__46234,map__46234__$1,opts,before_jsload,on_jsload,reload_dependents,map__46235,map__46235__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__43139__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__43139__auto____0 = (function (){
var statearr_46477 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46477[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__43139__auto__);

(statearr_46477[(1)] = (1));

return statearr_46477;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__43139__auto____1 = (function (state_46389){
while(true){
var ret_value__43140__auto__ = (function (){try{while(true){
var result__43141__auto__ = switch__43138__auto__.call(null,state_46389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43141__auto__;
}
break;
}
}catch (e46478){if((e46478 instanceof Object)){
var ex__43142__auto__ = e46478;
var statearr_46479_46539 = state_46389;
(statearr_46479_46539[(5)] = ex__43142__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46540 = state_46389;
state_46389 = G__46540;
continue;
} else {
return ret_value__43140__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__43139__auto__ = function(state_46389){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__43139__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__43139__auto____1.call(this,state_46389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__43139__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__43139__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__43139__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__43139__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__43139__auto__;
})()
;})(switch__43138__auto__,c__43194__auto__,map__46234,map__46234__$1,opts,before_jsload,on_jsload,reload_dependents,map__46235,map__46235__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__43196__auto__ = (function (){var statearr_46480 = f__43195__auto__.call(null);
(statearr_46480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43194__auto__);

return statearr_46480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43196__auto__);
});})(c__43194__auto__,map__46234,map__46234__$1,opts,before_jsload,on_jsload,reload_dependents,map__46235,map__46235__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__43194__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__46543,link){
var map__46546 = p__46543;
var map__46546__$1 = ((((!((map__46546 == null)))?((((map__46546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46546.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46546):map__46546);
var file = cljs.core.get.call(null,map__46546__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__46546,map__46546__$1,file){
return (function (p1__46541_SHARP_,p2__46542_SHARP_){
if(cljs.core._EQ_.call(null,p1__46541_SHARP_,p2__46542_SHARP_)){
return p1__46541_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__46546,map__46546__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__46552){
var map__46553 = p__46552;
var map__46553__$1 = ((((!((map__46553 == null)))?((((map__46553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46553.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46553):map__46553);
var match_length = cljs.core.get.call(null,map__46553__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__46553__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__46548_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__46548_SHARP_);
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
var args46555 = [];
var len__40595__auto___46558 = arguments.length;
var i__40596__auto___46559 = (0);
while(true){
if((i__40596__auto___46559 < len__40595__auto___46558)){
args46555.push((arguments[i__40596__auto___46559]));

var G__46560 = (i__40596__auto___46559 + (1));
i__40596__auto___46559 = G__46560;
continue;
} else {
}
break;
}

var G__46557 = args46555.length;
switch (G__46557) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46555.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__46562_SHARP_,p2__46563_SHARP_){
return cljs.core.assoc.call(null,p1__46562_SHARP_,cljs.core.get.call(null,p2__46563_SHARP_,key),p2__46563_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__46564){
var map__46567 = p__46564;
var map__46567__$1 = ((((!((map__46567 == null)))?((((map__46567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46567.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46567):map__46567);
var f_data = map__46567__$1;
var file = cljs.core.get.call(null,map__46567__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__46569,p__46570){
var map__46579 = p__46569;
var map__46579__$1 = ((((!((map__46579 == null)))?((((map__46579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46579.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46579):map__46579);
var opts = map__46579__$1;
var on_cssload = cljs.core.get.call(null,map__46579__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__46580 = p__46570;
var map__46580__$1 = ((((!((map__46580 == null)))?((((map__46580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46580.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46580):map__46580);
var files_msg = map__46580__$1;
var files = cljs.core.get.call(null,map__46580__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__46583_46587 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__46584_46588 = null;
var count__46585_46589 = (0);
var i__46586_46590 = (0);
while(true){
if((i__46586_46590 < count__46585_46589)){
var f_46591 = cljs.core._nth.call(null,chunk__46584_46588,i__46586_46590);
figwheel.client.file_reloading.reload_css_file.call(null,f_46591);

var G__46592 = seq__46583_46587;
var G__46593 = chunk__46584_46588;
var G__46594 = count__46585_46589;
var G__46595 = (i__46586_46590 + (1));
seq__46583_46587 = G__46592;
chunk__46584_46588 = G__46593;
count__46585_46589 = G__46594;
i__46586_46590 = G__46595;
continue;
} else {
var temp__4657__auto___46596 = cljs.core.seq.call(null,seq__46583_46587);
if(temp__4657__auto___46596){
var seq__46583_46597__$1 = temp__4657__auto___46596;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46583_46597__$1)){
var c__40301__auto___46598 = cljs.core.chunk_first.call(null,seq__46583_46597__$1);
var G__46599 = cljs.core.chunk_rest.call(null,seq__46583_46597__$1);
var G__46600 = c__40301__auto___46598;
var G__46601 = cljs.core.count.call(null,c__40301__auto___46598);
var G__46602 = (0);
seq__46583_46587 = G__46599;
chunk__46584_46588 = G__46600;
count__46585_46589 = G__46601;
i__46586_46590 = G__46602;
continue;
} else {
var f_46603 = cljs.core.first.call(null,seq__46583_46597__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_46603);

var G__46604 = cljs.core.next.call(null,seq__46583_46597__$1);
var G__46605 = null;
var G__46606 = (0);
var G__46607 = (0);
seq__46583_46587 = G__46604;
chunk__46584_46588 = G__46605;
count__46585_46589 = G__46606;
i__46586_46590 = G__46607;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__46579,map__46579__$1,opts,on_cssload,map__46580,map__46580__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__46579,map__46579__$1,opts,on_cssload,map__46580,map__46580__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1515676034030