<script setup>
import { ref, onMounted } from 'vue'
import { useApi } from '@/composables/useApi'
import AppPreloader from '@/components/AppPreloader.vue'

defineProps({
  loading: {
    type: Boolean,
    required: true
  }
})

const { getData } = useApi()

const totalProducts = ref(0)
const totalUsers = ref(0)
// const latestOrders = ref([])

const fetchDashboardData = async () => {
  try {
    const productsData = await getData('items', {})
    const usersData = await getData('users')
    // const ordersData = await getData('orders', { params: { _sort: 'created_at:desc', _limit: 5 } }) в этом проекте пока не реализовано, но надо сделать

    totalProducts.value = productsData.length
    totalUsers.value = usersData.length
    // latestOrders.value = ordersData
  } catch (error) {
    console.error('Failed to fetch dashboard data:', error)
  }
}

onMounted(fetchDashboardData)
</script>

<template>
  <div v-auto-animate>
    <app-preloader v-if="loading" />
    <div class="space-y-8" v-else>
      <div class="flex space-x-4">
        <div class="p-4 bg-white shadow rounded flex-1 text-center">
          <h2 class="text-2xl font-bold">Total Products</h2>
          <p class="text-xl">{{ totalProducts }}</p>
        </div>
        <div class="p-4 bg-white shadow rounded flex-1 text-center">
          <h2 class="text-2xl font-bold">Total Users</h2>
          <p class="text-xl">{{ totalUsers }}</p>
        </div>
      </div>
      <div class="p-4 bg-white shadow rounded">
        <h2 class="text-2xl font-bold mb-4">Latest Orders</h2>
      </div>
    </div>
  </div>
</template>
