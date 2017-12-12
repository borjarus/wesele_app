// Compiled by ClojureScript 1.9.494 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x20724_20725 = value;
x20724_20725.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x20729_20730 = value;
x20729_20730.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x20734_20735 = value;
x20734_20735.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__6753__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__6753__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__6753__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__7885__auto__ = [];
var len__7878__auto___20743 = arguments.length;
var i__7879__auto___20744 = (0);
while(true){
if((i__7879__auto___20744 < len__7878__auto___20743)){
args__7885__auto__.push((arguments[i__7879__auto___20744]));

var G__20745 = (i__7879__auto___20744 + (1));
i__7879__auto___20744 = G__20745;
continue;
} else {
}
break;
}

var argseq__7886__auto__ = ((((0) < args__7885__auto__.length))?(new cljs.core.IndexedSeq(args__7885__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__7886__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__20739_20746 = cljs.core.seq.call(null,items);
var chunk__20740_20747 = null;
var count__20741_20748 = (0);
var i__20742_20749 = (0);
while(true){
if((i__20742_20749 < count__20741_20748)){
var item_20750 = cljs.core._nth.call(null,chunk__20740_20747,i__20742_20749);
if(!((item_20750 == null))){
if(cljs.core.coll_QMARK_.call(null,item_20750)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_20750)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_20750));
}
} else {
}

var G__20751 = seq__20739_20746;
var G__20752 = chunk__20740_20747;
var G__20753 = count__20741_20748;
var G__20754 = (i__20742_20749 + (1));
seq__20739_20746 = G__20751;
chunk__20740_20747 = G__20752;
count__20741_20748 = G__20753;
i__20742_20749 = G__20754;
continue;
} else {
var temp__4657__auto___20755 = cljs.core.seq.call(null,seq__20739_20746);
if(temp__4657__auto___20755){
var seq__20739_20756__$1 = temp__4657__auto___20755;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20739_20756__$1)){
var c__7584__auto___20757 = cljs.core.chunk_first.call(null,seq__20739_20756__$1);
var G__20758 = cljs.core.chunk_rest.call(null,seq__20739_20756__$1);
var G__20759 = c__7584__auto___20757;
var G__20760 = cljs.core.count.call(null,c__7584__auto___20757);
var G__20761 = (0);
seq__20739_20746 = G__20758;
chunk__20740_20747 = G__20759;
count__20741_20748 = G__20760;
i__20742_20749 = G__20761;
continue;
} else {
var item_20762 = cljs.core.first.call(null,seq__20739_20756__$1);
if(!((item_20762 == null))){
if(cljs.core.coll_QMARK_.call(null,item_20762)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_20762)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_20762));
}
} else {
}

var G__20763 = cljs.core.next.call(null,seq__20739_20756__$1);
var G__20764 = null;
var G__20765 = (0);
var G__20766 = (0);
seq__20739_20746 = G__20763;
chunk__20740_20747 = G__20764;
count__20741_20748 = G__20765;
i__20742_20749 = G__20766;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq20738){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20738));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__7885__auto__ = [];
var len__7878__auto___20774 = arguments.length;
var i__7879__auto___20775 = (0);
while(true){
if((i__7879__auto___20775 < len__7878__auto___20774)){
args__7885__auto__.push((arguments[i__7879__auto___20775]));

var G__20776 = (i__7879__auto___20775 + (1));
i__7879__auto___20775 = G__20776;
continue;
} else {
}
break;
}

var argseq__7886__auto__ = ((((2) < args__7885__auto__.length))?(new cljs.core.IndexedSeq(args__7885__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7886__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__20770_20777 = cljs.core.seq.call(null,children);
var chunk__20771_20778 = null;
var count__20772_20779 = (0);
var i__20773_20780 = (0);
while(true){
if((i__20773_20780 < count__20772_20779)){
var child_20781 = cljs.core._nth.call(null,chunk__20771_20778,i__20773_20780);
if(!((child_20781 == null))){
if(cljs.core.coll_QMARK_.call(null,child_20781)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_20781))));
} else {
var temp__4655__auto___20782 = devtools.formatters.helpers.pref.call(null,child_20781);
if(cljs.core.truth_(temp__4655__auto___20782)){
var child_value_20783 = temp__4655__auto___20782;
template.push(child_value_20783);
} else {
}
}
} else {
}

var G__20784 = seq__20770_20777;
var G__20785 = chunk__20771_20778;
var G__20786 = count__20772_20779;
var G__20787 = (i__20773_20780 + (1));
seq__20770_20777 = G__20784;
chunk__20771_20778 = G__20785;
count__20772_20779 = G__20786;
i__20773_20780 = G__20787;
continue;
} else {
var temp__4657__auto___20788 = cljs.core.seq.call(null,seq__20770_20777);
if(temp__4657__auto___20788){
var seq__20770_20789__$1 = temp__4657__auto___20788;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20770_20789__$1)){
var c__7584__auto___20790 = cljs.core.chunk_first.call(null,seq__20770_20789__$1);
var G__20791 = cljs.core.chunk_rest.call(null,seq__20770_20789__$1);
var G__20792 = c__7584__auto___20790;
var G__20793 = cljs.core.count.call(null,c__7584__auto___20790);
var G__20794 = (0);
seq__20770_20777 = G__20791;
chunk__20771_20778 = G__20792;
count__20772_20779 = G__20793;
i__20773_20780 = G__20794;
continue;
} else {
var child_20795 = cljs.core.first.call(null,seq__20770_20789__$1);
if(!((child_20795 == null))){
if(cljs.core.coll_QMARK_.call(null,child_20795)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_20795))));
} else {
var temp__4655__auto___20796 = devtools.formatters.helpers.pref.call(null,child_20795);
if(cljs.core.truth_(temp__4655__auto___20796)){
var child_value_20797 = temp__4655__auto___20796;
template.push(child_value_20797);
} else {
}
}
} else {
}

