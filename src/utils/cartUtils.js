import { useCartStore } from '@/stores/cartStore'

const cartStore = useCartStore()
const currentQuantity = (productId) => cartStore.itemQuantity(productId)

export const addToCart = (productId, quantity = 1) => {
  cartStore.addItem(productId, quantity)
}

export const decreaseQuantity = (productId) => cartStore.updateQuantity(productId, currentQuantity(productId) - 1)
export const increaseQuantity = (productId) => cartStore.updateQuantity(productId, currentQuantity(productId) + 1)

export const removeFromCart = (productId) => cartStore.removeItem(productId)