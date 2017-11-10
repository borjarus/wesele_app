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
var args56572 = [];
var len__34447__auto___56578 = arguments.length;
var i__34448__auto___56579 = (0);
while(true){
if((i__34448__auto___56579 < len__34447__auto___56578)){
args56572.push((arguments[i__34448__auto___56579]));

var G__56580 = (i__34448__auto___56579 + (1));
i__34448__auto___56579 = G__56580;
continue;
} else {
}
break;
}

var G__56574 = args56572.length;
switch (G__56574) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args56572.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async56575 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56575 = (function (f,blockable,meta56576){
this.f = f;
this.blockable = blockable;
this.meta56576 = meta56576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async56575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56577,meta56576__$1){
var self__ = this;
var _56577__$1 = this;
return (new cljs.core.async.t_cljs$core$async56575(self__.f,self__.blockable,meta56576__$1));
});

cljs.core.async.t_cljs$core$async56575.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56577){
var self__ = this;
var _56577__$1 = this;
return self__.meta56576;
});

cljs.core.async.t_cljs$core$async56575.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56575.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async56575.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async56575.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async56575.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta56576","meta56576",-590747402,null)], null);
});

cljs.core.async.t_cljs$core$async56575.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56575.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56575";

cljs.core.async.t_cljs$core$async56575.cljs$lang$ctorPrWriter = (function (this__33945__auto__,writer__33946__auto__,opt__33947__auto__){
return cljs.core._write.call(null,writer__33946__auto__,"cljs.core.async/t_cljs$core$async56575");
});

cljs.core.async.__GT_t_cljs$core$async56575 = (function cljs$core$async$__GT_t_cljs$core$async56575(f__$1,blockable__$1,meta56576){
return (new cljs.core.async.t_cljs$core$async56575(f__$1,blockable__$1,meta56576));
});

}

return (new cljs.core.async.t_cljs$core$async56575(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args56584 = [];
var len__34447__auto___56587 = arguments.length;
var i__34448__auto___56588 = (0);
while(true){
if((i__34448__auto___56588 < len__34447__auto___56587)){
args56584.push((arguments[i__34448__auto___56588]));

var G__56589 = (i__34448__auto___56588 + (1));
i__34448__auto___56588 = G__56589;
continue;
} else {
}
break;
}

var G__56586 = args56584.length;
switch (G__56586) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args56584.length)].join('')));

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
var args56591 = [];
var len__34447__auto___56594 = arguments.length;
var i__34448__auto___56595 = (0);
while(true){
if((i__34448__auto___56595 < len__34447__auto___56594)){
args56591.push((arguments[i__34448__auto___56595]));

var G__56596 = (i__34448__auto___56595 + (1));
i__34448__auto___56595 = G__56596;
continue;
} else {
}
break;
}

var G__56593 = args56591.length;
switch (G__56593) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args56591.length)].join('')));

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
var args56598 = [];
var len__34447__auto___56601 = arguments.length;
var i__34448__auto___56602 = (0);
while(true){
if((i__34448__auto___56602 < len__34447__auto___56601)){
args56598.push((arguments[i__34448__auto___56602]));

var G__56603 = (i__34448__auto___56602 + (1));
i__34448__auto___56602 = G__56603;
continue;
} else {
}
break;
}

var G__56600 = args56598.length;
switch (G__56600) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args56598.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_56605 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_56605);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_56605,ret){
return (function (){
return fn1.call(null,val_56605);
});})(val_56605,ret))
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
var args56606 = [];
var len__34447__auto___56609 = arguments.length;
var i__34448__auto___56610 = (0);
while(true){
if((i__34448__auto___56610 < len__34447__auto___56609)){
args56606.push((arguments[i__34448__auto___56610]));

var G__56611 = (i__34448__auto___56610 + (1));
i__34448__auto___56610 = G__56611;
continue;
} else {
}
break;
}

var G__56608 = args56606.length;
switch (G__56608) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args56606.length)].join('')));

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
var n__34257__auto___56613 = n;
var x_56614 = (0);
while(true){
if((x_56614 < n__34257__auto___56613)){
(a[x_56614] = (0));

var G__56615 = (x_56614 + (1));
x_56614 = G__56615;
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

var G__56616 = (i + (1));
i = G__56616;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async56620 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56620 = (function (flag,meta56621){
this.flag = flag;
this.meta56621 = meta56621;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async56620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_56622,meta56621__$1){
var self__ = this;
var _56622__$1 = this;
return (new cljs.core.async.t_cljs$core$async56620(self__.flag,meta56621__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async56620.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_56622){
var self__ = this;
var _56622__$1 = this;
return self__.meta56621;
});})(flag))
;

cljs.core.async.t_cljs$core$async56620.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56620.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async56620.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async56620.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async56620.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta56621","meta56621",-1477699430,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async56620.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56620.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56620";

cljs.core.async.t_cljs$core$async56620.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__33945__auto__,writer__33946__auto__,opt__33947__auto__){
return cljs.core._write.call(null,writer__33946__auto__,"cljs.core.async/t_cljs$core$async56620");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async56620 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async56620(flag__$1,meta56621){
return (new cljs.core.async.t_cljs$core$async56620(flag__$1,meta56621));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async56620(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async56626 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56626 = (function (flag,cb,meta56627){
this.flag = flag;
this.cb = cb;
this.meta56627 = meta56627;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async56626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56628,meta56627__$1){
var self__ = this;
var _56628__$1 = this;
return (new cljs.core.async.t_cljs$core$async56626(self__.flag,self__.cb,meta56627__$1));
});

cljs.core.async.t_cljs$core$async56626.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56628){
var self__ = this;
var _56628__$1 = this;
return self__.meta56627;
});

cljs.core.async.t_cljs$core$async56626.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56626.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async56626.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async56626.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async56626.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta56627","meta56627",-190307932,null)], null);
});

cljs.core.async.t_cljs$core$async56626.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56626.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56626";

cljs.core.async.t_cljs$core$async56626.cljs$lang$ctorPrWriter = (function (this__33945__auto__,writer__33946__auto__,opt__33947__auto__){
return cljs.core._write.call(null,writer__33946__auto__,"cljs.core.async/t_cljs$core$async56626");
});

cljs.core.async.__GT_t_cljs$core$async56626 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async56626(flag__$1,cb__$1,meta56627){
return (new cljs.core.async.t_cljs$core$async56626(flag__$1,cb__$1,meta56627));
});

}

