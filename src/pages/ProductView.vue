<template>
  <div class="container mx-auto p-4" v-auto-animate>
    <div v-if="loading" class="flex justify-center items-center h-screen">
      <AppPreloader />
    </div>
    <div class="max-w-screen-lg mx-auto mt-4" v-else>
      <h1 class="text-3xl font-bold mb-4 w-1/3 mx-auto text-center">{{ product.title }}</h1>

      <div class="container mx-auto p-4">
        <div class="flex space-x-4">
          <!-- Левая колонка с изображением продукта -->
          <div class="w-96 h-96 bg-white p-4 rounded-lg shadow-md ">
            <img :src="product.image" alt="Product Image" class="w-full h-full object-contain rounded-lg" />
          </div>
          <!-- Центральная колонка с информацией о продукте -->
          <div class="w-1/3 bg-white p-4 rounded-lg shadow-md">
            <div class="text-gray-500 mb-4 flex items-center gap-1">
              {{ product.rating ? product.rating.rate : 0 }}
              <star-icon class="w-4" />
              {{ product.rating ? product.rating.count : 0 }} оценок
            </div>
            <div class="mb-4">
              <div class="flex justify-between">
                <span class="text-gray-500">Категория</span>
                <span>{{ product.category }}</span>
              </div>
            </div>
            <div>
              <h1 class="text-lg font-bold mb-4 text-gray-500">Description</h1>
              <p>{{ product.description }}</p>
            </div>
          </div>
          <app-summary class="bg-white p-4 shadow">
            <template #header>
              <div class="text-lg font-bold mb-4">{{ product.title }}</div>
            </template>
            <template #body>
              <div class="text-lg font-bold mb-4">{{ product.price }} ₽</div>
            </template>
            <template #footer>
              <div v-auto-animate class="mt-4" @click.stop>
                <div
                  v-if="isInCart"
                  class="border-2 border-blue-600 text-blue-600 py-0.5 px-6 rounded-2xl hover:border-blue-900 hover:text-blue-900 hover:bg-blue-100 transition duration-300 min-w-40 flex justify-center items-center">
                  <quantity-manager
                    :quantity="quantity"
                    @on-click-decrease="handleRemoveFromCart"
                    @on-click-increase="handleAddToCart"
                  />
                </div>
                <button
                  v-else
                  @click="handleAddToCart"
                  class="border-2 border-blue-600 text-blue-600 py-1.5 px-6 rounded-2xl hover:border-blue-900 hover:text-blue-900 hover:bg-blue-100 transition duration-300 active:bg-green-700 min-w-40 flex justify-center items-center"
                >
                  Купить
                </button>
              </div>
            </template>
          </app-summary>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed, onMounted } from 'vue'
import { useProductStore } from '@/stores/product/productStore'
import AppPreloader from '@/components/AppPreloader.vue'
import StarIcon from '@/components/icons/StarIcon.vue'
import AppSummary from '@/components/AppSummary.vue'
import QuantityManager from '@/components/QuantityManager.vue'
import { useCartStore } from '@/stores/cart/cartStore.js'

defineProps({
  loading: {
    type: Boolean,
    required: true
  }
})

const route = useRoute()
const productStore = useProductStore()
const product = computed(() => productStore.getProduct)

const cartStore = useCartStore()
const isInCart = computed(() => cartStore.itemIds.includes(product.value.id))
const quantity = computed(() => cartStore.itemQuantity(product.value.id))

onMounted(() => {
  const productId = route.params.id
  productStore.loadProduct(productId)
})
</script>