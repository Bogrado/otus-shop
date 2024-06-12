import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useProductStore = defineStore('product', () => {
  const state = reactive({
    products: [
      {
        id: 1,
        name: 'Продукт 1',
        price: 1000,
        category: 'Категория 1',
        image: 'https://via.placeholder.com/150'
      },
      {
        id: 2,
        name: 'Продукт 2',
        price: 1500,
        category: 'Категория 2',
        image: 'https://via.placeholder.com/150'
      },
      {
        id: 3,
        name: 'Продукт 3',
        price: 2000,
        category: 'Категория 1',
        image: 'https://via.placeholder.com/150'
      },
      {
        id: 4,
        name: 'Продукт 4',
        price: 2500,
        category: 'Категория 2',
        image: 'https://via.placeholder.com/150'
      }
    ]
  })

  const getProductById = (id) => {
    return state.products.find((product) => product.id === id)
  }

  return {
    state,
    getProductById
  }
})
