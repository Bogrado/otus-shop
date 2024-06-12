<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4 w-1/3 mx-auto text-center">Товары</h1>

    <div class="max-w-screen-lg mx-auto">
      <div
        class="flex flex-col sm:flex-row justify-between gap-4 w-full items-center border rounded-lg shadow p-4"
      >
        <div class="w-full sm:w-1/3">
          <AppSearchBar v-model="searchQuery" />
        </div>
        <div class="w-full sm:w-1/3">
          <AppSortBar v-model="sortKey" />
        </div>
      </div>
    </div>

    <div class="max-w-screen-lg mx-auto mt-4">
      <products-list :products="productStore.state.products" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useProductStore } from '../stores/productStore'
import AppSearchBar from '../components/AppSearchBar.vue'
import AppSortBar from '../components/AppSortBar.vue'
import ProductsList from '../components/ProductsList.vue'

const productStore = useProductStore()

const searchQuery = ref('')
const sortKey = ref('name')
</script>

<style scoped></style>
