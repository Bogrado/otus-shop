<template>
  <div
    class="relative border rounded-lg p-4 flex flex-col items-center hover:-translate-y-2 hover:shadow-xl transition bg-white group"
  >
    <div class="relative w-52 h-52 flex items-center justify-center p-2">
      <img :src="product.image" alt="Product Image" class="w-full h-full object-contain" />
      <button class="absolute top-0 right-0 bg-white p-1 rounded-md shadow hover:shadow-md">
        <like-icon class="w-6 h-6 hover:fill-gray-700" />
      </button>
      <button
        class="absolute bottom-0 left-0 w-full bg-black bg-opacity-40 text-white py-1 text-center opacity-0 group-hover:opacity-70 transition-opacity duration-300 backdrop-blur-sm hover:bg-opacity-75 active:bg-opacity-90"
      >
        Быстрый просмотр
      </button>
    </div>
    <div class="text-center">
      <h3 class="text-lg font-bold mb-1 line-clamp-1 text-ellipsis overflow-hidden">{{ product.title }}</h3>
      <p class="text-lg font-bold text-gray-700">{{ product.price }} ₽</p>
      <p class="text-sm text-gray-500">{{ product.category }}</p>
    </div>
    <div class="flex items-center mt-2 space-x-2">
      <star-icon class="w-4 h-4" />
      <p class="text-gray-500">{{ product.rating.rate }} • {{ product.rating.count }} оценок</p>
    </div>
    <div v-auto-animate class="mt-4">
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
  </div>
</template>

<script setup>
import StarIcon from '@/components/icons/StarIcon.vue'
import LikeIcon from '@/components/icons/LikeIcon.vue'
import { computed } from 'vue'
import { useCartStore } from '@/stores/cartStore.js'
import QuantityManager from '@/components/QuantityManager.vue'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['addToCart', 'removeFromCart'])

const cartStore = useCartStore()
const isInCart = computed(() => cartStore.itemIds.includes(props.product.id))
const quantity = computed(() => cartStore.itemQuantity(props.product.id))
const handleAddToCart = () => emit('addToCart', props.product.id)
const handleRemoveFromCart = () => emit('removeFromCart', props.product.id)
</script>

<style scoped></style>
