import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

import About from '@/components/User/About.vue'
import List from '@/components/User/List.vue'
import Details from '@/components/User/Details.vue'
import profile from '@/components/User/Profile.vue'
import SignUp from '@/components/User/signUp.vue'
import LogIn from '@/components/User/LogIn.vue'

const routes = [
  // user routes (global routes)
  { path: '/', component:List }, // https://localhost:3000/
  { path: '/about', component: About},
  { path: '/signup', component: SignUp },
  { path: '/login', component: LogIn },
   { path: '/profile', component: profile },
  { path: '/Details', component: Details },


  // admin routes
  // { path: '/admin/login', component: ArticlesListView },


]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router
