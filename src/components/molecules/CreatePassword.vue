<template>
    <div class="tw-flex tw-items-center tw-flex-col tw-w-full">
    <div class="tw-mt-10 tw-text-center">
      <h1 class="tw-text-black tw-text-2xl tw-font-bold">Create Password</h1>
      <p class="tw-text-2xl tw-text-center">Input your Preferred password</p>
    </div>
    <form
        onSubmit="onSubmit"
        class="max-w-[972px]  tw-w-fit"
        novalidate
      >

    <div class="tw-w-full tw-border tw-mt-20 tw-border-[#000000] tw-text-sm tw-flex tw-items-center pr-10">
        <input
          :type="isPasswordShown?'text':'password'"
          v-model="password"
          name="password"
          placeholder="Enter your Enter Password"
          class="tw-w-11/12 tw-h-full tw-py-6 tw-px-4 tw-outline-none"
    />
    <img :onclick="toggleShowPassword" v-if="!isPasswordShown" src="../../assets/icons/eye-off.svg" alt="" class="tw-ml-3">
    <img :onclick="toggleShowPassword" v-else src="../../assets/icons/eye-open.svg" alt="" class="tw-ml-3 tw-max-w-[25px]">
    </div>

    <div class="tw-my-8">
        <input
          type="password2"
          v-model="password2"
          name="password2"
          placeholder="Enter Password again"
          class="tw-w-full tw-py-6 tw-p-4 tw-border tw-border-[#000000] tw-text-sm tw-outline-none"
    />
    <p v-if="!doesPasswordsMatch & password2!=''" class="tw-text-red-500 tw-font-bold tw-text-[14px]">Password does not match</p>
    </div>
     
        <ul>
            <li v-for="(rule, index) in passwordRules" :key="index" class="tw-flex">
                    <span v-if="rule.valid" class="tw-bg-green-500 tw-flex tw-items-center tw-justify-center tw-mr-2 tw-rounded-full tw-w-4 tw-h-4">
                    <svg width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 2.64235L2.24622 4L5 1" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </span>
                    <span v-else class="tw-w-3 tw-h-3 tw-rounded-full tw-bg-[#ccc] tw-inline-block tw-mr-2"></span>
                    <span>{{rule.text}}</span>                
            </li>
        </ul>
        
      <button type="submit" class="lg:tw-w-[640px] tw-mt-32 tw-bg-[#000060] tw-h-[67px] tw-text-white tw-rounded-none tw-text-sm tw-capitalize">
          I've confirmed my email
      </button>
      <div class="tw-mt-5 tw-w-full">
          <p class="tw-text-[#8692A6] tw-text-base tw-flex tw-w-fit tw-mx-auto">
          <img src="../../assets/icons/lock.svg" alt="" class="tw-mr-2" />
          <span>Your Info is safely secured</span></p>  
      </div>
  </form>
    </div>
  </template>
  
  <script>
    export default{
      name: 'create-password',
      props: {
        nextStep: {type: Function, required: false}
      },
      data() {
        return {
          isPasswordShown: false,
          doesPasswordsMatch: true,
          passwordRules: [
            {id: 1, text: 'Minimum of 8 characters', valid: false},
            {id: 2, text: 'Must contain one UPPERCASE character', valid: false},
            {id: 3, text: 'Must contain a number', valid: false},
          ],
          password: '',
          password2: ''
        }
      },
      watch: {
        password: function (newValue){
            this.handlePasswordChange(newValue);
        },
        password2: function (newValue){
            this.handleCheckEquality(this.password, newValue);
        }
      },  
      methods: {
        onSubmit() {
          this.nextStep()
        },
        onReset() {
          this.password = ''
          this.password2 = ''
        },
        toggleShowPassword() {
          this.isPasswordShown = !this.isPasswordShown
        },
        handlePasswordChange(password){
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
        handleCheckEquality(pass1, pass2){
           console.log(pass1, pass2)
           this.doesPasswordsMatch =  (pass1 === pass2);
        }
      },
      setup(props) {
      }
    }
  </script>