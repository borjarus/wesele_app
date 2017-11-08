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
var x71975_71976 = value;
x71975_71976.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


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
var x71980_71981 = value;
x71980_71981.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


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
var x71985_71986 = value;
x71985_71986.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


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
var and__43482__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__43482__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__43482__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__44614__auto__ = [];
var len__44607__auto___71994 = arguments.length;
var i__44608__auto___71995 = (0);
while(true){
if((i__44608__auto___71995 < len__44607__auto___71994)){
args__44614__auto__.push((arguments[i__44608__auto___71995]));

var G__71996 = (i__44608__auto___71995 + (1));
i__44608__auto___71995 = G__71996;
continue;
} else {
}
break;
}

var argseq__44615__auto__ = ((((0) < args__44614__auto__.length))?(new cljs.core.IndexedSeq(args__44614__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__44615__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__71990_71997 = cljs.core.seq.call(null,items);
var chunk__71991_71998 = null;
var count__71992_71999 = (0);
var i__71993_72000 = (0);
while(true){
if((i__71993_72000 < count__71992_71999)){
var item_72001 = cljs.core._nth.call(null,chunk__71991_71998,i__71993_72000);
if(!((item_72001 == null))){
if(cljs.core.coll_QMARK_.call(null,item_72001)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_72001)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_72001));
}
} else {
}

var G__72002 = seq__71990_71997;
var G__72003 = chunk__71991_71998;
var G__72004 = count__71992_71999;
var G__72005 = (i__71993_72000 + (1));
seq__71990_71997 = G__72002;
chunk__71991_71998 = G__72003;
count__71992_71999 = G__72004;
i__71993_72000 = G__72005;
continue;
} else {
var temp__4657__auto___72006 = cljs.core.seq.call(null,seq__71990_71997);
if(temp__4657__auto___72006){
var seq__71990_72007__$1 = temp__4657__auto___72006;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71990_72007__$1)){
var c__44313__auto___72008 = cljs.core.chunk_first.call(null,seq__71990_72007__$1);
var G__72009 = cljs.core.chunk_rest.call(null,seq__71990_72007__$1);
var G__72010 = c__44313__auto___72008;
var G__72011 = cljs.core.count.call(null,c__44313__auto___72008);
var G__72012 = (0);
seq__71990_71997 = G__72009;
chunk__71991_71998 = G__72010;
count__71992_71999 = G__72011;
i__71993_72000 = G__72012;
continue;
} else {
var item_72013 = cljs.core.first.call(null,seq__71990_72007__$1);
if(!((item_72013 == null))){
if(cljs.core.coll_QMARK_.call(null,item_72013)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_72013)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_72013));
}
} else {
}

var G__72014 = cljs.core.next.call(null,seq__71990_72007__$1);
var G__72015 = null;
var G__72016 = (0);
var G__72017 = (0);
seq__71990_71997 = G__72014;
chunk__71991_71998 = G__72015;
count__71992_71999 = G__72016;
i__71993_72000 = G__72017;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq71989){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq71989));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__44614__auto__ = [];
var len__44607__auto___72025 = arguments.length;
var i__44608__auto___72026 = (0);
while(true){
if((i__44608__auto___72026 < len__44607__auto___72025)){
args__44614__auto__.push((arguments[i__44608__auto___72026]));

var G__72027 = (i__44608__auto___72026 + (1));
i__44608__auto___72026 = G__72027;
continue;
} else {
}
break;
}

var argseq__44615__auto__ = ((((2) < args__44614__auto__.length))?(new cljs.core.IndexedSeq(args__44614__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__44615__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__72021_72028 = cljs.core.seq.call(null,children);
var chunk__72022_72029 = null;
var count__72023_72030 = (0);
var i__72024_72031 = (0);
while(true){
if((i__72024_72031 < count__72023_72030)){
var child_72032 = cljs.core._nth.call(null,chunk__72022_72029,i__72024_72031);
if(!((child_72032 == null))){
if(cljs.core.coll_QMARK_.call(null,child_72032)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_72032))));
} else {
var temp__4655__auto___72033 = devtools.formatters.helpers.pref.call(null,child_72032);
if(cljs.core.truth_(temp__4655__auto___72033)){
var child_value_72034 = temp__4655__auto___72033;
template.push(child_value_72034);
} else {
}
}
} else {
}

var G__72035 = seq__72021_72028;
var G__72036 = chunk__72022_72029;
var G__72037 = count__72023_72030;
var G__72038 = (i__72024_72031 + (1));
seq__72021_72028 = G__72035;
chunk__72022_72029 = G__72036;
count__72023_72030 = G__72037;
i__72024_72031 = G__72038;
continue;
} else {
var temp__4657__auto___72039 = cljs.core.seq.call(null,seq__72021_72028);
if(temp__4657__auto___72039){
var seq__72021_72040__$1 = temp__4657__auto___72039;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__72021_72040__$1)){
var c__44313__auto___72041 = cljs.core.chunk_first.call(null,seq__72021_72040__$1);
var G__72042 = cljs.core.chunk_rest.call(null,seq__72021_72040__$1);
var G__72043 = c__44313__auto___72041;
var G__72044 = cljs.core.count.call(null,c__44313__auto___72041);
var G__72045 = (0);
seq__72021_72028 = G__72042;
chunk__72022_72029 = G__72043;
count__72023_72030 = G__72044;
i__72024_72031 = G__72045;
continue;
} else {
var child_72046 = cljs.core.first.call(null,seq__72021_72040__$1);
if(!((child_72046 == null))){
if(cljs.core.coll_QMARK_.call(null,child_72046)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_72046))));
} else {
var temp__4655__auto___72047 = devtools.formatters.helpers.pref.call(null,child_72046);
if(cljs.core.truth_(temp__4655__auto___72047)){
var child_value_72048 = temp__4655__auto___72047;
template.push(child_value_72048);
} else {
}
}
} else {
}

