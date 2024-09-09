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
                <v-btn class="btn-nav btn-side" @click="sidebar = true" text>
                    <v-icon>mdi-menu</v-icon>
                </v-btn>
                <div class="nav-item">
                  <v-btn class="btn-nav" @click="navigate('start')" text>
                    {{ $t('navbar.start') }}
                  </v-btn>
                </div>
                <div class="nav-item">
                  <v-btn class="btn-nav" @click="navigate('schedule')" text>
                    {{ $t('navbar.schedule') }}
                  </v-btn>
                </div>
                <div class="nav-item">
                  <v-btn class="btn-nav" @click="navigate('contact')" text>
                    {{ $t('navbar.contact') }}
                  </v-btn>
                </div>
                <div class="nav-item">
                  <v-btn class="btn-nav" @click="navigate('about')" text>
                    {{ $t('navbar.about') }}
                  </v-btn>
                </div>
                <div class="nav-item">
                  <v-btn class="btn-nav" @click="navigate('location')" text>
                    {{ $t('navbar.location') }}
                  </v-btn>
                </div>
            </div>
            <!-- Menu lateral -->
            <div class="sidebar-container" :class="moveSideBar()">
              <v-btn class="btn-nav btn-side-position" @click="sidebar = false" text>
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <div class="sidebar-item">
                <v-btn class="btn-nav btn-sidebar" @click="navigate('start')" text>{{ $t('navbar.start') }}</v-btn>
              </div>
              <div class="sidebar-item">
                <v-btn class="btn-nav btn-sidebar" @click="navigate('schedule')" text>{{ $t('navbar.schedule') }}</v-btn>
              </div>
              <div class="sidebar-item">
                <v-btn class="btn-nav btn-sidebar" @click="navigate('contact')" text>{{ $t('navbar.contact') }}</v-btn>
              </div>
              <div class="sidebar-item">
                <v-btn class="btn-nav btn-sidebar" @click="navigate('about')" text>{{ $t('navbar.about') }}</v-btn>
              </div>
              <div class="sidebar-item">
                <v-btn class="btn-nav btn-sidebar" @click="navigate('location')" text>{{ $t('navbar.location') }}</v-btn>
              </div>
            </div>
        </div>
    </div>
</template>
<script>
  export default ({
    name: 'NavBar',
    data: () => ({
      sidebar: false
    }),
    methods: {
      // Mueve la posicion del SideBar
      moveSideBar () {
        let className = ''
        console.log(this.sidebar)
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
  }
  .sidebarMove {
    right: 0;
  }
  @media (min-width: 768px) {
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
