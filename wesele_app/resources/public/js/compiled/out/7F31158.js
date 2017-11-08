goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('wesele_app.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__55668__delegate = function (x){
if(cljs.core.truth_(wesele_app.core.mount_root)){
return cljs.core.apply.call(null,wesele_app.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'wesele-app.core/mount-root' is missing");
}
};
var G__55668 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__55669__i = 0, G__55669__a = new Array(arguments.length -  0);
while (G__55669__i < G__55669__a.length) {G__55669__a[G__55669__i] = arguments[G__55669__i + 0]; ++G__55669__i;}
  x = new cljs.core.IndexedSeq(G__55669__a,0);
} 
return G__55668__delegate.call(this,x);};
G__55668.cljs$lang$maxFixedArity = 0;
G__55668.cljs$lang$applyTo = (function (arglist__55670){
var x = cljs.core.seq(arglist__55670);
return G__55668__delegate(x);
});
G__55668.cljs$core$IFn$_invoke$arity$variadic = G__55668__delegate;
return G__55668;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));