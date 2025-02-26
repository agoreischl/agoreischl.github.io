import{u as Q,d as R,b as k,Q as w}from"./QIcon-D9E0pm8v.js";import{u as z,a as D,b as P}from"./private.use-form-DjTZUGhH.js";import{c as j,g as K,r as N,a as d,Y as E,h as y,z as g}from"./index-DycyvG6d.js";import{b as U}from"./QInput-kQKLC22A.js";const T=j({name:"QRating",props:{...Q,...z,modelValue:{type:Number,required:!0},max:{type:[String,Number],default:5},icon:[String,Array],iconHalf:[String,Array],iconSelected:[String,Array],iconAriaLabel:[String,Array],color:[String,Array],colorHalf:[String,Array],colorSelected:[String,Array],noReset:Boolean,noDimming:Boolean,readonly:Boolean,disable:Boolean},emits:["update:modelValue"],setup(e,{slots:L,emit:I}){const{proxy:{$q:v}}=K(),H=R(e),$=D(e),x=P($),o=N(0);let u={};const f=d(()=>e.readonly!==!0&&e.disable!==!0),C=d(()=>`q-rating row inline items-center q-rating--${f.value===!0?"":"non-"}editable`+(e.noDimming===!0?" q-rating--no-dimming":"")+(e.disable===!0?" disabled":"")+(e.color!==void 0&&Array.isArray(e.color)===!1?` text-${e.color}`:"")),V=d(()=>{const l=Array.isArray(e.icon)===!0?e.icon.length:0,n=Array.isArray(e.iconSelected)===!0?e.iconSelected.length:0,t=Array.isArray(e.iconHalf)===!0?e.iconHalf.length:0,c=Array.isArray(e.color)===!0?e.color.length:0,i=Array.isArray(e.colorSelected)===!0?e.colorSelected.length:0,a=Array.isArray(e.colorHalf)===!0?e.colorHalf.length:0;return{iconLen:l,icon:l>0?e.icon[l-1]:e.icon,selIconLen:n,selIcon:n>0?e.iconSelected[n-1]:e.iconSelected,halfIconLen:t,halfIcon:t>0?e.iconHalf[n-1]:e.iconHalf,colorLen:c,color:c>0?e.color[c-1]:e.color,selColorLen:i,selColor:i>0?e.colorSelected[i-1]:e.colorSelected,halfColorLen:a,halfColor:a>0?e.colorHalf[a-1]:e.colorHalf}}),q=d(()=>{if(typeof e.iconAriaLabel=="string"){const l=e.iconAriaLabel.length!==0?`${e.iconAriaLabel} `:"";return n=>`${l}${n}`}if(Array.isArray(e.iconAriaLabel)===!0){const l=e.iconAriaLabel.length;if(l>0)return n=>e.iconAriaLabel[Math.min(n,l)-1]}return(l,n)=>`${n} ${l}`}),_=d(()=>{const l=[],n=V.value,t=Math.ceil(e.modelValue),c=f.value===!0?0:null,i=e.iconHalf===void 0||t===e.modelValue?-1:t;for(let a=1;a<=e.max;a++){const r=o.value===0&&e.modelValue>=a||o.value>0&&o.value>=a,s=i===a&&o.value<a,m=o.value>0&&(s===!0?t:e.modelValue)>=a&&o.value<a,b=s===!0?a<=n.halfColorLen?e.colorHalf[a-1]:n.halfColor:n.selColor!==void 0&&r===!0?a<=n.selColorLen?e.colorSelected[a-1]:n.selColor:a<=n.colorLen?e.color[a-1]:n.color,F=(s===!0?a<=n.halfIconLen?e.iconHalf[a-1]:n.halfIcon:n.selIcon!==void 0&&(r===!0||m===!0)?a<=n.selIconLen?e.iconSelected[a-1]:n.selIcon:a<=n.iconLen?e.icon[a-1]:n.icon)||v.iconSet.rating.icon;l.push({name:(s===!0?a<=n.halfIconLen?e.iconHalf[a-1]:n.halfIcon:n.selIcon!==void 0&&(r===!0||m===!0)?a<=n.selIconLen?e.iconSelected[a-1]:n.selIcon:a<=n.iconLen?e.icon[a-1]:n.icon)||v.iconSet.rating.icon,attrs:{tabindex:c,role:"radio","aria-checked":e.modelValue===a?"true":"false","aria-label":q.value(a,F)},iconClass:"q-rating__icon"+(r===!0||s===!0?" q-rating__icon--active":"")+(m===!0?" q-rating__icon--exselected":"")+(o.value===a?" q-rating__icon--hovered":"")+(b!==void 0?` text-${b}`:"")})}return l}),M=d(()=>{const l={role:"radiogroup"};return e.disable===!0&&(l["aria-disabled"]="true"),e.readonly===!0&&(l["aria-readonly"]="true"),l});function A(l){if(f.value===!0){const n=U(parseInt(l,10),1,parseInt(e.max,10)),t=e.noReset!==!0&&e.modelValue===n?0:n;t!==e.modelValue&&I("update:modelValue",t),o.value=0}}function h(l){f.value===!0&&(o.value=l)}function B(l,n){switch(l.keyCode){case 13:case 32:return A(n),g(l);case 37:case 40:return u[`rt${n-1}`]&&u[`rt${n-1}`].focus(),g(l);case 39:case 38:return u[`rt${n+1}`]&&u[`rt${n+1}`].focus(),g(l)}}function S(){o.value=0}return E(()=>{u={}}),()=>{const l=[];return _.value.forEach(({iconClass:n,name:t,attrs:c},i)=>{const a=i+1;l.push(y("div",{key:a,ref:r=>{u[`rt${a}`]=r},class:"q-rating__icon-container flex flex-center",...c,onClick(){A(a)},onMouseover(){h(a)},onMouseout:S,onFocus(){h(a)},onBlur:S,onKeyup(r){B(r,a)}},k(L[`tip-${a}`],[y(w,{class:n,name:t})])))}),e.name!==void 0&&e.disable!==!0&&x(l,"push"),y("div",{class:C.value,style:H.value,...M.value},l)}}});export{T as Q};
