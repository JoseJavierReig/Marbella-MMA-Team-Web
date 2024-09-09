import Vue from "vue"
import VueI18n from "vue-i18n"

Vue.use(VueI18n)

function loadLocaleMessages() {
  const locales = require.context(
    '../locales',
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  )
  const messages = {}
  locales.keys().forEach(key => {
    // Cambiamos la expresión regular para extraer el nombre del idioma correctamente
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1] // Corregimos el índice para extraer el locale
      messages[locale] = locales(key).default || locales(key) // Aseguramos que cargamos el contenido de forma correcta
    }
  })
  return messages
}

export default new VueI18n({
  locale: 'es', // Idioma por defecto
  fallbackLocale: 'en', // Corregido el typo aquí
  messages: loadLocaleMessages() // Cargamos los mensajes
})
