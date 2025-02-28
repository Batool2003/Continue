<template>
  <v-app>
    <v-app-bar app elevation="4" class="color-nav"color="primary" >
      <v-container class="d-flex align-center justify-space-between">
        <!-- الشعار -->
        <v-btn text class="logo" to="/">Zahiah Grow</v-btn>

        <!-- روابط التصفح -->
        <v-spacer></v-spacer>
        <nav class="me-6">
          <RouterLink class="nav-link" to="/">List</RouterLink>
          <RouterLink class="nav-link" to="/about">About</RouterLink>
          <RouterLink class="nav-link" to="/profile">Profile</RouterLink>
          <RouterLink class="nav-link" to="/product">Details</RouterLink>
          <RouterLink class="nav-link" to="/signup">Signup</RouterLink>
          <RouterLink class="nav-link" to="/cart">CartPage</RouterLink>
        </nav>

        <!-- زر التبديل بين الوضعين -->
        <v-btn @click="toggleTheme" text>
          {{ isDark ? 'Light Mode' : 'Dark Mode' }}
        </v-btn>
      </v-container>
    </v-app-bar>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script>
const toggleTheme = () => {
  isDark.value = !isDark.value;
  theme.global.name.value = isDark.value ? "dark" : "light";
};
</script>

<style>
.color-nav{
  font-size: 18px;
  font-weight: bold;
  padding: 12px 24px;
  /* background-color: primary; */
}

.nav-link {
  color: #D7CCC8; /* اللون الثانوي */
  margin-right: 20px;
  text-decoration: none;
}
.nav-link:hover {
  color: #D84315; /* لون التمييز عند التمرير */
}
</style>
