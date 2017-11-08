// Compiled by ClojureScript 1.9.494 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__66656){
var map__66681 = p__66656;
var map__66681__$1 = ((((!((map__66681 == null)))?((((map__66681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66681.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66681):map__66681);
var m = map__66681__$1;
var n = cljs.core.get.call(null,map__66681__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__66681__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__66683_66705 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__66684_66706 = null;
var count__66685_66707 = (0);
var i__66686_66708 = (0);
while(true){
if((i__66686_66708 < count__66685_66707)){
var f_66709 = cljs.core._nth.call(null,chunk__66684_66706,i__66686_66708);
cljs.core.println.call(null,"  ",f_66709);

var G__66710 = seq__66683_66705;
var G__66711 = chunk__66684_66706;
var G__66712 = count__66685_66707;
var G__66713 = (i__66686_66708 + (1));
seq__66683_66705 = G__66710;
chunk__66684_66706 = G__66711;
count__66685_66707 = G__66712;
i__66686_66708 = G__66713;
continue;
} else {
var temp__4657__auto___66714 = cljs.core.seq.call(null,seq__66683_66705);
if(temp__4657__auto___66714){
var seq__66683_66715__$1 = temp__4657__auto___66714;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66683_66715__$1)){
var c__44313__auto___66716 = cljs.core.chunk_first.call(null,seq__66683_66715__$1);
var G__66717 = cljs.core.chunk_rest.call(null,seq__66683_66715__$1);
var G__66718 = c__44313__auto___66716;
var G__66719 = cljs.core.count.call(null,c__44313__auto___66716);
var G__66720 = (0);
seq__66683_66705 = G__66717;
chunk__66684_66706 = G__66718;
count__66685_66707 = G__66719;
i__66686_66708 = G__66720;
continue;
} else {
var f_66721 = cljs.core.first.call(null,seq__66683_66715__$1);
cljs.core.println.call(null,"  ",f_66721);

var G__66722 = cljs.core.next.call(null,seq__66683_66715__$1);
var G__66723 = null;
var G__66724 = (0);
var G__66725 = (0);
seq__66683_66705 = G__66722;
chunk__66684_66706 = G__66723;
count__66685_66707 = G__66724;
i__66686_66708 = G__66725;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_66726 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__43494__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__43494__auto__)){
return or__43494__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_66726);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_66726)))?cljs.core.second.call(null,arglists_66726):arglists_66726));
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
var seq__66687_66727 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__66688_66728 = null;
var count__66689_66729 = (0);
var i__66690_66730 = (0);
while(true){
if((i__66690_66730 < count__66689_66729)){
var vec__66691_66731 = cljs.core._nth.call(null,chunk__66688_66728,i__66690_66730);
var name_66732 = cljs.core.nth.call(null,vec__66691_66731,(0),null);
var map__66694_66733 = cljs.core.nth.call(null,vec__66691_66731,(1),null);
var map__66694_66734__$1 = ((((!((map__66694_66733 == null)))?((((map__66694_66733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66694_66733.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66694_66733):map__66694_66733);
var doc_66735 = cljs.core.get.call(null,map__66694_66734__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_66736 = cljs.core.get.call(null,map__66694_66734__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_66732);

cljs.core.println.call(null," ",arglists_66736);

if(cljs.core.truth_(doc_66735)){
cljs.core.println.call(null," ",doc_66735);
} else {
}

var G__66737 = seq__66687_66727;
var G__66738 = chunk__66688_66728;
var G__66739 = count__66689_66729;
var G__66740 = (i__66690_66730 + (1));
seq__66687_66727 = G__66737;
chunk__66688_66728 = G__66738;
count__66689_66729 = G__66739;
i__66690_66730 = G__66740;
continue;
} else {
var temp__4657__auto___66741 = cljs.core.seq.call(null,seq__66687_66727);
if(temp__4657__auto___66741){
var seq__66687_66742__$1 = temp__4657__auto___66741;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66687_66742__$1)){
var c__44313__auto___66743 = cljs.core.chunk_first.call(null,seq__66687_66742__$1);
var G__66744 = cljs.core.chunk_rest.call(null,seq__66687_66742__$1);
var G__66745 = c__44313__auto___66743;
var G__66746 = cljs.core.count.call(null,c__44313__auto___66743);
var G__66747 = (0);
seq__66687_66727 = G__66744;
chunk__66688_66728 = G__66745;
count__66689_66729 = G__66746;
i__66690_66730 = G__66747;
continue;
} else {
var vec__66696_66748 = cljs.core.first.call(null,seq__66687_66742__$1);
var name_66749 = cljs.core.nth.call(null,vec__66696_66748,(0),null);
var map__66699_66750 = cljs.core.nth.call(null,vec__66696_66748,(1),null);
var map__66699_66751__$1 = ((((!((map__66699_66750 == null)))?((((map__66699_66750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66699_66750.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66699_66750):map__66699_66750);
var doc_66752 = cljs.core.get.call(null,map__66699_66751__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_66753 = cljs.core.get.call(null,map__66699_66751__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_66749);

cljs.core.println.call(null," ",arglists_66753);

if(cljs.core.truth_(doc_66752)){
cljs.core.println.call(null," ",doc_66752);
} else {
}

var G__66754 = cljs.core.next.call(null,seq__66687_66742__$1);
var G__66755 = null;
var G__66756 = (0);
var G__66757 = (0);
seq__66687_66727 = G__66754;
chunk__66688_66728 = G__66755;
count__66689_66729 = G__66756;
i__66690_66730 = G__66757;
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

var seq__66701 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__66702 = null;
var count__66703 = (0);
var i__66704 = (0);
while(true){
if((i__66704 < count__66703)){
var role = cljs.core._nth.call(null,chunk__66702,i__66704);
var temp__4657__auto___66758__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___66758__$1)){
var spec_66759 = temp__4657__auto___66758__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_66759));
} else {
}

var G__66760 = seq__66701;
var G__66761 = chunk__66702;
var G__66762 = count__66703;
var G__66763 = (i__66704 + (1));
seq__66701 = G__66760;
chunk__66702 = G__66761;
count__66703 = G__66762;
i__66704 = G__66763;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__66701);
if(temp__4657__auto____$1){
var seq__66701__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66701__$1)){
var c__44313__auto__ = cljs.core.chunk_first.call(null,seq__66701__$1);
var G__66764 = cljs.core.chunk_rest.call(null,seq__66701__$1);
var G__66765 = c__44313__auto__;
var G__66766 = cljs.core.count.call(null,c__44313__auto__);
var G__66767 = (0);
seq__66701 = G__66764;
chunk__66702 = G__66765;
count__66703 = G__66766;
i__66704 = G__66767;
continue;
} else {
var role = cljs.core.first.call(null,seq__66701__$1);
var temp__4657__auto___66768__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___66768__$2)){
var spec_66769 = temp__4657__auto___66768__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_66769));
} else {
}

var G__66770 = cljs.core.next.call(null,seq__66701__$1);
var G__66771 = null;
var G__66772 = (0);
var G__66773 = (0);
seq__66701 = G__66770;
chunk__66702 = G__66771;
count__66703 = G__66772;
i__66704 = G__66773;
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

//# sourceMappingURL=repl.js.map?rel=1494353218501