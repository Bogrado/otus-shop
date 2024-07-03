import { useAuthStore } from '@/stores/authStore.js'
import { reactive, ref } from 'vue'
import { useValidation } from '@/composables/validation/useValidation.js'
import { registerSchema } from '@/composables/validation/validationSchemas.js'

export const useRegisterForm = (emit) => {
  const authStore = useAuthStore()
  const state = reactive({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const error = ref('')

  const schema = registerSchema(state)

  const { v$, validateForm } = useValidation(schema, state)

  const resetForm = () => {
    state.fullName = ''
    state.email = ''
    state.password = ''
    state.confirmPassword = ''
    error.value = null
    v$.value.$reset()
  }

  const submitForm = async () => {
    const isValid = await validateForm?.()
    if (!isValid) return
    try {
      await authStore.register(state.fullName, state.email, state.password)
      if (!authStore.error) {
        resetForm()
        emit('closeModal')
      } else {
        error.value = authStore.error
      }
    } catch (err) {
      console.log('ошибочка', err)
      error.value = 'ошибочка'
    }
  }

  return {
    state,
    error,
    v$,
    submitForm
  }
}
