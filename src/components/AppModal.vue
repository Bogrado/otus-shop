<script setup>
import CrossIcon from '@/components/icons/CrossIcon.vue'

defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}
</script>
<template>
  <div v-if="isOpen"
       class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
       @click="closeModal">
    <div class="bg-gray-500 p-6 rounded shadow-lg relative" @click.stop.prevent>
      <button class="absolute top-1 right-1" @click="closeModal">
        <cross-icon class="hover:fill-gray-700 transition duration-300 w-6 h-6" />
      </button>
      <slot name="modalContent" />
    </div>
  </div>
</template>
