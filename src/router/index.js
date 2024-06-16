import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/HomeView.vue')
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('@/pages/CartView.vue')
    },

    {
      path: '/product/:id',
      name: 'Product',
      component: () => import('@/pages/ProductView.vue')
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: () => import('@/pages/CheckoutView.vue')
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('@/pages/ProfileView.vue')
    },
    {
      path: '/favorites',
      name: 'FavoriteProducts',
      component: () => import('@/pages/FavoriteProductsView.vue')
    }
  ]
})

export default router
