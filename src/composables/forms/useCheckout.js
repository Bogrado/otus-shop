import { computed } from 'vue'
import { useValidation } from '@/composables/useValidation.js'
import { required, minLength, email as emailValidator, numeric, maxLength } from '@vuelidate/validators'
import { useOrderStore } from '@/stores/orderStore'

export const useCheckout = () => {
  const orderStore = useOrderStore()
  const state = orderStore.state

  const schema = {
    firstName: { required, minLength: minLength(3) },
    lastName: { required },
    email: { required, email: emailValidator, minLength: minLength(5) },
    country: { required, minLength: minLength(3) },
    city: { required, minLength: minLength(3) },
    postalCode: { required, numeric, minLength: minLength(6), maxLength: maxLength(6) },
    addressLine1: { required, minLength: minLength(3) },
    houseNumber: { required },
    apartmentNumber: { required }
  }

  const { v$, validateForm } = useValidation(schema, state)

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
