import axios from 'axios'
import { API_URL } from '@/composables/constants.js'

export const useApi = () => {
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

  const patchData = async (endpoint, payload, params = {}) => {
    try {
      const response = await axios.patch(`${API_URL}/${endpoint}`, payload, { params })
      return response.data
    } catch (error) {
      console.error('Error fetching products:', error)
      throw error
    }
  }

  const deleteData = async (endpoint) => {
    try {
      const response = await axios.delete(`${API_URL}/${endpoint}`)
      return response.data
    } catch (error) {
      console.error('Error fetching products:', error)
      throw error
    }
  }

  return {
    getData,
    postData,
    patchData,
    deleteData
  }
}