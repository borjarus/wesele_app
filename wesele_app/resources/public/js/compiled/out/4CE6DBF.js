goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('wesele_app.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__54192__delegate = function (x){
if(cljs.core.truth_(wesele_app.core.mount_root)){
return cljs.core.apply.call(null,wesele_app.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'wesele-app.core/mount-root' is missing");
}
};
var G__54192 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__54193__i = 0, G__54193__a = new Array(arguments.length -  0);
while (G__54193__i < G__54193__a.length) {G__54193__a[G__54193__i] = arguments[G__54193__i + 0]; ++G__54193__i;}
  x = new cljs.core.IndexedSeq(G__54193__a,0);
} 
return G__54192__delegate.call(this,x);};
G__54192.cljs$lang$maxFixedArity = 0;
G__54192.cljs$lang$applyTo = (function (arglist__54194){
var x = cljs.core.seq(arglist__54194);
return G__54192__delegate(x);
});
G__54192.cljs$core$IFn$_invoke$arity$variadic = G__54192__delegate;
return G__54192;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
