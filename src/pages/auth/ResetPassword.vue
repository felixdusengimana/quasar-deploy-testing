<template>
  <div class="tw-min-h-screen tw-font-manrope tw-flex tw-flex-col justify-between">
  <Navbar isWhite/>
  <form
      :onSubmit="onSubmit"
      class="lg:tw-w-[55vh]  tw-mt-10 tw-border-[0.84px] tw-mx-auto tw-border-black tw-rounded-lg tw-p-8 tw-shadow-form"
      novalidate
    >
    <div class="tw-text-center">
    <h1  class="tw-text-black tw-text-xl tw-font-bold">Create Password</h1>
    <p class="tw-text-[#606060] tw-mt-2 tw-mb-5">Input your Preferred password</p>
  </div>

  <div class="tw-w-full tw-border tw-border-[#000000] tw-text-sm tw-flex tw-items-center pr-10">
      <input
        :type="isPasswordShown?'text':'password'"
        v-model="password"
        name="password"
        placeholder="Enter your Enter Password"
        class="tw-w-11/12 tw-h-full tw-py-6 tw-px-4 tw-outline-none"
  />
  <img :onclick="toggleShowPassword" v-if="!isPasswordShown" src="~assets/icons/eye-off.svg" alt="" class="tw-mr-3">
  <img :onclick="toggleShowPassword" v-else src="~assets/icons/eye-open.svg" alt="" class="tw-mr-3 tw-max-w-[25px]">
  </div>

  <div class="tw-my-4">
      <input
        type="password"
        v-model="password2"
        name="password2"
        placeholder="Enter Password again"
        class="tw-w-full tw-py-6 tw-p-4 tw-border tw-border-[#000000] tw-text-sm tw-outline-none"
        :class="{'tw-border-red-500': password2 && password !== password2}"
  />
  <p v-if="!doesPasswordsMatch & password2!=''" class="tw-text-red-500 tw-font-bold tw-text-[14px]">Password does not match</p>
  </div>
    <button type="submit" class="tw-w-full tw-bg-[#000060] tw-h-[67px] tw-text-white tw-rounded-none tw-text-sm tw-capitalize">
        Continue
    </button>

    <p class="tw-max-w-[267.56px]  tw-mt-6 tw-text-[#8F969D] tw-mx-auto tw-text-center tw-text-sm">
          by continuing you  agree to eduvacity <a href="" class="tw-text-[#4A7DFF]">Terms & Condition</a> and <a href="" class="tw-text-[#4A7DFF]">Privacy Policy</a>
        </p>
</form>

<p class="tw-text-[#8692A6] tw-text-base tw-flex tw-items-center tw-my-5 tw-w-fit tw-mx-auto lg:tw-pb-10">
        <img src="~assets/icons/lock.svg" alt="" class="tw-mr-2" />
        <span>Your Info is safely secured</span>
</p>

  </div>
</template>

<script>
import Navbar from 'src/components/molecules/Navbar.vue';
  export default{
    name: "create-password",
    props: {
        nextStep: { type: Function, required: false }
    },
    data() {
        return {
            isPasswordShown: false,
            doesPasswordsMatch: true,
            passwordRules: [
                { id: 1, text: "Minimum of 8 characters", valid: false },
                { id: 2, text: "Must contain one UPPERCASE character", valid: false },
                { id: 3, text: "Must contain a number", valid: false },
            ],
            password: "",
            password2: ""
        };
    },
    watch: {
        password: function (newValue) {
            this.handlePasswordChange(newValue);
        },
        password2: function (newValue) {
            this.handleCheckEquality(this.password, newValue);
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault();
        },
        onReset() {
            this.password = "";
            this.password2 = "";
        },
        toggleShowPassword() {
            this.isPasswordShown = !this.isPasswordShown;
        },
        handlePasswordChange(password) {
            const hasMinLength = password.length >= 8;
            const passwordRules = this.passwordRules;
            const hasUpperCase = /[A-Z]/.test(password);
            const hasNumber = /\d/.test(password);
            passwordRules[0].valid = hasMinLength;
            passwordRules[1].valid = hasUpperCase;
            passwordRules[2].valid = hasNumber;
            this.passwordRules = passwordRules;
            this.doPasswordsMatch = this.handleCheckEquality(this.password, this.password2);
        },
        handleCheckEquality(pass1, pass2) {
            console.log(pass1, pass2);
            this.doesPasswordsMatch = (pass1 === pass2);
        }
    },
    setup(props) {
    },
    components: { Navbar }
}
</script>
