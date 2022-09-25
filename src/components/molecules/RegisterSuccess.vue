<template>
    <div class="tw-font-manrope">
      <div class="tw-flex tw-gap-2 tw-items-center tw-flex-col tw-w-full">
        <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="tw-w-fit tw-mt-10"
      >
        <div class="tw-text-center">
          <h1 class="tw-text-black tw-text-2xl tw-font-bold">Sign up Completed</h1>
          <p class="tw-text-[#606060] tw-mt-2 tw-text-xl">Your details have been successfully submitted.</p>
          <p class="tw-text-[#606060] tw-mb-5 tw-text-xl">you can now sign in with your email address and password to continue.</p>
          </div>

        <!-- gif -->
        <div class="tw-w-10/12 tw-mx-auto">
          <img src="~assets/img/successful.gif" alt="" class="tw-w-full tw-h-full"/>
        </div>
        <div>
          <button type="submit" class="tw tw-bg-[#000060] tw-h-[67px] tw-w-full tw-text-white tw-rounded-none tw-text-sm tw-capitalize">
            Procced to login
          </button>
        </div>
      </q-form>
      <div>
        <p class="tw-text-[#8692A6] tw-text-base tw-flex tw-items-center">
          <img src="~assets/icons/lock.svg" alt="" class="tw-mr-2" />
          <span>Your Info is safely secured</span></p>
      </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    setup() {
    }
  }
  </script>
