import{i as Fe,r as I,o as re,w as z,a as y,g as G,$ as qe,e as Ae,b as ue,a7 as Ve,A as _e,X as Ce,z as Be,d as W,B as Ee,C as $e,h as M,v as J,Z as Te,a2 as Ie,q as Oe,c as Pe,x as ce}from"./index-D_9ISvEi.js";import{Q as ve,h as te}from"./QIcon-BewtRdJq.js";import{i as ze}from"./QBtn-vE32aXBV.js";import{u as De,a as je,b as Ke,c as Ne}from"./private.use-form-Ca2RaLkA.js";const ge=["B","KB","MB","GB","TB","PB"];function pt(e,t=1){let l=0;for(;parseInt(e,10)>=1024&&l<ge.length-1;)e/=1024,++l;return`${e.toFixed(t)}${ge[l]}`}function bt(e,t,l){return l<=t?t:Math.min(l,Math.max(t,e))}function yt(e,t,l){if(l<=t)return t;const u=l-t+1;let d=t+(e-t)%u;return d<t&&(d=u+d),d===0?0:d}let ie,ne=0;const T=new Array(256);for(let e=0;e<256;e++)T[e]=(e+256).toString(16).substring(1);const Le=(()=>{const e=typeof crypto<"u"?crypto:typeof window<"u"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const l=new Uint8Array(t);return e.getRandomValues(l),l}}return t=>{const l=[];for(let u=t;u>0;u--)l.push(Math.floor(Math.random()*256));return l}})(),me=4096;function de(){(ie===void 0||ne+16>me)&&(ne=0,ie=Le(me));const e=Array.prototype.slice.call(ie,ne,ne+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,T[e[0]]+T[e[1]]+T[e[2]]+T[e[3]]+"-"+T[e[4]]+T[e[5]]+"-"+T[e[6]]+T[e[7]]+"-"+T[e[8]]+T[e[9]]+"-"+T[e[10]]+T[e[11]]+T[e[12]]+T[e[13]]+T[e[14]]+T[e[15]]}function Ze(e){return e??null}function he(e,t){return e??(t===!0?`f_${de()}`:null)}function Ue({getValue:e,required:t=!0}={}){if(Fe.value===!0){const l=e!==void 0?I(Ze(e())):I(null);return t===!0&&l.value===null&&re(()=>{l.value=`f_${de()}`}),e!==void 0&&z(e,u=>{l.value=he(u,t)}),l}return e!==void 0?y(()=>he(e(),t)):I(`f_${de()}`)}const pe=/^on[A-Z]/;function He(){const{attrs:e,vnode:t}=G(),l={listeners:I({}),attributes:I({})};function u(){const d={},f={};for(const v in e)v!=="class"&&v!=="style"&&pe.test(v)===!1&&(d[v]=e[v]);for(const v in t.props)pe.test(v)===!0&&(f[v]=t.props[v]);l.attributes.value=d,l.listeners.value=f}return qe(u),u(),l}function Qe({validate:e,resetValidation:t,requiresQForm:l}){const u=Ae(Ve,!1);if(u!==!1){const{props:d,proxy:f}=G();Object.assign(f,{validate:e,resetValidation:t}),z(()=>d.disable,v=>{v===!0?(typeof t=="function"&&t(),u.unbindComponent(f)):u.bindComponent(f)}),re(()=>{d.disable!==!0&&u.bindComponent(f)}),ue(()=>{d.disable!==!0&&u.unbindComponent(f)})}else l===!0&&console.error("Parent QForm not found on useFormChild()!")}const be=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,ye=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,ke=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,le=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,ae=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,se={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>be.test(e),hexaColor:e=>ye.test(e),hexOrHexaColor:e=>ke.test(e),rgbColor:e=>le.test(e),rgbaColor:e=>ae.test(e),rgbOrRgbaColor:e=>le.test(e)||ae.test(e),hexOrRgbColor:e=>be.test(e)||le.test(e),hexaOrRgbaColor:e=>ye.test(e)||ae.test(e),anyColor:e=>ke.test(e)||le.test(e)||ae.test(e)},We=[!0,!1,"ondemand"],Ye={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>We.includes(e)}};function Xe(e,t){const{props:l,proxy:u}=G(),d=I(!1),f=I(null),v=I(!1);Qe({validate:j,resetValidation:D});let x=0,B;const R=y(()=>l.rules!==void 0&&l.rules!==null&&l.rules.length!==0),w=y(()=>l.disable!==!0&&R.value===!0&&t.value===!1),p=y(()=>l.error===!0||d.value===!0),H=y(()=>typeof l.errorMessage=="string"&&l.errorMessage.length!==0?l.errorMessage:f.value);z(()=>l.modelValue,()=>{v.value=!0,w.value===!0&&l.lazyRules===!1&&O()});function $(){l.lazyRules!=="ondemand"&&w.value===!0&&v.value===!0&&O()}z(()=>l.reactiveRules,N=>{N===!0?B===void 0&&(B=z(()=>l.rules,$,{immediate:!0,deep:!0})):B!==void 0&&(B(),B=void 0)},{immediate:!0}),z(()=>l.lazyRules,$),z(e,N=>{N===!0?v.value=!0:w.value===!0&&l.lazyRules!=="ondemand"&&O()});function D(){x++,t.value=!1,v.value=!1,d.value=!1,f.value=null,O.cancel()}function j(N=l.modelValue){if(l.disable===!0||R.value===!1)return!0;const V=++x,Q=t.value!==!0?()=>{v.value=!0}:()=>{},L=(S,C)=>{S===!0&&Q(),d.value=S,f.value=C||null,t.value=!1},K=[];for(let S=0;S<l.rules.length;S++){const C=l.rules[S];let E;if(typeof C=="function"?E=C(N,se):typeof C=="string"&&se[C]!==void 0&&(E=se[C](N)),E===!1||typeof E=="string")return L(!0,E),!1;E!==!0&&E!==void 0&&K.push(E)}return K.length===0?(L(!1),!0):(t.value=!0,Promise.all(K).then(S=>{if(S===void 0||Array.isArray(S)===!1||S.length===0)return V===x&&L(!1),!0;const C=S.find(E=>E===!1||typeof E=="string");return V===x&&L(C!==void 0,C),C===void 0},S=>(V===x&&(console.error(S),L(!0)),!1)))}const O=_e(j,0);return ue(()=>{B!==void 0&&B(),O.cancel()}),Object.assign(u,{resetValidation:D,validate:j}),Ce(u,"hasError",()=>p.value),{isDirtyModel:v,hasRules:R,hasError:p,errorMessage:H,validate:j,resetValidation:D}}let Y=[],ee=[];function Me(e){ee=ee.filter(t=>t!==e)}function kt(e){Me(e),ee.push(e)}function xt(e){Me(e),ee.length===0&&Y.length!==0&&(Y[Y.length-1](),Y=[])}function Se(e){ee.length===0?e():Y.push(e)}function Ge(e){Y=Y.filter(t=>t!==e)}function fe(e){return e!=null&&(""+e).length!==0}const Je={...De,...Ye,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String},et={...Je,maxlength:[Number,String]},tt=["update:modelValue","clear","focus","blur"];function nt({requiredForAttr:e=!0,tagProp:t,changeEvent:l=!1}={}){const{props:u,proxy:d}=G(),f=je(u,d.$q),v=Ue({required:e,getValue:()=>u.for});return{requiredForAttr:e,changeEvent:l,tag:t===!0?y(()=>u.tag):{value:"label"},isDark:f,editable:y(()=>u.disable!==!0&&u.readonly!==!0),innerLoading:I(!1),focused:I(!1),hasPopupOpen:!1,splitAttrs:He(),targetUid:v,rootRef:I(null),targetRef:I(null),controlRef:I(null)}}function lt(e){const{props:t,emit:l,slots:u,attrs:d,proxy:f}=G(),{$q:v}=f;let x=null;e.hasValue===void 0&&(e.hasValue=y(()=>fe(t.modelValue))),e.emitValue===void 0&&(e.emitValue=i=>{l("update:modelValue",i)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:o,onFocusout:a}),Object.assign(e,{clearValue:s,onControlFocusin:o,onControlFocusout:a,focus:C}),e.computedCounter===void 0&&(e.computedCounter=y(()=>{if(t.counter!==!1){const i=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,c=t.maxlength!==void 0?t.maxlength:t.maxValues;return i+(c!==void 0?" / "+c:"")}}));const{isDirtyModel:B,hasRules:R,hasError:w,errorMessage:p,resetValidation:H}=Xe(e.focused,e.innerLoading),$=e.floatingLabel!==void 0?y(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):y(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),D=y(()=>t.bottomSlots===!0||t.hint!==void 0||R.value===!0||t.counter===!0||t.error!==null),j=y(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),O=y(()=>`q-field row no-wrap items-start q-field--${j.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+($.value===!0?" q-field--float":"")+(V.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(w.value===!0?" q-field--error":"")+(w.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&D.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),N=y(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(w.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),V=y(()=>t.labelSlot===!0||t.label!==void 0),Q=y(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&w.value!==!0?` text-${t.labelColor}`:"")),L=y(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:$.value,modelValue:t.modelValue,emitValue:e.emitValue})),K=y(()=>{const i={};return e.targetUid.value&&(i.for=e.targetUid.value),t.disable===!0&&(i["aria-disabled"]="true"),i});function S(){const i=document.activeElement;let c=e.targetRef!==void 0&&e.targetRef.value;c&&(i===null||i.id!==e.targetUid.value)&&(c.hasAttribute("tabindex")===!0||(c=c.querySelector("[tabindex]")),c&&c!==i&&c.focus({preventScroll:!0}))}function C(){Se(S)}function E(){Ge(S);const i=document.activeElement;i!==null&&e.rootRef.value.contains(i)&&i.blur()}function o(i){x!==null&&(clearTimeout(x),x=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,l("focus",i))}function a(i,c){x!==null&&clearTimeout(x),x=setTimeout(()=>{x=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,l("blur",i)),c!==void 0&&c())})}function s(i){Be(i),v.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),l("update:modelValue",null),e.changeEvent===!0&&l("change",null),l("clear",t.modelValue),W(()=>{const c=B.value;H(),B.value=c})}function r(i){[13,32].includes(i.keyCode)&&s(i)}function h(){const i=[];return u.prepend!==void 0&&i.push(M("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:J},u.prepend())),i.push(M("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},g())),w.value===!0&&t.noErrorIcon===!1&&i.push(m("error",[M(ve,{name:v.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?i.push(m("inner-loading-append",u.loading!==void 0?u.loading():[M(ze,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&i.push(m("inner-clearable-append",[M(ve,{class:"q-field__focusable-action",name:t.clearIcon||v.iconSet.field.clear,tabindex:0,role:"button","aria-hidden":"false","aria-label":v.lang.label.clear,onKeyup:r,onClick:s})])),u.append!==void 0&&i.push(M("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:J},u.append())),e.getInnerAppend!==void 0&&i.push(m("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&i.push(e.getControlChild()),i}function g(){const i=[];return t.prefix!==void 0&&t.prefix!==null&&i.push(M("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&i.push(e.getShadowControl()),e.getControl!==void 0?i.push(e.getControl()):u.rawControl!==void 0?i.push(u.rawControl()):u.control!==void 0&&i.push(M("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},u.control(L.value))),V.value===!0&&i.push(M("div",{class:Q.value},te(u.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&i.push(M("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),i.concat(te(u.default))}function F(){let i,c;w.value===!0?p.value!==null?(i=[M("div",{role:"alert"},p.value)],c=`q--slot-error-${p.value}`):(i=te(u.error),c="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(i=[M("div",t.hint)],c=`q--slot-hint-${t.hint}`):(i=te(u.hint),c="q--slot-hint"));const k=t.counter===!0||u.counter!==void 0;if(t.hideBottomSpace===!0&&k===!1&&i===void 0)return;const q=M("div",{key:c,class:"q-field__messages col"},i);return M("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:J},[t.hideBottomSpace===!0?q:M(Te,{name:"q-transition--field-message"},()=>q),k===!0?M("div",{class:"q-field__counter"},u.counter!==void 0?u.counter():e.computedCounter.value):null])}function m(i,c){return c===null?null:M("div",{key:i,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},c)}let b=!1;return Ee(()=>{b=!0}),$e(()=>{b===!0&&t.autofocus===!0&&f.focus()}),t.autofocus===!0&&re(()=>{f.focus()}),ue(()=>{x!==null&&clearTimeout(x)}),Object.assign(f,{focus:C,blur:E}),function(){const c=e.getControl===void 0&&u.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...K.value}:K.value;return M(e.tag.value,{ref:e.rootRef,class:[O.value,d.class],style:d.style,...c},[u.before!==void 0?M("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:J},u.before()):null,M("div",{class:"q-field__inner relative-position col self-stretch"},[M("div",{ref:e.controlRef,class:N.value,tabindex:-1,...e.controlEvents},h()),D.value===!0?F():null]),u.after!==void 0?M("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:J},u.after()):null])}}const xe={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},oe={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},Re=Object.keys(oe);Re.forEach(e=>{oe[e].regex=new RegExp(oe[e].pattern)});const at=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+Re.join("")+"])|(.)","g"),we=/[.*+?^${}()|[\]\\]/g,_="",ot={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function rt(e,t,l,u){let d,f,v,x,B,R;const w=I(null),p=I($());function H(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}z(()=>e.type+e.autogrow,j),z(()=>e.mask,o=>{if(o!==void 0)O(p.value,!0);else{const a=C(p.value);j(),e.modelValue!==a&&t("update:modelValue",a)}}),z(()=>e.fillMask+e.reverseFillMask,()=>{w.value===!0&&O(p.value,!0)}),z(()=>e.unmaskedValue,()=>{w.value===!0&&O(p.value)});function $(){if(j(),w.value===!0){const o=K(C(e.modelValue));return e.fillMask!==!1?E(o):o}return e.modelValue}function D(o){if(o<d.length)return d.slice(-o);let a="",s=d;const r=s.indexOf(_);if(r!==-1){for(let h=o-s.length;h>0;h--)a+=_;s=s.slice(0,r)+a+s.slice(r)}return s}function j(){if(w.value=e.mask!==void 0&&e.mask.length!==0&&H(),w.value===!1){x=void 0,d="",f="";return}const o=xe[e.mask]===void 0?e.mask:xe[e.mask],a=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",s=a.replace(we,"\\$&"),r=[],h=[],g=[];let F=e.reverseFillMask===!0,m="",b="";o.replace(at,(q,n,A,U,Z)=>{if(U!==void 0){const P=oe[U];g.push(P),b=P.negate,F===!0&&(h.push("(?:"+b+"+)?("+P.pattern+"+)?(?:"+b+"+)?("+P.pattern+"+)?"),F=!1),h.push("(?:"+b+"+)?("+P.pattern+")?")}else if(A!==void 0)m="\\"+(A==="\\"?"":A),g.push(A),r.push("([^"+m+"]+)?"+m+"?");else{const P=n!==void 0?n:Z;m=P==="\\"?"\\\\\\\\":P.replace(we,"\\\\$&"),g.push(P),r.push("([^"+m+"]+)?"+m+"?")}});const i=new RegExp("^"+r.join("")+"("+(m===""?".":"[^"+m+"]")+"+)?"+(m===""?"":"["+m+"]*")+"$"),c=h.length-1,k=h.map((q,n)=>n===0&&e.reverseFillMask===!0?new RegExp("^"+s+"*"+q):n===c?new RegExp("^"+q+"("+(b===""?".":b)+"+)?"+(e.reverseFillMask===!0?"$":s+"*")):new RegExp("^"+q));v=g,x=q=>{const n=i.exec(e.reverseFillMask===!0?q:q.slice(0,g.length+1));n!==null&&(q=n.slice(1).join(""));const A=[],U=k.length;for(let Z=0,P=q;Z<U;Z++){const X=k[Z].exec(P);if(X===null)break;P=P.slice(X.shift().length),A.push(...X)}return A.length!==0?A.join(""):q},d=g.map(q=>typeof q=="string"?q:_).join(""),f=d.split(_).join(a)}function O(o,a,s){const r=u.value,h=r.selectionEnd,g=r.value.length-h,F=C(o);a===!0&&j();const m=K(F),b=e.fillMask!==!1?E(m):m,i=p.value!==b;r.value!==b&&(r.value=b),i===!0&&(p.value=b),document.activeElement===r&&W(()=>{if(b===f){const k=e.reverseFillMask===!0?f.length:0;r.setSelectionRange(k,k,"forward");return}if(s==="insertFromPaste"&&e.reverseFillMask!==!0){const k=r.selectionEnd;let q=h-1;for(let n=B;n<=q&&n<k;n++)d[n]!==_&&q++;V.right(r,q);return}if(["deleteContentBackward","deleteContentForward"].indexOf(s)!==-1){const k=e.reverseFillMask===!0?h===0?b.length>m.length?1:0:Math.max(0,b.length-(b===f?0:Math.min(m.length,g)+1))+1:h;r.setSelectionRange(k,k,"forward");return}if(e.reverseFillMask===!0)if(i===!0){const k=Math.max(0,b.length-(b===f?0:Math.min(m.length,g+1)));k===1&&h===1?r.setSelectionRange(k,k,"forward"):V.rightReverse(r,k)}else{const k=b.length-g;r.setSelectionRange(k,k,"backward")}else if(i===!0){const k=Math.max(0,d.indexOf(_),Math.min(m.length,h)-1);V.right(r,k)}else{const k=h-1;V.right(r,k)}});const c=e.unmaskedValue===!0?C(b):b;String(e.modelValue)!==c&&(e.modelValue!==null||c!=="")&&l(c,!0)}function N(o,a,s){const r=K(C(o.value));a=Math.max(0,d.indexOf(_),Math.min(r.length,a)),B=a,o.setSelectionRange(a,s,"forward")}const V={left(o,a){const s=d.slice(a-1).indexOf(_)===-1;let r=Math.max(0,a-1);for(;r>=0;r--)if(d[r]===_){a=r,s===!0&&a++;break}if(r<0&&d[a]!==void 0&&d[a]!==_)return V.right(o,0);a>=0&&o.setSelectionRange(a,a,"backward")},right(o,a){const s=o.value.length;let r=Math.min(s,a+1);for(;r<=s;r++)if(d[r]===_){a=r;break}else d[r-1]===_&&(a=r);if(r>s&&d[a-1]!==void 0&&d[a-1]!==_)return V.left(o,s);o.setSelectionRange(a,a,"forward")},leftReverse(o,a){const s=D(o.value.length);let r=Math.max(0,a-1);for(;r>=0;r--)if(s[r-1]===_){a=r;break}else if(s[r]===_&&(a=r,r===0))break;if(r<0&&s[a]!==void 0&&s[a]!==_)return V.rightReverse(o,0);a>=0&&o.setSelectionRange(a,a,"backward")},rightReverse(o,a){const s=o.value.length,r=D(s),h=r.slice(0,a+1).indexOf(_)===-1;let g=Math.min(s,a+1);for(;g<=s;g++)if(r[g-1]===_){a=g,a>0&&h===!0&&a--;break}if(g>s&&r[a-1]!==void 0&&r[a-1]!==_)return V.leftReverse(o,s);o.setSelectionRange(a,a,"forward")}};function Q(o){t("click",o),R=void 0}function L(o){if(t("keydown",o),Ie(o)===!0||o.altKey===!0)return;const a=u.value,s=a.selectionStart,r=a.selectionEnd;if(o.shiftKey||(R=void 0),o.keyCode===37||o.keyCode===39){o.shiftKey&&R===void 0&&(R=a.selectionDirection==="forward"?s:r);const h=V[(o.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(o.preventDefault(),h(a,R===s?r:s),o.shiftKey){const g=a.selectionStart;a.setSelectionRange(Math.min(R,g),Math.max(R,g),"forward")}}else o.keyCode===8&&e.reverseFillMask!==!0&&s===r?(V.left(a,s),a.setSelectionRange(a.selectionStart,r,"backward")):o.keyCode===46&&e.reverseFillMask===!0&&s===r&&(V.rightReverse(a,r),a.setSelectionRange(s,a.selectionEnd,"forward"))}function K(o){if(o==null||o==="")return"";if(e.reverseFillMask===!0)return S(o);const a=v;let s=0,r="";for(let h=0;h<a.length;h++){const g=o[s],F=a[h];if(typeof F=="string")r+=F,g===F&&s++;else if(g!==void 0&&F.regex.test(g))r+=F.transform!==void 0?F.transform(g):g,s++;else return r}return r}function S(o){const a=v,s=d.indexOf(_);let r=o.length-1,h="";for(let g=a.length-1;g>=0&&r!==-1;g--){const F=a[g];let m=o[r];if(typeof F=="string")h=F+h,m===F&&r--;else if(m!==void 0&&F.regex.test(m))do h=(F.transform!==void 0?F.transform(m):m)+h,r--,m=o[r];while(s===g&&m!==void 0&&F.regex.test(m));else return h}return h}function C(o){return typeof o!="string"||x===void 0?typeof o=="number"?x(""+o):o:x(o)}function E(o){return f.length-o.length<=0?o:e.reverseFillMask===!0&&o.length!==0?f.slice(0,-o.length)+o:o+f.slice(o.length)}return{innerValue:p,hasMask:w,moveCursorForPaste:N,updateMaskValue:O,onMaskedKeydown:L,onMaskedClick:Q}}function ut(e,t){function l(){const u=e.modelValue;try{const d="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(u)===u&&("length"in u?Array.from(u):[u]).forEach(f=>{d.items.add(f)}),{files:d.files}}catch{return{files:void 0}}}return t===!0?y(()=>{if(e.type==="file")return l()}):y(l)}const it=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,st=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,dt=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,ft=/[a-z0-9_ -]$/i;function ct(e){return function(l){if(l.type==="compositionend"||l.type==="change"){if(l.target.qComposing!==!0)return;l.target.qComposing=!1,e(l)}else l.type==="compositionupdate"&&l.target.qComposing!==!0&&typeof l.data=="string"&&(Oe.is.firefox===!0?ft.test(l.data)===!1:it.test(l.data)===!0||st.test(l.data)===!0||dt.test(l.data)===!0)===!0&&(l.target.qComposing=!0)}}const wt=Pe({name:"QInput",inheritAttrs:!1,props:{...et,...ot,...Ke,modelValue:[String,Number,FileList],shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...tt,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:l}){const{proxy:u}=G(),{$q:d}=u,f={};let v=NaN,x,B,R=null,w;const p=I(null),H=Ne(e),{innerValue:$,hasMask:D,moveCursorForPaste:j,updateMaskValue:O,onMaskedKeydown:N,onMaskedClick:V}=rt(e,t,m,p),Q=ut(e,!0),L=y(()=>fe($.value)),K=ct(g),S=nt({changeEvent:!0}),C=y(()=>e.type==="textarea"||e.autogrow===!0),E=y(()=>C.value===!0||["text","search","url","tel","password"].includes(e.type)),o=y(()=>{const n={...S.splitAttrs.listeners.value,onInput:g,onPaste:h,onChange:i,onBlur:c,onFocus:ce};return n.onCompositionstart=n.onCompositionupdate=n.onCompositionend=K,D.value===!0&&(n.onKeydown=N,n.onClick=V),e.autogrow===!0&&(n.onAnimationend=F),n}),a=y(()=>{const n={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:H.value,...S.splitAttrs.attributes.value,id:S.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return C.value===!1&&(n.type=e.type),e.autogrow===!0&&(n.rows=1),n});z(()=>e.type,()=>{p.value&&(p.value.value=e.modelValue)}),z(()=>e.modelValue,n=>{if(D.value===!0){if(B===!0&&(B=!1,String(n)===v))return;O(n)}else $.value!==n&&($.value=n,e.type==="number"&&f.hasOwnProperty("value")===!0&&(x===!0?x=!1:delete f.value));e.autogrow===!0&&W(b)}),z(()=>e.autogrow,n=>{n===!0?W(b):p.value!==null&&l.rows>0&&(p.value.style.height="auto")}),z(()=>e.dense,()=>{e.autogrow===!0&&W(b)});function s(){Se(()=>{const n=document.activeElement;p.value!==null&&p.value!==n&&(n===null||n.id!==S.targetUid.value)&&p.value.focus({preventScroll:!0})})}function r(){p.value!==null&&p.value.select()}function h(n){if(D.value===!0&&e.reverseFillMask!==!0){const A=n.target;j(A,A.selectionStart,A.selectionEnd)}t("paste",n)}function g(n){if(!n||!n.target)return;if(e.type==="file"){t("update:modelValue",n.target.files);return}const A=n.target.value;if(n.target.qComposing===!0){f.value=A;return}if(D.value===!0)O(A,!1,n.inputType);else if(m(A),E.value===!0&&n.target===document.activeElement){const{selectionStart:U,selectionEnd:Z}=n.target;U!==void 0&&Z!==void 0&&W(()=>{n.target===document.activeElement&&A.indexOf(n.target.value)===0&&n.target.setSelectionRange(U,Z)})}e.autogrow===!0&&b()}function F(n){t("animationend",n),b()}function m(n,A){w=()=>{R=null,e.type!=="number"&&f.hasOwnProperty("value")===!0&&delete f.value,e.modelValue!==n&&v!==n&&(v=n,A===!0&&(B=!0),t("update:modelValue",n),W(()=>{v===n&&(v=NaN)})),w=void 0},e.type==="number"&&(x=!0,f.value=n),e.debounce!==void 0?(R!==null&&clearTimeout(R),f.value=n,R=setTimeout(w,e.debounce)):w()}function b(){requestAnimationFrame(()=>{const n=p.value;if(n!==null){const A=n.parentNode.style,{scrollTop:U}=n,{overflowY:Z,maxHeight:P}=d.platform.is.firefox===!0?{}:window.getComputedStyle(n),X=Z!==void 0&&Z!=="scroll";X===!0&&(n.style.overflowY="hidden"),A.marginBottom=n.scrollHeight-1+"px",n.style.height="1px",n.style.height=n.scrollHeight+"px",X===!0&&(n.style.overflowY=parseInt(P,10)<n.scrollHeight?"auto":"hidden"),A.marginBottom="",n.scrollTop=U}})}function i(n){K(n),R!==null&&(clearTimeout(R),R=null),w!==void 0&&w(),t("change",n.target.value)}function c(n){n!==void 0&&ce(n),R!==null&&(clearTimeout(R),R=null),w!==void 0&&w(),x=!1,B=!1,delete f.value,e.type!=="file"&&setTimeout(()=>{p.value!==null&&(p.value.value=$.value!==void 0?$.value:"")})}function k(){return f.hasOwnProperty("value")===!0?f.value:$.value!==void 0?$.value:""}ue(()=>{c()}),re(()=>{e.autogrow===!0&&b()}),Object.assign(S,{innerValue:$,fieldClass:y(()=>`q-${C.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:y(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:p,emitValue:m,hasValue:L,floatingLabel:y(()=>L.value===!0&&(e.type!=="number"||isNaN($.value)===!1)||fe(e.displayValue)),getControl:()=>M(C.value===!0?"textarea":"input",{ref:p,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...a.value,...o.value,...e.type!=="file"?{value:k()}:Q.value}),getShadowControl:()=>M("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(C.value===!0?"":" text-no-wrap")},[M("span",{class:"invisible"},k()),M("span",e.shadowText)])});const q=lt(S);return Object.assign(u,{focus:s,select:r,getNativeElement:()=>p.value}),Ce(u,"nativeEl",()=>p.value),q}});export{wt as Q,et as a,bt as b,lt as c,nt as d,kt as e,Se as f,fe as g,ct as h,Je as i,ut as j,pt as k,yt as n,xt as r,tt as u};
