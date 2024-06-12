import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useLoadingStore = defineStore('loading', () => {
  const isLoading = ref(false)

  const setLoading = (loading) => {
    isLoading.value = loading
  }

  const loading = computed(() => isLoading.value)

  return {
    isLoading,
    setLoading,
    loading
  }
})
