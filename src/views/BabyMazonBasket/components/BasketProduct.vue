<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
    default: 'Not found'
  },
  name: {
    type: String,
    required: true,
    default: 'Not found'
  },
  price: {
    type: Number,
    required: true,
    default: 0
  },
  imagePath: {
    type: String,
    require: true,
    default: 'Not found'
  },
  quantity: {
    type: Number,
    require: true,
    default: 0
  }
})
const emit = defineEmits(['delete'])

const deleteItem = () => {
  console.log('deleteEmit')
  emit('delete', props.id, props.quantity)
}
</script>

<template>
  <div class="basketProduct">
    <div class="detailsLeft">
      <div class="imgContainer">
        <img :src="props.imagePath" />
      </div>
      <div style="display: flex; flex-direction: column; justify-content: space-between">
        <div>{{ props.name }}</div>
        <div style="display: flex; align-items: baseline">
          <div class="quantity">Quantity: {{ props.quantity }}</div>
          <p class="delete" @click="deleteItem">Delete</p>
        </div>
      </div>
    </div>
    <div class="price">
      <p>{{ props.price.toFixed(2) }}</p>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.imgContainer {
  width: 100px;
  height: 100px;
  margin: 5px;
}
.basketProduct {
  display: flex;
  justify-content: space-between;
}
.detailsLeft {
  display: flex;
}
.delete {
  color: #0a745e;
  padding-left: 10px;
}
.delete:hover {
  text-decoration: underline;
  cursor: pointer;
}
.quantity {
  background-color: #d9d9d9;
  border-radius: 5px;
  width: 150px;
  border: 1px solid rgb(88, 88, 88);
  padding-left: 5px;
}
</style>
