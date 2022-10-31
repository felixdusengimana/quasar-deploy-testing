import{j as w,b as r,n as R,v as te,h as c,T as p,g as oe}from"./index.e6697016.js";import{u as ie,a as ae}from"./use-prevent-scroll.401797f8.js";import{u as ne,a as se}from"./use-timeout.771fda10.js";import{u as le,a as ue,b as re}from"./use-model-toggle.f6d858ad.js";import{u as ce,a as de,b as me,r as K,d as L,c as fe,e as ve}from"./ClosePopup.d7a7271c.js";import{c as ge,h as he}from"./render.45809d99.js";import{a as xe}from"./dom.9bab46cf.js";import{a as ye}from"./focus-manager.d6507951.js";let v=0;const be={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},O={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var Ce=ge({name:"QDialog",inheritAttrs:!1,props:{...le,...ce,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...ue,"shake","click","escapeKey"],setup(e,{slots:$,emit:s,attrs:E}){const g=oe(),i=w(null),a=w(!1),l=w(!1);let h,n=null,d,x;const S=r(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:_}=ae(),{registerTimeout:C}=ne(),{registerTick:j,removeTick:F}=se(),{transitionProps:A,transitionStyle:z}=de(e,()=>O[e.position][0],()=>O[e.position][1]),{showPortal:D,hidePortal:H,portalIsAccessible:I,renderPortal:Q}=me(g,i,ee,!0),{hide:m}=re({showing:a,hideOnRouteChange:S,handleShow:N,handleHide:X,processOnMount:!0}),{addToHistory:V,removeFromHistory:W}=ie(a,m,S),U=r(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${be[e.position]}`+(l.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),f=r(()=>a.value===!0&&e.seamless!==!0),G=r(()=>e.autoClose===!0?{onClick:Y}:{}),J=r(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${f.value===!0?"modal":"seamless"}`,E.class]);R(()=>e.maximized,t=>{a.value===!0&&q(t)}),R(f,t=>{_(t),t===!0?(fe(B),ve(b)):(K(B),L(b))});function N(t){V(),n=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,q(e.maximized),D(),l.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),j(u)):F(),C(()=>{if(g.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:o,bottom:T}=document.activeElement.getBoundingClientRect(),{innerHeight:P}=window,k=window.visualViewport!==void 0?window.visualViewport.height:P;o>0&&T>k/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-k,T>=P?1/0:Math.ceil(document.scrollingElement.scrollTop+T-k/2))),document.activeElement.scrollIntoView()}x=!0,i.value.click(),x=!1}D(!0),l.value=!1,s("show",t)},e.transitionDuration)}function X(t){F(),W(),M(!0),l.value=!0,H(),n!==null&&(n.focus(),n=null),C(()=>{H(!0),l.value=!1,s("hide",t)},e.transitionDuration)}function u(t){ye(()=>{let o=i.value;o===null||o.contains(document.activeElement)===!0||(o=(t!==""?o.querySelector(t):null)||o.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||o.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||o.querySelector("[autofocus], [data-autofocus]")||o,o.focus({preventScroll:!0}))})}function y(t){t&&typeof t.focus=="function"?t.focus({preventScroll:!0}):u(),s("shake");const o=i.value;o!==null&&(o.classList.remove("q-animate--scale"),o.classList.add("q-animate--scale"),clearTimeout(h),h=setTimeout(()=>{i.value!==null&&(o.classList.remove("q-animate--scale"),u())},170))}function b(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&y():(s("escapeKey"),m()))}function M(t){clearTimeout(h),(t===!0||a.value===!0)&&(q(!1),e.seamless!==!0&&(_(!1),K(B),L(b))),t!==!0&&(n=null)}function q(t){t===!0?d!==!0&&(v<1&&document.body.classList.add("q-body--dialog"),v++,d=!0):d===!0&&(v<2&&document.body.classList.remove("q-body--dialog"),v--,d=!1)}function Y(t){x!==!0&&(m(t),s("click",t))}function Z(t){e.persistent!==!0&&e.noBackdropDismiss!==!0?m(t):e.noShake!==!0&&y(t.relatedTarget)}function B(t){e.allowFocusOutside!==!0&&I.value===!0&&xe(i.value,t.target)!==!0&&u('[tabindex]:not([tabindex="-1"])')}Object.assign(g.proxy,{focus:u,shake:y,__updateRefocusTarget(t){n=t||null}}),te(M);function ee(){return c("div",{role:"dialog","aria-modal":f.value===!0?"true":"false",...E,class:J.value},[c(p,{name:"q-transition--fade",appear:!0},()=>f.value===!0?c("div",{class:"q-dialog__backdrop fixed-full",style:z.value,"aria-hidden":"true",tabindex:-1,onFocusin:Z}):null),c(p,A.value,()=>a.value===!0?c("div",{ref:i,class:U.value,style:z.value,tabindex:-1,...G.value},he($.default)):null)])}return Q}});export{Ce as Q};
