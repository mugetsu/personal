const pkg = require('./package')
const path = require('path')

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  base: '/mugetsu/'
} : {}

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.author.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
 css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/components'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa'
  ],

  /*
  ** PWA configuration
  */
  pwa: {
    manifest: {
      name: pkg.author.name,
      short_name: pkg.author.name.split(' ')[0]
    },
    icons: {
      sizes: [16, 32, 180, 192, 512]
    }
  },

  /*
  ** Router middleware
  */
  router: {
    ...routerBase
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
   extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },
    extend(config, ctx) {}
  }
}
