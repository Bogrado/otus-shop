<template>
  <div class="mb-4">
    <input
      type="text"
      v-model="searchVal"
      @input="onInputHandler"
      placeholder="Поиск по названию..."
      class="border p-2 w-full rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-gray-300"
    />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
const emit = defineEmits(['on-change-search'])
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  }
})

const searchVal = ref(props.modelValue)

const onInputHandler = (event) => {
  emit('on-change-search', event.target.value)
}

watch(
  () => props.modelValue,
  (newVal) => {
    searchVal.value = newVal
  }
)
</script>

<style scoped></style>
