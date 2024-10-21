<script setup>
import SearchBarInput from './components/SearchBarInput.vue'
import SearchBarBasketBtn from './components/SearchBarBasketBtn.vue'
</script>

<template>
  <div class="SeacrhBarContainer">
    <router-link :to="{ name: 'Home' }">
      <img class="babyMazonLogo" src="/babyMazonLogo.png" alt="BabyMazonLogo" />
    </router-link>
    <SearchBarInput />
    <SearchBarBasketBtn />
  </div>
</template>

<style scoped>
.SeacrhBarContainer {
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
  height: 60px;
  background-color: #131921;
}

.babyMazonLogo {
  margin-left: 10px;
  height: 50px;
  cursor: pointer;
}
</style>
