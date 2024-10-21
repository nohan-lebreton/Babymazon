<script setup>
import { ref } from 'vue'
import Card from 'primevue/card'
import Rating from 'primevue/rating'

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
    default: 'Title product not found'
  },
  onSale: {
    type: Number,
    required: false
  },
  status: {
    type: String,
    required: true,
    default: 'In stock'
  },
  imagePath: {
    type: String,
    required: true,
    default: 'https://via.placeholder.com/300x250'
  },
  stars: {
    type: Number,
    required: true,
    default: 0
  },
  price: {
    type: Number,
    required: true,
    default: 0
  }
})

// Créer une variable locale pour gérer l'évaluation
const localImagePath = ref(props.imagePath)
const localStars = ref(props.stars)
const localId = ref(props.id)
//console.log(localId.value)
</script>

<template>
  <Card class="card">
    <template #header>
      <div class="image-container">
        <img alt="The product image" :src="localImagePath" />
      </div>
    </template>
    <template #title>
      <router-link class="custom-link" :to="{ name: 'productDetails', params: { id: localId } }">
        <div class="title">
          {{ title }}
        </div>
      </router-link>
    </template>
    <template #subtitle>
      <div v-if="onSale" class="onSale">-{{ onSale }} % off</div>
    </template>
    <template #content>
      <div class="content">
        <div class="stars">
          {{ stars }}
          <Rating
            style="
              --p-rating-icon-color: #de7921;
              --p-rating-icon-active-color: var(--p-rating-icon-color);
              margin-left: 10px;
            "
            readonly="true"
            v-model="localStars"
          />
        </div>
        {{ price }}€
      </div>
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
    </template>
  </Card>
</template>

<style scoped>
.card {
  width: 20rem;
  overflow: hidden;
  margin: 10px;
  height: 30rem;
}

.title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
}
.onSale {
  background-color: brown;
  color: white;
  width: fit-content;
  padding: 5px;
  border-radius: 2px;
  height: fit-content;
}

.content {
  display: flex;
  flex-direction: column; /* Aligne les éléments en colonne */
  align-items: flex-start; /* Aligne les éléments à gauche */
  font-size: 30px;
}

.stars {
  display: flex;
  align-items: center;
  font-size: 20px;
}
.image-container {
  display: flex;
  justify-content: center;
  height: 250px;
  cursor: pointer;
}

img {
  width: 300px;
  height: 250px;
  object-fit: contain;
}

.status {
  font-size: larger;
  text-align: end;
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

.custom-link {
  color: rgb(0, 0, 0); /* Couleur du texte */
  text-decoration: none; /* Supprime le soulignement */
}

.custom-link:hover {
  color: #f3a847; /* Couleur au survol */
}
</style>
