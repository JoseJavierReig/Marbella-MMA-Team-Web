<template>
  <div>
    <LocationContainer
      v-for="location in locations"
      :key="location"
      :title="location.title"
      :src="location.src"
      :direction="location.direction"
      :reverse="location.reverse" />
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
          title: 'Real club de padel Marbella',
          src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3207.7378460449295!2d-4.973362522866862!3d36.488047385231155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7329f4742dbda5%3A0x73c64e215c2e4dc1!2sReal%20Club%20Padel%20Marbella!5e0!3m2!1ses!2ses!4v1726693843388!5m2!1ses!2ses',
          direction: 'C. Río Amazonas, s/n, 29660 Marbella, Málaga',
          reverse: false
        },
        {
          title: 'Unit 41 Fitness',
          src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3207.0873255050315!2d-4.981179622866471!3d36.503754084351954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd732b606c08e6bf%3A0xe9908b71ed5fc014!2sUnit%2041%20Fitness!5e0!3m2!1ses!2ses!4v1726694930575!5m2!1ses!2ses',
          direction: 'Unit 41, Pol. Ind, Nueva Campana, 29660, Marbella, Málaga',
          reverse: true
        }
      ]
    })
  }
</script>
<style scoped>
  #view {
    flex-wrap: wrap;
  }
</style>