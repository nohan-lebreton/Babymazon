<script setup>
import Galleria from 'primevue/galleria'
import { ref } from 'vue'

const props = defineProps({
  imagePathList: {
    type: Array, // Spécifie que c'est un tableau de chaînes
    required: true
  }
})
//console.log(props.imagePathList)

// Créez un tableau d'objets pour la galerie
const images = ref(
  props.imagePathList.map((imagePath) => ({
    itemImageSrc: imagePath, // Utilise chaque élément du tableau comme source de l'image principale
    thumbnailImageSrc: imagePath, // Utilise la même image pour la miniature
    alt: 'Image description'
  }))
)

const responsiveOptions = ref([
  {
    breakpoint: '1024px',
    numVisible: 5
  },
  {
    breakpoint: '768px',
    numVisible: 3
  },
  {
    breakpoint: '560px',
    numVisible: 1
  }
])
</script>
<template>
  <div class="galleria">
    <Galleria
      :value="images"
      :responsiveOptions="responsiveOptions"
      :numVisible="5"
      containerStyle="max-width: 500px"
    >
      <!-- Template pour afficher l'image principale avec taille fixe -->
      <template #item="slotProps">
        <div class="image-container">
          <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" />
        </div>
      </template>

      <!-- Template pour afficher les miniatures avec ajustement des dimensions -->
      <template #thumbnail="slotProps">
        <div class="thumbnail-container">
          <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />
        </div>
      </template>
    </Galleria>
  </div>
</template>

<style scoped>
/* Fixer la taille du conteneur de l'image principale */
.image-container {
  padding: 20px;
  width: 400px; /* Largeur fixe */
  height: 400px; /* Hauteur fixe */
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Ajuste l'image tout en couvrant l'espace disponible */
}

/* Fixer la taille du conteneur des miniatures */
.thumbnail-container {
  width: 50px; /* Largeur des miniatures */
  height: 50px; /* Hauteur des miniatures */
  display: flex;
  justify-content: center;
  align-items: center;
}

.thumbnail-container img {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Ajuste les miniatures également */
}

.galleria {
  width: fit-content;
  height: fit-content;
  background-color: white;
}
</style>
