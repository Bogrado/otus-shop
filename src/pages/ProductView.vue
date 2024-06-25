<template>
  <div v-auto-animate>
    <div v-if="loading" class="flex justify-center items-center h-screen">
      <AppPreloader />
    </div>
    <div v-else>
      <h1 class="text-3xl font-bold mb-4 w-full text-center">{{ product.title }}</h1>

      <div class="container mx-auto p-4">
        <div class="flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
          <!-- Левая колонка с изображением продукта -->
          <div class="w-full lg:w-3/5 bg-white p-4 rounded-lg shadow-md lg:h-96">
            <div class="w-full h-80 bg-white flex items-center justify-center rounded-lg overflow-hidden">
              <img :src="product.image" alt="Product Image" class="object-contain h-full w-full" />
            </div>
          </div>
          <!-- Центральная колонка с информацией о продукте -->
          <div class="w-full lg:w-2/5 bg-white p-4 rounded-lg shadow-md">
            <div class="text-gray-500 mb-4 flex items-center gap-1">
              {{ product.rating ? product.rating.rate : 0 }}
              <star-icon class="w-4" />
              {{ product.rating ? product.rating.count : 0 }} оценок
            </div>
            <div class="mb-4">
              <div class="flex justify-between">
                <span class="text-gray-500">Категория</span>
                <span>{{ product.category }}</span>
              </div>
            </div>
            <div>
              <h1 class="text-lg font-bold mb-4 text-gray-500">Description</h1>
              <p>{{ product.description }}</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur autem iure placeat rem? Alias aspernatur atque blanditiis doloremque dolorum eaque provident reiciendis sint, ut velit! Aliquam, culpa dolorum est, hic ipsa iste nam necessitatibus odit optio recusandae sint unde. Animi aut cumque esse ex id illum impedit natus odio totam ut? Doloribus eum excepturi, magni nesciunt nisi unde ut vel velit voluptatibus. Accusantium adipisci architecto assumenda at aut, commodi consequatur, dicta distinctio dolor dolore eius eveniet expedita facere facilis harum laborum minima minus modi molestiae nam non porro praesentium quasi, quibusdam quisquam quod quos reiciendis sint vero voluptas. Blanditiis?</p>
            </div>
          </div>
          <!-- Правая колонка с информацией о покупке -->
          <app-summary class="w-full lg:w-1/3 bg-white p-4 rounded-lg shadow-md">
            <template #header>
              <div class="text-lg font-bold mb-4 line-clamp-1 text-ellipsis overflow-hidden">{{ product.title }}</div>
            </template>
            <template #body>
              <div class="flex justify-between">
                <div class="text-lg font-bold mb-4">Цена:</div>
                <div class="text-lg font-bold mb-4">{{ product.price }} ₽</div>
              </div>
            </template>
            <template #footer>
              <div v-auto-animate class="mt-4 flex justify-center " @click.stop>
                <div
                  v-if="isInCart"
                  class="border-2 border-blue-600 text-blue-600 py-0.5 px-6 rounded-2xl hover:border-blue-900 hover:text-blue-900 hover:bg-blue-100 transition duration-300 min-w-40 flex justify-center items-center">
                  <quantity-manager
                    :quantity="quantity"
                    @on-click-decrease="removeItem(product.id)"
                    @on-click-increase="addItem(product.id)"
                  />
                </div>
                <button
                  v-else
                  @click="addItem(product.id)"
                  class="border-2 border-blue-600 text-blue-600 py-1.5 px-6 rounded-2xl hover:border-blue-900 hover:text-blue-900 hover:bg-blue-100 transition duration-300 active:bg-green-700 min-w-40 flex justify-center items-center"
                >
                  Купить
                </button>
              </div>
            </template>
          </app-summary>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed, onMounted } from 'vue'
import { useProductStore } from '@/stores/product/productStore'
import AppPreloader from '@/components/AppPreloader.vue'
import StarIcon from '@/components/icons/StarIcon.vue'
import AppSummary from '@/components/AppSummary.vue'
import QuantityManager from '@/components/QuantityManager.vue'
import { useCartStore } from '@/stores/cart/cartStore.js'
import { useCart } from '@/composables/useCart.js'

defineProps({
  loading: {
    type: Boolean,
    required: true
  }
})

const route = useRoute()
const productStore = useProductStore()
const product = computed(() => productStore.getProduct)

const cartStore = useCartStore()
const isInCart = computed(() => cartStore.itemIds.includes(product.value.id))
const quantity = computed(() => cartStore.itemQuantity(product.value.id))

const { addItem, removeItem } = useCart()

onMounted(() => {
  const productId = route.params.id
  productStore.loadProduct(productId)
})
</script>