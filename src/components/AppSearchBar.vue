<template>
  <div class="mb-4">
    <input
      :value="title"
      @input="onInputChange"
      type="text"
      placeholder="Поиск по названию..."
      class="border p-2 w-full rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-gray-300"
    />
  </div>
</template>

<script setup>

defineProps({
  title: {
    type: null,
    required: true
  }
})

const emit = defineEmits(['onInputChange'])
const onInputChange = (evt) => {
  emit('onInputChange', evt.target.value)
}

</script>

<style scoped></style>

const updateSearch = debounce((evt) => {
catalogParamsStore.setTitle(evt.target.value)
}, 600)