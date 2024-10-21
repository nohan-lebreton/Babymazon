<script setup>
import Galleria from 'primevue/galleria'
import { ref } from 'vue'

const props = defineProps({
  imagePathList: {
    type: Array,
    required: true
  }
})

const images = ref(
  props.imagePathList.map((imagePath) => ({
    itemImageSrc: imagePath,
    thumbnailImageSrc: imagePath,
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
      <template #item="slotProps">
        <div class="image-container">
          <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" />
        </div>
      </template>

      <template #thumbnail="slotProps">
        <div class="thumbnail-container">
          <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />
        </div>
      </template>
    </Galleria>
  </div>
</template>

<style scoped>
.image-container {
  padding: 20px;
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.thumbnail-container {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.thumbnail-container img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.galleria {
  width: fit-content;
  height: fit-content;
  background-color: white;
}
</style>
