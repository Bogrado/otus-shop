<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4 text-center">Корзина</h1>

    <div v-if="loading" class="text-center">
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
<!--          <OrderSummary-->
<!--            :total-price="totalPrice"-->
<!--          >-->
<!--            <template #header>-->
<!--              <div class="text-lg font-bold mb-4">Ваша корзина</div>-->
<!--            </template>-->
<!--            <template #body>-->
<!--              <div class="text-gray-700 mb-2">Товаров: {{ totalItems }}</div>-->
<!--              <div class="flex justify-between items-center mb-2">-->
<!--                <span>Товары:</span>-->
<!--                <span class="font-bold">{{ totalPrice }} ₽</span>-->
<!--              </div>-->
<!--            </template>-->
<!--            <template #footer>-->
<!--              <button-->
<!--                class="bg-gray-700 text-white py-2 px-4 rounded hover:bg-green-500 transition duration-300 active:bg-green-700 focus:outline-none w-full"-->
<!--              >-->
<!--                Перейти к оформлению-->
<!--              </button>-->
<!--            </template>-->
<!--          </OrderSummary>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useCartStore } from '@/stores/cart/cartStore.js'
import AppPreloader from '@/components/AppPreloader.vue'
import CartProductsList from '@/components/CartProductsList.vue'
import OrderSummary from '@/components/AppSummary.vue'
import { useLoadingStore } from '@/stores/loadingStore.js'

defineProps({
  loading: {
    type: Boolean,
    required: true}
})

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
