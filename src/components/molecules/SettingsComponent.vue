<template>
  <div class="tw-w-full">
    <p class="tw-text-center tw-py-6 tw-bg-primary-bg-color tw-text-white tw-font-bold tw-text-xl tw-leading-[27px]">My Profile</p>
    <button class="tw-bg-[#000060] tw-mt-5 tw-ml-16 tw-flex tw-items-center tw-gap-1 tw-w-fit tw-text-white tw-font-regular tw-text-base tw-py-2 tw-px-8 tw-rounded-md">
         <img src="~assets/icons/caret-left.svg" alt="left"/>
         <span class="tw-block">Back</span>
      </button>
  </div>
  <div class="tw-px-16 tw-mt-12 tw-pb-10">
     <div class="tw-flex tw-items-center tw-gap-4">
      <div class="tw-relative tw-w-fit">
       <img src="~assets/icons/default-user-icon.svg" alt="user" class="md:tw-w-40 md:tw-h-40 tw-w-20 tw-h-20"/>
       <div
       :onclick="openModel"
       class="tw-w-9 tw-h-9 tw-rounded-full tw-bg-[#2020FF] tw-grid tw-place-items-center tw-absolute tw-top-0 tw-right-0">
        <img src="~assets/icons/edit-pen.svg"/>
       </div>
     </div>
      <div>
        <h1 class="tw-font-bold tw-text-base tw-leading-[22px]">Aminu Abdulrasheed</h1>
        <p class="tw-text-sm">Project manager</p>
      </div>
     </div>

  <section class="tw-container tw-mt-16">
     <div class="tw-flex tw-items-center tw-gap-2">
      <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.3 6.925L12.05 2.725L13.45 1.325C13.8333 0.941667 14.3043 0.75 14.863 0.75C15.421 0.75 15.8917 0.941667 16.275 1.325L17.675 2.725C18.0583 3.10833 18.2583 3.571 18.275 4.113C18.2917 4.65433 18.1083 5.11667 17.725 5.5L16.3 6.925ZM14.85 8.4L4.25 19H0V14.75L10.6 4.15L14.85 8.4Z" fill="#00009F"/>
      </svg>
      <h1 class="tw-font-bold tw-text-sm tw-leading-[19px]">Edit information</h1>
     </div>

     <div class="tw-flex tw-justify-between tw-max-w-[859px] tw-mt-8">
      <div>
        <p class="tw-text-[#9F9F9F] tw-text-sm tw-font-normal tw-leading-[19px]">First Name: <span class="tw-text-black tw-ml-2">Aminu</span></p>
      <p class="tw-text-[#9F9F9F] tw-text-sm tw-font-normal tw-leading-[19px]">Last Name: <span class="tw-text-black tw-ml-2">Abdulrasheed</span></p>
      <p class="tw-text-[#9F9F9F] tw-text-sm tw-font-normal tw-leading-[19px]">Position: <span class="tw-text-black tw-ml-2">Project manager</span></p>
      </div>
      <div>
        <p class="tw-text-[#9F9F9F] tw-text-sm tw-font-normal tw-leading-[19px]">Email: <span class="tw-text-black tw-ml-2">Aminu@gmail.com</span></p>
        <p class="tw-text-[#9F9F9F] tw-text-sm tw-font-normal tw-leading-[19px]">Phone: <span class="tw-text-black tw-ml-2">09034848075</span></p>
        <p class="tw-text-[#9F9F9F] tw-text-sm tw-font-normal tw-leading-[19px]">Gender: <span class="tw-text-black tw-ml-2">Male</span></p>
      </div>
      <div>
        <p>Password <button class="tw-font-bold tw-text-[#0000DF] tw-ml-4" :onclick="openChangePasswordModel">Change</button></p>
      </div>
     </div>
  </section>

  <div class="tw-container tw-mt-16">
    <h1 class="tw-font-bold tw-text-sm tw-leading-[19px]">Access Information</h1>
    <p class="tw-text-[#9F9F9F] tw-text-sm tw-font-normal tw-leading-[19px] tw-mt-1">You only have access to the following actions in this dashboard</p>
    <ul class="tw-list-disc tw-text-[#0000DF] tw-text-sm tw-font-normal tw-mt-7 tw-ml-4">
      <li>Dashoard overview</li>
      <li>School</li>
      <li>Application</li>
      <li>User management</li>
    </ul>
  </div>
</div>
</template>
<script>
export default{
  name: "SettingsComponent",
  props: {
    openModel: {
      type: Function,
      required: true,
    },
    openChangePasswordModel:{
      type: Function,
      required: true,
    }
  },
}
</script>

