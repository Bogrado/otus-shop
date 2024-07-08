import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), routes: [{
    path: '/', name: 'Home', component: () => import('@/pages/HomeView.vue')
  }, {
    path: '/cart', name: 'Cart', component: () => import('@/pages/CartView.vue')
  }, {
    path: '/product/:id', name: 'Product', component: () => import('@/pages/ProductView.vue')
  }, {
    path: '/checkout', name: 'Checkout', component: () => import('@/pages/CheckoutView.vue'), meta: {
      requiresAuth: true
    }
  }, {
    path: '/profile', name: 'Profile', component: () => import('@/pages/ProfileView.vue')
  }, {
    path: '/favorites', name: 'FavoriteProducts', component: () => import('@/pages/FavoriteProductsView.vue')
  }, {
    path: '/admin', name: 'AdminPanel', component: () => import('@/pages/admin/AdminView.vue'), meta: {
      requiresAdmin: true
    }, children: [{
      path: 'dashboard', component: () => import('@/pages/admin/AdminDashboard.vue')
    }, {
      path: 'products', component: () => import('@/pages/admin/AdminProducts.vue')
    }]
  }, {
    path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/pages/NotFound.vue')
  }]
})

// router.beforeEach((to, from, next) => {
//   const authStore = useAuthStore()
//   if (to.matched.some((record) => record.meta.requiresAdmin)) {
//     if (!authStore.isAdmin) {
//       next({ name: 'Home' })
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
// })
//
// router.beforeEach((to, from, next) => {
//   const authStore = useAuthStore()
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (!authStore.token) {
//       next({ name: 'Home' })
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
// })



// сам бы я ни за что до такого не додумался, украду такую реализацию
/*
* Создаю объект проверок, который содержит ключи мета данных и значения функции проверки.
* В beforeEach прохожусь по этому объекту и для каждого ключа проверяю, есть ли в маршруте соответствующая мета и выполняется ли проверка.
* Если проверка не прошла, выполняю переход на главную страницу.
*/

const authCheckers = {
  requiresAuth: (authStore) => !!authStore.token, requiresAdmin: (authStore) => authStore.isAdmin
}

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  for (const [metaKey, check] of Object.entries(authCheckers)) {
    if (to.matched.some(record => record.meta[metaKey])) {
      if (!check(authStore)) {
        next({ name: 'Home' })
        return
      }
    }
  }

  next()
})


export default router
