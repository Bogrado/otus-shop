import { defineStore } from 'pinia'
import { reactive, computed } from 'vue'
import { formsContainer } from '@/composables/forms/formsContainer.js'

export const useModalStore = defineStore('modal', () => {
  const state = reactive({
    isOpen: false,
    modalKey: '',
    itemId: null
  })

  const openModal = (key, id = null) => {
    state.modalKey = key
    state.isOpen = true
    state.itemId = id
  }

  const closeModal = () => {
    state.modalKey = ''
    state.isOpen = false
    state.itemId = null
  }

  const switchModal = (newKey, id = null) => {
    closeModal()
    setTimeout(() => {
      openModal(newKey, id)
    }, 500)
  }

  const currentComponent = computed(() => {
    return formsContainer[state.modalKey] || null
  })

  return {
    state,
    openModal,
    closeModal,
    switchModal,
    currentComponent
  }
})
