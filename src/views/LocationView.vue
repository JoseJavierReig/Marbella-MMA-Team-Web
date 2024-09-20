<template>
  <div>
    <LocationContainer
      v-for="location in translateLocation"
      :key="location"
      :name="location.name"
      :title="location.title"
      :src="location.src"
      :dir="location.dir"
      :reverse="location.reverse"
      :morning="location.morning"
      :evening="location.evening" />
  </div>
</template>

<script>
  import LocationContainer from '@/components/LocationContainer'
  export default {
    components:  {
      LocationContainer
    },
    data: () => ({
      locations: [
        { 
          name: 'real',
          title: 'Real club de padel Marbella',
          src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3207.7378460449295!2d-4.973362522866862!3d36.488047385231155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7329f4742dbda5%3A0x73c64e215c2e4dc1!2sReal%20Club%20Padel%20Marbella!5e0!3m2!1ses!2ses!4v1726693843388!5m2!1ses!2ses',
          dir: '',
          morning: [
            {day: 'monday', hour: '12:00/ 13:00'},
            {day: 'tuesday', hour: null},
            {day: 'wednesday', hour: null},
            {day: 'thursday', hour: null},
            {day: 'friday', hour: '12:00/ 13:00'},
            {day: 'saturday', hour: '11:00/ 12:00'}
          ],
          evening: [
            {day: 'monday', hour: '19:30/ 20:30'},
            {day: 'tuesday', hour: null},
            {day: 'wednesday', hour: '19:30/ 20:30'},
            {day: 'thursday', hour: null},
            {day: 'friday', hour: '19:30/ 20:30'},
            {day: 'saturday', hour: null}
          ],
          reverse: false
        },
        {
          name: 'unit',
          title: 'Unit 41 Fitness',
          src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3207.0873255050315!2d-4.981179622866471!3d36.503754084351954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd732b606c08e6bf%3A0xe9908b71ed5fc014!2sUnit%2041%20Fitness!5e0!3m2!1ses!2ses!4v1726694930575!5m2!1ses!2ses',
          dir: '',
          morning: [],
          evening: [
            {day: 'monday', hour: null},
            {day: 'tuesday', hour: '17:30/19:00'},
            {day: 'wednesday', hour: null},
            {day: 'thursday', hour: '17:30/19:00'},
            {day: 'friday', hour: null},
            {day: 'saturday', hour: null}
          ],
          reverse: true
        }
      ]
    }),
    created () {
      console.log(this.locations)
      this.locations.forEach(location => {
        location.dir = this.$t(`location.${location.name}`)
      })
    },
    computed: {
      translateLocation () {
        this.locations.forEach(location => {
          location.dir = this.$t(`location.${location.name}`)
        })
        return this.locations
      }
    }
  }
</script>
<style scoped>
  #view {
    flex-wrap: wrap;
  }
</style>