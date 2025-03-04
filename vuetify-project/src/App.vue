<template>
  <v-app>
    <v-app-bar app elevation="4" class="color-nav" color="primary">
      <v-container class="d-flex align-center justify-space-between">
        <v-img 
          :src="image" 
          alt="Zahiah Grow"  
          height="100"
          width="100"
          contain
          class="logo">
        </v-img>

        <!-- روابط التصفح -->
        <v-spacer></v-spacer>
        <nav class="me-6">
          <RouterLink class="nav-link" to="/">List</RouterLink>
          <RouterLink class="nav-link" to="/about">About</RouterLink>
          <RouterLink class="nav-link" to="/profile">Profile</RouterLink>
          <RouterLink class="nav-link" to="/product">Details</RouterLink>
          <RouterLink class="nav-link" to="/signUp">Signup</RouterLink>
          <RouterLink class="nav-link" to="/LogIn">LogIn</RouterLink>
          <RouterLink class="nav-link" to="/cart">CartPage</RouterLink>
          
        </nav>
      </v-container>
    </v-app-bar>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup>
import image from './assets/img.png'; // استيراد الصورة
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

/* ضبط الصورة بحيث لا تُقص */
.logo {
  object-fit: contain;
}
</style>
