import { ref, reactive } from 'vue'
import { useApi } from '@/composables/useApi.js'
import { useValidation } from '@/composables/useValidation.js'
import { required, url, minLength, numeric, maxLength } from '@vuelidate/validators'

export const useProductForm = (emit) => {
  const { postData, patchData } = useApi()
  const isEditing = ref(false)
  const state = reactive({
    id: null,
    title: '',
    price: 0,
    category: '',
    description: '',
    image: ''
  })
  const error = ref('')

  const schema = {
    title: { required, minLength: minLength(5) },
    price: { required, numeric, price: value => value > 10 },
    category: { required, minLength: minLength(3), maxLength: maxLength(20) },
    description: { required, minLength: minLength(10) },
    image: { required, url, minLength: minLength(5) }
  }

  const { v$, validateForm } = useValidation(schema, state)

  const resetForm = () => {
    state.id = null
    state.title = ''
    state.price = 0
    state.category = ''
    state.description = ''
    state.image = ''
    error.value = null
    v$.value.$reset()
  }

  const submitForm = async () => {
    const isValid = await validateForm?.()
    if (!isValid) return
    try {
      if (isEditing.value) {
        await patchData?.(`items/${state.id}`, state)
      } else {
        await postData?.('items', state)
      }
      emit('productSaved')
      emit('closeModal')
      resetForm()
    } catch (err) {
      console.error('Ошибка при сохранении:', err)
      error.value = 'Ошибка при сохранении данных'
    }
  }

  const setFormData = (data) => {
    console.log('Данные из даты:', data)
    isEditing.value = true
    state.id = data.id
    state.title = data.title
    state.price = data.price
    state.category = data.category
    state.description = data.description
    state.image = data.image
  }

  return {
    state,
    error,
    v$,
    isEditing,
    submitForm,
    resetForm,
    setFormData
  }
}
