<template>
  <div v-auto-animate>
    <h1 class="text-3xl font-bold mb-4 text-center">Оформление заказа</h1>
    <div v-if="createdSuccess" class="text-center text-gray-700">
      Заказ размещен, вернуться на главную
      <router-link to="/">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Вернуться на главную</button>
      </router-link>
    </div>
    <div v-else-if="cartStore.products.length === 0" class="text-center text-gray-700">
      Ваша корзина пуста.
    </div>
    <div v-else class="max-w-screen-lg mx-auto flex flex-col lg:flex-row lg:space-x-8">
      <!-- Левая колонка - информация о доставке -->
      <CheckoutForm />

      <!-- Правая колонка - информация о заказе -->
      <app-summary class="bg-white">
        <template #header>
          <div class="text-lg font-bold mb-4">Ваш заказ</div>
        </template>
        <template #body>
          <div class="space-y-4">
            <div class="flex justify-between">
              <span>Подытог</span>
              <span>{{ totalPrice }} ₽</span>
            </div>
            <div class="flex justify-between">
              <span>Доставка</span>
              <span>БЕСПЛАТНО</span>
            </div>
            <div class="flex justify-between font-bold text-lg">
              <span>Итого</span>
              <span>{{ totalPrice }} ₽</span>
            </div>
          </div>
        </template>
        <template #footer>
          <button
            @click="submitForm"
            :disabled="!isFormValid"
            class="w-full bg-gray-700 text-white py-2 rounded hover:bg-green-500 transition duration-300 active:bg-green-700 mt-4 disabled:bg-gray-300 disabled:cursor-not-allowed">
            Разместить заказ
          </button>
        </template>
      </app-summary>
    </div>
  </div>
</template>

<script setup>
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import AppSummary from '@/components/common/AppSummary.vue'
import CheckoutForm from '@/components/forms/CheckoutForm.vue'
import { useCartStore } from '@/stores/cart/cartStore.js'
import { computed } from 'vue'
import { useCheckout } from '@/composables/forms/useCheckout.js'
import { useOrderStore } from '@/stores/orderStore.js'

const { submitForm, isFormValid } = useCheckout()
const cartStore = useCartStore()
const orderStore = useOrderStore()
const createdSuccess = computed(() => orderStore.createdSuccess)
const totalPrice = computed(() => cartStore.totalPrice)
const router = useRouter()

watch(createdSuccess, (newVal) => {
  if (newVal) {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }
})
</script>
