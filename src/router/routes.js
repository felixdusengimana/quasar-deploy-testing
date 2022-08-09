
const routes = [
  {
    path: '/',
    name: 'generate-password',
    component: () => import('pages/auth/CreatePassword.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('pages/auth/LoginScreen.vue'),
  },
  {
    path: '/dashboard',
    name: 'student-dashboard',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/DashboardPage.vue') }
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
