import { ref, computed } from 'vue'
import { useModalStore } from '@/stores/modalStore.js'

export const useModal = (modalKey) => {
  const modalStore = useModalStore()
  const modalType = ref('')

  const openModal = (type = '') => {
    modalStore.openModal(modalKey)
    modalType.value = type
  }

  const closeModal = () => {
    modalStore.closeModal(modalKey)
  }

  const switchModal = (newModalKey) => {
    closeModal()
    setTimeout(() => {
      modalStore.openModal(newModalKey)
    }, 300) // Чтобы анимашки не багались, как же тяжко это было родить, просто кошмар
  }

  const isModalOpen = computed(() => modalStore.isOpen(modalKey).value)

  return {
    openModal,
    closeModal,
    isModalOpen,
    modalType,
    switchModal
  }
}
