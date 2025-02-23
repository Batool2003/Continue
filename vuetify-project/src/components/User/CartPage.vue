<template>
    <v-container>
      <v-row>
        <v-col v-for="item in cartItems" :key="item.id" cols="12" sm="6" md="4">
          <v-card>
            <v-card-title>{{ item.name }}</v-card-title>
            <v-card-subtitle>{{ item.price }} ج.م</v-card-subtitle>
            <v-card-text>{{ item.description }}</v-card-text>
  
            <!-- تعديل الكمية -->
            <v-row>
              <v-col cols="6">
                <v-btn @click="decreaseQuantity(item)">-</v-btn>
                <span>{{ item.quantity }}</span>
                <v-btn @click="increaseQuantity(item)">+</v-btn>
              </v-col>
              <v-col cols="6">
                <v-btn color="red" @click="removeFromCart(item)">حذف</v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
  
      <!-- إجمالي السلة -->
      <v-divider></v-divider>
      <v-row>
        <v-col>
          <v-btn color="primary" @click="checkout">إتمام الشراء</v-btn>
        </v-col>
        <v-col class="text-right">
          <v-subheader>الإجمالي: {{ totalPrice }} ج.م</v-subheader>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import { useCartStore } from '@/store/cart'; // تأكد من المسار الصحيح للملف
  
  export default {
    data() {
      return {};
    },
    computed: {
      cartItems() {
        const cartStore = useCartStore();
        return cartStore.cartItems;
      },
      totalPrice() {
        return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      },
    },
    methods: {
      increaseQuantity(item) {
        const cartStore = useCartStore();
        cartStore.increaseQuantity(item);
      },
      decreaseQuantity(item) {
        const cartStore = useCartStore();
        cartStore.decreaseQuantity(item);
      },
      removeFromCart(item) {
        const cartStore = useCartStore();
        cartStore.removeProduct(item);
      },
      checkout() {
        alert('إتمام الشراء');
      },
    },
  };
  </script>
  

  
  