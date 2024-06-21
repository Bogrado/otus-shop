import { ref, computed } from 'vue'
import { useModal } from '@/composables/forms/useModal.js'

export const useAdminProductForms = () => {
  const addProductModal = useModal('addProduct')
  const editProductModal = useModal('editProduct')
  const deleteProductModal = useModal('deleteProduct')
  const currentProductId = ref(null)

  const openAddProductModal = () => addProductModal.openModal()
  const openEditProductModal = (productId) => {
    currentProductId.value = productId
    editProductModal.openModal()
  }
  const openDeleteProductModal = (productId) => {
    currentProductId.value = productId
    deleteProductModal.openModal()
  }

  const closeAddProductModal = () => addProductModal.closeModal()
  const closeEditProductModal = () => editProductModal.closeModal()
  const closeDeleteProductModal = () => deleteProductModal.closeModal()

  const currProdId = computed(() => currentProductId.value)

  return {
    addProductModal,
    editProductModal,
    deleteProductModal,
    currentProductId,
    openAddProductModal,
    openEditProductModal,
    openDeleteProductModal,
    closeAddProductModal,
    closeEditProductModal,
    closeDeleteProductModal,
    currProdId
  }
}
