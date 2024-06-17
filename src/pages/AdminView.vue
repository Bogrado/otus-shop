<script setup>
import { useAuthStore } from '@/stores/authStore'
import { computed } from 'vue'

const authStore = useAuthStore()
const user = computed(() => authStore.user)
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4 text-center">Admin Panel</h1>
    <div class="max-w-screen-lg mx-auto lg:space-x-8">

      <div class="text-center text-gray-700">
        {{ user.email }}
      </div>
    </div>

  </div>
</template>