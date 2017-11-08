goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('wesele_app.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__54346__delegate = function (x){
if(cljs.core.truth_(wesele_app.core.mount_root)){
return cljs.core.apply.call(null,wesele_app.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'wesele-app.core/mount-root' is missing");
}
};
var G__54346 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__54347__i = 0, G__54347__a = new Array(arguments.length -  0);
while (G__54347__i < G__54347__a.length) {G__54347__a[G__54347__i] = arguments[G__54347__i + 0]; ++G__54347__i;}
  x = new cljs.core.IndexedSeq(G__54347__a,0);
} 
return G__54346__delegate.call(this,x);};
G__54346.cljs$lang$maxFixedArity = 0;
G__54346.cljs$lang$applyTo = (function (arglist__54348){
var x = cljs.core.seq(arglist__54348);
return G__54346__delegate(x);
});
G__54346.cljs$core$IFn$_invoke$arity$variadic = G__54346__delegate;
return G__54346;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
