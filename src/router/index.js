import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'

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
    },
    {
      path: '/admin',
      name: 'AdminPanel',
      component: () => import('@/pages/admin/AdminView.vue'),
      meta: {
        requiresAdmin: true
      },
      children: [
        {
          path: 'dashboard',
          component: () => import('@/pages/admin/AdminDashboard.vue')
        },
        {
          path: 'products',
          component: () => import('@/pages/admin/AdminProducts.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/pages/NotFound.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  if (to.matched.some((record) => record.meta.requiresAdmin)) {
    if (!authStore.isAdmin) {
      next({ name: 'Home' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
