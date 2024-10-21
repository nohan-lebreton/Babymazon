<script setup>
import Rating from 'primevue/rating'
import { ref } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
    default: 'Product not found'
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
  },
  onSale: {
    type: Number,
    required: false
  },
  description: {
    type: Number,
    required: true,
    default: 0
  }
})

// État pour afficher ou masquer la description complète
const showFullDescription = ref(false)

// Fonction pour basculer l'affichage de la description
const toggleDescription = () => {
  showFullDescription.value = !showFullDescription.value
}

const name = props.name
const stars = props.stars
const price = props.price
const onSale = props.onSale
const description = props.description
</script>
<template>
  <div class="details">
    <H1>{{ name }}</H1>
    <div class="stars">
      {{ stars
      }}<Rating
        style="
          --p-rating-icon-color: #de7921;
          --p-rating-icon-active-color: var(--p-rating-icon-color);
          --p-rating-icon-size: 30px;
          margin-left: 10px;
        "
        readonly="true"
        v-model="stars"
      />
    </div>
    <div class="price">
      <H2>{{ price }}€</H2>
      <div v-if="onSale" class="onSale">-{{ onSale }} % off</div>
    </div>
    <p class="description" :class="{ expanded: showFullDescription }">
      {{ showFullDescription ? description : description.slice(0, 200) + '...' }}
      <span v-if="!showFullDescription" @click="toggleDescription" class="more-text">...plus</span>
      <span v-else @click="toggleDescription" class="more-text">...moins</span>
    </p>
  </div>
</template>

<style scoped>
.price {
  display: flex;
  align-items: center;
}
.details {
  height: fit-content;
  margin-left: 5%;
  margin-right: 5%;
  flex-grow: 1; /* Le composant grandira pour occuper tout l'espace disponible */
  flex-shrink: 1; /* Le composant se réduira en cas de manque d'espace */
  min-width: 250px;
}

.onSale {
  margin-left: 10px;
  background-color: brown;
  color: white;
  width: fit-content;
  height: fit-content;
  padding: 5px;
  border-radius: 2px;
}

.description {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
}

.description.expanded {
  overflow: visible;
  -webkit-line-clamp: unset;
}

.more-text {
  cursor: pointer;
  color: blue;
  text-decoration: underline;
}
.stars {
  font-size: 20px;
  display: flex;
  align-items: center;
}
</style>
