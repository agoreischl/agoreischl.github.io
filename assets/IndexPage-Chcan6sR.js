import{u as U,b as P,Q as c}from"./QBtn-Baa7GFPN.js";import{Q}from"./QRating-3nZppneW.js";import{c as x,a as w,h as L,J as m,K as u,L as p,r as f,o as E,R as a,T as F,W as g,Q as r,S as M}from"./index-BIHN4x43.js";import{h as I}from"./QIcon-oElhHBcW.js";import{Q as y}from"./QCheckbox-QcedSgZa.js";import{Q as N}from"./QInput-CPRvlJeA.js";import{Q as h,a as S}from"./QCard-B22b0d5x.js";import{Q as V}from"./QItem-DVg2CO9q.js";import{Q as v}from"./QToggle-D65uF9_d.js";import{Q as A}from"./QPage-C30Ki6_O.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./private.use-form-BeOzgiLb.js";import"./use-checkbox-BC5J5zU_.js";import"./use-dark-OyduCbbA.js";const q=x({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(t,{slots:e}){const l=w(()=>parseInt(t.lines,10)),o=w(()=>"q-item__label"+(t.overline===!0?" q-item__label--overline text-overline":"")+(t.caption===!0?" q-item__label--caption text-caption":"")+(t.header===!0?" q-item__label--header":"")+(l.value===1?" ellipsis":"")),n=w(()=>t.lines!==void 0&&l.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":l.value}:null);return()=>L("div",{style:n.value,class:o.value},I(e.default))}}),B=x({name:"QCardActions",props:{...U,vertical:Boolean},setup(t,{slots:e}){const l=P(t),o=w(()=>`q-card__actions ${l.value} q-card__actions--${t.vertical===!0?"vert column":"horiz row"}`);return()=>L("div",{class:o.value},I(e.default))}}),_={data(){return{map:null,userMarker:null,currentCard:1,showIntro:!0,sportFacilitiesMarkers:[]}},mounted(){this.loadGoogleMaps()},methods:{loadGoogleMaps(){if(window.google&&window.google.maps&&window.google.maps.marker){this.initMap();return}const t=document.createElement("script");t.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCa6szZqcobw9AEf8KiqXUDpAoLgSR6v7A",t.async=!0,t.defer=!0,t.onload=()=>this.initMap(),document.head.appendChild(t)},nextCard(){this.currentCard<6&&this.currentCard++},previousCard(){this.currentCard<7&&this.currentCard--},closeCards(){this.currentCard=1,this.showIntro=!1},initMap(){if(!navigator.geolocation)return console.error("Geolocation is not supported by this browser."),this.loadDefaultLocation();this.map=new window.google.maps.Map(document.getElementById("map"),{center:{lat:52.377956,lng:4.89707},zoom:12,mapTypeControl:!1,zoomControl:!1,cameraControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,gestureHandling:"greedy"}),this.loadHeatmap(),this.trackUserLocation(),this.loadSportFacilities()},async loadSportFacilities(){try{const t=await fetch("https://vibemapbe.com/external/external/sport");if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);const e=await t.json();this.addSportFacilitiesMarkers(e.sport_parks)}catch(t){console.error("Error fetching sport facilities data:",t)}},addSportFacilitiesMarkers(t){t.forEach(e=>{const l=document.createElement("div");l.innerHTML='<i class="material-icons" style="font-size: 24px; color: #000000;">fitness_center</i>';const o=new window.google.maps.marker.PinElement({glyph:l,glyphColor:"#ffffff",background:"#9C27B0",borderColor:"#9C27B0"}),n=new window.google.maps.marker.AdvancedMarkerElement({map:this.map,position:{lat:e.latitude,lng:e.longitude},content:o.element,title:e.name});this.sportFacilitiesMarkers.push(n)})},trackUserLocation(){let t=!0;navigator.geolocation.watchPosition(e=>{const l={lat:e.coords.latitude,lng:e.coords.longitude};t&&(this.map.setCenter(l),this.map.setZoom(15),t=!1),this.userMarker?this.userMarker.setPosition(l):this.userMarker=new window.google.maps.Marker({position:l,map:this.map,icon:{path:window.google.maps.SymbolPath.CIRCLE,scale:8,fillColor:"#4285F4",fillOpacity:1,strokeWeight:2,strokeColor:"#ffffff"}})},()=>{console.error("User denied Geolocation."),this.loadDefaultLocation()},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})},recenterMap(){navigator.geolocation?navigator.geolocation.getCurrentPosition(t=>{const e={lat:t.coords.latitude,lng:t.coords.longitude};this.map.setCenter(e),this.map.setZoom(15),this.userMarker||(this.userMarker=new window.google.maps.Marker({position:e,map:this.map,icon:{path:window.google.maps.SymbolPath.CIRCLE,scale:8,fillColor:"#4285F4",fillOpacity:1,strokeWeight:2,strokeColor:"#ffffff"}}))},()=>{console.error("Unable to retrieve location.")}):console.error("Geolocation is not supported.")},async loadHeatmap(){var t=[];try{if(t=await fetch("https://vibemapbe.com/location/location/locations/"),!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);t=await t.json(),console.log(t)}catch(d){console.error("Error fetching data:",d)}console.log(t);const e=[],l=[],o=[],n=[];t.forEach(d=>{const b={location:new window.google.maps.LatLng(d.latitude,d.longitude),weight:d.stress_level};d.stress_level>=.5&&d.stress_level<1.5?e.push(b):d.stress_level>=1.5&&d.stress_level<2.5?l.push(b):d.stress_level>=2.5&&d.stress_level<3.5?o.push(b):d.stress_level>=3.5&&d.stress_level<=4.5?n.push(b):console.error("Invalid stress level:",d.stress_level)});var i=new window.google.maps.visualization.HeatmapLayer({data:e,radius:50,gradient:["rgba(255, 0, 0, 0)","rgba(255, 0, 0, 0.8)"]}),s=new window.google.maps.visualization.HeatmapLayer({data:l,radius:50,gradient:["rgba(255, 100, 0, 0)","rgba(255, 100, 0, 0.8)"]}),k=new window.google.maps.visualization.HeatmapLayer({data:o,radius:50,gradient:["rgba(100, 255, 0, 0)","rgba(100, 255, 0, 0.8)"]}),C=new window.google.maps.visualization.HeatmapLayer({data:n,radius:50,gradient:["rgba(0, 255, 0, 0)","rgba(0, 255, 0, 0.8)"]});this.highstress&&i.setMap(this.map),this.mediumstress&&s.setMap(this.map),this.nostress&&k.setMap(this.map),this.absnostress&&C.setMap(this.map)},loadDefaultLocation(){const t={lat:52.377956,lng:4.89707};this.map.setCenter(t),this.map.setZoom(12)},getMarkerLatLng(t){if(!t||!t.getPosition)throw new Error("Invalid marker object provided.");const e=t.getPosition();return{lat:e.lat(),lng:e.lng()}},async submitRating(){if(!this.userMarker){console.error("User marker is not available.");return}const t=localStorage.getItem("usertoken"),e=this.getMarkerLatLng(this.userMarker);console.log("Latitude:",e.lat),console.log("Longitude:",e.lng),console.log(e);const l={latitude:e.lat,longitude:e.lng,comment:this.reason?this.reason:null,stress_level:this.ratingModel,construction:this.construction,noise:this.noise,crowd:this.crowd,sport:this.sport,nature:this.nature};try{const o=await fetch("https://vibemapbe.com/location/location/locations/",{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify(l)});if(!o.ok)throw new Error(`HTTP error! Status: ${o.status}`);const n=await o.json();console.log("Review submitted successfully:",n),this.loadHeatmap()}catch(o){console.error("Error submitting review:",o),alert("Failed to submit review. Please try again.")}finally{this.ratingModel=0,this.reason=""}}},setup(){const t=f(),e=f(),l=f(),o=f(),n=f(),i=f(),s=f(),k=f();E(()=>{t.value=localStorage.getItem("isLoggedIn")==="true",e.value=JSON.parse(localStorage.getItem("constructionMarkings")),l.value=JSON.parse(localStorage.getItem("sportFacilities")),o.value=JSON.parse(localStorage.getItem("highstress")),n.value=JSON.parse(localStorage.getItem("mediumstress")),i.value=JSON.parse(localStorage.getItem("nostress")),s.value=JSON.parse(localStorage.getItem("absnostress")),k.value=JSON.parse(localStorage.getItem("nightMode"))});const C=(d,b)=>{localStorage.setItem(d,JSON.stringify(b))};return{ratingModel:f(0),ratingColors:["red","orange","green","green-9"],icons:["sentiment_very_dissatisfied","sentiment_dissatisfied","sentiment_satisfied","sentiment_very_satisfied"],noise:f(!1),crowd:f(!1),construction:f(!1),nature:f(!1),sport:f(!1),isLoggedIn:t,constructionMarkings:e,sportFacilities:l,nightMode:k,highstress:o,mediumstress:n,nostress:i,absnostress:s,saveSetting:C}}},O={class:"map-cont p-5 pb-5"},T={class:"rate-cont p-5 pt-5"},z={key:0,class:"intro-cont p-5 pt-5 bg-primary"},R={class:"btn-cnt"},D={class:"btn-cnt"},J={class:"pref-cont"},j={class:"btn-cnt"},W={class:"btn-cnt"},G={class:"text-body1"},Z={class:"btn-cnt"};function Y(t,e,l,o,n,i){return u(),m(A,{class:"q-pa-none main-page"},{default:p(()=>[a("div",O,[e[19]||(e[19]=a("div",{id:"map",class:"google-map q-card"},null,-1)),r(c,{class:"recenter-btn",color:"primary",icon:"my_location",onClick:i.recenterMap},null,8,["onClick"])]),a("div",T,[o.isLoggedIn?(u(),m(h,{key:0,class:"rate-card"},{default:p(()=>[r(S,null,{default:p(()=>[e[21]||(e[21]=a("div",{class:"text-h6"},"Rate your location",-1)),r(Q,{class:"rating-icons",modelValue:o.ratingModel,"onUpdate:modelValue":e[0]||(e[0]=s=>o.ratingModel=s),max:4,color:"grey","color-selected":o.ratingColors,icon:o.icons},null,8,["modelValue","color-selected","icon"]),o.ratingModel?(u(),m(q,{key:0,class:"reason-label"},{default:p(()=>e[20]||(e[20]=[M("Reason")])),_:1})):g("",!0),o.ratingModel===1||o.ratingModel===2?(u(),m(y,{key:1,class:"checkbox noise",modelValue:o.noise,"onUpdate:modelValue":e[1]||(e[1]=s=>o.noise=s),"checked-icon":"campaign","unchecked-icon":"volume_down_alt","indeterminate-icon":"sound_detection_loud_sound"},null,8,["modelValue"])):g("",!0),o.ratingModel===1||o.ratingModel===2?(u(),m(y,{key:2,class:"checkbox crowd",modelValue:o.crowd,"onUpdate:modelValue":e[2]||(e[2]=s=>o.crowd=s),"checked-icon":"groups","unchecked-icon":"group_off","indeterminate-icon":"groups_2"},null,8,["modelValue"])):g("",!0),o.ratingModel===1||o.ratingModel===2?(u(),m(y,{key:3,class:"checkbox construction",modelValue:o.construction,"onUpdate:modelValue":e[3]||(e[3]=s=>o.construction=s),"checked-icon":"construction","unchecked-icon":"build_circle","indeterminate-icon":"construction"},null,8,["modelValue"])):g("",!0),o.ratingModel===3||o.ratingModel===4?(u(),m(y,{key:4,class:"checkbox sport",modelValue:o.sport,"onUpdate:modelValue":e[4]||(e[4]=s=>o.sport=s),"checked-icon":"sports_tennis","unchecked-icon":"sports_tennis","indeterminate-icon":"sports_tennis"},null,8,["modelValue"])):g("",!0),o.ratingModel===3||o.ratingModel===4?(u(),m(y,{key:5,class:"checkbox nature",modelValue:o.nature,"onUpdate:modelValue":e[5]||(e[5]=s=>o.nature=s),"checked-icon":"nature","unchecked-icon":"nature","indeterminate-icon":"nature"},null,8,["modelValue"])):g("",!0),o.ratingModel?(u(),m(N,{key:6,modelValue:t.reason,"onUpdate:modelValue":e[6]||(e[6]=s=>t.reason=s),label:"Comment",placeholder:"Why did you give this rating?",type:"textarea",rows:"1",optional:""},null,8,["modelValue"])):g("",!0)]),_:1}),o.ratingModel?(u(),m(B,{key:0,align:"right"},{default:p(()=>[r(c,{label:"Submit",color:"primary",onClick:i.submitRating,class:"radius-10"},null,8,["onClick"])]),_:1})):g("",!0)]),_:1})):g("",!0),o.isLoggedIn?g("",!0):(u(),m(h,{key:1},{default:p(()=>[r(S,null,{default:p(()=>[e[22]||(e[22]=a("div",{class:"text-h7"},"Please sign up or log in to be able to rate your location.",-1)),r(V,{class:"q-gutter-sm w-100"},{default:p(()=>[r(c,{label:"Login",color:"primary",class:"col-6",to:"/profile"}),r(c,{label:"Signup",color:"secondary",outline:"",class:"col-6",to:"./signup"})]),_:1})]),_:1})]),_:1}))]),!o.isLoggedIn&&n.showIntro?(u(),F("div",z,[n.currentCard===1?(u(),m(h,{key:0},{default:p(()=>[e[23]||(e[23]=a("div",{class:"text-h5 font-atkinson-bold"},"Welcome to VibeMap",-1)),e[24]||(e[24]=a("div",{class:"text-body1"},[a("p",null,"Find your calm in the urban jungle. VibeMap is a community‐driven guide that shows you where to find relaxing spots and avoid stress in your city."),a("p",null,"By rating places on a 1–4 scale using smileys and sharing feedback on ambiance, noise, and environment – along with your personal comments – you help build a living map that reflects the true vibe of your urban surroundings."),a("p",null,"Your input helps everyone navigate towards more relaxing experiences.")],-1)),a("div",R,[r(c,{label:"Skip",color:"secondary",onClick:i.closeCards,class:"radius-10 left-btn"},null,8,["onClick"]),r(c,{label:"Next",color:"primary",onClick:i.nextCard,class:"radius-10 right-btn"},null,8,["onClick"])])]),_:1})):g("",!0),n.currentCard===2?(u(),m(h,{key:1},{default:p(()=>[e[25]||(e[25]=a("div",{class:"text-h5 font-atkinson-bold"},"Understanding Urban Stress",-1)),e[26]||(e[26]=a("div",{class:"text-body1"},[a("p",null,"City life is full of contrasts. For some, the hum of construction or crowded streets can be overwhelming, while for others, a touch of nature or active leisure can provide much-needed relief."),a("p",null,"We want to understand how these factors affect you personally – so that VibeMap can better guide you to the environments that match your unique needs."),a("p",null,"VibeMap is a project by the students of the University of Amsterdam. It is a part of the Social Complexity and Designing with Data course, which aims to promote and increase urban mental health.")],-1)),a("div",D,[r(c,{label:"Previous",color:"secondary",onClick:i.previousCard,class:"radius-10 left-btn"},null,8,["onClick"]),r(c,{label:"Next",color:"primary",onClick:i.nextCard,class:"radius-10 right-btn"},null,8,["onClick"])])]),_:1})):g("",!0),n.currentCard===3?(u(),m(h,{key:2},{default:p(()=>[e[27]||(e[27]=a("div",{class:"text-h5 font-atkinson-bold"},"Preferences",-1)),e[28]||(e[28]=a("div",{class:"text-body1"},[a("p",null,"You can select what you would like to see on your map. You can modify these later in the Settings page.")],-1)),a("div",J,[r(v,{modelValue:o.constructionMarkings,"onUpdate:modelValue":[e[7]||(e[7]=s=>o.constructionMarkings=s),e[8]||(e[8]=s=>o.saveSetting("constructionMarkings",o.constructionMarkings))],label:"Enable Construction Markings"},null,8,["modelValue"]),r(v,{modelValue:o.sportFacilities,"onUpdate:modelValue":[e[9]||(e[9]=s=>o.sportFacilities=s),e[10]||(e[10]=s=>o.saveSetting("sportFacilities",o.sportFacilities))],label:"Enable Sport Facility Markings"},null,8,["modelValue"]),r(v,{modelValue:o.highstress,"onUpdate:modelValue":[e[11]||(e[11]=s=>o.highstress=s),e[12]||(e[12]=s=>o.saveSetting("highstress",o.highstress))],label:"Show High-Stress areas"},null,8,["modelValue"]),r(v,{modelValue:o.mediumstress,"onUpdate:modelValue":[e[13]||(e[13]=s=>o.mediumstress=s),e[14]||(e[14]=s=>o.saveSetting("mediumstress",o.mediumstress))],label:"Show Medium-Stress areas"},null,8,["modelValue"]),r(v,{modelValue:o.nostress,"onUpdate:modelValue":[e[15]||(e[15]=s=>o.nostress=s),e[16]||(e[16]=s=>o.saveSetting("nostress",o.nostress))],label:"Show No-Stress areas"},null,8,["modelValue"]),r(v,{modelValue:o.absnostress,"onUpdate:modelValue":[e[17]||(e[17]=s=>o.absnostress=s),e[18]||(e[18]=s=>o.saveSetting("absnostress",o.absnostress))],label:"Show Absolutely No-Stress areas"},null,8,["modelValue"])]),a("div",j,[r(c,{label:"Previous",color:"secondary",onClick:i.previousCard,class:"radius-10 left-btn"},null,8,["onClick"]),r(c,{label:"Next",color:"primary",onClick:i.nextCard,class:"radius-10 right-btn"},null,8,["onClick"])])]),_:1})):g("",!0),n.currentCard===4?(u(),m(h,{key:3},{default:p(()=>[e[29]||(e[29]=a("div",{class:"text-h5 font-atkinson-bold"},"How VibeMap Works",-1)),e[30]||(e[30]=a("div",{class:"text-body1"},[a("p",null,"1. Rate your current location by selecting a smiley that best represents your stress level."),a("p",null,"2. Add a comment to share your thoughts on the location. Optionally, select the cause of your rating using the available options."),a("p",null,"3. Use the map to find relaxing spots and avoid stress in your city."),a("p",null,"Every rating and comment builds a detailed, crowdsourced map to help everyone navigate toward a more relaxed city.")],-1)),a("div",W,[r(c,{label:"Previous",color:"secondary",onClick:i.previousCard,class:"radius-10 left-btn"},null,8,["onClick"]),r(c,{label:"Next",color:"primary",onClick:i.nextCard,class:"radius-10 right-btn"},null,8,["onClick"])])]),_:1})):g("",!0),n.currentCard===5?(u(),m(h,{key:4},{default:p(()=>[e[34]||(e[34]=a("div",{class:"text-h5 font-atkinson-bold"},"Contact us",-1)),a("div",G,[a("p",null,[e[31]||(e[31]=M("For questions or feedback, please contact us at using the ")),r(c,{to:"/feedback",label:"Feedback",flat:"",color:"primary"}),e[32]||(e[32]=M(" page."))]),e[33]||(e[33]=a("p",null,"Sign up or log in to start rating your location and help others find their calm.",-1))]),a("div",null,[r(V,{class:"q-gutter-sm w-100"},{default:p(()=>[r(c,{label:"Login",color:"primary",class:"col-6",to:"/profile"}),r(c,{label:"Signup",color:"secondary",outline:"",class:"col-6",to:"./signup"})]),_:1})]),a("div",Z,[r(c,{label:"Previous",color:"secondary",onClick:i.previousCard,class:"radius-10 left-btn"},null,8,["onClick"]),r(c,{label:"Get started!",color:"primary",onClick:i.closeCards,class:"radius-10 right-btn"},null,8,["onClick"])])]),_:1})):g("",!0)])):g("",!0)]),_:1})}const ue=H(_,[["render",Y]]);export{ue as default};
