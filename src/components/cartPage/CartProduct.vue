<script setup>
import QuantityManager from '@/components/common/QuantityManager.vue'
import { useCartStore } from '@/stores/cart/cartStore.js'
import { computed } from 'vue'
import CartProductBottomBar from '@/components/cartPage/CartProductBottomBar.vue'
import CartProductImage from '@/components/cartPage/CartProductImage.vue'
import CartProductBody from '@/components/cartPage/CartProductBody.vue'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['ClickDecrease', 'ClickIncrease', 'ClickDelete'])

const cartStore = useCartStore()
const quantity = computed(() => cartStore.itemQuantity(props.product.id))
const itemTotalAmount = computed(() => (quantity.value * props.product.price).toFixed(2))
</script>

<template>
  <div class="border-b py-4 flex flex-col md:flex-row justify-between items-start md:items-center">
    <div class="flex items-center">
      <cart-product-image :image="props.product.image" />
      <div class="ml-4">
        <cart-product-body :product="props.product" />
        <cart-product-bottom-bar @handle-delete-click="emit('ClickDelete')" />
      </div>
    </div>

    <div class="flex flex-col md:flex-row items-start md:items-center mt-4 md:mt-0 md:ml-auto">
      <div class="text-right md:text-left mb-2 md:mb-0 md:mr-8">
        <p class="font-bold">{{ itemTotalAmount }} ₽</p>
      </div>
      <quantity-manager
        :quantity="quantity"
        @on-click-decrease="emit('ClickDecrease')"
        @on-click-increase="emit('ClickIncrease')"
      />
    </div>
  </div>
</template>
