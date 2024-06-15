import { defineStore } from 'pinia'
import { reactive, computed, watch } from 'vue'
import { fetchProducts } from '@/services/apiService'
import { useLoadingStore } from '@/stores/loadingStore'
import { useCartQueryParamsStore } from '@/stores/cartQueryParamsStore'

export const useCartStore = defineStore('cart', () => {

  const loadingStore = useLoadingStore()
  const cartParamsStore = useCartQueryParamsStore()

  const state = reactive({
    items: JSON.parse(localStorage.getItem('cartItems')) || [] // Массив для хранения объектов товаров
  })
  const addItem = (itemId) => {
    const existingItem = state.items.find(item => item.id === itemId)
    if (existingItem) {
      const newItem = { ...existingItem }
      state.items.push(newItem)
    } else {
      state.items.push({ id: itemId })
    }
  }

  const removeItem = (itemId) => {
    const index = state.items.findIndex(item => item.id === itemId)
    if (index > -1) {
      state.items.splice(index, 1)
    }
  }

  const removeAll = (itemId) => {
    state.items = state.items.filter(item => item.id !== itemId)
  }
  const clearCart = () => {
    state.items = []
  }

  const loadCartProducts = async () => {
    loadingStore.setLoading(true)
    try {
      if (itemIds.value.length > 0) {
        cartParamsStore.setItemIds(itemIds.value)
        const fetchedProducts = await fetchProducts('cart')
        state.items = fetchedProducts.flatMap(product => {
          const itemCount = itemIds.value.filter(id => id === product.id).length
          return Array(itemCount).fill(product)
        })
      } else {
        state.items = []
      }
    } catch (error) {
      console.error('Failed to load cart products:', error)
    } finally {
      loadingStore.setLoading(false)
    }
  }
  const itemQuantity = computed(() => (itemId) => state.items.filter(item => item.id === itemId).length)
  const totalItems = computed(() => state.items.length)
  const itemIds = computed(() => state.items.map(item => item.id))
  const products = computed(() => {
    const uniqueProducts = {}
    state.items.forEach(item => {
      uniqueProducts[item.id] = item
    })
    return Object.values(uniqueProducts)
  })

  const syncLocalStorage = (items) => localStorage.setItem('cartItems', JSON.stringify(items))
  watch(() => state.items, (i) => syncLocalStorage(i), { deep: true })

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
    removeAll
  }
})