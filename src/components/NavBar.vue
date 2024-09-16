<template>
    <div id="navbar">
        <!-- Cuerpo del navbar -->
        <div class="navbar-container">
            <!-- Sección del logo -->
            <div class="logo-container">
              <h3>Logo</h3>
            </div>
            <!-- Seccion del menu de navegación -->
            <div class="nav-container">
                <!-- Botón de sideBar -->
                <v-btn class="btn-nav btn-side" @click="sidebar = true" text>
                    <v-icon>mdi-menu</v-icon>
                </v-btn>
                <!-- Opciones de navegación -->
                <div v-for="option in navOptions" :key="option" class="nav-item">
                  <v-btn class="btn-nav" @click="navigate(option)" text>
                    {{ $t(`navbar.${option}`) }}
                  </v-btn>
                </div>
                <!-- Selector de idiomas -->
                <div class="nav-item">
                  <v-select
                    class="select-nav"
                    :items="languages"
                    v-model="language"
                    dark />
                  <img :src="changeFlag" class="icon" alt="flag">
                </div>
            </div>
            <!-- Menu lateral -->
            <div class="sidebar-container" :class="moveSideBar()">
              <v-btn class="btn-nav btn-side-position" @click="sidebar = false" text>
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <div v-for="option in navOptions" :key="option" class="sidebar-item">
                <v-btn class="btn-nav btn-sidebar" @click="navigate(option)" text>{{ $t(`navbar.${option}`) }}</v-btn>
              </div>
              <div class="sidebar-item">
                <v-select
                    class="select-nav"
                    :items="languages"
                    v-model="language"
                    item-text="text"
                    item-value="value"
                    dark />
                  <img :src="changeFlag" class="icon" alt="flag">
              </div>
            </div>
        </div>
    </div>
</template>
<script>
  export default ({
    name: 'NavBar',
    computed: {
      changeFlag () {
        const flag = this.languages.find(item => item.value === this.language).value
        let src = require(`@/assets/flags/${flag}.png`)
        return src
      }
    },
    data: () => ({
      // Sidebar
      sidebar: false,
      // Opciones
      navOptions: ['start', 'schedule', 'contact', 'about', 'location'],
      // Lenguajes
      languages: [
        { text: null, value: 'es'},
        { text: null, value: 'en'}
      ],
      language: 'es'
    }),
    mounted() {
      this.prepareSelectLanguage()
    },
    watch: {
      language() {
        this.changeLanguage()
        this.prepareSelectLanguage()
      }
    },
    methods: {
      // Prepara los textos del select de idiomas
      prepareSelectLanguage () {
        console.log(this.$t(`languages.${this.language}`))
        this.languages.forEach(language => {
          language.text = this.$t(`languages.${language.value}`)
        })
      },
      // Mueve la posicion del SideBar
      moveSideBar () {
        let className = ''
        if (this.sidebar) {
          className = 'sidebarMove'
        }
        return className
      },
      // Navega entre las distintas vistas
      navigate (name) {
        console.log(this.$route.name)
        if (this.$route.name !== name) {
          this.$router.push({name: name})
        }
      },
      // Cambia el idioma de la página
      changeLanguage () {
        this.$i18n.locale = this.language
      }
    }
  })
</script>
<style scoped>
/* Cuerpo del componente */
  #navbar {
    background-color: #14121D;
    position: fixed;
    height: 10vh;
    width: 100%;
    z-index: 10;
    padding: 10px;
  }
  .navbar-container {
    height: 100%;
    display: flex;
    justify-content: space-between;
  }
  /* Sección del logo */
  .logo-container {
    border: 1px solid yellow;
    height: 100%;
    width: 30vw;
    display: flex;
    justify-content: center;
    align-items: center;
    color: yellow;
  }
  /* Sección de menu */
  .nav-container {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /* Boton de navegador */
  .btn-nav {
    background-color: transparent !important;
    color: white !important;
    padding: 0 !important;
    min-width: 40px !important;
    height: 36px;
  }
  .btn-nav:focus {
    background-color: #1a1a1a;
  }
  .btn-nav:hover {
    background-color: #3e3e3e;
  }
  .nav-item {
    display: none;
    position: relative;
  }
  .select-nav {
    width: 150px !important;
  }
  .icon {
    width: 20px;
    position: absolute;
    left: 80px;
    top: 24px;
  }
  /* Sidebar */
  .sidebar-container {
    background-color: #1f1c2d;
    padding: 50px 10px;
    height: 100vh;
    width: 50vw;
    position: fixed;
    top: 0;
    right: -70vw;
    transition: 2s right;
    display: flex;
    flex-direction: column;
  }
  /* Boton de cierre */
  .btn-side-position {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  .btn-sidebar {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding: 10px !important;
    font-size: 12px !important;
  }
  /* Sidebar Options */
  .sidebar-item {
    padding: 7px;
    margin-bottom: 10px;
    display: flex;
    border-bottom: 1px solid #413d56;
    position: relative;
  }
  .sidebar-item:last-child {
    padding: 0 7px;
    /* display: block; */
    border: none;
  }
  .icon-side {
    top: 28px;
  }
  .sidebarMove {
    right: 0;
  }
  @media (min-width: 850px) {
    .sidebar-container, .btn-side {
      display: none !important;
    }
    .nav-item {
      display: flex;
    }
    .btn-nav {
      text-transform: capitalize !important;
      font-size: 12px !important;
      padding: 7px 17px !important;
      margin: 0 10px;
    }
  }
  @media (min-width: 1200px) {
  }
</style>
<style>
  .v-menu__content--fixed {
    top: 414px !important;
  }
  .theme--light.v-list {
    background: #14121D !important;
  }
  .v-list-item__title {
    color: white;
  }
  .v-select__selection--comma {
    font-size: 12px;
    margin-botton: 0px !important;
  }
  @media (min-width: 850px) {
    .v-menu__content--fixed {
      top: 64px !important;
    }
  }
</style>
