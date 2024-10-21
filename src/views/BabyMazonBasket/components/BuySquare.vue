<script setup>
import { IconInfo } from '@/components/icons'

const props = defineProps({
  totalItems: {
    type: Number,
    required: true,
    default: 0
  },
  totalPrice: {
    type: Number,
    required: true,
    default: 0
  }
})
</script>

<template>
  <div class="buySquareContainer">
    <p><IconInfo /> Add €17.05 of items dispatched by Amazon to qualify for FREE delivery.</p>
    <div class="subtotal">
      <div class="totalItems">Subtotal({{ props.totalItems }}):</div>
      <div class="totalPrice">{{ props.totalPrice.toFixed(2) }}€</div>
    </div>
    <button class="btnCheckout" type="button">Proced to Checkout</button>
  </div>
</template>
<style scoped>
.buySquareContainer {
  margin: 2%;
  padding: 2%;
  width: 20%;
  background-color: rgb(255, 255, 255);
  height: fit-content;
}
.subtotal {
  display: flex;
  font-size: large;
}

.btnCheckout {
  width: 100%;
  height: 25px;
  border-radius: 20px;
  background-color: #f7ca00;
  border-style: hidden;
  margin-top: 10px;
  cursor: pointer;
}

.totalPrice {
  margin-left: 5px;
  font-weight: bold;
}
</style>
