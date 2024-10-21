<script setup>
import { IconSearch, IconDownArrow } from '@/components/icons'
</script>

<template>
  <form>
    <div class="categorySelector">All<IconDownArrow class="iconDownArrow" /></div>
    <input v-model="searchInputLabel" type="text" placeholder="Search Amazon.fr ..." />
    <btn class="searchBtn">
      <IconSearch />
    </btn>
    <div class="overlay"></div>
  </form>
</template>

<style scoped>
form {
  display: flex;
  margin: 0 auto;
}

input {
  height: 40px;
  border-style: hidden;
  width: 500px;
  padding-left: 10px;
  z-index: 10;
}

.categorySelector {
  height: 40px;
  width: 70px;
  background-color: #d9d9d9;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  cursor: pointer;
}
.searchBtn {
  height: 40px;
  width: 40px;
  background-color: #f3a847;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.searchBtn:hover {
  background-color: #d88211;
  cursor: pointer;
}

input:focus ~ .overlay {
  display: block;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
  display: none;
}
.iconDownArrow {
  margin-left: 10px;
}
</style>
