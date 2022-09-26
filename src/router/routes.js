// screens
import LoginScreen from "pages/auth/LoginScreen.vue"
import RegisterScreen from 'pages/auth/RegisterScreen.vue'
import AssingmentsPage from 'pages/dashboard/AssignmentsPage.vue'
import ClassePage from 'src/pages/dashboard/classes/ClassesPage.vue'
import SingleAssignmentPage from 'pages/dashboard/SingleAssignmentPage.vue'
import ForgotPassword from 'pages/auth/ForgotPassword.vue'
import ResetPassword from 'pages/auth/ResetPassword.vue'
import EnterOTP from 'pages/auth/EnterOTP.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => LoginScreen,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterScreen,
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: ForgotPassword,
  },
  {
    path: '/enter-otp',
    name: 'enter-otp',
    component: EnterOTP,
  },
  {
    path: '/generate-password',
    name: 'generate-password',
    component: ResetPassword,
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
      },
      {
        path: '/classes',
        name: 'classes',
        component: () => ClassePage,
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
