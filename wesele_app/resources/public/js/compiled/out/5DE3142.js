goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('wesele_app.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__54280__delegate = function (x){
if(cljs.core.truth_(wesele_app.core.mount_root)){
return cljs.core.apply.call(null,wesele_app.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'wesele-app.core/mount-root' is missing");
}
};
var G__54280 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__54281__i = 0, G__54281__a = new Array(arguments.length -  0);
while (G__54281__i < G__54281__a.length) {G__54281__a[G__54281__i] = arguments[G__54281__i + 0]; ++G__54281__i;}
  x = new cljs.core.IndexedSeq(G__54281__a,0);
} 
return G__54280__delegate.call(this,x);};
G__54280.cljs$lang$maxFixedArity = 0;
G__54280.cljs$lang$applyTo = (function (arglist__54282){
var x = cljs.core.seq(arglist__54282);
return G__54280__delegate(x);
});
G__54280.cljs$core$IFn$_invoke$arity$variadic = G__54280__delegate;
return G__54280;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
