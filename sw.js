if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const f=e=>i(e,n),d={module:{uri:n},exports:r,require:f};s[n]=Promise.all(a.map((e=>d[e]||f(e)))).then((e=>(c(...e),r)))}}define(["./workbox-e8110d74"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vibemap"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_plugin-vue_export-helper-DlAUqK2U.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/AtkinsonHyperlegible-Bold-NAvdQI_r.woff",revision:"1c699d558728e2aedbdd8e5e3f743c1b"},{url:"assets/AtkinsonHyperlegible-BoldItalic-ks3W2A-I.woff",revision:"372e9df54a015b57220ab3768be38cfd"},{url:"assets/AtkinsonHyperlegible-Italic-BsluYYZB.woff",revision:"4ca2353c59b6dbcd1d3987016dd09146"},{url:"assets/AtkinsonHyperlegible-Regular-BTX3i_Gi.woff",revision:"2b43c1e84da2c859623e53d2b4328ce4"},{url:"assets/ErrorNotFound-cddWQ5_l.js",revision:"521c2f8a8acf453df942fd9c99cdc71f"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa-Dr0goTwe.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ-D-x-0Q06.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/HelpPage-CXdOj1Di.js",revision:"b498610387f3a12553a129d1052a9be5"},{url:"assets/index-C6MSXATf.css",revision:"f1935dc0ff20dd5b906f02c13c6fe867"},{url:"assets/index-CvZTB1pd.js",revision:"169e81df6b38a444dbfa8a68369841c9"},{url:"assets/IndexPage-5bEeWMXV.js",revision:"058e54de1144121441027ef1a1f16260"},{url:"assets/Karla-r6Jbx9kQ.woff",revision:"b9ec71ebc99c76c935d61bf62c062741"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuaabVmUiAw-CNa4tw4G.woff",revision:"2d29775851b8463053deb35b21b5d5c8"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWub2bVmUiAw-CHKg1YId.woff",revision:"be27354f07345fafe8dfc84117bbafd4"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbFmUiAw-yBxCyPWP.woff",revision:"c8cea161abfb039c97a11c26dff2f546"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbVmUiAw-3fZ6d7DD.woff",revision:"585ad11be98f8f044923a71898ddfde6"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuYjalmUiAw-BepdiOnY.woff",revision:"2cadc82e8484ccac69caddc849f603be"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuZtalmUiAw-4ZhHFPot.woff",revision:"51c41b1c2668c088c7cce3fa116396e1"},{url:"assets/MainLayout-BAPynnol.js",revision:"2d34081f1c978c1a960c244bda5f6cb3"},{url:"assets/MyRatingsPage-BMAnetFf.js",revision:"d41525e2e89f66da06edb252825313ce"},{url:"assets/private.use-form-BXOPDHjv.js",revision:"0a9b50f18e5ff4961487a5aaecf6b0f1"},{url:"assets/ProfilePage-BMzbcT2j.js",revision:"2c9e7b04b17fee96481f47cd678aba70"},{url:"assets/QBtn-B5I0b2g6.js",revision:"3808f1152da61e44fcc92b6d74913b5e"},{url:"assets/QCard-Cq6Bkd7x.js",revision:"7c7ddfa9277bc2fb4cc49581b94092f7"},{url:"assets/QFile-CS8mZgGx.js",revision:"4e67d29c80400ba7dd94c50cfb2af74d"},{url:"assets/QIcon-IRbknJ06.js",revision:"2776479f71e8e44e627e058763fa7692"},{url:"assets/QInput-BQScq1aS.js",revision:"e27619ac3e567cc2a1ad979229879328"},{url:"assets/QItem-DqeeSiSj.js",revision:"70a62b232439395d7ea1bc7bcb3760e2"},{url:"assets/QPage-2DDnQXNU.js",revision:"8bfcb41eea214b2149ee07990a0ad05c"},{url:"assets/QRating-BkAPj7f8.js",revision:"b766a7f0d801ec9f1ece58bd3a8014b2"},{url:"assets/QSeparator-T4FJKgt1.js",revision:"50bbf33abca86e7c5cf0c5d1b47abe13"},{url:"assets/SendFeedbackPage-C6cUZisj.js",revision:"c3b5df6fdfe77b4d2cdba01c4b3e61a0"},{url:"assets/SettingsPage-DapRTf9x.js",revision:"08c3061734163f8c24c0dee87d103d21"},{url:"assets/SignupPage-D0kHUJS9.js",revision:"8a026f8b6d1f9b57f4b6b036ddc13315"},{url:"assets/use-checkbox-BtCT4CmO.js",revision:"463e17c3abba4d4f116765914cf1afdd"},{url:"assets/use-dark-D_sVWWjJ.js",revision:"f9c086a55af34612d0e6a40746ea3318"},{url:"assets/vibemap-logo-Bh8b4tYI.svg",revision:"2af8b8bdbc6c5cfbab6abe984457a136"},{url:"favicon.ico",revision:"ad165c7e5942684e688393722ad330ce"},{url:"icons/android-chrome-192x192.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/android-chrome-512x512.png",revision:"25bb938369629ae8702f96515e4c0ba4"},{url:"icons/apple-icon-120x120.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/apple-icon-152x152.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/apple-icon-167x167.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/apple-touch-icon.png",revision:"8977eecfbbb5767ee7a6191bf07b6f11"},{url:"icons/favicon-128x128.png",revision:"49e5f91199c5b33e0f7c23defaa869be"},{url:"icons/favicon-16x16.png",revision:"8d680e551e4e78831fe69a96f1e9ea18"},{url:"icons/favicon-32x32.png",revision:"49e5f91199c5b33e0f7c23defaa869be"},{url:"icons/favicon-96x96.png",revision:"49e5f91199c5b33e0f7c23defaa869be"},{url:"icons/favicon.ico",revision:"ad165c7e5942684e688393722ad330ce"},{url:"icons/icon-128x128.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/icon-192x192.png",revision:"46a5fec6b8c7ba200fba40b8057326e3"},{url:"icons/icon-256x256.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/icon-384x384.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/icon-512x512.png",revision:"e25d80b4b81574569a18ca1916b6e216"},{url:"icons/ms-icon-144x144.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/safari-pinned-tab.svg",revision:"2af8b8bdbc6c5cfbab6abe984457a136"},{url:"icons/site.webmanifest",revision:"053100cb84a50d2ae7f5492f7dd7f25e"},{url:"icons/vibemap180x180.png",revision:"4ac3d1488b1d6ce1905380ae4ffbb74d"},{url:"index.html",revision:"ef20c73e83a1dafadeaa5fe37dfce7a5"},{url:"manifest.json",revision:"5feda0c31f833ce6fe23a72f64fd3ffc"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\\.js$/]}))}));
