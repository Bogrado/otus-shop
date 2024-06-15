<template>
  <div id="app" class="min-h-screen flex flex-col">
    <app-header />
    <main class="flex-grow p-4">
      <div class="p-10">
        <div v-auto-animate>
          <router-view :loading="loadingStore.loading" v-slot="{ Component }">
            <component :is="Component" />
          </router-view>
        </div>
      </div>
    </main>
    <footer class="bg-gray-800 text-white p-4 text-center">
      <p>&copy; 2024 My Online Shop. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import { vAutoAnimate } from '@formkit/auto-animate'
import { useLoadingStore } from '@/stores/loadingStore.js'

const loadingStore = useLoadingStore()
</script>

<style>
html {
  scrollbar-gutter: stable;
}
</style>
