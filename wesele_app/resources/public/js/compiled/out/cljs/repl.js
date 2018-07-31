// Compiled by ClojureScript 1.9.494 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__47560){
var map__47585 = p__47560;
var map__47585__$1 = ((((!((map__47585 == null)))?((((map__47585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47585.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47585):map__47585);
var m = map__47585__$1;
var n = cljs.core.get.call(null,map__47585__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__47585__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__47587_47609 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47588_47610 = null;
var count__47589_47611 = (0);
var i__47590_47612 = (0);
while(true){
if((i__47590_47612 < count__47589_47611)){
var f_47613 = cljs.core._nth.call(null,chunk__47588_47610,i__47590_47612);
cljs.core.println.call(null,"  ",f_47613);

var G__47614 = seq__47587_47609;
var G__47615 = chunk__47588_47610;
var G__47616 = count__47589_47611;
var G__47617 = (i__47590_47612 + (1));
seq__47587_47609 = G__47614;
chunk__47588_47610 = G__47615;
count__47589_47611 = G__47616;
i__47590_47612 = G__47617;
continue;
} else {
var temp__4657__auto___47618 = cljs.core.seq.call(null,seq__47587_47609);
if(temp__4657__auto___47618){
var seq__47587_47619__$1 = temp__4657__auto___47618;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47587_47619__$1)){
var c__34631__auto___47620 = cljs.core.chunk_first.call(null,seq__47587_47619__$1);
var G__47621 = cljs.core.chunk_rest.call(null,seq__47587_47619__$1);
var G__47622 = c__34631__auto___47620;
var G__47623 = cljs.core.count.call(null,c__34631__auto___47620);
var G__47624 = (0);
seq__47587_47609 = G__47621;
chunk__47588_47610 = G__47622;
count__47589_47611 = G__47623;
i__47590_47612 = G__47624;
continue;
} else {
var f_47625 = cljs.core.first.call(null,seq__47587_47619__$1);
cljs.core.println.call(null,"  ",f_47625);

var G__47626 = cljs.core.next.call(null,seq__47587_47619__$1);
var G__47627 = null;
var G__47628 = (0);
var G__47629 = (0);
seq__47587_47609 = G__47626;
chunk__47588_47610 = G__47627;
count__47589_47611 = G__47628;
i__47590_47612 = G__47629;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_47630 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__33812__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__33812__auto__)){
return or__33812__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_47630);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_47630)))?cljs.core.second.call(null,arglists_47630):arglists_47630));
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
var seq__47591_47631 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47592_47632 = null;
var count__47593_47633 = (0);
var i__47594_47634 = (0);
while(true){
if((i__47594_47634 < count__47593_47633)){
var vec__47595_47635 = cljs.core._nth.call(null,chunk__47592_47632,i__47594_47634);
var name_47636 = cljs.core.nth.call(null,vec__47595_47635,(0),null);
var map__47598_47637 = cljs.core.nth.call(null,vec__47595_47635,(1),null);
var map__47598_47638__$1 = ((((!((map__47598_47637 == null)))?((((map__47598_47637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47598_47637.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47598_47637):map__47598_47637);
var doc_47639 = cljs.core.get.call(null,map__47598_47638__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_47640 = cljs.core.get.call(null,map__47598_47638__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_47636);

cljs.core.println.call(null," ",arglists_47640);

if(cljs.core.truth_(doc_47639)){
cljs.core.println.call(null," ",doc_47639);
} else {
}

var G__47641 = seq__47591_47631;
var G__47642 = chunk__47592_47632;
var G__47643 = count__47593_47633;
var G__47644 = (i__47594_47634 + (1));
seq__47591_47631 = G__47641;
chunk__47592_47632 = G__47642;
count__47593_47633 = G__47643;
i__47594_47634 = G__47644;
continue;
} else {
var temp__4657__auto___47645 = cljs.core.seq.call(null,seq__47591_47631);
if(temp__4657__auto___47645){
var seq__47591_47646__$1 = temp__4657__auto___47645;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47591_47646__$1)){
var c__34631__auto___47647 = cljs.core.chunk_first.call(null,seq__47591_47646__$1);
var G__47648 = cljs.core.chunk_rest.call(null,seq__47591_47646__$1);
var G__47649 = c__34631__auto___47647;
var G__47650 = cljs.core.count.call(null,c__34631__auto___47647);
var G__47651 = (0);
seq__47591_47631 = G__47648;
chunk__47592_47632 = G__47649;
count__47593_47633 = G__47650;
i__47594_47634 = G__47651;
continue;
} else {
var vec__47600_47652 = cljs.core.first.call(null,seq__47591_47646__$1);
var name_47653 = cljs.core.nth.call(null,vec__47600_47652,(0),null);
var map__47603_47654 = cljs.core.nth.call(null,vec__47600_47652,(1),null);
var map__47603_47655__$1 = ((((!((map__47603_47654 == null)))?((((map__47603_47654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47603_47654.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47603_47654):map__47603_47654);
var doc_47656 = cljs.core.get.call(null,map__47603_47655__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_47657 = cljs.core.get.call(null,map__47603_47655__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_47653);

cljs.core.println.call(null," ",arglists_47657);

if(cljs.core.truth_(doc_47656)){
cljs.core.println.call(null," ",doc_47656);
} else {
}

var G__47658 = cljs.core.next.call(null,seq__47591_47646__$1);
var G__47659 = null;
var G__47660 = (0);
var G__47661 = (0);
seq__47591_47631 = G__47658;
chunk__47592_47632 = G__47659;
count__47593_47633 = G__47660;
i__47594_47634 = G__47661;
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

var seq__47605 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__47606 = null;
var count__47607 = (0);
var i__47608 = (0);
while(true){
if((i__47608 < count__47607)){
var role = cljs.core._nth.call(null,chunk__47606,i__47608);
var temp__4657__auto___47662__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___47662__$1)){
var spec_47663 = temp__4657__auto___47662__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_47663));
} else {
}

var G__47664 = seq__47605;
var G__47665 = chunk__47606;
var G__47666 = count__47607;
var G__47667 = (i__47608 + (1));
seq__47605 = G__47664;
chunk__47606 = G__47665;
count__47607 = G__47666;
i__47608 = G__47667;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__47605);
if(temp__4657__auto____$1){
var seq__47605__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47605__$1)){
var c__34631__auto__ = cljs.core.chunk_first.call(null,seq__47605__$1);
var G__47668 = cljs.core.chunk_rest.call(null,seq__47605__$1);
var G__47669 = c__34631__auto__;
var G__47670 = cljs.core.count.call(null,c__34631__auto__);
var G__47671 = (0);
seq__47605 = G__47668;
chunk__47606 = G__47669;
count__47607 = G__47670;
i__47608 = G__47671;
continue;
} else {
var role = cljs.core.first.call(null,seq__47605__$1);
var temp__4657__auto___47672__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___47672__$2)){
var spec_47673 = temp__4657__auto___47672__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_47673));
} else {
}

var G__47674 = cljs.core.next.call(null,seq__47605__$1);
var G__47675 = null;
var G__47676 = (0);
var G__47677 = (0);
seq__47605 = G__47674;
chunk__47606 = G__47675;
count__47607 = G__47676;
i__47608 = G__47677;
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

//# sourceMappingURL=repl.js.map?rel=1526470156633