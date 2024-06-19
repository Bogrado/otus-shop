<script setup>
import AdminSidebar from '@/components/admin/AdminSidebar.vue'
defineProps({
  loading: {
    type: Boolean,
    required: true
  }
})
</script>

<template>
  <div class="grid grid-cols-[auto_1fr] min-h-screen">
    <AdminSidebar />
    <main class="p-4">
      <div class="container mx-auto flex flex-col items-center">
        <h1 class="text-3xl font-bold mb-4 text-center">Admin Panel</h1>
        <div class="max-w-screen-lg w-full flex flex-col lg:space-x-8">
          <div class="flex-1 p-4 rounded-lg shadow-md bg-white" v-auto-animate>
            <router-view :loading="loading" v-slot="{ Component }">
              <component :is="Component" />
            </router-view>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
