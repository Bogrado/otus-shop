import axios from 'axios'
import { useQueryParamsStore } from '@/stores/queryParamsStore'

const API_URL = 'https://6f8022cf47b3f024.mokky.dev/items'

export const fetchProducts = async () => {
  const queryParamsStore = useQueryParamsStore()
  // console.log(queryParamsStore.params)
  try {
    const response = await axios.get(API_URL, {
      params: {
        ...queryParamsStore.params,
        title: queryParamsStore.params.title ? `*${queryParamsStore.params.title}*` : null
      }
    })
    return response.data
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}
