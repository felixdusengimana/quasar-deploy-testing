import{Q as x}from"./QCircularProgress.43ad041a.js";import{Q as _}from"./QCardSection.36822cd1.js";import{Q as p}from"./QCard.b8760a51.js";import{D as f}from"./DashPageTitle.61aacdcd.js";import{_ as h,o as a,B as o,a as w,N as n,O as c,r as g,M as b,C as t,P as s,c as k,w as i}from"./index.e6697016.js";import"./use-size.00c2e8f0.js";import"./render.45809d99.js";import"./format.801e7424.js";import"./use-dark.ff2daf58.js";import"./caret-left.bac450c1.js";const y={data(){return{all_data:[{title:"First Semester Performance",records:[{month:"January",week:"Week 1",assignment_grade:"8/10",quiz_grade:"6/10",attendance:"80%"},{month:"January",week:"Week 1",assignment_grade:"8/10",quiz_grade:"6/10",attendance:"80%"}],performance:[{id:1,title:"Attendace perfomance",value:80},{id:2,title:"Assignment perfomance",value:20},{id:3,title:"Quiz perfomance",value:80}]},{title:"Second Semester Performance",records:[{month:"January",week:"Week 1",assignment_grade:"8/10",quiz_grade:"6/10",attendance:"80%"},{month:"January",week:"Week 1",assignment_grade:"8/10",quiz_grade:"6/10",attendance:"80%"}],performance:[{id:1,title:"Attendace perfomance",value:80},{id:2,title:"Assignment perfomance",value:20},{id:3,title:"Quiz perfomance",value:100}]}]}},setup(){},components:{DashPageTitle:f}},v={key:0,class:"tw-py-5"},F={class:"tw-flex tw-w-full tw-items-start tw-pb-4"},B={class:"tw-w-3/5"},P={class:"tw-text-black tw-text-2xl tw-font-bold tw-leading-[33px] tw-text-center"},z={class:"tw-mx-auto tw-my-9"},Q=t("thead",{class:"tw-bg-[#F2F2FF]"},[t("tr",null,[t("th",{class:"tw-text-left tw-text-black tw-text-sm tw-font-medium tw-py-6 tw-px-4"},"Month"),t("th",{class:"tw-text-left tw-text-black tw-text-sm tw-font-medium tw-py-6 tw-px-4"},"Week"),t("th",{class:"tw-text-left tw-text-black tw-text-sm tw-font-medium tw-py-6 tw-px-4"},"Assignment grade scored"),t("th",{class:"tw-text-left tw-text-black tw-text-sm tw-font-medium tw-py-6 tw-px-4"},"Quiz grade scored"),t("th",{class:"tw-text-left tw-text-black tw-text-sm tw-font-medium tw-py-6 tw-px-4"},"Attendance")])],-1),A={class:"tw-text-left tw-text-black tw-text-sm tw-font-medium tw-border-b tw-border-[#BFBFBF] tw-py-6 tw-px-4"},S={class:"tw-text-left tw-text-black tw-text-sm tw-font-medium tw-border-b tw-border-[#BFBFBF] tw-py-6 tw-px-4"},C={class:"tw-text-left tw-text-black tw-text-sm tw-font-medium tw-border-b tw-border-[#BFBFBF] tw-py-6 tw-px-4"},q={class:"tw-text-left tw-text-black tw-text-sm tw-font-medium tw-border-b tw-border-[#BFBFBF] tw-py-6 tw-px-4"},D={class:"tw-text-left tw-text-black tw-text-sm tw-font-medium tw-border-b tw-border-[#BFBFBF] tw-py-6 tw-px-4"},W={class:"tw-grow"},J={class:"tw-text-black tw-text-2xl tw-font-bold tw-leading-[33px] tw-text-center"},N={class:"tw-text-black"},T={class:"tw-flex tw-gap-3"},V={class:"tw-flex tw-items-center tw-gap-1"},$=t("div",{class:"tw-w-3 tw-h-3 tw-bg-primary-dark-color"},null,-1),M={class:"tw-text-xs"},j={class:"tw-flex tw-items-center tw-gap-1"},E=t("div",{class:"tw-w-3 tw-h-3 tw-bg-blue-800"},null,-1),L={class:"tw-text-xs"};function O(G,H,I,K,m,R){const u=g("DashPageTitle");return a(),o("div",null,[w(u,{title:"Aminu Abdulrasheed - Product design track"}),(a(!0),o(n,null,c(m.all_data,(l,d)=>(a(),o("div",{key:d},[d!==0?(a(),o("hr",v)):b("",!0),t("div",F,[t("div",B,[t("h1",P,s(l.title),1),t("table",z,[Q,t("tbody",null,[(a(!0),o(n,null,c(l.records,(e,r)=>(a(),o("tr",{key:r+"tr"},[t("td",A,s(e.month),1),t("td",S,s(e.week),1),t("td",C,s(e.assignment_grade),1),t("td",q,s(e.quiz_grade),1),t("td",D,s(e.attendance),1)]))),128))])])]),t("div",W,[(a(!0),o(n,null,c(l.performance,(e,r)=>(a(),k(p,{key:r,class:"tw-min-w-[334px] tw-rounded-lg bg-white tw-shadow-card tw-w-fit first:tw-mt-0 tw-mt-8"},{default:i(()=>[w(_,{class:"tw-flex items-center tw-flex-col justify-center"},{default:i(()=>[t("h1",J,s(e.title),1),w(x,{"show-value":"",class:"text-light-blue q-ma-md",value:e.value,size:"150px",color:"light-red","track-color":"grey-3"},{default:i(()=>[t("p",N,s(e.value)+"%",1)]),_:2},1032,["value"]),t("div",T,[t("div",V,[$,t("p",M,s(e.title.toString().split(" ")[0])+" total score",1)]),t("div",j,[E,t("p",L,s(e.title.toString().split(" ")[0])+" score earned",1)])])]),_:2},1024)]),_:2},1024))),128))])])]))),128))])}var rt=h(y,[["render",O]]);export{rt as default};