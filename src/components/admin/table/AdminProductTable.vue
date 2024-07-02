<script setup>
import THead from '@/components/admin/table/THead.vue'
import TBody from '@/components/admin/table/TBody.vue'
import { computed } from 'vue'

defineEmits(['handleEditClick', 'handleDeleteClick'])

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})
const keys = computed(() => props.items.length ? Object.keys(props.items[0]) : [])
</script>

<template>
  <div class="border-t border-gray-200">
    <table class="min-w-full divide-y divide-gray-200">
      <t-head :keys="keys" />
      <t-body
        :items="items"
        @on-edit-click="$emit('handleEditClick', $event)"
        @on-delete-click="$emit('handleDeleteClick', $event)"
      />
    </table>
  </div>
</template>
