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
      <v-col cols="13" v-if="product">
        <v-card>
          <v-img :src="product.image" height="600px" cover></v-img>
          <v-card-title>{{ product.title }}</v-card-title>
          <v-card-subtitle>{{ product.price }} $</v-card-subtitle>
          <v-card-text>
            <p>{{ product.description }}</p>
          </v-card-text>

          <!-- زر "إضافة إلى السلة" -->
          <v-card-actions>
            <v-btn color="primary" @click="addToCart(product)">إضافة إلى السلة</v-btn>
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
    const product = computed(() => productStore.products.find(p => p.id === parseInt(productId)));

    // جلب البيانات إذا لم تكن موجودة
    onMounted(() => {
      if (!product.value && !loading.value) {
        productStore.fetchProducts();
      }
    });

    // إضافة المنتج إلى السلة
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

