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
var args__34932__auto__ = [];
var len__34925__auto___49288 = arguments.length;
var i__34926__auto___49289 = (0);
while(true){
if((i__34926__auto___49289 < len__34925__auto___49288)){
args__34932__auto__.push((arguments[i__34926__auto___49289]));

var G__49290 = (i__34926__auto___49289 + (1));
i__34926__auto___49289 = G__49290;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((2) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__34933__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__49280_49291 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__49281_49292 = null;
var count__49282_49293 = (0);
var i__49283_49294 = (0);
while(true){
if((i__49283_49294 < count__49282_49293)){
var k_49295 = cljs.core._nth.call(null,chunk__49281_49292,i__49283_49294);
e.setAttribute(cljs.core.name.call(null,k_49295),cljs.core.get.call(null,attrs,k_49295));

var G__49296 = seq__49280_49291;
var G__49297 = chunk__49281_49292;
var G__49298 = count__49282_49293;
var G__49299 = (i__49283_49294 + (1));
seq__49280_49291 = G__49296;
chunk__49281_49292 = G__49297;
count__49282_49293 = G__49298;
i__49283_49294 = G__49299;
continue;
} else {
var temp__4657__auto___49300 = cljs.core.seq.call(null,seq__49280_49291);
if(temp__4657__auto___49300){
var seq__49280_49301__$1 = temp__4657__auto___49300;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49280_49301__$1)){
var c__34631__auto___49302 = cljs.core.chunk_first.call(null,seq__49280_49301__$1);
var G__49303 = cljs.core.chunk_rest.call(null,seq__49280_49301__$1);
var G__49304 = c__34631__auto___49302;
var G__49305 = cljs.core.count.call(null,c__34631__auto___49302);
var G__49306 = (0);
seq__49280_49291 = G__49303;
chunk__49281_49292 = G__49304;
count__49282_49293 = G__49305;
i__49283_49294 = G__49306;
continue;
} else {
var k_49307 = cljs.core.first.call(null,seq__49280_49301__$1);
e.setAttribute(cljs.core.name.call(null,k_49307),cljs.core.get.call(null,attrs,k_49307));

var G__49308 = cljs.core.next.call(null,seq__49280_49301__$1);
var G__49309 = null;
var G__49310 = (0);
var G__49311 = (0);
seq__49280_49291 = G__49308;
chunk__49281_49292 = G__49309;
count__49282_49293 = G__49310;
i__49283_49294 = G__49311;
continue;
}
} else {
}
}
break;
}

var seq__49284_49312 = cljs.core.seq.call(null,children);
var chunk__49285_49313 = null;
var count__49286_49314 = (0);
var i__49287_49315 = (0);
while(true){
if((i__49287_49315 < count__49286_49314)){
var ch_49316 = cljs.core._nth.call(null,chunk__49285_49313,i__49287_49315);
e.appendChild(ch_49316);

var G__49317 = seq__49284_49312;
var G__49318 = chunk__49285_49313;
var G__49319 = count__49286_49314;
var G__49320 = (i__49287_49315 + (1));
seq__49284_49312 = G__49317;
chunk__49285_49313 = G__49318;
count__49286_49314 = G__49319;
i__49287_49315 = G__49320;
continue;
} else {
var temp__4657__auto___49321 = cljs.core.seq.call(null,seq__49284_49312);
if(temp__4657__auto___49321){
var seq__49284_49322__$1 = temp__4657__auto___49321;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49284_49322__$1)){
var c__34631__auto___49323 = cljs.core.chunk_first.call(null,seq__49284_49322__$1);
var G__49324 = cljs.core.chunk_rest.call(null,seq__49284_49322__$1);
var G__49325 = c__34631__auto___49323;
var G__49326 = cljs.core.count.call(null,c__34631__auto___49323);
var G__49327 = (0);
seq__49284_49312 = G__49324;
chunk__49285_49313 = G__49325;
count__49286_49314 = G__49326;
i__49287_49315 = G__49327;
continue;
} else {
var ch_49328 = cljs.core.first.call(null,seq__49284_49322__$1);
e.appendChild(ch_49328);

var G__49329 = cljs.core.next.call(null,seq__49284_49322__$1);
var G__49330 = null;
var G__49331 = (0);
var G__49332 = (0);
seq__49284_49312 = G__49329;
chunk__49285_49313 = G__49330;
count__49286_49314 = G__49331;
i__49287_49315 = G__49332;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq49277){
var G__49278 = cljs.core.first.call(null,seq49277);
var seq49277__$1 = cljs.core.next.call(null,seq49277);
var G__49279 = cljs.core.first.call(null,seq49277__$1);
var seq49277__$2 = cljs.core.next.call(null,seq49277__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__49278,G__49279,seq49277__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__34745__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__34746__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__34747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__34748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__34749__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__34745__auto__,prefer_table__34746__auto__,method_cache__34747__auto__,cached_hierarchy__34748__auto__,hierarchy__34749__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__34745__auto__,prefer_table__34746__auto__,method_cache__34747__auto__,cached_hierarchy__34748__auto__,hierarchy__34749__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__34749__auto__,method_table__34745__auto__,prefer_table__34746__auto__,method_cache__34747__auto__,cached_hierarchy__34748__auto__));
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
var el_49333 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-o-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("border-top: 1px solid #f5f5f5;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: #333;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: monospace;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding: 0px 10px 0px 70px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: fixed;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("bottom: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("left: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("opacity: 0.0;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-sizing: border-box;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("z-index: 10000;")].join('')], null));
el_49333.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_49333.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_49333.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_49333);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__49334,st_map){
var map__49341 = p__49334;
var map__49341__$1 = ((((!((map__49341 == null)))?((((map__49341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49341.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49341):map__49341);
var container_el = cljs.core.get.call(null,map__49341__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__49341,map__49341__$1,container_el){
return (function (p__49343){
var vec__49344 = p__49343;
var k = cljs.core.nth.call(null,vec__49344,(0),null);
var v = cljs.core.nth.call(null,vec__49344,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__49341,map__49341__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__49347,dom_str){
var map__49350 = p__49347;
var map__49350__$1 = ((((!((map__49350 == null)))?((((map__49350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49350.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49350):map__49350);
var c = map__49350__$1;
var content_area_el = cljs.core.get.call(null,map__49350__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__49352){
var map__49355 = p__49352;
var map__49355__$1 = ((((!((map__49355 == null)))?((((map__49355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49355.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49355):map__49355);
var content_area_el = cljs.core.get.call(null,map__49355__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<a style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("float: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-decoration: none;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: rgba(84,84,84, 0.5);"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("x"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__40084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40084__auto__){
return (function (){
var f__40085__auto__ = (function (){var switch__39972__auto__ = ((function (c__40084__auto__){
return (function (state_49398){
var state_val_49399 = (state_49398[(1)]);
if((state_val_49399 === (1))){
var inst_49383 = (state_49398[(7)]);
var inst_49383__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_49384 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_49385 = ["10px","10px","100%","68px","1.0"];
var inst_49386 = cljs.core.PersistentHashMap.fromArrays(inst_49384,inst_49385);
var inst_49387 = cljs.core.merge.call(null,inst_49386,style);
var inst_49388 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_49383__$1,inst_49387);
var inst_49389 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_49383__$1,msg);
var inst_49390 = cljs.core.async.timeout.call(null,(300));
var state_49398__$1 = (function (){var statearr_49400 = state_49398;
(statearr_49400[(7)] = inst_49383__$1);

(statearr_49400[(8)] = inst_49389);

(statearr_49400[(9)] = inst_49388);

return statearr_49400;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49398__$1,(2),inst_49390);
} else {
if((state_val_49399 === (2))){
var inst_49383 = (state_49398[(7)]);
var inst_49392 = (state_49398[(2)]);
var inst_49393 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_49394 = ["auto"];
var inst_49395 = cljs.core.PersistentHashMap.fromArrays(inst_49393,inst_49394);
var inst_49396 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_49383,inst_49395);
var state_49398__$1 = (function (){var statearr_49401 = state_49398;
(statearr_49401[(10)] = inst_49392);

return statearr_49401;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49398__$1,inst_49396);
} else {
return null;
}
}
});})(c__40084__auto__))
;
return ((function (switch__39972__auto__,c__40084__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__39973__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__39973__auto____0 = (function (){
var statearr_49405 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49405[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__39973__auto__);

(statearr_49405[(1)] = (1));

return statearr_49405;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__39973__auto____1 = (function (state_49398){
while(true){
var ret_value__39974__auto__ = (function (){try{while(true){
var result__39975__auto__ = switch__39972__auto__.call(null,state_49398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39975__auto__;
}
break;
}
}catch (e49406){if((e49406 instanceof Object)){
var ex__39976__auto__ = e49406;
var statearr_49407_49409 = state_49398;
(statearr_49407_49409[(5)] = ex__39976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49410 = state_49398;
state_49398 = G__49410;
continue;
} else {
return ret_value__39974__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__39973__auto__ = function(state_49398){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__39973__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__39973__auto____1.call(this,state_49398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__39973__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__39973__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__39973__auto__;
})()
;})(switch__39972__auto__,c__40084__auto__))
})();
var state__40086__auto__ = (function (){var statearr_49408 = f__40085__auto__.call(null);
(statearr_49408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40084__auto__);

return statearr_49408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40086__auto__);
});})(c__40084__auto__))
);

return c__40084__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var args49411 = [];
var len__34925__auto___49414 = arguments.length;
var i__34926__auto___49415 = (0);
while(true){
if((i__34926__auto___49415 < len__34925__auto___49414)){
args49411.push((arguments[i__34926__auto___49415]));

var G__49416 = (i__34926__auto___49415 + (1));
i__34926__auto___49415 = G__49416;
continue;
} else {
}
break;
}

var G__49413 = args49411.length;
switch (G__49413) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49411.length)].join('')));

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
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__49418){
var map__49421 = p__49418;
var map__49421__$1 = ((((!((map__49421 == null)))?((((map__49421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49421.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49421):map__49421);
var file = cljs.core.get.call(null,map__49421__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__49421__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__49421__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__33812__auto__ = file;
if(cljs.core.truth_(or__33812__auto__)){
return or__33812__auto__;
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
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__49423){
var vec__49430 = p__49423;
var typ = cljs.core.nth.call(null,vec__49430,(0),null);
var line_number = cljs.core.nth.call(null,vec__49430,(1),null);
var line = cljs.core.nth.call(null,vec__49430,(2),null);
var pred__49433 = cljs.core._EQ_;
var expr__49434 = typ;
if(cljs.core.truth_(pred__49433.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__49434))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__49433.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__49434))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__49433.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__49434))){
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
return (function (p1__49436_SHARP_){
return cljs.core.update_in.call(null,p1__49436_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<pre style='whitespace:pre; overflow-x: scroll; font-family:monospace; font-size:0.8em; border-radius: 3px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</pre>")].join('');
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__49439){
var map__49442 = p__49439;
var map__49442__$1 = ((((!((map__49442 == null)))?((((map__49442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49442.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49442):map__49442);
var exception = map__49442__$1;
var failed_compiling = cljs.core.get.call(null,map__49442__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var reader_exception = cljs.core.get.call(null,map__49442__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var analysis_exception = cljs.core.get.call(null,map__49442__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var class$ = cljs.core.get.call(null,map__49442__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var file = cljs.core.get.call(null,map__49442__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__49442__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__49442__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__49442__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__49442__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__33800__auto__ = file;
if(cljs.core.truth_(and__33800__auto__)){
return line;
} else {
return and__33800__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__49442,map__49442__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message,error_inline){
return (function (p1__49437_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__49437_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(last_message,map__49442,map__49442__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message,error_inline))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(class$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,class$)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": ")].join(''):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style=\"font-weight:bold;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join(''),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__49442,map__49442__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message,error_inline){
return (function (p1__49438_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__49438_SHARP_))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__49438_SHARP_)))].join('');
});})(last_message,map__49442,map__49442__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message,error_inline))
,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception)))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"color: #AD4F4F; padding-top: 3px;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__49444){
var map__49447 = p__49444;
var map__49447__$1 = ((((!((map__49447 == null)))?((((map__49447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49447.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49447):map__49447);
var file = cljs.core.get.call(null,map__49447__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__49447__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__49447__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),new cljs.core.Keyword(null,"file-column","file-column",1543934780),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('')], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__49452 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__49452__$1 = ((((!((map__49452 == null)))?((((map__49452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49452.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49452):map__49452);
var head = cljs.core.get.call(null,map__49452__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__49452__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__49452__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__49452__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__49452__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__49452__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__49452__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__49455){
var map__49458 = p__49455;
var map__49458__$1 = ((((!((map__49458 == null)))?((((map__49458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49458.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49458):map__49458);
var warning_data = map__49458__$1;
var file = cljs.core.get.call(null,map__49458__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__49458__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__49458__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__49458__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__49458__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__33800__auto__ = file;
if(cljs.core.truth_(and__33800__auto__)){
return line;
} else {
return and__33800__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__49458,map__49458__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__49454_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__49454_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(last_message,map__49458,map__49458__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style=\"font-weight:bold;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__49462 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__49462__$1 = ((((!((map__49462 == null)))?((((map__49462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49462.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49462):map__49462);
var head = cljs.core.get.call(null,map__49462__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__49462__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__49462__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__49462__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__49462__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__49462__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__49462__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__49464){
var map__49468 = p__49464;
var map__49468__$1 = ((((!((map__49468 == null)))?((((map__49468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49468.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49468):map__49468);
var warning_data = map__49468__$1;
var message = cljs.core.get.call(null,map__49468__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__49468__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__49468__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__49468__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__49470 = message;
var G__49470__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49470),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__49470);
var G__49470__$2 = (cljs.core.truth_((function (){var and__33800__auto__ = line;
if(cljs.core.truth_(and__33800__auto__)){
return column;
} else {
return and__33800__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49470__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__49470__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49470__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__49470__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__49471){
var map__49476 = p__49471;
var map__49476__$1 = ((((!((map__49476 == null)))?((((map__49476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49476.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49476):map__49476);
var warning_data = map__49476__$1;
var message = cljs.core.get.call(null,map__49476__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__49476__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__49476__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__49476__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__49478 = figwheel.client.heads_up.ensure_container.call(null);
var map__49478__$1 = ((((!((map__49478 == null)))?((((map__49478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49478.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49478):map__49478);
var content_area_el = cljs.core.get.call(null,map__49478__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
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
var c__40084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40084__auto__){
return (function (){
var f__40085__auto__ = (function (){var switch__39972__auto__ = ((function (c__40084__auto__){
return (function (state_49526){
var state_val_49527 = (state_49526[(1)]);
if((state_val_49527 === (1))){
var inst_49509 = (state_49526[(7)]);
var inst_49509__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_49510 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_49511 = ["0.0"];
var inst_49512 = cljs.core.PersistentHashMap.fromArrays(inst_49510,inst_49511);
var inst_49513 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_49509__$1,inst_49512);
var inst_49514 = cljs.core.async.timeout.call(null,(300));
var state_49526__$1 = (function (){var statearr_49528 = state_49526;
(statearr_49528[(7)] = inst_49509__$1);

(statearr_49528[(8)] = inst_49513);

return statearr_49528;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49526__$1,(2),inst_49514);
} else {
if((state_val_49527 === (2))){
var inst_49509 = (state_49526[(7)]);
var inst_49516 = (state_49526[(2)]);
var inst_49517 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_49518 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_49519 = cljs.core.PersistentHashMap.fromArrays(inst_49517,inst_49518);
var inst_49520 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_49509,inst_49519);
var inst_49521 = cljs.core.async.timeout.call(null,(200));
var state_49526__$1 = (function (){var statearr_49529 = state_49526;
(statearr_49529[(9)] = inst_49520);

(statearr_49529[(10)] = inst_49516);

return statearr_49529;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49526__$1,(3),inst_49521);
} else {
if((state_val_49527 === (3))){
var inst_49509 = (state_49526[(7)]);
var inst_49523 = (state_49526[(2)]);
var inst_49524 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_49509,"");
var state_49526__$1 = (function (){var statearr_49530 = state_49526;
(statearr_49530[(11)] = inst_49523);

return statearr_49530;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49526__$1,inst_49524);
} else {
return null;
}
}
}
});})(c__40084__auto__))
;
return ((function (switch__39972__auto__,c__40084__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__39973__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__39973__auto____0 = (function (){
var statearr_49534 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49534[(0)] = figwheel$client$heads_up$clear_$_state_machine__39973__auto__);

(statearr_49534[(1)] = (1));

return statearr_49534;
});
var figwheel$client$heads_up$clear_$_state_machine__39973__auto____1 = (function (state_49526){
while(true){
var ret_value__39974__auto__ = (function (){try{while(true){
var result__39975__auto__ = switch__39972__auto__.call(null,state_49526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39975__auto__;
}
break;
}
}catch (e49535){if((e49535 instanceof Object)){
var ex__39976__auto__ = e49535;
var statearr_49536_49538 = state_49526;
(statearr_49536_49538[(5)] = ex__39976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49539 = state_49526;
state_49526 = G__49539;
continue;
} else {
return ret_value__39974__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__39973__auto__ = function(state_49526){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__39973__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__39973__auto____1.call(this,state_49526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__39973__auto____0;
figwheel$client$heads_up$clear_$_state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__39973__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__39973__auto__;
})()
;})(switch__39972__auto__,c__40084__auto__))
})();
var state__40086__auto__ = (function (){var statearr_49537 = f__40085__auto__.call(null);
(statearr_49537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40084__auto__);

return statearr_49537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40086__auto__);
});})(c__40084__auto__))
);

return c__40084__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__40084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40084__auto__){
return (function (){
var f__40085__auto__ = (function (){var switch__39972__auto__ = ((function (c__40084__auto__){
return (function (state_49571){
var state_val_49572 = (state_49571[(1)]);
if((state_val_49572 === (1))){
var inst_49561 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_49571__$1 = state_49571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49571__$1,(2),inst_49561);
} else {
if((state_val_49572 === (2))){
var inst_49563 = (state_49571[(2)]);
var inst_49564 = cljs.core.async.timeout.call(null,(400));
var state_49571__$1 = (function (){var statearr_49573 = state_49571;
(statearr_49573[(7)] = inst_49563);

return statearr_49573;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49571__$1,(3),inst_49564);
} else {
if((state_val_49572 === (3))){
var inst_49566 = (state_49571[(2)]);
var inst_49567 = figwheel.client.heads_up.clear.call(null);
var state_49571__$1 = (function (){var statearr_49574 = state_49571;
(statearr_49574[(8)] = inst_49566);

return statearr_49574;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49571__$1,(4),inst_49567);
} else {
if((state_val_49572 === (4))){
var inst_49569 = (state_49571[(2)]);
var state_49571__$1 = state_49571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49571__$1,inst_49569);
} else {
return null;
}
}
}
}
});})(c__40084__auto__))
;
return ((function (switch__39972__auto__,c__40084__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__39973__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__39973__auto____0 = (function (){
var statearr_49578 = [null,null,null,null,null,null,null,null,null];
(statearr_49578[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__39973__auto__);

(statearr_49578[(1)] = (1));

return statearr_49578;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__39973__auto____1 = (function (state_49571){
while(true){
var ret_value__39974__auto__ = (function (){try{while(true){
var result__39975__auto__ = switch__39972__auto__.call(null,state_49571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39975__auto__;
}
break;
}
}catch (e49579){if((e49579 instanceof Object)){
var ex__39976__auto__ = e49579;
var statearr_49580_49582 = state_49571;
(statearr_49580_49582[(5)] = ex__39976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49583 = state_49571;
state_49571 = G__49583;
continue;
} else {
return ret_value__39974__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__39973__auto__ = function(state_49571){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__39973__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__39973__auto____1.call(this,state_49571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__39973__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__39973__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__39973__auto__;
})()
;})(switch__39972__auto__,c__40084__auto__))
})();
var state__40086__auto__ = (function (){var statearr_49581 = f__40085__auto__.call(null);
(statearr_49581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40084__auto__);

return statearr_49581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40086__auto__);
});})(c__40084__auto__))
);

return c__40084__auto__;
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

//# sourceMappingURL=heads_up.js.map?rel=1526470178141