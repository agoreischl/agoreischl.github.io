import{Q as b,a as g}from"./QCard-BZZ6KD97.js";import{Q as f}from"./QSeparator-CrWo0nHH.js";import{Q as V}from"./QIcon-C5UeeBWb.js";import{u as k,a as M,b as x}from"./use-checkbox-D7LTOC2X.js";import{c as I,a as S,h as d,J as p,K as N,L as u,r as a,o as Q,O as s,R as C}from"./index-Dxh9G3kF.js";import{Q as J}from"./QPage-BbLKCg-2.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./use-dark-Dddl6uUp.js";import"./private.use-form-owtYE6nQ.js";const r=I({name:"QToggle",props:{...M,icon:String,iconColor:String},emits:k,setup(l){function e(n,t){const i=S(()=>(n.value===!0?l.checkedIcon:t.value===!0?l.indeterminateIcon:l.uncheckedIcon)||l.icon),m=S(()=>n.value===!0?l.iconColor:null);return()=>[d("div",{class:"q-toggle__track"}),d("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},i.value!==void 0?[d(V,{name:i.value,color:m.value})]:void 0)]}return x("toggle",e)}}),w={setup(){const l=a(!0),e=a(!0),n=a(!0),t=a(!0),i=a(!0),m=a(!0),o=a(!1);return Q(()=>{l.value=JSON.parse(localStorage.getItem("constructionMarkings"))||!0,e.value=JSON.parse(localStorage.getItem("sportFacilities"))||!0,n.value=JSON.parse(localStorage.getItem("highstress"))||!0,t.value=JSON.parse(localStorage.getItem("mediumstress"))||!0,i.value=JSON.parse(localStorage.getItem("nostress"))||!0,m.value=JSON.parse(localStorage.getItem("absnostress"))||!0,o.value=JSON.parse(localStorage.getItem("nightMode"))||!1}),{constructionMarkings:l,sportFacilities:e,nightMode:o,highstress:n,mediumstress:t,nostress:i,absnostress:m,saveSetting:(v,c)=>{localStorage.setItem(v,JSON.stringify(c))}}}};function F(l,e,n,t,i,m){return N(),p(J,{class:"q-pa-md"},{default:u(()=>[s(b,{class:"shadow-2",style:{"max-width":"500px",margin:"auto"}},{default:u(()=>[s(g,null,{default:u(()=>e[14]||(e[14]=[C("div",{class:"text-h6 text-center"},"Settings",-1)])),_:1}),s(f),s(g,null,{default:u(()=>[s(r,{modelValue:t.constructionMarkings,"onUpdate:modelValue":[e[0]||(e[0]=o=>t.constructionMarkings=o),e[1]||(e[1]=o=>t.saveSetting("constructionMarkings",t.constructionMarkings))],label:"Enable Construction Markings"},null,8,["modelValue"]),s(r,{modelValue:t.sportFacilities,"onUpdate:modelValue":[e[2]||(e[2]=o=>t.sportFacilities=o),e[3]||(e[3]=o=>t.saveSetting("sportFacilities",t.sportFacilities))],label:"Enable Sport Facility Markings"},null,8,["modelValue"]),s(r,{modelValue:t.highstress,"onUpdate:modelValue":[e[4]||(e[4]=o=>t.highstress=o),e[5]||(e[5]=o=>t.saveSetting("highstress",t.highstress))],label:"Show High-Stress areas"},null,8,["modelValue"]),s(r,{modelValue:t.mediumstress,"onUpdate:modelValue":[e[6]||(e[6]=o=>t.mediumstress=o),e[7]||(e[7]=o=>t.saveSetting("mediumstress",t.mediumstress))],label:"Show Medium-Stress areas"},null,8,["modelValue"]),s(r,{modelValue:t.nostress,"onUpdate:modelValue":[e[8]||(e[8]=o=>t.nostress=o),e[9]||(e[9]=o=>t.saveSetting("nostress",t.nostress))],label:"Show No-Stress areas"},null,8,["modelValue"]),s(r,{modelValue:t.absnostress,"onUpdate:modelValue":[e[10]||(e[10]=o=>t.absnostress=o),e[11]||(e[11]=o=>t.saveSetting("absnostress",t.absnostress))],label:"Show Absolutely No-Stress areas"},null,8,["modelValue"]),s(r,{modelValue:t.nightMode,"onUpdate:modelValue":[e[12]||(e[12]=o=>t.nightMode=o),e[13]||(e[13]=o=>t.saveSetting("nightMode",t.nightMode))],label:"Enable Dark Mode"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})}const K=O(w,[["render",F]]);export{K as default};
