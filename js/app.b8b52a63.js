(function(e){function t(t){for(var r,l,a=t[0],s=t[1],i=t[2],p=0,f=[];p<a.length;p++)l=a[p],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&f.push(o[l][0]),o[l]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);c&&c(t);while(f.length)f.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(u.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},u=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/vueposts/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var i=0;i<a.length;i++)t(a[i]);var c=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Blog",{attrs:{bejegyzesek:e.posts}})],1)},u=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.bejegyzesek,(function(e){return n("Bejegyzes",{key:e.title})})),1)},a=[],s=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2"),n("div")])}],c={},p=c,f=n("2877"),d=Object(f["a"])(p,s,i,!1,null,null,null),b=d.exports,y={components:{Bejegyzes:b},props:["bejegyzesek"]},v=y,h=Object(f["a"])(v,l,a,!1,null,null,null),g=h.exports,j={name:"App",components:{Blog:g},data:function(){return{posts:[{title:"Post 1",body:"Ez a törzse az első postnak"},{title:"Post 2",body:"Ez a törzse az második postnak"},{title:"Post 3",body:"Ez a törzse az harmadik postnak"},{title:"Post 4",body:"Ez a törzse az negyedik postnak"}]}}},m=j,z=(n("034f"),Object(f["a"])(m,o,u,!1,null,null,null)),_=z.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(_)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.b8b52a63.js.map