var G__20798 = cljs.core.next.call(null,seq__20770_20789__$1);
var G__20799 = null;
var G__20800 = (0);
var G__20801 = (0);
seq__20770_20777 = G__20798;
chunk__20771_20778 = G__20799;
count__20772_20779 = G__20800;
i__20773_20780 = G__20801;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq20767){
var G__20768 = cljs.core.first.call(null,seq20767);
var seq20767__$1 = cljs.core.next.call(null,seq20767);
var G__20769 = cljs.core.first.call(null,seq20767__$1);
var seq20767__$2 = cljs.core.next.call(null,seq20767__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__20768,G__20769,seq20767__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__7885__auto__ = [];
var len__7878__auto___20804 = arguments.length;
var i__7879__auto___20805 = (0);
while(true){
if((i__7879__auto___20805 < len__7878__auto___20804)){
args__7885__auto__.push((arguments[i__7879__auto___20805]));

var G__20806 = (i__7879__auto___20805 + (1));
i__7879__auto___20805 = G__20806;
continue;
} else {
}
break;
}

var argseq__7886__auto__ = ((((1) < args__7885__auto__.length))?(new cljs.core.IndexedSeq(args__7885__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7886__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq20802){
var G__20803 = cljs.core.first.call(null,seq20802);
var seq20802__$1 = cljs.core.next.call(null,seq20802);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20803,seq20802__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__7885__auto__ = [];
var len__7878__auto___20809 = arguments.length;
var i__7879__auto___20810 = (0);
while(true){
if((i__7879__auto___20810 < len__7878__auto___20809)){
args__7885__auto__.push((arguments[i__7879__auto___20810]));

var G__20811 = (i__7879__auto___20810 + (1));
i__7879__auto___20810 = G__20811;
continue;
} else {
}
break;
}

var argseq__7886__auto__ = ((((1) < args__7885__auto__.length))?(new cljs.core.IndexedSeq(args__7885__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7886__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq20807){
var G__20808 = cljs.core.first.call(null,seq20807);
var seq20807__$1 = cljs.core.next.call(null,seq20807);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20808,seq20807__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args20812 = [];
var len__7878__auto___20817 = arguments.length;
var i__7879__auto___20818 = (0);
while(true){
if((i__7879__auto___20818 < len__7878__auto___20817)){
args20812.push((arguments[i__7879__auto___20818]));

var G__20819 = (i__7879__auto___20818 + (1));
i__7879__auto___20818 = G__20819;
continue;
} else {
}
break;
}

var G__20814 = args20812.length;
switch (G__20814) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20812.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj20816 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__6765__auto__ = start_index;
if(cljs.core.truth_(or__6765__auto__)){
return or__6765__auto__;
} else {
return (0);
}
})()};
return obj20816;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__7885__auto__ = [];
var len__7878__auto___20827 = arguments.length;
var i__7879__auto___20828 = (0);
while(true){
if((i__7879__auto___20828 < len__7878__auto___20827)){
args__7885__auto__.push((arguments[i__7879__auto___20828]));

var G__20829 = (i__7879__auto___20828 + (1));
i__7879__auto___20828 = G__20829;
continue;
} else {
}
break;
}

var argseq__7886__auto__ = ((((1) < args__7885__auto__.length))?(new cljs.core.IndexedSeq(args__7885__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7886__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__20823){
var vec__20824 = p__20823;
var state_override_fn = cljs.core.nth.call(null,vec__20824,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((!((state_override_fn == null)))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq20821){
var G__20822 = cljs.core.first.call(null,seq20821);
var seq20821__$1 = cljs.core.next.call(null,seq20821);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__20822,seq20821__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__7759__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_20833_20836 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_20834_20837 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_20833_20836,_STAR_print_fn_STAR_20834_20837,sb__7759__auto__){
return (function (x__7760__auto__){
return sb__7759__auto__.append(x__7760__auto__);
});})(_STAR_print_newline_STAR_20833_20836,_STAR_print_fn_STAR_20834_20837,sb__7759__auto__))
;

try{var _STAR_print_level_STAR_20835_20838 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_20835_20838;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_20834_20837;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_20833_20836;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__7759__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_20840 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_20840;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Render path: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Render stack:\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__20842 = name;
switch (G__20842) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("no matching special tag name: '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__20847 = tag;
var html_tag = cljs.core.nth.call(null,vec__20847,(0),null);
var style = cljs.core.nth.call(null,vec__20847,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_20851 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid json-ml markup at "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_20851;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_20854 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_20855 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_20855;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_20854;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("result of markup rendering must be a template,\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("resolved to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("initial value: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__20856 = initial_value;
var G__20857 = value.call(null);
initial_value = G__20856;
value = G__20857;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__20858 = initial_value;
var G__20859 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__20858;
value = G__20859;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__20860 = initial_value;
var G__20861 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__20860;
value = G__20861;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1513114976607