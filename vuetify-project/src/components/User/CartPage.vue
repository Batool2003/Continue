<template>
  <v-container>
    <h2>🛒 سلة المشتريات</h2>
    
    <!-- عرض المنتجات في السلة -->
    <v-list v-if="cart.length">
      <v-list-item v-for="item in cart" :key="item.id">
        <v-list-item-content>
          <v-list-item-title>{{ item.title }} (x{{ item.quantity }})</v-list-item-title>
          <v-list-item-subtitle>السعر: {{ item.price }} $</v-list-item-subtitle>
        </v-list-item-content>
        
        <!-- زر حذف المنتج من السلة -->
        <v-btn color="red" @click="removeFromCart(item.id)">❌</v-btn>
      </v-list-item>
    </v-list>

    <!-- رسالة عند كون السلة فارغة -->
    <v-alert v-else type="info">السلة فارغة</v-alert>

    <!-- زر إفراغ السلة بالكامل -->
    <v-btn color="error" @click="clearCart" v-if="cart.length">إفراغ السلة</v-btn>
  </v-container>
</template>

<script>
import { useCartStore } from '@/store/cart';
import { computed } from 'vue';

export default {
  setup() {
    const cartStore = useCartStore();
    const cart = computed(() => cartStore.cart);

    return {
      cart,
      removeFromCart: cartStore.removeFromCart,
      clearCart: cartStore.clearCart
    };
  }
};
</script>
