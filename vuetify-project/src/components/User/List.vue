<template>
  <v-container>
    <!-- قائمة المنتجات -->
    <v-row>
      <v-col
        v-for="product in filteredProducts"
        :key="product.id"
        cols="12" sm="6" md="4"
      >
        <v-card>
          <v-card-title>{{ product.name }}</v-card-title>
          <v-card-subtitle>{{ product.price }} ج.م</v-card-subtitle>
          <v-card-text>{{ product.description }}</v-card-text>
          <v-btn @click="addToCart(product)">إضافة إلى السلة</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useCartStore } from '@/store/cart'; // تأكد من المسار الصحيح للملف

export default {
  data() {
    return {
      searchQuery: '',
      filter: null,
      sortBy: null,
      filters: ['الفئة 1', 'الفئة 2', 'الفئة 3'],
      sortOptions: ['السعر: من الأقل إلى الأعلى', 'السعر: من الأعلى إلى الأقل'],
      products: [
        { id: 1, name: 'منتج 1', price: 100, description: 'وصف المنتج 1' },
        { id: 2, name: 'منتج 2', price: 200, description: 'وصف المنتج 2' },
        { id: 3, name: 'منتج 3', price: 150, description: 'وصف المنتج 3' },
      ],
    };
  },
  computed: {
    filteredProducts() {
      let filtered = this.products;

      if (this.searchQuery) {
        filtered = filtered.filter(product =>
          product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }

      if (this.filter) {
        filtered = filtered.filter(product => product.category === this.filter);
      }

      if (this.sortBy) {
        if (this.sortBy === 'السعر: من الأقل إلى الأعلى') {
          filtered.sort((a, b) => a.price - b.price);
        } else {
          filtered.sort((a, b) => b.price - a.price);
        }
      }

      return filtered;
    },
  },
  methods: {
    addToCart(product) {
      const cartStore = useCartStore();
      cartStore.addProduct(product); // إضافة المنتج إلى السلة
      this.$router.push('/cart'); // الانتقال إلى صفحة السلة
    },
  },
};
</script>
