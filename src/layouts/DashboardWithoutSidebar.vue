<template>
  <q-layout view="lHh Lpr lFf">
    <DashNavbar :withLogo="true"/>
    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import DashNavbar from 'src/components/dashboard/DashNavbar.vue'

export default defineComponent({
    name: "LayoutWithNoSidebar",
    setup() {
    },
    components: { DashNavbar }
})
</script>
