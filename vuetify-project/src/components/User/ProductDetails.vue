<template>
  <v-container>
    <v-row v-if="loading">
      <v-col cols="12" class="text-center">
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
      </v-col>
    </v-row>

    <v-row v-else-if="error">
      <v-col cols="12" class="text-center text-error">
        {{ error }}
      </v-col>
    </v-row>

    <v-row v-else>
      <v-col cols="12" v-if="product">
        <v-card>
          <v-img :src="product.image" height="400px"></v-img>
          <v-card-title>{{ product.title }}</v-card-title>
          <v-card-subtitle color="">{{ product.price }} $</v-card-subtitle>
          
          <!-- تقييم المنتج بخمس نجوم -->
          <v-card-text>
            <!-- <v-rating :model-value="product.rating || 0" color="amber" dense half-increments readonly :length="5"></v-rating> -->
            <p>{{ product.description }}</p>
            <p>⭐⭐⭐⭐</p>
          </v-card-text>

          <v-card-actions>
            <v-btn variant="outlined" color="#D84315" rounded @click="addToCart(product)">
              Add to cart
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="12" v-else>
        <p class="text-center">المنتج غير موجود</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useProductStore } from '@/store/product';
import { useCartStore } from '@/store/cart';
import { useRoute } from 'vue-router';

export default {
  name: 'ProductDetails',
  setup() {
    const productStore = useProductStore();
    const cartStore = useCartStore();
    const route = useRoute();
    const productId = route.params.id;

    const loading = computed(() => productStore.loading);
    const error = computed(() => productStore.error);
    const product = computed(() => {
      const foundProduct = productStore.products.find(p => p.id === parseInt(productId));
      return foundProduct ? { ...foundProduct, rating: foundProduct.rating || 0 } : null;
    });

    onMounted(() => {
      if (!product.value && !loading.value) {
        productStore.fetchProducts();
      }
    });

    const addToCart = (product) => {
      cartStore.addToCart(product);
    };

    return {
      product,
      loading,
      error,
      addToCart
    };
  }
};
</script>
