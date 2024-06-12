<template>
  <div class="mb-4">
    <label for="sort" class="mr-2">Сортировка:</label>
    <select
      id="sort"
      class="border p-2 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-gray-300"
      @change="onChangeSort"
    >
      <option
        v-for="filter in filters"
        :key="filter.value"
        :value="filter.value"
        :selected="filter.value === sortKey"
      >
        {{ filter.label }}
      </option>
    </select>
  </div>
</template>

<script setup>
defineProps({
  sortKey: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['onChangeSort'])

const onChangeSort = (event) => {
  emit('onChangeSort', event.target.value)
}

const filters = [
  { label: 'По умолчанию', value: '' },
  { label: 'По названию', value: 'title' },
  { label: 'По цене (Сначала недорогие)', value: 'price' },
  { label: 'По цене (Подороже)', value: '-price' },
  { label: 'По категории', value: 'category' }
]
</script>

<style scoped></style>
