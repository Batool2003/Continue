<template>
  <v-container class="mt-8">
    <!-- حقل البحث -->
    <v-text-field 
      v-model="search" 
      label="Search for a product" 
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
      label="Filter by category"
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
      :items="['Price: from cheapest to most expensive', 'Price: from most expensive to cheapest']"
      label="Sorting"
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
        <v-card class="pa-4 hover-card" rounded width="350">
          <!-- تأثير hover على الصورة -->
          <v-hover v-slot="{ isHovering, props }">
            <div class="image-container" v-bind="props">
              <v-img 
                :src="product.image" 
                height="250px" 
                contain 
                class="card-image"
                :class="{ 'hovered': isHovering }"
              ></v-img>

              <!-- التراكب عند التمرير -->
              <v-expand-transition>
                <div
                  v-if="isHovering"
                  class="price-overlay"
                >
                  ${{ product.price }}
                </div>
              </v-expand-transition>
            </div>
          </v-hover>

          <v-card-title>{{ product.title }}</v-card-title>
          <v-card-subtitle>{{ product.price }} $</v-card-subtitle>
          <v-card-actions class="d-flex gap-1.5">
            <v-btn 
              variant="outlined"
              color="accent" 
              rounded 
              class="btn-hover"
              @click="addToCart(product)"
            >
              Add to cart
            </v-btn>

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

  <v-footer>
  <v-card flat tile class="white--text py-12 px-5" width="100%" color="#2C3E50">
    <v-row>
      <v-col cols="12" xs="12" sm="6" md="4" class="pa-16">
        <div class="text-center">
          <!-- <strong color="#D84315">My Store</strong> -->
          <!-- <strong style="color: #D84315;">My Store</strong> -->
          <strong style="color: #D84315; font-size: 30px;">My Store</strong>

        </div>
        <v-card-text class="mt-2">
          <div class="text-center">
            Your go-to destination for the latest electronics and fashion.  
            High-quality products at unbeatable prices.
          </div>
        </v-card-text>
      </v-col>
      <v-col cols="12" xs="12" sm="6" md="2">
        <v-card-text class="white--text pt-0">
          <h3>Shop</h3>
        </v-card-text>
        <v-card-text class="grey--text"> Electronics </v-card-text>
        <v-card-text class="grey--text mt-n4"> Clothing </v-card-text>
        <v-card-text class="grey--text mt-n4"> Accessories </v-card-text>
        <v-card-text class="grey--text mt-n4"> Special Offers </v-card-text>
      </v-col>
      <v-col cols="12" xs="12" sm="6" md="2">
        <v-card-text class="white--text pt-0">
          <h3>Customer Service</h3>
        </v-card-text>
        <v-card-text class="grey--text"> Shipping & Delivery </v-card-text>
        <v-card-text class="grey--text mt-n4"> Payment Methods </v-card-text>
        <v-card-text class="grey--text mt-n4"> Order Tracking </v-card-text>
        <v-card-text class="grey--text mt-n4"> Returns & Refunds </v-card-text>
      </v-col>
      <v-col cols="12" xs="12" sm="6" md="4">
        <v-card-text class="white--text pt-0">
          <h3>Contact Us</h3>
        </v-card-text>
        <v-card-text class="grey--text"> My Store Inc. </v-card-text>
        <v-card-text class="grey--text mt-n4">
          123 Tech Street, Fashion District
        </v-card-text>
        <v-card-text class="grey--text mt-n4"> support@mystore.com </v-card-text>
        <v-card-text class="grey--text mt-n4"> +1 800 555 0199 </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</v-footer>

</template>

<script>
import { computed, ref, onMounted } from 'vue';
import { useProductStore } from '@/store/product';
import { useCartStore } from '@/store/cart';

export default {
  setup() {
    const productStore = useProductStore();
    const cartStore = useCartStore();
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

      if (sortBy.value === 'Price: from cheapest to most expensive') {
        filtered.sort((a, b) => a.price - b.price);
      } else if (sortBy.value === 'Price: from most expensive to cheapest') {
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

<style scoped>
/* زر تنسيق */
.v-btn {
  font-weight: bold;
}

/* تأثيرات الحقول عند التمرير */
.v-text-field, .v-select {
  transition: border 0.3s ease, box-shadow 0.3s ease;
}

.v-text-field:hover, .v-select:hover {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-color: #3f51b5; /* تغيير اللون عند التمرير */
}

/* تنسيق الصورة مع hover */
.image-container {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.card-image {
  transition: transform 0.3s ease-in-out;
}

.card-image.hovered {
  transform: scale(1.1); /* تكبير الصورة */
}

/* التراكب عند تمرير الماوس */
.price-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background:#d4af37c2 ;
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  padding: 10px;
}

/* تأثيرات عند التمرير على الأزرار */
.v-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.v-btn:active {
  transform: scale(0.95);
  transition: transform 0.1s ease;
}

/* تأثيرات على شريط التصفح بين الصفحات */
.v-pagination .v-btn:hover {
  background-color: #3f51b5;
  color: white;
  transform: scale(1.1);
  transition: all 0.3s ease;
}

/* تأثيرات الانزلاق بين المنتجات */
.v-slide-x-transition {
  transition: transform 0.5s ease-out;
}
</style>
