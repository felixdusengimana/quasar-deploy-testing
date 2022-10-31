<template>
    <div class="tw-min-h-screen tw-font-manrope tw-flex tw-flex-col justify-between">
      <Navbar isWhite/>
     <form
      :onsubmit="forgetPassword"
      accept-charset="UTF-8"
      role="form"
      class="lg:tw-w-[55vh]  tw-mt-10 tw-border-[0.84px] tw-mx-auto tw-border-black tw-rounded-lg tw-p-8 tw-shadow-form">
        <div class="tw-text-center">
        <h1 class="tw-text-black tw-text-xl tw-font-bold">Log in to Eduvacity</h1>
        <p class="tw-text-[#606060] tw-mt-2 tw-mb-5">Enter your email address registered with Eduvacity </p>
        </div>

        <input
        type="email"
        v-model="email"
        name="email"
        placeholder="Enter your email"
        class="md:tw-w-full lg:tw-w-full tw-w-11/12 tw-py-6 tw-p-4 tw-border tw-border-[#000000] tw-mb-6 tw-text-sm tw-outline-none"
      />

      <button :onclick="()=>{$router.push({ path: '/enter-otp?'+email, replace: true })}" type="submit" class="md:tw-w-full lg:tw-w-full tw-w-11/12 tw-bg-[#000060] tw-h-[67px] tw-text-white tw-rounded-none tw-text-sm tw-capitalize">
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
    name: "ForgetPassword",
    data() {
        return {
            email: "",
            password: "",
            password_confirmation: "",
            errors: [],
        };
    },
    methods: {
        forgetPassword() {
            e.preventDefault();
            alert();
            axios
                .post("/api/auth/forget-password", {
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation,
            })
                .then((response) => {
                console.log(response);
            })
                .catch((error) => {
                this.errors = error.response.data.errors;
            });
        },
    },
    components: { Navbar }
};
</script>
