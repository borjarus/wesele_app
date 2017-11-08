goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('wesele_app.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__56107__delegate = function (x){
if(cljs.core.truth_(wesele_app.core.mount_root)){
return cljs.core.apply.call(null,wesele_app.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'wesele-app.core/mount-root' is missing");
}
};
var G__56107 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__56108__i = 0, G__56108__a = new Array(arguments.length -  0);
while (G__56108__i < G__56108__a.length) {G__56108__a[G__56108__i] = arguments[G__56108__i + 0]; ++G__56108__i;}
  x = new cljs.core.IndexedSeq(G__56108__a,0);
} 
return G__56107__delegate.call(this,x);};
G__56107.cljs$lang$maxFixedArity = 0;
G__56107.cljs$lang$applyTo = (function (arglist__56109){
var x = cljs.core.seq(arglist__56109);
return G__56107__delegate(x);
});
G__56107.cljs$core$IFn$_invoke$arity$variadic = G__56107__delegate;
return G__56107;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
