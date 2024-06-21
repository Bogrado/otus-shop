import { ref } from 'vue'
import { useApi } from '@/composables/useApi.js'

export const useDeleteForm = (currentProductId, closeDeleteProductModal, loadProducts) => {
  const { deleteData } = useApi()
  const error = ref('')

  const deleteProduct = async () => {
    try {
      await deleteData?.(`items/${currentProductId.value}`)
      await loadProducts()
      closeDeleteProductModal()
    } catch (err) {
      console.error('Ошибка при удалении: ' + err)
      error.value = 'Ошибка при удалении'
    }
  }

  return {
    deleteProduct,
    error
  }
}
