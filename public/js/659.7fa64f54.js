(self["webpackChunktesting"]=self["webpackChunktesting"]||[]).push([[659],{4736:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>Nt});var n=s(59835),l={class:"tw-h-screen tw-font-manrope"};function w(t,e,s,w,o,a){var r=(0,n.up)("Navbar"),i=(0,n.up)("RegisterForm"),u=(0,n.up)("EnterEmail"),c=(0,n.up)("ConfirmEmail"),p=(0,n.up)("CreatePassword"),d=(0,n.up)("RegisterSuccess");return(0,n.wg)(),(0,n.iD)("div",l,[(0,n.Wm)(r),1==o.step?((0,n.wg)(),(0,n.j4)(i,{key:0,nextStep:a.nextStep},null,8,["nextStep"])):2==o.step?((0,n.wg)(),(0,n.j4)(u,{key:1,nextStep:a.nextStep},null,8,["nextStep"])):3==o.step?((0,n.wg)(),(0,n.j4)(c,{key:2,nextStep:a.nextStep},null,8,["nextStep"])):4==o.step?((0,n.wg)(),(0,n.j4)(p,{key:3,nextStep:a.nextStep},null,8,["nextStep"])):((0,n.wg)(),(0,n.j4)(d,{key:4}))])}var o=s(9470),a=s(61957),r=s(62588),i=s.n(r),u=s(80783),c=s.n(u),p={class:"tw-flex tw-items-center tw-flex-col tw-w-full"},d=(0,n._)("div",{class:"tw-text-center"},[(0,n._)("h1",{class:"tw-text-black tw-text-2xl tw-font-bold"},"Personal Information"),(0,n._)("p",{class:"tw-text-[#000000] tw-mt-2 tw-mb-5 tw-text-xl"},"Fill in your details")],-1),m={class:"tw-flex tw-flex-row tw-mt-20 tw-justify-between tw-w-full tw-gap-8"},f={class:"tw-flex tw-flex-row tw-justify-between tw-w-full tw-gap-8"},x={class:"tw-flex tw-flex-row tw-justify-between tw-w-full tw-gap-8"},g={class:"tw-flex tw-flex-row tw-justify-between tw-w-full tw-gap-8"},h={class:"tw-flex tw-flex-row tw-justify-between tw-w-full tw-gap-8"},b=(0,n.uE)('<div class="lg:tw-w-[474px] tw-h-[148px] tw-border tw-border-[#000000] tw-border-dashed tw-rounded-[10px] tw-mx-auto tw-mb-16"><label for="uploadFile" class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-full"><img src="'+i()+'" alt=""><p class="tw-text-[#000000] tw-text-base tw-font-bold">Click here to upload your SSCE certificate</p><input type="file" hidden name="file" accept=".pdf" id="uploadFile"></label></div><button type="submit" class="tw-max-w-[640px] tw-bg-[#000060] tw-h-[67px] tw-w-full tw-text-white tw-rounded-none tw-text-sm tw-capitalize"> Continue </button>',2),y=(0,n._)("div",{class:"tw-mt-5 tw-mb-10"},[(0,n._)("p",{class:"tw-text-[#8692A6] tw-text-base tw-flex tw-items-center"},[(0,n._)("img",{src:c(),alt:"",class:"tw-mr-2"}),(0,n._)("span",null,"Your Info is safely secured")])],-1);function v(t,e,s,l,w,o){var r=(0,n.up)("SelectInput");return(0,n.wg)(),(0,n.iD)("div",p,[(0,n._)("form",{onSubmit:e[4]||(e[4]=function(){return o.onSubmit&&o.onSubmit.apply(o,arguments)}),onReset:e[5]||(e[5]=function(){return l.onReset&&l.onReset.apply(l,arguments)}),class:"tw-mt-10 tw-w-fit tw-text-center"},[d,(0,n._)("div",m,[(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=function(e){return t.firstName=e}),name:"firstName",placeholder:"First name",class:"lg:tw-w-[472px] tw-py-6 tw-p-4 tw-border tw-border-[#000000] tw-mb-6 tw-text-sm tw-outline-none"},null,512),[[a.nr,t.firstName]]),(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.lastName=e}),name:"lastName",placeholder:"Last name",class:"lg:tw-w-[472px] tw-py-6 tw-p-4 tw-border tw-border-[#000000] tw-mb-6 tw-text-sm tw-outline-none"},null,512),[[a.nr,t.lastName]])]),(0,n._)("div",f,[(0,n.wy)((0,n._)("input",{type:"phone","onUpdate:modelValue":e[2]||(e[2]=function(e){return t.phone=e}),name:"phone",placeholder:"Phone Number (+2349034848075)",class:"lg:tw-w-[472px] tw-py-6 tw-p-4 tw-border tw-border-[#000000] tw-mb-6 tw-text-sm tw-outline-none"},null,512),[[a.nr,t.phone]]),(0,n.Wm)(r,{styles:"lg:tw-w-[472px] tw-w-1/2",getVal:o.getSelectValue,placeholder:"Gender",name:"gender",options:["Male","Female","Others"]},null,8,["getVal"])]),(0,n._)("div",x,[(0,n.Wm)(r,{styles:"lg:tw-w-[472px] tw-w-1/2",getVal:o.getSelectValue,placeholder:"Country of Residence",name:"country",options:[]},null,8,["getVal"]),(0,n.Wm)(r,{styles:"lg:tw-w-[472px] tw-w-1/2",getVal:o.getSelectValue,placeholder:"State of Residence",name:"state",options:[]},null,8,["getVal"])]),(0,n._)("div",g,[(0,n.Wm)(r,{styles:"lg:tw-w-[472px] tw-w-1/2",getVal:o.getSelectValue,placeholder:"Level of education",name:"educationLevel",options:[]},null,8,["getVal"]),(0,n.wy)((0,n._)("input",{type:"date","onUpdate:modelValue":e[3]||(e[3]=function(e){return t.dob=e}),name:"dob",class:"lg:tw-w-[472px] tw-py-6 tw-p-4 tw-border tw-border-[#000000] tw-mb-6 tw-text-sm tw-outline-none"},null,512),[[a.nr,t.dob]])]),(0,n._)("div",h,[(0,n.Wm)(r,{styles:"lg:tw-w-[472px] tw-w-1/2",getVal:o.getSelectValue,placeholder:"School  of Choice",name:"schoolChoice",options:[]},null,8,["getVal"]),(0,n.Wm)(r,{styles:"lg:tw-w-[472px] tw-w-1/2",getVal:o.getSelectValue,placeholder:"Course",name:"course",options:[]},null,8,["getVal"])]),b],32),y])}s(62590);var _=s(5245);const S={name:"register-form",props:{nextStep:{type:Function,required:!1}},data:function(){return{user:{firstName:"",lastName:"",phone:"",gender:"",country:"",state:"",educationLevel:"",schoolChoice:"",course:"",dob:"",file:""}}},methods:{getSelectValue:function(t){console.log(t)},setElementValue:function(t){this.user[t.target.name]=t.target.value,console.log(t.target.value)},onSubmit:function(t){t.preventDefault(),console.log(this.user)}},mounted:function(){},setup:function(t){var e=function(t){t.preventDefault(),console.log("reset")};return{onReset:e}},components:{SelectInput:_.Z}};var k=s(11639);const C=(0,k.Z)(S,[["render",v]]),V=C;var P={class:"tw-flex tw-items-center tw-flex-col tw-w-full"},R={class:"tw-text-xl tw-mt-6 tw-mb-24"},E=(0,n.Uk)("Already have an account? "),D=(0,n.Uk)("Sign in"),F=(0,n._)("button",{type:"submit",class:"tw-w-full tw-bg-[#000060] tw-h-[67px] tw-text-white tw-rounded-none tw-text-sm tw-capitalize"}," Continue ",-1),j=(0,n._)("div",{class:"tw-mt-5 tw-w-full"},[(0,n._)("p",{class:"tw-text-[#8692A6] tw-text-base tw-flex tw-w-fit tw-mx-auto"},[(0,n._)("img",{src:c(),alt:"",class:"tw-mr-2"}),(0,n._)("span",null,"Your Info is safely secured")])],-1);function N(t,e,s,l,w,o){var r=(0,n.up)("router-link"),i=(0,n.up)("q-form");return(0,n.wg)(),(0,n.iD)("div",P,[(0,n.Wm)(i,{onSubmit:l.onSubmit,onReset:l.onReset,class:"tw-mt-10 tw-text-center lg:lg:tw-w-[972px]"},{default:(0,n.w5)((function(){return[(0,n.wy)((0,n._)("input",{type:"email","onUpdate:modelValue":e[0]||(e[0]=function(e){return t.email=e}),name:"email",placeholder:"Enter your Email address",class:"tw-w-full tw-py-6 tw-p-4 tw-border tw-border-[#000000] tw-text-sm tw-outline-none"},null,512),[[a.nr,t.email]]),(0,n._)("p",R,[E,(0,n.Wm)(r,{to:"/login",class:"tw-text-[#4A7DFF] tw-font-bold"},{default:(0,n.w5)((function(){return[D]})),_:1})]),F,j]})),_:1},8,["onSubmit","onReset"])])}var Z=s(60499);const I={name:"email-input",props:{nextStep:{type:Function,required:!1}},setup:function(t){var e=(0,Z.iH)(""),s=function(){console.log(e.value),t.nextStep()},n=function(){e.value=""};return{firstName:e,onSubmit:s,onReset:n}}};var q=s(8326),A=s(69984),M=s.n(A);const U=(0,k.Z)(I,[["render",N]]),W=U;M()(I,"components",{QForm:q.Z});var Y={class:"tw-flex tw-items-center tw-flex-col tw-w-full"},z=(0,n._)("div",{class:"tw-mt-10 tw-text-center lg:lg:tw-w-[972px]"},[(0,n._)("h1",{class:"tw-text-black tw-text-2xl tw-font-bold"},"Confirm Email address"),(0,n._)("p",{class:"tw-max-w-[826px] tw-text-2xl tw-text-center"},"A Mail has been sent to your email address, check your inbox or spam folder to confirm that this email is yours")],-1),L=["onClick"],H=(0,n._)("div",{class:"tw-mt-5 tw-w-full"},[(0,n._)("p",{class:"tw-text-[#8692A6] tw-text-base tw-flex tw-w-fit tw-mx-auto"},[(0,n._)("img",{src:c(),alt:"",class:"tw-mr-2"}),(0,n._)("span",null,"Your Info is safely secured")])],-1);function Q(t,e,s,l,w,o){return(0,n.wg)(),(0,n.iD)("div",Y,[z,(0,n._)("button",{onClick:l.onSubmit,type:"submit",class:"lg:tw-w-[640px] tw-mt-32 tw-bg-[#000060] tw-h-[67px] tw-text-white tw-rounded-none tw-text-sm tw-capitalize"}," I've confirmed my email ",8,L),H])}const B={name:"confirm-email",props:{nextStep:{type:Function,required:!1}},setup:function(t){var e=function(){t.nextStep()};return{onSubmit:e}}},G=(0,k.Z)(B,[["render",Q]]),K=G;var O=s(86970),J=s(36231),T=s.n(J),X=s(65371),$=s.n(X),tt={class:"tw-flex tw-items-center tw-flex-col tw-w-full"},et=(0,n._)("div",{class:"tw-mt-10 tw-text-center"},[(0,n._)("h1",{class:"tw-text-black tw-text-2xl tw-font-bold"},"Create Password"),(0,n._)("p",{class:"tw-text-2xl tw-text-center"},"Input your Preferred password")],-1),st=["onSubmit"],nt={class:"tw-w-full tw-border tw-mt-20 tw-border-[#000000] tw-text-sm tw-flex tw-items-center pr-10"},lt=["type"],wt=["onclick"],ot=["onclick"],at={class:"tw-my-8"},rt={key:0,class:"tw-text-red-500 tw-font-bold tw-text-[14px]"},it={key:0,class:"tw-bg-green-500 tw-flex tw-items-center tw-justify-center tw-mr-2 tw-rounded-full tw-w-4 tw-h-4"},ut=(0,n._)("svg",{width:"6",height:"5",viewBox:"0 0 6 5",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,n._)("path",{d:"M1 2.64235L2.24622 4L5 1",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round"})],-1),ct=[ut],pt={key:1,class:"tw-w-3 tw-h-3 tw-rounded-full tw-bg-[#ccc] tw-inline-block tw-mr-2"},dt=(0,n._)("button",{type:"submit",class:"lg:tw-w-[640px] tw-mt-32 tw-bg-[#000060] tw-h-[67px] tw-text-white tw-rounded-none tw-text-sm tw-capitalize"}," I've confirmed my email ",-1),mt=(0,n._)("div",{class:"tw-mt-5 tw-w-full"},[(0,n._)("p",{class:"tw-text-[#8692A6] tw-text-base tw-flex tw-w-fit tw-mx-auto"},[(0,n._)("img",{src:c(),alt:"",class:"tw-mr-2"}),(0,n._)("span",null,"Your Info is safely secured")])],-1);function ft(t,e,s,l,w,o){return(0,n.wg)(),(0,n.iD)("div",tt,[et,(0,n._)("form",{onSubmit:o.onSubmit,class:"max-w-[972px] tw-w-fit",novalidate:""},[(0,n._)("div",nt,[(0,n.wy)((0,n._)("input",{type:w.isPasswordShown?"text":"password","onUpdate:modelValue":e[0]||(e[0]=function(t){return w.password=t}),name:"password",placeholder:"Enter your Enter Password",class:"tw-w-11/12 tw-h-full tw-py-6 tw-px-4 tw-outline-none"},null,8,lt),[[a.YZ,w.password]]),w.isPasswordShown?((0,n.wg)(),(0,n.iD)("img",{key:1,onclick:o.toggleShowPassword,src:$(),alt:"",class:"tw-ml-3 tw-max-w-[25px]"},null,8,ot)):((0,n.wg)(),(0,n.iD)("img",{key:0,onclick:o.toggleShowPassword,src:T(),alt:"",class:"tw-ml-3"},null,8,wt))]),(0,n._)("div",at,[(0,n.wy)((0,n._)("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=function(t){return w.password2=t}),name:"password2",placeholder:"Enter Password again",class:(0,O.C_)(["tw-w-full tw-py-6 tw-p-4 tw-border tw-border-[#000000] tw-text-sm tw-outline-none",{"tw-border-red-500":w.password2&&w.password!==w.password2}])},null,2),[[a.nr,w.password2]]),!w.doesPasswordsMatch&""!=w.password2?((0,n.wg)(),(0,n.iD)("p",rt,"Password does not match")):(0,n.kq)("",!0)]),(0,n._)("ul",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(w.passwordRules,(function(t,e){return(0,n.wg)(),(0,n.iD)("li",{key:e,class:"tw-flex"},[t.valid?((0,n.wg)(),(0,n.iD)("span",it,ct)):((0,n.wg)(),(0,n.iD)("span",pt)),(0,n._)("span",null,(0,O.zw)(t.text),1)])})),128))]),dt,mt],40,st)])}s(11476),s(32119);const xt={name:"create-password",props:{nextStep:{type:Function,required:!1}},data:function(){return{isPasswordShown:!1,doesPasswordsMatch:!0,passwordRules:[{id:1,text:"Minimum of 8 characters",valid:!1},{id:2,text:"Must contain one UPPERCASE character",valid:!1},{id:3,text:"Must contain a number",valid:!1}],password:"",password2:""}},watch:{password:function(t){this.handlePasswordChange(t)},password2:function(t){this.handleCheckEquality(this.password,t)}},methods:{onSubmit:function(t){t.preventDefault(),this.nextStep()},onReset:function(){this.password="",this.password2=""},toggleShowPassword:function(){this.isPasswordShown=!this.isPasswordShown},handlePasswordChange:function(t){var e=t.length>=8,s=this.passwordRules,n=/[A-Z]/.test(t),l=/\d/.test(t);s[0].valid=e,s[1].valid=n,s[2].valid=l,this.passwordRules=s,this.doPasswordsMatch=this.handleCheckEquality(this.password,this.password2)},handleCheckEquality:function(t,e){console.log(t,e),this.doesPasswordsMatch=t===e}},setup:function(t){}},gt=(0,k.Z)(xt,[["render",ft]]),ht=gt;var bt=s(8225),yt=s.n(bt),vt={class:"tw-font-manrope"},_t={class:"tw-flex tw-gap-2 tw-items-center tw-flex-col tw-w-full"},St=(0,n._)("div",{class:"tw-text-center"},[(0,n._)("h1",{class:"tw-text-black tw-text-2xl tw-font-bold"},"Sign up Completed"),(0,n._)("p",{class:"tw-text-[#606060] tw-mt-2 tw-text-xl"},"Your details have been successfully submitted."),(0,n._)("p",{class:"tw-text-[#606060] tw-mb-5 tw-text-xl"},"you can now sign in with your email address and password to continue.")],-1),kt=(0,n._)("div",{class:"tw-w-10/12 tw-mx-auto"},[(0,n._)("img",{src:yt(),alt:"",class:"tw-w-full tw-h-full"})],-1),Ct=(0,n._)("div",null,[(0,n._)("button",{type:"submit",class:"tw tw-bg-[#000060] tw-h-[67px] tw-w-full tw-text-white tw-rounded-none tw-text-sm tw-capitalize"}," Procced to login ")],-1),Vt=(0,n._)("div",null,[(0,n._)("p",{class:"tw-text-[#8692A6] tw-text-base tw-flex tw-items-center"},[(0,n._)("img",{src:c(),alt:"",class:"tw-mr-2"}),(0,n._)("span",null,"Your Info is safely secured")])],-1);function Pt(t,e,s,l,w,o){var a=(0,n.up)("q-form");return(0,n.wg)(),(0,n.iD)("div",vt,[(0,n._)("div",_t,[(0,n.Wm)(a,{onSubmit:t.onSubmit,onReset:t.onReset,class:"tw-w-fit tw-mt-10"},{default:(0,n.w5)((function(){return[St,kt,Ct]})),_:1},8,["onSubmit","onReset"]),Vt])])}const Rt={setup:function(){}},Et=(0,k.Z)(Rt,[["render",Pt]]),Dt=Et;M()(Rt,"components",{QForm:q.Z});const Ft={components:{Navbar:o.Z,RegisterForm:V,EnterEmail:W,ConfirmEmail:K,CreatePassword:ht,RegisterSuccess:Dt},data:function(){return{step:1}},methods:{nextStep:function(){this.step+=1},prevStep:function(){this.step-=1}},setup:function(){}},jt=(0,k.Z)(Ft,[["render",w]]),Nt=jt},8225:(t,e,s)=>{t.exports=s.p+"img/successful.00a3f7d3.gif"}}]);