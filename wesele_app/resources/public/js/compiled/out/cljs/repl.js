// Compiled by ClojureScript 1.9.494 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__48011){
var map__48036 = p__48011;
var map__48036__$1 = ((((!((map__48036 == null)))?((((map__48036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48036.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48036):map__48036);
var m = map__48036__$1;
var n = cljs.core.get.call(null,map__48036__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__48036__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__48038_48060 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__48039_48061 = null;
var count__48040_48062 = (0);
var i__48041_48063 = (0);
while(true){
if((i__48041_48063 < count__48040_48062)){
var f_48064 = cljs.core._nth.call(null,chunk__48039_48061,i__48041_48063);
cljs.core.println.call(null,"  ",f_48064);

var G__48065 = seq__48038_48060;
var G__48066 = chunk__48039_48061;
var G__48067 = count__48040_48062;
var G__48068 = (i__48041_48063 + (1));
seq__48038_48060 = G__48065;
chunk__48039_48061 = G__48066;
count__48040_48062 = G__48067;
i__48041_48063 = G__48068;
continue;
} else {
var temp__4657__auto___48069 = cljs.core.seq.call(null,seq__48038_48060);
if(temp__4657__auto___48069){
var seq__48038_48070__$1 = temp__4657__auto___48069;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48038_48070__$1)){
var c__40301__auto___48071 = cljs.core.chunk_first.call(null,seq__48038_48070__$1);
var G__48072 = cljs.core.chunk_rest.call(null,seq__48038_48070__$1);
var G__48073 = c__40301__auto___48071;
var G__48074 = cljs.core.count.call(null,c__40301__auto___48071);
var G__48075 = (0);
seq__48038_48060 = G__48072;
chunk__48039_48061 = G__48073;
count__48040_48062 = G__48074;
i__48041_48063 = G__48075;
continue;
} else {
var f_48076 = cljs.core.first.call(null,seq__48038_48070__$1);
cljs.core.println.call(null,"  ",f_48076);

var G__48077 = cljs.core.next.call(null,seq__48038_48070__$1);
var G__48078 = null;
var G__48079 = (0);
var G__48080 = (0);
seq__48038_48060 = G__48077;
chunk__48039_48061 = G__48078;
count__48040_48062 = G__48079;
i__48041_48063 = G__48080;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_48081 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__39482__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__39482__auto__)){
return or__39482__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_48081);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_48081)))?cljs.core.second.call(null,arglists_48081):arglists_48081));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__48042_48082 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__48043_48083 = null;
var count__48044_48084 = (0);
var i__48045_48085 = (0);
while(true){
if((i__48045_48085 < count__48044_48084)){
var vec__48046_48086 = cljs.core._nth.call(null,chunk__48043_48083,i__48045_48085);
var name_48087 = cljs.core.nth.call(null,vec__48046_48086,(0),null);
var map__48049_48088 = cljs.core.nth.call(null,vec__48046_48086,(1),null);
var map__48049_48089__$1 = ((((!((map__48049_48088 == null)))?((((map__48049_48088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48049_48088.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48049_48088):map__48049_48088);
var doc_48090 = cljs.core.get.call(null,map__48049_48089__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_48091 = cljs.core.get.call(null,map__48049_48089__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_48087);

cljs.core.println.call(null," ",arglists_48091);

if(cljs.core.truth_(doc_48090)){
cljs.core.println.call(null," ",doc_48090);
} else {
}

var G__48092 = seq__48042_48082;
var G__48093 = chunk__48043_48083;
var G__48094 = count__48044_48084;
var G__48095 = (i__48045_48085 + (1));
seq__48042_48082 = G__48092;
chunk__48043_48083 = G__48093;
count__48044_48084 = G__48094;
i__48045_48085 = G__48095;
continue;
} else {
var temp__4657__auto___48096 = cljs.core.seq.call(null,seq__48042_48082);
if(temp__4657__auto___48096){
var seq__48042_48097__$1 = temp__4657__auto___48096;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48042_48097__$1)){
var c__40301__auto___48098 = cljs.core.chunk_first.call(null,seq__48042_48097__$1);
var G__48099 = cljs.core.chunk_rest.call(null,seq__48042_48097__$1);
var G__48100 = c__40301__auto___48098;
var G__48101 = cljs.core.count.call(null,c__40301__auto___48098);
var G__48102 = (0);
seq__48042_48082 = G__48099;
chunk__48043_48083 = G__48100;
count__48044_48084 = G__48101;
i__48045_48085 = G__48102;
continue;
} else {
var vec__48051_48103 = cljs.core.first.call(null,seq__48042_48097__$1);
var name_48104 = cljs.core.nth.call(null,vec__48051_48103,(0),null);
var map__48054_48105 = cljs.core.nth.call(null,vec__48051_48103,(1),null);
var map__48054_48106__$1 = ((((!((map__48054_48105 == null)))?((((map__48054_48105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48054_48105.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48054_48105):map__48054_48105);
var doc_48107 = cljs.core.get.call(null,map__48054_48106__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_48108 = cljs.core.get.call(null,map__48054_48106__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_48104);

cljs.core.println.call(null," ",arglists_48108);

if(cljs.core.truth_(doc_48107)){
cljs.core.println.call(null," ",doc_48107);
} else {
}

var G__48109 = cljs.core.next.call(null,seq__48042_48097__$1);
var G__48110 = null;
var G__48111 = (0);
var G__48112 = (0);
seq__48042_48082 = G__48109;
chunk__48043_48083 = G__48110;
count__48044_48084 = G__48111;
i__48045_48085 = G__48112;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__48056 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__48057 = null;
var count__48058 = (0);
var i__48059 = (0);
while(true){
if((i__48059 < count__48058)){
var role = cljs.core._nth.call(null,chunk__48057,i__48059);
var temp__4657__auto___48113__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___48113__$1)){
var spec_48114 = temp__4657__auto___48113__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_48114));
} else {
}

var G__48115 = seq__48056;
var G__48116 = chunk__48057;
var G__48117 = count__48058;
var G__48118 = (i__48059 + (1));
seq__48056 = G__48115;
chunk__48057 = G__48116;
count__48058 = G__48117;
i__48059 = G__48118;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__48056);
if(temp__4657__auto____$1){
var seq__48056__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48056__$1)){
var c__40301__auto__ = cljs.core.chunk_first.call(null,seq__48056__$1);
var G__48119 = cljs.core.chunk_rest.call(null,seq__48056__$1);
var G__48120 = c__40301__auto__;
var G__48121 = cljs.core.count.call(null,c__40301__auto__);
var G__48122 = (0);
seq__48056 = G__48119;
chunk__48057 = G__48120;
count__48058 = G__48121;
i__48059 = G__48122;
continue;
} else {
var role = cljs.core.first.call(null,seq__48056__$1);
var temp__4657__auto___48123__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___48123__$2)){
var spec_48124 = temp__4657__auto___48123__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_48124));
} else {
}

var G__48125 = cljs.core.next.call(null,seq__48056__$1);
var G__48126 = null;
var G__48127 = (0);
var G__48128 = (0);
seq__48056 = G__48125;
chunk__48057 = G__48126;
count__48058 = G__48127;
i__48059 = G__48128;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1515676047735