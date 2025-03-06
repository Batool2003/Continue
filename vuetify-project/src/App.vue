<template>
  <v-app>
    <v-app-bar app elevation="4" class="color-nav" color="primary">
      <v-container class="d-flex align-center justify-space-between">
        <v-img 
          :src="image" 
          alt="Zahiah Grow"  
          height="120"
          width="120"
          contain
          class="logo"
        ></v-img>

        <v-spacer></v-spacer>

        <!-- روابط التصفح -->
        <nav class="me-6">
          <RouterLink class="nav-link" to="/">List</RouterLink>
          <RouterLink class="nav-link" to="/about">About</RouterLink>
          <RouterLink class="nav-link" to="/profile">Profile</RouterLink>
          <!-- <RouterLink class="nav-link" to="/product">Details</RouterLink> -->

          <!-- إظهار السلة إذا كان المستخدم مسجلاً دخولًا، وإلا إظهار SignUp/Login -->
          <template v-if="isLoggedIn">
            <RouterLink class="nav-link" to="/cart">Cart🛒</RouterLink>
            <v-btn class="nav-link" @click="logout">Logout</v-btn>
          </template>
          <template v-else>
            <RouterLink class="nav-link" to="/signUp">SignUp</RouterLink>
            <RouterLink class="nav-link" to="/LogIn">LogIn</RouterLink>
          </template>
        </nav>
      </v-container>
    </v-app-bar>

    <v-main>
      <RouterView @login-success="updateLoginStatus" />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import image from './assets/img.png';
import { useRouter } from 'vue-router';

const router = useRouter();
const isLoggedIn = ref(false);

// تحديث حالة تسجيل الدخول
const updateLoginStatus = () => {
  isLoggedIn.value = !!localStorage.getItem('userToken');
};

// تسجيل الخروج
const logout = () => {
  localStorage.removeItem('userToken');
  isLoggedIn.value = false;
  router.push('/login'); // توجيه المستخدم إلى صفحة تسجيل الدخول
};

// التحقق عند تحميل الصفحة
onMounted(updateLoginStatus);
</script>

<style>
.color-nav {
  font-size: 18px;
  font-weight: bold;
  padding: 12px 24px;
}

.nav-link {
  color: #D7CCC8; /* اللون الثانوي */
  margin-right: 20px;
  text-decoration: none;
}

.nav-link:hover {
  color: #D84315; /* لون التمييز عند التمرير */
}

.logo {
  object-fit: contain;
}
</style>
