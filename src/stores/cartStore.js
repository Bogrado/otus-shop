import { defineStore } from 'pinia'
import { reactive, computed } from 'vue'
import { fetchProducts } from '@/services/apiService'
import { useLoadingStore } from '@/stores/loadingStore'
import { useCartQueryParamsStore } from '@/stores/cartQueryParamsStore'

export const useCartStore = defineStore('cart', () => {
  const state = reactive({
    items: {}, // Объект для хранения id товаров и их количества
    products: [] // Список продуктов в корзине
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

  const totalItems = computed(() => Object.values(state.items).reduce((total, quantity) => total + quantity, 0))

  const itemIds = computed(() => Object.keys(state.items))

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

  return {
    state,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    itemIds,
    loadCartProducts
  }
})
