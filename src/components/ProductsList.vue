<template>
  <div class="flex justify-center items-center">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-screen-lg ">
      <ProductItem v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ProductItem from './ProductItem.vue';

const products = ref([]);

onMounted(() => {
  products.value = [
    { id: 1, name: 'Продукт 1', price: 1000, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Продукт 2', price: 1500, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Продукт 3', price: 2000, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Продукт 1', price: 1000, image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Продукт 2', price: 1500, image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Продукт 3', price: 2000, image: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Продукт 2', price: 1500, image: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Продукт 3', price: 2000, image: 'https://via.placeholder.com/150' }
  ];
});
</script>

<style scoped>
</style>