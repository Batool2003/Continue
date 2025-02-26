import { defineStore } from 'pinia';

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchProducts() {
      this.loading = true;
      this.error = null;
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        this.products = await response.json();
      } catch (err) {
        this.error = 'فشل في جلب المنتجات';
        console.error(err);
      } finally {
        this.loading = false;
      }
    },
  },
});
