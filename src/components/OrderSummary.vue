<script setup>
defineProps({
  totalPrice: {
    type: Number,
    required: true
  },
  totalItems: {
    type: Number,
    required: true
  }
})

</script>

<template>
  <div class="lg:w-1/3 lg:sticky lg:top-4 bg-gray-100 p-4 rounded-lg shadow-md h-max mt-8 lg:mt-0">
    <div class="text-lg font-bold mb-4">Ваша корзина</div>
    <div class="text-gray-700 mb-2">Товаров: {{ totalItems }}</div>
    <div class="flex justify-between items-center mb-2">
      <span>Товары:</span>
      <span class="font-bold">{{ totalPrice }} ₽</span>
    </div>

    <button
      class="bg-gray-700 text-white py-2 px-4 rounded hover:bg-green-500 active:bg-green-700 focus:outline-none w-full"
    >
      Перейти к оформлению
    </button>
  </div>
</template>

<style scoped></style>
