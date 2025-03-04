import { createRouter, createWebHistory } from 'vue-router';

import About from '@/components/User/About.vue';
import List from '@/components/User/List.vue';
import ProductDetails from '@/components/User/ProductDetails.vue';
import Profile from '@/components/User/Profile.vue';
import CartPage from '@/components/User/CartPage.vue'; // استيراد صفحة السلة
import LogIn from '@/components/User/LogIn.vue'; // استيراد صفحة تسجيل الدخول
import signUp from '@/components/User/signUp.vue'; // استيراد صفحة تسجيل الدخول

const routes = [
  { path: '/', component: List }, // الصفحة الرئيسية
  { path: '/about', component: About },
  { path: '/profile', component: Profile },
  { path: '/product/:id', component: ProductDetails, props: true },
  { path: '/cart', component: CartPage }, // صفحة السلة
  { path: '/login', component: LogIn }, 
  { path: '/signUp', component: signUp }, 


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
