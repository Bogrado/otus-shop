import { useApi } from '@/composables/useApi.js'

export const useUserSetup = () => {
  const { postData } = useApi()

  const createCartForUser = async (email) => {
    try {
      await postData('cart', { user: email, cart: [] })
    } catch (err) {
      console.error('Error creating cart for user:', err)
    }
  }

  const createFavoritesForUser = async (email) => {
    try {
      await postData('favorites', { user: email, favorites: [] })
    } catch (err) {
      console.error('Error creating favorites for user:', err)
    }
  }

  return {
    createCartForUser,
    createFavoritesForUser
  }
}
