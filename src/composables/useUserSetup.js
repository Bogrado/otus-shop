import { useApi } from '@/composables/useApi.js'

export const useUserSetup = () => {
  const { postData } = useApi()

  const createCartForUser = async (email, userId) => {
    try {
      await postData?.('cart', { user: email, user_id: userId, cart: [] })
    } catch (err) {
      console.error('Error creating cart for user:', err)
    }
  }

  const createFavoritesForUser = async (email, userId) => {
    try {
      await postData?.('favorites', { user: email, user_id: userId, favorites: [] })
    } catch (err) {
      console.error('Error creating favorites for user:', err)
    }
  }

  return {
    createCartForUser,
    createFavoritesForUser
  }
}
