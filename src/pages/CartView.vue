<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4 text-center">Корзина</h1>

    <div v-if="loadingStore.loading" class="text-center">
      <AppPreloader />
    </div>

    <div v-else v-auto-animate>
      <div v-if="cartStore.products.length === 0" class="text-center text-gray-700">
        Ваша корзина пуста.
      </div>

      <div v-else>
        <div class="max-w-screen-lg mx-auto flex flex-col lg:flex-row lg:space-x-8">
          <!-- Левая колонка - товары в корзине -->
          <CartProductsList :products="products" />
          <!-- Правая колонка - информация о заказе -->
          <OrderSummary :total-price="totalPrice" :total-items="totalItems" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useCartStore } from '@/stores/cart/cartStore.js'
import { useLoadingStore } from '@/stores/loadingStore.js'
import AppPreloader from '@/components/AppPreloader.vue'
import CartProductsList from '@/components/CartProductsList.vue'
import OrderSummary from '@/components/OrderSummary.vue'

const cartStore = useCartStore()
const loadingStore = useLoadingStore()
const products = computed(() => cartStore.products)
const totalPrice = computed(() => cartStore.totalPrice)
const totalItems = computed(() => cartStore.totalItems)
onMounted(() => {
  cartStore.loadCartProducts()
})
</script>

<style scoped></style>
