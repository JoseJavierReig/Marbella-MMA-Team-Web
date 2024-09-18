<template>
  <div class="location-container">
    <!-- <h2 class="location-title">{{ title }}</h2> -->
    <div class="location-info-container">
      <h2 class="location-title">{{ title }}</h2>
      <span class="location-info">
        <v-icon class="icon" dark>mdi-phone</v-icon>
        <span class="info-text">+34 606 707 909</span>
      </span>
      <span class="location-info">
        <v-icon class="icon" dark>mdi-map-marker</v-icon>
        <span class="info-text">{{direction}}</span>
      </span>
    </div>
    <div class="location-map-container">
      <iframe
        :src="src"
        width="100%"
        height="100%"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade" />
    </div>
  </div>
</template>

  
<script>
  export default {
    name: 'LocationContainer',
    props: {
      reverse: Boolean,
      title: String,
      src: String,
      direction: String
    }
  }
</script>
  
<style scoped>
  /* Contenedores de las localizaciones */
  .location-container {
    border: 1px solid white;
    width: 100%;
    min-height: 491px;
    height: 550px;
    margin-top: 10px;
    margin-bottom: 40px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    transition: 2s all;
  }
  /* Informacion sobre la localizacion */
  .location-info-container {
    padding: 10px;
    border: 1px solid white;
    height: 250px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
  }
  /* Titulo de la localizacion */
  .location-title {
    font-size: 16px;
    color: yellow;
    padding: 5px;
    text-align: start;
  }
  /* Informacion de la localizacion */
  .location-info {
    padding: 5px;
    display: flex;
    align-items: baseline;
    gap: 10px;
  }
  .info-text {
    display: inline-block;
    text-align: start;
  }
  /* Mapa de la localizacion */
  .location-map-container {
    border: 1px solid white;
    height: 250px;
  }
  @media (min-width: 850px) {
    /* Contenedores de las localizaciones */
    .location-container {
      flex-direction: row;
      justify-content: space-between;
    }
    /* Informacion sobre la localizacion */
    .location-info-container, .location-map-container {
      height: 100%;
      width: 47%;
    }
  }
</style>