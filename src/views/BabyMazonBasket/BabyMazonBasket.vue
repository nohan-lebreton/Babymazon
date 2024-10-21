<script setup>
import BasketList from './components/BasketList.vue'
import BuySquare from './components/BuySquare.vue'
import BabyMazonHeader from '/src/components/BabyMazonHeader/BabyMazonHeader.vue'
import { useProductBasket } from '@/views/BabyMazonBasket/productBasket'

const basket = useProductBasket()
const totalPrice = basket.getTotalPrice
const totalItems = basket.getTotalQuantity
</script>

<template>
  <BabyMazonHeader />
  <div class="basketContainer">
    <BasketList />
    <BuySquare :totalItems="totalItems" :totalPrice="totalPrice" />
  </div>
</template>

<style scoped>
.basketContainer {
  margin: 2% 10% 2% 10%;
  display: flex;
}
</style>
