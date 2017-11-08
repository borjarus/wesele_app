// Compiled by ClojureScript 1.9.494 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args60229 = [];
var len__44607__auto___60235 = arguments.length;
var i__44608__auto___60236 = (0);
while(true){
if((i__44608__auto___60236 < len__44607__auto___60235)){
args60229.push((arguments[i__44608__auto___60236]));

var G__60237 = (i__44608__auto___60236 + (1));
i__44608__auto___60236 = G__60237;
continue;
} else {
}
break;
}

var G__60231 = args60229.length;
switch (G__60231) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args60229.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async60232 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60232 = (function (f,blockable,meta60233){
this.f = f;
this.blockable = blockable;
this.meta60233 = meta60233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async60232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60234,meta60233__$1){
var self__ = this;
var _60234__$1 = this;
return (new cljs.core.async.t_cljs$core$async60232(self__.f,self__.blockable,meta60233__$1));
});

cljs.core.async.t_cljs$core$async60232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60234){
var self__ = this;
var _60234__$1 = this;
return self__.meta60233;
});

cljs.core.async.t_cljs$core$async60232.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60232.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async60232.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async60232.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async60232.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta60233","meta60233",988244646,null)], null);
});

cljs.core.async.t_cljs$core$async60232.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async60232.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60232";

cljs.core.async.t_cljs$core$async60232.cljs$lang$ctorPrWriter = (function (this__44105__auto__,writer__44106__auto__,opt__44107__auto__){
return cljs.core._write.call(null,writer__44106__auto__,"cljs.core.async/t_cljs$core$async60232");
});

cljs.core.async.__GT_t_cljs$core$async60232 = (function cljs$core$async$__GT_t_cljs$core$async60232(f__$1,blockable__$1,meta60233){
return (new cljs.core.async.t_cljs$core$async60232(f__$1,blockable__$1,meta60233));
});

}

return (new cljs.core.async.t_cljs$core$async60232(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args60241 = [];
var len__44607__auto___60244 = arguments.length;
var i__44608__auto___60245 = (0);
while(true){
if((i__44608__auto___60245 < len__44607__auto___60244)){
args60241.push((arguments[i__44608__auto___60245]));

var G__60246 = (i__44608__auto___60245 + (1));
i__44608__auto___60245 = G__60246;
continue;
} else {
}
break;
}

var G__60243 = args60241.length;
switch (G__60243) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args60241.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args60248 = [];
var len__44607__auto___60251 = arguments.length;
var i__44608__auto___60252 = (0);
while(true){
if((i__44608__auto___60252 < len__44607__auto___60251)){
args60248.push((arguments[i__44608__auto___60252]));

var G__60253 = (i__44608__auto___60252 + (1));
i__44608__auto___60252 = G__60253;
continue;
} else {
}
break;
}

var G__60250 = args60248.length;
switch (G__60250) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args60248.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args60255 = [];
var len__44607__auto___60258 = arguments.length;
var i__44608__auto___60259 = (0);
while(true){
if((i__44608__auto___60259 < len__44607__auto___60258)){
args60255.push((arguments[i__44608__auto___60259]));

var G__60260 = (i__44608__auto___60259 + (1));
i__44608__auto___60259 = G__60260;
continue;
} else {
}
break;
}

var G__60257 = args60255.length;
switch (G__60257) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args60255.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_60262 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_60262);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_60262,ret){
return (function (){
return fn1.call(null,val_60262);
});})(val_60262,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args60263 = [];
var len__44607__auto___60266 = arguments.length;
var i__44608__auto___60267 = (0);
while(true){
if((i__44608__auto___60267 < len__44607__auto___60266)){
args60263.push((arguments[i__44608__auto___60267]));

var G__60268 = (i__44608__auto___60267 + (1));
i__44608__auto___60267 = G__60268;
continue;
} else {
}
break;
}

var G__60265 = args60263.length;
switch (G__60265) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args60263.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__44417__auto___60270 = n;
var x_60271 = (0);
while(true){
if((x_60271 < n__44417__auto___60270)){
(a[x_60271] = (0));

var G__60272 = (x_60271 + (1));
x_60271 = G__60272;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__60273 = (i + (1));
i = G__60273;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async60277 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60277 = (function (flag,meta60278){
this.flag = flag;
this.meta60278 = meta60278;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async60277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_60279,meta60278__$1){
var self__ = this;
var _60279__$1 = this;
return (new cljs.core.async.t_cljs$core$async60277(self__.flag,meta60278__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async60277.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_60279){
var self__ = this;
var _60279__$1 = this;
return self__.meta60278;
});})(flag))
;

cljs.core.async.t_cljs$core$async60277.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60277.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async60277.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async60277.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async60277.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta60278","meta60278",1969947374,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async60277.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async60277.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60277";

cljs.core.async.t_cljs$core$async60277.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__44105__auto__,writer__44106__auto__,opt__44107__auto__){
return cljs.core._write.call(null,writer__44106__auto__,"cljs.core.async/t_cljs$core$async60277");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async60277 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async60277(flag__$1,meta60278){
return (new cljs.core.async.t_cljs$core$async60277(flag__$1,meta60278));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async60277(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async60283 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60283 = (function (flag,cb,meta60284){
this.flag = flag;
this.cb = cb;
this.meta60284 = meta60284;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async60283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60285,meta60284__$1){
var self__ = this;
var _60285__$1 = this;
return (new cljs.core.async.t_cljs$core$async60283(self__.flag,self__.cb,meta60284__$1));
});

cljs.core.async.t_cljs$core$async60283.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60285){
var self__ = this;
var _60285__$1 = this;
return self__.meta60284;
});

cljs.core.async.t_cljs$core$async60283.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60283.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async60283.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async60283.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async60283.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta60284","meta60284",-400308738,null)], null);
});

cljs.core.async.t_cljs$core$async60283.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async60283.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60283";

cljs.core.async.t_cljs$core$async60283.cljs$lang$ctorPrWriter = (function (this__44105__auto__,writer__44106__auto__,opt__44107__auto__){
return cljs.core._write.call(null,writer__44106__auto__,"cljs.core.async/t_cljs$core$async60283");
});

cljs.core.async.__GT_t_cljs$core$async60283 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async60283(flag__$1,cb__$1,meta60284){
return (new cljs.core.async.t_cljs$core$async60283(flag__$1,cb__$1,meta60284));
});

}

