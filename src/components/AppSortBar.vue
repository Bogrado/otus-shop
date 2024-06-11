<template>
  <div class="mb-4">
    <label for="sort" class="mr-2">Сортировать по:</label>
    <select
      id="sort"
      v-model="selectedSortKey"
      @change="onSortChange"
      class="border p-2 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-gray-300"
    >
      <option value="name">Название</option>
      <option value="price">Цена</option>
      <option value="category">Категория</option>
    </select>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  }
});

const emits = defineEmits(['update:modelValue']);

const selectedSortKey = ref(props.modelValue);

const onSortChange = () => {
  emits('update:modelValue', selectedSortKey.value);
};
</script>

<style scoped>
</style>
