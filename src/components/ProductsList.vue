<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-screen-lg ">
      <ProductItem v-for="product in products" :key="product.id" :product="product" />
    </div>
</template>

<script setup>
import ProductItem from './ProductItem.vue';

defineProps({
  products: {
    type: Array,
    required: true
  }
})

</script>

<style scoped>
</style>