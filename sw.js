if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const f=e=>i(e,n),o={module:{uri:n},exports:r,require:f};s[n]=Promise.all(a.map((e=>o[e]||f(e)))).then((e=>(c(...e),r)))}}define(["./workbox-e8110d74"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vibemap"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_plugin-vue_export-helper-DlAUqK2U.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/AtkinsonHyperlegible-Bold-NAvdQI_r.woff",revision:"1c699d558728e2aedbdd8e5e3f743c1b"},{url:"assets/AtkinsonHyperlegible-BoldItalic-ks3W2A-I.woff",revision:"372e9df54a015b57220ab3768be38cfd"},{url:"assets/AtkinsonHyperlegible-Italic-BsluYYZB.woff",revision:"4ca2353c59b6dbcd1d3987016dd09146"},{url:"assets/AtkinsonHyperlegible-Regular-BTX3i_Gi.woff",revision:"2b43c1e84da2c859623e53d2b4328ce4"},{url:"assets/ErrorNotFound-Bp6V7inb.js",revision:"3f6794f9ba617fde49edeb0cb88530b2"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa-Dr0goTwe.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ-D-x-0Q06.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/HelpPage-DFUCBV93.js",revision:"b3d5630991c85387c850984a7be2dd1d"},{url:"assets/index-Drha5ktW.css",revision:"e7837b5b0bca167c580ecc8f2e7981ce"},{url:"assets/index-mL-OW5fY.js",revision:"8cea1da634f66396f98ec745c3c44c80"},{url:"assets/IndexPage-C3Cl7DCi.js",revision:"fecae0f8a0b0f65e1ed6b931b2fe0dea"},{url:"assets/Karla-r6Jbx9kQ.woff",revision:"b9ec71ebc99c76c935d61bf62c062741"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuaabVmUiAw-CNa4tw4G.woff",revision:"2d29775851b8463053deb35b21b5d5c8"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWub2bVmUiAw-CHKg1YId.woff",revision:"be27354f07345fafe8dfc84117bbafd4"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbFmUiAw-yBxCyPWP.woff",revision:"c8cea161abfb039c97a11c26dff2f546"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbVmUiAw-3fZ6d7DD.woff",revision:"585ad11be98f8f044923a71898ddfde6"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuYjalmUiAw-BepdiOnY.woff",revision:"2cadc82e8484ccac69caddc849f603be"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuZtalmUiAw-4ZhHFPot.woff",revision:"51c41b1c2668c088c7cce3fa116396e1"},{url:"assets/MainLayout-BS3tunAu.js",revision:"4ebe8800cf01e815fcf9760bda0844a4"},{url:"assets/MyRatingsPage-BGpSjjOr.js",revision:"018ffa5a01a6bfcb347121df5690d3a4"},{url:"assets/private.use-form-DMO1d8K8.js",revision:"aa50fa49457c39ddc0976c1fd18f87b8"},{url:"assets/ProfilePage-15ONgZiS.js",revision:"cc8fbe8bd53d1325270641d1c51ccf05"},{url:"assets/QBtn-rlmCikKi.js",revision:"4ec2e3c3577ff571a9697f40e852a640"},{url:"assets/QCard-X4AEcnQZ.js",revision:"0fdeb9e3e5f5a2d3e0fa337d770b7f44"},{url:"assets/QCheckbox-CBosCoxc.js",revision:"807c93e78d988f70fc8cc03b43ddfe9c"},{url:"assets/QFile-BLJfvm1p.js",revision:"896a4fe6cc83766c9312745b0f4c1028"},{url:"assets/QIcon-euyJEfxo.js",revision:"04192e9e19b9b1ce153be66ca1afc231"},{url:"assets/QInput-DI48b0_W.js",revision:"ab21f9f2447befcf8596fd4b2ad8c234"},{url:"assets/QItem-C0ed9cwS.js",revision:"1e9f79c2153f2e0c7f7df590f57c2974"},{url:"assets/QPage-klmwBXbY.js",revision:"305aca3bfaa2e6af85459490c18b84b2"},{url:"assets/QRating-C_CSJoM-.js",revision:"a6858dfeb766aeda115faa4aeb14ccf1"},{url:"assets/QSeparator-Cc5l2rgk.js",revision:"9e1712494da91e01b83f617727f38341"},{url:"assets/QToggle-Ch0ngmW6.js",revision:"7250049b9d8785b81d171b4bf0956347"},{url:"assets/SendFeedbackPage-hPJXg81H.js",revision:"596975cb34b07e4b8b711685d8e6f312"},{url:"assets/SettingsPage-wXWTOUgj.js",revision:"095380e0724851273ee0bdafd8f425ad"},{url:"assets/SignupPage-BMfUxn1D.js",revision:"637153849c1f73a516f8b0093ae27d1c"},{url:"assets/use-checkbox-DGE0srQ1.js",revision:"537d02dcee102a718ca6a9e35e75b40c"},{url:"assets/use-dark-CLwnNIDe.js",revision:"168231521292eb41c9e66449094e597f"},{url:"assets/vibemap-logo-Bh8b4tYI.svg",revision:"2af8b8bdbc6c5cfbab6abe984457a136"},{url:"favicon.ico",revision:"ad165c7e5942684e688393722ad330ce"},{url:"icons/android-chrome-192x192.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/android-chrome-512x512.png",revision:"25bb938369629ae8702f96515e4c0ba4"},{url:"icons/apple-icon-120x120.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/apple-icon-152x152.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/apple-icon-167x167.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/apple-touch-icon.png",revision:"8977eecfbbb5767ee7a6191bf07b6f11"},{url:"icons/favicon-128x128.png",revision:"49e5f91199c5b33e0f7c23defaa869be"},{url:"icons/favicon-16x16.png",revision:"8d680e551e4e78831fe69a96f1e9ea18"},{url:"icons/favicon-32x32.png",revision:"49e5f91199c5b33e0f7c23defaa869be"},{url:"icons/favicon-96x96.png",revision:"49e5f91199c5b33e0f7c23defaa869be"},{url:"icons/favicon.ico",revision:"ad165c7e5942684e688393722ad330ce"},{url:"icons/icon-128x128.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/icon-192x192.png",revision:"46a5fec6b8c7ba200fba40b8057326e3"},{url:"icons/icon-256x256.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/icon-384x384.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/icon-512x512.png",revision:"e25d80b4b81574569a18ca1916b6e216"},{url:"icons/ms-icon-144x144.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/safari-pinned-tab.svg",revision:"2af8b8bdbc6c5cfbab6abe984457a136"},{url:"icons/site.webmanifest",revision:"053100cb84a50d2ae7f5492f7dd7f25e"},{url:"icons/vibemap180x180.png",revision:"4ac3d1488b1d6ce1905380ae4ffbb74d"},{url:"index.html",revision:"fa232a95e8679aa730204ec0f21cfc3b"},{url:"manifest.json",revision:"5feda0c31f833ce6fe23a72f64fd3ffc"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\\.js$/]}))}));
