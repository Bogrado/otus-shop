<template>
  <h1 class="text-3xl font-bold mb-4 w-1/3 mx-auto text-center">Товары</h1>


  <div class="pt-4">
    <app-filters-bar />
    <div v-auto-animate="{ duration: 500 }" class="pt-4">
      <div v-if="props.loading">
        <AppPreloader />
      </div>
      <ProductsList v-else :products="productStore.getCatalogProducts" />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue'
import { useCatalogStore } from '@/stores/catalog/catalogStore.js'
import ProductsList from '../components/homePage/ProductsList.vue'
import AppPreloader from '../components/main/AppPreloader.vue'
import AppFiltersBar from '@/components/homePage/AppFiltersBar.vue'
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

const load = () => productStore.loadProducts({ params: params.value })

onMounted(() => {
  load()
})

watch([params], load, { deep: true })
</script>
