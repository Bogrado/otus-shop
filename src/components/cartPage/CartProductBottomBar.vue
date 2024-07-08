<script setup>
import LikeIcon from '@/components/icons/LikeIcon.vue'
import DeleteIcon from '@/components/icons/DeleteIcon.vue'
defineEmits(['handleDeleteClick'])
</script>

<template>
  <div class="flex items-center mt-2 space-x-2">
    <button>
      <like-icon class="hover:fill-gray-700 transition duration-300" />
    </button>
    <button @click="$emit('handleDeleteClick')">
      <delete-icon class="hover:fill-gray-700 transition duration-300" />
    </button>
  </div>
</template>
