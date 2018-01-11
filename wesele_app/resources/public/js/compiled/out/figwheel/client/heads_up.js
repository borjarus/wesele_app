// Compiled by ClojureScript 1.9.494 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('cljs.pprint');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__40602__auto__ = [];
var len__40595__auto___49406 = arguments.length;
var i__40596__auto___49407 = (0);
while(true){
if((i__40596__auto___49407 < len__40595__auto___49406)){
args__40602__auto__.push((arguments[i__40596__auto___49407]));

var G__49408 = (i__40596__auto___49407 + (1));
i__40596__auto___49407 = G__49408;
continue;
} else {
}
break;
}

var argseq__40603__auto__ = ((((2) < args__40602__auto__.length))?(new cljs.core.IndexedSeq(args__40602__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__40603__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__49398_49409 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__49399_49410 = null;
var count__49400_49411 = (0);
var i__49401_49412 = (0);
while(true){
if((i__49401_49412 < count__49400_49411)){
var k_49413 = cljs.core._nth.call(null,chunk__49399_49410,i__49401_49412);
e.setAttribute(cljs.core.name.call(null,k_49413),cljs.core.get.call(null,attrs,k_49413));

var G__49414 = seq__49398_49409;
var G__49415 = chunk__49399_49410;
var G__49416 = count__49400_49411;
var G__49417 = (i__49401_49412 + (1));
seq__49398_49409 = G__49414;
chunk__49399_49410 = G__49415;
count__49400_49411 = G__49416;
i__49401_49412 = G__49417;
continue;
} else {
var temp__4657__auto___49418 = cljs.core.seq.call(null,seq__49398_49409);
if(temp__4657__auto___49418){
var seq__49398_49419__$1 = temp__4657__auto___49418;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49398_49419__$1)){
var c__40301__auto___49420 = cljs.core.chunk_first.call(null,seq__49398_49419__$1);
var G__49421 = cljs.core.chunk_rest.call(null,seq__49398_49419__$1);
var G__49422 = c__40301__auto___49420;
var G__49423 = cljs.core.count.call(null,c__40301__auto___49420);
var G__49424 = (0);
seq__49398_49409 = G__49421;
chunk__49399_49410 = G__49422;
count__49400_49411 = G__49423;
i__49401_49412 = G__49424;
continue;
} else {
var k_49425 = cljs.core.first.call(null,seq__49398_49419__$1);
e.setAttribute(cljs.core.name.call(null,k_49425),cljs.core.get.call(null,attrs,k_49425));

var G__49426 = cljs.core.next.call(null,seq__49398_49419__$1);
var G__49427 = null;
var G__49428 = (0);
var G__49429 = (0);
seq__49398_49409 = G__49426;
chunk__49399_49410 = G__49427;
count__49400_49411 = G__49428;
i__49401_49412 = G__49429;
continue;
}
} else {
}
}
break;
}

var seq__49402_49430 = cljs.core.seq.call(null,children);
var chunk__49403_49431 = null;
var count__49404_49432 = (0);
var i__49405_49433 = (0);
while(true){
if((i__49405_49433 < count__49404_49432)){
var ch_49434 = cljs.core._nth.call(null,chunk__49403_49431,i__49405_49433);
e.appendChild(ch_49434);

var G__49435 = seq__49402_49430;
var G__49436 = chunk__49403_49431;
var G__49437 = count__49404_49432;
var G__49438 = (i__49405_49433 + (1));
seq__49402_49430 = G__49435;
chunk__49403_49431 = G__49436;
count__49404_49432 = G__49437;
i__49405_49433 = G__49438;
continue;
} else {
var temp__4657__auto___49439 = cljs.core.seq.call(null,seq__49402_49430);
if(temp__4657__auto___49439){
var seq__49402_49440__$1 = temp__4657__auto___49439;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49402_49440__$1)){
var c__40301__auto___49441 = cljs.core.chunk_first.call(null,seq__49402_49440__$1);
var G__49442 = cljs.core.chunk_rest.call(null,seq__49402_49440__$1);
var G__49443 = c__40301__auto___49441;
var G__49444 = cljs.core.count.call(null,c__40301__auto___49441);
var G__49445 = (0);
seq__49402_49430 = G__49442;
chunk__49403_49431 = G__49443;
count__49404_49432 = G__49444;
i__49405_49433 = G__49445;
continue;
} else {
var ch_49446 = cljs.core.first.call(null,seq__49402_49440__$1);
e.appendChild(ch_49446);

var G__49447 = cljs.core.next.call(null,seq__49402_49440__$1);
var G__49448 = null;
var G__49449 = (0);
var G__49450 = (0);
seq__49402_49430 = G__49447;
chunk__49403_49431 = G__49448;
count__49404_49432 = G__49449;
i__49405_49433 = G__49450;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq49395){
var G__49396 = cljs.core.first.call(null,seq49395);
var seq49395__$1 = cljs.core.next.call(null,seq49395);
var G__49397 = cljs.core.first.call(null,seq49395__$1);
var seq49395__$2 = cljs.core.next.call(null,seq49395__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__49396,G__49397,seq49395__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__40415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__40416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__40417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__40418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__40419__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__40415__auto__,prefer_table__40416__auto__,method_cache__40417__auto__,cached_hierarchy__40418__auto__,hierarchy__40419__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__40415__auto__,prefer_table__40416__auto__,method_cache__40417__auto__,cached_hierarchy__40418__auto__,hierarchy__40419__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__40419__auto__,method_table__40415__auto__,prefer_table__40416__auto__,method_cache__40417__auto__,cached_hierarchy__40418__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cont_id)].join('')))){
var el_49451 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-o-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("border-top: 1px solid #f5f5f5;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: #333;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: monospace;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding: 0px 10px 0px 70px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: fixed;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("bottom: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("left: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("opacity: 0.0;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-sizing: border-box;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("z-index: 10000;")].join('')], null));
el_49451.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_49451.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_49451.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_49451);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__49452,st_map){
var map__49459 = p__49452;
var map__49459__$1 = ((((!((map__49459 == null)))?((((map__49459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49459.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49459):map__49459);
var container_el = cljs.core.get.call(null,map__49459__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__49459,map__49459__$1,container_el){
return (function (p__49461){
var vec__49462 = p__49461;
var k = cljs.core.nth.call(null,vec__49462,(0),null);
var v = cljs.core.nth.call(null,vec__49462,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__49459,map__49459__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__49465,dom_str){
var map__49468 = p__49465;
var map__49468__$1 = ((((!((map__49468 == null)))?((((map__49468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49468.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49468):map__49468);
var c = map__49468__$1;
var content_area_el = cljs.core.get.call(null,map__49468__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__49470){
var map__49473 = p__49470;
var map__49473__$1 = ((((!((map__49473 == null)))?((((map__49473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49473.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49473):map__49473);
var content_area_el = cljs.core.get.call(null,map__49473__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<a style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("float: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-decoration: none;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: rgba(84,84,84, 0.5);"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("x"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__43194__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43194__auto__){
return (function (){
var f__43195__auto__ = (function (){var switch__43138__auto__ = ((function (c__43194__auto__){
return (function (state_49516){
var state_val_49517 = (state_49516[(1)]);
if((state_val_49517 === (1))){
var inst_49501 = (state_49516[(7)]);
var inst_49501__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_49502 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_49503 = ["10px","10px","100%","68px","1.0"];
var inst_49504 = cljs.core.PersistentHashMap.fromArrays(inst_49502,inst_49503);
var inst_49505 = cljs.core.merge.call(null,inst_49504,style);
var inst_49506 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_49501__$1,inst_49505);
var inst_49507 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_49501__$1,msg);
var inst_49508 = cljs.core.async.timeout.call(null,(300));
var state_49516__$1 = (function (){var statearr_49518 = state_49516;
(statearr_49518[(7)] = inst_49501__$1);

(statearr_49518[(8)] = inst_49506);

(statearr_49518[(9)] = inst_49507);

return statearr_49518;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49516__$1,(2),inst_49508);
} else {
if((state_val_49517 === (2))){
var inst_49501 = (state_49516[(7)]);
var inst_49510 = (state_49516[(2)]);
var inst_49511 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_49512 = ["auto"];
var inst_49513 = cljs.core.PersistentHashMap.fromArrays(inst_49511,inst_49512);
var inst_49514 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_49501,inst_49513);
var state_49516__$1 = (function (){var statearr_49519 = state_49516;
(statearr_49519[(10)] = inst_49510);

return statearr_49519;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49516__$1,inst_49514);
} else {
return null;
}
}
});})(c__43194__auto__))
;
return ((function (switch__43138__auto__,c__43194__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__43139__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__43139__auto____0 = (function (){
var statearr_49523 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49523[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__43139__auto__);

(statearr_49523[(1)] = (1));

return statearr_49523;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__43139__auto____1 = (function (state_49516){
while(true){
var ret_value__43140__auto__ = (function (){try{while(true){
var result__43141__auto__ = switch__43138__auto__.call(null,state_49516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43141__auto__;
}
break;
}
}catch (e49524){if((e49524 instanceof Object)){
var ex__43142__auto__ = e49524;
var statearr_49525_49527 = state_49516;
(statearr_49525_49527[(5)] = ex__43142__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49528 = state_49516;
state_49516 = G__49528;
continue;
} else {
return ret_value__43140__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__43139__auto__ = function(state_49516){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__43139__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__43139__auto____1.call(this,state_49516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__43139__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__43139__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__43139__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__43139__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__43139__auto__;
})()
;})(switch__43138__auto__,c__43194__auto__))
})();
var state__43196__auto__ = (function (){var statearr_49526 = f__43195__auto__.call(null);
(statearr_49526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43194__auto__);

return statearr_49526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43196__auto__);
});})(c__43194__auto__))
);

return c__43194__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var args49529 = [];
var len__40595__auto___49532 = arguments.length;
var i__40596__auto___49533 = (0);
while(true){
if((i__40596__auto___49533 < len__40595__auto___49532)){
args49529.push((arguments[i__40596__auto___49533]));

var G__49534 = (i__40596__auto___49533 + (1));
i__40596__auto___49533 = G__49534;
continue;
} else {
}
break;
}

var G__49531 = args49529.length;
switch (G__49531) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49529.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 26px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 26px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin-bottom: 2px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding-top: 1px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" <span style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("display: inline-block;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_head),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span></div>")].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" data-file-line=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" data-file-column=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__49536){
var map__49539 = p__49536;
var map__49539__$1 = ((((!((map__49539 == null)))?((((map__49539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49539.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49539):map__49539);
var file = cljs.core.get.call(null,map__49539__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__49539__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__49539__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__39482__auto__ = file;
if(cljs.core.truth_(or__39482__auto__)){
return or__39482__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(style),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style='color: #757575;'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("  </span>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,line)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__49541){
var vec__49548 = p__49541;
var typ = cljs.core.nth.call(null,vec__49548,(0),null);
var line_number = cljs.core.nth.call(null,vec__49548,(1),null);
var line = cljs.core.nth.call(null,vec__49548,(2),null);
var pred__49551 = cljs.core._EQ_;
var expr__49552 = typ;
if(cljs.core.truth_(pred__49551.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__49552))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__49551.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__49552))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__49551.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__49552))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error)))].join(''));
return cljs.core.map.call(null,((function (max_line_number_length){
return (function (p1__49554_SHARP_){
return cljs.core.update_in.call(null,p1__49554_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<pre style='whitespace:pre; overflow-x: scroll; font-family:monospace; font-size:0.8em; border-radius: 3px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</pre>")].join('');
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__49557){
var map__49560 = p__49557;
var map__49560__$1 = ((((!((map__49560 == null)))?((((map__49560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49560.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49560):map__49560);
var exception = map__49560__$1;
var failed_compiling = cljs.core.get.call(null,map__49560__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var reader_exception = cljs.core.get.call(null,map__49560__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var analysis_exception = cljs.core.get.call(null,map__49560__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var class$ = cljs.core.get.call(null,map__49560__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var file = cljs.core.get.call(null,map__49560__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__49560__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__49560__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__49560__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__49560__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__39470__auto__ = file;
if(cljs.core.truth_(and__39470__auto__)){
return line;
} else {
return and__39470__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__49560,map__49560__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message,error_inline){
return (function (p1__49555_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__49555_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(last_message,map__49560,map__49560__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message,error_inline))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(class$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,class$)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": ")].join(''):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style=\"font-weight:bold;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join(''),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__49560,map__49560__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message,error_inline){
return (function (p1__49556_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__49556_SHARP_))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__49556_SHARP_)))].join('');
});})(last_message,map__49560,map__49560__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message,error_inline))
,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception)))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"color: #AD4F4F; padding-top: 3px;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__49562){
var map__49565 = p__49562;
var map__49565__$1 = ((((!((map__49565 == null)))?((((map__49565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49565.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49565):map__49565);
var file = cljs.core.get.call(null,map__49565__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__49565__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__49565__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),new cljs.core.Keyword(null,"file-column","file-column",1543934780),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('')], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__49570 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__49570__$1 = ((((!((map__49570 == null)))?((((map__49570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49570.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49570):map__49570);
var head = cljs.core.get.call(null,map__49570__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__49570__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__49570__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__49570__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__49570__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__49570__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__49570__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__49573){
var map__49576 = p__49573;
var map__49576__$1 = ((((!((map__49576 == null)))?((((map__49576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49576.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49576):map__49576);
var warning_data = map__49576__$1;
var file = cljs.core.get.call(null,map__49576__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__49576__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__49576__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__49576__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__49576__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__39470__auto__ = file;
if(cljs.core.truth_(and__39470__auto__)){
return line;
} else {
return and__39470__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__49576,map__49576__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__49572_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__49572_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(last_message,map__49576,map__49576__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style=\"font-weight:bold;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__49580 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__49580__$1 = ((((!((map__49580 == null)))?((((map__49580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49580.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49580):map__49580);
var head = cljs.core.get.call(null,map__49580__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__49580__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__49580__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__49580__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__49580__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__49580__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__49580__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__49582){
var map__49586 = p__49582;
var map__49586__$1 = ((((!((map__49586 == null)))?((((map__49586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49586.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49586):map__49586);
var warning_data = map__49586__$1;
var message = cljs.core.get.call(null,map__49586__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__49586__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__49586__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__49586__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__49588 = message;
var G__49588__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49588),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__49588);
var G__49588__$2 = (cljs.core.truth_((function (){var and__39470__auto__ = line;
if(cljs.core.truth_(and__39470__auto__)){
return column;
} else {
return and__39470__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49588__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__49588__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49588__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__49588__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__49589){
var map__49594 = p__49589;
var map__49594__$1 = ((((!((map__49594 == null)))?((((map__49594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49594.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49594):map__49594);
var warning_data = map__49594__$1;
var message = cljs.core.get.call(null,map__49594__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__49594__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__49594__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__49594__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__49596 = figwheel.client.heads_up.ensure_container.call(null);
var map__49596__$1 = ((((!((map__49596 == null)))?((((map__49596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49596.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49596):map__49596);
var content_area_el = cljs.core.get.call(null,map__49596__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
el.innerHTML = figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data);

return goog.dom.append(content_area_el,el);
} else {
var temp__4657__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__4657__auto__)){
var last_child = temp__4657__auto__;
var temp__4655__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__4655__auto__)){
var message_count = temp__4655__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return last_child.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message_count__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" more warnings have not been displayed ...")].join('');
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__43194__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43194__auto__){
return (function (){
var f__43195__auto__ = (function (){var switch__43138__auto__ = ((function (c__43194__auto__){
return (function (state_49644){
var state_val_49645 = (state_49644[(1)]);
if((state_val_49645 === (1))){
var inst_49627 = (state_49644[(7)]);
var inst_49627__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_49628 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_49629 = ["0.0"];
var inst_49630 = cljs.core.PersistentHashMap.fromArrays(inst_49628,inst_49629);
var inst_49631 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_49627__$1,inst_49630);
var inst_49632 = cljs.core.async.timeout.call(null,(300));
var state_49644__$1 = (function (){var statearr_49646 = state_49644;
(statearr_49646[(8)] = inst_49631);

(statearr_49646[(7)] = inst_49627__$1);

return statearr_49646;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49644__$1,(2),inst_49632);
} else {
if((state_val_49645 === (2))){
var inst_49627 = (state_49644[(7)]);
var inst_49634 = (state_49644[(2)]);
var inst_49635 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_49636 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_49637 = cljs.core.PersistentHashMap.fromArrays(inst_49635,inst_49636);
var inst_49638 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_49627,inst_49637);
var inst_49639 = cljs.core.async.timeout.call(null,(200));
var state_49644__$1 = (function (){var statearr_49647 = state_49644;
(statearr_49647[(9)] = inst_49638);

(statearr_49647[(10)] = inst_49634);

return statearr_49647;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49644__$1,(3),inst_49639);
} else {
if((state_val_49645 === (3))){
var inst_49627 = (state_49644[(7)]);
var inst_49641 = (state_49644[(2)]);
var inst_49642 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_49627,"");
var state_49644__$1 = (function (){var statearr_49648 = state_49644;
(statearr_49648[(11)] = inst_49641);

return statearr_49648;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49644__$1,inst_49642);
} else {
return null;
}
}
}
});})(c__43194__auto__))
;
return ((function (switch__43138__auto__,c__43194__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__43139__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__43139__auto____0 = (function (){
var statearr_49652 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49652[(0)] = figwheel$client$heads_up$clear_$_state_machine__43139__auto__);

(statearr_49652[(1)] = (1));

return statearr_49652;
});
var figwheel$client$heads_up$clear_$_state_machine__43139__auto____1 = (function (state_49644){
while(true){
var ret_value__43140__auto__ = (function (){try{while(true){
var result__43141__auto__ = switch__43138__auto__.call(null,state_49644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43141__auto__;
}
break;
}
}catch (e49653){if((e49653 instanceof Object)){
var ex__43142__auto__ = e49653;
var statearr_49654_49656 = state_49644;
(statearr_49654_49656[(5)] = ex__43142__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49657 = state_49644;
state_49644 = G__49657;
continue;
} else {
return ret_value__43140__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__43139__auto__ = function(state_49644){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__43139__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__43139__auto____1.call(this,state_49644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__43139__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__43139__auto____0;
figwheel$client$heads_up$clear_$_state_machine__43139__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__43139__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__43139__auto__;
})()
;})(switch__43138__auto__,c__43194__auto__))
})();
var state__43196__auto__ = (function (){var statearr_49655 = f__43195__auto__.call(null);
(statearr_49655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43194__auto__);

return statearr_49655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43196__auto__);
});})(c__43194__auto__))
);

return c__43194__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__43194__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43194__auto__){
return (function (){
var f__43195__auto__ = (function (){var switch__43138__auto__ = ((function (c__43194__auto__){
return (function (state_49689){
var state_val_49690 = (state_49689[(1)]);
if((state_val_49690 === (1))){
var inst_49679 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_49689__$1 = state_49689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49689__$1,(2),inst_49679);
} else {
if((state_val_49690 === (2))){
var inst_49681 = (state_49689[(2)]);
var inst_49682 = cljs.core.async.timeout.call(null,(400));
var state_49689__$1 = (function (){var statearr_49691 = state_49689;
(statearr_49691[(7)] = inst_49681);

return statearr_49691;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49689__$1,(3),inst_49682);
} else {
if((state_val_49690 === (3))){
var inst_49684 = (state_49689[(2)]);
var inst_49685 = figwheel.client.heads_up.clear.call(null);
var state_49689__$1 = (function (){var statearr_49692 = state_49689;
(statearr_49692[(8)] = inst_49684);

return statearr_49692;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49689__$1,(4),inst_49685);
} else {
if((state_val_49690 === (4))){
var inst_49687 = (state_49689[(2)]);
var state_49689__$1 = state_49689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49689__$1,inst_49687);
} else {
return null;
}
}
}
}
});})(c__43194__auto__))
;
return ((function (switch__43138__auto__,c__43194__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__43139__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__43139__auto____0 = (function (){
var statearr_49696 = [null,null,null,null,null,null,null,null,null];
(statearr_49696[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__43139__auto__);

(statearr_49696[(1)] = (1));

return statearr_49696;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__43139__auto____1 = (function (state_49689){
while(true){
var ret_value__43140__auto__ = (function (){try{while(true){
var result__43141__auto__ = switch__43138__auto__.call(null,state_49689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43141__auto__;
}
break;
}
}catch (e49697){if((e49697 instanceof Object)){
var ex__43142__auto__ = e49697;
var statearr_49698_49700 = state_49689;
(statearr_49698_49700[(5)] = ex__43142__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49701 = state_49689;
state_49689 = G__49701;
continue;
} else {
return ret_value__43140__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__43139__auto__ = function(state_49689){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__43139__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__43139__auto____1.call(this,state_49689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__43139__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__43139__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__43139__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__43139__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__43139__auto__;
})()
;})(switch__43138__auto__,c__43194__auto__))
})();
var state__43196__auto__ = (function (){var statearr_49699 = f__43195__auto__.call(null);
(statearr_49699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43194__auto__);

return statearr_49699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43196__auto__);
});})(c__43194__auto__))
);

return c__43194__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__4657__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__4657__auto__)){
var el = temp__4657__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("background-color: rgba(24, 26, 38, 0.95);"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: absolute;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("z-index: 9000;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 100vw;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 100vh;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("top: 0px; left: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: monospace")].join('')}),goog.dom.createDom("div",({"class": "message", "style": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: #FFF5DB;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 100vw;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin: auto;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin-top: 10px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: center; "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding: 2px 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: relative")].join('')}),goog.dom.createDom("a",({"onclick": ((function (body){
return (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
});})(body))
, "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map?rel=1515676062458