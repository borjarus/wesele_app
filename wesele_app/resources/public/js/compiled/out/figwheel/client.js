// Compiled by ClojureScript 1.9.494 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.7";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args49704 = [];
var len__40595__auto___49707 = arguments.length;
var i__40596__auto___49708 = (0);
while(true){
if((i__40596__auto___49708 < len__40595__auto___49707)){
args49704.push((arguments[i__40596__auto___49708]));

var G__49709 = (i__40596__auto___49708 + (1));
i__40596__auto___49708 = G__49709;
continue;
} else {
}
break;
}

var G__49706 = args49704.length;
switch (G__49706) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49704.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__40602__auto__ = [];
var len__40595__auto___49712 = arguments.length;
var i__40596__auto___49713 = (0);
while(true){
if((i__40596__auto___49713 < len__40595__auto___49712)){
args__40602__auto__.push((arguments[i__40596__auto___49713]));

var G__49714 = (i__40596__auto___49713 + (1));
i__40596__auto___49713 = G__49714;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((0) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__40603__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq49711){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49711));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__40602__auto__ = [];
var len__40595__auto___49716 = arguments.length;
var i__40596__auto___49717 = (0);
while(true){
if((i__40596__auto___49717 < len__40595__auto___49716)){
args__40602__auto__.push((arguments[i__40596__auto___49717]));

var G__49718 = (i__40596__auto___49717 + (1));
i__40596__auto___49717 = G__49718;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((0) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__40603__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq49715){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49715));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__49719 = cljs.core._EQ_;
var expr__49720 = (function (){var or__39482__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e49723){if((e49723 instanceof Error)){
var e = e49723;
return false;
} else {
throw e49723;

}
}})();
if(cljs.core.truth_(or__39482__auto__)){
return or__39482__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__49719.call(null,"true",expr__49720))){
return true;
} else {
if(cljs.core.truth_(pred__49719.call(null,"false",expr__49720))){
return false;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__49720)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e49725){if((e49725 instanceof Error)){
var e = e49725;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to access localStorage")].join(''));
} else {
throw e49725;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__49726){
var map__49729 = p__49726;
var map__49729__$1 = ((((!((map__49729 == null)))?((((map__49729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49729.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49729):map__49729);
var message = cljs.core.get.call(null,map__49729__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__49729__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__39482__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__39482__auto__)){
return or__39482__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__39470__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__39470__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__39470__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__43194__auto___49891 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43194__auto___49891,ch){
return (function (){
var f__43195__auto__ = (function (){var switch__43138__auto__ = ((function (c__43194__auto___49891,ch){
return (function (state_49860){
var state_val_49861 = (state_49860[(1)]);
if((state_val_49861 === (7))){
var inst_49856 = (state_49860[(2)]);
var state_49860__$1 = state_49860;
var statearr_49862_49892 = state_49860__$1;
(statearr_49862_49892[(2)] = inst_49856);

(statearr_49862_49892[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49861 === (1))){
var state_49860__$1 = state_49860;
var statearr_49863_49893 = state_49860__$1;
(statearr_49863_49893[(2)] = null);

(statearr_49863_49893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49861 === (4))){
var inst_49813 = (state_49860[(7)]);
var inst_49813__$1 = (state_49860[(2)]);
var state_49860__$1 = (function (){var statearr_49864 = state_49860;
(statearr_49864[(7)] = inst_49813__$1);

return statearr_49864;
})();
if(cljs.core.truth_(inst_49813__$1)){
var statearr_49865_49894 = state_49860__$1;
(statearr_49865_49894[(1)] = (5));

} else {
var statearr_49866_49895 = state_49860__$1;
(statearr_49866_49895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49861 === (15))){
var inst_49820 = (state_49860[(8)]);
var inst_49835 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_49820);
var inst_49836 = cljs.core.first.call(null,inst_49835);
var inst_49837 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_49836);
var inst_49838 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49837)].join('');
var inst_49839 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_49838);
var state_49860__$1 = state_49860;
var statearr_49867_49896 = state_49860__$1;
(statearr_49867_49896[(2)] = inst_49839);

(statearr_49867_49896[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49861 === (13))){
var inst_49844 = (state_49860[(2)]);
var state_49860__$1 = state_49860;
var statearr_49868_49897 = state_49860__$1;
(statearr_49868_49897[(2)] = inst_49844);

(statearr_49868_49897[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49861 === (6))){
var state_49860__$1 = state_49860;
var statearr_49869_49898 = state_49860__$1;
(statearr_49869_49898[(2)] = null);

(statearr_49869_49898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49861 === (17))){
var inst_49842 = (state_49860[(2)]);
var state_49860__$1 = state_49860;
var statearr_49870_49899 = state_49860__$1;
(statearr_49870_49899[(2)] = inst_49842);

(statearr_49870_49899[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49861 === (3))){
var inst_49858 = (state_49860[(2)]);
var state_49860__$1 = state_49860;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49860__$1,inst_49858);
} else {
if((state_val_49861 === (12))){
var inst_49819 = (state_49860[(9)]);
var inst_49833 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_49819,opts);
var state_49860__$1 = state_49860;
if(cljs.core.truth_(inst_49833)){
var statearr_49871_49900 = state_49860__$1;
(statearr_49871_49900[(1)] = (15));

} else {
var statearr_49872_49901 = state_49860__$1;
(statearr_49872_49901[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49861 === (2))){
var state_49860__$1 = state_49860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49860__$1,(4),ch);
} else {
if((state_val_49861 === (11))){
var inst_49820 = (state_49860[(8)]);
var inst_49825 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49826 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_49820);
var inst_49827 = cljs.core.async.timeout.call(null,(1000));
var inst_49828 = [inst_49826,inst_49827];
var inst_49829 = (new cljs.core.PersistentVector(null,2,(5),inst_49825,inst_49828,null));
var state_49860__$1 = state_49860;
return cljs.core.async.ioc_alts_BANG_.call(null,state_49860__$1,(14),inst_49829);
} else {
if((state_val_49861 === (9))){
var inst_49820 = (state_49860[(8)]);
var inst_49846 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_49847 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_49820);
var inst_49848 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_49847);
var inst_49849 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49848)].join('');
var inst_49850 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_49849);
var state_49860__$1 = (function (){var statearr_49873 = state_49860;
(statearr_49873[(10)] = inst_49846);

return statearr_49873;
})();
var statearr_49874_49902 = state_49860__$1;
(statearr_49874_49902[(2)] = inst_49850);

(statearr_49874_49902[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49861 === (5))){
var inst_49813 = (state_49860[(7)]);
var inst_49815 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_49816 = (new cljs.core.PersistentArrayMap(null,2,inst_49815,null));
var inst_49817 = (new cljs.core.PersistentHashSet(null,inst_49816,null));
var inst_49818 = figwheel.client.focus_msgs.call(null,inst_49817,inst_49813);
var inst_49819 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_49818);
var inst_49820 = cljs.core.first.call(null,inst_49818);
var inst_49821 = figwheel.client.autoload_QMARK_.call(null);
var state_49860__$1 = (function (){var statearr_49875 = state_49860;
(statearr_49875[(9)] = inst_49819);

(statearr_49875[(8)] = inst_49820);

return statearr_49875;
})();
if(cljs.core.truth_(inst_49821)){
var statearr_49876_49903 = state_49860__$1;
(statearr_49876_49903[(1)] = (8));

} else {
var statearr_49877_49904 = state_49860__$1;
(statearr_49877_49904[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49861 === (14))){
var inst_49831 = (state_49860[(2)]);
var state_49860__$1 = state_49860;
var statearr_49878_49905 = state_49860__$1;
(statearr_49878_49905[(2)] = inst_49831);

(statearr_49878_49905[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49861 === (16))){
var state_49860__$1 = state_49860;
var statearr_49879_49906 = state_49860__$1;
(statearr_49879_49906[(2)] = null);

(statearr_49879_49906[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49861 === (10))){
var inst_49852 = (state_49860[(2)]);
var state_49860__$1 = (function (){var statearr_49880 = state_49860;
(statearr_49880[(11)] = inst_49852);

return statearr_49880;
})();
var statearr_49881_49907 = state_49860__$1;
(statearr_49881_49907[(2)] = null);

(statearr_49881_49907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49861 === (8))){
var inst_49819 = (state_49860[(9)]);
var inst_49823 = figwheel.client.reload_file_state_QMARK_.call(null,inst_49819,opts);
var state_49860__$1 = state_49860;
if(cljs.core.truth_(inst_49823)){
var statearr_49882_49908 = state_49860__$1;
(statearr_49882_49908[(1)] = (11));

} else {
var statearr_49883_49909 = state_49860__$1;
(statearr_49883_49909[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43194__auto___49891,ch))
;
return ((function (switch__43138__auto__,c__43194__auto___49891,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__43139__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__43139__auto____0 = (function (){
var statearr_49887 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49887[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__43139__auto__);

(statearr_49887[(1)] = (1));

return statearr_49887;
});
var figwheel$client$file_reloader_plugin_$_state_machine__43139__auto____1 = (function (state_49860){
while(true){
var ret_value__43140__auto__ = (function (){try{while(true){
var result__43141__auto__ = switch__43138__auto__.call(null,state_49860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43141__auto__;
}
break;
}
}catch (e49888){if((e49888 instanceof Object)){
var ex__43142__auto__ = e49888;
var statearr_49889_49910 = state_49860;
(statearr_49889_49910[(5)] = ex__43142__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49911 = state_49860;
state_49860 = G__49911;
continue;
} else {
return ret_value__43140__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__43139__auto__ = function(state_49860){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__43139__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__43139__auto____1.call(this,state_49860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__43139__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__43139__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__43139__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__43139__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__43139__auto__;
})()
;})(switch__43138__auto__,c__43194__auto___49891,ch))
})();
var state__43196__auto__ = (function (){var statearr_49890 = f__43195__auto__.call(null);
(statearr_49890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43194__auto___49891);

return statearr_49890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43196__auto__);
});})(c__43194__auto___49891,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__49912_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__49912_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_49915 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_49915){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e49914){if((e49914 instanceof Error)){
var e = e49914;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_49915], null));
} else {
var e = e49914;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_49915))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__49916){
var map__49925 = p__49916;
var map__49925__$1 = ((((!((map__49925 == null)))?((((map__49925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49925.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49925):map__49925);
var opts = map__49925__$1;
var build_id = cljs.core.get.call(null,map__49925__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__49925,map__49925__$1,opts,build_id){
return (function (p__49927){
var vec__49928 = p__49927;
var seq__49929 = cljs.core.seq.call(null,vec__49928);
var first__49930 = cljs.core.first.call(null,seq__49929);
var seq__49929__$1 = cljs.core.next.call(null,seq__49929);
var map__49931 = first__49930;
var map__49931__$1 = ((((!((map__49931 == null)))?((((map__49931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49931.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49931):map__49931);
var msg = map__49931__$1;
var msg_name = cljs.core.get.call(null,map__49931__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__49929__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__49928,seq__49929,first__49930,seq__49929__$1,map__49931,map__49931__$1,msg,msg_name,_,map__49925,map__49925__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__49928,seq__49929,first__49930,seq__49929__$1,map__49931,map__49931__$1,msg,msg_name,_,map__49925,map__49925__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__49925,map__49925__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__49939){
var vec__49940 = p__49939;
var seq__49941 = cljs.core.seq.call(null,vec__49940);
var first__49942 = cljs.core.first.call(null,seq__49941);
var seq__49941__$1 = cljs.core.next.call(null,seq__49941);
var map__49943 = first__49942;
var map__49943__$1 = ((((!((map__49943 == null)))?((((map__49943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49943.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49943):map__49943);
var msg = map__49943__$1;
var msg_name = cljs.core.get.call(null,map__49943__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__49941__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__49945){
var map__49957 = p__49945;
var map__49957__$1 = ((((!((map__49957 == null)))?((((map__49957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49957.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49957):map__49957);
var on_compile_warning = cljs.core.get.call(null,map__49957__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__49957__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__49957,map__49957__$1,on_compile_warning,on_compile_fail){
return (function (p__49959){
var vec__49960 = p__49959;
var seq__49961 = cljs.core.seq.call(null,vec__49960);
var first__49962 = cljs.core.first.call(null,seq__49961);
var seq__49961__$1 = cljs.core.next.call(null,seq__49961);
var map__49963 = first__49962;
var map__49963__$1 = ((((!((map__49963 == null)))?((((map__49963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49963.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49963):map__49963);
var msg = map__49963__$1;
var msg_name = cljs.core.get.call(null,map__49963__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__49961__$1;
var pred__49965 = cljs.core._EQ_;
var expr__49966 = msg_name;
if(cljs.core.truth_(pred__49965.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__49966))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__49965.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__49966))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__49957,map__49957__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__43194__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43194__auto__,msg_hist,msg_names,msg){
return (function (){
var f__43195__auto__ = (function (){var switch__43138__auto__ = ((function (c__43194__auto__,msg_hist,msg_names,msg){
return (function (state_50194){
var state_val_50195 = (state_50194[(1)]);
if((state_val_50195 === (7))){
var inst_50114 = (state_50194[(2)]);
var state_50194__$1 = state_50194;
if(cljs.core.truth_(inst_50114)){
var statearr_50196_50246 = state_50194__$1;
(statearr_50196_50246[(1)] = (8));

} else {
var statearr_50197_50247 = state_50194__$1;
(statearr_50197_50247[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50195 === (20))){
var inst_50188 = (state_50194[(2)]);
var state_50194__$1 = state_50194;
var statearr_50198_50248 = state_50194__$1;
(statearr_50198_50248[(2)] = inst_50188);

(statearr_50198_50248[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50195 === (27))){
var inst_50184 = (state_50194[(2)]);
var state_50194__$1 = state_50194;
var statearr_50199_50249 = state_50194__$1;
(statearr_50199_50249[(2)] = inst_50184);

(statearr_50199_50249[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50195 === (1))){
var inst_50107 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_50194__$1 = state_50194;
if(cljs.core.truth_(inst_50107)){
var statearr_50200_50250 = state_50194__$1;
(statearr_50200_50250[(1)] = (2));

} else {
var statearr_50201_50251 = state_50194__$1;
(statearr_50201_50251[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50195 === (24))){
var inst_50186 = (state_50194[(2)]);
var state_50194__$1 = state_50194;
var statearr_50202_50252 = state_50194__$1;
(statearr_50202_50252[(2)] = inst_50186);

(statearr_50202_50252[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50195 === (4))){
var inst_50192 = (state_50194[(2)]);
var state_50194__$1 = state_50194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50194__$1,inst_50192);
} else {
if((state_val_50195 === (15))){
var inst_50190 = (state_50194[(2)]);
var state_50194__$1 = state_50194;
var statearr_50203_50253 = state_50194__$1;
(statearr_50203_50253[(2)] = inst_50190);

(statearr_50203_50253[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50195 === (21))){
var inst_50143 = (state_50194[(2)]);
var inst_50144 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50145 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50144);
var state_50194__$1 = (function (){var statearr_50204 = state_50194;
(statearr_50204[(7)] = inst_50143);

return statearr_50204;
})();
var statearr_50205_50254 = state_50194__$1;
(statearr_50205_50254[(2)] = inst_50145);

(statearr_50205_50254[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50195 === (31))){
var inst_50173 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_50194__$1 = state_50194;
if(cljs.core.truth_(inst_50173)){
var statearr_50206_50255 = state_50194__$1;
(statearr_50206_50255[(1)] = (34));

} else {
var statearr_50207_50256 = state_50194__$1;
(statearr_50207_50256[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50195 === (32))){
var inst_50182 = (state_50194[(2)]);
var state_50194__$1 = state_50194;
var statearr_50208_50257 = state_50194__$1;
(statearr_50208_50257[(2)] = inst_50182);

(statearr_50208_50257[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50195 === (33))){
var inst_50169 = (state_50194[(2)]);
var inst_50170 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50171 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50170);
var state_50194__$1 = (function (){var statearr_50209 = state_50194;
(statearr_50209[(8)] = inst_50169);

return statearr_50209;
})();
var statearr_50210_50258 = state_50194__$1;
(statearr_50210_50258[(2)] = inst_50171);

(statearr_50210_50258[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50195 === (13))){
var inst_50128 = figwheel.client.heads_up.clear.call(null);
var state_50194__$1 = state_50194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50194__$1,(16),inst_50128);
} else {
if((state_val_50195 === (22))){
var inst_50149 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50150 = figwheel.client.heads_up.append_warning_message.call(null,inst_50149);
var state_50194__$1 = state_50194;
var statearr_50211_50259 = state_50194__$1;
(statearr_50211_50259[(2)] = inst_50150);

(statearr_50211_50259[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50195 === (36))){
var inst_50180 = (state_50194[(2)]);
var state_50194__$1 = state_50194;
var statearr_50212_50260 = state_50194__$1;
(statearr_50212_50260[(2)] = inst_50180);

(statearr_50212_50260[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50195 === (29))){
var inst_50160 = (state_50194[(2)]);
var inst_50161 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50162 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50161);
var state_50194__$1 = (function (){var statearr_50213 = state_50194;
(statearr_50213[(9)] = inst_50160);

return statearr_50213;
})();
var statearr_50214_50261 = state_50194__$1;
(statearr_50214_50261[(2)] = inst_50162);

(statearr_50214_50261[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50195 === (6))){
var inst_50109 = (state_50194[(10)]);
var state_50194__$1 = state_50194;
var statearr_50215_50262 = state_50194__$1;
(statearr_50215_50262[(2)] = inst_50109);

(statearr_50215_50262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50195 === (28))){
var inst_50156 = (state_50194[(2)]);
var inst_50157 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50158 = figwheel.client.heads_up.display_warning.call(null,inst_50157);
var state_50194__$1 = (function (){var statearr_50216 = state_50194;
(statearr_50216[(11)] = inst_50156);

return statearr_50216;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50194__$1,(29),inst_50158);
} else {
if((state_val_50195 === (25))){
var inst_50154 = figwheel.client.heads_up.clear.call(null);
var state_50194__$1 = state_50194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50194__$1,(28),inst_50154);
} else {
if((state_val_50195 === (34))){
var inst_50175 = figwheel.client.heads_up.flash_loaded.call(null);
var state_50194__$1 = state_50194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50194__$1,(37),inst_50175);
} else {
if((state_val_50195 === (17))){
var inst_50134 = (state_50194[(2)]);
var inst_50135 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50136 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50135);
var state_50194__$1 = (function (){var statearr_50217 = state_50194;
(statearr_50217[(12)] = inst_50134);

return statearr_50217;
})();
var statearr_50218_50263 = state_50194__$1;
(statearr_50218_50263[(2)] = inst_50136);

(statearr_50218_50263[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50195 === (3))){
var inst_50126 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_50194__$1 = state_50194;
if(cljs.core.truth_(inst_50126)){
var statearr_50219_50264 = state_50194__$1;
(statearr_50219_50264[(1)] = (13));

} else {
var statearr_50220_50265 = state_50194__$1;
(statearr_50220_50265[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50195 === (12))){
var inst_50122 = (state_50194[(2)]);
var state_50194__$1 = state_50194;
var statearr_50221_50266 = state_50194__$1;
(statearr_50221_50266[(2)] = inst_50122);

(statearr_50221_50266[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50195 === (2))){
var inst_50109 = (state_50194[(10)]);
var inst_50109__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_50194__$1 = (function (){var statearr_50222 = state_50194;
(statearr_50222[(10)] = inst_50109__$1);

return statearr_50222;
})();
if(cljs.core.truth_(inst_50109__$1)){
var statearr_50223_50267 = state_50194__$1;
(statearr_50223_50267[(1)] = (5));

} else {
var statearr_50224_50268 = state_50194__$1;
(statearr_50224_50268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50195 === (23))){
var inst_50152 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_50194__$1 = state_50194;
if(cljs.core.truth_(inst_50152)){
var statearr_50225_50269 = state_50194__$1;
(statearr_50225_50269[(1)] = (25));

} else {
var statearr_50226_50270 = state_50194__$1;
(statearr_50226_50270[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50195 === (35))){
var state_50194__$1 = state_50194;
var statearr_50227_50271 = state_50194__$1;
(statearr_50227_50271[(2)] = null);

(statearr_50227_50271[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50195 === (19))){
var inst_50147 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_50194__$1 = state_50194;
if(cljs.core.truth_(inst_50147)){
var statearr_50228_50272 = state_50194__$1;
(statearr_50228_50272[(1)] = (22));

} else {
var statearr_50229_50273 = state_50194__$1;
(statearr_50229_50273[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50195 === (11))){
var inst_50118 = (state_50194[(2)]);
var state_50194__$1 = state_50194;
var statearr_50230_50274 = state_50194__$1;
(statearr_50230_50274[(2)] = inst_50118);

(statearr_50230_50274[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50195 === (9))){
var inst_50120 = figwheel.client.heads_up.clear.call(null);
var state_50194__$1 = state_50194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50194__$1,(12),inst_50120);
} else {
if((state_val_50195 === (5))){
var inst_50111 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_50194__$1 = state_50194;
var statearr_50231_50275 = state_50194__$1;
(statearr_50231_50275[(2)] = inst_50111);

(statearr_50231_50275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50195 === (14))){
var inst_50138 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_50194__$1 = state_50194;
if(cljs.core.truth_(inst_50138)){
var statearr_50232_50276 = state_50194__$1;
(statearr_50232_50276[(1)] = (18));

} else {
var statearr_50233_50277 = state_50194__$1;
(statearr_50233_50277[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50195 === (26))){
var inst_50164 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_50194__$1 = state_50194;
if(cljs.core.truth_(inst_50164)){
var statearr_50234_50278 = state_50194__$1;
(statearr_50234_50278[(1)] = (30));

} else {
var statearr_50235_50279 = state_50194__$1;
(statearr_50235_50279[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50195 === (16))){
var inst_50130 = (state_50194[(2)]);
var inst_50131 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50132 = figwheel.client.heads_up.display_exception.call(null,inst_50131);
var state_50194__$1 = (function (){var statearr_50236 = state_50194;
(statearr_50236[(13)] = inst_50130);

return statearr_50236;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50194__$1,(17),inst_50132);
} else {
if((state_val_50195 === (30))){
var inst_50166 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50167 = figwheel.client.heads_up.display_warning.call(null,inst_50166);
var state_50194__$1 = state_50194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50194__$1,(33),inst_50167);
} else {
if((state_val_50195 === (10))){
var inst_50124 = (state_50194[(2)]);
var state_50194__$1 = state_50194;
var statearr_50237_50280 = state_50194__$1;
(statearr_50237_50280[(2)] = inst_50124);

(statearr_50237_50280[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50195 === (18))){
var inst_50140 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50141 = figwheel.client.heads_up.display_exception.call(null,inst_50140);
var state_50194__$1 = state_50194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50194__$1,(21),inst_50141);
} else {
if((state_val_50195 === (37))){
var inst_50177 = (state_50194[(2)]);
var state_50194__$1 = state_50194;
var statearr_50238_50281 = state_50194__$1;
(statearr_50238_50281[(2)] = inst_50177);

(statearr_50238_50281[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50195 === (8))){
var inst_50116 = figwheel.client.heads_up.flash_loaded.call(null);
var state_50194__$1 = state_50194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50194__$1,(11),inst_50116);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43194__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__43138__auto__,c__43194__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43139__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43139__auto____0 = (function (){
var statearr_50242 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50242[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43139__auto__);

(statearr_50242[(1)] = (1));

return statearr_50242;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43139__auto____1 = (function (state_50194){
while(true){
var ret_value__43140__auto__ = (function (){try{while(true){
var result__43141__auto__ = switch__43138__auto__.call(null,state_50194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43141__auto__;
}
break;
}
}catch (e50243){if((e50243 instanceof Object)){
var ex__43142__auto__ = e50243;
var statearr_50244_50282 = state_50194;
(statearr_50244_50282[(5)] = ex__43142__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50283 = state_50194;
state_50194 = G__50283;
continue;
} else {
return ret_value__43140__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43139__auto__ = function(state_50194){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43139__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43139__auto____1.call(this,state_50194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43139__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43139__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43139__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43139__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43139__auto__;
})()
;})(switch__43138__auto__,c__43194__auto__,msg_hist,msg_names,msg))
})();
var state__43196__auto__ = (function (){var statearr_50245 = f__43195__auto__.call(null);
(statearr_50245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43194__auto__);

return statearr_50245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43196__auto__);
});})(c__43194__auto__,msg_hist,msg_names,msg))
);

return c__43194__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__43194__auto___50346 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43194__auto___50346,ch){
return (function (){
var f__43195__auto__ = (function (){var switch__43138__auto__ = ((function (c__43194__auto___50346,ch){
return (function (state_50329){
var state_val_50330 = (state_50329[(1)]);
if((state_val_50330 === (1))){
var state_50329__$1 = state_50329;
var statearr_50331_50347 = state_50329__$1;
(statearr_50331_50347[(2)] = null);

(statearr_50331_50347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50330 === (2))){
var state_50329__$1 = state_50329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50329__$1,(4),ch);
} else {
if((state_val_50330 === (3))){
var inst_50327 = (state_50329[(2)]);
var state_50329__$1 = state_50329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50329__$1,inst_50327);
} else {
if((state_val_50330 === (4))){
var inst_50317 = (state_50329[(7)]);
var inst_50317__$1 = (state_50329[(2)]);
var state_50329__$1 = (function (){var statearr_50332 = state_50329;
(statearr_50332[(7)] = inst_50317__$1);

return statearr_50332;
})();
if(cljs.core.truth_(inst_50317__$1)){
var statearr_50333_50348 = state_50329__$1;
(statearr_50333_50348[(1)] = (5));

} else {
var statearr_50334_50349 = state_50329__$1;
(statearr_50334_50349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50330 === (5))){
var inst_50317 = (state_50329[(7)]);
var inst_50319 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_50317);
var state_50329__$1 = state_50329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50329__$1,(8),inst_50319);
} else {
if((state_val_50330 === (6))){
var state_50329__$1 = state_50329;
var statearr_50335_50350 = state_50329__$1;
(statearr_50335_50350[(2)] = null);

(statearr_50335_50350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50330 === (7))){
var inst_50325 = (state_50329[(2)]);
var state_50329__$1 = state_50329;
var statearr_50336_50351 = state_50329__$1;
(statearr_50336_50351[(2)] = inst_50325);

(statearr_50336_50351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50330 === (8))){
var inst_50321 = (state_50329[(2)]);
var state_50329__$1 = (function (){var statearr_50337 = state_50329;
(statearr_50337[(8)] = inst_50321);

return statearr_50337;
})();
var statearr_50338_50352 = state_50329__$1;
(statearr_50338_50352[(2)] = null);

(statearr_50338_50352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__43194__auto___50346,ch))
;
return ((function (switch__43138__auto__,c__43194__auto___50346,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__43139__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__43139__auto____0 = (function (){
var statearr_50342 = [null,null,null,null,null,null,null,null,null];
(statearr_50342[(0)] = figwheel$client$heads_up_plugin_$_state_machine__43139__auto__);

(statearr_50342[(1)] = (1));

return statearr_50342;
});
var figwheel$client$heads_up_plugin_$_state_machine__43139__auto____1 = (function (state_50329){
while(true){
var ret_value__43140__auto__ = (function (){try{while(true){
var result__43141__auto__ = switch__43138__auto__.call(null,state_50329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43141__auto__;
}
break;
}
}catch (e50343){if((e50343 instanceof Object)){
var ex__43142__auto__ = e50343;
var statearr_50344_50353 = state_50329;
(statearr_50344_50353[(5)] = ex__43142__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50354 = state_50329;
state_50329 = G__50354;
continue;
} else {
return ret_value__43140__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__43139__auto__ = function(state_50329){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__43139__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__43139__auto____1.call(this,state_50329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__43139__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__43139__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__43139__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__43139__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__43139__auto__;
})()
;})(switch__43138__auto__,c__43194__auto___50346,ch))
})();
var state__43196__auto__ = (function (){var statearr_50345 = f__43195__auto__.call(null);
(statearr_50345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43194__auto___50346);

return statearr_50345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43196__auto__);
});})(c__43194__auto___50346,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__43194__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43194__auto__){
return (function (){
var f__43195__auto__ = (function (){var switch__43138__auto__ = ((function (c__43194__auto__){
return (function (state_50375){
var state_val_50376 = (state_50375[(1)]);
if((state_val_50376 === (1))){
var inst_50370 = cljs.core.async.timeout.call(null,(3000));
var state_50375__$1 = state_50375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50375__$1,(2),inst_50370);
} else {
if((state_val_50376 === (2))){
var inst_50372 = (state_50375[(2)]);
var inst_50373 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_50375__$1 = (function (){var statearr_50377 = state_50375;
(statearr_50377[(7)] = inst_50372);

return statearr_50377;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50375__$1,inst_50373);
} else {
return null;
}
}
});})(c__43194__auto__))
;
return ((function (switch__43138__auto__,c__43194__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__43139__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__43139__auto____0 = (function (){
var statearr_50381 = [null,null,null,null,null,null,null,null];
(statearr_50381[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__43139__auto__);

(statearr_50381[(1)] = (1));

return statearr_50381;
});
var figwheel$client$enforce_project_plugin_$_state_machine__43139__auto____1 = (function (state_50375){
while(true){
var ret_value__43140__auto__ = (function (){try{while(true){
var result__43141__auto__ = switch__43138__auto__.call(null,state_50375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43141__auto__;
}
break;
}
}catch (e50382){if((e50382 instanceof Object)){
var ex__43142__auto__ = e50382;
var statearr_50383_50385 = state_50375;
(statearr_50383_50385[(5)] = ex__43142__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50386 = state_50375;
state_50375 = G__50386;
continue;
} else {
return ret_value__43140__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__43139__auto__ = function(state_50375){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__43139__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__43139__auto____1.call(this,state_50375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__43139__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__43139__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__43139__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__43139__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__43139__auto__;
})()
;})(switch__43138__auto__,c__43194__auto__))
})();
var state__43196__auto__ = (function (){var statearr_50384 = f__43195__auto__.call(null);
(statearr_50384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43194__auto__);

return statearr_50384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43196__auto__);
});})(c__43194__auto__))
);

return c__43194__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__43194__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43194__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__43195__auto__ = (function (){var switch__43138__auto__ = ((function (c__43194__auto__,figwheel_version,temp__4657__auto__){
return (function (state_50409){
var state_val_50410 = (state_50409[(1)]);
if((state_val_50410 === (1))){
var inst_50403 = cljs.core.async.timeout.call(null,(2000));
var state_50409__$1 = state_50409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50409__$1,(2),inst_50403);
} else {
if((state_val_50410 === (2))){
var inst_50405 = (state_50409[(2)]);
var inst_50406 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_50407 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_50406);
var state_50409__$1 = (function (){var statearr_50411 = state_50409;
(statearr_50411[(7)] = inst_50405);

return statearr_50411;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50409__$1,inst_50407);
} else {
return null;
}
}
});})(c__43194__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__43138__auto__,c__43194__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43139__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43139__auto____0 = (function (){
var statearr_50415 = [null,null,null,null,null,null,null,null];
(statearr_50415[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43139__auto__);

(statearr_50415[(1)] = (1));

return statearr_50415;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43139__auto____1 = (function (state_50409){
while(true){
var ret_value__43140__auto__ = (function (){try{while(true){
var result__43141__auto__ = switch__43138__auto__.call(null,state_50409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43141__auto__;
}
break;
}
}catch (e50416){if((e50416 instanceof Object)){
var ex__43142__auto__ = e50416;
var statearr_50417_50419 = state_50409;
(statearr_50417_50419[(5)] = ex__43142__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50420 = state_50409;
state_50409 = G__50420;
continue;
} else {
return ret_value__43140__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43139__auto__ = function(state_50409){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43139__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43139__auto____1.call(this,state_50409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43139__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43139__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43139__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43139__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43139__auto__;
})()
;})(switch__43138__auto__,c__43194__auto__,figwheel_version,temp__4657__auto__))
})();
var state__43196__auto__ = (function (){var statearr_50418 = f__43195__auto__.call(null);
(statearr_50418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43194__auto__);

return statearr_50418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43196__auto__);
});})(c__43194__auto__,figwheel_version,temp__4657__auto__))
);

return c__43194__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__50421){
var map__50425 = p__50421;
var map__50425__$1 = ((((!((map__50425 == null)))?((((map__50425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50425.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50425):map__50425);
var file = cljs.core.get.call(null,map__50425__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__50425__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__50425__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__50427 = "";
var G__50427__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50427),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__50427);
var G__50427__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50427__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__50427__$1);
if(cljs.core.truth_((function (){var and__39470__auto__ = line;
if(cljs.core.truth_(and__39470__auto__)){
return column;
} else {
return and__39470__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50427__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__50427__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__50428){
var map__50435 = p__50428;
var map__50435__$1 = ((((!((map__50435 == null)))?((((map__50435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50435.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50435):map__50435);
var ed = map__50435__$1;
var formatted_exception = cljs.core.get.call(null,map__50435__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__50435__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__50435__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__50437_50441 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__50438_50442 = null;
var count__50439_50443 = (0);
var i__50440_50444 = (0);
while(true){
if((i__50440_50444 < count__50439_50443)){
var msg_50445 = cljs.core._nth.call(null,chunk__50438_50442,i__50440_50444);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_50445);

var G__50446 = seq__50437_50441;
var G__50447 = chunk__50438_50442;
var G__50448 = count__50439_50443;
var G__50449 = (i__50440_50444 + (1));
seq__50437_50441 = G__50446;
chunk__50438_50442 = G__50447;
count__50439_50443 = G__50448;
i__50440_50444 = G__50449;
continue;
} else {
var temp__4657__auto___50450 = cljs.core.seq.call(null,seq__50437_50441);
if(temp__4657__auto___50450){
var seq__50437_50451__$1 = temp__4657__auto___50450;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50437_50451__$1)){
var c__40301__auto___50452 = cljs.core.chunk_first.call(null,seq__50437_50451__$1);
var G__50453 = cljs.core.chunk_rest.call(null,seq__50437_50451__$1);
var G__50454 = c__40301__auto___50452;
var G__50455 = cljs.core.count.call(null,c__40301__auto___50452);
var G__50456 = (0);
seq__50437_50441 = G__50453;
chunk__50438_50442 = G__50454;
count__50439_50443 = G__50455;
i__50440_50444 = G__50456;
continue;
} else {
var msg_50457 = cljs.core.first.call(null,seq__50437_50451__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_50457);

var G__50458 = cljs.core.next.call(null,seq__50437_50451__$1);
var G__50459 = null;
var G__50460 = (0);
var G__50461 = (0);
seq__50437_50441 = G__50458;
chunk__50438_50442 = G__50459;
count__50439_50443 = G__50460;
i__50440_50444 = G__50461;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__50462){
var map__50465 = p__50462;
var map__50465__$1 = ((((!((map__50465 == null)))?((((map__50465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50465.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50465):map__50465);
var w = map__50465__$1;
var message = cljs.core.get.call(null,map__50465__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__39470__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__39470__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__39470__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__50477 = cljs.core.seq.call(null,plugins);
var chunk__50478 = null;
var count__50479 = (0);
var i__50480 = (0);
while(true){
if((i__50480 < count__50479)){
var vec__50481 = cljs.core._nth.call(null,chunk__50478,i__50480);
var k = cljs.core.nth.call(null,vec__50481,(0),null);
var plugin = cljs.core.nth.call(null,vec__50481,(1),null);
if(cljs.core.truth_(plugin)){
var pl_50487 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__50477,chunk__50478,count__50479,i__50480,pl_50487,vec__50481,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_50487.call(null,msg_hist);
});})(seq__50477,chunk__50478,count__50479,i__50480,pl_50487,vec__50481,k,plugin))
);
} else {
}

var G__50488 = seq__50477;
var G__50489 = chunk__50478;
var G__50490 = count__50479;
var G__50491 = (i__50480 + (1));
seq__50477 = G__50488;
chunk__50478 = G__50489;
count__50479 = G__50490;
i__50480 = G__50491;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__50477);
if(temp__4657__auto__){
var seq__50477__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50477__$1)){
var c__40301__auto__ = cljs.core.chunk_first.call(null,seq__50477__$1);
var G__50492 = cljs.core.chunk_rest.call(null,seq__50477__$1);
var G__50493 = c__40301__auto__;
var G__50494 = cljs.core.count.call(null,c__40301__auto__);
var G__50495 = (0);
seq__50477 = G__50492;
chunk__50478 = G__50493;
count__50479 = G__50494;
i__50480 = G__50495;
continue;
} else {
var vec__50484 = cljs.core.first.call(null,seq__50477__$1);
var k = cljs.core.nth.call(null,vec__50484,(0),null);
var plugin = cljs.core.nth.call(null,vec__50484,(1),null);
if(cljs.core.truth_(plugin)){
var pl_50496 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__50477,chunk__50478,count__50479,i__50480,pl_50496,vec__50484,k,plugin,seq__50477__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_50496.call(null,msg_hist);
});})(seq__50477,chunk__50478,count__50479,i__50480,pl_50496,vec__50484,k,plugin,seq__50477__$1,temp__4657__auto__))
);
} else {
}

var G__50497 = cljs.core.next.call(null,seq__50477__$1);
var G__50498 = null;
var G__50499 = (0);
var G__50500 = (0);
seq__50477 = G__50497;
chunk__50478 = G__50498;
count__50479 = G__50499;
i__50480 = G__50500;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args50501 = [];
var len__40595__auto___50508 = arguments.length;
var i__40596__auto___50509 = (0);
while(true){
if((i__40596__auto___50509 < len__40595__auto___50508)){
args50501.push((arguments[i__40596__auto___50509]));

var G__50510 = (i__40596__auto___50509 + (1));
i__40596__auto___50509 = G__50510;
continue;
} else {
}
break;
}

var G__50503 = args50501.length;
switch (G__50503) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50501.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__50504_50512 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__50505_50513 = null;
var count__50506_50514 = (0);
var i__50507_50515 = (0);
while(true){
if((i__50507_50515 < count__50506_50514)){
var msg_50516 = cljs.core._nth.call(null,chunk__50505_50513,i__50507_50515);
figwheel.client.socket.handle_incoming_message.call(null,msg_50516);

var G__50517 = seq__50504_50512;
var G__50518 = chunk__50505_50513;
var G__50519 = count__50506_50514;
var G__50520 = (i__50507_50515 + (1));
seq__50504_50512 = G__50517;
chunk__50505_50513 = G__50518;
count__50506_50514 = G__50519;
i__50507_50515 = G__50520;
continue;
} else {
var temp__4657__auto___50521 = cljs.core.seq.call(null,seq__50504_50512);
if(temp__4657__auto___50521){
var seq__50504_50522__$1 = temp__4657__auto___50521;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50504_50522__$1)){
var c__40301__auto___50523 = cljs.core.chunk_first.call(null,seq__50504_50522__$1);
var G__50524 = cljs.core.chunk_rest.call(null,seq__50504_50522__$1);
var G__50525 = c__40301__auto___50523;
var G__50526 = cljs.core.count.call(null,c__40301__auto___50523);
var G__50527 = (0);
seq__50504_50512 = G__50524;
chunk__50505_50513 = G__50525;
count__50506_50514 = G__50526;
i__50507_50515 = G__50527;
continue;
} else {
var msg_50528 = cljs.core.first.call(null,seq__50504_50522__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_50528);

var G__50529 = cljs.core.next.call(null,seq__50504_50522__$1);
var G__50530 = null;
var G__50531 = (0);
var G__50532 = (0);
seq__50504_50512 = G__50529;
chunk__50505_50513 = G__50530;
count__50506_50514 = G__50531;
i__50507_50515 = G__50532;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__40602__auto__ = [];
var len__40595__auto___50537 = arguments.length;
var i__40596__auto___50538 = (0);
while(true){
if((i__40596__auto___50538 < len__40595__auto___50537)){
args__40602__auto__.push((arguments[i__40596__auto___50538]));

var G__50539 = (i__40596__auto___50538 + (1));
i__40596__auto___50538 = G__50539;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((0) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__40603__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__50534){
var map__50535 = p__50534;
var map__50535__$1 = ((((!((map__50535 == null)))?((((map__50535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50535.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50535):map__50535);
var opts = map__50535__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq50533){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50533));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e50541){if((e50541 instanceof Error)){
var e = e50541;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e50541;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__50545){
var map__50546 = p__50545;
var map__50546__$1 = ((((!((map__50546 == null)))?((((map__50546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50546.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50546):map__50546);
var msg_name = cljs.core.get.call(null,map__50546__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1515676066996