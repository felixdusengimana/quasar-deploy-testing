
import RegisterScreen from 'pages/auth/RegisterScreen.vue'
import ForgotPassword from 'pages/auth/ForgotPassword.vue'
import ResetPassword from 'pages/auth/ResetPassword.vue'
import EnterOTP from 'pages/auth/EnterOTP.vue'

const routes = [
  {
  path: '/auth',
  component: () => import('layouts/MainLayout.vue'),
  children: [{
    path: '/login',
    component: () => import("pages/auth/LoginScreen.vue"),
    },
  ]},
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/auth/EnterOTP.vue') }
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
