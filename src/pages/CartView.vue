<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4 text-center">Корзина</h1>

    <div v-if="loadingStore.loading" class="text-center">
      <AppPreloader />
    </div>

    <div v-else>
      <div v-if="cartStore.products.length === 0" class="text-center text-gray-700">
        Ваша корзина пуста.
      </div>

      <div v-else>
        <div class="max-w-screen-lg mx-auto flex flex-col lg:flex-row lg:space-x-8">
          <!-- Левая колонка - товары в корзине -->
          <CartProductsList :products="cartStore.products" />
          <!-- Правая колонка - информация о заказе -->
          <OrderSummary />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useCartStore } from '@/stores/cartStore.js'
import { useLoadingStore } from '@/stores/loadingStore.js'
import AppPreloader from '@/components/AppPreloader.vue'
import CartProductsList from '@/components/CartProductsList.vue'
import OrderSummary from '@/components/OrderSummary.vue'

const cartStore = useCartStore()
const loadingStore = useLoadingStore()

onMounted(() => {
  cartStore.loadCartProducts()
})
</script>

<style scoped></style>
