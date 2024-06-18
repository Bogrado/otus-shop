import { defineStore } from 'pinia'
import { computed, reactive, ref } from 'vue'

export const useCatalogParamsStore = defineStore('catalogParams', () => {
  const titleVal = ref(null)
  const params = reactive({
    sortBy: '',
    title: computed(() => titleVal.value ? `*${titleVal.value}*` : null),
    _select: 'id,title,price,category,image,rating',
    id: null
  })

  const setSortBy = (sortBy) => (params.sortBy = sortBy)

  const setTitle = (title) => {
    titleVal.value = title
  }

  const setId = (id) => (params.id = id)

  const getParams = computed(() => params)

  return {
    params,
    setSortBy,
    setTitle,
    setId,
    getParams,
    titleVal
  }
})
