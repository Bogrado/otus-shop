import axios from 'axios'

const API_URL = 'https://6f8022cf47b3f024.mokky.dev/items'

export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        _select: 'title,price,category,image'
      }
    })
    return response.data
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}