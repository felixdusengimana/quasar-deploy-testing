<template>
  <q-layout view="lHh Lpr lFf" class="tw-flex tw-flex-col">
    <DashNavbar :noSettingsIcon="true"/>
    <Sidebar :links='links' :logoWithText="true"/>
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
    name: "ManagementLayout",
    setup() {
    },
    data() {
        return {
            links: [
                {
                    name: 'Dashboard',
                    icon: 'dashboard',
                    to: '/management/dashboard'
                },
                {
                    name: 'Students',
                    icon: 'student',
                    to: '/management/students'
                },
                {
                  name: 'School',
                  icon: 'school',
                  to: '/management/school'
                },
                {
                  name: 'Applications',
                  icon: 'assignment',
                  to: '/management/application'
                },
                {
                    name: 'Transaction',
                    icon: 'transaction',
                    to: '/management/instructors'
                },
                {
                    name: 'User Management',
                    icon: 'usermanagement',
                    to: '/management/settings'
                },
            ]
        }
    },
    components: { DashNavbar, Sidebar }
})
</script>
