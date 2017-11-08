// Compiled by ClojureScript 1.9.494 {}
goog.provide('devtools.format');
goog.require('cljs.core');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__44162__auto__ = (((value == null))?null:value);
var m__44163__auto__ = (devtools.format._header[goog.typeOf(x__44162__auto__)]);
if(!((m__44163__auto__ == null))){
return m__44163__auto__.call(null,value);
} else {
var m__44163__auto____$1 = (devtools.format._header["_"]);
if(!((m__44163__auto____$1 == null))){
return m__44163__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__44162__auto__ = (((value == null))?null:value);
var m__44163__auto__ = (devtools.format._has_body[goog.typeOf(x__44162__auto__)]);
if(!((m__44163__auto__ == null))){
return m__44163__auto__.call(null,value);
} else {
var m__44163__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__44163__auto____$1 == null))){
return m__44163__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__44162__auto__ = (((value == null))?null:value);
var m__44163__auto__ = (devtools.format._body[goog.typeOf(x__44162__auto__)]);
if(!((m__44163__auto__ == null))){
return m__44163__auto__.call(null,value);
} else {
var m__44163__auto____$1 = (devtools.format._body["_"]);
if(!((m__44163__auto____$1 == null))){
return m__44163__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__69467__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__69467__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__69467__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__69467__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__69466__auto__ = temp__4657__auto____$2;
return goog.object.get(o__69466__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__69467__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__69467__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__69467__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__69467__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__69466__auto__ = temp__4657__auto____$2;
return goog.object.get(o__69466__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__69467__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__69467__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__69467__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__69467__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__69466__auto__ = temp__4657__auto____$2;
return goog.object.get(o__69466__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__69467__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__69467__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__69467__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__69467__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__69466__auto__ = temp__4657__auto____$2;
return goog.object.get(o__69466__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__69467__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__69467__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__69467__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__69467__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__69466__auto__ = temp__4657__auto____$2;
return goog.object.get(o__69466__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__69467__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__69467__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__69467__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__69467__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__69466__auto__ = temp__4657__auto____$2;
return goog.object.get(o__69466__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__69467__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__69467__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__69467__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__69467__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__69466__auto__ = temp__4657__auto____$2;
return goog.object.get(o__69466__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__44614__auto__ = [];
var len__44607__auto___69488 = arguments.length;
var i__44608__auto___69489 = (0);
while(true){
if((i__44608__auto___69489 < len__44607__auto___69488)){
args__44614__auto__.push((arguments[i__44608__auto___69489]));

var G__69490 = (i__44608__auto___69489 + (1));
i__44608__auto___69489 = G__69490;
continue;
} else {
}
break;
}

var argseq__44615__auto__ = ((((0) < args__44614__auto__.length))?(new cljs.core.IndexedSeq(args__44614__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__44615__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq69487){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq69487));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__44614__auto__ = [];
var len__44607__auto___69492 = arguments.length;
var i__44608__auto___69493 = (0);
while(true){
if((i__44608__auto___69493 < len__44607__auto___69492)){
args__44614__auto__.push((arguments[i__44608__auto___69493]));

var G__69494 = (i__44608__auto___69493 + (1));
i__44608__auto___69493 = G__69494;
continue;
} else {
}
break;
}

var argseq__44615__auto__ = ((((0) < args__44614__auto__.length))?(new cljs.core.IndexedSeq(args__44614__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__44615__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq69491){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq69491));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__44614__auto__ = [];
var len__44607__auto___69496 = arguments.length;
var i__44608__auto___69497 = (0);
while(true){
if((i__44608__auto___69497 < len__44607__auto___69496)){
args__44614__auto__.push((arguments[i__44608__auto___69497]));

var G__69498 = (i__44608__auto___69497 + (1));
i__44608__auto___69497 = G__69498;
continue;
} else {
}
break;
}

var argseq__44615__auto__ = ((((0) < args__44614__auto__.length))?(new cljs.core.IndexedSeq(args__44614__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__44615__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq69495){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq69495));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__44614__auto__ = [];
var len__44607__auto___69500 = arguments.length;
var i__44608__auto___69501 = (0);
while(true){
if((i__44608__auto___69501 < len__44607__auto___69500)){
args__44614__auto__.push((arguments[i__44608__auto___69501]));

var G__69502 = (i__44608__auto___69501 + (1));
i__44608__auto___69501 = G__69502;
continue;
} else {
}
break;
}

var argseq__44615__auto__ = ((((0) < args__44614__auto__.length))?(new cljs.core.IndexedSeq(args__44614__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__44615__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq69499){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq69499));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__44614__auto__ = [];
var len__44607__auto___69504 = arguments.length;
var i__44608__auto___69505 = (0);
while(true){
if((i__44608__auto___69505 < len__44607__auto___69504)){
args__44614__auto__.push((arguments[i__44608__auto___69505]));

var G__69506 = (i__44608__auto___69505 + (1));
i__44608__auto___69505 = G__69506;
continue;
} else {
}
break;
}

var argseq__44615__auto__ = ((((0) < args__44614__auto__.length))?(new cljs.core.IndexedSeq(args__44614__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__44615__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq69503){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq69503));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__44614__auto__ = [];
var len__44607__auto___69508 = arguments.length;
var i__44608__auto___69509 = (0);
while(true){
if((i__44608__auto___69509 < len__44607__auto___69508)){
args__44614__auto__.push((arguments[i__44608__auto___69509]));

var G__69510 = (i__44608__auto___69509 + (1));
i__44608__auto___69509 = G__69510;
continue;
} else {
}
break;
}

var argseq__44615__auto__ = ((((0) < args__44614__auto__.length))?(new cljs.core.IndexedSeq(args__44614__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__44615__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq69507){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq69507));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__44614__auto__ = [];
var len__44607__auto___69512 = arguments.length;
var i__44608__auto___69513 = (0);
while(true){
if((i__44608__auto___69513 < len__44607__auto___69512)){
args__44614__auto__.push((arguments[i__44608__auto___69513]));

var G__69514 = (i__44608__auto___69513 + (1));
i__44608__auto___69513 = G__69514;
continue;
} else {
}
break;
}

var argseq__44615__auto__ = ((((0) < args__44614__auto__.length))?(new cljs.core.IndexedSeq(args__44614__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__44615__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq69511){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq69511));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__44614__auto__ = [];
var len__44607__auto___69522 = arguments.length;
var i__44608__auto___69523 = (0);
while(true){
if((i__44608__auto___69523 < len__44607__auto___69522)){
args__44614__auto__.push((arguments[i__44608__auto___69523]));

var G__69524 = (i__44608__auto___69523 + (1));
i__44608__auto___69523 = G__69524;
continue;
} else {
}
break;
}

var argseq__44615__auto__ = ((((1) < args__44614__auto__.length))?(new cljs.core.IndexedSeq(args__44614__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44615__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__69518){
var vec__69519 = p__69518;
var state_override = cljs.core.nth.call(null,vec__69519,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__69519,state_override){
return (function (p1__69515_SHARP_){
return cljs.core.merge.call(null,p1__69515_SHARP_,state_override);
});})(vec__69519,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq69516){
var G__69517 = cljs.core.first.call(null,seq69516);
var seq69516__$1 = cljs.core.next.call(null,seq69516);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__69517,seq69516__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__44614__auto__ = [];
var len__44607__auto___69526 = arguments.length;
var i__44608__auto___69527 = (0);
while(true){
if((i__44608__auto___69527 < len__44607__auto___69526)){
args__44614__auto__.push((arguments[i__44608__auto___69527]));

var G__69528 = (i__44608__auto___69527 + (1));
i__44608__auto___69527 = G__69528;
continue;
} else {
}
break;
}

var argseq__44615__auto__ = ((((0) < args__44614__auto__.length))?(new cljs.core.IndexedSeq(args__44614__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__44615__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq69525){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq69525));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__44614__auto__ = [];
var len__44607__auto___69531 = arguments.length;
var i__44608__auto___69532 = (0);
while(true){
if((i__44608__auto___69532 < len__44607__auto___69531)){
args__44614__auto__.push((arguments[i__44608__auto___69532]));

var G__69533 = (i__44608__auto___69532 + (1));
i__44608__auto___69532 = G__69533;
continue;
} else {
}
break;
}

var argseq__44615__auto__ = ((((1) < args__44614__auto__.length))?(new cljs.core.IndexedSeq(args__44614__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44615__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq69529){
var G__69530 = cljs.core.first.call(null,seq69529);
var seq69529__$1 = cljs.core.next.call(null,seq69529);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__69530,seq69529__$1);
});


//# sourceMappingURL=format.js.map?rel=1494353243134