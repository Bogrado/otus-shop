import { useAuthStore } from '@/stores/authStore.js'
import { reactive, ref } from 'vue'
import { useValidation } from '@/composables/useValidation.js'
import { required, email } from '@vuelidate/validators'

export const useRegisterForm = (emit) => {
  const authStore = useAuthStore()
  const state = reactive({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const error = ref('')

  const schema = {
    fullName: { required, length: value => value.length >= 3 || value === 'Ян' },
    email: { required, email },
    password: { required, length: value => value.length >= 5 },
    confirmPassword: { required, sameAsPassword: value => value === state.password }
  }

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
        emit('closeModal') // Убедитесь, что emit вызывается здесь
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
