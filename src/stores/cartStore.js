import { defineStore } from 'pinia'
import { reactive, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const state = reactive({
    items: {} // Объект для хранения id товаров и их количества
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
  }

  const totalItems = computed(() => Object.values(state.items).reduce((total, quantity) => total + quantity, 0))

  const itemIds = computed(() => Object.keys(state.items))


  return {
    state,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    itemIds
  }
})