import axios from 'axios'

const API_URL = 'https://6f8022cf47b3f024.mokky.dev'

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
