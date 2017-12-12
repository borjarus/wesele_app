// Compiled by ClojureScript 1.9.494 {}
goog.provide('devtools.core');
goog.require('cljs.core');
goog.require('devtools.prefs');
goog.require('devtools.hints');
goog.require('devtools.defaults');
goog.require('devtools.formatters');
goog.require('devtools.async');
goog.require('devtools.toolbox');
goog.require('devtools.util');
devtools.core.is_feature_available_QMARK_ = (function devtools$core$is_feature_available_QMARK_(feature){
var G__21189 = (((feature instanceof cljs.core.Keyword))?feature.fqn:null);
switch (G__21189) {
case "formatters":
return devtools.formatters.available_QMARK_.call(null);

break;
case "hints":
return devtools.hints.available_QMARK_.call(null);

break;
case "async":
return devtools.async.available_QMARK_.call(null);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(feature)].join('')));

}
});
devtools.core.available_QMARK_ = (function devtools$core$available_QMARK_(var_args){
var args21191 = [];
var len__7878__auto___21194 = arguments.length;
var i__7879__auto___21195 = (0);
while(true){
if((i__7879__auto___21195 < len__7878__auto___21194)){
args21191.push((arguments[i__7879__auto___21195]));

var G__21196 = (i__7879__auto___21195 + (1));
i__7879__auto___21195 = G__21196;
continue;
} else {
}
break;
}

var G__21193 = args21191.length;
switch (G__21193) {
case 0:
return devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21191.length)].join('')));

}
});

devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devtools.core.available_QMARK_.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
});

devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = devtools.util.resolve_features_BANG_.call(null,features_desc,devtools.defaults.feature_groups);
if(cljs.core.empty_QMARK_.call(null,features)){
return false;
} else {
return cljs.core.every_QMARK_.call(null,devtools.core.is_feature_available_QMARK_,features);
}
});

devtools.core.available_QMARK_.cljs$lang$maxFixedArity = 1;

devtools.core.is_feature_installed_QMARK_ = (function devtools$core$is_feature_installed_QMARK_(feature){
var G__21199 = (((feature instanceof cljs.core.Keyword))?feature.fqn:null);
switch (G__21199) {
case "formatters":
return devtools.formatters.installed_QMARK_.call(null);

break;
case "hints":
return devtools.hints.installed_QMARK_.call(null);

break;
case "async":
return devtools.async.installed_QMARK_.call(null);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(feature)].join('')));

}
});
devtools.core.installed_QMARK_ = (function devtools$core$installed_QMARK_(var_args){
var args21201 = [];
var len__7878__auto___21204 = arguments.length;
var i__7879__auto___21205 = (0);
while(true){
if((i__7879__auto___21205 < len__7878__auto___21204)){
args21201.push((arguments[i__7879__auto___21205]));

var G__21206 = (i__7879__auto___21205 + (1));
i__7879__auto___21205 = G__21206;
continue;
} else {
}
break;
}

var G__21203 = args21201.length;
switch (G__21203) {
case 0:
return devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21201.length)].join('')));

}
});

devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devtools.core.installed_QMARK_.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
});

devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = devtools.util.resolve_features_BANG_.call(null,features_desc,devtools.defaults.feature_groups);
if(cljs.core.empty_QMARK_.call(null,features)){
return false;
} else {
return cljs.core.every_QMARK_.call(null,devtools.core.is_feature_installed_QMARK_,features);
}
});

devtools.core.installed_QMARK_.cljs$lang$maxFixedArity = 1;

devtools.core.install_BANG_ = (function devtools$core$install_BANG_(var_args){
var args21208 = [];
var len__7878__auto___21211 = arguments.length;
var i__7879__auto___21212 = (0);
while(true){
if((i__7879__auto___21212 < len__7878__auto___21211)){
args21208.push((arguments[i__7879__auto___21212]));

var G__21213 = (i__7879__auto___21212 + (1));
i__7879__auto___21212 = G__21213;
continue;
} else {
}
break;
}

var G__21210 = args21208.length;
switch (G__21210) {
case 0:
return devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21208.length)].join('')));

}
});

devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devtools.core.install_BANG_.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
});

devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = devtools.util.resolve_features_BANG_.call(null,features_desc,devtools.defaults.feature_groups);
devtools.util.display_banner_if_needed_BANG_.call(null,features,devtools.defaults.feature_groups);

devtools.util.print_config_overrides_if_requested_BANG_.call(null,"config overrides prior install:\n");

devtools.util.install_feature_BANG_.call(null,new cljs.core.Keyword(null,"formatters","formatters",-1875637118),features,devtools.core.is_feature_available_QMARK_,devtools.formatters.install_BANG_);

devtools.util.install_feature_BANG_.call(null,new cljs.core.Keyword(null,"hints","hints",-991113151),features,devtools.core.is_feature_available_QMARK_,devtools.hints.install_BANG_);

return devtools.util.install_feature_BANG_.call(null,new cljs.core.Keyword(null,"async","async",1050769601),features,devtools.core.is_feature_available_QMARK_,devtools.async.install_BANG_);
});

devtools.core.install_BANG_.cljs$lang$maxFixedArity = 1;

