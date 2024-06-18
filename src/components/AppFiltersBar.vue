<template>
  <div class="max-w-screen-lg mx-auto">
    <div
      class="flex flex-col sm:flex-row justify-between gap-4 w-full items-center border rounded-lg shadow p-4"
    >
      <div class="w-full sm:w-1/2">
        <AppSearchBar />
      </div>
      <div class="w-full sm:w-1/2 flex justify-end">
        <AppSortBar @on-change-sort="updateSort" :sortKey="sortKey" />
      </div>
    </div>
  </div>
</template>

<script setup>
import AppSearchBar from './AppSearchBar.vue'
import AppSortBar from './AppSortBar.vue'

defineProps({
  searchQuery: {
    type: String,
    required: true
  },
  sortKey: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['updateTitle', 'updateSort'])

const updateTitle = (title) => {
  emit('updateTitle', title)
}

const updateSort = (sortBy) => {
  emit('updateSort', sortBy)
}
</script>
