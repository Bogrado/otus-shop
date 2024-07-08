import { computed } from 'vue'
import { useValidation } from '@/composables/validation/useValidation.js'
import { useOrderStore } from '@/stores/orderStore'
import { checkoutSchema } from '@/composables/validation/validationSchemas.js'

export const useCheckout = () => {
  const orderStore = useOrderStore()
  const state = orderStore.state

  const { v$, validateForm } = useValidation(checkoutSchema, state)

  const isFormValid = computed(() => !v$.value.$invalid && state.agreeToTerms)

  const submitForm = async () => {
    const isValid = await validateForm?.()
    if (!isValid) {
      state.error = 'Заполните все обязательные поля.'
      return
    }
    await orderStore.submitOrder()
  }

  return {
    state,
    error: computed(() => state.error),
    v$,
    submitForm,
    isFormValid
  }
}
