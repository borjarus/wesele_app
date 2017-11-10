// Compiled by ClojureScript 1.9.494 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__63042){
var map__63067 = p__63042;
var map__63067__$1 = ((((!((map__63067 == null)))?((((map__63067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63067.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63067):map__63067);
var m = map__63067__$1;
var n = cljs.core.get.call(null,map__63067__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__63067__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__63069_63091 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__63070_63092 = null;
var count__63071_63093 = (0);
var i__63072_63094 = (0);
while(true){
if((i__63072_63094 < count__63071_63093)){
var f_63095 = cljs.core._nth.call(null,chunk__63070_63092,i__63072_63094);
cljs.core.println.call(null,"  ",f_63095);

var G__63096 = seq__63069_63091;
var G__63097 = chunk__63070_63092;
var G__63098 = count__63071_63093;
var G__63099 = (i__63072_63094 + (1));
seq__63069_63091 = G__63096;
chunk__63070_63092 = G__63097;
count__63071_63093 = G__63098;
i__63072_63094 = G__63099;
continue;
} else {
var temp__4657__auto___63100 = cljs.core.seq.call(null,seq__63069_63091);
if(temp__4657__auto___63100){
var seq__63069_63101__$1 = temp__4657__auto___63100;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63069_63101__$1)){
var c__34153__auto___63102 = cljs.core.chunk_first.call(null,seq__63069_63101__$1);
var G__63103 = cljs.core.chunk_rest.call(null,seq__63069_63101__$1);
var G__63104 = c__34153__auto___63102;
var G__63105 = cljs.core.count.call(null,c__34153__auto___63102);
var G__63106 = (0);
seq__63069_63091 = G__63103;
chunk__63070_63092 = G__63104;
count__63071_63093 = G__63105;
i__63072_63094 = G__63106;
continue;
} else {
var f_63107 = cljs.core.first.call(null,seq__63069_63101__$1);
cljs.core.println.call(null,"  ",f_63107);

var G__63108 = cljs.core.next.call(null,seq__63069_63101__$1);
var G__63109 = null;
var G__63110 = (0);
var G__63111 = (0);
seq__63069_63091 = G__63108;
chunk__63070_63092 = G__63109;
count__63071_63093 = G__63110;
i__63072_63094 = G__63111;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_63112 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__33334__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__33334__auto__)){
return or__33334__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_63112);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_63112)))?cljs.core.second.call(null,arglists_63112):arglists_63112));
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
var seq__63073_63113 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__63074_63114 = null;
var count__63075_63115 = (0);
var i__63076_63116 = (0);
while(true){
if((i__63076_63116 < count__63075_63115)){
var vec__63077_63117 = cljs.core._nth.call(null,chunk__63074_63114,i__63076_63116);
var name_63118 = cljs.core.nth.call(null,vec__63077_63117,(0),null);
var map__63080_63119 = cljs.core.nth.call(null,vec__63077_63117,(1),null);
var map__63080_63120__$1 = ((((!((map__63080_63119 == null)))?((((map__63080_63119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63080_63119.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63080_63119):map__63080_63119);
var doc_63121 = cljs.core.get.call(null,map__63080_63120__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_63122 = cljs.core.get.call(null,map__63080_63120__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_63118);

cljs.core.println.call(null," ",arglists_63122);

if(cljs.core.truth_(doc_63121)){
cljs.core.println.call(null," ",doc_63121);
} else {
}

var G__63123 = seq__63073_63113;
var G__63124 = chunk__63074_63114;
var G__63125 = count__63075_63115;
var G__63126 = (i__63076_63116 + (1));
seq__63073_63113 = G__63123;
chunk__63074_63114 = G__63124;
count__63075_63115 = G__63125;
i__63076_63116 = G__63126;
continue;
} else {
var temp__4657__auto___63127 = cljs.core.seq.call(null,seq__63073_63113);
if(temp__4657__auto___63127){
var seq__63073_63128__$1 = temp__4657__auto___63127;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63073_63128__$1)){
var c__34153__auto___63129 = cljs.core.chunk_first.call(null,seq__63073_63128__$1);
var G__63130 = cljs.core.chunk_rest.call(null,seq__63073_63128__$1);
var G__63131 = c__34153__auto___63129;
var G__63132 = cljs.core.count.call(null,c__34153__auto___63129);
var G__63133 = (0);
seq__63073_63113 = G__63130;
chunk__63074_63114 = G__63131;
count__63075_63115 = G__63132;
i__63076_63116 = G__63133;
continue;
} else {
var vec__63082_63134 = cljs.core.first.call(null,seq__63073_63128__$1);
var name_63135 = cljs.core.nth.call(null,vec__63082_63134,(0),null);
var map__63085_63136 = cljs.core.nth.call(null,vec__63082_63134,(1),null);
var map__63085_63137__$1 = ((((!((map__63085_63136 == null)))?((((map__63085_63136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63085_63136.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63085_63136):map__63085_63136);
var doc_63138 = cljs.core.get.call(null,map__63085_63137__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_63139 = cljs.core.get.call(null,map__63085_63137__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_63135);

cljs.core.println.call(null," ",arglists_63139);

if(cljs.core.truth_(doc_63138)){
cljs.core.println.call(null," ",doc_63138);
} else {
}

var G__63140 = cljs.core.next.call(null,seq__63073_63128__$1);
var G__63141 = null;
var G__63142 = (0);
var G__63143 = (0);
seq__63073_63113 = G__63140;
chunk__63074_63114 = G__63141;
count__63075_63115 = G__63142;
i__63076_63116 = G__63143;
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

var seq__63087 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__63088 = null;
var count__63089 = (0);
var i__63090 = (0);
while(true){
if((i__63090 < count__63089)){
var role = cljs.core._nth.call(null,chunk__63088,i__63090);
var temp__4657__auto___63144__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___63144__$1)){
var spec_63145 = temp__4657__auto___63144__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_63145));
} else {
}

var G__63146 = seq__63087;
var G__63147 = chunk__63088;
var G__63148 = count__63089;
var G__63149 = (i__63090 + (1));
seq__63087 = G__63146;
chunk__63088 = G__63147;
count__63089 = G__63148;
i__63090 = G__63149;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__63087);
if(temp__4657__auto____$1){
var seq__63087__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63087__$1)){
var c__34153__auto__ = cljs.core.chunk_first.call(null,seq__63087__$1);
var G__63150 = cljs.core.chunk_rest.call(null,seq__63087__$1);
var G__63151 = c__34153__auto__;
var G__63152 = cljs.core.count.call(null,c__34153__auto__);
var G__63153 = (0);
seq__63087 = G__63150;
chunk__63088 = G__63151;
count__63089 = G__63152;
i__63090 = G__63153;
continue;
} else {
var role = cljs.core.first.call(null,seq__63087__$1);
var temp__4657__auto___63154__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___63154__$2)){
var spec_63155 = temp__4657__auto___63154__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_63155));
} else {
}

var G__63156 = cljs.core.next.call(null,seq__63087__$1);
var G__63157 = null;
var G__63158 = (0);
var G__63159 = (0);
seq__63087 = G__63156;
chunk__63088 = G__63157;
count__63089 = G__63158;
i__63090 = G__63159;
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

//# sourceMappingURL=repl.js.map?rel=1510317525823