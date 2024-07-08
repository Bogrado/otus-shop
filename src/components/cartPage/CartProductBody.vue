<script setup>
import StarIcon from '@/components/icons/StarIcon.vue'

defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div>
    <h3 class="text-lg font-bold">{{ product.title }}</h3>
    <p class="text-gray-700">Категория: {{ product.category }}</p>
    <p class="text-gray-700 flex items-center">
      Рейтинг: {{ product.rating ? product.rating.rate : 0 }}
      <star-icon class="w-4 h-4" />
    </p>
    <p class="text-gray-700">
      Количество оценок: {{ product.rating ? product.rating.count : 0 }}
    </p>
  </div>
</template>
