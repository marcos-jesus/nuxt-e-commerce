
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
       
      ],
      link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' }
      ],
      script: [
        { src: '~/node_modules/bootstrap/dist/js/bootstrap.min.js' }
      ]
    },
    
  },

  css: [
    '~/node_modules/bootstrap/dist/css/bootstrap.min.css'
  ],
  build: {
    loaders: {
      scss: {
        implementation: require('sass'),
        sassOptions: {
          fiber: require('fibers'),
        },
      },
    },
  }

  

})
