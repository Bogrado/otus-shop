import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import { useLoadingStore } from '@/stores/loadingStore.js'
import { useApi } from '@/composables/useApi.js'

export const useItemsManagerStore = defineStore( 'itemManager', () => {

  const loadingStore = useLoadingStore()
  const { getData } = useApi()
  const state = reactive({
    items: [],
    itemId: null,
  })

  const loadProducts = async () => {
    loadingStore.setLoading(true)
    try {
      state.items = await getData?.('items', { params: { _select: 'id,title,price,category' } })
    } catch (error) {
      console.error('Error loading products:', error)
    } finally {
      loadingStore.setLoading(false)
    }
  }

  const setItemId = (id) => {
    state.itemId = id
  }

  const getItems = computed(() => state.items)
  const getItemId = computed(() => state.itemId)

  return {
    state,
    getItems,
    loadProducts,
    setItemId,
    getItemId
  }
})