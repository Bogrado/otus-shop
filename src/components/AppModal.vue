<script setup>
import CrossIcon from '@/components/icons/CrossIcon.vue'

defineProps({
  isOpen: {
    type: Boolean,
    required: false
  }
})

const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}
</script>
<template>
  <div v-if="isOpen"
       class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
       @click="closeModal">
    <div class="bg-white p-6 rounded shadow-lg relative" @click.stop.prevent>
      <button class="absolute top-6 right-6 p-2 " @click="closeModal">
        <cross-icon class="hover:fill-gray-700 transition duration-300 w-6 h-6" />
      </button>
      <slot name="modalTitle"><h1>hello</h1></slot>
    </div>
  </div>
</template>
