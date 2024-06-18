<template>
  <div class="mb-4">
    <input
      :value="title"
      @input="updateSearch"
      type="text"
      placeholder="Поиск по названию..."
      class="border p-2 w-full rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-gray-300"
    />
  </div>
</template>

<script setup>
import { useCatalogParamsStore } from '@/stores/catalog/catalogParams.js'
import debounce from 'lodash.debounce'
import { computed } from 'vue'

const catalogParamsStore = useCatalogParamsStore()
const title = computed(() => catalogParamsStore.getTitle)

const updateSearch = debounce((evt) => {
  catalogParamsStore.setTitle(evt.target.value)
}, 600)

</script>

<style scoped></style>
