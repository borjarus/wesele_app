goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('wesele_app.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__54748__delegate = function (x){
if(cljs.core.truth_(wesele_app.core.mount_root)){
return cljs.core.apply.call(null,wesele_app.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'wesele-app.core/mount-root' is missing");
}
};
var G__54748 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__54749__i = 0, G__54749__a = new Array(arguments.length -  0);
while (G__54749__i < G__54749__a.length) {G__54749__a[G__54749__i] = arguments[G__54749__i + 0]; ++G__54749__i;}
  x = new cljs.core.IndexedSeq(G__54749__a,0);
} 
return G__54748__delegate.call(this,x);};
G__54748.cljs$lang$maxFixedArity = 0;
G__54748.cljs$lang$applyTo = (function (arglist__54750){
var x = cljs.core.seq(arglist__54750);
return G__54748__delegate(x);
});
G__54748.cljs$core$IFn$_invoke$arity$variadic = G__54748__delegate;
return G__54748;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
