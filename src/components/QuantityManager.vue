<script setup>
import RemoveIcon from '@/components/icons/RemoveIcon.vue'
import AddIcon from '@/components/icons/AddIcon.vue'

const props = defineProps({
  quantity: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['onClickDecrease', 'onClickIncrease'])

const onClickDecrease = () => {
  if (props.quantity > 1) {
    emit('onClickDecrease')
  }
}
const onClickIncrease = () => {
  emit('onClickIncrease')
}
</script>

<template>
  <div class="flex items-center">
    <button
      :disabled="quantity === 1"
      :class="{ 'cursor-not-allowed': quantity === 1 }">
      <remove-icon :class="{ 'fill-gray-700 hover:fill-red-900': quantity > 1 }" @click="onClickDecrease" />
    </button>
    <div class="w-6 h-6 border rounded-md border-gray-600 flex items-center justify-center">
      {{ props.quantity }}
    </div>
    <button>
      <add-icon class="fill-gray-700 hover:fill-blue-900" @click="onClickIncrease" />
    </button>
  </div>
</template>