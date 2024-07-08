import { ref, reactive, computed } from 'vue'
import { useAuthStore } from '@/stores/authStore.js'
import { useValidation } from '@/composables/validation/useValidation.js'
import { loginSchema } from '@/composables/validation/validationSchemas.js'

export const useLoginForm = (emit) => {
  const authStore = useAuthStore()
  const state = reactive({
    email: '',
    password: ''
  })
  const rememberMe = ref(false)
  const error = ref('')
  const isLoggedIn = ref(false)

  const { v$, validateForm } = useValidation(loginSchema, state)

  const resetForm = () => {
    state.email = ''
    state.password = ''
    rememberMe.value = false
    error.value = null
    isLoggedIn.value = false
    v$.value.$reset()
  }

  const submitForm = async () => {
    const isValid = await validateForm?.()
    if (!isValid) return

    try {
      await authStore.login?.(state.email, state.password, rememberMe.value)
      if (!authStore.error) {
        isLoggedIn.value = true
        setTimeout(() => {
          emit('closeModal')
        }, 1000)

      } else {
        error.value = authStore.error
      }
    } catch (err) {
      console.log('ошибочка', err)
      error.value = 'ошибочка'
    }
  }

  const logged = computed(() => isLoggedIn.value)

  return {
    state,
    rememberMe,
    error,
    logged,
    v$,
    submitForm,
    resetForm
  }
}