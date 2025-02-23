<template>
    <v-container>
      <!-- About Us Section -->
      <v-row align="center" justify="center">
        <v-col
          cols="12"
          md="5"
          class="d-flex justify-center"
        >
          <v-img
            src=""
            alt="About Us Image"
            max-height="400"
            class="rounded-circle"
          />
        </v-col>
  
        <v-col
          cols="12"
          md="7"
        >
          <v-row>
            <v-col cols="12">
              <v-text class="text-h4 font-weight-bold">About Us</v-text>
              <v-subheading class="text-body-1">
                نحن شركة مبتكرة تهدف إلى تقديم حلول متقدمة لعملائنا.
              </v-subheading>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-btn color="primary">Learn More</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
  
      <!-- Contact Information Cards -->
      <v-row>
        <v-col
          v-for="(card, index) in contactCards"
          :key="index"
          cols="12"
          md="4"
          class="d-flex justify-center mb-4"
        >
          <v-card
            :elevation="4"
            class="pa-4 text-center"
          >
            <v-card-title>{{ card.title }}</v-card-title>
            <v-card-text>{{ card.content }}</v-card-text>
            <v-card-actions>
              <v-btn :href="card.link" color="primary" target="_blank">Contact</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        contactCards: [
          {
            title: 'Email',
            content: 'contact@company.com',
            link: 'mailto:contact@company.com',
          },
          {
            title: 'Phone',
            content: '+1234567890',
            link: 'tel:+1234567890',
          },
          {
            title: 'Location',
            content: '123 Business St, City, Country',
            link: 'https://www.google.com/maps?q=123+Business+St,+City,+Country',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .v-img {
    border-radius: 50%;
  }
  .v-title {
    font-weight: bold;
  }
  .v-subheading {
    color: #555;
  }
  </style>
  
  