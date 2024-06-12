import { defineStore } from 'pinia';
import { reactive, computed } from 'vue';
import { fetchProducts } from '@/services/apiService';

export const useProductStore = defineStore('product', () => {
  const state = reactive({
    products: [],
  });

  const getProductById = (id) => {
    return state.products.find(product => product.id === id);
  };

  const loadProducts = async () => {
    try {
      state.products = await fetchProducts();
    } catch (error) {
      console.error('Failed to load products:', error);
    }
  };

  // Геттер для получения продуктов
  const products = computed(() => state.products);

  return {
    state,
    products,
    getProductById,
    loadProducts,
  };
});
