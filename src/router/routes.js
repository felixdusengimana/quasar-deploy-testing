// screens
import LoginScreen from "pages/auth/LoginScreen.vue"
import RegisterScreen from 'pages/auth/RegisterScreen.vue'
import AssingmentsPage from 'pages/dashboard/AssignmentsPage.vue'
import SingleAssignmentPage from 'pages/dashboard/SingleAssignmentPage.vue'

const routes = [
  {
    path: '/',
    name: 'generate-password',
    component: () => import('pages/auth/CreatePassword.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterScreen,
  },
  {
    path: '/login',
    name: 'login',
    component: () => LoginScreen,
  },
  {
    path: '/dashboard',
    name: 'student-dashboard',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/dashboard/DashboardPage.vue')
      },
      {
        path: '/videos',
        name: 'videos',
        component: () => import('pages/dashboard/VideosPage.vue'),
      },
      {
        path: '/payment',
        name: 'payment',
        component: () => import('pages/dashboard/PaymentsPage.vue'),
      },
      {
        path: '/assignments',
        name: 'assignments',
        component: () => AssingmentsPage,
      }
    ]
  },

  //with no sidebar
  {
  path: '/dashboard',
  name: 'dashboard-without-sidebar',
  component: () => import('layouts/DashboardWithoutSidebar.vue'),
  children: [
    {
      path: '/assignments/:id',
      name: 'singleassignments',
      component: ()=>SingleAssignmentPage,
    }
]
},

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
