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
    },
    created () {
      this.translateTexts()
    },
    methods: {
      // Traduce los textos de la web
      translateTexts () {
        const availableLocales = this.$i18n.availableLocales
        const usersLanguage = window.navigator.language
        if (availableLocales.includes(usersLanguage.slice(0, 2))) {
          this.$i18n.locale = usersLanguage.slice(0, 2)
        } else {
          this.$i18n.locale = 'en'
        }
      }
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
body::-webkit-scrollbar {
  width: 2px;
}

body::-webkit-scrollbar-track {
  background: #0f0a25;
}

body::-webkit-scrollbar-thumb {
  background-color: yellow;
  border-radius: 20px;
}
</style>
