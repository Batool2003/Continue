<template>hi</template>



<!-- <template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-card class="pa-5">
          <v-card-title class="text-h5 text-center">
            الملف الشخصي للمتجر
          </v-card-title>
          <v-divider></v-divider>

          <v-card-text class="text-center">
            <v-avatar size="100">
              <v-img src="https://randomuser.me/api/portraits/men/20.jpg" alt="Store Avatar"></v-img>
            </v-avatar>
            <h2 class="mt-3">{{ store.name }}</h2>
            <p class="text-grey-darken-1">{{ store.email }}</p>
            <v-chip class="mt-2" color="primary" label>{{ store.category }}</v-chip>
            <p class="mt-3"><v-icon>mdi-map-marker</v-icon> {{ store.address }}</p>
            <p><v-icon>mdi-phone</v-icon> {{ store.phone }}</p>
            <v-rating v-model="store.rating" readonly color="amber" dense></v-rating>
            <div class="mt-3 d-flex justify-center">
              <v-btn icon :href="store.social.facebook" target="_blank">
                <v-icon color="blue">mdi-facebook</v-icon>
              </v-btn>
              <v-btn icon :href="store.social.instagram" target="_blank">
                <v-icon color="purple">mdi-instagram</v-icon>
              </v-btn>
              <v-btn icon :href="store.social.twitter" target="_blank">
                <v-icon color="light-blue">mdi-twitter</v-icon>
              </v-btn>
              <v-btn icon :href="store.social.youtube" target="_blank">
                <v-icon color="red">mdi-youtube</v-icon>
              </v-btn>
              <v-btn icon :href="store.social.linkedin" target="_blank">
                <v-icon color="blue-darken-3">mdi-linkedin</v-icon>
              </v-btn>
            </div>
          </v-card-text>

          <v-card-actions class="justify-center">
            <v-btn color="primary" @click="editProfile">تحرير المعلومات</v-btn>
            <v-btn color="success" @click="viewProducts">عرض المنتجات</v-btn>
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
      store: {
        name: "متجر التقنية الحديثة",
        email: "store@example.com",
        category: "الإلكترونيات",
        address: "شارع الملك فهد، الرياض، السعودية",
        phone: "+966 50 123 4567",
        rating: 4.5,
        social: {
          facebook: "https://facebook.com/store",
          instagram: "https://instagram.com/store",
          twitter: "https://twitter.com/store",
          youtube: "https://youtube.com/store",
          linkedin: "https://linkedin.com/company/store",
        },
      },
    };
  },
  methods: {
    editProfile() {
      alert("فتح نافذة تعديل معلومات المتجر");
    },
    viewProducts() {
      alert("عرض قائمة المنتجات");
    },
  },
};
</script> -->
