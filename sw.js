if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const d=e=>i(e,n),f={module:{uri:n},exports:r,require:d};s[n]=Promise.all(a.map((e=>f[e]||d(e)))).then((e=>(c(...e),r)))}}define(["./workbox-e8110d74"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vibemap"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_plugin-vue_export-helper-DlAUqK2U.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/AtkinsonHyperlegible-Bold-NAvdQI_r.woff",revision:"1c699d558728e2aedbdd8e5e3f743c1b"},{url:"assets/AtkinsonHyperlegible-BoldItalic-ks3W2A-I.woff",revision:"372e9df54a015b57220ab3768be38cfd"},{url:"assets/AtkinsonHyperlegible-Italic-BsluYYZB.woff",revision:"4ca2353c59b6dbcd1d3987016dd09146"},{url:"assets/AtkinsonHyperlegible-Regular-BTX3i_Gi.woff",revision:"2b43c1e84da2c859623e53d2b4328ce4"},{url:"assets/ErrorNotFound-Cd7t7RGn.js",revision:"c0600629f1c3f005e3fa6b66a627ff97"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa-Dr0goTwe.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ-D-x-0Q06.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/HelpPage-BkK7uiAx.js",revision:"1199928ccbb1d4c87c11cd6f1b80e4d8"},{url:"assets/index-Drha5ktW.css",revision:"e7837b5b0bca167c580ecc8f2e7981ce"},{url:"assets/index-Dz9lxbrD.js",revision:"3788deafa1b425a7eaa721e5f499540c"},{url:"assets/IndexPage-Dfum8sjd.js",revision:"d30211a6d564c4e391336666fd2c8b78"},{url:"assets/Karla-r6Jbx9kQ.woff",revision:"b9ec71ebc99c76c935d61bf62c062741"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuaabVmUiAw-CNa4tw4G.woff",revision:"2d29775851b8463053deb35b21b5d5c8"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWub2bVmUiAw-CHKg1YId.woff",revision:"be27354f07345fafe8dfc84117bbafd4"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbFmUiAw-yBxCyPWP.woff",revision:"c8cea161abfb039c97a11c26dff2f546"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbVmUiAw-3fZ6d7DD.woff",revision:"585ad11be98f8f044923a71898ddfde6"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuYjalmUiAw-BepdiOnY.woff",revision:"2cadc82e8484ccac69caddc849f603be"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuZtalmUiAw-4ZhHFPot.woff",revision:"51c41b1c2668c088c7cce3fa116396e1"},{url:"assets/MainLayout-qlf79YJy.js",revision:"09fbcc185c2d35d420a0517c07911941"},{url:"assets/MyRatingsPage-BpyRkUTm.js",revision:"e1efc37468a33cf43776b5d8f7ae7ab8"},{url:"assets/private.use-form-2Z8g8Mp6.js",revision:"2f02b5689b9af67c5a36147ade2e3569"},{url:"assets/ProfilePage-DL6G1OQc.js",revision:"c4f86fc6464dfd15f7c940b9f9fc531c"},{url:"assets/QBtn-BPgxHTU1.js",revision:"0d78d8fa8014c4c7fa8761d65831a0b8"},{url:"assets/QCard-CUMn9dlV.js",revision:"1c9f9c97989b7a1099af4501cf8bbb27"},{url:"assets/QCheckbox-D7BXA2IW.js",revision:"5f75a5ac8585db2b2cac0ad11005032c"},{url:"assets/QFile-B1MSMEHq.js",revision:"c8990aad01c64a576d95562be4233029"},{url:"assets/QIcon-BSVW8zCo.js",revision:"8e3175944b89dd748ac0b050b005141c"},{url:"assets/QInput-DHU43OFY.js",revision:"ce08b3986d7f762e4bbfab39617572e9"},{url:"assets/QItem-BKEQmXzW.js",revision:"0d0e75931897abd1b2000ef33a12335e"},{url:"assets/QPage-DBveHP0s.js",revision:"803c280f4a95ad77d1e28aedf2432f20"},{url:"assets/QRating-CsWE0Nvy.js",revision:"bfc7a580f56adf9c38942ee7dace577e"},{url:"assets/QSeparator-CM8StwiZ.js",revision:"bac80d84851d0649305e31d842f3adc0"},{url:"assets/QToggle-D6Seuu_-.js",revision:"611078cac2d12a9ec7a93cde886d8085"},{url:"assets/SendFeedbackPage-CC7C7xBv.js",revision:"3321d0836a92b8fb5decd570cc518029"},{url:"assets/SettingsPage-d4lXrANO.js",revision:"02e69ec8aa463e1cfc7ae97bde11f953"},{url:"assets/SignupPage-Crh58WwO.js",revision:"0a4400c7ea93fe4042b0741c3a389edb"},{url:"assets/use-checkbox-Cydlx8F7.js",revision:"2fc86efa3668b5497dd4303f9cad5492"},{url:"assets/use-dark-4-CSjMhO.js",revision:"96c8ab22d5af235a1d2443e6bbf4cbbb"},{url:"assets/vibemap-logo-Bh8b4tYI.svg",revision:"2af8b8bdbc6c5cfbab6abe984457a136"},{url:"favicon.ico",revision:"ad165c7e5942684e688393722ad330ce"},{url:"icons/android-chrome-192x192.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/android-chrome-512x512.png",revision:"25bb938369629ae8702f96515e4c0ba4"},{url:"icons/apple-icon-120x120.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/apple-icon-152x152.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/apple-icon-167x167.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/apple-touch-icon.png",revision:"8977eecfbbb5767ee7a6191bf07b6f11"},{url:"icons/favicon-128x128.png",revision:"49e5f91199c5b33e0f7c23defaa869be"},{url:"icons/favicon-16x16.png",revision:"8d680e551e4e78831fe69a96f1e9ea18"},{url:"icons/favicon-32x32.png",revision:"49e5f91199c5b33e0f7c23defaa869be"},{url:"icons/favicon-96x96.png",revision:"49e5f91199c5b33e0f7c23defaa869be"},{url:"icons/favicon.ico",revision:"ad165c7e5942684e688393722ad330ce"},{url:"icons/icon-128x128.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/icon-192x192.png",revision:"46a5fec6b8c7ba200fba40b8057326e3"},{url:"icons/icon-256x256.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/icon-384x384.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/icon-512x512.png",revision:"e25d80b4b81574569a18ca1916b6e216"},{url:"icons/ms-icon-144x144.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/safari-pinned-tab.svg",revision:"2af8b8bdbc6c5cfbab6abe984457a136"},{url:"icons/site.webmanifest",revision:"053100cb84a50d2ae7f5492f7dd7f25e"},{url:"icons/vibemap180x180.png",revision:"4ac3d1488b1d6ce1905380ae4ffbb74d"},{url:"index.html",revision:"95f54c07f157d4aa39f51ae07ee85df8"},{url:"manifest.json",revision:"5feda0c31f833ce6fe23a72f64fd3ffc"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\\.js$/]}))}));
