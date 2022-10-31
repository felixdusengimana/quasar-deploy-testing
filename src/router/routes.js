const routes = [
 {
  path: '/',
  component: ()=> import("layouts/AuthLayout.vue"),
  children: [{
    path: '/',
    name: 'login',
    component: () => import('pages/auth/LoginScreen.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: ()=>import('pages/auth/RegisterScreen.vue'),
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: ()=>import("pages/auth/ForgotPassword.vue"),
  },
  {
    path: '/enter-otp',
    name: 'enter-otp',
    component: ()=>import("pages/auth/EnterOTP.vue"),
  },
  {
    path: '/generate-password',
    name: 'generate-password',
    component: ()=>import("pages/auth/ResetPassword.vue"),
  }]},
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
        path: '/performance',
        name: 'performance',
        component: () => import('pages/dashboard/PerformancePage.vue'),
      },
      {
        path: '/payment',
        name: 'payment',
        component: () => import('pages/dashboard/PaymentsPage.vue'),
      },
      {
        path: '/helps',
        name: 'helps',
        component: () => import('pages/dashboard/HelpsPage.vue'),
      },
      {
        path: '/assignments',
        name: 'assignments',
        component: () => import('pages/dashboard/assignments/AssignmentsPage.vue'),
      },
      {
        path: '/classes',
        name: 'classes',
        component: () => import("pages/dashboard/classes/ClassesPage.vue"),
      },
    ]
  },
  // management links, only accessible by admin
  {
    path: '/management/dashboard',
    name: 'management-dashboard',
    component: () => import('layouts/ManagementLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/management/ManagementDashboard.vue')
      },
      {
        path: '/management/students',
        name: 'students',
        component: () => import('pages/management/StudentsPage.vue'),
      },
      {
        path: '/management/schools',
        name: 'schools',
        component: () => import('pages/management/SchoolsPage.vue'),
      },
      {
        path: '/management/applications',
        name: 'applications',
        component: () => import('pages/management/ApplicationsPage.vue'),
      },
      {
        path: '/management/transactions',
        name: 'transactions',
        component: () => import('pages/management/TransactionsPage.vue'),
      },
      {
        path: '/management/users',
        name: 'users',
        component: () => import('pages/management/UsersPage.vue'),
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
      component: ()=>import("pages/dashboard/assignments/SingleAssignmentPage.vue"),
    },
    {
      path: '/classes/lesson/:id',
      name: 'class-lesson',
      component: () => import("pages/dashboard/classes/ClassLessonPage.vue"),
    },
    {
      path: '/quiz/:id',
      name: 'quiz',
      component: () => import('pages/dashboard/QuizPage.vue'),
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('pages/dashboard/SettingsPage.vue'),
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: () => import('pages/dashboard/ProfilePage.vue'),
    },
    {
      path: '/application/:id',
      name: 'applicant-profile',
      component: () => import('pages/dashboard/ProfilePage.vue'),
    },
    {
      path: '/management/students/:id/performance',
      name: 'student-performance',
      component: () => import('pages/management/StudentPerformancePage.vue'),
    },
    {
      path: "/management/payment/:id",
      name: 'payment-history',
      component: () => import('pages/management/PaymentHistoryPage.vue'),
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
