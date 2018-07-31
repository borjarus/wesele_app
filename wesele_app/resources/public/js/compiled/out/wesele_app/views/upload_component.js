// Compiled by ClojureScript 1.9.494 {}
goog.provide('wesele_app.views.upload_component');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('goog.crypt.base64');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
wesele_app.views.upload_component.file_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-props","file-props",152509146),null,new cljs.core.Keyword(null,"file-data","file-data",1157297977),null], null));
wesele_app.views.upload_component.clj__GT_json = (function wesele_app$views$upload_component$clj__GT_json(ds){
return JSON.stringify(cljs.core.clj__GT_js.call(null,ds));
});
wesele_app.views.upload_component.first_file = cljs.core.map.call(null,(function (e){
var target = e.currentTarget;
var file = (target.files[(0)]);
target.value = "";

return file;
}));
wesele_app.views.upload_component.extract_result = cljs.core.map.call(null,(function (p1__43302_SHARP_){
return cljs.core.js__GT_clj.call(null,p1__43302_SHARP_.target.result);
}));
wesele_app.views.upload_component.upload_reqs = cljs.core.async.chan.call(null,(1),wesele_app.views.upload_component.first_file);
wesele_app.views.upload_component.file_reads = cljs.core.async.chan.call(null,(1),wesele_app.views.upload_component.extract_result);
wesele_app.views.upload_component.put_upload = (function wesele_app$views$upload_component$put_upload(e){
return cljs.core.async.put_BANG_.call(null,wesele_app.views.upload_component.upload_reqs,e);
});
wesele_app.views.upload_component.upload_to_dropbox = (function wesele_app$views$upload_component$upload_to_dropbox(name,data){
var c__40084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40084__auto__){
return (function (){
var f__40085__auto__ = (function (){var switch__39972__auto__ = ((function (c__40084__auto__){
return (function (state_43456){
var state_val_43457 = (state_43456[(1)]);
if((state_val_43457 === (7))){
var state_43456__$1 = state_43456;
var statearr_43458_43483 = state_43456__$1;
(statearr_43458_43483[(2)] = false);

(statearr_43458_43483[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43457 === (1))){
var inst_43393 = cljs.core.async.chan.call(null);
var inst_43394 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43395 = [new cljs.core.Keyword(null,"dropbox-api-key","dropbox-api-key",566356387)];
var inst_43396 = (new cljs.core.PersistentVector(null,1,(5),inst_43394,inst_43395,null));
var inst_43397 = re_frame.core.subscribe.call(null,inst_43396);
var inst_43398 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_43399 = ["Authorization","Content-Type","Dropbox-API-Arg"];
var inst_43400 = cljs.core.deref.call(null,inst_43397);
var inst_43401 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bearer "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_43400)].join('');
var inst_43402 = ["path","mode","autorename","mute"];
var inst_43403 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("/upload/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
var inst_43404 = [inst_43403,"add",true,false];
var inst_43405 = cljs.core.PersistentHashMap.fromArrays(inst_43402,inst_43404);
var inst_43406 = wesele_app.views.upload_component.clj__GT_json.call(null,inst_43405);
var inst_43407 = [inst_43401,"application/octet-stream",inst_43406];
var inst_43408 = cljs.core.PersistentHashMap.fromArrays(inst_43399,inst_43407);
var inst_43409 = [false,inst_43408,inst_43393,data];
var inst_43410 = cljs.core.PersistentHashMap.fromArrays(inst_43398,inst_43409);
var inst_43411 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/upload",inst_43410);
var state_43456__$1 = state_43456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43456__$1,(2),inst_43411);
} else {
if((state_val_43457 === (4))){
var state_43456__$1 = state_43456;
var statearr_43459_43484 = state_43456__$1;
(statearr_43459_43484[(2)] = null);

(statearr_43459_43484[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43457 === (13))){
var inst_43414 = (state_43456[(7)]);
var state_43456__$1 = state_43456;
var statearr_43460_43485 = state_43456__$1;
(statearr_43460_43485[(2)] = inst_43414);

(statearr_43460_43485[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43457 === (6))){
var inst_43414 = (state_43456[(7)]);
var inst_43421 = inst_43414.cljs$lang$protocol_mask$partition0$;
var inst_43422 = (inst_43421 & (64));
var inst_43423 = inst_43414.cljs$core$ISeq$;
var inst_43424 = (cljs.core.PROTOCOL_SENTINEL === inst_43423);
var inst_43425 = (inst_43422) || (inst_43424);
var state_43456__$1 = state_43456;
if(cljs.core.truth_(inst_43425)){
var statearr_43461_43486 = state_43456__$1;
(statearr_43461_43486[(1)] = (9));

} else {
var statearr_43462_43487 = state_43456__$1;
(statearr_43462_43487[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43457 === (3))){
var inst_43414 = (state_43456[(7)]);
var inst_43418 = (inst_43414 == null);
var inst_43419 = cljs.core.not.call(null,inst_43418);
var state_43456__$1 = state_43456;
if(inst_43419){
var statearr_43463_43488 = state_43456__$1;
(statearr_43463_43488[(1)] = (6));

} else {
var statearr_43464_43489 = state_43456__$1;
(statearr_43464_43489[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43457 === (12))){
var inst_43414 = (state_43456[(7)]);
var inst_43434 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43414);
var state_43456__$1 = state_43456;
var statearr_43465_43490 = state_43456__$1;
(statearr_43465_43490[(2)] = inst_43434);

(statearr_43465_43490[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43457 === (2))){
var inst_43414 = (state_43456[(7)]);
var inst_43413 = (state_43456[(2)]);
var inst_43414__$1 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_43413);
var state_43456__$1 = (function (){var statearr_43466 = state_43456;
(statearr_43466[(7)] = inst_43414__$1);

return statearr_43466;
})();
if(cljs.core.truth_(inst_43414__$1)){
var statearr_43467_43491 = state_43456__$1;
(statearr_43467_43491[(1)] = (3));

} else {
var statearr_43468_43492 = state_43456__$1;
(statearr_43468_43492[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43457 === (11))){
var inst_43429 = (state_43456[(2)]);
var state_43456__$1 = state_43456;
var statearr_43469_43493 = state_43456__$1;
(statearr_43469_43493[(2)] = inst_43429);

(statearr_43469_43493[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43457 === (9))){
var state_43456__$1 = state_43456;
var statearr_43470_43494 = state_43456__$1;
(statearr_43470_43494[(2)] = true);

(statearr_43470_43494[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43457 === (5))){
var inst_43454 = (state_43456[(2)]);
var state_43456__$1 = state_43456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43456__$1,inst_43454);
} else {
if((state_val_43457 === (14))){
var inst_43437 = (state_43456[(2)]);
var inst_43438 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43439 = [name];
var inst_43440 = (new cljs.core.PersistentVector(null,1,(5),inst_43438,inst_43439,null));
var inst_43441 = cljs.core.get.call(null,inst_43437,inst_43440);
var inst_43442 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43443 = [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"th-src","th-src",-155379747),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"url-folder","url-folder",601301164)];
var inst_43444 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43445 = ["tag0","tag6","tag0","tag6","tag3"];
var inst_43446 = (new cljs.core.PersistentVector(null,5,(5),inst_43444,inst_43445,null));
var inst_43447 = [name,"http://examplepic.com","http://examplethumbpic.com",inst_43446,"url","upload/"];
var inst_43448 = cljs.core.PersistentHashMap.fromArrays(inst_43443,inst_43447);
var inst_43449 = [new cljs.core.Keyword(null,"add-to-gallery-db","add-to-gallery-db",786028009),inst_43448];
var inst_43450 = (new cljs.core.PersistentVector(null,2,(5),inst_43442,inst_43449,null));
var inst_43451 = re_frame.core.dispatch.call(null,inst_43450);
var state_43456__$1 = (function (){var statearr_43471 = state_43456;
(statearr_43471[(8)] = inst_43441);

return statearr_43471;
})();
var statearr_43472_43495 = state_43456__$1;
(statearr_43472_43495[(2)] = inst_43451);

(statearr_43472_43495[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43457 === (10))){
var state_43456__$1 = state_43456;
var statearr_43473_43496 = state_43456__$1;
(statearr_43473_43496[(2)] = false);

(statearr_43473_43496[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43457 === (8))){
var inst_43432 = (state_43456[(2)]);
var state_43456__$1 = state_43456;
if(cljs.core.truth_(inst_43432)){
var statearr_43474_43497 = state_43456__$1;
(statearr_43474_43497[(1)] = (12));

} else {
var statearr_43475_43498 = state_43456__$1;
(statearr_43475_43498[(1)] = (13));

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
});})(c__40084__auto__))
;
return ((function (switch__39972__auto__,c__40084__auto__){
return (function() {
var wesele_app$views$upload_component$upload_to_dropbox_$_state_machine__39973__auto__ = null;
var wesele_app$views$upload_component$upload_to_dropbox_$_state_machine__39973__auto____0 = (function (){
var statearr_43479 = [null,null,null,null,null,null,null,null,null];
(statearr_43479[(0)] = wesele_app$views$upload_component$upload_to_dropbox_$_state_machine__39973__auto__);

(statearr_43479[(1)] = (1));

return statearr_43479;
});
var wesele_app$views$upload_component$upload_to_dropbox_$_state_machine__39973__auto____1 = (function (state_43456){
while(true){
var ret_value__39974__auto__ = (function (){try{while(true){
var result__39975__auto__ = switch__39972__auto__.call(null,state_43456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39975__auto__;
}
break;
}
}catch (e43480){if((e43480 instanceof Object)){
var ex__39976__auto__ = e43480;
var statearr_43481_43499 = state_43456;
(statearr_43481_43499[(5)] = ex__39976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43500 = state_43456;
state_43456 = G__43500;
continue;
} else {
return ret_value__39974__auto__;
}
break;
}
});
wesele_app$views$upload_component$upload_to_dropbox_$_state_machine__39973__auto__ = function(state_43456){
switch(arguments.length){
case 0:
return wesele_app$views$upload_component$upload_to_dropbox_$_state_machine__39973__auto____0.call(this);
case 1:
return wesele_app$views$upload_component$upload_to_dropbox_$_state_machine__39973__auto____1.call(this,state_43456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
wesele_app$views$upload_component$upload_to_dropbox_$_state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$0 = wesele_app$views$upload_component$upload_to_dropbox_$_state_machine__39973__auto____0;
wesele_app$views$upload_component$upload_to_dropbox_$_state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$1 = wesele_app$views$upload_component$upload_to_dropbox_$_state_machine__39973__auto____1;
return wesele_app$views$upload_component$upload_to_dropbox_$_state_machine__39973__auto__;
})()
;})(switch__39972__auto__,c__40084__auto__))
})();
var state__40086__auto__ = (function (){var statearr_43482 = f__40085__auto__.call(null);
(statearr_43482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40084__auto__);

return statearr_43482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40086__auto__);
});})(c__40084__auto__))
);

return c__40084__auto__;
});
wesele_app.views.upload_component.get_folder_list_dropbox = (function wesele_app$views$upload_component$get_folder_list_dropbox(name){
var c__40084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40084__auto__){
return (function (){
var f__40085__auto__ = (function (){var switch__39972__auto__ = ((function (c__40084__auto__){
return (function (state_43633){
var state_val_43634 = (state_43633[(1)]);
if((state_val_43634 === (7))){
var state_43633__$1 = state_43633;
var statearr_43635_43659 = state_43633__$1;
(statearr_43635_43659[(2)] = false);

(statearr_43635_43659[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43634 === (1))){
var inst_43580 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43581 = [new cljs.core.Keyword(null,"dropbox-api-key","dropbox-api-key",566356387)];
var inst_43582 = (new cljs.core.PersistentVector(null,1,(5),inst_43580,inst_43581,null));
var inst_43583 = re_frame.core.subscribe.call(null,inst_43582);
var inst_43584 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_43585 = ["Authorization","Content-Type"];
var inst_43586 = cljs.core.deref.call(null,inst_43583);
var inst_43587 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bearer "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_43586)].join('');
var inst_43588 = [inst_43587,"application/json"];
var inst_43589 = cljs.core.PersistentHashMap.fromArrays(inst_43585,inst_43588);
var inst_43590 = ["path","recursive","include_media_info","include_deleted","include_has_explicit_shared_members","include_mounted_folders"];
var inst_43591 = [name,false,true,false,false,true];
var inst_43592 = cljs.core.PersistentHashMap.fromArrays(inst_43590,inst_43591);
var inst_43593 = wesele_app.views.upload_component.clj__GT_json.call(null,inst_43592);
var inst_43594 = [false,inst_43589,inst_43593];
var inst_43595 = cljs.core.PersistentHashMap.fromArrays(inst_43584,inst_43594);
var inst_43596 = cljs_http.client.post.call(null,"https://api.dropboxapi.com/2/files/list_folder",inst_43595);
var state_43633__$1 = state_43633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43633__$1,(2),inst_43596);
} else {
if((state_val_43634 === (4))){
var state_43633__$1 = state_43633;
var statearr_43636_43660 = state_43633__$1;
(statearr_43636_43660[(2)] = null);

(statearr_43636_43660[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43634 === (13))){
var inst_43602 = (state_43633[(7)]);
var state_43633__$1 = state_43633;
var statearr_43637_43661 = state_43633__$1;
(statearr_43637_43661[(2)] = inst_43602);

(statearr_43637_43661[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43634 === (6))){
var inst_43602 = (state_43633[(7)]);
var inst_43609 = inst_43602.cljs$lang$protocol_mask$partition0$;
var inst_43610 = (inst_43609 & (64));
var inst_43611 = inst_43602.cljs$core$ISeq$;
var inst_43612 = (cljs.core.PROTOCOL_SENTINEL === inst_43611);
var inst_43613 = (inst_43610) || (inst_43612);
var state_43633__$1 = state_43633;
if(cljs.core.truth_(inst_43613)){
var statearr_43638_43662 = state_43633__$1;
(statearr_43638_43662[(1)] = (9));

} else {
var statearr_43639_43663 = state_43633__$1;
(statearr_43639_43663[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43634 === (3))){
var inst_43602 = (state_43633[(7)]);
var inst_43606 = (inst_43602 == null);
var inst_43607 = cljs.core.not.call(null,inst_43606);
var state_43633__$1 = state_43633;
if(inst_43607){
var statearr_43640_43664 = state_43633__$1;
(statearr_43640_43664[(1)] = (6));

} else {
var statearr_43641_43665 = state_43633__$1;
(statearr_43641_43665[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43634 === (12))){
var inst_43602 = (state_43633[(7)]);
var inst_43622 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43602);
var state_43633__$1 = state_43633;
var statearr_43642_43666 = state_43633__$1;
(statearr_43642_43666[(2)] = inst_43622);

(statearr_43642_43666[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43634 === (2))){
var inst_43602 = (state_43633[(7)]);
var inst_43598 = (state_43633[(2)]);
var inst_43599 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43600 = [new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_43601 = (new cljs.core.PersistentVector(null,1,(5),inst_43599,inst_43600,null));
var inst_43602__$1 = cljs.core.get_in.call(null,inst_43598,inst_43601);
var state_43633__$1 = (function (){var statearr_43643 = state_43633;
(statearr_43643[(7)] = inst_43602__$1);

return statearr_43643;
})();
if(cljs.core.truth_(inst_43602__$1)){
var statearr_43644_43667 = state_43633__$1;
(statearr_43644_43667[(1)] = (3));

} else {
var statearr_43645_43668 = state_43633__$1;
(statearr_43645_43668[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43634 === (11))){
var inst_43617 = (state_43633[(2)]);
var state_43633__$1 = state_43633;
var statearr_43646_43669 = state_43633__$1;
(statearr_43646_43669[(2)] = inst_43617);

(statearr_43646_43669[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43634 === (9))){
var state_43633__$1 = state_43633;
var statearr_43647_43670 = state_43633__$1;
(statearr_43647_43670[(2)] = true);

(statearr_43647_43670[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43634 === (5))){
var inst_43631 = (state_43633[(2)]);
var state_43633__$1 = state_43633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43633__$1,inst_43631);
} else {
if((state_val_43634 === (14))){
var inst_43625 = (state_43633[(2)]);
var inst_43626 = cljs.core.get.call(null,inst_43625,new cljs.core.Keyword(null,"entries","entries",-86943161));
var inst_43627 = cljs.core.clj__GT_js.call(null,inst_43626);
var inst_43628 = console.log(inst_43627);
var state_43633__$1 = state_43633;
var statearr_43648_43671 = state_43633__$1;
(statearr_43648_43671[(2)] = inst_43628);

(statearr_43648_43671[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43634 === (10))){
var state_43633__$1 = state_43633;
var statearr_43649_43672 = state_43633__$1;
(statearr_43649_43672[(2)] = false);

(statearr_43649_43672[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43634 === (8))){
var inst_43620 = (state_43633[(2)]);
var state_43633__$1 = state_43633;
if(cljs.core.truth_(inst_43620)){
var statearr_43650_43673 = state_43633__$1;
(statearr_43650_43673[(1)] = (12));

} else {
var statearr_43651_43674 = state_43633__$1;
(statearr_43651_43674[(1)] = (13));

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
});})(c__40084__auto__))
;
return ((function (switch__39972__auto__,c__40084__auto__){
return (function() {
var wesele_app$views$upload_component$get_folder_list_dropbox_$_state_machine__39973__auto__ = null;
var wesele_app$views$upload_component$get_folder_list_dropbox_$_state_machine__39973__auto____0 = (function (){
var statearr_43655 = [null,null,null,null,null,null,null,null];
(statearr_43655[(0)] = wesele_app$views$upload_component$get_folder_list_dropbox_$_state_machine__39973__auto__);

(statearr_43655[(1)] = (1));

return statearr_43655;
});
var wesele_app$views$upload_component$get_folder_list_dropbox_$_state_machine__39973__auto____1 = (function (state_43633){
while(true){
var ret_value__39974__auto__ = (function (){try{while(true){
var result__39975__auto__ = switch__39972__auto__.call(null,state_43633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39975__auto__;
}
break;
}
}catch (e43656){if((e43656 instanceof Object)){
var ex__39976__auto__ = e43656;
var statearr_43657_43675 = state_43633;
(statearr_43657_43675[(5)] = ex__39976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43676 = state_43633;
state_43633 = G__43676;
continue;
} else {
return ret_value__39974__auto__;
}
break;
}
});
wesele_app$views$upload_component$get_folder_list_dropbox_$_state_machine__39973__auto__ = function(state_43633){
switch(arguments.length){
case 0:
return wesele_app$views$upload_component$get_folder_list_dropbox_$_state_machine__39973__auto____0.call(this);
case 1:
return wesele_app$views$upload_component$get_folder_list_dropbox_$_state_machine__39973__auto____1.call(this,state_43633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
wesele_app$views$upload_component$get_folder_list_dropbox_$_state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$0 = wesele_app$views$upload_component$get_folder_list_dropbox_$_state_machine__39973__auto____0;
wesele_app$views$upload_component$get_folder_list_dropbox_$_state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$1 = wesele_app$views$upload_component$get_folder_list_dropbox_$_state_machine__39973__auto____1;
return wesele_app$views$upload_component$get_folder_list_dropbox_$_state_machine__39973__auto__;
})()
;})(switch__39972__auto__,c__40084__auto__))
})();
var state__40086__auto__ = (function (){var statearr_43658 = f__40085__auto__.call(null);
(statearr_43658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40084__auto__);

return statearr_43658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40086__auto__);
});})(c__40084__auto__))
);

return c__40084__auto__;
});
wesele_app.views.upload_component.test_data = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),"file1.jpg",new cljs.core.Keyword(null,"path","path",-188191168),"http://examplepic.com",new cljs.core.Keyword(null,"th-src","th-src",-155379747),"http://examplethumbpic.com",new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tag0","tag6","tag0","tag6","tag3"], null),new cljs.core.Keyword(null,"type","type",1174270348),"url",new cljs.core.Keyword(null,"url-folder","url-folder",601301164),"upload/"], null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-to-gallery-db","add-to-gallery-db",786028009),wesele_app.views.upload_component.test_data], null));
var c__40084__auto___43703 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40084__auto___43703){
return (function (){
var f__40085__auto__ = (function (){var switch__39972__auto__ = ((function (c__40084__auto___43703){
return (function (state_43690){
var state_val_43691 = (state_43690[(1)]);
if((state_val_43691 === (1))){
var state_43690__$1 = state_43690;
var statearr_43692_43704 = state_43690__$1;
(statearr_43692_43704[(2)] = null);

(statearr_43692_43704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43691 === (2))){
var inst_43679 = (new FileReader());
var state_43690__$1 = (function (){var statearr_43693 = state_43690;
(statearr_43693[(7)] = inst_43679);

return statearr_43693;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43690__$1,(4),wesele_app.views.upload_component.upload_reqs);
} else {
if((state_val_43691 === (3))){
var inst_43688 = (state_43690[(2)]);
var state_43690__$1 = state_43690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43690__$1,inst_43688);
} else {
if((state_val_43691 === (4))){
var inst_43679 = (state_43690[(7)]);
var inst_43681 = (state_43690[(2)]);
var inst_43682 = cljs.core.swap_BANG_.call(null,wesele_app.views.upload_component.file_data,cljs.core.assoc,new cljs.core.Keyword(null,"file-props","file-props",152509146),inst_43681);
var inst_43683 = (function (){var reader = inst_43679;
var file = inst_43681;
return ((function (reader,file,inst_43679,inst_43681,inst_43682,state_val_43691,c__40084__auto___43703){
return (function (p1__43677_SHARP_){
return cljs.core.async.put_BANG_.call(null,wesele_app.views.upload_component.file_reads,p1__43677_SHARP_);
});
;})(reader,file,inst_43679,inst_43681,inst_43682,state_val_43691,c__40084__auto___43703))
})();
var inst_43684 = inst_43679.onload = inst_43683;
var inst_43685 = inst_43679.readAsArrayBuffer(inst_43681);
var state_43690__$1 = (function (){var statearr_43694 = state_43690;
(statearr_43694[(8)] = inst_43685);

(statearr_43694[(9)] = inst_43682);

(statearr_43694[(10)] = inst_43684);

return statearr_43694;
})();
var statearr_43695_43705 = state_43690__$1;
(statearr_43695_43705[(2)] = null);

(statearr_43695_43705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__40084__auto___43703))
;
return ((function (switch__39972__auto__,c__40084__auto___43703){
return (function() {
var wesele_app$views$upload_component$state_machine__39973__auto__ = null;
var wesele_app$views$upload_component$state_machine__39973__auto____0 = (function (){
var statearr_43699 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43699[(0)] = wesele_app$views$upload_component$state_machine__39973__auto__);

(statearr_43699[(1)] = (1));

return statearr_43699;
});
var wesele_app$views$upload_component$state_machine__39973__auto____1 = (function (state_43690){
while(true){
var ret_value__39974__auto__ = (function (){try{while(true){
var result__39975__auto__ = switch__39972__auto__.call(null,state_43690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39975__auto__;
}
break;
}
}catch (e43700){if((e43700 instanceof Object)){
var ex__39976__auto__ = e43700;
var statearr_43701_43706 = state_43690;
(statearr_43701_43706[(5)] = ex__39976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43707 = state_43690;
state_43690 = G__43707;
continue;
} else {
return ret_value__39974__auto__;
}
break;
}
});
wesele_app$views$upload_component$state_machine__39973__auto__ = function(state_43690){
switch(arguments.length){
case 0:
return wesele_app$views$upload_component$state_machine__39973__auto____0.call(this);
case 1:
return wesele_app$views$upload_component$state_machine__39973__auto____1.call(this,state_43690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
wesele_app$views$upload_component$state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$0 = wesele_app$views$upload_component$state_machine__39973__auto____0;
wesele_app$views$upload_component$state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$1 = wesele_app$views$upload_component$state_machine__39973__auto____1;
return wesele_app$views$upload_component$state_machine__39973__auto__;
})()
;})(switch__39972__auto__,c__40084__auto___43703))
})();
var state__40086__auto__ = (function (){var statearr_43702 = f__40085__auto__.call(null);
(statearr_43702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40084__auto___43703);

return statearr_43702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40086__auto__);
});})(c__40084__auto___43703))
);

var c__40084__auto___43743 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40084__auto___43743){
return (function (){
var f__40085__auto__ = (function (){var switch__39972__auto__ = ((function (c__40084__auto___43743){
return (function (state_43726){
var state_val_43727 = (state_43726[(1)]);
if((state_val_43727 === (1))){
var state_43726__$1 = state_43726;
var statearr_43728_43744 = state_43726__$1;
(statearr_43728_43744[(2)] = null);

(statearr_43728_43744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43727 === (2))){
var state_43726__$1 = state_43726;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43726__$1,(4),wesele_app.views.upload_component.file_reads);
} else {
if((state_val_43727 === (3))){
var inst_43724 = (state_43726[(2)]);
var state_43726__$1 = state_43726;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43726__$1,inst_43724);
} else {
if((state_val_43727 === (4))){
var inst_43713 = (state_43726[(7)]);
var inst_43710 = (state_43726[(2)]);
var inst_43711 = cljs.core.swap_BANG_.call(null,wesele_app.views.upload_component.file_data,cljs.core.assoc,new cljs.core.Keyword(null,"file-data","file-data",1157297977),inst_43710);
var inst_43712 = cljs.core.deref.call(null,wesele_app.views.upload_component.file_data);
var inst_43713__$1 = new cljs.core.Keyword(null,"file-props","file-props",152509146).cljs$core$IFn$_invoke$arity$1(inst_43712);
var state_43726__$1 = (function (){var statearr_43729 = state_43726;
(statearr_43729[(7)] = inst_43713__$1);

(statearr_43729[(8)] = inst_43711);

return statearr_43729;
})();
if(cljs.core.truth_(inst_43713__$1)){
var statearr_43730_43745 = state_43726__$1;
(statearr_43730_43745[(1)] = (5));

} else {
var statearr_43731_43746 = state_43726__$1;
(statearr_43731_43746[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43727 === (5))){
var inst_43713 = (state_43726[(7)]);
var inst_43715 = inst_43713.name;
var inst_43716 = cljs.core.deref.call(null,wesele_app.views.upload_component.file_data);
var inst_43717 = new cljs.core.Keyword(null,"file-data","file-data",1157297977).cljs$core$IFn$_invoke$arity$1(inst_43716);
var inst_43718 = wesele_app.views.upload_component.upload_to_dropbox.call(null,inst_43715,inst_43717);
var state_43726__$1 = state_43726;
var statearr_43732_43747 = state_43726__$1;
(statearr_43732_43747[(2)] = inst_43718);

(statearr_43732_43747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43727 === (6))){
var state_43726__$1 = state_43726;
var statearr_43733_43748 = state_43726__$1;
(statearr_43733_43748[(2)] = null);

(statearr_43733_43748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43727 === (7))){
var inst_43721 = (state_43726[(2)]);
var state_43726__$1 = (function (){var statearr_43734 = state_43726;
(statearr_43734[(9)] = inst_43721);

return statearr_43734;
})();
var statearr_43735_43749 = state_43726__$1;
(statearr_43735_43749[(2)] = null);

(statearr_43735_43749[(1)] = (2));


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
});})(c__40084__auto___43743))
;
return ((function (switch__39972__auto__,c__40084__auto___43743){
return (function() {
var wesele_app$views$upload_component$state_machine__39973__auto__ = null;
var wesele_app$views$upload_component$state_machine__39973__auto____0 = (function (){
var statearr_43739 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43739[(0)] = wesele_app$views$upload_component$state_machine__39973__auto__);

(statearr_43739[(1)] = (1));

return statearr_43739;
});
var wesele_app$views$upload_component$state_machine__39973__auto____1 = (function (state_43726){
while(true){
var ret_value__39974__auto__ = (function (){try{while(true){
var result__39975__auto__ = switch__39972__auto__.call(null,state_43726);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39975__auto__;
}
break;
}
}catch (e43740){if((e43740 instanceof Object)){
var ex__39976__auto__ = e43740;
var statearr_43741_43750 = state_43726;
(statearr_43741_43750[(5)] = ex__39976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43751 = state_43726;
state_43726 = G__43751;
continue;
} else {
return ret_value__39974__auto__;
}
break;
}
});
wesele_app$views$upload_component$state_machine__39973__auto__ = function(state_43726){
switch(arguments.length){
case 0:
return wesele_app$views$upload_component$state_machine__39973__auto____0.call(this);
case 1:
return wesele_app$views$upload_component$state_machine__39973__auto____1.call(this,state_43726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
wesele_app$views$upload_component$state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$0 = wesele_app$views$upload_component$state_machine__39973__auto____0;
wesele_app$views$upload_component$state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$1 = wesele_app$views$upload_component$state_machine__39973__auto____1;
return wesele_app$views$upload_component$state_machine__39973__auto__;
})()
;})(switch__39972__auto__,c__40084__auto___43743))
})();
var state__40086__auto__ = (function (){var statearr_43742 = f__40085__auto__.call(null);
(statearr_43742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40084__auto___43743);

return statearr_43742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40086__auto__);
});})(c__40084__auto___43743))
);

wesele_app.views.upload_component.on_click_upload_handler = (function wesele_app$views$upload_component$on_click_upload_handler(el){
return document.getElementById("upload_file").click();
});
wesele_app.views.upload_component.upload_component = (function wesele_app$views$upload_component$upload_component(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#special1.row","div#special1.row",-1366554794),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form#upload_file_component","form#upload_file_component",-793845086),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"post",new cljs.core.Keyword(null,"enctype","enctype",-2053093795),"multipart/form-data"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary.btn-block","button.btn.btn-primary.btn-block",788068819),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),wesele_app.views.upload_component.on_click_upload_handler], null),"Wgraj zdj\u0119cia"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control-file","input.form-control-file",1396047800),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"id","id",-1388402092),"upload_file",new cljs.core.Keyword(null,"onChange","onChange",-312891301),wesele_app.views.upload_component.put_upload,new cljs.core.Keyword(null,"accept","accept",1874130431),"image/*"], null)], null)], null)], null)], null);
});
});

//# sourceMappingURL=upload_component.js.map?rel=1526470090649