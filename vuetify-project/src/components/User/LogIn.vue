<template>
  <v-container class="fill-height d-flex align-center justify-center">
    <v-card class="pa-6" width="400" elevation="10">
      <v-card-title class="text-center text-h5">تسجيل دخول</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="handleLogin">
          <!-- تغيير النص من "Email" إلى "اسم المستخدم" -->
          <v-text-field v-model="name" label="اسم المستخدم" type="text" outlined dense required></v-text-field>
          
          <!-- تغيير النص من "Password" إلى "كلمة المرور" -->
          <v-text-field v-model="password" label="كلمة المرور" type="password" outlined dense required></v-text-field>
          
          <v-btn type="submit" block color="primary" class="mt-3">
            تسجيل دخول
          </v-btn>
          
          <v-alert v-if="error" type="error" class="mt-3">{{ error }}</v-alert>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script setup>
import { ref } from 'vue';  // استيراد ref من Vue
import { useRouter } from 'vue-router';  // استيراد useRouter من Vue Router

// تعريف المتغيرات
const name = ref('');  // هنا قمنا بتغيير email إلى name
const password = ref('');
const error = ref('');
const router = useRouter();  // استخدام Vue Router للوصول إلى الدوال الخاصة بالتوجيه

// دالة تسجيل الدخول
const handleLogin = async () => {
  error.value = '';  // إعادة تعيين الخطأ قبل إرسال الطلب

  const payload = {
    username: name.value,  // استخدام name بدلاً من email
    password: password.value,
  };

  try {
    // إرسال طلب إلى API للتأكد من بيانات المستخدم
    const response = await fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),  // إرسال بيانات المستخدم في الطلب
    });

    const data = await response.json();  // الحصول على الاستجابة من الـ API

    if (response.ok && data.token) {
      localStorage.setItem('userToken', data.token);  // حفظ التوكن في localStorage
      router.push('/');  // إعادة التوجيه إلى الصفحة الرئيسية (أو إلى أي مسار آخر)
      router.go(0);  // تحديث الصفحة لتحديث Navbar (أو أي مكون آخر يعتمد على حالة التوكن)
    } else {
      error.value = data.message || 'فشل في تسجيل الدخول. يرجى المحاولة مرة أخرى.';
    }
  } catch (err) {
    error.value = 'حدث خطأ. يرجى المحاولة مرة أخرى لاحقاً.';
  }
};
</script>
