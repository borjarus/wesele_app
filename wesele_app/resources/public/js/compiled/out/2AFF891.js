goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('wesele_app.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__54700__delegate = function (x){
if(cljs.core.truth_(wesele_app.core.mount_root)){
return cljs.core.apply.call(null,wesele_app.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'wesele-app.core/mount-root' is missing");
}
};
var G__54700 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__54701__i = 0, G__54701__a = new Array(arguments.length -  0);
while (G__54701__i < G__54701__a.length) {G__54701__a[G__54701__i] = arguments[G__54701__i + 0]; ++G__54701__i;}
  x = new cljs.core.IndexedSeq(G__54701__a,0);
} 
return G__54700__delegate.call(this,x);};
G__54700.cljs$lang$maxFixedArity = 0;
G__54700.cljs$lang$applyTo = (function (arglist__54702){
var x = cljs.core.seq(arglist__54702);
return G__54700__delegate(x);
});
G__54700.cljs$core$IFn$_invoke$arity$variadic = G__54700__delegate;
return G__54700;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
