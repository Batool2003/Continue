<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title>
              <span class="headline">Log In</span>
            </v-card-title>
            <v-card-text>
              <v-form @submit.prevent="handleLogin">
                <v-text-field
                  v-model="username"
                  label="Username"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  label="Password"
                  type="password"
                  required
                ></v-text-field>
                <v-btn color="primary" type="submit" block>Log In</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: "Login",
    data() {
      return {
        username: "",
        password: ""
      };
    },
    methods: {
      handleLogin() {
        if (this.username && this.password) {
          console.log("Logging in with:", this.username, this.password);
          // هنا يمكنك تنفيذ منطق المصادقة عبر API
        } else {
          alert("Please fill in all fields.");
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .headline {
    font-size: 24px;
    font-weight: bold;
    color: #1976D2; /* لون أزرق متناسق */
  }
  </style>
  