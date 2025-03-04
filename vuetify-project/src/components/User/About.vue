<template>
  <v-container fluid class="fill-height d-flex flex-column justify-center align-center bg-grey-lighten-3 mt-5">
    <v-row>
      <v-col cols="12" class="text-center mt-5">
  <h1 class="text-h2 font-weight-bold primary--text mb-3">Welcome to Our Store</h1>
  <h2 class="text-h5 secondary--text">Your Satisfaction is Our Priority!</h2>
</v-col>

    </v-row>
    <v-row align="center" class="pa-5">
      <v-col cols="12" md="6">
        <p class="text-body-1">
          <strong>Why Choose Us?</strong>
        </p>
        <p>
          Discover a unique shopping experience where quality meets affordability.
          We provide carefully curated products to meet your needs and lifestyle.
        </p>
        <p>
          Our store guarantees high-quality products sourced from trusted suppliers.
          Enjoy an easy and hassle-free shopping experience with us!
        </p>
        <p class="accent--text font-weight-bold">
          "Great Products, Great Prices, Great Service."
        </p>
      </v-col>
      <v-col cols="12" md="6">
        <v-img :src="image" alt="Store Image" max-height="350" max-width="100%" style="object-fit: cover;"></v-img>
      </v-col>
    </v-row>
    <v-row class="pa-5">
      <v-col cols="12" class="text-center">
        <h2 class="text-h4 font-weight-bold primary--text">Contact Us</h2>
      </v-col>
      <v-col cols="12" md="4" class="text-center">
        <v-icon color="primary" size="50">mdi-phone</v-icon>
        <p class="text-body-1">+123 456 7890</p>
      </v-col>
      <v-col cols="12" md="4" class="text-center">
        <v-icon color="primary" size="50">mdi-email</v-icon>
        <p class="text-body-1">contact@ourstore.com</p>
      </v-col>
      <v-col cols="12" md="4" class="text-center">
        <v-icon color="primary" size="50">mdi-map-marker</v-icon>
        <p class="text-body-1">123 Main Street, City</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import image from "@/assets/img.png";
export default {
  name: "StorePage",
  data() {
    return {
      image,
    };
  },
};
</script>

<style scoped>
.primary--text {
  color: #2C3E50 !important;
}
.secondary--text {
  color: #D4AF37 !important;
}
.accent--text {
  color: #D84315 !important;
}
.bg-grey-lighten-3 {
  background-color: #F0F0F0 !important;
}
.fill-height {
  min-height: 100vh;
}
.mt-5 {
  margin-top: 40px;
}
</style>
