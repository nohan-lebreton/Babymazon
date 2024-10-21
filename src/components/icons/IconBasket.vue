<template>
  <svg
    :width="props.size"
    :height="props.size"
    viewBox="0 0 78 71"
    :fill="props.color"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <rect width="78" height="71" fill="url(#pattern0_40_87)" />
    <defs>
      <pattern id="pattern0_40_87" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlink:href="#image0_40_87" transform="matrix(0.0185185 0 0 0.0203443 0 -0.0492958)" />
      </pattern>
      <image
        id="image0_40_87"
        width="54"
        height="54"
        xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAACFUlEQVRoBe2YoUsEQRTGTwSDRRAEu8E/wGAxGI4LhoMrVyyCySAIBrPJv8EsCDaLWS5cuGAwGAxGkyBiEhF+3sAMPIZZZndvZpeFN7DM7r735r3v+3Z2Z7bX06YMKAPKgDKgDCgDyoAykJoByrXD1Hmzj1cOF6/AcvZiUiYoCcy4dUs1YKfguPBAv3ROtdATYEAAbx64cci3c/eAYw/YM7CUEwgwAK7FcZk8X4Fqo+SJ7IA2n3lRyXaWJV9AtadcqgFjiQh4B1ZzAQvNtYPUyQxZgHnUZcujlis+oNrM2VL1wFAiyqqWK7pgriVVDZh5wE5d/qw9cOQlnqZKCPS9sfPNLb/oAtX6vl+da2DiAWtGLVdsQLWJs9XtgT0PVHNquaILVNt39jo98OABa1YtV3RAtUdnq9rbNarEZdRaqTpOEv8C1a4As2iuekwlKqAdtRwzAdW8+mpdtqeWABZajdRCI4LaVUuA879rosbKp+2rJYAZ1c5rzKvQPFzozepq0j7GALBptxq7MV9pBzbmK/kRsJ9rCyTzVTq367svMZvuyhRpwXyLuHvzCamUPKdzYO9kao2uHQGzUfVb0p3CQriBT786s2+LDQp8BOJOYnGN2QHz6Mn2C2zFCpj73Mgg4A/YjsU1ZgfWgVvAADI/YAZlkgNrFtyP/b03LBOnPsqAMqAMKAPKgDKgDCgDyoAyoAx0nIF/rx0VXrSIyBYAAAAASUVORK5CYII="
      />
    </defs>
  </svg>
</template>
<script setup>
const props = defineProps({
  size: { type: String, default: '50' },
  color: { type: String, default: '#000000' }
})
</script>
