<script setup>
import { computed } from 'vue'
import { IconBasket } from '@/components/icons'
import { useProductBasket } from '@/views/BabyMazonBasket/productBasket'

const productBasket = useProductBasket()

const basketQuantity = computed(() => productBasket.getTotalQuantity)
</script>

<template>
  <router-link class="basketBtn" :to="{ name: 'basket' }">
    <div class="basketCount">{{ basketQuantity }}</div>
    <IconBasket />
    <div class="basketTitle">Basket</div>
  </router-link>
</template>

<style scoped>
.basketBtn {
  color: orange;
  position: relative;
  display: inline-block;
  margin-right: 50px;
  cursor: pointer;
}

.basketCount {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%);
  color: rgb(219, 152, 6);
  font-size: 20px;
}

.basketTitle {
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(35%, -30%);
  font-style: normal;
}
</style>
