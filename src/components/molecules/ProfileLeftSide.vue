<template>
    <div class="tw-w-[133px] tw-h-[133px] tw-rounded-full tw-bg-gray-200">
      <img src="../../assets/img/profile.png" class="tw-w-full tw-h-full tw-object-contain"/>
    </div>
    <div class="tw-mt-2 tw-flex tw-flex-col tw-items-center">
      <h1 class="tw-leading-[22px] tw-font-bold tw-text-base">{{fullname}}</h1>
      <p class="tw-leading-[16px]">{{title}}</p>
      <div class="tw-flex tw-gap-12 tw-mt-6">
         <div class="tw-bg-[#F0F0F0] tw-rounded-full tw-w-9 tw-h-9 tw-grid tw-place-items-center">
          <a :href="'tel:'+phone"><img src="../../assets/icons/phone.svg"/></a>
         </div>
         <div class="tw-bg-[#F0F0F0] tw-rounded-full tw-w-9 tw-h-9 tw-grid tw-place-items-center">
           <a :href="'mailto:'+email"><img src="../../assets/icons/mail.svg"/></a>
         </div>
      </div>

      <div class="tw-flex tw-gap-16 tw-text-center tw-my-5">
        <div>
          <h1 class="tw-leading-[22px] tw-font-bold tw-text-base">School applied</h1>
          <p>{{schoolcourse}}</p>
        </div>
        <div>
          <h1 class="tw-leading-[22px] tw-font-bold tw-text-base">Course applied</h1>
          <p>{{coursename}}</p>
        </div>
      </div>
      <button v-if="type=='profile'" class="tw-outline-2 tw-outline tw-outline-green-700 tw-bg-green-200 tw-text-green-700 tw-px-2 tw-py-[6px] tw-rounded-md tw-font-bold">Admitted</button>
      <div class="tw-flex tw-gap-12" v-if="type=='application'">
        <button class="tw-outline-2 tw-outline tw-outline-green-700 tw-bg-green-200 tw-text-green-700 tw-px-2 tw-py-[6px] tw-rounded-md tw-font-bold">Admit</button>
        <button class="tw-outline-2 tw-outline tw-outline-red-700 tw-bg-red-200 tw-text-red-700 tw-px-2 tw-py-[6px] tw-rounded-md tw-font-bold">Reject</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ProfileLeftSide',
  props:{
    fullname: {
      type: String,
      default: 'John Doe'
    },
    title: {
      type: String,
      default: 'Student'
    },
    schoolcourse: {
      type: String,
      default: 'Course'
    },
    coursename: {
      type: String,
      default: 'Course'
    },
    type:{
      type: String,
      default: 'profile'
    },
    email:{
      type: String,
    },
    phone:{
      type: String,
    }
  }
};
</script>
