import{i as Se,r as I,o as oe,w as z,a as y,g as G,Y as Re,e as qe,b as ae,_ as Fe,A as Ae,a1 as we,z as Ve,d as Y,B as _e,C as Be,h as M,v as J,a2 as Ee,a3 as $e,q as Te,c as Ie,x as fe}from"./index-DycyvG6d.js";import{Q as ce,h as X}from"./QIcon-D9E0pm8v.js";import{f as Oe}from"./QBtn-VuTwTvKK.js";import{u as Pe,a as ze}from"./use-dark-DFsmOdTk.js";import{u as De,c as je}from"./private.use-form-DjTZUGhH.js";const ve=["B","KB","MB","GB","TB","PB"];function pt(e,t=1){let r=0;for(;parseInt(e,10)>=1024&&r<ve.length-1;)e/=1024,++r;return`${e.toFixed(t)}${ve[r]}`}function bt(e,t,r){return r<=t?t:Math.min(r,Math.max(t,e))}let re,ee=0;const T=new Array(256);for(let e=0;e<256;e++)T[e]=(e+256).toString(16).substring(1);const Ke=(()=>{const e=typeof crypto<"u"?crypto:typeof window<"u"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const r=new Uint8Array(t);return e.getRandomValues(r),r}}return t=>{const r=[];for(let i=t;i>0;i--)r.push(Math.floor(Math.random()*256));return r}})(),ge=4096;function ie(){(re===void 0||ee+16>ge)&&(ee=0,re=Ke(ge));const e=Array.prototype.slice.call(re,ee,ee+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,T[e[0]]+T[e[1]]+T[e[2]]+T[e[3]]+"-"+T[e[4]]+T[e[5]]+"-"+T[e[6]]+T[e[7]]+"-"+T[e[8]]+T[e[9]]+"-"+T[e[10]]+T[e[11]]+T[e[12]]+T[e[13]]+T[e[14]]+T[e[15]]}function Ne(e){return e??null}function me(e,t){return e??(t===!0?`f_${ie()}`:null)}function Le({getValue:e,required:t=!0}={}){if(Se.value===!0){const r=e!==void 0?I(Ne(e())):I(null);return t===!0&&r.value===null&&oe(()=>{r.value=`f_${ie()}`}),e!==void 0&&z(e,i=>{r.value=me(i,t)}),r}return e!==void 0?y(()=>me(e(),t)):I(`f_${ie()}`)}const he=/^on[A-Z]/;function Ze(){const{attrs:e,vnode:t}=G(),r={listeners:I({}),attributes:I({})};function i(){const f={},d={};for(const v in e)v!=="class"&&v!=="style"&&he.test(v)===!1&&(f[v]=e[v]);for(const v in t.props)he.test(v)===!0&&(d[v]=t.props[v]);r.attributes.value=f,r.listeners.value=d}return Re(i),i(),r}function Ue({validate:e,resetValidation:t,requiresQForm:r}){const i=qe(Fe,!1);if(i!==!1){const{props:f,proxy:d}=G();Object.assign(d,{validate:e,resetValidation:t}),z(()=>f.disable,v=>{v===!0?(typeof t=="function"&&t(),i.unbindComponent(d)):i.bindComponent(d)}),oe(()=>{f.disable!==!0&&i.bindComponent(d)}),ae(()=>{f.disable!==!0&&i.unbindComponent(d)})}else r===!0&&console.error("Parent QForm not found on useFormChild()!")}const pe=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,be=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,ye=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,te=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,ne=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ue={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>pe.test(e),hexaColor:e=>be.test(e),hexOrHexaColor:e=>ye.test(e),rgbColor:e=>te.test(e),rgbaColor:e=>ne.test(e),rgbOrRgbaColor:e=>te.test(e)||ne.test(e),hexOrRgbColor:e=>pe.test(e)||te.test(e),hexaOrRgbaColor:e=>be.test(e)||ne.test(e),anyColor:e=>ye.test(e)||te.test(e)||ne.test(e)},He=[!0,!1,"ondemand"],Qe={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>He.includes(e)}};function Ye(e,t){const{props:r,proxy:i}=G(),f=I(!1),d=I(null),v=I(!1);Ue({validate:j,resetValidation:D});let x=0,B;const R=y(()=>r.rules!==void 0&&r.rules!==null&&r.rules.length!==0),w=y(()=>r.disable!==!0&&R.value===!0&&t.value===!1),p=y(()=>r.error===!0||f.value===!0),H=y(()=>typeof r.errorMessage=="string"&&r.errorMessage.length!==0?r.errorMessage:d.value);z(()=>r.modelValue,()=>{v.value=!0,w.value===!0&&r.lazyRules===!1&&O()});function $(){r.lazyRules!=="ondemand"&&w.value===!0&&v.value===!0&&O()}z(()=>r.reactiveRules,N=>{N===!0?B===void 0&&(B=z(()=>r.rules,$,{immediate:!0,deep:!0})):B!==void 0&&(B(),B=void 0)},{immediate:!0}),z(()=>r.lazyRules,$),z(e,N=>{N===!0?v.value=!0:w.value===!0&&r.lazyRules!=="ondemand"&&O()});function D(){x++,t.value=!1,v.value=!1,f.value=!1,d.value=null,O.cancel()}function j(N=r.modelValue){if(r.disable===!0||R.value===!1)return!0;const V=++x,Q=t.value!==!0?()=>{v.value=!0}:()=>{},L=(S,C)=>{S===!0&&Q(),f.value=S,d.value=C||null,t.value=!1},K=[];for(let S=0;S<r.rules.length;S++){const C=r.rules[S];let E;if(typeof C=="function"?E=C(N,ue):typeof C=="string"&&ue[C]!==void 0&&(E=ue[C](N)),E===!1||typeof E=="string")return L(!0,E),!1;E!==!0&&E!==void 0&&K.push(E)}return K.length===0?(L(!1),!0):(t.value=!0,Promise.all(K).then(S=>{if(S===void 0||Array.isArray(S)===!1||S.length===0)return V===x&&L(!1),!0;const C=S.find(E=>E===!1||typeof E=="string");return V===x&&L(C!==void 0,C),C===void 0},S=>(V===x&&(console.error(S),L(!0)),!1)))}const O=Ae(j,0);return ae(()=>{B!==void 0&&B(),O.cancel()}),Object.assign(i,{resetValidation:D,validate:j}),we(i,"hasError",()=>p.value),{isDirtyModel:v,hasRules:R,hasError:p,errorMessage:H,validate:j,resetValidation:D}}let se=[],We=[];function Ce(e){We.length===0?e():se.push(e)}function Ge(e){se=se.filter(t=>t!==e)}function de(e){return e!=null&&(""+e).length!==0}const Je={...Pe,...Qe,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String},Xe={...Je,maxlength:[Number,String]},et=["update:modelValue","clear","focus","blur"];function tt({requiredForAttr:e=!0,tagProp:t,changeEvent:r=!1}={}){const{props:i,proxy:f}=G(),d=ze(i,f.$q),v=Le({required:e,getValue:()=>i.for});return{requiredForAttr:e,changeEvent:r,tag:t===!0?y(()=>i.tag):{value:"label"},isDark:d,editable:y(()=>i.disable!==!0&&i.readonly!==!0),innerLoading:I(!1),focused:I(!1),hasPopupOpen:!1,splitAttrs:Ze(),targetUid:v,rootRef:I(null),targetRef:I(null),controlRef:I(null)}}function nt(e){const{props:t,emit:r,slots:i,attrs:f,proxy:d}=G(),{$q:v}=d;let x=null;e.hasValue===void 0&&(e.hasValue=y(()=>de(t.modelValue))),e.emitValue===void 0&&(e.emitValue=u=>{r("update:modelValue",u)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:o,onFocusout:l}),Object.assign(e,{clearValue:s,onControlFocusin:o,onControlFocusout:l,focus:C}),e.computedCounter===void 0&&(e.computedCounter=y(()=>{if(t.counter!==!1){const u=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,c=t.maxlength!==void 0?t.maxlength:t.maxValues;return u+(c!==void 0?" / "+c:"")}}));const{isDirtyModel:B,hasRules:R,hasError:w,errorMessage:p,resetValidation:H}=Ye(e.focused,e.innerLoading),$=e.floatingLabel!==void 0?y(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):y(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),D=y(()=>t.bottomSlots===!0||t.hint!==void 0||R.value===!0||t.counter===!0||t.error!==null),j=y(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),O=y(()=>`q-field row no-wrap items-start q-field--${j.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+($.value===!0?" q-field--float":"")+(V.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(w.value===!0?" q-field--error":"")+(w.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&D.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),N=y(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(w.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),V=y(()=>t.labelSlot===!0||t.label!==void 0),Q=y(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&w.value!==!0?` text-${t.labelColor}`:"")),L=y(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:$.value,modelValue:t.modelValue,emitValue:e.emitValue})),K=y(()=>{const u={};return e.targetUid.value&&(u.for=e.targetUid.value),t.disable===!0&&(u["aria-disabled"]="true"),u});function S(){const u=document.activeElement;let c=e.targetRef!==void 0&&e.targetRef.value;c&&(u===null||u.id!==e.targetUid.value)&&(c.hasAttribute("tabindex")===!0||(c=c.querySelector("[tabindex]")),c&&c!==u&&c.focus({preventScroll:!0}))}function C(){Ce(S)}function E(){Ge(S);const u=document.activeElement;u!==null&&e.rootRef.value.contains(u)&&u.blur()}function o(u){x!==null&&(clearTimeout(x),x=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,r("focus",u))}function l(u,c){x!==null&&clearTimeout(x),x=setTimeout(()=>{x=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,r("blur",u)),c!==void 0&&c())})}function s(u){Ve(u),v.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),r("update:modelValue",null),e.changeEvent===!0&&r("change",null),r("clear",t.modelValue),Y(()=>{const c=B.value;H(),B.value=c})}function a(u){[13,32].includes(u.keyCode)&&s(u)}function h(){const u=[];return i.prepend!==void 0&&u.push(M("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:J},i.prepend())),u.push(M("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},g())),w.value===!0&&t.noErrorIcon===!1&&u.push(m("error",[M(ce,{name:v.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?u.push(m("inner-loading-append",i.loading!==void 0?i.loading():[M(Oe,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&u.push(m("inner-clearable-append",[M(ce,{class:"q-field__focusable-action",name:t.clearIcon||v.iconSet.field.clear,tabindex:0,role:"button","aria-hidden":"false","aria-label":v.lang.label.clear,onKeyup:a,onClick:s})])),i.append!==void 0&&u.push(M("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:J},i.append())),e.getInnerAppend!==void 0&&u.push(m("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&u.push(e.getControlChild()),u}function g(){const u=[];return t.prefix!==void 0&&t.prefix!==null&&u.push(M("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&u.push(e.getShadowControl()),e.getControl!==void 0?u.push(e.getControl()):i.rawControl!==void 0?u.push(i.rawControl()):i.control!==void 0&&u.push(M("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},i.control(L.value))),V.value===!0&&u.push(M("div",{class:Q.value},X(i.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&u.push(M("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),u.concat(X(i.default))}function q(){let u,c;w.value===!0?p.value!==null?(u=[M("div",{role:"alert"},p.value)],c=`q--slot-error-${p.value}`):(u=X(i.error),c="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(u=[M("div",t.hint)],c=`q--slot-hint-${t.hint}`):(u=X(i.hint),c="q--slot-hint"));const k=t.counter===!0||i.counter!==void 0;if(t.hideBottomSpace===!0&&k===!1&&u===void 0)return;const F=M("div",{key:c,class:"q-field__messages col"},u);return M("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:J},[t.hideBottomSpace===!0?F:M(Ee,{name:"q-transition--field-message"},()=>F),k===!0?M("div",{class:"q-field__counter"},i.counter!==void 0?i.counter():e.computedCounter.value):null])}function m(u,c){return c===null?null:M("div",{key:u,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},c)}let b=!1;return _e(()=>{b=!0}),Be(()=>{b===!0&&t.autofocus===!0&&d.focus()}),t.autofocus===!0&&oe(()=>{d.focus()}),ae(()=>{x!==null&&clearTimeout(x)}),Object.assign(d,{focus:C,blur:E}),function(){const c=e.getControl===void 0&&i.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...K.value}:K.value;return M(e.tag.value,{ref:e.rootRef,class:[O.value,f.class],style:f.style,...c},[i.before!==void 0?M("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:J},i.before()):null,M("div",{class:"q-field__inner relative-position col self-stretch"},[M("div",{ref:e.controlRef,class:N.value,tabindex:-1,...e.controlEvents},h()),D.value===!0?q():null]),i.after!==void 0?M("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:J},i.after()):null])}}const ke={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},le={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},Me=Object.keys(le);Me.forEach(e=>{le[e].regex=new RegExp(le[e].pattern)});const lt=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+Me.join("")+"])|(.)","g"),xe=/[.*+?^${}()|[\]\\]/g,_="",ot={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function at(e,t,r,i){let f,d,v,x,B,R;const w=I(null),p=I($());function H(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}z(()=>e.type+e.autogrow,j),z(()=>e.mask,o=>{if(o!==void 0)O(p.value,!0);else{const l=C(p.value);j(),e.modelValue!==l&&t("update:modelValue",l)}}),z(()=>e.fillMask+e.reverseFillMask,()=>{w.value===!0&&O(p.value,!0)}),z(()=>e.unmaskedValue,()=>{w.value===!0&&O(p.value)});function $(){if(j(),w.value===!0){const o=K(C(e.modelValue));return e.fillMask!==!1?E(o):o}return e.modelValue}function D(o){if(o<f.length)return f.slice(-o);let l="",s=f;const a=s.indexOf(_);if(a!==-1){for(let h=o-s.length;h>0;h--)l+=_;s=s.slice(0,a)+l+s.slice(a)}return s}function j(){if(w.value=e.mask!==void 0&&e.mask.length!==0&&H(),w.value===!1){x=void 0,f="",d="";return}const o=ke[e.mask]===void 0?e.mask:ke[e.mask],l=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",s=l.replace(xe,"\\$&"),a=[],h=[],g=[];let q=e.reverseFillMask===!0,m="",b="";o.replace(lt,(F,n,A,U,Z)=>{if(U!==void 0){const P=le[U];g.push(P),b=P.negate,q===!0&&(h.push("(?:"+b+"+)?("+P.pattern+"+)?(?:"+b+"+)?("+P.pattern+"+)?"),q=!1),h.push("(?:"+b+"+)?("+P.pattern+")?")}else if(A!==void 0)m="\\"+(A==="\\"?"":A),g.push(A),a.push("([^"+m+"]+)?"+m+"?");else{const P=n!==void 0?n:Z;m=P==="\\"?"\\\\\\\\":P.replace(xe,"\\\\$&"),g.push(P),a.push("([^"+m+"]+)?"+m+"?")}});const u=new RegExp("^"+a.join("")+"("+(m===""?".":"[^"+m+"]")+"+)?"+(m===""?"":"["+m+"]*")+"$"),c=h.length-1,k=h.map((F,n)=>n===0&&e.reverseFillMask===!0?new RegExp("^"+s+"*"+F):n===c?new RegExp("^"+F+"("+(b===""?".":b)+"+)?"+(e.reverseFillMask===!0?"$":s+"*")):new RegExp("^"+F));v=g,x=F=>{const n=u.exec(e.reverseFillMask===!0?F:F.slice(0,g.length+1));n!==null&&(F=n.slice(1).join(""));const A=[],U=k.length;for(let Z=0,P=F;Z<U;Z++){const W=k[Z].exec(P);if(W===null)break;P=P.slice(W.shift().length),A.push(...W)}return A.length!==0?A.join(""):F},f=g.map(F=>typeof F=="string"?F:_).join(""),d=f.split(_).join(l)}function O(o,l,s){const a=i.value,h=a.selectionEnd,g=a.value.length-h,q=C(o);l===!0&&j();const m=K(q),b=e.fillMask!==!1?E(m):m,u=p.value!==b;a.value!==b&&(a.value=b),u===!0&&(p.value=b),document.activeElement===a&&Y(()=>{if(b===d){const k=e.reverseFillMask===!0?d.length:0;a.setSelectionRange(k,k,"forward");return}if(s==="insertFromPaste"&&e.reverseFillMask!==!0){const k=a.selectionEnd;let F=h-1;for(let n=B;n<=F&&n<k;n++)f[n]!==_&&F++;V.right(a,F);return}if(["deleteContentBackward","deleteContentForward"].indexOf(s)!==-1){const k=e.reverseFillMask===!0?h===0?b.length>m.length?1:0:Math.max(0,b.length-(b===d?0:Math.min(m.length,g)+1))+1:h;a.setSelectionRange(k,k,"forward");return}if(e.reverseFillMask===!0)if(u===!0){const k=Math.max(0,b.length-(b===d?0:Math.min(m.length,g+1)));k===1&&h===1?a.setSelectionRange(k,k,"forward"):V.rightReverse(a,k)}else{const k=b.length-g;a.setSelectionRange(k,k,"backward")}else if(u===!0){const k=Math.max(0,f.indexOf(_),Math.min(m.length,h)-1);V.right(a,k)}else{const k=h-1;V.right(a,k)}});const c=e.unmaskedValue===!0?C(b):b;String(e.modelValue)!==c&&(e.modelValue!==null||c!=="")&&r(c,!0)}function N(o,l,s){const a=K(C(o.value));l=Math.max(0,f.indexOf(_),Math.min(a.length,l)),B=l,o.setSelectionRange(l,s,"forward")}const V={left(o,l){const s=f.slice(l-1).indexOf(_)===-1;let a=Math.max(0,l-1);for(;a>=0;a--)if(f[a]===_){l=a,s===!0&&l++;break}if(a<0&&f[l]!==void 0&&f[l]!==_)return V.right(o,0);l>=0&&o.setSelectionRange(l,l,"backward")},right(o,l){const s=o.value.length;let a=Math.min(s,l+1);for(;a<=s;a++)if(f[a]===_){l=a;break}else f[a-1]===_&&(l=a);if(a>s&&f[l-1]!==void 0&&f[l-1]!==_)return V.left(o,s);o.setSelectionRange(l,l,"forward")},leftReverse(o,l){const s=D(o.value.length);let a=Math.max(0,l-1);for(;a>=0;a--)if(s[a-1]===_){l=a;break}else if(s[a]===_&&(l=a,a===0))break;if(a<0&&s[l]!==void 0&&s[l]!==_)return V.rightReverse(o,0);l>=0&&o.setSelectionRange(l,l,"backward")},rightReverse(o,l){const s=o.value.length,a=D(s),h=a.slice(0,l+1).indexOf(_)===-1;let g=Math.min(s,l+1);for(;g<=s;g++)if(a[g-1]===_){l=g,l>0&&h===!0&&l--;break}if(g>s&&a[l-1]!==void 0&&a[l-1]!==_)return V.leftReverse(o,s);o.setSelectionRange(l,l,"forward")}};function Q(o){t("click",o),R=void 0}function L(o){if(t("keydown",o),$e(o)===!0||o.altKey===!0)return;const l=i.value,s=l.selectionStart,a=l.selectionEnd;if(o.shiftKey||(R=void 0),o.keyCode===37||o.keyCode===39){o.shiftKey&&R===void 0&&(R=l.selectionDirection==="forward"?s:a);const h=V[(o.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(o.preventDefault(),h(l,R===s?a:s),o.shiftKey){const g=l.selectionStart;l.setSelectionRange(Math.min(R,g),Math.max(R,g),"forward")}}else o.keyCode===8&&e.reverseFillMask!==!0&&s===a?(V.left(l,s),l.setSelectionRange(l.selectionStart,a,"backward")):o.keyCode===46&&e.reverseFillMask===!0&&s===a&&(V.rightReverse(l,a),l.setSelectionRange(s,l.selectionEnd,"forward"))}function K(o){if(o==null||o==="")return"";if(e.reverseFillMask===!0)return S(o);const l=v;let s=0,a="";for(let h=0;h<l.length;h++){const g=o[s],q=l[h];if(typeof q=="string")a+=q,g===q&&s++;else if(g!==void 0&&q.regex.test(g))a+=q.transform!==void 0?q.transform(g):g,s++;else return a}return a}function S(o){const l=v,s=f.indexOf(_);let a=o.length-1,h="";for(let g=l.length-1;g>=0&&a!==-1;g--){const q=l[g];let m=o[a];if(typeof q=="string")h=q+h,m===q&&a--;else if(m!==void 0&&q.regex.test(m))do h=(q.transform!==void 0?q.transform(m):m)+h,a--,m=o[a];while(s===g&&m!==void 0&&q.regex.test(m));else return h}return h}function C(o){return typeof o!="string"||x===void 0?typeof o=="number"?x(""+o):o:x(o)}function E(o){return d.length-o.length<=0?o:e.reverseFillMask===!0&&o.length!==0?d.slice(0,-o.length)+o:o+d.slice(o.length)}return{innerValue:p,hasMask:w,moveCursorForPaste:N,updateMaskValue:O,onMaskedKeydown:L,onMaskedClick:Q}}function rt(e,t){function r(){const i=e.modelValue;try{const f="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(i)===i&&("length"in i?Array.from(i):[i]).forEach(d=>{f.items.add(d)}),{files:f.files}}catch{return{files:void 0}}}return t===!0?y(()=>{if(e.type==="file")return r()}):y(r)}const ut=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,it=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,st=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,dt=/[a-z0-9_ -]$/i;function ft(e){return function(r){if(r.type==="compositionend"||r.type==="change"){if(r.target.qComposing!==!0)return;r.target.qComposing=!1,e(r)}else r.type==="compositionupdate"&&r.target.qComposing!==!0&&typeof r.data=="string"&&(Te.is.firefox===!0?dt.test(r.data)===!1:ut.test(r.data)===!0||it.test(r.data)===!0||st.test(r.data)===!0)===!0&&(r.target.qComposing=!0)}}const yt=Ie({name:"QInput",inheritAttrs:!1,props:{...Xe,...ot,...De,modelValue:[String,Number,FileList],shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...et,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:r}){const{proxy:i}=G(),{$q:f}=i,d={};let v=NaN,x,B,R=null,w;const p=I(null),H=je(e),{innerValue:$,hasMask:D,moveCursorForPaste:j,updateMaskValue:O,onMaskedKeydown:N,onMaskedClick:V}=at(e,t,m,p),Q=rt(e,!0),L=y(()=>de($.value)),K=ft(g),S=tt({changeEvent:!0}),C=y(()=>e.type==="textarea"||e.autogrow===!0),E=y(()=>C.value===!0||["text","search","url","tel","password"].includes(e.type)),o=y(()=>{const n={...S.splitAttrs.listeners.value,onInput:g,onPaste:h,onChange:u,onBlur:c,onFocus:fe};return n.onCompositionstart=n.onCompositionupdate=n.onCompositionend=K,D.value===!0&&(n.onKeydown=N,n.onClick=V),e.autogrow===!0&&(n.onAnimationend=q),n}),l=y(()=>{const n={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:H.value,...S.splitAttrs.attributes.value,id:S.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return C.value===!1&&(n.type=e.type),e.autogrow===!0&&(n.rows=1),n});z(()=>e.type,()=>{p.value&&(p.value.value=e.modelValue)}),z(()=>e.modelValue,n=>{if(D.value===!0){if(B===!0&&(B=!1,String(n)===v))return;O(n)}else $.value!==n&&($.value=n,e.type==="number"&&d.hasOwnProperty("value")===!0&&(x===!0?x=!1:delete d.value));e.autogrow===!0&&Y(b)}),z(()=>e.autogrow,n=>{n===!0?Y(b):p.value!==null&&r.rows>0&&(p.value.style.height="auto")}),z(()=>e.dense,()=>{e.autogrow===!0&&Y(b)});function s(){Ce(()=>{const n=document.activeElement;p.value!==null&&p.value!==n&&(n===null||n.id!==S.targetUid.value)&&p.value.focus({preventScroll:!0})})}function a(){p.value!==null&&p.value.select()}function h(n){if(D.value===!0&&e.reverseFillMask!==!0){const A=n.target;j(A,A.selectionStart,A.selectionEnd)}t("paste",n)}function g(n){if(!n||!n.target)return;if(e.type==="file"){t("update:modelValue",n.target.files);return}const A=n.target.value;if(n.target.qComposing===!0){d.value=A;return}if(D.value===!0)O(A,!1,n.inputType);else if(m(A),E.value===!0&&n.target===document.activeElement){const{selectionStart:U,selectionEnd:Z}=n.target;U!==void 0&&Z!==void 0&&Y(()=>{n.target===document.activeElement&&A.indexOf(n.target.value)===0&&n.target.setSelectionRange(U,Z)})}e.autogrow===!0&&b()}function q(n){t("animationend",n),b()}function m(n,A){w=()=>{R=null,e.type!=="number"&&d.hasOwnProperty("value")===!0&&delete d.value,e.modelValue!==n&&v!==n&&(v=n,A===!0&&(B=!0),t("update:modelValue",n),Y(()=>{v===n&&(v=NaN)})),w=void 0},e.type==="number"&&(x=!0,d.value=n),e.debounce!==void 0?(R!==null&&clearTimeout(R),d.value=n,R=setTimeout(w,e.debounce)):w()}function b(){requestAnimationFrame(()=>{const n=p.value;if(n!==null){const A=n.parentNode.style,{scrollTop:U}=n,{overflowY:Z,maxHeight:P}=f.platform.is.firefox===!0?{}:window.getComputedStyle(n),W=Z!==void 0&&Z!=="scroll";W===!0&&(n.style.overflowY="hidden"),A.marginBottom=n.scrollHeight-1+"px",n.style.height="1px",n.style.height=n.scrollHeight+"px",W===!0&&(n.style.overflowY=parseInt(P,10)<n.scrollHeight?"auto":"hidden"),A.marginBottom="",n.scrollTop=U}})}function u(n){K(n),R!==null&&(clearTimeout(R),R=null),w!==void 0&&w(),t("change",n.target.value)}function c(n){n!==void 0&&fe(n),R!==null&&(clearTimeout(R),R=null),w!==void 0&&w(),x=!1,B=!1,delete d.value,e.type!=="file"&&setTimeout(()=>{p.value!==null&&(p.value.value=$.value!==void 0?$.value:"")})}function k(){return d.hasOwnProperty("value")===!0?d.value:$.value!==void 0?$.value:""}ae(()=>{c()}),oe(()=>{e.autogrow===!0&&b()}),Object.assign(S,{innerValue:$,fieldClass:y(()=>`q-${C.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:y(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:p,emitValue:m,hasValue:L,floatingLabel:y(()=>L.value===!0&&(e.type!=="number"||isNaN($.value)===!1)||de(e.displayValue)),getControl:()=>M(C.value===!0?"textarea":"input",{ref:p,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...l.value,...o.value,...e.type!=="file"?{value:k()}:Q.value}),getShadowControl:()=>M("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(C.value===!0?"":" text-no-wrap")},[M("span",{class:"invisible"},k()),M("span",e.shadowText)])});const F=nt(S);return Object.assign(i,{focus:s,select:a,getNativeElement:()=>p.value}),we(i,"nativeEl",()=>p.value),F}});export{yt as Q,Ce as a,bt as b,Je as c,tt as d,rt as e,de as f,nt as g,pt as h,et as u};
