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
var x53218_53219 = value;
x53218_53219.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


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
var x53223_53224 = value;
x53223_53224.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


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
var x53228_53229 = value;
x53228_53229.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


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
var and__33800__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__33800__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__33800__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__34932__auto__ = [];
var len__34925__auto___53237 = arguments.length;
var i__34926__auto___53238 = (0);
while(true){
if((i__34926__auto___53238 < len__34925__auto___53237)){
args__34932__auto__.push((arguments[i__34926__auto___53238]));

var G__53239 = (i__34926__auto___53238 + (1));
i__34926__auto___53238 = G__53239;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__53233_53240 = cljs.core.seq.call(null,items);
var chunk__53234_53241 = null;
var count__53235_53242 = (0);
var i__53236_53243 = (0);
while(true){
if((i__53236_53243 < count__53235_53242)){
var item_53244 = cljs.core._nth.call(null,chunk__53234_53241,i__53236_53243);
if(!((item_53244 == null))){
if(cljs.core.coll_QMARK_.call(null,item_53244)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_53244)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_53244));
}
} else {
}

var G__53245 = seq__53233_53240;
var G__53246 = chunk__53234_53241;
var G__53247 = count__53235_53242;
var G__53248 = (i__53236_53243 + (1));
seq__53233_53240 = G__53245;
chunk__53234_53241 = G__53246;
count__53235_53242 = G__53247;
i__53236_53243 = G__53248;
continue;
} else {
var temp__4657__auto___53249 = cljs.core.seq.call(null,seq__53233_53240);
if(temp__4657__auto___53249){
var seq__53233_53250__$1 = temp__4657__auto___53249;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53233_53250__$1)){
var c__34631__auto___53251 = cljs.core.chunk_first.call(null,seq__53233_53250__$1);
var G__53252 = cljs.core.chunk_rest.call(null,seq__53233_53250__$1);
var G__53253 = c__34631__auto___53251;
var G__53254 = cljs.core.count.call(null,c__34631__auto___53251);
var G__53255 = (0);
seq__53233_53240 = G__53252;
chunk__53234_53241 = G__53253;
count__53235_53242 = G__53254;
i__53236_53243 = G__53255;
continue;
} else {
var item_53256 = cljs.core.first.call(null,seq__53233_53250__$1);
if(!((item_53256 == null))){
if(cljs.core.coll_QMARK_.call(null,item_53256)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_53256)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_53256));
}
} else {
}

var G__53257 = cljs.core.next.call(null,seq__53233_53250__$1);
var G__53258 = null;
var G__53259 = (0);
var G__53260 = (0);
seq__53233_53240 = G__53257;
chunk__53234_53241 = G__53258;
count__53235_53242 = G__53259;
i__53236_53243 = G__53260;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq53232){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53232));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__34932__auto__ = [];
var len__34925__auto___53268 = arguments.length;
var i__34926__auto___53269 = (0);
while(true){
if((i__34926__auto___53269 < len__34925__auto___53268)){
args__34932__auto__.push((arguments[i__34926__auto___53269]));

var G__53270 = (i__34926__auto___53269 + (1));
i__34926__auto___53269 = G__53270;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((2) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__34933__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__53264_53271 = cljs.core.seq.call(null,children);
var chunk__53265_53272 = null;
var count__53266_53273 = (0);
var i__53267_53274 = (0);
while(true){
if((i__53267_53274 < count__53266_53273)){
var child_53275 = cljs.core._nth.call(null,chunk__53265_53272,i__53267_53274);
if(!((child_53275 == null))){
if(cljs.core.coll_QMARK_.call(null,child_53275)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_53275))));
} else {
var temp__4655__auto___53276 = devtools.formatters.helpers.pref.call(null,child_53275);
if(cljs.core.truth_(temp__4655__auto___53276)){
var child_value_53277 = temp__4655__auto___53276;
template.push(child_value_53277);
} else {
}
}
} else {
}

var G__53278 = seq__53264_53271;
var G__53279 = chunk__53265_53272;
var G__53280 = count__53266_53273;
var G__53281 = (i__53267_53274 + (1));
seq__53264_53271 = G__53278;
chunk__53265_53272 = G__53279;
count__53266_53273 = G__53280;
i__53267_53274 = G__53281;
continue;
} else {
var temp__4657__auto___53282 = cljs.core.seq.call(null,seq__53264_53271);
if(temp__4657__auto___53282){
var seq__53264_53283__$1 = temp__4657__auto___53282;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53264_53283__$1)){
var c__34631__auto___53284 = cljs.core.chunk_first.call(null,seq__53264_53283__$1);
var G__53285 = cljs.core.chunk_rest.call(null,seq__53264_53283__$1);
var G__53286 = c__34631__auto___53284;
var G__53287 = cljs.core.count.call(null,c__34631__auto___53284);
var G__53288 = (0);
seq__53264_53271 = G__53285;
chunk__53265_53272 = G__53286;
count__53266_53273 = G__53287;
i__53267_53274 = G__53288;
continue;
} else {
var child_53289 = cljs.core.first.call(null,seq__53264_53283__$1);
if(!((child_53289 == null))){
if(cljs.core.coll_QMARK_.call(null,child_53289)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_53289))));
} else {
var temp__4655__auto___53290 = devtools.formatters.helpers.pref.call(null,child_53289);
if(cljs.core.truth_(temp__4655__auto___53290)){
var child_value_53291 = temp__4655__auto___53290;
template.push(child_value_53291);
} else {
}
}
} else {
}

