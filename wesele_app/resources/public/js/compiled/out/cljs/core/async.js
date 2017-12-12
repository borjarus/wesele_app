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
var args13477 = [];
var len__7878__auto___13483 = arguments.length;
var i__7879__auto___13484 = (0);
while(true){
if((i__7879__auto___13484 < len__7878__auto___13483)){
args13477.push((arguments[i__7879__auto___13484]));

var G__13485 = (i__7879__auto___13484 + (1));
i__7879__auto___13484 = G__13485;
continue;
} else {
}
break;
}

var G__13479 = args13477.length;
switch (G__13479) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13477.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async13480 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13480 = (function (f,blockable,meta13481){
this.f = f;
this.blockable = blockable;
this.meta13481 = meta13481;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13482,meta13481__$1){
var self__ = this;
var _13482__$1 = this;
return (new cljs.core.async.t_cljs$core$async13480(self__.f,self__.blockable,meta13481__$1));
});

cljs.core.async.t_cljs$core$async13480.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13482){
var self__ = this;
var _13482__$1 = this;
return self__.meta13481;
});

cljs.core.async.t_cljs$core$async13480.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13480.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13480.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async13480.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async13480.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13481","meta13481",-68726779,null)], null);
});

cljs.core.async.t_cljs$core$async13480.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13480.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13480";

cljs.core.async.t_cljs$core$async13480.cljs$lang$ctorPrWriter = (function (this__7376__auto__,writer__7377__auto__,opt__7378__auto__){
return cljs.core._write.call(null,writer__7377__auto__,"cljs.core.async/t_cljs$core$async13480");
});

cljs.core.async.__GT_t_cljs$core$async13480 = (function cljs$core$async$__GT_t_cljs$core$async13480(f__$1,blockable__$1,meta13481){
return (new cljs.core.async.t_cljs$core$async13480(f__$1,blockable__$1,meta13481));
});

}

return (new cljs.core.async.t_cljs$core$async13480(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args13489 = [];
var len__7878__auto___13492 = arguments.length;
var i__7879__auto___13493 = (0);
while(true){
if((i__7879__auto___13493 < len__7878__auto___13492)){
args13489.push((arguments[i__7879__auto___13493]));

var G__13494 = (i__7879__auto___13493 + (1));
i__7879__auto___13493 = G__13494;
continue;
} else {
}
break;
}

var G__13491 = args13489.length;
switch (G__13491) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13489.length)].join('')));

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
var args13496 = [];
var len__7878__auto___13499 = arguments.length;
var i__7879__auto___13500 = (0);
while(true){
if((i__7879__auto___13500 < len__7878__auto___13499)){
args13496.push((arguments[i__7879__auto___13500]));

var G__13501 = (i__7879__auto___13500 + (1));
i__7879__auto___13500 = G__13501;
continue;
} else {
}
break;
}

var G__13498 = args13496.length;
switch (G__13498) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13496.length)].join('')));

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
var args13503 = [];
var len__7878__auto___13506 = arguments.length;
var i__7879__auto___13507 = (0);
while(true){
if((i__7879__auto___13507 < len__7878__auto___13506)){
args13503.push((arguments[i__7879__auto___13507]));

var G__13508 = (i__7879__auto___13507 + (1));
i__7879__auto___13507 = G__13508;
continue;
} else {
}
break;
}

var G__13505 = args13503.length;
switch (G__13505) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13503.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_13510 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_13510);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_13510,ret){
return (function (){
return fn1.call(null,val_13510);
});})(val_13510,ret))
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
var args13511 = [];
var len__7878__auto___13514 = arguments.length;
var i__7879__auto___13515 = (0);
while(true){
if((i__7879__auto___13515 < len__7878__auto___13514)){
args13511.push((arguments[i__7879__auto___13515]));

var G__13516 = (i__7879__auto___13515 + (1));
i__7879__auto___13515 = G__13516;
continue;
} else {
}
break;
}

var G__13513 = args13511.length;
switch (G__13513) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13511.length)].join('')));

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
var n__7688__auto___13518 = n;
var x_13519 = (0);
while(true){
if((x_13519 < n__7688__auto___13518)){
(a[x_13519] = (0));

var G__13520 = (x_13519 + (1));
x_13519 = G__13520;
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

var G__13521 = (i + (1));
i = G__13521;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async13525 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13525 = (function (flag,meta13526){
this.flag = flag;
this.meta13526 = meta13526;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13527,meta13526__$1){
var self__ = this;
var _13527__$1 = this;
return (new cljs.core.async.t_cljs$core$async13525(self__.flag,meta13526__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async13525.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13527){
var self__ = this;
var _13527__$1 = this;
return self__.meta13526;
});})(flag))
;

cljs.core.async.t_cljs$core$async13525.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13525.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async13525.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13525.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13525.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13526","meta13526",668774298,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async13525.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13525.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13525";

cljs.core.async.t_cljs$core$async13525.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7376__auto__,writer__7377__auto__,opt__7378__auto__){
return cljs.core._write.call(null,writer__7377__auto__,"cljs.core.async/t_cljs$core$async13525");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async13525 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async13525(flag__$1,meta13526){
return (new cljs.core.async.t_cljs$core$async13525(flag__$1,meta13526));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async13525(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async13531 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13531 = (function (flag,cb,meta13532){
this.flag = flag;
this.cb = cb;
this.meta13532 = meta13532;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13533,meta13532__$1){
var self__ = this;
var _13533__$1 = this;
return (new cljs.core.async.t_cljs$core$async13531(self__.flag,self__.cb,meta13532__$1));
});

cljs.core.async.t_cljs$core$async13531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13533){
var self__ = this;
var _13533__$1 = this;
return self__.meta13532;
});

cljs.core.async.t_cljs$core$async13531.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13531.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async13531.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13531.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async13531.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13532","meta13532",929245815,null)], null);
});

cljs.core.async.t_cljs$core$async13531.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13531.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13531";

cljs.core.async.t_cljs$core$async13531.cljs$lang$ctorPrWriter = (function (this__7376__auto__,writer__7377__auto__,opt__7378__auto__){
return cljs.core._write.call(null,writer__7377__auto__,"cljs.core.async/t_cljs$core$async13531");
});

cljs.core.async.__GT_t_cljs$core$async13531 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async13531(flag__$1,cb__$1,meta13532){
return (new cljs.core.async.t_cljs$core$async13531(flag__$1,cb__$1,meta13532));
});

}

