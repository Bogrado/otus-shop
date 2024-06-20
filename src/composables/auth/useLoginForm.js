// src/composables/useLoginForm.js
import { ref } from 'vue';
import { useAuthStore } from '@/stores/authStore';

export const useLoginForm = (emit) => {
  const authStore = useAuthStore();
  const email = ref('');
  const password = ref('');
  const rememberMe = ref(false);
  const error = ref(null);
  const isLoggedIn = ref(false);

  const resetForm = () => {
    email.value = '';
    password.value = '';
    rememberMe.value = false;
    error.value = null;
    isLoggedIn.value = false;
  };

  const submitForm = async () => {
    try {
      await authStore.login(email.value, password.value, rememberMe.value);
      if (!authStore.error) {
        isLoggedIn.value = true;
        emit('closeModal');
      } else {
        error.value = authStore.error;
      }
    } catch (err) {
      error.value = 'ошибочка';
    }
  };

  return {
    email,
    password,
    rememberMe,
    error,
    isLoggedIn,
    submitForm,
    resetForm,
  };
};