return (new cljs.core.async.t_cljs$core$async60283(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__60286_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__60286_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__60287_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__60287_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__43494__auto__ = wport;
if(cljs.core.truth_(or__43494__auto__)){
return or__43494__auto__;
} else {
return port;
}
})()], null));
} else {
var G__60288 = (i + (1));
i = G__60288;
continue;
}
} else {
return null;
}
break;
}
})();
var or__43494__auto__ = ret;
if(cljs.core.truth_(or__43494__auto__)){
return or__43494__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__43482__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__43482__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__43482__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__44614__auto__ = [];
var len__44607__auto___60294 = arguments.length;
var i__44608__auto___60295 = (0);
while(true){
if((i__44608__auto___60295 < len__44607__auto___60294)){
args__44614__auto__.push((arguments[i__44608__auto___60295]));

var G__60296 = (i__44608__auto___60295 + (1));
i__44608__auto___60295 = G__60296;
continue;
} else {
}
break;
}

var argseq__44615__auto__ = ((((1) < args__44614__auto__.length))?(new cljs.core.IndexedSeq(args__44614__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44615__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__60291){
var map__60292 = p__60291;
var map__60292__$1 = ((((!((map__60292 == null)))?((((map__60292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60292.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60292):map__60292);
var opts = map__60292__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq60289){
var G__60290 = cljs.core.first.call(null,seq60289);
var seq60289__$1 = cljs.core.next.call(null,seq60289);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__60290,seq60289__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args60297 = [];
var len__44607__auto___60347 = arguments.length;
var i__44608__auto___60348 = (0);
while(true){
if((i__44608__auto___60348 < len__44607__auto___60347)){
args60297.push((arguments[i__44608__auto___60348]));

var G__60349 = (i__44608__auto___60348 + (1));
i__44608__auto___60348 = G__60349;
continue;
} else {
}
break;
}

var G__60299 = args60297.length;
switch (G__60299) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args60297.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__49215__auto___60351 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49215__auto___60351){
return (function (){
var f__49216__auto__ = (function (){var switch__49159__auto__ = ((function (c__49215__auto___60351){
return (function (state_60323){
var state_val_60324 = (state_60323[(1)]);
if((state_val_60324 === (7))){
var inst_60319 = (state_60323[(2)]);
var state_60323__$1 = state_60323;
var statearr_60325_60352 = state_60323__$1;
(statearr_60325_60352[(2)] = inst_60319);

(statearr_60325_60352[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60324 === (1))){
var state_60323__$1 = state_60323;
var statearr_60326_60353 = state_60323__$1;
(statearr_60326_60353[(2)] = null);

(statearr_60326_60353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60324 === (4))){
var inst_60302 = (state_60323[(7)]);
var inst_60302__$1 = (state_60323[(2)]);
var inst_60303 = (inst_60302__$1 == null);
var state_60323__$1 = (function (){var statearr_60327 = state_60323;
(statearr_60327[(7)] = inst_60302__$1);

return statearr_60327;
})();
if(cljs.core.truth_(inst_60303)){
var statearr_60328_60354 = state_60323__$1;
(statearr_60328_60354[(1)] = (5));

} else {
var statearr_60329_60355 = state_60323__$1;
(statearr_60329_60355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60324 === (13))){
var state_60323__$1 = state_60323;
var statearr_60330_60356 = state_60323__$1;
(statearr_60330_60356[(2)] = null);

(statearr_60330_60356[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60324 === (6))){
var inst_60302 = (state_60323[(7)]);
var state_60323__$1 = state_60323;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60323__$1,(11),to,inst_60302);
} else {
if((state_val_60324 === (3))){
var inst_60321 = (state_60323[(2)]);
var state_60323__$1 = state_60323;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60323__$1,inst_60321);
} else {
if((state_val_60324 === (12))){
var state_60323__$1 = state_60323;
var statearr_60331_60357 = state_60323__$1;
(statearr_60331_60357[(2)] = null);

(statearr_60331_60357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60324 === (2))){
var state_60323__$1 = state_60323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60323__$1,(4),from);
} else {
if((state_val_60324 === (11))){
var inst_60312 = (state_60323[(2)]);
var state_60323__$1 = state_60323;
if(cljs.core.truth_(inst_60312)){
var statearr_60332_60358 = state_60323__$1;
(statearr_60332_60358[(1)] = (12));

} else {
var statearr_60333_60359 = state_60323__$1;
(statearr_60333_60359[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60324 === (9))){
var state_60323__$1 = state_60323;
var statearr_60334_60360 = state_60323__$1;
(statearr_60334_60360[(2)] = null);

(statearr_60334_60360[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60324 === (5))){
var state_60323__$1 = state_60323;
if(cljs.core.truth_(close_QMARK_)){
var statearr_60335_60361 = state_60323__$1;
(statearr_60335_60361[(1)] = (8));

} else {
var statearr_60336_60362 = state_60323__$1;
(statearr_60336_60362[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60324 === (14))){
var inst_60317 = (state_60323[(2)]);
var state_60323__$1 = state_60323;
var statearr_60337_60363 = state_60323__$1;
(statearr_60337_60363[(2)] = inst_60317);

(statearr_60337_60363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60324 === (10))){
var inst_60309 = (state_60323[(2)]);
var state_60323__$1 = state_60323;
var statearr_60338_60364 = state_60323__$1;
(statearr_60338_60364[(2)] = inst_60309);

(statearr_60338_60364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60324 === (8))){
var inst_60306 = cljs.core.async.close_BANG_.call(null,to);
var state_60323__$1 = state_60323;
var statearr_60339_60365 = state_60323__$1;
(statearr_60339_60365[(2)] = inst_60306);

(statearr_60339_60365[(1)] = (10));


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
});})(c__49215__auto___60351))
;
return ((function (switch__49159__auto__,c__49215__auto___60351){
return (function() {
var cljs$core$async$state_machine__49160__auto__ = null;
var cljs$core$async$state_machine__49160__auto____0 = (function (){
var statearr_60343 = [null,null,null,null,null,null,null,null];
(statearr_60343[(0)] = cljs$core$async$state_machine__49160__auto__);

(statearr_60343[(1)] = (1));

return statearr_60343;
});
var cljs$core$async$state_machine__49160__auto____1 = (function (state_60323){
while(true){
var ret_value__49161__auto__ = (function (){try{while(true){
var result__49162__auto__ = switch__49159__auto__.call(null,state_60323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49162__auto__;
}
break;
}
}catch (e60344){if((e60344 instanceof Object)){
var ex__49163__auto__ = e60344;
var statearr_60345_60366 = state_60323;
(statearr_60345_60366[(5)] = ex__49163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60344;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60367 = state_60323;
state_60323 = G__60367;
continue;
} else {
return ret_value__49161__auto__;
}
break;
}
});
cljs$core$async$state_machine__49160__auto__ = function(state_60323){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49160__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49160__auto____1.call(this,state_60323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49160__auto____0;
cljs$core$async$state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49160__auto____1;
return cljs$core$async$state_machine__49160__auto__;
})()
;})(switch__49159__auto__,c__49215__auto___60351))
})();
var state__49217__auto__ = (function (){var statearr_60346 = f__49216__auto__.call(null);
(statearr_60346[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49215__auto___60351);

return statearr_60346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49217__auto__);
});})(c__49215__auto___60351))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__60555){
var vec__60556 = p__60555;
var v = cljs.core.nth.call(null,vec__60556,(0),null);
var p = cljs.core.nth.call(null,vec__60556,(1),null);
var job = vec__60556;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__49215__auto___60742 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49215__auto___60742,res,vec__60556,v,p,job,jobs,results){
return (function (){
var f__49216__auto__ = (function (){var switch__49159__auto__ = ((function (c__49215__auto___60742,res,vec__60556,v,p,job,jobs,results){
return (function (state_60563){
var state_val_60564 = (state_60563[(1)]);
if((state_val_60564 === (1))){
var state_60563__$1 = state_60563;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60563__$1,(2),res,v);
} else {
if((state_val_60564 === (2))){
var inst_60560 = (state_60563[(2)]);
var inst_60561 = cljs.core.async.close_BANG_.call(null,res);
var state_60563__$1 = (function (){var statearr_60565 = state_60563;
(statearr_60565[(7)] = inst_60560);

return statearr_60565;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60563__$1,inst_60561);
} else {
return null;
}
}
});})(c__49215__auto___60742,res,vec__60556,v,p,job,jobs,results))
;
return ((function (switch__49159__auto__,c__49215__auto___60742,res,vec__60556,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49160__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49160__auto____0 = (function (){
var statearr_60569 = [null,null,null,null,null,null,null,null];
(statearr_60569[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49160__auto__);

(statearr_60569[(1)] = (1));

return statearr_60569;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49160__auto____1 = (function (state_60563){
while(true){
var ret_value__49161__auto__ = (function (){try{while(true){
var result__49162__auto__ = switch__49159__auto__.call(null,state_60563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49162__auto__;
}
break;
}
}catch (e60570){if((e60570 instanceof Object)){
var ex__49163__auto__ = e60570;
var statearr_60571_60743 = state_60563;
(statearr_60571_60743[(5)] = ex__49163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60744 = state_60563;
state_60563 = G__60744;
continue;
} else {
return ret_value__49161__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49160__auto__ = function(state_60563){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49160__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49160__auto____1.call(this,state_60563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49160__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49160__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49160__auto__;
})()
;})(switch__49159__auto__,c__49215__auto___60742,res,vec__60556,v,p,job,jobs,results))
})();
var state__49217__auto__ = (function (){var statearr_60572 = f__49216__auto__.call(null);
(statearr_60572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49215__auto___60742);

return statearr_60572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49217__auto__);
});})(c__49215__auto___60742,res,vec__60556,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__60573){
var vec__60574 = p__60573;
var v = cljs.core.nth.call(null,vec__60574,(0),null);
var p = cljs.core.nth.call(null,vec__60574,(1),null);
var job = vec__60574;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__44417__auto___60745 = n;
var __60746 = (0);
while(true){
if((__60746 < n__44417__auto___60745)){
var G__60577_60747 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__60577_60747) {
case "compute":
var c__49215__auto___60749 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__60746,c__49215__auto___60749,G__60577_60747,n__44417__auto___60745,jobs,results,process,async){
return (function (){
var f__49216__auto__ = (function (){var switch__49159__auto__ = ((function (__60746,c__49215__auto___60749,G__60577_60747,n__44417__auto___60745,jobs,results,process,async){
return (function (state_60590){
var state_val_60591 = (state_60590[(1)]);
if((state_val_60591 === (1))){
var state_60590__$1 = state_60590;
var statearr_60592_60750 = state_60590__$1;
(statearr_60592_60750[(2)] = null);

(statearr_60592_60750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60591 === (2))){
var state_60590__$1 = state_60590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60590__$1,(4),jobs);
} else {
if((state_val_60591 === (3))){
var inst_60588 = (state_60590[(2)]);
var state_60590__$1 = state_60590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60590__$1,inst_60588);
} else {
if((state_val_60591 === (4))){
var inst_60580 = (state_60590[(2)]);
var inst_60581 = process.call(null,inst_60580);
var state_60590__$1 = state_60590;
if(cljs.core.truth_(inst_60581)){
var statearr_60593_60751 = state_60590__$1;
(statearr_60593_60751[(1)] = (5));

} else {
var statearr_60594_60752 = state_60590__$1;
(statearr_60594_60752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60591 === (5))){
var state_60590__$1 = state_60590;
var statearr_60595_60753 = state_60590__$1;
(statearr_60595_60753[(2)] = null);

(statearr_60595_60753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60591 === (6))){
var state_60590__$1 = state_60590;
var statearr_60596_60754 = state_60590__$1;
(statearr_60596_60754[(2)] = null);

(statearr_60596_60754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60591 === (7))){
var inst_60586 = (state_60590[(2)]);
var state_60590__$1 = state_60590;
var statearr_60597_60755 = state_60590__$1;
(statearr_60597_60755[(2)] = inst_60586);

(statearr_60597_60755[(1)] = (3));


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
});})(__60746,c__49215__auto___60749,G__60577_60747,n__44417__auto___60745,jobs,results,process,async))
;
return ((function (__60746,switch__49159__auto__,c__49215__auto___60749,G__60577_60747,n__44417__auto___60745,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49160__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49160__auto____0 = (function (){
var statearr_60601 = [null,null,null,null,null,null,null];
(statearr_60601[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49160__auto__);

(statearr_60601[(1)] = (1));

return statearr_60601;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49160__auto____1 = (function (state_60590){
while(true){
var ret_value__49161__auto__ = (function (){try{while(true){
var result__49162__auto__ = switch__49159__auto__.call(null,state_60590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49162__auto__;
}
break;
}
}catch (e60602){if((e60602 instanceof Object)){
var ex__49163__auto__ = e60602;
var statearr_60603_60756 = state_60590;
(statearr_60603_60756[(5)] = ex__49163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60757 = state_60590;
state_60590 = G__60757;
continue;
} else {
return ret_value__49161__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49160__auto__ = function(state_60590){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49160__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49160__auto____1.call(this,state_60590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49160__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49160__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49160__auto__;
})()
;})(__60746,switch__49159__auto__,c__49215__auto___60749,G__60577_60747,n__44417__auto___60745,jobs,results,process,async))
})();
var state__49217__auto__ = (function (){var statearr_60604 = f__49216__auto__.call(null);
(statearr_60604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49215__auto___60749);

return statearr_60604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49217__auto__);
});})(__60746,c__49215__auto___60749,G__60577_60747,n__44417__auto___60745,jobs,results,process,async))
);


break;
case "async":
var c__49215__auto___60758 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__60746,c__49215__auto___60758,G__60577_60747,n__44417__auto___60745,jobs,results,process,async){
return (function (){
var f__49216__auto__ = (function (){var switch__49159__auto__ = ((function (__60746,c__49215__auto___60758,G__60577_60747,n__44417__auto___60745,jobs,results,process,async){
return (function (state_60617){
var state_val_60618 = (state_60617[(1)]);
if((state_val_60618 === (1))){
var state_60617__$1 = state_60617;
var statearr_60619_60759 = state_60617__$1;
(statearr_60619_60759[(2)] = null);

(statearr_60619_60759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (2))){
var state_60617__$1 = state_60617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60617__$1,(4),jobs);
} else {
if((state_val_60618 === (3))){
var inst_60615 = (state_60617[(2)]);
var state_60617__$1 = state_60617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60617__$1,inst_60615);
} else {
if((state_val_60618 === (4))){
var inst_60607 = (state_60617[(2)]);
var inst_60608 = async.call(null,inst_60607);
var state_60617__$1 = state_60617;
if(cljs.core.truth_(inst_60608)){
var statearr_60620_60760 = state_60617__$1;
(statearr_60620_60760[(1)] = (5));

} else {
var statearr_60621_60761 = state_60617__$1;
(statearr_60621_60761[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (5))){
var state_60617__$1 = state_60617;
var statearr_60622_60762 = state_60617__$1;
(statearr_60622_60762[(2)] = null);

(statearr_60622_60762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (6))){
var state_60617__$1 = state_60617;
var statearr_60623_60763 = state_60617__$1;
(statearr_60623_60763[(2)] = null);

(statearr_60623_60763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60618 === (7))){
var inst_60613 = (state_60617[(2)]);
var state_60617__$1 = state_60617;
var statearr_60624_60764 = state_60617__$1;
(statearr_60624_60764[(2)] = inst_60613);

(statearr_60624_60764[(1)] = (3));


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
});})(__60746,c__49215__auto___60758,G__60577_60747,n__44417__auto___60745,jobs,results,process,async))
;
return ((function (__60746,switch__49159__auto__,c__49215__auto___60758,G__60577_60747,n__44417__auto___60745,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49160__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49160__auto____0 = (function (){
var statearr_60628 = [null,null,null,null,null,null,null];
(statearr_60628[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49160__auto__);

(statearr_60628[(1)] = (1));

return statearr_60628;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49160__auto____1 = (function (state_60617){
while(true){
var ret_value__49161__auto__ = (function (){try{while(true){
var result__49162__auto__ = switch__49159__auto__.call(null,state_60617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49162__auto__;
}
break;
}
}catch (e60629){if((e60629 instanceof Object)){
var ex__49163__auto__ = e60629;
var statearr_60630_60765 = state_60617;
(statearr_60630_60765[(5)] = ex__49163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60766 = state_60617;
state_60617 = G__60766;
continue;
} else {
return ret_value__49161__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49160__auto__ = function(state_60617){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49160__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49160__auto____1.call(this,state_60617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49160__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49160__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49160__auto__;
})()
;})(__60746,switch__49159__auto__,c__49215__auto___60758,G__60577_60747,n__44417__auto___60745,jobs,results,process,async))
})();
var state__49217__auto__ = (function (){var statearr_60631 = f__49216__auto__.call(null);
(statearr_60631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49215__auto___60758);

return statearr_60631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49217__auto__);
});})(__60746,c__49215__auto___60758,G__60577_60747,n__44417__auto___60745,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__60767 = (__60746 + (1));
__60746 = G__60767;
continue;
} else {
}
break;
}

var c__49215__auto___60768 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49215__auto___60768,jobs,results,process,async){
return (function (){
var f__49216__auto__ = (function (){var switch__49159__auto__ = ((function (c__49215__auto___60768,jobs,results,process,async){
return (function (state_60653){
var state_val_60654 = (state_60653[(1)]);
if((state_val_60654 === (1))){
var state_60653__$1 = state_60653;
var statearr_60655_60769 = state_60653__$1;
(statearr_60655_60769[(2)] = null);

(statearr_60655_60769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60654 === (2))){
var state_60653__$1 = state_60653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60653__$1,(4),from);
} else {
if((state_val_60654 === (3))){
var inst_60651 = (state_60653[(2)]);
var state_60653__$1 = state_60653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60653__$1,inst_60651);
} else {
if((state_val_60654 === (4))){
var inst_60634 = (state_60653[(7)]);
var inst_60634__$1 = (state_60653[(2)]);
var inst_60635 = (inst_60634__$1 == null);
var state_60653__$1 = (function (){var statearr_60656 = state_60653;
(statearr_60656[(7)] = inst_60634__$1);

return statearr_60656;
})();
if(cljs.core.truth_(inst_60635)){
var statearr_60657_60770 = state_60653__$1;
(statearr_60657_60770[(1)] = (5));

} else {
var statearr_60658_60771 = state_60653__$1;
(statearr_60658_60771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60654 === (5))){
var inst_60637 = cljs.core.async.close_BANG_.call(null,jobs);
var state_60653__$1 = state_60653;
var statearr_60659_60772 = state_60653__$1;
(statearr_60659_60772[(2)] = inst_60637);

(statearr_60659_60772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60654 === (6))){
var inst_60634 = (state_60653[(7)]);
var inst_60639 = (state_60653[(8)]);
var inst_60639__$1 = cljs.core.async.chan.call(null,(1));
var inst_60640 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_60641 = [inst_60634,inst_60639__$1];
var inst_60642 = (new cljs.core.PersistentVector(null,2,(5),inst_60640,inst_60641,null));
var state_60653__$1 = (function (){var statearr_60660 = state_60653;
(statearr_60660[(8)] = inst_60639__$1);

return statearr_60660;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60653__$1,(8),jobs,inst_60642);
} else {
if((state_val_60654 === (7))){
var inst_60649 = (state_60653[(2)]);
var state_60653__$1 = state_60653;
var statearr_60661_60773 = state_60653__$1;
(statearr_60661_60773[(2)] = inst_60649);

(statearr_60661_60773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60654 === (8))){
var inst_60639 = (state_60653[(8)]);
var inst_60644 = (state_60653[(2)]);
var state_60653__$1 = (function (){var statearr_60662 = state_60653;
(statearr_60662[(9)] = inst_60644);

return statearr_60662;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60653__$1,(9),results,inst_60639);
} else {
if((state_val_60654 === (9))){
var inst_60646 = (state_60653[(2)]);
var state_60653__$1 = (function (){var statearr_60663 = state_60653;
(statearr_60663[(10)] = inst_60646);

return statearr_60663;
})();
var statearr_60664_60774 = state_60653__$1;
(statearr_60664_60774[(2)] = null);

(statearr_60664_60774[(1)] = (2));


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
});})(c__49215__auto___60768,jobs,results,process,async))
;
return ((function (switch__49159__auto__,c__49215__auto___60768,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49160__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49160__auto____0 = (function (){
var statearr_60668 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_60668[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49160__auto__);

(statearr_60668[(1)] = (1));

return statearr_60668;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49160__auto____1 = (function (state_60653){
while(true){
var ret_value__49161__auto__ = (function (){try{while(true){
var result__49162__auto__ = switch__49159__auto__.call(null,state_60653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49162__auto__;
}
break;
}
}catch (e60669){if((e60669 instanceof Object)){
var ex__49163__auto__ = e60669;
var statearr_60670_60775 = state_60653;
(statearr_60670_60775[(5)] = ex__49163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60776 = state_60653;
state_60653 = G__60776;
continue;
} else {
return ret_value__49161__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49160__auto__ = function(state_60653){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49160__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49160__auto____1.call(this,state_60653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49160__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49160__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49160__auto__;
})()
;})(switch__49159__auto__,c__49215__auto___60768,jobs,results,process,async))
})();
var state__49217__auto__ = (function (){var statearr_60671 = f__49216__auto__.call(null);
(statearr_60671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49215__auto___60768);

return statearr_60671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49217__auto__);
});})(c__49215__auto___60768,jobs,results,process,async))
);


var c__49215__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49215__auto__,jobs,results,process,async){
return (function (){
var f__49216__auto__ = (function (){var switch__49159__auto__ = ((function (c__49215__auto__,jobs,results,process,async){
return (function (state_60709){
var state_val_60710 = (state_60709[(1)]);
if((state_val_60710 === (7))){
var inst_60705 = (state_60709[(2)]);
var state_60709__$1 = state_60709;
var statearr_60711_60777 = state_60709__$1;
(statearr_60711_60777[(2)] = inst_60705);

(statearr_60711_60777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60710 === (20))){
var state_60709__$1 = state_60709;
var statearr_60712_60778 = state_60709__$1;
(statearr_60712_60778[(2)] = null);

(statearr_60712_60778[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60710 === (1))){
var state_60709__$1 = state_60709;
var statearr_60713_60779 = state_60709__$1;
(statearr_60713_60779[(2)] = null);

(statearr_60713_60779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60710 === (4))){
var inst_60674 = (state_60709[(7)]);
var inst_60674__$1 = (state_60709[(2)]);
var inst_60675 = (inst_60674__$1 == null);
var state_60709__$1 = (function (){var statearr_60714 = state_60709;
(statearr_60714[(7)] = inst_60674__$1);

return statearr_60714;
})();
if(cljs.core.truth_(inst_60675)){
var statearr_60715_60780 = state_60709__$1;
(statearr_60715_60780[(1)] = (5));

} else {
var statearr_60716_60781 = state_60709__$1;
(statearr_60716_60781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60710 === (15))){
var inst_60687 = (state_60709[(8)]);
var state_60709__$1 = state_60709;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60709__$1,(18),to,inst_60687);
} else {
if((state_val_60710 === (21))){
var inst_60700 = (state_60709[(2)]);
var state_60709__$1 = state_60709;
var statearr_60717_60782 = state_60709__$1;
(statearr_60717_60782[(2)] = inst_60700);

(statearr_60717_60782[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60710 === (13))){
var inst_60702 = (state_60709[(2)]);
var state_60709__$1 = (function (){var statearr_60718 = state_60709;
(statearr_60718[(9)] = inst_60702);

return statearr_60718;
})();
var statearr_60719_60783 = state_60709__$1;
(statearr_60719_60783[(2)] = null);

(statearr_60719_60783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60710 === (6))){
var inst_60674 = (state_60709[(7)]);
var state_60709__$1 = state_60709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60709__$1,(11),inst_60674);
} else {
if((state_val_60710 === (17))){
var inst_60695 = (state_60709[(2)]);
var state_60709__$1 = state_60709;
if(cljs.core.truth_(inst_60695)){
var statearr_60720_60784 = state_60709__$1;
(statearr_60720_60784[(1)] = (19));

} else {
var statearr_60721_60785 = state_60709__$1;
(statearr_60721_60785[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60710 === (3))){
var inst_60707 = (state_60709[(2)]);
var state_60709__$1 = state_60709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60709__$1,inst_60707);
} else {
if((state_val_60710 === (12))){
var inst_60684 = (state_60709[(10)]);
var state_60709__$1 = state_60709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60709__$1,(14),inst_60684);
} else {
if((state_val_60710 === (2))){
var state_60709__$1 = state_60709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60709__$1,(4),results);
} else {
if((state_val_60710 === (19))){
var state_60709__$1 = state_60709;
var statearr_60722_60786 = state_60709__$1;
(statearr_60722_60786[(2)] = null);

(statearr_60722_60786[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60710 === (11))){
var inst_60684 = (state_60709[(2)]);
var state_60709__$1 = (function (){var statearr_60723 = state_60709;
(statearr_60723[(10)] = inst_60684);

return statearr_60723;
})();
var statearr_60724_60787 = state_60709__$1;
(statearr_60724_60787[(2)] = null);

(statearr_60724_60787[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60710 === (9))){
var state_60709__$1 = state_60709;
var statearr_60725_60788 = state_60709__$1;
(statearr_60725_60788[(2)] = null);

(statearr_60725_60788[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60710 === (5))){
var state_60709__$1 = state_60709;
if(cljs.core.truth_(close_QMARK_)){
var statearr_60726_60789 = state_60709__$1;
(statearr_60726_60789[(1)] = (8));

} else {
var statearr_60727_60790 = state_60709__$1;
(statearr_60727_60790[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60710 === (14))){
var inst_60689 = (state_60709[(11)]);
var inst_60687 = (state_60709[(8)]);
var inst_60687__$1 = (state_60709[(2)]);
var inst_60688 = (inst_60687__$1 == null);
var inst_60689__$1 = cljs.core.not.call(null,inst_60688);
var state_60709__$1 = (function (){var statearr_60728 = state_60709;
(statearr_60728[(11)] = inst_60689__$1);

(statearr_60728[(8)] = inst_60687__$1);

return statearr_60728;
})();
if(inst_60689__$1){
var statearr_60729_60791 = state_60709__$1;
(statearr_60729_60791[(1)] = (15));

} else {
var statearr_60730_60792 = state_60709__$1;
(statearr_60730_60792[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60710 === (16))){
var inst_60689 = (state_60709[(11)]);
var state_60709__$1 = state_60709;
var statearr_60731_60793 = state_60709__$1;
(statearr_60731_60793[(2)] = inst_60689);

(statearr_60731_60793[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60710 === (10))){
var inst_60681 = (state_60709[(2)]);
var state_60709__$1 = state_60709;
var statearr_60732_60794 = state_60709__$1;
(statearr_60732_60794[(2)] = inst_60681);

(statearr_60732_60794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60710 === (18))){
var inst_60692 = (state_60709[(2)]);
var state_60709__$1 = state_60709;
var statearr_60733_60795 = state_60709__$1;
(statearr_60733_60795[(2)] = inst_60692);

(statearr_60733_60795[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60710 === (8))){
var inst_60678 = cljs.core.async.close_BANG_.call(null,to);
var state_60709__$1 = state_60709;
var statearr_60734_60796 = state_60709__$1;
(statearr_60734_60796[(2)] = inst_60678);

(statearr_60734_60796[(1)] = (10));


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
}
}
}
}
});})(c__49215__auto__,jobs,results,process,async))
;
return ((function (switch__49159__auto__,c__49215__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49160__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49160__auto____0 = (function (){
var statearr_60738 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60738[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49160__auto__);

(statearr_60738[(1)] = (1));

return statearr_60738;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49160__auto____1 = (function (state_60709){
while(true){
var ret_value__49161__auto__ = (function (){try{while(true){
var result__49162__auto__ = switch__49159__auto__.call(null,state_60709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49162__auto__;
}
break;
}
}catch (e60739){if((e60739 instanceof Object)){
var ex__49163__auto__ = e60739;
var statearr_60740_60797 = state_60709;
(statearr_60740_60797[(5)] = ex__49163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60798 = state_60709;
state_60709 = G__60798;
continue;
} else {
return ret_value__49161__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49160__auto__ = function(state_60709){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49160__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49160__auto____1.call(this,state_60709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49160__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49160__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49160__auto__;
})()
;})(switch__49159__auto__,c__49215__auto__,jobs,results,process,async))
})();
var state__49217__auto__ = (function (){var statearr_60741 = f__49216__auto__.call(null);
(statearr_60741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49215__auto__);

return statearr_60741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49217__auto__);
});})(c__49215__auto__,jobs,results,process,async))
);

return c__49215__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args60799 = [];
var len__44607__auto___60802 = arguments.length;
var i__44608__auto___60803 = (0);
while(true){
if((i__44608__auto___60803 < len__44607__auto___60802)){
args60799.push((arguments[i__44608__auto___60803]));

var G__60804 = (i__44608__auto___60803 + (1));
i__44608__auto___60803 = G__60804;
continue;
} else {
}
break;
}

var G__60801 = args60799.length;
switch (G__60801) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args60799.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args60806 = [];
var len__44607__auto___60809 = arguments.length;
var i__44608__auto___60810 = (0);
while(true){
if((i__44608__auto___60810 < len__44607__auto___60809)){
args60806.push((arguments[i__44608__auto___60810]));

var G__60811 = (i__44608__auto___60810 + (1));
i__44608__auto___60810 = G__60811;
continue;
} else {
}
break;
}

var G__60808 = args60806.length;
switch (G__60808) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args60806.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args60813 = [];
var len__44607__auto___60866 = arguments.length;
var i__44608__auto___60867 = (0);
while(true){
if((i__44608__auto___60867 < len__44607__auto___60866)){
args60813.push((arguments[i__44608__auto___60867]));

var G__60868 = (i__44608__auto___60867 + (1));
i__44608__auto___60867 = G__60868;
continue;
} else {
}
break;
}

var G__60815 = args60813.length;
switch (G__60815) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args60813.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__49215__auto___60870 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49215__auto___60870,tc,fc){
return (function (){
var f__49216__auto__ = (function (){var switch__49159__auto__ = ((function (c__49215__auto___60870,tc,fc){
return (function (state_60841){
var state_val_60842 = (state_60841[(1)]);
if((state_val_60842 === (7))){
var inst_60837 = (state_60841[(2)]);
var state_60841__$1 = state_60841;
var statearr_60843_60871 = state_60841__$1;
(statearr_60843_60871[(2)] = inst_60837);

(statearr_60843_60871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60842 === (1))){
var state_60841__$1 = state_60841;
var statearr_60844_60872 = state_60841__$1;
(statearr_60844_60872[(2)] = null);

(statearr_60844_60872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60842 === (4))){
var inst_60818 = (state_60841[(7)]);
var inst_60818__$1 = (state_60841[(2)]);
var inst_60819 = (inst_60818__$1 == null);
var state_60841__$1 = (function (){var statearr_60845 = state_60841;
(statearr_60845[(7)] = inst_60818__$1);

return statearr_60845;
})();
if(cljs.core.truth_(inst_60819)){
var statearr_60846_60873 = state_60841__$1;
(statearr_60846_60873[(1)] = (5));

} else {
var statearr_60847_60874 = state_60841__$1;
(statearr_60847_60874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60842 === (13))){
var state_60841__$1 = state_60841;
var statearr_60848_60875 = state_60841__$1;
(statearr_60848_60875[(2)] = null);

(statearr_60848_60875[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60842 === (6))){
var inst_60818 = (state_60841[(7)]);
var inst_60824 = p.call(null,inst_60818);
var state_60841__$1 = state_60841;
if(cljs.core.truth_(inst_60824)){
var statearr_60849_60876 = state_60841__$1;
(statearr_60849_60876[(1)] = (9));

} else {
var statearr_60850_60877 = state_60841__$1;
(statearr_60850_60877[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60842 === (3))){
var inst_60839 = (state_60841[(2)]);
var state_60841__$1 = state_60841;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60841__$1,inst_60839);
} else {
if((state_val_60842 === (12))){
var state_60841__$1 = state_60841;
var statearr_60851_60878 = state_60841__$1;
(statearr_60851_60878[(2)] = null);

(statearr_60851_60878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60842 === (2))){
var state_60841__$1 = state_60841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60841__$1,(4),ch);
} else {
if((state_val_60842 === (11))){
var inst_60818 = (state_60841[(7)]);
var inst_60828 = (state_60841[(2)]);
var state_60841__$1 = state_60841;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60841__$1,(8),inst_60828,inst_60818);
} else {
if((state_val_60842 === (9))){
var state_60841__$1 = state_60841;
var statearr_60852_60879 = state_60841__$1;
(statearr_60852_60879[(2)] = tc);

(statearr_60852_60879[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60842 === (5))){
var inst_60821 = cljs.core.async.close_BANG_.call(null,tc);
var inst_60822 = cljs.core.async.close_BANG_.call(null,fc);
var state_60841__$1 = (function (){var statearr_60853 = state_60841;
(statearr_60853[(8)] = inst_60821);

return statearr_60853;
})();
var statearr_60854_60880 = state_60841__$1;
(statearr_60854_60880[(2)] = inst_60822);

(statearr_60854_60880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60842 === (14))){
var inst_60835 = (state_60841[(2)]);
var state_60841__$1 = state_60841;
var statearr_60855_60881 = state_60841__$1;
(statearr_60855_60881[(2)] = inst_60835);

(statearr_60855_60881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60842 === (10))){
var state_60841__$1 = state_60841;
var statearr_60856_60882 = state_60841__$1;
(statearr_60856_60882[(2)] = fc);

(statearr_60856_60882[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60842 === (8))){
var inst_60830 = (state_60841[(2)]);
var state_60841__$1 = state_60841;
if(cljs.core.truth_(inst_60830)){
var statearr_60857_60883 = state_60841__$1;
(statearr_60857_60883[(1)] = (12));

} else {
var statearr_60858_60884 = state_60841__$1;
(statearr_60858_60884[(1)] = (13));

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
});})(c__49215__auto___60870,tc,fc))
;
return ((function (switch__49159__auto__,c__49215__auto___60870,tc,fc){
return (function() {
var cljs$core$async$state_machine__49160__auto__ = null;
var cljs$core$async$state_machine__49160__auto____0 = (function (){
var statearr_60862 = [null,null,null,null,null,null,null,null,null];
(statearr_60862[(0)] = cljs$core$async$state_machine__49160__auto__);

(statearr_60862[(1)] = (1));

return statearr_60862;
});
var cljs$core$async$state_machine__49160__auto____1 = (function (state_60841){
while(true){
var ret_value__49161__auto__ = (function (){try{while(true){
var result__49162__auto__ = switch__49159__auto__.call(null,state_60841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49162__auto__;
}
break;
}
}catch (e60863){if((e60863 instanceof Object)){
var ex__49163__auto__ = e60863;
var statearr_60864_60885 = state_60841;
(statearr_60864_60885[(5)] = ex__49163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60886 = state_60841;
state_60841 = G__60886;
continue;
} else {
return ret_value__49161__auto__;
}
break;
}
});
cljs$core$async$state_machine__49160__auto__ = function(state_60841){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49160__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49160__auto____1.call(this,state_60841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49160__auto____0;
cljs$core$async$state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49160__auto____1;
return cljs$core$async$state_machine__49160__auto__;
})()
;})(switch__49159__auto__,c__49215__auto___60870,tc,fc))
})();
var state__49217__auto__ = (function (){var statearr_60865 = f__49216__auto__.call(null);
(statearr_60865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49215__auto___60870);

return statearr_60865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49217__auto__);
});})(c__49215__auto___60870,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__49215__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49215__auto__){
return (function (){
var f__49216__auto__ = (function (){var switch__49159__auto__ = ((function (c__49215__auto__){
return (function (state_60950){
var state_val_60951 = (state_60950[(1)]);
if((state_val_60951 === (7))){
var inst_60946 = (state_60950[(2)]);
var state_60950__$1 = state_60950;
var statearr_60952_60973 = state_60950__$1;
(statearr_60952_60973[(2)] = inst_60946);

(statearr_60952_60973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60951 === (1))){
var inst_60930 = init;
var state_60950__$1 = (function (){var statearr_60953 = state_60950;
(statearr_60953[(7)] = inst_60930);

return statearr_60953;
})();
var statearr_60954_60974 = state_60950__$1;
(statearr_60954_60974[(2)] = null);

(statearr_60954_60974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60951 === (4))){
var inst_60933 = (state_60950[(8)]);
var inst_60933__$1 = (state_60950[(2)]);
var inst_60934 = (inst_60933__$1 == null);
var state_60950__$1 = (function (){var statearr_60955 = state_60950;
(statearr_60955[(8)] = inst_60933__$1);

return statearr_60955;
})();
if(cljs.core.truth_(inst_60934)){
var statearr_60956_60975 = state_60950__$1;
(statearr_60956_60975[(1)] = (5));

} else {
var statearr_60957_60976 = state_60950__$1;
(statearr_60957_60976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60951 === (6))){
var inst_60930 = (state_60950[(7)]);
var inst_60937 = (state_60950[(9)]);
var inst_60933 = (state_60950[(8)]);
var inst_60937__$1 = f.call(null,inst_60930,inst_60933);
var inst_60938 = cljs.core.reduced_QMARK_.call(null,inst_60937__$1);
var state_60950__$1 = (function (){var statearr_60958 = state_60950;
(statearr_60958[(9)] = inst_60937__$1);

return statearr_60958;
})();
if(inst_60938){
var statearr_60959_60977 = state_60950__$1;
(statearr_60959_60977[(1)] = (8));

} else {
var statearr_60960_60978 = state_60950__$1;
(statearr_60960_60978[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60951 === (3))){
var inst_60948 = (state_60950[(2)]);
var state_60950__$1 = state_60950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60950__$1,inst_60948);
} else {
if((state_val_60951 === (2))){
var state_60950__$1 = state_60950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60950__$1,(4),ch);
} else {
if((state_val_60951 === (9))){
var inst_60937 = (state_60950[(9)]);
var inst_60930 = inst_60937;
var state_60950__$1 = (function (){var statearr_60961 = state_60950;
(statearr_60961[(7)] = inst_60930);

return statearr_60961;
})();
var statearr_60962_60979 = state_60950__$1;
(statearr_60962_60979[(2)] = null);

(statearr_60962_60979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60951 === (5))){
var inst_60930 = (state_60950[(7)]);
var state_60950__$1 = state_60950;
var statearr_60963_60980 = state_60950__$1;
(statearr_60963_60980[(2)] = inst_60930);

(statearr_60963_60980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60951 === (10))){
var inst_60944 = (state_60950[(2)]);
var state_60950__$1 = state_60950;
var statearr_60964_60981 = state_60950__$1;
(statearr_60964_60981[(2)] = inst_60944);

(statearr_60964_60981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60951 === (8))){
var inst_60937 = (state_60950[(9)]);
var inst_60940 = cljs.core.deref.call(null,inst_60937);
var state_60950__$1 = state_60950;
var statearr_60965_60982 = state_60950__$1;
(statearr_60965_60982[(2)] = inst_60940);

(statearr_60965_60982[(1)] = (10));


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
});})(c__49215__auto__))
;
return ((function (switch__49159__auto__,c__49215__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__49160__auto__ = null;
var cljs$core$async$reduce_$_state_machine__49160__auto____0 = (function (){
var statearr_60969 = [null,null,null,null,null,null,null,null,null,null];
(statearr_60969[(0)] = cljs$core$async$reduce_$_state_machine__49160__auto__);

(statearr_60969[(1)] = (1));

return statearr_60969;
});
var cljs$core$async$reduce_$_state_machine__49160__auto____1 = (function (state_60950){
while(true){
var ret_value__49161__auto__ = (function (){try{while(true){
var result__49162__auto__ = switch__49159__auto__.call(null,state_60950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49162__auto__;
}
break;
}
}catch (e60970){if((e60970 instanceof Object)){
var ex__49163__auto__ = e60970;
var statearr_60971_60983 = state_60950;
(statearr_60971_60983[(5)] = ex__49163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60984 = state_60950;
state_60950 = G__60984;
continue;
} else {
return ret_value__49161__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__49160__auto__ = function(state_60950){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__49160__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__49160__auto____1.call(this,state_60950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__49160__auto____0;
cljs$core$async$reduce_$_state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__49160__auto____1;
return cljs$core$async$reduce_$_state_machine__49160__auto__;
})()
;})(switch__49159__auto__,c__49215__auto__))
})();
var state__49217__auto__ = (function (){var statearr_60972 = f__49216__auto__.call(null);
(statearr_60972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49215__auto__);

return statearr_60972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49217__auto__);
});})(c__49215__auto__))
);

return c__49215__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__49215__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49215__auto__,f__$1){
return (function (){
var f__49216__auto__ = (function (){var switch__49159__auto__ = ((function (c__49215__auto__,f__$1){
return (function (state_61004){
var state_val_61005 = (state_61004[(1)]);
if((state_val_61005 === (1))){
var inst_60999 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_61004__$1 = state_61004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61004__$1,(2),inst_60999);
} else {
if((state_val_61005 === (2))){
var inst_61001 = (state_61004[(2)]);
var inst_61002 = f__$1.call(null,inst_61001);
var state_61004__$1 = state_61004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61004__$1,inst_61002);
} else {
return null;
}
}
});})(c__49215__auto__,f__$1))
;
return ((function (switch__49159__auto__,c__49215__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__49160__auto__ = null;
var cljs$core$async$transduce_$_state_machine__49160__auto____0 = (function (){
var statearr_61009 = [null,null,null,null,null,null,null];
(statearr_61009[(0)] = cljs$core$async$transduce_$_state_machine__49160__auto__);

(statearr_61009[(1)] = (1));

return statearr_61009;
});
var cljs$core$async$transduce_$_state_machine__49160__auto____1 = (function (state_61004){
while(true){
var ret_value__49161__auto__ = (function (){try{while(true){
var result__49162__auto__ = switch__49159__auto__.call(null,state_61004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49162__auto__;
}
break;
}
}catch (e61010){if((e61010 instanceof Object)){
var ex__49163__auto__ = e61010;
var statearr_61011_61013 = state_61004;
(statearr_61011_61013[(5)] = ex__49163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61010;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61014 = state_61004;
state_61004 = G__61014;
continue;
} else {
return ret_value__49161__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__49160__auto__ = function(state_61004){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__49160__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__49160__auto____1.call(this,state_61004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__49160__auto____0;
cljs$core$async$transduce_$_state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__49160__auto____1;
return cljs$core$async$transduce_$_state_machine__49160__auto__;
})()
;})(switch__49159__auto__,c__49215__auto__,f__$1))
})();
var state__49217__auto__ = (function (){var statearr_61012 = f__49216__auto__.call(null);
(statearr_61012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49215__auto__);

return statearr_61012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49217__auto__);
});})(c__49215__auto__,f__$1))
);

return c__49215__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args61015 = [];
var len__44607__auto___61067 = arguments.length;
var i__44608__auto___61068 = (0);
while(true){
if((i__44608__auto___61068 < len__44607__auto___61067)){
args61015.push((arguments[i__44608__auto___61068]));

var G__61069 = (i__44608__auto___61068 + (1));
i__44608__auto___61068 = G__61069;
continue;
} else {
}
break;
}

var G__61017 = args61015.length;
switch (G__61017) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args61015.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__49215__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49215__auto__){
return (function (){
var f__49216__auto__ = (function (){var switch__49159__auto__ = ((function (c__49215__auto__){
return (function (state_61042){
var state_val_61043 = (state_61042[(1)]);
if((state_val_61043 === (7))){
var inst_61024 = (state_61042[(2)]);
var state_61042__$1 = state_61042;
var statearr_61044_61071 = state_61042__$1;
(statearr_61044_61071[(2)] = inst_61024);

(statearr_61044_61071[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61043 === (1))){
var inst_61018 = cljs.core.seq.call(null,coll);
var inst_61019 = inst_61018;
var state_61042__$1 = (function (){var statearr_61045 = state_61042;
(statearr_61045[(7)] = inst_61019);

return statearr_61045;
})();
var statearr_61046_61072 = state_61042__$1;
(statearr_61046_61072[(2)] = null);

(statearr_61046_61072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61043 === (4))){
var inst_61019 = (state_61042[(7)]);
var inst_61022 = cljs.core.first.call(null,inst_61019);
var state_61042__$1 = state_61042;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61042__$1,(7),ch,inst_61022);
} else {
if((state_val_61043 === (13))){
var inst_61036 = (state_61042[(2)]);
var state_61042__$1 = state_61042;
var statearr_61047_61073 = state_61042__$1;
(statearr_61047_61073[(2)] = inst_61036);

(statearr_61047_61073[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61043 === (6))){
var inst_61027 = (state_61042[(2)]);
var state_61042__$1 = state_61042;
if(cljs.core.truth_(inst_61027)){
var statearr_61048_61074 = state_61042__$1;
(statearr_61048_61074[(1)] = (8));

} else {
var statearr_61049_61075 = state_61042__$1;
(statearr_61049_61075[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61043 === (3))){
var inst_61040 = (state_61042[(2)]);
var state_61042__$1 = state_61042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61042__$1,inst_61040);
} else {
if((state_val_61043 === (12))){
var state_61042__$1 = state_61042;
var statearr_61050_61076 = state_61042__$1;
(statearr_61050_61076[(2)] = null);

(statearr_61050_61076[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61043 === (2))){
var inst_61019 = (state_61042[(7)]);
var state_61042__$1 = state_61042;
if(cljs.core.truth_(inst_61019)){
var statearr_61051_61077 = state_61042__$1;
(statearr_61051_61077[(1)] = (4));

} else {
var statearr_61052_61078 = state_61042__$1;
(statearr_61052_61078[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61043 === (11))){
var inst_61033 = cljs.core.async.close_BANG_.call(null,ch);
var state_61042__$1 = state_61042;
var statearr_61053_61079 = state_61042__$1;
(statearr_61053_61079[(2)] = inst_61033);

(statearr_61053_61079[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61043 === (9))){
var state_61042__$1 = state_61042;
if(cljs.core.truth_(close_QMARK_)){
var statearr_61054_61080 = state_61042__$1;
(statearr_61054_61080[(1)] = (11));

} else {
var statearr_61055_61081 = state_61042__$1;
(statearr_61055_61081[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61043 === (5))){
var inst_61019 = (state_61042[(7)]);
var state_61042__$1 = state_61042;
var statearr_61056_61082 = state_61042__$1;
(statearr_61056_61082[(2)] = inst_61019);

(statearr_61056_61082[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61043 === (10))){
var inst_61038 = (state_61042[(2)]);
var state_61042__$1 = state_61042;
var statearr_61057_61083 = state_61042__$1;
(statearr_61057_61083[(2)] = inst_61038);

(statearr_61057_61083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61043 === (8))){
var inst_61019 = (state_61042[(7)]);
var inst_61029 = cljs.core.next.call(null,inst_61019);
var inst_61019__$1 = inst_61029;
var state_61042__$1 = (function (){var statearr_61058 = state_61042;
(statearr_61058[(7)] = inst_61019__$1);

return statearr_61058;
})();
var statearr_61059_61084 = state_61042__$1;
(statearr_61059_61084[(2)] = null);

(statearr_61059_61084[(1)] = (2));


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
});})(c__49215__auto__))
;
return ((function (switch__49159__auto__,c__49215__auto__){
return (function() {
var cljs$core$async$state_machine__49160__auto__ = null;
var cljs$core$async$state_machine__49160__auto____0 = (function (){
var statearr_61063 = [null,null,null,null,null,null,null,null];
(statearr_61063[(0)] = cljs$core$async$state_machine__49160__auto__);

(statearr_61063[(1)] = (1));

return statearr_61063;
});
var cljs$core$async$state_machine__49160__auto____1 = (function (state_61042){
while(true){
var ret_value__49161__auto__ = (function (){try{while(true){
var result__49162__auto__ = switch__49159__auto__.call(null,state_61042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49162__auto__;
}
break;
}
}catch (e61064){if((e61064 instanceof Object)){
var ex__49163__auto__ = e61064;
var statearr_61065_61085 = state_61042;
(statearr_61065_61085[(5)] = ex__49163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61086 = state_61042;
state_61042 = G__61086;
continue;
} else {
return ret_value__49161__auto__;
}
break;
}
});
cljs$core$async$state_machine__49160__auto__ = function(state_61042){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49160__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49160__auto____1.call(this,state_61042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49160__auto____0;
cljs$core$async$state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49160__auto____1;
return cljs$core$async$state_machine__49160__auto__;
})()
;})(switch__49159__auto__,c__49215__auto__))
})();
var state__49217__auto__ = (function (){var statearr_61066 = f__49216__auto__.call(null);
(statearr_61066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49215__auto__);

return statearr_61066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49217__auto__);
});})(c__49215__auto__))
);

return c__49215__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__44162__auto__ = (((_ == null))?null:_);
var m__44163__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__44162__auto__)]);
if(!((m__44163__auto__ == null))){
return m__44163__auto__.call(null,_);
} else {
var m__44163__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__44163__auto____$1 == null))){
return m__44163__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__44162__auto__ = (((m == null))?null:m);
var m__44163__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__44162__auto__)]);
if(!((m__44163__auto__ == null))){
return m__44163__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__44163__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__44163__auto____$1 == null))){
return m__44163__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__44162__auto__ = (((m == null))?null:m);
var m__44163__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__44162__auto__)]);
if(!((m__44163__auto__ == null))){
return m__44163__auto__.call(null,m,ch);
} else {
var m__44163__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__44163__auto____$1 == null))){
return m__44163__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__44162__auto__ = (((m == null))?null:m);
var m__44163__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__44162__auto__)]);
if(!((m__44163__auto__ == null))){
return m__44163__auto__.call(null,m);
} else {
var m__44163__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__44163__auto____$1 == null))){
return m__44163__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async61312 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61312 = (function (ch,cs,meta61313){
this.ch = ch;
this.cs = cs;
this.meta61313 = meta61313;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async61312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_61314,meta61313__$1){
var self__ = this;
var _61314__$1 = this;
return (new cljs.core.async.t_cljs$core$async61312(self__.ch,self__.cs,meta61313__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async61312.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_61314){
var self__ = this;
var _61314__$1 = this;
return self__.meta61313;
});})(cs))
;

cljs.core.async.t_cljs$core$async61312.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61312.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async61312.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61312.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async61312.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async61312.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async61312.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta61313","meta61313",114464571,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async61312.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61312.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61312";

cljs.core.async.t_cljs$core$async61312.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__44105__auto__,writer__44106__auto__,opt__44107__auto__){
return cljs.core._write.call(null,writer__44106__auto__,"cljs.core.async/t_cljs$core$async61312");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async61312 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async61312(ch__$1,cs__$1,meta61313){
return (new cljs.core.async.t_cljs$core$async61312(ch__$1,cs__$1,meta61313));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async61312(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__49215__auto___61537 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49215__auto___61537,cs,m,dchan,dctr,done){
return (function (){
var f__49216__auto__ = (function (){var switch__49159__auto__ = ((function (c__49215__auto___61537,cs,m,dchan,dctr,done){
return (function (state_61449){
var state_val_61450 = (state_61449[(1)]);
if((state_val_61450 === (7))){
var inst_61445 = (state_61449[(2)]);
var state_61449__$1 = state_61449;
var statearr_61451_61538 = state_61449__$1;
(statearr_61451_61538[(2)] = inst_61445);

(statearr_61451_61538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61450 === (20))){
var inst_61348 = (state_61449[(7)]);
var inst_61360 = cljs.core.first.call(null,inst_61348);
var inst_61361 = cljs.core.nth.call(null,inst_61360,(0),null);
var inst_61362 = cljs.core.nth.call(null,inst_61360,(1),null);
var state_61449__$1 = (function (){var statearr_61452 = state_61449;
(statearr_61452[(8)] = inst_61361);

return statearr_61452;
})();
if(cljs.core.truth_(inst_61362)){
var statearr_61453_61539 = state_61449__$1;
(statearr_61453_61539[(1)] = (22));

} else {
var statearr_61454_61540 = state_61449__$1;
(statearr_61454_61540[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61450 === (27))){
var inst_61397 = (state_61449[(9)]);
var inst_61390 = (state_61449[(10)]);
var inst_61392 = (state_61449[(11)]);
var inst_61317 = (state_61449[(12)]);
var inst_61397__$1 = cljs.core._nth.call(null,inst_61390,inst_61392);
var inst_61398 = cljs.core.async.put_BANG_.call(null,inst_61397__$1,inst_61317,done);
var state_61449__$1 = (function (){var statearr_61455 = state_61449;
(statearr_61455[(9)] = inst_61397__$1);

return statearr_61455;
})();
if(cljs.core.truth_(inst_61398)){
var statearr_61456_61541 = state_61449__$1;
(statearr_61456_61541[(1)] = (30));

} else {
var statearr_61457_61542 = state_61449__$1;
(statearr_61457_61542[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61450 === (1))){
var state_61449__$1 = state_61449;
var statearr_61458_61543 = state_61449__$1;
(statearr_61458_61543[(2)] = null);

(statearr_61458_61543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61450 === (24))){
var inst_61348 = (state_61449[(7)]);
var inst_61367 = (state_61449[(2)]);
var inst_61368 = cljs.core.next.call(null,inst_61348);
var inst_61326 = inst_61368;
var inst_61327 = null;
var inst_61328 = (0);
var inst_61329 = (0);
var state_61449__$1 = (function (){var statearr_61459 = state_61449;
(statearr_61459[(13)] = inst_61329);

(statearr_61459[(14)] = inst_61367);

(statearr_61459[(15)] = inst_61328);

(statearr_61459[(16)] = inst_61327);

(statearr_61459[(17)] = inst_61326);

return statearr_61459;
})();
var statearr_61460_61544 = state_61449__$1;
(statearr_61460_61544[(2)] = null);

(statearr_61460_61544[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61450 === (39))){
var state_61449__$1 = state_61449;
var statearr_61464_61545 = state_61449__$1;
(statearr_61464_61545[(2)] = null);

(statearr_61464_61545[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61450 === (4))){
var inst_61317 = (state_61449[(12)]);
var inst_61317__$1 = (state_61449[(2)]);
var inst_61318 = (inst_61317__$1 == null);
var state_61449__$1 = (function (){var statearr_61465 = state_61449;
(statearr_61465[(12)] = inst_61317__$1);

return statearr_61465;
})();
if(cljs.core.truth_(inst_61318)){
var statearr_61466_61546 = state_61449__$1;
(statearr_61466_61546[(1)] = (5));

} else {
var statearr_61467_61547 = state_61449__$1;
(statearr_61467_61547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61450 === (15))){
var inst_61329 = (state_61449[(13)]);
var inst_61328 = (state_61449[(15)]);
var inst_61327 = (state_61449[(16)]);
var inst_61326 = (state_61449[(17)]);
var inst_61344 = (state_61449[(2)]);
var inst_61345 = (inst_61329 + (1));
var tmp61461 = inst_61328;
var tmp61462 = inst_61327;
var tmp61463 = inst_61326;
var inst_61326__$1 = tmp61463;
var inst_61327__$1 = tmp61462;
var inst_61328__$1 = tmp61461;
var inst_61329__$1 = inst_61345;
var state_61449__$1 = (function (){var statearr_61468 = state_61449;
(statearr_61468[(13)] = inst_61329__$1);

(statearr_61468[(18)] = inst_61344);

(statearr_61468[(15)] = inst_61328__$1);

(statearr_61468[(16)] = inst_61327__$1);

(statearr_61468[(17)] = inst_61326__$1);

return statearr_61468;
})();
var statearr_61469_61548 = state_61449__$1;
(statearr_61469_61548[(2)] = null);

(statearr_61469_61548[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61450 === (21))){
var inst_61371 = (state_61449[(2)]);
var state_61449__$1 = state_61449;
var statearr_61473_61549 = state_61449__$1;
(statearr_61473_61549[(2)] = inst_61371);

(statearr_61473_61549[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61450 === (31))){
var inst_61397 = (state_61449[(9)]);
var inst_61401 = done.call(null,null);
var inst_61402 = cljs.core.async.untap_STAR_.call(null,m,inst_61397);
var state_61449__$1 = (function (){var statearr_61474 = state_61449;
(statearr_61474[(19)] = inst_61401);

return statearr_61474;
})();
var statearr_61475_61550 = state_61449__$1;
(statearr_61475_61550[(2)] = inst_61402);

(statearr_61475_61550[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61450 === (32))){
var inst_61390 = (state_61449[(10)]);
var inst_61392 = (state_61449[(11)]);
var inst_61389 = (state_61449[(20)]);
var inst_61391 = (state_61449[(21)]);
var inst_61404 = (state_61449[(2)]);
var inst_61405 = (inst_61392 + (1));
var tmp61470 = inst_61390;
var tmp61471 = inst_61389;
var tmp61472 = inst_61391;
var inst_61389__$1 = tmp61471;
var inst_61390__$1 = tmp61470;
var inst_61391__$1 = tmp61472;
var inst_61392__$1 = inst_61405;
var state_61449__$1 = (function (){var statearr_61476 = state_61449;
(statearr_61476[(22)] = inst_61404);

(statearr_61476[(10)] = inst_61390__$1);

(statearr_61476[(11)] = inst_61392__$1);

(statearr_61476[(20)] = inst_61389__$1);

(statearr_61476[(21)] = inst_61391__$1);

return statearr_61476;
})();
var statearr_61477_61551 = state_61449__$1;
(statearr_61477_61551[(2)] = null);

(statearr_61477_61551[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61450 === (40))){
var inst_61417 = (state_61449[(23)]);
var inst_61421 = done.call(null,null);
var inst_61422 = cljs.core.async.untap_STAR_.call(null,m,inst_61417);
var state_61449__$1 = (function (){var statearr_61478 = state_61449;
(statearr_61478[(24)] = inst_61421);

return statearr_61478;
})();
var statearr_61479_61552 = state_61449__$1;
(statearr_61479_61552[(2)] = inst_61422);

(statearr_61479_61552[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61450 === (33))){
var inst_61408 = (state_61449[(25)]);
var inst_61410 = cljs.core.chunked_seq_QMARK_.call(null,inst_61408);
var state_61449__$1 = state_61449;
if(inst_61410){
var statearr_61480_61553 = state_61449__$1;
(statearr_61480_61553[(1)] = (36));

} else {
var statearr_61481_61554 = state_61449__$1;
(statearr_61481_61554[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61450 === (13))){
var inst_61338 = (state_61449[(26)]);
var inst_61341 = cljs.core.async.close_BANG_.call(null,inst_61338);
var state_61449__$1 = state_61449;
var statearr_61482_61555 = state_61449__$1;
(statearr_61482_61555[(2)] = inst_61341);

(statearr_61482_61555[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61450 === (22))){
var inst_61361 = (state_61449[(8)]);
var inst_61364 = cljs.core.async.close_BANG_.call(null,inst_61361);
var state_61449__$1 = state_61449;
var statearr_61483_61556 = state_61449__$1;
(statearr_61483_61556[(2)] = inst_61364);

(statearr_61483_61556[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61450 === (36))){
var inst_61408 = (state_61449[(25)]);
var inst_61412 = cljs.core.chunk_first.call(null,inst_61408);
var inst_61413 = cljs.core.chunk_rest.call(null,inst_61408);
var inst_61414 = cljs.core.count.call(null,inst_61412);
var inst_61389 = inst_61413;
var inst_61390 = inst_61412;
var inst_61391 = inst_61414;
var inst_61392 = (0);
var state_61449__$1 = (function (){var statearr_61484 = state_61449;
(statearr_61484[(10)] = inst_61390);

(statearr_61484[(11)] = inst_61392);

(statearr_61484[(20)] = inst_61389);

(statearr_61484[(21)] = inst_61391);

return statearr_61484;
})();
var statearr_61485_61557 = state_61449__$1;
(statearr_61485_61557[(2)] = null);

(statearr_61485_61557[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61450 === (41))){
var inst_61408 = (state_61449[(25)]);
var inst_61424 = (state_61449[(2)]);
var inst_61425 = cljs.core.next.call(null,inst_61408);
var inst_61389 = inst_61425;
var inst_61390 = null;
var inst_61391 = (0);
var inst_61392 = (0);
var state_61449__$1 = (function (){var statearr_61486 = state_61449;
(statearr_61486[(10)] = inst_61390);

(statearr_61486[(27)] = inst_61424);

(statearr_61486[(11)] = inst_61392);

(statearr_61486[(20)] = inst_61389);

(statearr_61486[(21)] = inst_61391);

return statearr_61486;
})();
var statearr_61487_61558 = state_61449__$1;
(statearr_61487_61558[(2)] = null);

(statearr_61487_61558[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61450 === (43))){
var state_61449__$1 = state_61449;
var statearr_61488_61559 = state_61449__$1;
(statearr_61488_61559[(2)] = null);

(statearr_61488_61559[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61450 === (29))){
var inst_61433 = (state_61449[(2)]);
var state_61449__$1 = state_61449;
var statearr_61489_61560 = state_61449__$1;
(statearr_61489_61560[(2)] = inst_61433);

(statearr_61489_61560[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61450 === (44))){
var inst_61442 = (state_61449[(2)]);
var state_61449__$1 = (function (){var statearr_61490 = state_61449;
(statearr_61490[(28)] = inst_61442);

return statearr_61490;
})();
var statearr_61491_61561 = state_61449__$1;
(statearr_61491_61561[(2)] = null);

(statearr_61491_61561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61450 === (6))){
var inst_61381 = (state_61449[(29)]);
var inst_61380 = cljs.core.deref.call(null,cs);
var inst_61381__$1 = cljs.core.keys.call(null,inst_61380);
var inst_61382 = cljs.core.count.call(null,inst_61381__$1);
var inst_61383 = cljs.core.reset_BANG_.call(null,dctr,inst_61382);
var inst_61388 = cljs.core.seq.call(null,inst_61381__$1);
var inst_61389 = inst_61388;
var inst_61390 = null;
var inst_61391 = (0);
var inst_61392 = (0);
var state_61449__$1 = (function (){var statearr_61492 = state_61449;
(statearr_61492[(29)] = inst_61381__$1);

(statearr_61492[(10)] = inst_61390);

(statearr_61492[(30)] = inst_61383);

(statearr_61492[(11)] = inst_61392);

(statearr_61492[(20)] = inst_61389);

(statearr_61492[(21)] = inst_61391);

return statearr_61492;
})();
var statearr_61493_61562 = state_61449__$1;
(statearr_61493_61562[(2)] = null);

(statearr_61493_61562[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61450 === (28))){
var inst_61408 = (state_61449[(25)]);
var inst_61389 = (state_61449[(20)]);
var inst_61408__$1 = cljs.core.seq.call(null,inst_61389);
var state_61449__$1 = (function (){var statearr_61494 = state_61449;
(statearr_61494[(25)] = inst_61408__$1);

return statearr_61494;
})();
if(inst_61408__$1){
var statearr_61495_61563 = state_61449__$1;
(statearr_61495_61563[(1)] = (33));

} else {
var statearr_61496_61564 = state_61449__$1;
(statearr_61496_61564[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61450 === (25))){
var inst_61392 = (state_61449[(11)]);
var inst_61391 = (state_61449[(21)]);
var inst_61394 = (inst_61392 < inst_61391);
var inst_61395 = inst_61394;
var state_61449__$1 = state_61449;
if(cljs.core.truth_(inst_61395)){
var statearr_61497_61565 = state_61449__$1;
(statearr_61497_61565[(1)] = (27));

} else {
var statearr_61498_61566 = state_61449__$1;
(statearr_61498_61566[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61450 === (34))){
var state_61449__$1 = state_61449;
var statearr_61499_61567 = state_61449__$1;
(statearr_61499_61567[(2)] = null);

(statearr_61499_61567[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61450 === (17))){
var state_61449__$1 = state_61449;
var statearr_61500_61568 = state_61449__$1;
(statearr_61500_61568[(2)] = null);

(statearr_61500_61568[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61450 === (3))){
var inst_61447 = (state_61449[(2)]);
var state_61449__$1 = state_61449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61449__$1,inst_61447);
} else {
if((state_val_61450 === (12))){
var inst_61376 = (state_61449[(2)]);
var state_61449__$1 = state_61449;
var statearr_61501_61569 = state_61449__$1;
(statearr_61501_61569[(2)] = inst_61376);

(statearr_61501_61569[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61450 === (2))){
var state_61449__$1 = state_61449;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61449__$1,(4),ch);
} else {
if((state_val_61450 === (23))){
var state_61449__$1 = state_61449;
var statearr_61502_61570 = state_61449__$1;
(statearr_61502_61570[(2)] = null);

(statearr_61502_61570[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61450 === (35))){
var inst_61431 = (state_61449[(2)]);
var state_61449__$1 = state_61449;
var statearr_61503_61571 = state_61449__$1;
(statearr_61503_61571[(2)] = inst_61431);

(statearr_61503_61571[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61450 === (19))){
var inst_61348 = (state_61449[(7)]);
var inst_61352 = cljs.core.chunk_first.call(null,inst_61348);
var inst_61353 = cljs.core.chunk_rest.call(null,inst_61348);
var inst_61354 = cljs.core.count.call(null,inst_61352);
var inst_61326 = inst_61353;
var inst_61327 = inst_61352;
var inst_61328 = inst_61354;
var inst_61329 = (0);
var state_61449__$1 = (function (){var statearr_61504 = state_61449;
(statearr_61504[(13)] = inst_61329);

(statearr_61504[(15)] = inst_61328);

(statearr_61504[(16)] = inst_61327);

(statearr_61504[(17)] = inst_61326);

return statearr_61504;
})();
var statearr_61505_61572 = state_61449__$1;
(statearr_61505_61572[(2)] = null);

(statearr_61505_61572[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61450 === (11))){
var inst_61348 = (state_61449[(7)]);
var inst_61326 = (state_61449[(17)]);
var inst_61348__$1 = cljs.core.seq.call(null,inst_61326);
var state_61449__$1 = (function (){var statearr_61506 = state_61449;
(statearr_61506[(7)] = inst_61348__$1);

return statearr_61506;
})();
if(inst_61348__$1){
var statearr_61507_61573 = state_61449__$1;
(statearr_61507_61573[(1)] = (16));

} else {
var statearr_61508_61574 = state_61449__$1;
(statearr_61508_61574[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61450 === (9))){
var inst_61378 = (state_61449[(2)]);
var state_61449__$1 = state_61449;
var statearr_61509_61575 = state_61449__$1;
(statearr_61509_61575[(2)] = inst_61378);

(statearr_61509_61575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61450 === (5))){
var inst_61324 = cljs.core.deref.call(null,cs);
var inst_61325 = cljs.core.seq.call(null,inst_61324);
var inst_61326 = inst_61325;
var inst_61327 = null;
var inst_61328 = (0);
var inst_61329 = (0);
var state_61449__$1 = (function (){var statearr_61510 = state_61449;
(statearr_61510[(13)] = inst_61329);

(statearr_61510[(15)] = inst_61328);

(statearr_61510[(16)] = inst_61327);

(statearr_61510[(17)] = inst_61326);

return statearr_61510;
})();
var statearr_61511_61576 = state_61449__$1;
(statearr_61511_61576[(2)] = null);

(statearr_61511_61576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61450 === (14))){
var state_61449__$1 = state_61449;
var statearr_61512_61577 = state_61449__$1;
(statearr_61512_61577[(2)] = null);

(statearr_61512_61577[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61450 === (45))){
var inst_61439 = (state_61449[(2)]);
var state_61449__$1 = state_61449;
var statearr_61513_61578 = state_61449__$1;
(statearr_61513_61578[(2)] = inst_61439);

(statearr_61513_61578[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61450 === (26))){
var inst_61381 = (state_61449[(29)]);
var inst_61435 = (state_61449[(2)]);
var inst_61436 = cljs.core.seq.call(null,inst_61381);
var state_61449__$1 = (function (){var statearr_61514 = state_61449;
(statearr_61514[(31)] = inst_61435);

return statearr_61514;
})();
if(inst_61436){
var statearr_61515_61579 = state_61449__$1;
(statearr_61515_61579[(1)] = (42));

} else {
var statearr_61516_61580 = state_61449__$1;
(statearr_61516_61580[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61450 === (16))){
var inst_61348 = (state_61449[(7)]);
var inst_61350 = cljs.core.chunked_seq_QMARK_.call(null,inst_61348);
var state_61449__$1 = state_61449;
if(inst_61350){
var statearr_61517_61581 = state_61449__$1;
(statearr_61517_61581[(1)] = (19));

} else {
var statearr_61518_61582 = state_61449__$1;
(statearr_61518_61582[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61450 === (38))){
var inst_61428 = (state_61449[(2)]);
var state_61449__$1 = state_61449;
var statearr_61519_61583 = state_61449__$1;
(statearr_61519_61583[(2)] = inst_61428);

(statearr_61519_61583[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61450 === (30))){
var state_61449__$1 = state_61449;
var statearr_61520_61584 = state_61449__$1;
(statearr_61520_61584[(2)] = null);

(statearr_61520_61584[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61450 === (10))){
var inst_61329 = (state_61449[(13)]);
var inst_61327 = (state_61449[(16)]);
var inst_61337 = cljs.core._nth.call(null,inst_61327,inst_61329);
var inst_61338 = cljs.core.nth.call(null,inst_61337,(0),null);
var inst_61339 = cljs.core.nth.call(null,inst_61337,(1),null);
var state_61449__$1 = (function (){var statearr_61521 = state_61449;
(statearr_61521[(26)] = inst_61338);

return statearr_61521;
})();
if(cljs.core.truth_(inst_61339)){
var statearr_61522_61585 = state_61449__$1;
(statearr_61522_61585[(1)] = (13));

} else {
var statearr_61523_61586 = state_61449__$1;
(statearr_61523_61586[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61450 === (18))){
var inst_61374 = (state_61449[(2)]);
var state_61449__$1 = state_61449;
var statearr_61524_61587 = state_61449__$1;
(statearr_61524_61587[(2)] = inst_61374);

(statearr_61524_61587[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61450 === (42))){
var state_61449__$1 = state_61449;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61449__$1,(45),dchan);
} else {
if((state_val_61450 === (37))){
var inst_61417 = (state_61449[(23)]);
var inst_61408 = (state_61449[(25)]);
var inst_61317 = (state_61449[(12)]);
var inst_61417__$1 = cljs.core.first.call(null,inst_61408);
var inst_61418 = cljs.core.async.put_BANG_.call(null,inst_61417__$1,inst_61317,done);
var state_61449__$1 = (function (){var statearr_61525 = state_61449;
(statearr_61525[(23)] = inst_61417__$1);

return statearr_61525;
})();
if(cljs.core.truth_(inst_61418)){
var statearr_61526_61588 = state_61449__$1;
(statearr_61526_61588[(1)] = (39));

} else {
var statearr_61527_61589 = state_61449__$1;
(statearr_61527_61589[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61450 === (8))){
var inst_61329 = (state_61449[(13)]);
var inst_61328 = (state_61449[(15)]);
var inst_61331 = (inst_61329 < inst_61328);
var inst_61332 = inst_61331;
var state_61449__$1 = state_61449;
if(cljs.core.truth_(inst_61332)){
var statearr_61528_61590 = state_61449__$1;
(statearr_61528_61590[(1)] = (10));

} else {
var statearr_61529_61591 = state_61449__$1;
(statearr_61529_61591[(1)] = (11));

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
});})(c__49215__auto___61537,cs,m,dchan,dctr,done))
;
return ((function (switch__49159__auto__,c__49215__auto___61537,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__49160__auto__ = null;
var cljs$core$async$mult_$_state_machine__49160__auto____0 = (function (){
var statearr_61533 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61533[(0)] = cljs$core$async$mult_$_state_machine__49160__auto__);

(statearr_61533[(1)] = (1));

return statearr_61533;
});
var cljs$core$async$mult_$_state_machine__49160__auto____1 = (function (state_61449){
while(true){
var ret_value__49161__auto__ = (function (){try{while(true){
var result__49162__auto__ = switch__49159__auto__.call(null,state_61449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49162__auto__;
}
break;
}
}catch (e61534){if((e61534 instanceof Object)){
var ex__49163__auto__ = e61534;
var statearr_61535_61592 = state_61449;
(statearr_61535_61592[(5)] = ex__49163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61593 = state_61449;
state_61449 = G__61593;
continue;
} else {
return ret_value__49161__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__49160__auto__ = function(state_61449){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__49160__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__49160__auto____1.call(this,state_61449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__49160__auto____0;
cljs$core$async$mult_$_state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__49160__auto____1;
return cljs$core$async$mult_$_state_machine__49160__auto__;
})()
;})(switch__49159__auto__,c__49215__auto___61537,cs,m,dchan,dctr,done))
})();
var state__49217__auto__ = (function (){var statearr_61536 = f__49216__auto__.call(null);
(statearr_61536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49215__auto___61537);

return statearr_61536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49217__auto__);
});})(c__49215__auto___61537,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args61594 = [];
var len__44607__auto___61597 = arguments.length;
var i__44608__auto___61598 = (0);
while(true){
if((i__44608__auto___61598 < len__44607__auto___61597)){
args61594.push((arguments[i__44608__auto___61598]));

var G__61599 = (i__44608__auto___61598 + (1));
i__44608__auto___61598 = G__61599;
continue;
} else {
}
break;
}

var G__61596 = args61594.length;
switch (G__61596) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args61594.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__44162__auto__ = (((m == null))?null:m);
var m__44163__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__44162__auto__)]);
if(!((m__44163__auto__ == null))){
return m__44163__auto__.call(null,m,ch);
} else {
var m__44163__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__44163__auto____$1 == null))){
return m__44163__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__44162__auto__ = (((m == null))?null:m);
var m__44163__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__44162__auto__)]);
if(!((m__44163__auto__ == null))){
return m__44163__auto__.call(null,m,ch);
} else {
var m__44163__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__44163__auto____$1 == null))){
return m__44163__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__44162__auto__ = (((m == null))?null:m);
var m__44163__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__44162__auto__)]);
if(!((m__44163__auto__ == null))){
return m__44163__auto__.call(null,m);
} else {
var m__44163__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__44163__auto____$1 == null))){
return m__44163__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__44162__auto__ = (((m == null))?null:m);
var m__44163__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__44162__auto__)]);
if(!((m__44163__auto__ == null))){
return m__44163__auto__.call(null,m,state_map);
} else {
var m__44163__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__44163__auto____$1 == null))){
return m__44163__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__44162__auto__ = (((m == null))?null:m);
var m__44163__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__44162__auto__)]);
if(!((m__44163__auto__ == null))){
return m__44163__auto__.call(null,m,mode);
} else {
var m__44163__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__44163__auto____$1 == null))){
return m__44163__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__44614__auto__ = [];
var len__44607__auto___61611 = arguments.length;
var i__44608__auto___61612 = (0);
while(true){
if((i__44608__auto___61612 < len__44607__auto___61611)){
args__44614__auto__.push((arguments[i__44608__auto___61612]));

var G__61613 = (i__44608__auto___61612 + (1));
i__44608__auto___61612 = G__61613;
continue;
} else {
}
break;
}

var argseq__44615__auto__ = ((((3) < args__44614__auto__.length))?(new cljs.core.IndexedSeq(args__44614__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__44615__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__61605){
var map__61606 = p__61605;
var map__61606__$1 = ((((!((map__61606 == null)))?((((map__61606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61606.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61606):map__61606);
var opts = map__61606__$1;
var statearr_61608_61614 = state;
(statearr_61608_61614[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__61606,map__61606__$1,opts){
return (function (val){
var statearr_61609_61615 = state;
(statearr_61609_61615[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__61606,map__61606__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_61610_61616 = state;
(statearr_61610_61616[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq61601){
var G__61602 = cljs.core.first.call(null,seq61601);
var seq61601__$1 = cljs.core.next.call(null,seq61601);
var G__61603 = cljs.core.first.call(null,seq61601__$1);
var seq61601__$2 = cljs.core.next.call(null,seq61601__$1);
var G__61604 = cljs.core.first.call(null,seq61601__$2);
var seq61601__$3 = cljs.core.next.call(null,seq61601__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__61602,G__61603,G__61604,seq61601__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async61784 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61784 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta61785){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta61785 = meta61785;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async61784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_61786,meta61785__$1){
var self__ = this;
var _61786__$1 = this;
return (new cljs.core.async.t_cljs$core$async61784(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta61785__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async61784.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_61786){
var self__ = this;
var _61786__$1 = this;
return self__.meta61785;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async61784.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61784.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async61784.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61784.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async61784.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async61784.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async61784.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async61784.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async61784.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta61785","meta61785",856894804,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async61784.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61784.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61784";

cljs.core.async.t_cljs$core$async61784.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__44105__auto__,writer__44106__auto__,opt__44107__auto__){
return cljs.core._write.call(null,writer__44106__auto__,"cljs.core.async/t_cljs$core$async61784");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async61784 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async61784(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta61785){
return (new cljs.core.async.t_cljs$core$async61784(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta61785));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async61784(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__49215__auto___61951 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49215__auto___61951,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__49216__auto__ = (function (){var switch__49159__auto__ = ((function (c__49215__auto___61951,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_61888){
var state_val_61889 = (state_61888[(1)]);
if((state_val_61889 === (7))){
var inst_61803 = (state_61888[(2)]);
var state_61888__$1 = state_61888;
var statearr_61890_61952 = state_61888__$1;
(statearr_61890_61952[(2)] = inst_61803);

(statearr_61890_61952[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61889 === (20))){
var inst_61815 = (state_61888[(7)]);
var state_61888__$1 = state_61888;
var statearr_61891_61953 = state_61888__$1;
(statearr_61891_61953[(2)] = inst_61815);

(statearr_61891_61953[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61889 === (27))){
var state_61888__$1 = state_61888;
var statearr_61892_61954 = state_61888__$1;
(statearr_61892_61954[(2)] = null);

(statearr_61892_61954[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61889 === (1))){
var inst_61790 = (state_61888[(8)]);
var inst_61790__$1 = calc_state.call(null);
var inst_61792 = (inst_61790__$1 == null);
var inst_61793 = cljs.core.not.call(null,inst_61792);
var state_61888__$1 = (function (){var statearr_61893 = state_61888;
(statearr_61893[(8)] = inst_61790__$1);

return statearr_61893;
})();
if(inst_61793){
var statearr_61894_61955 = state_61888__$1;
(statearr_61894_61955[(1)] = (2));

} else {
var statearr_61895_61956 = state_61888__$1;
(statearr_61895_61956[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61889 === (24))){
var inst_61862 = (state_61888[(9)]);
var inst_61839 = (state_61888[(10)]);
var inst_61848 = (state_61888[(11)]);
var inst_61862__$1 = inst_61839.call(null,inst_61848);
var state_61888__$1 = (function (){var statearr_61896 = state_61888;
(statearr_61896[(9)] = inst_61862__$1);

return statearr_61896;
})();
if(cljs.core.truth_(inst_61862__$1)){
var statearr_61897_61957 = state_61888__$1;
(statearr_61897_61957[(1)] = (29));

} else {
var statearr_61898_61958 = state_61888__$1;
(statearr_61898_61958[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61889 === (4))){
var inst_61806 = (state_61888[(2)]);
var state_61888__$1 = state_61888;
if(cljs.core.truth_(inst_61806)){
var statearr_61899_61959 = state_61888__$1;
(statearr_61899_61959[(1)] = (8));

} else {
var statearr_61900_61960 = state_61888__$1;
(statearr_61900_61960[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61889 === (15))){
var inst_61833 = (state_61888[(2)]);
var state_61888__$1 = state_61888;
if(cljs.core.truth_(inst_61833)){
var statearr_61901_61961 = state_61888__$1;
(statearr_61901_61961[(1)] = (19));

} else {
var statearr_61902_61962 = state_61888__$1;
(statearr_61902_61962[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61889 === (21))){
var inst_61838 = (state_61888[(12)]);
var inst_61838__$1 = (state_61888[(2)]);
var inst_61839 = cljs.core.get.call(null,inst_61838__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_61840 = cljs.core.get.call(null,inst_61838__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_61841 = cljs.core.get.call(null,inst_61838__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_61888__$1 = (function (){var statearr_61903 = state_61888;
(statearr_61903[(12)] = inst_61838__$1);

(statearr_61903[(13)] = inst_61840);

(statearr_61903[(10)] = inst_61839);

return statearr_61903;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_61888__$1,(22),inst_61841);
} else {
if((state_val_61889 === (31))){
var inst_61870 = (state_61888[(2)]);
var state_61888__$1 = state_61888;
if(cljs.core.truth_(inst_61870)){
var statearr_61904_61963 = state_61888__$1;
(statearr_61904_61963[(1)] = (32));

} else {
var statearr_61905_61964 = state_61888__$1;
(statearr_61905_61964[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61889 === (32))){
var inst_61847 = (state_61888[(14)]);
var state_61888__$1 = state_61888;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61888__$1,(35),out,inst_61847);
} else {
if((state_val_61889 === (33))){
var inst_61838 = (state_61888[(12)]);
var inst_61815 = inst_61838;
var state_61888__$1 = (function (){var statearr_61906 = state_61888;
(statearr_61906[(7)] = inst_61815);

return statearr_61906;
})();
var statearr_61907_61965 = state_61888__$1;
(statearr_61907_61965[(2)] = null);

(statearr_61907_61965[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61889 === (13))){
var inst_61815 = (state_61888[(7)]);
var inst_61822 = inst_61815.cljs$lang$protocol_mask$partition0$;
var inst_61823 = (inst_61822 & (64));
var inst_61824 = inst_61815.cljs$core$ISeq$;
var inst_61825 = (cljs.core.PROTOCOL_SENTINEL === inst_61824);
var inst_61826 = (inst_61823) || (inst_61825);
var state_61888__$1 = state_61888;
if(cljs.core.truth_(inst_61826)){
var statearr_61908_61966 = state_61888__$1;
(statearr_61908_61966[(1)] = (16));

} else {
var statearr_61909_61967 = state_61888__$1;
(statearr_61909_61967[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61889 === (22))){
var inst_61847 = (state_61888[(14)]);
var inst_61848 = (state_61888[(11)]);
var inst_61846 = (state_61888[(2)]);
var inst_61847__$1 = cljs.core.nth.call(null,inst_61846,(0),null);
var inst_61848__$1 = cljs.core.nth.call(null,inst_61846,(1),null);
var inst_61849 = (inst_61847__$1 == null);
var inst_61850 = cljs.core._EQ_.call(null,inst_61848__$1,change);
var inst_61851 = (inst_61849) || (inst_61850);
var state_61888__$1 = (function (){var statearr_61910 = state_61888;
(statearr_61910[(14)] = inst_61847__$1);

(statearr_61910[(11)] = inst_61848__$1);

return statearr_61910;
})();
if(cljs.core.truth_(inst_61851)){
var statearr_61911_61968 = state_61888__$1;
(statearr_61911_61968[(1)] = (23));

} else {
var statearr_61912_61969 = state_61888__$1;
(statearr_61912_61969[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61889 === (36))){
var inst_61838 = (state_61888[(12)]);
var inst_61815 = inst_61838;
var state_61888__$1 = (function (){var statearr_61913 = state_61888;
(statearr_61913[(7)] = inst_61815);

return statearr_61913;
})();
var statearr_61914_61970 = state_61888__$1;
(statearr_61914_61970[(2)] = null);

(statearr_61914_61970[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61889 === (29))){
var inst_61862 = (state_61888[(9)]);
var state_61888__$1 = state_61888;
var statearr_61915_61971 = state_61888__$1;
(statearr_61915_61971[(2)] = inst_61862);

(statearr_61915_61971[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61889 === (6))){
var state_61888__$1 = state_61888;
var statearr_61916_61972 = state_61888__$1;
(statearr_61916_61972[(2)] = false);

(statearr_61916_61972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61889 === (28))){
var inst_61858 = (state_61888[(2)]);
var inst_61859 = calc_state.call(null);
var inst_61815 = inst_61859;
var state_61888__$1 = (function (){var statearr_61917 = state_61888;
(statearr_61917[(15)] = inst_61858);

(statearr_61917[(7)] = inst_61815);

return statearr_61917;
})();
var statearr_61918_61973 = state_61888__$1;
(statearr_61918_61973[(2)] = null);

(statearr_61918_61973[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61889 === (25))){
var inst_61884 = (state_61888[(2)]);
var state_61888__$1 = state_61888;
var statearr_61919_61974 = state_61888__$1;
(statearr_61919_61974[(2)] = inst_61884);

(statearr_61919_61974[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61889 === (34))){
var inst_61882 = (state_61888[(2)]);
var state_61888__$1 = state_61888;
var statearr_61920_61975 = state_61888__$1;
(statearr_61920_61975[(2)] = inst_61882);

(statearr_61920_61975[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61889 === (17))){
var state_61888__$1 = state_61888;
var statearr_61921_61976 = state_61888__$1;
(statearr_61921_61976[(2)] = false);

(statearr_61921_61976[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61889 === (3))){
var state_61888__$1 = state_61888;
var statearr_61922_61977 = state_61888__$1;
(statearr_61922_61977[(2)] = false);

(statearr_61922_61977[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61889 === (12))){
var inst_61886 = (state_61888[(2)]);
var state_61888__$1 = state_61888;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61888__$1,inst_61886);
} else {
if((state_val_61889 === (2))){
var inst_61790 = (state_61888[(8)]);
var inst_61795 = inst_61790.cljs$lang$protocol_mask$partition0$;
var inst_61796 = (inst_61795 & (64));
var inst_61797 = inst_61790.cljs$core$ISeq$;
var inst_61798 = (cljs.core.PROTOCOL_SENTINEL === inst_61797);
var inst_61799 = (inst_61796) || (inst_61798);
var state_61888__$1 = state_61888;
if(cljs.core.truth_(inst_61799)){
var statearr_61923_61978 = state_61888__$1;
(statearr_61923_61978[(1)] = (5));

} else {
var statearr_61924_61979 = state_61888__$1;
(statearr_61924_61979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61889 === (23))){
var inst_61847 = (state_61888[(14)]);
var inst_61853 = (inst_61847 == null);
var state_61888__$1 = state_61888;
if(cljs.core.truth_(inst_61853)){
var statearr_61925_61980 = state_61888__$1;
(statearr_61925_61980[(1)] = (26));

} else {
var statearr_61926_61981 = state_61888__$1;
(statearr_61926_61981[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61889 === (35))){
var inst_61873 = (state_61888[(2)]);
var state_61888__$1 = state_61888;
if(cljs.core.truth_(inst_61873)){
var statearr_61927_61982 = state_61888__$1;
(statearr_61927_61982[(1)] = (36));

} else {
var statearr_61928_61983 = state_61888__$1;
(statearr_61928_61983[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61889 === (19))){
var inst_61815 = (state_61888[(7)]);
var inst_61835 = cljs.core.apply.call(null,cljs.core.hash_map,inst_61815);
var state_61888__$1 = state_61888;
var statearr_61929_61984 = state_61888__$1;
(statearr_61929_61984[(2)] = inst_61835);

(statearr_61929_61984[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61889 === (11))){
var inst_61815 = (state_61888[(7)]);
var inst_61819 = (inst_61815 == null);
var inst_61820 = cljs.core.not.call(null,inst_61819);
var state_61888__$1 = state_61888;
if(inst_61820){
var statearr_61930_61985 = state_61888__$1;
(statearr_61930_61985[(1)] = (13));

} else {
var statearr_61931_61986 = state_61888__$1;
(statearr_61931_61986[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61889 === (9))){
var inst_61790 = (state_61888[(8)]);
var state_61888__$1 = state_61888;
var statearr_61932_61987 = state_61888__$1;
(statearr_61932_61987[(2)] = inst_61790);

(statearr_61932_61987[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61889 === (5))){
var state_61888__$1 = state_61888;
var statearr_61933_61988 = state_61888__$1;
(statearr_61933_61988[(2)] = true);

(statearr_61933_61988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61889 === (14))){
var state_61888__$1 = state_61888;
var statearr_61934_61989 = state_61888__$1;
(statearr_61934_61989[(2)] = false);

(statearr_61934_61989[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61889 === (26))){
var inst_61848 = (state_61888[(11)]);
var inst_61855 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_61848);
var state_61888__$1 = state_61888;
var statearr_61935_61990 = state_61888__$1;
(statearr_61935_61990[(2)] = inst_61855);

(statearr_61935_61990[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61889 === (16))){
var state_61888__$1 = state_61888;
var statearr_61936_61991 = state_61888__$1;
(statearr_61936_61991[(2)] = true);

(statearr_61936_61991[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61889 === (38))){
var inst_61878 = (state_61888[(2)]);
var state_61888__$1 = state_61888;
var statearr_61937_61992 = state_61888__$1;
(statearr_61937_61992[(2)] = inst_61878);

(statearr_61937_61992[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61889 === (30))){
var inst_61840 = (state_61888[(13)]);
var inst_61839 = (state_61888[(10)]);
var inst_61848 = (state_61888[(11)]);
var inst_61865 = cljs.core.empty_QMARK_.call(null,inst_61839);
var inst_61866 = inst_61840.call(null,inst_61848);
var inst_61867 = cljs.core.not.call(null,inst_61866);
var inst_61868 = (inst_61865) && (inst_61867);
var state_61888__$1 = state_61888;
var statearr_61938_61993 = state_61888__$1;
(statearr_61938_61993[(2)] = inst_61868);

(statearr_61938_61993[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61889 === (10))){
var inst_61790 = (state_61888[(8)]);
var inst_61811 = (state_61888[(2)]);
var inst_61812 = cljs.core.get.call(null,inst_61811,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_61813 = cljs.core.get.call(null,inst_61811,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_61814 = cljs.core.get.call(null,inst_61811,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_61815 = inst_61790;
var state_61888__$1 = (function (){var statearr_61939 = state_61888;
(statearr_61939[(16)] = inst_61814);

(statearr_61939[(7)] = inst_61815);

(statearr_61939[(17)] = inst_61812);

(statearr_61939[(18)] = inst_61813);

return statearr_61939;
})();
var statearr_61940_61994 = state_61888__$1;
(statearr_61940_61994[(2)] = null);

(statearr_61940_61994[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61889 === (18))){
var inst_61830 = (state_61888[(2)]);
var state_61888__$1 = state_61888;
var statearr_61941_61995 = state_61888__$1;
(statearr_61941_61995[(2)] = inst_61830);

(statearr_61941_61995[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61889 === (37))){
var state_61888__$1 = state_61888;
var statearr_61942_61996 = state_61888__$1;
(statearr_61942_61996[(2)] = null);

(statearr_61942_61996[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61889 === (8))){
var inst_61790 = (state_61888[(8)]);
var inst_61808 = cljs.core.apply.call(null,cljs.core.hash_map,inst_61790);
var state_61888__$1 = state_61888;
var statearr_61943_61997 = state_61888__$1;
(statearr_61943_61997[(2)] = inst_61808);

(statearr_61943_61997[(1)] = (10));


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
});})(c__49215__auto___61951,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__49159__auto__,c__49215__auto___61951,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__49160__auto__ = null;
var cljs$core$async$mix_$_state_machine__49160__auto____0 = (function (){
var statearr_61947 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61947[(0)] = cljs$core$async$mix_$_state_machine__49160__auto__);

(statearr_61947[(1)] = (1));

return statearr_61947;
});
var cljs$core$async$mix_$_state_machine__49160__auto____1 = (function (state_61888){
while(true){
var ret_value__49161__auto__ = (function (){try{while(true){
var result__49162__auto__ = switch__49159__auto__.call(null,state_61888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49162__auto__;
}
break;
}
}catch (e61948){if((e61948 instanceof Object)){
var ex__49163__auto__ = e61948;
var statearr_61949_61998 = state_61888;
(statearr_61949_61998[(5)] = ex__49163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61999 = state_61888;
state_61888 = G__61999;
continue;
} else {
return ret_value__49161__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__49160__auto__ = function(state_61888){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__49160__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__49160__auto____1.call(this,state_61888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__49160__auto____0;
cljs$core$async$mix_$_state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__49160__auto____1;
return cljs$core$async$mix_$_state_machine__49160__auto__;
})()
;})(switch__49159__auto__,c__49215__auto___61951,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__49217__auto__ = (function (){var statearr_61950 = f__49216__auto__.call(null);
(statearr_61950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49215__auto___61951);

return statearr_61950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49217__auto__);
});})(c__49215__auto___61951,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__44162__auto__ = (((p == null))?null:p);
var m__44163__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__44162__auto__)]);
if(!((m__44163__auto__ == null))){
return m__44163__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__44163__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__44163__auto____$1 == null))){
return m__44163__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__44162__auto__ = (((p == null))?null:p);
var m__44163__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__44162__auto__)]);
if(!((m__44163__auto__ == null))){
return m__44163__auto__.call(null,p,v,ch);
} else {
var m__44163__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__44163__auto____$1 == null))){
return m__44163__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args62000 = [];
var len__44607__auto___62003 = arguments.length;
var i__44608__auto___62004 = (0);
while(true){
if((i__44608__auto___62004 < len__44607__auto___62003)){
args62000.push((arguments[i__44608__auto___62004]));

var G__62005 = (i__44608__auto___62004 + (1));
i__44608__auto___62004 = G__62005;
continue;
} else {
}
break;
}

var G__62002 = args62000.length;
switch (G__62002) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args62000.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__44162__auto__ = (((p == null))?null:p);
var m__44163__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__44162__auto__)]);
if(!((m__44163__auto__ == null))){
return m__44163__auto__.call(null,p);
} else {
var m__44163__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__44163__auto____$1 == null))){
return m__44163__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__44162__auto__ = (((p == null))?null:p);
var m__44163__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__44162__auto__)]);
if(!((m__44163__auto__ == null))){
return m__44163__auto__.call(null,p,v);
} else {
var m__44163__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__44163__auto____$1 == null))){
return m__44163__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args62008 = [];
var len__44607__auto___62133 = arguments.length;
var i__44608__auto___62134 = (0);
while(true){
if((i__44608__auto___62134 < len__44607__auto___62133)){
args62008.push((arguments[i__44608__auto___62134]));

var G__62135 = (i__44608__auto___62134 + (1));
i__44608__auto___62134 = G__62135;
continue;
} else {
}
break;
}

var G__62010 = args62008.length;
switch (G__62010) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args62008.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__43494__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__43494__auto__)){
return or__43494__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__43494__auto__,mults){
return (function (p1__62007_SHARP_){
if(cljs.core.truth_(p1__62007_SHARP_.call(null,topic))){
return p1__62007_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__62007_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__43494__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async62011 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62011 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta62012){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta62012 = meta62012;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async62011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_62013,meta62012__$1){
var self__ = this;
var _62013__$1 = this;
return (new cljs.core.async.t_cljs$core$async62011(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta62012__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async62011.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_62013){
var self__ = this;
var _62013__$1 = this;
return self__.meta62012;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async62011.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62011.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async62011.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62011.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async62011.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async62011.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async62011.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async62011.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta62012","meta62012",-990059643,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async62011.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async62011.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62011";

cljs.core.async.t_cljs$core$async62011.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__44105__auto__,writer__44106__auto__,opt__44107__auto__){
return cljs.core._write.call(null,writer__44106__auto__,"cljs.core.async/t_cljs$core$async62011");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async62011 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async62011(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta62012){
return (new cljs.core.async.t_cljs$core$async62011(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta62012));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async62011(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__49215__auto___62137 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49215__auto___62137,mults,ensure_mult,p){
return (function (){
var f__49216__auto__ = (function (){var switch__49159__auto__ = ((function (c__49215__auto___62137,mults,ensure_mult,p){
return (function (state_62085){
var state_val_62086 = (state_62085[(1)]);
if((state_val_62086 === (7))){
var inst_62081 = (state_62085[(2)]);
var state_62085__$1 = state_62085;
var statearr_62087_62138 = state_62085__$1;
(statearr_62087_62138[(2)] = inst_62081);

(statearr_62087_62138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62086 === (20))){
var state_62085__$1 = state_62085;
var statearr_62088_62139 = state_62085__$1;
(statearr_62088_62139[(2)] = null);

(statearr_62088_62139[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62086 === (1))){
var state_62085__$1 = state_62085;
var statearr_62089_62140 = state_62085__$1;
(statearr_62089_62140[(2)] = null);

(statearr_62089_62140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62086 === (24))){
var inst_62064 = (state_62085[(7)]);
var inst_62073 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_62064);
var state_62085__$1 = state_62085;
var statearr_62090_62141 = state_62085__$1;
(statearr_62090_62141[(2)] = inst_62073);

(statearr_62090_62141[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62086 === (4))){
var inst_62016 = (state_62085[(8)]);
var inst_62016__$1 = (state_62085[(2)]);
var inst_62017 = (inst_62016__$1 == null);
var state_62085__$1 = (function (){var statearr_62091 = state_62085;
(statearr_62091[(8)] = inst_62016__$1);

return statearr_62091;
})();
if(cljs.core.truth_(inst_62017)){
var statearr_62092_62142 = state_62085__$1;
(statearr_62092_62142[(1)] = (5));

} else {
var statearr_62093_62143 = state_62085__$1;
(statearr_62093_62143[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62086 === (15))){
var inst_62058 = (state_62085[(2)]);
var state_62085__$1 = state_62085;
var statearr_62094_62144 = state_62085__$1;
(statearr_62094_62144[(2)] = inst_62058);

(statearr_62094_62144[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62086 === (21))){
var inst_62078 = (state_62085[(2)]);
var state_62085__$1 = (function (){var statearr_62095 = state_62085;
(statearr_62095[(9)] = inst_62078);

return statearr_62095;
})();
var statearr_62096_62145 = state_62085__$1;
(statearr_62096_62145[(2)] = null);

(statearr_62096_62145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62086 === (13))){
var inst_62040 = (state_62085[(10)]);
var inst_62042 = cljs.core.chunked_seq_QMARK_.call(null,inst_62040);
var state_62085__$1 = state_62085;
if(inst_62042){
var statearr_62097_62146 = state_62085__$1;
(statearr_62097_62146[(1)] = (16));

} else {
var statearr_62098_62147 = state_62085__$1;
(statearr_62098_62147[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62086 === (22))){
var inst_62070 = (state_62085[(2)]);
var state_62085__$1 = state_62085;
if(cljs.core.truth_(inst_62070)){
var statearr_62099_62148 = state_62085__$1;
(statearr_62099_62148[(1)] = (23));

} else {
var statearr_62100_62149 = state_62085__$1;
(statearr_62100_62149[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62086 === (6))){
var inst_62066 = (state_62085[(11)]);
var inst_62064 = (state_62085[(7)]);
var inst_62016 = (state_62085[(8)]);
var inst_62064__$1 = topic_fn.call(null,inst_62016);
var inst_62065 = cljs.core.deref.call(null,mults);
var inst_62066__$1 = cljs.core.get.call(null,inst_62065,inst_62064__$1);
var state_62085__$1 = (function (){var statearr_62101 = state_62085;
(statearr_62101[(11)] = inst_62066__$1);

(statearr_62101[(7)] = inst_62064__$1);

return statearr_62101;
})();
if(cljs.core.truth_(inst_62066__$1)){
var statearr_62102_62150 = state_62085__$1;
(statearr_62102_62150[(1)] = (19));

} else {
var statearr_62103_62151 = state_62085__$1;
(statearr_62103_62151[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62086 === (25))){
var inst_62075 = (state_62085[(2)]);
var state_62085__$1 = state_62085;
var statearr_62104_62152 = state_62085__$1;
(statearr_62104_62152[(2)] = inst_62075);

(statearr_62104_62152[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62086 === (17))){
var inst_62040 = (state_62085[(10)]);
var inst_62049 = cljs.core.first.call(null,inst_62040);
var inst_62050 = cljs.core.async.muxch_STAR_.call(null,inst_62049);
var inst_62051 = cljs.core.async.close_BANG_.call(null,inst_62050);
var inst_62052 = cljs.core.next.call(null,inst_62040);
var inst_62026 = inst_62052;
var inst_62027 = null;
var inst_62028 = (0);
var inst_62029 = (0);
var state_62085__$1 = (function (){var statearr_62105 = state_62085;
(statearr_62105[(12)] = inst_62026);

(statearr_62105[(13)] = inst_62029);

(statearr_62105[(14)] = inst_62051);

(statearr_62105[(15)] = inst_62027);

(statearr_62105[(16)] = inst_62028);

return statearr_62105;
})();
var statearr_62106_62153 = state_62085__$1;
(statearr_62106_62153[(2)] = null);

(statearr_62106_62153[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62086 === (3))){
var inst_62083 = (state_62085[(2)]);
var state_62085__$1 = state_62085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62085__$1,inst_62083);
} else {
if((state_val_62086 === (12))){
var inst_62060 = (state_62085[(2)]);
var state_62085__$1 = state_62085;
var statearr_62107_62154 = state_62085__$1;
(statearr_62107_62154[(2)] = inst_62060);

(statearr_62107_62154[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62086 === (2))){
var state_62085__$1 = state_62085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62085__$1,(4),ch);
} else {
if((state_val_62086 === (23))){
var state_62085__$1 = state_62085;
var statearr_62108_62155 = state_62085__$1;
(statearr_62108_62155[(2)] = null);

(statearr_62108_62155[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62086 === (19))){
var inst_62066 = (state_62085[(11)]);
var inst_62016 = (state_62085[(8)]);
var inst_62068 = cljs.core.async.muxch_STAR_.call(null,inst_62066);
var state_62085__$1 = state_62085;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62085__$1,(22),inst_62068,inst_62016);
} else {
if((state_val_62086 === (11))){
var inst_62026 = (state_62085[(12)]);
var inst_62040 = (state_62085[(10)]);
var inst_62040__$1 = cljs.core.seq.call(null,inst_62026);
var state_62085__$1 = (function (){var statearr_62109 = state_62085;
(statearr_62109[(10)] = inst_62040__$1);

return statearr_62109;
})();
if(inst_62040__$1){
var statearr_62110_62156 = state_62085__$1;
(statearr_62110_62156[(1)] = (13));

} else {
var statearr_62111_62157 = state_62085__$1;
(statearr_62111_62157[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62086 === (9))){
var inst_62062 = (state_62085[(2)]);
var state_62085__$1 = state_62085;
var statearr_62112_62158 = state_62085__$1;
(statearr_62112_62158[(2)] = inst_62062);

(statearr_62112_62158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62086 === (5))){
var inst_62023 = cljs.core.deref.call(null,mults);
var inst_62024 = cljs.core.vals.call(null,inst_62023);
var inst_62025 = cljs.core.seq.call(null,inst_62024);
var inst_62026 = inst_62025;
var inst_62027 = null;
var inst_62028 = (0);
var inst_62029 = (0);
var state_62085__$1 = (function (){var statearr_62113 = state_62085;
(statearr_62113[(12)] = inst_62026);

(statearr_62113[(13)] = inst_62029);

(statearr_62113[(15)] = inst_62027);

(statearr_62113[(16)] = inst_62028);

return statearr_62113;
})();
var statearr_62114_62159 = state_62085__$1;
(statearr_62114_62159[(2)] = null);

(statearr_62114_62159[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62086 === (14))){
var state_62085__$1 = state_62085;
var statearr_62118_62160 = state_62085__$1;
(statearr_62118_62160[(2)] = null);

(statearr_62118_62160[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62086 === (16))){
var inst_62040 = (state_62085[(10)]);
var inst_62044 = cljs.core.chunk_first.call(null,inst_62040);
var inst_62045 = cljs.core.chunk_rest.call(null,inst_62040);
var inst_62046 = cljs.core.count.call(null,inst_62044);
var inst_62026 = inst_62045;
var inst_62027 = inst_62044;
var inst_62028 = inst_62046;
var inst_62029 = (0);
var state_62085__$1 = (function (){var statearr_62119 = state_62085;
(statearr_62119[(12)] = inst_62026);

(statearr_62119[(13)] = inst_62029);

(statearr_62119[(15)] = inst_62027);

(statearr_62119[(16)] = inst_62028);

return statearr_62119;
})();
var statearr_62120_62161 = state_62085__$1;
(statearr_62120_62161[(2)] = null);

(statearr_62120_62161[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62086 === (10))){
var inst_62026 = (state_62085[(12)]);
var inst_62029 = (state_62085[(13)]);
var inst_62027 = (state_62085[(15)]);
var inst_62028 = (state_62085[(16)]);
var inst_62034 = cljs.core._nth.call(null,inst_62027,inst_62029);
var inst_62035 = cljs.core.async.muxch_STAR_.call(null,inst_62034);
var inst_62036 = cljs.core.async.close_BANG_.call(null,inst_62035);
var inst_62037 = (inst_62029 + (1));
var tmp62115 = inst_62026;
var tmp62116 = inst_62027;
var tmp62117 = inst_62028;
var inst_62026__$1 = tmp62115;
var inst_62027__$1 = tmp62116;
var inst_62028__$1 = tmp62117;
var inst_62029__$1 = inst_62037;
var state_62085__$1 = (function (){var statearr_62121 = state_62085;
(statearr_62121[(12)] = inst_62026__$1);

(statearr_62121[(17)] = inst_62036);

(statearr_62121[(13)] = inst_62029__$1);

(statearr_62121[(15)] = inst_62027__$1);

(statearr_62121[(16)] = inst_62028__$1);

return statearr_62121;
})();
var statearr_62122_62162 = state_62085__$1;
(statearr_62122_62162[(2)] = null);

(statearr_62122_62162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62086 === (18))){
var inst_62055 = (state_62085[(2)]);
var state_62085__$1 = state_62085;
var statearr_62123_62163 = state_62085__$1;
(statearr_62123_62163[(2)] = inst_62055);

(statearr_62123_62163[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62086 === (8))){
var inst_62029 = (state_62085[(13)]);
var inst_62028 = (state_62085[(16)]);
var inst_62031 = (inst_62029 < inst_62028);
var inst_62032 = inst_62031;
var state_62085__$1 = state_62085;
if(cljs.core.truth_(inst_62032)){
var statearr_62124_62164 = state_62085__$1;
(statearr_62124_62164[(1)] = (10));

} else {
var statearr_62125_62165 = state_62085__$1;
(statearr_62125_62165[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__49215__auto___62137,mults,ensure_mult,p))
;
return ((function (switch__49159__auto__,c__49215__auto___62137,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__49160__auto__ = null;
var cljs$core$async$state_machine__49160__auto____0 = (function (){
var statearr_62129 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62129[(0)] = cljs$core$async$state_machine__49160__auto__);

(statearr_62129[(1)] = (1));

return statearr_62129;
});
var cljs$core$async$state_machine__49160__auto____1 = (function (state_62085){
while(true){
var ret_value__49161__auto__ = (function (){try{while(true){
var result__49162__auto__ = switch__49159__auto__.call(null,state_62085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49162__auto__;
}
break;
}
}catch (e62130){if((e62130 instanceof Object)){
var ex__49163__auto__ = e62130;
var statearr_62131_62166 = state_62085;
(statearr_62131_62166[(5)] = ex__49163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62167 = state_62085;
state_62085 = G__62167;
continue;
} else {
return ret_value__49161__auto__;
}
break;
}
});
cljs$core$async$state_machine__49160__auto__ = function(state_62085){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49160__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49160__auto____1.call(this,state_62085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49160__auto____0;
cljs$core$async$state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49160__auto____1;
return cljs$core$async$state_machine__49160__auto__;
})()
;})(switch__49159__auto__,c__49215__auto___62137,mults,ensure_mult,p))
})();
var state__49217__auto__ = (function (){var statearr_62132 = f__49216__auto__.call(null);
(statearr_62132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49215__auto___62137);

return statearr_62132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49217__auto__);
});})(c__49215__auto___62137,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args62168 = [];
var len__44607__auto___62171 = arguments.length;
var i__44608__auto___62172 = (0);
while(true){
if((i__44608__auto___62172 < len__44607__auto___62171)){
args62168.push((arguments[i__44608__auto___62172]));

var G__62173 = (i__44608__auto___62172 + (1));
i__44608__auto___62172 = G__62173;
continue;
} else {
}
break;
}

var G__62170 = args62168.length;
switch (G__62170) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args62168.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args62175 = [];
var len__44607__auto___62178 = arguments.length;
var i__44608__auto___62179 = (0);
while(true){
if((i__44608__auto___62179 < len__44607__auto___62178)){
args62175.push((arguments[i__44608__auto___62179]));

var G__62180 = (i__44608__auto___62179 + (1));
i__44608__auto___62179 = G__62180;
continue;
} else {
}
break;
}

var G__62177 = args62175.length;
switch (G__62177) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args62175.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args62182 = [];
var len__44607__auto___62253 = arguments.length;
var i__44608__auto___62254 = (0);
while(true){
if((i__44608__auto___62254 < len__44607__auto___62253)){
args62182.push((arguments[i__44608__auto___62254]));

var G__62255 = (i__44608__auto___62254 + (1));
i__44608__auto___62254 = G__62255;
continue;
} else {
}
break;
}

var G__62184 = args62182.length;
switch (G__62184) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args62182.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__49215__auto___62257 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49215__auto___62257,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__49216__auto__ = (function (){var switch__49159__auto__ = ((function (c__49215__auto___62257,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_62223){
var state_val_62224 = (state_62223[(1)]);
if((state_val_62224 === (7))){
var state_62223__$1 = state_62223;
var statearr_62225_62258 = state_62223__$1;
(statearr_62225_62258[(2)] = null);

(statearr_62225_62258[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62224 === (1))){
var state_62223__$1 = state_62223;
var statearr_62226_62259 = state_62223__$1;
(statearr_62226_62259[(2)] = null);

(statearr_62226_62259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62224 === (4))){
var inst_62187 = (state_62223[(7)]);
var inst_62189 = (inst_62187 < cnt);
var state_62223__$1 = state_62223;
if(cljs.core.truth_(inst_62189)){
var statearr_62227_62260 = state_62223__$1;
(statearr_62227_62260[(1)] = (6));

} else {
var statearr_62228_62261 = state_62223__$1;
(statearr_62228_62261[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62224 === (15))){
var inst_62219 = (state_62223[(2)]);
var state_62223__$1 = state_62223;
var statearr_62229_62262 = state_62223__$1;
(statearr_62229_62262[(2)] = inst_62219);

(statearr_62229_62262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62224 === (13))){
var inst_62212 = cljs.core.async.close_BANG_.call(null,out);
var state_62223__$1 = state_62223;
var statearr_62230_62263 = state_62223__$1;
(statearr_62230_62263[(2)] = inst_62212);

(statearr_62230_62263[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62224 === (6))){
var state_62223__$1 = state_62223;
var statearr_62231_62264 = state_62223__$1;
(statearr_62231_62264[(2)] = null);

(statearr_62231_62264[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62224 === (3))){
var inst_62221 = (state_62223[(2)]);
var state_62223__$1 = state_62223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62223__$1,inst_62221);
} else {
if((state_val_62224 === (12))){
var inst_62209 = (state_62223[(8)]);
var inst_62209__$1 = (state_62223[(2)]);
var inst_62210 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_62209__$1);
var state_62223__$1 = (function (){var statearr_62232 = state_62223;
(statearr_62232[(8)] = inst_62209__$1);

return statearr_62232;
})();
if(cljs.core.truth_(inst_62210)){
var statearr_62233_62265 = state_62223__$1;
(statearr_62233_62265[(1)] = (13));

} else {
var statearr_62234_62266 = state_62223__$1;
(statearr_62234_62266[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62224 === (2))){
var inst_62186 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_62187 = (0);
var state_62223__$1 = (function (){var statearr_62235 = state_62223;
(statearr_62235[(9)] = inst_62186);

(statearr_62235[(7)] = inst_62187);

return statearr_62235;
})();
var statearr_62236_62267 = state_62223__$1;
(statearr_62236_62267[(2)] = null);

(statearr_62236_62267[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62224 === (11))){
var inst_62187 = (state_62223[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_62223,(10),Object,null,(9));
var inst_62196 = chs__$1.call(null,inst_62187);
var inst_62197 = done.call(null,inst_62187);
var inst_62198 = cljs.core.async.take_BANG_.call(null,inst_62196,inst_62197);
var state_62223__$1 = state_62223;
var statearr_62237_62268 = state_62223__$1;
(statearr_62237_62268[(2)] = inst_62198);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62223__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62224 === (9))){
var inst_62187 = (state_62223[(7)]);
var inst_62200 = (state_62223[(2)]);
var inst_62201 = (inst_62187 + (1));
var inst_62187__$1 = inst_62201;
var state_62223__$1 = (function (){var statearr_62238 = state_62223;
(statearr_62238[(10)] = inst_62200);

(statearr_62238[(7)] = inst_62187__$1);

return statearr_62238;
})();
var statearr_62239_62269 = state_62223__$1;
(statearr_62239_62269[(2)] = null);

(statearr_62239_62269[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62224 === (5))){
var inst_62207 = (state_62223[(2)]);
var state_62223__$1 = (function (){var statearr_62240 = state_62223;
(statearr_62240[(11)] = inst_62207);

return statearr_62240;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62223__$1,(12),dchan);
} else {
if((state_val_62224 === (14))){
var inst_62209 = (state_62223[(8)]);
var inst_62214 = cljs.core.apply.call(null,f,inst_62209);
var state_62223__$1 = state_62223;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62223__$1,(16),out,inst_62214);
} else {
if((state_val_62224 === (16))){
var inst_62216 = (state_62223[(2)]);
var state_62223__$1 = (function (){var statearr_62241 = state_62223;
(statearr_62241[(12)] = inst_62216);

return statearr_62241;
})();
var statearr_62242_62270 = state_62223__$1;
(statearr_62242_62270[(2)] = null);

(statearr_62242_62270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62224 === (10))){
var inst_62191 = (state_62223[(2)]);
var inst_62192 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_62223__$1 = (function (){var statearr_62243 = state_62223;
(statearr_62243[(13)] = inst_62191);

return statearr_62243;
})();
var statearr_62244_62271 = state_62223__$1;
(statearr_62244_62271[(2)] = inst_62192);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62223__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62224 === (8))){
var inst_62205 = (state_62223[(2)]);
var state_62223__$1 = state_62223;
var statearr_62245_62272 = state_62223__$1;
(statearr_62245_62272[(2)] = inst_62205);

(statearr_62245_62272[(1)] = (5));


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
});})(c__49215__auto___62257,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__49159__auto__,c__49215__auto___62257,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__49160__auto__ = null;
var cljs$core$async$state_machine__49160__auto____0 = (function (){
var statearr_62249 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62249[(0)] = cljs$core$async$state_machine__49160__auto__);

(statearr_62249[(1)] = (1));

return statearr_62249;
});
var cljs$core$async$state_machine__49160__auto____1 = (function (state_62223){
while(true){
var ret_value__49161__auto__ = (function (){try{while(true){
var result__49162__auto__ = switch__49159__auto__.call(null,state_62223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49162__auto__;
}
break;
}
}catch (e62250){if((e62250 instanceof Object)){
var ex__49163__auto__ = e62250;
var statearr_62251_62273 = state_62223;
(statearr_62251_62273[(5)] = ex__49163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62274 = state_62223;
state_62223 = G__62274;
continue;
} else {
return ret_value__49161__auto__;
}
break;
}
});
cljs$core$async$state_machine__49160__auto__ = function(state_62223){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49160__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49160__auto____1.call(this,state_62223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49160__auto____0;
cljs$core$async$state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49160__auto____1;
return cljs$core$async$state_machine__49160__auto__;
})()
;})(switch__49159__auto__,c__49215__auto___62257,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__49217__auto__ = (function (){var statearr_62252 = f__49216__auto__.call(null);
(statearr_62252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49215__auto___62257);

return statearr_62252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49217__auto__);
});})(c__49215__auto___62257,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args62276 = [];
var len__44607__auto___62334 = arguments.length;
var i__44608__auto___62335 = (0);
while(true){
if((i__44608__auto___62335 < len__44607__auto___62334)){
args62276.push((arguments[i__44608__auto___62335]));

var G__62336 = (i__44608__auto___62335 + (1));
i__44608__auto___62335 = G__62336;
continue;
} else {
}
break;
}

var G__62278 = args62276.length;
switch (G__62278) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args62276.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__49215__auto___62338 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49215__auto___62338,out){
return (function (){
var f__49216__auto__ = (function (){var switch__49159__auto__ = ((function (c__49215__auto___62338,out){
return (function (state_62310){
var state_val_62311 = (state_62310[(1)]);
if((state_val_62311 === (7))){
var inst_62290 = (state_62310[(7)]);
var inst_62289 = (state_62310[(8)]);
var inst_62289__$1 = (state_62310[(2)]);
var inst_62290__$1 = cljs.core.nth.call(null,inst_62289__$1,(0),null);
var inst_62291 = cljs.core.nth.call(null,inst_62289__$1,(1),null);
var inst_62292 = (inst_62290__$1 == null);
var state_62310__$1 = (function (){var statearr_62312 = state_62310;
(statearr_62312[(9)] = inst_62291);

(statearr_62312[(7)] = inst_62290__$1);

(statearr_62312[(8)] = inst_62289__$1);

return statearr_62312;
})();
if(cljs.core.truth_(inst_62292)){
var statearr_62313_62339 = state_62310__$1;
(statearr_62313_62339[(1)] = (8));

} else {
var statearr_62314_62340 = state_62310__$1;
(statearr_62314_62340[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62311 === (1))){
var inst_62279 = cljs.core.vec.call(null,chs);
var inst_62280 = inst_62279;
var state_62310__$1 = (function (){var statearr_62315 = state_62310;
(statearr_62315[(10)] = inst_62280);

return statearr_62315;
})();
var statearr_62316_62341 = state_62310__$1;
(statearr_62316_62341[(2)] = null);

(statearr_62316_62341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62311 === (4))){
var inst_62280 = (state_62310[(10)]);
var state_62310__$1 = state_62310;
return cljs.core.async.ioc_alts_BANG_.call(null,state_62310__$1,(7),inst_62280);
} else {
if((state_val_62311 === (6))){
var inst_62306 = (state_62310[(2)]);
var state_62310__$1 = state_62310;
var statearr_62317_62342 = state_62310__$1;
(statearr_62317_62342[(2)] = inst_62306);

(statearr_62317_62342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62311 === (3))){
var inst_62308 = (state_62310[(2)]);
var state_62310__$1 = state_62310;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62310__$1,inst_62308);
} else {
if((state_val_62311 === (2))){
var inst_62280 = (state_62310[(10)]);
var inst_62282 = cljs.core.count.call(null,inst_62280);
var inst_62283 = (inst_62282 > (0));
var state_62310__$1 = state_62310;
if(cljs.core.truth_(inst_62283)){
var statearr_62319_62343 = state_62310__$1;
(statearr_62319_62343[(1)] = (4));

} else {
var statearr_62320_62344 = state_62310__$1;
(statearr_62320_62344[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62311 === (11))){
var inst_62280 = (state_62310[(10)]);
var inst_62299 = (state_62310[(2)]);
var tmp62318 = inst_62280;
var inst_62280__$1 = tmp62318;
var state_62310__$1 = (function (){var statearr_62321 = state_62310;
(statearr_62321[(11)] = inst_62299);

(statearr_62321[(10)] = inst_62280__$1);

return statearr_62321;
})();
var statearr_62322_62345 = state_62310__$1;
(statearr_62322_62345[(2)] = null);

(statearr_62322_62345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62311 === (9))){
var inst_62290 = (state_62310[(7)]);
var state_62310__$1 = state_62310;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62310__$1,(11),out,inst_62290);
} else {
if((state_val_62311 === (5))){
var inst_62304 = cljs.core.async.close_BANG_.call(null,out);
var state_62310__$1 = state_62310;
var statearr_62323_62346 = state_62310__$1;
(statearr_62323_62346[(2)] = inst_62304);

(statearr_62323_62346[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62311 === (10))){
var inst_62302 = (state_62310[(2)]);
var state_62310__$1 = state_62310;
var statearr_62324_62347 = state_62310__$1;
(statearr_62324_62347[(2)] = inst_62302);

(statearr_62324_62347[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62311 === (8))){
var inst_62291 = (state_62310[(9)]);
var inst_62280 = (state_62310[(10)]);
var inst_62290 = (state_62310[(7)]);
var inst_62289 = (state_62310[(8)]);
var inst_62294 = (function (){var cs = inst_62280;
var vec__62285 = inst_62289;
var v = inst_62290;
var c = inst_62291;
return ((function (cs,vec__62285,v,c,inst_62291,inst_62280,inst_62290,inst_62289,state_val_62311,c__49215__auto___62338,out){
return (function (p1__62275_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__62275_SHARP_);
});
;})(cs,vec__62285,v,c,inst_62291,inst_62280,inst_62290,inst_62289,state_val_62311,c__49215__auto___62338,out))
})();
var inst_62295 = cljs.core.filterv.call(null,inst_62294,inst_62280);
var inst_62280__$1 = inst_62295;
var state_62310__$1 = (function (){var statearr_62325 = state_62310;
(statearr_62325[(10)] = inst_62280__$1);

return statearr_62325;
})();
var statearr_62326_62348 = state_62310__$1;
(statearr_62326_62348[(2)] = null);

(statearr_62326_62348[(1)] = (2));


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
});})(c__49215__auto___62338,out))
;
return ((function (switch__49159__auto__,c__49215__auto___62338,out){
return (function() {
var cljs$core$async$state_machine__49160__auto__ = null;
var cljs$core$async$state_machine__49160__auto____0 = (function (){
var statearr_62330 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62330[(0)] = cljs$core$async$state_machine__49160__auto__);

(statearr_62330[(1)] = (1));

return statearr_62330;
});
var cljs$core$async$state_machine__49160__auto____1 = (function (state_62310){
while(true){
var ret_value__49161__auto__ = (function (){try{while(true){
var result__49162__auto__ = switch__49159__auto__.call(null,state_62310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49162__auto__;
}
break;
}
}catch (e62331){if((e62331 instanceof Object)){
var ex__49163__auto__ = e62331;
var statearr_62332_62349 = state_62310;
(statearr_62332_62349[(5)] = ex__49163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62350 = state_62310;
state_62310 = G__62350;
continue;
} else {
return ret_value__49161__auto__;
}
break;
}
});
cljs$core$async$state_machine__49160__auto__ = function(state_62310){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49160__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49160__auto____1.call(this,state_62310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49160__auto____0;
cljs$core$async$state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49160__auto____1;
return cljs$core$async$state_machine__49160__auto__;
})()
;})(switch__49159__auto__,c__49215__auto___62338,out))
})();
var state__49217__auto__ = (function (){var statearr_62333 = f__49216__auto__.call(null);
(statearr_62333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49215__auto___62338);

return statearr_62333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49217__auto__);
});})(c__49215__auto___62338,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args62351 = [];
var len__44607__auto___62400 = arguments.length;
var i__44608__auto___62401 = (0);
while(true){
if((i__44608__auto___62401 < len__44607__auto___62400)){
args62351.push((arguments[i__44608__auto___62401]));

var G__62402 = (i__44608__auto___62401 + (1));
i__44608__auto___62401 = G__62402;
continue;
} else {
}
break;
}

var G__62353 = args62351.length;
switch (G__62353) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args62351.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__49215__auto___62404 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49215__auto___62404,out){
return (function (){
var f__49216__auto__ = (function (){var switch__49159__auto__ = ((function (c__49215__auto___62404,out){
return (function (state_62377){
var state_val_62378 = (state_62377[(1)]);
if((state_val_62378 === (7))){
var inst_62359 = (state_62377[(7)]);
var inst_62359__$1 = (state_62377[(2)]);
var inst_62360 = (inst_62359__$1 == null);
var inst_62361 = cljs.core.not.call(null,inst_62360);
var state_62377__$1 = (function (){var statearr_62379 = state_62377;
(statearr_62379[(7)] = inst_62359__$1);

return statearr_62379;
})();
if(inst_62361){
var statearr_62380_62405 = state_62377__$1;
(statearr_62380_62405[(1)] = (8));

} else {
var statearr_62381_62406 = state_62377__$1;
(statearr_62381_62406[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62378 === (1))){
var inst_62354 = (0);
var state_62377__$1 = (function (){var statearr_62382 = state_62377;
(statearr_62382[(8)] = inst_62354);

return statearr_62382;
})();
var statearr_62383_62407 = state_62377__$1;
(statearr_62383_62407[(2)] = null);

(statearr_62383_62407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62378 === (4))){
var state_62377__$1 = state_62377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62377__$1,(7),ch);
} else {
if((state_val_62378 === (6))){
var inst_62372 = (state_62377[(2)]);
var state_62377__$1 = state_62377;
var statearr_62384_62408 = state_62377__$1;
(statearr_62384_62408[(2)] = inst_62372);

(statearr_62384_62408[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62378 === (3))){
var inst_62374 = (state_62377[(2)]);
var inst_62375 = cljs.core.async.close_BANG_.call(null,out);
var state_62377__$1 = (function (){var statearr_62385 = state_62377;
(statearr_62385[(9)] = inst_62374);

return statearr_62385;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62377__$1,inst_62375);
} else {
if((state_val_62378 === (2))){
var inst_62354 = (state_62377[(8)]);
var inst_62356 = (inst_62354 < n);
var state_62377__$1 = state_62377;
if(cljs.core.truth_(inst_62356)){
var statearr_62386_62409 = state_62377__$1;
(statearr_62386_62409[(1)] = (4));

} else {
var statearr_62387_62410 = state_62377__$1;
(statearr_62387_62410[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62378 === (11))){
var inst_62354 = (state_62377[(8)]);
var inst_62364 = (state_62377[(2)]);
var inst_62365 = (inst_62354 + (1));
var inst_62354__$1 = inst_62365;
var state_62377__$1 = (function (){var statearr_62388 = state_62377;
(statearr_62388[(8)] = inst_62354__$1);

(statearr_62388[(10)] = inst_62364);

return statearr_62388;
})();
var statearr_62389_62411 = state_62377__$1;
(statearr_62389_62411[(2)] = null);

(statearr_62389_62411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62378 === (9))){
var state_62377__$1 = state_62377;
var statearr_62390_62412 = state_62377__$1;
(statearr_62390_62412[(2)] = null);

(statearr_62390_62412[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62378 === (5))){
var state_62377__$1 = state_62377;
var statearr_62391_62413 = state_62377__$1;
(statearr_62391_62413[(2)] = null);

(statearr_62391_62413[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62378 === (10))){
var inst_62369 = (state_62377[(2)]);
var state_62377__$1 = state_62377;
var statearr_62392_62414 = state_62377__$1;
(statearr_62392_62414[(2)] = inst_62369);

(statearr_62392_62414[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62378 === (8))){
var inst_62359 = (state_62377[(7)]);
var state_62377__$1 = state_62377;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62377__$1,(11),out,inst_62359);
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
});})(c__49215__auto___62404,out))
;
return ((function (switch__49159__auto__,c__49215__auto___62404,out){
return (function() {
var cljs$core$async$state_machine__49160__auto__ = null;
var cljs$core$async$state_machine__49160__auto____0 = (function (){
var statearr_62396 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_62396[(0)] = cljs$core$async$state_machine__49160__auto__);

(statearr_62396[(1)] = (1));

return statearr_62396;
});
var cljs$core$async$state_machine__49160__auto____1 = (function (state_62377){
while(true){
var ret_value__49161__auto__ = (function (){try{while(true){
var result__49162__auto__ = switch__49159__auto__.call(null,state_62377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49162__auto__;
}
break;
}
}catch (e62397){if((e62397 instanceof Object)){
var ex__49163__auto__ = e62397;
var statearr_62398_62415 = state_62377;
(statearr_62398_62415[(5)] = ex__49163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62416 = state_62377;
state_62377 = G__62416;
continue;
} else {
return ret_value__49161__auto__;
}
break;
}
});
cljs$core$async$state_machine__49160__auto__ = function(state_62377){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49160__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49160__auto____1.call(this,state_62377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49160__auto____0;
cljs$core$async$state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49160__auto____1;
return cljs$core$async$state_machine__49160__auto__;
})()
;})(switch__49159__auto__,c__49215__auto___62404,out))
})();
var state__49217__auto__ = (function (){var statearr_62399 = f__49216__auto__.call(null);
(statearr_62399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49215__auto___62404);

return statearr_62399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49217__auto__);
});})(c__49215__auto___62404,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async62424 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62424 = (function (f,ch,meta62425){
this.f = f;
this.ch = ch;
this.meta62425 = meta62425;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async62424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62426,meta62425__$1){
var self__ = this;
var _62426__$1 = this;
return (new cljs.core.async.t_cljs$core$async62424(self__.f,self__.ch,meta62425__$1));
});

cljs.core.async.t_cljs$core$async62424.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62426){
var self__ = this;
var _62426__$1 = this;
return self__.meta62425;
});

cljs.core.async.t_cljs$core$async62424.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62424.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async62424.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async62424.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62424.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async62427 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62427 = (function (f,ch,meta62425,_,fn1,meta62428){
this.f = f;
this.ch = ch;
this.meta62425 = meta62425;
this._ = _;
this.fn1 = fn1;
this.meta62428 = meta62428;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async62427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_62429,meta62428__$1){
var self__ = this;
var _62429__$1 = this;
return (new cljs.core.async.t_cljs$core$async62427(self__.f,self__.ch,self__.meta62425,self__._,self__.fn1,meta62428__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async62427.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_62429){
var self__ = this;
var _62429__$1 = this;
return self__.meta62428;
});})(___$1))
;

cljs.core.async.t_cljs$core$async62427.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62427.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async62427.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async62427.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__62417_SHARP_){
return f1.call(null,(((p1__62417_SHARP_ == null))?null:self__.f.call(null,p1__62417_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async62427.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta62425","meta62425",1104109918,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async62424","cljs.core.async/t_cljs$core$async62424",-1306930392,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta62428","meta62428",-1894110205,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async62427.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async62427.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62427";

cljs.core.async.t_cljs$core$async62427.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__44105__auto__,writer__44106__auto__,opt__44107__auto__){
return cljs.core._write.call(null,writer__44106__auto__,"cljs.core.async/t_cljs$core$async62427");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async62427 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async62427(f__$1,ch__$1,meta62425__$1,___$2,fn1__$1,meta62428){
return (new cljs.core.async.t_cljs$core$async62427(f__$1,ch__$1,meta62425__$1,___$2,fn1__$1,meta62428));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async62427(self__.f,self__.ch,self__.meta62425,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__43482__auto__ = ret;
if(cljs.core.truth_(and__43482__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__43482__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async62424.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62424.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async62424.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta62425","meta62425",1104109918,null)], null);
});

cljs.core.async.t_cljs$core$async62424.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async62424.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62424";

cljs.core.async.t_cljs$core$async62424.cljs$lang$ctorPrWriter = (function (this__44105__auto__,writer__44106__auto__,opt__44107__auto__){
return cljs.core._write.call(null,writer__44106__auto__,"cljs.core.async/t_cljs$core$async62424");
});

cljs.core.async.__GT_t_cljs$core$async62424 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async62424(f__$1,ch__$1,meta62425){
return (new cljs.core.async.t_cljs$core$async62424(f__$1,ch__$1,meta62425));
});

}

return (new cljs.core.async.t_cljs$core$async62424(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async62433 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62433 = (function (f,ch,meta62434){
this.f = f;
this.ch = ch;
this.meta62434 = meta62434;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async62433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62435,meta62434__$1){
var self__ = this;
var _62435__$1 = this;
return (new cljs.core.async.t_cljs$core$async62433(self__.f,self__.ch,meta62434__$1));
});

cljs.core.async.t_cljs$core$async62433.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62435){
var self__ = this;
var _62435__$1 = this;
return self__.meta62434;
});

cljs.core.async.t_cljs$core$async62433.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62433.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async62433.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62433.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async62433.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62433.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async62433.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta62434","meta62434",-1608059012,null)], null);
});

cljs.core.async.t_cljs$core$async62433.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async62433.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62433";

cljs.core.async.t_cljs$core$async62433.cljs$lang$ctorPrWriter = (function (this__44105__auto__,writer__44106__auto__,opt__44107__auto__){
return cljs.core._write.call(null,writer__44106__auto__,"cljs.core.async/t_cljs$core$async62433");
});

cljs.core.async.__GT_t_cljs$core$async62433 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async62433(f__$1,ch__$1,meta62434){
return (new cljs.core.async.t_cljs$core$async62433(f__$1,ch__$1,meta62434));
});

}

return (new cljs.core.async.t_cljs$core$async62433(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async62439 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62439 = (function (p,ch,meta62440){
this.p = p;
this.ch = ch;
this.meta62440 = meta62440;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async62439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62441,meta62440__$1){
var self__ = this;
var _62441__$1 = this;
return (new cljs.core.async.t_cljs$core$async62439(self__.p,self__.ch,meta62440__$1));
});

cljs.core.async.t_cljs$core$async62439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62441){
var self__ = this;
var _62441__$1 = this;
return self__.meta62440;
});

cljs.core.async.t_cljs$core$async62439.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62439.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async62439.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async62439.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62439.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async62439.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62439.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async62439.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta62440","meta62440",984664809,null)], null);
});

cljs.core.async.t_cljs$core$async62439.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async62439.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62439";

cljs.core.async.t_cljs$core$async62439.cljs$lang$ctorPrWriter = (function (this__44105__auto__,writer__44106__auto__,opt__44107__auto__){
return cljs.core._write.call(null,writer__44106__auto__,"cljs.core.async/t_cljs$core$async62439");
});

cljs.core.async.__GT_t_cljs$core$async62439 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async62439(p__$1,ch__$1,meta62440){
return (new cljs.core.async.t_cljs$core$async62439(p__$1,ch__$1,meta62440));
});

}

return (new cljs.core.async.t_cljs$core$async62439(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args62442 = [];
var len__44607__auto___62486 = arguments.length;
var i__44608__auto___62487 = (0);
while(true){
if((i__44608__auto___62487 < len__44607__auto___62486)){
args62442.push((arguments[i__44608__auto___62487]));

var G__62488 = (i__44608__auto___62487 + (1));
i__44608__auto___62487 = G__62488;
continue;
} else {
}
break;
}

var G__62444 = args62442.length;
switch (G__62444) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args62442.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__49215__auto___62490 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49215__auto___62490,out){
return (function (){
var f__49216__auto__ = (function (){var switch__49159__auto__ = ((function (c__49215__auto___62490,out){
return (function (state_62465){
var state_val_62466 = (state_62465[(1)]);
if((state_val_62466 === (7))){
var inst_62461 = (state_62465[(2)]);
var state_62465__$1 = state_62465;
var statearr_62467_62491 = state_62465__$1;
(statearr_62467_62491[(2)] = inst_62461);

(statearr_62467_62491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62466 === (1))){
var state_62465__$1 = state_62465;
var statearr_62468_62492 = state_62465__$1;
(statearr_62468_62492[(2)] = null);

(statearr_62468_62492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62466 === (4))){
var inst_62447 = (state_62465[(7)]);
var inst_62447__$1 = (state_62465[(2)]);
var inst_62448 = (inst_62447__$1 == null);
var state_62465__$1 = (function (){var statearr_62469 = state_62465;
(statearr_62469[(7)] = inst_62447__$1);

return statearr_62469;
})();
if(cljs.core.truth_(inst_62448)){
var statearr_62470_62493 = state_62465__$1;
(statearr_62470_62493[(1)] = (5));

} else {
var statearr_62471_62494 = state_62465__$1;
(statearr_62471_62494[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62466 === (6))){
var inst_62447 = (state_62465[(7)]);
var inst_62452 = p.call(null,inst_62447);
var state_62465__$1 = state_62465;
if(cljs.core.truth_(inst_62452)){
var statearr_62472_62495 = state_62465__$1;
(statearr_62472_62495[(1)] = (8));

} else {
var statearr_62473_62496 = state_62465__$1;
(statearr_62473_62496[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62466 === (3))){
var inst_62463 = (state_62465[(2)]);
var state_62465__$1 = state_62465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62465__$1,inst_62463);
} else {
if((state_val_62466 === (2))){
var state_62465__$1 = state_62465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62465__$1,(4),ch);
} else {
if((state_val_62466 === (11))){
var inst_62455 = (state_62465[(2)]);
var state_62465__$1 = state_62465;
var statearr_62474_62497 = state_62465__$1;
(statearr_62474_62497[(2)] = inst_62455);

(statearr_62474_62497[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62466 === (9))){
var state_62465__$1 = state_62465;
var statearr_62475_62498 = state_62465__$1;
(statearr_62475_62498[(2)] = null);

(statearr_62475_62498[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62466 === (5))){
var inst_62450 = cljs.core.async.close_BANG_.call(null,out);
var state_62465__$1 = state_62465;
var statearr_62476_62499 = state_62465__$1;
(statearr_62476_62499[(2)] = inst_62450);

(statearr_62476_62499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62466 === (10))){
var inst_62458 = (state_62465[(2)]);
var state_62465__$1 = (function (){var statearr_62477 = state_62465;
(statearr_62477[(8)] = inst_62458);

return statearr_62477;
})();
var statearr_62478_62500 = state_62465__$1;
(statearr_62478_62500[(2)] = null);

(statearr_62478_62500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62466 === (8))){
var inst_62447 = (state_62465[(7)]);
var state_62465__$1 = state_62465;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62465__$1,(11),out,inst_62447);
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
});})(c__49215__auto___62490,out))
;
return ((function (switch__49159__auto__,c__49215__auto___62490,out){
return (function() {
var cljs$core$async$state_machine__49160__auto__ = null;
var cljs$core$async$state_machine__49160__auto____0 = (function (){
var statearr_62482 = [null,null,null,null,null,null,null,null,null];
(statearr_62482[(0)] = cljs$core$async$state_machine__49160__auto__);

(statearr_62482[(1)] = (1));

return statearr_62482;
});
var cljs$core$async$state_machine__49160__auto____1 = (function (state_62465){
while(true){
var ret_value__49161__auto__ = (function (){try{while(true){
var result__49162__auto__ = switch__49159__auto__.call(null,state_62465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49162__auto__;
}
break;
}
}catch (e62483){if((e62483 instanceof Object)){
var ex__49163__auto__ = e62483;
var statearr_62484_62501 = state_62465;
(statearr_62484_62501[(5)] = ex__49163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62502 = state_62465;
state_62465 = G__62502;
continue;
} else {
return ret_value__49161__auto__;
}
break;
}
});
cljs$core$async$state_machine__49160__auto__ = function(state_62465){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49160__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49160__auto____1.call(this,state_62465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49160__auto____0;
cljs$core$async$state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49160__auto____1;
return cljs$core$async$state_machine__49160__auto__;
})()
;})(switch__49159__auto__,c__49215__auto___62490,out))
})();
var state__49217__auto__ = (function (){var statearr_62485 = f__49216__auto__.call(null);
(statearr_62485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49215__auto___62490);

return statearr_62485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49217__auto__);
});})(c__49215__auto___62490,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args62503 = [];
var len__44607__auto___62506 = arguments.length;
var i__44608__auto___62507 = (0);
while(true){
if((i__44608__auto___62507 < len__44607__auto___62506)){
args62503.push((arguments[i__44608__auto___62507]));

var G__62508 = (i__44608__auto___62507 + (1));
i__44608__auto___62507 = G__62508;
continue;
} else {
}
break;
}

var G__62505 = args62503.length;
switch (G__62505) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args62503.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__49215__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49215__auto__){
return (function (){
var f__49216__auto__ = (function (){var switch__49159__auto__ = ((function (c__49215__auto__){
return (function (state_62675){
var state_val_62676 = (state_62675[(1)]);
if((state_val_62676 === (7))){
var inst_62671 = (state_62675[(2)]);
var state_62675__$1 = state_62675;
var statearr_62677_62718 = state_62675__$1;
(statearr_62677_62718[(2)] = inst_62671);

(statearr_62677_62718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62676 === (20))){
var inst_62641 = (state_62675[(7)]);
var inst_62652 = (state_62675[(2)]);
var inst_62653 = cljs.core.next.call(null,inst_62641);
var inst_62627 = inst_62653;
var inst_62628 = null;
var inst_62629 = (0);
var inst_62630 = (0);
var state_62675__$1 = (function (){var statearr_62678 = state_62675;
(statearr_62678[(8)] = inst_62652);

(statearr_62678[(9)] = inst_62627);

(statearr_62678[(10)] = inst_62629);

(statearr_62678[(11)] = inst_62628);

(statearr_62678[(12)] = inst_62630);

return statearr_62678;
})();
var statearr_62679_62719 = state_62675__$1;
(statearr_62679_62719[(2)] = null);

(statearr_62679_62719[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62676 === (1))){
var state_62675__$1 = state_62675;
var statearr_62680_62720 = state_62675__$1;
(statearr_62680_62720[(2)] = null);

(statearr_62680_62720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62676 === (4))){
var inst_62616 = (state_62675[(13)]);
var inst_62616__$1 = (state_62675[(2)]);
var inst_62617 = (inst_62616__$1 == null);
var state_62675__$1 = (function (){var statearr_62681 = state_62675;
(statearr_62681[(13)] = inst_62616__$1);

return statearr_62681;
})();
if(cljs.core.truth_(inst_62617)){
var statearr_62682_62721 = state_62675__$1;
(statearr_62682_62721[(1)] = (5));

} else {
var statearr_62683_62722 = state_62675__$1;
(statearr_62683_62722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62676 === (15))){
var state_62675__$1 = state_62675;
var statearr_62687_62723 = state_62675__$1;
(statearr_62687_62723[(2)] = null);

(statearr_62687_62723[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62676 === (21))){
var state_62675__$1 = state_62675;
var statearr_62688_62724 = state_62675__$1;
(statearr_62688_62724[(2)] = null);

(statearr_62688_62724[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62676 === (13))){
var inst_62627 = (state_62675[(9)]);
var inst_62629 = (state_62675[(10)]);
var inst_62628 = (state_62675[(11)]);
var inst_62630 = (state_62675[(12)]);
var inst_62637 = (state_62675[(2)]);
var inst_62638 = (inst_62630 + (1));
var tmp62684 = inst_62627;
var tmp62685 = inst_62629;
var tmp62686 = inst_62628;
var inst_62627__$1 = tmp62684;
var inst_62628__$1 = tmp62686;
var inst_62629__$1 = tmp62685;
var inst_62630__$1 = inst_62638;
var state_62675__$1 = (function (){var statearr_62689 = state_62675;
(statearr_62689[(9)] = inst_62627__$1);

(statearr_62689[(10)] = inst_62629__$1);

(statearr_62689[(14)] = inst_62637);

(statearr_62689[(11)] = inst_62628__$1);

(statearr_62689[(12)] = inst_62630__$1);

return statearr_62689;
})();
var statearr_62690_62725 = state_62675__$1;
(statearr_62690_62725[(2)] = null);

(statearr_62690_62725[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62676 === (22))){
var state_62675__$1 = state_62675;
var statearr_62691_62726 = state_62675__$1;
(statearr_62691_62726[(2)] = null);

(statearr_62691_62726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62676 === (6))){
var inst_62616 = (state_62675[(13)]);
var inst_62625 = f.call(null,inst_62616);
var inst_62626 = cljs.core.seq.call(null,inst_62625);
var inst_62627 = inst_62626;
var inst_62628 = null;
var inst_62629 = (0);
var inst_62630 = (0);
var state_62675__$1 = (function (){var statearr_62692 = state_62675;
(statearr_62692[(9)] = inst_62627);

(statearr_62692[(10)] = inst_62629);

(statearr_62692[(11)] = inst_62628);

(statearr_62692[(12)] = inst_62630);

return statearr_62692;
})();
var statearr_62693_62727 = state_62675__$1;
(statearr_62693_62727[(2)] = null);

(statearr_62693_62727[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62676 === (17))){
var inst_62641 = (state_62675[(7)]);
var inst_62645 = cljs.core.chunk_first.call(null,inst_62641);
var inst_62646 = cljs.core.chunk_rest.call(null,inst_62641);
var inst_62647 = cljs.core.count.call(null,inst_62645);
var inst_62627 = inst_62646;
var inst_62628 = inst_62645;
var inst_62629 = inst_62647;
var inst_62630 = (0);
var state_62675__$1 = (function (){var statearr_62694 = state_62675;
(statearr_62694[(9)] = inst_62627);

(statearr_62694[(10)] = inst_62629);

(statearr_62694[(11)] = inst_62628);

(statearr_62694[(12)] = inst_62630);

return statearr_62694;
})();
var statearr_62695_62728 = state_62675__$1;
(statearr_62695_62728[(2)] = null);

(statearr_62695_62728[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62676 === (3))){
var inst_62673 = (state_62675[(2)]);
var state_62675__$1 = state_62675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62675__$1,inst_62673);
} else {
if((state_val_62676 === (12))){
var inst_62661 = (state_62675[(2)]);
var state_62675__$1 = state_62675;
var statearr_62696_62729 = state_62675__$1;
(statearr_62696_62729[(2)] = inst_62661);

(statearr_62696_62729[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62676 === (2))){
var state_62675__$1 = state_62675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62675__$1,(4),in$);
} else {
if((state_val_62676 === (23))){
var inst_62669 = (state_62675[(2)]);
var state_62675__$1 = state_62675;
var statearr_62697_62730 = state_62675__$1;
(statearr_62697_62730[(2)] = inst_62669);

(statearr_62697_62730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62676 === (19))){
var inst_62656 = (state_62675[(2)]);
var state_62675__$1 = state_62675;
var statearr_62698_62731 = state_62675__$1;
(statearr_62698_62731[(2)] = inst_62656);

(statearr_62698_62731[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62676 === (11))){
var inst_62627 = (state_62675[(9)]);
var inst_62641 = (state_62675[(7)]);
var inst_62641__$1 = cljs.core.seq.call(null,inst_62627);
var state_62675__$1 = (function (){var statearr_62699 = state_62675;
(statearr_62699[(7)] = inst_62641__$1);

return statearr_62699;
})();
if(inst_62641__$1){
var statearr_62700_62732 = state_62675__$1;
(statearr_62700_62732[(1)] = (14));

} else {
var statearr_62701_62733 = state_62675__$1;
(statearr_62701_62733[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62676 === (9))){
var inst_62663 = (state_62675[(2)]);
var inst_62664 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_62675__$1 = (function (){var statearr_62702 = state_62675;
(statearr_62702[(15)] = inst_62663);

return statearr_62702;
})();
if(cljs.core.truth_(inst_62664)){
var statearr_62703_62734 = state_62675__$1;
(statearr_62703_62734[(1)] = (21));

} else {
var statearr_62704_62735 = state_62675__$1;
(statearr_62704_62735[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62676 === (5))){
var inst_62619 = cljs.core.async.close_BANG_.call(null,out);
var state_62675__$1 = state_62675;
var statearr_62705_62736 = state_62675__$1;
(statearr_62705_62736[(2)] = inst_62619);

(statearr_62705_62736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62676 === (14))){
var inst_62641 = (state_62675[(7)]);
var inst_62643 = cljs.core.chunked_seq_QMARK_.call(null,inst_62641);
var state_62675__$1 = state_62675;
if(inst_62643){
var statearr_62706_62737 = state_62675__$1;
(statearr_62706_62737[(1)] = (17));

} else {
var statearr_62707_62738 = state_62675__$1;
(statearr_62707_62738[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62676 === (16))){
var inst_62659 = (state_62675[(2)]);
var state_62675__$1 = state_62675;
var statearr_62708_62739 = state_62675__$1;
(statearr_62708_62739[(2)] = inst_62659);

(statearr_62708_62739[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62676 === (10))){
var inst_62628 = (state_62675[(11)]);
var inst_62630 = (state_62675[(12)]);
var inst_62635 = cljs.core._nth.call(null,inst_62628,inst_62630);
var state_62675__$1 = state_62675;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62675__$1,(13),out,inst_62635);
} else {
if((state_val_62676 === (18))){
var inst_62641 = (state_62675[(7)]);
var inst_62650 = cljs.core.first.call(null,inst_62641);
var state_62675__$1 = state_62675;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62675__$1,(20),out,inst_62650);
} else {
if((state_val_62676 === (8))){
var inst_62629 = (state_62675[(10)]);
var inst_62630 = (state_62675[(12)]);
var inst_62632 = (inst_62630 < inst_62629);
var inst_62633 = inst_62632;
var state_62675__$1 = state_62675;
if(cljs.core.truth_(inst_62633)){
var statearr_62709_62740 = state_62675__$1;
(statearr_62709_62740[(1)] = (10));

} else {
var statearr_62710_62741 = state_62675__$1;
(statearr_62710_62741[(1)] = (11));

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
}
}
}
}
}
}
});})(c__49215__auto__))
;
return ((function (switch__49159__auto__,c__49215__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__49160__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__49160__auto____0 = (function (){
var statearr_62714 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62714[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__49160__auto__);

(statearr_62714[(1)] = (1));

return statearr_62714;
});
var cljs$core$async$mapcat_STAR__$_state_machine__49160__auto____1 = (function (state_62675){
while(true){
var ret_value__49161__auto__ = (function (){try{while(true){
var result__49162__auto__ = switch__49159__auto__.call(null,state_62675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49162__auto__;
}
break;
}
}catch (e62715){if((e62715 instanceof Object)){
var ex__49163__auto__ = e62715;
var statearr_62716_62742 = state_62675;
(statearr_62716_62742[(5)] = ex__49163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62743 = state_62675;
state_62675 = G__62743;
continue;
} else {
return ret_value__49161__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__49160__auto__ = function(state_62675){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__49160__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__49160__auto____1.call(this,state_62675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__49160__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__49160__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__49160__auto__;
})()
;})(switch__49159__auto__,c__49215__auto__))
})();
var state__49217__auto__ = (function (){var statearr_62717 = f__49216__auto__.call(null);
(statearr_62717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49215__auto__);

return statearr_62717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49217__auto__);
});})(c__49215__auto__))
);

return c__49215__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args62744 = [];
var len__44607__auto___62747 = arguments.length;
var i__44608__auto___62748 = (0);
while(true){
if((i__44608__auto___62748 < len__44607__auto___62747)){
args62744.push((arguments[i__44608__auto___62748]));

var G__62749 = (i__44608__auto___62748 + (1));
i__44608__auto___62748 = G__62749;
continue;
} else {
}
break;
}

var G__62746 = args62744.length;
switch (G__62746) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args62744.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args62751 = [];
var len__44607__auto___62754 = arguments.length;
var i__44608__auto___62755 = (0);
while(true){
if((i__44608__auto___62755 < len__44607__auto___62754)){
args62751.push((arguments[i__44608__auto___62755]));

var G__62756 = (i__44608__auto___62755 + (1));
i__44608__auto___62755 = G__62756;
continue;
} else {
}
break;
}

var G__62753 = args62751.length;
switch (G__62753) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args62751.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args62758 = [];
var len__44607__auto___62809 = arguments.length;
var i__44608__auto___62810 = (0);
while(true){
if((i__44608__auto___62810 < len__44607__auto___62809)){
args62758.push((arguments[i__44608__auto___62810]));

var G__62811 = (i__44608__auto___62810 + (1));
i__44608__auto___62810 = G__62811;
continue;
} else {
}
break;
}

var G__62760 = args62758.length;
switch (G__62760) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args62758.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__49215__auto___62813 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49215__auto___62813,out){
return (function (){
var f__49216__auto__ = (function (){var switch__49159__auto__ = ((function (c__49215__auto___62813,out){
return (function (state_62784){
var state_val_62785 = (state_62784[(1)]);
if((state_val_62785 === (7))){
var inst_62779 = (state_62784[(2)]);
var state_62784__$1 = state_62784;
var statearr_62786_62814 = state_62784__$1;
(statearr_62786_62814[(2)] = inst_62779);

(statearr_62786_62814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62785 === (1))){
var inst_62761 = null;
var state_62784__$1 = (function (){var statearr_62787 = state_62784;
(statearr_62787[(7)] = inst_62761);

return statearr_62787;
})();
var statearr_62788_62815 = state_62784__$1;
(statearr_62788_62815[(2)] = null);

(statearr_62788_62815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62785 === (4))){
var inst_62764 = (state_62784[(8)]);
var inst_62764__$1 = (state_62784[(2)]);
var inst_62765 = (inst_62764__$1 == null);
var inst_62766 = cljs.core.not.call(null,inst_62765);
var state_62784__$1 = (function (){var statearr_62789 = state_62784;
(statearr_62789[(8)] = inst_62764__$1);

return statearr_62789;
})();
if(inst_62766){
var statearr_62790_62816 = state_62784__$1;
(statearr_62790_62816[(1)] = (5));

} else {
var statearr_62791_62817 = state_62784__$1;
(statearr_62791_62817[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62785 === (6))){
var state_62784__$1 = state_62784;
var statearr_62792_62818 = state_62784__$1;
(statearr_62792_62818[(2)] = null);

(statearr_62792_62818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62785 === (3))){
var inst_62781 = (state_62784[(2)]);
var inst_62782 = cljs.core.async.close_BANG_.call(null,out);
var state_62784__$1 = (function (){var statearr_62793 = state_62784;
(statearr_62793[(9)] = inst_62781);

return statearr_62793;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62784__$1,inst_62782);
} else {
if((state_val_62785 === (2))){
var state_62784__$1 = state_62784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62784__$1,(4),ch);
} else {
if((state_val_62785 === (11))){
var inst_62764 = (state_62784[(8)]);
var inst_62773 = (state_62784[(2)]);
var inst_62761 = inst_62764;
var state_62784__$1 = (function (){var statearr_62794 = state_62784;
(statearr_62794[(7)] = inst_62761);

(statearr_62794[(10)] = inst_62773);

return statearr_62794;
})();
var statearr_62795_62819 = state_62784__$1;
(statearr_62795_62819[(2)] = null);

(statearr_62795_62819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62785 === (9))){
var inst_62764 = (state_62784[(8)]);
var state_62784__$1 = state_62784;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62784__$1,(11),out,inst_62764);
} else {
if((state_val_62785 === (5))){
var inst_62761 = (state_62784[(7)]);
var inst_62764 = (state_62784[(8)]);
var inst_62768 = cljs.core._EQ_.call(null,inst_62764,inst_62761);
var state_62784__$1 = state_62784;
if(inst_62768){
var statearr_62797_62820 = state_62784__$1;
(statearr_62797_62820[(1)] = (8));

} else {
var statearr_62798_62821 = state_62784__$1;
(statearr_62798_62821[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62785 === (10))){
var inst_62776 = (state_62784[(2)]);
var state_62784__$1 = state_62784;
var statearr_62799_62822 = state_62784__$1;
(statearr_62799_62822[(2)] = inst_62776);

(statearr_62799_62822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62785 === (8))){
var inst_62761 = (state_62784[(7)]);
var tmp62796 = inst_62761;
var inst_62761__$1 = tmp62796;
var state_62784__$1 = (function (){var statearr_62800 = state_62784;
(statearr_62800[(7)] = inst_62761__$1);

return statearr_62800;
})();
var statearr_62801_62823 = state_62784__$1;
(statearr_62801_62823[(2)] = null);

(statearr_62801_62823[(1)] = (2));


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
});})(c__49215__auto___62813,out))
;
return ((function (switch__49159__auto__,c__49215__auto___62813,out){
return (function() {
var cljs$core$async$state_machine__49160__auto__ = null;
var cljs$core$async$state_machine__49160__auto____0 = (function (){
var statearr_62805 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_62805[(0)] = cljs$core$async$state_machine__49160__auto__);

(statearr_62805[(1)] = (1));

return statearr_62805;
});
var cljs$core$async$state_machine__49160__auto____1 = (function (state_62784){
while(true){
var ret_value__49161__auto__ = (function (){try{while(true){
var result__49162__auto__ = switch__49159__auto__.call(null,state_62784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49162__auto__;
}
break;
}
}catch (e62806){if((e62806 instanceof Object)){
var ex__49163__auto__ = e62806;
var statearr_62807_62824 = state_62784;
(statearr_62807_62824[(5)] = ex__49163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62825 = state_62784;
state_62784 = G__62825;
continue;
} else {
return ret_value__49161__auto__;
}
break;
}
});
cljs$core$async$state_machine__49160__auto__ = function(state_62784){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49160__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49160__auto____1.call(this,state_62784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49160__auto____0;
cljs$core$async$state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49160__auto____1;
return cljs$core$async$state_machine__49160__auto__;
})()
;})(switch__49159__auto__,c__49215__auto___62813,out))
})();
var state__49217__auto__ = (function (){var statearr_62808 = f__49216__auto__.call(null);
(statearr_62808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49215__auto___62813);

return statearr_62808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49217__auto__);
});})(c__49215__auto___62813,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args62826 = [];
var len__44607__auto___62896 = arguments.length;
var i__44608__auto___62897 = (0);
while(true){
if((i__44608__auto___62897 < len__44607__auto___62896)){
args62826.push((arguments[i__44608__auto___62897]));

var G__62898 = (i__44608__auto___62897 + (1));
i__44608__auto___62897 = G__62898;
continue;
} else {
}
break;
}

var G__62828 = args62826.length;
switch (G__62828) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args62826.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__49215__auto___62900 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49215__auto___62900,out){
return (function (){
var f__49216__auto__ = (function (){var switch__49159__auto__ = ((function (c__49215__auto___62900,out){
return (function (state_62866){
var state_val_62867 = (state_62866[(1)]);
if((state_val_62867 === (7))){
var inst_62862 = (state_62866[(2)]);
var state_62866__$1 = state_62866;
var statearr_62868_62901 = state_62866__$1;
(statearr_62868_62901[(2)] = inst_62862);

(statearr_62868_62901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62867 === (1))){
var inst_62829 = (new Array(n));
var inst_62830 = inst_62829;
var inst_62831 = (0);
var state_62866__$1 = (function (){var statearr_62869 = state_62866;
(statearr_62869[(7)] = inst_62831);

(statearr_62869[(8)] = inst_62830);

return statearr_62869;
})();
var statearr_62870_62902 = state_62866__$1;
(statearr_62870_62902[(2)] = null);

(statearr_62870_62902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62867 === (4))){
var inst_62834 = (state_62866[(9)]);
var inst_62834__$1 = (state_62866[(2)]);
var inst_62835 = (inst_62834__$1 == null);
var inst_62836 = cljs.core.not.call(null,inst_62835);
var state_62866__$1 = (function (){var statearr_62871 = state_62866;
(statearr_62871[(9)] = inst_62834__$1);

return statearr_62871;
})();
if(inst_62836){
var statearr_62872_62903 = state_62866__$1;
(statearr_62872_62903[(1)] = (5));

} else {
var statearr_62873_62904 = state_62866__$1;
(statearr_62873_62904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62867 === (15))){
var inst_62856 = (state_62866[(2)]);
var state_62866__$1 = state_62866;
var statearr_62874_62905 = state_62866__$1;
(statearr_62874_62905[(2)] = inst_62856);

(statearr_62874_62905[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62867 === (13))){
var state_62866__$1 = state_62866;
var statearr_62875_62906 = state_62866__$1;
(statearr_62875_62906[(2)] = null);

(statearr_62875_62906[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62867 === (6))){
var inst_62831 = (state_62866[(7)]);
var inst_62852 = (inst_62831 > (0));
var state_62866__$1 = state_62866;
if(cljs.core.truth_(inst_62852)){
var statearr_62876_62907 = state_62866__$1;
(statearr_62876_62907[(1)] = (12));

} else {
var statearr_62877_62908 = state_62866__$1;
(statearr_62877_62908[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62867 === (3))){
var inst_62864 = (state_62866[(2)]);
var state_62866__$1 = state_62866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62866__$1,inst_62864);
} else {
if((state_val_62867 === (12))){
var inst_62830 = (state_62866[(8)]);
var inst_62854 = cljs.core.vec.call(null,inst_62830);
var state_62866__$1 = state_62866;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62866__$1,(15),out,inst_62854);
} else {
if((state_val_62867 === (2))){
var state_62866__$1 = state_62866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62866__$1,(4),ch);
} else {
if((state_val_62867 === (11))){
var inst_62846 = (state_62866[(2)]);
var inst_62847 = (new Array(n));
var inst_62830 = inst_62847;
var inst_62831 = (0);
var state_62866__$1 = (function (){var statearr_62878 = state_62866;
(statearr_62878[(7)] = inst_62831);

(statearr_62878[(10)] = inst_62846);

(statearr_62878[(8)] = inst_62830);

return statearr_62878;
})();
var statearr_62879_62909 = state_62866__$1;
(statearr_62879_62909[(2)] = null);

(statearr_62879_62909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62867 === (9))){
var inst_62830 = (state_62866[(8)]);
var inst_62844 = cljs.core.vec.call(null,inst_62830);
var state_62866__$1 = state_62866;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62866__$1,(11),out,inst_62844);
} else {
if((state_val_62867 === (5))){
var inst_62831 = (state_62866[(7)]);
var inst_62839 = (state_62866[(11)]);
var inst_62834 = (state_62866[(9)]);
var inst_62830 = (state_62866[(8)]);
var inst_62838 = (inst_62830[inst_62831] = inst_62834);
var inst_62839__$1 = (inst_62831 + (1));
var inst_62840 = (inst_62839__$1 < n);
var state_62866__$1 = (function (){var statearr_62880 = state_62866;
(statearr_62880[(12)] = inst_62838);

(statearr_62880[(11)] = inst_62839__$1);

return statearr_62880;
})();
if(cljs.core.truth_(inst_62840)){
var statearr_62881_62910 = state_62866__$1;
(statearr_62881_62910[(1)] = (8));

} else {
var statearr_62882_62911 = state_62866__$1;
(statearr_62882_62911[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62867 === (14))){
var inst_62859 = (state_62866[(2)]);
var inst_62860 = cljs.core.async.close_BANG_.call(null,out);
var state_62866__$1 = (function (){var statearr_62884 = state_62866;
(statearr_62884[(13)] = inst_62859);

return statearr_62884;
})();
var statearr_62885_62912 = state_62866__$1;
(statearr_62885_62912[(2)] = inst_62860);

(statearr_62885_62912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62867 === (10))){
var inst_62850 = (state_62866[(2)]);
var state_62866__$1 = state_62866;
var statearr_62886_62913 = state_62866__$1;
(statearr_62886_62913[(2)] = inst_62850);

(statearr_62886_62913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62867 === (8))){
var inst_62839 = (state_62866[(11)]);
var inst_62830 = (state_62866[(8)]);
var tmp62883 = inst_62830;
var inst_62830__$1 = tmp62883;
var inst_62831 = inst_62839;
var state_62866__$1 = (function (){var statearr_62887 = state_62866;
(statearr_62887[(7)] = inst_62831);

(statearr_62887[(8)] = inst_62830__$1);

return statearr_62887;
})();
var statearr_62888_62914 = state_62866__$1;
(statearr_62888_62914[(2)] = null);

(statearr_62888_62914[(1)] = (2));


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
});})(c__49215__auto___62900,out))
;
return ((function (switch__49159__auto__,c__49215__auto___62900,out){
return (function() {
var cljs$core$async$state_machine__49160__auto__ = null;
var cljs$core$async$state_machine__49160__auto____0 = (function (){
var statearr_62892 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62892[(0)] = cljs$core$async$state_machine__49160__auto__);

(statearr_62892[(1)] = (1));

return statearr_62892;
});
var cljs$core$async$state_machine__49160__auto____1 = (function (state_62866){
while(true){
var ret_value__49161__auto__ = (function (){try{while(true){
var result__49162__auto__ = switch__49159__auto__.call(null,state_62866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49162__auto__;
}
break;
}
}catch (e62893){if((e62893 instanceof Object)){
var ex__49163__auto__ = e62893;
var statearr_62894_62915 = state_62866;
(statearr_62894_62915[(5)] = ex__49163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62916 = state_62866;
state_62866 = G__62916;
continue;
} else {
return ret_value__49161__auto__;
}
break;
}
});
cljs$core$async$state_machine__49160__auto__ = function(state_62866){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49160__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49160__auto____1.call(this,state_62866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49160__auto____0;
cljs$core$async$state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49160__auto____1;
return cljs$core$async$state_machine__49160__auto__;
})()
;})(switch__49159__auto__,c__49215__auto___62900,out))
})();
var state__49217__auto__ = (function (){var statearr_62895 = f__49216__auto__.call(null);
(statearr_62895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49215__auto___62900);

return statearr_62895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49217__auto__);
});})(c__49215__auto___62900,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args62917 = [];
var len__44607__auto___62991 = arguments.length;
var i__44608__auto___62992 = (0);
while(true){
if((i__44608__auto___62992 < len__44607__auto___62991)){
args62917.push((arguments[i__44608__auto___62992]));

var G__62993 = (i__44608__auto___62992 + (1));
i__44608__auto___62992 = G__62993;
continue;
} else {
}
break;
}

var G__62919 = args62917.length;
switch (G__62919) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args62917.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__49215__auto___62995 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49215__auto___62995,out){
return (function (){
var f__49216__auto__ = (function (){var switch__49159__auto__ = ((function (c__49215__auto___62995,out){
return (function (state_62961){
var state_val_62962 = (state_62961[(1)]);
if((state_val_62962 === (7))){
var inst_62957 = (state_62961[(2)]);
var state_62961__$1 = state_62961;
var statearr_62963_62996 = state_62961__$1;
(statearr_62963_62996[(2)] = inst_62957);

(statearr_62963_62996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62962 === (1))){
var inst_62920 = [];
var inst_62921 = inst_62920;
var inst_62922 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_62961__$1 = (function (){var statearr_62964 = state_62961;
(statearr_62964[(7)] = inst_62922);

(statearr_62964[(8)] = inst_62921);

return statearr_62964;
})();
var statearr_62965_62997 = state_62961__$1;
(statearr_62965_62997[(2)] = null);

(statearr_62965_62997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62962 === (4))){
var inst_62925 = (state_62961[(9)]);
var inst_62925__$1 = (state_62961[(2)]);
var inst_62926 = (inst_62925__$1 == null);
var inst_62927 = cljs.core.not.call(null,inst_62926);
var state_62961__$1 = (function (){var statearr_62966 = state_62961;
(statearr_62966[(9)] = inst_62925__$1);

return statearr_62966;
})();
if(inst_62927){
var statearr_62967_62998 = state_62961__$1;
(statearr_62967_62998[(1)] = (5));

} else {
var statearr_62968_62999 = state_62961__$1;
(statearr_62968_62999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62962 === (15))){
var inst_62951 = (state_62961[(2)]);
var state_62961__$1 = state_62961;
var statearr_62969_63000 = state_62961__$1;
(statearr_62969_63000[(2)] = inst_62951);

(statearr_62969_63000[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62962 === (13))){
var state_62961__$1 = state_62961;
var statearr_62970_63001 = state_62961__$1;
(statearr_62970_63001[(2)] = null);

(statearr_62970_63001[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62962 === (6))){
var inst_62921 = (state_62961[(8)]);
var inst_62946 = inst_62921.length;
var inst_62947 = (inst_62946 > (0));
var state_62961__$1 = state_62961;
if(cljs.core.truth_(inst_62947)){
var statearr_62971_63002 = state_62961__$1;
(statearr_62971_63002[(1)] = (12));

} else {
var statearr_62972_63003 = state_62961__$1;
(statearr_62972_63003[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62962 === (3))){
var inst_62959 = (state_62961[(2)]);
var state_62961__$1 = state_62961;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62961__$1,inst_62959);
} else {
if((state_val_62962 === (12))){
var inst_62921 = (state_62961[(8)]);
var inst_62949 = cljs.core.vec.call(null,inst_62921);
var state_62961__$1 = state_62961;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62961__$1,(15),out,inst_62949);
} else {
if((state_val_62962 === (2))){
var state_62961__$1 = state_62961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62961__$1,(4),ch);
} else {
if((state_val_62962 === (11))){
var inst_62925 = (state_62961[(9)]);
var inst_62929 = (state_62961[(10)]);
var inst_62939 = (state_62961[(2)]);
var inst_62940 = [];
var inst_62941 = inst_62940.push(inst_62925);
var inst_62921 = inst_62940;
var inst_62922 = inst_62929;
var state_62961__$1 = (function (){var statearr_62973 = state_62961;
(statearr_62973[(11)] = inst_62941);

(statearr_62973[(7)] = inst_62922);

(statearr_62973[(8)] = inst_62921);

(statearr_62973[(12)] = inst_62939);

return statearr_62973;
})();
var statearr_62974_63004 = state_62961__$1;
(statearr_62974_63004[(2)] = null);

(statearr_62974_63004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62962 === (9))){
var inst_62921 = (state_62961[(8)]);
var inst_62937 = cljs.core.vec.call(null,inst_62921);
var state_62961__$1 = state_62961;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62961__$1,(11),out,inst_62937);
} else {
if((state_val_62962 === (5))){
var inst_62925 = (state_62961[(9)]);
var inst_62929 = (state_62961[(10)]);
var inst_62922 = (state_62961[(7)]);
var inst_62929__$1 = f.call(null,inst_62925);
var inst_62930 = cljs.core._EQ_.call(null,inst_62929__$1,inst_62922);
var inst_62931 = cljs.core.keyword_identical_QMARK_.call(null,inst_62922,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_62932 = (inst_62930) || (inst_62931);
var state_62961__$1 = (function (){var statearr_62975 = state_62961;
(statearr_62975[(10)] = inst_62929__$1);

return statearr_62975;
})();
if(cljs.core.truth_(inst_62932)){
var statearr_62976_63005 = state_62961__$1;
(statearr_62976_63005[(1)] = (8));

} else {
var statearr_62977_63006 = state_62961__$1;
(statearr_62977_63006[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62962 === (14))){
var inst_62954 = (state_62961[(2)]);
var inst_62955 = cljs.core.async.close_BANG_.call(null,out);
var state_62961__$1 = (function (){var statearr_62979 = state_62961;
(statearr_62979[(13)] = inst_62954);

return statearr_62979;
})();
var statearr_62980_63007 = state_62961__$1;
(statearr_62980_63007[(2)] = inst_62955);

(statearr_62980_63007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62962 === (10))){
var inst_62944 = (state_62961[(2)]);
var state_62961__$1 = state_62961;
var statearr_62981_63008 = state_62961__$1;
(statearr_62981_63008[(2)] = inst_62944);

(statearr_62981_63008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62962 === (8))){
var inst_62925 = (state_62961[(9)]);
var inst_62929 = (state_62961[(10)]);
var inst_62921 = (state_62961[(8)]);
var inst_62934 = inst_62921.push(inst_62925);
var tmp62978 = inst_62921;
var inst_62921__$1 = tmp62978;
var inst_62922 = inst_62929;
var state_62961__$1 = (function (){var statearr_62982 = state_62961;
(statearr_62982[(14)] = inst_62934);

(statearr_62982[(7)] = inst_62922);

(statearr_62982[(8)] = inst_62921__$1);

return statearr_62982;
})();
var statearr_62983_63009 = state_62961__$1;
(statearr_62983_63009[(2)] = null);

(statearr_62983_63009[(1)] = (2));


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
});})(c__49215__auto___62995,out))
;
return ((function (switch__49159__auto__,c__49215__auto___62995,out){
return (function() {
var cljs$core$async$state_machine__49160__auto__ = null;
var cljs$core$async$state_machine__49160__auto____0 = (function (){
var statearr_62987 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62987[(0)] = cljs$core$async$state_machine__49160__auto__);

(statearr_62987[(1)] = (1));

return statearr_62987;
});
var cljs$core$async$state_machine__49160__auto____1 = (function (state_62961){
while(true){
var ret_value__49161__auto__ = (function (){try{while(true){
var result__49162__auto__ = switch__49159__auto__.call(null,state_62961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49162__auto__;
}
break;
}
}catch (e62988){if((e62988 instanceof Object)){
var ex__49163__auto__ = e62988;
var statearr_62989_63010 = state_62961;
(statearr_62989_63010[(5)] = ex__49163__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63011 = state_62961;
state_62961 = G__63011;
continue;
} else {
return ret_value__49161__auto__;
}
break;
}
});
cljs$core$async$state_machine__49160__auto__ = function(state_62961){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49160__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49160__auto____1.call(this,state_62961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49160__auto____0;
cljs$core$async$state_machine__49160__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49160__auto____1;
return cljs$core$async$state_machine__49160__auto__;
})()
;})(switch__49159__auto__,c__49215__auto___62995,out))
})();
var state__49217__auto__ = (function (){var statearr_62990 = f__49216__auto__.call(null);
(statearr_62990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49215__auto___62995);

return statearr_62990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49217__auto__);
});})(c__49215__auto___62995,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1494353173227