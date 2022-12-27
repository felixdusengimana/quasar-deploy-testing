import{Q as h}from"./QBtn.49a20b44.js";import{S as w,P as _}from"./Pagination.5779c4a6.js";import{D as f}from"./Dropdown.7ce691cf.js";import{s as r}from"./store.780c88a6.js";import{_ as v,o as i,B as d,C as t,a as s,N as y,O as k,P as o,r as c,J as D}from"./index.e6697016.js";import"./QIcon.df01dbef.js";import"./vm.78afe1d7.js";import"./use-size.00c2e8f0.js";import"./render.45809d99.js";import"./QSpinner.6629ab80.js";import"./dom.9bab46cf.js";import"./Icon.5e3349a0.js";import"./uid.c9fd912a.js";import"./use-dark.ff2daf58.js";import"./QSeparator.bc319032.js";import"./QItemSection.e7fa102b.js";import"./QBtnDropdown.e2f1fae9.js";import"./selection.ba2eb956.js";import"./use-model-toggle.f6d858ad.js";import"./ClosePopup.d7a7271c.js";import"./focus-manager.d6507951.js";import"./use-timeout.771fda10.js";import"./scroll.258629a5.js";const S={name:"StudentPage",data(){return{store:r,router:this.$route.params.id,filter_statuses:[{id:1,value:"Product Design School"},{id:2,value:"Management school"},{id:3,value:"Software engineering school"},{id:4,value:"Data school"}],filter_courses:[{id:1,value:"Product design"},{id:2,value:"UX writing"},{id:3,value:"UX auditing"},{id:4,value:"UX research"}],filters:{status:"all students",search:"",course:"frontend development"},students:{data:[{id:1,name:"John Doe",image:"https://cdn.quasar.dev/img/avatar.png",contact:"1234567890",email:"johndoe@gmail.com",country:"India",track:"frontend development",status:"active"},{id:2,name:"John Doe",image:"https://cdn.quasar.dev/img/avatar.png",contact:"1234567890",email:"another@gmail.com",country:"India",track:"frontend development",status:"Not admitted"},{id:2,name:"John Doe",image:"https://cdn.quasar.dev/img/avatar.png",contact:"1234567890",email:"another@gmail.com",country:"India",track:"frontend development",status:"Not admitted"},{id:2,name:"John Doe",image:"https://cdn.quasar.dev/img/avatar.png",contact:"1234567890",email:"another@gmail.com",country:"India",track:"frontend development",status:"Not admitted"},{id:2,name:"John Doe",image:"https://cdn.quasar.dev/img/avatar.png",contact:"1234567890",email:"another@gmail.com",country:"India",track:"frontend development",status:"Not admitted"},{id:2,name:"John Doe",image:"https://cdn.quasar.dev/img/avatar.png",contact:"1234567890",email:"another@gmail.com",country:"India",track:"frontend development",status:"Not admitted"},{id:2,name:"John Doe",image:"https://cdn.quasar.dev/img/avatar.png",contact:"1234567890",email:"another@gmail.com",country:"India",track:"frontend development",status:"Not admitted"},{id:2,name:"John Doe",image:"https://cdn.quasar.dev/img/avatar.png",contact:"1234567890",email:"another@gmail.com",country:"India",track:"frontend development",status:"Not admitted"},{id:2,name:"John Doe",image:"https://cdn.quasar.dev/img/avatar.png",contact:"1234567890",email:"another@gmail.com",country:"India",track:"frontend development",status:"Not admitted"},{id:2,name:"John Doe",image:"https://cdn.quasar.dev/img/avatar.png",contact:"1234567890",email:"another@gmail.com",country:"India",track:"frontend development",status:"Not admitted"}],page:2,per_page:10,total:100,total_pages:10,from:1,to:10},currentPage:1}},methods:{onStatusSelect(a){this.filters.status=a},onCoureSelect(a){this.filters.course=a},onPageChange(a){this.currentPage=a}},mounted(){r.setHeaderTitle(this.filter_statuses[0].value)},unmounted(){r.setHeaderTitle("")},components:{SearchInput:w,Dropdown:f,Pagination:_}},I={class:"container tw-px-7 tw-mt-7"},x={class:"tw-flex tw-justify-between"},F={class:"tw-table tw-w-full tw-mt-9"},b=t("thead",{class:"tw-bg-[#F2F2FF]"},[t("tr",{class:"tw-py-6"},[t("td",{class:"tw-py-6 tw-pl-6"},"Name"),t("td",null,"Contact"),t("td",null,"email"),t("td",null,"Country"),t("td",null,"Track"),t("td",null,"Status"),t("td")])],-1),C={class:"tw-pl-6 tw-py-2"},N={class:"tw-flex tw-gap-1 tw-items-center"},P=["src"],J={class:"tw-text-[#6B7280] tw-font-normal"},q={class:"tw-text-[#1F2937] tw-font-medium"},B={class:""},E={class:"tw-bg-[#F2F2FF]"},j={colspan:"4",class:"tw-py-3 tw-text-left tw-pl-6"},A={class:"tw-text-[#6B7280] tw-font-normal tw-text-sm"},H={colspan:"4",class:""},T={class:"tw-w-full tw-flex tw-justify-end tw-pr-2"};function U(a,X,L,Q,n,l){const m=c("Dropdown"),u=c("SearchInput"),p=c("Pagination");return i(),d("div",I,[t("div",x,[s(m,{dropdownlist:n.filter_statuses,onItemClick:l.onStatusSelect,pageHeader:!0},null,8,["dropdownlist","onItemClick"]),s(u,{placeholder:"Search school by any keyword"}),s(m,{dropdownlist:n.filter_courses,onItemClick:l.onCoureSelect,rounded:"sm",icon:"none",noAnimation:!0},null,8,["dropdownlist","onItemClick"])]),t("table",F,[b,t("tbody",null,[(i(!0),d(y,null,k(n.students.data,(e,g)=>(i(),d("tr",{key:g,class:"tw-border-b"},[t("td",C,[t("div",N,[t("img",{src:e.image,class:"tw-w-10 tw-h-10 tw-rounded-full"},null,8,P),t("p",J,o(e.id),1),t("p",q,o(e.name),1)])]),t("td",null,o(e.contact),1),t("td",null,o(e.email),1),t("td",null,o(e.country),1),t("td",null,o(e.track),1),t("td",null,[t("p",{class:D([(e==null?void 0:e.status.toLowerCase())==="not admitted"?"tw-bg-[#FEE2E2] tw-text-[#FF0000] tw-border-[#FF0000]":"tw-bg-[#C3FDD7] tw-text-[#00A600] tw-border-[#00A600]","tw-w-fit tw-px-1 tw-py-[6px] tw-rounded-sm tw-border"])},o(e.status),3)]),t("td",B,[s(h,{flat:"",round:"",dense:"",icon:"more_vert",color:"black"})])]))),128))]),t("tfoot",E,[t("tr",null,[t("td",j,[t("p",A,"Showing Results: "+o(n.students.from)+" - "+o(n.students.to)+" of "+o(n.students.total),1)]),t("td",H,[t("div",T,[s(p,{totalPage:12})])])])])])])}var ut=v(S,[["render",U]]);export{ut as default};