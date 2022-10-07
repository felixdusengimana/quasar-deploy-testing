<template>
  <q-layout view="lHh Lpr lFf" class="tw-flex tw-flex-col">
    <DashNavbar/>
    <Sidebar/>

    <q-page-container class="tw-h-screen">
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import DashNavbar from 'src/components/dashboard/DashNavbar.vue'
import Sidebar from 'src/components/dashboard/Sidebar.vue';

export default defineComponent({
    name: "MainLayout",
    setup() {
    },
    components: { DashNavbar, Sidebar }
})
</script>