return (new cljs.core.async.t_cljs$core$async56626(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__56629_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__56629_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__56630_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__56630_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__33334__auto__ = wport;
if(cljs.core.truth_(or__33334__auto__)){
return or__33334__auto__;
} else {
return port;
}
})()], null));
} else {
var G__56631 = (i + (1));
i = G__56631;
continue;
}
} else {
return null;
}
break;
}
})();
var or__33334__auto__ = ret;
if(cljs.core.truth_(or__33334__auto__)){
return or__33334__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__33322__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__33322__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__33322__auto__;
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
var args__34454__auto__ = [];
var len__34447__auto___56637 = arguments.length;
var i__34448__auto___56638 = (0);
while(true){
if((i__34448__auto___56638 < len__34447__auto___56637)){
args__34454__auto__.push((arguments[i__34448__auto___56638]));

var G__56639 = (i__34448__auto___56638 + (1));
i__34448__auto___56638 = G__56639;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((1) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__34455__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__56634){
var map__56635 = p__56634;
var map__56635__$1 = ((((!((map__56635 == null)))?((((map__56635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56635.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56635):map__56635);
var opts = map__56635__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq56632){
var G__56633 = cljs.core.first.call(null,seq56632);
var seq56632__$1 = cljs.core.next.call(null,seq56632);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__56633,seq56632__$1);
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
var args56640 = [];
var len__34447__auto___56690 = arguments.length;
var i__34448__auto___56691 = (0);
while(true){
if((i__34448__auto___56691 < len__34447__auto___56690)){
args56640.push((arguments[i__34448__auto___56691]));

var G__56692 = (i__34448__auto___56691 + (1));
i__34448__auto___56691 = G__56692;
continue;
} else {
}
break;
}

var G__56642 = args56640.length;
switch (G__56642) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args56640.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__39642__auto___56694 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39642__auto___56694){
return (function (){
var f__39643__auto__ = (function (){var switch__39530__auto__ = ((function (c__39642__auto___56694){
return (function (state_56666){
var state_val_56667 = (state_56666[(1)]);
if((state_val_56667 === (7))){
var inst_56662 = (state_56666[(2)]);
var state_56666__$1 = state_56666;
var statearr_56668_56695 = state_56666__$1;
(statearr_56668_56695[(2)] = inst_56662);

(statearr_56668_56695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56667 === (1))){
var state_56666__$1 = state_56666;
var statearr_56669_56696 = state_56666__$1;
(statearr_56669_56696[(2)] = null);

(statearr_56669_56696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56667 === (4))){
var inst_56645 = (state_56666[(7)]);
var inst_56645__$1 = (state_56666[(2)]);
var inst_56646 = (inst_56645__$1 == null);
var state_56666__$1 = (function (){var statearr_56670 = state_56666;
(statearr_56670[(7)] = inst_56645__$1);

return statearr_56670;
})();
if(cljs.core.truth_(inst_56646)){
var statearr_56671_56697 = state_56666__$1;
(statearr_56671_56697[(1)] = (5));

} else {
var statearr_56672_56698 = state_56666__$1;
(statearr_56672_56698[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56667 === (13))){
var state_56666__$1 = state_56666;
var statearr_56673_56699 = state_56666__$1;
(statearr_56673_56699[(2)] = null);

(statearr_56673_56699[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56667 === (6))){
var inst_56645 = (state_56666[(7)]);
var state_56666__$1 = state_56666;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56666__$1,(11),to,inst_56645);
} else {
if((state_val_56667 === (3))){
var inst_56664 = (state_56666[(2)]);
var state_56666__$1 = state_56666;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56666__$1,inst_56664);
} else {
if((state_val_56667 === (12))){
var state_56666__$1 = state_56666;
var statearr_56674_56700 = state_56666__$1;
(statearr_56674_56700[(2)] = null);

(statearr_56674_56700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56667 === (2))){
var state_56666__$1 = state_56666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56666__$1,(4),from);
} else {
if((state_val_56667 === (11))){
var inst_56655 = (state_56666[(2)]);
var state_56666__$1 = state_56666;
if(cljs.core.truth_(inst_56655)){
var statearr_56675_56701 = state_56666__$1;
(statearr_56675_56701[(1)] = (12));

} else {
var statearr_56676_56702 = state_56666__$1;
(statearr_56676_56702[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56667 === (9))){
var state_56666__$1 = state_56666;
var statearr_56677_56703 = state_56666__$1;
(statearr_56677_56703[(2)] = null);

(statearr_56677_56703[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56667 === (5))){
var state_56666__$1 = state_56666;
if(cljs.core.truth_(close_QMARK_)){
var statearr_56678_56704 = state_56666__$1;
(statearr_56678_56704[(1)] = (8));

} else {
var statearr_56679_56705 = state_56666__$1;
(statearr_56679_56705[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56667 === (14))){
var inst_56660 = (state_56666[(2)]);
var state_56666__$1 = state_56666;
var statearr_56680_56706 = state_56666__$1;
(statearr_56680_56706[(2)] = inst_56660);

(statearr_56680_56706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56667 === (10))){
var inst_56652 = (state_56666[(2)]);
var state_56666__$1 = state_56666;
var statearr_56681_56707 = state_56666__$1;
(statearr_56681_56707[(2)] = inst_56652);

(statearr_56681_56707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56667 === (8))){
var inst_56649 = cljs.core.async.close_BANG_.call(null,to);
var state_56666__$1 = state_56666;
var statearr_56682_56708 = state_56666__$1;
(statearr_56682_56708[(2)] = inst_56649);

(statearr_56682_56708[(1)] = (10));


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
});})(c__39642__auto___56694))
;
return ((function (switch__39530__auto__,c__39642__auto___56694){
return (function() {
var cljs$core$async$state_machine__39531__auto__ = null;
var cljs$core$async$state_machine__39531__auto____0 = (function (){
var statearr_56686 = [null,null,null,null,null,null,null,null];
(statearr_56686[(0)] = cljs$core$async$state_machine__39531__auto__);

(statearr_56686[(1)] = (1));

return statearr_56686;
});
var cljs$core$async$state_machine__39531__auto____1 = (function (state_56666){
while(true){
var ret_value__39532__auto__ = (function (){try{while(true){
var result__39533__auto__ = switch__39530__auto__.call(null,state_56666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39533__auto__;
}
break;
}
}catch (e56687){if((e56687 instanceof Object)){
var ex__39534__auto__ = e56687;
var statearr_56688_56709 = state_56666;
(statearr_56688_56709[(5)] = ex__39534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56710 = state_56666;
state_56666 = G__56710;
continue;
} else {
return ret_value__39532__auto__;
}
break;
}
});
cljs$core$async$state_machine__39531__auto__ = function(state_56666){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39531__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39531__auto____1.call(this,state_56666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39531__auto____0;
cljs$core$async$state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39531__auto____1;
return cljs$core$async$state_machine__39531__auto__;
})()
;})(switch__39530__auto__,c__39642__auto___56694))
})();
var state__39644__auto__ = (function (){var statearr_56689 = f__39643__auto__.call(null);
(statearr_56689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39642__auto___56694);

return statearr_56689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39644__auto__);
});})(c__39642__auto___56694))
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
return (function (p__56898){
var vec__56899 = p__56898;
var v = cljs.core.nth.call(null,vec__56899,(0),null);
var p = cljs.core.nth.call(null,vec__56899,(1),null);
var job = vec__56899;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__39642__auto___57085 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39642__auto___57085,res,vec__56899,v,p,job,jobs,results){
return (function (){
var f__39643__auto__ = (function (){var switch__39530__auto__ = ((function (c__39642__auto___57085,res,vec__56899,v,p,job,jobs,results){
return (function (state_56906){
var state_val_56907 = (state_56906[(1)]);
if((state_val_56907 === (1))){
var state_56906__$1 = state_56906;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56906__$1,(2),res,v);
} else {
if((state_val_56907 === (2))){
var inst_56903 = (state_56906[(2)]);
var inst_56904 = cljs.core.async.close_BANG_.call(null,res);
var state_56906__$1 = (function (){var statearr_56908 = state_56906;
(statearr_56908[(7)] = inst_56903);

return statearr_56908;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56906__$1,inst_56904);
} else {
return null;
}
}
});})(c__39642__auto___57085,res,vec__56899,v,p,job,jobs,results))
;
return ((function (switch__39530__auto__,c__39642__auto___57085,res,vec__56899,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39531__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39531__auto____0 = (function (){
var statearr_56912 = [null,null,null,null,null,null,null,null];
(statearr_56912[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39531__auto__);

(statearr_56912[(1)] = (1));

return statearr_56912;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39531__auto____1 = (function (state_56906){
while(true){
var ret_value__39532__auto__ = (function (){try{while(true){
var result__39533__auto__ = switch__39530__auto__.call(null,state_56906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39533__auto__;
}
break;
}
}catch (e56913){if((e56913 instanceof Object)){
var ex__39534__auto__ = e56913;
var statearr_56914_57086 = state_56906;
(statearr_56914_57086[(5)] = ex__39534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57087 = state_56906;
state_56906 = G__57087;
continue;
} else {
return ret_value__39532__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39531__auto__ = function(state_56906){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39531__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39531__auto____1.call(this,state_56906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39531__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39531__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39531__auto__;
})()
;})(switch__39530__auto__,c__39642__auto___57085,res,vec__56899,v,p,job,jobs,results))
})();
var state__39644__auto__ = (function (){var statearr_56915 = f__39643__auto__.call(null);
(statearr_56915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39642__auto___57085);

return statearr_56915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39644__auto__);
});})(c__39642__auto___57085,res,vec__56899,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__56916){
var vec__56917 = p__56916;
var v = cljs.core.nth.call(null,vec__56917,(0),null);
var p = cljs.core.nth.call(null,vec__56917,(1),null);
var job = vec__56917;
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
var n__34257__auto___57088 = n;
var __57089 = (0);
while(true){
if((__57089 < n__34257__auto___57088)){
var G__56920_57090 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__56920_57090) {
case "compute":
var c__39642__auto___57092 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__57089,c__39642__auto___57092,G__56920_57090,n__34257__auto___57088,jobs,results,process,async){
return (function (){
var f__39643__auto__ = (function (){var switch__39530__auto__ = ((function (__57089,c__39642__auto___57092,G__56920_57090,n__34257__auto___57088,jobs,results,process,async){
return (function (state_56933){
var state_val_56934 = (state_56933[(1)]);
if((state_val_56934 === (1))){
var state_56933__$1 = state_56933;
var statearr_56935_57093 = state_56933__$1;
(statearr_56935_57093[(2)] = null);

(statearr_56935_57093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56934 === (2))){
var state_56933__$1 = state_56933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56933__$1,(4),jobs);
} else {
if((state_val_56934 === (3))){
var inst_56931 = (state_56933[(2)]);
var state_56933__$1 = state_56933;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56933__$1,inst_56931);
} else {
if((state_val_56934 === (4))){
var inst_56923 = (state_56933[(2)]);
var inst_56924 = process.call(null,inst_56923);
var state_56933__$1 = state_56933;
if(cljs.core.truth_(inst_56924)){
var statearr_56936_57094 = state_56933__$1;
(statearr_56936_57094[(1)] = (5));

} else {
var statearr_56937_57095 = state_56933__$1;
(statearr_56937_57095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56934 === (5))){
var state_56933__$1 = state_56933;
var statearr_56938_57096 = state_56933__$1;
(statearr_56938_57096[(2)] = null);

(statearr_56938_57096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56934 === (6))){
var state_56933__$1 = state_56933;
var statearr_56939_57097 = state_56933__$1;
(statearr_56939_57097[(2)] = null);

(statearr_56939_57097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56934 === (7))){
var inst_56929 = (state_56933[(2)]);
var state_56933__$1 = state_56933;
var statearr_56940_57098 = state_56933__$1;
(statearr_56940_57098[(2)] = inst_56929);

(statearr_56940_57098[(1)] = (3));


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
});})(__57089,c__39642__auto___57092,G__56920_57090,n__34257__auto___57088,jobs,results,process,async))
;
return ((function (__57089,switch__39530__auto__,c__39642__auto___57092,G__56920_57090,n__34257__auto___57088,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39531__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39531__auto____0 = (function (){
var statearr_56944 = [null,null,null,null,null,null,null];
(statearr_56944[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39531__auto__);

(statearr_56944[(1)] = (1));

return statearr_56944;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39531__auto____1 = (function (state_56933){
while(true){
var ret_value__39532__auto__ = (function (){try{while(true){
var result__39533__auto__ = switch__39530__auto__.call(null,state_56933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39533__auto__;
}
break;
}
}catch (e56945){if((e56945 instanceof Object)){
var ex__39534__auto__ = e56945;
var statearr_56946_57099 = state_56933;
(statearr_56946_57099[(5)] = ex__39534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57100 = state_56933;
state_56933 = G__57100;
continue;
} else {
return ret_value__39532__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39531__auto__ = function(state_56933){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39531__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39531__auto____1.call(this,state_56933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39531__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39531__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39531__auto__;
})()
;})(__57089,switch__39530__auto__,c__39642__auto___57092,G__56920_57090,n__34257__auto___57088,jobs,results,process,async))
})();
var state__39644__auto__ = (function (){var statearr_56947 = f__39643__auto__.call(null);
(statearr_56947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39642__auto___57092);

return statearr_56947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39644__auto__);
});})(__57089,c__39642__auto___57092,G__56920_57090,n__34257__auto___57088,jobs,results,process,async))
);


break;
case "async":
var c__39642__auto___57101 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__57089,c__39642__auto___57101,G__56920_57090,n__34257__auto___57088,jobs,results,process,async){
return (function (){
var f__39643__auto__ = (function (){var switch__39530__auto__ = ((function (__57089,c__39642__auto___57101,G__56920_57090,n__34257__auto___57088,jobs,results,process,async){
return (function (state_56960){
var state_val_56961 = (state_56960[(1)]);
if((state_val_56961 === (1))){
var state_56960__$1 = state_56960;
var statearr_56962_57102 = state_56960__$1;
(statearr_56962_57102[(2)] = null);

(statearr_56962_57102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56961 === (2))){
var state_56960__$1 = state_56960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56960__$1,(4),jobs);
} else {
if((state_val_56961 === (3))){
var inst_56958 = (state_56960[(2)]);
var state_56960__$1 = state_56960;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56960__$1,inst_56958);
} else {
if((state_val_56961 === (4))){
var inst_56950 = (state_56960[(2)]);
var inst_56951 = async.call(null,inst_56950);
var state_56960__$1 = state_56960;
if(cljs.core.truth_(inst_56951)){
var statearr_56963_57103 = state_56960__$1;
(statearr_56963_57103[(1)] = (5));

} else {
var statearr_56964_57104 = state_56960__$1;
(statearr_56964_57104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56961 === (5))){
var state_56960__$1 = state_56960;
var statearr_56965_57105 = state_56960__$1;
(statearr_56965_57105[(2)] = null);

(statearr_56965_57105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56961 === (6))){
var state_56960__$1 = state_56960;
var statearr_56966_57106 = state_56960__$1;
(statearr_56966_57106[(2)] = null);

(statearr_56966_57106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56961 === (7))){
var inst_56956 = (state_56960[(2)]);
var state_56960__$1 = state_56960;
var statearr_56967_57107 = state_56960__$1;
(statearr_56967_57107[(2)] = inst_56956);

(statearr_56967_57107[(1)] = (3));


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
});})(__57089,c__39642__auto___57101,G__56920_57090,n__34257__auto___57088,jobs,results,process,async))
;
return ((function (__57089,switch__39530__auto__,c__39642__auto___57101,G__56920_57090,n__34257__auto___57088,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39531__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39531__auto____0 = (function (){
var statearr_56971 = [null,null,null,null,null,null,null];
(statearr_56971[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39531__auto__);

(statearr_56971[(1)] = (1));

return statearr_56971;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39531__auto____1 = (function (state_56960){
while(true){
var ret_value__39532__auto__ = (function (){try{while(true){
var result__39533__auto__ = switch__39530__auto__.call(null,state_56960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39533__auto__;
}
break;
}
}catch (e56972){if((e56972 instanceof Object)){
var ex__39534__auto__ = e56972;
var statearr_56973_57108 = state_56960;
(statearr_56973_57108[(5)] = ex__39534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57109 = state_56960;
state_56960 = G__57109;
continue;
} else {
return ret_value__39532__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39531__auto__ = function(state_56960){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39531__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39531__auto____1.call(this,state_56960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39531__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39531__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39531__auto__;
})()
;})(__57089,switch__39530__auto__,c__39642__auto___57101,G__56920_57090,n__34257__auto___57088,jobs,results,process,async))
})();
var state__39644__auto__ = (function (){var statearr_56974 = f__39643__auto__.call(null);
(statearr_56974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39642__auto___57101);

return statearr_56974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39644__auto__);
});})(__57089,c__39642__auto___57101,G__56920_57090,n__34257__auto___57088,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__57110 = (__57089 + (1));
__57089 = G__57110;
continue;
} else {
}
break;
}

var c__39642__auto___57111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39642__auto___57111,jobs,results,process,async){
return (function (){
var f__39643__auto__ = (function (){var switch__39530__auto__ = ((function (c__39642__auto___57111,jobs,results,process,async){
return (function (state_56996){
var state_val_56997 = (state_56996[(1)]);
if((state_val_56997 === (1))){
var state_56996__$1 = state_56996;
var statearr_56998_57112 = state_56996__$1;
(statearr_56998_57112[(2)] = null);

(statearr_56998_57112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56997 === (2))){
var state_56996__$1 = state_56996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56996__$1,(4),from);
} else {
if((state_val_56997 === (3))){
var inst_56994 = (state_56996[(2)]);
var state_56996__$1 = state_56996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56996__$1,inst_56994);
} else {
if((state_val_56997 === (4))){
var inst_56977 = (state_56996[(7)]);
var inst_56977__$1 = (state_56996[(2)]);
var inst_56978 = (inst_56977__$1 == null);
var state_56996__$1 = (function (){var statearr_56999 = state_56996;
(statearr_56999[(7)] = inst_56977__$1);

return statearr_56999;
})();
if(cljs.core.truth_(inst_56978)){
var statearr_57000_57113 = state_56996__$1;
(statearr_57000_57113[(1)] = (5));

} else {
var statearr_57001_57114 = state_56996__$1;
(statearr_57001_57114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56997 === (5))){
var inst_56980 = cljs.core.async.close_BANG_.call(null,jobs);
var state_56996__$1 = state_56996;
var statearr_57002_57115 = state_56996__$1;
(statearr_57002_57115[(2)] = inst_56980);

(statearr_57002_57115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56997 === (6))){
var inst_56977 = (state_56996[(7)]);
var inst_56982 = (state_56996[(8)]);
var inst_56982__$1 = cljs.core.async.chan.call(null,(1));
var inst_56983 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56984 = [inst_56977,inst_56982__$1];
var inst_56985 = (new cljs.core.PersistentVector(null,2,(5),inst_56983,inst_56984,null));
var state_56996__$1 = (function (){var statearr_57003 = state_56996;
(statearr_57003[(8)] = inst_56982__$1);

return statearr_57003;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56996__$1,(8),jobs,inst_56985);
} else {
if((state_val_56997 === (7))){
var inst_56992 = (state_56996[(2)]);
var state_56996__$1 = state_56996;
var statearr_57004_57116 = state_56996__$1;
(statearr_57004_57116[(2)] = inst_56992);

(statearr_57004_57116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56997 === (8))){
var inst_56982 = (state_56996[(8)]);
var inst_56987 = (state_56996[(2)]);
var state_56996__$1 = (function (){var statearr_57005 = state_56996;
(statearr_57005[(9)] = inst_56987);

return statearr_57005;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56996__$1,(9),results,inst_56982);
} else {
if((state_val_56997 === (9))){
var inst_56989 = (state_56996[(2)]);
var state_56996__$1 = (function (){var statearr_57006 = state_56996;
(statearr_57006[(10)] = inst_56989);

return statearr_57006;
})();
var statearr_57007_57117 = state_56996__$1;
(statearr_57007_57117[(2)] = null);

(statearr_57007_57117[(1)] = (2));


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
});})(c__39642__auto___57111,jobs,results,process,async))
;
return ((function (switch__39530__auto__,c__39642__auto___57111,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39531__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39531__auto____0 = (function (){
var statearr_57011 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57011[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39531__auto__);

(statearr_57011[(1)] = (1));

return statearr_57011;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39531__auto____1 = (function (state_56996){
while(true){
var ret_value__39532__auto__ = (function (){try{while(true){
var result__39533__auto__ = switch__39530__auto__.call(null,state_56996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39533__auto__;
}
break;
}
}catch (e57012){if((e57012 instanceof Object)){
var ex__39534__auto__ = e57012;
var statearr_57013_57118 = state_56996;
(statearr_57013_57118[(5)] = ex__39534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57119 = state_56996;
state_56996 = G__57119;
continue;
} else {
return ret_value__39532__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39531__auto__ = function(state_56996){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39531__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39531__auto____1.call(this,state_56996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39531__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39531__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39531__auto__;
})()
;})(switch__39530__auto__,c__39642__auto___57111,jobs,results,process,async))
})();
var state__39644__auto__ = (function (){var statearr_57014 = f__39643__auto__.call(null);
(statearr_57014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39642__auto___57111);

return statearr_57014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39644__auto__);
});})(c__39642__auto___57111,jobs,results,process,async))
);


var c__39642__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39642__auto__,jobs,results,process,async){
return (function (){
var f__39643__auto__ = (function (){var switch__39530__auto__ = ((function (c__39642__auto__,jobs,results,process,async){
return (function (state_57052){
var state_val_57053 = (state_57052[(1)]);
if((state_val_57053 === (7))){
var inst_57048 = (state_57052[(2)]);
var state_57052__$1 = state_57052;
var statearr_57054_57120 = state_57052__$1;
(statearr_57054_57120[(2)] = inst_57048);

(statearr_57054_57120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57053 === (20))){
var state_57052__$1 = state_57052;
var statearr_57055_57121 = state_57052__$1;
(statearr_57055_57121[(2)] = null);

(statearr_57055_57121[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57053 === (1))){
var state_57052__$1 = state_57052;
var statearr_57056_57122 = state_57052__$1;
(statearr_57056_57122[(2)] = null);

(statearr_57056_57122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57053 === (4))){
var inst_57017 = (state_57052[(7)]);
var inst_57017__$1 = (state_57052[(2)]);
var inst_57018 = (inst_57017__$1 == null);
var state_57052__$1 = (function (){var statearr_57057 = state_57052;
(statearr_57057[(7)] = inst_57017__$1);

return statearr_57057;
})();
if(cljs.core.truth_(inst_57018)){
var statearr_57058_57123 = state_57052__$1;
(statearr_57058_57123[(1)] = (5));

} else {
var statearr_57059_57124 = state_57052__$1;
(statearr_57059_57124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57053 === (15))){
var inst_57030 = (state_57052[(8)]);
var state_57052__$1 = state_57052;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57052__$1,(18),to,inst_57030);
} else {
if((state_val_57053 === (21))){
var inst_57043 = (state_57052[(2)]);
var state_57052__$1 = state_57052;
var statearr_57060_57125 = state_57052__$1;
(statearr_57060_57125[(2)] = inst_57043);

(statearr_57060_57125[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57053 === (13))){
var inst_57045 = (state_57052[(2)]);
var state_57052__$1 = (function (){var statearr_57061 = state_57052;
(statearr_57061[(9)] = inst_57045);

return statearr_57061;
})();
var statearr_57062_57126 = state_57052__$1;
(statearr_57062_57126[(2)] = null);

(statearr_57062_57126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57053 === (6))){
var inst_57017 = (state_57052[(7)]);
var state_57052__$1 = state_57052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57052__$1,(11),inst_57017);
} else {
if((state_val_57053 === (17))){
var inst_57038 = (state_57052[(2)]);
var state_57052__$1 = state_57052;
if(cljs.core.truth_(inst_57038)){
var statearr_57063_57127 = state_57052__$1;
(statearr_57063_57127[(1)] = (19));

} else {
var statearr_57064_57128 = state_57052__$1;
(statearr_57064_57128[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57053 === (3))){
var inst_57050 = (state_57052[(2)]);
var state_57052__$1 = state_57052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57052__$1,inst_57050);
} else {
if((state_val_57053 === (12))){
var inst_57027 = (state_57052[(10)]);
var state_57052__$1 = state_57052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57052__$1,(14),inst_57027);
} else {
if((state_val_57053 === (2))){
var state_57052__$1 = state_57052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57052__$1,(4),results);
} else {
if((state_val_57053 === (19))){
var state_57052__$1 = state_57052;
var statearr_57065_57129 = state_57052__$1;
(statearr_57065_57129[(2)] = null);

(statearr_57065_57129[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57053 === (11))){
var inst_57027 = (state_57052[(2)]);
var state_57052__$1 = (function (){var statearr_57066 = state_57052;
(statearr_57066[(10)] = inst_57027);

return statearr_57066;
})();
var statearr_57067_57130 = state_57052__$1;
(statearr_57067_57130[(2)] = null);

(statearr_57067_57130[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57053 === (9))){
var state_57052__$1 = state_57052;
var statearr_57068_57131 = state_57052__$1;
(statearr_57068_57131[(2)] = null);

(statearr_57068_57131[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57053 === (5))){
var state_57052__$1 = state_57052;
if(cljs.core.truth_(close_QMARK_)){
var statearr_57069_57132 = state_57052__$1;
(statearr_57069_57132[(1)] = (8));

} else {
var statearr_57070_57133 = state_57052__$1;
(statearr_57070_57133[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57053 === (14))){
var inst_57030 = (state_57052[(8)]);
var inst_57032 = (state_57052[(11)]);
var inst_57030__$1 = (state_57052[(2)]);
var inst_57031 = (inst_57030__$1 == null);
var inst_57032__$1 = cljs.core.not.call(null,inst_57031);
var state_57052__$1 = (function (){var statearr_57071 = state_57052;
(statearr_57071[(8)] = inst_57030__$1);

(statearr_57071[(11)] = inst_57032__$1);

return statearr_57071;
})();
if(inst_57032__$1){
var statearr_57072_57134 = state_57052__$1;
(statearr_57072_57134[(1)] = (15));

} else {
var statearr_57073_57135 = state_57052__$1;
(statearr_57073_57135[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57053 === (16))){
var inst_57032 = (state_57052[(11)]);
var state_57052__$1 = state_57052;
var statearr_57074_57136 = state_57052__$1;
(statearr_57074_57136[(2)] = inst_57032);

(statearr_57074_57136[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57053 === (10))){
var inst_57024 = (state_57052[(2)]);
var state_57052__$1 = state_57052;
var statearr_57075_57137 = state_57052__$1;
(statearr_57075_57137[(2)] = inst_57024);

(statearr_57075_57137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57053 === (18))){
var inst_57035 = (state_57052[(2)]);
var state_57052__$1 = state_57052;
var statearr_57076_57138 = state_57052__$1;
(statearr_57076_57138[(2)] = inst_57035);

(statearr_57076_57138[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57053 === (8))){
var inst_57021 = cljs.core.async.close_BANG_.call(null,to);
var state_57052__$1 = state_57052;
var statearr_57077_57139 = state_57052__$1;
(statearr_57077_57139[(2)] = inst_57021);

(statearr_57077_57139[(1)] = (10));


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
});})(c__39642__auto__,jobs,results,process,async))
;
return ((function (switch__39530__auto__,c__39642__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39531__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39531__auto____0 = (function (){
var statearr_57081 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57081[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39531__auto__);

(statearr_57081[(1)] = (1));

return statearr_57081;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39531__auto____1 = (function (state_57052){
while(true){
var ret_value__39532__auto__ = (function (){try{while(true){
var result__39533__auto__ = switch__39530__auto__.call(null,state_57052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39533__auto__;
}
break;
}
}catch (e57082){if((e57082 instanceof Object)){
var ex__39534__auto__ = e57082;
var statearr_57083_57140 = state_57052;
(statearr_57083_57140[(5)] = ex__39534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57141 = state_57052;
state_57052 = G__57141;
continue;
} else {
return ret_value__39532__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39531__auto__ = function(state_57052){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39531__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39531__auto____1.call(this,state_57052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39531__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39531__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39531__auto__;
})()
;})(switch__39530__auto__,c__39642__auto__,jobs,results,process,async))
})();
var state__39644__auto__ = (function (){var statearr_57084 = f__39643__auto__.call(null);
(statearr_57084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39642__auto__);

return statearr_57084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39644__auto__);
});})(c__39642__auto__,jobs,results,process,async))
);

return c__39642__auto__;
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
var args57142 = [];
var len__34447__auto___57145 = arguments.length;
var i__34448__auto___57146 = (0);
while(true){
if((i__34448__auto___57146 < len__34447__auto___57145)){
args57142.push((arguments[i__34448__auto___57146]));

var G__57147 = (i__34448__auto___57146 + (1));
i__34448__auto___57146 = G__57147;
continue;
} else {
}
break;
}

var G__57144 = args57142.length;
switch (G__57144) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args57142.length)].join('')));

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
var args57149 = [];
var len__34447__auto___57152 = arguments.length;
var i__34448__auto___57153 = (0);
while(true){
if((i__34448__auto___57153 < len__34447__auto___57152)){
args57149.push((arguments[i__34448__auto___57153]));

var G__57154 = (i__34448__auto___57153 + (1));
i__34448__auto___57153 = G__57154;
continue;
} else {
}
break;
}

var G__57151 = args57149.length;
switch (G__57151) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args57149.length)].join('')));

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
var args57156 = [];
var len__34447__auto___57209 = arguments.length;
var i__34448__auto___57210 = (0);
while(true){
if((i__34448__auto___57210 < len__34447__auto___57209)){
args57156.push((arguments[i__34448__auto___57210]));

var G__57211 = (i__34448__auto___57210 + (1));
i__34448__auto___57210 = G__57211;
continue;
} else {
}
break;
}

var G__57158 = args57156.length;
switch (G__57158) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args57156.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__39642__auto___57213 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39642__auto___57213,tc,fc){
return (function (){
var f__39643__auto__ = (function (){var switch__39530__auto__ = ((function (c__39642__auto___57213,tc,fc){
return (function (state_57184){
var state_val_57185 = (state_57184[(1)]);
if((state_val_57185 === (7))){
var inst_57180 = (state_57184[(2)]);
var state_57184__$1 = state_57184;
var statearr_57186_57214 = state_57184__$1;
(statearr_57186_57214[(2)] = inst_57180);

(statearr_57186_57214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57185 === (1))){
var state_57184__$1 = state_57184;
var statearr_57187_57215 = state_57184__$1;
(statearr_57187_57215[(2)] = null);

(statearr_57187_57215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57185 === (4))){
var inst_57161 = (state_57184[(7)]);
var inst_57161__$1 = (state_57184[(2)]);
var inst_57162 = (inst_57161__$1 == null);
var state_57184__$1 = (function (){var statearr_57188 = state_57184;
(statearr_57188[(7)] = inst_57161__$1);

return statearr_57188;
})();
if(cljs.core.truth_(inst_57162)){
var statearr_57189_57216 = state_57184__$1;
(statearr_57189_57216[(1)] = (5));

} else {
var statearr_57190_57217 = state_57184__$1;
(statearr_57190_57217[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57185 === (13))){
var state_57184__$1 = state_57184;
var statearr_57191_57218 = state_57184__$1;
(statearr_57191_57218[(2)] = null);

(statearr_57191_57218[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57185 === (6))){
var inst_57161 = (state_57184[(7)]);
var inst_57167 = p.call(null,inst_57161);
var state_57184__$1 = state_57184;
if(cljs.core.truth_(inst_57167)){
var statearr_57192_57219 = state_57184__$1;
(statearr_57192_57219[(1)] = (9));

} else {
var statearr_57193_57220 = state_57184__$1;
(statearr_57193_57220[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57185 === (3))){
var inst_57182 = (state_57184[(2)]);
var state_57184__$1 = state_57184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57184__$1,inst_57182);
} else {
if((state_val_57185 === (12))){
var state_57184__$1 = state_57184;
var statearr_57194_57221 = state_57184__$1;
(statearr_57194_57221[(2)] = null);

(statearr_57194_57221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57185 === (2))){
var state_57184__$1 = state_57184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57184__$1,(4),ch);
} else {
if((state_val_57185 === (11))){
var inst_57161 = (state_57184[(7)]);
var inst_57171 = (state_57184[(2)]);
var state_57184__$1 = state_57184;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57184__$1,(8),inst_57171,inst_57161);
} else {
if((state_val_57185 === (9))){
var state_57184__$1 = state_57184;
var statearr_57195_57222 = state_57184__$1;
(statearr_57195_57222[(2)] = tc);

(statearr_57195_57222[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57185 === (5))){
var inst_57164 = cljs.core.async.close_BANG_.call(null,tc);
var inst_57165 = cljs.core.async.close_BANG_.call(null,fc);
var state_57184__$1 = (function (){var statearr_57196 = state_57184;
(statearr_57196[(8)] = inst_57164);

return statearr_57196;
})();
var statearr_57197_57223 = state_57184__$1;
(statearr_57197_57223[(2)] = inst_57165);

(statearr_57197_57223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57185 === (14))){
var inst_57178 = (state_57184[(2)]);
var state_57184__$1 = state_57184;
var statearr_57198_57224 = state_57184__$1;
(statearr_57198_57224[(2)] = inst_57178);

(statearr_57198_57224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57185 === (10))){
var state_57184__$1 = state_57184;
var statearr_57199_57225 = state_57184__$1;
(statearr_57199_57225[(2)] = fc);

(statearr_57199_57225[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57185 === (8))){
var inst_57173 = (state_57184[(2)]);
var state_57184__$1 = state_57184;
if(cljs.core.truth_(inst_57173)){
var statearr_57200_57226 = state_57184__$1;
(statearr_57200_57226[(1)] = (12));

} else {
var statearr_57201_57227 = state_57184__$1;
(statearr_57201_57227[(1)] = (13));

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
});})(c__39642__auto___57213,tc,fc))
;
return ((function (switch__39530__auto__,c__39642__auto___57213,tc,fc){
return (function() {
var cljs$core$async$state_machine__39531__auto__ = null;
var cljs$core$async$state_machine__39531__auto____0 = (function (){
var statearr_57205 = [null,null,null,null,null,null,null,null,null];
(statearr_57205[(0)] = cljs$core$async$state_machine__39531__auto__);

(statearr_57205[(1)] = (1));

return statearr_57205;
});
var cljs$core$async$state_machine__39531__auto____1 = (function (state_57184){
while(true){
var ret_value__39532__auto__ = (function (){try{while(true){
var result__39533__auto__ = switch__39530__auto__.call(null,state_57184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39533__auto__;
}
break;
}
}catch (e57206){if((e57206 instanceof Object)){
var ex__39534__auto__ = e57206;
var statearr_57207_57228 = state_57184;
(statearr_57207_57228[(5)] = ex__39534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57229 = state_57184;
state_57184 = G__57229;
continue;
} else {
return ret_value__39532__auto__;
}
break;
}
});
cljs$core$async$state_machine__39531__auto__ = function(state_57184){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39531__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39531__auto____1.call(this,state_57184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39531__auto____0;
cljs$core$async$state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39531__auto____1;
return cljs$core$async$state_machine__39531__auto__;
})()
;})(switch__39530__auto__,c__39642__auto___57213,tc,fc))
})();
var state__39644__auto__ = (function (){var statearr_57208 = f__39643__auto__.call(null);
(statearr_57208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39642__auto___57213);

return statearr_57208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39644__auto__);
});})(c__39642__auto___57213,tc,fc))
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
var c__39642__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39642__auto__){
return (function (){
var f__39643__auto__ = (function (){var switch__39530__auto__ = ((function (c__39642__auto__){
return (function (state_57293){
var state_val_57294 = (state_57293[(1)]);
if((state_val_57294 === (7))){
var inst_57289 = (state_57293[(2)]);
var state_57293__$1 = state_57293;
var statearr_57295_57316 = state_57293__$1;
(statearr_57295_57316[(2)] = inst_57289);

(statearr_57295_57316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57294 === (1))){
var inst_57273 = init;
var state_57293__$1 = (function (){var statearr_57296 = state_57293;
(statearr_57296[(7)] = inst_57273);

return statearr_57296;
})();
var statearr_57297_57317 = state_57293__$1;
(statearr_57297_57317[(2)] = null);

(statearr_57297_57317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57294 === (4))){
var inst_57276 = (state_57293[(8)]);
var inst_57276__$1 = (state_57293[(2)]);
var inst_57277 = (inst_57276__$1 == null);
var state_57293__$1 = (function (){var statearr_57298 = state_57293;
(statearr_57298[(8)] = inst_57276__$1);

return statearr_57298;
})();
if(cljs.core.truth_(inst_57277)){
var statearr_57299_57318 = state_57293__$1;
(statearr_57299_57318[(1)] = (5));

} else {
var statearr_57300_57319 = state_57293__$1;
(statearr_57300_57319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57294 === (6))){
var inst_57280 = (state_57293[(9)]);
var inst_57273 = (state_57293[(7)]);
var inst_57276 = (state_57293[(8)]);
var inst_57280__$1 = f.call(null,inst_57273,inst_57276);
var inst_57281 = cljs.core.reduced_QMARK_.call(null,inst_57280__$1);
var state_57293__$1 = (function (){var statearr_57301 = state_57293;
(statearr_57301[(9)] = inst_57280__$1);

return statearr_57301;
})();
if(inst_57281){
var statearr_57302_57320 = state_57293__$1;
(statearr_57302_57320[(1)] = (8));

} else {
var statearr_57303_57321 = state_57293__$1;
(statearr_57303_57321[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57294 === (3))){
var inst_57291 = (state_57293[(2)]);
var state_57293__$1 = state_57293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57293__$1,inst_57291);
} else {
if((state_val_57294 === (2))){
var state_57293__$1 = state_57293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57293__$1,(4),ch);
} else {
if((state_val_57294 === (9))){
var inst_57280 = (state_57293[(9)]);
var inst_57273 = inst_57280;
var state_57293__$1 = (function (){var statearr_57304 = state_57293;
(statearr_57304[(7)] = inst_57273);

return statearr_57304;
})();
var statearr_57305_57322 = state_57293__$1;
(statearr_57305_57322[(2)] = null);

(statearr_57305_57322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57294 === (5))){
var inst_57273 = (state_57293[(7)]);
var state_57293__$1 = state_57293;
var statearr_57306_57323 = state_57293__$1;
(statearr_57306_57323[(2)] = inst_57273);

(statearr_57306_57323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57294 === (10))){
var inst_57287 = (state_57293[(2)]);
var state_57293__$1 = state_57293;
var statearr_57307_57324 = state_57293__$1;
(statearr_57307_57324[(2)] = inst_57287);

(statearr_57307_57324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57294 === (8))){
var inst_57280 = (state_57293[(9)]);
var inst_57283 = cljs.core.deref.call(null,inst_57280);
var state_57293__$1 = state_57293;
var statearr_57308_57325 = state_57293__$1;
(statearr_57308_57325[(2)] = inst_57283);

(statearr_57308_57325[(1)] = (10));


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
});})(c__39642__auto__))
;
return ((function (switch__39530__auto__,c__39642__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__39531__auto__ = null;
var cljs$core$async$reduce_$_state_machine__39531__auto____0 = (function (){
var statearr_57312 = [null,null,null,null,null,null,null,null,null,null];
(statearr_57312[(0)] = cljs$core$async$reduce_$_state_machine__39531__auto__);

(statearr_57312[(1)] = (1));

return statearr_57312;
});
var cljs$core$async$reduce_$_state_machine__39531__auto____1 = (function (state_57293){
while(true){
var ret_value__39532__auto__ = (function (){try{while(true){
var result__39533__auto__ = switch__39530__auto__.call(null,state_57293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39533__auto__;
}
break;
}
}catch (e57313){if((e57313 instanceof Object)){
var ex__39534__auto__ = e57313;
var statearr_57314_57326 = state_57293;
(statearr_57314_57326[(5)] = ex__39534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57327 = state_57293;
state_57293 = G__57327;
continue;
} else {
return ret_value__39532__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__39531__auto__ = function(state_57293){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__39531__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__39531__auto____1.call(this,state_57293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__39531__auto____0;
cljs$core$async$reduce_$_state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__39531__auto____1;
return cljs$core$async$reduce_$_state_machine__39531__auto__;
})()
;})(switch__39530__auto__,c__39642__auto__))
})();
var state__39644__auto__ = (function (){var statearr_57315 = f__39643__auto__.call(null);
(statearr_57315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39642__auto__);

return statearr_57315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39644__auto__);
});})(c__39642__auto__))
);

return c__39642__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__39642__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39642__auto__,f__$1){
return (function (){
var f__39643__auto__ = (function (){var switch__39530__auto__ = ((function (c__39642__auto__,f__$1){
return (function (state_57347){
var state_val_57348 = (state_57347[(1)]);
if((state_val_57348 === (1))){
var inst_57342 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_57347__$1 = state_57347;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57347__$1,(2),inst_57342);
} else {
if((state_val_57348 === (2))){
var inst_57344 = (state_57347[(2)]);
var inst_57345 = f__$1.call(null,inst_57344);
var state_57347__$1 = state_57347;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57347__$1,inst_57345);
} else {
return null;
}
}
});})(c__39642__auto__,f__$1))
;
return ((function (switch__39530__auto__,c__39642__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__39531__auto__ = null;
var cljs$core$async$transduce_$_state_machine__39531__auto____0 = (function (){
var statearr_57352 = [null,null,null,null,null,null,null];
(statearr_57352[(0)] = cljs$core$async$transduce_$_state_machine__39531__auto__);

(statearr_57352[(1)] = (1));

return statearr_57352;
});
var cljs$core$async$transduce_$_state_machine__39531__auto____1 = (function (state_57347){
while(true){
var ret_value__39532__auto__ = (function (){try{while(true){
var result__39533__auto__ = switch__39530__auto__.call(null,state_57347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39533__auto__;
}
break;
}
}catch (e57353){if((e57353 instanceof Object)){
var ex__39534__auto__ = e57353;
var statearr_57354_57356 = state_57347;
(statearr_57354_57356[(5)] = ex__39534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57357 = state_57347;
state_57347 = G__57357;
continue;
} else {
return ret_value__39532__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__39531__auto__ = function(state_57347){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__39531__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__39531__auto____1.call(this,state_57347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__39531__auto____0;
cljs$core$async$transduce_$_state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__39531__auto____1;
return cljs$core$async$transduce_$_state_machine__39531__auto__;
})()
;})(switch__39530__auto__,c__39642__auto__,f__$1))
})();
var state__39644__auto__ = (function (){var statearr_57355 = f__39643__auto__.call(null);
(statearr_57355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39642__auto__);

return statearr_57355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39644__auto__);
});})(c__39642__auto__,f__$1))
);

return c__39642__auto__;
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
var args57358 = [];
var len__34447__auto___57410 = arguments.length;
var i__34448__auto___57411 = (0);
while(true){
if((i__34448__auto___57411 < len__34447__auto___57410)){
args57358.push((arguments[i__34448__auto___57411]));

var G__57412 = (i__34448__auto___57411 + (1));
i__34448__auto___57411 = G__57412;
continue;
} else {
}
break;
}

var G__57360 = args57358.length;
switch (G__57360) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args57358.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__39642__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39642__auto__){
return (function (){
var f__39643__auto__ = (function (){var switch__39530__auto__ = ((function (c__39642__auto__){
return (function (state_57385){
var state_val_57386 = (state_57385[(1)]);
if((state_val_57386 === (7))){
var inst_57367 = (state_57385[(2)]);
var state_57385__$1 = state_57385;
var statearr_57387_57414 = state_57385__$1;
(statearr_57387_57414[(2)] = inst_57367);

(statearr_57387_57414[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57386 === (1))){
var inst_57361 = cljs.core.seq.call(null,coll);
var inst_57362 = inst_57361;
var state_57385__$1 = (function (){var statearr_57388 = state_57385;
(statearr_57388[(7)] = inst_57362);

return statearr_57388;
})();
var statearr_57389_57415 = state_57385__$1;
(statearr_57389_57415[(2)] = null);

(statearr_57389_57415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57386 === (4))){
var inst_57362 = (state_57385[(7)]);
var inst_57365 = cljs.core.first.call(null,inst_57362);
var state_57385__$1 = state_57385;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57385__$1,(7),ch,inst_57365);
} else {
if((state_val_57386 === (13))){
var inst_57379 = (state_57385[(2)]);
var state_57385__$1 = state_57385;
var statearr_57390_57416 = state_57385__$1;
(statearr_57390_57416[(2)] = inst_57379);

(statearr_57390_57416[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57386 === (6))){
var inst_57370 = (state_57385[(2)]);
var state_57385__$1 = state_57385;
if(cljs.core.truth_(inst_57370)){
var statearr_57391_57417 = state_57385__$1;
(statearr_57391_57417[(1)] = (8));

} else {
var statearr_57392_57418 = state_57385__$1;
(statearr_57392_57418[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57386 === (3))){
var inst_57383 = (state_57385[(2)]);
var state_57385__$1 = state_57385;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57385__$1,inst_57383);
} else {
if((state_val_57386 === (12))){
var state_57385__$1 = state_57385;
var statearr_57393_57419 = state_57385__$1;
(statearr_57393_57419[(2)] = null);

(statearr_57393_57419[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57386 === (2))){
var inst_57362 = (state_57385[(7)]);
var state_57385__$1 = state_57385;
if(cljs.core.truth_(inst_57362)){
var statearr_57394_57420 = state_57385__$1;
(statearr_57394_57420[(1)] = (4));

} else {
var statearr_57395_57421 = state_57385__$1;
(statearr_57395_57421[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57386 === (11))){
var inst_57376 = cljs.core.async.close_BANG_.call(null,ch);
var state_57385__$1 = state_57385;
var statearr_57396_57422 = state_57385__$1;
(statearr_57396_57422[(2)] = inst_57376);

(statearr_57396_57422[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57386 === (9))){
var state_57385__$1 = state_57385;
if(cljs.core.truth_(close_QMARK_)){
var statearr_57397_57423 = state_57385__$1;
(statearr_57397_57423[(1)] = (11));

} else {
var statearr_57398_57424 = state_57385__$1;
(statearr_57398_57424[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57386 === (5))){
var inst_57362 = (state_57385[(7)]);
var state_57385__$1 = state_57385;
var statearr_57399_57425 = state_57385__$1;
(statearr_57399_57425[(2)] = inst_57362);

(statearr_57399_57425[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57386 === (10))){
var inst_57381 = (state_57385[(2)]);
var state_57385__$1 = state_57385;
var statearr_57400_57426 = state_57385__$1;
(statearr_57400_57426[(2)] = inst_57381);

(statearr_57400_57426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57386 === (8))){
var inst_57362 = (state_57385[(7)]);
var inst_57372 = cljs.core.next.call(null,inst_57362);
var inst_57362__$1 = inst_57372;
var state_57385__$1 = (function (){var statearr_57401 = state_57385;
(statearr_57401[(7)] = inst_57362__$1);

return statearr_57401;
})();
var statearr_57402_57427 = state_57385__$1;
(statearr_57402_57427[(2)] = null);

(statearr_57402_57427[(1)] = (2));


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
});})(c__39642__auto__))
;
return ((function (switch__39530__auto__,c__39642__auto__){
return (function() {
var cljs$core$async$state_machine__39531__auto__ = null;
var cljs$core$async$state_machine__39531__auto____0 = (function (){
var statearr_57406 = [null,null,null,null,null,null,null,null];
(statearr_57406[(0)] = cljs$core$async$state_machine__39531__auto__);

(statearr_57406[(1)] = (1));

return statearr_57406;
});
var cljs$core$async$state_machine__39531__auto____1 = (function (state_57385){
while(true){
var ret_value__39532__auto__ = (function (){try{while(true){
var result__39533__auto__ = switch__39530__auto__.call(null,state_57385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39533__auto__;
}
break;
}
}catch (e57407){if((e57407 instanceof Object)){
var ex__39534__auto__ = e57407;
var statearr_57408_57428 = state_57385;
(statearr_57408_57428[(5)] = ex__39534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57429 = state_57385;
state_57385 = G__57429;
continue;
} else {
return ret_value__39532__auto__;
}
break;
}
});
cljs$core$async$state_machine__39531__auto__ = function(state_57385){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39531__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39531__auto____1.call(this,state_57385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39531__auto____0;
cljs$core$async$state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39531__auto____1;
return cljs$core$async$state_machine__39531__auto__;
})()
;})(switch__39530__auto__,c__39642__auto__))
})();
var state__39644__auto__ = (function (){var statearr_57409 = f__39643__auto__.call(null);
(statearr_57409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39642__auto__);

return statearr_57409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39644__auto__);
});})(c__39642__auto__))
);

return c__39642__auto__;
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
var x__34002__auto__ = (((_ == null))?null:_);
var m__34003__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__34002__auto__)]);
if(!((m__34003__auto__ == null))){
return m__34003__auto__.call(null,_);
} else {
var m__34003__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__34003__auto____$1 == null))){
return m__34003__auto____$1.call(null,_);
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
var x__34002__auto__ = (((m == null))?null:m);
var m__34003__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__34002__auto__)]);
if(!((m__34003__auto__ == null))){
return m__34003__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__34003__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__34003__auto____$1 == null))){
return m__34003__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__34002__auto__ = (((m == null))?null:m);
var m__34003__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__34002__auto__)]);
if(!((m__34003__auto__ == null))){
return m__34003__auto__.call(null,m,ch);
} else {
var m__34003__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__34003__auto____$1 == null))){
return m__34003__auto____$1.call(null,m,ch);
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
var x__34002__auto__ = (((m == null))?null:m);
var m__34003__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__34002__auto__)]);
if(!((m__34003__auto__ == null))){
return m__34003__auto__.call(null,m);
} else {
var m__34003__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__34003__auto____$1 == null))){
return m__34003__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async57655 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57655 = (function (ch,cs,meta57656){
this.ch = ch;
this.cs = cs;
this.meta57656 = meta57656;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async57655.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_57657,meta57656__$1){
var self__ = this;
var _57657__$1 = this;
return (new cljs.core.async.t_cljs$core$async57655(self__.ch,self__.cs,meta57656__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async57655.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_57657){
var self__ = this;
var _57657__$1 = this;
return self__.meta57656;
});})(cs))
;

cljs.core.async.t_cljs$core$async57655.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57655.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async57655.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57655.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async57655.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async57655.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async57655.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta57656","meta57656",-1951804295,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async57655.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async57655.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57655";

cljs.core.async.t_cljs$core$async57655.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__33945__auto__,writer__33946__auto__,opt__33947__auto__){
return cljs.core._write.call(null,writer__33946__auto__,"cljs.core.async/t_cljs$core$async57655");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async57655 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async57655(ch__$1,cs__$1,meta57656){
return (new cljs.core.async.t_cljs$core$async57655(ch__$1,cs__$1,meta57656));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async57655(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__39642__auto___57880 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39642__auto___57880,cs,m,dchan,dctr,done){
return (function (){
var f__39643__auto__ = (function (){var switch__39530__auto__ = ((function (c__39642__auto___57880,cs,m,dchan,dctr,done){
return (function (state_57792){
var state_val_57793 = (state_57792[(1)]);
if((state_val_57793 === (7))){
var inst_57788 = (state_57792[(2)]);
var state_57792__$1 = state_57792;
var statearr_57794_57881 = state_57792__$1;
(statearr_57794_57881[(2)] = inst_57788);

(statearr_57794_57881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57793 === (20))){
var inst_57691 = (state_57792[(7)]);
var inst_57703 = cljs.core.first.call(null,inst_57691);
var inst_57704 = cljs.core.nth.call(null,inst_57703,(0),null);
var inst_57705 = cljs.core.nth.call(null,inst_57703,(1),null);
var state_57792__$1 = (function (){var statearr_57795 = state_57792;
(statearr_57795[(8)] = inst_57704);

return statearr_57795;
})();
if(cljs.core.truth_(inst_57705)){
var statearr_57796_57882 = state_57792__$1;
(statearr_57796_57882[(1)] = (22));

} else {
var statearr_57797_57883 = state_57792__$1;
(statearr_57797_57883[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57793 === (27))){
var inst_57733 = (state_57792[(9)]);
var inst_57735 = (state_57792[(10)]);
var inst_57740 = (state_57792[(11)]);
var inst_57660 = (state_57792[(12)]);
var inst_57740__$1 = cljs.core._nth.call(null,inst_57733,inst_57735);
var inst_57741 = cljs.core.async.put_BANG_.call(null,inst_57740__$1,inst_57660,done);
var state_57792__$1 = (function (){var statearr_57798 = state_57792;
(statearr_57798[(11)] = inst_57740__$1);

return statearr_57798;
})();
if(cljs.core.truth_(inst_57741)){
var statearr_57799_57884 = state_57792__$1;
(statearr_57799_57884[(1)] = (30));

} else {
var statearr_57800_57885 = state_57792__$1;
(statearr_57800_57885[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57793 === (1))){
var state_57792__$1 = state_57792;
var statearr_57801_57886 = state_57792__$1;
(statearr_57801_57886[(2)] = null);

(statearr_57801_57886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57793 === (24))){
var inst_57691 = (state_57792[(7)]);
var inst_57710 = (state_57792[(2)]);
var inst_57711 = cljs.core.next.call(null,inst_57691);
var inst_57669 = inst_57711;
var inst_57670 = null;
var inst_57671 = (0);
var inst_57672 = (0);
var state_57792__$1 = (function (){var statearr_57802 = state_57792;
(statearr_57802[(13)] = inst_57672);

(statearr_57802[(14)] = inst_57671);

(statearr_57802[(15)] = inst_57670);

(statearr_57802[(16)] = inst_57669);

(statearr_57802[(17)] = inst_57710);

return statearr_57802;
})();
var statearr_57803_57887 = state_57792__$1;
(statearr_57803_57887[(2)] = null);

(statearr_57803_57887[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57793 === (39))){
var state_57792__$1 = state_57792;
var statearr_57807_57888 = state_57792__$1;
(statearr_57807_57888[(2)] = null);

(statearr_57807_57888[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57793 === (4))){
var inst_57660 = (state_57792[(12)]);
var inst_57660__$1 = (state_57792[(2)]);
var inst_57661 = (inst_57660__$1 == null);
var state_57792__$1 = (function (){var statearr_57808 = state_57792;
(statearr_57808[(12)] = inst_57660__$1);

return statearr_57808;
})();
if(cljs.core.truth_(inst_57661)){
var statearr_57809_57889 = state_57792__$1;
(statearr_57809_57889[(1)] = (5));

} else {
var statearr_57810_57890 = state_57792__$1;
(statearr_57810_57890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57793 === (15))){
var inst_57672 = (state_57792[(13)]);
var inst_57671 = (state_57792[(14)]);
var inst_57670 = (state_57792[(15)]);
var inst_57669 = (state_57792[(16)]);
var inst_57687 = (state_57792[(2)]);
var inst_57688 = (inst_57672 + (1));
var tmp57804 = inst_57671;
var tmp57805 = inst_57670;
var tmp57806 = inst_57669;
var inst_57669__$1 = tmp57806;
var inst_57670__$1 = tmp57805;
var inst_57671__$1 = tmp57804;
var inst_57672__$1 = inst_57688;
var state_57792__$1 = (function (){var statearr_57811 = state_57792;
(statearr_57811[(18)] = inst_57687);

(statearr_57811[(13)] = inst_57672__$1);

(statearr_57811[(14)] = inst_57671__$1);

(statearr_57811[(15)] = inst_57670__$1);

(statearr_57811[(16)] = inst_57669__$1);

return statearr_57811;
})();
var statearr_57812_57891 = state_57792__$1;
(statearr_57812_57891[(2)] = null);

(statearr_57812_57891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57793 === (21))){
var inst_57714 = (state_57792[(2)]);
var state_57792__$1 = state_57792;
var statearr_57816_57892 = state_57792__$1;
(statearr_57816_57892[(2)] = inst_57714);

(statearr_57816_57892[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57793 === (31))){
var inst_57740 = (state_57792[(11)]);
var inst_57744 = done.call(null,null);
var inst_57745 = cljs.core.async.untap_STAR_.call(null,m,inst_57740);
var state_57792__$1 = (function (){var statearr_57817 = state_57792;
(statearr_57817[(19)] = inst_57744);

return statearr_57817;
})();
var statearr_57818_57893 = state_57792__$1;
(statearr_57818_57893[(2)] = inst_57745);

(statearr_57818_57893[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57793 === (32))){
var inst_57733 = (state_57792[(9)]);
var inst_57735 = (state_57792[(10)]);
var inst_57732 = (state_57792[(20)]);
var inst_57734 = (state_57792[(21)]);
var inst_57747 = (state_57792[(2)]);
var inst_57748 = (inst_57735 + (1));
var tmp57813 = inst_57733;
var tmp57814 = inst_57732;
var tmp57815 = inst_57734;
var inst_57732__$1 = tmp57814;
var inst_57733__$1 = tmp57813;
var inst_57734__$1 = tmp57815;
var inst_57735__$1 = inst_57748;
var state_57792__$1 = (function (){var statearr_57819 = state_57792;
(statearr_57819[(9)] = inst_57733__$1);

(statearr_57819[(10)] = inst_57735__$1);

(statearr_57819[(20)] = inst_57732__$1);

(statearr_57819[(22)] = inst_57747);

(statearr_57819[(21)] = inst_57734__$1);

return statearr_57819;
})();
var statearr_57820_57894 = state_57792__$1;
(statearr_57820_57894[(2)] = null);

(statearr_57820_57894[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57793 === (40))){
var inst_57760 = (state_57792[(23)]);
var inst_57764 = done.call(null,null);
var inst_57765 = cljs.core.async.untap_STAR_.call(null,m,inst_57760);
var state_57792__$1 = (function (){var statearr_57821 = state_57792;
(statearr_57821[(24)] = inst_57764);

return statearr_57821;
})();
var statearr_57822_57895 = state_57792__$1;
(statearr_57822_57895[(2)] = inst_57765);

(statearr_57822_57895[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57793 === (33))){
var inst_57751 = (state_57792[(25)]);
var inst_57753 = cljs.core.chunked_seq_QMARK_.call(null,inst_57751);
var state_57792__$1 = state_57792;
if(inst_57753){
var statearr_57823_57896 = state_57792__$1;
(statearr_57823_57896[(1)] = (36));

} else {
var statearr_57824_57897 = state_57792__$1;
(statearr_57824_57897[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57793 === (13))){
var inst_57681 = (state_57792[(26)]);
var inst_57684 = cljs.core.async.close_BANG_.call(null,inst_57681);
var state_57792__$1 = state_57792;
var statearr_57825_57898 = state_57792__$1;
(statearr_57825_57898[(2)] = inst_57684);

(statearr_57825_57898[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57793 === (22))){
var inst_57704 = (state_57792[(8)]);
var inst_57707 = cljs.core.async.close_BANG_.call(null,inst_57704);
var state_57792__$1 = state_57792;
var statearr_57826_57899 = state_57792__$1;
(statearr_57826_57899[(2)] = inst_57707);

(statearr_57826_57899[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57793 === (36))){
var inst_57751 = (state_57792[(25)]);
var inst_57755 = cljs.core.chunk_first.call(null,inst_57751);
var inst_57756 = cljs.core.chunk_rest.call(null,inst_57751);
var inst_57757 = cljs.core.count.call(null,inst_57755);
var inst_57732 = inst_57756;
var inst_57733 = inst_57755;
var inst_57734 = inst_57757;
var inst_57735 = (0);
var state_57792__$1 = (function (){var statearr_57827 = state_57792;
(statearr_57827[(9)] = inst_57733);

(statearr_57827[(10)] = inst_57735);

(statearr_57827[(20)] = inst_57732);

(statearr_57827[(21)] = inst_57734);

return statearr_57827;
})();
var statearr_57828_57900 = state_57792__$1;
(statearr_57828_57900[(2)] = null);

(statearr_57828_57900[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57793 === (41))){
var inst_57751 = (state_57792[(25)]);
var inst_57767 = (state_57792[(2)]);
var inst_57768 = cljs.core.next.call(null,inst_57751);
var inst_57732 = inst_57768;
var inst_57733 = null;
var inst_57734 = (0);
var inst_57735 = (0);
var state_57792__$1 = (function (){var statearr_57829 = state_57792;
(statearr_57829[(9)] = inst_57733);

(statearr_57829[(10)] = inst_57735);

(statearr_57829[(20)] = inst_57732);

(statearr_57829[(27)] = inst_57767);

(statearr_57829[(21)] = inst_57734);

return statearr_57829;
})();
var statearr_57830_57901 = state_57792__$1;
(statearr_57830_57901[(2)] = null);

(statearr_57830_57901[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57793 === (43))){
var state_57792__$1 = state_57792;
var statearr_57831_57902 = state_57792__$1;
(statearr_57831_57902[(2)] = null);

(statearr_57831_57902[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57793 === (29))){
var inst_57776 = (state_57792[(2)]);
var state_57792__$1 = state_57792;
var statearr_57832_57903 = state_57792__$1;
(statearr_57832_57903[(2)] = inst_57776);

(statearr_57832_57903[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57793 === (44))){
var inst_57785 = (state_57792[(2)]);
var state_57792__$1 = (function (){var statearr_57833 = state_57792;
(statearr_57833[(28)] = inst_57785);

return statearr_57833;
})();
var statearr_57834_57904 = state_57792__$1;
(statearr_57834_57904[(2)] = null);

(statearr_57834_57904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57793 === (6))){
var inst_57724 = (state_57792[(29)]);
var inst_57723 = cljs.core.deref.call(null,cs);
var inst_57724__$1 = cljs.core.keys.call(null,inst_57723);
var inst_57725 = cljs.core.count.call(null,inst_57724__$1);
var inst_57726 = cljs.core.reset_BANG_.call(null,dctr,inst_57725);
var inst_57731 = cljs.core.seq.call(null,inst_57724__$1);
var inst_57732 = inst_57731;
var inst_57733 = null;
var inst_57734 = (0);
var inst_57735 = (0);
var state_57792__$1 = (function (){var statearr_57835 = state_57792;
(statearr_57835[(30)] = inst_57726);

(statearr_57835[(9)] = inst_57733);

(statearr_57835[(10)] = inst_57735);

(statearr_57835[(20)] = inst_57732);

(statearr_57835[(29)] = inst_57724__$1);

(statearr_57835[(21)] = inst_57734);

return statearr_57835;
})();
var statearr_57836_57905 = state_57792__$1;
(statearr_57836_57905[(2)] = null);

(statearr_57836_57905[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57793 === (28))){
var inst_57751 = (state_57792[(25)]);
var inst_57732 = (state_57792[(20)]);
var inst_57751__$1 = cljs.core.seq.call(null,inst_57732);
var state_57792__$1 = (function (){var statearr_57837 = state_57792;
(statearr_57837[(25)] = inst_57751__$1);

return statearr_57837;
})();
if(inst_57751__$1){
var statearr_57838_57906 = state_57792__$1;
(statearr_57838_57906[(1)] = (33));

} else {
var statearr_57839_57907 = state_57792__$1;
(statearr_57839_57907[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57793 === (25))){
var inst_57735 = (state_57792[(10)]);
var inst_57734 = (state_57792[(21)]);
var inst_57737 = (inst_57735 < inst_57734);
var inst_57738 = inst_57737;
var state_57792__$1 = state_57792;
if(cljs.core.truth_(inst_57738)){
var statearr_57840_57908 = state_57792__$1;
(statearr_57840_57908[(1)] = (27));

} else {
var statearr_57841_57909 = state_57792__$1;
(statearr_57841_57909[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57793 === (34))){
var state_57792__$1 = state_57792;
var statearr_57842_57910 = state_57792__$1;
(statearr_57842_57910[(2)] = null);

(statearr_57842_57910[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57793 === (17))){
var state_57792__$1 = state_57792;
var statearr_57843_57911 = state_57792__$1;
(statearr_57843_57911[(2)] = null);

(statearr_57843_57911[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57793 === (3))){
var inst_57790 = (state_57792[(2)]);
var state_57792__$1 = state_57792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57792__$1,inst_57790);
} else {
if((state_val_57793 === (12))){
var inst_57719 = (state_57792[(2)]);
var state_57792__$1 = state_57792;
var statearr_57844_57912 = state_57792__$1;
(statearr_57844_57912[(2)] = inst_57719);

(statearr_57844_57912[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57793 === (2))){
var state_57792__$1 = state_57792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57792__$1,(4),ch);
} else {
if((state_val_57793 === (23))){
var state_57792__$1 = state_57792;
var statearr_57845_57913 = state_57792__$1;
(statearr_57845_57913[(2)] = null);

(statearr_57845_57913[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57793 === (35))){
var inst_57774 = (state_57792[(2)]);
var state_57792__$1 = state_57792;
var statearr_57846_57914 = state_57792__$1;
(statearr_57846_57914[(2)] = inst_57774);

(statearr_57846_57914[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57793 === (19))){
var inst_57691 = (state_57792[(7)]);
var inst_57695 = cljs.core.chunk_first.call(null,inst_57691);
var inst_57696 = cljs.core.chunk_rest.call(null,inst_57691);
var inst_57697 = cljs.core.count.call(null,inst_57695);
var inst_57669 = inst_57696;
var inst_57670 = inst_57695;
var inst_57671 = inst_57697;
var inst_57672 = (0);
var state_57792__$1 = (function (){var statearr_57847 = state_57792;
(statearr_57847[(13)] = inst_57672);

(statearr_57847[(14)] = inst_57671);

(statearr_57847[(15)] = inst_57670);

(statearr_57847[(16)] = inst_57669);

return statearr_57847;
})();
var statearr_57848_57915 = state_57792__$1;
(statearr_57848_57915[(2)] = null);

(statearr_57848_57915[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57793 === (11))){
var inst_57669 = (state_57792[(16)]);
var inst_57691 = (state_57792[(7)]);
var inst_57691__$1 = cljs.core.seq.call(null,inst_57669);
var state_57792__$1 = (function (){var statearr_57849 = state_57792;
(statearr_57849[(7)] = inst_57691__$1);

return statearr_57849;
})();
if(inst_57691__$1){
var statearr_57850_57916 = state_57792__$1;
(statearr_57850_57916[(1)] = (16));

} else {
var statearr_57851_57917 = state_57792__$1;
(statearr_57851_57917[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57793 === (9))){
var inst_57721 = (state_57792[(2)]);
var state_57792__$1 = state_57792;
var statearr_57852_57918 = state_57792__$1;
(statearr_57852_57918[(2)] = inst_57721);

(statearr_57852_57918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57793 === (5))){
var inst_57667 = cljs.core.deref.call(null,cs);
var inst_57668 = cljs.core.seq.call(null,inst_57667);
var inst_57669 = inst_57668;
var inst_57670 = null;
var inst_57671 = (0);
var inst_57672 = (0);
var state_57792__$1 = (function (){var statearr_57853 = state_57792;
(statearr_57853[(13)] = inst_57672);

(statearr_57853[(14)] = inst_57671);

(statearr_57853[(15)] = inst_57670);

(statearr_57853[(16)] = inst_57669);

return statearr_57853;
})();
var statearr_57854_57919 = state_57792__$1;
(statearr_57854_57919[(2)] = null);

(statearr_57854_57919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57793 === (14))){
var state_57792__$1 = state_57792;
var statearr_57855_57920 = state_57792__$1;
(statearr_57855_57920[(2)] = null);

(statearr_57855_57920[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57793 === (45))){
var inst_57782 = (state_57792[(2)]);
var state_57792__$1 = state_57792;
var statearr_57856_57921 = state_57792__$1;
(statearr_57856_57921[(2)] = inst_57782);

(statearr_57856_57921[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57793 === (26))){
var inst_57724 = (state_57792[(29)]);
var inst_57778 = (state_57792[(2)]);
var inst_57779 = cljs.core.seq.call(null,inst_57724);
var state_57792__$1 = (function (){var statearr_57857 = state_57792;
(statearr_57857[(31)] = inst_57778);

return statearr_57857;
})();
if(inst_57779){
var statearr_57858_57922 = state_57792__$1;
(statearr_57858_57922[(1)] = (42));

} else {
var statearr_57859_57923 = state_57792__$1;
(statearr_57859_57923[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57793 === (16))){
var inst_57691 = (state_57792[(7)]);
var inst_57693 = cljs.core.chunked_seq_QMARK_.call(null,inst_57691);
var state_57792__$1 = state_57792;
if(inst_57693){
var statearr_57860_57924 = state_57792__$1;
(statearr_57860_57924[(1)] = (19));

} else {
var statearr_57861_57925 = state_57792__$1;
(statearr_57861_57925[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57793 === (38))){
var inst_57771 = (state_57792[(2)]);
var state_57792__$1 = state_57792;
var statearr_57862_57926 = state_57792__$1;
(statearr_57862_57926[(2)] = inst_57771);

(statearr_57862_57926[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57793 === (30))){
var state_57792__$1 = state_57792;
var statearr_57863_57927 = state_57792__$1;
(statearr_57863_57927[(2)] = null);

(statearr_57863_57927[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57793 === (10))){
var inst_57672 = (state_57792[(13)]);
var inst_57670 = (state_57792[(15)]);
var inst_57680 = cljs.core._nth.call(null,inst_57670,inst_57672);
var inst_57681 = cljs.core.nth.call(null,inst_57680,(0),null);
var inst_57682 = cljs.core.nth.call(null,inst_57680,(1),null);
var state_57792__$1 = (function (){var statearr_57864 = state_57792;
(statearr_57864[(26)] = inst_57681);

return statearr_57864;
})();
if(cljs.core.truth_(inst_57682)){
var statearr_57865_57928 = state_57792__$1;
(statearr_57865_57928[(1)] = (13));

} else {
var statearr_57866_57929 = state_57792__$1;
(statearr_57866_57929[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57793 === (18))){
var inst_57717 = (state_57792[(2)]);
var state_57792__$1 = state_57792;
var statearr_57867_57930 = state_57792__$1;
(statearr_57867_57930[(2)] = inst_57717);

(statearr_57867_57930[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57793 === (42))){
var state_57792__$1 = state_57792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57792__$1,(45),dchan);
} else {
if((state_val_57793 === (37))){
var inst_57751 = (state_57792[(25)]);
var inst_57760 = (state_57792[(23)]);
var inst_57660 = (state_57792[(12)]);
var inst_57760__$1 = cljs.core.first.call(null,inst_57751);
var inst_57761 = cljs.core.async.put_BANG_.call(null,inst_57760__$1,inst_57660,done);
var state_57792__$1 = (function (){var statearr_57868 = state_57792;
(statearr_57868[(23)] = inst_57760__$1);

return statearr_57868;
})();
if(cljs.core.truth_(inst_57761)){
var statearr_57869_57931 = state_57792__$1;
(statearr_57869_57931[(1)] = (39));

} else {
var statearr_57870_57932 = state_57792__$1;
(statearr_57870_57932[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57793 === (8))){
var inst_57672 = (state_57792[(13)]);
var inst_57671 = (state_57792[(14)]);
var inst_57674 = (inst_57672 < inst_57671);
var inst_57675 = inst_57674;
var state_57792__$1 = state_57792;
if(cljs.core.truth_(inst_57675)){
var statearr_57871_57933 = state_57792__$1;
(statearr_57871_57933[(1)] = (10));

} else {
var statearr_57872_57934 = state_57792__$1;
(statearr_57872_57934[(1)] = (11));

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
});})(c__39642__auto___57880,cs,m,dchan,dctr,done))
;
return ((function (switch__39530__auto__,c__39642__auto___57880,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__39531__auto__ = null;
var cljs$core$async$mult_$_state_machine__39531__auto____0 = (function (){
var statearr_57876 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57876[(0)] = cljs$core$async$mult_$_state_machine__39531__auto__);

(statearr_57876[(1)] = (1));

return statearr_57876;
});
var cljs$core$async$mult_$_state_machine__39531__auto____1 = (function (state_57792){
while(true){
var ret_value__39532__auto__ = (function (){try{while(true){
var result__39533__auto__ = switch__39530__auto__.call(null,state_57792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39533__auto__;
}
break;
}
}catch (e57877){if((e57877 instanceof Object)){
var ex__39534__auto__ = e57877;
var statearr_57878_57935 = state_57792;
(statearr_57878_57935[(5)] = ex__39534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57936 = state_57792;
state_57792 = G__57936;
continue;
} else {
return ret_value__39532__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__39531__auto__ = function(state_57792){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__39531__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__39531__auto____1.call(this,state_57792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__39531__auto____0;
cljs$core$async$mult_$_state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__39531__auto____1;
return cljs$core$async$mult_$_state_machine__39531__auto__;
})()
;})(switch__39530__auto__,c__39642__auto___57880,cs,m,dchan,dctr,done))
})();
var state__39644__auto__ = (function (){var statearr_57879 = f__39643__auto__.call(null);
(statearr_57879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39642__auto___57880);

return statearr_57879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39644__auto__);
});})(c__39642__auto___57880,cs,m,dchan,dctr,done))
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
var args57937 = [];
var len__34447__auto___57940 = arguments.length;
var i__34448__auto___57941 = (0);
while(true){
if((i__34448__auto___57941 < len__34447__auto___57940)){
args57937.push((arguments[i__34448__auto___57941]));

var G__57942 = (i__34448__auto___57941 + (1));
i__34448__auto___57941 = G__57942;
continue;
} else {
}
break;
}

var G__57939 = args57937.length;
switch (G__57939) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args57937.length)].join('')));

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
var x__34002__auto__ = (((m == null))?null:m);
var m__34003__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__34002__auto__)]);
if(!((m__34003__auto__ == null))){
return m__34003__auto__.call(null,m,ch);
} else {
var m__34003__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__34003__auto____$1 == null))){
return m__34003__auto____$1.call(null,m,ch);
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
var x__34002__auto__ = (((m == null))?null:m);
var m__34003__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__34002__auto__)]);
if(!((m__34003__auto__ == null))){
return m__34003__auto__.call(null,m,ch);
} else {
var m__34003__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__34003__auto____$1 == null))){
return m__34003__auto____$1.call(null,m,ch);
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
var x__34002__auto__ = (((m == null))?null:m);
var m__34003__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__34002__auto__)]);
if(!((m__34003__auto__ == null))){
return m__34003__auto__.call(null,m);
} else {
var m__34003__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__34003__auto____$1 == null))){
return m__34003__auto____$1.call(null,m);
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
var x__34002__auto__ = (((m == null))?null:m);
var m__34003__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__34002__auto__)]);
if(!((m__34003__auto__ == null))){
return m__34003__auto__.call(null,m,state_map);
} else {
var m__34003__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__34003__auto____$1 == null))){
return m__34003__auto____$1.call(null,m,state_map);
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
var x__34002__auto__ = (((m == null))?null:m);
var m__34003__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__34002__auto__)]);
if(!((m__34003__auto__ == null))){
return m__34003__auto__.call(null,m,mode);
} else {
var m__34003__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__34003__auto____$1 == null))){
return m__34003__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__34454__auto__ = [];
var len__34447__auto___57954 = arguments.length;
var i__34448__auto___57955 = (0);
while(true){
if((i__34448__auto___57955 < len__34447__auto___57954)){
args__34454__auto__.push((arguments[i__34448__auto___57955]));

var G__57956 = (i__34448__auto___57955 + (1));
i__34448__auto___57955 = G__57956;
continue;
} else {
}
break;
}

var argseq__34455__auto__ = ((((3) < args__34454__auto__.length))?(new cljs.core.IndexedSeq(args__34454__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__34455__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__57948){
var map__57949 = p__57948;
var map__57949__$1 = ((((!((map__57949 == null)))?((((map__57949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57949.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57949):map__57949);
var opts = map__57949__$1;
var statearr_57951_57957 = state;
(statearr_57951_57957[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__57949,map__57949__$1,opts){
return (function (val){
var statearr_57952_57958 = state;
(statearr_57952_57958[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__57949,map__57949__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_57953_57959 = state;
(statearr_57953_57959[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq57944){
var G__57945 = cljs.core.first.call(null,seq57944);
var seq57944__$1 = cljs.core.next.call(null,seq57944);
var G__57946 = cljs.core.first.call(null,seq57944__$1);
var seq57944__$2 = cljs.core.next.call(null,seq57944__$1);
var G__57947 = cljs.core.first.call(null,seq57944__$2);
var seq57944__$3 = cljs.core.next.call(null,seq57944__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__57945,G__57946,G__57947,seq57944__$3);
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
if(typeof cljs.core.async.t_cljs$core$async58127 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58127 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta58128){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta58128 = meta58128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async58127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_58129,meta58128__$1){
var self__ = this;
var _58129__$1 = this;
return (new cljs.core.async.t_cljs$core$async58127(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta58128__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async58127.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_58129){
var self__ = this;
var _58129__$1 = this;
return self__.meta58128;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async58127.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58127.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async58127.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58127.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async58127.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async58127.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async58127.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async58127.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async58127.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta58128","meta58128",1037942355,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async58127.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58127.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58127";

cljs.core.async.t_cljs$core$async58127.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__33945__auto__,writer__33946__auto__,opt__33947__auto__){
return cljs.core._write.call(null,writer__33946__auto__,"cljs.core.async/t_cljs$core$async58127");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async58127 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async58127(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta58128){
return (new cljs.core.async.t_cljs$core$async58127(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta58128));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async58127(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__39642__auto___58294 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39642__auto___58294,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__39643__auto__ = (function (){var switch__39530__auto__ = ((function (c__39642__auto___58294,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_58231){
var state_val_58232 = (state_58231[(1)]);
if((state_val_58232 === (7))){
var inst_58146 = (state_58231[(2)]);
var state_58231__$1 = state_58231;
var statearr_58233_58295 = state_58231__$1;
(statearr_58233_58295[(2)] = inst_58146);

(statearr_58233_58295[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58232 === (20))){
var inst_58158 = (state_58231[(7)]);
var state_58231__$1 = state_58231;
var statearr_58234_58296 = state_58231__$1;
(statearr_58234_58296[(2)] = inst_58158);

(statearr_58234_58296[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58232 === (27))){
var state_58231__$1 = state_58231;
var statearr_58235_58297 = state_58231__$1;
(statearr_58235_58297[(2)] = null);

(statearr_58235_58297[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58232 === (1))){
var inst_58133 = (state_58231[(8)]);
var inst_58133__$1 = calc_state.call(null);
var inst_58135 = (inst_58133__$1 == null);
var inst_58136 = cljs.core.not.call(null,inst_58135);
var state_58231__$1 = (function (){var statearr_58236 = state_58231;
(statearr_58236[(8)] = inst_58133__$1);

return statearr_58236;
})();
if(inst_58136){
var statearr_58237_58298 = state_58231__$1;
(statearr_58237_58298[(1)] = (2));

} else {
var statearr_58238_58299 = state_58231__$1;
(statearr_58238_58299[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58232 === (24))){
var inst_58191 = (state_58231[(9)]);
var inst_58182 = (state_58231[(10)]);
var inst_58205 = (state_58231[(11)]);
var inst_58205__$1 = inst_58182.call(null,inst_58191);
var state_58231__$1 = (function (){var statearr_58239 = state_58231;
(statearr_58239[(11)] = inst_58205__$1);

return statearr_58239;
})();
if(cljs.core.truth_(inst_58205__$1)){
var statearr_58240_58300 = state_58231__$1;
(statearr_58240_58300[(1)] = (29));

} else {
var statearr_58241_58301 = state_58231__$1;
(statearr_58241_58301[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58232 === (4))){
var inst_58149 = (state_58231[(2)]);
var state_58231__$1 = state_58231;
if(cljs.core.truth_(inst_58149)){
var statearr_58242_58302 = state_58231__$1;
(statearr_58242_58302[(1)] = (8));

} else {
var statearr_58243_58303 = state_58231__$1;
(statearr_58243_58303[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58232 === (15))){
var inst_58176 = (state_58231[(2)]);
var state_58231__$1 = state_58231;
if(cljs.core.truth_(inst_58176)){
var statearr_58244_58304 = state_58231__$1;
(statearr_58244_58304[(1)] = (19));

} else {
var statearr_58245_58305 = state_58231__$1;
(statearr_58245_58305[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58232 === (21))){
var inst_58181 = (state_58231[(12)]);
var inst_58181__$1 = (state_58231[(2)]);
var inst_58182 = cljs.core.get.call(null,inst_58181__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_58183 = cljs.core.get.call(null,inst_58181__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_58184 = cljs.core.get.call(null,inst_58181__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_58231__$1 = (function (){var statearr_58246 = state_58231;
(statearr_58246[(12)] = inst_58181__$1);

(statearr_58246[(10)] = inst_58182);

(statearr_58246[(13)] = inst_58183);

return statearr_58246;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_58231__$1,(22),inst_58184);
} else {
if((state_val_58232 === (31))){
var inst_58213 = (state_58231[(2)]);
var state_58231__$1 = state_58231;
if(cljs.core.truth_(inst_58213)){
var statearr_58247_58306 = state_58231__$1;
(statearr_58247_58306[(1)] = (32));

} else {
var statearr_58248_58307 = state_58231__$1;
(statearr_58248_58307[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58232 === (32))){
var inst_58190 = (state_58231[(14)]);
var state_58231__$1 = state_58231;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58231__$1,(35),out,inst_58190);
} else {
if((state_val_58232 === (33))){
var inst_58181 = (state_58231[(12)]);
var inst_58158 = inst_58181;
var state_58231__$1 = (function (){var statearr_58249 = state_58231;
(statearr_58249[(7)] = inst_58158);

return statearr_58249;
})();
var statearr_58250_58308 = state_58231__$1;
(statearr_58250_58308[(2)] = null);

(statearr_58250_58308[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58232 === (13))){
var inst_58158 = (state_58231[(7)]);
var inst_58165 = inst_58158.cljs$lang$protocol_mask$partition0$;
var inst_58166 = (inst_58165 & (64));
var inst_58167 = inst_58158.cljs$core$ISeq$;
var inst_58168 = (cljs.core.PROTOCOL_SENTINEL === inst_58167);
var inst_58169 = (inst_58166) || (inst_58168);
var state_58231__$1 = state_58231;
if(cljs.core.truth_(inst_58169)){
var statearr_58251_58309 = state_58231__$1;
(statearr_58251_58309[(1)] = (16));

} else {
var statearr_58252_58310 = state_58231__$1;
(statearr_58252_58310[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58232 === (22))){
var inst_58191 = (state_58231[(9)]);
var inst_58190 = (state_58231[(14)]);
var inst_58189 = (state_58231[(2)]);
var inst_58190__$1 = cljs.core.nth.call(null,inst_58189,(0),null);
var inst_58191__$1 = cljs.core.nth.call(null,inst_58189,(1),null);
var inst_58192 = (inst_58190__$1 == null);
var inst_58193 = cljs.core._EQ_.call(null,inst_58191__$1,change);
var inst_58194 = (inst_58192) || (inst_58193);
var state_58231__$1 = (function (){var statearr_58253 = state_58231;
(statearr_58253[(9)] = inst_58191__$1);

(statearr_58253[(14)] = inst_58190__$1);

return statearr_58253;
})();
if(cljs.core.truth_(inst_58194)){
var statearr_58254_58311 = state_58231__$1;
(statearr_58254_58311[(1)] = (23));

} else {
var statearr_58255_58312 = state_58231__$1;
(statearr_58255_58312[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58232 === (36))){
var inst_58181 = (state_58231[(12)]);
var inst_58158 = inst_58181;
var state_58231__$1 = (function (){var statearr_58256 = state_58231;
(statearr_58256[(7)] = inst_58158);

return statearr_58256;
})();
var statearr_58257_58313 = state_58231__$1;
(statearr_58257_58313[(2)] = null);

(statearr_58257_58313[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58232 === (29))){
var inst_58205 = (state_58231[(11)]);
var state_58231__$1 = state_58231;
var statearr_58258_58314 = state_58231__$1;
(statearr_58258_58314[(2)] = inst_58205);

(statearr_58258_58314[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58232 === (6))){
var state_58231__$1 = state_58231;
var statearr_58259_58315 = state_58231__$1;
(statearr_58259_58315[(2)] = false);

(statearr_58259_58315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58232 === (28))){
var inst_58201 = (state_58231[(2)]);
var inst_58202 = calc_state.call(null);
var inst_58158 = inst_58202;
var state_58231__$1 = (function (){var statearr_58260 = state_58231;
(statearr_58260[(15)] = inst_58201);

(statearr_58260[(7)] = inst_58158);

return statearr_58260;
})();
var statearr_58261_58316 = state_58231__$1;
(statearr_58261_58316[(2)] = null);

(statearr_58261_58316[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58232 === (25))){
var inst_58227 = (state_58231[(2)]);
var state_58231__$1 = state_58231;
var statearr_58262_58317 = state_58231__$1;
(statearr_58262_58317[(2)] = inst_58227);

(statearr_58262_58317[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58232 === (34))){
var inst_58225 = (state_58231[(2)]);
var state_58231__$1 = state_58231;
var statearr_58263_58318 = state_58231__$1;
(statearr_58263_58318[(2)] = inst_58225);

(statearr_58263_58318[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58232 === (17))){
var state_58231__$1 = state_58231;
var statearr_58264_58319 = state_58231__$1;
(statearr_58264_58319[(2)] = false);

(statearr_58264_58319[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58232 === (3))){
var state_58231__$1 = state_58231;
var statearr_58265_58320 = state_58231__$1;
(statearr_58265_58320[(2)] = false);

(statearr_58265_58320[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58232 === (12))){
var inst_58229 = (state_58231[(2)]);
var state_58231__$1 = state_58231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58231__$1,inst_58229);
} else {
if((state_val_58232 === (2))){
var inst_58133 = (state_58231[(8)]);
var inst_58138 = inst_58133.cljs$lang$protocol_mask$partition0$;
var inst_58139 = (inst_58138 & (64));
var inst_58140 = inst_58133.cljs$core$ISeq$;
var inst_58141 = (cljs.core.PROTOCOL_SENTINEL === inst_58140);
var inst_58142 = (inst_58139) || (inst_58141);
var state_58231__$1 = state_58231;
if(cljs.core.truth_(inst_58142)){
var statearr_58266_58321 = state_58231__$1;
(statearr_58266_58321[(1)] = (5));

} else {
var statearr_58267_58322 = state_58231__$1;
(statearr_58267_58322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58232 === (23))){
var inst_58190 = (state_58231[(14)]);
var inst_58196 = (inst_58190 == null);
var state_58231__$1 = state_58231;
if(cljs.core.truth_(inst_58196)){
var statearr_58268_58323 = state_58231__$1;
(statearr_58268_58323[(1)] = (26));

} else {
var statearr_58269_58324 = state_58231__$1;
(statearr_58269_58324[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58232 === (35))){
var inst_58216 = (state_58231[(2)]);
var state_58231__$1 = state_58231;
if(cljs.core.truth_(inst_58216)){
var statearr_58270_58325 = state_58231__$1;
(statearr_58270_58325[(1)] = (36));

} else {
var statearr_58271_58326 = state_58231__$1;
(statearr_58271_58326[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58232 === (19))){
var inst_58158 = (state_58231[(7)]);
var inst_58178 = cljs.core.apply.call(null,cljs.core.hash_map,inst_58158);
var state_58231__$1 = state_58231;
var statearr_58272_58327 = state_58231__$1;
(statearr_58272_58327[(2)] = inst_58178);

(statearr_58272_58327[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58232 === (11))){
var inst_58158 = (state_58231[(7)]);
var inst_58162 = (inst_58158 == null);
var inst_58163 = cljs.core.not.call(null,inst_58162);
var state_58231__$1 = state_58231;
if(inst_58163){
var statearr_58273_58328 = state_58231__$1;
(statearr_58273_58328[(1)] = (13));

} else {
var statearr_58274_58329 = state_58231__$1;
(statearr_58274_58329[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58232 === (9))){
var inst_58133 = (state_58231[(8)]);
var state_58231__$1 = state_58231;
var statearr_58275_58330 = state_58231__$1;
(statearr_58275_58330[(2)] = inst_58133);

(statearr_58275_58330[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58232 === (5))){
var state_58231__$1 = state_58231;
var statearr_58276_58331 = state_58231__$1;
(statearr_58276_58331[(2)] = true);

(statearr_58276_58331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58232 === (14))){
var state_58231__$1 = state_58231;
var statearr_58277_58332 = state_58231__$1;
(statearr_58277_58332[(2)] = false);

(statearr_58277_58332[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58232 === (26))){
var inst_58191 = (state_58231[(9)]);
var inst_58198 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_58191);
var state_58231__$1 = state_58231;
var statearr_58278_58333 = state_58231__$1;
(statearr_58278_58333[(2)] = inst_58198);

(statearr_58278_58333[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58232 === (16))){
var state_58231__$1 = state_58231;
var statearr_58279_58334 = state_58231__$1;
(statearr_58279_58334[(2)] = true);

(statearr_58279_58334[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58232 === (38))){
var inst_58221 = (state_58231[(2)]);
var state_58231__$1 = state_58231;
var statearr_58280_58335 = state_58231__$1;
(statearr_58280_58335[(2)] = inst_58221);

(statearr_58280_58335[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58232 === (30))){
var inst_58191 = (state_58231[(9)]);
var inst_58182 = (state_58231[(10)]);
var inst_58183 = (state_58231[(13)]);
var inst_58208 = cljs.core.empty_QMARK_.call(null,inst_58182);
var inst_58209 = inst_58183.call(null,inst_58191);
var inst_58210 = cljs.core.not.call(null,inst_58209);
var inst_58211 = (inst_58208) && (inst_58210);
var state_58231__$1 = state_58231;
var statearr_58281_58336 = state_58231__$1;
(statearr_58281_58336[(2)] = inst_58211);

(statearr_58281_58336[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58232 === (10))){
var inst_58133 = (state_58231[(8)]);
var inst_58154 = (state_58231[(2)]);
var inst_58155 = cljs.core.get.call(null,inst_58154,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_58156 = cljs.core.get.call(null,inst_58154,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_58157 = cljs.core.get.call(null,inst_58154,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_58158 = inst_58133;
var state_58231__$1 = (function (){var statearr_58282 = state_58231;
(statearr_58282[(16)] = inst_58157);

(statearr_58282[(7)] = inst_58158);

(statearr_58282[(17)] = inst_58156);

(statearr_58282[(18)] = inst_58155);

return statearr_58282;
})();
var statearr_58283_58337 = state_58231__$1;
(statearr_58283_58337[(2)] = null);

(statearr_58283_58337[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58232 === (18))){
var inst_58173 = (state_58231[(2)]);
var state_58231__$1 = state_58231;
var statearr_58284_58338 = state_58231__$1;
(statearr_58284_58338[(2)] = inst_58173);

(statearr_58284_58338[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58232 === (37))){
var state_58231__$1 = state_58231;
var statearr_58285_58339 = state_58231__$1;
(statearr_58285_58339[(2)] = null);

(statearr_58285_58339[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58232 === (8))){
var inst_58133 = (state_58231[(8)]);
var inst_58151 = cljs.core.apply.call(null,cljs.core.hash_map,inst_58133);
var state_58231__$1 = state_58231;
var statearr_58286_58340 = state_58231__$1;
(statearr_58286_58340[(2)] = inst_58151);

(statearr_58286_58340[(1)] = (10));


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
});})(c__39642__auto___58294,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__39530__auto__,c__39642__auto___58294,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__39531__auto__ = null;
var cljs$core$async$mix_$_state_machine__39531__auto____0 = (function (){
var statearr_58290 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58290[(0)] = cljs$core$async$mix_$_state_machine__39531__auto__);

(statearr_58290[(1)] = (1));

return statearr_58290;
});
var cljs$core$async$mix_$_state_machine__39531__auto____1 = (function (state_58231){
while(true){
var ret_value__39532__auto__ = (function (){try{while(true){
var result__39533__auto__ = switch__39530__auto__.call(null,state_58231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39533__auto__;
}
break;
}
}catch (e58291){if((e58291 instanceof Object)){
var ex__39534__auto__ = e58291;
var statearr_58292_58341 = state_58231;
(statearr_58292_58341[(5)] = ex__39534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58342 = state_58231;
state_58231 = G__58342;
continue;
} else {
return ret_value__39532__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__39531__auto__ = function(state_58231){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__39531__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__39531__auto____1.call(this,state_58231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__39531__auto____0;
cljs$core$async$mix_$_state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__39531__auto____1;
return cljs$core$async$mix_$_state_machine__39531__auto__;
})()
;})(switch__39530__auto__,c__39642__auto___58294,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__39644__auto__ = (function (){var statearr_58293 = f__39643__auto__.call(null);
(statearr_58293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39642__auto___58294);

return statearr_58293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39644__auto__);
});})(c__39642__auto___58294,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__34002__auto__ = (((p == null))?null:p);
var m__34003__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__34002__auto__)]);
if(!((m__34003__auto__ == null))){
return m__34003__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__34003__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__34003__auto____$1 == null))){
return m__34003__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__34002__auto__ = (((p == null))?null:p);
var m__34003__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__34002__auto__)]);
if(!((m__34003__auto__ == null))){
return m__34003__auto__.call(null,p,v,ch);
} else {
var m__34003__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__34003__auto____$1 == null))){
return m__34003__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args58343 = [];
var len__34447__auto___58346 = arguments.length;
var i__34448__auto___58347 = (0);
while(true){
if((i__34448__auto___58347 < len__34447__auto___58346)){
args58343.push((arguments[i__34448__auto___58347]));

var G__58348 = (i__34448__auto___58347 + (1));
i__34448__auto___58347 = G__58348;
continue;
} else {
}
break;
}

var G__58345 = args58343.length;
switch (G__58345) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args58343.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__34002__auto__ = (((p == null))?null:p);
var m__34003__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__34002__auto__)]);
if(!((m__34003__auto__ == null))){
return m__34003__auto__.call(null,p);
} else {
var m__34003__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__34003__auto____$1 == null))){
return m__34003__auto____$1.call(null,p);
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
var x__34002__auto__ = (((p == null))?null:p);
var m__34003__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__34002__auto__)]);
if(!((m__34003__auto__ == null))){
return m__34003__auto__.call(null,p,v);
} else {
var m__34003__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__34003__auto____$1 == null))){
return m__34003__auto____$1.call(null,p,v);
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
var args58351 = [];
var len__34447__auto___58476 = arguments.length;
var i__34448__auto___58477 = (0);
while(true){
if((i__34448__auto___58477 < len__34447__auto___58476)){
args58351.push((arguments[i__34448__auto___58477]));

var G__58478 = (i__34448__auto___58477 + (1));
i__34448__auto___58477 = G__58478;
continue;
} else {
}
break;
}

var G__58353 = args58351.length;
switch (G__58353) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args58351.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__33334__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__33334__auto__)){
return or__33334__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__33334__auto__,mults){
return (function (p1__58350_SHARP_){
if(cljs.core.truth_(p1__58350_SHARP_.call(null,topic))){
return p1__58350_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__58350_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__33334__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async58354 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58354 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta58355){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta58355 = meta58355;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async58354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_58356,meta58355__$1){
var self__ = this;
var _58356__$1 = this;
return (new cljs.core.async.t_cljs$core$async58354(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta58355__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async58354.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_58356){
var self__ = this;
var _58356__$1 = this;
return self__.meta58355;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async58354.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58354.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async58354.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58354.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async58354.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async58354.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async58354.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async58354.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta58355","meta58355",-151014457,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async58354.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58354.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58354";

cljs.core.async.t_cljs$core$async58354.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__33945__auto__,writer__33946__auto__,opt__33947__auto__){
return cljs.core._write.call(null,writer__33946__auto__,"cljs.core.async/t_cljs$core$async58354");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async58354 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async58354(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta58355){
return (new cljs.core.async.t_cljs$core$async58354(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta58355));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async58354(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__39642__auto___58480 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39642__auto___58480,mults,ensure_mult,p){
return (function (){
var f__39643__auto__ = (function (){var switch__39530__auto__ = ((function (c__39642__auto___58480,mults,ensure_mult,p){
return (function (state_58428){
var state_val_58429 = (state_58428[(1)]);
if((state_val_58429 === (7))){
var inst_58424 = (state_58428[(2)]);
var state_58428__$1 = state_58428;
var statearr_58430_58481 = state_58428__$1;
(statearr_58430_58481[(2)] = inst_58424);

(statearr_58430_58481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58429 === (20))){
var state_58428__$1 = state_58428;
var statearr_58431_58482 = state_58428__$1;
(statearr_58431_58482[(2)] = null);

(statearr_58431_58482[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58429 === (1))){
var state_58428__$1 = state_58428;
var statearr_58432_58483 = state_58428__$1;
(statearr_58432_58483[(2)] = null);

(statearr_58432_58483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58429 === (24))){
var inst_58407 = (state_58428[(7)]);
var inst_58416 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_58407);
var state_58428__$1 = state_58428;
var statearr_58433_58484 = state_58428__$1;
(statearr_58433_58484[(2)] = inst_58416);

(statearr_58433_58484[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58429 === (4))){
var inst_58359 = (state_58428[(8)]);
var inst_58359__$1 = (state_58428[(2)]);
var inst_58360 = (inst_58359__$1 == null);
var state_58428__$1 = (function (){var statearr_58434 = state_58428;
(statearr_58434[(8)] = inst_58359__$1);

return statearr_58434;
})();
if(cljs.core.truth_(inst_58360)){
var statearr_58435_58485 = state_58428__$1;
(statearr_58435_58485[(1)] = (5));

} else {
var statearr_58436_58486 = state_58428__$1;
(statearr_58436_58486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58429 === (15))){
var inst_58401 = (state_58428[(2)]);
var state_58428__$1 = state_58428;
var statearr_58437_58487 = state_58428__$1;
(statearr_58437_58487[(2)] = inst_58401);

(statearr_58437_58487[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58429 === (21))){
var inst_58421 = (state_58428[(2)]);
var state_58428__$1 = (function (){var statearr_58438 = state_58428;
(statearr_58438[(9)] = inst_58421);

return statearr_58438;
})();
var statearr_58439_58488 = state_58428__$1;
(statearr_58439_58488[(2)] = null);

(statearr_58439_58488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58429 === (13))){
var inst_58383 = (state_58428[(10)]);
var inst_58385 = cljs.core.chunked_seq_QMARK_.call(null,inst_58383);
var state_58428__$1 = state_58428;
if(inst_58385){
var statearr_58440_58489 = state_58428__$1;
(statearr_58440_58489[(1)] = (16));

} else {
var statearr_58441_58490 = state_58428__$1;
(statearr_58441_58490[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58429 === (22))){
var inst_58413 = (state_58428[(2)]);
var state_58428__$1 = state_58428;
if(cljs.core.truth_(inst_58413)){
var statearr_58442_58491 = state_58428__$1;
(statearr_58442_58491[(1)] = (23));

} else {
var statearr_58443_58492 = state_58428__$1;
(statearr_58443_58492[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58429 === (6))){
var inst_58359 = (state_58428[(8)]);
var inst_58407 = (state_58428[(7)]);
var inst_58409 = (state_58428[(11)]);
var inst_58407__$1 = topic_fn.call(null,inst_58359);
var inst_58408 = cljs.core.deref.call(null,mults);
var inst_58409__$1 = cljs.core.get.call(null,inst_58408,inst_58407__$1);
var state_58428__$1 = (function (){var statearr_58444 = state_58428;
(statearr_58444[(7)] = inst_58407__$1);

(statearr_58444[(11)] = inst_58409__$1);

return statearr_58444;
})();
if(cljs.core.truth_(inst_58409__$1)){
var statearr_58445_58493 = state_58428__$1;
(statearr_58445_58493[(1)] = (19));

} else {
var statearr_58446_58494 = state_58428__$1;
(statearr_58446_58494[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58429 === (25))){
var inst_58418 = (state_58428[(2)]);
var state_58428__$1 = state_58428;
var statearr_58447_58495 = state_58428__$1;
(statearr_58447_58495[(2)] = inst_58418);

(statearr_58447_58495[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58429 === (17))){
var inst_58383 = (state_58428[(10)]);
var inst_58392 = cljs.core.first.call(null,inst_58383);
var inst_58393 = cljs.core.async.muxch_STAR_.call(null,inst_58392);
var inst_58394 = cljs.core.async.close_BANG_.call(null,inst_58393);
var inst_58395 = cljs.core.next.call(null,inst_58383);
var inst_58369 = inst_58395;
var inst_58370 = null;
var inst_58371 = (0);
var inst_58372 = (0);
var state_58428__$1 = (function (){var statearr_58448 = state_58428;
(statearr_58448[(12)] = inst_58394);

(statearr_58448[(13)] = inst_58369);

(statearr_58448[(14)] = inst_58372);

(statearr_58448[(15)] = inst_58371);

(statearr_58448[(16)] = inst_58370);

return statearr_58448;
})();
var statearr_58449_58496 = state_58428__$1;
(statearr_58449_58496[(2)] = null);

(statearr_58449_58496[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58429 === (3))){
var inst_58426 = (state_58428[(2)]);
var state_58428__$1 = state_58428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58428__$1,inst_58426);
} else {
if((state_val_58429 === (12))){
var inst_58403 = (state_58428[(2)]);
var state_58428__$1 = state_58428;
var statearr_58450_58497 = state_58428__$1;
(statearr_58450_58497[(2)] = inst_58403);

(statearr_58450_58497[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58429 === (2))){
var state_58428__$1 = state_58428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58428__$1,(4),ch);
} else {
if((state_val_58429 === (23))){
var state_58428__$1 = state_58428;
var statearr_58451_58498 = state_58428__$1;
(statearr_58451_58498[(2)] = null);

(statearr_58451_58498[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58429 === (19))){
var inst_58359 = (state_58428[(8)]);
var inst_58409 = (state_58428[(11)]);
var inst_58411 = cljs.core.async.muxch_STAR_.call(null,inst_58409);
var state_58428__$1 = state_58428;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58428__$1,(22),inst_58411,inst_58359);
} else {
if((state_val_58429 === (11))){
var inst_58369 = (state_58428[(13)]);
var inst_58383 = (state_58428[(10)]);
var inst_58383__$1 = cljs.core.seq.call(null,inst_58369);
var state_58428__$1 = (function (){var statearr_58452 = state_58428;
(statearr_58452[(10)] = inst_58383__$1);

return statearr_58452;
})();
if(inst_58383__$1){
var statearr_58453_58499 = state_58428__$1;
(statearr_58453_58499[(1)] = (13));

} else {
var statearr_58454_58500 = state_58428__$1;
(statearr_58454_58500[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58429 === (9))){
var inst_58405 = (state_58428[(2)]);
var state_58428__$1 = state_58428;
var statearr_58455_58501 = state_58428__$1;
(statearr_58455_58501[(2)] = inst_58405);

(statearr_58455_58501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58429 === (5))){
var inst_58366 = cljs.core.deref.call(null,mults);
var inst_58367 = cljs.core.vals.call(null,inst_58366);
var inst_58368 = cljs.core.seq.call(null,inst_58367);
var inst_58369 = inst_58368;
var inst_58370 = null;
var inst_58371 = (0);
var inst_58372 = (0);
var state_58428__$1 = (function (){var statearr_58456 = state_58428;
(statearr_58456[(13)] = inst_58369);

(statearr_58456[(14)] = inst_58372);

(statearr_58456[(15)] = inst_58371);

(statearr_58456[(16)] = inst_58370);

return statearr_58456;
})();
var statearr_58457_58502 = state_58428__$1;
(statearr_58457_58502[(2)] = null);

(statearr_58457_58502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58429 === (14))){
var state_58428__$1 = state_58428;
var statearr_58461_58503 = state_58428__$1;
(statearr_58461_58503[(2)] = null);

(statearr_58461_58503[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58429 === (16))){
var inst_58383 = (state_58428[(10)]);
var inst_58387 = cljs.core.chunk_first.call(null,inst_58383);
var inst_58388 = cljs.core.chunk_rest.call(null,inst_58383);
var inst_58389 = cljs.core.count.call(null,inst_58387);
var inst_58369 = inst_58388;
var inst_58370 = inst_58387;
var inst_58371 = inst_58389;
var inst_58372 = (0);
var state_58428__$1 = (function (){var statearr_58462 = state_58428;
(statearr_58462[(13)] = inst_58369);

(statearr_58462[(14)] = inst_58372);

(statearr_58462[(15)] = inst_58371);

(statearr_58462[(16)] = inst_58370);

return statearr_58462;
})();
var statearr_58463_58504 = state_58428__$1;
(statearr_58463_58504[(2)] = null);

(statearr_58463_58504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58429 === (10))){
var inst_58369 = (state_58428[(13)]);
var inst_58372 = (state_58428[(14)]);
var inst_58371 = (state_58428[(15)]);
var inst_58370 = (state_58428[(16)]);
var inst_58377 = cljs.core._nth.call(null,inst_58370,inst_58372);
var inst_58378 = cljs.core.async.muxch_STAR_.call(null,inst_58377);
var inst_58379 = cljs.core.async.close_BANG_.call(null,inst_58378);
var inst_58380 = (inst_58372 + (1));
var tmp58458 = inst_58369;
var tmp58459 = inst_58371;
var tmp58460 = inst_58370;
var inst_58369__$1 = tmp58458;
var inst_58370__$1 = tmp58460;
var inst_58371__$1 = tmp58459;
var inst_58372__$1 = inst_58380;
var state_58428__$1 = (function (){var statearr_58464 = state_58428;
(statearr_58464[(13)] = inst_58369__$1);

(statearr_58464[(14)] = inst_58372__$1);

(statearr_58464[(15)] = inst_58371__$1);

(statearr_58464[(17)] = inst_58379);

(statearr_58464[(16)] = inst_58370__$1);

return statearr_58464;
})();
var statearr_58465_58505 = state_58428__$1;
(statearr_58465_58505[(2)] = null);

(statearr_58465_58505[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58429 === (18))){
var inst_58398 = (state_58428[(2)]);
var state_58428__$1 = state_58428;
var statearr_58466_58506 = state_58428__$1;
(statearr_58466_58506[(2)] = inst_58398);

(statearr_58466_58506[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58429 === (8))){
var inst_58372 = (state_58428[(14)]);
var inst_58371 = (state_58428[(15)]);
var inst_58374 = (inst_58372 < inst_58371);
var inst_58375 = inst_58374;
var state_58428__$1 = state_58428;
if(cljs.core.truth_(inst_58375)){
var statearr_58467_58507 = state_58428__$1;
(statearr_58467_58507[(1)] = (10));

} else {
var statearr_58468_58508 = state_58428__$1;
(statearr_58468_58508[(1)] = (11));

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
});})(c__39642__auto___58480,mults,ensure_mult,p))
;
return ((function (switch__39530__auto__,c__39642__auto___58480,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__39531__auto__ = null;
var cljs$core$async$state_machine__39531__auto____0 = (function (){
var statearr_58472 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58472[(0)] = cljs$core$async$state_machine__39531__auto__);

(statearr_58472[(1)] = (1));

return statearr_58472;
});
var cljs$core$async$state_machine__39531__auto____1 = (function (state_58428){
while(true){
var ret_value__39532__auto__ = (function (){try{while(true){
var result__39533__auto__ = switch__39530__auto__.call(null,state_58428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39533__auto__;
}
break;
}
}catch (e58473){if((e58473 instanceof Object)){
var ex__39534__auto__ = e58473;
var statearr_58474_58509 = state_58428;
(statearr_58474_58509[(5)] = ex__39534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58510 = state_58428;
state_58428 = G__58510;
continue;
} else {
return ret_value__39532__auto__;
}
break;
}
});
cljs$core$async$state_machine__39531__auto__ = function(state_58428){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39531__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39531__auto____1.call(this,state_58428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39531__auto____0;
cljs$core$async$state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39531__auto____1;
return cljs$core$async$state_machine__39531__auto__;
})()
;})(switch__39530__auto__,c__39642__auto___58480,mults,ensure_mult,p))
})();
var state__39644__auto__ = (function (){var statearr_58475 = f__39643__auto__.call(null);
(statearr_58475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39642__auto___58480);

return statearr_58475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39644__auto__);
});})(c__39642__auto___58480,mults,ensure_mult,p))
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
var args58511 = [];
var len__34447__auto___58514 = arguments.length;
var i__34448__auto___58515 = (0);
while(true){
if((i__34448__auto___58515 < len__34447__auto___58514)){
args58511.push((arguments[i__34448__auto___58515]));

var G__58516 = (i__34448__auto___58515 + (1));
i__34448__auto___58515 = G__58516;
continue;
} else {
}
break;
}

var G__58513 = args58511.length;
switch (G__58513) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args58511.length)].join('')));

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
var args58518 = [];
var len__34447__auto___58521 = arguments.length;
var i__34448__auto___58522 = (0);
while(true){
if((i__34448__auto___58522 < len__34447__auto___58521)){
args58518.push((arguments[i__34448__auto___58522]));

var G__58523 = (i__34448__auto___58522 + (1));
i__34448__auto___58522 = G__58523;
continue;
} else {
}
break;
}

var G__58520 = args58518.length;
switch (G__58520) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args58518.length)].join('')));

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
var args58525 = [];
var len__34447__auto___58596 = arguments.length;
var i__34448__auto___58597 = (0);
while(true){
if((i__34448__auto___58597 < len__34447__auto___58596)){
args58525.push((arguments[i__34448__auto___58597]));

var G__58598 = (i__34448__auto___58597 + (1));
i__34448__auto___58597 = G__58598;
continue;
} else {
}
break;
}

var G__58527 = args58525.length;
switch (G__58527) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args58525.length)].join('')));

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
var c__39642__auto___58600 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39642__auto___58600,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__39643__auto__ = (function (){var switch__39530__auto__ = ((function (c__39642__auto___58600,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_58566){
var state_val_58567 = (state_58566[(1)]);
if((state_val_58567 === (7))){
var state_58566__$1 = state_58566;
var statearr_58568_58601 = state_58566__$1;
(statearr_58568_58601[(2)] = null);

(statearr_58568_58601[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58567 === (1))){
var state_58566__$1 = state_58566;
var statearr_58569_58602 = state_58566__$1;
(statearr_58569_58602[(2)] = null);

(statearr_58569_58602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58567 === (4))){
var inst_58530 = (state_58566[(7)]);
var inst_58532 = (inst_58530 < cnt);
var state_58566__$1 = state_58566;
if(cljs.core.truth_(inst_58532)){
var statearr_58570_58603 = state_58566__$1;
(statearr_58570_58603[(1)] = (6));

} else {
var statearr_58571_58604 = state_58566__$1;
(statearr_58571_58604[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58567 === (15))){
var inst_58562 = (state_58566[(2)]);
var state_58566__$1 = state_58566;
var statearr_58572_58605 = state_58566__$1;
(statearr_58572_58605[(2)] = inst_58562);

(statearr_58572_58605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58567 === (13))){
var inst_58555 = cljs.core.async.close_BANG_.call(null,out);
var state_58566__$1 = state_58566;
var statearr_58573_58606 = state_58566__$1;
(statearr_58573_58606[(2)] = inst_58555);

(statearr_58573_58606[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58567 === (6))){
var state_58566__$1 = state_58566;
var statearr_58574_58607 = state_58566__$1;
(statearr_58574_58607[(2)] = null);

(statearr_58574_58607[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58567 === (3))){
var inst_58564 = (state_58566[(2)]);
var state_58566__$1 = state_58566;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58566__$1,inst_58564);
} else {
if((state_val_58567 === (12))){
var inst_58552 = (state_58566[(8)]);
var inst_58552__$1 = (state_58566[(2)]);
var inst_58553 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_58552__$1);
var state_58566__$1 = (function (){var statearr_58575 = state_58566;
(statearr_58575[(8)] = inst_58552__$1);

return statearr_58575;
})();
if(cljs.core.truth_(inst_58553)){
var statearr_58576_58608 = state_58566__$1;
(statearr_58576_58608[(1)] = (13));

} else {
var statearr_58577_58609 = state_58566__$1;
(statearr_58577_58609[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58567 === (2))){
var inst_58529 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_58530 = (0);
var state_58566__$1 = (function (){var statearr_58578 = state_58566;
(statearr_58578[(9)] = inst_58529);

(statearr_58578[(7)] = inst_58530);

return statearr_58578;
})();
var statearr_58579_58610 = state_58566__$1;
(statearr_58579_58610[(2)] = null);

(statearr_58579_58610[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58567 === (11))){
var inst_58530 = (state_58566[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_58566,(10),Object,null,(9));
var inst_58539 = chs__$1.call(null,inst_58530);
var inst_58540 = done.call(null,inst_58530);
var inst_58541 = cljs.core.async.take_BANG_.call(null,inst_58539,inst_58540);
var state_58566__$1 = state_58566;
var statearr_58580_58611 = state_58566__$1;
(statearr_58580_58611[(2)] = inst_58541);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58566__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58567 === (9))){
var inst_58530 = (state_58566[(7)]);
var inst_58543 = (state_58566[(2)]);
var inst_58544 = (inst_58530 + (1));
var inst_58530__$1 = inst_58544;
var state_58566__$1 = (function (){var statearr_58581 = state_58566;
(statearr_58581[(7)] = inst_58530__$1);

(statearr_58581[(10)] = inst_58543);

return statearr_58581;
})();
var statearr_58582_58612 = state_58566__$1;
(statearr_58582_58612[(2)] = null);

(statearr_58582_58612[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58567 === (5))){
var inst_58550 = (state_58566[(2)]);
var state_58566__$1 = (function (){var statearr_58583 = state_58566;
(statearr_58583[(11)] = inst_58550);

return statearr_58583;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58566__$1,(12),dchan);
} else {
if((state_val_58567 === (14))){
var inst_58552 = (state_58566[(8)]);
var inst_58557 = cljs.core.apply.call(null,f,inst_58552);
var state_58566__$1 = state_58566;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58566__$1,(16),out,inst_58557);
} else {
if((state_val_58567 === (16))){
var inst_58559 = (state_58566[(2)]);
var state_58566__$1 = (function (){var statearr_58584 = state_58566;
(statearr_58584[(12)] = inst_58559);

return statearr_58584;
})();
var statearr_58585_58613 = state_58566__$1;
(statearr_58585_58613[(2)] = null);

(statearr_58585_58613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58567 === (10))){
var inst_58534 = (state_58566[(2)]);
var inst_58535 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_58566__$1 = (function (){var statearr_58586 = state_58566;
(statearr_58586[(13)] = inst_58534);

return statearr_58586;
})();
var statearr_58587_58614 = state_58566__$1;
(statearr_58587_58614[(2)] = inst_58535);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58566__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58567 === (8))){
var inst_58548 = (state_58566[(2)]);
var state_58566__$1 = state_58566;
var statearr_58588_58615 = state_58566__$1;
(statearr_58588_58615[(2)] = inst_58548);

(statearr_58588_58615[(1)] = (5));


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
});})(c__39642__auto___58600,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__39530__auto__,c__39642__auto___58600,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__39531__auto__ = null;
var cljs$core$async$state_machine__39531__auto____0 = (function (){
var statearr_58592 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58592[(0)] = cljs$core$async$state_machine__39531__auto__);

(statearr_58592[(1)] = (1));

return statearr_58592;
});
var cljs$core$async$state_machine__39531__auto____1 = (function (state_58566){
while(true){
var ret_value__39532__auto__ = (function (){try{while(true){
var result__39533__auto__ = switch__39530__auto__.call(null,state_58566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39533__auto__;
}
break;
}
}catch (e58593){if((e58593 instanceof Object)){
var ex__39534__auto__ = e58593;
var statearr_58594_58616 = state_58566;
(statearr_58594_58616[(5)] = ex__39534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58617 = state_58566;
state_58566 = G__58617;
continue;
} else {
return ret_value__39532__auto__;
}
break;
}
});
cljs$core$async$state_machine__39531__auto__ = function(state_58566){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39531__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39531__auto____1.call(this,state_58566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39531__auto____0;
cljs$core$async$state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39531__auto____1;
return cljs$core$async$state_machine__39531__auto__;
})()
;})(switch__39530__auto__,c__39642__auto___58600,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__39644__auto__ = (function (){var statearr_58595 = f__39643__auto__.call(null);
(statearr_58595[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39642__auto___58600);

return statearr_58595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39644__auto__);
});})(c__39642__auto___58600,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args58619 = [];
var len__34447__auto___58677 = arguments.length;
var i__34448__auto___58678 = (0);
while(true){
if((i__34448__auto___58678 < len__34447__auto___58677)){
args58619.push((arguments[i__34448__auto___58678]));

var G__58679 = (i__34448__auto___58678 + (1));
i__34448__auto___58678 = G__58679;
continue;
} else {
}
break;
}

var G__58621 = args58619.length;
switch (G__58621) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args58619.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39642__auto___58681 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39642__auto___58681,out){
return (function (){
var f__39643__auto__ = (function (){var switch__39530__auto__ = ((function (c__39642__auto___58681,out){
return (function (state_58653){
var state_val_58654 = (state_58653[(1)]);
if((state_val_58654 === (7))){
var inst_58633 = (state_58653[(7)]);
var inst_58632 = (state_58653[(8)]);
var inst_58632__$1 = (state_58653[(2)]);
var inst_58633__$1 = cljs.core.nth.call(null,inst_58632__$1,(0),null);
var inst_58634 = cljs.core.nth.call(null,inst_58632__$1,(1),null);
var inst_58635 = (inst_58633__$1 == null);
var state_58653__$1 = (function (){var statearr_58655 = state_58653;
(statearr_58655[(7)] = inst_58633__$1);

(statearr_58655[(8)] = inst_58632__$1);

(statearr_58655[(9)] = inst_58634);

return statearr_58655;
})();
if(cljs.core.truth_(inst_58635)){
var statearr_58656_58682 = state_58653__$1;
(statearr_58656_58682[(1)] = (8));

} else {
var statearr_58657_58683 = state_58653__$1;
(statearr_58657_58683[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58654 === (1))){
var inst_58622 = cljs.core.vec.call(null,chs);
var inst_58623 = inst_58622;
var state_58653__$1 = (function (){var statearr_58658 = state_58653;
(statearr_58658[(10)] = inst_58623);

return statearr_58658;
})();
var statearr_58659_58684 = state_58653__$1;
(statearr_58659_58684[(2)] = null);

(statearr_58659_58684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58654 === (4))){
var inst_58623 = (state_58653[(10)]);
var state_58653__$1 = state_58653;
return cljs.core.async.ioc_alts_BANG_.call(null,state_58653__$1,(7),inst_58623);
} else {
if((state_val_58654 === (6))){
var inst_58649 = (state_58653[(2)]);
var state_58653__$1 = state_58653;
var statearr_58660_58685 = state_58653__$1;
(statearr_58660_58685[(2)] = inst_58649);

(statearr_58660_58685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58654 === (3))){
var inst_58651 = (state_58653[(2)]);
var state_58653__$1 = state_58653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58653__$1,inst_58651);
} else {
if((state_val_58654 === (2))){
var inst_58623 = (state_58653[(10)]);
var inst_58625 = cljs.core.count.call(null,inst_58623);
var inst_58626 = (inst_58625 > (0));
var state_58653__$1 = state_58653;
if(cljs.core.truth_(inst_58626)){
var statearr_58662_58686 = state_58653__$1;
(statearr_58662_58686[(1)] = (4));

} else {
var statearr_58663_58687 = state_58653__$1;
(statearr_58663_58687[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58654 === (11))){
var inst_58623 = (state_58653[(10)]);
var inst_58642 = (state_58653[(2)]);
var tmp58661 = inst_58623;
var inst_58623__$1 = tmp58661;
var state_58653__$1 = (function (){var statearr_58664 = state_58653;
(statearr_58664[(11)] = inst_58642);

(statearr_58664[(10)] = inst_58623__$1);

return statearr_58664;
})();
var statearr_58665_58688 = state_58653__$1;
(statearr_58665_58688[(2)] = null);

(statearr_58665_58688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58654 === (9))){
var inst_58633 = (state_58653[(7)]);
var state_58653__$1 = state_58653;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58653__$1,(11),out,inst_58633);
} else {
if((state_val_58654 === (5))){
var inst_58647 = cljs.core.async.close_BANG_.call(null,out);
var state_58653__$1 = state_58653;
var statearr_58666_58689 = state_58653__$1;
(statearr_58666_58689[(2)] = inst_58647);

(statearr_58666_58689[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58654 === (10))){
var inst_58645 = (state_58653[(2)]);
var state_58653__$1 = state_58653;
var statearr_58667_58690 = state_58653__$1;
(statearr_58667_58690[(2)] = inst_58645);

(statearr_58667_58690[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58654 === (8))){
var inst_58633 = (state_58653[(7)]);
var inst_58632 = (state_58653[(8)]);
var inst_58634 = (state_58653[(9)]);
var inst_58623 = (state_58653[(10)]);
var inst_58637 = (function (){var cs = inst_58623;
var vec__58628 = inst_58632;
var v = inst_58633;
var c = inst_58634;
return ((function (cs,vec__58628,v,c,inst_58633,inst_58632,inst_58634,inst_58623,state_val_58654,c__39642__auto___58681,out){
return (function (p1__58618_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__58618_SHARP_);
});
;})(cs,vec__58628,v,c,inst_58633,inst_58632,inst_58634,inst_58623,state_val_58654,c__39642__auto___58681,out))
})();
var inst_58638 = cljs.core.filterv.call(null,inst_58637,inst_58623);
var inst_58623__$1 = inst_58638;
var state_58653__$1 = (function (){var statearr_58668 = state_58653;
(statearr_58668[(10)] = inst_58623__$1);

return statearr_58668;
})();
var statearr_58669_58691 = state_58653__$1;
(statearr_58669_58691[(2)] = null);

(statearr_58669_58691[(1)] = (2));


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
});})(c__39642__auto___58681,out))
;
return ((function (switch__39530__auto__,c__39642__auto___58681,out){
return (function() {
var cljs$core$async$state_machine__39531__auto__ = null;
var cljs$core$async$state_machine__39531__auto____0 = (function (){
var statearr_58673 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58673[(0)] = cljs$core$async$state_machine__39531__auto__);

(statearr_58673[(1)] = (1));

return statearr_58673;
});
var cljs$core$async$state_machine__39531__auto____1 = (function (state_58653){
while(true){
var ret_value__39532__auto__ = (function (){try{while(true){
var result__39533__auto__ = switch__39530__auto__.call(null,state_58653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39533__auto__;
}
break;
}
}catch (e58674){if((e58674 instanceof Object)){
var ex__39534__auto__ = e58674;
var statearr_58675_58692 = state_58653;
(statearr_58675_58692[(5)] = ex__39534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58693 = state_58653;
state_58653 = G__58693;
continue;
} else {
return ret_value__39532__auto__;
}
break;
}
});
cljs$core$async$state_machine__39531__auto__ = function(state_58653){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39531__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39531__auto____1.call(this,state_58653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39531__auto____0;
cljs$core$async$state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39531__auto____1;
return cljs$core$async$state_machine__39531__auto__;
})()
;})(switch__39530__auto__,c__39642__auto___58681,out))
})();
var state__39644__auto__ = (function (){var statearr_58676 = f__39643__auto__.call(null);
(statearr_58676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39642__auto___58681);

return statearr_58676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39644__auto__);
});})(c__39642__auto___58681,out))
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
var args58694 = [];
var len__34447__auto___58743 = arguments.length;
var i__34448__auto___58744 = (0);
while(true){
if((i__34448__auto___58744 < len__34447__auto___58743)){
args58694.push((arguments[i__34448__auto___58744]));

var G__58745 = (i__34448__auto___58744 + (1));
i__34448__auto___58744 = G__58745;
continue;
} else {
}
break;
}

var G__58696 = args58694.length;
switch (G__58696) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args58694.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39642__auto___58747 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39642__auto___58747,out){
return (function (){
var f__39643__auto__ = (function (){var switch__39530__auto__ = ((function (c__39642__auto___58747,out){
return (function (state_58720){
var state_val_58721 = (state_58720[(1)]);
if((state_val_58721 === (7))){
var inst_58702 = (state_58720[(7)]);
var inst_58702__$1 = (state_58720[(2)]);
var inst_58703 = (inst_58702__$1 == null);
var inst_58704 = cljs.core.not.call(null,inst_58703);
var state_58720__$1 = (function (){var statearr_58722 = state_58720;
(statearr_58722[(7)] = inst_58702__$1);

return statearr_58722;
})();
if(inst_58704){
var statearr_58723_58748 = state_58720__$1;
(statearr_58723_58748[(1)] = (8));

} else {
var statearr_58724_58749 = state_58720__$1;
(statearr_58724_58749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58721 === (1))){
var inst_58697 = (0);
var state_58720__$1 = (function (){var statearr_58725 = state_58720;
(statearr_58725[(8)] = inst_58697);

return statearr_58725;
})();
var statearr_58726_58750 = state_58720__$1;
(statearr_58726_58750[(2)] = null);

(statearr_58726_58750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58721 === (4))){
var state_58720__$1 = state_58720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58720__$1,(7),ch);
} else {
if((state_val_58721 === (6))){
var inst_58715 = (state_58720[(2)]);
var state_58720__$1 = state_58720;
var statearr_58727_58751 = state_58720__$1;
(statearr_58727_58751[(2)] = inst_58715);

(statearr_58727_58751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58721 === (3))){
var inst_58717 = (state_58720[(2)]);
var inst_58718 = cljs.core.async.close_BANG_.call(null,out);
var state_58720__$1 = (function (){var statearr_58728 = state_58720;
(statearr_58728[(9)] = inst_58717);

return statearr_58728;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58720__$1,inst_58718);
} else {
if((state_val_58721 === (2))){
var inst_58697 = (state_58720[(8)]);
var inst_58699 = (inst_58697 < n);
var state_58720__$1 = state_58720;
if(cljs.core.truth_(inst_58699)){
var statearr_58729_58752 = state_58720__$1;
(statearr_58729_58752[(1)] = (4));

} else {
var statearr_58730_58753 = state_58720__$1;
(statearr_58730_58753[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58721 === (11))){
var inst_58697 = (state_58720[(8)]);
var inst_58707 = (state_58720[(2)]);
var inst_58708 = (inst_58697 + (1));
var inst_58697__$1 = inst_58708;
var state_58720__$1 = (function (){var statearr_58731 = state_58720;
(statearr_58731[(10)] = inst_58707);

(statearr_58731[(8)] = inst_58697__$1);

return statearr_58731;
})();
var statearr_58732_58754 = state_58720__$1;
(statearr_58732_58754[(2)] = null);

(statearr_58732_58754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58721 === (9))){
var state_58720__$1 = state_58720;
var statearr_58733_58755 = state_58720__$1;
(statearr_58733_58755[(2)] = null);

(statearr_58733_58755[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58721 === (5))){
var state_58720__$1 = state_58720;
var statearr_58734_58756 = state_58720__$1;
(statearr_58734_58756[(2)] = null);

(statearr_58734_58756[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58721 === (10))){
var inst_58712 = (state_58720[(2)]);
var state_58720__$1 = state_58720;
var statearr_58735_58757 = state_58720__$1;
(statearr_58735_58757[(2)] = inst_58712);

(statearr_58735_58757[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58721 === (8))){
var inst_58702 = (state_58720[(7)]);
var state_58720__$1 = state_58720;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58720__$1,(11),out,inst_58702);
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
});})(c__39642__auto___58747,out))
;
return ((function (switch__39530__auto__,c__39642__auto___58747,out){
return (function() {
var cljs$core$async$state_machine__39531__auto__ = null;
var cljs$core$async$state_machine__39531__auto____0 = (function (){
var statearr_58739 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58739[(0)] = cljs$core$async$state_machine__39531__auto__);

(statearr_58739[(1)] = (1));

return statearr_58739;
});
var cljs$core$async$state_machine__39531__auto____1 = (function (state_58720){
while(true){
var ret_value__39532__auto__ = (function (){try{while(true){
var result__39533__auto__ = switch__39530__auto__.call(null,state_58720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39533__auto__;
}
break;
}
}catch (e58740){if((e58740 instanceof Object)){
var ex__39534__auto__ = e58740;
var statearr_58741_58758 = state_58720;
(statearr_58741_58758[(5)] = ex__39534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58759 = state_58720;
state_58720 = G__58759;
continue;
} else {
return ret_value__39532__auto__;
}
break;
}
});
cljs$core$async$state_machine__39531__auto__ = function(state_58720){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39531__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39531__auto____1.call(this,state_58720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39531__auto____0;
cljs$core$async$state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39531__auto____1;
return cljs$core$async$state_machine__39531__auto__;
})()
;})(switch__39530__auto__,c__39642__auto___58747,out))
})();
var state__39644__auto__ = (function (){var statearr_58742 = f__39643__auto__.call(null);
(statearr_58742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39642__auto___58747);

return statearr_58742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39644__auto__);
});})(c__39642__auto___58747,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async58767 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58767 = (function (f,ch,meta58768){
this.f = f;
this.ch = ch;
this.meta58768 = meta58768;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async58767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58769,meta58768__$1){
var self__ = this;
var _58769__$1 = this;
return (new cljs.core.async.t_cljs$core$async58767(self__.f,self__.ch,meta58768__$1));
});

cljs.core.async.t_cljs$core$async58767.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58769){
var self__ = this;
var _58769__$1 = this;
return self__.meta58768;
});

cljs.core.async.t_cljs$core$async58767.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58767.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async58767.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async58767.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58767.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async58770 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58770 = (function (f,ch,meta58768,_,fn1,meta58771){
this.f = f;
this.ch = ch;
this.meta58768 = meta58768;
this._ = _;
this.fn1 = fn1;
this.meta58771 = meta58771;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async58770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_58772,meta58771__$1){
var self__ = this;
var _58772__$1 = this;
return (new cljs.core.async.t_cljs$core$async58770(self__.f,self__.ch,self__.meta58768,self__._,self__.fn1,meta58771__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async58770.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_58772){
var self__ = this;
var _58772__$1 = this;
return self__.meta58771;
});})(___$1))
;

cljs.core.async.t_cljs$core$async58770.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58770.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async58770.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async58770.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__58760_SHARP_){
return f1.call(null,(((p1__58760_SHARP_ == null))?null:self__.f.call(null,p1__58760_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async58770.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58768","meta58768",-992183126,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async58767","cljs.core.async/t_cljs$core$async58767",-2064427319,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta58771","meta58771",-1921229848,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async58770.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58770.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58770";

cljs.core.async.t_cljs$core$async58770.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__33945__auto__,writer__33946__auto__,opt__33947__auto__){
return cljs.core._write.call(null,writer__33946__auto__,"cljs.core.async/t_cljs$core$async58770");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async58770 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async58770(f__$1,ch__$1,meta58768__$1,___$2,fn1__$1,meta58771){
return (new cljs.core.async.t_cljs$core$async58770(f__$1,ch__$1,meta58768__$1,___$2,fn1__$1,meta58771));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async58770(self__.f,self__.ch,self__.meta58768,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__33322__auto__ = ret;
if(cljs.core.truth_(and__33322__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__33322__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async58767.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58767.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async58767.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58768","meta58768",-992183126,null)], null);
});

cljs.core.async.t_cljs$core$async58767.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58767.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58767";

cljs.core.async.t_cljs$core$async58767.cljs$lang$ctorPrWriter = (function (this__33945__auto__,writer__33946__auto__,opt__33947__auto__){
return cljs.core._write.call(null,writer__33946__auto__,"cljs.core.async/t_cljs$core$async58767");
});

cljs.core.async.__GT_t_cljs$core$async58767 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async58767(f__$1,ch__$1,meta58768){
return (new cljs.core.async.t_cljs$core$async58767(f__$1,ch__$1,meta58768));
});

}

return (new cljs.core.async.t_cljs$core$async58767(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async58776 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58776 = (function (f,ch,meta58777){
this.f = f;
this.ch = ch;
this.meta58777 = meta58777;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async58776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58778,meta58777__$1){
var self__ = this;
var _58778__$1 = this;
return (new cljs.core.async.t_cljs$core$async58776(self__.f,self__.ch,meta58777__$1));
});

cljs.core.async.t_cljs$core$async58776.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58778){
var self__ = this;
var _58778__$1 = this;
return self__.meta58777;
});

cljs.core.async.t_cljs$core$async58776.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58776.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async58776.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58776.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async58776.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58776.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async58776.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58777","meta58777",-1170784448,null)], null);
});

cljs.core.async.t_cljs$core$async58776.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58776.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58776";

cljs.core.async.t_cljs$core$async58776.cljs$lang$ctorPrWriter = (function (this__33945__auto__,writer__33946__auto__,opt__33947__auto__){
return cljs.core._write.call(null,writer__33946__auto__,"cljs.core.async/t_cljs$core$async58776");
});

cljs.core.async.__GT_t_cljs$core$async58776 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async58776(f__$1,ch__$1,meta58777){
return (new cljs.core.async.t_cljs$core$async58776(f__$1,ch__$1,meta58777));
});

}

return (new cljs.core.async.t_cljs$core$async58776(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async58782 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58782 = (function (p,ch,meta58783){
this.p = p;
this.ch = ch;
this.meta58783 = meta58783;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async58782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58784,meta58783__$1){
var self__ = this;
var _58784__$1 = this;
return (new cljs.core.async.t_cljs$core$async58782(self__.p,self__.ch,meta58783__$1));
});

cljs.core.async.t_cljs$core$async58782.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58784){
var self__ = this;
var _58784__$1 = this;
return self__.meta58783;
});

cljs.core.async.t_cljs$core$async58782.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58782.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async58782.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async58782.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58782.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async58782.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58782.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async58782.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58783","meta58783",2142984373,null)], null);
});

cljs.core.async.t_cljs$core$async58782.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58782.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58782";

cljs.core.async.t_cljs$core$async58782.cljs$lang$ctorPrWriter = (function (this__33945__auto__,writer__33946__auto__,opt__33947__auto__){
return cljs.core._write.call(null,writer__33946__auto__,"cljs.core.async/t_cljs$core$async58782");
});

cljs.core.async.__GT_t_cljs$core$async58782 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async58782(p__$1,ch__$1,meta58783){
return (new cljs.core.async.t_cljs$core$async58782(p__$1,ch__$1,meta58783));
});

}

return (new cljs.core.async.t_cljs$core$async58782(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args58785 = [];
var len__34447__auto___58829 = arguments.length;
var i__34448__auto___58830 = (0);
while(true){
if((i__34448__auto___58830 < len__34447__auto___58829)){
args58785.push((arguments[i__34448__auto___58830]));

var G__58831 = (i__34448__auto___58830 + (1));
i__34448__auto___58830 = G__58831;
continue;
} else {
}
break;
}

var G__58787 = args58785.length;
switch (G__58787) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args58785.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39642__auto___58833 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39642__auto___58833,out){
return (function (){
var f__39643__auto__ = (function (){var switch__39530__auto__ = ((function (c__39642__auto___58833,out){
return (function (state_58808){
var state_val_58809 = (state_58808[(1)]);
if((state_val_58809 === (7))){
var inst_58804 = (state_58808[(2)]);
var state_58808__$1 = state_58808;
var statearr_58810_58834 = state_58808__$1;
(statearr_58810_58834[(2)] = inst_58804);

(statearr_58810_58834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58809 === (1))){
var state_58808__$1 = state_58808;
var statearr_58811_58835 = state_58808__$1;
(statearr_58811_58835[(2)] = null);

(statearr_58811_58835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58809 === (4))){
var inst_58790 = (state_58808[(7)]);
var inst_58790__$1 = (state_58808[(2)]);
var inst_58791 = (inst_58790__$1 == null);
var state_58808__$1 = (function (){var statearr_58812 = state_58808;
(statearr_58812[(7)] = inst_58790__$1);

return statearr_58812;
})();
if(cljs.core.truth_(inst_58791)){
var statearr_58813_58836 = state_58808__$1;
(statearr_58813_58836[(1)] = (5));

} else {
var statearr_58814_58837 = state_58808__$1;
(statearr_58814_58837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58809 === (6))){
var inst_58790 = (state_58808[(7)]);
var inst_58795 = p.call(null,inst_58790);
var state_58808__$1 = state_58808;
if(cljs.core.truth_(inst_58795)){
var statearr_58815_58838 = state_58808__$1;
(statearr_58815_58838[(1)] = (8));

} else {
var statearr_58816_58839 = state_58808__$1;
(statearr_58816_58839[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58809 === (3))){
var inst_58806 = (state_58808[(2)]);
var state_58808__$1 = state_58808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58808__$1,inst_58806);
} else {
if((state_val_58809 === (2))){
var state_58808__$1 = state_58808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58808__$1,(4),ch);
} else {
if((state_val_58809 === (11))){
var inst_58798 = (state_58808[(2)]);
var state_58808__$1 = state_58808;
var statearr_58817_58840 = state_58808__$1;
(statearr_58817_58840[(2)] = inst_58798);

(statearr_58817_58840[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58809 === (9))){
var state_58808__$1 = state_58808;
var statearr_58818_58841 = state_58808__$1;
(statearr_58818_58841[(2)] = null);

(statearr_58818_58841[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58809 === (5))){
var inst_58793 = cljs.core.async.close_BANG_.call(null,out);
var state_58808__$1 = state_58808;
var statearr_58819_58842 = state_58808__$1;
(statearr_58819_58842[(2)] = inst_58793);

(statearr_58819_58842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58809 === (10))){
var inst_58801 = (state_58808[(2)]);
var state_58808__$1 = (function (){var statearr_58820 = state_58808;
(statearr_58820[(8)] = inst_58801);

return statearr_58820;
})();
var statearr_58821_58843 = state_58808__$1;
(statearr_58821_58843[(2)] = null);

(statearr_58821_58843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58809 === (8))){
var inst_58790 = (state_58808[(7)]);
var state_58808__$1 = state_58808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58808__$1,(11),out,inst_58790);
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
});})(c__39642__auto___58833,out))
;
return ((function (switch__39530__auto__,c__39642__auto___58833,out){
return (function() {
var cljs$core$async$state_machine__39531__auto__ = null;
var cljs$core$async$state_machine__39531__auto____0 = (function (){
var statearr_58825 = [null,null,null,null,null,null,null,null,null];
(statearr_58825[(0)] = cljs$core$async$state_machine__39531__auto__);

(statearr_58825[(1)] = (1));

return statearr_58825;
});
var cljs$core$async$state_machine__39531__auto____1 = (function (state_58808){
while(true){
var ret_value__39532__auto__ = (function (){try{while(true){
var result__39533__auto__ = switch__39530__auto__.call(null,state_58808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39533__auto__;
}
break;
}
}catch (e58826){if((e58826 instanceof Object)){
var ex__39534__auto__ = e58826;
var statearr_58827_58844 = state_58808;
(statearr_58827_58844[(5)] = ex__39534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58845 = state_58808;
state_58808 = G__58845;
continue;
} else {
return ret_value__39532__auto__;
}
break;
}
});
cljs$core$async$state_machine__39531__auto__ = function(state_58808){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39531__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39531__auto____1.call(this,state_58808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39531__auto____0;
cljs$core$async$state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39531__auto____1;
return cljs$core$async$state_machine__39531__auto__;
})()
;})(switch__39530__auto__,c__39642__auto___58833,out))
})();
var state__39644__auto__ = (function (){var statearr_58828 = f__39643__auto__.call(null);
(statearr_58828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39642__auto___58833);

return statearr_58828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39644__auto__);
});})(c__39642__auto___58833,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args58846 = [];
var len__34447__auto___58849 = arguments.length;
var i__34448__auto___58850 = (0);
while(true){
if((i__34448__auto___58850 < len__34447__auto___58849)){
args58846.push((arguments[i__34448__auto___58850]));

var G__58851 = (i__34448__auto___58850 + (1));
i__34448__auto___58850 = G__58851;
continue;
} else {
}
break;
}

var G__58848 = args58846.length;
switch (G__58848) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args58846.length)].join('')));

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
var c__39642__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39642__auto__){
return (function (){
var f__39643__auto__ = (function (){var switch__39530__auto__ = ((function (c__39642__auto__){
return (function (state_59018){
var state_val_59019 = (state_59018[(1)]);
if((state_val_59019 === (7))){
var inst_59014 = (state_59018[(2)]);
var state_59018__$1 = state_59018;
var statearr_59020_59061 = state_59018__$1;
(statearr_59020_59061[(2)] = inst_59014);

(statearr_59020_59061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59019 === (20))){
var inst_58984 = (state_59018[(7)]);
var inst_58995 = (state_59018[(2)]);
var inst_58996 = cljs.core.next.call(null,inst_58984);
var inst_58970 = inst_58996;
var inst_58971 = null;
var inst_58972 = (0);
var inst_58973 = (0);
var state_59018__$1 = (function (){var statearr_59021 = state_59018;
(statearr_59021[(8)] = inst_58971);

(statearr_59021[(9)] = inst_58970);

(statearr_59021[(10)] = inst_58972);

(statearr_59021[(11)] = inst_58995);

(statearr_59021[(12)] = inst_58973);

return statearr_59021;
})();
var statearr_59022_59062 = state_59018__$1;
(statearr_59022_59062[(2)] = null);

(statearr_59022_59062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59019 === (1))){
var state_59018__$1 = state_59018;
var statearr_59023_59063 = state_59018__$1;
(statearr_59023_59063[(2)] = null);

(statearr_59023_59063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59019 === (4))){
var inst_58959 = (state_59018[(13)]);
var inst_58959__$1 = (state_59018[(2)]);
var inst_58960 = (inst_58959__$1 == null);
var state_59018__$1 = (function (){var statearr_59024 = state_59018;
(statearr_59024[(13)] = inst_58959__$1);

return statearr_59024;
})();
if(cljs.core.truth_(inst_58960)){
var statearr_59025_59064 = state_59018__$1;
(statearr_59025_59064[(1)] = (5));

} else {
var statearr_59026_59065 = state_59018__$1;
(statearr_59026_59065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59019 === (15))){
var state_59018__$1 = state_59018;
var statearr_59030_59066 = state_59018__$1;
(statearr_59030_59066[(2)] = null);

(statearr_59030_59066[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59019 === (21))){
var state_59018__$1 = state_59018;
var statearr_59031_59067 = state_59018__$1;
(statearr_59031_59067[(2)] = null);

(statearr_59031_59067[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59019 === (13))){
var inst_58971 = (state_59018[(8)]);
var inst_58970 = (state_59018[(9)]);
var inst_58972 = (state_59018[(10)]);
var inst_58973 = (state_59018[(12)]);
var inst_58980 = (state_59018[(2)]);
var inst_58981 = (inst_58973 + (1));
var tmp59027 = inst_58971;
var tmp59028 = inst_58970;
var tmp59029 = inst_58972;
var inst_58970__$1 = tmp59028;
var inst_58971__$1 = tmp59027;
var inst_58972__$1 = tmp59029;
var inst_58973__$1 = inst_58981;
var state_59018__$1 = (function (){var statearr_59032 = state_59018;
(statearr_59032[(8)] = inst_58971__$1);

(statearr_59032[(14)] = inst_58980);

(statearr_59032[(9)] = inst_58970__$1);

(statearr_59032[(10)] = inst_58972__$1);

(statearr_59032[(12)] = inst_58973__$1);

return statearr_59032;
})();
var statearr_59033_59068 = state_59018__$1;
(statearr_59033_59068[(2)] = null);

(statearr_59033_59068[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59019 === (22))){
var state_59018__$1 = state_59018;
var statearr_59034_59069 = state_59018__$1;
(statearr_59034_59069[(2)] = null);

(statearr_59034_59069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59019 === (6))){
var inst_58959 = (state_59018[(13)]);
var inst_58968 = f.call(null,inst_58959);
var inst_58969 = cljs.core.seq.call(null,inst_58968);
var inst_58970 = inst_58969;
var inst_58971 = null;
var inst_58972 = (0);
var inst_58973 = (0);
var state_59018__$1 = (function (){var statearr_59035 = state_59018;
(statearr_59035[(8)] = inst_58971);

(statearr_59035[(9)] = inst_58970);

(statearr_59035[(10)] = inst_58972);

(statearr_59035[(12)] = inst_58973);

return statearr_59035;
})();
var statearr_59036_59070 = state_59018__$1;
(statearr_59036_59070[(2)] = null);

(statearr_59036_59070[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59019 === (17))){
var inst_58984 = (state_59018[(7)]);
var inst_58988 = cljs.core.chunk_first.call(null,inst_58984);
var inst_58989 = cljs.core.chunk_rest.call(null,inst_58984);
var inst_58990 = cljs.core.count.call(null,inst_58988);
var inst_58970 = inst_58989;
var inst_58971 = inst_58988;
var inst_58972 = inst_58990;
var inst_58973 = (0);
var state_59018__$1 = (function (){var statearr_59037 = state_59018;
(statearr_59037[(8)] = inst_58971);

(statearr_59037[(9)] = inst_58970);

(statearr_59037[(10)] = inst_58972);

(statearr_59037[(12)] = inst_58973);

return statearr_59037;
})();
var statearr_59038_59071 = state_59018__$1;
(statearr_59038_59071[(2)] = null);

(statearr_59038_59071[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59019 === (3))){
var inst_59016 = (state_59018[(2)]);
var state_59018__$1 = state_59018;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59018__$1,inst_59016);
} else {
if((state_val_59019 === (12))){
var inst_59004 = (state_59018[(2)]);
var state_59018__$1 = state_59018;
var statearr_59039_59072 = state_59018__$1;
(statearr_59039_59072[(2)] = inst_59004);

(statearr_59039_59072[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59019 === (2))){
var state_59018__$1 = state_59018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59018__$1,(4),in$);
} else {
if((state_val_59019 === (23))){
var inst_59012 = (state_59018[(2)]);
var state_59018__$1 = state_59018;
var statearr_59040_59073 = state_59018__$1;
(statearr_59040_59073[(2)] = inst_59012);

(statearr_59040_59073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59019 === (19))){
var inst_58999 = (state_59018[(2)]);
var state_59018__$1 = state_59018;
var statearr_59041_59074 = state_59018__$1;
(statearr_59041_59074[(2)] = inst_58999);

(statearr_59041_59074[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59019 === (11))){
var inst_58970 = (state_59018[(9)]);
var inst_58984 = (state_59018[(7)]);
var inst_58984__$1 = cljs.core.seq.call(null,inst_58970);
var state_59018__$1 = (function (){var statearr_59042 = state_59018;
(statearr_59042[(7)] = inst_58984__$1);

return statearr_59042;
})();
if(inst_58984__$1){
var statearr_59043_59075 = state_59018__$1;
(statearr_59043_59075[(1)] = (14));

} else {
var statearr_59044_59076 = state_59018__$1;
(statearr_59044_59076[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59019 === (9))){
var inst_59006 = (state_59018[(2)]);
var inst_59007 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_59018__$1 = (function (){var statearr_59045 = state_59018;
(statearr_59045[(15)] = inst_59006);

return statearr_59045;
})();
if(cljs.core.truth_(inst_59007)){
var statearr_59046_59077 = state_59018__$1;
(statearr_59046_59077[(1)] = (21));

} else {
var statearr_59047_59078 = state_59018__$1;
(statearr_59047_59078[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59019 === (5))){
var inst_58962 = cljs.core.async.close_BANG_.call(null,out);
var state_59018__$1 = state_59018;
var statearr_59048_59079 = state_59018__$1;
(statearr_59048_59079[(2)] = inst_58962);

(statearr_59048_59079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59019 === (14))){
var inst_58984 = (state_59018[(7)]);
var inst_58986 = cljs.core.chunked_seq_QMARK_.call(null,inst_58984);
var state_59018__$1 = state_59018;
if(inst_58986){
var statearr_59049_59080 = state_59018__$1;
(statearr_59049_59080[(1)] = (17));

} else {
var statearr_59050_59081 = state_59018__$1;
(statearr_59050_59081[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59019 === (16))){
var inst_59002 = (state_59018[(2)]);
var state_59018__$1 = state_59018;
var statearr_59051_59082 = state_59018__$1;
(statearr_59051_59082[(2)] = inst_59002);

(statearr_59051_59082[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59019 === (10))){
var inst_58971 = (state_59018[(8)]);
var inst_58973 = (state_59018[(12)]);
var inst_58978 = cljs.core._nth.call(null,inst_58971,inst_58973);
var state_59018__$1 = state_59018;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59018__$1,(13),out,inst_58978);
} else {
if((state_val_59019 === (18))){
var inst_58984 = (state_59018[(7)]);
var inst_58993 = cljs.core.first.call(null,inst_58984);
var state_59018__$1 = state_59018;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59018__$1,(20),out,inst_58993);
} else {
if((state_val_59019 === (8))){
var inst_58972 = (state_59018[(10)]);
var inst_58973 = (state_59018[(12)]);
var inst_58975 = (inst_58973 < inst_58972);
var inst_58976 = inst_58975;
var state_59018__$1 = state_59018;
if(cljs.core.truth_(inst_58976)){
var statearr_59052_59083 = state_59018__$1;
(statearr_59052_59083[(1)] = (10));

} else {
var statearr_59053_59084 = state_59018__$1;
(statearr_59053_59084[(1)] = (11));

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
});})(c__39642__auto__))
;
return ((function (switch__39530__auto__,c__39642__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__39531__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__39531__auto____0 = (function (){
var statearr_59057 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59057[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__39531__auto__);

(statearr_59057[(1)] = (1));

return statearr_59057;
});
var cljs$core$async$mapcat_STAR__$_state_machine__39531__auto____1 = (function (state_59018){
while(true){
var ret_value__39532__auto__ = (function (){try{while(true){
var result__39533__auto__ = switch__39530__auto__.call(null,state_59018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39533__auto__;
}
break;
}
}catch (e59058){if((e59058 instanceof Object)){
var ex__39534__auto__ = e59058;
var statearr_59059_59085 = state_59018;
(statearr_59059_59085[(5)] = ex__39534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59086 = state_59018;
state_59018 = G__59086;
continue;
} else {
return ret_value__39532__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__39531__auto__ = function(state_59018){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__39531__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__39531__auto____1.call(this,state_59018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__39531__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__39531__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__39531__auto__;
})()
;})(switch__39530__auto__,c__39642__auto__))
})();
var state__39644__auto__ = (function (){var statearr_59060 = f__39643__auto__.call(null);
(statearr_59060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39642__auto__);

return statearr_59060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39644__auto__);
});})(c__39642__auto__))
);

return c__39642__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args59087 = [];
var len__34447__auto___59090 = arguments.length;
var i__34448__auto___59091 = (0);
while(true){
if((i__34448__auto___59091 < len__34447__auto___59090)){
args59087.push((arguments[i__34448__auto___59091]));

var G__59092 = (i__34448__auto___59091 + (1));
i__34448__auto___59091 = G__59092;
continue;
} else {
}
break;
}

var G__59089 = args59087.length;
switch (G__59089) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args59087.length)].join('')));

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
var args59094 = [];
var len__34447__auto___59097 = arguments.length;
var i__34448__auto___59098 = (0);
while(true){
if((i__34448__auto___59098 < len__34447__auto___59097)){
args59094.push((arguments[i__34448__auto___59098]));

var G__59099 = (i__34448__auto___59098 + (1));
i__34448__auto___59098 = G__59099;
continue;
} else {
}
break;
}

var G__59096 = args59094.length;
switch (G__59096) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args59094.length)].join('')));

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
var args59101 = [];
var len__34447__auto___59152 = arguments.length;
var i__34448__auto___59153 = (0);
while(true){
if((i__34448__auto___59153 < len__34447__auto___59152)){
args59101.push((arguments[i__34448__auto___59153]));

var G__59154 = (i__34448__auto___59153 + (1));
i__34448__auto___59153 = G__59154;
continue;
} else {
}
break;
}

var G__59103 = args59101.length;
switch (G__59103) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args59101.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39642__auto___59156 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39642__auto___59156,out){
return (function (){
var f__39643__auto__ = (function (){var switch__39530__auto__ = ((function (c__39642__auto___59156,out){
return (function (state_59127){
var state_val_59128 = (state_59127[(1)]);
if((state_val_59128 === (7))){
var inst_59122 = (state_59127[(2)]);
var state_59127__$1 = state_59127;
var statearr_59129_59157 = state_59127__$1;
(statearr_59129_59157[(2)] = inst_59122);

(statearr_59129_59157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59128 === (1))){
var inst_59104 = null;
var state_59127__$1 = (function (){var statearr_59130 = state_59127;
(statearr_59130[(7)] = inst_59104);

return statearr_59130;
})();
var statearr_59131_59158 = state_59127__$1;
(statearr_59131_59158[(2)] = null);

(statearr_59131_59158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59128 === (4))){
var inst_59107 = (state_59127[(8)]);
var inst_59107__$1 = (state_59127[(2)]);
var inst_59108 = (inst_59107__$1 == null);
var inst_59109 = cljs.core.not.call(null,inst_59108);
var state_59127__$1 = (function (){var statearr_59132 = state_59127;
(statearr_59132[(8)] = inst_59107__$1);

return statearr_59132;
})();
if(inst_59109){
var statearr_59133_59159 = state_59127__$1;
(statearr_59133_59159[(1)] = (5));

} else {
var statearr_59134_59160 = state_59127__$1;
(statearr_59134_59160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59128 === (6))){
var state_59127__$1 = state_59127;
var statearr_59135_59161 = state_59127__$1;
(statearr_59135_59161[(2)] = null);

(statearr_59135_59161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59128 === (3))){
var inst_59124 = (state_59127[(2)]);
var inst_59125 = cljs.core.async.close_BANG_.call(null,out);
var state_59127__$1 = (function (){var statearr_59136 = state_59127;
(statearr_59136[(9)] = inst_59124);

return statearr_59136;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59127__$1,inst_59125);
} else {
if((state_val_59128 === (2))){
var state_59127__$1 = state_59127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59127__$1,(4),ch);
} else {
if((state_val_59128 === (11))){
var inst_59107 = (state_59127[(8)]);
var inst_59116 = (state_59127[(2)]);
var inst_59104 = inst_59107;
var state_59127__$1 = (function (){var statearr_59137 = state_59127;
(statearr_59137[(10)] = inst_59116);

(statearr_59137[(7)] = inst_59104);

return statearr_59137;
})();
var statearr_59138_59162 = state_59127__$1;
(statearr_59138_59162[(2)] = null);

(statearr_59138_59162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59128 === (9))){
var inst_59107 = (state_59127[(8)]);
var state_59127__$1 = state_59127;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59127__$1,(11),out,inst_59107);
} else {
if((state_val_59128 === (5))){
var inst_59107 = (state_59127[(8)]);
var inst_59104 = (state_59127[(7)]);
var inst_59111 = cljs.core._EQ_.call(null,inst_59107,inst_59104);
var state_59127__$1 = state_59127;
if(inst_59111){
var statearr_59140_59163 = state_59127__$1;
(statearr_59140_59163[(1)] = (8));

} else {
var statearr_59141_59164 = state_59127__$1;
(statearr_59141_59164[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59128 === (10))){
var inst_59119 = (state_59127[(2)]);
var state_59127__$1 = state_59127;
var statearr_59142_59165 = state_59127__$1;
(statearr_59142_59165[(2)] = inst_59119);

(statearr_59142_59165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59128 === (8))){
var inst_59104 = (state_59127[(7)]);
var tmp59139 = inst_59104;
var inst_59104__$1 = tmp59139;
var state_59127__$1 = (function (){var statearr_59143 = state_59127;
(statearr_59143[(7)] = inst_59104__$1);

return statearr_59143;
})();
var statearr_59144_59166 = state_59127__$1;
(statearr_59144_59166[(2)] = null);

(statearr_59144_59166[(1)] = (2));


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
});})(c__39642__auto___59156,out))
;
return ((function (switch__39530__auto__,c__39642__auto___59156,out){
return (function() {
var cljs$core$async$state_machine__39531__auto__ = null;
var cljs$core$async$state_machine__39531__auto____0 = (function (){
var statearr_59148 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59148[(0)] = cljs$core$async$state_machine__39531__auto__);

(statearr_59148[(1)] = (1));

return statearr_59148;
});
var cljs$core$async$state_machine__39531__auto____1 = (function (state_59127){
while(true){
var ret_value__39532__auto__ = (function (){try{while(true){
var result__39533__auto__ = switch__39530__auto__.call(null,state_59127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39533__auto__;
}
break;
}
}catch (e59149){if((e59149 instanceof Object)){
var ex__39534__auto__ = e59149;
var statearr_59150_59167 = state_59127;
(statearr_59150_59167[(5)] = ex__39534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59168 = state_59127;
state_59127 = G__59168;
continue;
} else {
return ret_value__39532__auto__;
}
break;
}
});
cljs$core$async$state_machine__39531__auto__ = function(state_59127){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39531__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39531__auto____1.call(this,state_59127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39531__auto____0;
cljs$core$async$state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39531__auto____1;
return cljs$core$async$state_machine__39531__auto__;
})()
;})(switch__39530__auto__,c__39642__auto___59156,out))
})();
var state__39644__auto__ = (function (){var statearr_59151 = f__39643__auto__.call(null);
(statearr_59151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39642__auto___59156);

return statearr_59151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39644__auto__);
});})(c__39642__auto___59156,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args59169 = [];
var len__34447__auto___59239 = arguments.length;
var i__34448__auto___59240 = (0);
while(true){
if((i__34448__auto___59240 < len__34447__auto___59239)){
args59169.push((arguments[i__34448__auto___59240]));

var G__59241 = (i__34448__auto___59240 + (1));
i__34448__auto___59240 = G__59241;
continue;
} else {
}
break;
}

var G__59171 = args59169.length;
switch (G__59171) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args59169.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39642__auto___59243 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39642__auto___59243,out){
return (function (){
var f__39643__auto__ = (function (){var switch__39530__auto__ = ((function (c__39642__auto___59243,out){
return (function (state_59209){
var state_val_59210 = (state_59209[(1)]);
if((state_val_59210 === (7))){
var inst_59205 = (state_59209[(2)]);
var state_59209__$1 = state_59209;
var statearr_59211_59244 = state_59209__$1;
(statearr_59211_59244[(2)] = inst_59205);

(statearr_59211_59244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59210 === (1))){
var inst_59172 = (new Array(n));
var inst_59173 = inst_59172;
var inst_59174 = (0);
var state_59209__$1 = (function (){var statearr_59212 = state_59209;
(statearr_59212[(7)] = inst_59173);

(statearr_59212[(8)] = inst_59174);

return statearr_59212;
})();
var statearr_59213_59245 = state_59209__$1;
(statearr_59213_59245[(2)] = null);

(statearr_59213_59245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59210 === (4))){
var inst_59177 = (state_59209[(9)]);
var inst_59177__$1 = (state_59209[(2)]);
var inst_59178 = (inst_59177__$1 == null);
var inst_59179 = cljs.core.not.call(null,inst_59178);
var state_59209__$1 = (function (){var statearr_59214 = state_59209;
(statearr_59214[(9)] = inst_59177__$1);

return statearr_59214;
})();
if(inst_59179){
var statearr_59215_59246 = state_59209__$1;
(statearr_59215_59246[(1)] = (5));

} else {
var statearr_59216_59247 = state_59209__$1;
(statearr_59216_59247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59210 === (15))){
var inst_59199 = (state_59209[(2)]);
var state_59209__$1 = state_59209;
var statearr_59217_59248 = state_59209__$1;
(statearr_59217_59248[(2)] = inst_59199);

(statearr_59217_59248[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59210 === (13))){
var state_59209__$1 = state_59209;
var statearr_59218_59249 = state_59209__$1;
(statearr_59218_59249[(2)] = null);

(statearr_59218_59249[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59210 === (6))){
var inst_59174 = (state_59209[(8)]);
var inst_59195 = (inst_59174 > (0));
var state_59209__$1 = state_59209;
if(cljs.core.truth_(inst_59195)){
var statearr_59219_59250 = state_59209__$1;
(statearr_59219_59250[(1)] = (12));

} else {
var statearr_59220_59251 = state_59209__$1;
(statearr_59220_59251[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59210 === (3))){
var inst_59207 = (state_59209[(2)]);
var state_59209__$1 = state_59209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59209__$1,inst_59207);
} else {
if((state_val_59210 === (12))){
var inst_59173 = (state_59209[(7)]);
var inst_59197 = cljs.core.vec.call(null,inst_59173);
var state_59209__$1 = state_59209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59209__$1,(15),out,inst_59197);
} else {
if((state_val_59210 === (2))){
var state_59209__$1 = state_59209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59209__$1,(4),ch);
} else {
if((state_val_59210 === (11))){
var inst_59189 = (state_59209[(2)]);
var inst_59190 = (new Array(n));
var inst_59173 = inst_59190;
var inst_59174 = (0);
var state_59209__$1 = (function (){var statearr_59221 = state_59209;
(statearr_59221[(10)] = inst_59189);

(statearr_59221[(7)] = inst_59173);

(statearr_59221[(8)] = inst_59174);

return statearr_59221;
})();
var statearr_59222_59252 = state_59209__$1;
(statearr_59222_59252[(2)] = null);

(statearr_59222_59252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59210 === (9))){
var inst_59173 = (state_59209[(7)]);
var inst_59187 = cljs.core.vec.call(null,inst_59173);
var state_59209__$1 = state_59209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59209__$1,(11),out,inst_59187);
} else {
if((state_val_59210 === (5))){
var inst_59173 = (state_59209[(7)]);
var inst_59177 = (state_59209[(9)]);
var inst_59174 = (state_59209[(8)]);
var inst_59182 = (state_59209[(11)]);
var inst_59181 = (inst_59173[inst_59174] = inst_59177);
var inst_59182__$1 = (inst_59174 + (1));
var inst_59183 = (inst_59182__$1 < n);
var state_59209__$1 = (function (){var statearr_59223 = state_59209;
(statearr_59223[(12)] = inst_59181);

(statearr_59223[(11)] = inst_59182__$1);

return statearr_59223;
})();
if(cljs.core.truth_(inst_59183)){
var statearr_59224_59253 = state_59209__$1;
(statearr_59224_59253[(1)] = (8));

} else {
var statearr_59225_59254 = state_59209__$1;
(statearr_59225_59254[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59210 === (14))){
var inst_59202 = (state_59209[(2)]);
var inst_59203 = cljs.core.async.close_BANG_.call(null,out);
var state_59209__$1 = (function (){var statearr_59227 = state_59209;
(statearr_59227[(13)] = inst_59202);

return statearr_59227;
})();
var statearr_59228_59255 = state_59209__$1;
(statearr_59228_59255[(2)] = inst_59203);

(statearr_59228_59255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59210 === (10))){
var inst_59193 = (state_59209[(2)]);
var state_59209__$1 = state_59209;
var statearr_59229_59256 = state_59209__$1;
(statearr_59229_59256[(2)] = inst_59193);

(statearr_59229_59256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59210 === (8))){
var inst_59173 = (state_59209[(7)]);
var inst_59182 = (state_59209[(11)]);
var tmp59226 = inst_59173;
var inst_59173__$1 = tmp59226;
var inst_59174 = inst_59182;
var state_59209__$1 = (function (){var statearr_59230 = state_59209;
(statearr_59230[(7)] = inst_59173__$1);

(statearr_59230[(8)] = inst_59174);

return statearr_59230;
})();
var statearr_59231_59257 = state_59209__$1;
(statearr_59231_59257[(2)] = null);

(statearr_59231_59257[(1)] = (2));


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
});})(c__39642__auto___59243,out))
;
return ((function (switch__39530__auto__,c__39642__auto___59243,out){
return (function() {
var cljs$core$async$state_machine__39531__auto__ = null;
var cljs$core$async$state_machine__39531__auto____0 = (function (){
var statearr_59235 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59235[(0)] = cljs$core$async$state_machine__39531__auto__);

(statearr_59235[(1)] = (1));

return statearr_59235;
});
var cljs$core$async$state_machine__39531__auto____1 = (function (state_59209){
while(true){
var ret_value__39532__auto__ = (function (){try{while(true){
var result__39533__auto__ = switch__39530__auto__.call(null,state_59209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39533__auto__;
}
break;
}
}catch (e59236){if((e59236 instanceof Object)){
var ex__39534__auto__ = e59236;
var statearr_59237_59258 = state_59209;
(statearr_59237_59258[(5)] = ex__39534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59259 = state_59209;
state_59209 = G__59259;
continue;
} else {
return ret_value__39532__auto__;
}
break;
}
});
cljs$core$async$state_machine__39531__auto__ = function(state_59209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39531__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39531__auto____1.call(this,state_59209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39531__auto____0;
cljs$core$async$state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39531__auto____1;
return cljs$core$async$state_machine__39531__auto__;
})()
;})(switch__39530__auto__,c__39642__auto___59243,out))
})();
var state__39644__auto__ = (function (){var statearr_59238 = f__39643__auto__.call(null);
(statearr_59238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39642__auto___59243);

return statearr_59238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39644__auto__);
});})(c__39642__auto___59243,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args59260 = [];
var len__34447__auto___59334 = arguments.length;
var i__34448__auto___59335 = (0);
while(true){
if((i__34448__auto___59335 < len__34447__auto___59334)){
args59260.push((arguments[i__34448__auto___59335]));

var G__59336 = (i__34448__auto___59335 + (1));
i__34448__auto___59335 = G__59336;
continue;
} else {
}
break;
}

var G__59262 = args59260.length;
switch (G__59262) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args59260.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39642__auto___59338 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39642__auto___59338,out){
return (function (){
var f__39643__auto__ = (function (){var switch__39530__auto__ = ((function (c__39642__auto___59338,out){
return (function (state_59304){
var state_val_59305 = (state_59304[(1)]);
if((state_val_59305 === (7))){
var inst_59300 = (state_59304[(2)]);
var state_59304__$1 = state_59304;
var statearr_59306_59339 = state_59304__$1;
(statearr_59306_59339[(2)] = inst_59300);

(statearr_59306_59339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (1))){
var inst_59263 = [];
var inst_59264 = inst_59263;
var inst_59265 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_59304__$1 = (function (){var statearr_59307 = state_59304;
(statearr_59307[(7)] = inst_59264);

(statearr_59307[(8)] = inst_59265);

return statearr_59307;
})();
var statearr_59308_59340 = state_59304__$1;
(statearr_59308_59340[(2)] = null);

(statearr_59308_59340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (4))){
var inst_59268 = (state_59304[(9)]);
var inst_59268__$1 = (state_59304[(2)]);
var inst_59269 = (inst_59268__$1 == null);
var inst_59270 = cljs.core.not.call(null,inst_59269);
var state_59304__$1 = (function (){var statearr_59309 = state_59304;
(statearr_59309[(9)] = inst_59268__$1);

return statearr_59309;
})();
if(inst_59270){
var statearr_59310_59341 = state_59304__$1;
(statearr_59310_59341[(1)] = (5));

} else {
var statearr_59311_59342 = state_59304__$1;
(statearr_59311_59342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (15))){
var inst_59294 = (state_59304[(2)]);
var state_59304__$1 = state_59304;
var statearr_59312_59343 = state_59304__$1;
(statearr_59312_59343[(2)] = inst_59294);

(statearr_59312_59343[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (13))){
var state_59304__$1 = state_59304;
var statearr_59313_59344 = state_59304__$1;
(statearr_59313_59344[(2)] = null);

(statearr_59313_59344[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (6))){
var inst_59264 = (state_59304[(7)]);
var inst_59289 = inst_59264.length;
var inst_59290 = (inst_59289 > (0));
var state_59304__$1 = state_59304;
if(cljs.core.truth_(inst_59290)){
var statearr_59314_59345 = state_59304__$1;
(statearr_59314_59345[(1)] = (12));

} else {
var statearr_59315_59346 = state_59304__$1;
(statearr_59315_59346[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (3))){
var inst_59302 = (state_59304[(2)]);
var state_59304__$1 = state_59304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59304__$1,inst_59302);
} else {
if((state_val_59305 === (12))){
var inst_59264 = (state_59304[(7)]);
var inst_59292 = cljs.core.vec.call(null,inst_59264);
var state_59304__$1 = state_59304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59304__$1,(15),out,inst_59292);
} else {
if((state_val_59305 === (2))){
var state_59304__$1 = state_59304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59304__$1,(4),ch);
} else {
if((state_val_59305 === (11))){
var inst_59268 = (state_59304[(9)]);
var inst_59272 = (state_59304[(10)]);
var inst_59282 = (state_59304[(2)]);
var inst_59283 = [];
var inst_59284 = inst_59283.push(inst_59268);
var inst_59264 = inst_59283;
var inst_59265 = inst_59272;
var state_59304__$1 = (function (){var statearr_59316 = state_59304;
(statearr_59316[(11)] = inst_59282);

(statearr_59316[(7)] = inst_59264);

(statearr_59316[(12)] = inst_59284);

(statearr_59316[(8)] = inst_59265);

return statearr_59316;
})();
var statearr_59317_59347 = state_59304__$1;
(statearr_59317_59347[(2)] = null);

(statearr_59317_59347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (9))){
var inst_59264 = (state_59304[(7)]);
var inst_59280 = cljs.core.vec.call(null,inst_59264);
var state_59304__$1 = state_59304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59304__$1,(11),out,inst_59280);
} else {
if((state_val_59305 === (5))){
var inst_59268 = (state_59304[(9)]);
var inst_59265 = (state_59304[(8)]);
var inst_59272 = (state_59304[(10)]);
var inst_59272__$1 = f.call(null,inst_59268);
var inst_59273 = cljs.core._EQ_.call(null,inst_59272__$1,inst_59265);
var inst_59274 = cljs.core.keyword_identical_QMARK_.call(null,inst_59265,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_59275 = (inst_59273) || (inst_59274);
var state_59304__$1 = (function (){var statearr_59318 = state_59304;
(statearr_59318[(10)] = inst_59272__$1);

return statearr_59318;
})();
if(cljs.core.truth_(inst_59275)){
var statearr_59319_59348 = state_59304__$1;
(statearr_59319_59348[(1)] = (8));

} else {
var statearr_59320_59349 = state_59304__$1;
(statearr_59320_59349[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (14))){
var inst_59297 = (state_59304[(2)]);
var inst_59298 = cljs.core.async.close_BANG_.call(null,out);
var state_59304__$1 = (function (){var statearr_59322 = state_59304;
(statearr_59322[(13)] = inst_59297);

return statearr_59322;
})();
var statearr_59323_59350 = state_59304__$1;
(statearr_59323_59350[(2)] = inst_59298);

(statearr_59323_59350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (10))){
var inst_59287 = (state_59304[(2)]);
var state_59304__$1 = state_59304;
var statearr_59324_59351 = state_59304__$1;
(statearr_59324_59351[(2)] = inst_59287);

(statearr_59324_59351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59305 === (8))){
var inst_59264 = (state_59304[(7)]);
var inst_59268 = (state_59304[(9)]);
var inst_59272 = (state_59304[(10)]);
var inst_59277 = inst_59264.push(inst_59268);
var tmp59321 = inst_59264;
var inst_59264__$1 = tmp59321;
var inst_59265 = inst_59272;
var state_59304__$1 = (function (){var statearr_59325 = state_59304;
(statearr_59325[(7)] = inst_59264__$1);

(statearr_59325[(14)] = inst_59277);

(statearr_59325[(8)] = inst_59265);

return statearr_59325;
})();
var statearr_59326_59352 = state_59304__$1;
(statearr_59326_59352[(2)] = null);

(statearr_59326_59352[(1)] = (2));


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
});})(c__39642__auto___59338,out))
;
return ((function (switch__39530__auto__,c__39642__auto___59338,out){
return (function() {
var cljs$core$async$state_machine__39531__auto__ = null;
var cljs$core$async$state_machine__39531__auto____0 = (function (){
var statearr_59330 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59330[(0)] = cljs$core$async$state_machine__39531__auto__);

(statearr_59330[(1)] = (1));

return statearr_59330;
});
var cljs$core$async$state_machine__39531__auto____1 = (function (state_59304){
while(true){
var ret_value__39532__auto__ = (function (){try{while(true){
var result__39533__auto__ = switch__39530__auto__.call(null,state_59304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39533__auto__;
}
break;
}
}catch (e59331){if((e59331 instanceof Object)){
var ex__39534__auto__ = e59331;
var statearr_59332_59353 = state_59304;
(statearr_59332_59353[(5)] = ex__39534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59354 = state_59304;
state_59304 = G__59354;
continue;
} else {
return ret_value__39532__auto__;
}
break;
}
});
cljs$core$async$state_machine__39531__auto__ = function(state_59304){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39531__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39531__auto____1.call(this,state_59304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39531__auto____0;
cljs$core$async$state_machine__39531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39531__auto____1;
return cljs$core$async$state_machine__39531__auto__;
})()
;})(switch__39530__auto__,c__39642__auto___59338,out))
})();
var state__39644__auto__ = (function (){var statearr_59333 = f__39643__auto__.call(null);
(statearr_59333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39642__auto___59338);

return statearr_59333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39644__auto__);
});})(c__39642__auto___59338,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1510317442204