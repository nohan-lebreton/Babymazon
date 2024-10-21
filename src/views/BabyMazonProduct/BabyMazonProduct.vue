<script setup>
import BabyMazonHeader from '/src/components/BabyMazonHeader/BabyMazonHeader.vue'
import { useRoute } from 'vue-router'
import ProductGallery from './components/ProductGallery.vue'
import { useProductStock } from '@/views/BabyMazonStore/productStore'
import ProductDetails from './components/ProductDetails.vue'
import PurchaseCol from './components/PurchaseCol.vue'
import { useProductBasket } from '@/views/BabyMazonBasket/productBasket'

const productStock = useProductStock()
const route = useRoute()
const productId = route.params.id

const theStock = productStock.getStockById(productId)
//console.log(theStock)
const theProduct = theStock.product
//console.log(theProduct)

const productBasket = useProductBasket()
function addProductToBasket({ quantity }) {
  console.log(quantity)
  productBasket.addProductToBasket(productId, quantity) // Passer l'ID du produit et la quantité
  console.log(productBasket.basket)
}
</script>

<template>
  <BabyMazonHeader />
  <div class="productDetailsContainer">
    <ProductGallery :imagePathList="theProduct.imagePath" />
    <ProductDetails
      :name="theProduct.name"
      :stars="theProduct.stars"
      :price="theProduct.price"
      :onSale="theProduct.onSale"
      :description="theProduct.description"
    />
    <PurchaseCol
      :price="theProduct.price"
      :status="theProduct.status"
      :quantity="theStock.quantity"
      @addProductToBasket="addProductToBasket"
    />
  </div>
</template>
<style scoped>
.productDetailsContainer {
  margin: 5% 10% 5% 10%;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
}
</style>
