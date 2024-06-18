import { useCartStore } from '@/stores/cart/cartStore.js'

export const useCart = () => {
  const cartStore = useCartStore()

  const addItem = (itemId) => cartStore.addItem(itemId)

  const removeItem = (itemId) => cartStore.removeItem(itemId)

  const removeAllItemsWithId = (itemId) => cartStore.removeAll(itemId)

  const clearCart = () => cartStore.clearCart()

  return {
    addItem,
    removeItem,
    clearCart,
    removeAllItemsWithId
  }
}
