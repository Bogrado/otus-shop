<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4 text-center">Добро пожаловать в Otus Shop</h1>

    <div class="mb-4 max-w-screen-lg mx-auto">
      <app-search-bar v-model="searchQuery" />
    </div>

    <div class="max-w-screen-lg mx-auto">
      <products-list :products="filteredProducts" />
    </div>
  </div>
</template>

<script setup>
import ProductsList from '@/components/ProductsList.vue'
import AppSearchBar from '@/components/AppSearchBar.vue'
import { computed, onMounted, ref } from 'vue'

const products = ref([]);
const searchQuery = ref('');

const searchProducts = (products, query) => {
  if (!query) return products;
  return products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );
};

const filteredProducts = computed(() => searchProducts(products.value, searchQuery.value));

onMounted(() => {
  products.value = [
    { id: 1, name: 'Продукт 1', price: 1000, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Продукт 2', price: 1500, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Продукт 3', price: 2000, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Продукт 1', price: 1000, image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Продукт 2', price: 1500, image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Продукт 3', price: 2000, image: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Абоба 2', price: 1500, image: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Продукт 3', price: 2000, image: 'https://via.placeholder.com/150' }
  ];
});
</script>

<style scoped>
</style>
