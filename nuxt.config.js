const pkg = require('./package')
const path = require('path')

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  base: `/${process.env.REPO_NAME}/`
} : {}

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
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
  modules: [],

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
