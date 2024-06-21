<template>
  <div class="bg-gray-800 flex flex-col items-center p-4 rounded-lg text-center shadow">
    <p class="text-white mb-4">Подтвердить?</p>
    <div class="flex justify-end space-x-4">
      <button class="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition" @click="$emit('close')">
        Отмена
      </button>
      <button class="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition" @click="$emit('confirm')">
        Удалить
      </button>
    </div>
  </div>
</template>