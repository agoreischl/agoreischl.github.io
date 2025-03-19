import{u as U,b as Q,Q as d}from"./QBtn-T0nUbysT.js";import{Q as F}from"./QRating-CcETbmTu.js";import{c as x,a as w,h as L,J as m,K as c,L as p,r as h,o as P,R as a,T as z,W as g,Q as r,S as M}from"./index-Dp23B8KJ.js";import{h as I}from"./QIcon-C4I3DR4F.js";import{Q as y}from"./QCheckbox-ByNoVVoB.js";import{Q as H}from"./QInput-Sw4EPS08.js";import{Q as f,a as S}from"./QCard-Byiu1OBp.js";import{Q as V}from"./QItem-B7UwMwYj.js";import{Q as b}from"./QToggle-CZWfeIHU.js";import{Q as N}from"./QPage-_FW3c7bu.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./private.use-form-BB7rkBky.js";import"./use-checkbox-BdFO4Y8L.js";import"./use-dark-DPrkDaSm.js";const q=x({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(t,{slots:e}){const l=w(()=>parseInt(t.lines,10)),o=w(()=>"q-item__label"+(t.overline===!0?" q-item__label--overline text-overline":"")+(t.caption===!0?" q-item__label--caption text-caption":"")+(t.header===!0?" q-item__label--header":"")+(l.value===1?" ellipsis":"")),u=w(()=>t.lines!==void 0&&l.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":l.value}:null);return()=>L("div",{style:u.value,class:o.value},I(e.default))}}),A=x({name:"QCardActions",props:{...U,vertical:Boolean},setup(t,{slots:e}){const l=Q(t),o=w(()=>`q-card__actions ${l.value} q-card__actions--${t.vertical===!0?"vert column":"horiz row"}`);return()=>L("div",{class:o.value},I(e.default))}}),O={data(){return{map:null,userMarker:null,currentCard:1,showIntro:!0,sportFacilitiesMarkers:[]}},mounted(){this.loadGoogleMaps()},methods:{loadGoogleMaps(){if(window.google&&window.google.maps){this.initMap();return}const t=document.createElement("script");t.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCa6szZqcobw9AEf8KiqXUDpAoLgSR6v7A",t.async=!0,t.defer=!0,t.onload=()=>this.initMap(),document.head.appendChild(t)},nextCard(){this.currentCard<6&&this.currentCard++},previousCard(){this.currentCard<7&&this.currentCard--},closeCards(){this.currentCard=1,this.showIntro=!1},initMap(){if(!navigator.geolocation)return console.error("Geolocation is not supported by this browser."),this.loadDefaultLocation();this.map=new window.google.maps.Map(document.getElementById("map"),{center:{lat:52.377956,lng:4.89707},zoom:12,mapTypeControl:!1,zoomControl:!1,cameraControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,gestureHandling:"greedy"}),this.loadHeatmap(),this.trackUserLocation(),this.loadSportFacilities()},async loadSportFacilities(){try{const t=await fetch("https://vibemapbe.com/external/external/sport");if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);const e=await t.json();this.addSportFacilitiesMarkers(e.sport_parks)}catch(t){console.error("Error fetching sport facilities data:",t)}},addSportFacilitiesMarkers(t){t.forEach(e=>{const l=new window.google.maps.Marker({position:{lat:e.latitude,lng:e.longitude},map:this.map,icon:{path:"M264.693,326.845h-38.079c-4.418,0-8-3.582-8-8v-30.464H108.231v30.464c0,4.418-3.582,8-8,8H62.152c-4.418,0-8-3.582-8-8  v-6.939H24.074c-4.418,0-8-3.582-8-8V224.03c0-4.418,3.582-8,8-8h30.077v-6.938c0-4.418,3.582-8,8-8h38.079c4.418,0,8,3.582,8,8  v30.464h110.384v-30.464c0-4.418,3.582-8,8-8h38.079c4.418,0,8,3.582,8,8v6.938h30.077c4.418,0,8,3.582,8,8v79.875  c0,4.418-3.582,8-8,8h-30.077v6.939C272.693,323.263,269.112,326.845,264.693,326.845z M234.615,310.845h22.079v-93.753h-22.079  V310.845z M70.152,310.845h22.079v-93.753H70.152V310.845z M272.693,295.905h22.077V232.03h-22.077V295.905z M32.074,295.905h22.077  V232.03H32.074V295.905z M108.231,272.381h110.384v-16.825H108.231V272.381z M145.443,223.376c-1.331,0-2.68-0.332-3.922-1.032  c-3.849-2.17-5.209-7.05-3.04-10.898c14.273-25.312,33.543-46.712,56.214-63.181c-9.894-13.703-21.197-26.173-33.681-37.227  c-31.019,33.403-73.355,55.896-120.395,61.599c1.042,4.209,2.303,8.368,3.784,12.468c1.501,4.155-0.65,8.741-4.806,10.242  c-4.158,1.502-8.741-0.651-10.242-4.807c-5.571-15.424-8.396-31.599-8.396-48.077C20.959,63.908,84.868,0,163.423,0  c78.554,0,142.462,63.908,142.462,142.463c0,14.179-2.104,28.201-6.255,41.68c-1.301,4.223-5.78,6.589-10,5.291  c-4.223-1.3-6.591-5.777-5.291-10c3.68-11.951,5.546-24.39,5.546-36.971c0-4.869-0.276-9.673-0.814-14.4  c-25.871,2.997-50.403,11.521-72.172,24.662c4.713,7.504,9.017,15.253,12.873,23.202c1.928,3.975,0.269,8.761-3.706,10.689  c-3.975,1.925-8.762,0.269-10.689-3.707c-3.573-7.366-7.501-14.486-11.761-21.341c-20.629,15.091-38.175,34.642-51.196,57.736  C150.948,221.911,148.236,223.376,145.443,223.376z M66.601,61.193c-18.492,21.994-29.642,50.354-29.642,81.27  c0,4.834,0.274,9.639,0.819,14.399c43.257-5.019,82.233-25.484,110.873-56.012C124.555,82.391,96.76,68.814,66.601,61.193z   M171.329,98.998c13.625,12.048,25.936,25.664,36.611,40.442c23.598-14.378,50.218-23.758,78.307-27.155  c-9.987-40.635-39.667-73.615-78.299-88.194C201.125,51.937,188.433,77.333,171.329,98.998z M79.321,48.096  c28.682,8.458,55.914,22.357,79.681,40.709c15.771-20.065,27.435-43.606,33.62-69.402C183.248,17.179,173.468,16,163.423,16  C131.162,16,101.686,28.14,79.321,48.096z",scale:1,fillColor:"#9C27B0",fillOpacity:1,strokeWeight:2,strokeColor:"#ffffff"},title:e.name});this.sportFacilitiesMarkers.push(l)})},trackUserLocation(){let t=!0;navigator.geolocation.watchPosition(e=>{const l={lat:e.coords.latitude,lng:e.coords.longitude};t&&(this.map.setCenter(l),this.map.setZoom(15),t=!1),this.userMarker?this.userMarker.setPosition(l):this.userMarker=new window.google.maps.Marker({position:l,map:this.map,icon:{path:window.google.maps.SymbolPath.CIRCLE,scale:8,fillColor:"#4285F4",fillOpacity:1,strokeWeight:2,strokeColor:"#ffffff"}})},()=>{console.error("User denied Geolocation."),this.loadDefaultLocation()},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})},recenterMap(){navigator.geolocation?navigator.geolocation.getCurrentPosition(t=>{const e={lat:t.coords.latitude,lng:t.coords.longitude};this.map.setCenter(e),this.map.setZoom(15),this.userMarker||(this.userMarker=new window.google.maps.Marker({position:e,map:this.map,icon:{path:window.google.maps.SymbolPath.CIRCLE,scale:8,fillColor:"#4285F4",fillOpacity:1,strokeWeight:2,strokeColor:"#ffffff"}}))},()=>{console.error("Unable to retrieve location.")}):console.error("Geolocation is not supported.")},async loadHeatmap(){var t=[];try{if(t=await fetch("https://vibemapbe.com/location/location/locations/"),!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);t=await t.json(),console.log(t)}catch(i){console.error("Error fetching data:",i)}console.log(t);const e=[],l=[],o=[],u=[];t.forEach(i=>{const v={location:new window.google.maps.LatLng(i.latitude,i.longitude),weight:i.stress_level};i.stress_level>=.5&&i.stress_level<1.5?e.push(v):i.stress_level>=1.5&&i.stress_level<2.5?l.push(v):i.stress_level>=2.5&&i.stress_level<3.5?o.push(v):i.stress_level>=3.5&&i.stress_level<=4.5?u.push(v):console.error("Invalid stress level:",i.stress_level)});var n=new window.google.maps.visualization.HeatmapLayer({data:e,radius:50,gradient:["rgba(255, 0, 0, 0)","rgba(255, 0, 0, 0.8)"]}),s=new window.google.maps.visualization.HeatmapLayer({data:l,radius:50,gradient:["rgba(255, 100, 0, 0)","rgba(255, 100, 0, 0.8)"]}),k=new window.google.maps.visualization.HeatmapLayer({data:o,radius:50,gradient:["rgba(100, 255, 0, 0)","rgba(100, 255, 0, 0.8)"]}),C=new window.google.maps.visualization.HeatmapLayer({data:u,radius:50,gradient:["rgba(0, 255, 0, 0)","rgba(0, 255, 0, 0.8)"]});this.highstress&&n.setMap(this.map),this.mediumstress&&s.setMap(this.map),this.nostress&&k.setMap(this.map),this.absnostress&&C.setMap(this.map)},loadDefaultLocation(){const t={lat:52.377956,lng:4.89707};this.map.setCenter(t),this.map.setZoom(12)},getMarkerLatLng(t){if(!t||!t.getPosition)throw new Error("Invalid marker object provided.");const e=t.getPosition();return{lat:e.lat(),lng:e.lng()}},async submitRating(){if(!this.userMarker){console.error("User marker is not available.");return}const t=localStorage.getItem("usertoken"),e=this.getMarkerLatLng(this.userMarker);console.log("Latitude:",e.lat),console.log("Longitude:",e.lng),console.log(e);const l={latitude:e.lat,longitude:e.lng,comment:this.reason?this.reason:null,stress_level:this.ratingModel,construction:this.construction,noise:this.noise,crowd:this.crowd,sport:this.sport,nature:this.nature};try{const o=await fetch("https://vibemapbe.com/location/location/locations/",{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify(l)});if(!o.ok)throw new Error(`HTTP error! Status: ${o.status}`);const u=await o.json();console.log("Review submitted successfully:",u),this.loadHeatmap()}catch(o){console.error("Error submitting review:",o),alert("Failed to submit review. Please try again.")}finally{this.ratingModel=0,this.reason=""}}},setup(){const t=h(),e=h(),l=h(),o=h(),u=h(),n=h(),s=h(),k=h();P(()=>{t.value=localStorage.getItem("isLoggedIn")==="true",e.value=JSON.parse(localStorage.getItem("constructionMarkings")),l.value=JSON.parse(localStorage.getItem("sportFacilities")),o.value=JSON.parse(localStorage.getItem("highstress")),u.value=JSON.parse(localStorage.getItem("mediumstress")),n.value=JSON.parse(localStorage.getItem("nostress")),s.value=JSON.parse(localStorage.getItem("absnostress")),k.value=JSON.parse(localStorage.getItem("nightMode"))});const C=(i,v)=>{localStorage.setItem(i,JSON.stringify(v))};return{ratingModel:h(0),ratingColors:["red","orange","green","green-9"],icons:["sentiment_very_dissatisfied","sentiment_dissatisfied","sentiment_satisfied","sentiment_very_satisfied"],noise:h(!1),crowd:h(!1),construction:h(!1),nature:h(!1),sport:h(!1),isLoggedIn:t,constructionMarkings:e,sportFacilities:l,nightMode:k,highstress:o,mediumstress:u,nostress:n,absnostress:s,saveSetting:C}}},B={class:"map-cont p-5 pb-5"},_={class:"rate-cont p-5 pt-5"},T={key:0,class:"intro-cont p-5 pt-5 bg-primary"},R={class:"btn-cnt"},D={class:"btn-cnt"},J={class:"pref-cont"},j={class:"btn-cnt"},W={class:"btn-cnt"},G={class:"text-body1"},Z={class:"btn-cnt"};function Y(t,e,l,o,u,n){return c(),m(N,{class:"q-pa-none main-page"},{default:p(()=>[a("div",B,[e[19]||(e[19]=a("div",{id:"map",class:"google-map q-card"},null,-1)),r(d,{class:"recenter-btn",color:"primary",icon:"my_location",onClick:n.recenterMap},null,8,["onClick"])]),a("div",_,[o.isLoggedIn?(c(),m(f,{key:0,class:"rate-card"},{default:p(()=>[r(S,null,{default:p(()=>[e[21]||(e[21]=a("div",{class:"text-h6"},"Rate your location",-1)),r(F,{class:"rating-icons",modelValue:o.ratingModel,"onUpdate:modelValue":e[0]||(e[0]=s=>o.ratingModel=s),max:4,color:"grey","color-selected":o.ratingColors,icon:o.icons},null,8,["modelValue","color-selected","icon"]),o.ratingModel?(c(),m(q,{key:0,class:"reason-label"},{default:p(()=>e[20]||(e[20]=[M("Reason")])),_:1})):g("",!0),o.ratingModel===1||o.ratingModel===2?(c(),m(y,{key:1,class:"checkbox noise",modelValue:o.noise,"onUpdate:modelValue":e[1]||(e[1]=s=>o.noise=s),"checked-icon":"campaign","unchecked-icon":"volume_down_alt","indeterminate-icon":"sound_detection_loud_sound"},null,8,["modelValue"])):g("",!0),o.ratingModel===1||o.ratingModel===2?(c(),m(y,{key:2,class:"checkbox crowd",modelValue:o.crowd,"onUpdate:modelValue":e[2]||(e[2]=s=>o.crowd=s),"checked-icon":"groups","unchecked-icon":"group_off","indeterminate-icon":"groups_2"},null,8,["modelValue"])):g("",!0),o.ratingModel===1||o.ratingModel===2?(c(),m(y,{key:3,class:"checkbox construction",modelValue:o.construction,"onUpdate:modelValue":e[3]||(e[3]=s=>o.construction=s),"checked-icon":"construction","unchecked-icon":"build_circle","indeterminate-icon":"construction"},null,8,["modelValue"])):g("",!0),o.ratingModel===3||o.ratingModel===4?(c(),m(y,{key:4,class:"checkbox sport",modelValue:o.sport,"onUpdate:modelValue":e[4]||(e[4]=s=>o.sport=s),"checked-icon":"sports_tennis","unchecked-icon":"sports_tennis","indeterminate-icon":"sports_tennis"},null,8,["modelValue"])):g("",!0),o.ratingModel===3||o.ratingModel===4?(c(),m(y,{key:5,class:"checkbox nature",modelValue:o.nature,"onUpdate:modelValue":e[5]||(e[5]=s=>o.nature=s),"checked-icon":"nature","unchecked-icon":"nature","indeterminate-icon":"nature"},null,8,["modelValue"])):g("",!0),o.ratingModel?(c(),m(H,{key:6,modelValue:t.reason,"onUpdate:modelValue":e[6]||(e[6]=s=>t.reason=s),label:"Comment",placeholder:"Why did you give this rating?",type:"textarea",rows:"1",optional:""},null,8,["modelValue"])):g("",!0)]),_:1}),o.ratingModel?(c(),m(A,{key:0,align:"right"},{default:p(()=>[r(d,{label:"Submit",color:"primary",onClick:n.submitRating,class:"radius-10"},null,8,["onClick"])]),_:1})):g("",!0)]),_:1})):g("",!0),o.isLoggedIn?g("",!0):(c(),m(f,{key:1},{default:p(()=>[r(S,null,{default:p(()=>[e[22]||(e[22]=a("div",{class:"text-h7"},"Please sign up or log in to be able to rate your location.",-1)),r(V,{class:"q-gutter-sm w-100"},{default:p(()=>[r(d,{label:"Login",color:"primary",class:"col-6",to:"/profile"}),r(d,{label:"Signup",color:"secondary",outline:"",class:"col-6",to:"./signup"})]),_:1})]),_:1})]),_:1}))]),!o.isLoggedIn&&u.showIntro?(c(),z("div",T,[u.currentCard===1?(c(),m(f,{key:0},{default:p(()=>[e[23]||(e[23]=a("div",{class:"text-h5 font-atkinson-bold"},"Welcome to VibeMap",-1)),e[24]||(e[24]=a("div",{class:"text-body1"},[a("p",null,"Find your calm in the urban jungle. VibeMap is a community‐driven guide that shows you where to find relaxing spots and avoid stress in your city."),a("p",null,"By rating places on a 1–4 scale using smileys and sharing feedback on ambiance, noise, and environment – along with your personal comments – you help build a living map that reflects the true vibe of your urban surroundings."),a("p",null,"Your input helps everyone navigate towards more relaxing experiences.")],-1)),a("div",R,[r(d,{label:"Skip",color:"secondary",onClick:n.closeCards,class:"radius-10 left-btn"},null,8,["onClick"]),r(d,{label:"Next",color:"primary",onClick:n.nextCard,class:"radius-10 right-btn"},null,8,["onClick"])])]),_:1})):g("",!0),u.currentCard===2?(c(),m(f,{key:1},{default:p(()=>[e[25]||(e[25]=a("div",{class:"text-h5 font-atkinson-bold"},"Understanding Urban Stress",-1)),e[26]||(e[26]=a("div",{class:"text-body1"},[a("p",null,"City life is full of contrasts. For some, the hum of construction or crowded streets can be overwhelming, while for others, a touch of nature or active leisure can provide much-needed relief."),a("p",null,"We want to understand how these factors affect you personally – so that VibeMap can better guide you to the environments that match your unique needs."),a("p",null,"VibeMap is a project by the students of the University of Amsterdam. It is a part of the Social Complexity and Designing with Data course, which aims to promote and increase urban mental health.")],-1)),a("div",D,[r(d,{label:"Previous",color:"secondary",onClick:n.previousCard,class:"radius-10 left-btn"},null,8,["onClick"]),r(d,{label:"Next",color:"primary",onClick:n.nextCard,class:"radius-10 right-btn"},null,8,["onClick"])])]),_:1})):g("",!0),u.currentCard===3?(c(),m(f,{key:2},{default:p(()=>[e[27]||(e[27]=a("div",{class:"text-h5 font-atkinson-bold"},"Preferences",-1)),e[28]||(e[28]=a("div",{class:"text-body1"},[a("p",null,"You can select what you would like to see on your map. You can modify these later in the Settings page.")],-1)),a("div",J,[r(b,{modelValue:o.constructionMarkings,"onUpdate:modelValue":[e[7]||(e[7]=s=>o.constructionMarkings=s),e[8]||(e[8]=s=>o.saveSetting("constructionMarkings",o.constructionMarkings))],label:"Enable Construction Markings"},null,8,["modelValue"]),r(b,{modelValue:o.sportFacilities,"onUpdate:modelValue":[e[9]||(e[9]=s=>o.sportFacilities=s),e[10]||(e[10]=s=>o.saveSetting("sportFacilities",o.sportFacilities))],label:"Enable Sport Facility Markings"},null,8,["modelValue"]),r(b,{modelValue:o.highstress,"onUpdate:modelValue":[e[11]||(e[11]=s=>o.highstress=s),e[12]||(e[12]=s=>o.saveSetting("highstress",o.highstress))],label:"Show High-Stress areas"},null,8,["modelValue"]),r(b,{modelValue:o.mediumstress,"onUpdate:modelValue":[e[13]||(e[13]=s=>o.mediumstress=s),e[14]||(e[14]=s=>o.saveSetting("mediumstress",o.mediumstress))],label:"Show Medium-Stress areas"},null,8,["modelValue"]),r(b,{modelValue:o.nostress,"onUpdate:modelValue":[e[15]||(e[15]=s=>o.nostress=s),e[16]||(e[16]=s=>o.saveSetting("nostress",o.nostress))],label:"Show No-Stress areas"},null,8,["modelValue"]),r(b,{modelValue:o.absnostress,"onUpdate:modelValue":[e[17]||(e[17]=s=>o.absnostress=s),e[18]||(e[18]=s=>o.saveSetting("absnostress",o.absnostress))],label:"Show Absolutely No-Stress areas"},null,8,["modelValue"])]),a("div",j,[r(d,{label:"Previous",color:"secondary",onClick:n.previousCard,class:"radius-10 left-btn"},null,8,["onClick"]),r(d,{label:"Next",color:"primary",onClick:n.nextCard,class:"radius-10 right-btn"},null,8,["onClick"])])]),_:1})):g("",!0),u.currentCard===4?(c(),m(f,{key:3},{default:p(()=>[e[29]||(e[29]=a("div",{class:"text-h5 font-atkinson-bold"},"How VibeMap Works",-1)),e[30]||(e[30]=a("div",{class:"text-body1"},[a("p",null,"1. Rate your current location by selecting a smiley that best represents your stress level."),a("p",null,"2. Add a comment to share your thoughts on the location. Optionally, select the cause of your rating using the available options."),a("p",null,"3. Use the map to find relaxing spots and avoid stress in your city."),a("p",null,"Every rating and comment builds a detailed, crowdsourced map to help everyone navigate toward a more relaxed city.")],-1)),a("div",W,[r(d,{label:"Previous",color:"secondary",onClick:n.previousCard,class:"radius-10 left-btn"},null,8,["onClick"]),r(d,{label:"Next",color:"primary",onClick:n.nextCard,class:"radius-10 right-btn"},null,8,["onClick"])])]),_:1})):g("",!0),u.currentCard===5?(c(),m(f,{key:4},{default:p(()=>[e[34]||(e[34]=a("div",{class:"text-h5 font-atkinson-bold"},"Contact us",-1)),a("div",G,[a("p",null,[e[31]||(e[31]=M("For questions or feedback, please contact us at using the ")),r(d,{to:"/feedback",label:"Feedback",flat:"",color:"primary"}),e[32]||(e[32]=M(" page."))]),e[33]||(e[33]=a("p",null,"Sign up or log in to start rating your location and help others find their calm.",-1))]),a("div",null,[r(V,{class:"q-gutter-sm w-100"},{default:p(()=>[r(d,{label:"Login",color:"primary",class:"col-6",to:"/profile"}),r(d,{label:"Signup",color:"secondary",outline:"",class:"col-6",to:"./signup"})]),_:1})]),a("div",Z,[r(d,{label:"Previous",color:"secondary",onClick:n.previousCard,class:"radius-10 left-btn"},null,8,["onClick"]),r(d,{label:"Get started!",color:"primary",onClick:n.closeCards,class:"radius-10 right-btn"},null,8,["onClick"])])]),_:1})):g("",!0)])):g("",!0)]),_:1})}const ue=E(O,[["render",Y]]);export{ue as default};
