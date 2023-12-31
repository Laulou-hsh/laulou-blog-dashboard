import {createRouter, createWebHistory} from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Tables from '../views/Tables.vue'
import Article from '../views/Article.vue'
import Billing from '../views/Billing.vue'
import Notifications from '../views/Notifications.vue'
import Profile from '../views/Profile.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'

const routes = [
  {
    path: '/',
    name: '/',
    redirect: '/sign-in',
  },
  {
    path: '/index',
    name: 'Index',
    redirect: '/sign-in',
  },
  {
    path: '/home',
    name: 'Home',
    redirect: '/sign-in',
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/tables',
    name: 'Tables',
    component: Tables,
  },
  {
    path: '/article',
    name: 'Article',
    component: Article,
  },
  {
    path: '/billing',
    name: 'Billing',
    component: Billing,
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: Notifications,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: SignIn,
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
})

export default router
