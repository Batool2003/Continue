<template>
    <v-container>
      <v-card>
        <v-card-title>{{ product.name }}</v-card-title>
        <v-card-subtitle>{{ product.price }} ج.م</v-card-subtitle>
        <v-card-text>{{ product.description }}</v-card-text>
  
        <!-- التقييمات -->
        <v-rating
          v-model="rating"
          :readonly="true"
          :max="5"
          dense
        ></v-rating>
        <v-chip label>{{ ratingsCount }} تقييمات</v-chip>
  
        <!-- زر "إضافة إلى السلة" -->
        <v-btn @click="addToCart(product)">إضافة إلى السلة</v-btn>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        product: { id: 1, name: 'منتج 1', price: 100, description: 'وصف المنتج 1', rating: 4 },
        rating: 4,
        ratingsCount: 20,
      };
    },
    methods: {
      addToCart(product) {
        console.log('تم إضافة المنتج إلى السلة:', product);
      },
    },
  };
  </script>
  
