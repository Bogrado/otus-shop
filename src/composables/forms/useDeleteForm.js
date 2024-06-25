import { ref } from 'vue'
import { useApi } from '@/composables/useApi.js'
import { useItemsManagerStore } from '@/stores/itemsManagerStore.js'

export const useDeleteForm = (emit) => {
  const { deleteData } = useApi()
  const itemsManagerStore = useItemsManagerStore()
  const error = ref('')

  const confirmDelete = async (id) => {
    try {
      await deleteData?.(`items/${id}`)
      emit('closeModal')
      await itemsManagerStore.loadProducts()
    } catch (err) {
      error.value = 'Ошибка при удалении товара: ' + err.message
    }
  }

  return {
    confirmDelete,
    error
  }
}
