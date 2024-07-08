<template>
  <div>
    <div
      class="flex flex-col sm:flex-row justify-between gap-4 w-full items-center border rounded-lg shadow p-4"
    >
      <div class="w-full sm:w-1/2">
        <AppSearchBar :title="title" @on-input-change="updateSearch"  />
      </div>
      <div class="w-full sm:w-1/2 flex justify-end">
        <AppSortBar :filters="filtersList" :sortBy="sortBy" @on-sort-change="updateSortBy" />
      </div>
    </div>
  </div>
</template>

<script setup>
import AppSearchBar from './AppSearchBar.vue'
import AppSortBar from './AppSortBar.vue'
import { useCatalogParams } from '@/composables/useCatalogParams.js'

const { updateSearch, updateSortBy, filtersList, title, sortBy } = useCatalogParams()
</script>