var G__53292 = cljs.core.next.call(null,seq__53264_53283__$1);
var G__53293 = null;
var G__53294 = (0);
var G__53295 = (0);
seq__53264_53271 = G__53292;
chunk__53265_53272 = G__53293;
count__53266_53273 = G__53294;
i__53267_53274 = G__53295;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq53261){
var G__53262 = cljs.core.first.call(null,seq53261);
var seq53261__$1 = cljs.core.next.call(null,seq53261);
var G__53263 = cljs.core.first.call(null,seq53261__$1);
var seq53261__$2 = cljs.core.next.call(null,seq53261__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__53262,G__53263,seq53261__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__34932__auto__ = [];
var len__34925__auto___53298 = arguments.length;
var i__34926__auto___53299 = (0);
while(true){
if((i__34926__auto___53299 < len__34925__auto___53298)){
args__34932__auto__.push((arguments[i__34926__auto___53299]));

var G__53300 = (i__34926__auto___53299 + (1));
i__34926__auto___53299 = G__53300;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((1) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__34933__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq53296){
var G__53297 = cljs.core.first.call(null,seq53296);
var seq53296__$1 = cljs.core.next.call(null,seq53296);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__53297,seq53296__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__34932__auto__ = [];
var len__34925__auto___53303 = arguments.length;
var i__34926__auto___53304 = (0);
while(true){
if((i__34926__auto___53304 < len__34925__auto___53303)){
args__34932__auto__.push((arguments[i__34926__auto___53304]));

var G__53305 = (i__34926__auto___53304 + (1));
i__34926__auto___53304 = G__53305;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((1) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__34933__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq53301){
var G__53302 = cljs.core.first.call(null,seq53301);
var seq53301__$1 = cljs.core.next.call(null,seq53301);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__53302,seq53301__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args53306 = [];
var len__34925__auto___53311 = arguments.length;
var i__34926__auto___53312 = (0);
while(true){
if((i__34926__auto___53312 < len__34925__auto___53311)){
args53306.push((arguments[i__34926__auto___53312]));

var G__53313 = (i__34926__auto___53312 + (1));
i__34926__auto___53312 = G__53313;
continue;
} else {
}
break;
}

var G__53308 = args53306.length;
switch (G__53308) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args53306.length)].join('')));

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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj53310 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__33812__auto__ = start_index;
if(cljs.core.truth_(or__33812__auto__)){
return or__33812__auto__;
} else {
return (0);
}
})()};
return obj53310;
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
var args__34932__auto__ = [];
var len__34925__auto___53321 = arguments.length;
var i__34926__auto___53322 = (0);
while(true){
if((i__34926__auto___53322 < len__34925__auto___53321)){
args__34932__auto__.push((arguments[i__34926__auto___53322]));

var G__53323 = (i__34926__auto___53322 + (1));
i__34926__auto___53322 = G__53323;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((1) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__34933__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__53317){
var vec__53318 = p__53317;
var state_override_fn = cljs.core.nth.call(null,vec__53318,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq53315){
var G__53316 = cljs.core.first.call(null,seq53315);
var seq53315__$1 = cljs.core.next.call(null,seq53315);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__53316,seq53315__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__34806__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_53327_53330 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_53328_53331 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_53327_53330,_STAR_print_fn_STAR_53328_53331,sb__34806__auto__){
return (function (x__34807__auto__){
return sb__34806__auto__.append(x__34807__auto__);
});})(_STAR_print_newline_STAR_53327_53330,_STAR_print_fn_STAR_53328_53331,sb__34806__auto__))
;

try{var _STAR_print_level_STAR_53329_53332 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_53329_53332;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_53328_53331;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_53327_53330;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__34806__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_53334 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_53334;
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
var G__53336 = name;
switch (G__53336) {
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
var vec__53341 = tag;
var html_tag = cljs.core.nth.call(null,vec__53341,(0),null);
var style = cljs.core.nth.call(null,vec__53341,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_53345 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_53345;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_53348 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_53349 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_53349;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_53348;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("result of markup rendering must be a template,\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("resolved to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("initial value: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__53350 = initial_value;
var G__53351 = value.call(null);
initial_value = G__53350;
value = G__53351;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__53352 = initial_value;
var G__53353 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__53352;
value = G__53353;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__53354 = initial_value;
var G__53355 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__53354;
value = G__53355;
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

//# sourceMappingURL=templating.js.map?rel=1526470220907