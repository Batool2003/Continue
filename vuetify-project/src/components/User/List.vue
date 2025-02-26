<template>
  <v-container>
    <!-- حقل البحث -->
    <v-text-field 
      v-model="search" 
      label="بحث عن منتج" 
      outlined 
      dense 
      rounded 
      color="primary" 
      class="my-3"
    ></v-text-field>

    <!-- الفلتر حسب الفئة -->
    <v-select
      v-model="selectedCategory"
      :items="categories"
      label="التصفية حسب الفئة"
      outlined
      dense
      clearable
      rounded
      color="secondary"
      class="my-3"
    ></v-select>

    <!-- الفلتر حسب السعر -->
    <v-select
      v-model="sortBy"
      :items="['السعر: من الأرخص إلى الأغلى', 'السعر: من الأغلى إلى الأرخص']"
      label="الفرز"
      outlined
      dense
      rounded
      color="secondary"
      class="my-3"
    ></v-select>

    <!-- عرض التحميل -->
    <v-row v-if="loading">
      <v-col cols="12" class="text-center">
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
      </v-col>
    </v-row>

    <!-- عرض الخطأ -->
    <v-row v-else-if="error">
      <v-col cols="12" class="text-center text-error">
        {{ error }}
      </v-col>
    </v-row>

    <!-- عرض المنتجات -->
    <v-row v-else>
      <v-col v-for="product in paginatedProducts" :key="product.id" cols="12" sm="6" md="4">
        <v-card class="pa-4" rounded>
          <v-img :src="product.image" height="300px" cover></v-img>
          <v-card-title>{{ product.title }}</v-card-title>
          <v-card-subtitle>{{ product.price }} $</v-card-subtitle>
          <v-card-actions>
            <!-- زر إضافة إلى السلة -->
            <v-btn 
  variant="outlined"
  color="accent" 
  rounded 
  class="btn-hover"
  @click="addToCart(product)"
>
  Add to cart
</v-btn>


            <!-- زر تفاصيل المنتج -->
            <v-btn 
            variant="outlined"
              color="secondary" 
              rounded 
              class="btn-hover" 
              :to="`/product/${product.id}`"
            >
            Product details
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- التصفح بين الصفحات -->
    <v-pagination
      v-model="currentPage"
      :length="totalPages"
      circle
      class="my-4"
    ></v-pagination>
  </v-container>
</template>

<script>
import { computed, ref, onMounted } from 'vue';
import { useProductStore } from '@/store/product';
import { useCartStore } from '@/store/cart';

export default {
  setup() {

// const cartStore = useCartStore();
// const addToCart = (product) => {
//   cartStore.addToCart(product);
//   console.log("تمت إضافة المنتج:", product);
// };

    const productStore = useProductStore();
    const cartStore = useCartStore();
    // console.log("تمت إضافة المنتج:", product);
    const search = ref('');
    const selectedCategory = ref(null);
    const sortBy = ref(null);
    const currentPage = ref(1);
    const itemsPerPage = 6;

    onMounted(() => {
      productStore.fetchProducts();
    });

    const loading = computed(() => productStore.loading);
    const error = computed(() => productStore.error);
    const products = computed(() => productStore.products);

    const categories = computed(() => [...new Set(products.value.map(p => p.category))]);

    const filteredProducts = computed(() => {
      let filtered = products.value.filter(p => p.title.toLowerCase().includes(search.value.toLowerCase()));

      if (selectedCategory.value) {
        filtered = filtered.filter(p => p.category === selectedCategory.value);
      }

      if (sortBy.value === 'السعر: من الأرخص إلى الأغلى') {
        filtered.sort((a, b) => a.price - b.price);
      } else if (sortBy.value === 'السعر: من الأغلى إلى الأرخص') {
        filtered.sort((a, b) => b.price - a.price);
      }

      return filtered;
    });

    const totalPages = computed(() => Math.ceil(filteredProducts.value.length / itemsPerPage));

    const paginatedProducts = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      return filteredProducts.value.slice(start, start + itemsPerPage);
    });

    const addToCart = (product) => {
      cartStore.addToCart(product);
    };

    return {
      search,
      selectedCategory,
      categories,
      sortBy,
      currentPage,
      totalPages,
      paginatedProducts,
      addToCart,
      loading,
      error,
    };
  }
};
</script>

<style>
.btn-hover{
  background-color: ;
}
</style>
