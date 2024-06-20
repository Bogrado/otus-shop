<script setup>
import AppPreloader from '@/components/AppPreloader.vue'
import AdminProductTable from '@/components/admin/table/AdminProductTable.vue'
import { computed, onMounted, ref } from 'vue'
import { useApi } from '@/composables/useApi.js'
import AppModal from '@/components/AppModal.vue'
import AdminProductForm from '@/components/admin/AdminProductForm.vue'
import { useModal } from '@/composables/forms/useModal.js'

defineProps({
  loading: {
    type: Boolean,
    required: true
  }
})

const { getData } = useApi()
const items = ref([])

const addProductModal = useModal('addProduct')
const editProductModal = useModal('editProduct')
const currentProductId = ref()

const loadProducts = async () => {
  try {
    items.value = await getData?.('items', { params: { _select: 'id,title,price,category' } })
  } catch (error) {
    console.error('Error loading products:', error)
  }
}

const handleEditProduct = (productId) => {
  currentProductId.value = productId
  setTimeout(() => {
    if (currentProductId.value === productId) {
      editProductModal.openModal()
    }
  }, 200)
  console.log(currentProductId.value)
  console.log('ловлю айдишник из table edit:' + productId)
}

const handleProductSaved = () => {
  loadProducts()
  addProductModal.closeModal()
  editProductModal.closeModal()
}

const currProdId = computed(() => {
  console.log(currentProductId.value)
  return currentProductId.value
})

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
                  @click="addProductModal.openModal()">Добавить товар
          </button>
        </div>
        <admin-product-table :items="items" @on-click-edit="handleEditProduct($event)" />
        <div v-auto-animate>
          <app-modal :is-open="addProductModal.isModalOpen.value" @close="addProductModal.closeModal">
            <template #modalContent>
              <admin-product-form @close="addProductModal.closeModal" @productSaved="handleProductSaved" />
            </template>
          </app-modal>

          <app-modal :is-open="editProductModal.isModalOpen.value" @close="editProductModal.closeModal">
            <template #modalContent>
              <admin-product-form
                :productId="currProdId"
                @close="editProductModal.closeModal"
                @productSaved="handleProductSaved" />
            </template>
          </app-modal>
        </div>
      </div>
    </div>
  </div>
</template>