<template>
  <div class="tw-h-screen tw-font-manrope">
    <Navbar isWhite/>
    <div class="tw-flex tw-justify-around tw-h-[90%] tw-items-center tw-flex-col tw-w-full">
      <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="tw-w-[536.02px] tw-mt-10 tw-border-[0.84px] tw-border-black tw-rounded-lg tw-p-8 tw-shadow-form"
    >
      <div class="tw-flex tw-h-10 tw-items-center tw-justify-end">
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.9443 5.41406L5.90967 15.4487" stroke="#2C3E50" stroke-width="1.67244" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.90967 5.41406L15.9443 15.4487" stroke="#2C3E50" stroke-width="1.67244" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </div>
      <div class="tw-text-center">
        <h1 class="tw-text-black tw-text-xl tw-font-bold">Log in to Eduvacity</h1>
        <p class="tw-text-[#606060] tw-mt-2 tw-mb-5">Don't have account? <router-link to="/register" class="tw-text-[#4A7DFF]">Signup</router-link></p>
        </div>
        <input
        type="email"
        v-model="email"
        name="email"
        placeholder="Enter your email"
        class="tw-w-full tw-py-6 tw-p-4 tw-border tw-border-[#000000] tw-mb-6 tw-text-sm tw-outline-none"
      />
       
        <input
        type="password"
        v-model="password"
        name="password"
        placeholder="Enter your password"
        class="tw-w-full tw-py-6 tw-p-4 tw-border tw-border-[#000000] tw-mb-6 tw-text-sm tw-outline-none"/>
      <div>
        <label for="remember" class="tw-flex tw-flex-row tw-gap-1 tw-text-sm tw-mb-2">
          <input class="tw-h-[14.22px]" type="checkbox" name="remember" id="remember"/> 
          <p>Rember me</p>
        </label>
        <button type="submit" class="tw tw-bg-[#000060] tw-h-[67px] tw-w-full tw-text-white tw-rounded-none tw-text-sm tw-capitalize">
          Continue
        </button>
        <a href="" class="tw-text-[#1E136B] tw-text-sm tw-block tw-my-5 tw-text-center tw-underline tw-cursor-pointer">Forgot password?</a>

        <p class="m tw-max-w-[267.56px] tw-text-[#8F969D] tw-mx-auto tw-text-center tw-text-sm">
          by continuing you  agree to eduvacity <a href="" class="tw-text-[#4A7DFF]">Terms & Condition</a> and <a href="" class="tw-text-[#4A7DFF]">Privacy Policy</a>
        </p>
      </div>
    </q-form>
    <div>
      <p class="tw-text-[#8692A6] tw-text-base tw-flex tw-items-center">
        <img src="../../assets/icons/lock.svg" alt="" class="tw-mr-2" />
        <span>Your Info is safely secured</span></p>
    </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import Navbar from 'components/molecules/Navbar.vue';
export default {
  components: {
    Navbar
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
