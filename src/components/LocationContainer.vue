<template>
  <div class="location-container">
    <div class="location-info-container">
      <h2 class="location-title">{{ title }}</h2>
      <span class="location-info">
        <v-icon class="icon" dark>mdi-phone</v-icon>
        <span class="info-text">+34 606 707 909</span>
      </span>
      <span class="location-info">
        <v-icon class="icon" dark>mdi-map-marker</v-icon>
        <span class="info-text">{{dir}}</span>
      </span>
      <div class="location-schedule-container">
        <div class="location-schedule">
          <h2 class="location-schedule-title">{{ $t('location.where') }}</h2>
          <div class="schedule-container">
            <div class="schedule">
              <h3 class="location-schedule-subtitle">{{ $t('location.morning') }}</h3>
              <div class="schedule-day-container" v-for="item in morning" :key="item">
                <span class="info-text schedule-text" >{{$t(`weekDays.${item.day}`)}}: </span>
                <span class="info-text" >{{item.hour}}</span>
              </div>
            </div>
            <div class="schedule">
              <h3 class="location-schedule-subtitle">{{ $t('location.evening') }}</h3>
              <div class="schedule-day-container" v-for="item in evening" :key="item">
                <span class="info-text schedule-text" >{{$t(`weekDays.${item.day}`)}}: </span>
                <span class="info-text" >{{item.hour}}</span>
              </div>
            </div>
          </div>
        </div>
        <v-btn>horarios</v-btn>
      </div>
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
      dir: String,
      morning: Array,
      evening: Array
    }
  }
</script>
  
<style scoped>
  /* Contenedores de las localizaciones */
  .location-container {
    background-color: #14121D;
    width: 100%;
    min-height: 491px;
    height: 550px;
    margin-top: 10px;
    margin-bottom: 40px;
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
  /* Informacion sobre la localizacion */
  .location-info-container {
    padding: 10px;
    height: 250px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
  }
  /* Titulo de la localizacion */
  .location-title {
    font-size: 24px;
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
  /* Información de los horarios por localización */
  .location-schedule-container {
    padding: 10px 30px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .location-schedule {
    display: none;
  }
  .location-schedule-title, .location-schedule-subtitle {
    font-size: 24px;
    color: yellow;
    padding: 5px;
    text-align: center;
    width: 100%;
  }
  .location-schedule-subtitle {
    font-size: 18px !important;
    text-align: start;
    padding: 0;
  }
  .schedule-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
  .schedule {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .schedule-text {
    font-weight: bold;
    margin-right: 10px;
  }
  /* Mapa de la localizacion */
  .location-map-container {
    height: 250px;
  }
  @media (min-width: 1200px) {
    /* Contenedores de las localizaciones */
    .location-container {
      flex-direction: row;
      justify-content: space-between;
      height: 400px;
    }
    /* Informacion sobre la localizacion */
    .location-info-container {
      height: 100%;
      width: 40%;
    }
    .location-map-container {
      height: 100%;
      width: 58%;
    }
    /* Información de los horarios por localización */
    .location-schedule-container {
      justify-content: flex-start;
    }
    .location-schedule {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 30px;
    }
  }
</style>