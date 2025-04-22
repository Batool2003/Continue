<template>
  <v-container class="fill-height d-flex align-center justify-center" style="background-color: #F0F0F0;">
    <v-card class="pa-6" width="400" elevation="10">
      <v-card-title class="text-center text-h5" style="color: #D84315;">
        Create Account
      </v-card-title>
      <v-card-text>
        <v-form @submit.prevent="registerUser">
          <v-text-field
            v-model="fullName"
            label="Full Name"
            type="text"
            outlined
            dense
            class="mb-3"
            color="#D4AF37"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            label="Email"
            type="email"
            outlined
            dense
            class="mb-3"
            color="#D4AF37"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            outlined
            dense
            class="mb-3"
            color="#D4AF37"
            required
          ></v-text-field>
          <v-text-field
            v-model="confirmPassword"
            label="Confirm Password"
            type="password"
            outlined
            dense
            class="mb-3"
            color="#D4AF37"
            required
          ></v-text-field>
          <v-btn :loading="isLoading" block color="#2C3E50" dark class="mt-3" type="submit">
            Create Account
          </v-btn>
          <v-alert v-if="errorMessage" type="error" class="mt-3">
            {{ errorMessage }}
          </v-alert>
          <v-alert v-if="successMessage" type="success" class="mt-3">
            {{ successMessage }}
          </v-alert>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const fullName = ref("");
    const email = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    const isLoading = ref(false);
    const errorMessage = ref("");
    const successMessage = ref("");

    const registerUser = async () => {
      // التحقق من صحة البيانات
      if (!fullName.value || !email.value || !password.value || !confirmPassword.value) {
        errorMessage.value = "All fields are required!";
        return;
      }

      if (password.value !== confirmPassword.value) {
        errorMessage.value = "Passwords do not match!";
        return;
      }

      // مسح الرسائل السابقة
      errorMessage.value = "";
      successMessage.value = "";
      isLoading.value = true;

      try {
        const response = await fetch("https://fakestoreapi.com/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: fullName.value,
            email: email.value,
            password: password.value,
          }),
        });

        if (!response.ok) throw new Error("Registration failed. Try again.");

        const data = await response.json();
        successMessage.value = "Account created successfully!";
        console.log("User registered:", data);

        // مسح الحقول بعد النجاح
        fullName.value = "";
        email.value = "";
        password.value = "";
        confirmPassword.value = "";
      } catch (error) {
        errorMessage.value = error.message;
      }

      isLoading.value = false;
    };

    return {
      fullName,
      email,
      password,
      confirmPassword,
      isLoading,
      errorMessage,
      successMessage,
      registerUser,
    };
  },
};
</script>

<style scoped>
.v-text-field input {
  border-color: #D4AF37 !important;
}
</style>

