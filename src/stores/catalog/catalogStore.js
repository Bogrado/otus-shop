import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import { useApi } from '@/composables/useApi.js'
import { useCatalogParamsStore } from '@/stores/catalog/catalogParams.js'
import { useLoadingStore } from '@/stores/loadingStore.js'

export const useCatalogStore = defineStore('catalog', () => {
  const state = reactive({
    products: []
  })
  const catalogParams = useCatalogParamsStore()
  const loadingStore = useLoadingStore()
  const { getData } = useApi()

  const loadProducts = async () => {
    loadingStore.setLoading(true)
    try {
      state.products = await getData?.('items', catalogParams.params)
    } catch (error) {
      console.error('Error loading products:', error)
    } finally {
      loadingStore.setLoading(false)
    }
  }

  const getCatalogProducts = computed(() => state.products)

  return { state, loadProducts, getCatalogProducts }
})
