import{a as q,Q as P,_ as U,b as d}from"./vibemap-logo-D95Evwf1.js";import{Q as i}from"./QItem-5m-mpdHl.js";import{Q as V}from"./QSeparator-CoH9drxa.js";import{Q as S}from"./QInput-Bo629G8r.js";import{Q as L,R as y}from"./QBtn--jiCy6NF.js";import{Q as A}from"./QFile-D6gKZUJp.js";import{Q as p}from"./QIcon-BhUrjT6E.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{S as v,K as t,O as l,L as o,r as n,o as N,V as u,T as Q,R as m,k as x,U as R,J as c,W as C,Q as _}from"./index-B5SxcLKG.js";import"./use-dark-qhZxCWy-.js";import"./private.use-form-Cup8av6d.js";const T={setup(){const r=n([{username:"Ágoston",userId:1,email:"agoston@email.com",picture:"src/assets/agos-profile.jpeg",token:"password"}]),e=n(!0),I=n(""),a=n(!1),f=n(""),g=n(""),s=r.value[0].email,k=r.value[0].token;N(()=>{e.value=localStorage.getItem("isLoggedIn")==="true",I.value=localStorage.getItem("loggedInId")});const w=async()=>{f.value&&g.value?f.value==s&&(g.value==k?(e.value=!0,localStorage.setItem("isLoggedIn","true"),localStorage.setItem("loggedInId",Number(r.value[0].userId))):alert("Wrong password or email address Try again.")):console.error("Email and password are required")},E=()=>{e.value=!1,localStorage.setItem("isLoggedIn","false"),localStorage.setItem("loggedInId",null),f.value="",g.value="",b()},b=()=>{location.reload()};return{login:w,logout:E,editProfile:()=>{a.value=!0,console.log(a.value)},saveProfile:()=>{a.value=!1,console.log(a.value)},profileEdit:a,email:f,password:g,isLoggedIn:e,loggedInId:I,userInfo:r}}},W={class:"text-primary text-center q-pa-md flex flex-center w-100"},z=["src"],D={class:"q-mt-md text-h6"},F={class:"text-caption text-grey"};function j(r,e,I,a,f,g){return t(),v("div",W,[l(q,{class:"w-100"},{default:o(()=>[a.isLoggedIn?u("",!0):(t(),v(Q,{key:0},[l(i,{class:"q-pa-md column items-center w-100"},{default:o(()=>[l(P,{size:"72px"},{default:o(()=>e[3]||(e[3]=[m("img",{src:U,alt:"User Avatar"},null,-1)])),_:1}),e[4]||(e[4]=m("div",{class:"q-mt-md text-h6"},"Welcome",-1)),e[5]||(e[5]=m("div",{class:"text-caption text-grey"},"Please login or sign up",-1))]),_:1}),l(V),l(i,{class:"w-100"},{default:o(()=>[l(S,{modelValue:a.email,"onUpdate:modelValue":e[0]||(e[0]=s=>a.email=s),label:"Email",type:"email",filled:"",class:"full-width"},null,8,["modelValue"])]),_:1}),l(i,{class:"w-100"},{default:o(()=>[l(S,{modelValue:a.password,"onUpdate:modelValue":e[1]||(e[1]=s=>a.password=s),label:"Password",type:"password",filled:"",class:"full-width"},null,8,["modelValue"])]),_:1}),l(i,{class:"q-gutter-sm w-100"},{default:o(()=>[l(L,{label:"Login",color:"primary",class:"col-6",onClick:a.login},null,8,["onClick"]),l(L,{label:"Signup",color:"secondary",outline:"",class:"col-6",to:"./signup"})]),_:1})],64)),a.isLoggedIn?(t(),v(Q,{key:1},[(t(!0),v(Q,null,R(a.userInfo,(s,k)=>(t(),c(i,{class:"q-pa-md column items-center w-100",key:k},{default:o(()=>[l(P,{size:"160px"},{default:o(()=>[m("img",{src:s.picture,alt:"User Avatar"},null,8,z),a.profileEdit?(t(),c(A,{key:0,class:"picture-edit",modelValue:r.profilePicture,"onUpdate:modelValue":e[2]||(e[2]=w=>r.profilePicture=w),filled:"",accept:"image/*","max-files":1,onAdded:r.previewImage},null,8,["modelValue","onAdded"])):u("",!0),a.profileEdit?(t(),c(p,{key:1,class:"picture-edit-icon",name:"edit"})):u("",!0)]),_:2},1024),m("div",D,C(s.username),1),m("div",F,C(s.email),1)]),_:2},1024))),128)),l(V),a.profileEdit?u("",!0):x((t(),c(i,{key:0,clickable:"",class:"",onClick:a.editProfile},{default:o(()=>[l(d,{avatar:""},{default:o(()=>[l(p,{name:"edit"})]),_:1}),l(d,null,{default:o(()=>e[6]||(e[6]=[_("Edit profile")])),_:1})]),_:1},8,["onClick"])),[[y]]),a.profileEdit?x((t(),c(i,{key:1,clickable:"",class:"",onClick:a.saveProfile},{default:o(()=>[l(d,{avatar:""},{default:o(()=>[l(p,{name:"save"})]),_:1}),l(d,null,{default:o(()=>e[7]||(e[7]=[_("Save profile")])),_:1})]),_:1},8,["onClick"])),[[y]]):u("",!0),x((t(),c(i,{clickable:"",class:"text-red",onClick:a.logout},{default:o(()=>[l(d,{avatar:""},{default:o(()=>[l(p,{name:"logout",color:"red"})]),_:1}),l(d,null,{default:o(()=>e[8]||(e[8]=[_("Logout")])),_:1})]),_:1},8,["onClick"])),[[y]])],64)):u("",!0)]),_:1})])}const ae=B(T,[["render",j]]);export{ae as default};
