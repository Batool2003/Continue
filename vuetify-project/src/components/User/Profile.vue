<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8" lg="6">
          <v-card class="pa-5">
            <v-card-title class="text-h5 text-center">
              الملف الشخصي
            </v-card-title>
            <v-divider></v-divider>
  
            <v-card-text class="text-center">
              <v-avatar size="100">
                <v-img src="https://randomuser.me/api/portraits/men/10.jpg" alt="User Avatar"></v-img>
              </v-avatar>
              <h2 class="mt-3">{{ user.name }}</h2>
              <p class="text-grey-darken-1">{{ user.email }}</p>
              <v-chip class="mt-2" color="primary" label>{{ user.role }}</v-chip>
            </v-card-text>
  
            <v-card-actions class="justify-center">
              <v-btn color="primary" @click="editProfile">تحرير المعلومات</v-btn>
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
        user: {
          name: "محمد أحمد",
          email: "mohamed.ahmed@example.com",
          role: "User",
        },
      };
    },
    methods: {
      editProfile() {
        alert("فتح نافذة تعديل المعلومات");
      },
    },
  };
  </script>
  
