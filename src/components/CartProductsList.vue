<script setup>
import CartProduct from '@/components/CartProduct.vue'

defineProps({
  products: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="flex-1">
    <cart-product v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>
