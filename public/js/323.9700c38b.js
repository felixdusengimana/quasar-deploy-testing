"use strict";(self["webpackChunktesting"]=self["webpackChunktesting"]||[]).push([[323],{4323:(t,e,n)=>{n.r(e),n.d(e,{default:()=>D});var o=n(59835),w=n(61957),l=n(80783),a=n.n(l),s={class:"tw-min-h-screen tw-font-manrope tw-flex tw-flex-col justify-between"},r={class:"tw-text-center tw-mb-5"},i=(0,o._)("h1",{class:"tw-text-black tw-text-xl tw-font-bold"},"Log in to Eduvacity",-1),u=(0,o._)("p",{class:"tw-text-[#606060] tw-mt-2"},"We've sent a 6-digit verification code to the email address",-1),c=["href"],m=(0,o._)("label",{for:"otp",class:"tw-text-center tw-block tw-text-[#808080] tw-text-sm tw-font-medium tw-mb-2"},"Enter verification code",-1),d={class:"tw-flex items-center justify-around tw-w-full"},f=["onUpdate:modelValue","name"],p=(0,o._)("button",{type:"submit",class:"md:tw-w-full lg:tw-w-full tw-w-11/12 tw-bg-[#000060] tw-h-[67px] tw-text-white tw-rounded-none tw-text-sm tw-capitalize"}," Continue ",-1),x=(0,o._)("p",{class:"tw-max-w-[267.56px] tw-mt-6 tw-text-[#8F969D] tw-mx-auto tw-text-center tw-text-sm"},[(0,o.Uk)(" by continuing you agree to eduvacity "),(0,o._)("a",{href:"",class:"tw-text-[#4A7DFF]"},"Terms & Condition"),(0,o.Uk)(" and "),(0,o._)("a",{href:"",class:"tw-text-[#4A7DFF]"},"Privacy Policy")],-1),b=(0,o._)("p",{class:"tw-text-[#8692A6] tw-text-base tw-flex tw-items-center tw-my-5 tw-w-fit tw-mx-auto lg:tw-pb-10"},[(0,o._)("img",{src:a(),alt:"",class:"tw-mr-2"}),(0,o._)("span",null,"Your Info is safely secured")],-1);function h(t,e,n,l,a,h){var g=(0,o.up)("Navbar"),v=(0,o.up)("q-form");return(0,o.wg)(),(0,o.iD)("div",s,[(0,o.Wm)(g,{isWhite:""}),(0,o.Wm)(v,{onSubmit:h.onSubmit,class:"lg:tw-w-[55vh] tw-mt-10 tw-border-[0.84px] tw-mx-auto tw-border-black tw-rounded-lg tw-p-8 tw-shadow-form"},{default:(0,o.w5)((function(){return[(0,o._)("div",r,[i,u,(0,o._)("a",{href:"mailto:phelixdusengimana@gmail.com",class:"tw-text-[#9F9FFF] tw-cursor-pointer tw-mt-2 tw-text-sm tw-font-medium"},"a*****u@gmail.com",8,c)]),m,(0,o._)("div",d,[((0,o.wg)(),(0,o.iD)(o.HY,null,(0,o.Ko)(6,(function(t,e){return(0,o.wy)((0,o._)("input",{type:"number",min:"0",max:"9",tabindex:1,key:t,"onUpdate:modelValue":function(t){return a.otp[e]=t},name:"otp"+e,id:"otp",class:"md:tw-w-full lg:tw-w-full tw-w-full tw-max-w-[50.11px] tw-h-[50.11px] tw-text-center tw-border-2 tw-rounded-md tw-border-[##BFBFBF] tw-mb-6 tw-text-sm tw-outline-none"},null,8,f),[[w.nr,a.otp[e]]])})),64))]),p,x]})),_:1},8,["onSubmit"]),b])}const g={name:"EnterOTP",data:function(){return{otp:[null,null,null,null,null,null],errors:[]}},methods:{enterOTP:function(){var t=this;axios.post("/api/auth/enter-otp",{otp:this.otp}).then((function(t){console.log(t)}))["catch"]((function(e){t.errors=e.response.data.errors}))},onSubmit:function(t){t.preventDefault(),console.log(this.otp)}}};var v=n(11639),_=n(8326),y=n(69984),F=n.n(y);const k=(0,v.Z)(g,[["render",h]]),D=k;F()(g,"components",{QForm:_.Z})}}]);