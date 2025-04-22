<template>
  <v-app>
    <!-- شريط التنقل -->
    <v-app-bar app elevation="4" class="color-nav" color="primary">
      <v-container class="d-flex align-center justify-space-between">
        <!-- شعار الموقع -->
        <v-img 
          :src="image" 
          alt="Zahiah Grow"  
          height="125"
          width="125"
          contain
          class="logo rounded-circle"
        ></v-img>

        <v-spacer></v-spacer>

        <!-- القائمة العادية للأجهزة الكبيرة -->
        <nav class="d-none d-md-flex">
          <RouterLink class="nav-link" to="/">Home</RouterLink>
          <RouterLink class="nav-link" to="/about">About</RouterLink>
          <RouterLink class="nav-link" to="/profile">Profile</RouterLink>

          <template v-if="isLoggedIn">
            <RouterLink class="nav-link" to="/cart">Cart 🛒</RouterLink>
            <v-btn class="nav-link" @click="logout">Logout</v-btn>
          </template>
          <template v-else>
            <RouterLink class="nav-link" to="/signUp">SignUp</RouterLink>
            <RouterLink class="nav-link" to="/login">Login</RouterLink>
          </template>
        </nav>

        <!-- زر القائمة المنسدلة للجوال -->
        <v-menu v-if="isMobile" offset-y>
          <template v-slot:activator="{ props }">
            <v-btn icon v-bind="props">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item to="/">Home</v-list-item>
            <v-list-item to="/about">About</v-list-item>
            <v-list-item to="/profile">Profile</v-list-item>

            <template v-if="isLoggedIn">
              <v-list-item to="/cart">Cart 🛒</v-list-item>
              <v-list-item @click="logout">Logout</v-list-item>
            </template>
            <template v-else>
              <v-list-item to="/signUp">SignUp</v-list-item>
              <v-list-item to="/login">Login</v-list-item>
            </template>
          </v-list>
        </v-menu>
      </v-container>
    </v-app-bar>

    <!-- محتوى الصفحة -->
    <v-main>
      <RouterView @login-success="updateLoginStatus" />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import image from '@/assets/img.png'; // تأكد من صحة المسار

const router = useRouter();
const isLoggedIn = ref(false);

// ✅ تحديث حالة تسجيل الدخول
const updateLoginStatus = () => {
  isLoggedIn.value = !!localStorage.getItem('userToken');
};

// ✅ تسجيل الخروج
const logout = () => {
  localStorage.removeItem('userToken');
  isLoggedIn.value = false;
  router.push('/login'); // توجيه المستخدم إلى صفحة تسجيل الدخول
};

// ✅ التأكد من تحديث isMobile عند تغيير حجم الشاشة
const isMobile = ref(window.innerWidth < 960);

const updateIsMobile = () => {
  isMobile.value = window.innerWidth < 960;
};

onMounted(() => {
  updateLoginStatus();
  window.addEventListener('resize', updateIsMobile);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateIsMobile);
});
</script>

<style scoped>
.color-nav {
  font-size: 18px;
  font-weight: bold;
  padding: 20px 24px;
}

.nav-link {
  color: #D7CCC8; /* اللون الثانوي */
  margin-right: 20px;
  text-decoration: none;
  position: relative;
  font-size: 18px;
  transition: all 0.3s ease; /* تأثير التحريك على الحجم والخط */
  padding-bottom: 20px; /* المسافة بين النص والخط */
}

.nav-link:hover {
  color: #D84315; /* لون التمييز عند التحويم */
  font-size: 20px; /* تكبير الخط عند التحويم */
}

/* إضافة الخط السفلي عند التمرير */
.nav-link::after {
  content: "";
  position: absolute;
  bottom: -4px; /* تعديل المسافة بين الخط والنص */
  left: 0;
  width: 0;
  height: 2px;
  background-color: #D84315;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%; /* عند التمرير يظهر الخط */
}

/* تحسين القائمة المنسدلة */
.v-list-item {
  color: rgb(231, 14, 14);
}

.v-list-item:hover {
  background-color: #eeeeee;
}
</style>
