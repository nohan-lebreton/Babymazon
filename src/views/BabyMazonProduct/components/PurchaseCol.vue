<script setup>
import { ref } from 'vue'

const props = defineProps({
  price: {
    type: Number,
    required: true,
    default: 0
  },
  status: {
    type: String,
    required: true,
    default: 'In stock'
  },
  quantity: {
    type: Number,
    required: true,
    default: 1
  }
})

const selectedQuantity = ref(1)
</script>
<template>
  <div class="purchaseCol">
    <H2>{{ price }}€</H2>
    <p>FREE delivery Friday, 18 October on your first order to France, Belgium and Luxembourg</p>
    <p>
      Separate Terms and Conditions may apply to items sold by third party sellers and shipped by
      Amazon internationally. Customs and Duties may apply. Manufacturer's warranty may not apply.
    </p>
    <p>Delivering to Nantes 44000 – Update location</p>
    <div
      :class="{
        status: true,
        inStock: status === 'In stock',
        lowStock: status === 'Low stock',
        outOfStock: status === 'Out of stock'
      }"
    >
      {{ status }}
    </div>
    <div v-if="props.status != 'Out of stock'">
      <select v-model="selectedQuantity" class="selectQuantity">
        <option v-for="quantity in props.quantity" :key="quantity">{{ quantity }}</option>
      </select>
      <button
        class="btnBasket"
        type="button"
        @click="$emit('addProductToBasket', { quantity: selectedQuantity })"
      >
        Add to Basket
      </button>
      <button class="btnBuy" type="button">Buy Now</button>
    </div>
  </div>
</template>

<style scoped>
.purchaseCol {
  padding: 20px;
  background-color: rgb(255, 255, 255);
  border: 2px solid black;
  width: 250px;
  flex-shrink: 0;
  height: fit-content;
}

.status {
  font-size: larger;
  text-align: start;
}

.inStock {
  color: green;
}

.lowStock {
  color: orange;
}

.outOfStock {
  color: red;
}

.selectQuantity {
  width: 100%;
  height: 25px;
  border-radius: 5px;
  background-color: #e3e6e6;
  border-color: #d4d4d4;
  margin-top: 10px;
  cursor: pointer;
}
.selectQuantity:hover {
  background-color: #c7c7c7;
}
.btnBasket {
  width: 100%;
  height: 25px;
  border-radius: 20px;
  background-color: #f7ca00;
  border-style: hidden;
  margin-top: 10px;
  cursor: pointer;
}
.btnBuy {
  width: 100%;
  height: 25px;
  border-radius: 20px;
  background-color: #f07c16;
  border-style: hidden;
  margin-top: 10px;
  cursor: pointer;
}
</style>
