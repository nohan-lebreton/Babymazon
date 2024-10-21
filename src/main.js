import './assets/global.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { useProductStock } from '@/views/BabyMazonStore/productStore'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// Utiliser PrimeVue avec le thème 'Aura'
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})

// Utiliser Pinia pour la gestion des états
app.use(createPinia())

// Utiliser Vue Router pour la navigation
app.use(router)

// Initialiser le store produit
const productStore = useProductStock()
productStore.initStore()

// Monter l'application
app.mount('#app')
