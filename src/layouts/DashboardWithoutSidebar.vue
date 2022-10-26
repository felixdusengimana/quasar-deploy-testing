<template>
  <q-layout view="lHh Lpr lFf" >
    <DashNavbar :withLogo="true"/>
    <q-page-container class="tw-h-screen">
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import DashNavbar from 'src/components/dashboard/DashNavbar.vue'

export default defineComponent({
    name: "LayoutWithNoSidebar",
    setup() {
    },
    components: { DashNavbar }
})
</script>
