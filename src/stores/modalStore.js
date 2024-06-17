import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useModalStore = defineStore('modal', () => {
  const isOpen = ref(false)

  const openModal = () => {
    isOpen.value = true
  }

  const closeModal = () => {
    isOpen.value = false
  }

  const getIsOpen = computed(() => isOpen.value)

  return {
    isOpen,
    getIsOpen,
    openModal,
    closeModal
  }
})