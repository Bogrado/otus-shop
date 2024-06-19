import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import { useApi } from '@/composables/useApi.js'
import { useLoadingStore } from '@/stores/loadingStore.js'

export const useCatalogStore = defineStore('catalog', () => {
  const state = reactive({
    products: []
  })
  const loadingStore = useLoadingStore()
  const { getData } = useApi()

  const loadProducts = async (params = {}) => {
    loadingStore.setLoading(true)
    try {
      state.products = await getData?.('items', params)
    } catch (error) {
      console.error('Error loading products:', error)
    } finally {
      loadingStore.setLoading(false)
    }
  }

  const getCatalogProducts = computed(() => state.products)

  return { state, loadProducts, getCatalogProducts }
})
