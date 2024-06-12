<script setup>
import ShoppingCartIcon from '@/components/icons/ShoppingCartIcon.vue'
</script>

<template>
  <header
    class="px-4 py-4 sm:px-10 sm:py-8 top-0 z-20 flex items-center justify-between p-3 border-b bg-gray-800 border-gray-200"
  >
    <div class="flex items-center gap-2 sm:gap-4 text-white">
      <img src="@/assets/logo.png" alt="Logo" class="w-8 sm:w-10" />
      <div>
        <h2 class="text-lg sm:text-xl font-bold uppercase">Otus Shop</h2>
        <p class="text-slate-400 text-xs sm:text-base">Магазин чего-то</p>
      </div>
    </div>
    <ul class="flex items-center gap-4 sm:gap-10">
      <li
        class="flex items-center gap-1 sm:gap-3 text-slate-500 cursor-pointer hover:text-white"
        @click="OpenDrawer"
        aria-label="Корзина"
        role="button"
      >
        <shopping-cart-icon />
        <b class="text-xs sm:text-base">0 ₽.</b>
      </li>
    </ul>
  </header>
</template>

<style scoped></style>
