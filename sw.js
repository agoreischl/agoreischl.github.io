if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const b=e=>i(e,n),o={module:{uri:n},exports:r,require:b};s[n]=Promise.all(a.map((e=>o[e]||b(e)))).then((e=>(c(...e),r)))}}define(["./workbox-e8110d74"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vibemap"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_plugin-vue_export-helper-DlAUqK2U.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/AtkinsonHyperlegible-Bold-NAvdQI_r.woff",revision:"1c699d558728e2aedbdd8e5e3f743c1b"},{url:"assets/AtkinsonHyperlegible-BoldItalic-ks3W2A-I.woff",revision:"372e9df54a015b57220ab3768be38cfd"},{url:"assets/AtkinsonHyperlegible-Italic-BsluYYZB.woff",revision:"4ca2353c59b6dbcd1d3987016dd09146"},{url:"assets/AtkinsonHyperlegible-Regular-BTX3i_Gi.woff",revision:"2b43c1e84da2c859623e53d2b4328ce4"},{url:"assets/ErrorNotFound-ozCuLsWQ.js",revision:"c38059dc5115d0316ac269898a991378"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa-Dr0goTwe.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ-D-x-0Q06.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/HelpPage-COvOj4ka.js",revision:"904a4ea6eb9567e38bd348cb363a2287"},{url:"assets/index--RGO9DEu.js",revision:"7b6c8ede53ddb9ab53a361c1979f7c04"},{url:"assets/index-C6MSXATf.css",revision:"f1935dc0ff20dd5b906f02c13c6fe867"},{url:"assets/IndexPage-Cjf01SVI.js",revision:"8f90be2076dd53e002649ddcbb37cddd"},{url:"assets/Karla-r6Jbx9kQ.woff",revision:"b9ec71ebc99c76c935d61bf62c062741"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuaabVmUiAw-CNa4tw4G.woff",revision:"2d29775851b8463053deb35b21b5d5c8"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWub2bVmUiAw-CHKg1YId.woff",revision:"be27354f07345fafe8dfc84117bbafd4"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbFmUiAw-yBxCyPWP.woff",revision:"c8cea161abfb039c97a11c26dff2f546"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbVmUiAw-3fZ6d7DD.woff",revision:"585ad11be98f8f044923a71898ddfde6"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuYjalmUiAw-BepdiOnY.woff",revision:"2cadc82e8484ccac69caddc849f603be"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuZtalmUiAw-4ZhHFPot.woff",revision:"51c41b1c2668c088c7cce3fa116396e1"},{url:"assets/MainLayout-Bulil_PU.js",revision:"374c1679181ca01d29eb0ca5d1eb2c74"},{url:"assets/MyRatingsPage-uUX0b-XT.js",revision:"eabce5ad7b28640128e1dce9422bd1bf"},{url:"assets/private.use-form-DoMJCPa1.js",revision:"596931d1351c2111a0b9a4eea1b76b14"},{url:"assets/ProfilePage-BmzlY3S-.js",revision:"036ddb8e4a166c5f7c7d08506f9d0925"},{url:"assets/QBtn-GgXEuqh0.js",revision:"8faca6d06cb292bd13a6d17cfed2ccd5"},{url:"assets/QCard-DX_RHzPU.js",revision:"55314bc965150e59137c35094408d908"},{url:"assets/QFile-m8ba0M-a.js",revision:"e19d1a06b8357550e0c8a12ab295afba"},{url:"assets/QIcon-D49SyrAc.js",revision:"52efe0bb02a75e14602eea674308582b"},{url:"assets/QInput-CBryx3x8.js",revision:"cd4bb164277120b325fab8a3e5d1d99f"},{url:"assets/QItem-CKNJ2p7P.js",revision:"63de1d75f3afc3cfc0443da359c0adcd"},{url:"assets/QPage-CZc7Plbs.js",revision:"817ab288c766a02038a53830ff5fe8bc"},{url:"assets/QRating-D2_SZyuP.js",revision:"04589355731f8e249be51d37bea5cb65"},{url:"assets/QSeparator-BDVow5GD.js",revision:"d22168f176160e42f7e697b4eb6fc414"},{url:"assets/SendFeedbackPage-Cz5YzHZJ.js",revision:"9dcc9a3e28fc4525b4873c7b1c390c58"},{url:"assets/SettingsPage-CogzKsfM.js",revision:"70e32cbf8589eadafbbe3496f357e4f2"},{url:"assets/SignupPage-D5FnhsIv.js",revision:"e498f16fe3a87c0edc38b763c8d00ee5"},{url:"assets/use-checkbox-3fl_p8O0.js",revision:"645691c35ee6215bb9224005c6924033"},{url:"assets/use-dark-BSNIoItI.js",revision:"39011e082b34acb97b87c1c7b9dff73c"},{url:"assets/vibemap-logo-Bh8b4tYI.svg",revision:"2af8b8bdbc6c5cfbab6abe984457a136"},{url:"favicon.ico",revision:"ad165c7e5942684e688393722ad330ce"},{url:"icons/android-chrome-192x192.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/android-chrome-512x512.png",revision:"25bb938369629ae8702f96515e4c0ba4"},{url:"icons/apple-icon-120x120.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/apple-icon-152x152.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/apple-icon-167x167.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/apple-touch-icon.png",revision:"8977eecfbbb5767ee7a6191bf07b6f11"},{url:"icons/favicon-128x128.png",revision:"49e5f91199c5b33e0f7c23defaa869be"},{url:"icons/favicon-16x16.png",revision:"8d680e551e4e78831fe69a96f1e9ea18"},{url:"icons/favicon-32x32.png",revision:"49e5f91199c5b33e0f7c23defaa869be"},{url:"icons/favicon-96x96.png",revision:"49e5f91199c5b33e0f7c23defaa869be"},{url:"icons/favicon.ico",revision:"ad165c7e5942684e688393722ad330ce"},{url:"icons/icon-128x128.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/icon-192x192.png",revision:"46a5fec6b8c7ba200fba40b8057326e3"},{url:"icons/icon-256x256.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/icon-384x384.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/icon-512x512.png",revision:"e25d80b4b81574569a18ca1916b6e216"},{url:"icons/ms-icon-144x144.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/safari-pinned-tab.svg",revision:"2af8b8bdbc6c5cfbab6abe984457a136"},{url:"icons/site.webmanifest",revision:"053100cb84a50d2ae7f5492f7dd7f25e"},{url:"icons/vibemap180x180.png",revision:"4ac3d1488b1d6ce1905380ae4ffbb74d"},{url:"index.html",revision:"d04ab47c1f3a9f50f590bcef8071bb2e"},{url:"manifest.json",revision:"5feda0c31f833ce6fe23a72f64fd3ffc"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\\.js$/]}))}));
