goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('wesele_app.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__54506__delegate = function (x){
if(cljs.core.truth_(wesele_app.core.mount_root)){
return cljs.core.apply.call(null,wesele_app.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'wesele-app.core/mount-root' is missing");
}
};
var G__54506 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__54507__i = 0, G__54507__a = new Array(arguments.length -  0);
while (G__54507__i < G__54507__a.length) {G__54507__a[G__54507__i] = arguments[G__54507__i + 0]; ++G__54507__i;}
  x = new cljs.core.IndexedSeq(G__54507__a,0);
} 
return G__54506__delegate.call(this,x);};
G__54506.cljs$lang$maxFixedArity = 0;
G__54506.cljs$lang$applyTo = (function (arglist__54508){
var x = cljs.core.seq(arglist__54508);
return G__54506__delegate(x);
});
G__54506.cljs$core$IFn$_invoke$arity$variadic = G__54506__delegate;
return G__54506;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
