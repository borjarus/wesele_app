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
var args40129 = [];
var len__34925__auto___40135 = arguments.length;
var i__34926__auto___40136 = (0);
while(true){
if((i__34926__auto___40136 < len__34925__auto___40135)){
args40129.push((arguments[i__34926__auto___40136]));

var G__40137 = (i__34926__auto___40136 + (1));
i__34926__auto___40136 = G__40137;
continue;
} else {
}
break;
}

var G__40131 = args40129.length;
switch (G__40131) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40129.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async40132 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40132 = (function (f,blockable,meta40133){
this.f = f;
this.blockable = blockable;
this.meta40133 = meta40133;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40134,meta40133__$1){
var self__ = this;
var _40134__$1 = this;
return (new cljs.core.async.t_cljs$core$async40132(self__.f,self__.blockable,meta40133__$1));
});

cljs.core.async.t_cljs$core$async40132.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40134){
var self__ = this;
var _40134__$1 = this;
return self__.meta40133;
});

cljs.core.async.t_cljs$core$async40132.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40132.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async40132.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async40132.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async40132.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta40133","meta40133",-1866363787,null)], null);
});

cljs.core.async.t_cljs$core$async40132.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40132.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40132";

cljs.core.async.t_cljs$core$async40132.cljs$lang$ctorPrWriter = (function (this__34423__auto__,writer__34424__auto__,opt__34425__auto__){
return cljs.core._write.call(null,writer__34424__auto__,"cljs.core.async/t_cljs$core$async40132");
});

cljs.core.async.__GT_t_cljs$core$async40132 = (function cljs$core$async$__GT_t_cljs$core$async40132(f__$1,blockable__$1,meta40133){
return (new cljs.core.async.t_cljs$core$async40132(f__$1,blockable__$1,meta40133));
});

}

return (new cljs.core.async.t_cljs$core$async40132(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args40141 = [];
var len__34925__auto___40144 = arguments.length;
var i__34926__auto___40145 = (0);
while(true){
if((i__34926__auto___40145 < len__34925__auto___40144)){
args40141.push((arguments[i__34926__auto___40145]));

var G__40146 = (i__34926__auto___40145 + (1));
i__34926__auto___40145 = G__40146;
continue;
} else {
}
break;
}

var G__40143 = args40141.length;
switch (G__40143) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40141.length)].join('')));

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
var args40148 = [];
var len__34925__auto___40151 = arguments.length;
var i__34926__auto___40152 = (0);
while(true){
if((i__34926__auto___40152 < len__34925__auto___40151)){
args40148.push((arguments[i__34926__auto___40152]));

var G__40153 = (i__34926__auto___40152 + (1));
i__34926__auto___40152 = G__40153;
continue;
} else {
}
break;
}

var G__40150 = args40148.length;
switch (G__40150) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40148.length)].join('')));

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
var args40155 = [];
var len__34925__auto___40158 = arguments.length;
var i__34926__auto___40159 = (0);
while(true){
if((i__34926__auto___40159 < len__34925__auto___40158)){
args40155.push((arguments[i__34926__auto___40159]));

var G__40160 = (i__34926__auto___40159 + (1));
i__34926__auto___40159 = G__40160;
continue;
} else {
}
break;
}

var G__40157 = args40155.length;
switch (G__40157) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40155.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_40162 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_40162);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_40162,ret){
return (function (){
return fn1.call(null,val_40162);
});})(val_40162,ret))
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
var args40163 = [];
var len__34925__auto___40166 = arguments.length;
var i__34926__auto___40167 = (0);
while(true){
if((i__34926__auto___40167 < len__34925__auto___40166)){
args40163.push((arguments[i__34926__auto___40167]));

var G__40168 = (i__34926__auto___40167 + (1));
i__34926__auto___40167 = G__40168;
continue;
} else {
}
break;
}

var G__40165 = args40163.length;
switch (G__40165) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40163.length)].join('')));

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
var n__34735__auto___40170 = n;
var x_40171 = (0);
while(true){
if((x_40171 < n__34735__auto___40170)){
(a[x_40171] = (0));

var G__40172 = (x_40171 + (1));
x_40171 = G__40172;
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

var G__40173 = (i + (1));
i = G__40173;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async40177 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40177 = (function (flag,meta40178){
this.flag = flag;
this.meta40178 = meta40178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_40179,meta40178__$1){
var self__ = this;
var _40179__$1 = this;
return (new cljs.core.async.t_cljs$core$async40177(self__.flag,meta40178__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async40177.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_40179){
var self__ = this;
var _40179__$1 = this;
return self__.meta40178;
});})(flag))
;

cljs.core.async.t_cljs$core$async40177.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40177.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async40177.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async40177.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async40177.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta40178","meta40178",672654948,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async40177.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40177.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40177";

cljs.core.async.t_cljs$core$async40177.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__34423__auto__,writer__34424__auto__,opt__34425__auto__){
return cljs.core._write.call(null,writer__34424__auto__,"cljs.core.async/t_cljs$core$async40177");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async40177 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async40177(flag__$1,meta40178){
return (new cljs.core.async.t_cljs$core$async40177(flag__$1,meta40178));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async40177(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async40183 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40183 = (function (flag,cb,meta40184){
this.flag = flag;
this.cb = cb;
this.meta40184 = meta40184;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40185,meta40184__$1){
var self__ = this;
var _40185__$1 = this;
return (new cljs.core.async.t_cljs$core$async40183(self__.flag,self__.cb,meta40184__$1));
});

cljs.core.async.t_cljs$core$async40183.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40185){
var self__ = this;
var _40185__$1 = this;
return self__.meta40184;
});

cljs.core.async.t_cljs$core$async40183.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40183.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async40183.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async40183.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async40183.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta40184","meta40184",82310012,null)], null);
});

cljs.core.async.t_cljs$core$async40183.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40183.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40183";

cljs.core.async.t_cljs$core$async40183.cljs$lang$ctorPrWriter = (function (this__34423__auto__,writer__34424__auto__,opt__34425__auto__){
return cljs.core._write.call(null,writer__34424__auto__,"cljs.core.async/t_cljs$core$async40183");
});

cljs.core.async.__GT_t_cljs$core$async40183 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async40183(flag__$1,cb__$1,meta40184){
return (new cljs.core.async.t_cljs$core$async40183(flag__$1,cb__$1,meta40184));
});

}

