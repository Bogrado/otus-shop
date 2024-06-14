import { defineStore } from 'pinia'
import { reactive, computed, watch } from 'vue'
import { fetchProducts } from '@/services/apiService'
import { useLoadingStore } from '@/stores/loadingStore'
import { useCartQueryParamsStore } from '@/stores/cartQueryParamsStore'

export const useCartStore = defineStore('cart', () => {

  const loadingStore = useLoadingStore()
  const cartParamsStore = useCartQueryParamsStore()

  const state = reactive({
    items: [], // JSON.parse(localStorage.getItem('cartItems'))
  })
  const addItem = (itemId) => {
    state.items.push(itemId)
  }

  const removeItem = (itemId) => {
    const index = state.items.indexOf(itemId)
    if (index > -1) {
      state.items.splice(index, 1)
    }
  }

  const updateQuantity = (itemId, quantity) => {
    state.items = state.items.filter(id => id !== itemId)
    for (let i = 0; i < quantity; i++) {
      state.items.push(itemId)
    }
  }

  const clearCart = () => {
    state.items = []
  }

  const loadCartProducts = async () => {
    loadingStore.setLoading(true)
    try {
      if (itemIds.value.length > 0) {
        cartParamsStore.setItemIds(itemIds.value)
        state.products = await fetchProducts('cart')
      } else {
        state.products = []
      }
    } catch (error) {
      console.error('Failed to load cart products:', error)
    } finally {
      loadingStore.setLoading(false)
    }
  }
  const itemQuantity = (itemId) => state.items.filter(id => id === itemId).length
  const totalItems = computed(() => state.items.length)
  const itemIds = computed(() => Array.from(new Set(state.items))) // computed(() => state.items)

  // const syncLocalStorage = (items) => localStorage.setItem('cartItems', JSON.stringify(items))
  // watch(() => state.items,(i) => syncLocalStorage(i),{ deep: true })

  return {
    state,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    itemIds,
    loadCartProducts,
    itemQuantity,
  }
})