if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const f=e=>i(e,c),o={module:{uri:c},exports:r,require:f};s[c]=Promise.all(a.map((e=>o[e]||f(e)))).then((e=>(n(...e),r)))}}define(["./workbox-e8110d74"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vibemap"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_plugin-vue_export-helper-DlAUqK2U.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/AtkinsonHyperlegible-Bold-NAvdQI_r.woff",revision:"1c699d558728e2aedbdd8e5e3f743c1b"},{url:"assets/AtkinsonHyperlegible-BoldItalic-ks3W2A-I.woff",revision:"372e9df54a015b57220ab3768be38cfd"},{url:"assets/AtkinsonHyperlegible-Italic-BsluYYZB.woff",revision:"4ca2353c59b6dbcd1d3987016dd09146"},{url:"assets/AtkinsonHyperlegible-Regular-BTX3i_Gi.woff",revision:"2b43c1e84da2c859623e53d2b4328ce4"},{url:"assets/ErrorNotFound-DdX2H1LT.js",revision:"67953a2d21d2feb83b05e3518932438d"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa-Dr0goTwe.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ-D-x-0Q06.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/HelpPage-Bbau1VlT.js",revision:"3dceb75879af75e94d74d5c40051b55a"},{url:"assets/index-BiR2hFPH.js",revision:"913ce751a91d92e16c9c1081adca42d4"},{url:"assets/index-Drha5ktW.css",revision:"e7837b5b0bca167c580ecc8f2e7981ce"},{url:"assets/IndexPage-BLxqRElq.js",revision:"fbe75b010060e7c5fb385a18a3c9dcf1"},{url:"assets/Karla-r6Jbx9kQ.woff",revision:"b9ec71ebc99c76c935d61bf62c062741"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuaabVmUiAw-CNa4tw4G.woff",revision:"2d29775851b8463053deb35b21b5d5c8"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWub2bVmUiAw-CHKg1YId.woff",revision:"be27354f07345fafe8dfc84117bbafd4"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbFmUiAw-yBxCyPWP.woff",revision:"c8cea161abfb039c97a11c26dff2f546"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbVmUiAw-3fZ6d7DD.woff",revision:"585ad11be98f8f044923a71898ddfde6"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuYjalmUiAw-BepdiOnY.woff",revision:"2cadc82e8484ccac69caddc849f603be"},{url:"assets/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuZtalmUiAw-4ZhHFPot.woff",revision:"51c41b1c2668c088c7cce3fa116396e1"},{url:"assets/MainLayout-CulIouY1.js",revision:"05743d6eabda3cd11ce0ae5717fff20b"},{url:"assets/MyRatingsPage-K0lgvFQp.js",revision:"c29021b857f397852289fbf362d3a19f"},{url:"assets/private.use-form-9UtIPkrJ.js",revision:"da855b007604df07e3f24267d60f9136"},{url:"assets/ProfilePage-D45kYHpc.js",revision:"61a736fcf323fba36413f5d7d72af61b"},{url:"assets/QBtn-tgTwnRJc.js",revision:"fc8403a132c2a6f90f7c7ce4ea300969"},{url:"assets/QCard-tZnb7PAQ.js",revision:"2e73c479fe64011d2f800fea46680ff2"},{url:"assets/QCheckbox-D_MHixsj.js",revision:"5a3ed4f0483cab5b6621a07cb48d5a37"},{url:"assets/QFile-Dga4ZQog.js",revision:"9edf188a497015ee09331a03ac394974"},{url:"assets/QIcon-Cuakdb7w.js",revision:"8143e8fcf52e804f4bc77ee7d2e52788"},{url:"assets/QInput-t_EMnfPd.js",revision:"fca3143dd00045c18d64764fb1be1524"},{url:"assets/QItem-BYMUSP6D.js",revision:"52a552d73a3b8c8b04f7a3ef946e399c"},{url:"assets/QPage-DobtniFE.js",revision:"ec3800677610452c6ae26eb325b7b032"},{url:"assets/QRating-CPHW7lwB.js",revision:"2ff6372642dad61a1ed74e9df555b768"},{url:"assets/QSeparator-C9g9s4b4.js",revision:"0b19289a344304fce15f753cba32b3d6"},{url:"assets/QToggle-DQoobtvF.js",revision:"e4f212eef5ca2d760060817482e0eed8"},{url:"assets/SendFeedbackPage-DxmxP81J.js",revision:"bc4e86e4fd36fc28aa36f084a92305a1"},{url:"assets/SettingsPage-ZeyzyJN0.js",revision:"536ddd5bd0fb1529548c89328c372393"},{url:"assets/SignupPage-kiU7-Ymg.js",revision:"78237bb8920a812afccc103811a20577"},{url:"assets/use-checkbox-DWHbn7I9.js",revision:"22e6056036fff070ee3c60edf789b720"},{url:"assets/use-dark-BxeKY82l.js",revision:"ff58f41ccea3171aeed32c928b3cc2bd"},{url:"assets/vibemap-logo-Bh8b4tYI.svg",revision:"2af8b8bdbc6c5cfbab6abe984457a136"},{url:"favicon.ico",revision:"ad165c7e5942684e688393722ad330ce"},{url:"icons/android-chrome-192x192.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/android-chrome-512x512.png",revision:"25bb938369629ae8702f96515e4c0ba4"},{url:"icons/apple-icon-120x120.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/apple-icon-152x152.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/apple-icon-167x167.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/apple-touch-icon.png",revision:"8977eecfbbb5767ee7a6191bf07b6f11"},{url:"icons/favicon-128x128.png",revision:"49e5f91199c5b33e0f7c23defaa869be"},{url:"icons/favicon-16x16.png",revision:"8d680e551e4e78831fe69a96f1e9ea18"},{url:"icons/favicon-32x32.png",revision:"49e5f91199c5b33e0f7c23defaa869be"},{url:"icons/favicon-96x96.png",revision:"49e5f91199c5b33e0f7c23defaa869be"},{url:"icons/favicon.ico",revision:"ad165c7e5942684e688393722ad330ce"},{url:"icons/icon-128x128.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/icon-192x192.png",revision:"46a5fec6b8c7ba200fba40b8057326e3"},{url:"icons/icon-256x256.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/icon-384x384.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/icon-512x512.png",revision:"e25d80b4b81574569a18ca1916b6e216"},{url:"icons/ms-icon-144x144.png",revision:"b749460dad5d662a7b9838601b2ef899"},{url:"icons/safari-pinned-tab.svg",revision:"2af8b8bdbc6c5cfbab6abe984457a136"},{url:"icons/site.webmanifest",revision:"053100cb84a50d2ae7f5492f7dd7f25e"},{url:"icons/vibemap180x180.png",revision:"4ac3d1488b1d6ce1905380ae4ffbb74d"},{url:"index.html",revision:"b7bea9b00efdad802861dfea414de11a"},{url:"manifest.json",revision:"5feda0c31f833ce6fe23a72f64fd3ffc"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\\.js$/]}))}));
