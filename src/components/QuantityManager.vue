<template>
  <div class="flex items-center">
    <button>
      <remove-icon class="hover:fill-gray-700" />
    </button>
    <input type="number"
           class="w-12 text-center border rounded mx-2"
    />
    <button>
      <add-icon class="hover:fill-gray-700" />
    </button>
  </div>
</template>
<script setup>
import RemoveIcon from '@/components/icons/RemoveIcon.vue'
import AddIcon from '@/components/icons/AddIcon.vue'
</script>