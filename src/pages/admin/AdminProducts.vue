<script setup>
import AppPreloader from '@/components/AppPreloader.vue'
import AdminProductTable from '@/components/admin/table/AdminProductTable.vue'
import { computed, onMounted } from 'vue'
import { useModalStore } from '@/stores/modalStore.js'
import { useItemsManagerStore } from '@/stores/itemsManagerStore.js'

defineProps({
  loading: {
    type: Boolean,
    required: true
  }
})

const modalStore = useModalStore()
const itemsManagerStore = useItemsManagerStore()

const getItems = computed(() => itemsManagerStore.getItems)

const editItem = (id) => {
  console.log(id)
  itemsManagerStore.setItemId(id)
  modalStore.openModal('editItem', id)
}

const createItem = () => {
  itemsManagerStore.setItemId(null)
  modalStore.openModal('createItem')
}

const deleteItem = (id) => {
  itemsManagerStore.setItemId(id)
  modalStore.openModal('deleteItem', id)
}

onMounted(() => {
  itemsManagerStore.loadProducts()
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
                  @click="createItem"
          >Добавить товар
          </button>
        </div>
        <admin-product-table
          :items="getItems"
          @handle-edit-click="editItem"
          @handle-delete-click="deleteItem"
        />
      </div>
    </div>
  </div>
</template>
