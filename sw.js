if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let n={};const o=e=>i(e,r),d={module:{uri:r},exports:n,require:o};s[r]=Promise.all(a.map((e=>d[e]||o(e)))).then((e=>(c(...e),n)))}}define(["./workbox-e8110d74"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vibemap"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_plugin-vue_export-helper-DlAUqK2U.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/AtkinsonHyperlegible-Bold-NAvdQI_r.woff",revision:"1c699d558728e2aedbdd8e5e3f743c1b"},{url:"assets/AtkinsonHyperlegible-BoldItalic-ks3W2A-I.woff",revision:"372e9df54a015b57220ab3768be38cfd"},{url:"assets/AtkinsonHyperlegible-Italic-BsluYYZB.woff",revision:"4ca2353c59b6dbcd1d3987016dd09146"},{url:"assets/AtkinsonHyperlegible-Regular-BTX3i_Gi.woff",revision:"2b43c1e84da2c859623e53d2b4328ce4"},{url:"assets/ErrorNotFound-pFr39UQD.js",revision:"163942352f74d3393b50469d0332852c"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa-Dr0goTwe.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ-D-x-0Q06.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/HelpPage-BoQQPD3Z.js",revision:"2ca6aa33af28bf961a5623a66c6f7ab7"},{url:"assets/index-Drha5ktW.css",revision:"e7837b5b0bca167c580ecc8f2e7981ce"},{url:"assets/index-ljKcpeNp.js",revision:"b652271d25ee0a82990db0a1150f7964"},{url:"assets/IndexPage-bec6BQCe.js",revision:"20a73105e68157ab87c279dd5f415c91"},{url:"assets/Karla-r6Jbx9kQ.woff",revision:"b9ec71ebc99c76c935d61bf62c062741"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuaabVmUiAw-CNa4tw4G.woff",revision:"2d29775851b8463053deb35b21b5d5c8"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWub2bVmUiAw-CHKg1YId.woff",revision:"be27354f07345fafe8dfc84117bbafd4"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbFmUiAw-yBxCyPWP.woff",revision:"c8cea161abfb039c97a11c26dff2f546"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbVmUiAw-3fZ6d7DD.woff",revision:"585ad11be98f8f044923a71898ddfde6"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuYjalmUiAw-BepdiOnY.woff",revision:"2cadc82e8484ccac69caddc849f603be"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuZtalmUiAw-4ZhHFPot.woff",revision:"51c41b1c2668c088c7cce3fa116396e1"},{url:"assets/MainLayout-C4BkLKfr.js",revision:"7b47fdd09d141cb0372de3b11faafe24"},{url:"assets/MyRatingsPage-Bt6m82_V.js",revision:"153f2ced98a965b7e222a6e8012eddc5"},{url:"assets/private.use-form-Bzh08fZ5.js",revision:"dc87ef230bc8ad7b7a8d6e07a49c7680"},{url:"assets/ProfilePage-DGi-JjTx.js",revision:"a833db648278b5a801852efc18f486b0"},{url:"assets/QBtn-C0DVjVyT.js",revision:"78f3b8d893747468ef35b439cf2c6102"},{url:"assets/QCard-F5eu7sWw.js",revision:"b31c6ea379d12418c94fb5f8d65d8f11"},{url:"assets/QCheckbox-CIL6cDIl.js",revision:"34ceef5dfba40e664e234a1b6f5151a5"},{url:"assets/QFile-QBm9QoWt.js",revision:"066e94350a9ac5cd8a8ce26937384faa"},{url:"assets/QIcon-CC88ni2r.js",revision:"0eb3983de4b451c73caadfe63c81af43"},{url:"assets/QInput-DMP0uRei.js",revision:"3143873ea223389e33f5a3d607642e6c"},{url:"assets/QItem-DoqvYhHF.js",revision:"6454aca8ffa6c118c286d97ad016fb6c"},{url:"assets/QPage-0bgjLzIE.js",revision:"bd1d3c9c7583dbb5aed70bf0c7b78f34"},{url:"assets/QRating-D3-4buL1.js",revision:"39ecd950a81be712a101672445aa9678"},{url:"assets/QSeparator-90AduXDE.js",revision:"6927e1043a93bcd08090d154a56b6988"},{url:"assets/QToggle-BiJb7dFe.js",revision:"4d09caa706e68f73ff7cf692126b1833"},{url:"assets/SendFeedbackPage-Dp2O45AB.js",revision:"c040cbd95966c5a4aec17823412ec343"},{url:"assets/SettingsPage-Dhf2-aG0.js",revision:"a72e1e7ba77cd1221dbb946ddb4a543a"},{url:"assets/SignupPage-B38Syi9d.js",revision:"d3709c2680957b0cdcf195684adce05a"},{url:"assets/use-checkbox-DczWiQqP.js",revision:"fce15735b8fba95b905c75f36220b977"},{url:"assets/use-dark-B7vz5im4.js",revision:"5bae8bfa8b3f1ee9710366dc009d0141"},{url:"assets/vibemap-logo-Bh8b4tYI.svg",revision:"2af8b8bdbc6c5cfbab6abe984457a136"},{url:"favicon.ico",revision:"ad165c7e5942684e688393722ad330ce"},{url:"icons/android-chrome-192x192.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/android-chrome-512x512.png",revision:"25bb938369629ae8702f96515e4c0ba4"},{url:"icons/apple-icon-120x120.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/apple-icon-152x152.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/apple-icon-167x167.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/apple-touch-icon.png",revision:"8977eecfbbb5767ee7a6191bf07b6f11"},{url:"icons/favicon-128x128.png",revision:"49e5f91199c5b33e0f7c23defaa869be"},{url:"icons/favicon-16x16.png",revision:"8d680e551e4e78831fe69a96f1e9ea18"},{url:"icons/favicon-32x32.png",revision:"49e5f91199c5b33e0f7c23defaa869be"},{url:"icons/favicon-96x96.png",revision:"49e5f91199c5b33e0f7c23defaa869be"},{url:"icons/favicon.ico",revision:"ad165c7e5942684e688393722ad330ce"},{url:"icons/icon-128x128.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/icon-192x192.png",revision:"46a5fec6b8c7ba200fba40b8057326e3"},{url:"icons/icon-256x256.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/icon-384x384.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/icon-512x512.png",revision:"e25d80b4b81574569a18ca1916b6e216"},{url:"icons/ms-icon-144x144.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/safari-pinned-tab.svg",revision:"2af8b8bdbc6c5cfbab6abe984457a136"},{url:"icons/site.webmanifest",revision:"053100cb84a50d2ae7f5492f7dd7f25e"},{url:"icons/vibemap180x180.png",revision:"4ac3d1488b1d6ce1905380ae4ffbb74d"},{url:"index.html",revision:"71c0b0d40e4b2973968fa6432f5dcfda"},{url:"manifest.json",revision:"5feda0c31f833ce6fe23a72f64fd3ffc"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\\.js$/]}))}));
