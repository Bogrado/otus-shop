<script setup>
import CartProduct from '@/components/CartProduct.vue'
import { useCart } from '@/composables/useCart.js'

defineProps({
  products: {
    type: Array,
    required: true
  }
})
const { addItem, removeItem, removeAllItemsWithId } = useCart()
</script>

<template>
  <div class="flex-1" v-auto-animate>
    <cart-product
      v-for="product in products"
      :key="product.id"
      :product="product"
      @click-increase="addItem(product.id)"
      @click-decrease="removeItem(product.id)"
      @click-delete="removeAllItemsWithId(product.id)"
    />
  </div>
</template>
