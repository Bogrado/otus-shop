import axios from 'axios'
import { useQueryParamsStore } from '@/stores/queryParamsStore'
import { useCartQueryParamsStore } from '@/stores/cartQueryParamsStore'

const API_URL = 'https://6f8022cf47b3f024.mokky.dev'

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

  params = { ...params, ...additionalParams }
  return params
}

export const fetchProducts = async (context = 'catalog', additionalParams = {}) => {
  const params = getRequestParams(context, additionalParams)

  try {
    const response = await axios.get(`${API_URL}/items`, { params })
    return response.data
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}

export const authenticate = async (endpoint, payload) => {
  try {
    const response = await axios.post(`${API_URL}/${endpoint}`, payload, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })

    return response.data
  } catch (err) {
    console.error('Error authenticating:', err)
    console.log('(╮°-°)╮┳━━┳ ( ╯°□°)╯ ┻━━┻')
  }
}

export const fetchUserData = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/auth_me`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.data
  } catch (error) {
    console.error('Error fetching user data:', error)
    throw error
  }
}
