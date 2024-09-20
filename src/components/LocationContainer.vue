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
        <h2 class="location-schedule-title">{{ $t('location.schedules') }}</h2>
        <div class="location-schedule-table">
          <table>
            <thead>
              <tr>
                <th>
                </th>
                <th
                  v-for="day in $weekdays"
                  :key="day">
                  {{$t(`weekDays.${day}`)}}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ $t('location.morning') }}</td>
                <td 
                  v-for="item in morning"
                  :key="item"
                  :class="getColorHour(name, item.hour)">{{ item.hour }}</td>
              </tr>
              <tr>
                <td>{{ $t('location.evening') }}</td>
                <td 
                  v-for="item in evening"
                  :key="item"
                  :class="getColorHour(name, item.hour)">{{ item.hour }}</td>
              </tr>
            </tbody>
          </table>
        </div>
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
      name: String,
      title: String,
      src: String,
      dir: String,
      morning: Array,
      evening: Array
    },
    methods: {
      getColorHour (name, dato) {
        console.log(name)
        let className = ''
        if (dato) {
          if (name === 'real') {
            className = 'td-real'
          } else {
            className = 'td-unit'
          }
        }
        return className
      }
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
    padding: 10px 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .location-schedule-title{
    font-size: 24px;
    color: yellow;
    padding: 5px;
    text-align: center;
    width: 100%;
  }
  /* Tabla de horarios */
  .location-schedule-table {
    display: none;
  }
  table {
    height: 50%;
    width: 100%;
    border: 1px white solid;
  }
  th {
    padding: 3px;
    font-size: 14px;
  }
  td{
    padding: 0 1px;
    font-size: 10px;
  }
  .td-unit {
    background-color: #fe3d02;
  }
  .td-real {
    background-color: #006940;
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
    /* Tabla de horarios */
    .location-schedule-table {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
    }
  }
</style>