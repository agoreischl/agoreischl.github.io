import{u as M,b as x,Q as n}from"./QBtn-IlBqq_4Q.js";import{Q as S}from"./QRating-DiLDGXZu.js";import{Q as L}from"./QInput-Dxr5hR57.js";import{Q as f,a as y}from"./QCard-BD83MugJ.js";import{c as _,a as I,h as P,J as g,K as u,L as c,r as m,o as N,R as o,T as Q,W as p,Q as r,S as C}from"./index-AKjf-gdM.js";import{h as V}from"./QIcon-DiWWkLZ2.js";import{Q as k}from"./QItem-COhhMMFJ.js";import{Q as A}from"./QPage-BSYzrlSS.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./private.use-form-WM0C8g1z.js";import"./use-dark-BaCyaXGy.js";const E=_({name:"QCardActions",props:{...M,vertical:Boolean},setup(t,{slots:e}){const s=x(t),a=I(()=>`q-card__actions ${s.value} q-card__actions--${t.vertical===!0?"vert column":"horiz row"}`);return()=>P("div",{class:a.value},V(e.default))}}),O={data(){return{map:null,userMarker:null,currentCard:1,showIntro:!0}},mounted(){this.loadGoogleMaps()},methods:{loadGoogleMaps(){if(window.google&&window.google.maps){this.initMap();return}const t=document.createElement("script");t.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCa6szZqcobw9AEf8KiqXUDpAoLgSR6v7A",t.async=!0,t.defer=!0,t.onload=()=>this.initMap(),document.head.appendChild(t)},nextCard(){this.currentCard<5&&this.currentCard++},previousCard(){this.currentCard<6&&this.currentCard--},closeCards(){this.currentCard=1,this.showIntro=!1},initMap(){if(!navigator.geolocation)return console.error("Geolocation is not supported by this browser."),this.loadDefaultLocation();this.map=new window.google.maps.Map(document.getElementById("map"),{center:{lat:52.377956,lng:4.89707},zoom:12,mapTypeControl:!1,zoomControl:!1,cameraControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,gestureHandling:"greedy"}),this.loadHeatmap(),this.trackUserLocation()},trackUserLocation(){let t=!0;navigator.geolocation.watchPosition(e=>{const s={lat:e.coords.latitude,lng:e.coords.longitude};t&&(this.map.setCenter(s),this.map.setZoom(15),t=!1),this.userMarker?this.userMarker.setPosition(s):this.userMarker=new window.google.maps.Marker({position:s,map:this.map,icon:{path:window.google.maps.SymbolPath.CIRCLE,scale:8,fillColor:"#4285F4",fillOpacity:1,strokeWeight:2,strokeColor:"#ffffff"}})},()=>{console.error("User denied Geolocation."),this.loadDefaultLocation()},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})},recenterMap(){navigator.geolocation?navigator.geolocation.getCurrentPosition(t=>{const e={lat:t.coords.latitude,lng:t.coords.longitude};this.map.setCenter(e),this.map.setZoom(15),this.userMarker||(this.userMarker=new window.google.maps.Marker({position:e,map:this.map,icon:{path:window.google.maps.SymbolPath.CIRCLE,scale:8,fillColor:"#4285F4",fillOpacity:1,strokeWeight:2,strokeColor:"#ffffff"}}))},()=>{console.error("Unable to retrieve location.")}):console.error("Geolocation is not supported.")},async loadHeatmap(){var t=[];try{if(t=await fetch("https://vibemapbe.com/location/location/locations/"),!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);t=await t.json(),console.log(t)}catch(i){console.error("Error fetching data:",i)}console.log(t);const e=[],s=[],a=[],d=[];t.forEach(i=>{const b={location:new window.google.maps.LatLng(i.latitude,i.longitude),weight:i.stress_level};i.stress_level>=.5&&i.stress_level<1.5?e.push(b):i.stress_level>=1.5&&i.stress_level<2.5?s.push(b):i.stress_level>=2.5&&i.stress_level<3.5?a.push(b):i.stress_level>=3.5&&i.stress_level<=4.5?d.push(b):console.error("Invalid stress level:",i.stress_level)});var l=new window.google.maps.visualization.HeatmapLayer({data:e,radius:50,gradient:["rgba(255, 0, 0, 0)","rgba(255, 0, 0, 0.8)"]}),h=new window.google.maps.visualization.HeatmapLayer({data:s,radius:50,gradient:["rgba(255, 100, 0, 0)","rgba(255, 100, 0, 0.8)"]}),v=new window.google.maps.visualization.HeatmapLayer({data:a,radius:50,gradient:["rgba(100, 255, 0, 0)","rgba(100, 255, 0, 0.8)"]}),w=new window.google.maps.visualization.HeatmapLayer({data:d,radius:50,gradient:["rgba(0, 255, 0, 0)","rgba(0, 255, 0, 0.8)"]});this.highstress&&l.setMap(this.map),this.mediumstress&&h.setMap(this.map),this.nostress&&v.setMap(this.map),this.absnostress&&w.setMap(this.map)},loadDefaultLocation(){const t={lat:52.377956,lng:4.89707};this.map.setCenter(t),this.map.setZoom(12)},async submitRating(){const t=localStorage.getItem("usertoken");navigator.geolocation&&navigator.geolocation.getCurrentPosition(s=>{const a={lat:s.coords.latitude,lng:s.coords.longitude};this.map.setCenter(a)});const e={latitude:this.map.userLocation.lat(),longitude:this.map.userLocation.lng(),comment:this.reason,stress_level:this.ratingModel};try{const s=await fetch("https://vibemapbe.com/location/location/locations/",{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify(e)});if(!s.ok)throw new Error(`HTTP error! Status: ${s.status}`);const a=await s.json();console.log("Review submitted successfully:",a),this.loadHeatmap()}catch(s){console.error("Error submitting review:",s),alert("Failed to submit review. Please try again.")}finally{this.ratingModel=0,this.reason=""}}},setup(){const t=m(!0),e=m(!0),s=m(!0),a=m(!0),d=m(!0),l=m(!0),h=m(!0),v=m(!1);return N(()=>{t.value=localStorage.getItem("isLoggedIn")==="true",e.value=JSON.parse(localStorage.getItem("constructionMarkings"))||!0,s.value=JSON.parse(localStorage.getItem("sportFacilities"))||!0,a.value=JSON.parse(localStorage.getItem("highstress"))||!0,d.value=JSON.parse(localStorage.getItem("mediumstress"))||!0,l.value=JSON.parse(localStorage.getItem("nostress"))||!0,h.value=JSON.parse(localStorage.getItem("absnostress"))||!0,v.value=JSON.parse(localStorage.getItem("nightMode"))||!1}),{ratingModel:m(0),ratingColors:["red","orange","green","green-9"],icons:["sentiment_very_dissatisfied","sentiment_dissatisfied","sentiment_satisfied","sentiment_very_satisfied"],isLoggedIn:t,constructionMarkings:e,sportFacilities:s,nightMode:v,highstress:a,mediumstress:d,nostress:l,absnostress:h}}},R={class:"map-cont p-5 pb-5"},z={class:"rate-cont p-5 pt-5"},U={key:0,class:"intro-cont p-5 pt-5 bg-primary"},q={class:"btn-cnt"},B={class:"btn-cnt"},D={class:"btn-cnt"},J={class:"btn-cnt"},T={class:"btn-cnt"};function F(t,e,s,a,d,l){return u(),g(A,{class:"q-pa-none main-page"},{default:c(()=>[o("div",R,[e[2]||(e[2]=o("div",{id:"map",class:"google-map q-card"},null,-1)),r(n,{class:"recenter-btn",color:"primary",icon:"my_location",onClick:l.recenterMap},null,8,["onClick"])]),o("div",z,[a.isLoggedIn?(u(),g(f,{key:0,class:"rate-card"},{default:c(()=>[r(y,null,{default:c(()=>[e[3]||(e[3]=o("div",{class:"text-h6"},"Rate your location",-1)),r(S,{class:"rating-icons",modelValue:a.ratingModel,"onUpdate:modelValue":e[0]||(e[0]=h=>a.ratingModel=h),max:4,color:"grey","color-selected":a.ratingColors,icon:a.icons},null,8,["modelValue","color-selected","icon"]),a.ratingModel?(u(),g(L,{key:0,modelValue:t.reason,"onUpdate:modelValue":e[1]||(e[1]=h=>t.reason=h),label:"Reason",placeholder:"Why did you give this rating?",type:"textarea",rows:"3",optional:""},null,8,["modelValue"])):p("",!0)]),_:1}),a.ratingModel?(u(),g(E,{key:0,align:"right"},{default:c(()=>[r(n,{label:"Submit",color:"primary",onClick:l.submitRating,class:"radius-10"},null,8,["onClick"])]),_:1})):p("",!0)]),_:1})):p("",!0),a.isLoggedIn?p("",!0):(u(),g(f,{key:1},{default:c(()=>[r(y,null,{default:c(()=>[e[4]||(e[4]=o("div",{class:"text-h7"},"Please sign up or log in to be able to rate your location.",-1)),r(k,{class:"q-gutter-sm w-100"},{default:c(()=>[r(n,{label:"Login",color:"primary",class:"col-6",to:"/profile"}),r(n,{label:"Signup",color:"secondary",outline:"",class:"col-6",to:"./signup"})]),_:1})]),_:1})]),_:1}))]),!a.isLoggedIn&&d.showIntro?(u(),Q("div",U,[d.currentCard===1?(u(),g(f,{key:0},{default:c(()=>[e[5]||(e[5]=o("div",{class:"text-h4 font-atkinson-bold"},"Welcome to VibeMap",-1)),e[6]||(e[6]=o("div",{class:"text-body1"},[o("p",null,"Find your calm in the urban jungle. VibeMap is a community‐driven guide that shows you where to find relaxing spots and avoid stress in your city."),o("p",null,"By rating places on a 1–4 scale using smileys and sharing feedback on ambiance, noise, and environment – along with your personal comments – you help build a living map that reflects the true vibe of your urban surroundings."),o("p",null,"Your input helps everyone navigate towards more relaxing experiences.")],-1)),o("div",q,[r(n,{label:"Skip",color:"secondary",onClick:l.closeCards,class:"radius-10 left-btn"},null,8,["onClick"]),r(n,{label:"Next",color:"primary",onClick:l.nextCard,class:"radius-10 right-btn"},null,8,["onClick"])])]),_:1})):p("",!0),d.currentCard===2?(u(),g(f,{key:1},{default:c(()=>[e[7]||(e[7]=o("div",{class:"text-h4 font-atkinson-bold"},"How to use VibeMap",-1)),e[8]||(e[8]=o("div",{class:"text-body1"},[o("p",null,"1. Rate your current location by selecting a smiley that best represents your stress level."),o("p",null,"2. Add a comment to share your thoughts on the location."),o("p",null,"3. Your rating will be added to the map and shared with the community."),o("p",null,"4. Use the map to find relaxing spots and avoid stress in your city.")],-1)),o("div",B,[r(n,{label:"Previous",color:"secondary",onClick:l.previousCard,class:"radius-10 left-btn"},null,8,["onClick"]),r(n,{label:"Next",color:"primary",onClick:l.nextCard,class:"radius-10 right-btn"},null,8,["onClick"])])]),_:1})):p("",!0),d.currentCard===3?(u(),g(f,{key:2},{default:c(()=>[e[9]||(e[9]=o("div",{class:"text-h4 font-atkinson-bold"},"Get started",-1)),e[10]||(e[10]=o("div",{class:"text-body1"},[o("p",null,"Sign up or log in to start rating your location and help others find their calm.")],-1)),o("div",null,[r(k,{class:"q-gutter-sm w-100"},{default:c(()=>[r(n,{label:"Login",color:"primary",class:"col-6",to:"/profile"}),r(n,{label:"Signup",color:"secondary",outline:"",class:"col-6",to:"./signup"})]),_:1})]),o("div",D,[r(n,{label:"Previous",color:"secondary",onClick:l.previousCard,class:"radius-10 left-btn"},null,8,["onClick"]),r(n,{label:"Next",color:"primary",onClick:l.nextCard,class:"radius-10 right-btn"},null,8,["onClick"])])]),_:1})):p("",!0),d.currentCard===4?(u(),g(f,{key:3},{default:c(()=>[e[11]||(e[11]=o("div",{class:"text-h4 font-atkinson-bold"},"About VibeMap",-1)),e[12]||(e[12]=o("div",{class:"text-body1"},[o("p",null,"VibeMap is a project by the students of the University of Amsterdam. It is a part of the Social Complexity and Designing with Data course, which aims to promote and increase urban mental health.")],-1)),o("div",J,[r(n,{label:"Previous",color:"secondary",onClick:l.previousCard,class:"radius-10 left-btn"},null,8,["onClick"]),r(n,{label:"Next",color:"primary",onClick:l.nextCard,class:"radius-10 right-btn"},null,8,["onClick"])])]),_:1})):p("",!0),d.currentCard===5?(u(),g(f,{key:4},{default:c(()=>[e[13]||(e[13]=o("div",{class:"text-h4 font-atkinson-bold"},"Contact us",-1)),e[14]||(e[14]=o("div",{class:"text-body1"},[o("p",null,[C("For questions or feedback, please contact us at "),o("a",{href:"mailto:agoston.reischl@student.uva.nl"},"agoston.reischl@student.uva.nl"),C(".")])],-1)),o("div",T,[r(n,{label:"Previous",color:"secondary",onClick:l.previousCard,class:"radius-10 left-btn"},null,8,["onClick"]),r(n,{label:"Close",color:"primary",onClick:l.closeCards,class:"radius-10 right-btn"},null,8,["onClick"])])]),_:1})):p("",!0)])):p("",!0)]),_:1})}const se=H(O,[["render",F]]);export{se as default};
