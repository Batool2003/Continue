<template>
     <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>
            <span class="headline">Sign Up</span>
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="handleSignup">
              <v-text-field
                v-model="fullName"
                label="Full Name"
                required
              ></v-text-field>

              <v-text-field
                v-model="email"
                label="Email"
                type="email"
                required
              ></v-text-field>

              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                required
              ></v-text-field>

              <v-text-field
                v-model="confirmPassword"
                label="Confirm Password"
                type="password"
                required
              ></v-text-field>

              <v-alert v-if="errorMessage" type="error" class="mb-3">
                {{ errorMessage }}
              </v-alert>

              <v-btn color="primary" type="submit" block>Sign Up</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      errorMessage: "",
    };
  },
  methods: {
    handleSignup() {
      if (!this.fullName || !this.email || !this.password || !this.confirmPassword) {
        this.errorMessage = "All fields are required.";
        return;
      }

      if (this.password !== this.confirmPassword) {
        this.errorMessage = "Passwords do not match.";
        return;
      }

      this.errorMessage = "";
      console.log("Signing up with:", this.fullName, this.email, this.password);
      // هنا يمكنك إرسال البيانات إلى API للتسجيل
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
