<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-screen-lg"
    v-auto-animate="{ duration: 500 }"
  >
    <ProductItem
      v-for="product in products"
      :key="product.id"
      :product="product"
      @add-to-cart="addItem"
    />
  </div>
</template>

<script setup>
import ProductItem from './ProductItem.vue'
import { useCart } from '@/composables/useCart'

defineProps({
  products: {
    type: Array,
    required: true
  }
})

const { addItem } = useCart()
</script>

<style scoped></style>
