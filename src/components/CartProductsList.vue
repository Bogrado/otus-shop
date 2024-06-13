<script setup>
import CartProduct from '@/components/CartProduct.vue'

const props = defineProps({
  products: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="flex-1">
    <cart-product v-for="product in props.products" :key="product.id" :product="product" />


  </div>
</template>

