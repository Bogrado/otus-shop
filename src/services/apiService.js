import axios from 'axios'
import { useQueryParamsStore } from '@/stores/queryParamsStore'
import { useCartQueryParamsStore } from '@/stores/cartQueryParamsStore'

const API_URL = 'https://6f8022cf47b3f024.mokky.dev/items'

// Функция для получения параметров запроса
const getRequestParams = (context, additionalParams) => {
  let params = {}

  if (context === 'catalog') {
    const queryParamsStore = useQueryParamsStore()
    params = {
      ...queryParamsStore.params,
      title: queryParamsStore.params.title ? `*${queryParamsStore.params.title}*` : null
    }
  } else if (context === 'cart') {
    const cartQueryParamsStore = useCartQueryParamsStore()
    params = {
      ...cartQueryParamsStore.params
    }
  }

  // Добавляем любые дополнительные параметры
  params = { ...params, ...additionalParams }
  return params
}

export const fetchProducts = async (context = 'catalog', additionalParams = {}) => {
  const params = getRequestParams(context, additionalParams)

  try {
    const response = await axios.get(API_URL, { params })
    return response.data
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}
