import { createRouter, createWebHistory } from 'vue-router';

import About from '@/components/User/About.vue';
import List from '@/components/User/List.vue';
import ProductDetails from '@/components/User/ProductDetails.vue';
import Profile from '@/components/User/Profile.vue';
// import SignUp from '@/components/User/SignUp.vue';
// import FoterList from '@/components/User/FooterList.vue';
import CartPage from '@/components/User/CartPage.vue'; // استيراد صفحة السلة

const routes = [
  // user routes (global routes)
  { path: '/', component: List }, // https://localhost:3000/
  { path: '/about', component: About },
  // { path: '/signup', component: SignUp },
  { path: '/profile', component: Profile },
  { path: '/product/:id', component: ProductDetails, props: true },
  // { path: '/FootList', component: FoterList },
  { path: '/cart', component: CartPage }, // إضافة المسار هنا
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
