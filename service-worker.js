!function(e){var t={};function o(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(i,r,function(t){return e[t]}.bind(null,r));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=18)}({18:function(e,t){importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js"),workbox&&(workbox.setConfig({debug:!1}),workbox.core.setCacheNameDetails({prefix:"liga-bola",suffix:"",precache:"app",runtime:"runtime"}),workbox.precaching.precacheAndRoute([{url:"/"},{url:"index.html"},{url:"manifest.json"},{url:"service-worker.js"},{url:"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"},{url:"dist/js/bundle.js"},{url:"dist/css/bundle.css"},{url:"dist/icon/icon-32x32.png"},{url:"dist/icon/icon-57x57.png"},{url:"dist/icon/icon-60x60.png"},{url:"dist/icon/icon-72x72.png"},{url:"dist/icon/icon-76x76.png"},{url:"dist/icon/icon-96x96.png"},{url:"dist/icon/icon-114x114.png"},{url:"dist/icon/icon-120x120.png"},{url:"dist/icon/icon-128x128.png"},{url:"dist/icon/icon-144x144.png"},{url:"dist/icon/icon-152x152.png"},{url:"dist/icon/icon-180x180.png"},{url:"dist/icon/icon-192x192.png"},{url:"dist/icon/icon-384x384.png"},{url:"dist/icon/icon-512x512.png"},{url:"page/beranda.html"},{url:"page/navbar.html"},{url:"page/team.html"},{url:"page/favorite.html"}]),workbox.routing.registerRoute(new RegExp("/page/"),workbox.strategies.staleWhileRevalidate({cacheName:"liga-app"})),workbox.routing.registerRoute(new RegExp("https://api.football-data.org/v2"),workbox.strategies.cacheFirst({cacheName:"liga-api"})),workbox.routing.registerRoute(/.+\.svg$/,workbox.strategies.cacheFirst({cacheName:"liga-image",plugins:[new workbox.cacheableResponse.Plugin({statuses:[0,200]}),new workbox.expiration.Plugin({maxEntries:60,maxAgeSeconds:345600})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,workbox.strategies.staleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,workbox.strategies.cacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.cacheableResponse.Plugin({statuses:[0,200]}),new workbox.expiration.Plugin({maxEntries:30,maxAgeSeconds:2592e3})]}))),self.addEventListener("push",(function(e){var t={body:e.data?e.data.text():"Push Message without payload",icon:"dist/icon/icon-72x72.png",vibrate:[100,50,100],data:{dateOfArrival:Date.now(),primaryKey:1},renotify:!0,tag:"pesan"};e.waitUntil(self.registration.showNotification("push",t))}))}});