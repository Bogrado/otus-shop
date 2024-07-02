import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import { useApi } from '@/composables/useApi.js'
import { useLoadingStore } from '@/stores/loadingStore.js'
import { useRouter } from 'vue-router'

export const useProductStore = defineStore('product', () => {
  const state = reactive({
    id: null,
    product: {},
    error: ''
  })

  const { push } = useRouter()
  const { setLoading } = useLoadingStore()
  const { getData } = useApi()

  const loadProduct = async (id) => {
    setLoading(true)
    state.id = id
    state.error = ''
    try {
      const response = await getData(`items/${id}`)
      if (!response || Object.keys(response).length === 0) {
        await push({ name: 'NotFound' })
      } else {
        state.product = response
      }
    } catch (error) {
      state.error = error
      await push({ name: 'NotFound' })
    } finally {
      setLoading(false)
    }
  }

  const getProduct = computed(() => state.product)

  return { state, loadProduct, getProduct }
})
