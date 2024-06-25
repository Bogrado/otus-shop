import { defineStore } from 'pinia'
import { reactive, computed, watch, ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import { useCartStore } from '@/stores/cart/cartStore'
import { useApi } from '@/composables/useApi'
import { useCart } from '@/composables/useCart'
export const useOrderStore = defineStore('order', () => {
  const authStore = useAuthStore()
  const cartStore = useCartStore()
  const { postData } = useApi()
  const { clearCart } = useCart()

  const state = reactive({ // Нужно ли сокращать или ненужно? Вроде, всё важное
    firstName: '',
    lastName: '',
    email: authStore.userEmail || '',
    country: '',
    city: '',
    postalCode: '',
    addressLine1: '',
    houseNumber: '',
    apartmentNumber: '',
    saveAddress: false, // пока не используется, хорошо бы сделать сохранение адреса юзеру, и автозаполнять при монтировании страницы с формой
    agreeToTerms: false,
    created_at: '',
    orderDetails: [],
    totalPrice: 0,
    error: ''
  })
  const isCreated = ref(false)
  const fullName = computed(() => `${state.firstName} ${state.lastName}`)
  const address = computed(() => `${state.addressLine1}, д. ${state.houseNumber}, кв. ${state.apartmentNumber}, ${state.city}, ${state.country}, ${state.postalCode}`)

  watch(() => authStore.userEmail, (newEmail) => {
    state.email = newEmail
  }, { immediate: true }) // на всякий случай, для смены пользователя

  watch(() => cartStore.state.items, (newItems) => {
    state.orderDetails = newItems
    state.totalPrice = cartStore.totalPrice
  }, { deep: true, immediate: true }) // просто обновление стейта

  const submitOrder = async () => {
    if (!state.agreeToTerms) {
      state.error = 'Вы должны согласиться на обработку персональных данных.' // подстраховка на случай отключения дизейбла через f12
      return
    }
    try {
      state.created_at = new Date().toISOString()
      const orderData = {
        user: state.email,
        created_at: state.created_at,
        orderDetails: state.orderDetails,
        totalPrice: state.totalPrice,
        address: address.value,
        fullName: fullName.value
      }
      await postData?.('orders', orderData)
      state.error = ''
      isCreated.value = true
      console.log('Заказ успешно отправлен:', orderData)
      clearCart?.()
      setTimeout(() => {
        isCreated.value = false
      }, 3000)
    } catch (error) {
      state.error = 'Ошибка при отправке заказа: ' + error.message
    }
  }

  const createdSuccess = computed(() => isCreated.value)

  return {
    state,
    fullName,
    address,
    submitOrder,
    createdSuccess
  }
})
