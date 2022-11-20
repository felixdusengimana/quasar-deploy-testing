<template>
  <q-layout view="lHh Lpr lFf" class="tw-flex tw-flex-col">
    <DashNavbar/>
    <Sidebar :links="links"/>
    <q-page-container class="tw-h-screen">
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import DashNavbar from 'src/components/dashboard/DashNavbar.vue'
import Sidebar from 'src/components/dashboard/Sidebar.vue';

export default defineComponent({
    name: "MainLayout",
    setup() {
    },
    data(){
      return{
        links: [
          {
            name: 'Dashboard',
            to: '/dashboard',
            icon: 'dashboard',
          },
          {
            name: 'Classes',
            to: '/classes',
            icon: 'classes',
          },
          {
            name: 'Assignments',
            to: '/assignments',
            icon: 'assignment',
          },
          {
            name: 'Performance',
            to: '/performance',
            icon: 'performance',
          },
          {
            name: 'Payments',
            to: '/payment',
            icon: 'rewards',
          },
          // {
          //   name: 'Rewards',
          //   to: '/rewards',
          //   icon: 'rewards',
          // },
          {
            name: 'Helps',
            to: '/helps',
            icon: 'helps',
          }
        ]
      }
    },
    components: { DashNavbar, Sidebar }
})
</script>
