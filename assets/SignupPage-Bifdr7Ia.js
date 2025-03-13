import{a as M,Q as E}from"./QInput-x95AHFYy.js";import{Q as O}from"./QFile-BcHF0miA.js";import{Q as j}from"./QCheckbox-Y15TMU2Y.js";import{a as _,Q as D}from"./QBtn-BaenC8cg.js";import{c as $,r as g,B as K,C as J,o as G,g as X,h as Y,z as L,d as Z,E as H,$ as W,a as ee,T as A,K as B,R as F,Q as p,L as te,a0 as oe,S as ae,M as re}from"./index-CzJ6SqbX.js";import{h as se}from"./QIcon-sviUgeyc.js";import"./use-dark-KsD4oqHZ.js";import"./private.use-form-VRYs0wmx.js";import"./use-checkbox-BqSoQ7zf.js";const le=$({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(v,{slots:b,emit:c}){const x=X(),n=g(null);let i=0;const u=[];function d(t){const r=typeof t=="boolean"?t:v.noErrorFocus!==!0,e=++i,o=(a,s)=>{c(`validation${a===!0?"Success":"Error"}`,s)},V=a=>{const s=a.validate();return typeof s.then=="function"?s.then(l=>({valid:l,comp:a}),l=>({valid:!1,comp:a,err:l})):Promise.resolve({valid:s,comp:a})};return(v.greedy===!0?Promise.all(u.map(V)).then(a=>a.filter(s=>s.valid!==!0)):u.reduce((a,s)=>a.then(()=>V(s).then(l=>{if(l.valid===!1)return Promise.reject(l)})),Promise.resolve()).catch(a=>[a])).then(a=>{if(a===void 0||a.length===0)return e===i&&o(!0),!0;if(e===i){const{comp:s,err:l}=a[0];if(l!==void 0&&console.error(l),o(!1,s),r===!0){const m=a.find(({comp:f})=>typeof f.focus=="function"&&_(f.$)===!1);m!==void 0&&m.comp.focus()}}return!1})}function P(){i++,u.forEach(t=>{typeof t.resetValidation=="function"&&t.resetValidation()})}function U(t){t!==void 0&&L(t);const r=i+1;d().then(e=>{r===i&&e===!0&&(v.onSubmit!==void 0?c("submit",t):t!==void 0&&t.target!==void 0&&typeof t.target.submit=="function"&&t.target.submit())})}function q(t){t!==void 0&&L(t),c("reset"),Z(()=>{P(),v.autofocus===!0&&v.noResetFocus!==!0&&w()})}function w(){M(()=>{if(n.value===null)return;const t=n.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||n.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||n.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(n.value.querySelectorAll("[tabindex]"),r=>r.tabIndex!==-1);t?.focus({preventScroll:!0})})}H(W,{bindComponent(t){u.push(t)},unbindComponent(t){const r=u.indexOf(t);r!==-1&&u.splice(r,1)}});let C=!1;return K(()=>{C=!0}),J(()=>{C===!0&&v.autofocus===!0&&w()}),G(()=>{v.autofocus===!0&&w()}),Object.assign(x.proxy,{validate:d,resetValidation:P,submit:U,reset:q,focus:w,getValidationComponents:()=>u}),()=>Y("form",{class:"q-form",ref:n,onSubmit:U,onReset:q},se(b.default))}}),ne={class:"text-primary text-center q-pa-md flex flex-center"},ie={key:0,class:"q-mt-md"},ue=["src"],de={key:1,class:"q-mt-md",style:{"max-width":"200px","max-height":"200px",border:"2px dashed #ccc",display:"flex","justify-content":"center","align-items":"center","font-size":"14px",color:"#aaa"}},ce={class:"text-h6",style:{opacity:".4"}},me="",Ve={__name:"SignupPage",setup(v){const b=g(""),c=g(""),x=g(""),n=g(""),i=g(!1),u=g(null),d=g(null),P=ee(()=>c.value!==x.value),U=re(),q=(r,e=180,o=180,V=40)=>new Promise((R,a)=>{const s=new FileReader;s.onload=l=>{const m=new Image;m.src=l.target.result,m.onload=()=>{const f=document.createElement("canvas"),N=f.getContext("2d");let h=m.width,y=m.height;h>y?h>e&&(y*=e/h,h=e):y>o&&(h*=o/y,y=o),f.width=h,f.height=y,N.drawImage(m,0,0,h,y);const z=S=>new Promise((T,I)=>{f.toBlob(Q=>{if(!Q){I(new Error("Failed to compress image."));return}if(Q.size/1024<=V)T(Q);else{const k=S-.1;k>=.1?z(k).then(T).catch(I):I(new Error("Unable to compress image below the specified size."))}},"image/jpeg",S)});z(.9).then(S=>R(S)).catch(S=>a(S))},m.onerror=f=>{a(f)}},s.onerror=l=>{a(l)},s.readAsDataURL(r)}),w=async r=>{if(r)try{const e=await q(r),o=new FileReader;o.onload=V=>{d.value=V.target.result},o.readAsDataURL(e)}catch(e){console.error("Error resizing image:",e),alert("Failed to resize image. Please try again.")}else d.value=""},C=()=>{d.value&&(localStorage.setItem("uploadedImage",d.value),console.log("Image saved to local storage."))},t=()=>{if(!P.value){console.log({email:b.value,password:c.value,passwordConfirm:x.value,username:n.value,termsAccepted:i.value,profilePicture:d.value});var r={email:b.value,password:c.value,username:n.value};fetch("https://vibemapbe.com/auth/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then(e=>e.json()).then(e=>{me.status!=200?(alert(e),U.push("/profile")):(console.log("Signup successful:",e),U.push("/"),C())}).catch(e=>{console.error("Signup error:",e),alert("Signup failed. Please try again. Error: "+e)})}};return(r,e)=>(B(),A("div",ne,[F("div",null,[e[7]||(e[7]=F("div",{class:"text-h5"},"Signup Page",-1)),p(le,{class:"q-gutter-md signup-form",onSubmit:oe(t,["prevent"])},{default:te(()=>[p(E,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=o=>n.value=o),label:"Username",filled:"",required:""},null,8,["modelValue"]),p(O,{modelValue:u.value,"onUpdate:modelValue":[e[1]||(e[1]=o=>u.value=o),w],label:"Upload Profile Picture",filled:"",accept:"image/*","max-files":1},null,8,["modelValue"]),d.value?(B(),A("div",ie,[F("img",{src:d.value,alt:"Profile Preview",class:"q-mb-md",style:{"max-width":"200px","max-height":"200px","object-fit":"cover"}},null,8,ue)])):(B(),A("div",de," No Image Uploaded ")),p(E,{modelValue:b.value,"onUpdate:modelValue":e[2]||(e[2]=o=>b.value=o),label:"Email Address",type:"email",filled:"",required:""},null,8,["modelValue"]),p(E,{modelValue:c.value,"onUpdate:modelValue":e[3]||(e[3]=o=>c.value=o),label:"Password",type:"password",filled:"",required:""},null,8,["modelValue"]),p(E,{modelValue:x.value,"onUpdate:modelValue":e[4]||(e[4]=o=>x.value=o),label:"Confirm Password",type:"password",filled:"",required:"",error:P.value,"error-message":"Passwords do not match"},null,8,["modelValue","error"]),p(j,{modelValue:i.value,"onUpdate:modelValue":e[5]||(e[5]=o=>i.value=o),label:"I agree to the Terms of Use",required:""},null,8,["modelValue"]),p(D,{label:"Sign Up",color:"primary",type:"submit",unelevated:"",class:"q-mt-md"})]),_:1}),F("div",ce,[e[6]||(e[6]=ae(" Already have an account? ")),p(D,{flat:"",to:"/profile",label:"Login"})])])]))}};export{Ve as default};
