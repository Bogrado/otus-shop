<template>
  <div
    class="border rounded-lg p-4 flex flex-col items-center hover:-translate-y-2 hover:shadow-xl transition"
  >
    <img :src="product.image" alt="Product Image" class="w-36 h-36 object-cover mb-4" />
    <h3 class="text-lg font-bold mb-2">{{ product.name }}</h3>
    <p class="text-gray-700 mb-2">{{ product.price }} ₽</p>
    <button @click="handleAddToCart" class="bg-blue-500 text-white py-2 px-4 rounded">
      Добавить в корзину
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['addToCart'])

const handleAddToCart = () => emit('addToCart', props.product.id)
</script>

<style scoped></style>
