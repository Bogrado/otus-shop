import { defineStore } from 'pinia'
import { reactive, computed } from 'vue'
import LoginForm from '@/components/forms/LoginForm.vue'
import RegisterForm from '@/components/forms/RegisterForm.vue'
import AdminProductForm from '@/components/forms/AdminProductForm.vue'

export const useModalStore = defineStore('modal', () => {
  const state = reactive({
    isOpen: false,
    modalKey: '',
    itemId: null
  })

  const formsContainer = {
    login: LoginForm,
    register: RegisterForm,
    createItem: AdminProductForm,
    editItem: AdminProductForm
  }

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
    formsContainer,
    openModal,
    closeModal,
    switchModal,
    currentComponent
  }
})
