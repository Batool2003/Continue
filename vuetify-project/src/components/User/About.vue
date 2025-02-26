<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" class="d-flex align-center">
        <v-img
          src="https://source.unsplash.com/featured/?mobile,technology"
          max-width="300"
          contain
        ></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <h2>About Us</h2>
        <h3 class="text-subtitle-1">Sample Headline</h3>
        <p>
          Welcome to [Your Store Name]! We are dedicated to providing high-quality products with exceptional customer service. Our mission is to offer a seamless shopping experience with a carefully curated selection of items that cater to your needs. Whether you're looking for the latest trends or timeless essentials, we strive to bring you the best.

At [Your Store Name], customer satisfaction is our top priority. We value trust, quality, and innovation, ensuring that every purchase meets your expectations. Thank you for choosing us—we look forward to serving you!
        </p>
        <v-btn color="black" class="mt-4">Contact Us</v-btn>
      </v-col>
    </v-row>
    <v-row class="mt-8">
      <v-col cols="12" md="4">
        <v-card class="pa-4 text-center" color="orange">
          <v-icon size="40">mdi-phone</v-icon>
          <h3>CALL US</h3>
          <p>1 (234) 567-891, 1 (234) 987-654</p>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="pa-4 text-center" color="orange">
          <v-icon size="40">mdi-map-marker</v-icon>
          <h3>LOCATION</h3>
          <p>121 Rock Street, 21 Avenue, New York, NY 92103-9000</p>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="pa-4 text-center" color="orange">
          <v-icon size="40">mdi-clock-outline</v-icon>
          <h3>HOURS</h3>
          <p>Mon – Fri: 11 am – 8 pm, Sat, Sun: 6 am – 8 pm</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>

<style scoped>
h2 {
  font-size: 2rem;
  font-weight: bold;
}
p {
  font-size: 1rem;
  line-height: 1.5;
}
</style>
