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
var args49586 = [];
var len__34925__auto___49589 = arguments.length;
var i__34926__auto___49590 = (0);
while(true){
if((i__34926__auto___49590 < len__34925__auto___49589)){
args49586.push((arguments[i__34926__auto___49590]));

var G__49591 = (i__34926__auto___49590 + (1));
i__34926__auto___49590 = G__49591;
continue;
} else {
}
break;
}

var G__49588 = args49586.length;
switch (G__49588) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49586.length)].join('')));

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
var args__34932__auto__ = [];
var len__34925__auto___49594 = arguments.length;
var i__34926__auto___49595 = (0);
while(true){
if((i__34926__auto___49595 < len__34925__auto___49594)){
args__34932__auto__.push((arguments[i__34926__auto___49595]));

var G__49596 = (i__34926__auto___49595 + (1));
i__34926__auto___49595 = G__49596;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq49593){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49593));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__34932__auto__ = [];
var len__34925__auto___49598 = arguments.length;
var i__34926__auto___49599 = (0);
while(true){
if((i__34926__auto___49599 < len__34925__auto___49598)){
args__34932__auto__.push((arguments[i__34926__auto___49599]));

var G__49600 = (i__34926__auto___49599 + (1));
i__34926__auto___49599 = G__49600;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq49597){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49597));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__49601 = cljs.core._EQ_;
var expr__49602 = (function (){var or__33812__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e49605){if((e49605 instanceof Error)){
var e = e49605;
return false;
} else {
throw e49605;

}
}})();
if(cljs.core.truth_(or__33812__auto__)){
return or__33812__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__49601.call(null,"true",expr__49602))){
return true;
} else {
if(cljs.core.truth_(pred__49601.call(null,"false",expr__49602))){
return false;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__49602)].join('')));
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
}catch (e49607){if((e49607 instanceof Error)){
var e = e49607;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to access localStorage")].join(''));
} else {
throw e49607;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__49608){
var map__49611 = p__49608;
var map__49611__$1 = ((((!((map__49611 == null)))?((((map__49611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49611.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49611):map__49611);
var message = cljs.core.get.call(null,map__49611__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__49611__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__33812__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__33812__auto__)){
return or__33812__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__33800__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__33800__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__33800__auto__;
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
var c__40084__auto___49773 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40084__auto___49773,ch){
return (function (){
var f__40085__auto__ = (function (){var switch__39972__auto__ = ((function (c__40084__auto___49773,ch){
return (function (state_49742){
var state_val_49743 = (state_49742[(1)]);
if((state_val_49743 === (7))){
var inst_49738 = (state_49742[(2)]);
var state_49742__$1 = state_49742;
var statearr_49744_49774 = state_49742__$1;
(statearr_49744_49774[(2)] = inst_49738);

(statearr_49744_49774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49743 === (1))){
var state_49742__$1 = state_49742;
var statearr_49745_49775 = state_49742__$1;
(statearr_49745_49775[(2)] = null);

(statearr_49745_49775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49743 === (4))){
var inst_49695 = (state_49742[(7)]);
var inst_49695__$1 = (state_49742[(2)]);
var state_49742__$1 = (function (){var statearr_49746 = state_49742;
(statearr_49746[(7)] = inst_49695__$1);

return statearr_49746;
})();
if(cljs.core.truth_(inst_49695__$1)){
var statearr_49747_49776 = state_49742__$1;
(statearr_49747_49776[(1)] = (5));

} else {
var statearr_49748_49777 = state_49742__$1;
(statearr_49748_49777[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49743 === (15))){
var inst_49702 = (state_49742[(8)]);
var inst_49717 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_49702);
var inst_49718 = cljs.core.first.call(null,inst_49717);
var inst_49719 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_49718);
var inst_49720 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49719)].join('');
var inst_49721 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_49720);
var state_49742__$1 = state_49742;
var statearr_49749_49778 = state_49742__$1;
(statearr_49749_49778[(2)] = inst_49721);

(statearr_49749_49778[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49743 === (13))){
var inst_49726 = (state_49742[(2)]);
var state_49742__$1 = state_49742;
var statearr_49750_49779 = state_49742__$1;
(statearr_49750_49779[(2)] = inst_49726);

(statearr_49750_49779[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49743 === (6))){
var state_49742__$1 = state_49742;
var statearr_49751_49780 = state_49742__$1;
(statearr_49751_49780[(2)] = null);

(statearr_49751_49780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49743 === (17))){
var inst_49724 = (state_49742[(2)]);
var state_49742__$1 = state_49742;
var statearr_49752_49781 = state_49742__$1;
(statearr_49752_49781[(2)] = inst_49724);

(statearr_49752_49781[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49743 === (3))){
var inst_49740 = (state_49742[(2)]);
var state_49742__$1 = state_49742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49742__$1,inst_49740);
} else {
if((state_val_49743 === (12))){
var inst_49701 = (state_49742[(9)]);
var inst_49715 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_49701,opts);
var state_49742__$1 = state_49742;
if(cljs.core.truth_(inst_49715)){
var statearr_49753_49782 = state_49742__$1;
(statearr_49753_49782[(1)] = (15));

} else {
var statearr_49754_49783 = state_49742__$1;
(statearr_49754_49783[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49743 === (2))){
var state_49742__$1 = state_49742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49742__$1,(4),ch);
} else {
if((state_val_49743 === (11))){
var inst_49702 = (state_49742[(8)]);
var inst_49707 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49708 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_49702);
var inst_49709 = cljs.core.async.timeout.call(null,(1000));
var inst_49710 = [inst_49708,inst_49709];
var inst_49711 = (new cljs.core.PersistentVector(null,2,(5),inst_49707,inst_49710,null));
var state_49742__$1 = state_49742;
return cljs.core.async.ioc_alts_BANG_.call(null,state_49742__$1,(14),inst_49711);
} else {
if((state_val_49743 === (9))){
var inst_49702 = (state_49742[(8)]);
var inst_49728 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_49729 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_49702);
var inst_49730 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_49729);
var inst_49731 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49730)].join('');
var inst_49732 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_49731);
var state_49742__$1 = (function (){var statearr_49755 = state_49742;
(statearr_49755[(10)] = inst_49728);

return statearr_49755;
})();
var statearr_49756_49784 = state_49742__$1;
(statearr_49756_49784[(2)] = inst_49732);

(statearr_49756_49784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49743 === (5))){
var inst_49695 = (state_49742[(7)]);
var inst_49697 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_49698 = (new cljs.core.PersistentArrayMap(null,2,inst_49697,null));
var inst_49699 = (new cljs.core.PersistentHashSet(null,inst_49698,null));
var inst_49700 = figwheel.client.focus_msgs.call(null,inst_49699,inst_49695);
var inst_49701 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_49700);
var inst_49702 = cljs.core.first.call(null,inst_49700);
var inst_49703 = figwheel.client.autoload_QMARK_.call(null);
var state_49742__$1 = (function (){var statearr_49757 = state_49742;
(statearr_49757[(8)] = inst_49702);

(statearr_49757[(9)] = inst_49701);

return statearr_49757;
})();
if(cljs.core.truth_(inst_49703)){
var statearr_49758_49785 = state_49742__$1;
(statearr_49758_49785[(1)] = (8));

} else {
var statearr_49759_49786 = state_49742__$1;
(statearr_49759_49786[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49743 === (14))){
var inst_49713 = (state_49742[(2)]);
var state_49742__$1 = state_49742;
var statearr_49760_49787 = state_49742__$1;
(statearr_49760_49787[(2)] = inst_49713);

(statearr_49760_49787[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49743 === (16))){
var state_49742__$1 = state_49742;
var statearr_49761_49788 = state_49742__$1;
(statearr_49761_49788[(2)] = null);

(statearr_49761_49788[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49743 === (10))){
var inst_49734 = (state_49742[(2)]);
var state_49742__$1 = (function (){var statearr_49762 = state_49742;
(statearr_49762[(11)] = inst_49734);

return statearr_49762;
})();
var statearr_49763_49789 = state_49742__$1;
(statearr_49763_49789[(2)] = null);

(statearr_49763_49789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49743 === (8))){
var inst_49701 = (state_49742[(9)]);
var inst_49705 = figwheel.client.reload_file_state_QMARK_.call(null,inst_49701,opts);
var state_49742__$1 = state_49742;
if(cljs.core.truth_(inst_49705)){
var statearr_49764_49790 = state_49742__$1;
(statearr_49764_49790[(1)] = (11));

} else {
var statearr_49765_49791 = state_49742__$1;
(statearr_49765_49791[(1)] = (12));

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
});})(c__40084__auto___49773,ch))
;
return ((function (switch__39972__auto__,c__40084__auto___49773,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__39973__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__39973__auto____0 = (function (){
var statearr_49769 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49769[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__39973__auto__);

(statearr_49769[(1)] = (1));

return statearr_49769;
});
var figwheel$client$file_reloader_plugin_$_state_machine__39973__auto____1 = (function (state_49742){
while(true){
var ret_value__39974__auto__ = (function (){try{while(true){
var result__39975__auto__ = switch__39972__auto__.call(null,state_49742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39975__auto__;
}
break;
}
}catch (e49770){if((e49770 instanceof Object)){
var ex__39976__auto__ = e49770;
var statearr_49771_49792 = state_49742;
(statearr_49771_49792[(5)] = ex__39976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49793 = state_49742;
state_49742 = G__49793;
continue;
} else {
return ret_value__39974__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__39973__auto__ = function(state_49742){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__39973__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__39973__auto____1.call(this,state_49742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__39973__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__39973__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__39973__auto__;
})()
;})(switch__39972__auto__,c__40084__auto___49773,ch))
})();
var state__40086__auto__ = (function (){var statearr_49772 = f__40085__auto__.call(null);
(statearr_49772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40084__auto___49773);

return statearr_49772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40086__auto__);
});})(c__40084__auto___49773,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__49794_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__49794_SHARP_));
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
var base_path_49797 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_49797){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e49796){if((e49796 instanceof Error)){
var e = e49796;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_49797], null));
} else {
var e = e49796;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_49797))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__49798){
var map__49807 = p__49798;
var map__49807__$1 = ((((!((map__49807 == null)))?((((map__49807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49807.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49807):map__49807);
var opts = map__49807__$1;
var build_id = cljs.core.get.call(null,map__49807__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__49807,map__49807__$1,opts,build_id){
return (function (p__49809){
var vec__49810 = p__49809;
var seq__49811 = cljs.core.seq.call(null,vec__49810);
var first__49812 = cljs.core.first.call(null,seq__49811);
var seq__49811__$1 = cljs.core.next.call(null,seq__49811);
var map__49813 = first__49812;
var map__49813__$1 = ((((!((map__49813 == null)))?((((map__49813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49813.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49813):map__49813);
var msg = map__49813__$1;
var msg_name = cljs.core.get.call(null,map__49813__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__49811__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__49810,seq__49811,first__49812,seq__49811__$1,map__49813,map__49813__$1,msg,msg_name,_,map__49807,map__49807__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__49810,seq__49811,first__49812,seq__49811__$1,map__49813,map__49813__$1,msg,msg_name,_,map__49807,map__49807__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__49807,map__49807__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__49821){
var vec__49822 = p__49821;
var seq__49823 = cljs.core.seq.call(null,vec__49822);
var first__49824 = cljs.core.first.call(null,seq__49823);
var seq__49823__$1 = cljs.core.next.call(null,seq__49823);
var map__49825 = first__49824;
var map__49825__$1 = ((((!((map__49825 == null)))?((((map__49825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49825.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49825):map__49825);
var msg = map__49825__$1;
var msg_name = cljs.core.get.call(null,map__49825__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__49823__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__49827){
var map__49839 = p__49827;
var map__49839__$1 = ((((!((map__49839 == null)))?((((map__49839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49839.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49839):map__49839);
var on_compile_warning = cljs.core.get.call(null,map__49839__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__49839__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__49839,map__49839__$1,on_compile_warning,on_compile_fail){
return (function (p__49841){
var vec__49842 = p__49841;
var seq__49843 = cljs.core.seq.call(null,vec__49842);
var first__49844 = cljs.core.first.call(null,seq__49843);
var seq__49843__$1 = cljs.core.next.call(null,seq__49843);
var map__49845 = first__49844;
var map__49845__$1 = ((((!((map__49845 == null)))?((((map__49845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49845.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49845):map__49845);
var msg = map__49845__$1;
var msg_name = cljs.core.get.call(null,map__49845__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__49843__$1;
var pred__49847 = cljs.core._EQ_;
var expr__49848 = msg_name;
if(cljs.core.truth_(pred__49847.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__49848))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__49847.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__49848))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__49839,map__49839__$1,on_compile_warning,on_compile_fail))
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
var c__40084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40084__auto__,msg_hist,msg_names,msg){
return (function (){
var f__40085__auto__ = (function (){var switch__39972__auto__ = ((function (c__40084__auto__,msg_hist,msg_names,msg){
return (function (state_50076){
var state_val_50077 = (state_50076[(1)]);
if((state_val_50077 === (7))){
var inst_49996 = (state_50076[(2)]);
var state_50076__$1 = state_50076;
if(cljs.core.truth_(inst_49996)){
var statearr_50078_50128 = state_50076__$1;
(statearr_50078_50128[(1)] = (8));

} else {
var statearr_50079_50129 = state_50076__$1;
(statearr_50079_50129[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50077 === (20))){
var inst_50070 = (state_50076[(2)]);
var state_50076__$1 = state_50076;
var statearr_50080_50130 = state_50076__$1;
(statearr_50080_50130[(2)] = inst_50070);

(statearr_50080_50130[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50077 === (27))){
var inst_50066 = (state_50076[(2)]);
var state_50076__$1 = state_50076;
var statearr_50081_50131 = state_50076__$1;
(statearr_50081_50131[(2)] = inst_50066);

(statearr_50081_50131[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50077 === (1))){
var inst_49989 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_50076__$1 = state_50076;
if(cljs.core.truth_(inst_49989)){
var statearr_50082_50132 = state_50076__$1;
(statearr_50082_50132[(1)] = (2));

} else {
var statearr_50083_50133 = state_50076__$1;
(statearr_50083_50133[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50077 === (24))){
var inst_50068 = (state_50076[(2)]);
var state_50076__$1 = state_50076;
var statearr_50084_50134 = state_50076__$1;
(statearr_50084_50134[(2)] = inst_50068);

(statearr_50084_50134[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50077 === (4))){
var inst_50074 = (state_50076[(2)]);
var state_50076__$1 = state_50076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50076__$1,inst_50074);
} else {
if((state_val_50077 === (15))){
var inst_50072 = (state_50076[(2)]);
var state_50076__$1 = state_50076;
var statearr_50085_50135 = state_50076__$1;
(statearr_50085_50135[(2)] = inst_50072);

(statearr_50085_50135[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50077 === (21))){
var inst_50025 = (state_50076[(2)]);
var inst_50026 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50027 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50026);
var state_50076__$1 = (function (){var statearr_50086 = state_50076;
(statearr_50086[(7)] = inst_50025);

return statearr_50086;
})();
var statearr_50087_50136 = state_50076__$1;
(statearr_50087_50136[(2)] = inst_50027);

(statearr_50087_50136[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50077 === (31))){
var inst_50055 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_50076__$1 = state_50076;
if(cljs.core.truth_(inst_50055)){
var statearr_50088_50137 = state_50076__$1;
(statearr_50088_50137[(1)] = (34));

} else {
var statearr_50089_50138 = state_50076__$1;
(statearr_50089_50138[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50077 === (32))){
var inst_50064 = (state_50076[(2)]);
var state_50076__$1 = state_50076;
var statearr_50090_50139 = state_50076__$1;
(statearr_50090_50139[(2)] = inst_50064);

(statearr_50090_50139[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50077 === (33))){
var inst_50051 = (state_50076[(2)]);
var inst_50052 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50053 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50052);
var state_50076__$1 = (function (){var statearr_50091 = state_50076;
(statearr_50091[(8)] = inst_50051);

return statearr_50091;
})();
var statearr_50092_50140 = state_50076__$1;
(statearr_50092_50140[(2)] = inst_50053);

(statearr_50092_50140[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50077 === (13))){
var inst_50010 = figwheel.client.heads_up.clear.call(null);
var state_50076__$1 = state_50076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50076__$1,(16),inst_50010);
} else {
if((state_val_50077 === (22))){
var inst_50031 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50032 = figwheel.client.heads_up.append_warning_message.call(null,inst_50031);
var state_50076__$1 = state_50076;
var statearr_50093_50141 = state_50076__$1;
(statearr_50093_50141[(2)] = inst_50032);

(statearr_50093_50141[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50077 === (36))){
var inst_50062 = (state_50076[(2)]);
var state_50076__$1 = state_50076;
var statearr_50094_50142 = state_50076__$1;
(statearr_50094_50142[(2)] = inst_50062);

(statearr_50094_50142[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50077 === (29))){
var inst_50042 = (state_50076[(2)]);
var inst_50043 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50044 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50043);
var state_50076__$1 = (function (){var statearr_50095 = state_50076;
(statearr_50095[(9)] = inst_50042);

return statearr_50095;
})();
var statearr_50096_50143 = state_50076__$1;
(statearr_50096_50143[(2)] = inst_50044);

(statearr_50096_50143[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50077 === (6))){
var inst_49991 = (state_50076[(10)]);
var state_50076__$1 = state_50076;
var statearr_50097_50144 = state_50076__$1;
(statearr_50097_50144[(2)] = inst_49991);

(statearr_50097_50144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50077 === (28))){
var inst_50038 = (state_50076[(2)]);
var inst_50039 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50040 = figwheel.client.heads_up.display_warning.call(null,inst_50039);
var state_50076__$1 = (function (){var statearr_50098 = state_50076;
(statearr_50098[(11)] = inst_50038);

return statearr_50098;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50076__$1,(29),inst_50040);
} else {
if((state_val_50077 === (25))){
var inst_50036 = figwheel.client.heads_up.clear.call(null);
var state_50076__$1 = state_50076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50076__$1,(28),inst_50036);
} else {
if((state_val_50077 === (34))){
var inst_50057 = figwheel.client.heads_up.flash_loaded.call(null);
var state_50076__$1 = state_50076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50076__$1,(37),inst_50057);
} else {
if((state_val_50077 === (17))){
var inst_50016 = (state_50076[(2)]);
var inst_50017 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50018 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50017);
var state_50076__$1 = (function (){var statearr_50099 = state_50076;
(statearr_50099[(12)] = inst_50016);

return statearr_50099;
})();
var statearr_50100_50145 = state_50076__$1;
(statearr_50100_50145[(2)] = inst_50018);

(statearr_50100_50145[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50077 === (3))){
var inst_50008 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_50076__$1 = state_50076;
if(cljs.core.truth_(inst_50008)){
var statearr_50101_50146 = state_50076__$1;
(statearr_50101_50146[(1)] = (13));

} else {
var statearr_50102_50147 = state_50076__$1;
(statearr_50102_50147[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50077 === (12))){
var inst_50004 = (state_50076[(2)]);
var state_50076__$1 = state_50076;
var statearr_50103_50148 = state_50076__$1;
(statearr_50103_50148[(2)] = inst_50004);

(statearr_50103_50148[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50077 === (2))){
var inst_49991 = (state_50076[(10)]);
var inst_49991__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_50076__$1 = (function (){var statearr_50104 = state_50076;
(statearr_50104[(10)] = inst_49991__$1);

return statearr_50104;
})();
if(cljs.core.truth_(inst_49991__$1)){
var statearr_50105_50149 = state_50076__$1;
(statearr_50105_50149[(1)] = (5));

} else {
var statearr_50106_50150 = state_50076__$1;
(statearr_50106_50150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50077 === (23))){
var inst_50034 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_50076__$1 = state_50076;
if(cljs.core.truth_(inst_50034)){
var statearr_50107_50151 = state_50076__$1;
(statearr_50107_50151[(1)] = (25));

} else {
var statearr_50108_50152 = state_50076__$1;
(statearr_50108_50152[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50077 === (35))){
var state_50076__$1 = state_50076;
var statearr_50109_50153 = state_50076__$1;
(statearr_50109_50153[(2)] = null);

(statearr_50109_50153[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50077 === (19))){
var inst_50029 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_50076__$1 = state_50076;
if(cljs.core.truth_(inst_50029)){
var statearr_50110_50154 = state_50076__$1;
(statearr_50110_50154[(1)] = (22));

} else {
var statearr_50111_50155 = state_50076__$1;
(statearr_50111_50155[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50077 === (11))){
var inst_50000 = (state_50076[(2)]);
var state_50076__$1 = state_50076;
var statearr_50112_50156 = state_50076__$1;
(statearr_50112_50156[(2)] = inst_50000);

(statearr_50112_50156[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50077 === (9))){
var inst_50002 = figwheel.client.heads_up.clear.call(null);
var state_50076__$1 = state_50076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50076__$1,(12),inst_50002);
} else {
if((state_val_50077 === (5))){
var inst_49993 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_50076__$1 = state_50076;
var statearr_50113_50157 = state_50076__$1;
(statearr_50113_50157[(2)] = inst_49993);

(statearr_50113_50157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50077 === (14))){
var inst_50020 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_50076__$1 = state_50076;
if(cljs.core.truth_(inst_50020)){
var statearr_50114_50158 = state_50076__$1;
(statearr_50114_50158[(1)] = (18));

} else {
var statearr_50115_50159 = state_50076__$1;
(statearr_50115_50159[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50077 === (26))){
var inst_50046 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_50076__$1 = state_50076;
if(cljs.core.truth_(inst_50046)){
var statearr_50116_50160 = state_50076__$1;
(statearr_50116_50160[(1)] = (30));

} else {
var statearr_50117_50161 = state_50076__$1;
(statearr_50117_50161[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50077 === (16))){
var inst_50012 = (state_50076[(2)]);
var inst_50013 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50014 = figwheel.client.heads_up.display_exception.call(null,inst_50013);
var state_50076__$1 = (function (){var statearr_50118 = state_50076;
(statearr_50118[(13)] = inst_50012);

return statearr_50118;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50076__$1,(17),inst_50014);
} else {
if((state_val_50077 === (30))){
var inst_50048 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50049 = figwheel.client.heads_up.display_warning.call(null,inst_50048);
var state_50076__$1 = state_50076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50076__$1,(33),inst_50049);
} else {
if((state_val_50077 === (10))){
var inst_50006 = (state_50076[(2)]);
var state_50076__$1 = state_50076;
var statearr_50119_50162 = state_50076__$1;
(statearr_50119_50162[(2)] = inst_50006);

(statearr_50119_50162[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50077 === (18))){
var inst_50022 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50023 = figwheel.client.heads_up.display_exception.call(null,inst_50022);
var state_50076__$1 = state_50076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50076__$1,(21),inst_50023);
} else {
if((state_val_50077 === (37))){
var inst_50059 = (state_50076[(2)]);
var state_50076__$1 = state_50076;
var statearr_50120_50163 = state_50076__$1;
(statearr_50120_50163[(2)] = inst_50059);

(statearr_50120_50163[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50077 === (8))){
var inst_49998 = figwheel.client.heads_up.flash_loaded.call(null);
var state_50076__$1 = state_50076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50076__$1,(11),inst_49998);
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
});})(c__40084__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__39972__auto__,c__40084__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39973__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39973__auto____0 = (function (){
var statearr_50124 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50124[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39973__auto__);

(statearr_50124[(1)] = (1));

return statearr_50124;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39973__auto____1 = (function (state_50076){
while(true){
var ret_value__39974__auto__ = (function (){try{while(true){
var result__39975__auto__ = switch__39972__auto__.call(null,state_50076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39975__auto__;
}
break;
}
}catch (e50125){if((e50125 instanceof Object)){
var ex__39976__auto__ = e50125;
var statearr_50126_50164 = state_50076;
(statearr_50126_50164[(5)] = ex__39976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50165 = state_50076;
state_50076 = G__50165;
continue;
} else {
return ret_value__39974__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39973__auto__ = function(state_50076){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39973__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39973__auto____1.call(this,state_50076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39973__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39973__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39973__auto__;
})()
;})(switch__39972__auto__,c__40084__auto__,msg_hist,msg_names,msg))
})();
var state__40086__auto__ = (function (){var statearr_50127 = f__40085__auto__.call(null);
(statearr_50127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40084__auto__);

return statearr_50127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40086__auto__);
});})(c__40084__auto__,msg_hist,msg_names,msg))
);

return c__40084__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__40084__auto___50228 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40084__auto___50228,ch){
return (function (){
var f__40085__auto__ = (function (){var switch__39972__auto__ = ((function (c__40084__auto___50228,ch){
return (function (state_50211){
var state_val_50212 = (state_50211[(1)]);
if((state_val_50212 === (1))){
var state_50211__$1 = state_50211;
var statearr_50213_50229 = state_50211__$1;
(statearr_50213_50229[(2)] = null);

(statearr_50213_50229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50212 === (2))){
var state_50211__$1 = state_50211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50211__$1,(4),ch);
} else {
if((state_val_50212 === (3))){
var inst_50209 = (state_50211[(2)]);
var state_50211__$1 = state_50211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50211__$1,inst_50209);
} else {
if((state_val_50212 === (4))){
var inst_50199 = (state_50211[(7)]);
var inst_50199__$1 = (state_50211[(2)]);
var state_50211__$1 = (function (){var statearr_50214 = state_50211;
(statearr_50214[(7)] = inst_50199__$1);

return statearr_50214;
})();
if(cljs.core.truth_(inst_50199__$1)){
var statearr_50215_50230 = state_50211__$1;
(statearr_50215_50230[(1)] = (5));

} else {
var statearr_50216_50231 = state_50211__$1;
(statearr_50216_50231[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50212 === (5))){
var inst_50199 = (state_50211[(7)]);
var inst_50201 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_50199);
var state_50211__$1 = state_50211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50211__$1,(8),inst_50201);
} else {
if((state_val_50212 === (6))){
var state_50211__$1 = state_50211;
var statearr_50217_50232 = state_50211__$1;
(statearr_50217_50232[(2)] = null);

(statearr_50217_50232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50212 === (7))){
var inst_50207 = (state_50211[(2)]);
var state_50211__$1 = state_50211;
var statearr_50218_50233 = state_50211__$1;
(statearr_50218_50233[(2)] = inst_50207);

(statearr_50218_50233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50212 === (8))){
var inst_50203 = (state_50211[(2)]);
var state_50211__$1 = (function (){var statearr_50219 = state_50211;
(statearr_50219[(8)] = inst_50203);

return statearr_50219;
})();
var statearr_50220_50234 = state_50211__$1;
(statearr_50220_50234[(2)] = null);

(statearr_50220_50234[(1)] = (2));


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
});})(c__40084__auto___50228,ch))
;
return ((function (switch__39972__auto__,c__40084__auto___50228,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__39973__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__39973__auto____0 = (function (){
var statearr_50224 = [null,null,null,null,null,null,null,null,null];
(statearr_50224[(0)] = figwheel$client$heads_up_plugin_$_state_machine__39973__auto__);

(statearr_50224[(1)] = (1));

return statearr_50224;
});
var figwheel$client$heads_up_plugin_$_state_machine__39973__auto____1 = (function (state_50211){
while(true){
var ret_value__39974__auto__ = (function (){try{while(true){
var result__39975__auto__ = switch__39972__auto__.call(null,state_50211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39975__auto__;
}
break;
}
}catch (e50225){if((e50225 instanceof Object)){
var ex__39976__auto__ = e50225;
var statearr_50226_50235 = state_50211;
(statearr_50226_50235[(5)] = ex__39976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50236 = state_50211;
state_50211 = G__50236;
continue;
} else {
return ret_value__39974__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__39973__auto__ = function(state_50211){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__39973__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__39973__auto____1.call(this,state_50211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__39973__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__39973__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__39973__auto__;
})()
;})(switch__39972__auto__,c__40084__auto___50228,ch))
})();
var state__40086__auto__ = (function (){var statearr_50227 = f__40085__auto__.call(null);
(statearr_50227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40084__auto___50228);

return statearr_50227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40086__auto__);
});})(c__40084__auto___50228,ch))
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
var c__40084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40084__auto__){
return (function (){
var f__40085__auto__ = (function (){var switch__39972__auto__ = ((function (c__40084__auto__){
return (function (state_50257){
var state_val_50258 = (state_50257[(1)]);
if((state_val_50258 === (1))){
var inst_50252 = cljs.core.async.timeout.call(null,(3000));
var state_50257__$1 = state_50257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50257__$1,(2),inst_50252);
} else {
if((state_val_50258 === (2))){
var inst_50254 = (state_50257[(2)]);
var inst_50255 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_50257__$1 = (function (){var statearr_50259 = state_50257;
(statearr_50259[(7)] = inst_50254);

return statearr_50259;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50257__$1,inst_50255);
} else {
return null;
}
}
});})(c__40084__auto__))
;
return ((function (switch__39972__auto__,c__40084__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__39973__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__39973__auto____0 = (function (){
var statearr_50263 = [null,null,null,null,null,null,null,null];
(statearr_50263[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__39973__auto__);

(statearr_50263[(1)] = (1));

return statearr_50263;
});
var figwheel$client$enforce_project_plugin_$_state_machine__39973__auto____1 = (function (state_50257){
while(true){
var ret_value__39974__auto__ = (function (){try{while(true){
var result__39975__auto__ = switch__39972__auto__.call(null,state_50257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39975__auto__;
}
break;
}
}catch (e50264){if((e50264 instanceof Object)){
var ex__39976__auto__ = e50264;
var statearr_50265_50267 = state_50257;
(statearr_50265_50267[(5)] = ex__39976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50268 = state_50257;
state_50257 = G__50268;
continue;
} else {
return ret_value__39974__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__39973__auto__ = function(state_50257){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__39973__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__39973__auto____1.call(this,state_50257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__39973__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__39973__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__39973__auto__;
})()
;})(switch__39972__auto__,c__40084__auto__))
})();
var state__40086__auto__ = (function (){var statearr_50266 = f__40085__auto__.call(null);
(statearr_50266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40084__auto__);

return statearr_50266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40086__auto__);
});})(c__40084__auto__))
);

return c__40084__auto__;
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
var c__40084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40084__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__40085__auto__ = (function (){var switch__39972__auto__ = ((function (c__40084__auto__,figwheel_version,temp__4657__auto__){
return (function (state_50291){
var state_val_50292 = (state_50291[(1)]);
if((state_val_50292 === (1))){
var inst_50285 = cljs.core.async.timeout.call(null,(2000));
var state_50291__$1 = state_50291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50291__$1,(2),inst_50285);
} else {
if((state_val_50292 === (2))){
var inst_50287 = (state_50291[(2)]);
var inst_50288 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_50289 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_50288);
var state_50291__$1 = (function (){var statearr_50293 = state_50291;
(statearr_50293[(7)] = inst_50287);

return statearr_50293;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50291__$1,inst_50289);
} else {
return null;
}
}
});})(c__40084__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__39972__auto__,c__40084__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39973__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39973__auto____0 = (function (){
var statearr_50297 = [null,null,null,null,null,null,null,null];
(statearr_50297[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39973__auto__);

(statearr_50297[(1)] = (1));

return statearr_50297;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39973__auto____1 = (function (state_50291){
while(true){
var ret_value__39974__auto__ = (function (){try{while(true){
var result__39975__auto__ = switch__39972__auto__.call(null,state_50291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39975__auto__;
}
break;
}
}catch (e50298){if((e50298 instanceof Object)){
var ex__39976__auto__ = e50298;
var statearr_50299_50301 = state_50291;
(statearr_50299_50301[(5)] = ex__39976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50302 = state_50291;
state_50291 = G__50302;
continue;
} else {
return ret_value__39974__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39973__auto__ = function(state_50291){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39973__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39973__auto____1.call(this,state_50291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39973__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39973__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39973__auto__;
})()
;})(switch__39972__auto__,c__40084__auto__,figwheel_version,temp__4657__auto__))
})();
var state__40086__auto__ = (function (){var statearr_50300 = f__40085__auto__.call(null);
(statearr_50300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40084__auto__);

return statearr_50300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40086__auto__);
});})(c__40084__auto__,figwheel_version,temp__4657__auto__))
);

return c__40084__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__50303){
var map__50307 = p__50303;
var map__50307__$1 = ((((!((map__50307 == null)))?((((map__50307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50307.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50307):map__50307);
var file = cljs.core.get.call(null,map__50307__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__50307__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__50307__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__50309 = "";
var G__50309__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50309),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__50309);
var G__50309__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50309__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__50309__$1);
if(cljs.core.truth_((function (){var and__33800__auto__ = line;
if(cljs.core.truth_(and__33800__auto__)){
return column;
} else {
return and__33800__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50309__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__50309__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__50310){
var map__50317 = p__50310;
var map__50317__$1 = ((((!((map__50317 == null)))?((((map__50317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50317.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50317):map__50317);
var ed = map__50317__$1;
var formatted_exception = cljs.core.get.call(null,map__50317__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__50317__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__50317__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__50319_50323 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__50320_50324 = null;
var count__50321_50325 = (0);
var i__50322_50326 = (0);
while(true){
if((i__50322_50326 < count__50321_50325)){
var msg_50327 = cljs.core._nth.call(null,chunk__50320_50324,i__50322_50326);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_50327);

var G__50328 = seq__50319_50323;
var G__50329 = chunk__50320_50324;
var G__50330 = count__50321_50325;
var G__50331 = (i__50322_50326 + (1));
seq__50319_50323 = G__50328;
chunk__50320_50324 = G__50329;
count__50321_50325 = G__50330;
i__50322_50326 = G__50331;
continue;
} else {
var temp__4657__auto___50332 = cljs.core.seq.call(null,seq__50319_50323);
if(temp__4657__auto___50332){
var seq__50319_50333__$1 = temp__4657__auto___50332;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50319_50333__$1)){
var c__34631__auto___50334 = cljs.core.chunk_first.call(null,seq__50319_50333__$1);
var G__50335 = cljs.core.chunk_rest.call(null,seq__50319_50333__$1);
var G__50336 = c__34631__auto___50334;
var G__50337 = cljs.core.count.call(null,c__34631__auto___50334);
var G__50338 = (0);
seq__50319_50323 = G__50335;
chunk__50320_50324 = G__50336;
count__50321_50325 = G__50337;
i__50322_50326 = G__50338;
continue;
} else {
var msg_50339 = cljs.core.first.call(null,seq__50319_50333__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_50339);

var G__50340 = cljs.core.next.call(null,seq__50319_50333__$1);
var G__50341 = null;
var G__50342 = (0);
var G__50343 = (0);
seq__50319_50323 = G__50340;
chunk__50320_50324 = G__50341;
count__50321_50325 = G__50342;
i__50322_50326 = G__50343;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__50344){
var map__50347 = p__50344;
var map__50347__$1 = ((((!((map__50347 == null)))?((((map__50347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50347.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50347):map__50347);
var w = map__50347__$1;
var message = cljs.core.get.call(null,map__50347__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__33800__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__33800__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__33800__auto__;
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
var seq__50359 = cljs.core.seq.call(null,plugins);
var chunk__50360 = null;
var count__50361 = (0);
var i__50362 = (0);
while(true){
if((i__50362 < count__50361)){
var vec__50363 = cljs.core._nth.call(null,chunk__50360,i__50362);
var k = cljs.core.nth.call(null,vec__50363,(0),null);
var plugin = cljs.core.nth.call(null,vec__50363,(1),null);
if(cljs.core.truth_(plugin)){
var pl_50369 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__50359,chunk__50360,count__50361,i__50362,pl_50369,vec__50363,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_50369.call(null,msg_hist);
});})(seq__50359,chunk__50360,count__50361,i__50362,pl_50369,vec__50363,k,plugin))
);
} else {
}

var G__50370 = seq__50359;
var G__50371 = chunk__50360;
var G__50372 = count__50361;
var G__50373 = (i__50362 + (1));
seq__50359 = G__50370;
chunk__50360 = G__50371;
count__50361 = G__50372;
i__50362 = G__50373;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__50359);
if(temp__4657__auto__){
var seq__50359__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50359__$1)){
var c__34631__auto__ = cljs.core.chunk_first.call(null,seq__50359__$1);
var G__50374 = cljs.core.chunk_rest.call(null,seq__50359__$1);
var G__50375 = c__34631__auto__;
var G__50376 = cljs.core.count.call(null,c__34631__auto__);
var G__50377 = (0);
seq__50359 = G__50374;
chunk__50360 = G__50375;
count__50361 = G__50376;
i__50362 = G__50377;
continue;
} else {
var vec__50366 = cljs.core.first.call(null,seq__50359__$1);
var k = cljs.core.nth.call(null,vec__50366,(0),null);
var plugin = cljs.core.nth.call(null,vec__50366,(1),null);
if(cljs.core.truth_(plugin)){
var pl_50378 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__50359,chunk__50360,count__50361,i__50362,pl_50378,vec__50366,k,plugin,seq__50359__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_50378.call(null,msg_hist);
});})(seq__50359,chunk__50360,count__50361,i__50362,pl_50378,vec__50366,k,plugin,seq__50359__$1,temp__4657__auto__))
);
} else {
}

var G__50379 = cljs.core.next.call(null,seq__50359__$1);
var G__50380 = null;
var G__50381 = (0);
var G__50382 = (0);
seq__50359 = G__50379;
chunk__50360 = G__50380;
count__50361 = G__50381;
i__50362 = G__50382;
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
var args50383 = [];
var len__34925__auto___50390 = arguments.length;
var i__34926__auto___50391 = (0);
while(true){
if((i__34926__auto___50391 < len__34925__auto___50390)){
args50383.push((arguments[i__34926__auto___50391]));

var G__50392 = (i__34926__auto___50391 + (1));
i__34926__auto___50391 = G__50392;
continue;
} else {
}
break;
}

var G__50385 = args50383.length;
switch (G__50385) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50383.length)].join('')));

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

var seq__50386_50394 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__50387_50395 = null;
var count__50388_50396 = (0);
var i__50389_50397 = (0);
while(true){
if((i__50389_50397 < count__50388_50396)){
var msg_50398 = cljs.core._nth.call(null,chunk__50387_50395,i__50389_50397);
figwheel.client.socket.handle_incoming_message.call(null,msg_50398);

var G__50399 = seq__50386_50394;
var G__50400 = chunk__50387_50395;
var G__50401 = count__50388_50396;
var G__50402 = (i__50389_50397 + (1));
seq__50386_50394 = G__50399;
chunk__50387_50395 = G__50400;
count__50388_50396 = G__50401;
i__50389_50397 = G__50402;
continue;
} else {
var temp__4657__auto___50403 = cljs.core.seq.call(null,seq__50386_50394);
if(temp__4657__auto___50403){
var seq__50386_50404__$1 = temp__4657__auto___50403;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50386_50404__$1)){
var c__34631__auto___50405 = cljs.core.chunk_first.call(null,seq__50386_50404__$1);
var G__50406 = cljs.core.chunk_rest.call(null,seq__50386_50404__$1);
var G__50407 = c__34631__auto___50405;
var G__50408 = cljs.core.count.call(null,c__34631__auto___50405);
var G__50409 = (0);
seq__50386_50394 = G__50406;
chunk__50387_50395 = G__50407;
count__50388_50396 = G__50408;
i__50389_50397 = G__50409;
continue;
} else {
var msg_50410 = cljs.core.first.call(null,seq__50386_50404__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_50410);

var G__50411 = cljs.core.next.call(null,seq__50386_50404__$1);
var G__50412 = null;
var G__50413 = (0);
var G__50414 = (0);
seq__50386_50394 = G__50411;
chunk__50387_50395 = G__50412;
count__50388_50396 = G__50413;
i__50389_50397 = G__50414;
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
var args__34932__auto__ = [];
var len__34925__auto___50419 = arguments.length;
var i__34926__auto___50420 = (0);
while(true){
if((i__34926__auto___50420 < len__34925__auto___50419)){
args__34932__auto__.push((arguments[i__34926__auto___50420]));

var G__50421 = (i__34926__auto___50420 + (1));
i__34926__auto___50420 = G__50421;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((0) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__34933__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__50416){
var map__50417 = p__50416;
var map__50417__$1 = ((((!((map__50417 == null)))?((((map__50417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50417.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50417):map__50417);
var opts = map__50417__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq50415){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50415));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e50423){if((e50423 instanceof Error)){
var e = e50423;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e50423;

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
return (function (p__50427){
var map__50428 = p__50427;
var map__50428__$1 = ((((!((map__50428 == null)))?((((map__50428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50428.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50428):map__50428);
var msg_name = cljs.core.get.call(null,map__50428__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1526470185093