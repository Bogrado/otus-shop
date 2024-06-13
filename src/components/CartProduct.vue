<script setup>
import LikeIcon from '@/components/icons/LikeIcon.vue'
import DeleteIcon from '@/components/icons/DeleteIcon.vue'
import QuantityManager from '@/components/QuantityManager.vue'
</script>

<template>
  <div class="border-b py-4 flex flex-col md:flex-row justify-between items-start md:items-center">
    <div class="flex items-center">
      <img src="https://via.placeholder.com/150" alt="Product Image" class="w-24 h-24 object-cover" />
      <div class="ml-4">
        <h3 class="text-lg font-bold">Название товара</h3>
        <p class="text-gray-700">Категория: название категории</p>
        <p class="text-gray-700">Рейтинг: цифра</p>
        <p class="text-gray-700">Количество оценок: цифра</p>
        <div class="flex items-center mt-2 space-x-2">
          <button>
            <like-icon class="hover:fill-gray-700" />
          </button>
          <button>
            <delete-icon class="hover:fill-gray-700" />
          </button>
        </div>
      </div>
    </div>

    <div class="flex flex-col md:flex-row items-start md:items-center mt-4 md:mt-0 md:ml-auto">
      <div class="text-right md:text-left mb-2 md:mb-0 md:mr-8">
        <p class="font-bold">цена ₽</p>
      </div>
      <quantity-manager />
    </div>
  </div>
</template>

<style scoped>

</style>