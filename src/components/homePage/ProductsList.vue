<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 my-4">
    <ProductItem
      v-for="product in products"
      :key="product.id"
      :product="product"
      @add-to-cart="addItem"
      @remove-from-cart="removeItem"
      @navigate-to="navigateToProduct"
    />
  </div>
</template>

<script setup>
import ProductItem from './ProductItem.vue'
import { useCart } from '@/composables/useCart.js'
import { useProductStore } from '@/stores/product/productStore.js'

defineProps({
  products: {
    type: Array,
    required: true
  }
})

const { addItem, removeItem } = useCart()
const { navigateToProduct } = useProductStore()
</script>
