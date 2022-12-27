import{b as n,j as V,n as C,v as f1,h as _,T as A1,e as a1,u as p1,z as u1,t as F1,i as Q1,g as T1,l as O1,_ as U1,o as h,c as X,w as I,C as i,a as i1,B as y,O as q1,M as k,P as j1,J as D1,N as I1}from"./index.e6697016.js";import{Q as W1}from"./QSpinner.6629ab80.js";import{c as v1,h as m1,d as c1}from"./render.45809d99.js";import{Q as d1}from"./QItemSection.e7fa102b.js";import{a as z1,Q as P1}from"./uid.c9fd912a.js";import{u as N1,a as G1}from"./use-prevent-scroll.401797f8.js";import{u as X1,a as K1,b as J1}from"./use-model-toggle.f6d858ad.js";import{u as E1}from"./use-timeout.771fda10.js";import{u as Y1,a as R1}from"./use-dark.ff2daf58.js";import{T as l1}from"./TouchPan.e520e23b.js";import{b as K}from"./format.801e7424.js";import{_ as $1}from"./white-logo.d7011fe1.js";const e2={ratio:[String,Number]};function t2(e,m){return n(()=>{const d=Number(e.ratio||(m!==void 0?m.value:void 0));return isNaN(d)!==!0&&d>0?{paddingBottom:`${100/d}%`}:null})}const a2=16/9;var h1=v1({name:"QImg",props:{...e2,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:a2},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:m,emit:d}){const Q=V(e.initialRatio),g=t2(e,Q);let u;const l=[V(null),V(e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null)],L=V(0),M=V(!1),A=V(!1),a=n(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),q=n(()=>({width:e.width,height:e.height})),j=n(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),p=n(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));C(()=>c(),b);function c(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function b(s){if(clearTimeout(u),A.value=!1,s===null){M.value=!1,l[0].value=null,l[1].value=null;return}M.value=!0,l[L.value].value=s}function f({target:s}){u!==null&&(clearTimeout(u),Q.value=s.naturalHeight===0?.5:s.naturalWidth/s.naturalHeight,r(s,1))}function r(s,x){u===null||x===1e3||(s.complete===!0?W(s):u=setTimeout(()=>{r(s,x+1)},50))}function W(s){u!==null&&(L.value=L.value===1?0:1,l[L.value].value=null,M.value=!1,A.value=!1,d("load",s.currentSrc||s.src))}function z(s){clearTimeout(u),M.value=!1,A.value=!0,l[0].value=null,l[1].value=null,d("error",s)}function P(s,x){return _("div",{class:"q-img__container absolute-full",key:s},x)}function T(s){const x=l[s].value,H={key:"img_"+s,class:j.value,style:p.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...x};return L.value===s?(H.class+=" q-img__image--waiting",Object.assign(H,{onLoad:f,onError:z})):H.class+=" q-img__image--loaded",P("img"+s,_("img",H))}function F(){return M.value!==!0?_("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},m1(m[A.value===!0?"error":"default"])):_("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},m.loading!==void 0?m.loading():e.noSpinner===!0?void 0:[_(W1,{color:e.spinnerColor,size:e.spinnerSize})])}return b(c()),f1(()=>{clearTimeout(u),u=null}),()=>{const s=[];return g.value!==null&&s.push(_("div",{key:"filler",style:g.value})),A.value!==!0&&(l[0].value!==null&&s.push(T(0)),l[1].value!==null&&s.push(T(1))),s.push(_(A1,{name:"q-transition--fade"},F)),_("div",{class:a.value,style:q.value,role:"img","aria-label":e.alt},s)}}});const C1=150;var i2=v1({name:"QDrawer",inheritAttrs:!1,props:{...X1,...Y1,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...K1,"onLayout","miniState"],setup(e,{slots:m,emit:d,attrs:Q}){const g=T1(),{proxy:{$q:u}}=g,l=R1(e,u),{preventBodyScroll:L}=G1(),{registerTimeout:M,removeTimeout:A}=E1(),a=Q1(O1,a1);if(a===a1)return console.error("QDrawer needs to be child of QLayout"),a1;let q,j,p;const c=V(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),b=n(()=>e.mini===!0&&c.value!==!0),f=n(()=>b.value===!0?e.miniWidth:e.width),r=V(e.showIfAbove===!0&&c.value===!1?!0:e.modelValue===!0),W=n(()=>e.persistent!==!0&&(c.value===!0||g1.value===!0));function z(t,o){if(s(),t!==!1&&a.animate(),w(0),c.value===!0){const v=a.instances[N.value];v!==void 0&&v.belowBreakpoint===!0&&v.hide(!1),B(1),a.isContainer.value!==!0&&L(!0)}else B(0),t!==!1&&$(!1);M(()=>{t!==!1&&$(!0),o!==!0&&d("show",t)},C1)}function P(t,o){x(),t!==!1&&a.animate(),B(0),w(O.value*f.value),e1(),o!==!0?M(()=>{d("hide",t)},C1):A()}const{show:T,hide:F}=J1({showing:r,hideOnRouteChange:W,handleShow:z,handleHide:P}),{addToHistory:s,removeFromHistory:x}=N1(r,F,W),H={belowBreakpoint:c,hide:F},S=n(()=>e.side==="right"),O=n(()=>(u.lang.rtl===!0?-1:1)*(S.value===!0?1:-1)),o1=V(0),U=V(!1),J=V(!1),s1=V(f.value*O.value),N=n(()=>S.value===!0?"left":"right"),E=n(()=>r.value===!0&&c.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:f.value:0),Y=n(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(S.value?"R":"L")>-1||u.platform.is.ios===!0&&a.isContainer.value===!0),D=n(()=>e.overlay===!1&&r.value===!0&&c.value===!1),g1=n(()=>e.overlay===!0&&r.value===!0&&c.value===!1),w1=n(()=>"fullscreen q-drawer__backdrop"+(r.value===!1&&U.value===!1?" hidden":"")),y1=n(()=>({backgroundColor:`rgba(0,0,0,${o1.value*.4})`})),n1=n(()=>S.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),_1=n(()=>S.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),V1=n(()=>{const t={};return a.header.space===!0&&n1.value===!1&&(Y.value===!0?t.top=`${a.header.offset}px`:a.header.space===!0&&(t.top=`${a.header.size}px`)),a.footer.space===!0&&_1.value===!1&&(Y.value===!0?t.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(t.bottom=`${a.footer.size}px`)),t}),k1=n(()=>{const t={width:`${f.value}px`,transform:`translateX(${s1.value}px)`};return c.value===!0?t:Object.assign(t,V1.value)}),L1=n(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),H1=n(()=>`q-drawer q-drawer--${e.side}`+(J.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(l.value===!0?" q-drawer--dark q-dark":"")+(U.value===!0?" no-transition":r.value===!0?"":" q-layout--prevent-focus")+(c.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${b.value===!0?"mini":"standard"}`+(Y.value===!0||D.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(n1.value===!0?" q-drawer--top-padding":""))),S1=n(()=>{const t=u.lang.rtl===!0?e.side:N.value;return[[l1,B1,void 0,{[t]:!0,mouse:!0}]]}),M1=n(()=>{const t=u.lang.rtl===!0?N.value:e.side;return[[l1,r1,void 0,{[t]:!0,mouse:!0}]]}),b1=n(()=>{const t=u.lang.rtl===!0?N.value:e.side;return[[l1,r1,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]});function R(){Z1(c,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}C(c,t=>{t===!0?(q=r.value,r.value===!0&&F(!1)):e.overlay===!1&&e.behavior!=="mobile"&&q!==!1&&(r.value===!0?(w(0),B(0),e1()):T(!1))}),C(()=>e.side,(t,o)=>{a.instances[o]===H&&(a.instances[o]=void 0,a[o].space=!1,a[o].offset=0),a.instances[t]=H,a[t].size=f.value,a[t].space=D.value,a[t].offset=E.value}),C(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&R()}),C(()=>e.behavior+e.breakpoint,R),C(a.isContainer,t=>{r.value===!0&&L(t!==!0),t===!0&&R()}),C(a.scrollbarWidth,()=>{w(r.value===!0?0:void 0)}),C(E,t=>{Z("offset",t)}),C(D,t=>{d("onLayout",t),Z("space",t)}),C(S,()=>{w()}),C(f,t=>{w(),t1(e.miniToOverlay,t)}),C(()=>e.miniToOverlay,t=>{t1(t,f.value)}),C(()=>u.lang.rtl,()=>{w()}),C(()=>e.mini,()=>{e.modelValue===!0&&(x1(),a.animate())}),C(b,t=>{d("miniState",t)});function w(t){t===void 0?u1(()=>{t=r.value===!0?0:f.value,w(O.value*t)}):(a.isContainer.value===!0&&S.value===!0&&(c.value===!0||Math.abs(t)===f.value)&&(t+=O.value*a.scrollbarWidth.value),s1.value=t)}function B(t){o1.value=t}function $(t){const o=t===!0?"remove":a.isContainer.value!==!0?"add":"";o!==""&&document.body.classList[o]("q-body--drawer-toggle")}function x1(){clearTimeout(j),g.proxy&&g.proxy.$el&&g.proxy.$el.classList.add("q-drawer--mini-animate"),J.value=!0,j=setTimeout(()=>{J.value=!1,g&&g.proxy&&g.proxy.$el&&g.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function B1(t){if(r.value!==!1)return;const o=f.value,v=K(t.distance.x,0,o);if(t.isFinal===!0){v>=Math.min(75,o)===!0?T():(a.animate(),B(0),w(O.value*o)),U.value=!1;return}w((u.lang.rtl===!0?S.value!==!0:S.value)?Math.max(o-v,0):Math.min(0,v-o)),B(K(v/o,0,1)),t.isFirst===!0&&(U.value=!0)}function r1(t){if(r.value!==!0)return;const o=f.value,v=t.direction===e.side,G=(u.lang.rtl===!0?v!==!0:v)?K(t.distance.x,0,o):0;if(t.isFinal===!0){Math.abs(G)<Math.min(75,o)===!0?(a.animate(),B(1),w(0)):F(),U.value=!1;return}w(O.value*G),B(K(1-G/o,0,1)),t.isFirst===!0&&(U.value=!0)}function e1(){L(!1),$(!0)}function Z(t,o){a.update(e.side,t,o)}function Z1(t,o){t.value!==o&&(t.value=o)}function t1(t,o){Z("size",t===!0?e.miniWidth:o)}return a.instances[e.side]=H,t1(e.miniToOverlay,f.value),Z("space",D.value),Z("offset",E.value),e.showIfAbove===!0&&e.modelValue!==!0&&r.value===!0&&e["onUpdate:modelValue"]!==void 0&&d("update:modelValue",!0),p1(()=>{d("onLayout",D.value),d("miniState",b.value),q=e.showIfAbove===!0;const t=()=>{(r.value===!0?z:P)(!1,!0)};if(a.totalWidth.value!==0){u1(t);return}p=C(a.totalWidth,()=>{p(),p=void 0,r.value===!1&&e.showIfAbove===!0&&c.value===!1?T(!1):t()})}),f1(()=>{p!==void 0&&p(),clearTimeout(j),r.value===!0&&e1(),a.instances[e.side]===H&&(a.instances[e.side]=void 0,Z("size",0),Z("offset",0),Z("space",!1))}),()=>{const t=[];c.value===!0&&(e.noSwipeOpen===!1&&t.push(F1(_("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),S1.value)),t.push(c1("div",{ref:"backdrop",class:w1.value,style:y1.value,"aria-hidden":"true",onClick:F},void 0,"backdrop",e.noSwipeBackdrop!==!0&&r.value===!0,()=>b1.value)));const o=b.value===!0&&m.mini!==void 0,v=[_("div",{...Q,key:""+o,class:[L1.value,Q.class]},o===!0?m.mini():m1(m.default))];return e.elevated===!0&&r.value===!0&&v.push(_("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(c1("aside",{ref:"content",class:H1.value,style:k1.value},v,"contentclose",e.noSwipeClose!==!0&&c.value===!0,()=>M1.value)),_("div",{class:"q-drawer-container"},t)}}}),l2="data:image/png;base64,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";const o2={name:"sidebar-component",data(){return{}},props:{links:{type:Array,default:()=>[]},logoWithText:{type:Boolean,default:!1}}},s2={class:"row tw-justify-center tw-mt-10"},n2={key:0,width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r2=i("mask",{id:"mask0_1206_229",style:{"mask-type":"alpha"},maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"28",height:"28"},[i("rect",{width:"28",height:"28",fill:"#D9D9D9"})],-1),u2={mask:"url(#mask0_1206_229)"},c2=["fill"],d2=i("circle",{cx:"24.5",cy:"4.5",r:"3.5",fill:"#FF0000"},null,-1),h2={key:1,width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},C2=i("mask",{id:"mask0_1206_212",style:{"mask-type":"alpha"},maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"28",height:"28"},[i("rect",{width:"28",height:"28",fill:"#D9D9D9"})],-1),f2={mask:"url(#mask0_1206_212)"},v2=["fill"],m2=i("circle",{cx:"24.5",cy:"4.5",r:"3.5",fill:"#FF0000"},null,-1),g2={key:2,width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},w2=i("mask",{id:"mask0_1206_463",style:{"mask-type":"alpha"},maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"28",height:"28"},[i("rect",{width:"28",height:"28",fill:"#D9D9D9"})],-1),y2={mask:"url(#mask0_1206_463)"},_2=["fill"],V2=i("circle",{cx:"24.5",cy:"4.5",r:"3.5",fill:"#FF0000"},null,-1),k2={key:3,width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},L2=i("mask",{id:"mask0_1206_264",style:{"mask-type":"alpha"},maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"28",height:"28"},[i("rect",{width:"28",height:"28",fill:"#D9D9D9"})],-1),H2={mask:"url(#mask0_1206_264)"},S2=["fill"],M2=i("circle",{cx:"24.5",cy:"4.5",r:"3.5",fill:"#FF0000"},null,-1),b2={key:4,width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},x2=i("mask",{id:"mask0_1206_274",style:{"mask-type":"alpha"},maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"28",height:"28"},[i("rect",{width:"28",height:"28",fill:"#D9D9D9"})],-1),B2={mask:"url(#mask0_1206_274)"},Z2=["fill"],A2=i("circle",{cx:"24.5",cy:"4.5",r:"3.5",fill:"#FF0000"},null,-1),p2={key:5,width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},F2={id:"mask0_2339_293",style:{"mask-type":"alpha"},maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"28",height:"28"},Q2=["fill"],T2=i("g",{mask:"url(#mask0_2339_293)"},[i("path",{d:"M3.5 24.5V22.1667L5.83333 19.8333V24.5H3.5ZM8.16667 24.5V17.5L10.5 15.1667V24.5H8.16667ZM12.8333 24.5V15.1667L15.1667 17.5292V24.5H12.8333ZM17.5 24.5V17.5292L19.8333 15.1958V24.5H17.5ZM22.1667 24.5V12.8333L24.5 10.5V24.5H22.1667ZM3.5 18.4625V15.1667L11.6667 7L16.3333 11.6667L24.5 3.5V6.79583L16.3333 14.9625L11.6667 10.2958L3.5 18.4625Z",fill:"#00009F"}),i("circle",{cx:"24.5",cy:"4.5",r:"3.5",fill:"#FF0000"})],-1),O2={key:6,width:"28",height:"28",viewBox:"0 0 28 28",xmlns:"http://www.w3.org/2000/svg"},U2=i("mask",{id:"mask0_1206_38",style:{"mask-type":"alpha"},maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"28",height:"28"},[i("rect",{width:"28",height:"28"})],-1),q2={mask:"url(#mask0_1206_38)"},j2=["fill"],D2=i("circle",{cx:"24.5",cy:"4.5",r:"3.5",fill:"#FF0000"},null,-1),I2=["fill"],W2=i("path",{d:"M0 14V12.1625C0 11.3069 0.432833 10.6213 1.2985 10.1057C2.16339 9.59078 3.28611 9.33333 4.66667 9.33333C4.91944 9.33333 5.1625 9.338 5.39583 9.34733C5.62917 9.35744 5.85278 9.38194 6.06667 9.42083C5.79444 9.80972 5.59028 10.2278 5.45417 10.675C5.31806 11.1222 5.25 11.5986 5.25 12.1042V14H0ZM7 14V12.1042C7 10.8403 7.64672 9.81944 8.94017 9.04167C10.2328 8.26389 11.9194 7.875 14 7.875C16.1 7.875 17.7917 8.26389 19.075 9.04167C20.3583 9.81944 21 10.8403 21 12.1042V14H7ZM22.75 14V12.1042C22.75 11.5986 22.6866 11.1222 22.5598 10.675C22.4338 10.2278 22.2444 9.80972 21.9917 9.42083C22.2056 9.38194 22.4245 9.35744 22.6485 9.34733C22.8717 9.338 23.1 9.33333 23.3333 9.33333C24.7333 9.33333 25.8611 9.59078 26.7167 10.1057C27.5722 10.6213 28 11.3069 28 12.1625V14H22.75ZM14 10.2083C12.8917 10.2083 11.9 10.3542 11.025 10.6458C10.15 10.9375 9.63472 11.2778 9.47917 11.6667H18.55C18.375 11.2778 17.8547 10.9375 16.989 10.6458C16.1241 10.3542 15.1278 10.2083 14 10.2083ZM4.66667 8.16667C4.025 8.16667 3.47589 7.938 3.01933 7.48067C2.562 7.02411 2.33333 6.475 2.33333 5.83333C2.33333 5.17222 2.562 4.61806 3.01933 4.17083C3.47589 3.72361 4.025 3.5 4.66667 3.5C5.32778 3.5 5.88194 3.72361 6.32917 4.17083C6.77639 4.61806 7 5.17222 7 5.83333C7 6.475 6.77639 7.02411 6.32917 7.48067C5.88194 7.938 5.32778 8.16667 4.66667 8.16667ZM23.3333 8.16667C22.6917 8.16667 22.1422 7.938 21.6848 7.48067C21.2283 7.02411 21 6.475 21 5.83333C21 5.17222 21.2283 4.61806 21.6848 4.17083C22.1422 3.72361 22.6917 3.5 23.3333 3.5C23.9944 3.5 24.5486 3.72361 24.9958 4.17083C25.4431 4.61806 25.6667 5.17222 25.6667 5.83333C25.6667 6.475 25.4431 7.02411 24.9958 7.48067C24.5486 7.938 23.9944 8.16667 23.3333 8.16667ZM14 7C13.0278 7 12.2014 6.65972 11.5208 5.97917C10.8403 5.29861 10.5 4.47222 10.5 3.5C10.5 2.50833 10.8403 1.67689 11.5208 1.00567C12.2014 0.335222 13.0278 0 14 0C14.9917 0 15.8227 0.335222 16.4932 1.00567C17.1644 1.67689 17.5 2.50833 17.5 3.5C17.5 4.47222 17.1644 5.29861 16.4932 5.97917C15.8227 6.65972 14.9917 7 14 7ZM14 2.33333C13.6694 2.33333 13.3926 2.44494 13.1693 2.66817C12.9453 2.89217 12.8333 3.16944 12.8333 3.5C12.8333 3.83056 12.9453 4.10744 13.1693 4.33067C13.3926 4.55467 13.6694 4.66667 14 4.66667C14.3306 4.66667 14.6078 4.55467 14.8318 4.33067C15.0551 4.10744 15.1667 3.83056 15.1667 3.5C15.1667 3.16944 15.0551 2.89217 14.8318 2.66817C14.6078 2.44494 14.3306 2.33333 14 2.33333Z"},null,-1),z2=i("circle",{cx:"24.5",cy:"4.5",r:"3.5",fill:"#FF0000"},null,-1),P2=[W2,z2],N2=["fill"],G2=i("path",{d:"M15.7135 11.0906C14.7413 11.0906 13.9149 10.7504 13.2344 10.0698C12.5538 9.38925 12.2135 8.56286 12.2135 7.59064C12.2135 6.61841 12.5538 5.79203 13.2344 5.11147C13.9149 4.43091 14.7413 4.09064 15.7135 4.09064C16.6858 4.09064 17.5121 4.43091 18.1927 5.11147C18.8733 5.79203 19.2135 6.61841 19.2135 7.59064C19.2135 8.56286 18.8733 9.38925 18.1927 10.0698C17.5121 10.7504 16.6858 11.0906 15.7135 11.0906ZM7.54687 14.5906C6.90521 14.5906 6.3561 14.362 5.89954 13.9046C5.44221 13.4481 5.21354 12.899 5.21354 12.2573V2.92397C5.21354 2.2823 5.44221 1.73319 5.89954 1.27664C6.3561 0.819304 6.90521 0.590637 7.54687 0.590637H23.8802C24.5219 0.590637 25.0714 0.819304 25.5287 1.27664C25.9853 1.73319 26.2135 2.2823 26.2135 2.92397V12.2573C26.2135 12.899 25.9853 13.4481 25.5287 13.9046C25.0714 14.362 24.5219 14.5906 23.8802 14.5906H7.54687ZM9.88021 12.2573H21.5469C21.5469 11.6156 21.7752 11.0661 22.2317 10.6088C22.689 10.1522 23.2385 9.92397 23.8802 9.92397V5.2573C23.2385 5.2573 22.689 5.02864 22.2317 4.5713C21.7752 4.11475 21.5469 3.56564 21.5469 2.92397H9.88021C9.88021 3.56564 9.65154 4.11475 9.19421 4.5713C8.73765 5.02864 8.18854 5.2573 7.54687 5.2573V9.92397C8.18854 9.92397 8.73765 10.1522 9.19421 10.6088C9.65154 11.0661 9.88021 11.6156 9.88021 12.2573ZM22.7135 19.2573H2.88021C2.23854 19.2573 1.68943 19.029 1.23287 18.5725C0.775542 18.1151 0.546875 17.5656 0.546875 16.924V4.09064H2.88021V16.924H22.7135V19.2573Z"},null,-1),X2=i("circle",{cx:"24.5",cy:"4.5",r:"3.5",fill:"#FF0000"},null,-1),K2=[G2,X2],J2=["fill"],E2=i("path",{d:"M9.90317 9.91849C8.5815 9.91849 7.45008 9.44789 6.5089 8.50671C5.56771 7.56553 5.09712 6.4341 5.09712 5.11244C5.09712 3.79078 5.56771 2.65936 6.5089 1.71817C7.45008 0.776989 8.5815 0.306396 9.90317 0.306396C11.2248 0.306396 12.3563 0.776989 13.2974 1.71817C14.2386 2.65936 14.7092 3.79078 14.7092 5.11244C14.7092 6.4341 14.2386 7.56553 13.2974 8.50671C12.3563 9.44789 11.2248 9.91849 9.90317 9.91849ZM0.291077 19.5306V16.1663C0.291077 15.5055 0.461291 14.8847 0.801719 14.304C1.14215 13.7233 1.61274 13.2827 2.21349 12.9823C3.23478 12.4617 4.38623 12.0211 5.66784 11.6607C6.94945 11.3002 8.36123 11.12 9.90317 11.12H10.3237C10.4438 11.12 10.564 11.14 10.6841 11.1801C10.5239 11.5405 10.3886 11.9162 10.278 12.3071C10.1683 12.6972 10.0834 13.1025 10.0233 13.523H9.90317C8.48138 13.523 7.20457 13.7032 6.07275 14.0637C4.94173 14.4242 4.01576 14.7846 3.29486 15.1451C3.11463 15.2452 2.96965 15.3854 2.85991 15.5656C2.74937 15.7458 2.6941 15.9461 2.6941 16.1663V17.1276H10.2636C10.3838 17.5481 10.544 17.9638 10.7442 18.3747C10.9445 18.7848 11.1648 19.1701 11.4051 19.5306H0.291077ZM17.1122 20.7321L16.7518 18.9298C16.5115 18.8297 16.286 18.7248 16.0753 18.615C15.8655 18.5045 15.6504 18.3691 15.4301 18.2089L13.6879 18.7496L12.4864 16.707L13.8682 15.5055C13.8281 15.2252 13.8081 14.9648 13.8081 14.7245C13.8081 14.4842 13.8281 14.2239 13.8682 13.9435L12.4864 12.742L13.6879 10.6995L15.4301 11.2401C15.6504 11.0799 15.8655 10.9446 16.0753 10.834C16.286 10.7243 16.5115 10.6194 16.7518 10.5192L17.1122 8.71697H19.5153L19.8757 10.5192C20.116 10.6194 20.3415 10.7295 20.5522 10.8497C20.762 10.9698 20.9771 11.12 21.1974 11.3002L22.9396 10.6995L24.1411 12.8021L22.7593 14.0036C22.7994 14.2439 22.8194 14.4942 22.8194 14.7546C22.8194 15.0149 22.7994 15.2652 22.7593 15.5055L24.1411 16.707L22.9396 18.7496L21.1974 18.2089C20.9771 18.3691 20.762 18.5045 20.5522 18.615C20.3415 18.7248 20.116 18.8297 19.8757 18.9298L19.5153 20.7321H17.1122ZM18.3137 17.1276C18.9746 17.1276 19.5405 16.8925 20.0115 16.4223C20.4817 15.9513 20.7168 15.3854 20.7168 14.7245C20.7168 14.0637 20.4817 13.4978 20.0115 13.0268C19.5405 12.5566 18.9746 12.3215 18.3137 12.3215C17.6529 12.3215 17.0874 12.5566 16.6172 13.0268C16.1462 13.4978 15.9107 14.0637 15.9107 14.7245C15.9107 15.3854 16.1462 15.9513 16.6172 16.4223C17.0874 16.8925 17.6529 17.1276 18.3137 17.1276ZM9.90317 7.51546C10.564 7.51546 11.1299 7.27997 11.6009 6.80897C12.0711 6.33878 12.3062 5.77327 12.3062 5.11244C12.3062 4.45161 12.0711 3.8861 11.6009 3.41591C11.1299 2.94491 10.564 2.70942 9.90317 2.70942C9.24234 2.70942 8.67683 2.94491 8.20663 3.41591C7.73564 3.8861 7.50014 4.45161 7.50014 5.11244C7.50014 5.77327 7.73564 6.33878 8.20663 6.80897C8.67683 7.27997 9.24234 7.51546 9.90317 7.51546Z"},null,-1),Y2=i("circle",{cx:"24.5",cy:"4.5",r:"3.5",fill:"#FF0000"},null,-1),R2=[E2,Y2],$2=["fill"],e3=i("path",{d:"M13.7644 21.2885L5.5977 16.8551V9.85512L0.93103 7.28845L13.7644 0.288452L26.5977 7.28845V16.6218H24.2644V8.57179L21.931 9.85512V16.8551L13.7644 21.2885ZM13.7644 11.6051L21.756 7.28845L13.7644 2.97179L5.7727 7.28845L13.7644 11.6051ZM13.7644 18.6343L19.5977 15.4843V11.0801L13.7644 14.2885L7.93103 11.0801V15.4843L13.7644 18.6343Z"},null,-1),t3=i("circle",{cx:"24.5",cy:"4.5",r:"3.5",fill:"#FF0000"},null,-1),a3=[e3,t3];function i3(e,m,d,Q,g,u){return h(),X(i2,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":m[0]||(m[0]=l=>e.leftDrawerOpen=l),"show-if-above":"",class:"tw-bg-primary-bg-color",width:"232"},{default:I(()=>[i("div",s2,[d.logoWithText?(h(),X(h1,{key:0,class:"tw-w-40",src:$1})):(h(),X(h1,{key:1,class:"tw-w-16",src:l2}))]),i1(P1,{class:"tw-mt-12"},{default:I(()=>[(h(!0),y(I1,null,q1(d.links,l=>(h(),X(z1,{exact:"",clickable:"","active-class":"bg-white",to:l.to,class:"tw-pl-10 tw-mt-3",key:l.name},{default:I(()=>[i1(d1,{avatar:""},{default:I(()=>[l.icon.toLowerCase()==="dashboard"?(h(),y("svg",n2,[r2,i("g",u2,[i("path",{d:"M3.5 12.8333V3.5H12.8333V12.8333H3.5ZM3.5 24.5V15.1667H12.8333V24.5H3.5ZM15.1667 12.8333V3.5H24.5V12.8333H15.1667ZM15.1667 24.5V15.1667H24.5V24.5H15.1667ZM5.83333 10.5H10.5V5.83333H5.83333V10.5ZM17.5 10.5H22.1667V5.83333H17.5V10.5ZM17.5 22.1667H22.1667V17.5H17.5V22.1667ZM5.83333 22.1667H10.5V17.5H5.83333V22.1667Z",fill:this.$route.fullPath===l.to?"#00009F":"white"},null,8,c2),d2])])):k("",!0),l.icon.toLowerCase()==="helps"?(h(),y("svg",h2,[C2,i("g",f2,[i("path",{d:"M14 21C14.4083 21 14.7533 20.8588 15.0348 20.5765C15.3172 20.2949 15.4583 19.95 15.4583 19.5417C15.4583 19.1333 15.3172 18.7884 15.0348 18.5068C14.7533 18.2245 14.4083 18.0833 14 18.0833C13.5917 18.0833 13.2467 18.2245 12.9652 18.5068C12.6828 18.7884 12.5417 19.1333 12.5417 19.5417C12.5417 19.95 12.6828 20.2949 12.9652 20.5765C13.2467 20.8588 13.5917 21 14 21ZM12.95 16.5083H15.1083C15.1083 15.8083 15.1861 15.2931 15.3417 14.9625C15.4972 14.6319 15.8278 14.2139 16.3333 13.7083C17.0139 13.0278 17.4953 12.4588 17.7777 12.0015C18.0592 11.5449 18.2 11.025 18.2 10.4417C18.2 9.41111 17.85 8.57967 17.15 7.94733C16.45 7.31578 15.5069 7 14.3208 7C13.2514 7 12.3426 7.2625 11.5943 7.7875C10.8453 8.3125 10.325 9.04167 10.0333 9.975L11.9583 10.7333C12.0944 10.2083 12.3667 9.78522 12.775 9.464C13.1833 9.14356 13.6597 8.98333 14.2042 8.98333C14.7292 8.98333 15.1667 9.12411 15.5167 9.40567C15.8667 9.688 16.0417 10.0625 16.0417 10.5292C16.0417 10.8597 15.9347 11.2097 15.7208 11.5792C15.5069 11.9486 15.1472 12.3569 14.6417 12.8042C14 13.3681 13.5578 13.9074 13.3152 14.4223C13.0717 14.938 12.95 15.6333 12.95 16.5083ZM5.83333 24.5C5.19167 24.5 4.64217 24.2717 4.18483 23.8152C3.72828 23.3578 3.5 22.8083 3.5 22.1667V5.83333C3.5 5.19167 3.72828 4.64217 4.18483 4.18483C4.64217 3.72828 5.19167 3.5 5.83333 3.5H22.1667C22.8083 3.5 23.3578 3.72828 23.8152 4.18483C24.2717 4.64217 24.5 5.19167 24.5 5.83333V22.1667C24.5 22.8083 24.2717 23.3578 23.8152 23.8152C23.3578 24.2717 22.8083 24.5 22.1667 24.5H5.83333ZM5.83333 22.1667H22.1667V5.83333H5.83333V22.1667Z",fill:this.$route.fullPath===l.to?"#00009F":"white"},null,8,v2),m2])])):k("",!0),l.icon.toLowerCase()==="rewards"?(h(),y("svg",g2,[w2,i("g",y2,[i("path",{d:"M25.6663 7.0013V21.0013C25.6663 21.643 25.4381 22.1925 24.9815 22.6498C24.5242 23.1064 23.9747 23.3346 23.333 23.3346H4.66634C4.02467 23.3346 3.47556 23.1064 3.01901 22.6498C2.56167 22.1925 2.33301 21.643 2.33301 21.0013V7.0013C2.33301 6.35964 2.56167 5.81052 3.01901 5.35397C3.47556 4.89664 4.02467 4.66797 4.66634 4.66797H23.333C23.9747 4.66797 24.5242 4.89664 24.9815 5.35397C25.4381 5.81052 25.6663 6.35964 25.6663 7.0013ZM4.66634 9.33463H23.333V7.0013H4.66634V9.33463ZM4.66634 14.0013V21.0013H23.333V14.0013H4.66634Z",fill:this.$route.fullPath===l.to?"#00009F":"white"},null,8,_2),V2])])):k("",!0),l.icon.toLowerCase()==="payments"?(h(),y("svg",k2,[L2,i("g",H2,[i("path",{d:"M3.5 24.5V22.1667L5.83333 19.8333V24.5H3.5ZM8.16667 24.5V17.5L10.5 15.1667V24.5H8.16667ZM12.8333 24.5V15.1667L15.1667 17.5292V24.5H12.8333ZM17.5 24.5V17.5292L19.8333 15.1958V24.5H17.5ZM22.1667 24.5V12.8333L24.5 10.5V24.5H22.1667ZM3.5 18.4625V15.1667L11.6667 7L16.3333 11.6667L24.5 3.5V6.79583L16.3333 14.9625L11.6667 10.2958L3.5 18.4625Z",fill:this.$route.fullPath===l.to?"#00009F":"white"},null,8,S2),M2])])):k("",!0),l.icon.toLowerCase()==="assignment"?(h(),y("svg",b2,[x2,i("g",B2,[i("path",{d:"M5.83333 24.5003C5.19167 24.5003 4.64217 24.272 4.18483 23.8155C3.72828 23.3582 3.5 22.8087 3.5 22.167V5.83366C3.5 5.19199 3.72828 4.64249 4.18483 4.18516C4.64217 3.7286 5.19167 3.50033 5.83333 3.50033H10.7333C10.9861 2.80033 11.4092 2.23644 12.0027 1.80866C12.5953 1.38088 13.2611 1.16699 14 1.16699C14.7389 1.16699 15.4051 1.38088 15.9985 1.80866C16.5912 2.23644 17.0139 2.80033 17.2667 3.50033H22.1667C22.8083 3.50033 23.3578 3.7286 23.8152 4.18516C24.2717 4.64249 24.5 5.19199 24.5 5.83366V22.167C24.5 22.8087 24.2717 23.3582 23.8152 23.8155C23.3578 24.272 22.8083 24.5003 22.1667 24.5003H5.83333ZM5.83333 22.167H22.1667V5.83366H5.83333V22.167ZM8.16667 19.8337H16.3333V17.5003H8.16667V19.8337ZM8.16667 15.167H19.8333V12.8337H8.16667V15.167ZM8.16667 10.5003H19.8333V8.16699H8.16667V10.5003ZM14 4.95866C14.2528 4.95866 14.462 4.87583 14.6277 4.71016C14.7926 4.54527 14.875 4.33644 14.875 4.08366C14.875 3.83088 14.7926 3.62166 14.6277 3.45599C14.462 3.2911 14.2528 3.20866 14 3.20866C13.7472 3.20866 13.5384 3.2911 13.3735 3.45599C13.2078 3.62166 13.125 3.83088 13.125 4.08366C13.125 4.33644 13.2078 4.54527 13.3735 4.71016C13.5384 4.87583 13.7472 4.95866 14 4.95866Z",fill:this.$route.fullPath===l.to?"#00009F":"white"},null,8,Z2),A2])])):k("",!0),l.icon.toLowerCase()==="performance"?(h(),y("svg",p2,[i("mask",F2,[i("rect",{width:"28",height:"28",fill:this.$route.fullPath===l.to?"#00009F":"white"},null,8,Q2)]),T2])):k("",!0),l.icon.toLowerCase()==="classes"?(h(),y("svg",O2,[U2,i("g",q2,[i("path",{d:"M16.3337 11.5513V9.56797C16.9753 9.29575 17.6318 9.09158 18.303 8.95547C18.9734 8.81936 19.6781 8.7513 20.417 8.7513C20.9225 8.7513 21.4184 8.79019 21.9045 8.86797C22.3906 8.94575 22.867 9.04297 23.3337 9.15963V11.0263C22.867 10.8513 22.3957 10.7202 21.9197 10.6331C21.4429 10.5452 20.942 10.5013 20.417 10.5013C19.6781 10.5013 18.9684 10.5939 18.2878 10.779C17.6073 10.9633 16.9559 11.2207 16.3337 11.5513ZM16.3337 17.968V15.9846C16.9753 15.7124 17.6318 15.5082 18.303 15.3721C18.9734 15.236 19.6781 15.168 20.417 15.168C20.9225 15.168 21.4184 15.2069 21.9045 15.2846C22.3906 15.3624 22.867 15.4596 23.3337 15.5763V17.443C22.867 17.268 22.3957 17.1369 21.9197 17.0498C21.4429 16.9619 20.942 16.918 20.417 16.918C19.6781 16.918 18.9684 17.0055 18.2878 17.1805C17.6073 17.3555 16.9559 17.618 16.3337 17.968ZM16.3337 14.7596V12.7763C16.9753 12.5041 17.6318 12.2999 18.303 12.1638C18.9734 12.0277 19.6781 11.9596 20.417 11.9596C20.9225 11.9596 21.4184 11.9985 21.9045 12.0763C22.3906 12.1541 22.867 12.2513 23.3337 12.368V14.2346C22.867 14.0596 22.3957 13.9286 21.9197 13.8415C21.4429 13.7536 20.942 13.7096 20.417 13.7096C19.6781 13.7096 18.9684 13.8022 18.2878 13.9873C17.6073 14.1716 16.9559 14.4291 16.3337 14.7596ZM7.58366 18.668C8.49755 18.668 9.38732 18.7699 10.253 18.9736C11.1179 19.1782 11.9781 19.4846 12.8337 19.893V8.4013C12.0364 7.93463 11.1906 7.58464 10.2962 7.3513C9.40171 7.11797 8.49755 7.0013 7.58366 7.0013C6.88366 7.0013 6.18871 7.06936 5.49882 7.20547C4.80816 7.34158 4.14199 7.54575 3.50033 7.81797V19.368C4.18088 19.1346 4.85677 18.9596 5.52799 18.843C6.19844 18.7263 6.88366 18.668 7.58366 18.668ZM15.167 19.893C16.0225 19.4846 16.8832 19.1782 17.7488 18.9736C18.6137 18.7699 19.5031 18.668 20.417 18.668C21.117 18.668 21.8026 18.7263 22.4738 18.843C23.1443 18.9596 23.8198 19.1346 24.5003 19.368V7.81797C23.8587 7.54575 23.1929 7.34158 22.503 7.20547C21.8123 7.06936 21.117 7.0013 20.417 7.0013C19.5031 7.0013 18.5989 7.11797 17.7045 7.3513C16.81 7.58464 15.9642 7.93463 15.167 8.4013V19.893ZM14.0003 23.3346C13.067 22.5957 12.0559 22.0221 10.967 21.6138C9.8781 21.2055 8.75032 21.0013 7.58366 21.0013C6.76699 21.0013 5.9651 21.1082 5.17799 21.3221C4.3901 21.536 3.63644 21.8374 2.91699 22.2263C2.50866 22.4402 2.1151 22.4305 1.73633 22.1971C1.35677 21.9638 1.16699 21.6235 1.16699 21.1763V7.11797C1.16699 6.90408 1.22066 6.69991 1.32799 6.50547C1.43455 6.31102 1.59477 6.16519 1.80866 6.06797C2.7031 5.6013 3.63644 5.2513 4.60866 5.01797C5.58088 4.78464 6.57255 4.66797 7.58366 4.66797C8.71144 4.66797 9.8151 4.8138 10.8947 5.10547C11.9734 5.39714 13.0087 5.83464 14.0003 6.41797C14.992 5.83464 16.0276 5.39714 17.1072 5.10547C18.1859 4.8138 19.2892 4.66797 20.417 4.66797C21.4281 4.66797 22.4198 4.78464 23.392 5.01797C24.3642 5.2513 25.2975 5.6013 26.192 6.06797C26.4059 6.16519 26.5665 6.31102 26.6738 6.50547C26.7804 6.69991 26.8337 6.90408 26.8337 7.11797V21.1763C26.8337 21.6235 26.6443 21.9638 26.2655 22.1971C25.8859 22.4305 25.492 22.4402 25.0837 22.2263C24.3642 21.8374 23.6105 21.536 22.8227 21.3221C22.0355 21.1082 21.2337 21.0013 20.417 21.0013C19.2503 21.0013 18.1225 21.2055 17.0337 21.6138C15.9448 22.0221 14.9337 22.5957 14.0003 23.3346Z",fill:this.$route.fullPath===l.to?"#00009F":"white"},null,8,j2),D2])])):k("",!0),l.icon.toLowerCase()==="student"?(h(),y("svg",{key:7,fill:this.$route.fullPath===l.to?"#00009F":"white",width:"28",height:"14",viewBox:"0 0 28 14",xmlns:"http://www.w3.org/2000/svg"},P2,8,I2)):k("",!0),l.icon.toLowerCase()==="transaction"?(h(),y("svg",{key:8,fill:this.$route.fullPath===l.to?"#00009F":"white",width:"27",height:"20",viewBox:"0 0 27 20",xmlns:"http://www.w3.org/2000/svg"},K2,8,N2)):k("",!0),l.icon.toLowerCase()==="usermanagement"?(h(),y("svg",{key:9,width:"24",height:"21",viewBox:"0 0 24 21",fill:this.$route.fullPath===l.to?"#00009F":"white",xmlns:"http://www.w3.org/2000/svg"},R2,8,J2)):k("",!0),l.icon.toLowerCase()==="school"?(h(),y("svg",{key:10,width:"27",height:"22",viewBox:"0 0 27 22",fill:this.$route.fullPath===l.to?"#00009F":"white",xmlns:"http://www.w3.org/2000/svg"},a3,8,$2)):k("",!0)]),_:2},1024),i1(d1,null,{default:I(()=>[i("p",{class:D1(["tw-text-white tw-font-normal tw-text-base -tw-ml-5",this.$route.fullPath===l.to?"tw-text-[#00009F]":"tw-text-white"])},j1(l.name),3)]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:1})]),_:1},8,["modelValue"])}var g3=U1(o2,[["render",i3]]);export{g3 as S};
