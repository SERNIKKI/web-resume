if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,c)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const t={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return t;default:return e(s)}}))).then((e=>{const s=c(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-b6ef96bd"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.68ee07f6.css",revision:"00b759b5ed593f386ce2e8fbe24aba99"},{url:"assets/index.b46196c9.js",revision:"596e8e7b9b20495b3e3443c5e46576a8"},{url:"assets/resume.7a3839e9.js",revision:"afb506573158ace06d133b28718b2c87"},{url:"assets/resume.f6ab71a8.css",revision:"c94c7803986f1d3188bff00e99edccdc"},{url:"assets/vendor.a2300da8.js",revision:"ec479b68aadd159f6e0a4d90e50a2aff"},{url:"css/bootstrap.min.css",revision:"a15c2ac3234aa8f6064ef9c1f7383c37"},{url:"index.html",revision:"f32b17c7f905ee6c47fa6a6b380c5756"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map