<script setup>
import Card from 'primevue/card'
</script>

<template>
  <div>Todo CarrousselSolde prime.vue</div>

  <Card style="width: 20rem; overflow: hidden">
    <template #header>
      <img alt="user header" src="/product/kitchen/legoMug/1.jpg" />
    </template>
    <template #title>Advanced Card</template>
    <template #subtitle>Card subtitle</template>
    <template #footer>
      <div class="flex gap-4 mt-1">
        <Button label="Cancel" severity="secondary" outlined class="w-full" />
        <Button label="Save" class="w-full" />
      </div>
    </template>
  </Card>
</template>

<style scoped>
img {
  width: 300px;
  height: 250px;
}
</style>
