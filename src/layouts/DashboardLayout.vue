<template>
  <q-layout view="lHh Lpr lFf">
    <DashNavbar/>
    <Sidebar/>

    <q-page-container>
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
        const leftDrawerOpen = ref(false);
        return {
            leftDrawerOpen,
            toggleLeftDrawer() {
                leftDrawerOpen.value = !leftDrawerOpen.value;
            }
        };
    },
    components: { DashNavbar, Sidebar }
})
</script>
