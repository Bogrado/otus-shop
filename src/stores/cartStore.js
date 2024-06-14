import { defineStore } from 'pinia'
import { reactive, computed } from 'vue'
import { fetchProducts } from '@/services/apiService'
import { useLoadingStore } from '@/stores/loadingStore'
import { useCartQueryParamsStore } from '@/stores/cartQueryParamsStore'

export const useCartStore = defineStore('cart', () => {
  const state = reactive({
    items: {},
    products: []
  })

  const loadingStore = useLoadingStore()
  const cartParamsStore = useCartQueryParamsStore()

  const addItem = (itemId, quantity = 1) => {
    if (state.items[itemId]) {
      state.items[itemId] += quantity
    } else {
      state.items[itemId] = quantity
    }
  }

  const removeItem = (itemId) => {
    delete state.items[itemId]
    state.products = state.products.filter(product => product.id !== itemId)
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

  const totalItems = computed(() => Object.values(state.items).reduce((total, quantity) => total + quantity, 0))
  const products = computed(() => state.products)
  const itemIds = computed(() => Object.keys(state.items))

  const itemQuantity = (itemId) =>  state.items[itemId] || 0

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
    products
  }
})