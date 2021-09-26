(this["webpackJsonpcra-pwa-template"]=this["webpackJsonpcra-pwa-template"]||[]).push([[0],{60:function(e){e.exports=JSON.parse('[{"id":1,"place":"google","code":420},{"id":2,"place":"github","code":1337},{"id":3,"place":"yahoo","code":669},{"id":4,"place":"apple","code":13313},{"id":5,"place":"b&k","code":80},{"id":6,"place":"sec","code":88}]')},67:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return i}));var o=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function i(t){var n,i;if("serviceWorker"in navigator&&(null===(n=e)||void 0===n||null===(i=Object({NODE_ENV:"production",PUBLIC_URL:"/info",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}))||void 0===i?void 0:i.PUBLIC_URL)){if(new URL("/info",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/info","/service-worker.js");o?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):a(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):a(e,t)}))}}function a(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}}).call(this,n(96))},81:function(e,t,n){},82:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var o,i=n(0),a=n.n(i),r=n(38),c=n.n(r),s=(n(81),n(82),n(83),n(84),n(85),n(86),n(29)),d=n(121),l=n(130),h=n(120),u=n(131),f=n(132),b=n(133),j=n(24),v=n(25),p=n(6),g=function(){function e(t){var n=this;Object(j.a)(this,e),this.root=void 0,this.currentPage=0,this.setPage=function(e){var t=e.page;n.currentPage=t},this.root=t,Object(p.e)(this,{hydrate:p.b,setPage:p.b,currentPage:p.f})}return Object(v.a)(e,[{key:"hydrate",value:function(e){this.currentPage=e.defaultPage}}]),e}(),m=n(68),O=Object(m.a)({palette:{mode:"light",primary:{main:"#d32f2f"},secondary:{main:"#263238"},background:{default:"#FAFAFA",paper:"#FFFFFF"},text:{primary:"rgba(0, 0, 0, 0.87)"}},shape:{borderRadius:4}}),x=Object(m.a)({palette:{mode:"dark",primary:{main:"#d32f2f"},secondary:{main:"#dcdcdc"},background:{default:"#1e1e1e",paper:"#2b2b2b"},text:{primary:"#FFFFFF"}},shape:{borderRadius:4}}),w=function(){function e(t){var n=this;Object(j.a)(this,e),this.root=void 0,this.mode=void 0,this.theme=void 0,this.setMode=function(e){var t=e.mode;n.mode=t,"light"===n.mode?n.theme=O:"dark"===n.mode&&(n.theme=x),localStorage.setItem("theme",n.mode)},this.root=t,Object(p.e)(this,{hydrate:p.b,mode:p.f,theme:p.f,setMode:p.b})}return Object(v.a)(e,[{key:"hydrate",value:function(e){this.setMode({mode:e.mode})}}]),e}(),y=n(60),S=function(){function e(t){Object(j.a)(this,e),this.root=void 0,this.codes=y,this.root=t,Object(p.e)(this,{hydrate:p.b,codes:p.f})}return Object(v.a)(e,[{key:"hydrate",value:function(e){}}]),e}(),k=function(){function e(){Object(j.a)(this,e),this.themeStore=void 0,this.codeStore=void 0,this.navigationStore=void 0,this.themeStore=new w(this),this.codeStore=new S(this),this.navigationStore=new g(this)}return Object(v.a)(e,[{key:"hydrate",value:function(e){this.themeStore.hydrate(e.themeStoreInit),this.codeStore.hydrate(e.codeStoreInit),this.navigationStore.hydrate(e.navigationStoreInit)}}]),e}(),F=n(2);Object(s.a)("undefined"===typeof window);var P=Object(i.createContext)(void 0);function C(){var e=Object(i.useContext)(P);if(void 0===e)throw new Error("useRootStore must be used within RootStoreProvider");return e}function I(e){var t=e.children,n=function(e){var t,n=null!==(t=o)&&void 0!==t?t:new k;e&&(console.log("LOG: store initializing data:",e),n.hydrate(e));if("undefined"===typeof window)return n;o||(o=n);return n}(e.hydrationData);return Object(F.jsxs)(P.Provider,{value:n,children:[" ",t," "]})}P.displayName="StoreContext";var W=n(63),E=n.n(W),L=n(64),N=n.n(L),T=n(122),_=n(123),R=n(124),A=n(125),D=n(126),U=n(127),B=n(128),M=Object(s.b)((function(){var e=C().codeStore,t=Object(p.h)(e.codes);if(0===t.length)return null;var n=Object.keys(t[0]).map((function(e){return{field:e,headerName:e}}));return Object(F.jsx)("div",{style:{width:"100%"},children:Object(F.jsx)(T.a,{style:{justifyContent:"center",display:"flex"},component:_.a,children:Object(F.jsxs)(R.a,{size:"small",sx:{minWidth:280,maxWidth:560},"aria-label":"codes table",children:[Object(F.jsx)(A.a,{children:Object(F.jsx)(D.a,{children:n.map((function(e){return Object(F.jsx)(U.a,{children:e.headerName},e.headerName)}))})}),Object(F.jsx)(B.a,{children:t.map((function(e){return Object(F.jsxs)(D.a,{children:[Object(F.jsx)(U.a,{align:"left",children:e.id}),Object(F.jsx)(U.a,{align:"left",children:e.place}),Object(F.jsx)(U.a,{align:"left",children:e.code})]},e.id)}))})]})})})})),H=n(65),z=n.n(H),J=n(66),K=n.n(J),G=n(51),V=n.n(G),$=n(61),q=n(14),Q=n(69),X=n.p+"static/media/build_time.2166e9b5.txt",Y=n(129),Z=function(){var e=Object(i.useState)(""),t=Object(q.a)(e,2),n=t[0],o=t[1],a=function(){var e=Object($.a)(V.a.mark((function e(){var t;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(X);case 2:return t=e.sent,e.t0=o,e.next=6,t.text();case 6:e.t1=e.sent,(0,e.t0)(e.t1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){a()}),[]),Object(F.jsxs)("h4",{children:[!n&&Object(F.jsx)(Y.a,{size:30}),n&&"Updated ".concat(Q.a(new Date(1e3*Number(n))))]})},ee=Object(s.b)((function(){var e=C().themeStore,t=e.theme,n=e.mode,o=e.setMode,i=C().navigationStore,a=i.currentPage,r=i.setPage;return Object(F.jsx)(d.a,{theme:t,children:Object(F.jsxs)("div",{className:"App",children:[Object(F.jsx)(l.a,{}),Object(F.jsx)(Z,{}),0===a&&Object(F.jsx)(M,{}),Object(F.jsxs)(h.a,{position:"fixed",color:"primary",sx:{width:"100%",top:"auto",bottom:0,display:"flex"},children:[Object(F.jsxs)(u.a,{sx:{width:"100%"},showLabels:!0,value:a,onChange:function(e,t){r({page:t})},children:[Object(F.jsx)(f.a,{label:"Codes",icon:Object(F.jsx)(E.a,{})}),Object(F.jsx)(f.a,{label:"Home",icon:Object(F.jsx)(N.a,{})})]}),Object(F.jsx)(h.a,{sx:{marginLeft:"auto",display:"flex",justifyContent:"center",alignItems:"center",top:0,bottom:0,right:0,padding:"0px 4px",backgroundColor:"background.paper"},children:Object(F.jsxs)(b.a,{value:"check",onChange:function(){o({mode:"dark"===n?"light":"dark"})},children:["light"===n&&Object(F.jsx)(z.a,{}),"dark"===n&&Object(F.jsx)(K.a,{})]})})]})]})})})),te=n(67),ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,134)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),o(e),i(e),a(e),r(e)}))},oe={themeStoreInit:{mode:localStorage.getItem("theme")||"dark"},codeStoreInit:{},navigationStoreInit:{defaultPage:0}};Object(p.c)({useProxies:"never"}),c.a.render(Object(F.jsx)(a.a.StrictMode,{children:Object(F.jsx)(I,{hydrationData:oe,children:Object(F.jsx)(ee,{})})}),document.getElementById("root")),te.a(),ne()}},[[97,1,2]]]);
//# sourceMappingURL=main.cf43982e.chunk.js.map