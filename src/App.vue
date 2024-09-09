<template>
  <v-app id="app">
    <NavBar />
    <router-view id="view"/>
  </v-app>
</template>
<script>
  import NavBar from '@/components/NavBar.vue'
  export default ({
    components:  {
      NavBar
    }
  })
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: white;
  background-color: #0f0a25;
}
#view {
  padding: 20px;
  margin-top: 10vh;
}
</style>
