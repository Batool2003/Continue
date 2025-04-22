<template>
  <v-container class="mt-15">

    <h2 class="title">🛒 Shopping cart</h2>

    <v-list v-if="cart.length">
      <v-list-item v-for="item in cart" :key="item.id">
        <v-list-item-content>
          <v-list-item-title>{{ item.title }} (x{{ item.quantity }})</v-list-item-title>
          <v-list-item-subtitle class="price">Price: {{ item.price }} $</v-list-item-subtitle>
        </v-list-item-content>

        <v-btn color="accent" @click="removeFromCart(item.id)">❌</v-btn>
      </v-list-item>
    </v-list>

    <v-alert v-if="cart.length" type="success" color="amber lighten-4" class="total-price">
  🏷️ Total: {{ totalPrice }} $
</v-alert>


    <v-alert v-else type="info" color="accent">Cart empty</v-alert>

    <v-btn color="error" @click="clearCart" v-if="cart.length">Empty cart</v-btn>
  </v-container>
</template>

<script>
import { useCartStore } from '@/store/cart';
import { computed } from 'vue';

export default {
  setup() {
    const cartStore = useCartStore();
    const cart = computed(() => cartStore.cart);

    const totalPrice = computed(() => 
      cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
    );

    return {
      cart,
      removeFromCart: cartStore.removeFromCart,
      clearCart: cartStore.clearCart,
      totalPrice
    };
  }
};
</script>

<style>
.title {
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 30px;
}
.price {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 15px;
}
.total-price {
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
  padding: 10px;
}
</style>
