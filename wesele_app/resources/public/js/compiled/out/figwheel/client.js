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
var args64978 = [];
var len__34447__auto___64981 = arguments.length;
var i__34448__auto___64982 = (0);
while(true){
if((i__34448__auto___64982 < len__34447__auto___64981)){
args64978.push((arguments[i__34448__auto___64982]));

var G__64983 = (i__34448__auto___64982 + (1));
i__34448__auto___64982 = G__64983;
continue;
} else {
}
break;
}

var G__64980 = args64978.length;
switch (G__64980) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args64978.length)].join('')));

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
var args__34454__auto__ = [];
var len__34447__auto___64986 = arguments.length;
var i__34448__auto___64987 = (0);
while(true){
if((i__34448__auto___64987 < len__34447__auto___64986)){
args__34454__auto__.push((arguments[i__34448__auto___64987]));

var G__64988 = (i__34448__auto___64987 + (1));
i__34448__auto___64987 = G__64988;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq64985){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64985));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__34454__auto__ = [];
var len__34447__auto___64990 = arguments.length;
var i__34448__auto___64991 = (0);
while(true){
if((i__34448__auto___64991 < len__34447__auto___64990)){
args__34454__auto__.push((arguments[i__34448__auto___64991]));

var G__64992 = (i__34448__auto___64991 + (1));
i__34448__auto___64991 = G__64992;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq64989){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64989));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__64993 = cljs.core._EQ_;
var expr__64994 = (function (){var or__33334__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e64997){if((e64997 instanceof Error)){
var e = e64997;
return false;
} else {
throw e64997;

}
}})();
if(cljs.core.truth_(or__33334__auto__)){
return or__33334__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__64993.call(null,"true",expr__64994))){
return true;
} else {
if(cljs.core.truth_(pred__64993.call(null,"false",expr__64994))){
return false;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__64994)].join('')));
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
}catch (e64999){if((e64999 instanceof Error)){
var e = e64999;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to access localStorage")].join(''));
} else {
throw e64999;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__65000){
var map__65003 = p__65000;
var map__65003__$1 = ((((!((map__65003 == null)))?((((map__65003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65003.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65003):map__65003);
var message = cljs.core.get.call(null,map__65003__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__65003__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__33334__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__33334__auto__)){
return or__33334__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__33322__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__33322__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__33322__auto__;
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
var c__39642__auto___65165 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39642__auto___65165,ch){
return (function (){
var f__39643__auto__ = (function (){var switch__39530__auto__ = ((function (c__39642__auto___65165,ch){
return (function (state_65134){
var state_val_65135 = (state_65134[(1)]);
if((state_val_65135 === (7))){
var inst_65130 = (state_65134[(2)]);
var state_65134__$1 = state_65134;
var statearr_65136_65166 = state_65134__$1;
(statearr_65136_65166[(2)] = inst_65130);

(statearr_65136_65166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65135 === (1))){
var state_65134__$1 = state_65134;
var statearr_65137_65167 = state_65134__$1;
(statearr_65137_65167[(2)] = null);

(statearr_65137_65167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65135 === (4))){
var inst_65087 = (state_65134[(7)]);
var inst_65087__$1 = (state_65134[(2)]);
var state_65134__$1 = (function (){var statearr_65138 = state_65134;
(statearr_65138[(7)] = inst_65087__$1);

return statearr_65138;
})();
if(cljs.core.truth_(inst_65087__$1)){
var statearr_65139_65168 = state_65134__$1;
(statearr_65139_65168[(1)] = (5));

} else {
var statearr_65140_65169 = state_65134__$1;
(statearr_65140_65169[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65135 === (15))){
var inst_65094 = (state_65134[(8)]);
var inst_65109 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_65094);
var inst_65110 = cljs.core.first.call(null,inst_65109);
var inst_65111 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_65110);
var inst_65112 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_65111)].join('');
var inst_65113 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_65112);
var state_65134__$1 = state_65134;
var statearr_65141_65170 = state_65134__$1;
(statearr_65141_65170[(2)] = inst_65113);

(statearr_65141_65170[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65135 === (13))){
var inst_65118 = (state_65134[(2)]);
var state_65134__$1 = state_65134;
var statearr_65142_65171 = state_65134__$1;
(statearr_65142_65171[(2)] = inst_65118);

(statearr_65142_65171[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65135 === (6))){
var state_65134__$1 = state_65134;
var statearr_65143_65172 = state_65134__$1;
(statearr_65143_65172[(2)] = null);

(statearr_65143_65172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65135 === (17))){
var inst_65116 = (state_65134[(2)]);
var state_65134__$1 = state_65134;
var statearr_65144_65173 = state_65134__$1;
(statearr_65144_65173[(2)] = inst_65116);

(statearr_65144_65173[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65135 === (3))){
var inst_65132 = (state_65134[(2)]);
var state_65134__$1 = state_65134;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65134__$1,inst_65132);
} else {
if((state_val_65135 === (12))){
var inst_65093 = (state_65134[(9)]);
var inst_65107 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_65093,opts);
var state_65134__$1 = state_65134;
if(cljs.core.truth_(inst_65107)){
var statearr_65145_65174 = state_65134__$1;
(statearr_65145_65174[(1)] = (15));

} else {
var statearr_65146_65175 = state_65134__$1;
(statearr_65146_65175[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65135 === (2))){
var state_65134__$1 = state_65134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65134__$1,(4),ch);
} else {
if((state_val_65135 === (11))){
var inst_65094 = (state_65134[(8)]);
var inst_65099 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_65100 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_65094);
var inst_65101 = cljs.core.async.timeout.call(null,(1000));
var inst_65102 = [inst_65100,inst_65101];
var inst_65103 = (new cljs.core.PersistentVector(null,2,(5),inst_65099,inst_65102,null));
var state_65134__$1 = state_65134;
return cljs.core.async.ioc_alts_BANG_.call(null,state_65134__$1,(14),inst_65103);
} else {
if((state_val_65135 === (9))){
var inst_65094 = (state_65134[(8)]);
var inst_65120 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_65121 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_65094);
var inst_65122 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_65121);
var inst_65123 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_65122)].join('');
var inst_65124 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_65123);
var state_65134__$1 = (function (){var statearr_65147 = state_65134;
(statearr_65147[(10)] = inst_65120);

return statearr_65147;
})();
var statearr_65148_65176 = state_65134__$1;
(statearr_65148_65176[(2)] = inst_65124);

(statearr_65148_65176[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65135 === (5))){
var inst_65087 = (state_65134[(7)]);
var inst_65089 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_65090 = (new cljs.core.PersistentArrayMap(null,2,inst_65089,null));
var inst_65091 = (new cljs.core.PersistentHashSet(null,inst_65090,null));
var inst_65092 = figwheel.client.focus_msgs.call(null,inst_65091,inst_65087);
var inst_65093 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_65092);
var inst_65094 = cljs.core.first.call(null,inst_65092);
var inst_65095 = figwheel.client.autoload_QMARK_.call(null);
var state_65134__$1 = (function (){var statearr_65149 = state_65134;
(statearr_65149[(9)] = inst_65093);

(statearr_65149[(8)] = inst_65094);

return statearr_65149;
})();
if(cljs.core.truth_(inst_65095)){
var statearr_65150_65177 = state_65134__$1;
(statearr_65150_65177[(1)] = (8));

} else {
var statearr_65151_65178 = state_65134__$1;
(statearr_65151_65178[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65135 === (14))){
var inst_65105 = (state_65134[(2)]);
var state_65134__$1 = state_65134;
var statearr_65152_65179 = state_65134__$1;
(statearr_65152_65179[(2)] = inst_65105);

(statearr_65152_65179[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65135 === (16))){
var state_65134__$1 = state_65134;
var statearr_65153_65180 = state_65134__$1;
(statearr_65153_65180[(2)] = null);

(statearr_65153_65180[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65135 === (10))){
var inst_65126 = (state_65134[(2)]);
var state_65134__$1 = (function (){var statearr_65154 = state_65134;
(statearr_65154[(11)] = inst_65126);

return statearr_65154;
})();
var statearr_65155_65181 = state_65134__$1;
(statearr_65155_65181[(2)] = null);

(statearr_65155_65181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65135 === (8))){
var inst_65093 = (state_65134[(9)]);
var inst_65097 = figwheel.client.reload_file_state_QMARK_.call(null,inst_65093,opts);
var state_65134__$1 = state_65134;
if(cljs.core.truth_(inst_65097)){
var statearr_65156_65182 = state_65134__$1;
(statearr_65156_65182[(1)] = (11));

} else {
var statearr_65157_65183 = state_65134__$1;
(statearr_65157_65183[(1)] = (12));

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
});})(c__39642__auto___65165,ch))
;
return ((function (switch__39530__auto__,c__39642__auto___65165,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__39531__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__39531__auto____0 = (function (){
var statearr_65161 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65161[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__39531__auto__);

(statearr_65161[(1)] = (1));

return statearr_65161;
});
var figwheel$client$file_reloader_plugin_$_state_machine__39531__auto____1 = (function (state_65134){
while(true){
var ret_value__39532__auto__ = (function (){try{while(true){
var result__39533__auto__ = switch__39530__auto__.call(null,state_65134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39533__auto__;
}
break;
}
}catch (e65162){if((e65162 instanceof Object)){
var ex__39534__auto__ = e65162;
var statearr_65163_65184 = state_65134;
(statearr_65163_65184[(5)] = ex__39534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65185 = state_65134;
state_65134 = G__65185;
continue;
} else {
return ret_value__39532__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__39531__auto__ = function(state_65134){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__39531__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__39531__auto____1.call(this,state_65134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__39531__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__39531__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__39531__auto__;
})()
;})(switch__39530__auto__,c__39642__auto___65165,ch))
})();
var state__39644__auto__ = (function (){var statearr_65164 = f__39643__auto__.call(null);
(statearr_65164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39642__auto___65165);

return statearr_65164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39644__auto__);
});})(c__39642__auto___65165,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__65186_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__65186_SHARP_));
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
var base_path_65189 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_65189){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e65188){if((e65188 instanceof Error)){
var e = e65188;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_65189], null));
} else {
var e = e65188;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_65189))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__65190){
var map__65199 = p__65190;
var map__65199__$1 = ((((!((map__65199 == null)))?((((map__65199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65199.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65199):map__65199);
var opts = map__65199__$1;
var build_id = cljs.core.get.call(null,map__65199__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__65199,map__65199__$1,opts,build_id){
return (function (p__65201){
var vec__65202 = p__65201;
var seq__65203 = cljs.core.seq.call(null,vec__65202);
var first__65204 = cljs.core.first.call(null,seq__65203);
var seq__65203__$1 = cljs.core.next.call(null,seq__65203);
var map__65205 = first__65204;
var map__65205__$1 = ((((!((map__65205 == null)))?((((map__65205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65205.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65205):map__65205);
var msg = map__65205__$1;
var msg_name = cljs.core.get.call(null,map__65205__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__65203__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__65202,seq__65203,first__65204,seq__65203__$1,map__65205,map__65205__$1,msg,msg_name,_,map__65199,map__65199__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__65202,seq__65203,first__65204,seq__65203__$1,map__65205,map__65205__$1,msg,msg_name,_,map__65199,map__65199__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__65199,map__65199__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__65213){
var vec__65214 = p__65213;
var seq__65215 = cljs.core.seq.call(null,vec__65214);
var first__65216 = cljs.core.first.call(null,seq__65215);
var seq__65215__$1 = cljs.core.next.call(null,seq__65215);
var map__65217 = first__65216;
var map__65217__$1 = ((((!((map__65217 == null)))?((((map__65217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65217.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65217):map__65217);
var msg = map__65217__$1;
var msg_name = cljs.core.get.call(null,map__65217__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__65215__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__65219){
var map__65231 = p__65219;
var map__65231__$1 = ((((!((map__65231 == null)))?((((map__65231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65231.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65231):map__65231);
var on_compile_warning = cljs.core.get.call(null,map__65231__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__65231__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__65231,map__65231__$1,on_compile_warning,on_compile_fail){
return (function (p__65233){
var vec__65234 = p__65233;
var seq__65235 = cljs.core.seq.call(null,vec__65234);
var first__65236 = cljs.core.first.call(null,seq__65235);
var seq__65235__$1 = cljs.core.next.call(null,seq__65235);
var map__65237 = first__65236;
var map__65237__$1 = ((((!((map__65237 == null)))?((((map__65237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65237.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65237):map__65237);
var msg = map__65237__$1;
var msg_name = cljs.core.get.call(null,map__65237__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__65235__$1;
var pred__65239 = cljs.core._EQ_;
var expr__65240 = msg_name;
if(cljs.core.truth_(pred__65239.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__65240))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__65239.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__65240))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__65231,map__65231__$1,on_compile_warning,on_compile_fail))
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
var c__39642__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39642__auto__,msg_hist,msg_names,msg){
return (function (){
var f__39643__auto__ = (function (){var switch__39530__auto__ = ((function (c__39642__auto__,msg_hist,msg_names,msg){
return (function (state_65468){
var state_val_65469 = (state_65468[(1)]);
if((state_val_65469 === (7))){
var inst_65388 = (state_65468[(2)]);
var state_65468__$1 = state_65468;
if(cljs.core.truth_(inst_65388)){
var statearr_65470_65520 = state_65468__$1;
(statearr_65470_65520[(1)] = (8));

} else {
var statearr_65471_65521 = state_65468__$1;
(statearr_65471_65521[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65469 === (20))){
var inst_65462 = (state_65468[(2)]);
var state_65468__$1 = state_65468;
var statearr_65472_65522 = state_65468__$1;
(statearr_65472_65522[(2)] = inst_65462);

(statearr_65472_65522[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65469 === (27))){
var inst_65458 = (state_65468[(2)]);
var state_65468__$1 = state_65468;
var statearr_65473_65523 = state_65468__$1;
(statearr_65473_65523[(2)] = inst_65458);

(statearr_65473_65523[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65469 === (1))){
var inst_65381 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_65468__$1 = state_65468;
if(cljs.core.truth_(inst_65381)){
var statearr_65474_65524 = state_65468__$1;
(statearr_65474_65524[(1)] = (2));

} else {
var statearr_65475_65525 = state_65468__$1;
(statearr_65475_65525[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65469 === (24))){
var inst_65460 = (state_65468[(2)]);
var state_65468__$1 = state_65468;
var statearr_65476_65526 = state_65468__$1;
(statearr_65476_65526[(2)] = inst_65460);

(statearr_65476_65526[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65469 === (4))){
var inst_65466 = (state_65468[(2)]);
var state_65468__$1 = state_65468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65468__$1,inst_65466);
} else {
if((state_val_65469 === (15))){
var inst_65464 = (state_65468[(2)]);
var state_65468__$1 = state_65468;
var statearr_65477_65527 = state_65468__$1;
(statearr_65477_65527[(2)] = inst_65464);

(statearr_65477_65527[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65469 === (21))){
var inst_65417 = (state_65468[(2)]);
var inst_65418 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_65419 = figwheel.client.auto_jump_to_error.call(null,opts,inst_65418);
var state_65468__$1 = (function (){var statearr_65478 = state_65468;
(statearr_65478[(7)] = inst_65417);

return statearr_65478;
})();
var statearr_65479_65528 = state_65468__$1;
(statearr_65479_65528[(2)] = inst_65419);

(statearr_65479_65528[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65469 === (31))){
var inst_65447 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_65468__$1 = state_65468;
if(cljs.core.truth_(inst_65447)){
var statearr_65480_65529 = state_65468__$1;
(statearr_65480_65529[(1)] = (34));

} else {
var statearr_65481_65530 = state_65468__$1;
(statearr_65481_65530[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65469 === (32))){
var inst_65456 = (state_65468[(2)]);
var state_65468__$1 = state_65468;
var statearr_65482_65531 = state_65468__$1;
(statearr_65482_65531[(2)] = inst_65456);

(statearr_65482_65531[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65469 === (33))){
var inst_65443 = (state_65468[(2)]);
var inst_65444 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_65445 = figwheel.client.auto_jump_to_error.call(null,opts,inst_65444);
var state_65468__$1 = (function (){var statearr_65483 = state_65468;
(statearr_65483[(8)] = inst_65443);

return statearr_65483;
})();
var statearr_65484_65532 = state_65468__$1;
(statearr_65484_65532[(2)] = inst_65445);

(statearr_65484_65532[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65469 === (13))){
var inst_65402 = figwheel.client.heads_up.clear.call(null);
var state_65468__$1 = state_65468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65468__$1,(16),inst_65402);
} else {
if((state_val_65469 === (22))){
var inst_65423 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_65424 = figwheel.client.heads_up.append_warning_message.call(null,inst_65423);
var state_65468__$1 = state_65468;
var statearr_65485_65533 = state_65468__$1;
(statearr_65485_65533[(2)] = inst_65424);

(statearr_65485_65533[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65469 === (36))){
var inst_65454 = (state_65468[(2)]);
var state_65468__$1 = state_65468;
var statearr_65486_65534 = state_65468__$1;
(statearr_65486_65534[(2)] = inst_65454);

(statearr_65486_65534[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65469 === (29))){
var inst_65434 = (state_65468[(2)]);
var inst_65435 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_65436 = figwheel.client.auto_jump_to_error.call(null,opts,inst_65435);
var state_65468__$1 = (function (){var statearr_65487 = state_65468;
(statearr_65487[(9)] = inst_65434);

return statearr_65487;
})();
var statearr_65488_65535 = state_65468__$1;
(statearr_65488_65535[(2)] = inst_65436);

(statearr_65488_65535[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65469 === (6))){
var inst_65383 = (state_65468[(10)]);
var state_65468__$1 = state_65468;
var statearr_65489_65536 = state_65468__$1;
(statearr_65489_65536[(2)] = inst_65383);

(statearr_65489_65536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65469 === (28))){
var inst_65430 = (state_65468[(2)]);
var inst_65431 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_65432 = figwheel.client.heads_up.display_warning.call(null,inst_65431);
var state_65468__$1 = (function (){var statearr_65490 = state_65468;
(statearr_65490[(11)] = inst_65430);

return statearr_65490;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65468__$1,(29),inst_65432);
} else {
if((state_val_65469 === (25))){
var inst_65428 = figwheel.client.heads_up.clear.call(null);
var state_65468__$1 = state_65468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65468__$1,(28),inst_65428);
} else {
if((state_val_65469 === (34))){
var inst_65449 = figwheel.client.heads_up.flash_loaded.call(null);
var state_65468__$1 = state_65468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65468__$1,(37),inst_65449);
} else {
if((state_val_65469 === (17))){
var inst_65408 = (state_65468[(2)]);
var inst_65409 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_65410 = figwheel.client.auto_jump_to_error.call(null,opts,inst_65409);
var state_65468__$1 = (function (){var statearr_65491 = state_65468;
(statearr_65491[(12)] = inst_65408);

return statearr_65491;
})();
var statearr_65492_65537 = state_65468__$1;
(statearr_65492_65537[(2)] = inst_65410);

(statearr_65492_65537[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65469 === (3))){
var inst_65400 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_65468__$1 = state_65468;
if(cljs.core.truth_(inst_65400)){
var statearr_65493_65538 = state_65468__$1;
(statearr_65493_65538[(1)] = (13));

} else {
var statearr_65494_65539 = state_65468__$1;
(statearr_65494_65539[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65469 === (12))){
var inst_65396 = (state_65468[(2)]);
var state_65468__$1 = state_65468;
var statearr_65495_65540 = state_65468__$1;
(statearr_65495_65540[(2)] = inst_65396);

(statearr_65495_65540[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65469 === (2))){
var inst_65383 = (state_65468[(10)]);
var inst_65383__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_65468__$1 = (function (){var statearr_65496 = state_65468;
(statearr_65496[(10)] = inst_65383__$1);

return statearr_65496;
})();
if(cljs.core.truth_(inst_65383__$1)){
var statearr_65497_65541 = state_65468__$1;
(statearr_65497_65541[(1)] = (5));

} else {
var statearr_65498_65542 = state_65468__$1;
(statearr_65498_65542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65469 === (23))){
var inst_65426 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_65468__$1 = state_65468;
if(cljs.core.truth_(inst_65426)){
var statearr_65499_65543 = state_65468__$1;
(statearr_65499_65543[(1)] = (25));

} else {
var statearr_65500_65544 = state_65468__$1;
(statearr_65500_65544[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65469 === (35))){
var state_65468__$1 = state_65468;
var statearr_65501_65545 = state_65468__$1;
(statearr_65501_65545[(2)] = null);

(statearr_65501_65545[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65469 === (19))){
var inst_65421 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_65468__$1 = state_65468;
if(cljs.core.truth_(inst_65421)){
var statearr_65502_65546 = state_65468__$1;
(statearr_65502_65546[(1)] = (22));

} else {
var statearr_65503_65547 = state_65468__$1;
(statearr_65503_65547[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65469 === (11))){
var inst_65392 = (state_65468[(2)]);
var state_65468__$1 = state_65468;
var statearr_65504_65548 = state_65468__$1;
(statearr_65504_65548[(2)] = inst_65392);

(statearr_65504_65548[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65469 === (9))){
var inst_65394 = figwheel.client.heads_up.clear.call(null);
var state_65468__$1 = state_65468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65468__$1,(12),inst_65394);
} else {
if((state_val_65469 === (5))){
var inst_65385 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_65468__$1 = state_65468;
var statearr_65505_65549 = state_65468__$1;
(statearr_65505_65549[(2)] = inst_65385);

(statearr_65505_65549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65469 === (14))){
var inst_65412 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_65468__$1 = state_65468;
if(cljs.core.truth_(inst_65412)){
var statearr_65506_65550 = state_65468__$1;
(statearr_65506_65550[(1)] = (18));

} else {
var statearr_65507_65551 = state_65468__$1;
(statearr_65507_65551[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65469 === (26))){
var inst_65438 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_65468__$1 = state_65468;
if(cljs.core.truth_(inst_65438)){
var statearr_65508_65552 = state_65468__$1;
(statearr_65508_65552[(1)] = (30));

} else {
var statearr_65509_65553 = state_65468__$1;
(statearr_65509_65553[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65469 === (16))){
var inst_65404 = (state_65468[(2)]);
var inst_65405 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_65406 = figwheel.client.heads_up.display_exception.call(null,inst_65405);
var state_65468__$1 = (function (){var statearr_65510 = state_65468;
(statearr_65510[(13)] = inst_65404);

return statearr_65510;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65468__$1,(17),inst_65406);
} else {
if((state_val_65469 === (30))){
var inst_65440 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_65441 = figwheel.client.heads_up.display_warning.call(null,inst_65440);
var state_65468__$1 = state_65468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65468__$1,(33),inst_65441);
} else {
if((state_val_65469 === (10))){
var inst_65398 = (state_65468[(2)]);
var state_65468__$1 = state_65468;
var statearr_65511_65554 = state_65468__$1;
(statearr_65511_65554[(2)] = inst_65398);

(statearr_65511_65554[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65469 === (18))){
var inst_65414 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_65415 = figwheel.client.heads_up.display_exception.call(null,inst_65414);
var state_65468__$1 = state_65468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65468__$1,(21),inst_65415);
} else {
if((state_val_65469 === (37))){
var inst_65451 = (state_65468[(2)]);
var state_65468__$1 = state_65468;
var statearr_65512_65555 = state_65468__$1;
(statearr_65512_65555[(2)] = inst_65451);

(statearr_65512_65555[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65469 === (8))){
var inst_65390 = figwheel.client.heads_up.flash_loaded.call(null);
var state_65468__$1 = state_65468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65468__$1,(11),inst_65390);
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
});})(c__39642__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__39530__auto__,c__39642__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39531__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39531__auto____0 = (function (){
var statearr_65516 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65516[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39531__auto__);

(statearr_65516[(1)] = (1));

return statearr_65516;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39531__auto____1 = (function (state_65468){
while(true){
var ret_value__39532__auto__ = (function (){try{while(true){
var result__39533__auto__ = switch__39530__auto__.call(null,state_65468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39533__auto__;
}
break;
}
}catch (e65517){if((e65517 instanceof Object)){
var ex__39534__auto__ = e65517;
var statearr_65518_65556 = state_65468;
(statearr_65518_65556[(5)] = ex__39534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65557 = state_65468;
state_65468 = G__65557;
continue;
} else {
return ret_value__39532__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39531__auto__ = function(state_65468){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39531__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39531__auto____1.call(this,state_65468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39531__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39531__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39531__auto__;
})()
;})(switch__39530__auto__,c__39642__auto__,msg_hist,msg_names,msg))
})();
var state__39644__auto__ = (function (){var statearr_65519 = f__39643__auto__.call(null);
(statearr_65519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39642__auto__);

return statearr_65519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39644__auto__);
});})(c__39642__auto__,msg_hist,msg_names,msg))
);

return c__39642__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__39642__auto___65620 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39642__auto___65620,ch){
return (function (){
var f__39643__auto__ = (function (){var switch__39530__auto__ = ((function (c__39642__auto___65620,ch){
return (function (state_65603){
var state_val_65604 = (state_65603[(1)]);
if((state_val_65604 === (1))){
var state_65603__$1 = state_65603;
var statearr_65605_65621 = state_65603__$1;
(statearr_65605_65621[(2)] = null);

(statearr_65605_65621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65604 === (2))){
var state_65603__$1 = state_65603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65603__$1,(4),ch);
} else {
if((state_val_65604 === (3))){
var inst_65601 = (state_65603[(2)]);
var state_65603__$1 = state_65603;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65603__$1,inst_65601);
} else {
if((state_val_65604 === (4))){
var inst_65591 = (state_65603[(7)]);
var inst_65591__$1 = (state_65603[(2)]);
var state_65603__$1 = (function (){var statearr_65606 = state_65603;
(statearr_65606[(7)] = inst_65591__$1);

return statearr_65606;
})();
if(cljs.core.truth_(inst_65591__$1)){
var statearr_65607_65622 = state_65603__$1;
(statearr_65607_65622[(1)] = (5));

} else {
var statearr_65608_65623 = state_65603__$1;
(statearr_65608_65623[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65604 === (5))){
var inst_65591 = (state_65603[(7)]);
var inst_65593 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_65591);
var state_65603__$1 = state_65603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65603__$1,(8),inst_65593);
} else {
if((state_val_65604 === (6))){
var state_65603__$1 = state_65603;
var statearr_65609_65624 = state_65603__$1;
(statearr_65609_65624[(2)] = null);

(statearr_65609_65624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65604 === (7))){
var inst_65599 = (state_65603[(2)]);
var state_65603__$1 = state_65603;
var statearr_65610_65625 = state_65603__$1;
(statearr_65610_65625[(2)] = inst_65599);

(statearr_65610_65625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65604 === (8))){
var inst_65595 = (state_65603[(2)]);
var state_65603__$1 = (function (){var statearr_65611 = state_65603;
(statearr_65611[(8)] = inst_65595);

return statearr_65611;
})();
var statearr_65612_65626 = state_65603__$1;
(statearr_65612_65626[(2)] = null);

(statearr_65612_65626[(1)] = (2));


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
});})(c__39642__auto___65620,ch))
;
return ((function (switch__39530__auto__,c__39642__auto___65620,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__39531__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__39531__auto____0 = (function (){
var statearr_65616 = [null,null,null,null,null,null,null,null,null];
(statearr_65616[(0)] = figwheel$client$heads_up_plugin_$_state_machine__39531__auto__);

(statearr_65616[(1)] = (1));

return statearr_65616;
});
var figwheel$client$heads_up_plugin_$_state_machine__39531__auto____1 = (function (state_65603){
while(true){
var ret_value__39532__auto__ = (function (){try{while(true){
var result__39533__auto__ = switch__39530__auto__.call(null,state_65603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39533__auto__;
}
break;
}
}catch (e65617){if((e65617 instanceof Object)){
var ex__39534__auto__ = e65617;
var statearr_65618_65627 = state_65603;
(statearr_65618_65627[(5)] = ex__39534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65628 = state_65603;
state_65603 = G__65628;
continue;
} else {
return ret_value__39532__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__39531__auto__ = function(state_65603){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__39531__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__39531__auto____1.call(this,state_65603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__39531__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__39531__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__39531__auto__;
})()
;})(switch__39530__auto__,c__39642__auto___65620,ch))
})();
var state__39644__auto__ = (function (){var statearr_65619 = f__39643__auto__.call(null);
(statearr_65619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39642__auto___65620);

return statearr_65619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39644__auto__);
});})(c__39642__auto___65620,ch))
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
var c__39642__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39642__auto__){
return (function (){
var f__39643__auto__ = (function (){var switch__39530__auto__ = ((function (c__39642__auto__){
return (function (state_65649){
var state_val_65650 = (state_65649[(1)]);
if((state_val_65650 === (1))){
var inst_65644 = cljs.core.async.timeout.call(null,(3000));
var state_65649__$1 = state_65649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65649__$1,(2),inst_65644);
} else {
if((state_val_65650 === (2))){
var inst_65646 = (state_65649[(2)]);
var inst_65647 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_65649__$1 = (function (){var statearr_65651 = state_65649;
(statearr_65651[(7)] = inst_65646);

return statearr_65651;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65649__$1,inst_65647);
} else {
return null;
}
}
});})(c__39642__auto__))
;
return ((function (switch__39530__auto__,c__39642__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__39531__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__39531__auto____0 = (function (){
var statearr_65655 = [null,null,null,null,null,null,null,null];
(statearr_65655[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__39531__auto__);

(statearr_65655[(1)] = (1));

return statearr_65655;
});
var figwheel$client$enforce_project_plugin_$_state_machine__39531__auto____1 = (function (state_65649){
while(true){
var ret_value__39532__auto__ = (function (){try{while(true){
var result__39533__auto__ = switch__39530__auto__.call(null,state_65649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39533__auto__;
}
break;
}
}catch (e65656){if((e65656 instanceof Object)){
var ex__39534__auto__ = e65656;
var statearr_65657_65659 = state_65649;
(statearr_65657_65659[(5)] = ex__39534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65660 = state_65649;
state_65649 = G__65660;
continue;
} else {
return ret_value__39532__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__39531__auto__ = function(state_65649){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__39531__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__39531__auto____1.call(this,state_65649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__39531__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__39531__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__39531__auto__;
})()
;})(switch__39530__auto__,c__39642__auto__))
})();
var state__39644__auto__ = (function (){var statearr_65658 = f__39643__auto__.call(null);
(statearr_65658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39642__auto__);

return statearr_65658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39644__auto__);
});})(c__39642__auto__))
);

return c__39642__auto__;
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
var c__39642__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39642__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__39643__auto__ = (function (){var switch__39530__auto__ = ((function (c__39642__auto__,figwheel_version,temp__4657__auto__){
return (function (state_65683){
var state_val_65684 = (state_65683[(1)]);
if((state_val_65684 === (1))){
var inst_65677 = cljs.core.async.timeout.call(null,(2000));
var state_65683__$1 = state_65683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65683__$1,(2),inst_65677);
} else {
if((state_val_65684 === (2))){
var inst_65679 = (state_65683[(2)]);
var inst_65680 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_65681 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_65680);
var state_65683__$1 = (function (){var statearr_65685 = state_65683;
(statearr_65685[(7)] = inst_65679);

return statearr_65685;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65683__$1,inst_65681);
} else {
return null;
}
}
});})(c__39642__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__39530__auto__,c__39642__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39531__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39531__auto____0 = (function (){
var statearr_65689 = [null,null,null,null,null,null,null,null];
(statearr_65689[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39531__auto__);

(statearr_65689[(1)] = (1));

return statearr_65689;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39531__auto____1 = (function (state_65683){
while(true){
var ret_value__39532__auto__ = (function (){try{while(true){
var result__39533__auto__ = switch__39530__auto__.call(null,state_65683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39533__auto__;
}
break;
}
}catch (e65690){if((e65690 instanceof Object)){
var ex__39534__auto__ = e65690;
var statearr_65691_65693 = state_65683;
(statearr_65691_65693[(5)] = ex__39534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65694 = state_65683;
state_65683 = G__65694;
continue;
} else {
return ret_value__39532__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39531__auto__ = function(state_65683){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39531__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39531__auto____1.call(this,state_65683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39531__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39531__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39531__auto__;
})()
;})(switch__39530__auto__,c__39642__auto__,figwheel_version,temp__4657__auto__))
})();
var state__39644__auto__ = (function (){var statearr_65692 = f__39643__auto__.call(null);
(statearr_65692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39642__auto__);

return statearr_65692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39644__auto__);
});})(c__39642__auto__,figwheel_version,temp__4657__auto__))
);

return c__39642__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__65695){
var map__65699 = p__65695;
var map__65699__$1 = ((((!((map__65699 == null)))?((((map__65699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65699.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65699):map__65699);
var file = cljs.core.get.call(null,map__65699__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__65699__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__65699__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__65701 = "";
var G__65701__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65701),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__65701);
var G__65701__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65701__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__65701__$1);
if(cljs.core.truth_((function (){var and__33322__auto__ = line;
if(cljs.core.truth_(and__33322__auto__)){
return column;
} else {
return and__33322__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65701__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__65701__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__65702){
var map__65709 = p__65702;
var map__65709__$1 = ((((!((map__65709 == null)))?((((map__65709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65709.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65709):map__65709);
var ed = map__65709__$1;
var formatted_exception = cljs.core.get.call(null,map__65709__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__65709__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__65709__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__65711_65715 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__65712_65716 = null;
var count__65713_65717 = (0);
var i__65714_65718 = (0);
while(true){
if((i__65714_65718 < count__65713_65717)){
var msg_65719 = cljs.core._nth.call(null,chunk__65712_65716,i__65714_65718);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_65719);

var G__65720 = seq__65711_65715;
var G__65721 = chunk__65712_65716;
var G__65722 = count__65713_65717;
var G__65723 = (i__65714_65718 + (1));
seq__65711_65715 = G__65720;
chunk__65712_65716 = G__65721;
count__65713_65717 = G__65722;
i__65714_65718 = G__65723;
continue;
} else {
var temp__4657__auto___65724 = cljs.core.seq.call(null,seq__65711_65715);
if(temp__4657__auto___65724){
var seq__65711_65725__$1 = temp__4657__auto___65724;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65711_65725__$1)){
var c__34153__auto___65726 = cljs.core.chunk_first.call(null,seq__65711_65725__$1);
var G__65727 = cljs.core.chunk_rest.call(null,seq__65711_65725__$1);
var G__65728 = c__34153__auto___65726;
var G__65729 = cljs.core.count.call(null,c__34153__auto___65726);
var G__65730 = (0);
seq__65711_65715 = G__65727;
chunk__65712_65716 = G__65728;
count__65713_65717 = G__65729;
i__65714_65718 = G__65730;
continue;
} else {
var msg_65731 = cljs.core.first.call(null,seq__65711_65725__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_65731);

var G__65732 = cljs.core.next.call(null,seq__65711_65725__$1);
var G__65733 = null;
var G__65734 = (0);
var G__65735 = (0);
seq__65711_65715 = G__65732;
chunk__65712_65716 = G__65733;
count__65713_65717 = G__65734;
i__65714_65718 = G__65735;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__65736){
var map__65739 = p__65736;
var map__65739__$1 = ((((!((map__65739 == null)))?((((map__65739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65739.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65739):map__65739);
var w = map__65739__$1;
var message = cljs.core.get.call(null,map__65739__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__33322__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__33322__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__33322__auto__;
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
var seq__65751 = cljs.core.seq.call(null,plugins);
var chunk__65752 = null;
var count__65753 = (0);
var i__65754 = (0);
while(true){
if((i__65754 < count__65753)){
var vec__65755 = cljs.core._nth.call(null,chunk__65752,i__65754);
var k = cljs.core.nth.call(null,vec__65755,(0),null);
var plugin = cljs.core.nth.call(null,vec__65755,(1),null);
if(cljs.core.truth_(plugin)){
var pl_65761 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__65751,chunk__65752,count__65753,i__65754,pl_65761,vec__65755,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_65761.call(null,msg_hist);
});})(seq__65751,chunk__65752,count__65753,i__65754,pl_65761,vec__65755,k,plugin))
);
} else {
}

var G__65762 = seq__65751;
var G__65763 = chunk__65752;
var G__65764 = count__65753;
var G__65765 = (i__65754 + (1));
seq__65751 = G__65762;
chunk__65752 = G__65763;
count__65753 = G__65764;
i__65754 = G__65765;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__65751);
if(temp__4657__auto__){
var seq__65751__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65751__$1)){
var c__34153__auto__ = cljs.core.chunk_first.call(null,seq__65751__$1);
var G__65766 = cljs.core.chunk_rest.call(null,seq__65751__$1);
var G__65767 = c__34153__auto__;
var G__65768 = cljs.core.count.call(null,c__34153__auto__);
var G__65769 = (0);
seq__65751 = G__65766;
chunk__65752 = G__65767;
count__65753 = G__65768;
i__65754 = G__65769;
continue;
} else {
var vec__65758 = cljs.core.first.call(null,seq__65751__$1);
var k = cljs.core.nth.call(null,vec__65758,(0),null);
var plugin = cljs.core.nth.call(null,vec__65758,(1),null);
if(cljs.core.truth_(plugin)){
var pl_65770 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__65751,chunk__65752,count__65753,i__65754,pl_65770,vec__65758,k,plugin,seq__65751__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_65770.call(null,msg_hist);
});})(seq__65751,chunk__65752,count__65753,i__65754,pl_65770,vec__65758,k,plugin,seq__65751__$1,temp__4657__auto__))
);
} else {
}

var G__65771 = cljs.core.next.call(null,seq__65751__$1);
var G__65772 = null;
var G__65773 = (0);
var G__65774 = (0);
seq__65751 = G__65771;
chunk__65752 = G__65772;
count__65753 = G__65773;
i__65754 = G__65774;
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
var args65775 = [];
var len__34447__auto___65782 = arguments.length;
var i__34448__auto___65783 = (0);
while(true){
if((i__34448__auto___65783 < len__34447__auto___65782)){
args65775.push((arguments[i__34448__auto___65783]));

var G__65784 = (i__34448__auto___65783 + (1));
i__34448__auto___65783 = G__65784;
continue;
} else {
}
break;
}

var G__65777 = args65775.length;
switch (G__65777) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args65775.length)].join('')));

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

var seq__65778_65786 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__65779_65787 = null;
var count__65780_65788 = (0);
var i__65781_65789 = (0);
while(true){
if((i__65781_65789 < count__65780_65788)){
var msg_65790 = cljs.core._nth.call(null,chunk__65779_65787,i__65781_65789);
figwheel.client.socket.handle_incoming_message.call(null,msg_65790);

var G__65791 = seq__65778_65786;
var G__65792 = chunk__65779_65787;
var G__65793 = count__65780_65788;
var G__65794 = (i__65781_65789 + (1));
seq__65778_65786 = G__65791;
chunk__65779_65787 = G__65792;
count__65780_65788 = G__65793;
i__65781_65789 = G__65794;
continue;
} else {
var temp__4657__auto___65795 = cljs.core.seq.call(null,seq__65778_65786);
if(temp__4657__auto___65795){
var seq__65778_65796__$1 = temp__4657__auto___65795;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65778_65796__$1)){
var c__34153__auto___65797 = cljs.core.chunk_first.call(null,seq__65778_65796__$1);
var G__65798 = cljs.core.chunk_rest.call(null,seq__65778_65796__$1);
var G__65799 = c__34153__auto___65797;
var G__65800 = cljs.core.count.call(null,c__34153__auto___65797);
var G__65801 = (0);
seq__65778_65786 = G__65798;
chunk__65779_65787 = G__65799;
count__65780_65788 = G__65800;
i__65781_65789 = G__65801;
continue;
} else {
var msg_65802 = cljs.core.first.call(null,seq__65778_65796__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_65802);

var G__65803 = cljs.core.next.call(null,seq__65778_65796__$1);
var G__65804 = null;
var G__65805 = (0);
var G__65806 = (0);
seq__65778_65786 = G__65803;
chunk__65779_65787 = G__65804;
count__65780_65788 = G__65805;
i__65781_65789 = G__65806;
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
var args__34454__auto__ = [];
var len__34447__auto___65811 = arguments.length;
var i__34448__auto___65812 = (0);
while(true){
if((i__34448__auto___65812 < len__34447__auto___65811)){
args__34454__auto__.push((arguments[i__34448__auto___65812]));

var G__65813 = (i__34448__auto___65812 + (1));
i__34448__auto___65812 = G__65813;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((0) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__34455__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__65808){
var map__65809 = p__65808;
var map__65809__$1 = ((((!((map__65809 == null)))?((((map__65809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65809.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65809):map__65809);
var opts = map__65809__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq65807){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65807));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e65815){if((e65815 instanceof Error)){
var e = e65815;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e65815;

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
return (function (p__65819){
var map__65820 = p__65819;
var map__65820__$1 = ((((!((map__65820 == null)))?((((map__65820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65820.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65820):map__65820);
var msg_name = cljs.core.get.call(null,map__65820__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1510317563067