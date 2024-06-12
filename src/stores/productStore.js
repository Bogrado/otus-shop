import { defineStore } from 'pinia';
import { reactive, computed } from 'vue';
import { fetchProducts } from '@/services/apiService';
import { useLoadingStore } from '@/stores/loadingStore.js'

export const useProductStore = defineStore('product', () => {
  const state = reactive({
    products: [],
  });

  const loadingStore = useLoadingStore();

  const getProductById = (id) => {
    return state.products.find(product => product.id === id);
  };

  const loadProducts = async () => {
    loadingStore.setLoading(true);
    try {
      state.products = await fetchProducts();
    } catch (error) {
      console.error('Failed to load products:', error);
    } finally {
      loadingStore.setLoading(false);
    }
  };

  const products = computed(() => state.products);

  return {
    state,
    products,
    getProductById,
    loadProducts,
  };
});
