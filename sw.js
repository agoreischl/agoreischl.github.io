if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const b=e=>a(e,n),o={module:{uri:n},exports:r,require:b};s[n]=Promise.all(i.map((e=>o[e]||b(e)))).then((e=>(c(...e),r)))}}define(["./workbox-e8110d74"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vibemap"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_plugin-vue_export-helper-DlAUqK2U.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/agos-profile-DcxiCOxd.jpeg",revision:"ce519d104c27c7bf01b4290adb4280e8"},{url:"assets/ErrorNotFound-BIvtWW7x.js",revision:"8a4a2f03a49c79bc1505c6223955b14e"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa-Dr0goTwe.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ-D-x-0Q06.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/HelpPage-DCmQjPar.js",revision:"47269a801c1e841c5fac2884b512ed7d"},{url:"assets/index-CSc4Ya2o.css",revision:"7b96cfba4de922c5ebabb41fdffe7833"},{url:"assets/index-DyVMr62p.js",revision:"65e23620424d3cad692301e536e553d5"},{url:"assets/IndexPage-CQSXXDVW.js",revision:"e6d9aab5d5b147a1952dc0f89d933ee8"},{url:"assets/Karla-r6Jbx9kQ.woff",revision:"b9ec71ebc99c76c935d61bf62c062741"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuaabVmUiAw-CNa4tw4G.woff",revision:"2d29775851b8463053deb35b21b5d5c8"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWub2bVmUiAw-CHKg1YId.woff",revision:"be27354f07345fafe8dfc84117bbafd4"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbFmUiAw-yBxCyPWP.woff",revision:"c8cea161abfb039c97a11c26dff2f546"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbVmUiAw-3fZ6d7DD.woff",revision:"585ad11be98f8f044923a71898ddfde6"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuYjalmUiAw-BepdiOnY.woff",revision:"2cadc82e8484ccac69caddc849f603be"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuZtalmUiAw-4ZhHFPot.woff",revision:"51c41b1c2668c088c7cce3fa116396e1"},{url:"assets/MainLayout-BVCQFwqm.js",revision:"6de1d16eb95ef2bb54763ca69d5d955c"},{url:"assets/MyRatingsPage-DbaCPd8k.js",revision:"a88a22fe3e2f3f52a9615a1e5d1a396e"},{url:"assets/private.use-form-DUxKieuW.js",revision:"2917e009087ad889e9d81f5b50d3bd7c"},{url:"assets/ProfilePage-DqTDSvwl.js",revision:"c8c8b640c738968c7ca37909aff3240f"},{url:"assets/QBtn-Br0lxjOl.js",revision:"90d46fa7d3709b23cf9a094f57f092de"},{url:"assets/QCard-C8EO79mj.js",revision:"2e5b4cb0644a4f5e309bba0f7e522bd9"},{url:"assets/QFile-CNPqGk-C.js",revision:"c900a2f4200c9aaa1d64ea5f5b35bbaa"},{url:"assets/QIcon-DCqjkhoh.js",revision:"ce12f4495858c40d09b743c5d38b7e70"},{url:"assets/QInput-JOtEwVM7.js",revision:"210beefceea2e47f70e1ca4795cd987f"},{url:"assets/QItem-WOOchzwK.js",revision:"1f47b360231ac91d696b2bb2cef28c36"},{url:"assets/QPage-CNlmXk7B.js",revision:"0566757e334653cf757bc862ac291da9"},{url:"assets/QRating-DwW8Q8xe.js",revision:"5e07dd88d8cc613adbfa802da4c1d3de"},{url:"assets/QSeparator-B0kOFX_f.js",revision:"05b41611c64b7f25e93aac0f163cc914"},{url:"assets/SendFeedbackPage-CufoGnxV.js",revision:"b89cbbeebf7b0c536b2ba584bbfbf6e6"},{url:"assets/SettingsPage-CQiglvmU.js",revision:"3b9635f52e6d21426b3602075a01dbd4"},{url:"assets/SignupPage-CGLvYjDp.js",revision:"91ab2e1cd550fd28287646e167fb7932"},{url:"assets/use-checkbox-Cain6bDO.js",revision:"7eaf1edea38730a66a952cbb89753938"},{url:"assets/use-dark-fOq7uEpq.js",revision:"6b4fb0d6c26a9d322a5c00c0fd8c92d9"},{url:"assets/vibemap-logo-Bh8b4tYI.svg",revision:"2af8b8bdbc6c5cfbab6abe984457a136"},{url:"assets/vibemap-logo-DLusQwXu.js",revision:"14681756254e7a697e467b4ac1b72941"},{url:"favicon.ico",revision:"ad165c7e5942684e688393722ad330ce"},{url:"icons/android-chrome-192x192.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/android-chrome-512x512.png",revision:"25bb938369629ae8702f96515e4c0ba4"},{url:"icons/apple-icon-120x120.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/apple-icon-152x152.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/apple-icon-167x167.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/apple-touch-icon.png",revision:"8977eecfbbb5767ee7a6191bf07b6f11"},{url:"icons/favicon-128x128.png",revision:"49e5f91199c5b33e0f7c23defaa869be"},{url:"icons/favicon-16x16.png",revision:"8d680e551e4e78831fe69a96f1e9ea18"},{url:"icons/favicon-32x32.png",revision:"49e5f91199c5b33e0f7c23defaa869be"},{url:"icons/favicon-96x96.png",revision:"49e5f91199c5b33e0f7c23defaa869be"},{url:"icons/favicon.ico",revision:"ad165c7e5942684e688393722ad330ce"},{url:"icons/icon-128x128.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/icon-192x192.png",revision:"46a5fec6b8c7ba200fba40b8057326e3"},{url:"icons/icon-256x256.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/icon-384x384.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/icon-512x512.png",revision:"e25d80b4b81574569a18ca1916b6e216"},{url:"icons/ms-icon-144x144.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/safari-pinned-tab.svg",revision:"2af8b8bdbc6c5cfbab6abe984457a136"},{url:"icons/site.webmanifest",revision:"053100cb84a50d2ae7f5492f7dd7f25e"},{url:"icons/vibemap180x180.png",revision:"4ac3d1488b1d6ce1905380ae4ffbb74d"},{url:"index.html",revision:"dc392c6b948080bfdb22c08586455ebd"},{url:"manifest.json",revision:"5feda0c31f833ce6fe23a72f64fd3ffc"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\\.js$/]}))}));
