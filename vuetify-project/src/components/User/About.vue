<template>
  <v-container fluid class="fill-height d-flex flex-column justify-center align-center bg-grey-lighten-3 mt-10">
    <v-row>
      <v-col cols="12" class="text-center mt-15">
        <h1 class="text-h1 font-weight-bold text-primary mb-5">🛍️ Welcome to My Store</h1>
        <h2 class="text-h4 text-secondary">Find the Best Fashion & Electronics in One Place! </h2>
      </v-col>
    </v-row>

    <v-row align="center" class="pa-10">
      <!-- محتوى النص -->
      <v-col cols="12" md="6" class="text-center text-md-left">
        <h3 class="text-h5 font-weight-bold text-accent mb-4"> Why Shop With Us?</h3>
        <p class="text-body-1 mb-3">
          Explore the latest **fashion trends** and top **electronics** at unbeatable prices.  
          We ensure **quality, affordability, and an exceptional shopping experience**.
        </p>
        <p class="text-body-1 mb-3">
          Our products are carefully selected to match your **style and tech needs**.  
          **Fast delivery , secure payments , and top-notch customer support.**
        </p>
        <p class="text-h6 font-weight-bold text-primary mt-5">
          "Style Meets Innovation  Shop Smart, Live Better!"
        </p>
      </v-col>

      <!-- صورة المتجر -->
      <v-col cols="12" md="6" class="d-flex justify-center">
        <v-img 
          :src="image" 
          alt="Store Image" 
          max-height="80%" 
          max-width="80%" 
          class="rounded-lg shadow-lg"
          style="object-fit: cover;"
        ></v-img>
      </v-col>
    </v-row>

    <!-- قسم التواصل -->
    <!-- <v-row class="pa-10 bg-grey-darken-3 text-white">
      <v-col cols="12" class="text-center">
        <h2 class="text-h4 font-weight-bold">📞 Contact Us</h2>
      </v-col>
      <v-col cols="12" md="4" class="text-center">
        <v-icon color="yellow" size="50">mdi-phone</v-icon>
        <p class="text-body-1 mt-2">📞 +123 456 7890</p>
      </v-col>
      <v-col cols="12" md="4" class="text-center">
        <v-icon color="yellow" size="50">mdi-email</v-icon>
        <p class="text-body-1 mt-2">📧 contact@ourstore.com</p>
      </v-col>
      <v-col cols="12" md="4" class="text-center">
        <v-icon color="yellow" size="50">mdi-map-marker</v-icon>
        <p class="text-body-1 mt-2">📍 123 Main Street, City</p>
      </v-col>
    </v-row> -->
    <v-container fluid class="pa-0">
    <!-- قسم التواصل -->
    <v-row class="pa-10 text-white contact-section">
      <v-col cols="12" class="text-center mb-6">
        <h2 class="text-h4 font-weight-bold">📞 Contact Us</h2>
      </v-col>

      <v-col cols="12" md="4" class="text-center">
        <v-icon color="yellow" size="50">mdi-phone</v-icon>
        <p class="text-body-1 mt-2">📞 +123 456 7890</p>
      </v-col>

      <v-col cols="12" md="4" class="text-center">
        <v-icon color="yellow" size="50">mdi-email</v-icon>
        <p class="text-body-1 mt-2">📧 contact@ourstore.com</p>
      </v-col>

      <v-col cols="12" md="4" class="text-center">
        <v-icon color="yellow" size="50">mdi-map-marker</v-icon>
        <p class="text-body-1 mt-2">📍 123 Main Street, City</p>
      </v-col>
    </v-row>
  </v-container>
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
.contact-section {
  background-color: #2C3E50;
}

.text-body-1 {
  font-size: 1.1rem;
}
</style>
