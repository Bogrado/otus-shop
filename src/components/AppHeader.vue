<script setup>
import ShoppingCartIcon from '@/components/icons/ShoppingCartIcon.vue'
import { useCartStore } from '@/stores/cartStore.js'
import { computed } from 'vue'

const cartStore = useCartStore()

const totalItems = computed(() => cartStore.totalItems)
</script>

<template>
  <header
    class="px-4 py-4 sm:px-10 sm:py-8 top-0 z-20 flex items-center justify-between p-3 border-b bg-gray-800 border-gray-200"
  >
    <router-link to="/">
      <div class="flex items-center gap-2 sm:gap-4 text-white">
        <img src="@/assets/logo.png" alt="Logo" class="w-8 sm:w-10" />
        <div>
          <h2 class="text-lg sm:text-xl font-bold uppercase">Otus Shop</h2>
          <p class="text-slate-400 text-xs sm:text-base">Магазин чего-то</p>
        </div>
      </div>
    </router-link>
    <ul class="flex items-center gap-4 sm:gap-10">
      <router-link to="/cart">
        <li
          class="relative flex flex-col items-center text-slate-500 cursor-pointer hover:text-white"
        >
          <shopping-cart-icon class="w-6 h-6 fill-current" />
          <span class="text-sm">Корзина</span>
          <span
            class="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
            {{ totalItems }}
          </span>
        </li>
      </router-link>
    </ul>
  </header>
</template>

<style scoped></style>

