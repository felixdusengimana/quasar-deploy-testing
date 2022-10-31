<template>
  <div class="tw-flex tw-items-center tw-flex-col tw-w-full">
  <div class="tw-mt-10 tw-text-center lg:lg:tw-w-[972px]">
    <h1 class="tw-text-black tw-text-2xl tw-font-bold">Confirm Email address</h1>
    <p class="tw-max-w-[826px] tw-text-2xl tw-text-center">A Mail has been sent to your email address, check your inbox or spam folder
to  confirm that this email is yours</p>
  </div>

    <button :onClick="onSubmit" type="submit" class="lg:tw-w-[640px] tw-mt-32 tw-bg-[#000060] tw-h-[67px] tw-text-white tw-rounded-none tw-text-sm tw-capitalize">
        I've confirmed my email
    </button>
    <div class="tw-mt-5 tw-w-full">
        <p class="tw-text-[#8692A6] tw-text-base tw-flex tw-w-fit tw-mx-auto">
        <img src="~assets/icons/lock.svg" alt="" class="tw-mr-2" />
        <span>Your Info is safely secured</span></p>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'confirm-email',
    props: {
      nextStep: {type: Function, required: false}
    },
    setup(props) {
      const onSubmit = () => {
        props.nextStep()
      }
      return {
        onSubmit
      }
    }
  }
</script>
