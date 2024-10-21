<template>
  <svg
    :width="props.size"
    :height="props.size"
    viewBox="0 0 10 7"
    :fill="props.color"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 0L5 6.25L0 0H10Z" />
  </svg>
</template>
<script setup>
const props = defineProps({
  size: { type: String, default: '10' },
  color: { type: String, default: '#666666' }
})
</script>
