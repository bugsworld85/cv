export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Jovanni G',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' } 
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700|Sacramento' },
      // { rel: 'stylesheet', href: 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css', integrity: 'sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p', crossorigin: 'anonymous' }
    ],
    script: [
      { type: 'text/javascript', src: 'https://kit.fontawesome.com/dadcfe102a.js', defer: true, crossorigin: 'anonymous' },
      { type: 'text/javascript', src: '/js/jquery.min.js', defer: true },
      { type: 'text/javascript', src: '/js/popper.min.js', defer: true },
      { type: 'text/javascript', src: '/js/waypoints.min.js', defer: true },
      { type: 'text/javascript', src: '/js/counterup.min.js', defer: true },
      { type: 'text/javascript', src: '/js/inview.min.js', defer: true },
      { type: 'text/javascript', src: '/js/easypiechart.js', defer: true },
      { type: 'text/javascript', src: '/js/magnific-popup.min.js', defer: true },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/magnific-popup.scss',
    '~/assets/scss/animate.scss',
    '~/assets/scss/main.scss',
    '~/assets/scss/responsive.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
