import { defineStore } from 'pinia'
import { reactive, computed } from 'vue'
import LoginForm from '@/components/forms/LoginForm.vue'
import RegisterForm from '@/components/forms/RegisterForm.vue'
import AdminProductForm from '@/components/forms/AdminProductForm.vue'

export const useModalStore = defineStore('modal', () => {
  const state = reactive({
    isOpen: false,
    modalKey: ''
  })

  const formsContainer = {
    login: LoginForm,
    register: RegisterForm,
    createItem: AdminProductForm
  }

  const openModal = (key) => {
    state.modalKey = key
    state.isOpen = true
  }

  const closeModal = () => {
    state.modalKey = ''
    state.isOpen = false
  }

  const switchModal = (newKey) => {
    closeModal()
    setTimeout(() => {
      openModal(newKey)
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
