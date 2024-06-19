import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useModalStore = defineStore('modal', () => {
  const modalStates = ref({})

  const openModal = (modalKey) => {
    modalStates.value = { ...modalStates.value, [modalKey]: true }
  }

  const closeModal = (modalKey) => {
    modalStates.value = { ...modalStates.value, [modalKey]: false }
  }

  const isOpen = (modalKey) => computed(() => !!modalStates.value[modalKey])

  return {
    modalStates,
    openModal,
    closeModal,
    isOpen
  }
})
