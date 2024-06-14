<script setup>
import CartProduct from '@/components/CartProduct.vue'
import { useCart } from '@/composables/useCart.js'


defineProps({
  products: {
    type: Array,
    required: true
  }
})
const { updateQuantity, removeItem } = useCart()

</script>

<template>
  <div class="flex-1" v-auto-animate>
    <cart-product
      v-for="product in products"
      :key="product.id"
      :product="product"
      @click-increase="updateQuantity(product.id, 1)"
      @click-decrease="updateQuantity(product.id, -1)"
      @click-delete="removeItem(product.id)"
    />
  </div>
</template>
