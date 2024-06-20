<script setup>
import { useLoginForm } from '@/composables/auth/useLoginForm.js'

const emit = defineEmits(['closeModal', 'switchToRegister'])

const { email, password, error, submitForm, resetForm, logged, rememberMe } = useLoginForm(emit)

const handleCancel = () => {
  resetForm?.()
  emit('closeModal')
}
</script>

<template>
  <div v-auto-animate>
    <div v-if="logged" class="bg-gray-800 p-6 rounded shadow-lg text-white">
      <h2 class="text-lg font-bold mb-4">Авторизация успешна</h2>
      <button
        @click="handleCancel"
        class="w-full bg-yellow-500 text-black py-2 rounded hover:bg-yellow-600 transition"
      >
        Закрыть
      </button>
    </div>
    <form v-else @submit.prevent="submitForm" class="space-y-4 bg-gray-800 p-6 rounded shadow-lg">
      <h2 class="text-white text-lg font-bold mb-4">Войти с учетной записью</h2>
      <div>
        <label for="login-email" class="block text-sm font-medium text-gray-300">Электронная почта</label>
        <input
          id="login-email"
          type="email"
          v-model="email"
          class="mt-1 block w-full p-2 border rounded bg-gray-700 text-white border-gray-600"
          required
        />
      </div>
      <div>
        <label for="login-password" class="block text-sm font-medium text-gray-300">Пароль</label>
        <input
          id="login-password"
          type="password"
          v-model="password"
          class="mt-1 block w-full p-2 border rounded bg-gray-700 text-white border-gray-600"
          required
        />
      </div>
      <div class="flex items-center justify-between text-gray-400">
        <label class="inline-flex items-center">
          <input type="checkbox" class="form-checkbox bg-gray-700 text-blue-500 border-gray-600" v-model="rememberMe" />
          <span class="ml-2">Запомнить меня</span>
        </label>
        <a href="#" class="hover:text-white">Забыли пароль?</a>
      </div>
      <button
        type="submit"
        class="w-full bg-yellow-500 text-black py-2 rounded hover:bg-yellow-600 transition"
      >
        Войти
      </button>
      <div class="text-center text-gray-400 mt-4">
        <span>Нет учетной записи?</span>
        <button
          type="button"
          class="w-full mt-2 py-2 border border-gray-600 rounded text-gray-300 hover:bg-gray-700 transition"
          @click="emit('switchToRegister')"
        >
          Зарегистрироваться
        </button>
      </div>
      <p v-if="error" class="text-red-500 mt-4">{{ error }}</p>
    </form>
  </div>
</template>
