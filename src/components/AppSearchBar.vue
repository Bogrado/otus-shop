<template>
  <div class="mb-4">
    <input
      type="text"
      v-model="query"
      @input="onInput"
      placeholder="Поиск по названию..."
      class="border p-2 w-full rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-gray-300"
    />
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

const query = ref(props.modelValue);

const onInput = () => {
  emits('update:modelValue', query.value);
};
</script>

<style scoped>
</style>
