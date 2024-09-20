<template>
  <div class="btn-info-container">
    <!-- Pop-up del componente -->
    <v-dialog v-model="dialog">
      <v-card dark>
        <v-card-title class="dialog-title">
          {{ $t('location.schedules') }}
          <v-btn
            icon
            dark
            @click="openAndCloseDialog()">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="dialog-content">
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
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- Botón del componente -->
    <v-btn
      class="btn-info"
      @click="openAndCloseDialog()">
      {{ text }}
    </v-btn>
  </div>
</template>
<script>
export default {
  name: 'BtnInfo',
  props: {
    text: String,
    name: String,
    morning: Array,
    evening: Array
  },
  data: () => ({
    // Dialog del componente
    dialog: false
  }),
  methods: {
    // Abre y cierra el dialog
    openAndCloseDialog () {
      this.dialog = !this.dialog
    },
    // Devuelve el color segun el gimnasio
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
  /* Botón de más información */
  .btn-info {
    background-color: #c9c900  !important;
    color: #f5f5f5;
    font-weight: bolder;
    text-transform: capitalize;
    border-radius: 20px;
    border: 3px solid #f5f5f5;
    font-size: 16px !important;
  }
  /* Dialog */
  .dialog-title{
    font-size: 24px;
    color: yellow;
    padding: 5px;
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .dialog-content {
    padding: 30px;
  }
  table {
    height: 50%;
    width: 100%;
    border: 1px white solid;
  }
  th {
    font-size: 8px;
    padding: 1px;
  }
  td{
    font-size: 8px;
  }
  .td-unit {
    background-color: #fe3d02;
  }
  .td-real {
    background-color: #006940;
  }
  @media (min-width: 1200px) {
    /* Botón de más información */
    .btn-info-container {
      display: none;
    }
  }
</style>