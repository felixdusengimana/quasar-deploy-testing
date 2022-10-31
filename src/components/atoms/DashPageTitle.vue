<template>
  <div class="tw-w-full tw-h-full">
    <p class="tw-text-center tw-py-6 tw-bg-primary-bg-color tw-text-white tw-font-bold tw-text-xl tw-leading-[27px]">{{title}}</p>
    <button @click="goBack" class="tw-bg-[#000060] tw-mt-5 tw-ml-16 tw-flex tw-items-center tw-gap-1 tw-w-fit tw-text-white tw-font-regular tw-text-base tw-py-2 tw-px-8 tw-rounded-md">
         <img src="~assets/icons/caret-left.svg" alt="left"/>
         <span class="tw-block">Back</span>
      </button>
  </div>
</template>
<script>

export default{
  props: {
    title: {
      type: String,
      default: 'My Profile'
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  setup() {

  },
}
</script>

