import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { authenticate, fetchUserData } from '@/services/apiService'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const token = ref(localStorage.getItem('token') || null)
  const error = ref(null)

  const login = async (email, password) => {
    try {
      const data = await authenticate('auth', { email, password })
      user.value = data.data
      token.value = data.token
      error.value = null
      localStorage.setItem('token', data.token)
    } catch (err) {
      error.value = err
    }
  }

  const register = async (fullName, email, password) => {
    try {
      const data = await authenticate('register', { fullName, email, password })
      user.value = data.data
      token.value = data.token
      error.value = null
      localStorage.setItem('token', data.token)
    } catch (err) {
      error.value = err
    }
  }

  const fetchUser = async () => {
    if (!token.value) return

    try {
      user.value = await fetchUserData(token.value)
    } catch (err) {
      error.value = err
      logout()
    }
  }

  const logout = () => {
    user.value = null
    token.value = null
    error.value = null
    localStorage.removeItem('token')
  }

  const isAdmin = computed(() => user.value?.role === 'admin')

  return {
    user,
    token,
    error,
    login,
    register,
    logout,
    fetchUser,
    isAdmin
  }
})
