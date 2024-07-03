import { defineStore } from 'pinia'
import { reactive, computed, watch } from 'vue'
import { useApi } from '@/composables/useApi.js'
import { useLoadingStore } from '@/stores/loadingStore.js'
import { useAuthStore } from '@/stores/authStore.js'

export const useCartStore = defineStore('cart', () => {

  const { getData } = useApi()
  const loadingStore = useLoadingStore()
  const authStore = useAuthStore()

  const state = reactive({
    items: []
  })

  const loadUserCart = () => {
    const userId = authStore.userId
    console.log(userId)
    if (userId) {
      const cart = JSON.parse(localStorage.getItem(`cart_${userId}`))
      if (cart) {
        state.items = cart
      }
    }
  }

  const syncLocalStorage = () => {
    const userId = authStore.userId
    if (userId) {
      localStorage.setItem(`cart_${userId}`, JSON.stringify(state.items))
    }
  }

  const addItem = (itemId) => {
    const existingItem = state.items.find((item) => item.id === itemId)
    if (existingItem) {
      const newItem = { ...existingItem }
      state.items.push(newItem)
    } else {
      state.items.push({ id: itemId })
    }
    syncLocalStorage()
  }

  const removeItem = (itemId) => {
    const index = state.items.findIndex((item) => item.id === itemId)
    if (index !== -1) {
      state.items.splice(index, 1)
    }
    syncLocalStorage()
  }

  const removeAll = (itemId) => {
    state.items = state.items.filter((item) => item.id !== itemId)
    syncLocalStorage()
  }
  const clearCart = () => {
    state.items = []
    syncLocalStorage()
  }

  const loadCartProducts = async () => {
    loadingStore.setLoading(true)
    try {
      if (itemIds.value.length > 0) {
        const fetchedProducts = await getData?.('items', { params: { id: itemIds.value, _select: '-description' } })
        state.items = fetchedProducts.flatMap((product) => {
          const itemCount = itemIds.value.filter((id) => id === product.id).length
          return Array(itemCount).fill(product)
        })
        return
      }
      state.items = []
    } catch (error) {
      console.error('Failed to load cart products:', error)
    } finally {
      loadingStore.setLoading(false)
    }
  }
  const itemQuantity = computed(
    () => (itemId) => state.items.filter((item) => item.id === itemId).length
  )
  const totalItems = computed(() => state.items.length)
  const itemIds = computed(() => state.items.map((item) => item.id))
  const products = computed(() => {
    const uniqueProducts = {}
    state.items.forEach((item) => {
      uniqueProducts[item.id] = item
    })
    return Object.values(uniqueProducts)
  })
  const totalPrice = computed(() => {
    const total = state.items.reduce((total, item) => total + item.price, 0)
    return Number(total.toFixed(2))
  })

  watch(
    () => state.items,
    () => syncLocalStorage(),
    { deep: true }
  )

  return {
    state,
    addItem,
    removeItem,
    clearCart,
    totalItems,
    itemIds,
    loadCartProducts,
    itemQuantity,
    products,
    removeAll,
    totalPrice,
    loadUserCart,
    syncLocalStorage
  }
})