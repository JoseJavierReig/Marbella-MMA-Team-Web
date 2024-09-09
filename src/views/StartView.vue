<template>
  <div>
    <div class="carrosel-container">
      <v-carousel hide-delimiters class="carrosel">
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"/>
      </v-carousel>
      <div class="logo-container">
        <h3>Logo</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      }
    ]
  })
}
</script>
<style scoped>
/* Carrosel de fotos */
  .carrosel-container {
    position: relative;
    margin-bottom: 2000px;
  }
  .carrosel-container, .carrosel {
    height: 300px !important;
  }
  /* Logo carrosel */
  .logo-container {
    width: 200px;
    height: 200px;
    border: 1px solid white;
    position: absolute;
    bottom: -130px;
    left: 50%; 
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
  }
</style>