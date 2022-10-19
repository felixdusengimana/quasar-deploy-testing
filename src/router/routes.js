// screens
import LoginScreen from "pages/auth/LoginScreen.vue"
import RegisterScreen from 'pages/auth/RegisterScreen.vue'
import AssingmentsPage from 'src/pages/dashboard/assignments/AssignmentsPage.vue'
import SingleAssignmentPage from 'src/pages/dashboard/assignments/SingleAssignmentPage.vue'

import ClassePage from 'src/pages/dashboard/classes/ClassesPage.vue'
import ClassLessonPage from 'src/pages/dashboard/classes/ClassLessonPage.vue'

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
      component: ()=>SingleAssignmentPage,
    },
    {
      path: '/classes/lesson/:id',
      name: 'class-lesson',
      component: () => ClassLessonPage,
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
      path: '/management/students/:id/performance',
      name: 'student-performance',
      component: () => import('pages/management/StudentPerformancePage.vue'),
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
