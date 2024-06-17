<script setup>
import ShoppingCartIcon from '@/components/icons/ShoppingCartIcon.vue'
import { useCartStore } from '@/stores/cartStore.js'
import { useModalStore } from '@/stores/modalStore.js'
import { ref, computed } from 'vue'
import AccountIcon from '@/components/icons/AccountIcon.vue'
import AppModal from '@/components/AppModal.vue'
import LoginForm from '@/components/LoginForm.vue'
import RegisterForm from '@/components/RegisterForm.vue'

const cartStore = useCartStore()
const modalStore = useModalStore()

const totalItems = computed(() => cartStore.totalItems)
const showDropdown = ref(false)
const modalType = ref('')

const openLoginModal = () => {
  modalStore.openModal()
  modalType.value = 'login'
}

const openRegisterModal = () => {
  modalStore.openModal()
  modalType.value = 'register'
}

const closeModal = () => modalStore.closeModal()

const isLoginModalOpen = computed(() => modalStore.isOpen && modalType.value === 'login')
const isRegisterModalOpen = computed(() => modalStore.isOpen && modalType.value === 'register')
</script>
<template>
  <header
    v-auto-animate
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
          <shopping-cart-icon class="w-8 h-8 fill-current" />
          <span class="text-sm">Корзина</span>
          <span
            class="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center"
          >
            {{ totalItems }}
          </span>
        </li>
      </router-link>
      <li
        v-auto-animate
        class="relative flex flex-col items-center text-slate-500 cursor-pointer hover:text-white"
        @mouseenter="showDropdown = true"
        @mouseleave="showDropdown = false"
      >
        <account-icon class="w-8 h-8 fill-current" />
        <span class="text-sm">Войти</span>
        <div v-if="showDropdown" class="absolute top-12 right-0 bg-white shadow-lg rounded-md p-4">
          <button @click="openLoginModal" class="block w-full text-left mb-2 border-b border-slate-700 text-black">
            Войти
          </button>
          <button @click="openRegisterModal" class="block w-full text-left border-b border-slate-700 text-black">
            Зарегистрироваться
          </button>
        </div>
      </li>
    </ul>

    <AppModal :isOpen="isLoginModalOpen" @close="closeModal">
      <template #modalTitle>
        <LoginForm @switchToRegister="openRegisterModal" />
      </template>
    </AppModal>

    <AppModal :isOpen="isRegisterModalOpen" @close="closeModal">
      <template #modalTitle>
        <RegisterForm @switchToLogin="openLoginModal" />
      </template>
    </AppModal>
  </header>
</template>