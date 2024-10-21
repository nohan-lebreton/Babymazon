import { createRouter, createWebHistory } from 'vue-router'

const BabyMazonProduct = () => import('@/views/BabyMazonProduct/BabyMazonProduct.vue')
const BabyMazonStore = () => import('@/views/BabyMazonStore/BabyMazonStore.vue')
const BabyMazonBasket = () => import('@/views/BabyMazonBasket/BabyMazonBasket.vue')
const router = createRouter({
  history: createWebHistory(),

  routes: [
    { path: '/Home', name: 'Home', component: BabyMazonStore },
    { path: '/productDetails/:id', name: 'productDetails', component: BabyMazonProduct },
    { path: '/basket', name: 'basket', component: BabyMazonBasket }
  ]
})

export default router
