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
var args68592 = [];
var len__44607__auto___68595 = arguments.length;
var i__44608__auto___68596 = (0);
while(true){
if((i__44608__auto___68596 < len__44607__auto___68595)){
args68592.push((arguments[i__44608__auto___68596]));

var G__68597 = (i__44608__auto___68596 + (1));
i__44608__auto___68596 = G__68597;
continue;
} else {
}
break;
}

var G__68594 = args68592.length;
switch (G__68594) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args68592.length)].join('')));

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
var args__44614__auto__ = [];
var len__44607__auto___68600 = arguments.length;
var i__44608__auto___68601 = (0);
while(true){
if((i__44608__auto___68601 < len__44607__auto___68600)){
args__44614__auto__.push((arguments[i__44608__auto___68601]));

var G__68602 = (i__44608__auto___68601 + (1));
i__44608__auto___68601 = G__68602;
continue;
} else {
}
break;
}

var argseq__44615__auto__ = ((((0) < args__44614__auto__.length))?(new cljs.core.IndexedSeq(args__44614__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__44615__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq68599){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq68599));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__44614__auto__ = [];
var len__44607__auto___68604 = arguments.length;
var i__44608__auto___68605 = (0);
while(true){
if((i__44608__auto___68605 < len__44607__auto___68604)){
args__44614__auto__.push((arguments[i__44608__auto___68605]));

var G__68606 = (i__44608__auto___68605 + (1));
i__44608__auto___68605 = G__68606;
continue;
} else {
}
break;
}

var argseq__44615__auto__ = ((((0) < args__44614__auto__.length))?(new cljs.core.IndexedSeq(args__44614__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__44615__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq68603){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq68603));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__68607 = cljs.core._EQ_;
var expr__68608 = (function (){var or__43494__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e68611){if((e68611 instanceof Error)){
var e = e68611;
return false;
} else {
throw e68611;

}
}})();
if(cljs.core.truth_(or__43494__auto__)){
return or__43494__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__68607.call(null,"true",expr__68608))){
return true;
} else {
if(cljs.core.truth_(pred__68607.call(null,"false",expr__68608))){
return false;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__68608)].join('')));
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
}catch (e68613){if((e68613 instanceof Error)){
var e = e68613;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to access localStorage")].join(''));
} else {
throw e68613;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__68614){
var map__68617 = p__68614;
var map__68617__$1 = ((((!((map__68617 == null)))?((((map__68617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68617.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68617):map__68617);
var message = cljs.core.get.call(null,map__68617__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__68617__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__43494__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__43494__auto__)){
return or__43494__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__43482__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__43482__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__43482__auto__;
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
var c__49215__auto___68779 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49215__auto___68779,ch){
return (function (){
var f__49216__auto__ = (function (){var switch__49159__auto__ = ((function (c__49215__auto___68779,ch){
return (function (state_68748){
var state_val_68749 = (state_68748[(1)]);
if((state_val_68749 === (7))){
var inst_68744 = (state_68748[(2)]);
var state_68748__$1 = state_68748;
var statearr_68750_68780 = state_68748__$1;
(statearr_68750_68780[(2)] = inst_68744);

(statearr_68750_68780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68749 === (1))){
var state_68748__$1 = state_68748;
var statearr_68751_68781 = state_68748__$1;
(statearr_68751_68781[(2)] = null);

(statearr_68751_68781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68749 === (4))){
var inst_68701 = (state_68748[(7)]);
var inst_68701__$1 = (state_68748[(2)]);
var state_68748__$1 = (function (){var statearr_68752 = state_68748;
(statearr_68752[(7)] = inst_68701__$1);

return statearr_68752;
})();
if(cljs.core.truth_(inst_68701__$1)){
var statearr_68753_68782 = state_68748__$1;
(statearr_68753_68782[(1)] = (5));

} else {
var statearr_68754_68783 = state_68748__$1;
(statearr_68754_68783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68749 === (15))){
var inst_68708 = (state_68748[(8)]);
var inst_68723 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_68708);
var inst_68724 = cljs.core.first.call(null,inst_68723);
var inst_68725 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_68724);
var inst_68726 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_68725)].join('');
var inst_68727 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_68726);
var state_68748__$1 = state_68748;
var statearr_68755_68784 = state_68748__$1;
(statearr_68755_68784[(2)] = inst_68727);

(statearr_68755_68784[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68749 === (13))){
var inst_68732 = (state_68748[(2)]);
var state_68748__$1 = state_68748;
var statearr_68756_68785 = state_68748__$1;
(statearr_68756_68785[(2)] = inst_68732);

(statearr_68756_68785[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68749 === (6))){
var state_68748__$1 = state_68748;
var statearr_68757_68786 = state_68748__$1;
(statearr_68757_68786[(2)] = null);

(statearr_68757_68786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68749 === (17))){
var inst_68730 = (state_68748[(2)]);
var state_68748__$1 = state_68748;
var statearr_68758_68787 = state_68748__$1;
(statearr_68758_68787[(2)] = inst_68730);

(statearr_68758_68787[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68749 === (3))){
var inst_68746 = (state_68748[(2)]);
var state_68748__$1 = state_68748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68748__$1,inst_68746);
} else {
if((state_val_68749 === (12))){
var inst_68707 = (state_68748[(9)]);
var inst_68721 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_68707,opts);
var state_68748__$1 = state_68748;
if(cljs.core.truth_(inst_68721)){
var statearr_68759_68788 = state_68748__$1;
(statearr_68759_68788[(1)] = (15));

} else {
var statearr_68760_68789 = state_68748__$1;
(statearr_68760_68789[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68749 === (2))){
var state_68748__$1 = state_68748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68748__$1,(4),ch);
} else {
if((state_val_68749 === (11))){
var inst_68708 = (state_68748[(8)]);
var inst_68713 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_68714 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_68708);
var inst_68715 = cljs.core.async.timeout.call(null,(1000));
var inst_68716 = [inst_68714,inst_68715];
var inst_68717 = (new cljs.core.PersistentVector(null,2,(5),inst_68713,inst_68716,null));
var state_68748__$1 = state_68748;
return cljs.core.async.ioc_alts_BANG_.call(null,state_68748__$1,(14),inst_68717);
} else {
if((state_val_68749 === (9))){
var inst_68708 = (state_68748[(8)]);
var inst_68734 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_68735 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_68708);
var inst_68736 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_68735);
var inst_68737 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_68736)].join('');
var inst_68738 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_68737);
var state_68748__$1 = (function (){var statearr_68761 = state_68748;
(statearr_68761[(10)] = inst_68734);

return statearr_68761;
})();
var statearr_68762_68790 = state_68748__$1;
(statearr_68762_68790[(2)] = inst_68738);

(statearr_68762_68790[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68749 === (5))){
var inst_68701 = (state_68748[(7)]);
var inst_68703 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_68704 = (new cljs.core.PersistentArrayMap(null,2,inst_68703,null));
var inst_68705 = (new cljs.core.PersistentHashSet(null,inst_68704,null));
var inst_68706 = figwheel.client.focus_msgs.call(null,inst_68705,inst_68701);
var inst_68707 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_68706);
var inst_68708 = cljs.core.first.call(null,inst_68706);
var inst_68709 = figwheel.client.autoload_QMARK_.call(null);
var state_68748__$1 = (function (){var statearr_68763 = state_68748;
(statearr_68763[(9)] = inst_68707);

(statearr_68763[(8)] = inst_68708);

return statearr_68763;
})();
if(cljs.core.truth_(inst_68709)){
var statearr_68764_68791 = state_68748__$1;
(statearr_68764_68791[(1)] = (8));

} else {
var statearr_68765_68792 = state_68748__$1;
(statearr_68765_68792[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68749 === (14))){
var inst_68719 = (state_68748[(2)]);
var state_68748__$1 = state_68748;
var statearr_68766_68793 = state_68748__$1;
(statearr_68766_68793[(2)] = inst_68719);

(statearr_68766_68793[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68749 === (16))){
var state_68748__$1 = state_68748;
var statearr_68767_68794 = state_68748__$1;
(statearr_68767_68794[(2)] = null);

(statearr_68767_68794[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68749 === (10))){
var inst_68740 = (state_68748[(2)]);
var state_68748__$1 = (function (){var statearr_68768 = state_68748;
(statearr_68768[(11)] = inst_68740);

return statearr_68768;
})();
var statearr_68769_68795 = state_68748__$1;
(statearr_68769_68795[(2)] = null);

(statearr_68769_68795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68749 === (8))){
var inst_68707 = (state_68748[(9)]);
var inst_68711 = figwheel.client.reload_file_state_QMARK_.call(null,inst_68707,opts);
var state_68748__$1 = state_68748;
if(cljs.core.truth_(inst_68711)){
var statearr_68770_68796 = state_68748__$1;
(statearr_68770_68796[(1)] = (11));

} else {
var statearr_68771_68797 = state_68748__$1;
(statearr_68771_68797[(1)] = (12));

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
});})(c__49215__auto___68779,ch))
;
return ((function (switch__49159__auto__,c__49215__auto___68779,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__49160__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__49160__auto____0 = (function (){
var statearr_68775 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68775[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__49160__auto__);

(statearr_68775[(1)] = (1));

return statearr_68775;
});
var figwheel$client$file_reloader_plugin_$_state_machine__49160__auto____1 = (function (state_68748){
while(true){
var ret_value__49161__auto__ = (function (){try{while(true){
var result__49162__auto__ = switch__49159__auto__.call(null,state_68748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49162__auto__;
}
break;
}
}catch (e68776){if((e68776 instanceof Object)){
var ex__49163__auto__ = e68776;
var statearr_68777_68798 = state_68748;
(statearr_68777_68798[(5)] = ex__49163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68799 = state_68748;
state_68748 = G__68799;
continue;
} else {
return ret_value__49161__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__49160__auto__ = function(state_68748){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__49160__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__49160__auto____1.call(this,state_68748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__49160__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__49160__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__49160__auto__;
})()
;})(switch__49159__auto__,c__49215__auto___68779,ch))
})();
var state__49217__auto__ = (function (){var statearr_68778 = f__49216__auto__.call(null);
(statearr_68778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49215__auto___68779);

return statearr_68778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49217__auto__);
});})(c__49215__auto___68779,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__68800_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__68800_SHARP_));
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
var base_path_68803 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_68803){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e68802){if((e68802 instanceof Error)){
var e = e68802;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_68803], null));
} else {
var e = e68802;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_68803))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__68804){
var map__68813 = p__68804;
var map__68813__$1 = ((((!((map__68813 == null)))?((((map__68813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68813.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68813):map__68813);
var opts = map__68813__$1;
var build_id = cljs.core.get.call(null,map__68813__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__68813,map__68813__$1,opts,build_id){
return (function (p__68815){
var vec__68816 = p__68815;
var seq__68817 = cljs.core.seq.call(null,vec__68816);
var first__68818 = cljs.core.first.call(null,seq__68817);
var seq__68817__$1 = cljs.core.next.call(null,seq__68817);
var map__68819 = first__68818;
var map__68819__$1 = ((((!((map__68819 == null)))?((((map__68819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68819.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68819):map__68819);
var msg = map__68819__$1;
var msg_name = cljs.core.get.call(null,map__68819__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__68817__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__68816,seq__68817,first__68818,seq__68817__$1,map__68819,map__68819__$1,msg,msg_name,_,map__68813,map__68813__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__68816,seq__68817,first__68818,seq__68817__$1,map__68819,map__68819__$1,msg,msg_name,_,map__68813,map__68813__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__68813,map__68813__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__68827){
var vec__68828 = p__68827;
var seq__68829 = cljs.core.seq.call(null,vec__68828);
var first__68830 = cljs.core.first.call(null,seq__68829);
var seq__68829__$1 = cljs.core.next.call(null,seq__68829);
var map__68831 = first__68830;
var map__68831__$1 = ((((!((map__68831 == null)))?((((map__68831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68831.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68831):map__68831);
var msg = map__68831__$1;
var msg_name = cljs.core.get.call(null,map__68831__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__68829__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__68833){
var map__68845 = p__68833;
var map__68845__$1 = ((((!((map__68845 == null)))?((((map__68845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68845.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68845):map__68845);
var on_compile_warning = cljs.core.get.call(null,map__68845__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__68845__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__68845,map__68845__$1,on_compile_warning,on_compile_fail){
return (function (p__68847){
var vec__68848 = p__68847;
var seq__68849 = cljs.core.seq.call(null,vec__68848);
var first__68850 = cljs.core.first.call(null,seq__68849);
var seq__68849__$1 = cljs.core.next.call(null,seq__68849);
var map__68851 = first__68850;
var map__68851__$1 = ((((!((map__68851 == null)))?((((map__68851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68851.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68851):map__68851);
var msg = map__68851__$1;
var msg_name = cljs.core.get.call(null,map__68851__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__68849__$1;
var pred__68853 = cljs.core._EQ_;
var expr__68854 = msg_name;
if(cljs.core.truth_(pred__68853.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__68854))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__68853.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__68854))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__68845,map__68845__$1,on_compile_warning,on_compile_fail))
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
var c__49215__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49215__auto__,msg_hist,msg_names,msg){
return (function (){
var f__49216__auto__ = (function (){var switch__49159__auto__ = ((function (c__49215__auto__,msg_hist,msg_names,msg){
return (function (state_69082){
var state_val_69083 = (state_69082[(1)]);
if((state_val_69083 === (7))){
var inst_69002 = (state_69082[(2)]);
var state_69082__$1 = state_69082;
if(cljs.core.truth_(inst_69002)){
var statearr_69084_69134 = state_69082__$1;
(statearr_69084_69134[(1)] = (8));

} else {
var statearr_69085_69135 = state_69082__$1;
(statearr_69085_69135[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69083 === (20))){
var inst_69076 = (state_69082[(2)]);
var state_69082__$1 = state_69082;
var statearr_69086_69136 = state_69082__$1;
(statearr_69086_69136[(2)] = inst_69076);

(statearr_69086_69136[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69083 === (27))){
var inst_69072 = (state_69082[(2)]);
var state_69082__$1 = state_69082;
var statearr_69087_69137 = state_69082__$1;
(statearr_69087_69137[(2)] = inst_69072);

(statearr_69087_69137[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69083 === (1))){
var inst_68995 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_69082__$1 = state_69082;
if(cljs.core.truth_(inst_68995)){
var statearr_69088_69138 = state_69082__$1;
(statearr_69088_69138[(1)] = (2));

} else {
var statearr_69089_69139 = state_69082__$1;
(statearr_69089_69139[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69083 === (24))){
var inst_69074 = (state_69082[(2)]);
var state_69082__$1 = state_69082;
var statearr_69090_69140 = state_69082__$1;
(statearr_69090_69140[(2)] = inst_69074);

(statearr_69090_69140[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69083 === (4))){
var inst_69080 = (state_69082[(2)]);
var state_69082__$1 = state_69082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69082__$1,inst_69080);
} else {
if((state_val_69083 === (15))){
var inst_69078 = (state_69082[(2)]);
var state_69082__$1 = state_69082;
var statearr_69091_69141 = state_69082__$1;
(statearr_69091_69141[(2)] = inst_69078);

(statearr_69091_69141[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69083 === (21))){
var inst_69031 = (state_69082[(2)]);
var inst_69032 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_69033 = figwheel.client.auto_jump_to_error.call(null,opts,inst_69032);
var state_69082__$1 = (function (){var statearr_69092 = state_69082;
(statearr_69092[(7)] = inst_69031);

return statearr_69092;
})();
var statearr_69093_69142 = state_69082__$1;
(statearr_69093_69142[(2)] = inst_69033);

(statearr_69093_69142[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69083 === (31))){
var inst_69061 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_69082__$1 = state_69082;
if(cljs.core.truth_(inst_69061)){
var statearr_69094_69143 = state_69082__$1;
(statearr_69094_69143[(1)] = (34));

} else {
var statearr_69095_69144 = state_69082__$1;
(statearr_69095_69144[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69083 === (32))){
var inst_69070 = (state_69082[(2)]);
var state_69082__$1 = state_69082;
var statearr_69096_69145 = state_69082__$1;
(statearr_69096_69145[(2)] = inst_69070);

(statearr_69096_69145[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69083 === (33))){
var inst_69057 = (state_69082[(2)]);
var inst_69058 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_69059 = figwheel.client.auto_jump_to_error.call(null,opts,inst_69058);
var state_69082__$1 = (function (){var statearr_69097 = state_69082;
(statearr_69097[(8)] = inst_69057);

return statearr_69097;
})();
var statearr_69098_69146 = state_69082__$1;
(statearr_69098_69146[(2)] = inst_69059);

(statearr_69098_69146[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69083 === (13))){
var inst_69016 = figwheel.client.heads_up.clear.call(null);
var state_69082__$1 = state_69082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69082__$1,(16),inst_69016);
} else {
if((state_val_69083 === (22))){
var inst_69037 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_69038 = figwheel.client.heads_up.append_warning_message.call(null,inst_69037);
var state_69082__$1 = state_69082;
var statearr_69099_69147 = state_69082__$1;
(statearr_69099_69147[(2)] = inst_69038);

(statearr_69099_69147[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69083 === (36))){
var inst_69068 = (state_69082[(2)]);
var state_69082__$1 = state_69082;
var statearr_69100_69148 = state_69082__$1;
(statearr_69100_69148[(2)] = inst_69068);

(statearr_69100_69148[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69083 === (29))){
var inst_69048 = (state_69082[(2)]);
var inst_69049 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_69050 = figwheel.client.auto_jump_to_error.call(null,opts,inst_69049);
var state_69082__$1 = (function (){var statearr_69101 = state_69082;
(statearr_69101[(9)] = inst_69048);

return statearr_69101;
})();
var statearr_69102_69149 = state_69082__$1;
(statearr_69102_69149[(2)] = inst_69050);

(statearr_69102_69149[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69083 === (6))){
var inst_68997 = (state_69082[(10)]);
var state_69082__$1 = state_69082;
var statearr_69103_69150 = state_69082__$1;
(statearr_69103_69150[(2)] = inst_68997);

(statearr_69103_69150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69083 === (28))){
var inst_69044 = (state_69082[(2)]);
var inst_69045 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_69046 = figwheel.client.heads_up.display_warning.call(null,inst_69045);
var state_69082__$1 = (function (){var statearr_69104 = state_69082;
(statearr_69104[(11)] = inst_69044);

return statearr_69104;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69082__$1,(29),inst_69046);
} else {
if((state_val_69083 === (25))){
var inst_69042 = figwheel.client.heads_up.clear.call(null);
var state_69082__$1 = state_69082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69082__$1,(28),inst_69042);
} else {
if((state_val_69083 === (34))){
var inst_69063 = figwheel.client.heads_up.flash_loaded.call(null);
var state_69082__$1 = state_69082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69082__$1,(37),inst_69063);
} else {
if((state_val_69083 === (17))){
var inst_69022 = (state_69082[(2)]);
var inst_69023 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_69024 = figwheel.client.auto_jump_to_error.call(null,opts,inst_69023);
var state_69082__$1 = (function (){var statearr_69105 = state_69082;
(statearr_69105[(12)] = inst_69022);

return statearr_69105;
})();
var statearr_69106_69151 = state_69082__$1;
(statearr_69106_69151[(2)] = inst_69024);

(statearr_69106_69151[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69083 === (3))){
var inst_69014 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_69082__$1 = state_69082;
if(cljs.core.truth_(inst_69014)){
var statearr_69107_69152 = state_69082__$1;
(statearr_69107_69152[(1)] = (13));

} else {
var statearr_69108_69153 = state_69082__$1;
(statearr_69108_69153[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69083 === (12))){
var inst_69010 = (state_69082[(2)]);
var state_69082__$1 = state_69082;
var statearr_69109_69154 = state_69082__$1;
(statearr_69109_69154[(2)] = inst_69010);

(statearr_69109_69154[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69083 === (2))){
var inst_68997 = (state_69082[(10)]);
var inst_68997__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_69082__$1 = (function (){var statearr_69110 = state_69082;
(statearr_69110[(10)] = inst_68997__$1);

return statearr_69110;
})();
if(cljs.core.truth_(inst_68997__$1)){
var statearr_69111_69155 = state_69082__$1;
(statearr_69111_69155[(1)] = (5));

} else {
var statearr_69112_69156 = state_69082__$1;
(statearr_69112_69156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69083 === (23))){
var inst_69040 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_69082__$1 = state_69082;
if(cljs.core.truth_(inst_69040)){
var statearr_69113_69157 = state_69082__$1;
(statearr_69113_69157[(1)] = (25));

} else {
var statearr_69114_69158 = state_69082__$1;
(statearr_69114_69158[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69083 === (35))){
var state_69082__$1 = state_69082;
var statearr_69115_69159 = state_69082__$1;
(statearr_69115_69159[(2)] = null);

(statearr_69115_69159[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69083 === (19))){
var inst_69035 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_69082__$1 = state_69082;
if(cljs.core.truth_(inst_69035)){
var statearr_69116_69160 = state_69082__$1;
(statearr_69116_69160[(1)] = (22));

} else {
var statearr_69117_69161 = state_69082__$1;
(statearr_69117_69161[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69083 === (11))){
var inst_69006 = (state_69082[(2)]);
var state_69082__$1 = state_69082;
var statearr_69118_69162 = state_69082__$1;
(statearr_69118_69162[(2)] = inst_69006);

(statearr_69118_69162[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69083 === (9))){
var inst_69008 = figwheel.client.heads_up.clear.call(null);
var state_69082__$1 = state_69082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69082__$1,(12),inst_69008);
} else {
if((state_val_69083 === (5))){
var inst_68999 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_69082__$1 = state_69082;
var statearr_69119_69163 = state_69082__$1;
(statearr_69119_69163[(2)] = inst_68999);

(statearr_69119_69163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69083 === (14))){
var inst_69026 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_69082__$1 = state_69082;
if(cljs.core.truth_(inst_69026)){
var statearr_69120_69164 = state_69082__$1;
(statearr_69120_69164[(1)] = (18));

} else {
var statearr_69121_69165 = state_69082__$1;
(statearr_69121_69165[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69083 === (26))){
var inst_69052 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_69082__$1 = state_69082;
if(cljs.core.truth_(inst_69052)){
var statearr_69122_69166 = state_69082__$1;
(statearr_69122_69166[(1)] = (30));

} else {
var statearr_69123_69167 = state_69082__$1;
(statearr_69123_69167[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69083 === (16))){
var inst_69018 = (state_69082[(2)]);
var inst_69019 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_69020 = figwheel.client.heads_up.display_exception.call(null,inst_69019);
var state_69082__$1 = (function (){var statearr_69124 = state_69082;
(statearr_69124[(13)] = inst_69018);

return statearr_69124;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69082__$1,(17),inst_69020);
} else {
if((state_val_69083 === (30))){
var inst_69054 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_69055 = figwheel.client.heads_up.display_warning.call(null,inst_69054);
var state_69082__$1 = state_69082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69082__$1,(33),inst_69055);
} else {
if((state_val_69083 === (10))){
var inst_69012 = (state_69082[(2)]);
var state_69082__$1 = state_69082;
var statearr_69125_69168 = state_69082__$1;
(statearr_69125_69168[(2)] = inst_69012);

(statearr_69125_69168[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69083 === (18))){
var inst_69028 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_69029 = figwheel.client.heads_up.display_exception.call(null,inst_69028);
var state_69082__$1 = state_69082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69082__$1,(21),inst_69029);
} else {
if((state_val_69083 === (37))){
var inst_69065 = (state_69082[(2)]);
var state_69082__$1 = state_69082;
var statearr_69126_69169 = state_69082__$1;
(statearr_69126_69169[(2)] = inst_69065);

(statearr_69126_69169[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69083 === (8))){
var inst_69004 = figwheel.client.heads_up.flash_loaded.call(null);
var state_69082__$1 = state_69082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69082__$1,(11),inst_69004);
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
});})(c__49215__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__49159__auto__,c__49215__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49160__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49160__auto____0 = (function (){
var statearr_69130 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69130[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49160__auto__);

(statearr_69130[(1)] = (1));

return statearr_69130;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49160__auto____1 = (function (state_69082){
while(true){
var ret_value__49161__auto__ = (function (){try{while(true){
var result__49162__auto__ = switch__49159__auto__.call(null,state_69082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49162__auto__;
}
break;
}
}catch (e69131){if((e69131 instanceof Object)){
var ex__49163__auto__ = e69131;
var statearr_69132_69170 = state_69082;
(statearr_69132_69170[(5)] = ex__49163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69171 = state_69082;
state_69082 = G__69171;
continue;
} else {
return ret_value__49161__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49160__auto__ = function(state_69082){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49160__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49160__auto____1.call(this,state_69082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49160__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49160__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49160__auto__;
})()
;})(switch__49159__auto__,c__49215__auto__,msg_hist,msg_names,msg))
})();
var state__49217__auto__ = (function (){var statearr_69133 = f__49216__auto__.call(null);
(statearr_69133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49215__auto__);

return statearr_69133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49217__auto__);
});})(c__49215__auto__,msg_hist,msg_names,msg))
);

return c__49215__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__49215__auto___69234 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49215__auto___69234,ch){
return (function (){
var f__49216__auto__ = (function (){var switch__49159__auto__ = ((function (c__49215__auto___69234,ch){
return (function (state_69217){
var state_val_69218 = (state_69217[(1)]);
if((state_val_69218 === (1))){
var state_69217__$1 = state_69217;
var statearr_69219_69235 = state_69217__$1;
(statearr_69219_69235[(2)] = null);

(statearr_69219_69235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69218 === (2))){
var state_69217__$1 = state_69217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69217__$1,(4),ch);
} else {
if((state_val_69218 === (3))){
var inst_69215 = (state_69217[(2)]);
var state_69217__$1 = state_69217;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69217__$1,inst_69215);
} else {
if((state_val_69218 === (4))){
var inst_69205 = (state_69217[(7)]);
var inst_69205__$1 = (state_69217[(2)]);
var state_69217__$1 = (function (){var statearr_69220 = state_69217;
(statearr_69220[(7)] = inst_69205__$1);

return statearr_69220;
})();
if(cljs.core.truth_(inst_69205__$1)){
var statearr_69221_69236 = state_69217__$1;
(statearr_69221_69236[(1)] = (5));

} else {
var statearr_69222_69237 = state_69217__$1;
(statearr_69222_69237[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69218 === (5))){
var inst_69205 = (state_69217[(7)]);
var inst_69207 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_69205);
var state_69217__$1 = state_69217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69217__$1,(8),inst_69207);
} else {
if((state_val_69218 === (6))){
var state_69217__$1 = state_69217;
var statearr_69223_69238 = state_69217__$1;
(statearr_69223_69238[(2)] = null);

(statearr_69223_69238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69218 === (7))){
var inst_69213 = (state_69217[(2)]);
var state_69217__$1 = state_69217;
var statearr_69224_69239 = state_69217__$1;
(statearr_69224_69239[(2)] = inst_69213);

(statearr_69224_69239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69218 === (8))){
var inst_69209 = (state_69217[(2)]);
var state_69217__$1 = (function (){var statearr_69225 = state_69217;
(statearr_69225[(8)] = inst_69209);

return statearr_69225;
})();
var statearr_69226_69240 = state_69217__$1;
(statearr_69226_69240[(2)] = null);

(statearr_69226_69240[(1)] = (2));


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
});})(c__49215__auto___69234,ch))
;
return ((function (switch__49159__auto__,c__49215__auto___69234,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__49160__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__49160__auto____0 = (function (){
var statearr_69230 = [null,null,null,null,null,null,null,null,null];
(statearr_69230[(0)] = figwheel$client$heads_up_plugin_$_state_machine__49160__auto__);

(statearr_69230[(1)] = (1));

return statearr_69230;
});
var figwheel$client$heads_up_plugin_$_state_machine__49160__auto____1 = (function (state_69217){
while(true){
var ret_value__49161__auto__ = (function (){try{while(true){
var result__49162__auto__ = switch__49159__auto__.call(null,state_69217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49162__auto__;
}
break;
}
}catch (e69231){if((e69231 instanceof Object)){
var ex__49163__auto__ = e69231;
var statearr_69232_69241 = state_69217;
(statearr_69232_69241[(5)] = ex__49163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69242 = state_69217;
state_69217 = G__69242;
continue;
} else {
return ret_value__49161__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__49160__auto__ = function(state_69217){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__49160__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__49160__auto____1.call(this,state_69217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__49160__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__49160__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__49160__auto__;
})()
;})(switch__49159__auto__,c__49215__auto___69234,ch))
})();
var state__49217__auto__ = (function (){var statearr_69233 = f__49216__auto__.call(null);
(statearr_69233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49215__auto___69234);

return statearr_69233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49217__auto__);
});})(c__49215__auto___69234,ch))
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
var c__49215__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49215__auto__){
return (function (){
var f__49216__auto__ = (function (){var switch__49159__auto__ = ((function (c__49215__auto__){
return (function (state_69263){
var state_val_69264 = (state_69263[(1)]);
if((state_val_69264 === (1))){
var inst_69258 = cljs.core.async.timeout.call(null,(3000));
var state_69263__$1 = state_69263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69263__$1,(2),inst_69258);
} else {
if((state_val_69264 === (2))){
var inst_69260 = (state_69263[(2)]);
var inst_69261 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_69263__$1 = (function (){var statearr_69265 = state_69263;
(statearr_69265[(7)] = inst_69260);

return statearr_69265;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69263__$1,inst_69261);
} else {
return null;
}
}
});})(c__49215__auto__))
;
return ((function (switch__49159__auto__,c__49215__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__49160__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__49160__auto____0 = (function (){
var statearr_69269 = [null,null,null,null,null,null,null,null];
(statearr_69269[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__49160__auto__);

(statearr_69269[(1)] = (1));

return statearr_69269;
});
var figwheel$client$enforce_project_plugin_$_state_machine__49160__auto____1 = (function (state_69263){
while(true){
var ret_value__49161__auto__ = (function (){try{while(true){
var result__49162__auto__ = switch__49159__auto__.call(null,state_69263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49162__auto__;
}
break;
}
}catch (e69270){if((e69270 instanceof Object)){
var ex__49163__auto__ = e69270;
var statearr_69271_69273 = state_69263;
(statearr_69271_69273[(5)] = ex__49163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69274 = state_69263;
state_69263 = G__69274;
continue;
} else {
return ret_value__49161__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__49160__auto__ = function(state_69263){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__49160__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__49160__auto____1.call(this,state_69263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__49160__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__49160__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__49160__auto__;
})()
;})(switch__49159__auto__,c__49215__auto__))
})();
var state__49217__auto__ = (function (){var statearr_69272 = f__49216__auto__.call(null);
(statearr_69272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49215__auto__);

return statearr_69272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49217__auto__);
});})(c__49215__auto__))
);

return c__49215__auto__;
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
var c__49215__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49215__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__49216__auto__ = (function (){var switch__49159__auto__ = ((function (c__49215__auto__,figwheel_version,temp__4657__auto__){
return (function (state_69297){
var state_val_69298 = (state_69297[(1)]);
if((state_val_69298 === (1))){
var inst_69291 = cljs.core.async.timeout.call(null,(2000));
var state_69297__$1 = state_69297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69297__$1,(2),inst_69291);
} else {
if((state_val_69298 === (2))){
var inst_69293 = (state_69297[(2)]);
var inst_69294 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_69295 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_69294);
var state_69297__$1 = (function (){var statearr_69299 = state_69297;
(statearr_69299[(7)] = inst_69293);

return statearr_69299;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69297__$1,inst_69295);
} else {
return null;
}
}
});})(c__49215__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__49159__auto__,c__49215__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49160__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49160__auto____0 = (function (){
var statearr_69303 = [null,null,null,null,null,null,null,null];
(statearr_69303[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49160__auto__);

(statearr_69303[(1)] = (1));

return statearr_69303;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49160__auto____1 = (function (state_69297){
while(true){
var ret_value__49161__auto__ = (function (){try{while(true){
var result__49162__auto__ = switch__49159__auto__.call(null,state_69297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49162__auto__;
}
break;
}
}catch (e69304){if((e69304 instanceof Object)){
var ex__49163__auto__ = e69304;
var statearr_69305_69307 = state_69297;
(statearr_69305_69307[(5)] = ex__49163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69308 = state_69297;
state_69297 = G__69308;
continue;
} else {
return ret_value__49161__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49160__auto__ = function(state_69297){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49160__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49160__auto____1.call(this,state_69297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49160__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49160__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49160__auto__;
})()
;})(switch__49159__auto__,c__49215__auto__,figwheel_version,temp__4657__auto__))
})();
var state__49217__auto__ = (function (){var statearr_69306 = f__49216__auto__.call(null);
(statearr_69306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49215__auto__);

return statearr_69306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49217__auto__);
});})(c__49215__auto__,figwheel_version,temp__4657__auto__))
);

return c__49215__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__69309){
var map__69313 = p__69309;
var map__69313__$1 = ((((!((map__69313 == null)))?((((map__69313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69313.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69313):map__69313);
var file = cljs.core.get.call(null,map__69313__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__69313__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__69313__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__69315 = "";
var G__69315__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__69315),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__69315);
var G__69315__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__69315__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__69315__$1);
if(cljs.core.truth_((function (){var and__43482__auto__ = line;
if(cljs.core.truth_(and__43482__auto__)){
return column;
} else {
return and__43482__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__69315__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__69315__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__69316){
var map__69323 = p__69316;
var map__69323__$1 = ((((!((map__69323 == null)))?((((map__69323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69323.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69323):map__69323);
var ed = map__69323__$1;
var formatted_exception = cljs.core.get.call(null,map__69323__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__69323__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__69323__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__69325_69329 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__69326_69330 = null;
var count__69327_69331 = (0);
var i__69328_69332 = (0);
while(true){
if((i__69328_69332 < count__69327_69331)){
var msg_69333 = cljs.core._nth.call(null,chunk__69326_69330,i__69328_69332);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_69333);

var G__69334 = seq__69325_69329;
var G__69335 = chunk__69326_69330;
var G__69336 = count__69327_69331;
var G__69337 = (i__69328_69332 + (1));
seq__69325_69329 = G__69334;
chunk__69326_69330 = G__69335;
count__69327_69331 = G__69336;
i__69328_69332 = G__69337;
continue;
} else {
var temp__4657__auto___69338 = cljs.core.seq.call(null,seq__69325_69329);
if(temp__4657__auto___69338){
var seq__69325_69339__$1 = temp__4657__auto___69338;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__69325_69339__$1)){
var c__44313__auto___69340 = cljs.core.chunk_first.call(null,seq__69325_69339__$1);
var G__69341 = cljs.core.chunk_rest.call(null,seq__69325_69339__$1);
var G__69342 = c__44313__auto___69340;
var G__69343 = cljs.core.count.call(null,c__44313__auto___69340);
var G__69344 = (0);
seq__69325_69329 = G__69341;
chunk__69326_69330 = G__69342;
count__69327_69331 = G__69343;
i__69328_69332 = G__69344;
continue;
} else {
var msg_69345 = cljs.core.first.call(null,seq__69325_69339__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_69345);

var G__69346 = cljs.core.next.call(null,seq__69325_69339__$1);
var G__69347 = null;
var G__69348 = (0);
var G__69349 = (0);
seq__69325_69329 = G__69346;
chunk__69326_69330 = G__69347;
count__69327_69331 = G__69348;
i__69328_69332 = G__69349;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__69350){
var map__69353 = p__69350;
var map__69353__$1 = ((((!((map__69353 == null)))?((((map__69353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69353.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69353):map__69353);
var w = map__69353__$1;
var message = cljs.core.get.call(null,map__69353__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__43482__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__43482__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__43482__auto__;
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
var seq__69365 = cljs.core.seq.call(null,plugins);
var chunk__69366 = null;
var count__69367 = (0);
var i__69368 = (0);
while(true){
if((i__69368 < count__69367)){
var vec__69369 = cljs.core._nth.call(null,chunk__69366,i__69368);
var k = cljs.core.nth.call(null,vec__69369,(0),null);
var plugin = cljs.core.nth.call(null,vec__69369,(1),null);
if(cljs.core.truth_(plugin)){
var pl_69375 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__69365,chunk__69366,count__69367,i__69368,pl_69375,vec__69369,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_69375.call(null,msg_hist);
});})(seq__69365,chunk__69366,count__69367,i__69368,pl_69375,vec__69369,k,plugin))
);
} else {
}

var G__69376 = seq__69365;
var G__69377 = chunk__69366;
var G__69378 = count__69367;
var G__69379 = (i__69368 + (1));
seq__69365 = G__69376;
chunk__69366 = G__69377;
count__69367 = G__69378;
i__69368 = G__69379;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__69365);
if(temp__4657__auto__){
var seq__69365__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__69365__$1)){
var c__44313__auto__ = cljs.core.chunk_first.call(null,seq__69365__$1);
var G__69380 = cljs.core.chunk_rest.call(null,seq__69365__$1);
var G__69381 = c__44313__auto__;
var G__69382 = cljs.core.count.call(null,c__44313__auto__);
var G__69383 = (0);
seq__69365 = G__69380;
chunk__69366 = G__69381;
count__69367 = G__69382;
i__69368 = G__69383;
continue;
} else {
var vec__69372 = cljs.core.first.call(null,seq__69365__$1);
var k = cljs.core.nth.call(null,vec__69372,(0),null);
var plugin = cljs.core.nth.call(null,vec__69372,(1),null);
if(cljs.core.truth_(plugin)){
var pl_69384 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__69365,chunk__69366,count__69367,i__69368,pl_69384,vec__69372,k,plugin,seq__69365__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_69384.call(null,msg_hist);
});})(seq__69365,chunk__69366,count__69367,i__69368,pl_69384,vec__69372,k,plugin,seq__69365__$1,temp__4657__auto__))
);
} else {
}

var G__69385 = cljs.core.next.call(null,seq__69365__$1);
var G__69386 = null;
var G__69387 = (0);
var G__69388 = (0);
seq__69365 = G__69385;
chunk__69366 = G__69386;
count__69367 = G__69387;
i__69368 = G__69388;
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
var args69389 = [];
var len__44607__auto___69396 = arguments.length;
var i__44608__auto___69397 = (0);
while(true){
if((i__44608__auto___69397 < len__44607__auto___69396)){
args69389.push((arguments[i__44608__auto___69397]));

var G__69398 = (i__44608__auto___69397 + (1));
i__44608__auto___69397 = G__69398;
continue;
} else {
}
break;
}

var G__69391 = args69389.length;
switch (G__69391) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args69389.length)].join('')));

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

var seq__69392_69400 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__69393_69401 = null;
var count__69394_69402 = (0);
var i__69395_69403 = (0);
while(true){
if((i__69395_69403 < count__69394_69402)){
var msg_69404 = cljs.core._nth.call(null,chunk__69393_69401,i__69395_69403);
figwheel.client.socket.handle_incoming_message.call(null,msg_69404);

var G__69405 = seq__69392_69400;
var G__69406 = chunk__69393_69401;
var G__69407 = count__69394_69402;
var G__69408 = (i__69395_69403 + (1));
seq__69392_69400 = G__69405;
chunk__69393_69401 = G__69406;
count__69394_69402 = G__69407;
i__69395_69403 = G__69408;
continue;
} else {
var temp__4657__auto___69409 = cljs.core.seq.call(null,seq__69392_69400);
if(temp__4657__auto___69409){
var seq__69392_69410__$1 = temp__4657__auto___69409;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__69392_69410__$1)){
var c__44313__auto___69411 = cljs.core.chunk_first.call(null,seq__69392_69410__$1);
var G__69412 = cljs.core.chunk_rest.call(null,seq__69392_69410__$1);
var G__69413 = c__44313__auto___69411;
var G__69414 = cljs.core.count.call(null,c__44313__auto___69411);
var G__69415 = (0);
seq__69392_69400 = G__69412;
chunk__69393_69401 = G__69413;
count__69394_69402 = G__69414;
i__69395_69403 = G__69415;
continue;
} else {
var msg_69416 = cljs.core.first.call(null,seq__69392_69410__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_69416);

var G__69417 = cljs.core.next.call(null,seq__69392_69410__$1);
var G__69418 = null;
var G__69419 = (0);
var G__69420 = (0);
seq__69392_69400 = G__69417;
chunk__69393_69401 = G__69418;
count__69394_69402 = G__69419;
i__69395_69403 = G__69420;
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
var args__44614__auto__ = [];
var len__44607__auto___69425 = arguments.length;
var i__44608__auto___69426 = (0);
while(true){
if((i__44608__auto___69426 < len__44607__auto___69425)){
args__44614__auto__.push((arguments[i__44608__auto___69426]));

var G__69427 = (i__44608__auto___69426 + (1));
i__44608__auto___69426 = G__69427;
continue;
} else {
}
break;
}

var argseq__44615__auto__ = ((((0) < args__44614__auto__.length))?(new cljs.core.IndexedSeq(args__44614__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__44615__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__69422){
var map__69423 = p__69422;
var map__69423__$1 = ((((!((map__69423 == null)))?((((map__69423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69423.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69423):map__69423);
var opts = map__69423__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq69421){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq69421));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e69429){if((e69429 instanceof Error)){
var e = e69429;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e69429;

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
return (function (p__69433){
var map__69434 = p__69433;
var map__69434__$1 = ((((!((map__69434 == null)))?((((map__69434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69434.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69434):map__69434);
var msg_name = cljs.core.get.call(null,map__69434__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1494353238779