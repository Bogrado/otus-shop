import { defineStore } from 'pinia'
import { reactive, computed, watch } from 'vue'
import { useApi } from '@/composables/useApi.js'
import { useLoadingStore } from '@/stores/loadingStore.js'
import { useAuthStore } from '@/stores/authStore.js'

export const useCartStore = defineStore('cart', () => {
  const { getData, patchData } = useApi()
  const loadingStore = useLoadingStore()
  const authStore = useAuthStore()

  const state = reactive({
    items: JSON.parse(localStorage.getItem('cartItems')) || []
  })

  const loadUserCart = async () => {
    const userId = authStore.userId
    if (userId) {
      loadingStore.setLoading(true)
      try {
        const cart = await getData(`cart/${userId}`)
        state.items = cart.items || []
      } catch (error) {
        console.error('Error loading user cart:', error)
      } finally {
        loadingStore.setLoading(false)
      }
    }
  }

  const syncCartWithServer = async () => {
    const userId = authStore.userId
    if (userId) {
      try {
        await patchData(`cart/${userId}`, { items: state.items })
      } catch (error) {
        console.error('Error syncing cart with server:', error)
      }
    }
  }

  const mergeAnonCart = async () => {
    const anonCart = JSON.parse(localStorage.getItem('cartItems')) || []
    state.items = [...state.items, ...anonCart]
    localStorage.removeItem('cartItems')
    await syncCartWithServer()
  }

  const syncLocalStorage = () => {
    localStorage.setItem('cartItems', JSON.stringify(state.items))
  }

  const addItem = async (itemId) => {
    state.items.push({ id: itemId })
    if (authStore.userId) {
      await syncCartWithServer()
    } else {
      syncLocalStorage()
    }
  }

  const removeItem = async (itemId) => {
    const index = state.items.findIndex((item) => item.id === itemId)
    if (index !== -1) {
      state.items.splice(index, 1)
      if (authStore.userId) {
        await syncCartWithServer()
      } else {
        syncLocalStorage()
      }
    }
  }

  const removeAll = async (itemId) => {
    state.items = state.items.filter((item) => item.id !== itemId)
    if (authStore.userId) {
      await syncCartWithServer()
    } else {
      syncLocalStorage()
    }
  }

  const clearCart = async () => {
    state.items = []
    if (authStore.userId) {
      await syncCartWithServer()
    } else {
      localStorage.removeItem('cartItems')
    }
  }

  const loadCartProducts = async () => {
    loadingStore.setLoading(true)
    try {
      if (itemIds.value.length > 0) {
        const fetchedProducts = await getData('items', { params: { id: itemIds.value, _select: '-description' } })
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

  const itemQuantity = computed(() => (itemId) => state.items.filter((item) => item.id === itemId).length)
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

  watch(totalItems,  async () => {
    if (authStore.userId) {
      await syncCartWithServer()
    } else {
      console.log(1)
      syncLocalStorage()
    }
  })

  return {
    state,
    addItem,
    removeItem,
    removeAll,
    clearCart,
    totalItems,
    itemIds,
    loadCartProducts,
    itemQuantity,
    products,
    totalPrice,
    loadUserCart,
    syncCartWithServer,
    mergeAnonCart
  }
})
