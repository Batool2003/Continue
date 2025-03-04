<template>
    <v-container class="fill-height d-flex align-center justify-center" style="background-color: #F0F0F0;">
      <v-card class="pa-6" width="400" elevation="10">
        <v-card-title class="text-center text-h5" style="color: #2C3E50;">
          Login
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
              label="Email"
              type="email"
              outlined
              dense
              class="mb-3"
              color="#D4AF37"
            ></v-text-field>
            <v-text-field
              label="Password"
              type="password"
              outlined
              dense
              class="mb-3"
              color="#D4AF37"
            ></v-text-field>
            <v-btn block color="#2C3E50" dark class="mt-3">
              Login
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    setup() {
      return {};
    },
  };
  </script>
  
  <style>
  .v-text-field input {
    border-color: #D4AF37 !important;
  }
  </style>
  