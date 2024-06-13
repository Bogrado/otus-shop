import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import { useLoadingStore } from '@/stores/loadingStore.js'
import { fetchProducts } from '@/services/apiService.js'
import { useCartQueryParamsStore } from '@/stores/cartQueryParamsStore.js'

export const useCartStore = defineStore('cart', () => {

  const loadingStore = useLoadingStore()
  const cartQueryParamsStore = useCartQueryParamsStore()
  const state = reactive({
    items: {}, // Объект для хранения id товаров и их количества
    products: [] // Массив для хранения информации о продуктах после запроса

  })

  const addItem = (itemId, quantity = 1) => {
    if (state.items[itemId]) {
      state.items[itemId] += quantity
    } else {
      state.items[itemId] = quantity
    }
  }

  const removeItem = (itemId) => {
    delete state.items[itemId]
  }

  const updateQuantity = (itemId, quantity) => {
    if (state.items[itemId]) {
      state.items[itemId] = quantity
      if (quantity <= 0) {
        removeItem(itemId)
      }
    }
  }

  const clearCart = () => {
    state.items = {}
    state.products = []
  }

  const loadCartProducts = async () => {
    loadingStore.setLoading(true)
    try {
      if (itemIds.value.length > 0) {
        cartQueryParamsStore.setItemIds(itemIds.value)
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

  const totalItems = computed(() => Object.values(state.items).reduce((total, quantity) => total + quantity, 0))

  const itemIds = computed(() => Object.keys(state.items))

  const itemQuantity = (itemId) => {
    return state.items[itemId] || 0
  }


  return {
    state,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    itemIds,
    loadCartProducts,
    itemQuantity
  }
})