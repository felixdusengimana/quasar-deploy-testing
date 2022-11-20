<template>
  <div class="tw-min-h-screen tw-font-manrope tw-flex tw-flex-col">
    <Navbar isWhite/>
    <div class="tw-w-fit tw-mx-auto">
      <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="lg:tw-w-[55vh]  tw-mt-10 tw-border-[0.84px] tw-border-black tw-rounded-lg tw-p-8 tw-shadow-form"
    >
      <div class="tw-text-center">
        <h1 class="tw-text-black tw-text-xl tw-font-bold">Log in to Eduvacity</h1>
        <p class="tw-text-[#606060] tw-mt-2 tw-mb-5">Don't have account? <router-link to="/register" class="tw-text-[#4A7DFF]">Signup</router-link></p>
        </div>
        <input
        type="email"
        v-model="email"
        name="email"
        placeholder="Enter your email"
        class="md:tw-w-full lg:tw-w-full tw-w-11/12 tw-py-6 tw-p-4 tw-border tw-border-[#000000] tw-mb-6 tw-text-sm tw-outline-none"
      />

        <input
        type="password"
        v-model="password"
        name="password"
        placeholder="Enter your password"
        class="md:tw-w-full lg:tw-w-full tw-w-11/12 tw-py-6 tw-p-4 tw-border tw-border-[#000000] tw-mb-6 tw-text-sm tw-outline-none"/>
      <div>
        <label for="remember" class="tw-flex tw-flex-row tw-gap-1 tw-text-sm tw-mb-2">
          <input class="tw-h-[14.22px]" type="checkbox" name="remember" id="remember"/>
          <p>Rember me</p>
        </label>
        <button :onclick="()=>{$router.push({ path: '/dashboard', replace: true })}" type="button" class="md:tw-w-full lg:tw-w-full tw-w-11/12 tw-bg-[#000060] tw-h-[67px] tw-text-white tw-rounded-none tw-text-sm tw-capitalize">
          Continue
        </button>
        <router-link to="/forgot-password" class="tw-text-[#1E136B] tw-text-sm tw-block tw-my-5 tw-text-center tw-underline tw-cursor-pointer">Forgot password?</router-link>

        <p class="tw-max-w-[267.56px]  tw-text-[#8F969D] tw-mx-auto tw-text-center tw-text-sm">
          by continuing you  agree to eduvacity <a href="" class="tw-text-[#4A7DFF]">Terms & Condition</a> and <a href="" class="tw-text-[#4A7DFF]">Privacy Policy</a>
        </p>
      </div>
    </q-form>
      <p class="tw-text-[#8692A6] tw-text-base tw-flex tw-items-center tw-my-5 tw-w-fit tw-mx-auto">
        <InfoSafelyStored/>
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import Navbar from 'components/molecules/Navbar.vue';
import InfoSafelyStored from 'src/components/atoms/InfoSafelyStored.vue';
export default {
  components: {
    Navbar,
    InfoSafelyStored
},
  setup() {
    const email = ref('')
    const password = ref('')

    const onSubmit = (evt) => {
      evt.preventDefault()
      console.log('submit', email.value, password.value)
    }

    const onReset = (evt) => {
      evt.preventDefault()
      console.log('reset')
    }

    return {
      email,
      password,
      onSubmit,
      onReset
    }
  }
}
</script>
