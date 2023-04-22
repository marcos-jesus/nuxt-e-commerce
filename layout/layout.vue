<template>
  <div class="Layout">
    <Menu />
    <Carousel />
  </div>
</template>
<script setup>
  import Menu from './Menu/menu.vue'
  import Carousel from './Carousel/carousel.vue'
</script>

<style scoped>
  .Layout {
    margin: 0;
    padding: 0;
  }
</style>