var G__72049 = cljs.core.next.call(null,seq__72021_72040__$1);
var G__72050 = null;
var G__72051 = (0);
var G__72052 = (0);
seq__72021_72028 = G__72049;
chunk__72022_72029 = G__72050;
count__72023_72030 = G__72051;
i__72024_72031 = G__72052;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq72018){
var G__72019 = cljs.core.first.call(null,seq72018);
var seq72018__$1 = cljs.core.next.call(null,seq72018);
var G__72020 = cljs.core.first.call(null,seq72018__$1);
var seq72018__$2 = cljs.core.next.call(null,seq72018__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__72019,G__72020,seq72018__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__44614__auto__ = [];
var len__44607__auto___72055 = arguments.length;
var i__44608__auto___72056 = (0);
while(true){
if((i__44608__auto___72056 < len__44607__auto___72055)){
args__44614__auto__.push((arguments[i__44608__auto___72056]));

var G__72057 = (i__44608__auto___72056 + (1));
i__44608__auto___72056 = G__72057;
continue;
} else {
}
break;
}

var argseq__44615__auto__ = ((((1) < args__44614__auto__.length))?(new cljs.core.IndexedSeq(args__44614__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44615__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq72053){
var G__72054 = cljs.core.first.call(null,seq72053);
var seq72053__$1 = cljs.core.next.call(null,seq72053);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__72054,seq72053__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__44614__auto__ = [];
var len__44607__auto___72060 = arguments.length;
var i__44608__auto___72061 = (0);
while(true){
if((i__44608__auto___72061 < len__44607__auto___72060)){
args__44614__auto__.push((arguments[i__44608__auto___72061]));

var G__72062 = (i__44608__auto___72061 + (1));
i__44608__auto___72061 = G__72062;
continue;
} else {
}
break;
}

var argseq__44615__auto__ = ((((1) < args__44614__auto__.length))?(new cljs.core.IndexedSeq(args__44614__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44615__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq72058){
var G__72059 = cljs.core.first.call(null,seq72058);
var seq72058__$1 = cljs.core.next.call(null,seq72058);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__72059,seq72058__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args72063 = [];
var len__44607__auto___72068 = arguments.length;
var i__44608__auto___72069 = (0);
while(true){
if((i__44608__auto___72069 < len__44607__auto___72068)){
args72063.push((arguments[i__44608__auto___72069]));

var G__72070 = (i__44608__auto___72069 + (1));
i__44608__auto___72069 = G__72070;
continue;
} else {
}
break;
}

var G__72065 = args72063.length;
switch (G__72065) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args72063.length)].join('')));

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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj72067 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__43494__auto__ = start_index;
if(cljs.core.truth_(or__43494__auto__)){
return or__43494__auto__;
} else {
return (0);
}
})()};
return obj72067;
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
var args__44614__auto__ = [];
var len__44607__auto___72078 = arguments.length;
var i__44608__auto___72079 = (0);
while(true){
if((i__44608__auto___72079 < len__44607__auto___72078)){
args__44614__auto__.push((arguments[i__44608__auto___72079]));

var G__72080 = (i__44608__auto___72079 + (1));
i__44608__auto___72079 = G__72080;
continue;
} else {
}
break;
}

var argseq__44615__auto__ = ((((1) < args__44614__auto__.length))?(new cljs.core.IndexedSeq(args__44614__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44615__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__72074){
var vec__72075 = p__72074;
var state_override_fn = cljs.core.nth.call(null,vec__72075,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq72072){
var G__72073 = cljs.core.first.call(null,seq72072);
var seq72072__$1 = cljs.core.next.call(null,seq72072);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__72073,seq72072__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__44488__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_72084_72087 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_72085_72088 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_72084_72087,_STAR_print_fn_STAR_72085_72088,sb__44488__auto__){
return (function (x__44489__auto__){
return sb__44488__auto__.append(x__44489__auto__);
});})(_STAR_print_newline_STAR_72084_72087,_STAR_print_fn_STAR_72085_72088,sb__44488__auto__))
;

try{var _STAR_print_level_STAR_72086_72089 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_72086_72089;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_72085_72088;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_72084_72087;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__44488__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_72091 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_72091;
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
var G__72093 = name;
switch (G__72093) {
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
var vec__72098 = tag;
var html_tag = cljs.core.nth.call(null,vec__72098,(0),null);
var style = cljs.core.nth.call(null,vec__72098,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_72102 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_72102;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_72105 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_72106 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_72106;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_72105;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("result of markup rendering must be a template,\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("resolved to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("initial value: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__72107 = initial_value;
var G__72108 = value.call(null);
initial_value = G__72107;
value = G__72108;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__72109 = initial_value;
var G__72110 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__72109;
value = G__72110;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__72111 = initial_value;
var G__72112 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__72111;
value = G__72112;
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

//# sourceMappingURL=templating.js.map?rel=1494353267103