<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import DropDownIcon from '@/components/icons/DropDownIcon.vue'
import DropUpIcon from '@/components/icons/DropUpIcon.vue'

const { sortBy, filters } = defineProps({
  sortBy: {
    type: String,
    required: true
  },
  filters: {
    type: Array,
    required: true
  }
})
const emit = defineEmits(['on-sort-change'])

const dropdownOpen = ref(false)
const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}
const closeDropdown = () => {
  dropdownOpen.value = false
}
const handleClickOutside = (event) => {
  if (!event.target.closest('.relative')) {
    closeDropdown()
  }
}
onMounted(() => {
  document.addEventListener('click', handleClickOutside) // очень плохо, надо будет это переделать
})
onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})

const onSortChange = (value) => {
  emit('on-sort-change', value)
  console.log(value)
  closeDropdown()
}

const filterLabel = (value) => {
  return filters.find((filter) => filter.value === value)
}

</script>

<template>
  <div class="mb-4 flex items-center space-x-2">
    <span>Сортировка:</span>
    <div class="relative" v-auto-animate="{ duration: 100 }">
      <button
        @click="toggleDropdown"
        class="border p-2 rounded-lg shadow cursor-pointer flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-gray-300 w-64 bg-white group"
      >
        <span class="text-gray-400 group-focus:text-black  line-clamp-1 text-ellipsis overflow-hidden">{{ filterLabel(sortBy)?.label }}</span>
        <span v-auto-animate>
          <drop-down-icon v-if="!dropdownOpen" class="w-8 fill-gray-300 group-focus:fill-black" />
          <drop-up-icon v-else class="w-8 fill-gray-300 group-focus:fill-black" />
        </span>
      </button>
      <ul v-if="dropdownOpen" class="absolute left-0 mt-1 border bg-white shadow-lg rounded-lg w-64 z-10">
        <li
          v-for="filter in filters"
          :key="filter.value"
          class="cursor-pointer px-4 py-2 hover:bg-gray-200"
          @click="onSortChange(filter.value)"
        >
          {{ filter.label }}
        </li>
      </ul>
    </div>
  </div>
</template>
