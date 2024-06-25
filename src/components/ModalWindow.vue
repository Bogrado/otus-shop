<script setup>
import { useModalStore } from '@/stores/modalStore'
import { computed } from 'vue'
import CrossIcon from '@/components/icons/CrossIcon.vue'

const modalStore = useModalStore()

const closeModal = () => {
  modalStore.closeModal()
}

const Component = computed(() => modalStore.currentComponent)
const componentProps = computed(() => modalStore.state.itemId ? { itemId: modalStore.state.itemId } : null) // я даже не знал, что так можно пропсы баиндить, ахренеть
</script>

<template>
  <Teleport to="body">
    <div v-if="modalStore.state.isOpen"
         class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
         @click="closeModal">
      <div class="bg-gray-500 p-6 rounded shadow-lg relative" @click.stop>
        <button class="absolute top-1 right-1" @click="closeModal">
          <CrossIcon class="hover:fill-gray-700 transition duration-300 w-6 h-6" />
        </button>
        <component
          :is="Component"
          v-bind="componentProps"
          @close-modal="closeModal"
          @switch-to="modalStore.switchModal"
        />
      </div>
    </div>
  </Teleport>
</template>
