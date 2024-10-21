<script setup>
import { useProductStock } from '@/views/BabyMazonStore/productStore'
import ProductCard from './ProductCard.vue'

const productStock = useProductStock()
const categories = productStock.getAllCategory
//console.log(categories)
//console.log(kitchenProducts[1].id)
</script>

<template>
  <div class="categoriesContainer" v-for="category in categories" :key="category">
    <h2>{{ category }}</h2>
    <div class="productCardsContainer">
      <div v-for="product in productStock.getProductsByCategory(category)" :key="product.id">
        <ProductCard
          :id="product.id"
          :title="product.name"
          :price="product.price"
          :imagePath="product.imagePath[0]"
          :stars="product.stars"
          :status="product.status"
          :onSale="product.onSale"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.productCardsContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px;
}

.categoriesContainer {
  margin-left: 10%;
  margin-right: 10%;
}
</style>
