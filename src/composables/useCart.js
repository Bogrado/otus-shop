import { useCartStore } from '@/stores/cartStore'

export const useCart = () => {

  const cartStore = useCartStore()
  const currentQuantity = (productId) => cartStore.itemQuantity(productId)

  const addItem = (itemId, quantity = 1) => cartStore.addItem(itemId, quantity)

  const removeItem = (itemId) => cartStore.removeItem(itemId)

  const updateQuantity = (itemId, quantity) => cartStore.updateQuantity(itemId, currentQuantity(itemId) + quantity)

  const clearCart = () => cartStore.clearCart()

  return {
    addItem,
    removeItem,
    updateQuantity,
    clearCart
  }
}