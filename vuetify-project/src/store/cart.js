import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [],
  }),
  actions: {
    addToCart(product) {
      const item = this.cart.find((p) => p.id === product.id);
      if (item) {
        item.quantity++;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
      this.cart = [...this.cart]; // إجبار Pinia على التفاعل مع التغيير
    },
    removeFromCart(productId) {
      this.cart = this.cart.filter((item) => item.id !== productId);
    },
    clearCart() {
      this.cart = [];
    },
  },
});



