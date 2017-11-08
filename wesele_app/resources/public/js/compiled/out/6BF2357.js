goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('wesele_app.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__54244__delegate = function (x){
if(cljs.core.truth_(wesele_app.core.mount_root)){
return cljs.core.apply.call(null,wesele_app.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'wesele-app.core/mount-root' is missing");
}
};
var G__54244 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__54245__i = 0, G__54245__a = new Array(arguments.length -  0);
while (G__54245__i < G__54245__a.length) {G__54245__a[G__54245__i] = arguments[G__54245__i + 0]; ++G__54245__i;}
  x = new cljs.core.IndexedSeq(G__54245__a,0);
} 
return G__54244__delegate.call(this,x);};
G__54244.cljs$lang$maxFixedArity = 0;
G__54244.cljs$lang$applyTo = (function (arglist__54246){
var x = cljs.core.seq(arglist__54246);
return G__54244__delegate(x);
});
G__54244.cljs$core$IFn$_invoke$arity$variadic = G__54244__delegate;
return G__54244;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
