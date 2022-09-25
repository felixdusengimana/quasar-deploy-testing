<template>
    <div class="tw-h-screen tw-font-manrope">
      <Navbar/>
      <RegisterForm v-if="step==1" :nextStep='nextStep'/>
      <EnterEmail v-else-if="step==2" :nextStep='nextStep'/>
      <ConfirmEmail v-else-if="step==3" :nextStep='nextStep'/>
      <CreatePassword v-else-if="step==4" :nextStep='nextStep'/>
      <RegisterSuccess v-else/>
    </div>
  </template>

  <script>
  import Navbar from 'components/molecules/Navbar.vue';
import RegisterForm from 'components/molecules/RegisterForm.vue';
import EnterEmail from 'src/components/molecules/EnterEmail.vue';
import ConfirmEmail from 'components/molecules/ConfirmEmail.vue';
import CreatePassword from 'src/components/molecules/CreatePassword.vue';
import RegisterSuccess from 'src/components/molecules/RegisterSuccess.vue';
  export default {
    components: {
    Navbar,
    RegisterForm,
    EnterEmail,
    ConfirmEmail,
    CreatePassword,
    RegisterSuccess
},
    data() {
        return {
          step: 1
        }
    },
    methods: {
      nextStep() {
        this.step += 1
      },
      prevStep(){
        this.step -= 1
      }
    },
    setup() {

    }
  }
  </script>
