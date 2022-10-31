
import LoginScreen from "pages/auth/LoginScreen.vue"
import RegisterScreen from 'pages/auth/RegisterScreen.vue'
import ForgotPassword from 'pages/auth/ForgotPassword.vue'
import ResetPassword from 'pages/auth/ResetPassword.vue'
import EnterOTP from 'pages/auth/EnterOTP.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => LoginScreen,
  },
  // {
  //   path: '/register',
  //   name: 'register',
  //   component: RegisterScreen,
  // },
  // {
  //   path: '/forgot-password',
  //   name: 'forgot-password',
  //   component: ForgotPassword,
  // },
  // {
  //   path: '/enter-otp',
  //   name: 'enter-otp',
  //   component: EnterOTP,
  // },
  // {
  //   path: '/generate-password',
  //   name: 'generate-password',
  //   component: ResetPassword,
  // },
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
