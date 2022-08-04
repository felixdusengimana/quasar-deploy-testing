<template>
  <div class="tw-bg-auth-bg-image tw-h-screen">
    <div class="tw-text-center tw-pt-32 tw-text-2xl tw-text-gray-400">Welcome to Eduvacity</div>
    <div class="tw-flex tw-justify-center tw-mt-4">
      <div class="tw-bg-white tw-border-2">
        <div class="tw-m-12">
          <div>
            <q-input outlined class="tw-w-96" v-model="text" type="text" label="Enter your email" />
          </div>
          <div class="tw-mt-6">
            <q-input outlined class="tw-w-96" v-model="text" type="text" label="New password" />
          </div>
          <div class="tw-mt-6">
            <q-input outlined class="tw-w-96" v-model="text" type="text" label="Confirm password" />
          </div>
          <div class="tw-flex tw-justify-center tw-mt-14">
            <q-btn color="accent" class="tw-w-52 tw-h-14" no-caps unelevated label="Proceed application" @click="onClick" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "CreatePassword",
  setup() {
    
  },
})
</script>