devtools.core.uninstall_BANG_ = (function devtools$core$uninstall_BANG_(){
devtools.formatters.uninstall_BANG_.call(null);

devtools.hints.uninstall_BANG_.call(null);

return devtools.async.uninstall_BANG_.call(null);
});
devtools.core.set_prefs_BANG_ = (function devtools$core$set_prefs_BANG_(new_prefs){
return devtools.prefs.set_prefs_BANG_.call(null,new_prefs);
});
devtools.core.get_prefs = (function devtools$core$get_prefs(){
return devtools.prefs.get_prefs.call(null);
});
devtools.core.set_pref_BANG_ = (function devtools$core$set_pref_BANG_(pref,val){
return devtools.prefs.set_pref_BANG_.call(null,pref,val);
});
devtools.core.enable_BANG_ = (function devtools$core$enable_BANG_(){
return console.warn([cljs.core.str.cljs$core$IFn$_invoke$arity$1("devtools.core/enable! was removed "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("and has no effect in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.make_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=> remove the call")].join(''));
});
devtools.core.disable_BANG_ = (function devtools$core$disable_BANG_(){
return console.warn([cljs.core.str.cljs$core$IFn$_invoke$arity$1("devtools.core/disable! was removed "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("and has no effect in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.make_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=> remove the call")].join(''));
});
devtools.core.set_single_feature_BANG_ = (function devtools$core$set_single_feature_BANG_(_feature,_val){
return console.warn([cljs.core.str.cljs$core$IFn$_invoke$arity$1("devtools.core/set-single-feature! was removed "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("and has no effect in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.make_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=> use (devtools.core/install! features) to install custom features")].join(''));
});
devtools.core.enable_single_feature_BANG_ = (function devtools$core$enable_single_feature_BANG_(_feature){
return console.warn([cljs.core.str.cljs$core$IFn$_invoke$arity$1("devtools.core/enable-single-feature! was removed "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("and has no effect in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.make_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=> use (devtools.core/install! features) to install custom features")].join(''));
});
devtools.core.disable_single_feature_BANG_ = (function devtools$core$disable_single_feature_BANG_(_feature){
return console.warn([cljs.core.str.cljs$core$IFn$_invoke$arity$1("devtools.core/disable-single-feature! was removed "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("and has no effect in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.make_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=> use (devtools.core/install! features) to install custom features")].join(''));
});
devtools.core.enable_feature_BANG_ = (function devtools$core$enable_feature_BANG_(var_args){
var args__7885__auto__ = [];
var len__7878__auto___21216 = arguments.length;
var i__7879__auto___21217 = (0);
while(true){
if((i__7879__auto___21217 < len__7878__auto___21216)){
args__7885__auto__.push((arguments[i__7879__auto___21217]));

var G__21218 = (i__7879__auto___21217 + (1));
i__7879__auto___21217 = G__21218;
continue;
} else {
}
break;
}

var argseq__7886__auto__ = ((((0) < args__7885__auto__.length))?(new cljs.core.IndexedSeq(args__7885__auto__.slice((0)),(0),null)):null);
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__7886__auto__);
});

devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return console.warn([cljs.core.str.cljs$core$IFn$_invoke$arity$1("devtools.core/enable-feature! was removed "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("and has no effect in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.make_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=> use (devtools.core/install! features) to install custom features")].join(''));
});

devtools.core.enable_feature_BANG_.cljs$lang$maxFixedArity = (0);

devtools.core.enable_feature_BANG_.cljs$lang$applyTo = (function (seq21215){
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21215));
});

devtools.core.disable_feature_BANG_ = (function devtools$core$disable_feature_BANG_(var_args){
var args__7885__auto__ = [];
var len__7878__auto___21220 = arguments.length;
var i__7879__auto___21221 = (0);
while(true){
if((i__7879__auto___21221 < len__7878__auto___21220)){
args__7885__auto__.push((arguments[i__7879__auto___21221]));

var G__21222 = (i__7879__auto___21221 + (1));
i__7879__auto___21221 = G__21222;
continue;
} else {
}
break;
}

var argseq__7886__auto__ = ((((0) < args__7885__auto__.length))?(new cljs.core.IndexedSeq(args__7885__auto__.slice((0)),(0),null)):null);
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__7886__auto__);
});

devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return console.warn([cljs.core.str.cljs$core$IFn$_invoke$arity$1("devtools.core/disable-feature! was removed "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("and has no effect in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.make_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=> use (devtools.core/install! features) to install custom features")].join(''));
});

devtools.core.disable_feature_BANG_.cljs$lang$maxFixedArity = (0);

devtools.core.disable_feature_BANG_.cljs$lang$applyTo = (function (seq21219){
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21219));
});

devtools.core.single_feature_available_QMARK_ = (function devtools$core$single_feature_available_QMARK_(_feature){
return console.warn([cljs.core.str.cljs$core$IFn$_invoke$arity$1("devtools.core/single-feature-available? was removed "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("and has no effect in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.make_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=> use devtools.core/is-feature-available? instead")].join(''));
});
devtools.core.feature_available_QMARK_ = (function devtools$core$feature_available_QMARK_(var_args){
var args__7885__auto__ = [];
var len__7878__auto___21224 = arguments.length;
var i__7879__auto___21225 = (0);
while(true){
if((i__7879__auto___21225 < len__7878__auto___21224)){
args__7885__auto__.push((arguments[i__7879__auto___21225]));

var G__21226 = (i__7879__auto___21225 + (1));
i__7879__auto___21225 = G__21226;
continue;
} else {
}
break;
}

var argseq__7886__auto__ = ((((0) < args__7885__auto__.length))?(new cljs.core.IndexedSeq(args__7885__auto__.slice((0)),(0),null)):null);
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__7886__auto__);
});

devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return console.warn([cljs.core.str.cljs$core$IFn$_invoke$arity$1("devtools.core/feature-available? was removed "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("and has no effect in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.make_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=> use devtools.core/is-feature-available? instead")].join(''));
});

devtools.core.feature_available_QMARK_.cljs$lang$maxFixedArity = (0);

devtools.core.feature_available_QMARK_.cljs$lang$applyTo = (function (seq21223){
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21223));
});


//# sourceMappingURL=core.js.map?rel=1513114981328