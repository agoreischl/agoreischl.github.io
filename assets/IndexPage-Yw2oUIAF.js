import{u as N,b as E,Q as c}from"./QBtn-BC0gD90b.js";import{Q as F}from"./QRating-BOVV9E3k.js";import{c as V,a as k,h as x,J as g,K as u,L as h,r as p,o as P,R as r,T as Q,W as m,Q as l,S as L}from"./index-DTu00PQ6.js";import{h as I}from"./QIcon-DmJdseID.js";import{Q as y}from"./QCheckbox-tPqupLiJ.js";import{Q as H}from"./QInput-CJYlF2mC.js";import{Q as v,a as M}from"./QCard-iAqzHZI1.js";import{Q as S}from"./QItem-CzRxWSI2.js";import{Q as b}from"./QToggle-52WgpI97.js";import{Q as _}from"./QPage-D70gHEbT.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./private.use-form-EQGwNdhn.js";import"./use-checkbox-CqbPOICw.js";import"./use-dark-B-18IVZL.js";const A=V({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(o,{slots:e}){const n=k(()=>parseInt(o.lines,10)),t=k(()=>"q-item__label"+(o.overline===!0?" q-item__label--overline text-overline":"")+(o.caption===!0?" q-item__label--caption text-caption":"")+(o.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),i=k(()=>o.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>x("div",{style:i.value,class:t.value},I(e.default))}}),q=V({name:"QCardActions",props:{...N,vertical:Boolean},setup(o,{slots:e}){const n=E(o),t=k(()=>`q-card__actions ${n.value} q-card__actions--${o.vertical===!0?"vert column":"horiz row"}`);return()=>x("div",{class:t.value},I(e.default))}}),z={data(){return{map:null,userMarker:null,currentCard:1,showIntro:!0,sportFacilitiesMarkers:[]}},mounted(){this.loadGoogleMaps()},methods:{async loadGoogleMaps(){if(window.google&&window.google.maps){this.initMap();return}const o=document.createElement("script");o.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCa6szZqcobw9AEf8KiqXUDpAoLgSR6v7A",o.async=!0,o.defer=!0,o.onload=()=>this.initMap(),document.head.appendChild(o)},nextCard(){this.currentCard<6&&this.currentCard++},previousCard(){this.currentCard<7&&this.currentCard--},closeCards(){this.currentCard=1,this.showIntro=!1},async initMap(){if(!navigator.geolocation)return console.error("Geolocation is not supported by this browser."),this.loadDefaultLocation();this.map=new window.google.maps.Map(document.getElementById("map"),{center:{lat:52.377956,lng:4.89707},zoom:12,mapTypeControl:!1,zoomControl:!1,cameraControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,gestureHandling:"greedy"}),await this.trackUserLocation(),this.sportFacilities&&await this.loadSportFacilities(),this.colorswitch&&await this.loadAccessibleHeatmap(),(!this.colorswitch||this.colorswitch==null)&&await this.loadHeatmap()},async loadSportFacilities(){try{const o=await fetch("https://vibemapbe.com/external/external/sport");if(!o.ok)throw new Error(`HTTP error! Status: ${o.status}`);const e=await o.json();this.addSportFacilitiesMarkers(e.sport_parks)}catch(o){console.error("Error fetching sport facilities data:",o)}},addSportFacilitiesMarkers(o){o.forEach(e=>{const n=new window.google.maps.Marker({position:{lat:e.latitude,lng:e.longitude},map:this.map,icon:{path:"M 25.914062 32 L 22.1875 32 C 21.753906 32 21.402344 31.648438 21.402344 31.214844 L 21.402344 28.234375 L 10.597656 28.234375 L 10.597656 31.214844 C 10.597656 31.648438 10.246094 32 9.8125 32 L 6.085938 32 C 5.652344 32 5.300781 31.648438 5.300781 31.214844 L 5.300781 30.539062 L 2.355469 30.539062 C 1.925781 30.539062 1.574219 30.1875 1.574219 29.753906 L 1.574219 21.933594 C 1.574219 21.5 1.925781 21.152344 2.355469 21.152344 L 5.300781 21.152344 L 5.300781 20.472656 C 5.300781 20.039062 5.652344 19.6875 6.085938 19.6875 L 9.8125 19.6875 C 10.246094 19.6875 10.597656 20.039062 10.597656 20.472656 L 10.597656 23.453125 L 21.402344 23.453125 L 21.402344 20.472656 C 21.402344 20.039062 21.753906 19.6875 22.1875 19.6875 L 25.914062 19.6875 C 26.347656 19.6875 26.699219 20.039062 26.699219 20.472656 L 26.699219 21.152344 L 29.644531 21.152344 C 30.074219 21.152344 30.425781 21.5 30.425781 21.933594 L 30.425781 29.753906 C 30.425781 30.1875 30.074219 30.539062 29.644531 30.539062 L 26.699219 30.539062 L 26.699219 31.214844 C 26.699219 31.648438 26.347656 32 25.914062 32 Z M 22.96875 30.433594 L 25.132812 30.433594 L 25.132812 21.253906 L 22.96875 21.253906 Z M 6.867188 30.433594 L 9.03125 30.433594 L 9.03125 21.253906 L 6.867188 21.253906 Z M 26.699219 28.972656 L 28.859375 28.972656 L 28.859375 22.71875 L 26.699219 22.71875 Z M 3.140625 28.972656 L 5.300781 28.972656 L 5.300781 22.71875 L 3.140625 22.71875 Z M 10.597656 26.667969 L 21.402344 26.667969 L 21.402344 25.019531 L 10.597656 25.019531 Z M 14.238281 21.871094 C 14.109375 21.871094 13.976562 21.835938 13.855469 21.769531 C 13.480469 21.554688 13.347656 21.078125 13.558594 20.703125 C 14.957031 18.222656 16.84375 16.128906 19.0625 14.515625 C 18.09375 13.175781 16.988281 11.953125 15.765625 10.871094 C 12.726562 14.140625 8.582031 16.34375 3.976562 16.902344 C 4.078125 17.3125 4.203125 17.722656 4.347656 18.121094 C 4.496094 18.53125 4.285156 18.980469 3.875 19.125 C 3.46875 19.273438 3.019531 19.0625 2.875 18.65625 C 2.328125 17.144531 2.050781 15.5625 2.050781 13.949219 C 2.050781 6.257812 8.308594 0 16 0 C 23.691406 0 29.949219 6.257812 29.949219 13.949219 C 29.949219 15.335938 29.742188 16.707031 29.335938 18.027344 C 29.207031 18.441406 28.769531 18.671875 28.355469 18.546875 C 27.941406 18.417969 27.710938 17.980469 27.839844 17.566406 C 28.199219 16.398438 28.382812 15.179688 28.382812 13.949219 C 28.382812 13.472656 28.355469 13 28.300781 12.539062 C 25.769531 12.832031 23.367188 13.667969 21.234375 14.953125 C 21.695312 15.6875 22.117188 16.445312 22.496094 17.222656 C 22.683594 17.613281 22.523438 18.082031 22.132812 18.269531 C 21.742188 18.460938 21.273438 18.296875 21.085938 17.90625 C 20.738281 17.1875 20.351562 16.488281 19.933594 15.820312 C 17.914062 17.296875 16.199219 19.210938 14.921875 21.472656 C 14.777344 21.726562 14.511719 21.871094 14.238281 21.871094 Z M 6.519531 5.992188 C 4.710938 8.144531 3.617188 10.921875 3.617188 13.949219 C 3.617188 14.421875 3.644531 14.890625 3.699219 15.359375 C 7.933594 14.867188 11.75 12.863281 14.554688 9.875 C 12.195312 8.066406 9.472656 6.738281 6.519531 5.992188 Z M 16.773438 9.691406 C 18.109375 10.871094 19.3125 12.207031 20.359375 13.652344 C 22.667969 12.246094 25.273438 11.324219 28.023438 10.992188 C 27.046875 7.015625 24.140625 3.785156 20.359375 2.359375 C 19.691406 5.085938 18.449219 7.570312 16.773438 9.691406 Z M 7.765625 4.707031 C 10.574219 5.535156 13.242188 6.898438 15.566406 8.695312 C 17.109375 6.730469 18.253906 4.425781 18.859375 1.898438 C 17.941406 1.683594 16.984375 1.566406 16 1.566406 C 12.839844 1.566406 9.957031 2.753906 7.765625 4.707031 Z M 7.765625 4.707031 ",scale:1,fillColor:"#9C27B0",fillOpacity:1,strokeWeight:1,strokeColor:"#9C27B0"},title:e.name});this.sportFacilitiesMarkers.push(n)})},trackUserLocation(){let o=!0;navigator.geolocation.watchPosition(e=>{const n={lat:e.coords.latitude,lng:e.coords.longitude};o&&(this.map.setCenter(n),this.map.setZoom(15),o=!1),this.userMarker?this.userMarker.setPosition(n):this.userMarker=new window.google.maps.Marker({position:n,map:this.map,icon:{path:window.google.maps.SymbolPath.CIRCLE,scale:8,fillColor:"#4285F4",fillOpacity:1,strokeWeight:2,strokeColor:"#ffffff"}})},()=>{console.error("User denied Geolocation."),this.loadDefaultLocation()},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})},recenterMap(){navigator.geolocation?navigator.geolocation.getCurrentPosition(o=>{const e={lat:o.coords.latitude,lng:o.coords.longitude};this.map.setCenter(e),this.map.setZoom(15),this.userMarker||(this.userMarker=new window.google.maps.Marker({position:e,map:this.map,icon:{path:window.google.maps.SymbolPath.CIRCLE,scale:8,fillColor:"#4285F4",fillOpacity:1,strokeWeight:2,strokeColor:"#ffffff"}}))},()=>{console.error("Unable to retrieve location.")}):console.error("Geolocation is not supported.")},async loadHeatmap(){var o=localStorage.getItem("response");try{if(o=await fetch("https://vibemapbe.com/location/location/locations/"),!o.ok)throw new Error(`HTTP error! Status: ${o.status}`);const a=await o.json();(a||a.length)&&(o=a),localStorage.setItem("response",JSON.stringify(o)),console.log(o)}catch(a){console.error("Error fetching data:",a)}console.log(o);const e=[],n=[],t=[],i=[];o.forEach(a=>{const f={location:new window.google.maps.LatLng(a.latitude,a.longitude),weight:a.stress_level};a.stress_level>=.5&&a.stress_level<1.5?e.push(f):a.stress_level>=1.5&&a.stress_level<2.5?n.push(f):a.stress_level>=2.5&&a.stress_level<3.5?t.push(f):a.stress_level>=3.5&&a.stress_level<=4.5?i.push(f):console.error("Invalid stress level:",a.stress_level)});var d=new window.google.maps.visualization.HeatmapLayer({data:e,radius:50,gradient:["rgba(255, 0, 0, 0)","rgba(255, 0, 0, 0.8)"]}),s=new window.google.maps.visualization.HeatmapLayer({data:n,radius:50,gradient:["rgba(255, 100, 0, 0)","rgba(255, 100, 0, 0.8)"]}),C=new window.google.maps.visualization.HeatmapLayer({data:t,radius:50,gradient:["rgba(100, 255, 0, 0)","rgba(100, 255, 0, 0.8)"]}),w=new window.google.maps.visualization.HeatmapLayer({data:i,radius:50,gradient:["rgba(0, 255, 0, 0)","rgba(0, 255, 0, 0.8)"]});this.highstress&&d.setMap(this.map),this.mediumstress&&s.setMap(this.map),this.nostress&&C.setMap(this.map),this.absnostress&&w.setMap(this.map)},async loadAccessibleHeatmap(){var o=localStorage.getItem("response");try{if(o=await fetch("https://vibemapbe.com/location/location/locations/"),!o.ok)throw new Error(`HTTP error! Status: ${o.status}`);const a=await o.json();(a||a.length)&&(o=a),localStorage.setItem("response",JSON.stringify(o)),console.log(o)}catch(a){console.error("Error fetching data:",a)}console.log(o);const e=[],n=[],t=[],i=[];o.forEach(a=>{const f={location:new window.google.maps.LatLng(a.latitude,a.longitude),weight:a.stress_level};a.stress_level>=.5&&a.stress_level<1.5?e.push(f):a.stress_level>=1.5&&a.stress_level<2.5?n.push(f):a.stress_level>=2.5&&a.stress_level<3.5?t.push(f):a.stress_level>=3.5&&a.stress_level<=4.5?i.push(f):console.error("Invalid stress level:",a.stress_level)});var d=new window.google.maps.visualization.HeatmapLayer({data:e,radius:50,gradient:["rgba(228, 82, 7, 0)","rgba(228, 82, 7, 0.8)"]}),s=new window.google.maps.visualization.HeatmapLayer({data:n,radius:50,gradient:["rgba(248, 157, 9, 0)","rgba(248, 157, 9, 0.8)"]}),C=new window.google.maps.visualization.HeatmapLayer({data:t,radius:50,gradient:["rgba(29, 107, 223, 0)","rgba(29, 107, 223, 0.8)"]}),w=new window.google.maps.visualization.HeatmapLayer({data:i,radius:50,gradient:["rgba(23, 179, 83, 0)","rgba(23, 179, 83, 0.8)"]});this.highstress&&d.setMap(this.map),this.mediumstress&&s.setMap(this.map),this.nostress&&C.setMap(this.map),this.absnostress&&w.setMap(this.map)},loadDefaultLocation(){const o={lat:52.377956,lng:4.89707};this.map.setCenter(o),this.map.setZoom(12)},getMarkerLatLng(o){if(!o||!o.getPosition)throw new Error("Invalid marker object provided.");const e=o.getPosition();return{lat:e.lat(),lng:e.lng()}},async submitRating(){if(!this.userMarker){console.error("User marker is not available.");return}const o=localStorage.getItem("usertoken"),e=this.getMarkerLatLng(this.userMarker);console.log("Latitude:",e.lat),console.log("Longitude:",e.lng),console.log(e);const n={latitude:e.lat,longitude:e.lng,comment:this.reason?this.reason:null,stress_level:this.ratingModel,construction:this.construction,noise:this.noise,crowd:this.crowd,sport:this.sport,nature:this.nature};try{const t=await fetch("https://vibemapbe.com/location/location/locations/",{method:"POST",headers:{Authorization:`Bearer ${o}`,"Content-Type":"application/json"},body:JSON.stringify(n)});if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);const i=await t.json();console.log("Review submitted successfully:",i),this.loadHeatmap()}catch(t){console.error("Error submitting review:",t),alert("Failed to submit review. Please try again.")}finally{this.ratingModel=0,this.reason=""}}},setup(){const o=p(),e=p(),n=p(),t=p(),i=p(),d=p(),s=p(),C=p(),w=p();P(()=>{o.value=localStorage.getItem("isLoggedIn")==="true",e.value=JSON.parse(localStorage.getItem("constructionMarkings")),n.value=JSON.parse(localStorage.getItem("sportFacilities")),t.value=JSON.parse(localStorage.getItem("colorswitch")),i.value=JSON.parse(localStorage.getItem("highstress")),d.value=JSON.parse(localStorage.getItem("mediumstress")),s.value=JSON.parse(localStorage.getItem("nostress")),C.value=JSON.parse(localStorage.getItem("absnostress")),w.value=JSON.parse(localStorage.getItem("nightMode"))});const a=(f,U)=>{localStorage.setItem(f,JSON.stringify(U))};return{ratingModel:p(0),ratingColors:["red","orange","green","green-9"],icons:["sentiment_very_dissatisfied","sentiment_dissatisfied","sentiment_satisfied","sentiment_very_satisfied"],noise:p(!1),crowd:p(!1),construction:p(!1),nature:p(!1),sport:p(!1),isLoggedIn:o,constructionMarkings:e,sportFacilities:n,colorswitch:t,nightMode:w,highstress:i,mediumstress:d,nostress:s,absnostress:C,saveSetting:a}}},B={class:"map-cont p-5 pb-5"},T={class:"rate-cont p-5 pt-5"},Z={key:0,class:"intro-cont p-5 pt-5 bg-primary"},J={class:"btn-cnt"},R={class:"btn-cnt"},D={class:"pref-cont"},j={class:"btn-cnt"},W={class:"btn-cnt"},G={class:"text-body1"},Y={class:"btn-cnt"};function K(o,e,n,t,i,d){return u(),g(_,{class:"q-pa-none main-page"},{default:h(()=>[r("div",B,[e[21]||(e[21]=r("div",{id:"map",class:"google-map q-card"},null,-1)),l(c,{class:"recenter-btn",color:"primary",icon:"my_location",onClick:d.recenterMap},null,8,["onClick"])]),r("div",T,[t.isLoggedIn?(u(),g(v,{key:0,class:"rate-card"},{default:h(()=>[l(M,null,{default:h(()=>[e[23]||(e[23]=r("div",{class:"text-h6"},"Rate your location",-1)),l(F,{class:"rating-icons",modelValue:t.ratingModel,"onUpdate:modelValue":e[0]||(e[0]=s=>t.ratingModel=s),max:4,color:"grey","color-selected":t.ratingColors,icon:t.icons},null,8,["modelValue","color-selected","icon"]),t.ratingModel?(u(),g(A,{key:0,class:"reason-label"},{default:h(()=>e[22]||(e[22]=[L("Reason")])),_:1})):m("",!0),t.ratingModel===1||t.ratingModel===2?(u(),g(y,{key:1,class:"checkbox noise",modelValue:t.noise,"onUpdate:modelValue":e[1]||(e[1]=s=>t.noise=s),"checked-icon":"campaign","unchecked-icon":"volume_down_alt","indeterminate-icon":"sound_detection_loud_sound"},null,8,["modelValue"])):m("",!0),t.ratingModel===1||t.ratingModel===2?(u(),g(y,{key:2,class:"checkbox crowd",modelValue:t.crowd,"onUpdate:modelValue":e[2]||(e[2]=s=>t.crowd=s),"checked-icon":"groups","unchecked-icon":"group_off","indeterminate-icon":"groups_2"},null,8,["modelValue"])):m("",!0),t.ratingModel===1||t.ratingModel===2?(u(),g(y,{key:3,class:"checkbox construction",modelValue:t.construction,"onUpdate:modelValue":e[3]||(e[3]=s=>t.construction=s),"checked-icon":"construction","unchecked-icon":"build_circle","indeterminate-icon":"construction"},null,8,["modelValue"])):m("",!0),t.ratingModel===3||t.ratingModel===4?(u(),g(y,{key:4,class:"checkbox sport",modelValue:t.sport,"onUpdate:modelValue":e[4]||(e[4]=s=>t.sport=s),"checked-icon":"sports_tennis","unchecked-icon":"sports_tennis","indeterminate-icon":"sports_tennis"},null,8,["modelValue"])):m("",!0),t.ratingModel===3||t.ratingModel===4?(u(),g(y,{key:5,class:"checkbox nature",modelValue:t.nature,"onUpdate:modelValue":e[5]||(e[5]=s=>t.nature=s),"checked-icon":"nature","unchecked-icon":"nature","indeterminate-icon":"nature"},null,8,["modelValue"])):m("",!0),t.ratingModel?(u(),g(H,{key:6,modelValue:o.reason,"onUpdate:modelValue":e[6]||(e[6]=s=>o.reason=s),label:"Comment",placeholder:"Why did you give this rating?",type:"textarea",rows:"1",optional:""},null,8,["modelValue"])):m("",!0)]),_:1}),t.ratingModel?(u(),g(q,{key:0,align:"right"},{default:h(()=>[l(c,{label:"Submit",color:"primary",onClick:d.submitRating,class:"radius-10"},null,8,["onClick"])]),_:1})):m("",!0)]),_:1})):m("",!0),t.isLoggedIn?m("",!0):(u(),g(v,{key:1},{default:h(()=>[l(M,null,{default:h(()=>[e[24]||(e[24]=r("div",{class:"text-h7"},"Please sign up or log in to be able to rate your location.",-1)),l(S,{class:"q-gutter-sm w-100"},{default:h(()=>[l(c,{label:"Login",color:"primary",class:"col-6",to:"/profile"}),l(c,{label:"Signup",color:"secondary",outline:"",class:"col-6",to:"./signup"})]),_:1})]),_:1})]),_:1}))]),!t.isLoggedIn&&i.showIntro?(u(),Q("div",Z,[i.currentCard===1?(u(),g(v,{key:0},{default:h(()=>[e[25]||(e[25]=r("div",{class:"text-h5 font-atkinson-bold"},"Welcome to VibeMap",-1)),e[26]||(e[26]=r("div",{class:"text-body1"},[r("p",null,"Find your calm in the urban jungle. VibeMap is a community‐driven guide that shows you where to find relaxing spots and avoid stress in your city."),r("p",null,"By rating places on a 1–4 scale using smileys and sharing feedback on ambiance, noise, and environment – along with your personal comments – you help build a living map that reflects the true vibe of your urban surroundings."),r("p",null,"Your input helps everyone navigate towards more relaxing experiences.")],-1)),r("div",J,[l(c,{label:"Skip",color:"secondary",onClick:d.closeCards,class:"radius-10 left-btn"},null,8,["onClick"]),l(c,{label:"Next",color:"primary",onClick:d.nextCard,class:"radius-10 right-btn"},null,8,["onClick"])])]),_:1})):m("",!0),i.currentCard===2?(u(),g(v,{key:1},{default:h(()=>[e[27]||(e[27]=r("div",{class:"text-h5 font-atkinson-bold"},"Understanding Urban Stress",-1)),e[28]||(e[28]=r("div",{class:"text-body1"},[r("p",null,"City life is full of contrasts. For some, the hum of construction or crowded streets can be overwhelming, while for others, a touch of nature or active leisure can provide much-needed relief."),r("p",null,"We want to understand how these factors affect you personally – so that VibeMap can better guide you to the environments that match your unique needs."),r("p",null,"VibeMap is a project by the students of the University of Amsterdam. It is a part of the Social Complexity and Designing with Data course, which aims to promote and increase urban mental health.")],-1)),r("div",R,[l(c,{label:"Previous",color:"secondary",onClick:d.previousCard,class:"radius-10 left-btn"},null,8,["onClick"]),l(c,{label:"Next",color:"primary",onClick:d.nextCard,class:"radius-10 right-btn"},null,8,["onClick"])])]),_:1})):m("",!0),i.currentCard===3?(u(),g(v,{key:2},{default:h(()=>[e[29]||(e[29]=r("div",{class:"text-h5 font-atkinson-bold"},"Preferences",-1)),e[30]||(e[30]=r("div",{class:"text-body1"},[r("p",null,"You can select what you would like to see on your map. You can modify these later in the Settings page.")],-1)),r("div",D,[l(b,{modelValue:t.constructionMarkings,"onUpdate:modelValue":[e[7]||(e[7]=s=>t.constructionMarkings=s),e[8]||(e[8]=s=>t.saveSetting("constructionMarkings",t.constructionMarkings))],label:"Enable Construction Markings"},null,8,["modelValue"]),l(b,{modelValue:t.sportFacilities,"onUpdate:modelValue":[e[9]||(e[9]=s=>t.sportFacilities=s),e[10]||(e[10]=s=>t.saveSetting("sportFacilities",t.sportFacilities))],label:"Enable Sport Facility Markings"},null,8,["modelValue"]),l(b,{modelValue:t.colorswitch,"onUpdate:modelValue":[e[11]||(e[11]=s=>t.colorswitch=s),e[12]||(e[12]=s=>t.saveSetting("colorswitch",t.colorswitch))],label:"Enable Color Switch for accessibility"},null,8,["modelValue"]),l(b,{modelValue:t.highstress,"onUpdate:modelValue":[e[13]||(e[13]=s=>t.highstress=s),e[14]||(e[14]=s=>t.saveSetting("highstress",t.highstress))],label:"Show High-Stress areas"},null,8,["modelValue"]),l(b,{modelValue:t.mediumstress,"onUpdate:modelValue":[e[15]||(e[15]=s=>t.mediumstress=s),e[16]||(e[16]=s=>t.saveSetting("mediumstress",t.mediumstress))],label:"Show Medium-Stress areas"},null,8,["modelValue"]),l(b,{modelValue:t.nostress,"onUpdate:modelValue":[e[17]||(e[17]=s=>t.nostress=s),e[18]||(e[18]=s=>t.saveSetting("nostress",t.nostress))],label:"Show No-Stress areas"},null,8,["modelValue"]),l(b,{modelValue:t.absnostress,"onUpdate:modelValue":[e[19]||(e[19]=s=>t.absnostress=s),e[20]||(e[20]=s=>t.saveSetting("absnostress",t.absnostress))],label:"Show Absolutely No-Stress areas"},null,8,["modelValue"])]),r("div",j,[l(c,{label:"Previous",color:"secondary",onClick:d.previousCard,class:"radius-10 left-btn"},null,8,["onClick"]),l(c,{label:"Next",color:"primary",onClick:d.nextCard,class:"radius-10 right-btn"},null,8,["onClick"])])]),_:1})):m("",!0),i.currentCard===4?(u(),g(v,{key:3},{default:h(()=>[e[31]||(e[31]=r("div",{class:"text-h5 font-atkinson-bold"},"How VibeMap Works",-1)),e[32]||(e[32]=r("div",{class:"text-body1"},[r("p",null,"1. Rate your current location by selecting a smiley that best represents your stress level."),r("p",null,"2. Add a comment to share your thoughts on the location. Optionally, select the cause of your rating using the available options."),r("p",null,"3. Use the map to find relaxing spots and avoid stress in your city."),r("p",null,"Every rating and comment builds a detailed, crowdsourced map to help everyone navigate toward a more relaxed city.")],-1)),r("div",W,[l(c,{label:"Previous",color:"secondary",onClick:d.previousCard,class:"radius-10 left-btn"},null,8,["onClick"]),l(c,{label:"Next",color:"primary",onClick:d.nextCard,class:"radius-10 right-btn"},null,8,["onClick"])])]),_:1})):m("",!0),i.currentCard===5?(u(),g(v,{key:4},{default:h(()=>[e[36]||(e[36]=r("div",{class:"text-h5 font-atkinson-bold"},"Contact us",-1)),r("div",G,[r("p",null,[e[33]||(e[33]=L("For questions or feedback, please contact us at using the ")),l(c,{to:"/feedback",label:"Feedback",flat:"",color:"primary"}),e[34]||(e[34]=L(" page."))]),e[35]||(e[35]=r("p",null,"Sign up or log in to start rating your location and help others find their calm.",-1))]),r("div",null,[l(S,{class:"q-gutter-sm w-100"},{default:h(()=>[l(c,{label:"Login",color:"primary",class:"col-6",to:"/profile"}),l(c,{label:"Signup",color:"secondary",outline:"",class:"col-6",to:"./signup"})]),_:1})]),r("div",Y,[l(c,{label:"Previous",color:"secondary",onClick:d.previousCard,class:"radius-10 left-btn"},null,8,["onClick"]),l(c,{label:"Get started!",color:"primary",onClick:d.closeCards,class:"radius-10 right-btn"},null,8,["onClick"])])]),_:1})):m("",!0)])):m("",!0)]),_:1})}const ge=O(z,[["render",K]]);export{ge as default};
