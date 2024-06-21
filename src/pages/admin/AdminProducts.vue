<script setup>
import AppPreloader from '@/components/AppPreloader.vue'
import AdminProductTable from '@/components/admin/table/AdminProductTable.vue'
import AppModal from '@/components/AppModal.vue'
import AdminProductForm from '@/components/forms/AdminProductForm.vue'
import AppConfirm from '@/components/forms/AppConfirm.vue'
import { useAdminProductForms } from '@/composables/forms/useAdminProductForms.js'
import { useApi } from '@/composables/useApi.js'
import { useDeleteForm } from '@/composables/forms/useDeleteForm.js'
import { onMounted, ref } from 'vue'

defineProps({
  loading: {
    type: Boolean,
    required: true
  }
})

const {
  addProductModal,
  editProductModal,
  deleteProductModal,
  openAddProductModal,
  openEditProductModal,
  openDeleteProductModal,
  closeAddProductModal,
  closeEditProductModal,
  closeDeleteProductModal,
  currProdId
} = useAdminProductForms()

const { getData } = useApi()
const items = ref([])

const loadProducts = async () => {
  try {
    items.value = await getData?.('items', { params: { _select: 'id,title,price,category' } })
  } catch (error) {
    console.error('Error loading products:', error)
  }
}

const handleProductSaved = () => {
  loadProducts()
  closeAddProductModal?.()
  closeEditProductModal?.()
}

const { deleteProduct, error } = useDeleteForm(currProdId, closeDeleteProductModal, loadProducts)

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
          <h3 class="text-lg leading-6 font-medium text-gray-900">Товары</h3>
          <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  @click="openAddProductModal">Добавить товар
          </button>
        </div>
        <admin-product-table
          :items="items"
          @on-click-edit="openEditProductModal"
          @on-click-delete="openDeleteProductModal"
        />
        <div v-auto-animate>
          <app-modal :is-open="deleteProductModal.isModalOpen.value" @close="closeDeleteProductModal">
            <template #modalContent>
              <app-confirm @close="closeDeleteProductModal" @confirm="deleteProduct" />
              <div v-if="error" class="text-red-500">{{ error }}</div>
            </template>
          </app-modal>

          <app-modal :is-open="addProductModal.isModalOpen.value" @close="closeAddProductModal">
            <template #modalContent>
              <admin-product-form @close="closeAddProductModal" @productSaved="handleProductSaved" />
            </template>
          </app-modal>

          <app-modal :is-open="editProductModal.isModalOpen.value" @close="closeEditProductModal">
            <template #modalContent>
              <admin-product-form
                :productId="currProdId"
                @close="closeEditProductModal"
                @productSaved="handleProductSaved" />
            </template>
          </app-modal>
        </div>
      </div>
    </div>
  </div>
</template>
