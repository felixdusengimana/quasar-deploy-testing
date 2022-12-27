import{Q as f}from"./QBtn.49a20b44.js";import{S as v,P as y}from"./Pagination.5779c4a6.js";import{D as k}from"./Dropdown.7ce691cf.js";import{s as l}from"./store.780c88a6.js";import{_ as D,o as m,B as p,C as t,a as n,N as x,O as I,P as o,r as c,w as i,D as d}from"./index.e6697016.js";import"./QIcon.df01dbef.js";import"./vm.78afe1d7.js";import"./use-size.00c2e8f0.js";import"./render.45809d99.js";import"./QSpinner.6629ab80.js";import"./dom.9bab46cf.js";import"./Icon.5e3349a0.js";import"./uid.c9fd912a.js";import"./use-dark.ff2daf58.js";import"./QSeparator.bc319032.js";import"./QItemSection.e7fa102b.js";import"./QBtnDropdown.e2f1fae9.js";import"./selection.ba2eb956.js";import"./use-model-toggle.f6d858ad.js";import"./ClosePopup.d7a7271c.js";import"./focus-manager.d6507951.js";import"./use-timeout.771fda10.js";import"./scroll.258629a5.js";const P={name:"StudentPage",data(){return{store:l,router:this.$route.params.id,filter_courses:[{id:1,value:"Product design school"},{id:2,value:"Management school"},{id:3,value:"Software engineering school"},{id:4,value:"Data school"}],filters:{status:"all students",search:"",course:"frontend development"},students:{data:[{id:1,name:"John Doe",image:"https://cdn.quasar.dev/img/avatar.png",contact:"1234567890",email:"johndoe@gmail.com",country:"India",track:"frontend development",date:"01/10/2022"},{id:2,name:"John Doe",image:"https://cdn.quasar.dev/img/avatar.png",contact:"1234567890",email:"another@gmail.com",country:"India",track:"frontend development",date:"01/10/2022"},{id:2,name:"John Doe",image:"https://cdn.quasar.dev/img/avatar.png",contact:"1234567890",email:"another@gmail.com",country:"India",track:"frontend development",date:"01/10/2022"},{id:2,name:"John Doe",image:"https://cdn.quasar.dev/img/avatar.png",contact:"1234567890",email:"another@gmail.com",country:"India",track:"frontend development",date:"01/10/2022"},{id:2,name:"John Doe",image:"https://cdn.quasar.dev/img/avatar.png",contact:"1234567890",email:"another@gmail.com",country:"India",track:"frontend development",date:"01/10/2022"},{id:2,name:"John Doe",image:"https://cdn.quasar.dev/img/avatar.png",contact:"1234567890",email:"another@gmail.com",country:"India",track:"frontend development",date:"01/10/2022"},{id:2,name:"John Doe",image:"https://cdn.quasar.dev/img/avatar.png",contact:"1234567890",email:"another@gmail.com",country:"India",track:"frontend development",date:"01/10/2022"},{id:2,name:"John Doe",image:"https://cdn.quasar.dev/img/avatar.png",contact:"1234567890",email:"another@gmail.com",country:"India",track:"frontend development",date:"01/10/2022"},{id:2,name:"John Doe",image:"https://cdn.quasar.dev/img/avatar.png",contact:"1234567890",email:"another@gmail.com",country:"India",track:"frontend development",date:"01/10/2022"},{id:2,name:"John Doe",image:"https://cdn.quasar.dev/img/avatar.png",contact:"1234567890",email:"another@gmail.com",country:"India",track:"frontend development",date:"01/10/2022"}],page:2,per_page:10,total:100,total_pages:10,from:1,to:10},currentPage:1}},methods:{ondateSelect(a){this.filters.date=a},onCoureSelect(a){this.filters.course=a},onPageChange(a){this.currentPage=a}},mounted(){l.setHeaderTitle("Applications")},unmounted(){l.setHeaderTitle("")},components:{SearchInput:v,Dropdown:k,Pagination:y}},S={class:"container tw-px-7 tw-mt-7"},b={class:"tw-flex tw-justify-between"},q={class:"tw-table tw-w-full tw-mt-9"},C=t("thead",{class:"tw-bg-[#F2F2FF]"},[t("tr",{class:"tw-py-6"},[t("td",{class:"tw-py-6 tw-pl-6"},"Name"),t("td",null,"Contact"),t("td",null,"email"),t("td",null,"Country"),t("td",null,"Track"),t("td",null,"Date"),t("td")])],-1),F={class:"tw-pl-6 tw-py-2"},J={class:"tw-flex tw-gap-1 tw-items-center"},B=["src"],N={class:"tw-text-[#6B7280] tw-font-normal"},T={class:"tw-text-[#1F2937] tw-font-medium"},j={class:"tw-w-fit tw-px-1 tw-py-[6px]"},A={class:""},V={class:"tw-bg-[#F2F2FF]"},H={colspan:"4",class:"tw-py-3 tw-text-left tw-pl-6"},Q={class:"tw-text-[#6B7280] tw-font-normal tw-text-sm"},E={colspan:"4",class:""},L={class:"tw-w-full tw-flex tw-justify-end tw-pr-2"};function M(a,O,R,z,r,u){const h=c("SearchInput"),g=c("Dropdown"),s=c("router-link"),_=c("Pagination");return m(),p("div",S,[t("div",b,[n(h,{placeholder:"Search application by any keyword"}),n(g,{dropdownlist:r.filter_courses,onItemClick:u.onCoureSelect,rounded:"sm",icon:"none",noAnimation:!0},null,8,["dropdownlist","onItemClick"])]),t("table",q,[C,t("tbody",null,[(m(!0),p(x,null,I(r.students.data,(e,w)=>(m(),p("tr",{key:w,class:"tw-border-b"},[t("td",F,[n(s,{to:"/application/"+e.id},{default:i(()=>[t("div",J,[t("img",{src:e.image,class:"tw-w-10 tw-h-10 tw-rounded-full"},null,8,B),t("p",N,o(e.id),1),t("p",T,o(e.name),1)])]),_:2},1032,["to"])]),t("td",null,[n(s,{to:"/application/"+e.id},{default:i(()=>[d(o(e.contact),1)]),_:2},1032,["to"])]),t("td",null,[n(s,{to:"/application/"+e.id},{default:i(()=>[d(o(e.email),1)]),_:2},1032,["to"])]),t("td",null,[n(s,{to:"/application/"+e.id},{default:i(()=>[d(o(e.country),1)]),_:2},1032,["to"])]),t("td",null,[n(s,{to:"/application/"+e.id},{default:i(()=>[d(o(e.track),1)]),_:2},1032,["to"])]),t("td",null,[t("p",j,o(e.date),1)]),t("td",A,[n(f,{flat:"",round:"",dense:"",icon:"more_vert",color:"black"})])]))),128))]),t("tfoot",V,[t("tr",null,[t("td",H,[t("p",Q,"Showing Results: "+o(r.students.from)+" - "+o(r.students.to)+" of "+o(r.students.total),1)]),t("td",E,[t("div",L,[n(_,{totalPage:12})])])])])])])}var gt=D(P,[["render",M]]);export{gt as default};