<template>
      <div class="tw-flex tw-items-center tw-flex-col tw-w-full">
        <form
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
        THis isis: {{firstName}}
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
        <SelectInput :getVal="getSelectValue" placeholder="Gender" name="gender" :options="['Male', 'Female', 'Others']"/>
    </div>

    <div class="tw-flex tw-flex-row tw-justify-between tw-w-full tw-gap-8">
      <SelectInput :getVal="getSelectValue" placeholder="Country of Residence" name="country" :options="[]"/>
      <SelectInput :getVal="getSelectValue" placeholder="State of Residence" name="state" :options="[]"/>
    </div>

    <div class="tw-flex tw-flex-row tw-justify-between tw-w-full tw-gap-8">
      <SelectInput :getVal="getSelectValue" placeholder="Level of education" name="educationLevel" :options="[]"/>

        <input
          type="date"
          v-model="dob"
          name="dob"
          class="lg:tw-w-[472px] tw-py-6 tw-p-4 tw-border tw-border-[#000000] tw-mb-6 tw-text-sm tw-outline-none"
        />
    </div>


    <div class="tw-flex tw-flex-row tw-justify-between tw-w-full tw-gap-8">
      <SelectInput :getVal="getSelectValue" placeholder="School  of Choice" name="schoolChoice" :options="[]"/>
      <SelectInput :getVal="getSelectValue" placeholder="Course" name="course" :options="[]"/>
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
      </form>
      <div class="tw-mt-5 tw-mb-10">
        <p class="tw-text-[#8692A6] tw-text-base tw-flex tw-items-center">
          <img src="../../assets/icons/lock.svg" alt="" class="tw-mr-2" />
          <span>Your Info is safely secured</span></p>
      </div>
      </div>
</template>

<script>
   import { ref } from 'vue'
    import SelectInput from './SelectInput.vue'
    // import countries from '../../assets/country.json'
  export default {
    name: "register-form",
    props: {
        nextStep: { type: Function, required: false }
    },
    data(){
      return{
        user: {
          firstName: '',
          lastName: '',
          phone: '',
          gender: '',
          country: '',
          state: '',
          educationLevel: '',
          schoolChoice: '',
          course: '',
          dob: '',
          file: ''
        }
      }
    },

    methods: {
        getSelectValue(val) {
            console.log(val)
        },
        setElementValue(e) {
            this.user[e.target.name] = e.target.value
          console.log(e.target.value)
        },
        onSubmit(e) {
            e.preventDefault()
            console.log(this.user)
        },
    },
    mounted() {
        // console.log(countries)
    },
    setup(props) {
        const onReset = (evt) => {
            evt.preventDefault();
            console.log("reset");
        };
        return {
            onReset
        };
    },
    components: { SelectInput }
}
</script>
