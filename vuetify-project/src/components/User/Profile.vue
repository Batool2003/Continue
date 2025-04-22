<template>
  <!-- خلفية خفيفة وبطاقة في المنتصف -->
  <div class="d-flex align-center justify-center fill-height" style="background-color:#f1f1f0;">
    <v-card class="pa-15" max-width="600px" color="#ffffff" elevation="6">
      <!-- القسم العلوي: صورة + اسم + وصف -->
      <div class="d-flex align-center mb-4">
        <v-avatar size="80" class="mr-4">
          <v-img :src="profile.image" />
        </v-avatar>
        <div>
          <div class="text-h5 font-weight-bold mb-1">{{ profile.name }}</div>
          <div class="text-subtitle-1 grey--text">{{ profile.bio }}</div>
        </div>
      </div>

      <v-divider></v-divider>

      <!-- معلومات العمل -->
      <div class="mt-4">
        <div class="text-h6 font-weight-bold mb-2">Business Overview</div>
        <ul>
          <li><strong>Store Name:</strong> {{ profile.storeName }}</li>
          <li><strong>Business Type:</strong> {{ profile.businessType }}</li>
          <li><strong>Revenue:</strong> {{ profile.revenue }}</li>
          <li><strong>Experience:</strong> {{ profile.experience }}</li>
          <li><strong>Main Products:</strong> {{ profile.mainProducts }}</li>
        </ul>
      </div>

      <v-divider class="my-4"></v-divider>

      <!-- الاهتمامات / الاحتياجات -->
      <div>
        <div class="text-h6 font-weight-bold mb-2">Business Needs</div>
        <ul>
          <li v-for="(need, index) in profile.needs" :key="index">
            {{ need }}
          </li>
        </ul>
      </div>

      <v-divider class="my-4"></v-divider>

      <!-- نقاط الألم -->
      <div>
        <div class="text-h6 font-weight-bold mb-2">Challenges</div>
        <ul>
          <li v-for="(pain, index) in profile.challenges" :key="index">
            {{ pain }}
          </li>
        </ul>
      </div>

      <v-divider class="my-4"></v-divider>

      <!-- الحلول المقترحة -->
      <div>
        <div class="text-h6 font-weight-bold mb-2">Proposed Solutions</div>
        <ul>
          <li v-for="(solution, index) in profile.solutions" :key="index">
            {{ solution }}
          </li>
        </ul>
      </div>
    </v-card>
  </div>
</template>

<script>
// ✅ الطريقة الأولى: باستخدام import (تأكد أن الملف موجود في المجلد الصحيح)
import profileImage from '@/assets/name.jpg';

export default {
  name: 'EcommerceOwnerProfile',
  data() {
    return {
      profile: {
        // ✅ الطريقة الثانية: يمكن تجربة require إذا لم يعمل import
        image: profileImage, // أو: require('@/assets/name.jpg')

        name: 'John Carter',
        bio: 'Entrepreneur & founder of a successful online store',
        storeName: 'Tech & Fashion Hub',
        businessType: 'E-commerce Store',
        revenue: '$250K annually',
        experience: '5+ years in online retail',
        mainProducts: 'Electronics, Apparel, Accessories',
        needs: [
          'Effective digital marketing strategies',
          'Reliable payment gateways',
          'Efficient inventory management',
          'Customer retention & loyalty programs'
        ],
        challenges: [
          'High competition in the online market',
          'Managing product returns and refunds',
          'Optimizing logistics and delivery',
          'Ensuring secure transactions'
        ],
        solutions: [
          'Advanced SEO and social media campaigns',
          'Integration with top-tier payment solutions',
          'Automated stock and order tracking system',
          'AI-powered fraud detection for transactions'
        ]
      }
    };
  }
}
</script>

<style scoped>
/* لضبط ارتفاع الصفحة بالكامل وجعل البطاقة في المنتصف رأسياً */
.fill-height {
  height: 100vh;
  padding: 80px;
  background-color: aliceblue;
}
</style>
