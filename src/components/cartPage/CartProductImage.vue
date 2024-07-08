<script setup>
defineProps({
  image: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div
    class="w-32 h-32 flex items-center justify-center border border-shadow shadow-md rounded-lg p-2 min-w-32 max-w-32 bg-white">
    <img :src="image" alt="Product Image" class="w-full h-full object-contain" />
  </div>
</template>