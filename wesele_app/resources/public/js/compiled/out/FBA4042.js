goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('wesele_app.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__54180__delegate = function (x){
if(cljs.core.truth_(wesele_app.core.mount_root)){
return cljs.core.apply.call(null,wesele_app.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'wesele-app.core/mount-root' is missing");
}
};
var G__54180 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__54181__i = 0, G__54181__a = new Array(arguments.length -  0);
while (G__54181__i < G__54181__a.length) {G__54181__a[G__54181__i] = arguments[G__54181__i + 0]; ++G__54181__i;}
  x = new cljs.core.IndexedSeq(G__54181__a,0);
} 
return G__54180__delegate.call(this,x);};
G__54180.cljs$lang$maxFixedArity = 0;
G__54180.cljs$lang$applyTo = (function (arglist__54182){
var x = cljs.core.seq(arglist__54182);
return G__54180__delegate(x);
});
G__54180.cljs$core$IFn$_invoke$arity$variadic = G__54180__delegate;
return G__54180;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
