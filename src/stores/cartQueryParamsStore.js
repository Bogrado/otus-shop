import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useCartQueryParamsStore = defineStore('cartQueryParams', () => {
  const params = reactive({
    id: [],
    _select: 'id,title,price,category,image,rating'
  })

  const setItemIds = (itemIds) => {
    params.id = itemIds
  }

  return {
    params,
    setItemIds
  }
})
