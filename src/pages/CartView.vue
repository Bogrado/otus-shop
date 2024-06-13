<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4 text-center">Корзина</h1>

    <div v-if="loading" class="text-center">
      <AppPreloader />
    </div>

    <div v-else>
      <div v-if="false" class="text-center text-gray-700">
        <!--        заглушка для пустой корзины, пока не обращаю на это внимание-->
        Ваша корзина пуста.
      </div>

      <div v-else>
        <div class="max-w-screen-lg mx-auto flex flex-col lg:flex-row lg:space-x-8">
          <!-- Левая колонка -  товары в корзине -->
          <cart-products-list />
          <!-- Правая колонка - информация о заказе -->
          <order-summary />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppPreloader from '@/components/AppPreloader.vue'
import OrderSummary from '@/components/OrderSummary.vue'
import CartProductsList from '@/components/CartProductsList.vue'

defineProps({
  loading: {
    type: Boolean,
    required: false
  }
})
</script>

<style scoped></style>
