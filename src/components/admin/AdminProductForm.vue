<script setup>
</script>

<template>
  <form class="space-y-4 bg-gray-800 p-6 rounded shadow-lg w-96">
    <h2 class="text-white text-lg font-bold mb-4">Создать запись</h2>
    <div>
      <label for="title" class="block text-sm font-medium text-gray-300">Title</label>
      <input
        id="title"
        type="text"
        class="mt-1 block w-full p-2 border rounded bg-gray-700 text-white border-gray-600"
        required
      />
    </div>
    <div>
      <label for="price" class="block text-sm font-medium text-gray-300">Price</label>
      <input
        id="price"
        type="number"
        step="0.01"
        class="mt-1 block w-full p-2 border rounded bg-gray-700 text-white border-gray-600"
        required
      />
    </div>
    <div>
      <label for="category" class="block text-sm font-medium text-gray-300">Category</label>
      <input
        id="category"
        type="text"
        class="mt-1 block w-full p-2 border rounded bg-gray-700 text-white border-gray-600"
        required
      />
    </div>
    <div>
      <label for="description" class="block text-sm font-medium text-gray-300">Description</label>
      <textarea
        id="description"
        class="mt-1 block w-full p-2 border rounded bg-gray-700 text-white border-gray-600"
        required
      ></textarea>
    </div>
    <div class="flex justify-end space-x-4">
      <button type="button" class="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition" @click="$emit('close')">Cancel
      </button>
      <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">Save</button>
    </div>
  </form>
</template>
