<template>
    <h1 class="text-3xl font-bold mb-4">{{ user?.fullName }}</h1>
    <p class="text-lg mb-4">{{ user?.email }}</p>
    <div class="flex space-x-4">
      <router-link to="/">
        <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
          Вернуться на главную
        </button>
      </router-link>
      <button @click="logout" class="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition">
        Выйти
      </button>

      <button @click="modalStore.openModal('login')" class="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition">
        Логин
      </button>

      <button @click="modalStore.openModal('register')" class="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition">
        Регистрация
      </button>
    </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/authStore.js'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import { useModalStore } from '@/stores/modal/modalStore.js'

defineProps({
  loading: {
    type: Boolean,
    default: false
  }
})

const authStore = useAuthStore()
const router = useRouter()
const user = computed(() => authStore.user)

const modalStore = useModalStore()

const logout = () => {
  authStore.logout()
  router.push('/')
}
</script>