return (new cljs.core.async.t_cljs$core$async13531(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__13534_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13534_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13535_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13535_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6765__auto__ = wport;
if(cljs.core.truth_(or__6765__auto__)){
return or__6765__auto__;
} else {
return port;
}
})()], null));
} else {
var G__13536 = (i + (1));
i = G__13536;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6765__auto__ = ret;
if(cljs.core.truth_(or__6765__auto__)){
return or__6765__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6753__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6753__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6753__auto__;
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
var args__7885__auto__ = [];
var len__7878__auto___13542 = arguments.length;
var i__7879__auto___13543 = (0);
while(true){
if((i__7879__auto___13543 < len__7878__auto___13542)){
args__7885__auto__.push((arguments[i__7879__auto___13543]));

var G__13544 = (i__7879__auto___13543 + (1));
i__7879__auto___13543 = G__13544;
continue;
} else {
}
break;
}

var argseq__7886__auto__ = ((((1) < args__7885__auto__.length))?(new cljs.core.IndexedSeq(args__7885__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7886__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13539){
var map__13540 = p__13539;
var map__13540__$1 = ((((!((map__13540 == null)))?((((map__13540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13540.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13540):map__13540);
var opts = map__13540__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13537){
var G__13538 = cljs.core.first.call(null,seq13537);
var seq13537__$1 = cljs.core.next.call(null,seq13537);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13538,seq13537__$1);
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
var args13545 = [];
var len__7878__auto___13595 = arguments.length;
var i__7879__auto___13596 = (0);
while(true){
if((i__7879__auto___13596 < len__7878__auto___13595)){
args13545.push((arguments[i__7879__auto___13596]));

var G__13597 = (i__7879__auto___13596 + (1));
i__7879__auto___13596 = G__13597;
continue;
} else {
}
break;
}

var G__13547 = args13545.length;
switch (G__13547) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13545.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13432__auto___13599 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13432__auto___13599){
return (function (){
var f__13433__auto__ = (function (){var switch__13320__auto__ = ((function (c__13432__auto___13599){
return (function (state_13571){
var state_val_13572 = (state_13571[(1)]);
if((state_val_13572 === (7))){
var inst_13567 = (state_13571[(2)]);
var state_13571__$1 = state_13571;
var statearr_13573_13600 = state_13571__$1;
(statearr_13573_13600[(2)] = inst_13567);

(statearr_13573_13600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13572 === (1))){
var state_13571__$1 = state_13571;
var statearr_13574_13601 = state_13571__$1;
(statearr_13574_13601[(2)] = null);

(statearr_13574_13601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13572 === (4))){
var inst_13550 = (state_13571[(7)]);
var inst_13550__$1 = (state_13571[(2)]);
var inst_13551 = (inst_13550__$1 == null);
var state_13571__$1 = (function (){var statearr_13575 = state_13571;
(statearr_13575[(7)] = inst_13550__$1);

return statearr_13575;
})();
if(cljs.core.truth_(inst_13551)){
var statearr_13576_13602 = state_13571__$1;
(statearr_13576_13602[(1)] = (5));

} else {
var statearr_13577_13603 = state_13571__$1;
(statearr_13577_13603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13572 === (13))){
var state_13571__$1 = state_13571;
var statearr_13578_13604 = state_13571__$1;
(statearr_13578_13604[(2)] = null);

(statearr_13578_13604[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13572 === (6))){
var inst_13550 = (state_13571[(7)]);
var state_13571__$1 = state_13571;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13571__$1,(11),to,inst_13550);
} else {
if((state_val_13572 === (3))){
var inst_13569 = (state_13571[(2)]);
var state_13571__$1 = state_13571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13571__$1,inst_13569);
} else {
if((state_val_13572 === (12))){
var state_13571__$1 = state_13571;
var statearr_13579_13605 = state_13571__$1;
(statearr_13579_13605[(2)] = null);

(statearr_13579_13605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13572 === (2))){
var state_13571__$1 = state_13571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13571__$1,(4),from);
} else {
if((state_val_13572 === (11))){
var inst_13560 = (state_13571[(2)]);
var state_13571__$1 = state_13571;
if(cljs.core.truth_(inst_13560)){
var statearr_13580_13606 = state_13571__$1;
(statearr_13580_13606[(1)] = (12));

} else {
var statearr_13581_13607 = state_13571__$1;
(statearr_13581_13607[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13572 === (9))){
var state_13571__$1 = state_13571;
var statearr_13582_13608 = state_13571__$1;
(statearr_13582_13608[(2)] = null);

(statearr_13582_13608[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13572 === (5))){
var state_13571__$1 = state_13571;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13583_13609 = state_13571__$1;
(statearr_13583_13609[(1)] = (8));

} else {
var statearr_13584_13610 = state_13571__$1;
(statearr_13584_13610[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13572 === (14))){
var inst_13565 = (state_13571[(2)]);
var state_13571__$1 = state_13571;
var statearr_13585_13611 = state_13571__$1;
(statearr_13585_13611[(2)] = inst_13565);

(statearr_13585_13611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13572 === (10))){
var inst_13557 = (state_13571[(2)]);
var state_13571__$1 = state_13571;
var statearr_13586_13612 = state_13571__$1;
(statearr_13586_13612[(2)] = inst_13557);

(statearr_13586_13612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13572 === (8))){
var inst_13554 = cljs.core.async.close_BANG_.call(null,to);
var state_13571__$1 = state_13571;
var statearr_13587_13613 = state_13571__$1;
(statearr_13587_13613[(2)] = inst_13554);

(statearr_13587_13613[(1)] = (10));


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
});})(c__13432__auto___13599))
;
return ((function (switch__13320__auto__,c__13432__auto___13599){
return (function() {
var cljs$core$async$state_machine__13321__auto__ = null;
var cljs$core$async$state_machine__13321__auto____0 = (function (){
var statearr_13591 = [null,null,null,null,null,null,null,null];
(statearr_13591[(0)] = cljs$core$async$state_machine__13321__auto__);

(statearr_13591[(1)] = (1));

return statearr_13591;
});
var cljs$core$async$state_machine__13321__auto____1 = (function (state_13571){
while(true){
var ret_value__13322__auto__ = (function (){try{while(true){
var result__13323__auto__ = switch__13320__auto__.call(null,state_13571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13323__auto__;
}
break;
}
}catch (e13592){if((e13592 instanceof Object)){
var ex__13324__auto__ = e13592;
var statearr_13593_13614 = state_13571;
(statearr_13593_13614[(5)] = ex__13324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13615 = state_13571;
state_13571 = G__13615;
continue;
} else {
return ret_value__13322__auto__;
}
break;
}
});
cljs$core$async$state_machine__13321__auto__ = function(state_13571){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13321__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13321__auto____1.call(this,state_13571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13321__auto____0;
cljs$core$async$state_machine__13321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13321__auto____1;
return cljs$core$async$state_machine__13321__auto__;
})()
;})(switch__13320__auto__,c__13432__auto___13599))
})();
var state__13434__auto__ = (function (){var statearr_13594 = f__13433__auto__.call(null);
(statearr_13594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13432__auto___13599);

return statearr_13594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13434__auto__);
});})(c__13432__auto___13599))
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
return (function (p__13803){
var vec__13804 = p__13803;
var v = cljs.core.nth.call(null,vec__13804,(0),null);
var p = cljs.core.nth.call(null,vec__13804,(1),null);
var job = vec__13804;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__13432__auto___13990 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13432__auto___13990,res,vec__13804,v,p,job,jobs,results){
return (function (){
var f__13433__auto__ = (function (){var switch__13320__auto__ = ((function (c__13432__auto___13990,res,vec__13804,v,p,job,jobs,results){
return (function (state_13811){
var state_val_13812 = (state_13811[(1)]);
if((state_val_13812 === (1))){
var state_13811__$1 = state_13811;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13811__$1,(2),res,v);
} else {
if((state_val_13812 === (2))){
var inst_13808 = (state_13811[(2)]);
var inst_13809 = cljs.core.async.close_BANG_.call(null,res);
var state_13811__$1 = (function (){var statearr_13813 = state_13811;
(statearr_13813[(7)] = inst_13808);

return statearr_13813;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13811__$1,inst_13809);
} else {
return null;
}
}
});})(c__13432__auto___13990,res,vec__13804,v,p,job,jobs,results))
;
return ((function (switch__13320__auto__,c__13432__auto___13990,res,vec__13804,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13321__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13321__auto____0 = (function (){
var statearr_13817 = [null,null,null,null,null,null,null,null];
(statearr_13817[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13321__auto__);

(statearr_13817[(1)] = (1));

return statearr_13817;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13321__auto____1 = (function (state_13811){
while(true){
var ret_value__13322__auto__ = (function (){try{while(true){
var result__13323__auto__ = switch__13320__auto__.call(null,state_13811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13323__auto__;
}
break;
}
}catch (e13818){if((e13818 instanceof Object)){
var ex__13324__auto__ = e13818;
var statearr_13819_13991 = state_13811;
(statearr_13819_13991[(5)] = ex__13324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13992 = state_13811;
state_13811 = G__13992;
continue;
} else {
return ret_value__13322__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13321__auto__ = function(state_13811){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13321__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13321__auto____1.call(this,state_13811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13321__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13321__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13321__auto__;
})()
;})(switch__13320__auto__,c__13432__auto___13990,res,vec__13804,v,p,job,jobs,results))
})();
var state__13434__auto__ = (function (){var statearr_13820 = f__13433__auto__.call(null);
(statearr_13820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13432__auto___13990);

return statearr_13820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13434__auto__);
});})(c__13432__auto___13990,res,vec__13804,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__13821){
var vec__13822 = p__13821;
var v = cljs.core.nth.call(null,vec__13822,(0),null);
var p = cljs.core.nth.call(null,vec__13822,(1),null);
var job = vec__13822;
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
var n__7688__auto___13993 = n;
var __13994 = (0);
while(true){
if((__13994 < n__7688__auto___13993)){
var G__13825_13995 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__13825_13995) {
case "compute":
var c__13432__auto___13997 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13994,c__13432__auto___13997,G__13825_13995,n__7688__auto___13993,jobs,results,process,async){
return (function (){
var f__13433__auto__ = (function (){var switch__13320__auto__ = ((function (__13994,c__13432__auto___13997,G__13825_13995,n__7688__auto___13993,jobs,results,process,async){
return (function (state_13838){
var state_val_13839 = (state_13838[(1)]);
if((state_val_13839 === (1))){
var state_13838__$1 = state_13838;
var statearr_13840_13998 = state_13838__$1;
(statearr_13840_13998[(2)] = null);

(statearr_13840_13998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13839 === (2))){
var state_13838__$1 = state_13838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13838__$1,(4),jobs);
} else {
if((state_val_13839 === (3))){
var inst_13836 = (state_13838[(2)]);
var state_13838__$1 = state_13838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13838__$1,inst_13836);
} else {
if((state_val_13839 === (4))){
var inst_13828 = (state_13838[(2)]);
var inst_13829 = process.call(null,inst_13828);
var state_13838__$1 = state_13838;
if(cljs.core.truth_(inst_13829)){
var statearr_13841_13999 = state_13838__$1;
(statearr_13841_13999[(1)] = (5));

} else {
var statearr_13842_14000 = state_13838__$1;
(statearr_13842_14000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13839 === (5))){
var state_13838__$1 = state_13838;
var statearr_13843_14001 = state_13838__$1;
(statearr_13843_14001[(2)] = null);

(statearr_13843_14001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13839 === (6))){
var state_13838__$1 = state_13838;
var statearr_13844_14002 = state_13838__$1;
(statearr_13844_14002[(2)] = null);

(statearr_13844_14002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13839 === (7))){
var inst_13834 = (state_13838[(2)]);
var state_13838__$1 = state_13838;
var statearr_13845_14003 = state_13838__$1;
(statearr_13845_14003[(2)] = inst_13834);

(statearr_13845_14003[(1)] = (3));


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
});})(__13994,c__13432__auto___13997,G__13825_13995,n__7688__auto___13993,jobs,results,process,async))
;
return ((function (__13994,switch__13320__auto__,c__13432__auto___13997,G__13825_13995,n__7688__auto___13993,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13321__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13321__auto____0 = (function (){
var statearr_13849 = [null,null,null,null,null,null,null];
(statearr_13849[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13321__auto__);

(statearr_13849[(1)] = (1));

return statearr_13849;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13321__auto____1 = (function (state_13838){
while(true){
var ret_value__13322__auto__ = (function (){try{while(true){
var result__13323__auto__ = switch__13320__auto__.call(null,state_13838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13323__auto__;
}
break;
}
}catch (e13850){if((e13850 instanceof Object)){
var ex__13324__auto__ = e13850;
var statearr_13851_14004 = state_13838;
(statearr_13851_14004[(5)] = ex__13324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14005 = state_13838;
state_13838 = G__14005;
continue;
} else {
return ret_value__13322__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13321__auto__ = function(state_13838){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13321__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13321__auto____1.call(this,state_13838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13321__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13321__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13321__auto__;
})()
;})(__13994,switch__13320__auto__,c__13432__auto___13997,G__13825_13995,n__7688__auto___13993,jobs,results,process,async))
})();
var state__13434__auto__ = (function (){var statearr_13852 = f__13433__auto__.call(null);
(statearr_13852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13432__auto___13997);

return statearr_13852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13434__auto__);
});})(__13994,c__13432__auto___13997,G__13825_13995,n__7688__auto___13993,jobs,results,process,async))
);


break;
case "async":
var c__13432__auto___14006 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13994,c__13432__auto___14006,G__13825_13995,n__7688__auto___13993,jobs,results,process,async){
return (function (){
var f__13433__auto__ = (function (){var switch__13320__auto__ = ((function (__13994,c__13432__auto___14006,G__13825_13995,n__7688__auto___13993,jobs,results,process,async){
return (function (state_13865){
var state_val_13866 = (state_13865[(1)]);
if((state_val_13866 === (1))){
var state_13865__$1 = state_13865;
var statearr_13867_14007 = state_13865__$1;
(statearr_13867_14007[(2)] = null);

(statearr_13867_14007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13866 === (2))){
var state_13865__$1 = state_13865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13865__$1,(4),jobs);
} else {
if((state_val_13866 === (3))){
var inst_13863 = (state_13865[(2)]);
var state_13865__$1 = state_13865;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13865__$1,inst_13863);
} else {
if((state_val_13866 === (4))){
var inst_13855 = (state_13865[(2)]);
var inst_13856 = async.call(null,inst_13855);
var state_13865__$1 = state_13865;
if(cljs.core.truth_(inst_13856)){
var statearr_13868_14008 = state_13865__$1;
(statearr_13868_14008[(1)] = (5));

} else {
var statearr_13869_14009 = state_13865__$1;
(statearr_13869_14009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13866 === (5))){
var state_13865__$1 = state_13865;
var statearr_13870_14010 = state_13865__$1;
(statearr_13870_14010[(2)] = null);

(statearr_13870_14010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13866 === (6))){
var state_13865__$1 = state_13865;
var statearr_13871_14011 = state_13865__$1;
(statearr_13871_14011[(2)] = null);

(statearr_13871_14011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13866 === (7))){
var inst_13861 = (state_13865[(2)]);
var state_13865__$1 = state_13865;
var statearr_13872_14012 = state_13865__$1;
(statearr_13872_14012[(2)] = inst_13861);

(statearr_13872_14012[(1)] = (3));


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
});})(__13994,c__13432__auto___14006,G__13825_13995,n__7688__auto___13993,jobs,results,process,async))
;
return ((function (__13994,switch__13320__auto__,c__13432__auto___14006,G__13825_13995,n__7688__auto___13993,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13321__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13321__auto____0 = (function (){
var statearr_13876 = [null,null,null,null,null,null,null];
(statearr_13876[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13321__auto__);

(statearr_13876[(1)] = (1));

return statearr_13876;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13321__auto____1 = (function (state_13865){
while(true){
var ret_value__13322__auto__ = (function (){try{while(true){
var result__13323__auto__ = switch__13320__auto__.call(null,state_13865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13323__auto__;
}
break;
}
}catch (e13877){if((e13877 instanceof Object)){
var ex__13324__auto__ = e13877;
var statearr_13878_14013 = state_13865;
(statearr_13878_14013[(5)] = ex__13324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14014 = state_13865;
state_13865 = G__14014;
continue;
} else {
return ret_value__13322__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13321__auto__ = function(state_13865){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13321__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13321__auto____1.call(this,state_13865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13321__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13321__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13321__auto__;
})()
;})(__13994,switch__13320__auto__,c__13432__auto___14006,G__13825_13995,n__7688__auto___13993,jobs,results,process,async))
})();
var state__13434__auto__ = (function (){var statearr_13879 = f__13433__auto__.call(null);
(statearr_13879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13432__auto___14006);

return statearr_13879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13434__auto__);
});})(__13994,c__13432__auto___14006,G__13825_13995,n__7688__auto___13993,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__14015 = (__13994 + (1));
__13994 = G__14015;
continue;
} else {
}
break;
}

var c__13432__auto___14016 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13432__auto___14016,jobs,results,process,async){
return (function (){
var f__13433__auto__ = (function (){var switch__13320__auto__ = ((function (c__13432__auto___14016,jobs,results,process,async){
return (function (state_13901){
var state_val_13902 = (state_13901[(1)]);
if((state_val_13902 === (1))){
var state_13901__$1 = state_13901;
var statearr_13903_14017 = state_13901__$1;
(statearr_13903_14017[(2)] = null);

(statearr_13903_14017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13902 === (2))){
var state_13901__$1 = state_13901;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13901__$1,(4),from);
} else {
if((state_val_13902 === (3))){
var inst_13899 = (state_13901[(2)]);
var state_13901__$1 = state_13901;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13901__$1,inst_13899);
} else {
if((state_val_13902 === (4))){
var inst_13882 = (state_13901[(7)]);
var inst_13882__$1 = (state_13901[(2)]);
var inst_13883 = (inst_13882__$1 == null);
var state_13901__$1 = (function (){var statearr_13904 = state_13901;
(statearr_13904[(7)] = inst_13882__$1);

return statearr_13904;
})();
if(cljs.core.truth_(inst_13883)){
var statearr_13905_14018 = state_13901__$1;
(statearr_13905_14018[(1)] = (5));

} else {
var statearr_13906_14019 = state_13901__$1;
(statearr_13906_14019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13902 === (5))){
var inst_13885 = cljs.core.async.close_BANG_.call(null,jobs);
var state_13901__$1 = state_13901;
var statearr_13907_14020 = state_13901__$1;
(statearr_13907_14020[(2)] = inst_13885);

(statearr_13907_14020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13902 === (6))){
var inst_13882 = (state_13901[(7)]);
var inst_13887 = (state_13901[(8)]);
var inst_13887__$1 = cljs.core.async.chan.call(null,(1));
var inst_13888 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13889 = [inst_13882,inst_13887__$1];
var inst_13890 = (new cljs.core.PersistentVector(null,2,(5),inst_13888,inst_13889,null));
var state_13901__$1 = (function (){var statearr_13908 = state_13901;
(statearr_13908[(8)] = inst_13887__$1);

return statearr_13908;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13901__$1,(8),jobs,inst_13890);
} else {
if((state_val_13902 === (7))){
var inst_13897 = (state_13901[(2)]);
var state_13901__$1 = state_13901;
var statearr_13909_14021 = state_13901__$1;
(statearr_13909_14021[(2)] = inst_13897);

(statearr_13909_14021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13902 === (8))){
var inst_13887 = (state_13901[(8)]);
var inst_13892 = (state_13901[(2)]);
var state_13901__$1 = (function (){var statearr_13910 = state_13901;
(statearr_13910[(9)] = inst_13892);

return statearr_13910;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13901__$1,(9),results,inst_13887);
} else {
if((state_val_13902 === (9))){
var inst_13894 = (state_13901[(2)]);
var state_13901__$1 = (function (){var statearr_13911 = state_13901;
(statearr_13911[(10)] = inst_13894);

return statearr_13911;
})();
var statearr_13912_14022 = state_13901__$1;
(statearr_13912_14022[(2)] = null);

(statearr_13912_14022[(1)] = (2));


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
});})(c__13432__auto___14016,jobs,results,process,async))
;
return ((function (switch__13320__auto__,c__13432__auto___14016,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13321__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13321__auto____0 = (function (){
var statearr_13916 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13916[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13321__auto__);

(statearr_13916[(1)] = (1));

return statearr_13916;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13321__auto____1 = (function (state_13901){
while(true){
var ret_value__13322__auto__ = (function (){try{while(true){
var result__13323__auto__ = switch__13320__auto__.call(null,state_13901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13323__auto__;
}
break;
}
}catch (e13917){if((e13917 instanceof Object)){
var ex__13324__auto__ = e13917;
var statearr_13918_14023 = state_13901;
(statearr_13918_14023[(5)] = ex__13324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14024 = state_13901;
state_13901 = G__14024;
continue;
} else {
return ret_value__13322__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13321__auto__ = function(state_13901){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13321__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13321__auto____1.call(this,state_13901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13321__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13321__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13321__auto__;
})()
;})(switch__13320__auto__,c__13432__auto___14016,jobs,results,process,async))
})();
var state__13434__auto__ = (function (){var statearr_13919 = f__13433__auto__.call(null);
(statearr_13919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13432__auto___14016);

return statearr_13919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13434__auto__);
});})(c__13432__auto___14016,jobs,results,process,async))
);


var c__13432__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13432__auto__,jobs,results,process,async){
return (function (){
var f__13433__auto__ = (function (){var switch__13320__auto__ = ((function (c__13432__auto__,jobs,results,process,async){
return (function (state_13957){
var state_val_13958 = (state_13957[(1)]);
if((state_val_13958 === (7))){
var inst_13953 = (state_13957[(2)]);
var state_13957__$1 = state_13957;
var statearr_13959_14025 = state_13957__$1;
(statearr_13959_14025[(2)] = inst_13953);

(statearr_13959_14025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13958 === (20))){
var state_13957__$1 = state_13957;
var statearr_13960_14026 = state_13957__$1;
(statearr_13960_14026[(2)] = null);

(statearr_13960_14026[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13958 === (1))){
var state_13957__$1 = state_13957;
var statearr_13961_14027 = state_13957__$1;
(statearr_13961_14027[(2)] = null);

(statearr_13961_14027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13958 === (4))){
var inst_13922 = (state_13957[(7)]);
var inst_13922__$1 = (state_13957[(2)]);
var inst_13923 = (inst_13922__$1 == null);
var state_13957__$1 = (function (){var statearr_13962 = state_13957;
(statearr_13962[(7)] = inst_13922__$1);

return statearr_13962;
})();
if(cljs.core.truth_(inst_13923)){
var statearr_13963_14028 = state_13957__$1;
(statearr_13963_14028[(1)] = (5));

} else {
var statearr_13964_14029 = state_13957__$1;
(statearr_13964_14029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13958 === (15))){
var inst_13935 = (state_13957[(8)]);
var state_13957__$1 = state_13957;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13957__$1,(18),to,inst_13935);
} else {
if((state_val_13958 === (21))){
var inst_13948 = (state_13957[(2)]);
var state_13957__$1 = state_13957;
var statearr_13965_14030 = state_13957__$1;
(statearr_13965_14030[(2)] = inst_13948);

(statearr_13965_14030[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13958 === (13))){
var inst_13950 = (state_13957[(2)]);
var state_13957__$1 = (function (){var statearr_13966 = state_13957;
(statearr_13966[(9)] = inst_13950);

return statearr_13966;
})();
var statearr_13967_14031 = state_13957__$1;
(statearr_13967_14031[(2)] = null);

(statearr_13967_14031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13958 === (6))){
var inst_13922 = (state_13957[(7)]);
var state_13957__$1 = state_13957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13957__$1,(11),inst_13922);
} else {
if((state_val_13958 === (17))){
var inst_13943 = (state_13957[(2)]);
var state_13957__$1 = state_13957;
if(cljs.core.truth_(inst_13943)){
var statearr_13968_14032 = state_13957__$1;
(statearr_13968_14032[(1)] = (19));

} else {
var statearr_13969_14033 = state_13957__$1;
(statearr_13969_14033[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13958 === (3))){
var inst_13955 = (state_13957[(2)]);
var state_13957__$1 = state_13957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13957__$1,inst_13955);
} else {
if((state_val_13958 === (12))){
var inst_13932 = (state_13957[(10)]);
var state_13957__$1 = state_13957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13957__$1,(14),inst_13932);
} else {
if((state_val_13958 === (2))){
var state_13957__$1 = state_13957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13957__$1,(4),results);
} else {
if((state_val_13958 === (19))){
var state_13957__$1 = state_13957;
var statearr_13970_14034 = state_13957__$1;
(statearr_13970_14034[(2)] = null);

(statearr_13970_14034[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13958 === (11))){
var inst_13932 = (state_13957[(2)]);
var state_13957__$1 = (function (){var statearr_13971 = state_13957;
(statearr_13971[(10)] = inst_13932);

return statearr_13971;
})();
var statearr_13972_14035 = state_13957__$1;
(statearr_13972_14035[(2)] = null);

(statearr_13972_14035[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13958 === (9))){
var state_13957__$1 = state_13957;
var statearr_13973_14036 = state_13957__$1;
(statearr_13973_14036[(2)] = null);

(statearr_13973_14036[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13958 === (5))){
var state_13957__$1 = state_13957;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13974_14037 = state_13957__$1;
(statearr_13974_14037[(1)] = (8));

} else {
var statearr_13975_14038 = state_13957__$1;
(statearr_13975_14038[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13958 === (14))){
var inst_13937 = (state_13957[(11)]);
var inst_13935 = (state_13957[(8)]);
var inst_13935__$1 = (state_13957[(2)]);
var inst_13936 = (inst_13935__$1 == null);
var inst_13937__$1 = cljs.core.not.call(null,inst_13936);
var state_13957__$1 = (function (){var statearr_13976 = state_13957;
(statearr_13976[(11)] = inst_13937__$1);

(statearr_13976[(8)] = inst_13935__$1);

return statearr_13976;
})();
if(inst_13937__$1){
var statearr_13977_14039 = state_13957__$1;
(statearr_13977_14039[(1)] = (15));

} else {
var statearr_13978_14040 = state_13957__$1;
(statearr_13978_14040[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13958 === (16))){
var inst_13937 = (state_13957[(11)]);
var state_13957__$1 = state_13957;
var statearr_13979_14041 = state_13957__$1;
(statearr_13979_14041[(2)] = inst_13937);

(statearr_13979_14041[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13958 === (10))){
var inst_13929 = (state_13957[(2)]);
var state_13957__$1 = state_13957;
var statearr_13980_14042 = state_13957__$1;
(statearr_13980_14042[(2)] = inst_13929);

(statearr_13980_14042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13958 === (18))){
var inst_13940 = (state_13957[(2)]);
var state_13957__$1 = state_13957;
var statearr_13981_14043 = state_13957__$1;
(statearr_13981_14043[(2)] = inst_13940);

(statearr_13981_14043[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13958 === (8))){
var inst_13926 = cljs.core.async.close_BANG_.call(null,to);
var state_13957__$1 = state_13957;
var statearr_13982_14044 = state_13957__$1;
(statearr_13982_14044[(2)] = inst_13926);

(statearr_13982_14044[(1)] = (10));


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
});})(c__13432__auto__,jobs,results,process,async))
;
return ((function (switch__13320__auto__,c__13432__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13321__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13321__auto____0 = (function (){
var statearr_13986 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13986[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13321__auto__);

(statearr_13986[(1)] = (1));

return statearr_13986;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13321__auto____1 = (function (state_13957){
while(true){
var ret_value__13322__auto__ = (function (){try{while(true){
var result__13323__auto__ = switch__13320__auto__.call(null,state_13957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13323__auto__;
}
break;
}
}catch (e13987){if((e13987 instanceof Object)){
var ex__13324__auto__ = e13987;
var statearr_13988_14045 = state_13957;
(statearr_13988_14045[(5)] = ex__13324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14046 = state_13957;
state_13957 = G__14046;
continue;
} else {
return ret_value__13322__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13321__auto__ = function(state_13957){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13321__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13321__auto____1.call(this,state_13957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13321__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13321__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13321__auto__;
})()
;})(switch__13320__auto__,c__13432__auto__,jobs,results,process,async))
})();
var state__13434__auto__ = (function (){var statearr_13989 = f__13433__auto__.call(null);
(statearr_13989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13432__auto__);

return statearr_13989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13434__auto__);
});})(c__13432__auto__,jobs,results,process,async))
);

return c__13432__auto__;
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
var args14047 = [];
var len__7878__auto___14050 = arguments.length;
var i__7879__auto___14051 = (0);
while(true){
if((i__7879__auto___14051 < len__7878__auto___14050)){
args14047.push((arguments[i__7879__auto___14051]));

var G__14052 = (i__7879__auto___14051 + (1));
i__7879__auto___14051 = G__14052;
continue;
} else {
}
break;
}

var G__14049 = args14047.length;
switch (G__14049) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14047.length)].join('')));

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
var args14054 = [];
var len__7878__auto___14057 = arguments.length;
var i__7879__auto___14058 = (0);
while(true){
if((i__7879__auto___14058 < len__7878__auto___14057)){
args14054.push((arguments[i__7879__auto___14058]));

var G__14059 = (i__7879__auto___14058 + (1));
i__7879__auto___14058 = G__14059;
continue;
} else {
}
break;
}

var G__14056 = args14054.length;
switch (G__14056) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14054.length)].join('')));

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
var args14061 = [];
var len__7878__auto___14114 = arguments.length;
var i__7879__auto___14115 = (0);
while(true){
if((i__7879__auto___14115 < len__7878__auto___14114)){
args14061.push((arguments[i__7879__auto___14115]));

var G__14116 = (i__7879__auto___14115 + (1));
i__7879__auto___14115 = G__14116;
continue;
} else {
}
break;
}

var G__14063 = args14061.length;
switch (G__14063) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14061.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__13432__auto___14118 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13432__auto___14118,tc,fc){
return (function (){
var f__13433__auto__ = (function (){var switch__13320__auto__ = ((function (c__13432__auto___14118,tc,fc){
return (function (state_14089){
var state_val_14090 = (state_14089[(1)]);
if((state_val_14090 === (7))){
var inst_14085 = (state_14089[(2)]);
var state_14089__$1 = state_14089;
var statearr_14091_14119 = state_14089__$1;
(statearr_14091_14119[(2)] = inst_14085);

(statearr_14091_14119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14090 === (1))){
var state_14089__$1 = state_14089;
var statearr_14092_14120 = state_14089__$1;
(statearr_14092_14120[(2)] = null);

(statearr_14092_14120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14090 === (4))){
var inst_14066 = (state_14089[(7)]);
var inst_14066__$1 = (state_14089[(2)]);
var inst_14067 = (inst_14066__$1 == null);
var state_14089__$1 = (function (){var statearr_14093 = state_14089;
(statearr_14093[(7)] = inst_14066__$1);

return statearr_14093;
})();
if(cljs.core.truth_(inst_14067)){
var statearr_14094_14121 = state_14089__$1;
(statearr_14094_14121[(1)] = (5));

} else {
var statearr_14095_14122 = state_14089__$1;
(statearr_14095_14122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14090 === (13))){
var state_14089__$1 = state_14089;
var statearr_14096_14123 = state_14089__$1;
(statearr_14096_14123[(2)] = null);

(statearr_14096_14123[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14090 === (6))){
var inst_14066 = (state_14089[(7)]);
var inst_14072 = p.call(null,inst_14066);
var state_14089__$1 = state_14089;
if(cljs.core.truth_(inst_14072)){
var statearr_14097_14124 = state_14089__$1;
(statearr_14097_14124[(1)] = (9));

} else {
var statearr_14098_14125 = state_14089__$1;
(statearr_14098_14125[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14090 === (3))){
var inst_14087 = (state_14089[(2)]);
var state_14089__$1 = state_14089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14089__$1,inst_14087);
} else {
if((state_val_14090 === (12))){
var state_14089__$1 = state_14089;
var statearr_14099_14126 = state_14089__$1;
(statearr_14099_14126[(2)] = null);

(statearr_14099_14126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14090 === (2))){
var state_14089__$1 = state_14089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14089__$1,(4),ch);
} else {
if((state_val_14090 === (11))){
var inst_14066 = (state_14089[(7)]);
var inst_14076 = (state_14089[(2)]);
var state_14089__$1 = state_14089;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14089__$1,(8),inst_14076,inst_14066);
} else {
if((state_val_14090 === (9))){
var state_14089__$1 = state_14089;
var statearr_14100_14127 = state_14089__$1;
(statearr_14100_14127[(2)] = tc);

(statearr_14100_14127[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14090 === (5))){
var inst_14069 = cljs.core.async.close_BANG_.call(null,tc);
var inst_14070 = cljs.core.async.close_BANG_.call(null,fc);
var state_14089__$1 = (function (){var statearr_14101 = state_14089;
(statearr_14101[(8)] = inst_14069);

return statearr_14101;
})();
var statearr_14102_14128 = state_14089__$1;
(statearr_14102_14128[(2)] = inst_14070);

(statearr_14102_14128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14090 === (14))){
var inst_14083 = (state_14089[(2)]);
var state_14089__$1 = state_14089;
var statearr_14103_14129 = state_14089__$1;
(statearr_14103_14129[(2)] = inst_14083);

(statearr_14103_14129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14090 === (10))){
var state_14089__$1 = state_14089;
var statearr_14104_14130 = state_14089__$1;
(statearr_14104_14130[(2)] = fc);

(statearr_14104_14130[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14090 === (8))){
var inst_14078 = (state_14089[(2)]);
var state_14089__$1 = state_14089;
if(cljs.core.truth_(inst_14078)){
var statearr_14105_14131 = state_14089__$1;
(statearr_14105_14131[(1)] = (12));

} else {
var statearr_14106_14132 = state_14089__$1;
(statearr_14106_14132[(1)] = (13));

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
});})(c__13432__auto___14118,tc,fc))
;
return ((function (switch__13320__auto__,c__13432__auto___14118,tc,fc){
return (function() {
var cljs$core$async$state_machine__13321__auto__ = null;
var cljs$core$async$state_machine__13321__auto____0 = (function (){
var statearr_14110 = [null,null,null,null,null,null,null,null,null];
(statearr_14110[(0)] = cljs$core$async$state_machine__13321__auto__);

(statearr_14110[(1)] = (1));

return statearr_14110;
});
var cljs$core$async$state_machine__13321__auto____1 = (function (state_14089){
while(true){
var ret_value__13322__auto__ = (function (){try{while(true){
var result__13323__auto__ = switch__13320__auto__.call(null,state_14089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13323__auto__;
}
break;
}
}catch (e14111){if((e14111 instanceof Object)){
var ex__13324__auto__ = e14111;
var statearr_14112_14133 = state_14089;
(statearr_14112_14133[(5)] = ex__13324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14134 = state_14089;
state_14089 = G__14134;
continue;
} else {
return ret_value__13322__auto__;
}
break;
}
});
cljs$core$async$state_machine__13321__auto__ = function(state_14089){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13321__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13321__auto____1.call(this,state_14089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13321__auto____0;
cljs$core$async$state_machine__13321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13321__auto____1;
return cljs$core$async$state_machine__13321__auto__;
})()
;})(switch__13320__auto__,c__13432__auto___14118,tc,fc))
})();
var state__13434__auto__ = (function (){var statearr_14113 = f__13433__auto__.call(null);
(statearr_14113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13432__auto___14118);

return statearr_14113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13434__auto__);
});})(c__13432__auto___14118,tc,fc))
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
var c__13432__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13432__auto__){
return (function (){
var f__13433__auto__ = (function (){var switch__13320__auto__ = ((function (c__13432__auto__){
return (function (state_14198){
var state_val_14199 = (state_14198[(1)]);
if((state_val_14199 === (7))){
var inst_14194 = (state_14198[(2)]);
var state_14198__$1 = state_14198;
var statearr_14200_14221 = state_14198__$1;
(statearr_14200_14221[(2)] = inst_14194);

(statearr_14200_14221[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14199 === (1))){
var inst_14178 = init;
var state_14198__$1 = (function (){var statearr_14201 = state_14198;
(statearr_14201[(7)] = inst_14178);

return statearr_14201;
})();
var statearr_14202_14222 = state_14198__$1;
(statearr_14202_14222[(2)] = null);

(statearr_14202_14222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14199 === (4))){
var inst_14181 = (state_14198[(8)]);
var inst_14181__$1 = (state_14198[(2)]);
var inst_14182 = (inst_14181__$1 == null);
var state_14198__$1 = (function (){var statearr_14203 = state_14198;
(statearr_14203[(8)] = inst_14181__$1);

return statearr_14203;
})();
if(cljs.core.truth_(inst_14182)){
var statearr_14204_14223 = state_14198__$1;
(statearr_14204_14223[(1)] = (5));

} else {
var statearr_14205_14224 = state_14198__$1;
(statearr_14205_14224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14199 === (6))){
var inst_14178 = (state_14198[(7)]);
var inst_14185 = (state_14198[(9)]);
var inst_14181 = (state_14198[(8)]);
var inst_14185__$1 = f.call(null,inst_14178,inst_14181);
var inst_14186 = cljs.core.reduced_QMARK_.call(null,inst_14185__$1);
var state_14198__$1 = (function (){var statearr_14206 = state_14198;
(statearr_14206[(9)] = inst_14185__$1);

return statearr_14206;
})();
if(inst_14186){
var statearr_14207_14225 = state_14198__$1;
(statearr_14207_14225[(1)] = (8));

} else {
var statearr_14208_14226 = state_14198__$1;
(statearr_14208_14226[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14199 === (3))){
var inst_14196 = (state_14198[(2)]);
var state_14198__$1 = state_14198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14198__$1,inst_14196);
} else {
if((state_val_14199 === (2))){
var state_14198__$1 = state_14198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14198__$1,(4),ch);
} else {
if((state_val_14199 === (9))){
var inst_14185 = (state_14198[(9)]);
var inst_14178 = inst_14185;
var state_14198__$1 = (function (){var statearr_14209 = state_14198;
(statearr_14209[(7)] = inst_14178);

return statearr_14209;
})();
var statearr_14210_14227 = state_14198__$1;
(statearr_14210_14227[(2)] = null);

(statearr_14210_14227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14199 === (5))){
var inst_14178 = (state_14198[(7)]);
var state_14198__$1 = state_14198;
var statearr_14211_14228 = state_14198__$1;
(statearr_14211_14228[(2)] = inst_14178);

(statearr_14211_14228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14199 === (10))){
var inst_14192 = (state_14198[(2)]);
var state_14198__$1 = state_14198;
var statearr_14212_14229 = state_14198__$1;
(statearr_14212_14229[(2)] = inst_14192);

(statearr_14212_14229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14199 === (8))){
var inst_14185 = (state_14198[(9)]);
var inst_14188 = cljs.core.deref.call(null,inst_14185);
var state_14198__$1 = state_14198;
var statearr_14213_14230 = state_14198__$1;
(statearr_14213_14230[(2)] = inst_14188);

(statearr_14213_14230[(1)] = (10));


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
});})(c__13432__auto__))
;
return ((function (switch__13320__auto__,c__13432__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__13321__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13321__auto____0 = (function (){
var statearr_14217 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14217[(0)] = cljs$core$async$reduce_$_state_machine__13321__auto__);

(statearr_14217[(1)] = (1));

return statearr_14217;
});
var cljs$core$async$reduce_$_state_machine__13321__auto____1 = (function (state_14198){
while(true){
var ret_value__13322__auto__ = (function (){try{while(true){
var result__13323__auto__ = switch__13320__auto__.call(null,state_14198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13323__auto__;
}
break;
}
}catch (e14218){if((e14218 instanceof Object)){
var ex__13324__auto__ = e14218;
var statearr_14219_14231 = state_14198;
(statearr_14219_14231[(5)] = ex__13324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14232 = state_14198;
state_14198 = G__14232;
continue;
} else {
return ret_value__13322__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13321__auto__ = function(state_14198){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13321__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13321__auto____1.call(this,state_14198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13321__auto____0;
cljs$core$async$reduce_$_state_machine__13321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13321__auto____1;
return cljs$core$async$reduce_$_state_machine__13321__auto__;
})()
;})(switch__13320__auto__,c__13432__auto__))
})();
var state__13434__auto__ = (function (){var statearr_14220 = f__13433__auto__.call(null);
(statearr_14220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13432__auto__);

return statearr_14220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13434__auto__);
});})(c__13432__auto__))
);

return c__13432__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__13432__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13432__auto__,f__$1){
return (function (){
var f__13433__auto__ = (function (){var switch__13320__auto__ = ((function (c__13432__auto__,f__$1){
return (function (state_14252){
var state_val_14253 = (state_14252[(1)]);
if((state_val_14253 === (1))){
var inst_14247 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_14252__$1 = state_14252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14252__$1,(2),inst_14247);
} else {
if((state_val_14253 === (2))){
var inst_14249 = (state_14252[(2)]);
var inst_14250 = f__$1.call(null,inst_14249);
var state_14252__$1 = state_14252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14252__$1,inst_14250);
} else {
return null;
}
}
});})(c__13432__auto__,f__$1))
;
return ((function (switch__13320__auto__,c__13432__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__13321__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13321__auto____0 = (function (){
var statearr_14257 = [null,null,null,null,null,null,null];
(statearr_14257[(0)] = cljs$core$async$transduce_$_state_machine__13321__auto__);

(statearr_14257[(1)] = (1));

return statearr_14257;
});
var cljs$core$async$transduce_$_state_machine__13321__auto____1 = (function (state_14252){
while(true){
var ret_value__13322__auto__ = (function (){try{while(true){
var result__13323__auto__ = switch__13320__auto__.call(null,state_14252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13323__auto__;
}
break;
}
}catch (e14258){if((e14258 instanceof Object)){
var ex__13324__auto__ = e14258;
var statearr_14259_14261 = state_14252;
(statearr_14259_14261[(5)] = ex__13324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14262 = state_14252;
state_14252 = G__14262;
continue;
} else {
return ret_value__13322__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13321__auto__ = function(state_14252){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13321__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13321__auto____1.call(this,state_14252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13321__auto____0;
cljs$core$async$transduce_$_state_machine__13321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13321__auto____1;
return cljs$core$async$transduce_$_state_machine__13321__auto__;
})()
;})(switch__13320__auto__,c__13432__auto__,f__$1))
})();
var state__13434__auto__ = (function (){var statearr_14260 = f__13433__auto__.call(null);
(statearr_14260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13432__auto__);

return statearr_14260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13434__auto__);
});})(c__13432__auto__,f__$1))
);

return c__13432__auto__;
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
var args14263 = [];
var len__7878__auto___14315 = arguments.length;
var i__7879__auto___14316 = (0);
while(true){
if((i__7879__auto___14316 < len__7878__auto___14315)){
args14263.push((arguments[i__7879__auto___14316]));

var G__14317 = (i__7879__auto___14316 + (1));
i__7879__auto___14316 = G__14317;
continue;
} else {
}
break;
}

var G__14265 = args14263.length;
switch (G__14265) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14263.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13432__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13432__auto__){
return (function (){
var f__13433__auto__ = (function (){var switch__13320__auto__ = ((function (c__13432__auto__){
return (function (state_14290){
var state_val_14291 = (state_14290[(1)]);
if((state_val_14291 === (7))){
var inst_14272 = (state_14290[(2)]);
var state_14290__$1 = state_14290;
var statearr_14292_14319 = state_14290__$1;
(statearr_14292_14319[(2)] = inst_14272);

(statearr_14292_14319[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14291 === (1))){
var inst_14266 = cljs.core.seq.call(null,coll);
var inst_14267 = inst_14266;
var state_14290__$1 = (function (){var statearr_14293 = state_14290;
(statearr_14293[(7)] = inst_14267);

return statearr_14293;
})();
var statearr_14294_14320 = state_14290__$1;
(statearr_14294_14320[(2)] = null);

(statearr_14294_14320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14291 === (4))){
var inst_14267 = (state_14290[(7)]);
var inst_14270 = cljs.core.first.call(null,inst_14267);
var state_14290__$1 = state_14290;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14290__$1,(7),ch,inst_14270);
} else {
if((state_val_14291 === (13))){
var inst_14284 = (state_14290[(2)]);
var state_14290__$1 = state_14290;
var statearr_14295_14321 = state_14290__$1;
(statearr_14295_14321[(2)] = inst_14284);

(statearr_14295_14321[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14291 === (6))){
var inst_14275 = (state_14290[(2)]);
var state_14290__$1 = state_14290;
if(cljs.core.truth_(inst_14275)){
var statearr_14296_14322 = state_14290__$1;
(statearr_14296_14322[(1)] = (8));

} else {
var statearr_14297_14323 = state_14290__$1;
(statearr_14297_14323[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14291 === (3))){
var inst_14288 = (state_14290[(2)]);
var state_14290__$1 = state_14290;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14290__$1,inst_14288);
} else {
if((state_val_14291 === (12))){
var state_14290__$1 = state_14290;
var statearr_14298_14324 = state_14290__$1;
(statearr_14298_14324[(2)] = null);

(statearr_14298_14324[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14291 === (2))){
var inst_14267 = (state_14290[(7)]);
var state_14290__$1 = state_14290;
if(cljs.core.truth_(inst_14267)){
var statearr_14299_14325 = state_14290__$1;
(statearr_14299_14325[(1)] = (4));

} else {
var statearr_14300_14326 = state_14290__$1;
(statearr_14300_14326[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14291 === (11))){
var inst_14281 = cljs.core.async.close_BANG_.call(null,ch);
var state_14290__$1 = state_14290;
var statearr_14301_14327 = state_14290__$1;
(statearr_14301_14327[(2)] = inst_14281);

(statearr_14301_14327[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14291 === (9))){
var state_14290__$1 = state_14290;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14302_14328 = state_14290__$1;
(statearr_14302_14328[(1)] = (11));

} else {
var statearr_14303_14329 = state_14290__$1;
(statearr_14303_14329[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14291 === (5))){
var inst_14267 = (state_14290[(7)]);
var state_14290__$1 = state_14290;
var statearr_14304_14330 = state_14290__$1;
(statearr_14304_14330[(2)] = inst_14267);

(statearr_14304_14330[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14291 === (10))){
var inst_14286 = (state_14290[(2)]);
var state_14290__$1 = state_14290;
var statearr_14305_14331 = state_14290__$1;
(statearr_14305_14331[(2)] = inst_14286);

(statearr_14305_14331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14291 === (8))){
var inst_14267 = (state_14290[(7)]);
var inst_14277 = cljs.core.next.call(null,inst_14267);
var inst_14267__$1 = inst_14277;
var state_14290__$1 = (function (){var statearr_14306 = state_14290;
(statearr_14306[(7)] = inst_14267__$1);

return statearr_14306;
})();
var statearr_14307_14332 = state_14290__$1;
(statearr_14307_14332[(2)] = null);

(statearr_14307_14332[(1)] = (2));


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
});})(c__13432__auto__))
;
return ((function (switch__13320__auto__,c__13432__auto__){
return (function() {
var cljs$core$async$state_machine__13321__auto__ = null;
var cljs$core$async$state_machine__13321__auto____0 = (function (){
var statearr_14311 = [null,null,null,null,null,null,null,null];
(statearr_14311[(0)] = cljs$core$async$state_machine__13321__auto__);

(statearr_14311[(1)] = (1));

return statearr_14311;
});
var cljs$core$async$state_machine__13321__auto____1 = (function (state_14290){
while(true){
var ret_value__13322__auto__ = (function (){try{while(true){
var result__13323__auto__ = switch__13320__auto__.call(null,state_14290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13323__auto__;
}
break;
}
}catch (e14312){if((e14312 instanceof Object)){
var ex__13324__auto__ = e14312;
var statearr_14313_14333 = state_14290;
(statearr_14313_14333[(5)] = ex__13324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14334 = state_14290;
state_14290 = G__14334;
continue;
} else {
return ret_value__13322__auto__;
}
break;
}
});
cljs$core$async$state_machine__13321__auto__ = function(state_14290){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13321__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13321__auto____1.call(this,state_14290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13321__auto____0;
cljs$core$async$state_machine__13321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13321__auto____1;
return cljs$core$async$state_machine__13321__auto__;
})()
;})(switch__13320__auto__,c__13432__auto__))
})();
var state__13434__auto__ = (function (){var statearr_14314 = f__13433__auto__.call(null);
(statearr_14314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13432__auto__);

return statearr_14314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13434__auto__);
});})(c__13432__auto__))
);

return c__13432__auto__;
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
var x__7433__auto__ = (((_ == null))?null:_);
var m__7434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7433__auto__)]);
if(!((m__7434__auto__ == null))){
return m__7434__auto__.call(null,_);
} else {
var m__7434__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7434__auto____$1 == null))){
return m__7434__auto____$1.call(null,_);
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
var x__7433__auto__ = (((m == null))?null:m);
var m__7434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7433__auto__)]);
if(!((m__7434__auto__ == null))){
return m__7434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__7434__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7434__auto____$1 == null))){
return m__7434__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__7433__auto__ = (((m == null))?null:m);
var m__7434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7433__auto__)]);
if(!((m__7434__auto__ == null))){
return m__7434__auto__.call(null,m,ch);
} else {
var m__7434__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7434__auto____$1 == null))){
return m__7434__auto____$1.call(null,m,ch);
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
var x__7433__auto__ = (((m == null))?null:m);
var m__7434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7433__auto__)]);
if(!((m__7434__auto__ == null))){
return m__7434__auto__.call(null,m);
} else {
var m__7434__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7434__auto____$1 == null))){
return m__7434__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async14560 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14560 = (function (ch,cs,meta14561){
this.ch = ch;
this.cs = cs;
this.meta14561 = meta14561;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14560.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14562,meta14561__$1){
var self__ = this;
var _14562__$1 = this;
return (new cljs.core.async.t_cljs$core$async14560(self__.ch,self__.cs,meta14561__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async14560.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14562){
var self__ = this;
var _14562__$1 = this;
return self__.meta14561;
});})(cs))
;

cljs.core.async.t_cljs$core$async14560.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14560.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async14560.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14560.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14560.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14560.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14560.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14561","meta14561",-537907070,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async14560.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14560.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14560";

cljs.core.async.t_cljs$core$async14560.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7376__auto__,writer__7377__auto__,opt__7378__auto__){
return cljs.core._write.call(null,writer__7377__auto__,"cljs.core.async/t_cljs$core$async14560");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async14560 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async14560(ch__$1,cs__$1,meta14561){
return (new cljs.core.async.t_cljs$core$async14560(ch__$1,cs__$1,meta14561));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async14560(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__13432__auto___14785 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13432__auto___14785,cs,m,dchan,dctr,done){
return (function (){
var f__13433__auto__ = (function (){var switch__13320__auto__ = ((function (c__13432__auto___14785,cs,m,dchan,dctr,done){
return (function (state_14697){
var state_val_14698 = (state_14697[(1)]);
if((state_val_14698 === (7))){
var inst_14693 = (state_14697[(2)]);
var state_14697__$1 = state_14697;
var statearr_14699_14786 = state_14697__$1;
(statearr_14699_14786[(2)] = inst_14693);

(statearr_14699_14786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (20))){
var inst_14596 = (state_14697[(7)]);
var inst_14608 = cljs.core.first.call(null,inst_14596);
var inst_14609 = cljs.core.nth.call(null,inst_14608,(0),null);
var inst_14610 = cljs.core.nth.call(null,inst_14608,(1),null);
var state_14697__$1 = (function (){var statearr_14700 = state_14697;
(statearr_14700[(8)] = inst_14609);

return statearr_14700;
})();
if(cljs.core.truth_(inst_14610)){
var statearr_14701_14787 = state_14697__$1;
(statearr_14701_14787[(1)] = (22));

} else {
var statearr_14702_14788 = state_14697__$1;
(statearr_14702_14788[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (27))){
var inst_14565 = (state_14697[(9)]);
var inst_14638 = (state_14697[(10)]);
var inst_14645 = (state_14697[(11)]);
var inst_14640 = (state_14697[(12)]);
var inst_14645__$1 = cljs.core._nth.call(null,inst_14638,inst_14640);
var inst_14646 = cljs.core.async.put_BANG_.call(null,inst_14645__$1,inst_14565,done);
var state_14697__$1 = (function (){var statearr_14703 = state_14697;
(statearr_14703[(11)] = inst_14645__$1);

return statearr_14703;
})();
if(cljs.core.truth_(inst_14646)){
var statearr_14704_14789 = state_14697__$1;
(statearr_14704_14789[(1)] = (30));

} else {
var statearr_14705_14790 = state_14697__$1;
(statearr_14705_14790[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (1))){
var state_14697__$1 = state_14697;
var statearr_14706_14791 = state_14697__$1;
(statearr_14706_14791[(2)] = null);

(statearr_14706_14791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (24))){
var inst_14596 = (state_14697[(7)]);
var inst_14615 = (state_14697[(2)]);
var inst_14616 = cljs.core.next.call(null,inst_14596);
var inst_14574 = inst_14616;
var inst_14575 = null;
var inst_14576 = (0);
var inst_14577 = (0);
var state_14697__$1 = (function (){var statearr_14707 = state_14697;
(statearr_14707[(13)] = inst_14574);

(statearr_14707[(14)] = inst_14575);

(statearr_14707[(15)] = inst_14615);

(statearr_14707[(16)] = inst_14577);

(statearr_14707[(17)] = inst_14576);

return statearr_14707;
})();
var statearr_14708_14792 = state_14697__$1;
(statearr_14708_14792[(2)] = null);

(statearr_14708_14792[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (39))){
var state_14697__$1 = state_14697;
var statearr_14712_14793 = state_14697__$1;
(statearr_14712_14793[(2)] = null);

(statearr_14712_14793[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (4))){
var inst_14565 = (state_14697[(9)]);
var inst_14565__$1 = (state_14697[(2)]);
var inst_14566 = (inst_14565__$1 == null);
var state_14697__$1 = (function (){var statearr_14713 = state_14697;
(statearr_14713[(9)] = inst_14565__$1);

return statearr_14713;
})();
if(cljs.core.truth_(inst_14566)){
var statearr_14714_14794 = state_14697__$1;
(statearr_14714_14794[(1)] = (5));

} else {
var statearr_14715_14795 = state_14697__$1;
(statearr_14715_14795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (15))){
var inst_14574 = (state_14697[(13)]);
var inst_14575 = (state_14697[(14)]);
var inst_14577 = (state_14697[(16)]);
var inst_14576 = (state_14697[(17)]);
var inst_14592 = (state_14697[(2)]);
var inst_14593 = (inst_14577 + (1));
var tmp14709 = inst_14574;
var tmp14710 = inst_14575;
var tmp14711 = inst_14576;
var inst_14574__$1 = tmp14709;
var inst_14575__$1 = tmp14710;
var inst_14576__$1 = tmp14711;
var inst_14577__$1 = inst_14593;
var state_14697__$1 = (function (){var statearr_14716 = state_14697;
(statearr_14716[(13)] = inst_14574__$1);

(statearr_14716[(18)] = inst_14592);

(statearr_14716[(14)] = inst_14575__$1);

(statearr_14716[(16)] = inst_14577__$1);

(statearr_14716[(17)] = inst_14576__$1);

return statearr_14716;
})();
var statearr_14717_14796 = state_14697__$1;
(statearr_14717_14796[(2)] = null);

(statearr_14717_14796[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (21))){
var inst_14619 = (state_14697[(2)]);
var state_14697__$1 = state_14697;
var statearr_14721_14797 = state_14697__$1;
(statearr_14721_14797[(2)] = inst_14619);

(statearr_14721_14797[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (31))){
var inst_14645 = (state_14697[(11)]);
var inst_14649 = done.call(null,null);
var inst_14650 = cljs.core.async.untap_STAR_.call(null,m,inst_14645);
var state_14697__$1 = (function (){var statearr_14722 = state_14697;
(statearr_14722[(19)] = inst_14649);

return statearr_14722;
})();
var statearr_14723_14798 = state_14697__$1;
(statearr_14723_14798[(2)] = inst_14650);

(statearr_14723_14798[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (32))){
var inst_14638 = (state_14697[(10)]);
var inst_14637 = (state_14697[(20)]);
var inst_14640 = (state_14697[(12)]);
var inst_14639 = (state_14697[(21)]);
var inst_14652 = (state_14697[(2)]);
var inst_14653 = (inst_14640 + (1));
var tmp14718 = inst_14638;
var tmp14719 = inst_14637;
var tmp14720 = inst_14639;
var inst_14637__$1 = tmp14719;
var inst_14638__$1 = tmp14718;
var inst_14639__$1 = tmp14720;
var inst_14640__$1 = inst_14653;
var state_14697__$1 = (function (){var statearr_14724 = state_14697;
(statearr_14724[(10)] = inst_14638__$1);

(statearr_14724[(22)] = inst_14652);

(statearr_14724[(20)] = inst_14637__$1);

(statearr_14724[(12)] = inst_14640__$1);

(statearr_14724[(21)] = inst_14639__$1);

return statearr_14724;
})();
var statearr_14725_14799 = state_14697__$1;
(statearr_14725_14799[(2)] = null);

(statearr_14725_14799[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (40))){
var inst_14665 = (state_14697[(23)]);
var inst_14669 = done.call(null,null);
var inst_14670 = cljs.core.async.untap_STAR_.call(null,m,inst_14665);
var state_14697__$1 = (function (){var statearr_14726 = state_14697;
(statearr_14726[(24)] = inst_14669);

return statearr_14726;
})();
var statearr_14727_14800 = state_14697__$1;
(statearr_14727_14800[(2)] = inst_14670);

(statearr_14727_14800[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (33))){
var inst_14656 = (state_14697[(25)]);
var inst_14658 = cljs.core.chunked_seq_QMARK_.call(null,inst_14656);
var state_14697__$1 = state_14697;
if(inst_14658){
var statearr_14728_14801 = state_14697__$1;
(statearr_14728_14801[(1)] = (36));

} else {
var statearr_14729_14802 = state_14697__$1;
(statearr_14729_14802[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (13))){
var inst_14586 = (state_14697[(26)]);
var inst_14589 = cljs.core.async.close_BANG_.call(null,inst_14586);
var state_14697__$1 = state_14697;
var statearr_14730_14803 = state_14697__$1;
(statearr_14730_14803[(2)] = inst_14589);

(statearr_14730_14803[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (22))){
var inst_14609 = (state_14697[(8)]);
var inst_14612 = cljs.core.async.close_BANG_.call(null,inst_14609);
var state_14697__$1 = state_14697;
var statearr_14731_14804 = state_14697__$1;
(statearr_14731_14804[(2)] = inst_14612);

(statearr_14731_14804[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (36))){
var inst_14656 = (state_14697[(25)]);
var inst_14660 = cljs.core.chunk_first.call(null,inst_14656);
var inst_14661 = cljs.core.chunk_rest.call(null,inst_14656);
var inst_14662 = cljs.core.count.call(null,inst_14660);
var inst_14637 = inst_14661;
var inst_14638 = inst_14660;
var inst_14639 = inst_14662;
var inst_14640 = (0);
var state_14697__$1 = (function (){var statearr_14732 = state_14697;
(statearr_14732[(10)] = inst_14638);

(statearr_14732[(20)] = inst_14637);

(statearr_14732[(12)] = inst_14640);

(statearr_14732[(21)] = inst_14639);

return statearr_14732;
})();
var statearr_14733_14805 = state_14697__$1;
(statearr_14733_14805[(2)] = null);

(statearr_14733_14805[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (41))){
var inst_14656 = (state_14697[(25)]);
var inst_14672 = (state_14697[(2)]);
var inst_14673 = cljs.core.next.call(null,inst_14656);
var inst_14637 = inst_14673;
var inst_14638 = null;
var inst_14639 = (0);
var inst_14640 = (0);
var state_14697__$1 = (function (){var statearr_14734 = state_14697;
(statearr_14734[(10)] = inst_14638);

(statearr_14734[(27)] = inst_14672);

(statearr_14734[(20)] = inst_14637);

(statearr_14734[(12)] = inst_14640);

(statearr_14734[(21)] = inst_14639);

return statearr_14734;
})();
var statearr_14735_14806 = state_14697__$1;
(statearr_14735_14806[(2)] = null);

(statearr_14735_14806[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (43))){
var state_14697__$1 = state_14697;
var statearr_14736_14807 = state_14697__$1;
(statearr_14736_14807[(2)] = null);

(statearr_14736_14807[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (29))){
var inst_14681 = (state_14697[(2)]);
var state_14697__$1 = state_14697;
var statearr_14737_14808 = state_14697__$1;
(statearr_14737_14808[(2)] = inst_14681);

(statearr_14737_14808[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (44))){
var inst_14690 = (state_14697[(2)]);
var state_14697__$1 = (function (){var statearr_14738 = state_14697;
(statearr_14738[(28)] = inst_14690);

return statearr_14738;
})();
var statearr_14739_14809 = state_14697__$1;
(statearr_14739_14809[(2)] = null);

(statearr_14739_14809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (6))){
var inst_14629 = (state_14697[(29)]);
var inst_14628 = cljs.core.deref.call(null,cs);
var inst_14629__$1 = cljs.core.keys.call(null,inst_14628);
var inst_14630 = cljs.core.count.call(null,inst_14629__$1);
var inst_14631 = cljs.core.reset_BANG_.call(null,dctr,inst_14630);
var inst_14636 = cljs.core.seq.call(null,inst_14629__$1);
var inst_14637 = inst_14636;
var inst_14638 = null;
var inst_14639 = (0);
var inst_14640 = (0);
var state_14697__$1 = (function (){var statearr_14740 = state_14697;
(statearr_14740[(29)] = inst_14629__$1);

(statearr_14740[(10)] = inst_14638);

(statearr_14740[(30)] = inst_14631);

(statearr_14740[(20)] = inst_14637);

(statearr_14740[(12)] = inst_14640);

(statearr_14740[(21)] = inst_14639);

return statearr_14740;
})();
var statearr_14741_14810 = state_14697__$1;
(statearr_14741_14810[(2)] = null);

(statearr_14741_14810[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (28))){
var inst_14656 = (state_14697[(25)]);
var inst_14637 = (state_14697[(20)]);
var inst_14656__$1 = cljs.core.seq.call(null,inst_14637);
var state_14697__$1 = (function (){var statearr_14742 = state_14697;
(statearr_14742[(25)] = inst_14656__$1);

return statearr_14742;
})();
if(inst_14656__$1){
var statearr_14743_14811 = state_14697__$1;
(statearr_14743_14811[(1)] = (33));

} else {
var statearr_14744_14812 = state_14697__$1;
(statearr_14744_14812[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (25))){
var inst_14640 = (state_14697[(12)]);
var inst_14639 = (state_14697[(21)]);
var inst_14642 = (inst_14640 < inst_14639);
var inst_14643 = inst_14642;
var state_14697__$1 = state_14697;
if(cljs.core.truth_(inst_14643)){
var statearr_14745_14813 = state_14697__$1;
(statearr_14745_14813[(1)] = (27));

} else {
var statearr_14746_14814 = state_14697__$1;
(statearr_14746_14814[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (34))){
var state_14697__$1 = state_14697;
var statearr_14747_14815 = state_14697__$1;
(statearr_14747_14815[(2)] = null);

(statearr_14747_14815[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (17))){
var state_14697__$1 = state_14697;
var statearr_14748_14816 = state_14697__$1;
(statearr_14748_14816[(2)] = null);

(statearr_14748_14816[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (3))){
var inst_14695 = (state_14697[(2)]);
var state_14697__$1 = state_14697;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14697__$1,inst_14695);
} else {
if((state_val_14698 === (12))){
var inst_14624 = (state_14697[(2)]);
var state_14697__$1 = state_14697;
var statearr_14749_14817 = state_14697__$1;
(statearr_14749_14817[(2)] = inst_14624);

(statearr_14749_14817[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (2))){
var state_14697__$1 = state_14697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14697__$1,(4),ch);
} else {
if((state_val_14698 === (23))){
var state_14697__$1 = state_14697;
var statearr_14750_14818 = state_14697__$1;
(statearr_14750_14818[(2)] = null);

(statearr_14750_14818[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (35))){
var inst_14679 = (state_14697[(2)]);
var state_14697__$1 = state_14697;
var statearr_14751_14819 = state_14697__$1;
(statearr_14751_14819[(2)] = inst_14679);

(statearr_14751_14819[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (19))){
var inst_14596 = (state_14697[(7)]);
var inst_14600 = cljs.core.chunk_first.call(null,inst_14596);
var inst_14601 = cljs.core.chunk_rest.call(null,inst_14596);
var inst_14602 = cljs.core.count.call(null,inst_14600);
var inst_14574 = inst_14601;
var inst_14575 = inst_14600;
var inst_14576 = inst_14602;
var inst_14577 = (0);
var state_14697__$1 = (function (){var statearr_14752 = state_14697;
(statearr_14752[(13)] = inst_14574);

(statearr_14752[(14)] = inst_14575);

(statearr_14752[(16)] = inst_14577);

(statearr_14752[(17)] = inst_14576);

return statearr_14752;
})();
var statearr_14753_14820 = state_14697__$1;
(statearr_14753_14820[(2)] = null);

(statearr_14753_14820[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (11))){
var inst_14596 = (state_14697[(7)]);
var inst_14574 = (state_14697[(13)]);
var inst_14596__$1 = cljs.core.seq.call(null,inst_14574);
var state_14697__$1 = (function (){var statearr_14754 = state_14697;
(statearr_14754[(7)] = inst_14596__$1);

return statearr_14754;
})();
if(inst_14596__$1){
var statearr_14755_14821 = state_14697__$1;
(statearr_14755_14821[(1)] = (16));

} else {
var statearr_14756_14822 = state_14697__$1;
(statearr_14756_14822[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (9))){
var inst_14626 = (state_14697[(2)]);
var state_14697__$1 = state_14697;
var statearr_14757_14823 = state_14697__$1;
(statearr_14757_14823[(2)] = inst_14626);

(statearr_14757_14823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (5))){
var inst_14572 = cljs.core.deref.call(null,cs);
var inst_14573 = cljs.core.seq.call(null,inst_14572);
var inst_14574 = inst_14573;
var inst_14575 = null;
var inst_14576 = (0);
var inst_14577 = (0);
var state_14697__$1 = (function (){var statearr_14758 = state_14697;
(statearr_14758[(13)] = inst_14574);

(statearr_14758[(14)] = inst_14575);

(statearr_14758[(16)] = inst_14577);

(statearr_14758[(17)] = inst_14576);

return statearr_14758;
})();
var statearr_14759_14824 = state_14697__$1;
(statearr_14759_14824[(2)] = null);

(statearr_14759_14824[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (14))){
var state_14697__$1 = state_14697;
var statearr_14760_14825 = state_14697__$1;
(statearr_14760_14825[(2)] = null);

(statearr_14760_14825[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (45))){
var inst_14687 = (state_14697[(2)]);
var state_14697__$1 = state_14697;
var statearr_14761_14826 = state_14697__$1;
(statearr_14761_14826[(2)] = inst_14687);

(statearr_14761_14826[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (26))){
var inst_14629 = (state_14697[(29)]);
var inst_14683 = (state_14697[(2)]);
var inst_14684 = cljs.core.seq.call(null,inst_14629);
var state_14697__$1 = (function (){var statearr_14762 = state_14697;
(statearr_14762[(31)] = inst_14683);

return statearr_14762;
})();
if(inst_14684){
var statearr_14763_14827 = state_14697__$1;
(statearr_14763_14827[(1)] = (42));

} else {
var statearr_14764_14828 = state_14697__$1;
(statearr_14764_14828[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (16))){
var inst_14596 = (state_14697[(7)]);
var inst_14598 = cljs.core.chunked_seq_QMARK_.call(null,inst_14596);
var state_14697__$1 = state_14697;
if(inst_14598){
var statearr_14765_14829 = state_14697__$1;
(statearr_14765_14829[(1)] = (19));

} else {
var statearr_14766_14830 = state_14697__$1;
(statearr_14766_14830[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (38))){
var inst_14676 = (state_14697[(2)]);
var state_14697__$1 = state_14697;
var statearr_14767_14831 = state_14697__$1;
(statearr_14767_14831[(2)] = inst_14676);

(statearr_14767_14831[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (30))){
var state_14697__$1 = state_14697;
var statearr_14768_14832 = state_14697__$1;
(statearr_14768_14832[(2)] = null);

(statearr_14768_14832[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (10))){
var inst_14575 = (state_14697[(14)]);
var inst_14577 = (state_14697[(16)]);
var inst_14585 = cljs.core._nth.call(null,inst_14575,inst_14577);
var inst_14586 = cljs.core.nth.call(null,inst_14585,(0),null);
var inst_14587 = cljs.core.nth.call(null,inst_14585,(1),null);
var state_14697__$1 = (function (){var statearr_14769 = state_14697;
(statearr_14769[(26)] = inst_14586);

return statearr_14769;
})();
if(cljs.core.truth_(inst_14587)){
var statearr_14770_14833 = state_14697__$1;
(statearr_14770_14833[(1)] = (13));

} else {
var statearr_14771_14834 = state_14697__$1;
(statearr_14771_14834[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (18))){
var inst_14622 = (state_14697[(2)]);
var state_14697__$1 = state_14697;
var statearr_14772_14835 = state_14697__$1;
(statearr_14772_14835[(2)] = inst_14622);

(statearr_14772_14835[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (42))){
var state_14697__$1 = state_14697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14697__$1,(45),dchan);
} else {
if((state_val_14698 === (37))){
var inst_14565 = (state_14697[(9)]);
var inst_14656 = (state_14697[(25)]);
var inst_14665 = (state_14697[(23)]);
var inst_14665__$1 = cljs.core.first.call(null,inst_14656);
var inst_14666 = cljs.core.async.put_BANG_.call(null,inst_14665__$1,inst_14565,done);
var state_14697__$1 = (function (){var statearr_14773 = state_14697;
(statearr_14773[(23)] = inst_14665__$1);

return statearr_14773;
})();
if(cljs.core.truth_(inst_14666)){
var statearr_14774_14836 = state_14697__$1;
(statearr_14774_14836[(1)] = (39));

} else {
var statearr_14775_14837 = state_14697__$1;
(statearr_14775_14837[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14698 === (8))){
var inst_14577 = (state_14697[(16)]);
var inst_14576 = (state_14697[(17)]);
var inst_14579 = (inst_14577 < inst_14576);
var inst_14580 = inst_14579;
var state_14697__$1 = state_14697;
if(cljs.core.truth_(inst_14580)){
var statearr_14776_14838 = state_14697__$1;
(statearr_14776_14838[(1)] = (10));

} else {
var statearr_14777_14839 = state_14697__$1;
(statearr_14777_14839[(1)] = (11));

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
});})(c__13432__auto___14785,cs,m,dchan,dctr,done))
;
return ((function (switch__13320__auto__,c__13432__auto___14785,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__13321__auto__ = null;
var cljs$core$async$mult_$_state_machine__13321__auto____0 = (function (){
var statearr_14781 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14781[(0)] = cljs$core$async$mult_$_state_machine__13321__auto__);

(statearr_14781[(1)] = (1));

return statearr_14781;
});
var cljs$core$async$mult_$_state_machine__13321__auto____1 = (function (state_14697){
while(true){
var ret_value__13322__auto__ = (function (){try{while(true){
var result__13323__auto__ = switch__13320__auto__.call(null,state_14697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13323__auto__;
}
break;
}
}catch (e14782){if((e14782 instanceof Object)){
var ex__13324__auto__ = e14782;
var statearr_14783_14840 = state_14697;
(statearr_14783_14840[(5)] = ex__13324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14841 = state_14697;
state_14697 = G__14841;
continue;
} else {
return ret_value__13322__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13321__auto__ = function(state_14697){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13321__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13321__auto____1.call(this,state_14697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13321__auto____0;
cljs$core$async$mult_$_state_machine__13321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13321__auto____1;
return cljs$core$async$mult_$_state_machine__13321__auto__;
})()
;})(switch__13320__auto__,c__13432__auto___14785,cs,m,dchan,dctr,done))
})();
var state__13434__auto__ = (function (){var statearr_14784 = f__13433__auto__.call(null);
(statearr_14784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13432__auto___14785);

return statearr_14784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13434__auto__);
});})(c__13432__auto___14785,cs,m,dchan,dctr,done))
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
var args14842 = [];
var len__7878__auto___14845 = arguments.length;
var i__7879__auto___14846 = (0);
while(true){
if((i__7879__auto___14846 < len__7878__auto___14845)){
args14842.push((arguments[i__7879__auto___14846]));

var G__14847 = (i__7879__auto___14846 + (1));
i__7879__auto___14846 = G__14847;
continue;
} else {
}
break;
}

var G__14844 = args14842.length;
switch (G__14844) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14842.length)].join('')));

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
var x__7433__auto__ = (((m == null))?null:m);
var m__7434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7433__auto__)]);
if(!((m__7434__auto__ == null))){
return m__7434__auto__.call(null,m,ch);
} else {
var m__7434__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7434__auto____$1 == null))){
return m__7434__auto____$1.call(null,m,ch);
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
var x__7433__auto__ = (((m == null))?null:m);
var m__7434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7433__auto__)]);
if(!((m__7434__auto__ == null))){
return m__7434__auto__.call(null,m,ch);
} else {
var m__7434__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7434__auto____$1 == null))){
return m__7434__auto____$1.call(null,m,ch);
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
var x__7433__auto__ = (((m == null))?null:m);
var m__7434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7433__auto__)]);
if(!((m__7434__auto__ == null))){
return m__7434__auto__.call(null,m);
} else {
var m__7434__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7434__auto____$1 == null))){
return m__7434__auto____$1.call(null,m);
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
var x__7433__auto__ = (((m == null))?null:m);
var m__7434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7433__auto__)]);
if(!((m__7434__auto__ == null))){
return m__7434__auto__.call(null,m,state_map);
} else {
var m__7434__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7434__auto____$1 == null))){
return m__7434__auto____$1.call(null,m,state_map);
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
var x__7433__auto__ = (((m == null))?null:m);
var m__7434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7433__auto__)]);
if(!((m__7434__auto__ == null))){
return m__7434__auto__.call(null,m,mode);
} else {
var m__7434__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7434__auto____$1 == null))){
return m__7434__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7885__auto__ = [];
var len__7878__auto___14859 = arguments.length;
var i__7879__auto___14860 = (0);
while(true){
if((i__7879__auto___14860 < len__7878__auto___14859)){
args__7885__auto__.push((arguments[i__7879__auto___14860]));

var G__14861 = (i__7879__auto___14860 + (1));
i__7879__auto___14860 = G__14861;
continue;
} else {
}
break;
}

var argseq__7886__auto__ = ((((3) < args__7885__auto__.length))?(new cljs.core.IndexedSeq(args__7885__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7886__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14853){
var map__14854 = p__14853;
var map__14854__$1 = ((((!((map__14854 == null)))?((((map__14854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14854.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14854):map__14854);
var opts = map__14854__$1;
var statearr_14856_14862 = state;
(statearr_14856_14862[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__14854,map__14854__$1,opts){
return (function (val){
var statearr_14857_14863 = state;
(statearr_14857_14863[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__14854,map__14854__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_14858_14864 = state;
(statearr_14858_14864[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14849){
var G__14850 = cljs.core.first.call(null,seq14849);
var seq14849__$1 = cljs.core.next.call(null,seq14849);
var G__14851 = cljs.core.first.call(null,seq14849__$1);
var seq14849__$2 = cljs.core.next.call(null,seq14849__$1);
var G__14852 = cljs.core.first.call(null,seq14849__$2);
var seq14849__$3 = cljs.core.next.call(null,seq14849__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14850,G__14851,G__14852,seq14849__$3);
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
if(typeof cljs.core.async.t_cljs$core$async15032 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15032 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta15033){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta15033 = meta15033;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15034,meta15033__$1){
var self__ = this;
var _15034__$1 = this;
return (new cljs.core.async.t_cljs$core$async15032(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta15033__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15032.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15034){
var self__ = this;
var _15034__$1 = this;
return self__.meta15033;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15032.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15032.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15032.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15032.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15032.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15032.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15032.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15032.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async15032.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta15033","meta15033",-979037677,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15032.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15032.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15032";

cljs.core.async.t_cljs$core$async15032.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7376__auto__,writer__7377__auto__,opt__7378__auto__){
return cljs.core._write.call(null,writer__7377__auto__,"cljs.core.async/t_cljs$core$async15032");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async15032 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async15032(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta15033){
return (new cljs.core.async.t_cljs$core$async15032(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta15033));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async15032(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13432__auto___15199 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13432__auto___15199,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__13433__auto__ = (function (){var switch__13320__auto__ = ((function (c__13432__auto___15199,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15136){
var state_val_15137 = (state_15136[(1)]);
if((state_val_15137 === (7))){
var inst_15051 = (state_15136[(2)]);
var state_15136__$1 = state_15136;
var statearr_15138_15200 = state_15136__$1;
(statearr_15138_15200[(2)] = inst_15051);

(statearr_15138_15200[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (20))){
var inst_15063 = (state_15136[(7)]);
var state_15136__$1 = state_15136;
var statearr_15139_15201 = state_15136__$1;
(statearr_15139_15201[(2)] = inst_15063);

(statearr_15139_15201[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (27))){
var state_15136__$1 = state_15136;
var statearr_15140_15202 = state_15136__$1;
(statearr_15140_15202[(2)] = null);

(statearr_15140_15202[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (1))){
var inst_15038 = (state_15136[(8)]);
var inst_15038__$1 = calc_state.call(null);
var inst_15040 = (inst_15038__$1 == null);
var inst_15041 = cljs.core.not.call(null,inst_15040);
var state_15136__$1 = (function (){var statearr_15141 = state_15136;
(statearr_15141[(8)] = inst_15038__$1);

return statearr_15141;
})();
if(inst_15041){
var statearr_15142_15203 = state_15136__$1;
(statearr_15142_15203[(1)] = (2));

} else {
var statearr_15143_15204 = state_15136__$1;
(statearr_15143_15204[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (24))){
var inst_15087 = (state_15136[(9)]);
var inst_15096 = (state_15136[(10)]);
var inst_15110 = (state_15136[(11)]);
var inst_15110__$1 = inst_15087.call(null,inst_15096);
var state_15136__$1 = (function (){var statearr_15144 = state_15136;
(statearr_15144[(11)] = inst_15110__$1);

return statearr_15144;
})();
if(cljs.core.truth_(inst_15110__$1)){
var statearr_15145_15205 = state_15136__$1;
(statearr_15145_15205[(1)] = (29));

} else {
var statearr_15146_15206 = state_15136__$1;
(statearr_15146_15206[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (4))){
var inst_15054 = (state_15136[(2)]);
var state_15136__$1 = state_15136;
if(cljs.core.truth_(inst_15054)){
var statearr_15147_15207 = state_15136__$1;
(statearr_15147_15207[(1)] = (8));

} else {
var statearr_15148_15208 = state_15136__$1;
(statearr_15148_15208[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (15))){
var inst_15081 = (state_15136[(2)]);
var state_15136__$1 = state_15136;
if(cljs.core.truth_(inst_15081)){
var statearr_15149_15209 = state_15136__$1;
(statearr_15149_15209[(1)] = (19));

} else {
var statearr_15150_15210 = state_15136__$1;
(statearr_15150_15210[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (21))){
var inst_15086 = (state_15136[(12)]);
var inst_15086__$1 = (state_15136[(2)]);
var inst_15087 = cljs.core.get.call(null,inst_15086__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15088 = cljs.core.get.call(null,inst_15086__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15089 = cljs.core.get.call(null,inst_15086__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15136__$1 = (function (){var statearr_15151 = state_15136;
(statearr_15151[(9)] = inst_15087);

(statearr_15151[(13)] = inst_15088);

(statearr_15151[(12)] = inst_15086__$1);

return statearr_15151;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_15136__$1,(22),inst_15089);
} else {
if((state_val_15137 === (31))){
var inst_15118 = (state_15136[(2)]);
var state_15136__$1 = state_15136;
if(cljs.core.truth_(inst_15118)){
var statearr_15152_15211 = state_15136__$1;
(statearr_15152_15211[(1)] = (32));

} else {
var statearr_15153_15212 = state_15136__$1;
(statearr_15153_15212[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (32))){
var inst_15095 = (state_15136[(14)]);
var state_15136__$1 = state_15136;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15136__$1,(35),out,inst_15095);
} else {
if((state_val_15137 === (33))){
var inst_15086 = (state_15136[(12)]);
var inst_15063 = inst_15086;
var state_15136__$1 = (function (){var statearr_15154 = state_15136;
(statearr_15154[(7)] = inst_15063);

return statearr_15154;
})();
var statearr_15155_15213 = state_15136__$1;
(statearr_15155_15213[(2)] = null);

(statearr_15155_15213[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (13))){
var inst_15063 = (state_15136[(7)]);
var inst_15070 = inst_15063.cljs$lang$protocol_mask$partition0$;
var inst_15071 = (inst_15070 & (64));
var inst_15072 = inst_15063.cljs$core$ISeq$;
var inst_15073 = (cljs.core.PROTOCOL_SENTINEL === inst_15072);
var inst_15074 = (inst_15071) || (inst_15073);
var state_15136__$1 = state_15136;
if(cljs.core.truth_(inst_15074)){
var statearr_15156_15214 = state_15136__$1;
(statearr_15156_15214[(1)] = (16));

} else {
var statearr_15157_15215 = state_15136__$1;
(statearr_15157_15215[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (22))){
var inst_15095 = (state_15136[(14)]);
var inst_15096 = (state_15136[(10)]);
var inst_15094 = (state_15136[(2)]);
var inst_15095__$1 = cljs.core.nth.call(null,inst_15094,(0),null);
var inst_15096__$1 = cljs.core.nth.call(null,inst_15094,(1),null);
var inst_15097 = (inst_15095__$1 == null);
var inst_15098 = cljs.core._EQ_.call(null,inst_15096__$1,change);
var inst_15099 = (inst_15097) || (inst_15098);
var state_15136__$1 = (function (){var statearr_15158 = state_15136;
(statearr_15158[(14)] = inst_15095__$1);

(statearr_15158[(10)] = inst_15096__$1);

return statearr_15158;
})();
if(cljs.core.truth_(inst_15099)){
var statearr_15159_15216 = state_15136__$1;
(statearr_15159_15216[(1)] = (23));

} else {
var statearr_15160_15217 = state_15136__$1;
(statearr_15160_15217[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (36))){
var inst_15086 = (state_15136[(12)]);
var inst_15063 = inst_15086;
var state_15136__$1 = (function (){var statearr_15161 = state_15136;
(statearr_15161[(7)] = inst_15063);

return statearr_15161;
})();
var statearr_15162_15218 = state_15136__$1;
(statearr_15162_15218[(2)] = null);

(statearr_15162_15218[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (29))){
var inst_15110 = (state_15136[(11)]);
var state_15136__$1 = state_15136;
var statearr_15163_15219 = state_15136__$1;
(statearr_15163_15219[(2)] = inst_15110);

(statearr_15163_15219[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (6))){
var state_15136__$1 = state_15136;
var statearr_15164_15220 = state_15136__$1;
(statearr_15164_15220[(2)] = false);

(statearr_15164_15220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (28))){
var inst_15106 = (state_15136[(2)]);
var inst_15107 = calc_state.call(null);
var inst_15063 = inst_15107;
var state_15136__$1 = (function (){var statearr_15165 = state_15136;
(statearr_15165[(15)] = inst_15106);

(statearr_15165[(7)] = inst_15063);

return statearr_15165;
})();
var statearr_15166_15221 = state_15136__$1;
(statearr_15166_15221[(2)] = null);

(statearr_15166_15221[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (25))){
var inst_15132 = (state_15136[(2)]);
var state_15136__$1 = state_15136;
var statearr_15167_15222 = state_15136__$1;
(statearr_15167_15222[(2)] = inst_15132);

(statearr_15167_15222[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (34))){
var inst_15130 = (state_15136[(2)]);
var state_15136__$1 = state_15136;
var statearr_15168_15223 = state_15136__$1;
(statearr_15168_15223[(2)] = inst_15130);

(statearr_15168_15223[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (17))){
var state_15136__$1 = state_15136;
var statearr_15169_15224 = state_15136__$1;
(statearr_15169_15224[(2)] = false);

(statearr_15169_15224[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (3))){
var state_15136__$1 = state_15136;
var statearr_15170_15225 = state_15136__$1;
(statearr_15170_15225[(2)] = false);

(statearr_15170_15225[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (12))){
var inst_15134 = (state_15136[(2)]);
var state_15136__$1 = state_15136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15136__$1,inst_15134);
} else {
if((state_val_15137 === (2))){
var inst_15038 = (state_15136[(8)]);
var inst_15043 = inst_15038.cljs$lang$protocol_mask$partition0$;
var inst_15044 = (inst_15043 & (64));
var inst_15045 = inst_15038.cljs$core$ISeq$;
var inst_15046 = (cljs.core.PROTOCOL_SENTINEL === inst_15045);
var inst_15047 = (inst_15044) || (inst_15046);
var state_15136__$1 = state_15136;
if(cljs.core.truth_(inst_15047)){
var statearr_15171_15226 = state_15136__$1;
(statearr_15171_15226[(1)] = (5));

} else {
var statearr_15172_15227 = state_15136__$1;
(statearr_15172_15227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (23))){
var inst_15095 = (state_15136[(14)]);
var inst_15101 = (inst_15095 == null);
var state_15136__$1 = state_15136;
if(cljs.core.truth_(inst_15101)){
var statearr_15173_15228 = state_15136__$1;
(statearr_15173_15228[(1)] = (26));

} else {
var statearr_15174_15229 = state_15136__$1;
(statearr_15174_15229[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (35))){
var inst_15121 = (state_15136[(2)]);
var state_15136__$1 = state_15136;
if(cljs.core.truth_(inst_15121)){
var statearr_15175_15230 = state_15136__$1;
(statearr_15175_15230[(1)] = (36));

} else {
var statearr_15176_15231 = state_15136__$1;
(statearr_15176_15231[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (19))){
var inst_15063 = (state_15136[(7)]);
var inst_15083 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15063);
var state_15136__$1 = state_15136;
var statearr_15177_15232 = state_15136__$1;
(statearr_15177_15232[(2)] = inst_15083);

(statearr_15177_15232[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (11))){
var inst_15063 = (state_15136[(7)]);
var inst_15067 = (inst_15063 == null);
var inst_15068 = cljs.core.not.call(null,inst_15067);
var state_15136__$1 = state_15136;
if(inst_15068){
var statearr_15178_15233 = state_15136__$1;
(statearr_15178_15233[(1)] = (13));

} else {
var statearr_15179_15234 = state_15136__$1;
(statearr_15179_15234[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (9))){
var inst_15038 = (state_15136[(8)]);
var state_15136__$1 = state_15136;
var statearr_15180_15235 = state_15136__$1;
(statearr_15180_15235[(2)] = inst_15038);

(statearr_15180_15235[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (5))){
var state_15136__$1 = state_15136;
var statearr_15181_15236 = state_15136__$1;
(statearr_15181_15236[(2)] = true);

(statearr_15181_15236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (14))){
var state_15136__$1 = state_15136;
var statearr_15182_15237 = state_15136__$1;
(statearr_15182_15237[(2)] = false);

(statearr_15182_15237[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (26))){
var inst_15096 = (state_15136[(10)]);
var inst_15103 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15096);
var state_15136__$1 = state_15136;
var statearr_15183_15238 = state_15136__$1;
(statearr_15183_15238[(2)] = inst_15103);

(statearr_15183_15238[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (16))){
var state_15136__$1 = state_15136;
var statearr_15184_15239 = state_15136__$1;
(statearr_15184_15239[(2)] = true);

(statearr_15184_15239[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (38))){
var inst_15126 = (state_15136[(2)]);
var state_15136__$1 = state_15136;
var statearr_15185_15240 = state_15136__$1;
(statearr_15185_15240[(2)] = inst_15126);

(statearr_15185_15240[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (30))){
var inst_15087 = (state_15136[(9)]);
var inst_15096 = (state_15136[(10)]);
var inst_15088 = (state_15136[(13)]);
var inst_15113 = cljs.core.empty_QMARK_.call(null,inst_15087);
var inst_15114 = inst_15088.call(null,inst_15096);
var inst_15115 = cljs.core.not.call(null,inst_15114);
var inst_15116 = (inst_15113) && (inst_15115);
var state_15136__$1 = state_15136;
var statearr_15186_15241 = state_15136__$1;
(statearr_15186_15241[(2)] = inst_15116);

(statearr_15186_15241[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (10))){
var inst_15038 = (state_15136[(8)]);
var inst_15059 = (state_15136[(2)]);
var inst_15060 = cljs.core.get.call(null,inst_15059,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15061 = cljs.core.get.call(null,inst_15059,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15062 = cljs.core.get.call(null,inst_15059,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15063 = inst_15038;
var state_15136__$1 = (function (){var statearr_15187 = state_15136;
(statearr_15187[(16)] = inst_15060);

(statearr_15187[(17)] = inst_15061);

(statearr_15187[(18)] = inst_15062);

(statearr_15187[(7)] = inst_15063);

return statearr_15187;
})();
var statearr_15188_15242 = state_15136__$1;
(statearr_15188_15242[(2)] = null);

(statearr_15188_15242[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (18))){
var inst_15078 = (state_15136[(2)]);
var state_15136__$1 = state_15136;
var statearr_15189_15243 = state_15136__$1;
(statearr_15189_15243[(2)] = inst_15078);

(statearr_15189_15243[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (37))){
var state_15136__$1 = state_15136;
var statearr_15190_15244 = state_15136__$1;
(statearr_15190_15244[(2)] = null);

(statearr_15190_15244[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (8))){
var inst_15038 = (state_15136[(8)]);
var inst_15056 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15038);
var state_15136__$1 = state_15136;
var statearr_15191_15245 = state_15136__$1;
(statearr_15191_15245[(2)] = inst_15056);

(statearr_15191_15245[(1)] = (10));


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
});})(c__13432__auto___15199,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__13320__auto__,c__13432__auto___15199,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__13321__auto__ = null;
var cljs$core$async$mix_$_state_machine__13321__auto____0 = (function (){
var statearr_15195 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15195[(0)] = cljs$core$async$mix_$_state_machine__13321__auto__);

(statearr_15195[(1)] = (1));

return statearr_15195;
});
var cljs$core$async$mix_$_state_machine__13321__auto____1 = (function (state_15136){
while(true){
var ret_value__13322__auto__ = (function (){try{while(true){
var result__13323__auto__ = switch__13320__auto__.call(null,state_15136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13323__auto__;
}
break;
}
}catch (e15196){if((e15196 instanceof Object)){
var ex__13324__auto__ = e15196;
var statearr_15197_15246 = state_15136;
(statearr_15197_15246[(5)] = ex__13324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15247 = state_15136;
state_15136 = G__15247;
continue;
} else {
return ret_value__13322__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13321__auto__ = function(state_15136){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13321__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13321__auto____1.call(this,state_15136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13321__auto____0;
cljs$core$async$mix_$_state_machine__13321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13321__auto____1;
return cljs$core$async$mix_$_state_machine__13321__auto__;
})()
;})(switch__13320__auto__,c__13432__auto___15199,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__13434__auto__ = (function (){var statearr_15198 = f__13433__auto__.call(null);
(statearr_15198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13432__auto___15199);

return statearr_15198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13434__auto__);
});})(c__13432__auto___15199,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__7433__auto__ = (((p == null))?null:p);
var m__7434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7433__auto__)]);
if(!((m__7434__auto__ == null))){
return m__7434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__7434__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7434__auto____$1 == null))){
return m__7434__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__7433__auto__ = (((p == null))?null:p);
var m__7434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7433__auto__)]);
if(!((m__7434__auto__ == null))){
return m__7434__auto__.call(null,p,v,ch);
} else {
var m__7434__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7434__auto____$1 == null))){
return m__7434__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args15248 = [];
var len__7878__auto___15251 = arguments.length;
var i__7879__auto___15252 = (0);
while(true){
if((i__7879__auto___15252 < len__7878__auto___15251)){
args15248.push((arguments[i__7879__auto___15252]));

var G__15253 = (i__7879__auto___15252 + (1));
i__7879__auto___15252 = G__15253;
continue;
} else {
}
break;
}

var G__15250 = args15248.length;
switch (G__15250) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15248.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7433__auto__ = (((p == null))?null:p);
var m__7434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7433__auto__)]);
if(!((m__7434__auto__ == null))){
return m__7434__auto__.call(null,p);
} else {
var m__7434__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7434__auto____$1 == null))){
return m__7434__auto____$1.call(null,p);
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
var x__7433__auto__ = (((p == null))?null:p);
var m__7434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7433__auto__)]);
if(!((m__7434__auto__ == null))){
return m__7434__auto__.call(null,p,v);
} else {
var m__7434__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7434__auto____$1 == null))){
return m__7434__auto____$1.call(null,p,v);
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
var args15256 = [];
var len__7878__auto___15381 = arguments.length;
var i__7879__auto___15382 = (0);
while(true){
if((i__7879__auto___15382 < len__7878__auto___15381)){
args15256.push((arguments[i__7879__auto___15382]));

var G__15383 = (i__7879__auto___15382 + (1));
i__7879__auto___15382 = G__15383;
continue;
} else {
}
break;
}

var G__15258 = args15256.length;
switch (G__15258) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15256.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6765__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6765__auto__)){
return or__6765__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6765__auto__,mults){
return (function (p1__15255_SHARP_){
if(cljs.core.truth_(p1__15255_SHARP_.call(null,topic))){
return p1__15255_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__15255_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6765__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async15259 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15259 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15260){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15260 = meta15260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15261,meta15260__$1){
var self__ = this;
var _15261__$1 = this;
return (new cljs.core.async.t_cljs$core$async15259(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15260__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15259.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15261){
var self__ = this;
var _15261__$1 = this;
return self__.meta15260;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15259.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15259.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15259.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15259.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15259.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async15259.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15259.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15259.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15260","meta15260",-1820642901,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15259.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15259.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15259";

cljs.core.async.t_cljs$core$async15259.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7376__auto__,writer__7377__auto__,opt__7378__auto__){
return cljs.core._write.call(null,writer__7377__auto__,"cljs.core.async/t_cljs$core$async15259");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async15259 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async15259(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15260){
return (new cljs.core.async.t_cljs$core$async15259(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15260));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async15259(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13432__auto___15385 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13432__auto___15385,mults,ensure_mult,p){
return (function (){
var f__13433__auto__ = (function (){var switch__13320__auto__ = ((function (c__13432__auto___15385,mults,ensure_mult,p){
return (function (state_15333){
var state_val_15334 = (state_15333[(1)]);
if((state_val_15334 === (7))){
var inst_15329 = (state_15333[(2)]);
var state_15333__$1 = state_15333;
var statearr_15335_15386 = state_15333__$1;
(statearr_15335_15386[(2)] = inst_15329);

(statearr_15335_15386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15334 === (20))){
var state_15333__$1 = state_15333;
var statearr_15336_15387 = state_15333__$1;
(statearr_15336_15387[(2)] = null);

(statearr_15336_15387[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15334 === (1))){
var state_15333__$1 = state_15333;
var statearr_15337_15388 = state_15333__$1;
(statearr_15337_15388[(2)] = null);

(statearr_15337_15388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15334 === (24))){
var inst_15312 = (state_15333[(7)]);
var inst_15321 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15312);
var state_15333__$1 = state_15333;
var statearr_15338_15389 = state_15333__$1;
(statearr_15338_15389[(2)] = inst_15321);

(statearr_15338_15389[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15334 === (4))){
var inst_15264 = (state_15333[(8)]);
var inst_15264__$1 = (state_15333[(2)]);
var inst_15265 = (inst_15264__$1 == null);
var state_15333__$1 = (function (){var statearr_15339 = state_15333;
(statearr_15339[(8)] = inst_15264__$1);

return statearr_15339;
})();
if(cljs.core.truth_(inst_15265)){
var statearr_15340_15390 = state_15333__$1;
(statearr_15340_15390[(1)] = (5));

} else {
var statearr_15341_15391 = state_15333__$1;
(statearr_15341_15391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15334 === (15))){
var inst_15306 = (state_15333[(2)]);
var state_15333__$1 = state_15333;
var statearr_15342_15392 = state_15333__$1;
(statearr_15342_15392[(2)] = inst_15306);

(statearr_15342_15392[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15334 === (21))){
var inst_15326 = (state_15333[(2)]);
var state_15333__$1 = (function (){var statearr_15343 = state_15333;
(statearr_15343[(9)] = inst_15326);

return statearr_15343;
})();
var statearr_15344_15393 = state_15333__$1;
(statearr_15344_15393[(2)] = null);

(statearr_15344_15393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15334 === (13))){
var inst_15288 = (state_15333[(10)]);
var inst_15290 = cljs.core.chunked_seq_QMARK_.call(null,inst_15288);
var state_15333__$1 = state_15333;
if(inst_15290){
var statearr_15345_15394 = state_15333__$1;
(statearr_15345_15394[(1)] = (16));

} else {
var statearr_15346_15395 = state_15333__$1;
(statearr_15346_15395[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15334 === (22))){
var inst_15318 = (state_15333[(2)]);
var state_15333__$1 = state_15333;
if(cljs.core.truth_(inst_15318)){
var statearr_15347_15396 = state_15333__$1;
(statearr_15347_15396[(1)] = (23));

} else {
var statearr_15348_15397 = state_15333__$1;
(statearr_15348_15397[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15334 === (6))){
var inst_15312 = (state_15333[(7)]);
var inst_15264 = (state_15333[(8)]);
var inst_15314 = (state_15333[(11)]);
var inst_15312__$1 = topic_fn.call(null,inst_15264);
var inst_15313 = cljs.core.deref.call(null,mults);
var inst_15314__$1 = cljs.core.get.call(null,inst_15313,inst_15312__$1);
var state_15333__$1 = (function (){var statearr_15349 = state_15333;
(statearr_15349[(7)] = inst_15312__$1);

(statearr_15349[(11)] = inst_15314__$1);

return statearr_15349;
})();
if(cljs.core.truth_(inst_15314__$1)){
var statearr_15350_15398 = state_15333__$1;
(statearr_15350_15398[(1)] = (19));

} else {
var statearr_15351_15399 = state_15333__$1;
(statearr_15351_15399[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15334 === (25))){
var inst_15323 = (state_15333[(2)]);
var state_15333__$1 = state_15333;
var statearr_15352_15400 = state_15333__$1;
(statearr_15352_15400[(2)] = inst_15323);

(statearr_15352_15400[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15334 === (17))){
var inst_15288 = (state_15333[(10)]);
var inst_15297 = cljs.core.first.call(null,inst_15288);
var inst_15298 = cljs.core.async.muxch_STAR_.call(null,inst_15297);
var inst_15299 = cljs.core.async.close_BANG_.call(null,inst_15298);
var inst_15300 = cljs.core.next.call(null,inst_15288);
var inst_15274 = inst_15300;
var inst_15275 = null;
var inst_15276 = (0);
var inst_15277 = (0);
var state_15333__$1 = (function (){var statearr_15353 = state_15333;
(statearr_15353[(12)] = inst_15277);

(statearr_15353[(13)] = inst_15299);

(statearr_15353[(14)] = inst_15275);

(statearr_15353[(15)] = inst_15276);

(statearr_15353[(16)] = inst_15274);

return statearr_15353;
})();
var statearr_15354_15401 = state_15333__$1;
(statearr_15354_15401[(2)] = null);

(statearr_15354_15401[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15334 === (3))){
var inst_15331 = (state_15333[(2)]);
var state_15333__$1 = state_15333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15333__$1,inst_15331);
} else {
if((state_val_15334 === (12))){
var inst_15308 = (state_15333[(2)]);
var state_15333__$1 = state_15333;
var statearr_15355_15402 = state_15333__$1;
(statearr_15355_15402[(2)] = inst_15308);

(statearr_15355_15402[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15334 === (2))){
var state_15333__$1 = state_15333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15333__$1,(4),ch);
} else {
if((state_val_15334 === (23))){
var state_15333__$1 = state_15333;
var statearr_15356_15403 = state_15333__$1;
(statearr_15356_15403[(2)] = null);

(statearr_15356_15403[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15334 === (19))){
var inst_15264 = (state_15333[(8)]);
var inst_15314 = (state_15333[(11)]);
var inst_15316 = cljs.core.async.muxch_STAR_.call(null,inst_15314);
var state_15333__$1 = state_15333;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15333__$1,(22),inst_15316,inst_15264);
} else {
if((state_val_15334 === (11))){
var inst_15288 = (state_15333[(10)]);
var inst_15274 = (state_15333[(16)]);
var inst_15288__$1 = cljs.core.seq.call(null,inst_15274);
var state_15333__$1 = (function (){var statearr_15357 = state_15333;
(statearr_15357[(10)] = inst_15288__$1);

return statearr_15357;
})();
if(inst_15288__$1){
var statearr_15358_15404 = state_15333__$1;
(statearr_15358_15404[(1)] = (13));

} else {
var statearr_15359_15405 = state_15333__$1;
(statearr_15359_15405[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15334 === (9))){
var inst_15310 = (state_15333[(2)]);
var state_15333__$1 = state_15333;
var statearr_15360_15406 = state_15333__$1;
(statearr_15360_15406[(2)] = inst_15310);

(statearr_15360_15406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15334 === (5))){
var inst_15271 = cljs.core.deref.call(null,mults);
var inst_15272 = cljs.core.vals.call(null,inst_15271);
var inst_15273 = cljs.core.seq.call(null,inst_15272);
var inst_15274 = inst_15273;
var inst_15275 = null;
var inst_15276 = (0);
var inst_15277 = (0);
var state_15333__$1 = (function (){var statearr_15361 = state_15333;
(statearr_15361[(12)] = inst_15277);

(statearr_15361[(14)] = inst_15275);

(statearr_15361[(15)] = inst_15276);

(statearr_15361[(16)] = inst_15274);

return statearr_15361;
})();
var statearr_15362_15407 = state_15333__$1;
(statearr_15362_15407[(2)] = null);

(statearr_15362_15407[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15334 === (14))){
var state_15333__$1 = state_15333;
var statearr_15366_15408 = state_15333__$1;
(statearr_15366_15408[(2)] = null);

(statearr_15366_15408[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15334 === (16))){
var inst_15288 = (state_15333[(10)]);
var inst_15292 = cljs.core.chunk_first.call(null,inst_15288);
var inst_15293 = cljs.core.chunk_rest.call(null,inst_15288);
var inst_15294 = cljs.core.count.call(null,inst_15292);
var inst_15274 = inst_15293;
var inst_15275 = inst_15292;
var inst_15276 = inst_15294;
var inst_15277 = (0);
var state_15333__$1 = (function (){var statearr_15367 = state_15333;
(statearr_15367[(12)] = inst_15277);

(statearr_15367[(14)] = inst_15275);

(statearr_15367[(15)] = inst_15276);

(statearr_15367[(16)] = inst_15274);

return statearr_15367;
})();
var statearr_15368_15409 = state_15333__$1;
(statearr_15368_15409[(2)] = null);

(statearr_15368_15409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15334 === (10))){
var inst_15277 = (state_15333[(12)]);
var inst_15275 = (state_15333[(14)]);
var inst_15276 = (state_15333[(15)]);
var inst_15274 = (state_15333[(16)]);
var inst_15282 = cljs.core._nth.call(null,inst_15275,inst_15277);
var inst_15283 = cljs.core.async.muxch_STAR_.call(null,inst_15282);
var inst_15284 = cljs.core.async.close_BANG_.call(null,inst_15283);
var inst_15285 = (inst_15277 + (1));
var tmp15363 = inst_15275;
var tmp15364 = inst_15276;
var tmp15365 = inst_15274;
var inst_15274__$1 = tmp15365;
var inst_15275__$1 = tmp15363;
var inst_15276__$1 = tmp15364;
var inst_15277__$1 = inst_15285;
var state_15333__$1 = (function (){var statearr_15369 = state_15333;
(statearr_15369[(12)] = inst_15277__$1);

(statearr_15369[(14)] = inst_15275__$1);

(statearr_15369[(15)] = inst_15276__$1);

(statearr_15369[(17)] = inst_15284);

(statearr_15369[(16)] = inst_15274__$1);

return statearr_15369;
})();
var statearr_15370_15410 = state_15333__$1;
(statearr_15370_15410[(2)] = null);

(statearr_15370_15410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15334 === (18))){
var inst_15303 = (state_15333[(2)]);
var state_15333__$1 = state_15333;
var statearr_15371_15411 = state_15333__$1;
(statearr_15371_15411[(2)] = inst_15303);

(statearr_15371_15411[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15334 === (8))){
var inst_15277 = (state_15333[(12)]);
var inst_15276 = (state_15333[(15)]);
var inst_15279 = (inst_15277 < inst_15276);
var inst_15280 = inst_15279;
var state_15333__$1 = state_15333;
if(cljs.core.truth_(inst_15280)){
var statearr_15372_15412 = state_15333__$1;
(statearr_15372_15412[(1)] = (10));

} else {
var statearr_15373_15413 = state_15333__$1;
(statearr_15373_15413[(1)] = (11));

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
});})(c__13432__auto___15385,mults,ensure_mult,p))
;
return ((function (switch__13320__auto__,c__13432__auto___15385,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__13321__auto__ = null;
var cljs$core$async$state_machine__13321__auto____0 = (function (){
var statearr_15377 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15377[(0)] = cljs$core$async$state_machine__13321__auto__);

(statearr_15377[(1)] = (1));

return statearr_15377;
});
var cljs$core$async$state_machine__13321__auto____1 = (function (state_15333){
while(true){
var ret_value__13322__auto__ = (function (){try{while(true){
var result__13323__auto__ = switch__13320__auto__.call(null,state_15333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13323__auto__;
}
break;
}
}catch (e15378){if((e15378 instanceof Object)){
var ex__13324__auto__ = e15378;
var statearr_15379_15414 = state_15333;
(statearr_15379_15414[(5)] = ex__13324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15415 = state_15333;
state_15333 = G__15415;
continue;
} else {
return ret_value__13322__auto__;
}
break;
}
});
cljs$core$async$state_machine__13321__auto__ = function(state_15333){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13321__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13321__auto____1.call(this,state_15333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13321__auto____0;
cljs$core$async$state_machine__13321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13321__auto____1;
return cljs$core$async$state_machine__13321__auto__;
})()
;})(switch__13320__auto__,c__13432__auto___15385,mults,ensure_mult,p))
})();
var state__13434__auto__ = (function (){var statearr_15380 = f__13433__auto__.call(null);
(statearr_15380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13432__auto___15385);

return statearr_15380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13434__auto__);
});})(c__13432__auto___15385,mults,ensure_mult,p))
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
var args15416 = [];
var len__7878__auto___15419 = arguments.length;
var i__7879__auto___15420 = (0);
while(true){
if((i__7879__auto___15420 < len__7878__auto___15419)){
args15416.push((arguments[i__7879__auto___15420]));

var G__15421 = (i__7879__auto___15420 + (1));
i__7879__auto___15420 = G__15421;
continue;
} else {
}
break;
}

var G__15418 = args15416.length;
switch (G__15418) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15416.length)].join('')));

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
var args15423 = [];
var len__7878__auto___15426 = arguments.length;
var i__7879__auto___15427 = (0);
while(true){
if((i__7879__auto___15427 < len__7878__auto___15426)){
args15423.push((arguments[i__7879__auto___15427]));

var G__15428 = (i__7879__auto___15427 + (1));
i__7879__auto___15427 = G__15428;
continue;
} else {
}
break;
}

var G__15425 = args15423.length;
switch (G__15425) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15423.length)].join('')));

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
var args15430 = [];
var len__7878__auto___15501 = arguments.length;
var i__7879__auto___15502 = (0);
while(true){
if((i__7879__auto___15502 < len__7878__auto___15501)){
args15430.push((arguments[i__7879__auto___15502]));

var G__15503 = (i__7879__auto___15502 + (1));
i__7879__auto___15502 = G__15503;
continue;
} else {
}
break;
}

var G__15432 = args15430.length;
switch (G__15432) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15430.length)].join('')));

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
var c__13432__auto___15505 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13432__auto___15505,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__13433__auto__ = (function (){var switch__13320__auto__ = ((function (c__13432__auto___15505,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15471){
var state_val_15472 = (state_15471[(1)]);
if((state_val_15472 === (7))){
var state_15471__$1 = state_15471;
var statearr_15473_15506 = state_15471__$1;
(statearr_15473_15506[(2)] = null);

(statearr_15473_15506[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15472 === (1))){
var state_15471__$1 = state_15471;
var statearr_15474_15507 = state_15471__$1;
(statearr_15474_15507[(2)] = null);

(statearr_15474_15507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15472 === (4))){
var inst_15435 = (state_15471[(7)]);
var inst_15437 = (inst_15435 < cnt);
var state_15471__$1 = state_15471;
if(cljs.core.truth_(inst_15437)){
var statearr_15475_15508 = state_15471__$1;
(statearr_15475_15508[(1)] = (6));

} else {
var statearr_15476_15509 = state_15471__$1;
(statearr_15476_15509[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15472 === (15))){
var inst_15467 = (state_15471[(2)]);
var state_15471__$1 = state_15471;
var statearr_15477_15510 = state_15471__$1;
(statearr_15477_15510[(2)] = inst_15467);

(statearr_15477_15510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15472 === (13))){
var inst_15460 = cljs.core.async.close_BANG_.call(null,out);
var state_15471__$1 = state_15471;
var statearr_15478_15511 = state_15471__$1;
(statearr_15478_15511[(2)] = inst_15460);

(statearr_15478_15511[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15472 === (6))){
var state_15471__$1 = state_15471;
var statearr_15479_15512 = state_15471__$1;
(statearr_15479_15512[(2)] = null);

(statearr_15479_15512[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15472 === (3))){
var inst_15469 = (state_15471[(2)]);
var state_15471__$1 = state_15471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15471__$1,inst_15469);
} else {
if((state_val_15472 === (12))){
var inst_15457 = (state_15471[(8)]);
var inst_15457__$1 = (state_15471[(2)]);
var inst_15458 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15457__$1);
var state_15471__$1 = (function (){var statearr_15480 = state_15471;
(statearr_15480[(8)] = inst_15457__$1);

return statearr_15480;
})();
if(cljs.core.truth_(inst_15458)){
var statearr_15481_15513 = state_15471__$1;
(statearr_15481_15513[(1)] = (13));

} else {
var statearr_15482_15514 = state_15471__$1;
(statearr_15482_15514[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15472 === (2))){
var inst_15434 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_15435 = (0);
var state_15471__$1 = (function (){var statearr_15483 = state_15471;
(statearr_15483[(7)] = inst_15435);

(statearr_15483[(9)] = inst_15434);

return statearr_15483;
})();
var statearr_15484_15515 = state_15471__$1;
(statearr_15484_15515[(2)] = null);

(statearr_15484_15515[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15472 === (11))){
var inst_15435 = (state_15471[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15471,(10),Object,null,(9));
var inst_15444 = chs__$1.call(null,inst_15435);
var inst_15445 = done.call(null,inst_15435);
var inst_15446 = cljs.core.async.take_BANG_.call(null,inst_15444,inst_15445);
var state_15471__$1 = state_15471;
var statearr_15485_15516 = state_15471__$1;
(statearr_15485_15516[(2)] = inst_15446);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15471__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15472 === (9))){
var inst_15435 = (state_15471[(7)]);
var inst_15448 = (state_15471[(2)]);
var inst_15449 = (inst_15435 + (1));
var inst_15435__$1 = inst_15449;
var state_15471__$1 = (function (){var statearr_15486 = state_15471;
(statearr_15486[(10)] = inst_15448);

(statearr_15486[(7)] = inst_15435__$1);

return statearr_15486;
})();
var statearr_15487_15517 = state_15471__$1;
(statearr_15487_15517[(2)] = null);

(statearr_15487_15517[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15472 === (5))){
var inst_15455 = (state_15471[(2)]);
var state_15471__$1 = (function (){var statearr_15488 = state_15471;
(statearr_15488[(11)] = inst_15455);

return statearr_15488;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15471__$1,(12),dchan);
} else {
if((state_val_15472 === (14))){
var inst_15457 = (state_15471[(8)]);
var inst_15462 = cljs.core.apply.call(null,f,inst_15457);
var state_15471__$1 = state_15471;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15471__$1,(16),out,inst_15462);
} else {
if((state_val_15472 === (16))){
var inst_15464 = (state_15471[(2)]);
var state_15471__$1 = (function (){var statearr_15489 = state_15471;
(statearr_15489[(12)] = inst_15464);

return statearr_15489;
})();
var statearr_15490_15518 = state_15471__$1;
(statearr_15490_15518[(2)] = null);

(statearr_15490_15518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15472 === (10))){
var inst_15439 = (state_15471[(2)]);
var inst_15440 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_15471__$1 = (function (){var statearr_15491 = state_15471;
(statearr_15491[(13)] = inst_15439);

return statearr_15491;
})();
var statearr_15492_15519 = state_15471__$1;
(statearr_15492_15519[(2)] = inst_15440);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15471__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15472 === (8))){
var inst_15453 = (state_15471[(2)]);
var state_15471__$1 = state_15471;
var statearr_15493_15520 = state_15471__$1;
(statearr_15493_15520[(2)] = inst_15453);

(statearr_15493_15520[(1)] = (5));


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
});})(c__13432__auto___15505,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__13320__auto__,c__13432__auto___15505,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__13321__auto__ = null;
var cljs$core$async$state_machine__13321__auto____0 = (function (){
var statearr_15497 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15497[(0)] = cljs$core$async$state_machine__13321__auto__);

(statearr_15497[(1)] = (1));

return statearr_15497;
});
var cljs$core$async$state_machine__13321__auto____1 = (function (state_15471){
while(true){
var ret_value__13322__auto__ = (function (){try{while(true){
var result__13323__auto__ = switch__13320__auto__.call(null,state_15471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13323__auto__;
}
break;
}
}catch (e15498){if((e15498 instanceof Object)){
var ex__13324__auto__ = e15498;
var statearr_15499_15521 = state_15471;
(statearr_15499_15521[(5)] = ex__13324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15522 = state_15471;
state_15471 = G__15522;
continue;
} else {
return ret_value__13322__auto__;
}
break;
}
});
cljs$core$async$state_machine__13321__auto__ = function(state_15471){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13321__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13321__auto____1.call(this,state_15471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13321__auto____0;
cljs$core$async$state_machine__13321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13321__auto____1;
return cljs$core$async$state_machine__13321__auto__;
})()
;})(switch__13320__auto__,c__13432__auto___15505,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__13434__auto__ = (function (){var statearr_15500 = f__13433__auto__.call(null);
(statearr_15500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13432__auto___15505);

return statearr_15500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13434__auto__);
});})(c__13432__auto___15505,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args15524 = [];
var len__7878__auto___15582 = arguments.length;
var i__7879__auto___15583 = (0);
while(true){
if((i__7879__auto___15583 < len__7878__auto___15582)){
args15524.push((arguments[i__7879__auto___15583]));

var G__15584 = (i__7879__auto___15583 + (1));
i__7879__auto___15583 = G__15584;
continue;
} else {
}
break;
}

var G__15526 = args15524.length;
switch (G__15526) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15524.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13432__auto___15586 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13432__auto___15586,out){
return (function (){
var f__13433__auto__ = (function (){var switch__13320__auto__ = ((function (c__13432__auto___15586,out){
return (function (state_15558){
var state_val_15559 = (state_15558[(1)]);
if((state_val_15559 === (7))){
var inst_15538 = (state_15558[(7)]);
var inst_15537 = (state_15558[(8)]);
var inst_15537__$1 = (state_15558[(2)]);
var inst_15538__$1 = cljs.core.nth.call(null,inst_15537__$1,(0),null);
var inst_15539 = cljs.core.nth.call(null,inst_15537__$1,(1),null);
var inst_15540 = (inst_15538__$1 == null);
var state_15558__$1 = (function (){var statearr_15560 = state_15558;
(statearr_15560[(7)] = inst_15538__$1);

(statearr_15560[(8)] = inst_15537__$1);

(statearr_15560[(9)] = inst_15539);

return statearr_15560;
})();
if(cljs.core.truth_(inst_15540)){
var statearr_15561_15587 = state_15558__$1;
(statearr_15561_15587[(1)] = (8));

} else {
var statearr_15562_15588 = state_15558__$1;
(statearr_15562_15588[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15559 === (1))){
var inst_15527 = cljs.core.vec.call(null,chs);
var inst_15528 = inst_15527;
var state_15558__$1 = (function (){var statearr_15563 = state_15558;
(statearr_15563[(10)] = inst_15528);

return statearr_15563;
})();
var statearr_15564_15589 = state_15558__$1;
(statearr_15564_15589[(2)] = null);

(statearr_15564_15589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15559 === (4))){
var inst_15528 = (state_15558[(10)]);
var state_15558__$1 = state_15558;
return cljs.core.async.ioc_alts_BANG_.call(null,state_15558__$1,(7),inst_15528);
} else {
if((state_val_15559 === (6))){
var inst_15554 = (state_15558[(2)]);
var state_15558__$1 = state_15558;
var statearr_15565_15590 = state_15558__$1;
(statearr_15565_15590[(2)] = inst_15554);

(statearr_15565_15590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15559 === (3))){
var inst_15556 = (state_15558[(2)]);
var state_15558__$1 = state_15558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15558__$1,inst_15556);
} else {
if((state_val_15559 === (2))){
var inst_15528 = (state_15558[(10)]);
var inst_15530 = cljs.core.count.call(null,inst_15528);
var inst_15531 = (inst_15530 > (0));
var state_15558__$1 = state_15558;
if(cljs.core.truth_(inst_15531)){
var statearr_15567_15591 = state_15558__$1;
(statearr_15567_15591[(1)] = (4));

} else {
var statearr_15568_15592 = state_15558__$1;
(statearr_15568_15592[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15559 === (11))){
var inst_15528 = (state_15558[(10)]);
var inst_15547 = (state_15558[(2)]);
var tmp15566 = inst_15528;
var inst_15528__$1 = tmp15566;
var state_15558__$1 = (function (){var statearr_15569 = state_15558;
(statearr_15569[(10)] = inst_15528__$1);

(statearr_15569[(11)] = inst_15547);

return statearr_15569;
})();
var statearr_15570_15593 = state_15558__$1;
(statearr_15570_15593[(2)] = null);

(statearr_15570_15593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15559 === (9))){
var inst_15538 = (state_15558[(7)]);
var state_15558__$1 = state_15558;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15558__$1,(11),out,inst_15538);
} else {
if((state_val_15559 === (5))){
var inst_15552 = cljs.core.async.close_BANG_.call(null,out);
var state_15558__$1 = state_15558;
var statearr_15571_15594 = state_15558__$1;
(statearr_15571_15594[(2)] = inst_15552);

(statearr_15571_15594[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15559 === (10))){
var inst_15550 = (state_15558[(2)]);
var state_15558__$1 = state_15558;
var statearr_15572_15595 = state_15558__$1;
(statearr_15572_15595[(2)] = inst_15550);

(statearr_15572_15595[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15559 === (8))){
var inst_15528 = (state_15558[(10)]);
var inst_15538 = (state_15558[(7)]);
var inst_15537 = (state_15558[(8)]);
var inst_15539 = (state_15558[(9)]);
var inst_15542 = (function (){var cs = inst_15528;
var vec__15533 = inst_15537;
var v = inst_15538;
var c = inst_15539;
return ((function (cs,vec__15533,v,c,inst_15528,inst_15538,inst_15537,inst_15539,state_val_15559,c__13432__auto___15586,out){
return (function (p1__15523_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__15523_SHARP_);
});
;})(cs,vec__15533,v,c,inst_15528,inst_15538,inst_15537,inst_15539,state_val_15559,c__13432__auto___15586,out))
})();
var inst_15543 = cljs.core.filterv.call(null,inst_15542,inst_15528);
var inst_15528__$1 = inst_15543;
var state_15558__$1 = (function (){var statearr_15573 = state_15558;
(statearr_15573[(10)] = inst_15528__$1);

return statearr_15573;
})();
var statearr_15574_15596 = state_15558__$1;
(statearr_15574_15596[(2)] = null);

(statearr_15574_15596[(1)] = (2));


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
});})(c__13432__auto___15586,out))
;
return ((function (switch__13320__auto__,c__13432__auto___15586,out){
return (function() {
var cljs$core$async$state_machine__13321__auto__ = null;
var cljs$core$async$state_machine__13321__auto____0 = (function (){
var statearr_15578 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15578[(0)] = cljs$core$async$state_machine__13321__auto__);

(statearr_15578[(1)] = (1));

return statearr_15578;
});
var cljs$core$async$state_machine__13321__auto____1 = (function (state_15558){
while(true){
var ret_value__13322__auto__ = (function (){try{while(true){
var result__13323__auto__ = switch__13320__auto__.call(null,state_15558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13323__auto__;
}
break;
}
}catch (e15579){if((e15579 instanceof Object)){
var ex__13324__auto__ = e15579;
var statearr_15580_15597 = state_15558;
(statearr_15580_15597[(5)] = ex__13324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15598 = state_15558;
state_15558 = G__15598;
continue;
} else {
return ret_value__13322__auto__;
}
break;
}
});
cljs$core$async$state_machine__13321__auto__ = function(state_15558){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13321__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13321__auto____1.call(this,state_15558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13321__auto____0;
cljs$core$async$state_machine__13321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13321__auto____1;
return cljs$core$async$state_machine__13321__auto__;
})()
;})(switch__13320__auto__,c__13432__auto___15586,out))
})();
var state__13434__auto__ = (function (){var statearr_15581 = f__13433__auto__.call(null);
(statearr_15581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13432__auto___15586);

return statearr_15581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13434__auto__);
});})(c__13432__auto___15586,out))
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
var args15599 = [];
var len__7878__auto___15648 = arguments.length;
var i__7879__auto___15649 = (0);
while(true){
if((i__7879__auto___15649 < len__7878__auto___15648)){
args15599.push((arguments[i__7879__auto___15649]));

var G__15650 = (i__7879__auto___15649 + (1));
i__7879__auto___15649 = G__15650;
continue;
} else {
}
break;
}

var G__15601 = args15599.length;
switch (G__15601) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15599.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13432__auto___15652 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13432__auto___15652,out){
return (function (){
var f__13433__auto__ = (function (){var switch__13320__auto__ = ((function (c__13432__auto___15652,out){
return (function (state_15625){
var state_val_15626 = (state_15625[(1)]);
if((state_val_15626 === (7))){
var inst_15607 = (state_15625[(7)]);
var inst_15607__$1 = (state_15625[(2)]);
var inst_15608 = (inst_15607__$1 == null);
var inst_15609 = cljs.core.not.call(null,inst_15608);
var state_15625__$1 = (function (){var statearr_15627 = state_15625;
(statearr_15627[(7)] = inst_15607__$1);

return statearr_15627;
})();
if(inst_15609){
var statearr_15628_15653 = state_15625__$1;
(statearr_15628_15653[(1)] = (8));

} else {
var statearr_15629_15654 = state_15625__$1;
(statearr_15629_15654[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15626 === (1))){
var inst_15602 = (0);
var state_15625__$1 = (function (){var statearr_15630 = state_15625;
(statearr_15630[(8)] = inst_15602);

return statearr_15630;
})();
var statearr_15631_15655 = state_15625__$1;
(statearr_15631_15655[(2)] = null);

(statearr_15631_15655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15626 === (4))){
var state_15625__$1 = state_15625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15625__$1,(7),ch);
} else {
if((state_val_15626 === (6))){
var inst_15620 = (state_15625[(2)]);
var state_15625__$1 = state_15625;
var statearr_15632_15656 = state_15625__$1;
(statearr_15632_15656[(2)] = inst_15620);

(statearr_15632_15656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15626 === (3))){
var inst_15622 = (state_15625[(2)]);
var inst_15623 = cljs.core.async.close_BANG_.call(null,out);
var state_15625__$1 = (function (){var statearr_15633 = state_15625;
(statearr_15633[(9)] = inst_15622);

return statearr_15633;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15625__$1,inst_15623);
} else {
if((state_val_15626 === (2))){
var inst_15602 = (state_15625[(8)]);
var inst_15604 = (inst_15602 < n);
var state_15625__$1 = state_15625;
if(cljs.core.truth_(inst_15604)){
var statearr_15634_15657 = state_15625__$1;
(statearr_15634_15657[(1)] = (4));

} else {
var statearr_15635_15658 = state_15625__$1;
(statearr_15635_15658[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15626 === (11))){
var inst_15602 = (state_15625[(8)]);
var inst_15612 = (state_15625[(2)]);
var inst_15613 = (inst_15602 + (1));
var inst_15602__$1 = inst_15613;
var state_15625__$1 = (function (){var statearr_15636 = state_15625;
(statearr_15636[(10)] = inst_15612);

(statearr_15636[(8)] = inst_15602__$1);

return statearr_15636;
})();
var statearr_15637_15659 = state_15625__$1;
(statearr_15637_15659[(2)] = null);

(statearr_15637_15659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15626 === (9))){
var state_15625__$1 = state_15625;
var statearr_15638_15660 = state_15625__$1;
(statearr_15638_15660[(2)] = null);

(statearr_15638_15660[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15626 === (5))){
var state_15625__$1 = state_15625;
var statearr_15639_15661 = state_15625__$1;
(statearr_15639_15661[(2)] = null);

(statearr_15639_15661[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15626 === (10))){
var inst_15617 = (state_15625[(2)]);
var state_15625__$1 = state_15625;
var statearr_15640_15662 = state_15625__$1;
(statearr_15640_15662[(2)] = inst_15617);

(statearr_15640_15662[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15626 === (8))){
var inst_15607 = (state_15625[(7)]);
var state_15625__$1 = state_15625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15625__$1,(11),out,inst_15607);
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
});})(c__13432__auto___15652,out))
;
return ((function (switch__13320__auto__,c__13432__auto___15652,out){
return (function() {
var cljs$core$async$state_machine__13321__auto__ = null;
var cljs$core$async$state_machine__13321__auto____0 = (function (){
var statearr_15644 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15644[(0)] = cljs$core$async$state_machine__13321__auto__);

(statearr_15644[(1)] = (1));

return statearr_15644;
});
var cljs$core$async$state_machine__13321__auto____1 = (function (state_15625){
while(true){
var ret_value__13322__auto__ = (function (){try{while(true){
var result__13323__auto__ = switch__13320__auto__.call(null,state_15625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13323__auto__;
}
break;
}
}catch (e15645){if((e15645 instanceof Object)){
var ex__13324__auto__ = e15645;
var statearr_15646_15663 = state_15625;
(statearr_15646_15663[(5)] = ex__13324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15664 = state_15625;
state_15625 = G__15664;
continue;
} else {
return ret_value__13322__auto__;
}
break;
}
});
cljs$core$async$state_machine__13321__auto__ = function(state_15625){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13321__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13321__auto____1.call(this,state_15625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13321__auto____0;
cljs$core$async$state_machine__13321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13321__auto____1;
return cljs$core$async$state_machine__13321__auto__;
})()
;})(switch__13320__auto__,c__13432__auto___15652,out))
})();
var state__13434__auto__ = (function (){var statearr_15647 = f__13433__auto__.call(null);
(statearr_15647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13432__auto___15652);

return statearr_15647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13434__auto__);
});})(c__13432__auto___15652,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15672 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15672 = (function (f,ch,meta15673){
this.f = f;
this.ch = ch;
this.meta15673 = meta15673;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15674,meta15673__$1){
var self__ = this;
var _15674__$1 = this;
return (new cljs.core.async.t_cljs$core$async15672(self__.f,self__.ch,meta15673__$1));
});

cljs.core.async.t_cljs$core$async15672.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15674){
var self__ = this;
var _15674__$1 = this;
return self__.meta15673;
});

cljs.core.async.t_cljs$core$async15672.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15672.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15672.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15672.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15672.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async15675 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15675 = (function (f,ch,meta15673,_,fn1,meta15676){
this.f = f;
this.ch = ch;
this.meta15673 = meta15673;
this._ = _;
this.fn1 = fn1;
this.meta15676 = meta15676;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15677,meta15676__$1){
var self__ = this;
var _15677__$1 = this;
return (new cljs.core.async.t_cljs$core$async15675(self__.f,self__.ch,self__.meta15673,self__._,self__.fn1,meta15676__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async15675.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15677){
var self__ = this;
var _15677__$1 = this;
return self__.meta15676;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15675.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15675.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15675.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15675.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__15665_SHARP_){
return f1.call(null,(((p1__15665_SHARP_ == null))?null:self__.f.call(null,p1__15665_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async15675.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15673","meta15673",871999506,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async15672","cljs.core.async/t_cljs$core$async15672",880705365,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta15676","meta15676",-1562268118,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15675.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15675.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15675";

cljs.core.async.t_cljs$core$async15675.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7376__auto__,writer__7377__auto__,opt__7378__auto__){
return cljs.core._write.call(null,writer__7377__auto__,"cljs.core.async/t_cljs$core$async15675");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async15675 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15675(f__$1,ch__$1,meta15673__$1,___$2,fn1__$1,meta15676){
return (new cljs.core.async.t_cljs$core$async15675(f__$1,ch__$1,meta15673__$1,___$2,fn1__$1,meta15676));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async15675(self__.f,self__.ch,self__.meta15673,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6753__auto__ = ret;
if(cljs.core.truth_(and__6753__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6753__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async15672.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15672.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async15672.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15673","meta15673",871999506,null)], null);
});

cljs.core.async.t_cljs$core$async15672.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15672.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15672";

cljs.core.async.t_cljs$core$async15672.cljs$lang$ctorPrWriter = (function (this__7376__auto__,writer__7377__auto__,opt__7378__auto__){
return cljs.core._write.call(null,writer__7377__auto__,"cljs.core.async/t_cljs$core$async15672");
});

cljs.core.async.__GT_t_cljs$core$async15672 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15672(f__$1,ch__$1,meta15673){
return (new cljs.core.async.t_cljs$core$async15672(f__$1,ch__$1,meta15673));
});

}

return (new cljs.core.async.t_cljs$core$async15672(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15681 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15681 = (function (f,ch,meta15682){
this.f = f;
this.ch = ch;
this.meta15682 = meta15682;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15683,meta15682__$1){
var self__ = this;
var _15683__$1 = this;
return (new cljs.core.async.t_cljs$core$async15681(self__.f,self__.ch,meta15682__$1));
});

cljs.core.async.t_cljs$core$async15681.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15683){
var self__ = this;
var _15683__$1 = this;
return self__.meta15682;
});

cljs.core.async.t_cljs$core$async15681.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15681.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15681.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15681.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15681.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15681.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async15681.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15682","meta15682",29999402,null)], null);
});

cljs.core.async.t_cljs$core$async15681.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15681.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15681";

cljs.core.async.t_cljs$core$async15681.cljs$lang$ctorPrWriter = (function (this__7376__auto__,writer__7377__auto__,opt__7378__auto__){
return cljs.core._write.call(null,writer__7377__auto__,"cljs.core.async/t_cljs$core$async15681");
});

cljs.core.async.__GT_t_cljs$core$async15681 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async15681(f__$1,ch__$1,meta15682){
return (new cljs.core.async.t_cljs$core$async15681(f__$1,ch__$1,meta15682));
});

}

return (new cljs.core.async.t_cljs$core$async15681(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async15687 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15687 = (function (p,ch,meta15688){
this.p = p;
this.ch = ch;
this.meta15688 = meta15688;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15689,meta15688__$1){
var self__ = this;
var _15689__$1 = this;
return (new cljs.core.async.t_cljs$core$async15687(self__.p,self__.ch,meta15688__$1));
});

cljs.core.async.t_cljs$core$async15687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15689){
var self__ = this;
var _15689__$1 = this;
return self__.meta15688;
});

cljs.core.async.t_cljs$core$async15687.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15687.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15687.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15687.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15687.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15687.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15687.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async15687.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15688","meta15688",1207339513,null)], null);
});

cljs.core.async.t_cljs$core$async15687.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15687.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15687";

cljs.core.async.t_cljs$core$async15687.cljs$lang$ctorPrWriter = (function (this__7376__auto__,writer__7377__auto__,opt__7378__auto__){
return cljs.core._write.call(null,writer__7377__auto__,"cljs.core.async/t_cljs$core$async15687");
});

cljs.core.async.__GT_t_cljs$core$async15687 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async15687(p__$1,ch__$1,meta15688){
return (new cljs.core.async.t_cljs$core$async15687(p__$1,ch__$1,meta15688));
});

}

return (new cljs.core.async.t_cljs$core$async15687(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args15690 = [];
var len__7878__auto___15734 = arguments.length;
var i__7879__auto___15735 = (0);
while(true){
if((i__7879__auto___15735 < len__7878__auto___15734)){
args15690.push((arguments[i__7879__auto___15735]));

var G__15736 = (i__7879__auto___15735 + (1));
i__7879__auto___15735 = G__15736;
continue;
} else {
}
break;
}

var G__15692 = args15690.length;
switch (G__15692) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15690.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13432__auto___15738 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13432__auto___15738,out){
return (function (){
var f__13433__auto__ = (function (){var switch__13320__auto__ = ((function (c__13432__auto___15738,out){
return (function (state_15713){
var state_val_15714 = (state_15713[(1)]);
if((state_val_15714 === (7))){
var inst_15709 = (state_15713[(2)]);
var state_15713__$1 = state_15713;
var statearr_15715_15739 = state_15713__$1;
(statearr_15715_15739[(2)] = inst_15709);

(statearr_15715_15739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (1))){
var state_15713__$1 = state_15713;
var statearr_15716_15740 = state_15713__$1;
(statearr_15716_15740[(2)] = null);

(statearr_15716_15740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (4))){
var inst_15695 = (state_15713[(7)]);
var inst_15695__$1 = (state_15713[(2)]);
var inst_15696 = (inst_15695__$1 == null);
var state_15713__$1 = (function (){var statearr_15717 = state_15713;
(statearr_15717[(7)] = inst_15695__$1);

return statearr_15717;
})();
if(cljs.core.truth_(inst_15696)){
var statearr_15718_15741 = state_15713__$1;
(statearr_15718_15741[(1)] = (5));

} else {
var statearr_15719_15742 = state_15713__$1;
(statearr_15719_15742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (6))){
var inst_15695 = (state_15713[(7)]);
var inst_15700 = p.call(null,inst_15695);
var state_15713__$1 = state_15713;
if(cljs.core.truth_(inst_15700)){
var statearr_15720_15743 = state_15713__$1;
(statearr_15720_15743[(1)] = (8));

} else {
var statearr_15721_15744 = state_15713__$1;
(statearr_15721_15744[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (3))){
var inst_15711 = (state_15713[(2)]);
var state_15713__$1 = state_15713;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15713__$1,inst_15711);
} else {
if((state_val_15714 === (2))){
var state_15713__$1 = state_15713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15713__$1,(4),ch);
} else {
if((state_val_15714 === (11))){
var inst_15703 = (state_15713[(2)]);
var state_15713__$1 = state_15713;
var statearr_15722_15745 = state_15713__$1;
(statearr_15722_15745[(2)] = inst_15703);

(statearr_15722_15745[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (9))){
var state_15713__$1 = state_15713;
var statearr_15723_15746 = state_15713__$1;
(statearr_15723_15746[(2)] = null);

(statearr_15723_15746[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (5))){
var inst_15698 = cljs.core.async.close_BANG_.call(null,out);
var state_15713__$1 = state_15713;
var statearr_15724_15747 = state_15713__$1;
(statearr_15724_15747[(2)] = inst_15698);

(statearr_15724_15747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (10))){
var inst_15706 = (state_15713[(2)]);
var state_15713__$1 = (function (){var statearr_15725 = state_15713;
(statearr_15725[(8)] = inst_15706);

return statearr_15725;
})();
var statearr_15726_15748 = state_15713__$1;
(statearr_15726_15748[(2)] = null);

(statearr_15726_15748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (8))){
var inst_15695 = (state_15713[(7)]);
var state_15713__$1 = state_15713;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15713__$1,(11),out,inst_15695);
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
});})(c__13432__auto___15738,out))
;
return ((function (switch__13320__auto__,c__13432__auto___15738,out){
return (function() {
var cljs$core$async$state_machine__13321__auto__ = null;
var cljs$core$async$state_machine__13321__auto____0 = (function (){
var statearr_15730 = [null,null,null,null,null,null,null,null,null];
(statearr_15730[(0)] = cljs$core$async$state_machine__13321__auto__);

(statearr_15730[(1)] = (1));

return statearr_15730;
});
var cljs$core$async$state_machine__13321__auto____1 = (function (state_15713){
while(true){
var ret_value__13322__auto__ = (function (){try{while(true){
var result__13323__auto__ = switch__13320__auto__.call(null,state_15713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13323__auto__;
}
break;
}
}catch (e15731){if((e15731 instanceof Object)){
var ex__13324__auto__ = e15731;
var statearr_15732_15749 = state_15713;
(statearr_15732_15749[(5)] = ex__13324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15750 = state_15713;
state_15713 = G__15750;
continue;
} else {
return ret_value__13322__auto__;
}
break;
}
});
cljs$core$async$state_machine__13321__auto__ = function(state_15713){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13321__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13321__auto____1.call(this,state_15713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13321__auto____0;
cljs$core$async$state_machine__13321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13321__auto____1;
return cljs$core$async$state_machine__13321__auto__;
})()
;})(switch__13320__auto__,c__13432__auto___15738,out))
})();
var state__13434__auto__ = (function (){var statearr_15733 = f__13433__auto__.call(null);
(statearr_15733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13432__auto___15738);

return statearr_15733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13434__auto__);
});})(c__13432__auto___15738,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args15751 = [];
var len__7878__auto___15754 = arguments.length;
var i__7879__auto___15755 = (0);
while(true){
if((i__7879__auto___15755 < len__7878__auto___15754)){
args15751.push((arguments[i__7879__auto___15755]));

var G__15756 = (i__7879__auto___15755 + (1));
i__7879__auto___15755 = G__15756;
continue;
} else {
}
break;
}

var G__15753 = args15751.length;
switch (G__15753) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15751.length)].join('')));

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
var c__13432__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13432__auto__){
return (function (){
var f__13433__auto__ = (function (){var switch__13320__auto__ = ((function (c__13432__auto__){
return (function (state_15923){
var state_val_15924 = (state_15923[(1)]);
if((state_val_15924 === (7))){
var inst_15919 = (state_15923[(2)]);
var state_15923__$1 = state_15923;
var statearr_15925_15966 = state_15923__$1;
(statearr_15925_15966[(2)] = inst_15919);

(statearr_15925_15966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15924 === (20))){
var inst_15889 = (state_15923[(7)]);
var inst_15900 = (state_15923[(2)]);
var inst_15901 = cljs.core.next.call(null,inst_15889);
var inst_15875 = inst_15901;
var inst_15876 = null;
var inst_15877 = (0);
var inst_15878 = (0);
var state_15923__$1 = (function (){var statearr_15926 = state_15923;
(statearr_15926[(8)] = inst_15878);

(statearr_15926[(9)] = inst_15877);

(statearr_15926[(10)] = inst_15875);

(statearr_15926[(11)] = inst_15876);

(statearr_15926[(12)] = inst_15900);

return statearr_15926;
})();
var statearr_15927_15967 = state_15923__$1;
(statearr_15927_15967[(2)] = null);

(statearr_15927_15967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15924 === (1))){
var state_15923__$1 = state_15923;
var statearr_15928_15968 = state_15923__$1;
(statearr_15928_15968[(2)] = null);

(statearr_15928_15968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15924 === (4))){
var inst_15864 = (state_15923[(13)]);
var inst_15864__$1 = (state_15923[(2)]);
var inst_15865 = (inst_15864__$1 == null);
var state_15923__$1 = (function (){var statearr_15929 = state_15923;
(statearr_15929[(13)] = inst_15864__$1);

return statearr_15929;
})();
if(cljs.core.truth_(inst_15865)){
var statearr_15930_15969 = state_15923__$1;
(statearr_15930_15969[(1)] = (5));

} else {
var statearr_15931_15970 = state_15923__$1;
(statearr_15931_15970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15924 === (15))){
var state_15923__$1 = state_15923;
var statearr_15935_15971 = state_15923__$1;
(statearr_15935_15971[(2)] = null);

(statearr_15935_15971[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15924 === (21))){
var state_15923__$1 = state_15923;
var statearr_15936_15972 = state_15923__$1;
(statearr_15936_15972[(2)] = null);

(statearr_15936_15972[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15924 === (13))){
var inst_15878 = (state_15923[(8)]);
var inst_15877 = (state_15923[(9)]);
var inst_15875 = (state_15923[(10)]);
var inst_15876 = (state_15923[(11)]);
var inst_15885 = (state_15923[(2)]);
var inst_15886 = (inst_15878 + (1));
var tmp15932 = inst_15877;
var tmp15933 = inst_15875;
var tmp15934 = inst_15876;
var inst_15875__$1 = tmp15933;
var inst_15876__$1 = tmp15934;
var inst_15877__$1 = tmp15932;
var inst_15878__$1 = inst_15886;
var state_15923__$1 = (function (){var statearr_15937 = state_15923;
(statearr_15937[(8)] = inst_15878__$1);

(statearr_15937[(9)] = inst_15877__$1);

(statearr_15937[(10)] = inst_15875__$1);

(statearr_15937[(11)] = inst_15876__$1);

(statearr_15937[(14)] = inst_15885);

return statearr_15937;
})();
var statearr_15938_15973 = state_15923__$1;
(statearr_15938_15973[(2)] = null);

(statearr_15938_15973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15924 === (22))){
var state_15923__$1 = state_15923;
var statearr_15939_15974 = state_15923__$1;
(statearr_15939_15974[(2)] = null);

(statearr_15939_15974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15924 === (6))){
var inst_15864 = (state_15923[(13)]);
var inst_15873 = f.call(null,inst_15864);
var inst_15874 = cljs.core.seq.call(null,inst_15873);
var inst_15875 = inst_15874;
var inst_15876 = null;
var inst_15877 = (0);
var inst_15878 = (0);
var state_15923__$1 = (function (){var statearr_15940 = state_15923;
(statearr_15940[(8)] = inst_15878);

(statearr_15940[(9)] = inst_15877);

(statearr_15940[(10)] = inst_15875);

(statearr_15940[(11)] = inst_15876);

return statearr_15940;
})();
var statearr_15941_15975 = state_15923__$1;
(statearr_15941_15975[(2)] = null);

(statearr_15941_15975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15924 === (17))){
var inst_15889 = (state_15923[(7)]);
var inst_15893 = cljs.core.chunk_first.call(null,inst_15889);
var inst_15894 = cljs.core.chunk_rest.call(null,inst_15889);
var inst_15895 = cljs.core.count.call(null,inst_15893);
var inst_15875 = inst_15894;
var inst_15876 = inst_15893;
var inst_15877 = inst_15895;
var inst_15878 = (0);
var state_15923__$1 = (function (){var statearr_15942 = state_15923;
(statearr_15942[(8)] = inst_15878);

(statearr_15942[(9)] = inst_15877);

(statearr_15942[(10)] = inst_15875);

(statearr_15942[(11)] = inst_15876);

return statearr_15942;
})();
var statearr_15943_15976 = state_15923__$1;
(statearr_15943_15976[(2)] = null);

(statearr_15943_15976[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15924 === (3))){
var inst_15921 = (state_15923[(2)]);
var state_15923__$1 = state_15923;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15923__$1,inst_15921);
} else {
if((state_val_15924 === (12))){
var inst_15909 = (state_15923[(2)]);
var state_15923__$1 = state_15923;
var statearr_15944_15977 = state_15923__$1;
(statearr_15944_15977[(2)] = inst_15909);

(statearr_15944_15977[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15924 === (2))){
var state_15923__$1 = state_15923;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15923__$1,(4),in$);
} else {
if((state_val_15924 === (23))){
var inst_15917 = (state_15923[(2)]);
var state_15923__$1 = state_15923;
var statearr_15945_15978 = state_15923__$1;
(statearr_15945_15978[(2)] = inst_15917);

(statearr_15945_15978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15924 === (19))){
var inst_15904 = (state_15923[(2)]);
var state_15923__$1 = state_15923;
var statearr_15946_15979 = state_15923__$1;
(statearr_15946_15979[(2)] = inst_15904);

(statearr_15946_15979[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15924 === (11))){
var inst_15875 = (state_15923[(10)]);
var inst_15889 = (state_15923[(7)]);
var inst_15889__$1 = cljs.core.seq.call(null,inst_15875);
var state_15923__$1 = (function (){var statearr_15947 = state_15923;
(statearr_15947[(7)] = inst_15889__$1);

return statearr_15947;
})();
if(inst_15889__$1){
var statearr_15948_15980 = state_15923__$1;
(statearr_15948_15980[(1)] = (14));

} else {
var statearr_15949_15981 = state_15923__$1;
(statearr_15949_15981[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15924 === (9))){
var inst_15911 = (state_15923[(2)]);
var inst_15912 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_15923__$1 = (function (){var statearr_15950 = state_15923;
(statearr_15950[(15)] = inst_15911);

return statearr_15950;
})();
if(cljs.core.truth_(inst_15912)){
var statearr_15951_15982 = state_15923__$1;
(statearr_15951_15982[(1)] = (21));

} else {
var statearr_15952_15983 = state_15923__$1;
(statearr_15952_15983[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15924 === (5))){
var inst_15867 = cljs.core.async.close_BANG_.call(null,out);
var state_15923__$1 = state_15923;
var statearr_15953_15984 = state_15923__$1;
(statearr_15953_15984[(2)] = inst_15867);

(statearr_15953_15984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15924 === (14))){
var inst_15889 = (state_15923[(7)]);
var inst_15891 = cljs.core.chunked_seq_QMARK_.call(null,inst_15889);
var state_15923__$1 = state_15923;
if(inst_15891){
var statearr_15954_15985 = state_15923__$1;
(statearr_15954_15985[(1)] = (17));

} else {
var statearr_15955_15986 = state_15923__$1;
(statearr_15955_15986[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15924 === (16))){
var inst_15907 = (state_15923[(2)]);
var state_15923__$1 = state_15923;
var statearr_15956_15987 = state_15923__$1;
(statearr_15956_15987[(2)] = inst_15907);

(statearr_15956_15987[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15924 === (10))){
var inst_15878 = (state_15923[(8)]);
var inst_15876 = (state_15923[(11)]);
var inst_15883 = cljs.core._nth.call(null,inst_15876,inst_15878);
var state_15923__$1 = state_15923;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15923__$1,(13),out,inst_15883);
} else {
if((state_val_15924 === (18))){
var inst_15889 = (state_15923[(7)]);
var inst_15898 = cljs.core.first.call(null,inst_15889);
var state_15923__$1 = state_15923;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15923__$1,(20),out,inst_15898);
} else {
if((state_val_15924 === (8))){
var inst_15878 = (state_15923[(8)]);
var inst_15877 = (state_15923[(9)]);
var inst_15880 = (inst_15878 < inst_15877);
var inst_15881 = inst_15880;
var state_15923__$1 = state_15923;
if(cljs.core.truth_(inst_15881)){
var statearr_15957_15988 = state_15923__$1;
(statearr_15957_15988[(1)] = (10));

} else {
var statearr_15958_15989 = state_15923__$1;
(statearr_15958_15989[(1)] = (11));

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
});})(c__13432__auto__))
;
return ((function (switch__13320__auto__,c__13432__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13321__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13321__auto____0 = (function (){
var statearr_15962 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15962[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13321__auto__);

(statearr_15962[(1)] = (1));

return statearr_15962;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13321__auto____1 = (function (state_15923){
while(true){
var ret_value__13322__auto__ = (function (){try{while(true){
var result__13323__auto__ = switch__13320__auto__.call(null,state_15923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13323__auto__;
}
break;
}
}catch (e15963){if((e15963 instanceof Object)){
var ex__13324__auto__ = e15963;
var statearr_15964_15990 = state_15923;
(statearr_15964_15990[(5)] = ex__13324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15963;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15991 = state_15923;
state_15923 = G__15991;
continue;
} else {
return ret_value__13322__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13321__auto__ = function(state_15923){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13321__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13321__auto____1.call(this,state_15923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13321__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13321__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13321__auto__;
})()
;})(switch__13320__auto__,c__13432__auto__))
})();
var state__13434__auto__ = (function (){var statearr_15965 = f__13433__auto__.call(null);
(statearr_15965[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13432__auto__);

return statearr_15965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13434__auto__);
});})(c__13432__auto__))
);

return c__13432__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args15992 = [];
var len__7878__auto___15995 = arguments.length;
var i__7879__auto___15996 = (0);
while(true){
if((i__7879__auto___15996 < len__7878__auto___15995)){
args15992.push((arguments[i__7879__auto___15996]));

var G__15997 = (i__7879__auto___15996 + (1));
i__7879__auto___15996 = G__15997;
continue;
} else {
}
break;
}

var G__15994 = args15992.length;
switch (G__15994) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15992.length)].join('')));

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
var args15999 = [];
var len__7878__auto___16002 = arguments.length;
var i__7879__auto___16003 = (0);
while(true){
if((i__7879__auto___16003 < len__7878__auto___16002)){
args15999.push((arguments[i__7879__auto___16003]));

var G__16004 = (i__7879__auto___16003 + (1));
i__7879__auto___16003 = G__16004;
continue;
} else {
}
break;
}

var G__16001 = args15999.length;
switch (G__16001) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15999.length)].join('')));

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
var args16006 = [];
var len__7878__auto___16057 = arguments.length;
var i__7879__auto___16058 = (0);
while(true){
if((i__7879__auto___16058 < len__7878__auto___16057)){
args16006.push((arguments[i__7879__auto___16058]));

var G__16059 = (i__7879__auto___16058 + (1));
i__7879__auto___16058 = G__16059;
continue;
} else {
}
break;
}

var G__16008 = args16006.length;
switch (G__16008) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16006.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13432__auto___16061 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13432__auto___16061,out){
return (function (){
var f__13433__auto__ = (function (){var switch__13320__auto__ = ((function (c__13432__auto___16061,out){
return (function (state_16032){
var state_val_16033 = (state_16032[(1)]);
if((state_val_16033 === (7))){
var inst_16027 = (state_16032[(2)]);
var state_16032__$1 = state_16032;
var statearr_16034_16062 = state_16032__$1;
(statearr_16034_16062[(2)] = inst_16027);

(statearr_16034_16062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16033 === (1))){
var inst_16009 = null;
var state_16032__$1 = (function (){var statearr_16035 = state_16032;
(statearr_16035[(7)] = inst_16009);

return statearr_16035;
})();
var statearr_16036_16063 = state_16032__$1;
(statearr_16036_16063[(2)] = null);

(statearr_16036_16063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16033 === (4))){
var inst_16012 = (state_16032[(8)]);
var inst_16012__$1 = (state_16032[(2)]);
var inst_16013 = (inst_16012__$1 == null);
var inst_16014 = cljs.core.not.call(null,inst_16013);
var state_16032__$1 = (function (){var statearr_16037 = state_16032;
(statearr_16037[(8)] = inst_16012__$1);

return statearr_16037;
})();
if(inst_16014){
var statearr_16038_16064 = state_16032__$1;
(statearr_16038_16064[(1)] = (5));

} else {
var statearr_16039_16065 = state_16032__$1;
(statearr_16039_16065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16033 === (6))){
var state_16032__$1 = state_16032;
var statearr_16040_16066 = state_16032__$1;
(statearr_16040_16066[(2)] = null);

(statearr_16040_16066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16033 === (3))){
var inst_16029 = (state_16032[(2)]);
var inst_16030 = cljs.core.async.close_BANG_.call(null,out);
var state_16032__$1 = (function (){var statearr_16041 = state_16032;
(statearr_16041[(9)] = inst_16029);

return statearr_16041;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16032__$1,inst_16030);
} else {
if((state_val_16033 === (2))){
var state_16032__$1 = state_16032;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16032__$1,(4),ch);
} else {
if((state_val_16033 === (11))){
var inst_16012 = (state_16032[(8)]);
var inst_16021 = (state_16032[(2)]);
var inst_16009 = inst_16012;
var state_16032__$1 = (function (){var statearr_16042 = state_16032;
(statearr_16042[(7)] = inst_16009);

(statearr_16042[(10)] = inst_16021);

return statearr_16042;
})();
var statearr_16043_16067 = state_16032__$1;
(statearr_16043_16067[(2)] = null);

(statearr_16043_16067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16033 === (9))){
var inst_16012 = (state_16032[(8)]);
var state_16032__$1 = state_16032;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16032__$1,(11),out,inst_16012);
} else {
if((state_val_16033 === (5))){
var inst_16012 = (state_16032[(8)]);
var inst_16009 = (state_16032[(7)]);
var inst_16016 = cljs.core._EQ_.call(null,inst_16012,inst_16009);
var state_16032__$1 = state_16032;
if(inst_16016){
var statearr_16045_16068 = state_16032__$1;
(statearr_16045_16068[(1)] = (8));

} else {
var statearr_16046_16069 = state_16032__$1;
(statearr_16046_16069[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16033 === (10))){
var inst_16024 = (state_16032[(2)]);
var state_16032__$1 = state_16032;
var statearr_16047_16070 = state_16032__$1;
(statearr_16047_16070[(2)] = inst_16024);

(statearr_16047_16070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16033 === (8))){
var inst_16009 = (state_16032[(7)]);
var tmp16044 = inst_16009;
var inst_16009__$1 = tmp16044;
var state_16032__$1 = (function (){var statearr_16048 = state_16032;
(statearr_16048[(7)] = inst_16009__$1);

return statearr_16048;
})();
var statearr_16049_16071 = state_16032__$1;
(statearr_16049_16071[(2)] = null);

(statearr_16049_16071[(1)] = (2));


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
});})(c__13432__auto___16061,out))
;
return ((function (switch__13320__auto__,c__13432__auto___16061,out){
return (function() {
var cljs$core$async$state_machine__13321__auto__ = null;
var cljs$core$async$state_machine__13321__auto____0 = (function (){
var statearr_16053 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16053[(0)] = cljs$core$async$state_machine__13321__auto__);

(statearr_16053[(1)] = (1));

return statearr_16053;
});
var cljs$core$async$state_machine__13321__auto____1 = (function (state_16032){
while(true){
var ret_value__13322__auto__ = (function (){try{while(true){
var result__13323__auto__ = switch__13320__auto__.call(null,state_16032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13323__auto__;
}
break;
}
}catch (e16054){if((e16054 instanceof Object)){
var ex__13324__auto__ = e16054;
var statearr_16055_16072 = state_16032;
(statearr_16055_16072[(5)] = ex__13324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16073 = state_16032;
state_16032 = G__16073;
continue;
} else {
return ret_value__13322__auto__;
}
break;
}
});
cljs$core$async$state_machine__13321__auto__ = function(state_16032){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13321__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13321__auto____1.call(this,state_16032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13321__auto____0;
cljs$core$async$state_machine__13321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13321__auto____1;
return cljs$core$async$state_machine__13321__auto__;
})()
;})(switch__13320__auto__,c__13432__auto___16061,out))
})();
var state__13434__auto__ = (function (){var statearr_16056 = f__13433__auto__.call(null);
(statearr_16056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13432__auto___16061);

return statearr_16056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13434__auto__);
});})(c__13432__auto___16061,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args16074 = [];
var len__7878__auto___16144 = arguments.length;
var i__7879__auto___16145 = (0);
while(true){
if((i__7879__auto___16145 < len__7878__auto___16144)){
args16074.push((arguments[i__7879__auto___16145]));

var G__16146 = (i__7879__auto___16145 + (1));
i__7879__auto___16145 = G__16146;
continue;
} else {
}
break;
}

var G__16076 = args16074.length;
switch (G__16076) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16074.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13432__auto___16148 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13432__auto___16148,out){
return (function (){
var f__13433__auto__ = (function (){var switch__13320__auto__ = ((function (c__13432__auto___16148,out){
return (function (state_16114){
var state_val_16115 = (state_16114[(1)]);
if((state_val_16115 === (7))){
var inst_16110 = (state_16114[(2)]);
var state_16114__$1 = state_16114;
var statearr_16116_16149 = state_16114__$1;
(statearr_16116_16149[(2)] = inst_16110);

(statearr_16116_16149[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16115 === (1))){
var inst_16077 = (new Array(n));
var inst_16078 = inst_16077;
var inst_16079 = (0);
var state_16114__$1 = (function (){var statearr_16117 = state_16114;
(statearr_16117[(7)] = inst_16079);

(statearr_16117[(8)] = inst_16078);

return statearr_16117;
})();
var statearr_16118_16150 = state_16114__$1;
(statearr_16118_16150[(2)] = null);

(statearr_16118_16150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16115 === (4))){
var inst_16082 = (state_16114[(9)]);
var inst_16082__$1 = (state_16114[(2)]);
var inst_16083 = (inst_16082__$1 == null);
var inst_16084 = cljs.core.not.call(null,inst_16083);
var state_16114__$1 = (function (){var statearr_16119 = state_16114;
(statearr_16119[(9)] = inst_16082__$1);

return statearr_16119;
})();
if(inst_16084){
var statearr_16120_16151 = state_16114__$1;
(statearr_16120_16151[(1)] = (5));

} else {
var statearr_16121_16152 = state_16114__$1;
(statearr_16121_16152[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16115 === (15))){
var inst_16104 = (state_16114[(2)]);
var state_16114__$1 = state_16114;
var statearr_16122_16153 = state_16114__$1;
(statearr_16122_16153[(2)] = inst_16104);

(statearr_16122_16153[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16115 === (13))){
var state_16114__$1 = state_16114;
var statearr_16123_16154 = state_16114__$1;
(statearr_16123_16154[(2)] = null);

(statearr_16123_16154[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16115 === (6))){
var inst_16079 = (state_16114[(7)]);
var inst_16100 = (inst_16079 > (0));
var state_16114__$1 = state_16114;
if(cljs.core.truth_(inst_16100)){
var statearr_16124_16155 = state_16114__$1;
(statearr_16124_16155[(1)] = (12));

} else {
var statearr_16125_16156 = state_16114__$1;
(statearr_16125_16156[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16115 === (3))){
var inst_16112 = (state_16114[(2)]);
var state_16114__$1 = state_16114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16114__$1,inst_16112);
} else {
if((state_val_16115 === (12))){
var inst_16078 = (state_16114[(8)]);
var inst_16102 = cljs.core.vec.call(null,inst_16078);
var state_16114__$1 = state_16114;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16114__$1,(15),out,inst_16102);
} else {
if((state_val_16115 === (2))){
var state_16114__$1 = state_16114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16114__$1,(4),ch);
} else {
if((state_val_16115 === (11))){
var inst_16094 = (state_16114[(2)]);
var inst_16095 = (new Array(n));
var inst_16078 = inst_16095;
var inst_16079 = (0);
var state_16114__$1 = (function (){var statearr_16126 = state_16114;
(statearr_16126[(7)] = inst_16079);

(statearr_16126[(8)] = inst_16078);

(statearr_16126[(10)] = inst_16094);

return statearr_16126;
})();
var statearr_16127_16157 = state_16114__$1;
(statearr_16127_16157[(2)] = null);

(statearr_16127_16157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16115 === (9))){
var inst_16078 = (state_16114[(8)]);
var inst_16092 = cljs.core.vec.call(null,inst_16078);
var state_16114__$1 = state_16114;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16114__$1,(11),out,inst_16092);
} else {
if((state_val_16115 === (5))){
var inst_16079 = (state_16114[(7)]);
var inst_16087 = (state_16114[(11)]);
var inst_16078 = (state_16114[(8)]);
var inst_16082 = (state_16114[(9)]);
var inst_16086 = (inst_16078[inst_16079] = inst_16082);
var inst_16087__$1 = (inst_16079 + (1));
var inst_16088 = (inst_16087__$1 < n);
var state_16114__$1 = (function (){var statearr_16128 = state_16114;
(statearr_16128[(12)] = inst_16086);

(statearr_16128[(11)] = inst_16087__$1);

return statearr_16128;
})();
if(cljs.core.truth_(inst_16088)){
var statearr_16129_16158 = state_16114__$1;
(statearr_16129_16158[(1)] = (8));

} else {
var statearr_16130_16159 = state_16114__$1;
(statearr_16130_16159[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16115 === (14))){
var inst_16107 = (state_16114[(2)]);
var inst_16108 = cljs.core.async.close_BANG_.call(null,out);
var state_16114__$1 = (function (){var statearr_16132 = state_16114;
(statearr_16132[(13)] = inst_16107);

return statearr_16132;
})();
var statearr_16133_16160 = state_16114__$1;
(statearr_16133_16160[(2)] = inst_16108);

(statearr_16133_16160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16115 === (10))){
var inst_16098 = (state_16114[(2)]);
var state_16114__$1 = state_16114;
var statearr_16134_16161 = state_16114__$1;
(statearr_16134_16161[(2)] = inst_16098);

(statearr_16134_16161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16115 === (8))){
var inst_16087 = (state_16114[(11)]);
var inst_16078 = (state_16114[(8)]);
var tmp16131 = inst_16078;
var inst_16078__$1 = tmp16131;
var inst_16079 = inst_16087;
var state_16114__$1 = (function (){var statearr_16135 = state_16114;
(statearr_16135[(7)] = inst_16079);

(statearr_16135[(8)] = inst_16078__$1);

return statearr_16135;
})();
var statearr_16136_16162 = state_16114__$1;
(statearr_16136_16162[(2)] = null);

(statearr_16136_16162[(1)] = (2));


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
});})(c__13432__auto___16148,out))
;
return ((function (switch__13320__auto__,c__13432__auto___16148,out){
return (function() {
var cljs$core$async$state_machine__13321__auto__ = null;
var cljs$core$async$state_machine__13321__auto____0 = (function (){
var statearr_16140 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16140[(0)] = cljs$core$async$state_machine__13321__auto__);

(statearr_16140[(1)] = (1));

return statearr_16140;
});
var cljs$core$async$state_machine__13321__auto____1 = (function (state_16114){
while(true){
var ret_value__13322__auto__ = (function (){try{while(true){
var result__13323__auto__ = switch__13320__auto__.call(null,state_16114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13323__auto__;
}
break;
}
}catch (e16141){if((e16141 instanceof Object)){
var ex__13324__auto__ = e16141;
var statearr_16142_16163 = state_16114;
(statearr_16142_16163[(5)] = ex__13324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16141;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16164 = state_16114;
state_16114 = G__16164;
continue;
} else {
return ret_value__13322__auto__;
}
break;
}
});
cljs$core$async$state_machine__13321__auto__ = function(state_16114){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13321__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13321__auto____1.call(this,state_16114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13321__auto____0;
cljs$core$async$state_machine__13321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13321__auto____1;
return cljs$core$async$state_machine__13321__auto__;
})()
;})(switch__13320__auto__,c__13432__auto___16148,out))
})();
var state__13434__auto__ = (function (){var statearr_16143 = f__13433__auto__.call(null);
(statearr_16143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13432__auto___16148);

return statearr_16143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13434__auto__);
});})(c__13432__auto___16148,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args16165 = [];
var len__7878__auto___16239 = arguments.length;
var i__7879__auto___16240 = (0);
while(true){
if((i__7879__auto___16240 < len__7878__auto___16239)){
args16165.push((arguments[i__7879__auto___16240]));

var G__16241 = (i__7879__auto___16240 + (1));
i__7879__auto___16240 = G__16241;
continue;
} else {
}
break;
}

var G__16167 = args16165.length;
switch (G__16167) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16165.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13432__auto___16243 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13432__auto___16243,out){
return (function (){
var f__13433__auto__ = (function (){var switch__13320__auto__ = ((function (c__13432__auto___16243,out){
return (function (state_16209){
var state_val_16210 = (state_16209[(1)]);
if((state_val_16210 === (7))){
var inst_16205 = (state_16209[(2)]);
var state_16209__$1 = state_16209;
var statearr_16211_16244 = state_16209__$1;
(statearr_16211_16244[(2)] = inst_16205);

(statearr_16211_16244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16210 === (1))){
var inst_16168 = [];
var inst_16169 = inst_16168;
var inst_16170 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16209__$1 = (function (){var statearr_16212 = state_16209;
(statearr_16212[(7)] = inst_16170);

(statearr_16212[(8)] = inst_16169);

return statearr_16212;
})();
var statearr_16213_16245 = state_16209__$1;
(statearr_16213_16245[(2)] = null);

(statearr_16213_16245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16210 === (4))){
var inst_16173 = (state_16209[(9)]);
var inst_16173__$1 = (state_16209[(2)]);
var inst_16174 = (inst_16173__$1 == null);
var inst_16175 = cljs.core.not.call(null,inst_16174);
var state_16209__$1 = (function (){var statearr_16214 = state_16209;
(statearr_16214[(9)] = inst_16173__$1);

return statearr_16214;
})();
if(inst_16175){
var statearr_16215_16246 = state_16209__$1;
(statearr_16215_16246[(1)] = (5));

} else {
var statearr_16216_16247 = state_16209__$1;
(statearr_16216_16247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16210 === (15))){
var inst_16199 = (state_16209[(2)]);
var state_16209__$1 = state_16209;
var statearr_16217_16248 = state_16209__$1;
(statearr_16217_16248[(2)] = inst_16199);

(statearr_16217_16248[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16210 === (13))){
var state_16209__$1 = state_16209;
var statearr_16218_16249 = state_16209__$1;
(statearr_16218_16249[(2)] = null);

(statearr_16218_16249[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16210 === (6))){
var inst_16169 = (state_16209[(8)]);
var inst_16194 = inst_16169.length;
var inst_16195 = (inst_16194 > (0));
var state_16209__$1 = state_16209;
if(cljs.core.truth_(inst_16195)){
var statearr_16219_16250 = state_16209__$1;
(statearr_16219_16250[(1)] = (12));

} else {
var statearr_16220_16251 = state_16209__$1;
(statearr_16220_16251[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16210 === (3))){
var inst_16207 = (state_16209[(2)]);
var state_16209__$1 = state_16209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16209__$1,inst_16207);
} else {
if((state_val_16210 === (12))){
var inst_16169 = (state_16209[(8)]);
var inst_16197 = cljs.core.vec.call(null,inst_16169);
var state_16209__$1 = state_16209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16209__$1,(15),out,inst_16197);
} else {
if((state_val_16210 === (2))){
var state_16209__$1 = state_16209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16209__$1,(4),ch);
} else {
if((state_val_16210 === (11))){
var inst_16173 = (state_16209[(9)]);
var inst_16177 = (state_16209[(10)]);
var inst_16187 = (state_16209[(2)]);
var inst_16188 = [];
var inst_16189 = inst_16188.push(inst_16173);
var inst_16169 = inst_16188;
var inst_16170 = inst_16177;
var state_16209__$1 = (function (){var statearr_16221 = state_16209;
(statearr_16221[(11)] = inst_16187);

(statearr_16221[(7)] = inst_16170);

(statearr_16221[(8)] = inst_16169);

(statearr_16221[(12)] = inst_16189);

return statearr_16221;
})();
var statearr_16222_16252 = state_16209__$1;
(statearr_16222_16252[(2)] = null);

(statearr_16222_16252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16210 === (9))){
var inst_16169 = (state_16209[(8)]);
var inst_16185 = cljs.core.vec.call(null,inst_16169);
var state_16209__$1 = state_16209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16209__$1,(11),out,inst_16185);
} else {
if((state_val_16210 === (5))){
var inst_16173 = (state_16209[(9)]);
var inst_16177 = (state_16209[(10)]);
var inst_16170 = (state_16209[(7)]);
var inst_16177__$1 = f.call(null,inst_16173);
var inst_16178 = cljs.core._EQ_.call(null,inst_16177__$1,inst_16170);
var inst_16179 = cljs.core.keyword_identical_QMARK_.call(null,inst_16170,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_16180 = (inst_16178) || (inst_16179);
var state_16209__$1 = (function (){var statearr_16223 = state_16209;
(statearr_16223[(10)] = inst_16177__$1);

return statearr_16223;
})();
if(cljs.core.truth_(inst_16180)){
var statearr_16224_16253 = state_16209__$1;
(statearr_16224_16253[(1)] = (8));

} else {
var statearr_16225_16254 = state_16209__$1;
(statearr_16225_16254[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16210 === (14))){
var inst_16202 = (state_16209[(2)]);
var inst_16203 = cljs.core.async.close_BANG_.call(null,out);
var state_16209__$1 = (function (){var statearr_16227 = state_16209;
(statearr_16227[(13)] = inst_16202);

return statearr_16227;
})();
var statearr_16228_16255 = state_16209__$1;
(statearr_16228_16255[(2)] = inst_16203);

(statearr_16228_16255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16210 === (10))){
var inst_16192 = (state_16209[(2)]);
var state_16209__$1 = state_16209;
var statearr_16229_16256 = state_16209__$1;
(statearr_16229_16256[(2)] = inst_16192);

(statearr_16229_16256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16210 === (8))){
var inst_16173 = (state_16209[(9)]);
var inst_16177 = (state_16209[(10)]);
var inst_16169 = (state_16209[(8)]);
var inst_16182 = inst_16169.push(inst_16173);
var tmp16226 = inst_16169;
var inst_16169__$1 = tmp16226;
var inst_16170 = inst_16177;
var state_16209__$1 = (function (){var statearr_16230 = state_16209;
(statearr_16230[(7)] = inst_16170);

(statearr_16230[(14)] = inst_16182);

(statearr_16230[(8)] = inst_16169__$1);

return statearr_16230;
})();
var statearr_16231_16257 = state_16209__$1;
(statearr_16231_16257[(2)] = null);

(statearr_16231_16257[(1)] = (2));


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
});})(c__13432__auto___16243,out))
;
return ((function (switch__13320__auto__,c__13432__auto___16243,out){
return (function() {
var cljs$core$async$state_machine__13321__auto__ = null;
var cljs$core$async$state_machine__13321__auto____0 = (function (){
var statearr_16235 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16235[(0)] = cljs$core$async$state_machine__13321__auto__);

(statearr_16235[(1)] = (1));

return statearr_16235;
});
var cljs$core$async$state_machine__13321__auto____1 = (function (state_16209){
while(true){
var ret_value__13322__auto__ = (function (){try{while(true){
var result__13323__auto__ = switch__13320__auto__.call(null,state_16209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13323__auto__;
}
break;
}
}catch (e16236){if((e16236 instanceof Object)){
var ex__13324__auto__ = e16236;
var statearr_16237_16258 = state_16209;
(statearr_16237_16258[(5)] = ex__13324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16259 = state_16209;
state_16209 = G__16259;
continue;
} else {
return ret_value__13322__auto__;
}
break;
}
});
cljs$core$async$state_machine__13321__auto__ = function(state_16209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13321__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13321__auto____1.call(this,state_16209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13321__auto____0;
cljs$core$async$state_machine__13321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13321__auto____1;
return cljs$core$async$state_machine__13321__auto__;
})()
;})(switch__13320__auto__,c__13432__auto___16243,out))
})();
var state__13434__auto__ = (function (){var statearr_16238 = f__13433__auto__.call(null);
(statearr_16238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13432__auto___16243);

return statearr_16238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13434__auto__);
});})(c__13432__auto___16243,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1513114943456