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
var x__34002__auto__ = (((value == null))?null:value);
var m__34003__auto__ = (devtools.format._header[goog.typeOf(x__34002__auto__)]);
if(!((m__34003__auto__ == null))){
return m__34003__auto__.call(null,value);
} else {
var m__34003__auto____$1 = (devtools.format._header["_"]);
if(!((m__34003__auto____$1 == null))){
return m__34003__auto____$1.call(null,value);
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
var x__34002__auto__ = (((value == null))?null:value);
var m__34003__auto__ = (devtools.format._has_body[goog.typeOf(x__34002__auto__)]);
if(!((m__34003__auto__ == null))){
return m__34003__auto__.call(null,value);
} else {
var m__34003__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__34003__auto____$1 == null))){
return m__34003__auto____$1.call(null,value);
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
var x__34002__auto__ = (((value == null))?null:value);
var m__34003__auto__ = (devtools.format._body[goog.typeOf(x__34002__auto__)]);
if(!((m__34003__auto__ == null))){
return m__34003__auto__.call(null,value);
} else {
var m__34003__auto____$1 = (devtools.format._body["_"]);
if(!((m__34003__auto____$1 == null))){
return m__34003__auto____$1.call(null,value);
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
var o__49739__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__49739__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__49739__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__49739__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__49738__auto__ = temp__4657__auto____$2;
return goog.object.get(o__49738__auto__,"make_template");
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
var o__49739__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__49739__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__49739__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__49739__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__49738__auto__ = temp__4657__auto____$2;
return goog.object.get(o__49738__auto__,"make_group");
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
var o__49739__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__49739__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__49739__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__49739__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__49738__auto__ = temp__4657__auto____$2;
return goog.object.get(o__49738__auto__,"make_reference");
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
var o__49739__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__49739__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__49739__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__49739__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__49738__auto__ = temp__4657__auto____$2;
return goog.object.get(o__49738__auto__,"make_surrogate");
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
var o__49739__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__49739__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__49739__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__49739__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__49738__auto__ = temp__4657__auto____$2;
return goog.object.get(o__49738__auto__,"render_markup");
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
var o__49739__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__49739__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__49739__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__49739__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__49738__auto__ = temp__4657__auto____$2;
return goog.object.get(o__49738__auto__,"_LT_header_GT_");
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
var o__49739__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__49739__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__49739__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__49739__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__49738__auto__ = temp__4657__auto____$2;
return goog.object.get(o__49738__auto__,"_LT_standard_body_GT_");
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
var args__34454__auto__ = [];
var len__34447__auto___66131 = arguments.length;
var i__34448__auto___66132 = (0);
while(true){
if((i__34448__auto___66132 < len__34447__auto___66131)){
args__34454__auto__.push((arguments[i__34448__auto___66132]));

var G__66133 = (i__34448__auto___66132 + (1));
i__34448__auto___66132 = G__66133;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq66130){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66130));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__34454__auto__ = [];
var len__34447__auto___66135 = arguments.length;
var i__34448__auto___66136 = (0);
while(true){
if((i__34448__auto___66136 < len__34447__auto___66135)){
args__34454__auto__.push((arguments[i__34448__auto___66136]));

var G__66137 = (i__34448__auto___66136 + (1));
i__34448__auto___66136 = G__66137;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq66134){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66134));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__34454__auto__ = [];
var len__34447__auto___66139 = arguments.length;
var i__34448__auto___66140 = (0);
while(true){
if((i__34448__auto___66140 < len__34447__auto___66139)){
args__34454__auto__.push((arguments[i__34448__auto___66140]));

var G__66141 = (i__34448__auto___66140 + (1));
i__34448__auto___66140 = G__66141;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq66138){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66138));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__34454__auto__ = [];
var len__34447__auto___66143 = arguments.length;
var i__34448__auto___66144 = (0);
while(true){
if((i__34448__auto___66144 < len__34447__auto___66143)){
args__34454__auto__.push((arguments[i__34448__auto___66144]));

var G__66145 = (i__34448__auto___66144 + (1));
i__34448__auto___66144 = G__66145;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq66142){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66142));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__34454__auto__ = [];
var len__34447__auto___66147 = arguments.length;
var i__34448__auto___66148 = (0);
while(true){
if((i__34448__auto___66148 < len__34447__auto___66147)){
args__34454__auto__.push((arguments[i__34448__auto___66148]));

var G__66149 = (i__34448__auto___66148 + (1));
i__34448__auto___66148 = G__66149;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq66146){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66146));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__34454__auto__ = [];
var len__34447__auto___66151 = arguments.length;
var i__34448__auto___66152 = (0);
while(true){
if((i__34448__auto___66152 < len__34447__auto___66151)){
args__34454__auto__.push((arguments[i__34448__auto___66152]));

var G__66153 = (i__34448__auto___66152 + (1));
i__34448__auto___66152 = G__66153;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq66150){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66150));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__34454__auto__ = [];
var len__34447__auto___66155 = arguments.length;
var i__34448__auto___66156 = (0);
while(true){
if((i__34448__auto___66156 < len__34447__auto___66155)){
args__34454__auto__.push((arguments[i__34448__auto___66156]));

var G__66157 = (i__34448__auto___66156 + (1));
i__34448__auto___66156 = G__66157;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq66154){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66154));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__34454__auto__ = [];
var len__34447__auto___66165 = arguments.length;
var i__34448__auto___66166 = (0);
while(true){
if((i__34448__auto___66166 < len__34447__auto___66165)){
args__34454__auto__.push((arguments[i__34448__auto___66166]));

var G__66167 = (i__34448__auto___66166 + (1));
i__34448__auto___66166 = G__66167;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((1) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__34455__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__66161){
var vec__66162 = p__66161;
var state_override = cljs.core.nth.call(null,vec__66162,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__66162,state_override){
return (function (p1__66158_SHARP_){
return cljs.core.merge.call(null,p1__66158_SHARP_,state_override);
});})(vec__66162,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq66159){
var G__66160 = cljs.core.first.call(null,seq66159);
var seq66159__$1 = cljs.core.next.call(null,seq66159);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__66160,seq66159__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__34454__auto__ = [];
var len__34447__auto___66169 = arguments.length;
var i__34448__auto___66170 = (0);
while(true){
if((i__34448__auto___66170 < len__34447__auto___66169)){
args__34454__auto__.push((arguments[i__34448__auto___66170]));

var G__66171 = (i__34448__auto___66170 + (1));
i__34448__auto___66170 = G__66171;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq66168){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66168));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__34454__auto__ = [];
var len__34447__auto___66174 = arguments.length;
var i__34448__auto___66175 = (0);
while(true){
if((i__34448__auto___66175 < len__34447__auto___66174)){
args__34454__auto__.push((arguments[i__34448__auto___66175]));

var G__66176 = (i__34448__auto___66175 + (1));
i__34448__auto___66175 = G__66176;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((1) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__34455__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq66172){
var G__66173 = cljs.core.first.call(null,seq66172);
var seq66172__$1 = cljs.core.next.call(null,seq66172);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__66173,seq66172__$1);
});


//# sourceMappingURL=format.js.map?rel=1510317572760