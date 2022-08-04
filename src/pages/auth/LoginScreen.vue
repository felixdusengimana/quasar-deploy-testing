<template>
  <div class="tw-bg-auth-bg-image tw-h-screen">
    <q-btn color="accent" class="tw-float-right tw-mt-8 tw-mr-24" no-caps unelevated label="Login" @click="onClick" :to="{ name: 'generate-password' }" />
    <div class="tw-text-center tw-pt-20 tw-text-2xl tw-text-gray-400">Welcome to Back</div>
    <div class="tw-flex tw-justify-center tw-mt-4">
      <div class="tw-bg-white tw-border-2">
        <div class="tw-m-12">
          <div>
            <q-input color="accent" outlined class="tw-w-96" v-model="text" type="text" label="Email" />
          </div>
          <div class="tw-mt-6">
            <q-input color="accent" outlined class="tw-w-96" v-model="text" type="text" label="Password" />
          </div>
          <div class="tw-flex tw-justify-center tw-mt-14">
            <q-btn color="accent" class="tw-w-52 tw-h-14" no-caps unelevated label="Login" @click="onClick" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "LoginScreen",
  setup() {
    
  },
})
</script>
