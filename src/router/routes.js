// screens
import LoginScreen from "pages/auth/LoginScreen.vue"
import RegisterScreen from 'pages/auth/RegisterScreen.vue'
import RegisterSuccess from 'pages/auth/RegisterSuccess.vue'

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
    path: '/register-success',
    name: 'register-success',
    component: RegisterSuccess,
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
