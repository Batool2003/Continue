
// stores/cart.js
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [],
  }),
  actions: {
    // إضافة منتج إلى السلة
    addProduct(product) {
      // تحقق إذا كان المنتج موجودًا بالفعل في السلة، وإذا كان كذلك، قم بزيادة الكمية
      const existingProduct = this.cartItems.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        this.cartItems.push({ ...product, quantity: 1 });
      }
    },
    
    // إزالة منتج من السلة
    removeProduct(product) {
      const index = this.cartItems.findIndex(item => item.id === product.id);
      if (index !== -1) {
        this.cartItems.splice(index, 1);
      }
    },
    
    // زيادة الكمية للمنتج
    increaseQuantity(product) {
      const item = this.cartItems.find(item => item.id === product.id);
      if (item) {
        item.quantity++;
      }
    },
    
    // تقليل الكمية للمنتج
    decreaseQuantity(product) {
      const item = this.cartItems.find(item => item.id === product.id);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
  },
});
