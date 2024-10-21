<script setup>
import { useProductBasket } from '@/views/BabyMazonBasket/productBasket'
import { useProductStock } from '@/views/BabyMazonStore/productStore'
import BasketProduct from './BasketProduct.vue'
const productStock = useProductStock()
const productBasket = useProductBasket()
const basket = productBasket.basket

const handleDelete = (productId, quantity) => {
  console.log(productId, quantity)
  productBasket.removeProductToBasket(productId, quantity)
}
</script>

<template>
  <div class="basketList">
    <div class="headerBasketList">
      <p class="titleBasket">Shopping Basket</p>
      <p class="headerPrice">Price</p>
    </div>
    <hr class="gray" />
    <div v-for="product of basket" :key="product">
      <BasketProduct
        :id="productStock.getProductById(product.productId).id"
        :name="productStock.getProductById(product.productId).name"
        :price="productStock.getProductById(product.productId).price * product.quantity"
        :imagePath="productStock.getProductById(product.productId).imagePath[0]"
        :quantity="product.quantity"
        @delete="handleDelete"
      />
    </div>
  </div>
</template>

<style scoped>
.basketList {
  background-color: rgb(255, 255, 255);
  width: 70%;
  padding: 2%;
  margin: 2%;
}

.headerBasketList {
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.headerPrice {
  font-size: 20px;
  color: rgb(180, 180, 180);
}

.titleBasket {
  font-size: x-large;
}

.gray {
  color: rgb(180, 180, 180);
}
</style>
