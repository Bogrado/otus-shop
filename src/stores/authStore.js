import { defineStore } from 'pinia'
import { computed, reactive, ref } from 'vue'
import { useApi } from '@/composables/useApi'
import { AUTH_PARAMS } from '@/composables/constants.js'
import { useCartStore } from '@/stores/cart/cartStore.js'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const token = ref(localStorage.getItem('token') || null)
  const error = ref(null)

  const { postData, getData } = useApi()
  const { loadUserCart, clearCart, mergeAnonCart } = useCartStore()
  const tokenParams = reactive({
    headers: {
      Authorization: `Bearer ${token.value}`
    }
  })

  const login = async (email, password, rememberMe = false) => {
    try {
      const data = await postData?.('auth', { email, password }, AUTH_PARAMS)
      user.value = data.data
      token.value = data.token
      error.value = null
      if (rememberMe) {
        localStorage.setItem('token', data.token)
      } else {
        sessionStorage.setItem('token', data.token)
      }
      loadUserCart()
      mergeAnonCart()
    } catch (err) {
      error.value = err
    }
  }

  const register = async (fullName, email, password) => {
    try {
      const data = await postData?.('register', { fullName, email, password }, AUTH_PARAMS)
      user.value = data.data
      token.value = data.token
      error.value = null
      localStorage.setItem('token', data.token)
      loadUserCart()
      mergeAnonCart()
    } catch (err) {
      error.value = err
    }
  }

  const fetchUser = async () => {
    if (!token.value) return

    try {
      user.value = await getData?.('auth_me', tokenParams)
      loadUserCart()
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
    sessionStorage.removeItem('token')
    clearCart()
  }

  const isAdmin = computed(() => user.value?.role === 'admin')
  const userEmail = computed(() => user.value?.email)
  const userId = computed(() => user.value?.id)

  return {
    user,
    token,
    error,
    login,
    register,
    logout,
    fetchUser,
    isAdmin,
    userEmail,
    userId
  }
})
