<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4 w-1/3 mx-auto text-center">Товары</h1>

    <app-filters-bar
      :searchQuery="searchQuery"
      :sortKey="sortKey"
      @updateTitle="updateTitle"
      @updateSort="updateSort"
    />
    <div v-if="props.loading">
      <AppPreloader />
    </div>
    <div class="max-w-screen-lg mx-auto mt-4">
      <ProductsList :products="productStore.getCatalogProducts" />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue'
import { useCatalogStore } from '@/stores/catalog/catalogStore.js'
import ProductsList from '../components/ProductsList.vue'
import AppPreloader from '../components/AppPreloader.vue'
import AppFiltersBar from '@/components/AppFiltersBar.vue'
import { useCatalogParamsStore } from '@/stores/catalog/catalogParams.js'
const props = defineProps({
  loading: {
    type: Boolean,
    required: true
  }
})

const productStore = useCatalogStore()
const catalogParamsStore = useCatalogParamsStore()
const params = computed(() => catalogParamsStore.getParams)



onMounted(() => {
  productStore.loadProducts()
})

watch([params], productStore.loadProducts, { deep: true })
</script>
