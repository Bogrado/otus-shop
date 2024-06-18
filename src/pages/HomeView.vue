<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4 w-1/3 mx-auto text-center">Товары</h1>
    <div v-if="props.loading">
      <AppPreloader />
    </div>
    <div class="max-w-screen-lg mx-auto mt-4">
      <ProductsList :products="catalogStore.getCatalogProducts" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, watch, computed } from 'vue'
import { updateSort, updateTitle } from '../utils/queryParamsUpdater'
import ProductsList from '../components/ProductsList.vue'
import AppPreloader from '../components/AppPreloader.vue'
import { useQueryParamsStore } from '@/stores/queryParamsStore.js'
import AppFiltersBar from '@/components/AppFiltersBar.vue'
import { useCatalogStore } from '@/stores/catalog/catalogStore.js'

const props = defineProps({
  loading: {
    type: Boolean,
    required: true
  }
})

const catalogStore = useCatalogStore()


onMounted(() => {
  catalogStore.loadProducts()
})

// watch([sortKey, searchQuery], () => {
//   productStore.loadProducts()
// })
</script>


<!--<app-filters-bar-->
<!--  :searchQuery="searchQuery"-->
<!--  :sortKey="sortKey"-->
<!--  @updateTitle="updateTitle"-->
<!--  @updateSort="updateSort"-->
<!--/>-->