<script setup>
import AppPreloader from '@/components/AppPreloader.vue'
import AdminProductTable from '@/components/admin/table/AdminProductTable.vue'
import { useApi } from '@/composables/useApi.js'
import { onMounted, ref } from 'vue'
import { useLoadingStore } from '@/stores/loadingStore.js'
import { useModalStore } from '@/stores/modalStore.js'


defineProps({
  loading: {
    type: Boolean,
    required: true
  }
})
const modalStore = useModalStore()
const { getData } = useApi()
const items = ref([])
const loadingStore = useLoadingStore()

const loadProducts = async () => {
  loadingStore.setLoading(true)
  try {
    items.value = await getData?.('items', { params: { _select: 'id,title,price,category' } })
  } catch (error) {
    console.error('Error loading products:', error)
  } finally {
    loadingStore.setLoading(false)
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
          <h3 class="text-lg leading-6 font-medium text-gray-900">Товары</h3>
          <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  @click="modalStore.openModal('createItem')"
          >Добавить товар
          </button>
        </div>
        <admin-product-table
          :items="items"
          @handle-edit-click="modalStore.openModal('editItem')"
        />
      </div>
    </div>
  </div>
</template>