return (new cljs.core.async.t_cljs$core$async40183(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__40186_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40186_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40187_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40187_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__33812__auto__ = wport;
if(cljs.core.truth_(or__33812__auto__)){
return or__33812__auto__;
} else {
return port;
}
})()], null));
} else {
var G__40188 = (i + (1));
i = G__40188;
continue;
}
} else {
return null;
}
break;
}
})();
var or__33812__auto__ = ret;
if(cljs.core.truth_(or__33812__auto__)){
return or__33812__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__33800__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__33800__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__33800__auto__;
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
var args__34932__auto__ = [];
var len__34925__auto___40194 = arguments.length;
var i__34926__auto___40195 = (0);
while(true){
if((i__34926__auto___40195 < len__34925__auto___40194)){
args__34932__auto__.push((arguments[i__34926__auto___40195]));

var G__40196 = (i__34926__auto___40195 + (1));
i__34926__auto___40195 = G__40196;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((1) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__34933__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__40191){
var map__40192 = p__40191;
var map__40192__$1 = ((((!((map__40192 == null)))?((((map__40192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40192.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40192):map__40192);
var opts = map__40192__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq40189){
var G__40190 = cljs.core.first.call(null,seq40189);
var seq40189__$1 = cljs.core.next.call(null,seq40189);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40190,seq40189__$1);
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
var args40197 = [];
var len__34925__auto___40247 = arguments.length;
var i__34926__auto___40248 = (0);
while(true){
if((i__34926__auto___40248 < len__34925__auto___40247)){
args40197.push((arguments[i__34926__auto___40248]));

var G__40249 = (i__34926__auto___40248 + (1));
i__34926__auto___40248 = G__40249;
continue;
} else {
}
break;
}

var G__40199 = args40197.length;
switch (G__40199) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40197.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__40084__auto___40251 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40084__auto___40251){
return (function (){
var f__40085__auto__ = (function (){var switch__39972__auto__ = ((function (c__40084__auto___40251){
return (function (state_40223){
var state_val_40224 = (state_40223[(1)]);
if((state_val_40224 === (7))){
var inst_40219 = (state_40223[(2)]);
var state_40223__$1 = state_40223;
var statearr_40225_40252 = state_40223__$1;
(statearr_40225_40252[(2)] = inst_40219);

(statearr_40225_40252[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40224 === (1))){
var state_40223__$1 = state_40223;
var statearr_40226_40253 = state_40223__$1;
(statearr_40226_40253[(2)] = null);

(statearr_40226_40253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40224 === (4))){
var inst_40202 = (state_40223[(7)]);
var inst_40202__$1 = (state_40223[(2)]);
var inst_40203 = (inst_40202__$1 == null);
var state_40223__$1 = (function (){var statearr_40227 = state_40223;
(statearr_40227[(7)] = inst_40202__$1);

return statearr_40227;
})();
if(cljs.core.truth_(inst_40203)){
var statearr_40228_40254 = state_40223__$1;
(statearr_40228_40254[(1)] = (5));

} else {
var statearr_40229_40255 = state_40223__$1;
(statearr_40229_40255[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40224 === (13))){
var state_40223__$1 = state_40223;
var statearr_40230_40256 = state_40223__$1;
(statearr_40230_40256[(2)] = null);

(statearr_40230_40256[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40224 === (6))){
var inst_40202 = (state_40223[(7)]);
var state_40223__$1 = state_40223;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40223__$1,(11),to,inst_40202);
} else {
if((state_val_40224 === (3))){
var inst_40221 = (state_40223[(2)]);
var state_40223__$1 = state_40223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40223__$1,inst_40221);
} else {
if((state_val_40224 === (12))){
var state_40223__$1 = state_40223;
var statearr_40231_40257 = state_40223__$1;
(statearr_40231_40257[(2)] = null);

(statearr_40231_40257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40224 === (2))){
var state_40223__$1 = state_40223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40223__$1,(4),from);
} else {
if((state_val_40224 === (11))){
var inst_40212 = (state_40223[(2)]);
var state_40223__$1 = state_40223;
if(cljs.core.truth_(inst_40212)){
var statearr_40232_40258 = state_40223__$1;
(statearr_40232_40258[(1)] = (12));

} else {
var statearr_40233_40259 = state_40223__$1;
(statearr_40233_40259[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40224 === (9))){
var state_40223__$1 = state_40223;
var statearr_40234_40260 = state_40223__$1;
(statearr_40234_40260[(2)] = null);

(statearr_40234_40260[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40224 === (5))){
var state_40223__$1 = state_40223;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40235_40261 = state_40223__$1;
(statearr_40235_40261[(1)] = (8));

} else {
var statearr_40236_40262 = state_40223__$1;
(statearr_40236_40262[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40224 === (14))){
var inst_40217 = (state_40223[(2)]);
var state_40223__$1 = state_40223;
var statearr_40237_40263 = state_40223__$1;
(statearr_40237_40263[(2)] = inst_40217);

(statearr_40237_40263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40224 === (10))){
var inst_40209 = (state_40223[(2)]);
var state_40223__$1 = state_40223;
var statearr_40238_40264 = state_40223__$1;
(statearr_40238_40264[(2)] = inst_40209);

(statearr_40238_40264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40224 === (8))){
var inst_40206 = cljs.core.async.close_BANG_.call(null,to);
var state_40223__$1 = state_40223;
var statearr_40239_40265 = state_40223__$1;
(statearr_40239_40265[(2)] = inst_40206);

(statearr_40239_40265[(1)] = (10));


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
});})(c__40084__auto___40251))
;
return ((function (switch__39972__auto__,c__40084__auto___40251){
return (function() {
var cljs$core$async$state_machine__39973__auto__ = null;
var cljs$core$async$state_machine__39973__auto____0 = (function (){
var statearr_40243 = [null,null,null,null,null,null,null,null];
(statearr_40243[(0)] = cljs$core$async$state_machine__39973__auto__);

(statearr_40243[(1)] = (1));

return statearr_40243;
});
var cljs$core$async$state_machine__39973__auto____1 = (function (state_40223){
while(true){
var ret_value__39974__auto__ = (function (){try{while(true){
var result__39975__auto__ = switch__39972__auto__.call(null,state_40223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39975__auto__;
}
break;
}
}catch (e40244){if((e40244 instanceof Object)){
var ex__39976__auto__ = e40244;
var statearr_40245_40266 = state_40223;
(statearr_40245_40266[(5)] = ex__39976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40244;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40267 = state_40223;
state_40223 = G__40267;
continue;
} else {
return ret_value__39974__auto__;
}
break;
}
});
cljs$core$async$state_machine__39973__auto__ = function(state_40223){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39973__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39973__auto____1.call(this,state_40223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39973__auto____0;
cljs$core$async$state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39973__auto____1;
return cljs$core$async$state_machine__39973__auto__;
})()
;})(switch__39972__auto__,c__40084__auto___40251))
})();
var state__40086__auto__ = (function (){var statearr_40246 = f__40085__auto__.call(null);
(statearr_40246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40084__auto___40251);

return statearr_40246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40086__auto__);
});})(c__40084__auto___40251))
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
return (function (p__40455){
var vec__40456 = p__40455;
var v = cljs.core.nth.call(null,vec__40456,(0),null);
var p = cljs.core.nth.call(null,vec__40456,(1),null);
var job = vec__40456;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__40084__auto___40642 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40084__auto___40642,res,vec__40456,v,p,job,jobs,results){
return (function (){
var f__40085__auto__ = (function (){var switch__39972__auto__ = ((function (c__40084__auto___40642,res,vec__40456,v,p,job,jobs,results){
return (function (state_40463){
var state_val_40464 = (state_40463[(1)]);
if((state_val_40464 === (1))){
var state_40463__$1 = state_40463;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40463__$1,(2),res,v);
} else {
if((state_val_40464 === (2))){
var inst_40460 = (state_40463[(2)]);
var inst_40461 = cljs.core.async.close_BANG_.call(null,res);
var state_40463__$1 = (function (){var statearr_40465 = state_40463;
(statearr_40465[(7)] = inst_40460);

return statearr_40465;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40463__$1,inst_40461);
} else {
return null;
}
}
});})(c__40084__auto___40642,res,vec__40456,v,p,job,jobs,results))
;
return ((function (switch__39972__auto__,c__40084__auto___40642,res,vec__40456,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39973__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39973__auto____0 = (function (){
var statearr_40469 = [null,null,null,null,null,null,null,null];
(statearr_40469[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39973__auto__);

(statearr_40469[(1)] = (1));

return statearr_40469;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39973__auto____1 = (function (state_40463){
while(true){
var ret_value__39974__auto__ = (function (){try{while(true){
var result__39975__auto__ = switch__39972__auto__.call(null,state_40463);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39975__auto__;
}
break;
}
}catch (e40470){if((e40470 instanceof Object)){
var ex__39976__auto__ = e40470;
var statearr_40471_40643 = state_40463;
(statearr_40471_40643[(5)] = ex__39976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40644 = state_40463;
state_40463 = G__40644;
continue;
} else {
return ret_value__39974__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39973__auto__ = function(state_40463){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39973__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39973__auto____1.call(this,state_40463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39973__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39973__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39973__auto__;
})()
;})(switch__39972__auto__,c__40084__auto___40642,res,vec__40456,v,p,job,jobs,results))
})();
var state__40086__auto__ = (function (){var statearr_40472 = f__40085__auto__.call(null);
(statearr_40472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40084__auto___40642);

return statearr_40472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40086__auto__);
});})(c__40084__auto___40642,res,vec__40456,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__40473){
var vec__40474 = p__40473;
var v = cljs.core.nth.call(null,vec__40474,(0),null);
var p = cljs.core.nth.call(null,vec__40474,(1),null);
var job = vec__40474;
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
var n__34735__auto___40645 = n;
var __40646 = (0);
while(true){
if((__40646 < n__34735__auto___40645)){
var G__40477_40647 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__40477_40647) {
case "compute":
var c__40084__auto___40649 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__40646,c__40084__auto___40649,G__40477_40647,n__34735__auto___40645,jobs,results,process,async){
return (function (){
var f__40085__auto__ = (function (){var switch__39972__auto__ = ((function (__40646,c__40084__auto___40649,G__40477_40647,n__34735__auto___40645,jobs,results,process,async){
return (function (state_40490){
var state_val_40491 = (state_40490[(1)]);
if((state_val_40491 === (1))){
var state_40490__$1 = state_40490;
var statearr_40492_40650 = state_40490__$1;
(statearr_40492_40650[(2)] = null);

(statearr_40492_40650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40491 === (2))){
var state_40490__$1 = state_40490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40490__$1,(4),jobs);
} else {
if((state_val_40491 === (3))){
var inst_40488 = (state_40490[(2)]);
var state_40490__$1 = state_40490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40490__$1,inst_40488);
} else {
if((state_val_40491 === (4))){
var inst_40480 = (state_40490[(2)]);
var inst_40481 = process.call(null,inst_40480);
var state_40490__$1 = state_40490;
if(cljs.core.truth_(inst_40481)){
var statearr_40493_40651 = state_40490__$1;
(statearr_40493_40651[(1)] = (5));

} else {
var statearr_40494_40652 = state_40490__$1;
(statearr_40494_40652[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40491 === (5))){
var state_40490__$1 = state_40490;
var statearr_40495_40653 = state_40490__$1;
(statearr_40495_40653[(2)] = null);

(statearr_40495_40653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40491 === (6))){
var state_40490__$1 = state_40490;
var statearr_40496_40654 = state_40490__$1;
(statearr_40496_40654[(2)] = null);

(statearr_40496_40654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40491 === (7))){
var inst_40486 = (state_40490[(2)]);
var state_40490__$1 = state_40490;
var statearr_40497_40655 = state_40490__$1;
(statearr_40497_40655[(2)] = inst_40486);

(statearr_40497_40655[(1)] = (3));


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
});})(__40646,c__40084__auto___40649,G__40477_40647,n__34735__auto___40645,jobs,results,process,async))
;
return ((function (__40646,switch__39972__auto__,c__40084__auto___40649,G__40477_40647,n__34735__auto___40645,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39973__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39973__auto____0 = (function (){
var statearr_40501 = [null,null,null,null,null,null,null];
(statearr_40501[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39973__auto__);

(statearr_40501[(1)] = (1));

return statearr_40501;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39973__auto____1 = (function (state_40490){
while(true){
var ret_value__39974__auto__ = (function (){try{while(true){
var result__39975__auto__ = switch__39972__auto__.call(null,state_40490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39975__auto__;
}
break;
}
}catch (e40502){if((e40502 instanceof Object)){
var ex__39976__auto__ = e40502;
var statearr_40503_40656 = state_40490;
(statearr_40503_40656[(5)] = ex__39976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40502;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40657 = state_40490;
state_40490 = G__40657;
continue;
} else {
return ret_value__39974__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39973__auto__ = function(state_40490){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39973__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39973__auto____1.call(this,state_40490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39973__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39973__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39973__auto__;
})()
;})(__40646,switch__39972__auto__,c__40084__auto___40649,G__40477_40647,n__34735__auto___40645,jobs,results,process,async))
})();
var state__40086__auto__ = (function (){var statearr_40504 = f__40085__auto__.call(null);
(statearr_40504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40084__auto___40649);

return statearr_40504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40086__auto__);
});})(__40646,c__40084__auto___40649,G__40477_40647,n__34735__auto___40645,jobs,results,process,async))
);


break;
case "async":
var c__40084__auto___40658 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__40646,c__40084__auto___40658,G__40477_40647,n__34735__auto___40645,jobs,results,process,async){
return (function (){
var f__40085__auto__ = (function (){var switch__39972__auto__ = ((function (__40646,c__40084__auto___40658,G__40477_40647,n__34735__auto___40645,jobs,results,process,async){
return (function (state_40517){
var state_val_40518 = (state_40517[(1)]);
if((state_val_40518 === (1))){
var state_40517__$1 = state_40517;
var statearr_40519_40659 = state_40517__$1;
(statearr_40519_40659[(2)] = null);

(statearr_40519_40659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40518 === (2))){
var state_40517__$1 = state_40517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40517__$1,(4),jobs);
} else {
if((state_val_40518 === (3))){
var inst_40515 = (state_40517[(2)]);
var state_40517__$1 = state_40517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40517__$1,inst_40515);
} else {
if((state_val_40518 === (4))){
var inst_40507 = (state_40517[(2)]);
var inst_40508 = async.call(null,inst_40507);
var state_40517__$1 = state_40517;
if(cljs.core.truth_(inst_40508)){
var statearr_40520_40660 = state_40517__$1;
(statearr_40520_40660[(1)] = (5));

} else {
var statearr_40521_40661 = state_40517__$1;
(statearr_40521_40661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40518 === (5))){
var state_40517__$1 = state_40517;
var statearr_40522_40662 = state_40517__$1;
(statearr_40522_40662[(2)] = null);

(statearr_40522_40662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40518 === (6))){
var state_40517__$1 = state_40517;
var statearr_40523_40663 = state_40517__$1;
(statearr_40523_40663[(2)] = null);

(statearr_40523_40663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40518 === (7))){
var inst_40513 = (state_40517[(2)]);
var state_40517__$1 = state_40517;
var statearr_40524_40664 = state_40517__$1;
(statearr_40524_40664[(2)] = inst_40513);

(statearr_40524_40664[(1)] = (3));


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
});})(__40646,c__40084__auto___40658,G__40477_40647,n__34735__auto___40645,jobs,results,process,async))
;
return ((function (__40646,switch__39972__auto__,c__40084__auto___40658,G__40477_40647,n__34735__auto___40645,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39973__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39973__auto____0 = (function (){
var statearr_40528 = [null,null,null,null,null,null,null];
(statearr_40528[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39973__auto__);

(statearr_40528[(1)] = (1));

return statearr_40528;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39973__auto____1 = (function (state_40517){
while(true){
var ret_value__39974__auto__ = (function (){try{while(true){
var result__39975__auto__ = switch__39972__auto__.call(null,state_40517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39975__auto__;
}
break;
}
}catch (e40529){if((e40529 instanceof Object)){
var ex__39976__auto__ = e40529;
var statearr_40530_40665 = state_40517;
(statearr_40530_40665[(5)] = ex__39976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40666 = state_40517;
state_40517 = G__40666;
continue;
} else {
return ret_value__39974__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39973__auto__ = function(state_40517){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39973__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39973__auto____1.call(this,state_40517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39973__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39973__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39973__auto__;
})()
;})(__40646,switch__39972__auto__,c__40084__auto___40658,G__40477_40647,n__34735__auto___40645,jobs,results,process,async))
})();
var state__40086__auto__ = (function (){var statearr_40531 = f__40085__auto__.call(null);
(statearr_40531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40084__auto___40658);

return statearr_40531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40086__auto__);
});})(__40646,c__40084__auto___40658,G__40477_40647,n__34735__auto___40645,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__40667 = (__40646 + (1));
__40646 = G__40667;
continue;
} else {
}
break;
}

var c__40084__auto___40668 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40084__auto___40668,jobs,results,process,async){
return (function (){
var f__40085__auto__ = (function (){var switch__39972__auto__ = ((function (c__40084__auto___40668,jobs,results,process,async){
return (function (state_40553){
var state_val_40554 = (state_40553[(1)]);
if((state_val_40554 === (1))){
var state_40553__$1 = state_40553;
var statearr_40555_40669 = state_40553__$1;
(statearr_40555_40669[(2)] = null);

(statearr_40555_40669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40554 === (2))){
var state_40553__$1 = state_40553;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40553__$1,(4),from);
} else {
if((state_val_40554 === (3))){
var inst_40551 = (state_40553[(2)]);
var state_40553__$1 = state_40553;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40553__$1,inst_40551);
} else {
if((state_val_40554 === (4))){
var inst_40534 = (state_40553[(7)]);
var inst_40534__$1 = (state_40553[(2)]);
var inst_40535 = (inst_40534__$1 == null);
var state_40553__$1 = (function (){var statearr_40556 = state_40553;
(statearr_40556[(7)] = inst_40534__$1);

return statearr_40556;
})();
if(cljs.core.truth_(inst_40535)){
var statearr_40557_40670 = state_40553__$1;
(statearr_40557_40670[(1)] = (5));

} else {
var statearr_40558_40671 = state_40553__$1;
(statearr_40558_40671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40554 === (5))){
var inst_40537 = cljs.core.async.close_BANG_.call(null,jobs);
var state_40553__$1 = state_40553;
var statearr_40559_40672 = state_40553__$1;
(statearr_40559_40672[(2)] = inst_40537);

(statearr_40559_40672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40554 === (6))){
var inst_40539 = (state_40553[(8)]);
var inst_40534 = (state_40553[(7)]);
var inst_40539__$1 = cljs.core.async.chan.call(null,(1));
var inst_40540 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40541 = [inst_40534,inst_40539__$1];
var inst_40542 = (new cljs.core.PersistentVector(null,2,(5),inst_40540,inst_40541,null));
var state_40553__$1 = (function (){var statearr_40560 = state_40553;
(statearr_40560[(8)] = inst_40539__$1);

return statearr_40560;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40553__$1,(8),jobs,inst_40542);
} else {
if((state_val_40554 === (7))){
var inst_40549 = (state_40553[(2)]);
var state_40553__$1 = state_40553;
var statearr_40561_40673 = state_40553__$1;
(statearr_40561_40673[(2)] = inst_40549);

(statearr_40561_40673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40554 === (8))){
var inst_40539 = (state_40553[(8)]);
var inst_40544 = (state_40553[(2)]);
var state_40553__$1 = (function (){var statearr_40562 = state_40553;
(statearr_40562[(9)] = inst_40544);

return statearr_40562;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40553__$1,(9),results,inst_40539);
} else {
if((state_val_40554 === (9))){
var inst_40546 = (state_40553[(2)]);
var state_40553__$1 = (function (){var statearr_40563 = state_40553;
(statearr_40563[(10)] = inst_40546);

return statearr_40563;
})();
var statearr_40564_40674 = state_40553__$1;
(statearr_40564_40674[(2)] = null);

(statearr_40564_40674[(1)] = (2));


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
});})(c__40084__auto___40668,jobs,results,process,async))
;
return ((function (switch__39972__auto__,c__40084__auto___40668,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39973__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39973__auto____0 = (function (){
var statearr_40568 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40568[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39973__auto__);

(statearr_40568[(1)] = (1));

return statearr_40568;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39973__auto____1 = (function (state_40553){
while(true){
var ret_value__39974__auto__ = (function (){try{while(true){
var result__39975__auto__ = switch__39972__auto__.call(null,state_40553);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39975__auto__;
}
break;
}
}catch (e40569){if((e40569 instanceof Object)){
var ex__39976__auto__ = e40569;
var statearr_40570_40675 = state_40553;
(statearr_40570_40675[(5)] = ex__39976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40569;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40676 = state_40553;
state_40553 = G__40676;
continue;
} else {
return ret_value__39974__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39973__auto__ = function(state_40553){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39973__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39973__auto____1.call(this,state_40553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39973__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39973__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39973__auto__;
})()
;})(switch__39972__auto__,c__40084__auto___40668,jobs,results,process,async))
})();
var state__40086__auto__ = (function (){var statearr_40571 = f__40085__auto__.call(null);
(statearr_40571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40084__auto___40668);

return statearr_40571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40086__auto__);
});})(c__40084__auto___40668,jobs,results,process,async))
);


var c__40084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40084__auto__,jobs,results,process,async){
return (function (){
var f__40085__auto__ = (function (){var switch__39972__auto__ = ((function (c__40084__auto__,jobs,results,process,async){
return (function (state_40609){
var state_val_40610 = (state_40609[(1)]);
if((state_val_40610 === (7))){
var inst_40605 = (state_40609[(2)]);
var state_40609__$1 = state_40609;
var statearr_40611_40677 = state_40609__$1;
(statearr_40611_40677[(2)] = inst_40605);

(statearr_40611_40677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40610 === (20))){
var state_40609__$1 = state_40609;
var statearr_40612_40678 = state_40609__$1;
(statearr_40612_40678[(2)] = null);

(statearr_40612_40678[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40610 === (1))){
var state_40609__$1 = state_40609;
var statearr_40613_40679 = state_40609__$1;
(statearr_40613_40679[(2)] = null);

(statearr_40613_40679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40610 === (4))){
var inst_40574 = (state_40609[(7)]);
var inst_40574__$1 = (state_40609[(2)]);
var inst_40575 = (inst_40574__$1 == null);
var state_40609__$1 = (function (){var statearr_40614 = state_40609;
(statearr_40614[(7)] = inst_40574__$1);

return statearr_40614;
})();
if(cljs.core.truth_(inst_40575)){
var statearr_40615_40680 = state_40609__$1;
(statearr_40615_40680[(1)] = (5));

} else {
var statearr_40616_40681 = state_40609__$1;
(statearr_40616_40681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40610 === (15))){
var inst_40587 = (state_40609[(8)]);
var state_40609__$1 = state_40609;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40609__$1,(18),to,inst_40587);
} else {
if((state_val_40610 === (21))){
var inst_40600 = (state_40609[(2)]);
var state_40609__$1 = state_40609;
var statearr_40617_40682 = state_40609__$1;
(statearr_40617_40682[(2)] = inst_40600);

(statearr_40617_40682[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40610 === (13))){
var inst_40602 = (state_40609[(2)]);
var state_40609__$1 = (function (){var statearr_40618 = state_40609;
(statearr_40618[(9)] = inst_40602);

return statearr_40618;
})();
var statearr_40619_40683 = state_40609__$1;
(statearr_40619_40683[(2)] = null);

(statearr_40619_40683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40610 === (6))){
var inst_40574 = (state_40609[(7)]);
var state_40609__$1 = state_40609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40609__$1,(11),inst_40574);
} else {
if((state_val_40610 === (17))){
var inst_40595 = (state_40609[(2)]);
var state_40609__$1 = state_40609;
if(cljs.core.truth_(inst_40595)){
var statearr_40620_40684 = state_40609__$1;
(statearr_40620_40684[(1)] = (19));

} else {
var statearr_40621_40685 = state_40609__$1;
(statearr_40621_40685[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40610 === (3))){
var inst_40607 = (state_40609[(2)]);
var state_40609__$1 = state_40609;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40609__$1,inst_40607);
} else {
if((state_val_40610 === (12))){
var inst_40584 = (state_40609[(10)]);
var state_40609__$1 = state_40609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40609__$1,(14),inst_40584);
} else {
if((state_val_40610 === (2))){
var state_40609__$1 = state_40609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40609__$1,(4),results);
} else {
if((state_val_40610 === (19))){
var state_40609__$1 = state_40609;
var statearr_40622_40686 = state_40609__$1;
(statearr_40622_40686[(2)] = null);

(statearr_40622_40686[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40610 === (11))){
var inst_40584 = (state_40609[(2)]);
var state_40609__$1 = (function (){var statearr_40623 = state_40609;
(statearr_40623[(10)] = inst_40584);

return statearr_40623;
})();
var statearr_40624_40687 = state_40609__$1;
(statearr_40624_40687[(2)] = null);

(statearr_40624_40687[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40610 === (9))){
var state_40609__$1 = state_40609;
var statearr_40625_40688 = state_40609__$1;
(statearr_40625_40688[(2)] = null);

(statearr_40625_40688[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40610 === (5))){
var state_40609__$1 = state_40609;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40626_40689 = state_40609__$1;
(statearr_40626_40689[(1)] = (8));

} else {
var statearr_40627_40690 = state_40609__$1;
(statearr_40627_40690[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40610 === (14))){
var inst_40587 = (state_40609[(8)]);
var inst_40589 = (state_40609[(11)]);
var inst_40587__$1 = (state_40609[(2)]);
var inst_40588 = (inst_40587__$1 == null);
var inst_40589__$1 = cljs.core.not.call(null,inst_40588);
var state_40609__$1 = (function (){var statearr_40628 = state_40609;
(statearr_40628[(8)] = inst_40587__$1);

(statearr_40628[(11)] = inst_40589__$1);

return statearr_40628;
})();
if(inst_40589__$1){
var statearr_40629_40691 = state_40609__$1;
(statearr_40629_40691[(1)] = (15));

} else {
var statearr_40630_40692 = state_40609__$1;
(statearr_40630_40692[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40610 === (16))){
var inst_40589 = (state_40609[(11)]);
var state_40609__$1 = state_40609;
var statearr_40631_40693 = state_40609__$1;
(statearr_40631_40693[(2)] = inst_40589);

(statearr_40631_40693[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40610 === (10))){
var inst_40581 = (state_40609[(2)]);
var state_40609__$1 = state_40609;
var statearr_40632_40694 = state_40609__$1;
(statearr_40632_40694[(2)] = inst_40581);

(statearr_40632_40694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40610 === (18))){
var inst_40592 = (state_40609[(2)]);
var state_40609__$1 = state_40609;
var statearr_40633_40695 = state_40609__$1;
(statearr_40633_40695[(2)] = inst_40592);

(statearr_40633_40695[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40610 === (8))){
var inst_40578 = cljs.core.async.close_BANG_.call(null,to);
var state_40609__$1 = state_40609;
var statearr_40634_40696 = state_40609__$1;
(statearr_40634_40696[(2)] = inst_40578);

(statearr_40634_40696[(1)] = (10));


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
});})(c__40084__auto__,jobs,results,process,async))
;
return ((function (switch__39972__auto__,c__40084__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39973__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39973__auto____0 = (function (){
var statearr_40638 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40638[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39973__auto__);

(statearr_40638[(1)] = (1));

return statearr_40638;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39973__auto____1 = (function (state_40609){
while(true){
var ret_value__39974__auto__ = (function (){try{while(true){
var result__39975__auto__ = switch__39972__auto__.call(null,state_40609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39975__auto__;
}
break;
}
}catch (e40639){if((e40639 instanceof Object)){
var ex__39976__auto__ = e40639;
var statearr_40640_40697 = state_40609;
(statearr_40640_40697[(5)] = ex__39976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40698 = state_40609;
state_40609 = G__40698;
continue;
} else {
return ret_value__39974__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39973__auto__ = function(state_40609){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39973__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39973__auto____1.call(this,state_40609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39973__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39973__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39973__auto__;
})()
;})(switch__39972__auto__,c__40084__auto__,jobs,results,process,async))
})();
var state__40086__auto__ = (function (){var statearr_40641 = f__40085__auto__.call(null);
(statearr_40641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40084__auto__);

return statearr_40641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40086__auto__);
});})(c__40084__auto__,jobs,results,process,async))
);

return c__40084__auto__;
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
var args40699 = [];
var len__34925__auto___40702 = arguments.length;
var i__34926__auto___40703 = (0);
while(true){
if((i__34926__auto___40703 < len__34925__auto___40702)){
args40699.push((arguments[i__34926__auto___40703]));

var G__40704 = (i__34926__auto___40703 + (1));
i__34926__auto___40703 = G__40704;
continue;
} else {
}
break;
}

var G__40701 = args40699.length;
switch (G__40701) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40699.length)].join('')));

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
var args40706 = [];
var len__34925__auto___40709 = arguments.length;
var i__34926__auto___40710 = (0);
while(true){
if((i__34926__auto___40710 < len__34925__auto___40709)){
args40706.push((arguments[i__34926__auto___40710]));

var G__40711 = (i__34926__auto___40710 + (1));
i__34926__auto___40710 = G__40711;
continue;
} else {
}
break;
}

var G__40708 = args40706.length;
switch (G__40708) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40706.length)].join('')));

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
var args40713 = [];
var len__34925__auto___40766 = arguments.length;
var i__34926__auto___40767 = (0);
while(true){
if((i__34926__auto___40767 < len__34925__auto___40766)){
args40713.push((arguments[i__34926__auto___40767]));

var G__40768 = (i__34926__auto___40767 + (1));
i__34926__auto___40767 = G__40768;
continue;
} else {
}
break;
}

var G__40715 = args40713.length;
switch (G__40715) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40713.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__40084__auto___40770 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40084__auto___40770,tc,fc){
return (function (){
var f__40085__auto__ = (function (){var switch__39972__auto__ = ((function (c__40084__auto___40770,tc,fc){
return (function (state_40741){
var state_val_40742 = (state_40741[(1)]);
if((state_val_40742 === (7))){
var inst_40737 = (state_40741[(2)]);
var state_40741__$1 = state_40741;
var statearr_40743_40771 = state_40741__$1;
(statearr_40743_40771[(2)] = inst_40737);

(statearr_40743_40771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40742 === (1))){
var state_40741__$1 = state_40741;
var statearr_40744_40772 = state_40741__$1;
(statearr_40744_40772[(2)] = null);

(statearr_40744_40772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40742 === (4))){
var inst_40718 = (state_40741[(7)]);
var inst_40718__$1 = (state_40741[(2)]);
var inst_40719 = (inst_40718__$1 == null);
var state_40741__$1 = (function (){var statearr_40745 = state_40741;
(statearr_40745[(7)] = inst_40718__$1);

return statearr_40745;
})();
if(cljs.core.truth_(inst_40719)){
var statearr_40746_40773 = state_40741__$1;
(statearr_40746_40773[(1)] = (5));

} else {
var statearr_40747_40774 = state_40741__$1;
(statearr_40747_40774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40742 === (13))){
var state_40741__$1 = state_40741;
var statearr_40748_40775 = state_40741__$1;
(statearr_40748_40775[(2)] = null);

(statearr_40748_40775[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40742 === (6))){
var inst_40718 = (state_40741[(7)]);
var inst_40724 = p.call(null,inst_40718);
var state_40741__$1 = state_40741;
if(cljs.core.truth_(inst_40724)){
var statearr_40749_40776 = state_40741__$1;
(statearr_40749_40776[(1)] = (9));

} else {
var statearr_40750_40777 = state_40741__$1;
(statearr_40750_40777[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40742 === (3))){
var inst_40739 = (state_40741[(2)]);
var state_40741__$1 = state_40741;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40741__$1,inst_40739);
} else {
if((state_val_40742 === (12))){
var state_40741__$1 = state_40741;
var statearr_40751_40778 = state_40741__$1;
(statearr_40751_40778[(2)] = null);

(statearr_40751_40778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40742 === (2))){
var state_40741__$1 = state_40741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40741__$1,(4),ch);
} else {
if((state_val_40742 === (11))){
var inst_40718 = (state_40741[(7)]);
var inst_40728 = (state_40741[(2)]);
var state_40741__$1 = state_40741;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40741__$1,(8),inst_40728,inst_40718);
} else {
if((state_val_40742 === (9))){
var state_40741__$1 = state_40741;
var statearr_40752_40779 = state_40741__$1;
(statearr_40752_40779[(2)] = tc);

(statearr_40752_40779[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40742 === (5))){
var inst_40721 = cljs.core.async.close_BANG_.call(null,tc);
var inst_40722 = cljs.core.async.close_BANG_.call(null,fc);
var state_40741__$1 = (function (){var statearr_40753 = state_40741;
(statearr_40753[(8)] = inst_40721);

return statearr_40753;
})();
var statearr_40754_40780 = state_40741__$1;
(statearr_40754_40780[(2)] = inst_40722);

(statearr_40754_40780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40742 === (14))){
var inst_40735 = (state_40741[(2)]);
var state_40741__$1 = state_40741;
var statearr_40755_40781 = state_40741__$1;
(statearr_40755_40781[(2)] = inst_40735);

(statearr_40755_40781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40742 === (10))){
var state_40741__$1 = state_40741;
var statearr_40756_40782 = state_40741__$1;
(statearr_40756_40782[(2)] = fc);

(statearr_40756_40782[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40742 === (8))){
var inst_40730 = (state_40741[(2)]);
var state_40741__$1 = state_40741;
if(cljs.core.truth_(inst_40730)){
var statearr_40757_40783 = state_40741__$1;
(statearr_40757_40783[(1)] = (12));

} else {
var statearr_40758_40784 = state_40741__$1;
(statearr_40758_40784[(1)] = (13));

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
});})(c__40084__auto___40770,tc,fc))
;
return ((function (switch__39972__auto__,c__40084__auto___40770,tc,fc){
return (function() {
var cljs$core$async$state_machine__39973__auto__ = null;
var cljs$core$async$state_machine__39973__auto____0 = (function (){
var statearr_40762 = [null,null,null,null,null,null,null,null,null];
(statearr_40762[(0)] = cljs$core$async$state_machine__39973__auto__);

(statearr_40762[(1)] = (1));

return statearr_40762;
});
var cljs$core$async$state_machine__39973__auto____1 = (function (state_40741){
while(true){
var ret_value__39974__auto__ = (function (){try{while(true){
var result__39975__auto__ = switch__39972__auto__.call(null,state_40741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39975__auto__;
}
break;
}
}catch (e40763){if((e40763 instanceof Object)){
var ex__39976__auto__ = e40763;
var statearr_40764_40785 = state_40741;
(statearr_40764_40785[(5)] = ex__39976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40786 = state_40741;
state_40741 = G__40786;
continue;
} else {
return ret_value__39974__auto__;
}
break;
}
});
cljs$core$async$state_machine__39973__auto__ = function(state_40741){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39973__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39973__auto____1.call(this,state_40741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39973__auto____0;
cljs$core$async$state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39973__auto____1;
return cljs$core$async$state_machine__39973__auto__;
})()
;})(switch__39972__auto__,c__40084__auto___40770,tc,fc))
})();
var state__40086__auto__ = (function (){var statearr_40765 = f__40085__auto__.call(null);
(statearr_40765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40084__auto___40770);

return statearr_40765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40086__auto__);
});})(c__40084__auto___40770,tc,fc))
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
var c__40084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40084__auto__){
return (function (){
var f__40085__auto__ = (function (){var switch__39972__auto__ = ((function (c__40084__auto__){
return (function (state_40850){
var state_val_40851 = (state_40850[(1)]);
if((state_val_40851 === (7))){
var inst_40846 = (state_40850[(2)]);
var state_40850__$1 = state_40850;
var statearr_40852_40873 = state_40850__$1;
(statearr_40852_40873[(2)] = inst_40846);

(statearr_40852_40873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40851 === (1))){
var inst_40830 = init;
var state_40850__$1 = (function (){var statearr_40853 = state_40850;
(statearr_40853[(7)] = inst_40830);

return statearr_40853;
})();
var statearr_40854_40874 = state_40850__$1;
(statearr_40854_40874[(2)] = null);

(statearr_40854_40874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40851 === (4))){
var inst_40833 = (state_40850[(8)]);
var inst_40833__$1 = (state_40850[(2)]);
var inst_40834 = (inst_40833__$1 == null);
var state_40850__$1 = (function (){var statearr_40855 = state_40850;
(statearr_40855[(8)] = inst_40833__$1);

return statearr_40855;
})();
if(cljs.core.truth_(inst_40834)){
var statearr_40856_40875 = state_40850__$1;
(statearr_40856_40875[(1)] = (5));

} else {
var statearr_40857_40876 = state_40850__$1;
(statearr_40857_40876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40851 === (6))){
var inst_40833 = (state_40850[(8)]);
var inst_40837 = (state_40850[(9)]);
var inst_40830 = (state_40850[(7)]);
var inst_40837__$1 = f.call(null,inst_40830,inst_40833);
var inst_40838 = cljs.core.reduced_QMARK_.call(null,inst_40837__$1);
var state_40850__$1 = (function (){var statearr_40858 = state_40850;
(statearr_40858[(9)] = inst_40837__$1);

return statearr_40858;
})();
if(inst_40838){
var statearr_40859_40877 = state_40850__$1;
(statearr_40859_40877[(1)] = (8));

} else {
var statearr_40860_40878 = state_40850__$1;
(statearr_40860_40878[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40851 === (3))){
var inst_40848 = (state_40850[(2)]);
var state_40850__$1 = state_40850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40850__$1,inst_40848);
} else {
if((state_val_40851 === (2))){
var state_40850__$1 = state_40850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40850__$1,(4),ch);
} else {
if((state_val_40851 === (9))){
var inst_40837 = (state_40850[(9)]);
var inst_40830 = inst_40837;
var state_40850__$1 = (function (){var statearr_40861 = state_40850;
(statearr_40861[(7)] = inst_40830);

return statearr_40861;
})();
var statearr_40862_40879 = state_40850__$1;
(statearr_40862_40879[(2)] = null);

(statearr_40862_40879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40851 === (5))){
var inst_40830 = (state_40850[(7)]);
var state_40850__$1 = state_40850;
var statearr_40863_40880 = state_40850__$1;
(statearr_40863_40880[(2)] = inst_40830);

(statearr_40863_40880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40851 === (10))){
var inst_40844 = (state_40850[(2)]);
var state_40850__$1 = state_40850;
var statearr_40864_40881 = state_40850__$1;
(statearr_40864_40881[(2)] = inst_40844);

(statearr_40864_40881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40851 === (8))){
var inst_40837 = (state_40850[(9)]);
var inst_40840 = cljs.core.deref.call(null,inst_40837);
var state_40850__$1 = state_40850;
var statearr_40865_40882 = state_40850__$1;
(statearr_40865_40882[(2)] = inst_40840);

(statearr_40865_40882[(1)] = (10));


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
});})(c__40084__auto__))
;
return ((function (switch__39972__auto__,c__40084__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__39973__auto__ = null;
var cljs$core$async$reduce_$_state_machine__39973__auto____0 = (function (){
var statearr_40869 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40869[(0)] = cljs$core$async$reduce_$_state_machine__39973__auto__);

(statearr_40869[(1)] = (1));

return statearr_40869;
});
var cljs$core$async$reduce_$_state_machine__39973__auto____1 = (function (state_40850){
while(true){
var ret_value__39974__auto__ = (function (){try{while(true){
var result__39975__auto__ = switch__39972__auto__.call(null,state_40850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39975__auto__;
}
break;
}
}catch (e40870){if((e40870 instanceof Object)){
var ex__39976__auto__ = e40870;
var statearr_40871_40883 = state_40850;
(statearr_40871_40883[(5)] = ex__39976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40884 = state_40850;
state_40850 = G__40884;
continue;
} else {
return ret_value__39974__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__39973__auto__ = function(state_40850){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__39973__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__39973__auto____1.call(this,state_40850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__39973__auto____0;
cljs$core$async$reduce_$_state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__39973__auto____1;
return cljs$core$async$reduce_$_state_machine__39973__auto__;
})()
;})(switch__39972__auto__,c__40084__auto__))
})();
var state__40086__auto__ = (function (){var statearr_40872 = f__40085__auto__.call(null);
(statearr_40872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40084__auto__);

return statearr_40872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40086__auto__);
});})(c__40084__auto__))
);

return c__40084__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__40084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40084__auto__,f__$1){
return (function (){
var f__40085__auto__ = (function (){var switch__39972__auto__ = ((function (c__40084__auto__,f__$1){
return (function (state_40904){
var state_val_40905 = (state_40904[(1)]);
if((state_val_40905 === (1))){
var inst_40899 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_40904__$1 = state_40904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40904__$1,(2),inst_40899);
} else {
if((state_val_40905 === (2))){
var inst_40901 = (state_40904[(2)]);
var inst_40902 = f__$1.call(null,inst_40901);
var state_40904__$1 = state_40904;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40904__$1,inst_40902);
} else {
return null;
}
}
});})(c__40084__auto__,f__$1))
;
return ((function (switch__39972__auto__,c__40084__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__39973__auto__ = null;
var cljs$core$async$transduce_$_state_machine__39973__auto____0 = (function (){
var statearr_40909 = [null,null,null,null,null,null,null];
(statearr_40909[(0)] = cljs$core$async$transduce_$_state_machine__39973__auto__);

(statearr_40909[(1)] = (1));

return statearr_40909;
});
var cljs$core$async$transduce_$_state_machine__39973__auto____1 = (function (state_40904){
while(true){
var ret_value__39974__auto__ = (function (){try{while(true){
var result__39975__auto__ = switch__39972__auto__.call(null,state_40904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39975__auto__;
}
break;
}
}catch (e40910){if((e40910 instanceof Object)){
var ex__39976__auto__ = e40910;
var statearr_40911_40913 = state_40904;
(statearr_40911_40913[(5)] = ex__39976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40914 = state_40904;
state_40904 = G__40914;
continue;
} else {
return ret_value__39974__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__39973__auto__ = function(state_40904){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__39973__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__39973__auto____1.call(this,state_40904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__39973__auto____0;
cljs$core$async$transduce_$_state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__39973__auto____1;
return cljs$core$async$transduce_$_state_machine__39973__auto__;
})()
;})(switch__39972__auto__,c__40084__auto__,f__$1))
})();
var state__40086__auto__ = (function (){var statearr_40912 = f__40085__auto__.call(null);
(statearr_40912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40084__auto__);

return statearr_40912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40086__auto__);
});})(c__40084__auto__,f__$1))
);

return c__40084__auto__;
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
var args40915 = [];
var len__34925__auto___40967 = arguments.length;
var i__34926__auto___40968 = (0);
while(true){
if((i__34926__auto___40968 < len__34925__auto___40967)){
args40915.push((arguments[i__34926__auto___40968]));

var G__40969 = (i__34926__auto___40968 + (1));
i__34926__auto___40968 = G__40969;
continue;
} else {
}
break;
}

var G__40917 = args40915.length;
switch (G__40917) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40915.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__40084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40084__auto__){
return (function (){
var f__40085__auto__ = (function (){var switch__39972__auto__ = ((function (c__40084__auto__){
return (function (state_40942){
var state_val_40943 = (state_40942[(1)]);
if((state_val_40943 === (7))){
var inst_40924 = (state_40942[(2)]);
var state_40942__$1 = state_40942;
var statearr_40944_40971 = state_40942__$1;
(statearr_40944_40971[(2)] = inst_40924);

(statearr_40944_40971[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40943 === (1))){
var inst_40918 = cljs.core.seq.call(null,coll);
var inst_40919 = inst_40918;
var state_40942__$1 = (function (){var statearr_40945 = state_40942;
(statearr_40945[(7)] = inst_40919);

return statearr_40945;
})();
var statearr_40946_40972 = state_40942__$1;
(statearr_40946_40972[(2)] = null);

(statearr_40946_40972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40943 === (4))){
var inst_40919 = (state_40942[(7)]);
var inst_40922 = cljs.core.first.call(null,inst_40919);
var state_40942__$1 = state_40942;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40942__$1,(7),ch,inst_40922);
} else {
if((state_val_40943 === (13))){
var inst_40936 = (state_40942[(2)]);
var state_40942__$1 = state_40942;
var statearr_40947_40973 = state_40942__$1;
(statearr_40947_40973[(2)] = inst_40936);

(statearr_40947_40973[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40943 === (6))){
var inst_40927 = (state_40942[(2)]);
var state_40942__$1 = state_40942;
if(cljs.core.truth_(inst_40927)){
var statearr_40948_40974 = state_40942__$1;
(statearr_40948_40974[(1)] = (8));

} else {
var statearr_40949_40975 = state_40942__$1;
(statearr_40949_40975[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40943 === (3))){
var inst_40940 = (state_40942[(2)]);
var state_40942__$1 = state_40942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40942__$1,inst_40940);
} else {
if((state_val_40943 === (12))){
var state_40942__$1 = state_40942;
var statearr_40950_40976 = state_40942__$1;
(statearr_40950_40976[(2)] = null);

(statearr_40950_40976[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40943 === (2))){
var inst_40919 = (state_40942[(7)]);
var state_40942__$1 = state_40942;
if(cljs.core.truth_(inst_40919)){
var statearr_40951_40977 = state_40942__$1;
(statearr_40951_40977[(1)] = (4));

} else {
var statearr_40952_40978 = state_40942__$1;
(statearr_40952_40978[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40943 === (11))){
var inst_40933 = cljs.core.async.close_BANG_.call(null,ch);
var state_40942__$1 = state_40942;
var statearr_40953_40979 = state_40942__$1;
(statearr_40953_40979[(2)] = inst_40933);

(statearr_40953_40979[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40943 === (9))){
var state_40942__$1 = state_40942;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40954_40980 = state_40942__$1;
(statearr_40954_40980[(1)] = (11));

} else {
var statearr_40955_40981 = state_40942__$1;
(statearr_40955_40981[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40943 === (5))){
var inst_40919 = (state_40942[(7)]);
var state_40942__$1 = state_40942;
var statearr_40956_40982 = state_40942__$1;
(statearr_40956_40982[(2)] = inst_40919);

(statearr_40956_40982[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40943 === (10))){
var inst_40938 = (state_40942[(2)]);
var state_40942__$1 = state_40942;
var statearr_40957_40983 = state_40942__$1;
(statearr_40957_40983[(2)] = inst_40938);

(statearr_40957_40983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40943 === (8))){
var inst_40919 = (state_40942[(7)]);
var inst_40929 = cljs.core.next.call(null,inst_40919);
var inst_40919__$1 = inst_40929;
var state_40942__$1 = (function (){var statearr_40958 = state_40942;
(statearr_40958[(7)] = inst_40919__$1);

return statearr_40958;
})();
var statearr_40959_40984 = state_40942__$1;
(statearr_40959_40984[(2)] = null);

(statearr_40959_40984[(1)] = (2));


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
});})(c__40084__auto__))
;
return ((function (switch__39972__auto__,c__40084__auto__){
return (function() {
var cljs$core$async$state_machine__39973__auto__ = null;
var cljs$core$async$state_machine__39973__auto____0 = (function (){
var statearr_40963 = [null,null,null,null,null,null,null,null];
(statearr_40963[(0)] = cljs$core$async$state_machine__39973__auto__);

(statearr_40963[(1)] = (1));

return statearr_40963;
});
var cljs$core$async$state_machine__39973__auto____1 = (function (state_40942){
while(true){
var ret_value__39974__auto__ = (function (){try{while(true){
var result__39975__auto__ = switch__39972__auto__.call(null,state_40942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39975__auto__;
}
break;
}
}catch (e40964){if((e40964 instanceof Object)){
var ex__39976__auto__ = e40964;
var statearr_40965_40985 = state_40942;
(statearr_40965_40985[(5)] = ex__39976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40986 = state_40942;
state_40942 = G__40986;
continue;
} else {
return ret_value__39974__auto__;
}
break;
}
});
cljs$core$async$state_machine__39973__auto__ = function(state_40942){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39973__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39973__auto____1.call(this,state_40942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39973__auto____0;
cljs$core$async$state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39973__auto____1;
return cljs$core$async$state_machine__39973__auto__;
})()
;})(switch__39972__auto__,c__40084__auto__))
})();
var state__40086__auto__ = (function (){var statearr_40966 = f__40085__auto__.call(null);
(statearr_40966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40084__auto__);

return statearr_40966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40086__auto__);
});})(c__40084__auto__))
);

return c__40084__auto__;
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
var x__34480__auto__ = (((_ == null))?null:_);
var m__34481__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__34480__auto__)]);
if(!((m__34481__auto__ == null))){
return m__34481__auto__.call(null,_);
} else {
var m__34481__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__34481__auto____$1 == null))){
return m__34481__auto____$1.call(null,_);
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
var x__34480__auto__ = (((m == null))?null:m);
var m__34481__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__34480__auto__)]);
if(!((m__34481__auto__ == null))){
return m__34481__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__34481__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__34481__auto____$1 == null))){
return m__34481__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__34480__auto__ = (((m == null))?null:m);
var m__34481__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__34480__auto__)]);
if(!((m__34481__auto__ == null))){
return m__34481__auto__.call(null,m,ch);
} else {
var m__34481__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__34481__auto____$1 == null))){
return m__34481__auto____$1.call(null,m,ch);
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
var x__34480__auto__ = (((m == null))?null:m);
var m__34481__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__34480__auto__)]);
if(!((m__34481__auto__ == null))){
return m__34481__auto__.call(null,m);
} else {
var m__34481__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__34481__auto____$1 == null))){
return m__34481__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async41212 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41212 = (function (ch,cs,meta41213){
this.ch = ch;
this.cs = cs;
this.meta41213 = meta41213;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_41214,meta41213__$1){
var self__ = this;
var _41214__$1 = this;
return (new cljs.core.async.t_cljs$core$async41212(self__.ch,self__.cs,meta41213__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async41212.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_41214){
var self__ = this;
var _41214__$1 = this;
return self__.meta41213;
});})(cs))
;

cljs.core.async.t_cljs$core$async41212.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41212.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async41212.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41212.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41212.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41212.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41212.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta41213","meta41213",-174301059,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async41212.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41212.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41212";

cljs.core.async.t_cljs$core$async41212.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__34423__auto__,writer__34424__auto__,opt__34425__auto__){
return cljs.core._write.call(null,writer__34424__auto__,"cljs.core.async/t_cljs$core$async41212");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async41212 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async41212(ch__$1,cs__$1,meta41213){
return (new cljs.core.async.t_cljs$core$async41212(ch__$1,cs__$1,meta41213));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async41212(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__40084__auto___41437 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40084__auto___41437,cs,m,dchan,dctr,done){
return (function (){
var f__40085__auto__ = (function (){var switch__39972__auto__ = ((function (c__40084__auto___41437,cs,m,dchan,dctr,done){
return (function (state_41349){
var state_val_41350 = (state_41349[(1)]);
if((state_val_41350 === (7))){
var inst_41345 = (state_41349[(2)]);
var state_41349__$1 = state_41349;
var statearr_41351_41438 = state_41349__$1;
(statearr_41351_41438[(2)] = inst_41345);

(statearr_41351_41438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41350 === (20))){
var inst_41248 = (state_41349[(7)]);
var inst_41260 = cljs.core.first.call(null,inst_41248);
var inst_41261 = cljs.core.nth.call(null,inst_41260,(0),null);
var inst_41262 = cljs.core.nth.call(null,inst_41260,(1),null);
var state_41349__$1 = (function (){var statearr_41352 = state_41349;
(statearr_41352[(8)] = inst_41261);

return statearr_41352;
})();
if(cljs.core.truth_(inst_41262)){
var statearr_41353_41439 = state_41349__$1;
(statearr_41353_41439[(1)] = (22));

} else {
var statearr_41354_41440 = state_41349__$1;
(statearr_41354_41440[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41350 === (27))){
var inst_41297 = (state_41349[(9)]);
var inst_41290 = (state_41349[(10)]);
var inst_41217 = (state_41349[(11)]);
var inst_41292 = (state_41349[(12)]);
var inst_41297__$1 = cljs.core._nth.call(null,inst_41290,inst_41292);
var inst_41298 = cljs.core.async.put_BANG_.call(null,inst_41297__$1,inst_41217,done);
var state_41349__$1 = (function (){var statearr_41355 = state_41349;
(statearr_41355[(9)] = inst_41297__$1);

return statearr_41355;
})();
if(cljs.core.truth_(inst_41298)){
var statearr_41356_41441 = state_41349__$1;
(statearr_41356_41441[(1)] = (30));

} else {
var statearr_41357_41442 = state_41349__$1;
(statearr_41357_41442[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41350 === (1))){
var state_41349__$1 = state_41349;
var statearr_41358_41443 = state_41349__$1;
(statearr_41358_41443[(2)] = null);

(statearr_41358_41443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41350 === (24))){
var inst_41248 = (state_41349[(7)]);
var inst_41267 = (state_41349[(2)]);
var inst_41268 = cljs.core.next.call(null,inst_41248);
var inst_41226 = inst_41268;
var inst_41227 = null;
var inst_41228 = (0);
var inst_41229 = (0);
var state_41349__$1 = (function (){var statearr_41359 = state_41349;
(statearr_41359[(13)] = inst_41228);

(statearr_41359[(14)] = inst_41227);

(statearr_41359[(15)] = inst_41229);

(statearr_41359[(16)] = inst_41267);

(statearr_41359[(17)] = inst_41226);

return statearr_41359;
})();
var statearr_41360_41444 = state_41349__$1;
(statearr_41360_41444[(2)] = null);

(statearr_41360_41444[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41350 === (39))){
var state_41349__$1 = state_41349;
var statearr_41364_41445 = state_41349__$1;
(statearr_41364_41445[(2)] = null);

(statearr_41364_41445[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41350 === (4))){
var inst_41217 = (state_41349[(11)]);
var inst_41217__$1 = (state_41349[(2)]);
var inst_41218 = (inst_41217__$1 == null);
var state_41349__$1 = (function (){var statearr_41365 = state_41349;
(statearr_41365[(11)] = inst_41217__$1);

return statearr_41365;
})();
if(cljs.core.truth_(inst_41218)){
var statearr_41366_41446 = state_41349__$1;
(statearr_41366_41446[(1)] = (5));

} else {
var statearr_41367_41447 = state_41349__$1;
(statearr_41367_41447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41350 === (15))){
var inst_41228 = (state_41349[(13)]);
var inst_41227 = (state_41349[(14)]);
var inst_41229 = (state_41349[(15)]);
var inst_41226 = (state_41349[(17)]);
var inst_41244 = (state_41349[(2)]);
var inst_41245 = (inst_41229 + (1));
var tmp41361 = inst_41228;
var tmp41362 = inst_41227;
var tmp41363 = inst_41226;
var inst_41226__$1 = tmp41363;
var inst_41227__$1 = tmp41362;
var inst_41228__$1 = tmp41361;
var inst_41229__$1 = inst_41245;
var state_41349__$1 = (function (){var statearr_41368 = state_41349;
(statearr_41368[(13)] = inst_41228__$1);

(statearr_41368[(14)] = inst_41227__$1);

(statearr_41368[(15)] = inst_41229__$1);

(statearr_41368[(18)] = inst_41244);

(statearr_41368[(17)] = inst_41226__$1);

return statearr_41368;
})();
var statearr_41369_41448 = state_41349__$1;
(statearr_41369_41448[(2)] = null);

(statearr_41369_41448[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41350 === (21))){
var inst_41271 = (state_41349[(2)]);
var state_41349__$1 = state_41349;
var statearr_41373_41449 = state_41349__$1;
(statearr_41373_41449[(2)] = inst_41271);

(statearr_41373_41449[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41350 === (31))){
var inst_41297 = (state_41349[(9)]);
var inst_41301 = done.call(null,null);
var inst_41302 = cljs.core.async.untap_STAR_.call(null,m,inst_41297);
var state_41349__$1 = (function (){var statearr_41374 = state_41349;
(statearr_41374[(19)] = inst_41301);

return statearr_41374;
})();
var statearr_41375_41450 = state_41349__$1;
(statearr_41375_41450[(2)] = inst_41302);

(statearr_41375_41450[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41350 === (32))){
var inst_41290 = (state_41349[(10)]);
var inst_41291 = (state_41349[(20)]);
var inst_41289 = (state_41349[(21)]);
var inst_41292 = (state_41349[(12)]);
var inst_41304 = (state_41349[(2)]);
var inst_41305 = (inst_41292 + (1));
var tmp41370 = inst_41290;
var tmp41371 = inst_41291;
var tmp41372 = inst_41289;
var inst_41289__$1 = tmp41372;
var inst_41290__$1 = tmp41370;
var inst_41291__$1 = tmp41371;
var inst_41292__$1 = inst_41305;
var state_41349__$1 = (function (){var statearr_41376 = state_41349;
(statearr_41376[(10)] = inst_41290__$1);

(statearr_41376[(22)] = inst_41304);

(statearr_41376[(20)] = inst_41291__$1);

(statearr_41376[(21)] = inst_41289__$1);

(statearr_41376[(12)] = inst_41292__$1);

return statearr_41376;
})();
var statearr_41377_41451 = state_41349__$1;
(statearr_41377_41451[(2)] = null);

(statearr_41377_41451[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41350 === (40))){
var inst_41317 = (state_41349[(23)]);
var inst_41321 = done.call(null,null);
var inst_41322 = cljs.core.async.untap_STAR_.call(null,m,inst_41317);
var state_41349__$1 = (function (){var statearr_41378 = state_41349;
(statearr_41378[(24)] = inst_41321);

return statearr_41378;
})();
var statearr_41379_41452 = state_41349__$1;
(statearr_41379_41452[(2)] = inst_41322);

(statearr_41379_41452[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41350 === (33))){
var inst_41308 = (state_41349[(25)]);
var inst_41310 = cljs.core.chunked_seq_QMARK_.call(null,inst_41308);
var state_41349__$1 = state_41349;
if(inst_41310){
var statearr_41380_41453 = state_41349__$1;
(statearr_41380_41453[(1)] = (36));

} else {
var statearr_41381_41454 = state_41349__$1;
(statearr_41381_41454[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41350 === (13))){
var inst_41238 = (state_41349[(26)]);
var inst_41241 = cljs.core.async.close_BANG_.call(null,inst_41238);
var state_41349__$1 = state_41349;
var statearr_41382_41455 = state_41349__$1;
(statearr_41382_41455[(2)] = inst_41241);

(statearr_41382_41455[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41350 === (22))){
var inst_41261 = (state_41349[(8)]);
var inst_41264 = cljs.core.async.close_BANG_.call(null,inst_41261);
var state_41349__$1 = state_41349;
var statearr_41383_41456 = state_41349__$1;
(statearr_41383_41456[(2)] = inst_41264);

(statearr_41383_41456[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41350 === (36))){
var inst_41308 = (state_41349[(25)]);
var inst_41312 = cljs.core.chunk_first.call(null,inst_41308);
var inst_41313 = cljs.core.chunk_rest.call(null,inst_41308);
var inst_41314 = cljs.core.count.call(null,inst_41312);
var inst_41289 = inst_41313;
var inst_41290 = inst_41312;
var inst_41291 = inst_41314;
var inst_41292 = (0);
var state_41349__$1 = (function (){var statearr_41384 = state_41349;
(statearr_41384[(10)] = inst_41290);

(statearr_41384[(20)] = inst_41291);

(statearr_41384[(21)] = inst_41289);

(statearr_41384[(12)] = inst_41292);

return statearr_41384;
})();
var statearr_41385_41457 = state_41349__$1;
(statearr_41385_41457[(2)] = null);

(statearr_41385_41457[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41350 === (41))){
var inst_41308 = (state_41349[(25)]);
var inst_41324 = (state_41349[(2)]);
var inst_41325 = cljs.core.next.call(null,inst_41308);
var inst_41289 = inst_41325;
var inst_41290 = null;
var inst_41291 = (0);
var inst_41292 = (0);
var state_41349__$1 = (function (){var statearr_41386 = state_41349;
(statearr_41386[(10)] = inst_41290);

(statearr_41386[(20)] = inst_41291);

(statearr_41386[(27)] = inst_41324);

(statearr_41386[(21)] = inst_41289);

(statearr_41386[(12)] = inst_41292);

return statearr_41386;
})();
var statearr_41387_41458 = state_41349__$1;
(statearr_41387_41458[(2)] = null);

(statearr_41387_41458[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41350 === (43))){
var state_41349__$1 = state_41349;
var statearr_41388_41459 = state_41349__$1;
(statearr_41388_41459[(2)] = null);

(statearr_41388_41459[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41350 === (29))){
var inst_41333 = (state_41349[(2)]);
var state_41349__$1 = state_41349;
var statearr_41389_41460 = state_41349__$1;
(statearr_41389_41460[(2)] = inst_41333);

(statearr_41389_41460[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41350 === (44))){
var inst_41342 = (state_41349[(2)]);
var state_41349__$1 = (function (){var statearr_41390 = state_41349;
(statearr_41390[(28)] = inst_41342);

return statearr_41390;
})();
var statearr_41391_41461 = state_41349__$1;
(statearr_41391_41461[(2)] = null);

(statearr_41391_41461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41350 === (6))){
var inst_41281 = (state_41349[(29)]);
var inst_41280 = cljs.core.deref.call(null,cs);
var inst_41281__$1 = cljs.core.keys.call(null,inst_41280);
var inst_41282 = cljs.core.count.call(null,inst_41281__$1);
var inst_41283 = cljs.core.reset_BANG_.call(null,dctr,inst_41282);
var inst_41288 = cljs.core.seq.call(null,inst_41281__$1);
var inst_41289 = inst_41288;
var inst_41290 = null;
var inst_41291 = (0);
var inst_41292 = (0);
var state_41349__$1 = (function (){var statearr_41392 = state_41349;
(statearr_41392[(29)] = inst_41281__$1);

(statearr_41392[(10)] = inst_41290);

(statearr_41392[(30)] = inst_41283);

(statearr_41392[(20)] = inst_41291);

(statearr_41392[(21)] = inst_41289);

(statearr_41392[(12)] = inst_41292);

return statearr_41392;
})();
var statearr_41393_41462 = state_41349__$1;
(statearr_41393_41462[(2)] = null);

(statearr_41393_41462[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41350 === (28))){
var inst_41308 = (state_41349[(25)]);
var inst_41289 = (state_41349[(21)]);
var inst_41308__$1 = cljs.core.seq.call(null,inst_41289);
var state_41349__$1 = (function (){var statearr_41394 = state_41349;
(statearr_41394[(25)] = inst_41308__$1);

return statearr_41394;
})();
if(inst_41308__$1){
var statearr_41395_41463 = state_41349__$1;
(statearr_41395_41463[(1)] = (33));

} else {
var statearr_41396_41464 = state_41349__$1;
(statearr_41396_41464[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41350 === (25))){
var inst_41291 = (state_41349[(20)]);
var inst_41292 = (state_41349[(12)]);
var inst_41294 = (inst_41292 < inst_41291);
var inst_41295 = inst_41294;
var state_41349__$1 = state_41349;
if(cljs.core.truth_(inst_41295)){
var statearr_41397_41465 = state_41349__$1;
(statearr_41397_41465[(1)] = (27));

} else {
var statearr_41398_41466 = state_41349__$1;
(statearr_41398_41466[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41350 === (34))){
var state_41349__$1 = state_41349;
var statearr_41399_41467 = state_41349__$1;
(statearr_41399_41467[(2)] = null);

(statearr_41399_41467[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41350 === (17))){
var state_41349__$1 = state_41349;
var statearr_41400_41468 = state_41349__$1;
(statearr_41400_41468[(2)] = null);

(statearr_41400_41468[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41350 === (3))){
var inst_41347 = (state_41349[(2)]);
var state_41349__$1 = state_41349;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41349__$1,inst_41347);
} else {
if((state_val_41350 === (12))){
var inst_41276 = (state_41349[(2)]);
var state_41349__$1 = state_41349;
var statearr_41401_41469 = state_41349__$1;
(statearr_41401_41469[(2)] = inst_41276);

(statearr_41401_41469[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41350 === (2))){
var state_41349__$1 = state_41349;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41349__$1,(4),ch);
} else {
if((state_val_41350 === (23))){
var state_41349__$1 = state_41349;
var statearr_41402_41470 = state_41349__$1;
(statearr_41402_41470[(2)] = null);

(statearr_41402_41470[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41350 === (35))){
var inst_41331 = (state_41349[(2)]);
var state_41349__$1 = state_41349;
var statearr_41403_41471 = state_41349__$1;
(statearr_41403_41471[(2)] = inst_41331);

(statearr_41403_41471[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41350 === (19))){
var inst_41248 = (state_41349[(7)]);
var inst_41252 = cljs.core.chunk_first.call(null,inst_41248);
var inst_41253 = cljs.core.chunk_rest.call(null,inst_41248);
var inst_41254 = cljs.core.count.call(null,inst_41252);
var inst_41226 = inst_41253;
var inst_41227 = inst_41252;
var inst_41228 = inst_41254;
var inst_41229 = (0);
var state_41349__$1 = (function (){var statearr_41404 = state_41349;
(statearr_41404[(13)] = inst_41228);

(statearr_41404[(14)] = inst_41227);

(statearr_41404[(15)] = inst_41229);

(statearr_41404[(17)] = inst_41226);

return statearr_41404;
})();
var statearr_41405_41472 = state_41349__$1;
(statearr_41405_41472[(2)] = null);

(statearr_41405_41472[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41350 === (11))){
var inst_41248 = (state_41349[(7)]);
var inst_41226 = (state_41349[(17)]);
var inst_41248__$1 = cljs.core.seq.call(null,inst_41226);
var state_41349__$1 = (function (){var statearr_41406 = state_41349;
(statearr_41406[(7)] = inst_41248__$1);

return statearr_41406;
})();
if(inst_41248__$1){
var statearr_41407_41473 = state_41349__$1;
(statearr_41407_41473[(1)] = (16));

} else {
var statearr_41408_41474 = state_41349__$1;
(statearr_41408_41474[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41350 === (9))){
var inst_41278 = (state_41349[(2)]);
var state_41349__$1 = state_41349;
var statearr_41409_41475 = state_41349__$1;
(statearr_41409_41475[(2)] = inst_41278);

(statearr_41409_41475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41350 === (5))){
var inst_41224 = cljs.core.deref.call(null,cs);
var inst_41225 = cljs.core.seq.call(null,inst_41224);
var inst_41226 = inst_41225;
var inst_41227 = null;
var inst_41228 = (0);
var inst_41229 = (0);
var state_41349__$1 = (function (){var statearr_41410 = state_41349;
(statearr_41410[(13)] = inst_41228);

(statearr_41410[(14)] = inst_41227);

(statearr_41410[(15)] = inst_41229);

(statearr_41410[(17)] = inst_41226);

return statearr_41410;
})();
var statearr_41411_41476 = state_41349__$1;
(statearr_41411_41476[(2)] = null);

(statearr_41411_41476[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41350 === (14))){
var state_41349__$1 = state_41349;
var statearr_41412_41477 = state_41349__$1;
(statearr_41412_41477[(2)] = null);

(statearr_41412_41477[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41350 === (45))){
var inst_41339 = (state_41349[(2)]);
var state_41349__$1 = state_41349;
var statearr_41413_41478 = state_41349__$1;
(statearr_41413_41478[(2)] = inst_41339);

(statearr_41413_41478[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41350 === (26))){
var inst_41281 = (state_41349[(29)]);
var inst_41335 = (state_41349[(2)]);
var inst_41336 = cljs.core.seq.call(null,inst_41281);
var state_41349__$1 = (function (){var statearr_41414 = state_41349;
(statearr_41414[(31)] = inst_41335);

return statearr_41414;
})();
if(inst_41336){
var statearr_41415_41479 = state_41349__$1;
(statearr_41415_41479[(1)] = (42));

} else {
var statearr_41416_41480 = state_41349__$1;
(statearr_41416_41480[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41350 === (16))){
var inst_41248 = (state_41349[(7)]);
var inst_41250 = cljs.core.chunked_seq_QMARK_.call(null,inst_41248);
var state_41349__$1 = state_41349;
if(inst_41250){
var statearr_41417_41481 = state_41349__$1;
(statearr_41417_41481[(1)] = (19));

} else {
var statearr_41418_41482 = state_41349__$1;
(statearr_41418_41482[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41350 === (38))){
var inst_41328 = (state_41349[(2)]);
var state_41349__$1 = state_41349;
var statearr_41419_41483 = state_41349__$1;
(statearr_41419_41483[(2)] = inst_41328);

(statearr_41419_41483[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41350 === (30))){
var state_41349__$1 = state_41349;
var statearr_41420_41484 = state_41349__$1;
(statearr_41420_41484[(2)] = null);

(statearr_41420_41484[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41350 === (10))){
var inst_41227 = (state_41349[(14)]);
var inst_41229 = (state_41349[(15)]);
var inst_41237 = cljs.core._nth.call(null,inst_41227,inst_41229);
var inst_41238 = cljs.core.nth.call(null,inst_41237,(0),null);
var inst_41239 = cljs.core.nth.call(null,inst_41237,(1),null);
var state_41349__$1 = (function (){var statearr_41421 = state_41349;
(statearr_41421[(26)] = inst_41238);

return statearr_41421;
})();
if(cljs.core.truth_(inst_41239)){
var statearr_41422_41485 = state_41349__$1;
(statearr_41422_41485[(1)] = (13));

} else {
var statearr_41423_41486 = state_41349__$1;
(statearr_41423_41486[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41350 === (18))){
var inst_41274 = (state_41349[(2)]);
var state_41349__$1 = state_41349;
var statearr_41424_41487 = state_41349__$1;
(statearr_41424_41487[(2)] = inst_41274);

(statearr_41424_41487[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41350 === (42))){
var state_41349__$1 = state_41349;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41349__$1,(45),dchan);
} else {
if((state_val_41350 === (37))){
var inst_41317 = (state_41349[(23)]);
var inst_41308 = (state_41349[(25)]);
var inst_41217 = (state_41349[(11)]);
var inst_41317__$1 = cljs.core.first.call(null,inst_41308);
var inst_41318 = cljs.core.async.put_BANG_.call(null,inst_41317__$1,inst_41217,done);
var state_41349__$1 = (function (){var statearr_41425 = state_41349;
(statearr_41425[(23)] = inst_41317__$1);

return statearr_41425;
})();
if(cljs.core.truth_(inst_41318)){
var statearr_41426_41488 = state_41349__$1;
(statearr_41426_41488[(1)] = (39));

} else {
var statearr_41427_41489 = state_41349__$1;
(statearr_41427_41489[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41350 === (8))){
var inst_41228 = (state_41349[(13)]);
var inst_41229 = (state_41349[(15)]);
var inst_41231 = (inst_41229 < inst_41228);
var inst_41232 = inst_41231;
var state_41349__$1 = state_41349;
if(cljs.core.truth_(inst_41232)){
var statearr_41428_41490 = state_41349__$1;
(statearr_41428_41490[(1)] = (10));

} else {
var statearr_41429_41491 = state_41349__$1;
(statearr_41429_41491[(1)] = (11));

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
});})(c__40084__auto___41437,cs,m,dchan,dctr,done))
;
return ((function (switch__39972__auto__,c__40084__auto___41437,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__39973__auto__ = null;
var cljs$core$async$mult_$_state_machine__39973__auto____0 = (function (){
var statearr_41433 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41433[(0)] = cljs$core$async$mult_$_state_machine__39973__auto__);

(statearr_41433[(1)] = (1));

return statearr_41433;
});
var cljs$core$async$mult_$_state_machine__39973__auto____1 = (function (state_41349){
while(true){
var ret_value__39974__auto__ = (function (){try{while(true){
var result__39975__auto__ = switch__39972__auto__.call(null,state_41349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39975__auto__;
}
break;
}
}catch (e41434){if((e41434 instanceof Object)){
var ex__39976__auto__ = e41434;
var statearr_41435_41492 = state_41349;
(statearr_41435_41492[(5)] = ex__39976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41493 = state_41349;
state_41349 = G__41493;
continue;
} else {
return ret_value__39974__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__39973__auto__ = function(state_41349){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__39973__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__39973__auto____1.call(this,state_41349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__39973__auto____0;
cljs$core$async$mult_$_state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__39973__auto____1;
return cljs$core$async$mult_$_state_machine__39973__auto__;
})()
;})(switch__39972__auto__,c__40084__auto___41437,cs,m,dchan,dctr,done))
})();
var state__40086__auto__ = (function (){var statearr_41436 = f__40085__auto__.call(null);
(statearr_41436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40084__auto___41437);

return statearr_41436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40086__auto__);
});})(c__40084__auto___41437,cs,m,dchan,dctr,done))
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
var args41494 = [];
var len__34925__auto___41497 = arguments.length;
var i__34926__auto___41498 = (0);
while(true){
if((i__34926__auto___41498 < len__34925__auto___41497)){
args41494.push((arguments[i__34926__auto___41498]));

var G__41499 = (i__34926__auto___41498 + (1));
i__34926__auto___41498 = G__41499;
continue;
} else {
}
break;
}

var G__41496 = args41494.length;
switch (G__41496) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41494.length)].join('')));

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
var x__34480__auto__ = (((m == null))?null:m);
var m__34481__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__34480__auto__)]);
if(!((m__34481__auto__ == null))){
return m__34481__auto__.call(null,m,ch);
} else {
var m__34481__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__34481__auto____$1 == null))){
return m__34481__auto____$1.call(null,m,ch);
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
var x__34480__auto__ = (((m == null))?null:m);
var m__34481__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__34480__auto__)]);
if(!((m__34481__auto__ == null))){
return m__34481__auto__.call(null,m,ch);
} else {
var m__34481__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__34481__auto____$1 == null))){
return m__34481__auto____$1.call(null,m,ch);
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
var x__34480__auto__ = (((m == null))?null:m);
var m__34481__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__34480__auto__)]);
if(!((m__34481__auto__ == null))){
return m__34481__auto__.call(null,m);
} else {
var m__34481__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__34481__auto____$1 == null))){
return m__34481__auto____$1.call(null,m);
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
var x__34480__auto__ = (((m == null))?null:m);
var m__34481__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__34480__auto__)]);
if(!((m__34481__auto__ == null))){
return m__34481__auto__.call(null,m,state_map);
} else {
var m__34481__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__34481__auto____$1 == null))){
return m__34481__auto____$1.call(null,m,state_map);
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
var x__34480__auto__ = (((m == null))?null:m);
var m__34481__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__34480__auto__)]);
if(!((m__34481__auto__ == null))){
return m__34481__auto__.call(null,m,mode);
} else {
var m__34481__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__34481__auto____$1 == null))){
return m__34481__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__34932__auto__ = [];
var len__34925__auto___41511 = arguments.length;
var i__34926__auto___41512 = (0);
while(true){
if((i__34926__auto___41512 < len__34925__auto___41511)){
args__34932__auto__.push((arguments[i__34926__auto___41512]));

var G__41513 = (i__34926__auto___41512 + (1));
i__34926__auto___41512 = G__41513;
continue;
} else {
}
break;
}

var argseq__34933__auto__ = ((((3) < args__34932__auto__.length))?(new cljs.core.IndexedSeq(args__34932__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__34933__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__41505){
var map__41506 = p__41505;
var map__41506__$1 = ((((!((map__41506 == null)))?((((map__41506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41506.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41506):map__41506);
var opts = map__41506__$1;
var statearr_41508_41514 = state;
(statearr_41508_41514[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__41506,map__41506__$1,opts){
return (function (val){
var statearr_41509_41515 = state;
(statearr_41509_41515[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__41506,map__41506__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_41510_41516 = state;
(statearr_41510_41516[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq41501){
var G__41502 = cljs.core.first.call(null,seq41501);
var seq41501__$1 = cljs.core.next.call(null,seq41501);
var G__41503 = cljs.core.first.call(null,seq41501__$1);
var seq41501__$2 = cljs.core.next.call(null,seq41501__$1);
var G__41504 = cljs.core.first.call(null,seq41501__$2);
var seq41501__$3 = cljs.core.next.call(null,seq41501__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41502,G__41503,G__41504,seq41501__$3);
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
if(typeof cljs.core.async.t_cljs$core$async41684 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41684 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta41685){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta41685 = meta41685;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41686,meta41685__$1){
var self__ = this;
var _41686__$1 = this;
return (new cljs.core.async.t_cljs$core$async41684(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta41685__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41684.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41686){
var self__ = this;
var _41686__$1 = this;
return self__.meta41685;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41684.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41684.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41684.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41684.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41684.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41684.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41684.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41684.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async41684.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta41685","meta41685",575214146,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41684.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41684.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41684";

cljs.core.async.t_cljs$core$async41684.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__34423__auto__,writer__34424__auto__,opt__34425__auto__){
return cljs.core._write.call(null,writer__34424__auto__,"cljs.core.async/t_cljs$core$async41684");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async41684 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async41684(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta41685){
return (new cljs.core.async.t_cljs$core$async41684(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta41685));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async41684(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40084__auto___41851 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40084__auto___41851,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__40085__auto__ = (function (){var switch__39972__auto__ = ((function (c__40084__auto___41851,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_41788){
var state_val_41789 = (state_41788[(1)]);
if((state_val_41789 === (7))){
var inst_41703 = (state_41788[(2)]);
var state_41788__$1 = state_41788;
var statearr_41790_41852 = state_41788__$1;
(statearr_41790_41852[(2)] = inst_41703);

(statearr_41790_41852[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41789 === (20))){
var inst_41715 = (state_41788[(7)]);
var state_41788__$1 = state_41788;
var statearr_41791_41853 = state_41788__$1;
(statearr_41791_41853[(2)] = inst_41715);

(statearr_41791_41853[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41789 === (27))){
var state_41788__$1 = state_41788;
var statearr_41792_41854 = state_41788__$1;
(statearr_41792_41854[(2)] = null);

(statearr_41792_41854[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41789 === (1))){
var inst_41690 = (state_41788[(8)]);
var inst_41690__$1 = calc_state.call(null);
var inst_41692 = (inst_41690__$1 == null);
var inst_41693 = cljs.core.not.call(null,inst_41692);
var state_41788__$1 = (function (){var statearr_41793 = state_41788;
(statearr_41793[(8)] = inst_41690__$1);

return statearr_41793;
})();
if(inst_41693){
var statearr_41794_41855 = state_41788__$1;
(statearr_41794_41855[(1)] = (2));

} else {
var statearr_41795_41856 = state_41788__$1;
(statearr_41795_41856[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41789 === (24))){
var inst_41748 = (state_41788[(9)]);
var inst_41739 = (state_41788[(10)]);
var inst_41762 = (state_41788[(11)]);
var inst_41762__$1 = inst_41739.call(null,inst_41748);
var state_41788__$1 = (function (){var statearr_41796 = state_41788;
(statearr_41796[(11)] = inst_41762__$1);

return statearr_41796;
})();
if(cljs.core.truth_(inst_41762__$1)){
var statearr_41797_41857 = state_41788__$1;
(statearr_41797_41857[(1)] = (29));

} else {
var statearr_41798_41858 = state_41788__$1;
(statearr_41798_41858[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41789 === (4))){
var inst_41706 = (state_41788[(2)]);
var state_41788__$1 = state_41788;
if(cljs.core.truth_(inst_41706)){
var statearr_41799_41859 = state_41788__$1;
(statearr_41799_41859[(1)] = (8));

} else {
var statearr_41800_41860 = state_41788__$1;
(statearr_41800_41860[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41789 === (15))){
var inst_41733 = (state_41788[(2)]);
var state_41788__$1 = state_41788;
if(cljs.core.truth_(inst_41733)){
var statearr_41801_41861 = state_41788__$1;
(statearr_41801_41861[(1)] = (19));

} else {
var statearr_41802_41862 = state_41788__$1;
(statearr_41802_41862[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41789 === (21))){
var inst_41738 = (state_41788[(12)]);
var inst_41738__$1 = (state_41788[(2)]);
var inst_41739 = cljs.core.get.call(null,inst_41738__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41740 = cljs.core.get.call(null,inst_41738__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41741 = cljs.core.get.call(null,inst_41738__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_41788__$1 = (function (){var statearr_41803 = state_41788;
(statearr_41803[(10)] = inst_41739);

(statearr_41803[(13)] = inst_41740);

(statearr_41803[(12)] = inst_41738__$1);

return statearr_41803;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_41788__$1,(22),inst_41741);
} else {
if((state_val_41789 === (31))){
var inst_41770 = (state_41788[(2)]);
var state_41788__$1 = state_41788;
if(cljs.core.truth_(inst_41770)){
var statearr_41804_41863 = state_41788__$1;
(statearr_41804_41863[(1)] = (32));

} else {
var statearr_41805_41864 = state_41788__$1;
(statearr_41805_41864[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41789 === (32))){
var inst_41747 = (state_41788[(14)]);
var state_41788__$1 = state_41788;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41788__$1,(35),out,inst_41747);
} else {
if((state_val_41789 === (33))){
var inst_41738 = (state_41788[(12)]);
var inst_41715 = inst_41738;
var state_41788__$1 = (function (){var statearr_41806 = state_41788;
(statearr_41806[(7)] = inst_41715);

return statearr_41806;
})();
var statearr_41807_41865 = state_41788__$1;
(statearr_41807_41865[(2)] = null);

(statearr_41807_41865[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41789 === (13))){
var inst_41715 = (state_41788[(7)]);
var inst_41722 = inst_41715.cljs$lang$protocol_mask$partition0$;
var inst_41723 = (inst_41722 & (64));
var inst_41724 = inst_41715.cljs$core$ISeq$;
var inst_41725 = (cljs.core.PROTOCOL_SENTINEL === inst_41724);
var inst_41726 = (inst_41723) || (inst_41725);
var state_41788__$1 = state_41788;
if(cljs.core.truth_(inst_41726)){
var statearr_41808_41866 = state_41788__$1;
(statearr_41808_41866[(1)] = (16));

} else {
var statearr_41809_41867 = state_41788__$1;
(statearr_41809_41867[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41789 === (22))){
var inst_41748 = (state_41788[(9)]);
var inst_41747 = (state_41788[(14)]);
var inst_41746 = (state_41788[(2)]);
var inst_41747__$1 = cljs.core.nth.call(null,inst_41746,(0),null);
var inst_41748__$1 = cljs.core.nth.call(null,inst_41746,(1),null);
var inst_41749 = (inst_41747__$1 == null);
var inst_41750 = cljs.core._EQ_.call(null,inst_41748__$1,change);
var inst_41751 = (inst_41749) || (inst_41750);
var state_41788__$1 = (function (){var statearr_41810 = state_41788;
(statearr_41810[(9)] = inst_41748__$1);

(statearr_41810[(14)] = inst_41747__$1);

return statearr_41810;
})();
if(cljs.core.truth_(inst_41751)){
var statearr_41811_41868 = state_41788__$1;
(statearr_41811_41868[(1)] = (23));

} else {
var statearr_41812_41869 = state_41788__$1;
(statearr_41812_41869[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41789 === (36))){
var inst_41738 = (state_41788[(12)]);
var inst_41715 = inst_41738;
var state_41788__$1 = (function (){var statearr_41813 = state_41788;
(statearr_41813[(7)] = inst_41715);

return statearr_41813;
})();
var statearr_41814_41870 = state_41788__$1;
(statearr_41814_41870[(2)] = null);

(statearr_41814_41870[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41789 === (29))){
var inst_41762 = (state_41788[(11)]);
var state_41788__$1 = state_41788;
var statearr_41815_41871 = state_41788__$1;
(statearr_41815_41871[(2)] = inst_41762);

(statearr_41815_41871[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41789 === (6))){
var state_41788__$1 = state_41788;
var statearr_41816_41872 = state_41788__$1;
(statearr_41816_41872[(2)] = false);

(statearr_41816_41872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41789 === (28))){
var inst_41758 = (state_41788[(2)]);
var inst_41759 = calc_state.call(null);
var inst_41715 = inst_41759;
var state_41788__$1 = (function (){var statearr_41817 = state_41788;
(statearr_41817[(7)] = inst_41715);

(statearr_41817[(15)] = inst_41758);

return statearr_41817;
})();
var statearr_41818_41873 = state_41788__$1;
(statearr_41818_41873[(2)] = null);

(statearr_41818_41873[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41789 === (25))){
var inst_41784 = (state_41788[(2)]);
var state_41788__$1 = state_41788;
var statearr_41819_41874 = state_41788__$1;
(statearr_41819_41874[(2)] = inst_41784);

(statearr_41819_41874[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41789 === (34))){
var inst_41782 = (state_41788[(2)]);
var state_41788__$1 = state_41788;
var statearr_41820_41875 = state_41788__$1;
(statearr_41820_41875[(2)] = inst_41782);

(statearr_41820_41875[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41789 === (17))){
var state_41788__$1 = state_41788;
var statearr_41821_41876 = state_41788__$1;
(statearr_41821_41876[(2)] = false);

(statearr_41821_41876[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41789 === (3))){
var state_41788__$1 = state_41788;
var statearr_41822_41877 = state_41788__$1;
(statearr_41822_41877[(2)] = false);

(statearr_41822_41877[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41789 === (12))){
var inst_41786 = (state_41788[(2)]);
var state_41788__$1 = state_41788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41788__$1,inst_41786);
} else {
if((state_val_41789 === (2))){
var inst_41690 = (state_41788[(8)]);
var inst_41695 = inst_41690.cljs$lang$protocol_mask$partition0$;
var inst_41696 = (inst_41695 & (64));
var inst_41697 = inst_41690.cljs$core$ISeq$;
var inst_41698 = (cljs.core.PROTOCOL_SENTINEL === inst_41697);
var inst_41699 = (inst_41696) || (inst_41698);
var state_41788__$1 = state_41788;
if(cljs.core.truth_(inst_41699)){
var statearr_41823_41878 = state_41788__$1;
(statearr_41823_41878[(1)] = (5));

} else {
var statearr_41824_41879 = state_41788__$1;
(statearr_41824_41879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41789 === (23))){
var inst_41747 = (state_41788[(14)]);
var inst_41753 = (inst_41747 == null);
var state_41788__$1 = state_41788;
if(cljs.core.truth_(inst_41753)){
var statearr_41825_41880 = state_41788__$1;
(statearr_41825_41880[(1)] = (26));

} else {
var statearr_41826_41881 = state_41788__$1;
(statearr_41826_41881[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41789 === (35))){
var inst_41773 = (state_41788[(2)]);
var state_41788__$1 = state_41788;
if(cljs.core.truth_(inst_41773)){
var statearr_41827_41882 = state_41788__$1;
(statearr_41827_41882[(1)] = (36));

} else {
var statearr_41828_41883 = state_41788__$1;
(statearr_41828_41883[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41789 === (19))){
var inst_41715 = (state_41788[(7)]);
var inst_41735 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41715);
var state_41788__$1 = state_41788;
var statearr_41829_41884 = state_41788__$1;
(statearr_41829_41884[(2)] = inst_41735);

(statearr_41829_41884[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41789 === (11))){
var inst_41715 = (state_41788[(7)]);
var inst_41719 = (inst_41715 == null);
var inst_41720 = cljs.core.not.call(null,inst_41719);
var state_41788__$1 = state_41788;
if(inst_41720){
var statearr_41830_41885 = state_41788__$1;
(statearr_41830_41885[(1)] = (13));

} else {
var statearr_41831_41886 = state_41788__$1;
(statearr_41831_41886[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41789 === (9))){
var inst_41690 = (state_41788[(8)]);
var state_41788__$1 = state_41788;
var statearr_41832_41887 = state_41788__$1;
(statearr_41832_41887[(2)] = inst_41690);

(statearr_41832_41887[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41789 === (5))){
var state_41788__$1 = state_41788;
var statearr_41833_41888 = state_41788__$1;
(statearr_41833_41888[(2)] = true);

(statearr_41833_41888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41789 === (14))){
var state_41788__$1 = state_41788;
var statearr_41834_41889 = state_41788__$1;
(statearr_41834_41889[(2)] = false);

(statearr_41834_41889[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41789 === (26))){
var inst_41748 = (state_41788[(9)]);
var inst_41755 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_41748);
var state_41788__$1 = state_41788;
var statearr_41835_41890 = state_41788__$1;
(statearr_41835_41890[(2)] = inst_41755);

(statearr_41835_41890[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41789 === (16))){
var state_41788__$1 = state_41788;
var statearr_41836_41891 = state_41788__$1;
(statearr_41836_41891[(2)] = true);

(statearr_41836_41891[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41789 === (38))){
var inst_41778 = (state_41788[(2)]);
var state_41788__$1 = state_41788;
var statearr_41837_41892 = state_41788__$1;
(statearr_41837_41892[(2)] = inst_41778);

(statearr_41837_41892[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41789 === (30))){
var inst_41748 = (state_41788[(9)]);
var inst_41739 = (state_41788[(10)]);
var inst_41740 = (state_41788[(13)]);
var inst_41765 = cljs.core.empty_QMARK_.call(null,inst_41739);
var inst_41766 = inst_41740.call(null,inst_41748);
var inst_41767 = cljs.core.not.call(null,inst_41766);
var inst_41768 = (inst_41765) && (inst_41767);
var state_41788__$1 = state_41788;
var statearr_41838_41893 = state_41788__$1;
(statearr_41838_41893[(2)] = inst_41768);

(statearr_41838_41893[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41789 === (10))){
var inst_41690 = (state_41788[(8)]);
var inst_41711 = (state_41788[(2)]);
var inst_41712 = cljs.core.get.call(null,inst_41711,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41713 = cljs.core.get.call(null,inst_41711,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41714 = cljs.core.get.call(null,inst_41711,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_41715 = inst_41690;
var state_41788__$1 = (function (){var statearr_41839 = state_41788;
(statearr_41839[(16)] = inst_41713);

(statearr_41839[(17)] = inst_41712);

(statearr_41839[(18)] = inst_41714);

(statearr_41839[(7)] = inst_41715);

return statearr_41839;
})();
var statearr_41840_41894 = state_41788__$1;
(statearr_41840_41894[(2)] = null);

(statearr_41840_41894[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41789 === (18))){
var inst_41730 = (state_41788[(2)]);
var state_41788__$1 = state_41788;
var statearr_41841_41895 = state_41788__$1;
(statearr_41841_41895[(2)] = inst_41730);

(statearr_41841_41895[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41789 === (37))){
var state_41788__$1 = state_41788;
var statearr_41842_41896 = state_41788__$1;
(statearr_41842_41896[(2)] = null);

(statearr_41842_41896[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41789 === (8))){
var inst_41690 = (state_41788[(8)]);
var inst_41708 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41690);
var state_41788__$1 = state_41788;
var statearr_41843_41897 = state_41788__$1;
(statearr_41843_41897[(2)] = inst_41708);

(statearr_41843_41897[(1)] = (10));


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
});})(c__40084__auto___41851,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__39972__auto__,c__40084__auto___41851,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__39973__auto__ = null;
var cljs$core$async$mix_$_state_machine__39973__auto____0 = (function (){
var statearr_41847 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41847[(0)] = cljs$core$async$mix_$_state_machine__39973__auto__);

(statearr_41847[(1)] = (1));

return statearr_41847;
});
var cljs$core$async$mix_$_state_machine__39973__auto____1 = (function (state_41788){
while(true){
var ret_value__39974__auto__ = (function (){try{while(true){
var result__39975__auto__ = switch__39972__auto__.call(null,state_41788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39975__auto__;
}
break;
}
}catch (e41848){if((e41848 instanceof Object)){
var ex__39976__auto__ = e41848;
var statearr_41849_41898 = state_41788;
(statearr_41849_41898[(5)] = ex__39976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41848;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41899 = state_41788;
state_41788 = G__41899;
continue;
} else {
return ret_value__39974__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__39973__auto__ = function(state_41788){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__39973__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__39973__auto____1.call(this,state_41788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__39973__auto____0;
cljs$core$async$mix_$_state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__39973__auto____1;
return cljs$core$async$mix_$_state_machine__39973__auto__;
})()
;})(switch__39972__auto__,c__40084__auto___41851,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__40086__auto__ = (function (){var statearr_41850 = f__40085__auto__.call(null);
(statearr_41850[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40084__auto___41851);

return statearr_41850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40086__auto__);
});})(c__40084__auto___41851,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__34480__auto__ = (((p == null))?null:p);
var m__34481__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__34480__auto__)]);
if(!((m__34481__auto__ == null))){
return m__34481__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__34481__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__34481__auto____$1 == null))){
return m__34481__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__34480__auto__ = (((p == null))?null:p);
var m__34481__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__34480__auto__)]);
if(!((m__34481__auto__ == null))){
return m__34481__auto__.call(null,p,v,ch);
} else {
var m__34481__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__34481__auto____$1 == null))){
return m__34481__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args41900 = [];
var len__34925__auto___41903 = arguments.length;
var i__34926__auto___41904 = (0);
while(true){
if((i__34926__auto___41904 < len__34925__auto___41903)){
args41900.push((arguments[i__34926__auto___41904]));

var G__41905 = (i__34926__auto___41904 + (1));
i__34926__auto___41904 = G__41905;
continue;
} else {
}
break;
}

var G__41902 = args41900.length;
switch (G__41902) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41900.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__34480__auto__ = (((p == null))?null:p);
var m__34481__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__34480__auto__)]);
if(!((m__34481__auto__ == null))){
return m__34481__auto__.call(null,p);
} else {
var m__34481__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__34481__auto____$1 == null))){
return m__34481__auto____$1.call(null,p);
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
var x__34480__auto__ = (((p == null))?null:p);
var m__34481__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__34480__auto__)]);
if(!((m__34481__auto__ == null))){
return m__34481__auto__.call(null,p,v);
} else {
var m__34481__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__34481__auto____$1 == null))){
return m__34481__auto____$1.call(null,p,v);
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
var args41908 = [];
var len__34925__auto___42033 = arguments.length;
var i__34926__auto___42034 = (0);
while(true){
if((i__34926__auto___42034 < len__34925__auto___42033)){
args41908.push((arguments[i__34926__auto___42034]));

var G__42035 = (i__34926__auto___42034 + (1));
i__34926__auto___42034 = G__42035;
continue;
} else {
}
break;
}

var G__41910 = args41908.length;
switch (G__41910) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41908.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__33812__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__33812__auto__)){
return or__33812__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__33812__auto__,mults){
return (function (p1__41907_SHARP_){
if(cljs.core.truth_(p1__41907_SHARP_.call(null,topic))){
return p1__41907_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__41907_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__33812__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async41911 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41911 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta41912){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta41912 = meta41912;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_41913,meta41912__$1){
var self__ = this;
var _41913__$1 = this;
return (new cljs.core.async.t_cljs$core$async41911(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta41912__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41911.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_41913){
var self__ = this;
var _41913__$1 = this;
return self__.meta41912;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41911.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41911.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41911.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41911.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41911.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async41911.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41911.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41911.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta41912","meta41912",485286706,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41911.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41911.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41911";

cljs.core.async.t_cljs$core$async41911.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__34423__auto__,writer__34424__auto__,opt__34425__auto__){
return cljs.core._write.call(null,writer__34424__auto__,"cljs.core.async/t_cljs$core$async41911");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async41911 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async41911(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41912){
return (new cljs.core.async.t_cljs$core$async41911(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41912));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async41911(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40084__auto___42037 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40084__auto___42037,mults,ensure_mult,p){
return (function (){
var f__40085__auto__ = (function (){var switch__39972__auto__ = ((function (c__40084__auto___42037,mults,ensure_mult,p){
return (function (state_41985){
var state_val_41986 = (state_41985[(1)]);
if((state_val_41986 === (7))){
var inst_41981 = (state_41985[(2)]);
var state_41985__$1 = state_41985;
var statearr_41987_42038 = state_41985__$1;
(statearr_41987_42038[(2)] = inst_41981);

(statearr_41987_42038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41986 === (20))){
var state_41985__$1 = state_41985;
var statearr_41988_42039 = state_41985__$1;
(statearr_41988_42039[(2)] = null);

(statearr_41988_42039[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41986 === (1))){
var state_41985__$1 = state_41985;
var statearr_41989_42040 = state_41985__$1;
(statearr_41989_42040[(2)] = null);

(statearr_41989_42040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41986 === (24))){
var inst_41964 = (state_41985[(7)]);
var inst_41973 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_41964);
var state_41985__$1 = state_41985;
var statearr_41990_42041 = state_41985__$1;
(statearr_41990_42041[(2)] = inst_41973);

(statearr_41990_42041[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41986 === (4))){
var inst_41916 = (state_41985[(8)]);
var inst_41916__$1 = (state_41985[(2)]);
var inst_41917 = (inst_41916__$1 == null);
var state_41985__$1 = (function (){var statearr_41991 = state_41985;
(statearr_41991[(8)] = inst_41916__$1);

return statearr_41991;
})();
if(cljs.core.truth_(inst_41917)){
var statearr_41992_42042 = state_41985__$1;
(statearr_41992_42042[(1)] = (5));

} else {
var statearr_41993_42043 = state_41985__$1;
(statearr_41993_42043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41986 === (15))){
var inst_41958 = (state_41985[(2)]);
var state_41985__$1 = state_41985;
var statearr_41994_42044 = state_41985__$1;
(statearr_41994_42044[(2)] = inst_41958);

(statearr_41994_42044[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41986 === (21))){
var inst_41978 = (state_41985[(2)]);
var state_41985__$1 = (function (){var statearr_41995 = state_41985;
(statearr_41995[(9)] = inst_41978);

return statearr_41995;
})();
var statearr_41996_42045 = state_41985__$1;
(statearr_41996_42045[(2)] = null);

(statearr_41996_42045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41986 === (13))){
var inst_41940 = (state_41985[(10)]);
var inst_41942 = cljs.core.chunked_seq_QMARK_.call(null,inst_41940);
var state_41985__$1 = state_41985;
if(inst_41942){
var statearr_41997_42046 = state_41985__$1;
(statearr_41997_42046[(1)] = (16));

} else {
var statearr_41998_42047 = state_41985__$1;
(statearr_41998_42047[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41986 === (22))){
var inst_41970 = (state_41985[(2)]);
var state_41985__$1 = state_41985;
if(cljs.core.truth_(inst_41970)){
var statearr_41999_42048 = state_41985__$1;
(statearr_41999_42048[(1)] = (23));

} else {
var statearr_42000_42049 = state_41985__$1;
(statearr_42000_42049[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41986 === (6))){
var inst_41916 = (state_41985[(8)]);
var inst_41966 = (state_41985[(11)]);
var inst_41964 = (state_41985[(7)]);
var inst_41964__$1 = topic_fn.call(null,inst_41916);
var inst_41965 = cljs.core.deref.call(null,mults);
var inst_41966__$1 = cljs.core.get.call(null,inst_41965,inst_41964__$1);
var state_41985__$1 = (function (){var statearr_42001 = state_41985;
(statearr_42001[(11)] = inst_41966__$1);

(statearr_42001[(7)] = inst_41964__$1);

return statearr_42001;
})();
if(cljs.core.truth_(inst_41966__$1)){
var statearr_42002_42050 = state_41985__$1;
(statearr_42002_42050[(1)] = (19));

} else {
var statearr_42003_42051 = state_41985__$1;
(statearr_42003_42051[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41986 === (25))){
var inst_41975 = (state_41985[(2)]);
var state_41985__$1 = state_41985;
var statearr_42004_42052 = state_41985__$1;
(statearr_42004_42052[(2)] = inst_41975);

(statearr_42004_42052[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41986 === (17))){
var inst_41940 = (state_41985[(10)]);
var inst_41949 = cljs.core.first.call(null,inst_41940);
var inst_41950 = cljs.core.async.muxch_STAR_.call(null,inst_41949);
var inst_41951 = cljs.core.async.close_BANG_.call(null,inst_41950);
var inst_41952 = cljs.core.next.call(null,inst_41940);
var inst_41926 = inst_41952;
var inst_41927 = null;
var inst_41928 = (0);
var inst_41929 = (0);
var state_41985__$1 = (function (){var statearr_42005 = state_41985;
(statearr_42005[(12)] = inst_41926);

(statearr_42005[(13)] = inst_41929);

(statearr_42005[(14)] = inst_41951);

(statearr_42005[(15)] = inst_41927);

(statearr_42005[(16)] = inst_41928);

return statearr_42005;
})();
var statearr_42006_42053 = state_41985__$1;
(statearr_42006_42053[(2)] = null);

(statearr_42006_42053[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41986 === (3))){
var inst_41983 = (state_41985[(2)]);
var state_41985__$1 = state_41985;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41985__$1,inst_41983);
} else {
if((state_val_41986 === (12))){
var inst_41960 = (state_41985[(2)]);
var state_41985__$1 = state_41985;
var statearr_42007_42054 = state_41985__$1;
(statearr_42007_42054[(2)] = inst_41960);

(statearr_42007_42054[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41986 === (2))){
var state_41985__$1 = state_41985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41985__$1,(4),ch);
} else {
if((state_val_41986 === (23))){
var state_41985__$1 = state_41985;
var statearr_42008_42055 = state_41985__$1;
(statearr_42008_42055[(2)] = null);

(statearr_42008_42055[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41986 === (19))){
var inst_41916 = (state_41985[(8)]);
var inst_41966 = (state_41985[(11)]);
var inst_41968 = cljs.core.async.muxch_STAR_.call(null,inst_41966);
var state_41985__$1 = state_41985;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41985__$1,(22),inst_41968,inst_41916);
} else {
if((state_val_41986 === (11))){
var inst_41926 = (state_41985[(12)]);
var inst_41940 = (state_41985[(10)]);
var inst_41940__$1 = cljs.core.seq.call(null,inst_41926);
var state_41985__$1 = (function (){var statearr_42009 = state_41985;
(statearr_42009[(10)] = inst_41940__$1);

return statearr_42009;
})();
if(inst_41940__$1){
var statearr_42010_42056 = state_41985__$1;
(statearr_42010_42056[(1)] = (13));

} else {
var statearr_42011_42057 = state_41985__$1;
(statearr_42011_42057[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41986 === (9))){
var inst_41962 = (state_41985[(2)]);
var state_41985__$1 = state_41985;
var statearr_42012_42058 = state_41985__$1;
(statearr_42012_42058[(2)] = inst_41962);

(statearr_42012_42058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41986 === (5))){
var inst_41923 = cljs.core.deref.call(null,mults);
var inst_41924 = cljs.core.vals.call(null,inst_41923);
var inst_41925 = cljs.core.seq.call(null,inst_41924);
var inst_41926 = inst_41925;
var inst_41927 = null;
var inst_41928 = (0);
var inst_41929 = (0);
var state_41985__$1 = (function (){var statearr_42013 = state_41985;
(statearr_42013[(12)] = inst_41926);

(statearr_42013[(13)] = inst_41929);

(statearr_42013[(15)] = inst_41927);

(statearr_42013[(16)] = inst_41928);

return statearr_42013;
})();
var statearr_42014_42059 = state_41985__$1;
(statearr_42014_42059[(2)] = null);

(statearr_42014_42059[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41986 === (14))){
var state_41985__$1 = state_41985;
var statearr_42018_42060 = state_41985__$1;
(statearr_42018_42060[(2)] = null);

(statearr_42018_42060[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41986 === (16))){
var inst_41940 = (state_41985[(10)]);
var inst_41944 = cljs.core.chunk_first.call(null,inst_41940);
var inst_41945 = cljs.core.chunk_rest.call(null,inst_41940);
var inst_41946 = cljs.core.count.call(null,inst_41944);
var inst_41926 = inst_41945;
var inst_41927 = inst_41944;
var inst_41928 = inst_41946;
var inst_41929 = (0);
var state_41985__$1 = (function (){var statearr_42019 = state_41985;
(statearr_42019[(12)] = inst_41926);

(statearr_42019[(13)] = inst_41929);

(statearr_42019[(15)] = inst_41927);

(statearr_42019[(16)] = inst_41928);

return statearr_42019;
})();
var statearr_42020_42061 = state_41985__$1;
(statearr_42020_42061[(2)] = null);

(statearr_42020_42061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41986 === (10))){
var inst_41926 = (state_41985[(12)]);
var inst_41929 = (state_41985[(13)]);
var inst_41927 = (state_41985[(15)]);
var inst_41928 = (state_41985[(16)]);
var inst_41934 = cljs.core._nth.call(null,inst_41927,inst_41929);
var inst_41935 = cljs.core.async.muxch_STAR_.call(null,inst_41934);
var inst_41936 = cljs.core.async.close_BANG_.call(null,inst_41935);
var inst_41937 = (inst_41929 + (1));
var tmp42015 = inst_41926;
var tmp42016 = inst_41927;
var tmp42017 = inst_41928;
var inst_41926__$1 = tmp42015;
var inst_41927__$1 = tmp42016;
var inst_41928__$1 = tmp42017;
var inst_41929__$1 = inst_41937;
var state_41985__$1 = (function (){var statearr_42021 = state_41985;
(statearr_42021[(12)] = inst_41926__$1);

(statearr_42021[(13)] = inst_41929__$1);

(statearr_42021[(15)] = inst_41927__$1);

(statearr_42021[(17)] = inst_41936);

(statearr_42021[(16)] = inst_41928__$1);

return statearr_42021;
})();
var statearr_42022_42062 = state_41985__$1;
(statearr_42022_42062[(2)] = null);

(statearr_42022_42062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41986 === (18))){
var inst_41955 = (state_41985[(2)]);
var state_41985__$1 = state_41985;
var statearr_42023_42063 = state_41985__$1;
(statearr_42023_42063[(2)] = inst_41955);

(statearr_42023_42063[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41986 === (8))){
var inst_41929 = (state_41985[(13)]);
var inst_41928 = (state_41985[(16)]);
var inst_41931 = (inst_41929 < inst_41928);
var inst_41932 = inst_41931;
var state_41985__$1 = state_41985;
if(cljs.core.truth_(inst_41932)){
var statearr_42024_42064 = state_41985__$1;
(statearr_42024_42064[(1)] = (10));

} else {
var statearr_42025_42065 = state_41985__$1;
(statearr_42025_42065[(1)] = (11));

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
});})(c__40084__auto___42037,mults,ensure_mult,p))
;
return ((function (switch__39972__auto__,c__40084__auto___42037,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__39973__auto__ = null;
var cljs$core$async$state_machine__39973__auto____0 = (function (){
var statearr_42029 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42029[(0)] = cljs$core$async$state_machine__39973__auto__);

(statearr_42029[(1)] = (1));

return statearr_42029;
});
var cljs$core$async$state_machine__39973__auto____1 = (function (state_41985){
while(true){
var ret_value__39974__auto__ = (function (){try{while(true){
var result__39975__auto__ = switch__39972__auto__.call(null,state_41985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39975__auto__;
}
break;
}
}catch (e42030){if((e42030 instanceof Object)){
var ex__39976__auto__ = e42030;
var statearr_42031_42066 = state_41985;
(statearr_42031_42066[(5)] = ex__39976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42067 = state_41985;
state_41985 = G__42067;
continue;
} else {
return ret_value__39974__auto__;
}
break;
}
});
cljs$core$async$state_machine__39973__auto__ = function(state_41985){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39973__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39973__auto____1.call(this,state_41985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39973__auto____0;
cljs$core$async$state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39973__auto____1;
return cljs$core$async$state_machine__39973__auto__;
})()
;})(switch__39972__auto__,c__40084__auto___42037,mults,ensure_mult,p))
})();
var state__40086__auto__ = (function (){var statearr_42032 = f__40085__auto__.call(null);
(statearr_42032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40084__auto___42037);

return statearr_42032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40086__auto__);
});})(c__40084__auto___42037,mults,ensure_mult,p))
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
var args42068 = [];
var len__34925__auto___42071 = arguments.length;
var i__34926__auto___42072 = (0);
while(true){
if((i__34926__auto___42072 < len__34925__auto___42071)){
args42068.push((arguments[i__34926__auto___42072]));

var G__42073 = (i__34926__auto___42072 + (1));
i__34926__auto___42072 = G__42073;
continue;
} else {
}
break;
}

var G__42070 = args42068.length;
switch (G__42070) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42068.length)].join('')));

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
var args42075 = [];
var len__34925__auto___42078 = arguments.length;
var i__34926__auto___42079 = (0);
while(true){
if((i__34926__auto___42079 < len__34925__auto___42078)){
args42075.push((arguments[i__34926__auto___42079]));

var G__42080 = (i__34926__auto___42079 + (1));
i__34926__auto___42079 = G__42080;
continue;
} else {
}
break;
}

var G__42077 = args42075.length;
switch (G__42077) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42075.length)].join('')));

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
var args42082 = [];
var len__34925__auto___42153 = arguments.length;
var i__34926__auto___42154 = (0);
while(true){
if((i__34926__auto___42154 < len__34925__auto___42153)){
args42082.push((arguments[i__34926__auto___42154]));

var G__42155 = (i__34926__auto___42154 + (1));
i__34926__auto___42154 = G__42155;
continue;
} else {
}
break;
}

var G__42084 = args42082.length;
switch (G__42084) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42082.length)].join('')));

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
var c__40084__auto___42157 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40084__auto___42157,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__40085__auto__ = (function (){var switch__39972__auto__ = ((function (c__40084__auto___42157,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_42123){
var state_val_42124 = (state_42123[(1)]);
if((state_val_42124 === (7))){
var state_42123__$1 = state_42123;
var statearr_42125_42158 = state_42123__$1;
(statearr_42125_42158[(2)] = null);

(statearr_42125_42158[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42124 === (1))){
var state_42123__$1 = state_42123;
var statearr_42126_42159 = state_42123__$1;
(statearr_42126_42159[(2)] = null);

(statearr_42126_42159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42124 === (4))){
var inst_42087 = (state_42123[(7)]);
var inst_42089 = (inst_42087 < cnt);
var state_42123__$1 = state_42123;
if(cljs.core.truth_(inst_42089)){
var statearr_42127_42160 = state_42123__$1;
(statearr_42127_42160[(1)] = (6));

} else {
var statearr_42128_42161 = state_42123__$1;
(statearr_42128_42161[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42124 === (15))){
var inst_42119 = (state_42123[(2)]);
var state_42123__$1 = state_42123;
var statearr_42129_42162 = state_42123__$1;
(statearr_42129_42162[(2)] = inst_42119);

(statearr_42129_42162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42124 === (13))){
var inst_42112 = cljs.core.async.close_BANG_.call(null,out);
var state_42123__$1 = state_42123;
var statearr_42130_42163 = state_42123__$1;
(statearr_42130_42163[(2)] = inst_42112);

(statearr_42130_42163[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42124 === (6))){
var state_42123__$1 = state_42123;
var statearr_42131_42164 = state_42123__$1;
(statearr_42131_42164[(2)] = null);

(statearr_42131_42164[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42124 === (3))){
var inst_42121 = (state_42123[(2)]);
var state_42123__$1 = state_42123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42123__$1,inst_42121);
} else {
if((state_val_42124 === (12))){
var inst_42109 = (state_42123[(8)]);
var inst_42109__$1 = (state_42123[(2)]);
var inst_42110 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_42109__$1);
var state_42123__$1 = (function (){var statearr_42132 = state_42123;
(statearr_42132[(8)] = inst_42109__$1);

return statearr_42132;
})();
if(cljs.core.truth_(inst_42110)){
var statearr_42133_42165 = state_42123__$1;
(statearr_42133_42165[(1)] = (13));

} else {
var statearr_42134_42166 = state_42123__$1;
(statearr_42134_42166[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42124 === (2))){
var inst_42086 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_42087 = (0);
var state_42123__$1 = (function (){var statearr_42135 = state_42123;
(statearr_42135[(9)] = inst_42086);

(statearr_42135[(7)] = inst_42087);

return statearr_42135;
})();
var statearr_42136_42167 = state_42123__$1;
(statearr_42136_42167[(2)] = null);

(statearr_42136_42167[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42124 === (11))){
var inst_42087 = (state_42123[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42123,(10),Object,null,(9));
var inst_42096 = chs__$1.call(null,inst_42087);
var inst_42097 = done.call(null,inst_42087);
var inst_42098 = cljs.core.async.take_BANG_.call(null,inst_42096,inst_42097);
var state_42123__$1 = state_42123;
var statearr_42137_42168 = state_42123__$1;
(statearr_42137_42168[(2)] = inst_42098);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42123__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42124 === (9))){
var inst_42087 = (state_42123[(7)]);
var inst_42100 = (state_42123[(2)]);
var inst_42101 = (inst_42087 + (1));
var inst_42087__$1 = inst_42101;
var state_42123__$1 = (function (){var statearr_42138 = state_42123;
(statearr_42138[(10)] = inst_42100);

(statearr_42138[(7)] = inst_42087__$1);

return statearr_42138;
})();
var statearr_42139_42169 = state_42123__$1;
(statearr_42139_42169[(2)] = null);

(statearr_42139_42169[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42124 === (5))){
var inst_42107 = (state_42123[(2)]);
var state_42123__$1 = (function (){var statearr_42140 = state_42123;
(statearr_42140[(11)] = inst_42107);

return statearr_42140;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42123__$1,(12),dchan);
} else {
if((state_val_42124 === (14))){
var inst_42109 = (state_42123[(8)]);
var inst_42114 = cljs.core.apply.call(null,f,inst_42109);
var state_42123__$1 = state_42123;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42123__$1,(16),out,inst_42114);
} else {
if((state_val_42124 === (16))){
var inst_42116 = (state_42123[(2)]);
var state_42123__$1 = (function (){var statearr_42141 = state_42123;
(statearr_42141[(12)] = inst_42116);

return statearr_42141;
})();
var statearr_42142_42170 = state_42123__$1;
(statearr_42142_42170[(2)] = null);

(statearr_42142_42170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42124 === (10))){
var inst_42091 = (state_42123[(2)]);
var inst_42092 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_42123__$1 = (function (){var statearr_42143 = state_42123;
(statearr_42143[(13)] = inst_42091);

return statearr_42143;
})();
var statearr_42144_42171 = state_42123__$1;
(statearr_42144_42171[(2)] = inst_42092);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42123__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42124 === (8))){
var inst_42105 = (state_42123[(2)]);
var state_42123__$1 = state_42123;
var statearr_42145_42172 = state_42123__$1;
(statearr_42145_42172[(2)] = inst_42105);

(statearr_42145_42172[(1)] = (5));


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
});})(c__40084__auto___42157,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__39972__auto__,c__40084__auto___42157,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__39973__auto__ = null;
var cljs$core$async$state_machine__39973__auto____0 = (function (){
var statearr_42149 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42149[(0)] = cljs$core$async$state_machine__39973__auto__);

(statearr_42149[(1)] = (1));

return statearr_42149;
});
var cljs$core$async$state_machine__39973__auto____1 = (function (state_42123){
while(true){
var ret_value__39974__auto__ = (function (){try{while(true){
var result__39975__auto__ = switch__39972__auto__.call(null,state_42123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39975__auto__;
}
break;
}
}catch (e42150){if((e42150 instanceof Object)){
var ex__39976__auto__ = e42150;
var statearr_42151_42173 = state_42123;
(statearr_42151_42173[(5)] = ex__39976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42174 = state_42123;
state_42123 = G__42174;
continue;
} else {
return ret_value__39974__auto__;
}
break;
}
});
cljs$core$async$state_machine__39973__auto__ = function(state_42123){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39973__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39973__auto____1.call(this,state_42123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39973__auto____0;
cljs$core$async$state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39973__auto____1;
return cljs$core$async$state_machine__39973__auto__;
})()
;})(switch__39972__auto__,c__40084__auto___42157,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__40086__auto__ = (function (){var statearr_42152 = f__40085__auto__.call(null);
(statearr_42152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40084__auto___42157);

return statearr_42152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40086__auto__);
});})(c__40084__auto___42157,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args42176 = [];
var len__34925__auto___42234 = arguments.length;
var i__34926__auto___42235 = (0);
while(true){
if((i__34926__auto___42235 < len__34925__auto___42234)){
args42176.push((arguments[i__34926__auto___42235]));

var G__42236 = (i__34926__auto___42235 + (1));
i__34926__auto___42235 = G__42236;
continue;
} else {
}
break;
}

var G__42178 = args42176.length;
switch (G__42178) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42176.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40084__auto___42238 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40084__auto___42238,out){
return (function (){
var f__40085__auto__ = (function (){var switch__39972__auto__ = ((function (c__40084__auto___42238,out){
return (function (state_42210){
var state_val_42211 = (state_42210[(1)]);
if((state_val_42211 === (7))){
var inst_42189 = (state_42210[(7)]);
var inst_42190 = (state_42210[(8)]);
var inst_42189__$1 = (state_42210[(2)]);
var inst_42190__$1 = cljs.core.nth.call(null,inst_42189__$1,(0),null);
var inst_42191 = cljs.core.nth.call(null,inst_42189__$1,(1),null);
var inst_42192 = (inst_42190__$1 == null);
var state_42210__$1 = (function (){var statearr_42212 = state_42210;
(statearr_42212[(7)] = inst_42189__$1);

(statearr_42212[(9)] = inst_42191);

(statearr_42212[(8)] = inst_42190__$1);

return statearr_42212;
})();
if(cljs.core.truth_(inst_42192)){
var statearr_42213_42239 = state_42210__$1;
(statearr_42213_42239[(1)] = (8));

} else {
var statearr_42214_42240 = state_42210__$1;
(statearr_42214_42240[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42211 === (1))){
var inst_42179 = cljs.core.vec.call(null,chs);
var inst_42180 = inst_42179;
var state_42210__$1 = (function (){var statearr_42215 = state_42210;
(statearr_42215[(10)] = inst_42180);

return statearr_42215;
})();
var statearr_42216_42241 = state_42210__$1;
(statearr_42216_42241[(2)] = null);

(statearr_42216_42241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42211 === (4))){
var inst_42180 = (state_42210[(10)]);
var state_42210__$1 = state_42210;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42210__$1,(7),inst_42180);
} else {
if((state_val_42211 === (6))){
var inst_42206 = (state_42210[(2)]);
var state_42210__$1 = state_42210;
var statearr_42217_42242 = state_42210__$1;
(statearr_42217_42242[(2)] = inst_42206);

(statearr_42217_42242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42211 === (3))){
var inst_42208 = (state_42210[(2)]);
var state_42210__$1 = state_42210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42210__$1,inst_42208);
} else {
if((state_val_42211 === (2))){
var inst_42180 = (state_42210[(10)]);
var inst_42182 = cljs.core.count.call(null,inst_42180);
var inst_42183 = (inst_42182 > (0));
var state_42210__$1 = state_42210;
if(cljs.core.truth_(inst_42183)){
var statearr_42219_42243 = state_42210__$1;
(statearr_42219_42243[(1)] = (4));

} else {
var statearr_42220_42244 = state_42210__$1;
(statearr_42220_42244[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42211 === (11))){
var inst_42180 = (state_42210[(10)]);
var inst_42199 = (state_42210[(2)]);
var tmp42218 = inst_42180;
var inst_42180__$1 = tmp42218;
var state_42210__$1 = (function (){var statearr_42221 = state_42210;
(statearr_42221[(10)] = inst_42180__$1);

(statearr_42221[(11)] = inst_42199);

return statearr_42221;
})();
var statearr_42222_42245 = state_42210__$1;
(statearr_42222_42245[(2)] = null);

(statearr_42222_42245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42211 === (9))){
var inst_42190 = (state_42210[(8)]);
var state_42210__$1 = state_42210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42210__$1,(11),out,inst_42190);
} else {
if((state_val_42211 === (5))){
var inst_42204 = cljs.core.async.close_BANG_.call(null,out);
var state_42210__$1 = state_42210;
var statearr_42223_42246 = state_42210__$1;
(statearr_42223_42246[(2)] = inst_42204);

(statearr_42223_42246[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42211 === (10))){
var inst_42202 = (state_42210[(2)]);
var state_42210__$1 = state_42210;
var statearr_42224_42247 = state_42210__$1;
(statearr_42224_42247[(2)] = inst_42202);

(statearr_42224_42247[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42211 === (8))){
var inst_42180 = (state_42210[(10)]);
var inst_42189 = (state_42210[(7)]);
var inst_42191 = (state_42210[(9)]);
var inst_42190 = (state_42210[(8)]);
var inst_42194 = (function (){var cs = inst_42180;
var vec__42185 = inst_42189;
var v = inst_42190;
var c = inst_42191;
return ((function (cs,vec__42185,v,c,inst_42180,inst_42189,inst_42191,inst_42190,state_val_42211,c__40084__auto___42238,out){
return (function (p1__42175_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__42175_SHARP_);
});
;})(cs,vec__42185,v,c,inst_42180,inst_42189,inst_42191,inst_42190,state_val_42211,c__40084__auto___42238,out))
})();
var inst_42195 = cljs.core.filterv.call(null,inst_42194,inst_42180);
var inst_42180__$1 = inst_42195;
var state_42210__$1 = (function (){var statearr_42225 = state_42210;
(statearr_42225[(10)] = inst_42180__$1);

return statearr_42225;
})();
var statearr_42226_42248 = state_42210__$1;
(statearr_42226_42248[(2)] = null);

(statearr_42226_42248[(1)] = (2));


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
});})(c__40084__auto___42238,out))
;
return ((function (switch__39972__auto__,c__40084__auto___42238,out){
return (function() {
var cljs$core$async$state_machine__39973__auto__ = null;
var cljs$core$async$state_machine__39973__auto____0 = (function (){
var statearr_42230 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42230[(0)] = cljs$core$async$state_machine__39973__auto__);

(statearr_42230[(1)] = (1));

return statearr_42230;
});
var cljs$core$async$state_machine__39973__auto____1 = (function (state_42210){
while(true){
var ret_value__39974__auto__ = (function (){try{while(true){
var result__39975__auto__ = switch__39972__auto__.call(null,state_42210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39975__auto__;
}
break;
}
}catch (e42231){if((e42231 instanceof Object)){
var ex__39976__auto__ = e42231;
var statearr_42232_42249 = state_42210;
(statearr_42232_42249[(5)] = ex__39976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42250 = state_42210;
state_42210 = G__42250;
continue;
} else {
return ret_value__39974__auto__;
}
break;
}
});
cljs$core$async$state_machine__39973__auto__ = function(state_42210){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39973__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39973__auto____1.call(this,state_42210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39973__auto____0;
cljs$core$async$state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39973__auto____1;
return cljs$core$async$state_machine__39973__auto__;
})()
;})(switch__39972__auto__,c__40084__auto___42238,out))
})();
var state__40086__auto__ = (function (){var statearr_42233 = f__40085__auto__.call(null);
(statearr_42233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40084__auto___42238);

return statearr_42233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40086__auto__);
});})(c__40084__auto___42238,out))
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
var args42251 = [];
var len__34925__auto___42300 = arguments.length;
var i__34926__auto___42301 = (0);
while(true){
if((i__34926__auto___42301 < len__34925__auto___42300)){
args42251.push((arguments[i__34926__auto___42301]));

var G__42302 = (i__34926__auto___42301 + (1));
i__34926__auto___42301 = G__42302;
continue;
} else {
}
break;
}

var G__42253 = args42251.length;
switch (G__42253) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42251.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40084__auto___42304 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40084__auto___42304,out){
return (function (){
var f__40085__auto__ = (function (){var switch__39972__auto__ = ((function (c__40084__auto___42304,out){
return (function (state_42277){
var state_val_42278 = (state_42277[(1)]);
if((state_val_42278 === (7))){
var inst_42259 = (state_42277[(7)]);
var inst_42259__$1 = (state_42277[(2)]);
var inst_42260 = (inst_42259__$1 == null);
var inst_42261 = cljs.core.not.call(null,inst_42260);
var state_42277__$1 = (function (){var statearr_42279 = state_42277;
(statearr_42279[(7)] = inst_42259__$1);

return statearr_42279;
})();
if(inst_42261){
var statearr_42280_42305 = state_42277__$1;
(statearr_42280_42305[(1)] = (8));

} else {
var statearr_42281_42306 = state_42277__$1;
(statearr_42281_42306[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42278 === (1))){
var inst_42254 = (0);
var state_42277__$1 = (function (){var statearr_42282 = state_42277;
(statearr_42282[(8)] = inst_42254);

return statearr_42282;
})();
var statearr_42283_42307 = state_42277__$1;
(statearr_42283_42307[(2)] = null);

(statearr_42283_42307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42278 === (4))){
var state_42277__$1 = state_42277;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42277__$1,(7),ch);
} else {
if((state_val_42278 === (6))){
var inst_42272 = (state_42277[(2)]);
var state_42277__$1 = state_42277;
var statearr_42284_42308 = state_42277__$1;
(statearr_42284_42308[(2)] = inst_42272);

(statearr_42284_42308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42278 === (3))){
var inst_42274 = (state_42277[(2)]);
var inst_42275 = cljs.core.async.close_BANG_.call(null,out);
var state_42277__$1 = (function (){var statearr_42285 = state_42277;
(statearr_42285[(9)] = inst_42274);

return statearr_42285;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42277__$1,inst_42275);
} else {
if((state_val_42278 === (2))){
var inst_42254 = (state_42277[(8)]);
var inst_42256 = (inst_42254 < n);
var state_42277__$1 = state_42277;
if(cljs.core.truth_(inst_42256)){
var statearr_42286_42309 = state_42277__$1;
(statearr_42286_42309[(1)] = (4));

} else {
var statearr_42287_42310 = state_42277__$1;
(statearr_42287_42310[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42278 === (11))){
var inst_42254 = (state_42277[(8)]);
var inst_42264 = (state_42277[(2)]);
var inst_42265 = (inst_42254 + (1));
var inst_42254__$1 = inst_42265;
var state_42277__$1 = (function (){var statearr_42288 = state_42277;
(statearr_42288[(10)] = inst_42264);

(statearr_42288[(8)] = inst_42254__$1);

return statearr_42288;
})();
var statearr_42289_42311 = state_42277__$1;
(statearr_42289_42311[(2)] = null);

(statearr_42289_42311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42278 === (9))){
var state_42277__$1 = state_42277;
var statearr_42290_42312 = state_42277__$1;
(statearr_42290_42312[(2)] = null);

(statearr_42290_42312[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42278 === (5))){
var state_42277__$1 = state_42277;
var statearr_42291_42313 = state_42277__$1;
(statearr_42291_42313[(2)] = null);

(statearr_42291_42313[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42278 === (10))){
var inst_42269 = (state_42277[(2)]);
var state_42277__$1 = state_42277;
var statearr_42292_42314 = state_42277__$1;
(statearr_42292_42314[(2)] = inst_42269);

(statearr_42292_42314[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42278 === (8))){
var inst_42259 = (state_42277[(7)]);
var state_42277__$1 = state_42277;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42277__$1,(11),out,inst_42259);
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
});})(c__40084__auto___42304,out))
;
return ((function (switch__39972__auto__,c__40084__auto___42304,out){
return (function() {
var cljs$core$async$state_machine__39973__auto__ = null;
var cljs$core$async$state_machine__39973__auto____0 = (function (){
var statearr_42296 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42296[(0)] = cljs$core$async$state_machine__39973__auto__);

(statearr_42296[(1)] = (1));

return statearr_42296;
});
var cljs$core$async$state_machine__39973__auto____1 = (function (state_42277){
while(true){
var ret_value__39974__auto__ = (function (){try{while(true){
var result__39975__auto__ = switch__39972__auto__.call(null,state_42277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39975__auto__;
}
break;
}
}catch (e42297){if((e42297 instanceof Object)){
var ex__39976__auto__ = e42297;
var statearr_42298_42315 = state_42277;
(statearr_42298_42315[(5)] = ex__39976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42316 = state_42277;
state_42277 = G__42316;
continue;
} else {
return ret_value__39974__auto__;
}
break;
}
});
cljs$core$async$state_machine__39973__auto__ = function(state_42277){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39973__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39973__auto____1.call(this,state_42277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39973__auto____0;
cljs$core$async$state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39973__auto____1;
return cljs$core$async$state_machine__39973__auto__;
})()
;})(switch__39972__auto__,c__40084__auto___42304,out))
})();
var state__40086__auto__ = (function (){var statearr_42299 = f__40085__auto__.call(null);
(statearr_42299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40084__auto___42304);

return statearr_42299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40086__auto__);
});})(c__40084__auto___42304,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async42324 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42324 = (function (f,ch,meta42325){
this.f = f;
this.ch = ch;
this.meta42325 = meta42325;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42324.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42326,meta42325__$1){
var self__ = this;
var _42326__$1 = this;
return (new cljs.core.async.t_cljs$core$async42324(self__.f,self__.ch,meta42325__$1));
});

cljs.core.async.t_cljs$core$async42324.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42326){
var self__ = this;
var _42326__$1 = this;
return self__.meta42325;
});

cljs.core.async.t_cljs$core$async42324.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42324.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42324.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42324.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42324.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async42327 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42327 = (function (f,ch,meta42325,_,fn1,meta42328){
this.f = f;
this.ch = ch;
this.meta42325 = meta42325;
this._ = _;
this.fn1 = fn1;
this.meta42328 = meta42328;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_42329,meta42328__$1){
var self__ = this;
var _42329__$1 = this;
return (new cljs.core.async.t_cljs$core$async42327(self__.f,self__.ch,self__.meta42325,self__._,self__.fn1,meta42328__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async42327.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_42329){
var self__ = this;
var _42329__$1 = this;
return self__.meta42328;
});})(___$1))
;

cljs.core.async.t_cljs$core$async42327.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42327.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async42327.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async42327.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__42317_SHARP_){
return f1.call(null,(((p1__42317_SHARP_ == null))?null:self__.f.call(null,p1__42317_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async42327.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42325","meta42325",-1276802413,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async42324","cljs.core.async/t_cljs$core$async42324",-266876017,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta42328","meta42328",1979978247,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async42327.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42327.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42327";

cljs.core.async.t_cljs$core$async42327.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__34423__auto__,writer__34424__auto__,opt__34425__auto__){
return cljs.core._write.call(null,writer__34424__auto__,"cljs.core.async/t_cljs$core$async42327");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async42327 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42327(f__$1,ch__$1,meta42325__$1,___$2,fn1__$1,meta42328){
return (new cljs.core.async.t_cljs$core$async42327(f__$1,ch__$1,meta42325__$1,___$2,fn1__$1,meta42328));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async42327(self__.f,self__.ch,self__.meta42325,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__33800__auto__ = ret;
if(cljs.core.truth_(and__33800__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__33800__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async42324.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42324.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async42324.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42325","meta42325",-1276802413,null)], null);
});

cljs.core.async.t_cljs$core$async42324.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42324.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42324";

cljs.core.async.t_cljs$core$async42324.cljs$lang$ctorPrWriter = (function (this__34423__auto__,writer__34424__auto__,opt__34425__auto__){
return cljs.core._write.call(null,writer__34424__auto__,"cljs.core.async/t_cljs$core$async42324");
});

cljs.core.async.__GT_t_cljs$core$async42324 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42324(f__$1,ch__$1,meta42325){
return (new cljs.core.async.t_cljs$core$async42324(f__$1,ch__$1,meta42325));
});

}

return (new cljs.core.async.t_cljs$core$async42324(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async42333 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42333 = (function (f,ch,meta42334){
this.f = f;
this.ch = ch;
this.meta42334 = meta42334;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42335,meta42334__$1){
var self__ = this;
var _42335__$1 = this;
return (new cljs.core.async.t_cljs$core$async42333(self__.f,self__.ch,meta42334__$1));
});

cljs.core.async.t_cljs$core$async42333.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42335){
var self__ = this;
var _42335__$1 = this;
return self__.meta42334;
});

cljs.core.async.t_cljs$core$async42333.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42333.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42333.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42333.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async42333.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42333.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async42333.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42334","meta42334",1426659903,null)], null);
});

cljs.core.async.t_cljs$core$async42333.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42333.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42333";

cljs.core.async.t_cljs$core$async42333.cljs$lang$ctorPrWriter = (function (this__34423__auto__,writer__34424__auto__,opt__34425__auto__){
return cljs.core._write.call(null,writer__34424__auto__,"cljs.core.async/t_cljs$core$async42333");
});

cljs.core.async.__GT_t_cljs$core$async42333 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async42333(f__$1,ch__$1,meta42334){
return (new cljs.core.async.t_cljs$core$async42333(f__$1,ch__$1,meta42334));
});

}

return (new cljs.core.async.t_cljs$core$async42333(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async42339 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42339 = (function (p,ch,meta42340){
this.p = p;
this.ch = ch;
this.meta42340 = meta42340;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42341,meta42340__$1){
var self__ = this;
var _42341__$1 = this;
return (new cljs.core.async.t_cljs$core$async42339(self__.p,self__.ch,meta42340__$1));
});

cljs.core.async.t_cljs$core$async42339.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42341){
var self__ = this;
var _42341__$1 = this;
return self__.meta42340;
});

cljs.core.async.t_cljs$core$async42339.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42339.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42339.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42339.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42339.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async42339.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42339.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async42339.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42340","meta42340",-1430947786,null)], null);
});

cljs.core.async.t_cljs$core$async42339.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42339.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42339";

cljs.core.async.t_cljs$core$async42339.cljs$lang$ctorPrWriter = (function (this__34423__auto__,writer__34424__auto__,opt__34425__auto__){
return cljs.core._write.call(null,writer__34424__auto__,"cljs.core.async/t_cljs$core$async42339");
});

cljs.core.async.__GT_t_cljs$core$async42339 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async42339(p__$1,ch__$1,meta42340){
return (new cljs.core.async.t_cljs$core$async42339(p__$1,ch__$1,meta42340));
});

}

return (new cljs.core.async.t_cljs$core$async42339(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args42342 = [];
var len__34925__auto___42386 = arguments.length;
var i__34926__auto___42387 = (0);
while(true){
if((i__34926__auto___42387 < len__34925__auto___42386)){
args42342.push((arguments[i__34926__auto___42387]));

var G__42388 = (i__34926__auto___42387 + (1));
i__34926__auto___42387 = G__42388;
continue;
} else {
}
break;
}

var G__42344 = args42342.length;
switch (G__42344) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42342.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40084__auto___42390 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40084__auto___42390,out){
return (function (){
var f__40085__auto__ = (function (){var switch__39972__auto__ = ((function (c__40084__auto___42390,out){
return (function (state_42365){
var state_val_42366 = (state_42365[(1)]);
if((state_val_42366 === (7))){
var inst_42361 = (state_42365[(2)]);
var state_42365__$1 = state_42365;
var statearr_42367_42391 = state_42365__$1;
(statearr_42367_42391[(2)] = inst_42361);

(statearr_42367_42391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42366 === (1))){
var state_42365__$1 = state_42365;
var statearr_42368_42392 = state_42365__$1;
(statearr_42368_42392[(2)] = null);

(statearr_42368_42392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42366 === (4))){
var inst_42347 = (state_42365[(7)]);
var inst_42347__$1 = (state_42365[(2)]);
var inst_42348 = (inst_42347__$1 == null);
var state_42365__$1 = (function (){var statearr_42369 = state_42365;
(statearr_42369[(7)] = inst_42347__$1);

return statearr_42369;
})();
if(cljs.core.truth_(inst_42348)){
var statearr_42370_42393 = state_42365__$1;
(statearr_42370_42393[(1)] = (5));

} else {
var statearr_42371_42394 = state_42365__$1;
(statearr_42371_42394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42366 === (6))){
var inst_42347 = (state_42365[(7)]);
var inst_42352 = p.call(null,inst_42347);
var state_42365__$1 = state_42365;
if(cljs.core.truth_(inst_42352)){
var statearr_42372_42395 = state_42365__$1;
(statearr_42372_42395[(1)] = (8));

} else {
var statearr_42373_42396 = state_42365__$1;
(statearr_42373_42396[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42366 === (3))){
var inst_42363 = (state_42365[(2)]);
var state_42365__$1 = state_42365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42365__$1,inst_42363);
} else {
if((state_val_42366 === (2))){
var state_42365__$1 = state_42365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42365__$1,(4),ch);
} else {
if((state_val_42366 === (11))){
var inst_42355 = (state_42365[(2)]);
var state_42365__$1 = state_42365;
var statearr_42374_42397 = state_42365__$1;
(statearr_42374_42397[(2)] = inst_42355);

(statearr_42374_42397[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42366 === (9))){
var state_42365__$1 = state_42365;
var statearr_42375_42398 = state_42365__$1;
(statearr_42375_42398[(2)] = null);

(statearr_42375_42398[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42366 === (5))){
var inst_42350 = cljs.core.async.close_BANG_.call(null,out);
var state_42365__$1 = state_42365;
var statearr_42376_42399 = state_42365__$1;
(statearr_42376_42399[(2)] = inst_42350);

(statearr_42376_42399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42366 === (10))){
var inst_42358 = (state_42365[(2)]);
var state_42365__$1 = (function (){var statearr_42377 = state_42365;
(statearr_42377[(8)] = inst_42358);

return statearr_42377;
})();
var statearr_42378_42400 = state_42365__$1;
(statearr_42378_42400[(2)] = null);

(statearr_42378_42400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42366 === (8))){
var inst_42347 = (state_42365[(7)]);
var state_42365__$1 = state_42365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42365__$1,(11),out,inst_42347);
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
});})(c__40084__auto___42390,out))
;
return ((function (switch__39972__auto__,c__40084__auto___42390,out){
return (function() {
var cljs$core$async$state_machine__39973__auto__ = null;
var cljs$core$async$state_machine__39973__auto____0 = (function (){
var statearr_42382 = [null,null,null,null,null,null,null,null,null];
(statearr_42382[(0)] = cljs$core$async$state_machine__39973__auto__);

(statearr_42382[(1)] = (1));

return statearr_42382;
});
var cljs$core$async$state_machine__39973__auto____1 = (function (state_42365){
while(true){
var ret_value__39974__auto__ = (function (){try{while(true){
var result__39975__auto__ = switch__39972__auto__.call(null,state_42365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39975__auto__;
}
break;
}
}catch (e42383){if((e42383 instanceof Object)){
var ex__39976__auto__ = e42383;
var statearr_42384_42401 = state_42365;
(statearr_42384_42401[(5)] = ex__39976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42402 = state_42365;
state_42365 = G__42402;
continue;
} else {
return ret_value__39974__auto__;
}
break;
}
});
cljs$core$async$state_machine__39973__auto__ = function(state_42365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39973__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39973__auto____1.call(this,state_42365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39973__auto____0;
cljs$core$async$state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39973__auto____1;
return cljs$core$async$state_machine__39973__auto__;
})()
;})(switch__39972__auto__,c__40084__auto___42390,out))
})();
var state__40086__auto__ = (function (){var statearr_42385 = f__40085__auto__.call(null);
(statearr_42385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40084__auto___42390);

return statearr_42385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40086__auto__);
});})(c__40084__auto___42390,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args42403 = [];
var len__34925__auto___42406 = arguments.length;
var i__34926__auto___42407 = (0);
while(true){
if((i__34926__auto___42407 < len__34925__auto___42406)){
args42403.push((arguments[i__34926__auto___42407]));

var G__42408 = (i__34926__auto___42407 + (1));
i__34926__auto___42407 = G__42408;
continue;
} else {
}
break;
}

var G__42405 = args42403.length;
switch (G__42405) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42403.length)].join('')));

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
var c__40084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40084__auto__){
return (function (){
var f__40085__auto__ = (function (){var switch__39972__auto__ = ((function (c__40084__auto__){
return (function (state_42575){
var state_val_42576 = (state_42575[(1)]);
if((state_val_42576 === (7))){
var inst_42571 = (state_42575[(2)]);
var state_42575__$1 = state_42575;
var statearr_42577_42618 = state_42575__$1;
(statearr_42577_42618[(2)] = inst_42571);

(statearr_42577_42618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42576 === (20))){
var inst_42541 = (state_42575[(7)]);
var inst_42552 = (state_42575[(2)]);
var inst_42553 = cljs.core.next.call(null,inst_42541);
var inst_42527 = inst_42553;
var inst_42528 = null;
var inst_42529 = (0);
var inst_42530 = (0);
var state_42575__$1 = (function (){var statearr_42578 = state_42575;
(statearr_42578[(8)] = inst_42527);

(statearr_42578[(9)] = inst_42528);

(statearr_42578[(10)] = inst_42530);

(statearr_42578[(11)] = inst_42529);

(statearr_42578[(12)] = inst_42552);

return statearr_42578;
})();
var statearr_42579_42619 = state_42575__$1;
(statearr_42579_42619[(2)] = null);

(statearr_42579_42619[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42576 === (1))){
var state_42575__$1 = state_42575;
var statearr_42580_42620 = state_42575__$1;
(statearr_42580_42620[(2)] = null);

(statearr_42580_42620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42576 === (4))){
var inst_42516 = (state_42575[(13)]);
var inst_42516__$1 = (state_42575[(2)]);
var inst_42517 = (inst_42516__$1 == null);
var state_42575__$1 = (function (){var statearr_42581 = state_42575;
(statearr_42581[(13)] = inst_42516__$1);

return statearr_42581;
})();
if(cljs.core.truth_(inst_42517)){
var statearr_42582_42621 = state_42575__$1;
(statearr_42582_42621[(1)] = (5));

} else {
var statearr_42583_42622 = state_42575__$1;
(statearr_42583_42622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42576 === (15))){
var state_42575__$1 = state_42575;
var statearr_42587_42623 = state_42575__$1;
(statearr_42587_42623[(2)] = null);

(statearr_42587_42623[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42576 === (21))){
var state_42575__$1 = state_42575;
var statearr_42588_42624 = state_42575__$1;
(statearr_42588_42624[(2)] = null);

(statearr_42588_42624[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42576 === (13))){
var inst_42527 = (state_42575[(8)]);
var inst_42528 = (state_42575[(9)]);
var inst_42530 = (state_42575[(10)]);
var inst_42529 = (state_42575[(11)]);
var inst_42537 = (state_42575[(2)]);
var inst_42538 = (inst_42530 + (1));
var tmp42584 = inst_42527;
var tmp42585 = inst_42528;
var tmp42586 = inst_42529;
var inst_42527__$1 = tmp42584;
var inst_42528__$1 = tmp42585;
var inst_42529__$1 = tmp42586;
var inst_42530__$1 = inst_42538;
var state_42575__$1 = (function (){var statearr_42589 = state_42575;
(statearr_42589[(8)] = inst_42527__$1);

(statearr_42589[(9)] = inst_42528__$1);

(statearr_42589[(10)] = inst_42530__$1);

(statearr_42589[(14)] = inst_42537);

(statearr_42589[(11)] = inst_42529__$1);

return statearr_42589;
})();
var statearr_42590_42625 = state_42575__$1;
(statearr_42590_42625[(2)] = null);

(statearr_42590_42625[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42576 === (22))){
var state_42575__$1 = state_42575;
var statearr_42591_42626 = state_42575__$1;
(statearr_42591_42626[(2)] = null);

(statearr_42591_42626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42576 === (6))){
var inst_42516 = (state_42575[(13)]);
var inst_42525 = f.call(null,inst_42516);
var inst_42526 = cljs.core.seq.call(null,inst_42525);
var inst_42527 = inst_42526;
var inst_42528 = null;
var inst_42529 = (0);
var inst_42530 = (0);
var state_42575__$1 = (function (){var statearr_42592 = state_42575;
(statearr_42592[(8)] = inst_42527);

(statearr_42592[(9)] = inst_42528);

(statearr_42592[(10)] = inst_42530);

(statearr_42592[(11)] = inst_42529);

return statearr_42592;
})();
var statearr_42593_42627 = state_42575__$1;
(statearr_42593_42627[(2)] = null);

(statearr_42593_42627[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42576 === (17))){
var inst_42541 = (state_42575[(7)]);
var inst_42545 = cljs.core.chunk_first.call(null,inst_42541);
var inst_42546 = cljs.core.chunk_rest.call(null,inst_42541);
var inst_42547 = cljs.core.count.call(null,inst_42545);
var inst_42527 = inst_42546;
var inst_42528 = inst_42545;
var inst_42529 = inst_42547;
var inst_42530 = (0);
var state_42575__$1 = (function (){var statearr_42594 = state_42575;
(statearr_42594[(8)] = inst_42527);

(statearr_42594[(9)] = inst_42528);

(statearr_42594[(10)] = inst_42530);

(statearr_42594[(11)] = inst_42529);

return statearr_42594;
})();
var statearr_42595_42628 = state_42575__$1;
(statearr_42595_42628[(2)] = null);

(statearr_42595_42628[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42576 === (3))){
var inst_42573 = (state_42575[(2)]);
var state_42575__$1 = state_42575;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42575__$1,inst_42573);
} else {
if((state_val_42576 === (12))){
var inst_42561 = (state_42575[(2)]);
var state_42575__$1 = state_42575;
var statearr_42596_42629 = state_42575__$1;
(statearr_42596_42629[(2)] = inst_42561);

(statearr_42596_42629[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42576 === (2))){
var state_42575__$1 = state_42575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42575__$1,(4),in$);
} else {
if((state_val_42576 === (23))){
var inst_42569 = (state_42575[(2)]);
var state_42575__$1 = state_42575;
var statearr_42597_42630 = state_42575__$1;
(statearr_42597_42630[(2)] = inst_42569);

(statearr_42597_42630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42576 === (19))){
var inst_42556 = (state_42575[(2)]);
var state_42575__$1 = state_42575;
var statearr_42598_42631 = state_42575__$1;
(statearr_42598_42631[(2)] = inst_42556);

(statearr_42598_42631[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42576 === (11))){
var inst_42527 = (state_42575[(8)]);
var inst_42541 = (state_42575[(7)]);
var inst_42541__$1 = cljs.core.seq.call(null,inst_42527);
var state_42575__$1 = (function (){var statearr_42599 = state_42575;
(statearr_42599[(7)] = inst_42541__$1);

return statearr_42599;
})();
if(inst_42541__$1){
var statearr_42600_42632 = state_42575__$1;
(statearr_42600_42632[(1)] = (14));

} else {
var statearr_42601_42633 = state_42575__$1;
(statearr_42601_42633[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42576 === (9))){
var inst_42563 = (state_42575[(2)]);
var inst_42564 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_42575__$1 = (function (){var statearr_42602 = state_42575;
(statearr_42602[(15)] = inst_42563);

return statearr_42602;
})();
if(cljs.core.truth_(inst_42564)){
var statearr_42603_42634 = state_42575__$1;
(statearr_42603_42634[(1)] = (21));

} else {
var statearr_42604_42635 = state_42575__$1;
(statearr_42604_42635[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42576 === (5))){
var inst_42519 = cljs.core.async.close_BANG_.call(null,out);
var state_42575__$1 = state_42575;
var statearr_42605_42636 = state_42575__$1;
(statearr_42605_42636[(2)] = inst_42519);

(statearr_42605_42636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42576 === (14))){
var inst_42541 = (state_42575[(7)]);
var inst_42543 = cljs.core.chunked_seq_QMARK_.call(null,inst_42541);
var state_42575__$1 = state_42575;
if(inst_42543){
var statearr_42606_42637 = state_42575__$1;
(statearr_42606_42637[(1)] = (17));

} else {
var statearr_42607_42638 = state_42575__$1;
(statearr_42607_42638[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42576 === (16))){
var inst_42559 = (state_42575[(2)]);
var state_42575__$1 = state_42575;
var statearr_42608_42639 = state_42575__$1;
(statearr_42608_42639[(2)] = inst_42559);

(statearr_42608_42639[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42576 === (10))){
var inst_42528 = (state_42575[(9)]);
var inst_42530 = (state_42575[(10)]);
var inst_42535 = cljs.core._nth.call(null,inst_42528,inst_42530);
var state_42575__$1 = state_42575;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42575__$1,(13),out,inst_42535);
} else {
if((state_val_42576 === (18))){
var inst_42541 = (state_42575[(7)]);
var inst_42550 = cljs.core.first.call(null,inst_42541);
var state_42575__$1 = state_42575;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42575__$1,(20),out,inst_42550);
} else {
if((state_val_42576 === (8))){
var inst_42530 = (state_42575[(10)]);
var inst_42529 = (state_42575[(11)]);
var inst_42532 = (inst_42530 < inst_42529);
var inst_42533 = inst_42532;
var state_42575__$1 = state_42575;
if(cljs.core.truth_(inst_42533)){
var statearr_42609_42640 = state_42575__$1;
(statearr_42609_42640[(1)] = (10));

} else {
var statearr_42610_42641 = state_42575__$1;
(statearr_42610_42641[(1)] = (11));

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
});})(c__40084__auto__))
;
return ((function (switch__39972__auto__,c__40084__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__39973__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__39973__auto____0 = (function (){
var statearr_42614 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42614[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__39973__auto__);

(statearr_42614[(1)] = (1));

return statearr_42614;
});
var cljs$core$async$mapcat_STAR__$_state_machine__39973__auto____1 = (function (state_42575){
while(true){
var ret_value__39974__auto__ = (function (){try{while(true){
var result__39975__auto__ = switch__39972__auto__.call(null,state_42575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39975__auto__;
}
break;
}
}catch (e42615){if((e42615 instanceof Object)){
var ex__39976__auto__ = e42615;
var statearr_42616_42642 = state_42575;
(statearr_42616_42642[(5)] = ex__39976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42643 = state_42575;
state_42575 = G__42643;
continue;
} else {
return ret_value__39974__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__39973__auto__ = function(state_42575){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__39973__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__39973__auto____1.call(this,state_42575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__39973__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__39973__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__39973__auto__;
})()
;})(switch__39972__auto__,c__40084__auto__))
})();
var state__40086__auto__ = (function (){var statearr_42617 = f__40085__auto__.call(null);
(statearr_42617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40084__auto__);

return statearr_42617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40086__auto__);
});})(c__40084__auto__))
);

return c__40084__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args42644 = [];
var len__34925__auto___42647 = arguments.length;
var i__34926__auto___42648 = (0);
while(true){
if((i__34926__auto___42648 < len__34925__auto___42647)){
args42644.push((arguments[i__34926__auto___42648]));

var G__42649 = (i__34926__auto___42648 + (1));
i__34926__auto___42648 = G__42649;
continue;
} else {
}
break;
}

var G__42646 = args42644.length;
switch (G__42646) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42644.length)].join('')));

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
var args42651 = [];
var len__34925__auto___42654 = arguments.length;
var i__34926__auto___42655 = (0);
while(true){
if((i__34926__auto___42655 < len__34925__auto___42654)){
args42651.push((arguments[i__34926__auto___42655]));

var G__42656 = (i__34926__auto___42655 + (1));
i__34926__auto___42655 = G__42656;
continue;
} else {
}
break;
}

var G__42653 = args42651.length;
switch (G__42653) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42651.length)].join('')));

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
var args42658 = [];
var len__34925__auto___42709 = arguments.length;
var i__34926__auto___42710 = (0);
while(true){
if((i__34926__auto___42710 < len__34925__auto___42709)){
args42658.push((arguments[i__34926__auto___42710]));

var G__42711 = (i__34926__auto___42710 + (1));
i__34926__auto___42710 = G__42711;
continue;
} else {
}
break;
}

var G__42660 = args42658.length;
switch (G__42660) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42658.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40084__auto___42713 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40084__auto___42713,out){
return (function (){
var f__40085__auto__ = (function (){var switch__39972__auto__ = ((function (c__40084__auto___42713,out){
return (function (state_42684){
var state_val_42685 = (state_42684[(1)]);
if((state_val_42685 === (7))){
var inst_42679 = (state_42684[(2)]);
var state_42684__$1 = state_42684;
var statearr_42686_42714 = state_42684__$1;
(statearr_42686_42714[(2)] = inst_42679);

(statearr_42686_42714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42685 === (1))){
var inst_42661 = null;
var state_42684__$1 = (function (){var statearr_42687 = state_42684;
(statearr_42687[(7)] = inst_42661);

return statearr_42687;
})();
var statearr_42688_42715 = state_42684__$1;
(statearr_42688_42715[(2)] = null);

(statearr_42688_42715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42685 === (4))){
var inst_42664 = (state_42684[(8)]);
var inst_42664__$1 = (state_42684[(2)]);
var inst_42665 = (inst_42664__$1 == null);
var inst_42666 = cljs.core.not.call(null,inst_42665);
var state_42684__$1 = (function (){var statearr_42689 = state_42684;
(statearr_42689[(8)] = inst_42664__$1);

return statearr_42689;
})();
if(inst_42666){
var statearr_42690_42716 = state_42684__$1;
(statearr_42690_42716[(1)] = (5));

} else {
var statearr_42691_42717 = state_42684__$1;
(statearr_42691_42717[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42685 === (6))){
var state_42684__$1 = state_42684;
var statearr_42692_42718 = state_42684__$1;
(statearr_42692_42718[(2)] = null);

(statearr_42692_42718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42685 === (3))){
var inst_42681 = (state_42684[(2)]);
var inst_42682 = cljs.core.async.close_BANG_.call(null,out);
var state_42684__$1 = (function (){var statearr_42693 = state_42684;
(statearr_42693[(9)] = inst_42681);

return statearr_42693;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42684__$1,inst_42682);
} else {
if((state_val_42685 === (2))){
var state_42684__$1 = state_42684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42684__$1,(4),ch);
} else {
if((state_val_42685 === (11))){
var inst_42664 = (state_42684[(8)]);
var inst_42673 = (state_42684[(2)]);
var inst_42661 = inst_42664;
var state_42684__$1 = (function (){var statearr_42694 = state_42684;
(statearr_42694[(10)] = inst_42673);

(statearr_42694[(7)] = inst_42661);

return statearr_42694;
})();
var statearr_42695_42719 = state_42684__$1;
(statearr_42695_42719[(2)] = null);

(statearr_42695_42719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42685 === (9))){
var inst_42664 = (state_42684[(8)]);
var state_42684__$1 = state_42684;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42684__$1,(11),out,inst_42664);
} else {
if((state_val_42685 === (5))){
var inst_42664 = (state_42684[(8)]);
var inst_42661 = (state_42684[(7)]);
var inst_42668 = cljs.core._EQ_.call(null,inst_42664,inst_42661);
var state_42684__$1 = state_42684;
if(inst_42668){
var statearr_42697_42720 = state_42684__$1;
(statearr_42697_42720[(1)] = (8));

} else {
var statearr_42698_42721 = state_42684__$1;
(statearr_42698_42721[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42685 === (10))){
var inst_42676 = (state_42684[(2)]);
var state_42684__$1 = state_42684;
var statearr_42699_42722 = state_42684__$1;
(statearr_42699_42722[(2)] = inst_42676);

(statearr_42699_42722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42685 === (8))){
var inst_42661 = (state_42684[(7)]);
var tmp42696 = inst_42661;
var inst_42661__$1 = tmp42696;
var state_42684__$1 = (function (){var statearr_42700 = state_42684;
(statearr_42700[(7)] = inst_42661__$1);

return statearr_42700;
})();
var statearr_42701_42723 = state_42684__$1;
(statearr_42701_42723[(2)] = null);

(statearr_42701_42723[(1)] = (2));


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
});})(c__40084__auto___42713,out))
;
return ((function (switch__39972__auto__,c__40084__auto___42713,out){
return (function() {
var cljs$core$async$state_machine__39973__auto__ = null;
var cljs$core$async$state_machine__39973__auto____0 = (function (){
var statearr_42705 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42705[(0)] = cljs$core$async$state_machine__39973__auto__);

(statearr_42705[(1)] = (1));

return statearr_42705;
});
var cljs$core$async$state_machine__39973__auto____1 = (function (state_42684){
while(true){
var ret_value__39974__auto__ = (function (){try{while(true){
var result__39975__auto__ = switch__39972__auto__.call(null,state_42684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39975__auto__;
}
break;
}
}catch (e42706){if((e42706 instanceof Object)){
var ex__39976__auto__ = e42706;
var statearr_42707_42724 = state_42684;
(statearr_42707_42724[(5)] = ex__39976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42725 = state_42684;
state_42684 = G__42725;
continue;
} else {
return ret_value__39974__auto__;
}
break;
}
});
cljs$core$async$state_machine__39973__auto__ = function(state_42684){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39973__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39973__auto____1.call(this,state_42684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39973__auto____0;
cljs$core$async$state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39973__auto____1;
return cljs$core$async$state_machine__39973__auto__;
})()
;})(switch__39972__auto__,c__40084__auto___42713,out))
})();
var state__40086__auto__ = (function (){var statearr_42708 = f__40085__auto__.call(null);
(statearr_42708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40084__auto___42713);

return statearr_42708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40086__auto__);
});})(c__40084__auto___42713,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args42726 = [];
var len__34925__auto___42796 = arguments.length;
var i__34926__auto___42797 = (0);
while(true){
if((i__34926__auto___42797 < len__34925__auto___42796)){
args42726.push((arguments[i__34926__auto___42797]));

var G__42798 = (i__34926__auto___42797 + (1));
i__34926__auto___42797 = G__42798;
continue;
} else {
}
break;
}

var G__42728 = args42726.length;
switch (G__42728) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42726.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40084__auto___42800 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40084__auto___42800,out){
return (function (){
var f__40085__auto__ = (function (){var switch__39972__auto__ = ((function (c__40084__auto___42800,out){
return (function (state_42766){
var state_val_42767 = (state_42766[(1)]);
if((state_val_42767 === (7))){
var inst_42762 = (state_42766[(2)]);
var state_42766__$1 = state_42766;
var statearr_42768_42801 = state_42766__$1;
(statearr_42768_42801[(2)] = inst_42762);

(statearr_42768_42801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42767 === (1))){
var inst_42729 = (new Array(n));
var inst_42730 = inst_42729;
var inst_42731 = (0);
var state_42766__$1 = (function (){var statearr_42769 = state_42766;
(statearr_42769[(7)] = inst_42730);

(statearr_42769[(8)] = inst_42731);

return statearr_42769;
})();
var statearr_42770_42802 = state_42766__$1;
(statearr_42770_42802[(2)] = null);

(statearr_42770_42802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42767 === (4))){
var inst_42734 = (state_42766[(9)]);
var inst_42734__$1 = (state_42766[(2)]);
var inst_42735 = (inst_42734__$1 == null);
var inst_42736 = cljs.core.not.call(null,inst_42735);
var state_42766__$1 = (function (){var statearr_42771 = state_42766;
(statearr_42771[(9)] = inst_42734__$1);

return statearr_42771;
})();
if(inst_42736){
var statearr_42772_42803 = state_42766__$1;
(statearr_42772_42803[(1)] = (5));

} else {
var statearr_42773_42804 = state_42766__$1;
(statearr_42773_42804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42767 === (15))){
var inst_42756 = (state_42766[(2)]);
var state_42766__$1 = state_42766;
var statearr_42774_42805 = state_42766__$1;
(statearr_42774_42805[(2)] = inst_42756);

(statearr_42774_42805[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42767 === (13))){
var state_42766__$1 = state_42766;
var statearr_42775_42806 = state_42766__$1;
(statearr_42775_42806[(2)] = null);

(statearr_42775_42806[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42767 === (6))){
var inst_42731 = (state_42766[(8)]);
var inst_42752 = (inst_42731 > (0));
var state_42766__$1 = state_42766;
if(cljs.core.truth_(inst_42752)){
var statearr_42776_42807 = state_42766__$1;
(statearr_42776_42807[(1)] = (12));

} else {
var statearr_42777_42808 = state_42766__$1;
(statearr_42777_42808[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42767 === (3))){
var inst_42764 = (state_42766[(2)]);
var state_42766__$1 = state_42766;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42766__$1,inst_42764);
} else {
if((state_val_42767 === (12))){
var inst_42730 = (state_42766[(7)]);
var inst_42754 = cljs.core.vec.call(null,inst_42730);
var state_42766__$1 = state_42766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42766__$1,(15),out,inst_42754);
} else {
if((state_val_42767 === (2))){
var state_42766__$1 = state_42766;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42766__$1,(4),ch);
} else {
if((state_val_42767 === (11))){
var inst_42746 = (state_42766[(2)]);
var inst_42747 = (new Array(n));
var inst_42730 = inst_42747;
var inst_42731 = (0);
var state_42766__$1 = (function (){var statearr_42778 = state_42766;
(statearr_42778[(7)] = inst_42730);

(statearr_42778[(10)] = inst_42746);

(statearr_42778[(8)] = inst_42731);

return statearr_42778;
})();
var statearr_42779_42809 = state_42766__$1;
(statearr_42779_42809[(2)] = null);

(statearr_42779_42809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42767 === (9))){
var inst_42730 = (state_42766[(7)]);
var inst_42744 = cljs.core.vec.call(null,inst_42730);
var state_42766__$1 = state_42766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42766__$1,(11),out,inst_42744);
} else {
if((state_val_42767 === (5))){
var inst_42730 = (state_42766[(7)]);
var inst_42739 = (state_42766[(11)]);
var inst_42731 = (state_42766[(8)]);
var inst_42734 = (state_42766[(9)]);
var inst_42738 = (inst_42730[inst_42731] = inst_42734);
var inst_42739__$1 = (inst_42731 + (1));
var inst_42740 = (inst_42739__$1 < n);
var state_42766__$1 = (function (){var statearr_42780 = state_42766;
(statearr_42780[(11)] = inst_42739__$1);

(statearr_42780[(12)] = inst_42738);

return statearr_42780;
})();
if(cljs.core.truth_(inst_42740)){
var statearr_42781_42810 = state_42766__$1;
(statearr_42781_42810[(1)] = (8));

} else {
var statearr_42782_42811 = state_42766__$1;
(statearr_42782_42811[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42767 === (14))){
var inst_42759 = (state_42766[(2)]);
var inst_42760 = cljs.core.async.close_BANG_.call(null,out);
var state_42766__$1 = (function (){var statearr_42784 = state_42766;
(statearr_42784[(13)] = inst_42759);

return statearr_42784;
})();
var statearr_42785_42812 = state_42766__$1;
(statearr_42785_42812[(2)] = inst_42760);

(statearr_42785_42812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42767 === (10))){
var inst_42750 = (state_42766[(2)]);
var state_42766__$1 = state_42766;
var statearr_42786_42813 = state_42766__$1;
(statearr_42786_42813[(2)] = inst_42750);

(statearr_42786_42813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42767 === (8))){
var inst_42730 = (state_42766[(7)]);
var inst_42739 = (state_42766[(11)]);
var tmp42783 = inst_42730;
var inst_42730__$1 = tmp42783;
var inst_42731 = inst_42739;
var state_42766__$1 = (function (){var statearr_42787 = state_42766;
(statearr_42787[(7)] = inst_42730__$1);

(statearr_42787[(8)] = inst_42731);

return statearr_42787;
})();
var statearr_42788_42814 = state_42766__$1;
(statearr_42788_42814[(2)] = null);

(statearr_42788_42814[(1)] = (2));


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
});})(c__40084__auto___42800,out))
;
return ((function (switch__39972__auto__,c__40084__auto___42800,out){
return (function() {
var cljs$core$async$state_machine__39973__auto__ = null;
var cljs$core$async$state_machine__39973__auto____0 = (function (){
var statearr_42792 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42792[(0)] = cljs$core$async$state_machine__39973__auto__);

(statearr_42792[(1)] = (1));

return statearr_42792;
});
var cljs$core$async$state_machine__39973__auto____1 = (function (state_42766){
while(true){
var ret_value__39974__auto__ = (function (){try{while(true){
var result__39975__auto__ = switch__39972__auto__.call(null,state_42766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39975__auto__;
}
break;
}
}catch (e42793){if((e42793 instanceof Object)){
var ex__39976__auto__ = e42793;
var statearr_42794_42815 = state_42766;
(statearr_42794_42815[(5)] = ex__39976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42816 = state_42766;
state_42766 = G__42816;
continue;
} else {
return ret_value__39974__auto__;
}
break;
}
});
cljs$core$async$state_machine__39973__auto__ = function(state_42766){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39973__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39973__auto____1.call(this,state_42766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39973__auto____0;
cljs$core$async$state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39973__auto____1;
return cljs$core$async$state_machine__39973__auto__;
})()
;})(switch__39972__auto__,c__40084__auto___42800,out))
})();
var state__40086__auto__ = (function (){var statearr_42795 = f__40085__auto__.call(null);
(statearr_42795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40084__auto___42800);

return statearr_42795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40086__auto__);
});})(c__40084__auto___42800,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args42817 = [];
var len__34925__auto___42891 = arguments.length;
var i__34926__auto___42892 = (0);
while(true){
if((i__34926__auto___42892 < len__34925__auto___42891)){
args42817.push((arguments[i__34926__auto___42892]));

var G__42893 = (i__34926__auto___42892 + (1));
i__34926__auto___42892 = G__42893;
continue;
} else {
}
break;
}

var G__42819 = args42817.length;
switch (G__42819) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42817.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40084__auto___42895 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40084__auto___42895,out){
return (function (){
var f__40085__auto__ = (function (){var switch__39972__auto__ = ((function (c__40084__auto___42895,out){
return (function (state_42861){
var state_val_42862 = (state_42861[(1)]);
if((state_val_42862 === (7))){
var inst_42857 = (state_42861[(2)]);
var state_42861__$1 = state_42861;
var statearr_42863_42896 = state_42861__$1;
(statearr_42863_42896[(2)] = inst_42857);

(statearr_42863_42896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42862 === (1))){
var inst_42820 = [];
var inst_42821 = inst_42820;
var inst_42822 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_42861__$1 = (function (){var statearr_42864 = state_42861;
(statearr_42864[(7)] = inst_42822);

(statearr_42864[(8)] = inst_42821);

return statearr_42864;
})();
var statearr_42865_42897 = state_42861__$1;
(statearr_42865_42897[(2)] = null);

(statearr_42865_42897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42862 === (4))){
var inst_42825 = (state_42861[(9)]);
var inst_42825__$1 = (state_42861[(2)]);
var inst_42826 = (inst_42825__$1 == null);
var inst_42827 = cljs.core.not.call(null,inst_42826);
var state_42861__$1 = (function (){var statearr_42866 = state_42861;
(statearr_42866[(9)] = inst_42825__$1);

return statearr_42866;
})();
if(inst_42827){
var statearr_42867_42898 = state_42861__$1;
(statearr_42867_42898[(1)] = (5));

} else {
var statearr_42868_42899 = state_42861__$1;
(statearr_42868_42899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42862 === (15))){
var inst_42851 = (state_42861[(2)]);
var state_42861__$1 = state_42861;
var statearr_42869_42900 = state_42861__$1;
(statearr_42869_42900[(2)] = inst_42851);

(statearr_42869_42900[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42862 === (13))){
var state_42861__$1 = state_42861;
var statearr_42870_42901 = state_42861__$1;
(statearr_42870_42901[(2)] = null);

(statearr_42870_42901[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42862 === (6))){
var inst_42821 = (state_42861[(8)]);
var inst_42846 = inst_42821.length;
var inst_42847 = (inst_42846 > (0));
var state_42861__$1 = state_42861;
if(cljs.core.truth_(inst_42847)){
var statearr_42871_42902 = state_42861__$1;
(statearr_42871_42902[(1)] = (12));

} else {
var statearr_42872_42903 = state_42861__$1;
(statearr_42872_42903[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42862 === (3))){
var inst_42859 = (state_42861[(2)]);
var state_42861__$1 = state_42861;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42861__$1,inst_42859);
} else {
if((state_val_42862 === (12))){
var inst_42821 = (state_42861[(8)]);
var inst_42849 = cljs.core.vec.call(null,inst_42821);
var state_42861__$1 = state_42861;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42861__$1,(15),out,inst_42849);
} else {
if((state_val_42862 === (2))){
var state_42861__$1 = state_42861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42861__$1,(4),ch);
} else {
if((state_val_42862 === (11))){
var inst_42825 = (state_42861[(9)]);
var inst_42829 = (state_42861[(10)]);
var inst_42839 = (state_42861[(2)]);
var inst_42840 = [];
var inst_42841 = inst_42840.push(inst_42825);
var inst_42821 = inst_42840;
var inst_42822 = inst_42829;
var state_42861__$1 = (function (){var statearr_42873 = state_42861;
(statearr_42873[(11)] = inst_42839);

(statearr_42873[(12)] = inst_42841);

(statearr_42873[(7)] = inst_42822);

(statearr_42873[(8)] = inst_42821);

return statearr_42873;
})();
var statearr_42874_42904 = state_42861__$1;
(statearr_42874_42904[(2)] = null);

(statearr_42874_42904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42862 === (9))){
var inst_42821 = (state_42861[(8)]);
var inst_42837 = cljs.core.vec.call(null,inst_42821);
var state_42861__$1 = state_42861;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42861__$1,(11),out,inst_42837);
} else {
if((state_val_42862 === (5))){
var inst_42822 = (state_42861[(7)]);
var inst_42825 = (state_42861[(9)]);
var inst_42829 = (state_42861[(10)]);
var inst_42829__$1 = f.call(null,inst_42825);
var inst_42830 = cljs.core._EQ_.call(null,inst_42829__$1,inst_42822);
var inst_42831 = cljs.core.keyword_identical_QMARK_.call(null,inst_42822,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_42832 = (inst_42830) || (inst_42831);
var state_42861__$1 = (function (){var statearr_42875 = state_42861;
(statearr_42875[(10)] = inst_42829__$1);

return statearr_42875;
})();
if(cljs.core.truth_(inst_42832)){
var statearr_42876_42905 = state_42861__$1;
(statearr_42876_42905[(1)] = (8));

} else {
var statearr_42877_42906 = state_42861__$1;
(statearr_42877_42906[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42862 === (14))){
var inst_42854 = (state_42861[(2)]);
var inst_42855 = cljs.core.async.close_BANG_.call(null,out);
var state_42861__$1 = (function (){var statearr_42879 = state_42861;
(statearr_42879[(13)] = inst_42854);

return statearr_42879;
})();
var statearr_42880_42907 = state_42861__$1;
(statearr_42880_42907[(2)] = inst_42855);

(statearr_42880_42907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42862 === (10))){
var inst_42844 = (state_42861[(2)]);
var state_42861__$1 = state_42861;
var statearr_42881_42908 = state_42861__$1;
(statearr_42881_42908[(2)] = inst_42844);

(statearr_42881_42908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42862 === (8))){
var inst_42825 = (state_42861[(9)]);
var inst_42821 = (state_42861[(8)]);
var inst_42829 = (state_42861[(10)]);
var inst_42834 = inst_42821.push(inst_42825);
var tmp42878 = inst_42821;
var inst_42821__$1 = tmp42878;
var inst_42822 = inst_42829;
var state_42861__$1 = (function (){var statearr_42882 = state_42861;
(statearr_42882[(14)] = inst_42834);

(statearr_42882[(7)] = inst_42822);

(statearr_42882[(8)] = inst_42821__$1);

return statearr_42882;
})();
var statearr_42883_42909 = state_42861__$1;
(statearr_42883_42909[(2)] = null);

(statearr_42883_42909[(1)] = (2));


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
});})(c__40084__auto___42895,out))
;
return ((function (switch__39972__auto__,c__40084__auto___42895,out){
return (function() {
var cljs$core$async$state_machine__39973__auto__ = null;
var cljs$core$async$state_machine__39973__auto____0 = (function (){
var statearr_42887 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42887[(0)] = cljs$core$async$state_machine__39973__auto__);

(statearr_42887[(1)] = (1));

return statearr_42887;
});
var cljs$core$async$state_machine__39973__auto____1 = (function (state_42861){
while(true){
var ret_value__39974__auto__ = (function (){try{while(true){
var result__39975__auto__ = switch__39972__auto__.call(null,state_42861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39975__auto__;
}
break;
}
}catch (e42888){if((e42888 instanceof Object)){
var ex__39976__auto__ = e42888;
var statearr_42889_42910 = state_42861;
(statearr_42889_42910[(5)] = ex__39976__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39974__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42911 = state_42861;
state_42861 = G__42911;
continue;
} else {
return ret_value__39974__auto__;
}
break;
}
});
cljs$core$async$state_machine__39973__auto__ = function(state_42861){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39973__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39973__auto____1.call(this,state_42861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39973__auto____0;
cljs$core$async$state_machine__39973__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39973__auto____1;
return cljs$core$async$state_machine__39973__auto__;
})()
;})(switch__39972__auto__,c__40084__auto___42895,out))
})();
var state__40086__auto__ = (function (){var statearr_42890 = f__40085__auto__.call(null);
(statearr_42890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40084__auto___42895);

return statearr_42890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40086__auto__);
});})(c__40084__auto___42895,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1526470083820