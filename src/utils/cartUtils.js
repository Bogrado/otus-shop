import { useCartStore } from '@/stores/cartStore'

export const addToCart = (productId, quantity = 1) => {
  const cartStore = useCartStore()
  cartStore.addItem(productId, quantity)
}