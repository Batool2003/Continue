import { createRouter, createWebHistory } from 'vue-router';

import About from '@/components/User/About.vue';
import List from '@/components/User/List.vue';
import ProductDetails from '@/components/User/ProductDetails.vue';
import Profile from '@/components/User/Profile.vue';
import CartPage from '@/components/User/CartPage.vue';
import LogIn from '@/components/User/LogIn.vue';
import signUp from '@/components/User/signUp.vue';

// دالة التحقق من تسجيل الدخول
const isAuthenticated = () => {
  const token = localStorage.getItem('userToken'); // احصل على التوكن من localStorage
  console.log("Checking authentication: ", token); // سجل التحقق من المصادقة
  return token !== null && token !== ""; // تحقق أن التوكن موجود وليس فارغًا
};

const routes = [
  { path: '/', component: List }, 
  { path: '/about', component: About },
  { path: '/profile', component: Profile },
  { path: '/product/:id', component: ProductDetails, props: true },
  { 
    path: '/cart', 
    component: CartPage,
    beforeEnter: (to, from, next) => {
      console.log("Trying to access Cart Page");
      if (!isAuthenticated()) {
        console.log("User not authenticated, redirecting to login");
        next('/login'); // إعادة توجيه المستخدم إلى تسجيل الدخول
      } else {
        console.log("User authenticated, allowing access");
        next(); // السماح بالدخول
      }
    }
  },
  { path: '/login', component: LogIn }, 
  { path: '/signUp', component: signUp },  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
