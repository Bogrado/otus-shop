<template>
  <form @submit.prevent="register" class="space-y-4 bg-gray-800 p-6 rounded shadow-lg w-96">
    <h2 class="text-white text-lg font-bold mb-4">Создать учетную запись</h2>
    <div>
      <label for="register-fullName" class="block text-sm font-medium text-gray-300">Полное имя</label>
      <input
        id="register-fullName"
        type="text"
        v-model="fullName"
        class="mt-1 block w-full p-2 border rounded bg-gray-700 text-white border-gray-600"
        required
      />
    </div>
    <div>
      <label for="register-email" class="block text-sm font-medium text-gray-300">Электронная почта</label>
      <input
        id="register-email"
        type="email"
        v-model="email"
        class="mt-1 block w-full p-2 border rounded bg-gray-700 text-white border-gray-600"
        required
      />
    </div>
    <div>
      <label for="register-password" class="block text-sm font-medium text-gray-300">Пароль</label>
      <input
        id="register-password"
        type="password"
        v-model="password"
        class="mt-1 block w-full p-2 border rounded bg-gray-700 text-white border-gray-600"
        required
      />
    </div>
    <div>
      <label for="register-confirm-password" class="block text-sm font-medium text-gray-300">Подтвердите пароль</label>
      <input
        id="register-confirm-password"
        type="password"
        v-model="confirmPassword"
        class="mt-1 block w-full p-2 border rounded bg-gray-700 text-white border-gray-600"
        required
      />
    </div>
    <button
      @click="register"
      type="submit"
      class="w-full bg-yellow-500 text-black py-2 rounded hover:bg-yellow-600 transition"
    >
      Зарегистрироваться
    </button>
    <div class="text-center text-gray-400 mt-4">
      <span>Уже есть учетная запись?</span>
      <button
        type="button"
        class="w-full mt-2 py-2 border border-gray-600 rounded text-gray-300 hover:bg-gray-700 transition"
        @click="$emit('switchToLogin')"
      >
        Войти
      </button>
    </div>
    <p v-if="error" class="text-red-500 mt-4">{{ error }}</p>
  </form>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useAuthStore } from '@/stores/authStore'

const authStore = useAuthStore()
const fullName = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const register = async () => {
  console.log(1)
  if (password.value !== confirmPassword.value) {
    authStore.error = "Passwords don't match"
    return
  }
  await authStore.register(fullName.value, email.value, password.value)
}

const error = computed(() => authStore.error)
</script>
