import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useQueryParamsStore = defineStore('queryParams', () => {
  const params = reactive({
    sortBy: '',
    title: '',
    _select: 'id,title,price,category,image,rating',
    id: null
  })

  const setSortBy = (sortBy) => (params.sortBy = sortBy)

  const setTitle = (title) => (params.title = title)

  const setId = (id) => (params.id = id)

  return {
    params,
    setSortBy,
    setTitle,
    setId
  }
})
