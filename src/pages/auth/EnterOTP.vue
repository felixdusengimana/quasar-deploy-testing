<template>
    <div class="tw-min-h-screen tw-font-manrope tw-flex tw-flex-col justify-between">
      <Navbar isWhite/>
     <q-form
      @submit="onSubmit"
      class="lg:tw-w-[55vh] tw-mt-10 tw-border-[0.84px] tw-mx-auto tw-border-black tw-rounded-lg tw-p-8 tw-shadow-form">
        <div class="tw-text-center tw-mb-5">
        <h1 class="tw-text-black tw-text-xl tw-font-bold">Log in to Eduvacity</h1>
        <p class="tw-text-[#606060] tw-mt-2">We've sent a 6-digit verification code to the email address</p>
        <a :href="'mailto:phelixdusengimana@gmail.com'" class="tw-text-[#9F9FFF] tw-cursor-pointer tw-mt-2 tw-text-sm tw-font-medium">a*****u@gmail.com</a>
        </div>

        <label for="otp" class="tw-text-center tw-block tw-text-[#808080] tw-text-sm tw-font-medium tw-mb-2">Enter verification code</label>

        <div class="tw-flex items-center justify-around tw-w-full">
          <input
            type="number"
            min="0"
            max="9"
            v-for="(i, index) in 6"
            :tabindex="1"
            :key="i"
            v-model="otp[index]"
            :name="'otp'+index"
            id="otp"
            class="md:tw-w-full lg:tw-w-full tw-w-full tw-max-w-[50.11px] tw-h-[50.11px] tw-text-center tw-border-2 tw-rounded-md tw-border-[##BFBFBF] tw-mb-6 tw-text-sm tw-outline-none"
      />
        </div>

      <button type="submit" class="md:tw-w-full lg:tw-w-full tw-w-11/12 tw-bg-[#000060] tw-h-[67px] tw-text-white tw-rounded-none tw-text-sm tw-capitalize">
          Continue
      </button>

        <p class="tw-max-w-[267.56px]  tw-mt-6 tw-text-[#8F969D] tw-mx-auto tw-text-center tw-text-sm">
          by continuing you  agree to eduvacity <a href="" class="tw-text-[#4A7DFF]">Terms & Condition</a> and <a href="" class="tw-text-[#4A7DFF]">Privacy Policy</a>
        </p>
      </q-form>

      <p class="tw-text-[#8692A6] tw-text-base tw-flex tw-items-center tw-my-5 tw-w-fit tw-mx-auto lg:tw-pb-10">
        <img src="~assets/icons/lock.svg" alt="" class="tw-mr-2" />
        <span>Your Info is safely secured</span>
      </p>
  </div>
</template>

<script>
  export default {
    name: "EnterOTP",
    data() {
      return {
        otp: [null, null, null, null, null, null],
        errors: [],
      };
    },
    methods: {
      enterOTP() {
        axios
          .post("/api/auth/enter-otp", {
            otp: this.otp,
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
      },
      onSubmit(e) {
        e.preventDefault();
        console.log(this.otp);
      },
    },
  }
</script>
