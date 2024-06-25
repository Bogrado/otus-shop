<script setup>
import { onMounted, watch } from 'vue'
import { useProductForm } from '@/composables/forms/useProductForm.js'
import { useApi } from '@/composables/useApi.js'

const props = defineProps({
  productId: {
    type: Number,
    required: false
  }
})

const emits = defineEmits(['closeModal', 'productSaved'])
const { state, error, v$, isEditing, submitForm, resetForm, setFormData } = useProductForm(emits)
const { getData } = useApi()

const loadProductData = async (id) => {
  if (id) {
    console.log('Ловлю ид из props:' + id)
    try {
      console.log('Ловлю ид из формы перед загрузкой:' + id)
      const productData = await getData?.(`items/${id}`)
      console.log('Product data loaded:', productData)
      setFormData?.(productData)
    } catch (err) {
      console.error('Error loading product data:', err)
    }
  } else {
    console.log('айдишника нету')
  }
}

watch(() => props.productId, (newId) => {
  console.log('Смотрю за изменением айди:' + newId)
  if (newId) {
    loadProductData(newId)
  }
})

onMounted(() => {
  console.log('монтирую с айди' + props.productId)
  if (props.productId) {
    loadProductData(props.productId)
  }
})
</script>

<template>
  <form @submit.prevent="submitForm" class="space-y-4 bg-gray-800 p-6 rounded shadow-lg w-96">
    <h2 class="text-white text-lg font-bold mb-4">{{ isEditing ? 'Редактировать запись' : 'Создать запись' }}</h2>
    <div class="min-h-[6rem]">
      <label for="title" class="block text-sm font-medium text-gray-300">Название</label>
      <input
        id="title"
        type="text"
        v-model="state.title"
        @blur="v$.title.$touch"
        :class="{ 'border-red-500': v$.title.$error }"
        class="mt-1 block w-full p-2 border rounded bg-gray-700 text-white border-gray-600"
        required
      />
      <span v-if="v$.title.$error" class="text-red-500 text-sm">Некорректное название</span>
    </div>
    <div class="min-h-[6rem]">
      <label for="price" class="block text-sm font-medium text-gray-300">Цена</label>
      <input
        id="price"
        type="number"
        step="0.01"
        v-model.number="state.price"
        @blur="v$.price.$touch"
        :class="{ 'border-red-500': v$.price.$error }"
        class="mt-1 block w-full p-2 border rounded bg-gray-700 text-white border-gray-600"
        required
      />
      <span v-if="v$.price.$error" class="text-red-500 text-sm">Некорректная цена</span>
    </div>
    <div class="min-h-[6rem]">
      <label for="category" class="block text-sm font-medium text-gray-300">Категория</label>
      <input
        id="category"
        type="text"
        v-model="state.category"
        @blur="v$.category.$touch"
        :class="{ 'border-red-500': v$.category.$error }"
        class="mt-1 block w-full p-2 border rounded bg-gray-700 text-white border-gray-600"
        required
      />
      <span v-if="v$.category.$error" class="text-red-500 text-sm">Некорректная категория</span>
    </div>
    <div class="min-h-[6rem]">
      <label for="imageUrl" class="block text-sm font-medium text-gray-300">URL изображения</label>
      <input
        id="imageUrl"
        type="text"
        v-model="state.image"
        @blur="v$.image.$touch"
        :class="{ 'border-red-500': v$.image.$error }"
        class="mt-1 block w-full p-2 border rounded bg-gray-700 text-white border-gray-600"
        required
      />
      <span v-if="v$.image.$error" class="text-red-500 text-sm">Некорректный URL изображения</span>
    </div>
    <div class="min-h-[8rem]">
      <label for="description" class="block text-sm font-medium text-gray-300">Описание</label>
      <textarea
        id="description"
        v-model="state.description"
        @blur="v$.description.$touch"
        :class="{ 'border-red-500': v$.description.$error }"
        class="mt-1 block w-full p-2 border rounded bg-gray-700 text-white border-gray-600"
        required
      ></textarea>
      <span v-if="v$.description.$error" class="text-red-500 text-sm">Некорректное описание</span>
    </div>
    <div class="flex justify-end space-x-4">
      <button type="button" class="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition"
              @click="resetForm; $emit('closeModal')">Отмена
      </button>
      <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">Сохранить
      </button>
    </div>
    <div class="min-h-[1rem]">
      <div v-if="error" class="text-red-500 text-sm mt-4">{{ error }}</div>
    </div>
  </form>
</template>

