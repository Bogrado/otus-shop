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

const onClickDecrease = () => emit('onClickDecrease')
const onClickIncrease = () => emit('onClickIncrease')
</script>

<template>
  <div class="flex items-center">
    <button>
      <remove-icon
        class="fill-blue-600 hover:fill-red-900 transition duration-300': quantity > 1 "
        @click="onClickDecrease"
      />
    </button>
    <div class="w-6 h-6 border rounded-md border-blue-600 flex items-center justify-center">
      {{ props.quantity < 10 ? `0${props.quantity}` : props.quantity }}
    </div>
    <button>
      <add-icon class="fill-blue-600 hover:fill-blue-900 transition duration-300" @click="onClickIncrease" />
    </button>
  </div>
</template>
