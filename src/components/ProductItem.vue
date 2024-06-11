<template>
  <div class="border rounded-lg p-4 flex flex-col items-center">
    <img :src="product.image" alt="Product Image" class="w-36 h-36 object-cover mb-4" />
    <h3 class="text-lg font-bold mb-2">{{ product.name }}</h3>
    <p class="text-gray-700 mb-2">{{ product.price }} ₽</p>
    <button @click="addToCart" class="bg-blue-500 text-white py-2 px-4 rounded">Добавить в корзину</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

const addToCart = () => {
  console.log(`Product added to cart: ${props.product.name}`);
};
</script>

<style scoped>
</style>