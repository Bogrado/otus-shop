<script setup>
import CartProduct from '@/components/CartProduct.vue'
import { decreaseQuantity, increaseQuantity, removeFromCart } from '@/utils/cartUtils.js'


defineProps({
  products: {
    type: Array,
    required: true
  }
})

</script>

<template>
  <div class="flex-1">
    <cart-product
      v-for="product in products"
      :key="product.id"
      :product="product"
      @click-increase="increaseQuantity(product.id)"
      @click-decrease="decreaseQuantity(product.id)"
      @click-delete="removeFromCart(product.id)"
    />
  </div>
</template>
