<script setup>
import AppPreloader from '@/components/AppPreloader.vue'
import AdminProductTable from '@/components/admin/table/AdminProductTable.vue'
import { onMounted, ref } from 'vue'
import { useApi } from '@/composables/useApi.js'
import AppModal from '@/components/AppModal.vue'
import AdminProductForm from '@/components/admin/AdminProductForm.vue'
import { useModal } from '@/composables/useModal.js'

defineProps({
  loading: {
    type: Boolean,
    required: true
  }
})
const { getData } = useApi()
const items = ref([])

const addProductModal = useModal('addProduct')

const loadProducts = async () => {
  try {
    items.value = await getData?.('items', { params: { _select: 'id,title,price,category' } })
  } catch (error) {
    console.error('Error loading products:', error)
  }
}

onMounted(() => {
  loadProducts()
})
</script>

<template>
  <div v-auto-animate>
    <app-preloader v-if="loading" />
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8" v-else>
      <div class="bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6 flex justify-between items-center">
          <h3 class="text-lg leading-6 font-medium text-gray-900">Products</h3>
          <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" @click="addProductModal.openModal('addProduct')">Add Product</button>
        </div>
        <admin-product-table :items="items" />
        <div v-auto-animate>
          <app-modal :is-open="addProductModal.isModalOpen.value" @close="addProductModal.closeModal">
            <template #modalContent><admin-product-form @close="addProductModal.closeModal" /></template>
          </app-modal>
        </div>
      </div>
    </div>
  </div>
</template>
