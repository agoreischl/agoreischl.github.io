if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,n)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let r={};const c=e=>i(e,f),o={module:{uri:f},exports:r,require:c};s[f]=Promise.all(a.map((e=>o[e]||c(e)))).then((e=>(n(...e),r)))}}define(["./workbox-e8110d74"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vibemap"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_plugin-vue_export-helper-DlAUqK2U.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/AtkinsonHyperlegible-Bold-NAvdQI_r.woff",revision:"1c699d558728e2aedbdd8e5e3f743c1b"},{url:"assets/AtkinsonHyperlegible-BoldItalic-ks3W2A-I.woff",revision:"372e9df54a015b57220ab3768be38cfd"},{url:"assets/AtkinsonHyperlegible-Italic-BsluYYZB.woff",revision:"4ca2353c59b6dbcd1d3987016dd09146"},{url:"assets/AtkinsonHyperlegible-Regular-BTX3i_Gi.woff",revision:"2b43c1e84da2c859623e53d2b4328ce4"},{url:"assets/ErrorNotFound-Ppc45NW6.js",revision:"141b9f7aaa204993acf48c70b79ec68e"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa-Dr0goTwe.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ-D-x-0Q06.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/HelpPage-BhWkMuTv.js",revision:"d33aadf2f44c24574768347861f8f374"},{url:"assets/index-ByTwHoyI.js",revision:"9c260e1650851ab6116808aa189ad460"},{url:"assets/index-Drha5ktW.css",revision:"e7837b5b0bca167c580ecc8f2e7981ce"},{url:"assets/IndexPage-C6f7LDuC.js",revision:"17cf5104ff49a94bc1d0042d97135950"},{url:"assets/Karla-r6Jbx9kQ.woff",revision:"b9ec71ebc99c76c935d61bf62c062741"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuaabVmUiAw-CNa4tw4G.woff",revision:"2d29775851b8463053deb35b21b5d5c8"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWub2bVmUiAw-CHKg1YId.woff",revision:"be27354f07345fafe8dfc84117bbafd4"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbFmUiAw-yBxCyPWP.woff",revision:"c8cea161abfb039c97a11c26dff2f546"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbVmUiAw-3fZ6d7DD.woff",revision:"585ad11be98f8f044923a71898ddfde6"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuYjalmUiAw-BepdiOnY.woff",revision:"2cadc82e8484ccac69caddc849f603be"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuZtalmUiAw-4ZhHFPot.woff",revision:"51c41b1c2668c088c7cce3fa116396e1"},{url:"assets/MainLayout-Bk9vWRLu.js",revision:"7b69bef612cddc4cbcb5234577f77973"},{url:"assets/MyRatingsPage-DGM026pX.js",revision:"de51d177a78a09463ca43ead90213410"},{url:"assets/private.use-form-B3JV1ARL.js",revision:"3d651578394967409a9000345e959c47"},{url:"assets/ProfilePage-BqwxCfg4.js",revision:"552f15e3c12b0f6eb3495d6ff19d6a74"},{url:"assets/QBtn-DSYF8u4s.js",revision:"62e57991f411f4ed52da32dc65853673"},{url:"assets/QCard-BKtuAI4G.js",revision:"58be4ce4cff6f17f035b2155db7f18cc"},{url:"assets/QCheckbox-Ca3-XkLV.js",revision:"0952285ef87a441cf2be58ecc2fed1c4"},{url:"assets/QFile-C--EBdNd.js",revision:"6350971af76856757e20e88eed109998"},{url:"assets/QIcon-pg19GkFY.js",revision:"1600b8fa03225bec461f74fff7f0d9e1"},{url:"assets/QInput-CZ1d9AoY.js",revision:"b3a5075806a161609d54e502f306a331"},{url:"assets/QItem-B8iSw6ZZ.js",revision:"0069636858c6dc76312f575add4a8f8a"},{url:"assets/QPage-B9Qkhfj5.js",revision:"8014347ab62cf10d628f3031a2230263"},{url:"assets/QRating-Bvqew3e2.js",revision:"bdad43695684a349b77d0f985b5f2042"},{url:"assets/QSeparator-BZ37M-dM.js",revision:"f916e3fb7e14a29beb7ea66aadb9aab5"},{url:"assets/QToggle-DIMSxDos.js",revision:"322765eed1abbf4d621db098f74e4da4"},{url:"assets/SendFeedbackPage-BQmAyfc4.js",revision:"57f73a805eedaf2f1013c22d1e88ff48"},{url:"assets/SettingsPage-DBuiUShH.js",revision:"20069af899fd8705680e525b7c4dfbd0"},{url:"assets/SignupPage-BZEHn81u.js",revision:"c4c0ed077ceb6623762ddf175241b97f"},{url:"assets/use-checkbox-ClYIU5Hw.js",revision:"200c270ab9b04cfa10cb14efa28e76c0"},{url:"assets/use-dark-CYulIB8Z.js",revision:"46f948b95a22fc183c4ef4263f59b392"},{url:"assets/vibemap-logo-Bh8b4tYI.svg",revision:"2af8b8bdbc6c5cfbab6abe984457a136"},{url:"favicon.ico",revision:"ad165c7e5942684e688393722ad330ce"},{url:"icons/android-chrome-192x192.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/android-chrome-512x512.png",revision:"25bb938369629ae8702f96515e4c0ba4"},{url:"icons/apple-icon-120x120.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/apple-icon-152x152.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/apple-icon-167x167.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/apple-touch-icon.png",revision:"8977eecfbbb5767ee7a6191bf07b6f11"},{url:"icons/favicon-128x128.png",revision:"49e5f91199c5b33e0f7c23defaa869be"},{url:"icons/favicon-16x16.png",revision:"8d680e551e4e78831fe69a96f1e9ea18"},{url:"icons/favicon-32x32.png",revision:"49e5f91199c5b33e0f7c23defaa869be"},{url:"icons/favicon-96x96.png",revision:"49e5f91199c5b33e0f7c23defaa869be"},{url:"icons/favicon.ico",revision:"ad165c7e5942684e688393722ad330ce"},{url:"icons/icon-128x128.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/icon-192x192.png",revision:"46a5fec6b8c7ba200fba40b8057326e3"},{url:"icons/icon-256x256.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/icon-384x384.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/icon-512x512.png",revision:"e25d80b4b81574569a18ca1916b6e216"},{url:"icons/ms-icon-144x144.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/safari-pinned-tab.svg",revision:"2af8b8bdbc6c5cfbab6abe984457a136"},{url:"icons/site.webmanifest",revision:"053100cb84a50d2ae7f5492f7dd7f25e"},{url:"icons/vibemap180x180.png",revision:"4ac3d1488b1d6ce1905380ae4ffbb74d"},{url:"index.html",revision:"a015b70428c5f50dd23e51a23b676d60"},{url:"manifest.json",revision:"5feda0c31f833ce6fe23a72f64fd3ffc"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\\.js$/]}))}));
