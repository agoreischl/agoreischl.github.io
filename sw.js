if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const d=e=>i(e,n),f={module:{uri:n},exports:r,require:d};s[n]=Promise.all(a.map((e=>f[e]||d(e)))).then((e=>(c(...e),r)))}}define(["./workbox-e8110d74"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vibemap"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_plugin-vue_export-helper-DlAUqK2U.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/AtkinsonHyperlegible-Bold-NAvdQI_r.woff",revision:"1c699d558728e2aedbdd8e5e3f743c1b"},{url:"assets/AtkinsonHyperlegible-BoldItalic-ks3W2A-I.woff",revision:"372e9df54a015b57220ab3768be38cfd"},{url:"assets/AtkinsonHyperlegible-Italic-BsluYYZB.woff",revision:"4ca2353c59b6dbcd1d3987016dd09146"},{url:"assets/AtkinsonHyperlegible-Regular-BTX3i_Gi.woff",revision:"2b43c1e84da2c859623e53d2b4328ce4"},{url:"assets/ErrorNotFound-DP3Upc02.js",revision:"1c8014d01fc05305923c013a283af547"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa-Dr0goTwe.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ-D-x-0Q06.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/HelpPage-D8XyXiHC.js",revision:"81589248d9d7c8448174e535aa88b97c"},{url:"assets/index-BFgIvuFd.js",revision:"d0423fbd454fb742851a3c51e0ad8da9"},{url:"assets/index-DT2WldKl.css",revision:"8c52048f45598a8ed5e2333e5606397d"},{url:"assets/IndexPage-YDtSpnt0.js",revision:"b80e6bddd75c5e91c89a72693c64cd03"},{url:"assets/Karla-r6Jbx9kQ.woff",revision:"b9ec71ebc99c76c935d61bf62c062741"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuaabVmUiAw-CNa4tw4G.woff",revision:"2d29775851b8463053deb35b21b5d5c8"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWub2bVmUiAw-CHKg1YId.woff",revision:"be27354f07345fafe8dfc84117bbafd4"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbFmUiAw-yBxCyPWP.woff",revision:"c8cea161abfb039c97a11c26dff2f546"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbVmUiAw-3fZ6d7DD.woff",revision:"585ad11be98f8f044923a71898ddfde6"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuYjalmUiAw-BepdiOnY.woff",revision:"2cadc82e8484ccac69caddc849f603be"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuZtalmUiAw-4ZhHFPot.woff",revision:"51c41b1c2668c088c7cce3fa116396e1"},{url:"assets/MainLayout-CLmY4YPn.js",revision:"e7ef03fcf3199969646d8f3d610a5c7a"},{url:"assets/MyRatingsPage-CRMc_2Ix.js",revision:"384012c3da873551b49a02dc7ce32849"},{url:"assets/MyRatingsPage-D9cZdP3j.css",revision:"c5ef72cdd4ccb5db32623ddf5c19e134"},{url:"assets/private.use-form-D0jTGhAG.js",revision:"0db80fba656f1e07c9511c180187d5c3"},{url:"assets/ProfilePage-iOwa0T6R.js",revision:"6ee1f617469f1286fcfad54acb3e59f8"},{url:"assets/QBtn-Bjn6bK4h.js",revision:"58e9ab234fb2ba6dfd68e8bd46f82b8f"},{url:"assets/QCard-CqttHd36.js",revision:"b59c8770d469e225edc5390e50de294f"},{url:"assets/QCheckbox-CjvD2VH9.js",revision:"2925616ab2eca0c452ecd80fff16daaf"},{url:"assets/QChip-CoIVjS77.js",revision:"013b3d98e4ae2389f5a02d1b0536d8a1"},{url:"assets/QFile-DkIt4Mdm.js",revision:"dc096e1970f8124e141c47e1f7f9359d"},{url:"assets/QIcon-kYD7TuFa.js",revision:"1ef3d64e6bedaea689200ae3b0610361"},{url:"assets/QInput-DKFF1eev.js",revision:"5e2138a2dea7c31bf5de17e6befd2cb1"},{url:"assets/QItem-CmzyoToq.js",revision:"10d6347f688f96b81c60b23c55a6b74d"},{url:"assets/QItemLabel-BZ_XDmAQ.js",revision:"2031f4bc69e1730e951df54c31ed1f33"},{url:"assets/QItemSection-DEE7Xd6E.js",revision:"839bf994b91e104b89eaa345c49c0e7d"},{url:"assets/QPage-Me7FikAs.js",revision:"023c2f18de6da62a8080bc28bcb9b94f"},{url:"assets/QRating-DYpppBhV.js",revision:"2b3c625cc37c7f198783244896c972bf"},{url:"assets/QSeparator-CQ-R2kb9.js",revision:"4e2553a0ce98903fe2a74a86d1ef7437"},{url:"assets/QToggle-D1y_xTGT.js",revision:"741e29943f2ab93cdfe801691fd5efa7"},{url:"assets/SendFeedbackPage-Ds_KdXmk.js",revision:"a98c1baee89da976dac078aa870dbcf6"},{url:"assets/SettingsPage-hX7G-8Fb.js",revision:"b7bc9cc31a4bb3063f667862f5e5cf98"},{url:"assets/SignupPage-mwUJXkQq.js",revision:"8a41a47f860cc7cef7f6128f9622ae91"},{url:"assets/use-checkbox-DI3bynw5.js",revision:"85a387c6e3d8c1bf6f9509feceabdbbc"},{url:"assets/use-key-composition-CV_kWupa.js",revision:"92d15149d69a388a735bc5fb39e41b72"},{url:"assets/use-timeout-RlRlJd_b.js",revision:"7039292cd8100c3540bea053b1d55d84"},{url:"assets/vibemap-logo-Bh8b4tYI.svg",revision:"2af8b8bdbc6c5cfbab6abe984457a136"},{url:"favicon.ico",revision:"ad165c7e5942684e688393722ad330ce"},{url:"icons/android-chrome-192x192.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/android-chrome-512x512.png",revision:"25bb938369629ae8702f96515e4c0ba4"},{url:"icons/apple-icon-120x120.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/apple-icon-152x152.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/apple-icon-167x167.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/apple-touch-icon.png",revision:"8977eecfbbb5767ee7a6191bf07b6f11"},{url:"icons/favicon-128x128.png",revision:"49e5f91199c5b33e0f7c23defaa869be"},{url:"icons/favicon-16x16.png",revision:"8d680e551e4e78831fe69a96f1e9ea18"},{url:"icons/favicon-32x32.png",revision:"49e5f91199c5b33e0f7c23defaa869be"},{url:"icons/favicon-96x96.png",revision:"49e5f91199c5b33e0f7c23defaa869be"},{url:"icons/favicon.ico",revision:"ad165c7e5942684e688393722ad330ce"},{url:"icons/icon-128x128.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/icon-192x192.png",revision:"46a5fec6b8c7ba200fba40b8057326e3"},{url:"icons/icon-256x256.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/icon-384x384.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/icon-512x512.png",revision:"e25d80b4b81574569a18ca1916b6e216"},{url:"icons/ms-icon-144x144.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/safari-pinned-tab.svg",revision:"2af8b8bdbc6c5cfbab6abe984457a136"},{url:"icons/site.webmanifest",revision:"053100cb84a50d2ae7f5492f7dd7f25e"},{url:"icons/vibemap180x180.png",revision:"4ac3d1488b1d6ce1905380ae4ffbb74d"},{url:"index.html",revision:"84a98dab47fe19b75ab6de7b1cc5fcff"},{url:"manifest.json",revision:"5feda0c31f833ce6fe23a72f64fd3ffc"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\\.js$/]}))}));
