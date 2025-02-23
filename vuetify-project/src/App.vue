<template>
  <v-app id="inspire">
    <v-app-bar class="bg-blue-darken-3">
      <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->


      <v-app-bar-title>
        <div class="d-flex align-center">
          <v-icon>mdi-home</v-icon>

          <div class="ms-1 mt-1">Bloggy</div>
        </div>

      </v-app-bar-title>

      <nav class="me-6">
        <RouterLink class="nav-link"  to="/">List</RouterLink>
        <RouterLink class="nav-link" to="/about">About</RouterLink>
        <RouterLink class="nav-link" to="/profile">Profile</RouterLink>
        <RouterLink class="nav-link" to="/Details">Details</RouterLink>
        <RouterLink class="nav-link" to="/signup">Signup</RouterLink>
        <RouterLink class="nav-link" to="/login">login</RouterLink>
        <RouterLink class="nav-link" to="/cart">CartPage</RouterLink>


      </nav>


    </v-app-bar>

    <!-- <v-navigation-drawer
      v-model="drawer"
      temporary
    >
    </v-navigation-drawer> -->

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>


<style>
.nav-link {
  color: white;
  text-decoration: none;
  padding: 0 1rem;
  transition: opacity .2s;
}

.nav-link:hover {
  opacity: .8;
}

</style>