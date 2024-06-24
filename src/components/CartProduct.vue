<script setup>
import LikeIcon from '@/components/icons/LikeIcon.vue'
import DeleteIcon from '@/components/icons/DeleteIcon.vue'
import QuantityManager from '@/components/QuantityManager.vue'
import { useCartStore } from '@/stores/cart/cartStore.js'
import { computed } from 'vue'
import StarIcon from '@/components/icons/StarIcon.vue'

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
      <div
        class="w-32 h-32 flex items-center justify-center border border-shadow shadow-md rounded-lg p-2 min-w-32 max-w-32 bg-white">
        <img :src="product.image" alt="Product Image" class="w-full h-full object-contain" />
      </div>
      <div class="ml-4">
        <h3 class="text-lg font-bold">{{ product.title }}</h3>
        <p class="text-gray-700">Категория: {{ product.category }}</p>
        <p class="text-gray-700 flex items-center">
          Рейтинг: {{ product.rating ? product.rating.rate : 0 }}
          <star-icon class="w-4 h-4" />
        </p>
        <p class="text-gray-700">
          Количество оценок: {{ product.rating ? product.rating.count : 0 }}
        </p>
        <div class="flex items-center mt-2 space-x-2">
          <button>
            <like-icon class="hover:fill-gray-700 transition duration-300" />
          </button>
          <button @click="emit('ClickDelete')">
            <delete-icon class="hover:fill-gray-700 transition duration-300" />
          </button>
        </div>
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
