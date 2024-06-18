import axios from 'axios'

export const useApi = () => {

  const API_URL = 'https://6f8022cf47b3f024.mokky.dev'
  const getData = async (endpoint, params) => {

    try {
      console.log({ params })
      const response = await axios.get(`${API_URL}/${endpoint}`, params)
      return response.data
    } catch (error) {
      console.error('Error fetching products:', error)
      throw error
    }
  }

  const postData = async (endpoint, payload, params = {}) => {
    try {
      const response = await axios.post(`${API_URL}/${endpoint}`, payload, { params })
      return response.data
    } catch (error) {
      console.error('Error fetching products:', error)
      throw error
    }
  }

  return {
    getData,
    postData
  }
}