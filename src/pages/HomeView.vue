<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-8 w-1/3 mx-auto text-center">Товары</h1>

    <div class="max-w-screen-lg mx-auto">
      <div class="flex flex-col sm:flex-row justify-between gap-4 w-full items-center border rounded-lg shadow p-4">
        <div class="w-full sm:w-1/3">
          <AppSearchBar v-model="searchQuery" />
        </div>
        <div class="w-full sm:w-1/3 sm:text-right">
          <AppSortBar v-model="sortKey" />
        </div>
      </div>
    </div>

    <div class="max-w-screen-lg mx-auto mt-4">
      <products-list :products="filteredAndSortedProducts" />
    </div>
  </div>
</template>

<script setup>
import ProductsList from '@/components/ProductsList.vue'
import AppSearchBar from '@/components/AppSearchBar.vue'
import { computed, onMounted, ref } from 'vue'
import AppSortBar from '@/components/AppSortBar.vue'

const products = ref([])
const searchQuery = ref('')
const sortKey = ref('name')

const searchProducts = (products, query) => {
  if (!query) return products
  return products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase())
  )
}

const sortProducts = (products, key) => {
  return products.sort((a, b) => {
    if (a[key] < b[key]) return -1
    if (a[key] > b[key]) return 1
    return 0
  })
}

const filteredAndSortedProducts = computed(() => {
  let filtered = searchProducts(products.value, searchQuery.value)
  return sortProducts(filtered, sortKey.value)
})


onMounted(() => {
  products.value = [
    { id: 1, name: 'Продукт 1', price: 1000, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Продукт 2', price: 1500, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Продукт 3', price: 2000, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Продукт 4', price: 1000, image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Продукт 5', price: 1500, image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Продукт 6', price: 2000, image: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Абоба 2', price: 1500, image: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Продукт 7', price: 2000, image: 'https://via.placeholder.com/150' }
  ]
})
</script>

<style scoped>
</style>
