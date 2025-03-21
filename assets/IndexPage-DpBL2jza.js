import{u as F,b as N,Q as u}from"./QBtn-CW0O_AAj.js";import{Q as y}from"./QCheckbox-BLVI8frC.js";import{Q}from"./QRating-D6c9uYL8.js";import{c as O,a as M,h as U,J as g,K as d,L as h,r as m,o as E,R as s,T as H,W as p,Q as l,S as V}from"./index-Qlz83iaN.js";import{h as P}from"./QIcon-ClT52jPI.js";import{Q as z}from"./QInput-B3rVxGN0.js";import{Q as b,a as x}from"./QCard-DDQQE1Uj.js";import{Q as I}from"./QItem-WLw7N9hA.js";import{Q as v}from"./QToggle-C3Zd6HJ4.js";import{Q as Z}from"./QPage-BcYStj46.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./use-checkbox-DL2q9hMh.js";import"./use-dark-DoHyECjb.js";import"./private.use-form-DMTRn0Lc.js";const q=O({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(o,{slots:e}){const i=M(()=>parseInt(o.lines,10)),t=M(()=>"q-item__label"+(o.overline===!0?" q-item__label--overline text-overline":"")+(o.caption===!0?" q-item__label--caption text-caption":"")+(o.header===!0?" q-item__label--header":"")+(i.value===1?" ellipsis":"")),c=M(()=>o.lines!==void 0&&i.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":i.value}:null);return()=>U("div",{style:c.value,class:t.value},P(e.default))}}),B=O({name:"QCardActions",props:{...F,vertical:Boolean},setup(o,{slots:e}){const i=N(o),t=M(()=>`q-card__actions ${i.value} q-card__actions--${o.vertical===!0?"vert column":"horiz row"}`);return()=>U("div",{class:t.value},P(e.default))}}),J={data(){return{map:null,userMarker:null,currentCard:1,showIntro:!0,sportFacilitiesMarkers:[],heatmap1:null,heatmap2:null,heatmap3:null,heatmap4:null}},mounted(){this.loadGoogleMaps()},methods:{async handlePersonalOnChange(o){this.saveSetting("PersonalOn",o),await this.loadHeatmap()},async loadGoogleMaps(){if(window.google&&window.google.maps){this.initMap();return}const o=document.createElement("script");o.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCa6szZqcobw9AEf8KiqXUDpAoLgSR6v7A",o.async=!0,o.defer=!0,o.onload=()=>this.initMap(),document.head.appendChild(o)},nextCard(){this.currentCard<6&&this.currentCard++},previousCard(){this.currentCard<7&&this.currentCard--},closeCards(){this.currentCard=1,this.showIntro=!1},async initMap(){if(!navigator.geolocation)return console.error("Geolocation is not supported by this browser."),this.loadDefaultLocation();this.map=new window.google.maps.Map(document.getElementById("map"),{center:{lat:52.377956,lng:4.89707},zoom:12,mapTypeControl:!1,zoomControl:!1,cameraControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,gestureHandling:"greedy"}),await this.trackUserLocation(),this.sportFacilities&&await this.loadSportFacilities(),this.map.addListener("zoom_changed",()=>{const o=this.map.getZoom();console.log("Zoom level:",o),o&&this.sportFacilitiesMarkers.forEach(e=>{e.setMap(o>=11?this.map:null),console.log(`Marker visibility set to: ${o>=11}`)})}),await this.loadHeatmap()},async loadSportFacilities(){try{const o=await fetch("https://vibemapbe.com/external/external/sport");if(!o.ok)throw new Error(`HTTP error! Status: ${o.status}`);const e=await o.json();this.addSportFacilitiesMarkers(e.sport_parks)}catch(o){console.error("Error fetching sport facilities data:",o)}},addSportFacilitiesMarkers(o){o.forEach(e=>{const i=new window.google.maps.Marker({position:{lat:e.latitude,lng:e.longitude},map:this.map,icon:{path:"M 25.914062 32 L 22.1875 32 C 21.753906 32 21.402344 31.648438 21.402344 31.214844 L 21.402344 28.234375 L 10.597656 28.234375 L 10.597656 31.214844 C 10.597656 31.648438 10.246094 32 9.8125 32 L 6.085938 32 C 5.652344 32 5.300781 31.648438 5.300781 31.214844 L 5.300781 30.539062 L 2.355469 30.539062 C 1.925781 30.539062 1.574219 30.1875 1.574219 29.753906 L 1.574219 21.933594 C 1.574219 21.5 1.925781 21.152344 2.355469 21.152344 L 5.300781 21.152344 L 5.300781 20.472656 C 5.300781 20.039062 5.652344 19.6875 6.085938 19.6875 L 9.8125 19.6875 C 10.246094 19.6875 10.597656 20.039062 10.597656 20.472656 L 10.597656 23.453125 L 21.402344 23.453125 L 21.402344 20.472656 C 21.402344 20.039062 21.753906 19.6875 22.1875 19.6875 L 25.914062 19.6875 C 26.347656 19.6875 26.699219 20.039062 26.699219 20.472656 L 26.699219 21.152344 L 29.644531 21.152344 C 30.074219 21.152344 30.425781 21.5 30.425781 21.933594 L 30.425781 29.753906 C 30.425781 30.1875 30.074219 30.539062 29.644531 30.539062 L 26.699219 30.539062 L 26.699219 31.214844 C 26.699219 31.648438 26.347656 32 25.914062 32 Z M 22.96875 30.433594 L 25.132812 30.433594 L 25.132812 21.253906 L 22.96875 21.253906 Z M 6.867188 30.433594 L 9.03125 30.433594 L 9.03125 21.253906 L 6.867188 21.253906 Z M 26.699219 28.972656 L 28.859375 28.972656 L 28.859375 22.71875 L 26.699219 22.71875 Z M 3.140625 28.972656 L 5.300781 28.972656 L 5.300781 22.71875 L 3.140625 22.71875 Z M 10.597656 26.667969 L 21.402344 26.667969 L 21.402344 25.019531 L 10.597656 25.019531 Z M 14.238281 21.871094 C 14.109375 21.871094 13.976562 21.835938 13.855469 21.769531 C 13.480469 21.554688 13.347656 21.078125 13.558594 20.703125 C 14.957031 18.222656 16.84375 16.128906 19.0625 14.515625 C 18.09375 13.175781 16.988281 11.953125 15.765625 10.871094 C 12.726562 14.140625 8.582031 16.34375 3.976562 16.902344 C 4.078125 17.3125 4.203125 17.722656 4.347656 18.121094 C 4.496094 18.53125 4.285156 18.980469 3.875 19.125 C 3.46875 19.273438 3.019531 19.0625 2.875 18.65625 C 2.328125 17.144531 2.050781 15.5625 2.050781 13.949219 C 2.050781 6.257812 8.308594 0 16 0 C 23.691406 0 29.949219 6.257812 29.949219 13.949219 C 29.949219 15.335938 29.742188 16.707031 29.335938 18.027344 C 29.207031 18.441406 28.769531 18.671875 28.355469 18.546875 C 27.941406 18.417969 27.710938 17.980469 27.839844 17.566406 C 28.199219 16.398438 28.382812 15.179688 28.382812 13.949219 C 28.382812 13.472656 28.355469 13 28.300781 12.539062 C 25.769531 12.832031 23.367188 13.667969 21.234375 14.953125 C 21.695312 15.6875 22.117188 16.445312 22.496094 17.222656 C 22.683594 17.613281 22.523438 18.082031 22.132812 18.269531 C 21.742188 18.460938 21.273438 18.296875 21.085938 17.90625 C 20.738281 17.1875 20.351562 16.488281 19.933594 15.820312 C 17.914062 17.296875 16.199219 19.210938 14.921875 21.472656 C 14.777344 21.726562 14.511719 21.871094 14.238281 21.871094 Z M 6.519531 5.992188 C 4.710938 8.144531 3.617188 10.921875 3.617188 13.949219 C 3.617188 14.421875 3.644531 14.890625 3.699219 15.359375 C 7.933594 14.867188 11.75 12.863281 14.554688 9.875 C 12.195312 8.066406 9.472656 6.738281 6.519531 5.992188 Z M 16.773438 9.691406 C 18.109375 10.871094 19.3125 12.207031 20.359375 13.652344 C 22.667969 12.246094 25.273438 11.324219 28.023438 10.992188 C 27.046875 7.015625 24.140625 3.785156 20.359375 2.359375 C 19.691406 5.085938 18.449219 7.570312 16.773438 9.691406 Z M 7.765625 4.707031 C 10.574219 5.535156 13.242188 6.898438 15.566406 8.695312 C 17.109375 6.730469 18.253906 4.425781 18.859375 1.898438 C 17.941406 1.683594 16.984375 1.566406 16 1.566406 C 12.839844 1.566406 9.957031 2.753906 7.765625 4.707031 Z M 7.765625 4.707031 ",scale:1,fillColor:"#9C27B0",fillOpacity:1,strokeWeight:1,strokeColor:"#9C27B0"},title:e.name});this.sportFacilitiesMarkers.push(i)})},trackUserLocation(){let o=!0;navigator.geolocation.watchPosition(e=>{const i={lat:e.coords.latitude,lng:e.coords.longitude};o&&(this.map.setCenter(i),this.map.setZoom(15),o=!1),this.userMarker?this.userMarker.setPosition(i):this.userMarker=new window.google.maps.Marker({position:i,map:this.map,icon:{path:window.google.maps.SymbolPath.CIRCLE,scale:8,fillColor:"#4285F4",fillOpacity:1,strokeWeight:2,strokeColor:"#ffffff"}})},()=>{console.error("User denied Geolocation."),this.loadDefaultLocation()},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})},recenterMap(){navigator.geolocation?navigator.geolocation.getCurrentPosition(o=>{const e={lat:o.coords.latitude,lng:o.coords.longitude};this.map.setCenter(e),this.map.setZoom(15),this.userMarker||(this.userMarker=new window.google.maps.Marker({position:e,map:this.map,icon:{path:window.google.maps.SymbolPath.CIRCLE,scale:8,fillColor:"#4285F4",fillOpacity:1,strokeWeight:2,strokeColor:"#ffffff"}}))},()=>{console.error("Unable to retrieve location.")}):console.error("Geolocation is not supported.")},clearHeatmaps(){this.heatmap1&&this.heatmap1.setMap(null),this.heatmap2&&this.heatmap2.setMap(null),this.heatmap3&&this.heatmap3.setMap(null),this.heatmap4&&this.heatmap4.setMap(null)},async loadHeatmap(){this.clearHeatmaps();var o=localStorage.getItem("response");try{if(this.isLoggedIn&&this.personalOn?o=await fetch(`https://vibemapbe.com/location/location/locations/?user_id=${localStorage.getItem("loggedInId")}`):o=await fetch("https://vibemapbe.com/location/location/locations/"),!o.ok)throw new Error(`HTTP error! Status: ${o.status}`);const r=await o.json();(r||r.length)&&(o=r),localStorage.setItem("response",JSON.stringify(o))}catch(r){console.error("Error fetching data:",r)}console.log(o);const e=o.reduce((r,f)=>r+f.stress_level,0),i=o.length,t=e/i;console.log(`Average stress level: ${t}`);const c=[],n=[],a=[],C=[];var w,k,L,S;o.forEach(r=>{const f={location:new window.google.maps.LatLng(r.latitude,r.longitude),weight:r.stress_level};r.stress_level>=.5&&r.stress_level<1.5?c.push(f):r.stress_level>=1.5&&r.stress_level<2.5?n.push(f):r.stress_level>=2.5&&r.stress_level<3.5?a.push(f):r.stress_level>=3.5&&r.stress_level<=4.5?C.push(f):console.error("Invalid stress level:",r.stress_level)}),this.colorswitch&&(this.heatmap1=new window.google.maps.visualization.HeatmapLayer({data:c,radius:50,gradient:["rgba(255, 0, 0, 0)","rgba(255, 0, 0, 0.8)"]}),this.heatmap2=new window.google.maps.visualization.HeatmapLayer({data:n,radius:50,gradient:["rgba(248, 157, 9, 0)","rgba(248, 157, 9, 0.8)"]}),this.heatmap3=new window.google.maps.visualization.HeatmapLayer({data:a,radius:50,gradient:["rgba(29, 107, 223, 0)","rgba(29, 107, 223, 0.8)"]}),this.heatmap4=new window.google.maps.visualization.HeatmapLayer({data:C,radius:50,gradient:["rgba(23, 179, 83, 0)","rgba(23, 179, 83, 0.8)"]})),(!this.colorswitch||this.colorswitch==null)&&(this.heatmap1=new window.google.maps.visualization.HeatmapLayer({data:c,radius:50,gradient:["rgba(255, 0, 0, 0)","rgba(255, 0, 0, 0.8)"]}),this.heatmap2=new window.google.maps.visualization.HeatmapLayer({data:n,radius:50,gradient:["rgba(255, 100, 0, 0)","rgba(255, 100, 0, 0.8)"]}),this.heatmap3=new window.google.maps.visualization.HeatmapLayer({data:a,radius:50,gradient:["rgba(100, 255, 0, 0)","rgba(100, 255, 0, 0.8)"]}),this.heatmap4=new window.google.maps.visualization.HeatmapLayer({data:C,radius:50,gradient:["rgba(0, 255, 0, 0)","rgba(0, 255, 0, 0.8)"]})),this.highstress&&w.setMap(this.map),this.mediumstress&&k.setMap(this.map),this.nostress&&L.setMap(this.map),this.absnostress&&S.setMap(this.map)},loadDefaultLocation(){const o={lat:52.377956,lng:4.89707};this.map.setCenter(o),this.map.setZoom(12)},getMarkerLatLng(o){if(!o||!o.getPosition)throw new Error("Invalid marker object provided.");const e=o.getPosition();return{lat:e.lat(),lng:e.lng()}},async submitRating(){if(!this.userMarker){console.error("User marker is not available.");return}const o=localStorage.getItem("usertoken"),e=this.getMarkerLatLng(this.userMarker);console.log("Latitude:",e.lat),console.log("Longitude:",e.lng),console.log(e);const i={latitude:e.lat,longitude:e.lng,comment:this.reason?this.reason:null,stress_level:this.ratingModel,construction:this.construction,noise:this.noise,crowd:this.crowd,sport:this.sport,nature:this.nature};try{const t=await fetch("https://vibemapbe.com/location/location/locations/",{method:"POST",headers:{Authorization:`Bearer ${o}`,"Content-Type":"application/json"},body:JSON.stringify(i)});if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);const c=await t.json();console.log("Review submitted successfully:",c),this.loadHeatmap()}catch(t){console.error("Error submitting review:",t),alert("Failed to submit review. Please try again.")}finally{this.ratingModel=0,this.reason=""}}},setup(){const o=m(),e=m(),i=m(""),t=m(),c=m(),n=m(),a=m(),C=m(),w=m(),k=m(),L=m();E(()=>{o.value=localStorage.getItem("isLoggedIn")==="true",e.value=localStorage.getItem("PersonalOn")==="true",t.value=JSON.parse(localStorage.getItem("constructionMarkings")),c.value=JSON.parse(localStorage.getItem("sportFacilities")),n.value=JSON.parse(localStorage.getItem("colorswitch")),a.value=JSON.parse(localStorage.getItem("highstress")),C.value=JSON.parse(localStorage.getItem("mediumstress")),w.value=JSON.parse(localStorage.getItem("nostress")),k.value=JSON.parse(localStorage.getItem("absnostress")),L.value=JSON.parse(localStorage.getItem("nightMode")),i.value=localStorage.getItem("loggedInId")});const S=(r,f)=>{localStorage.setItem(r,JSON.stringify(f))};return{ratingModel:m(0),ratingColors:JSON.parse(localStorage.getItem("colorswitch"))?["red-7","amber-7","blue-7","green-7"]:["red","orange","green","green-9"],icons:["sentiment_very_dissatisfied","sentiment_dissatisfied","sentiment_satisfied","sentiment_very_satisfied"],noise:m(!1),crowd:m(!1),construction:m(!1),nature:m(!1),sport:m(!1),isLoggedIn:o,personalOn:e,constructionMarkings:t,sportFacilities:c,colorswitch:n,nightMode:L,highstress:a,mediumstress:C,nostress:w,absnostress:k,loggedInId:i,saveSetting:S}}},T={class:"map-cont p-5 pb-5"},R={class:"rate-cont p-5 pt-5"},_={key:0,class:"intro-cont p-5 pt-5 bg-primary"},D={class:"btn-cnt"},j={class:"btn-cnt"},W={class:"pref-cont"},G={class:"btn-cnt"},Y={class:"btn-cnt"},K={class:"text-body1"},X={class:"btn-cnt"};function $(o,e,i,t,c,n){return d(),g(Z,{class:"q-pa-none main-page"},{default:h(()=>[s("div",T,[e[22]||(e[22]=s("div",{id:"map",class:"google-map q-card"},null,-1)),l(u,{class:"recenter-btn",color:"primary",icon:"my_location",onClick:n.recenterMap},null,8,["onClick"]),t.isLoggedIn?(d(),g(y,{key:0,class:"personalOn-btn",modelValue:t.personalOn,"onUpdate:modelValue":[e[0]||(e[0]=a=>t.personalOn=a),n.handlePersonalOnChange],color:"white","keep-color":"","checked-icon":"person_off","unchecked-icon":"person","indeterminate-icon":"person"},null,8,["modelValue","onUpdate:modelValue"])):p("",!0)]),s("div",R,[t.isLoggedIn?(d(),g(b,{key:0,class:"rate-card"},{default:h(()=>[l(x,null,{default:h(()=>[e[24]||(e[24]=s("div",{class:"text-h6"},"Rate your location",-1)),l(Q,{class:"rating-icons",modelValue:t.ratingModel,"onUpdate:modelValue":e[1]||(e[1]=a=>t.ratingModel=a),max:4,color:"grey","color-selected":t.ratingColors,icon:t.icons},null,8,["modelValue","color-selected","icon"]),t.ratingModel?(d(),g(q,{key:0,class:"reason-label"},{default:h(()=>e[23]||(e[23]=[V("Reason")])),_:1})):p("",!0),t.ratingModel===1||t.ratingModel===2?(d(),g(y,{key:1,class:"checkbox noise",modelValue:t.noise,"onUpdate:modelValue":e[2]||(e[2]=a=>t.noise=a),"checked-icon":"campaign","unchecked-icon":"volume_down_alt","indeterminate-icon":"sound_detection_loud_sound"},null,8,["modelValue"])):p("",!0),t.ratingModel===1||t.ratingModel===2?(d(),g(y,{key:2,class:"checkbox crowd",modelValue:t.crowd,"onUpdate:modelValue":e[3]||(e[3]=a=>t.crowd=a),"checked-icon":"groups","unchecked-icon":"group_off","indeterminate-icon":"groups_2"},null,8,["modelValue"])):p("",!0),t.ratingModel===1||t.ratingModel===2?(d(),g(y,{key:3,class:"checkbox construction",modelValue:t.construction,"onUpdate:modelValue":e[4]||(e[4]=a=>t.construction=a),"checked-icon":"construction","unchecked-icon":"engineering","indeterminate-icon":"construction"},null,8,["modelValue"])):p("",!0),t.ratingModel===3||t.ratingModel===4?(d(),g(y,{key:4,class:"checkbox sport",modelValue:t.sport,"onUpdate:modelValue":e[5]||(e[5]=a=>t.sport=a),"checked-icon":"sports_handball","unchecked-icon":"sports_tennis","indeterminate-icon":"sports_tennis"},null,8,["modelValue"])):p("",!0),t.ratingModel===3||t.ratingModel===4?(d(),g(y,{key:5,class:"checkbox nature",modelValue:t.nature,"onUpdate:modelValue":e[6]||(e[6]=a=>t.nature=a),"checked-icon":"forest","unchecked-icon":"park","indeterminate-icon":"landscape"},null,8,["modelValue"])):p("",!0),t.ratingModel?(d(),g(z,{key:6,modelValue:o.reason,"onUpdate:modelValue":e[7]||(e[7]=a=>o.reason=a),label:"Comment",placeholder:"Why did you give this rating?",type:"textarea",rows:"1",optional:""},null,8,["modelValue"])):p("",!0)]),_:1}),t.ratingModel?(d(),g(B,{key:0,align:"right"},{default:h(()=>[l(u,{label:"Submit",color:"primary",onClick:n.submitRating,class:"radius-10"},null,8,["onClick"])]),_:1})):p("",!0)]),_:1})):p("",!0),t.isLoggedIn?p("",!0):(d(),g(b,{key:1},{default:h(()=>[l(x,null,{default:h(()=>[e[25]||(e[25]=s("div",{class:"text-h7"},"Please sign up or log in to be able to rate your location.",-1)),l(I,{class:"q-gutter-sm w-100"},{default:h(()=>[l(u,{label:"Login",color:"primary",class:"col-6",to:"/profile"}),l(u,{label:"Signup",color:"secondary",outline:"",class:"col-6",to:"./signup"})]),_:1})]),_:1})]),_:1}))]),!t.isLoggedIn&&c.showIntro?(d(),H("div",_,[c.currentCard===1?(d(),g(b,{key:0},{default:h(()=>[e[26]||(e[26]=s("div",{class:"text-h5 font-atkinson-bold"},"Welcome to VibeMap",-1)),e[27]||(e[27]=s("div",{class:"text-body1"},[s("p",null,"Find your calm in the urban jungle. VibeMap is a community‐driven guide that shows you where to find relaxing spots and avoid stress in your city."),s("p",null,"By rating places on a 1–4 scale using smileys and sharing feedback on ambiance, noise, and environment – along with your personal comments – you help build a living map that reflects the true vibe of your urban surroundings."),s("p",null,"Your input helps everyone navigate towards more relaxing experiences.")],-1)),s("div",D,[l(u,{label:"Skip",color:"secondary",onClick:n.closeCards,class:"radius-10 left-btn"},null,8,["onClick"]),l(u,{label:"Next",color:"primary",onClick:n.nextCard,class:"radius-10 right-btn"},null,8,["onClick"])])]),_:1})):p("",!0),c.currentCard===2?(d(),g(b,{key:1},{default:h(()=>[e[28]||(e[28]=s("div",{class:"text-h5 font-atkinson-bold"},"Understanding Urban Stress",-1)),e[29]||(e[29]=s("div",{class:"text-body1"},[s("p",null,"City life is full of contrasts. For some, the hum of construction or crowded streets can be overwhelming, while for others, a touch of nature or active leisure can provide much-needed relief."),s("p",null,"We want to understand how these factors affect you personally – so that VibeMap can better guide you to the environments that match your unique needs."),s("p",null,"VibeMap is a project by the students of the University of Amsterdam. It is a part of the Social Complexity and Designing with Data course, which aims to promote and increase urban mental health.")],-1)),s("div",j,[l(u,{label:"Previous",color:"secondary",onClick:n.previousCard,class:"radius-10 left-btn"},null,8,["onClick"]),l(u,{label:"Next",color:"primary",onClick:n.nextCard,class:"radius-10 right-btn"},null,8,["onClick"])])]),_:1})):p("",!0),c.currentCard===3?(d(),g(b,{key:2},{default:h(()=>[e[30]||(e[30]=s("div",{class:"text-h5 font-atkinson-bold"},"Preferences",-1)),e[31]||(e[31]=s("div",{class:"text-body1"},[s("p",null,"You can select what you would like to see on your map. You can modify these later in the Settings page.")],-1)),s("div",W,[l(v,{modelValue:t.constructionMarkings,"onUpdate:modelValue":[e[8]||(e[8]=a=>t.constructionMarkings=a),e[9]||(e[9]=a=>t.saveSetting("constructionMarkings",t.constructionMarkings))],label:"Enable Construction Markings"},null,8,["modelValue"]),l(v,{modelValue:t.sportFacilities,"onUpdate:modelValue":[e[10]||(e[10]=a=>t.sportFacilities=a),e[11]||(e[11]=a=>t.saveSetting("sportFacilities",t.sportFacilities))],label:"Enable Sport Facility Markings"},null,8,["modelValue"]),l(v,{modelValue:t.colorswitch,"onUpdate:modelValue":[e[12]||(e[12]=a=>t.colorswitch=a),e[13]||(e[13]=a=>t.saveSetting("colorswitch",t.colorswitch))],label:"Enable Color Switch for accessibility"},null,8,["modelValue"]),l(v,{modelValue:t.highstress,"onUpdate:modelValue":[e[14]||(e[14]=a=>t.highstress=a),e[15]||(e[15]=a=>t.saveSetting("highstress",t.highstress))],label:"Show High-Stress areas"},null,8,["modelValue"]),l(v,{modelValue:t.mediumstress,"onUpdate:modelValue":[e[16]||(e[16]=a=>t.mediumstress=a),e[17]||(e[17]=a=>t.saveSetting("mediumstress",t.mediumstress))],label:"Show Medium-Stress areas"},null,8,["modelValue"]),l(v,{modelValue:t.nostress,"onUpdate:modelValue":[e[18]||(e[18]=a=>t.nostress=a),e[19]||(e[19]=a=>t.saveSetting("nostress",t.nostress))],label:"Show No-Stress areas"},null,8,["modelValue"]),l(v,{modelValue:t.absnostress,"onUpdate:modelValue":[e[20]||(e[20]=a=>t.absnostress=a),e[21]||(e[21]=a=>t.saveSetting("absnostress",t.absnostress))],label:"Show Absolutely No-Stress areas"},null,8,["modelValue"])]),s("div",G,[l(u,{label:"Previous",color:"secondary",onClick:n.previousCard,class:"radius-10 left-btn"},null,8,["onClick"]),l(u,{label:"Next",color:"primary",onClick:n.nextCard,class:"radius-10 right-btn"},null,8,["onClick"])])]),_:1})):p("",!0),c.currentCard===4?(d(),g(b,{key:3},{default:h(()=>[e[32]||(e[32]=s("div",{class:"text-h5 font-atkinson-bold"},"How VibeMap Works",-1)),e[33]||(e[33]=s("div",{class:"text-body1"},[s("p",null,"1. Rate your current location by selecting a smiley that best represents your stress level."),s("p",null,"2. Add a comment to share your thoughts on the location. Optionally, select the cause of your rating using the available options."),s("p",null,"3. Use the map to find relaxing spots and avoid stress in your city."),s("p",null,"Every rating and comment builds a detailed, crowdsourced map to help everyone navigate toward a more relaxed city.")],-1)),s("div",Y,[l(u,{label:"Previous",color:"secondary",onClick:n.previousCard,class:"radius-10 left-btn"},null,8,["onClick"]),l(u,{label:"Next",color:"primary",onClick:n.nextCard,class:"radius-10 right-btn"},null,8,["onClick"])])]),_:1})):p("",!0),c.currentCard===5?(d(),g(b,{key:4},{default:h(()=>[e[37]||(e[37]=s("div",{class:"text-h5 font-atkinson-bold"},"Contact us",-1)),s("div",K,[s("p",null,[e[34]||(e[34]=V("For questions or feedback, please contact us at using the ")),l(u,{to:"/feedback",label:"Feedback",flat:"",color:"primary"}),e[35]||(e[35]=V(" page."))]),e[36]||(e[36]=s("p",null,"Sign up or log in to start rating your location and help others find their calm.",-1))]),s("div",null,[l(I,{class:"q-gutter-sm w-100"},{default:h(()=>[l(u,{label:"Login",color:"primary",class:"col-6",to:"/profile"}),l(u,{label:"Signup",color:"secondary",outline:"",class:"col-6",to:"./signup"})]),_:1})]),s("div",X,[l(u,{label:"Previous",color:"secondary",onClick:n.previousCard,class:"radius-10 left-btn"},null,8,["onClick"]),l(u,{label:"Get started!",color:"primary",onClick:n.closeCards,class:"radius-10 right-btn"},null,8,["onClick"])])]),_:1})):p("",!0)])):p("",!0)]),_:1})}const pe=A(J,[["render",$]]);export{pe as default};
