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
var G__72689 = (((feature instanceof cljs.core.Keyword))?feature.fqn:null);
switch (G__72689) {
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
var args72691 = [];
var len__44607__auto___72694 = arguments.length;
var i__44608__auto___72695 = (0);
while(true){
if((i__44608__auto___72695 < len__44607__auto___72694)){
args72691.push((arguments[i__44608__auto___72695]));

var G__72696 = (i__44608__auto___72695 + (1));
i__44608__auto___72695 = G__72696;
continue;
} else {
}
break;
}

var G__72693 = args72691.length;
switch (G__72693) {
case 0:
return devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args72691.length)].join('')));

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
var G__72699 = (((feature instanceof cljs.core.Keyword))?feature.fqn:null);
switch (G__72699) {
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
var args72701 = [];
var len__44607__auto___72704 = arguments.length;
var i__44608__auto___72705 = (0);
while(true){
if((i__44608__auto___72705 < len__44607__auto___72704)){
args72701.push((arguments[i__44608__auto___72705]));

var G__72706 = (i__44608__auto___72705 + (1));
i__44608__auto___72705 = G__72706;
continue;
} else {
}
break;
}

var G__72703 = args72701.length;
switch (G__72703) {
case 0:
return devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args72701.length)].join('')));

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
var args72708 = [];
var len__44607__auto___72711 = arguments.length;
var i__44608__auto___72712 = (0);
while(true){
if((i__44608__auto___72712 < len__44607__auto___72711)){
args72708.push((arguments[i__44608__auto___72712]));

var G__72713 = (i__44608__auto___72712 + (1));
i__44608__auto___72712 = G__72713;
continue;
} else {
}
break;
}

var G__72710 = args72708.length;
switch (G__72710) {
case 0:
return devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args72708.length)].join('')));

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
var args__44614__auto__ = [];
var len__44607__auto___72716 = arguments.length;
var i__44608__auto___72717 = (0);
while(true){
if((i__44608__auto___72717 < len__44607__auto___72716)){
args__44614__auto__.push((arguments[i__44608__auto___72717]));

var G__72718 = (i__44608__auto___72717 + (1));
i__44608__auto___72717 = G__72718;
continue;
} else {
}
break;
}

var argseq__44615__auto__ = ((((0) < args__44614__auto__.length))?(new cljs.core.IndexedSeq(args__44614__auto__.slice((0)),(0),null)):null);
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__44615__auto__);
});

devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return console.warn([cljs.core.str.cljs$core$IFn$_invoke$arity$1("devtools.core/enable-feature! was removed "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("and has no effect in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.make_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=> use (devtools.core/install! features) to install custom features")].join(''));
});

devtools.core.enable_feature_BANG_.cljs$lang$maxFixedArity = (0);

devtools.core.enable_feature_BANG_.cljs$lang$applyTo = (function (seq72715){
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72715));
});

devtools.core.disable_feature_BANG_ = (function devtools$core$disable_feature_BANG_(var_args){
var args__44614__auto__ = [];
var len__44607__auto___72720 = arguments.length;
var i__44608__auto___72721 = (0);
while(true){
if((i__44608__auto___72721 < len__44607__auto___72720)){
args__44614__auto__.push((arguments[i__44608__auto___72721]));

var G__72722 = (i__44608__auto___72721 + (1));
i__44608__auto___72721 = G__72722;
continue;
} else {
}
break;
}

var argseq__44615__auto__ = ((((0) < args__44614__auto__.length))?(new cljs.core.IndexedSeq(args__44614__auto__.slice((0)),(0),null)):null);
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__44615__auto__);
});

devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return console.warn([cljs.core.str.cljs$core$IFn$_invoke$arity$1("devtools.core/disable-feature! was removed "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("and has no effect in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.make_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=> use (devtools.core/install! features) to install custom features")].join(''));
});

devtools.core.disable_feature_BANG_.cljs$lang$maxFixedArity = (0);

devtools.core.disable_feature_BANG_.cljs$lang$applyTo = (function (seq72719){
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72719));
});

devtools.core.single_feature_available_QMARK_ = (function devtools$core$single_feature_available_QMARK_(_feature){
return console.warn([cljs.core.str.cljs$core$IFn$_invoke$arity$1("devtools.core/single-feature-available? was removed "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("and has no effect in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.make_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=> use devtools.core/is-feature-available? instead")].join(''));
});
devtools.core.feature_available_QMARK_ = (function devtools$core$feature_available_QMARK_(var_args){
var args__44614__auto__ = [];
var len__44607__auto___72724 = arguments.length;
var i__44608__auto___72725 = (0);
while(true){
if((i__44608__auto___72725 < len__44607__auto___72724)){
args__44614__auto__.push((arguments[i__44608__auto___72725]));

var G__72726 = (i__44608__auto___72725 + (1));
i__44608__auto___72725 = G__72726;
continue;
} else {
}
break;
}

var argseq__44615__auto__ = ((((0) < args__44614__auto__.length))?(new cljs.core.IndexedSeq(args__44614__auto__.slice((0)),(0),null)):null);
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__44615__auto__);
});

devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return console.warn([cljs.core.str.cljs$core$IFn$_invoke$arity$1("devtools.core/feature-available? was removed "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("and has no effect in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.make_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=> use devtools.core/is-feature-available? instead")].join(''));
});

devtools.core.feature_available_QMARK_.cljs$lang$maxFixedArity = (0);

devtools.core.feature_available_QMARK_.cljs$lang$applyTo = (function (seq72723){
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72723));
});


//# sourceMappingURL=core.js.map?rel=1494353275925