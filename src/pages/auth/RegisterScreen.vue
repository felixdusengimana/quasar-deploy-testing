<template>
    <div class="tw-h-screen tw-font-manrope">
      <Navbar/>
      <div class="tw-flex tw-items-center tw-flex-col tw-w-full">
        <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="tw-mt-10 tw-w-fit tw-text-center"
      >
        <div class="tw-text-center">
          <h1 class="tw-text-black tw-text-2xl tw-font-bold">Personal Information</h1>
          <p class="tw-text-[#000000] tw-mt-2 tw-mb-5 tw-text-xl">Fill in your details</p>
          </div>
        
    <div class="tw-flex tw-flex-row tw-mt-20 tw-justify-between tw-w-full tw-gap-8">
        <input
          type="text"
          v-model="firstName"
          name="firstName"
          placeholder="First name"
          class="lg:tw-w-[472px] tw-py-6 tw-p-4 tw-border tw-border-[#000000] tw-mb-6 tw-text-sm tw-outline-none"
        />
        <input
          type="text"
          v-model="lastName"
          name="lastName"
          placeholder="Last name"
          class="lg:tw-w-[472px] tw-py-6 tw-p-4 tw-border tw-border-[#000000] tw-mb-6 tw-text-sm tw-outline-none"
        />
    </div>
         
    <div class="tw-flex tw-flex-row tw-justify-between tw-w-full tw-gap-8">
        <input
          type="phone"
          v-model="phone"
          name="phone"
          placeholder="Phone Number (+2349034848075)"
          class="lg:tw-w-[472px] tw-py-6 tw-p-4 tw-border tw-border-[#000000] tw-mb-6 tw-text-sm tw-outline-none"
        />
        <select
          v-model="gender"
          name="gender"
          placeholder="Gender"
          class="lg:tw-w-[472px] tw-py-6 tw-p-4 tw-border tw-border-[#000000] tw-mb-6 tw-text-sm tw-outline-none"
        >
        <option value="" selected="selected" disabled>Select gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="others">Others</option>
      </select>
    </div>

    <div class="tw-flex tw-flex-row tw-justify-between tw-w-full tw-gap-8">
        <select
          v-model="country"
          name="country"
          class="lg:tw-w-[472px] tw-py-6 tw-p-4 tw-border tw-border-[#000000] tw-mb-6 tw-text-sm tw-outline-none"
        >
      <option value="" disabled selected>Country of Residence</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        <option value="Nigeria">Nigeria</option>
        <option value="Rwanda">Rwanda</option>
    </select>
        <select
          v-model="state"
          name="state"
          class="lg:tw-w-[472px] tw-py-6 tw-p-4 tw-border tw-border-[#000000] tw-mb-6 tw-text-sm tw-outline-none"
        >
     <option value="" disabled selected>State of Residence</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        <option value="Nigeria">Nigeria</option>
        <option value="Rwanda">Rwanda</option>
    </select>
    </div>

    <div class="tw-flex tw-flex-row tw-justify-between tw-w-full tw-gap-8">
        <input
          type="text"
          v-model="educationLevel"
          name="educationLevel"
          placeholder="Level of education"
          class="lg:tw-w-[472px] tw-py-6 tw-p-4 tw-border tw-border-[#000000] tw-mb-6 tw-text-sm tw-outline-none"
        />
        <input
          type="date"
          v-model="dob"
          name="dob"
          class="lg:tw-w-[472px] tw-py-6 tw-p-4 tw-border tw-border-[#000000] tw-mb-6 tw-text-sm tw-outline-none"
        />
    </div>


    <div class="tw-flex tw-flex-row tw-justify-between tw-w-full tw-gap-8">
        <select
          v-model="school"
          name="school"
          class="lg:tw-w-[472px] tw-py-6 tw-p-4 tw-border tw-border-[#000000] tw-mb-6 tw-text-sm tw-outline-none"
        >
       <option value="" selected disabled>School  of Choice</option>
        <option value="MIT">MIT</option>
        <option value="Stanford">Stanford</option>
        <option value="Harvard">Harvard</option>
        <option value="Oxford">Oxford</option>
    </select>
        <select
          v-model="course"
          name="course"
          class="lg:tw-w-[472px] tw-py-6 tw-p-4 tw-border tw-border-[#000000] tw-mb-6 tw-text-sm tw-outline-none"
        >
      <option value="" selected disabled>Course</option>
        <option value="Computer Science">Computer Science</option>
        <option value="Engineering">Engineering</option>
        <option value="Medicine">Medicine</option>
        <option value="Law">Law</option>
    </select>
    </div>

    <div class="lg:tw-w-[474px] tw-h-[148px] tw-border tw-border-[#000000] tw-border-dashed tw-rounded-[10px] tw-mx-auto tw-mb-16">
        <label for="uploadFile" class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-full">
            <img src="../../assets/icons/file-upload.svg" alt=""/>
            <p class="tw-text-[#000000] tw-text-base tw-font-bold">Click here to upload your SSCE certificate</p>
         <input type="file" hidden name="file" accept=".pdf" id="uploadFile">
        </label>
        
    </div>
          <button type="submit" class="tw-max-w-[640px] tw-bg-[#000060] tw-h-[67px] tw-w-full tw-text-white tw-rounded-none tw-text-sm tw-capitalize">
            Continue
          </button>
      </q-form>
      <div class="tw-mt-5 tw-mb-10">
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
        // this.$router.push('/register-success')  

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
  