const pkg = require('./package')

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  base: `/${process.env.REPO_NAME}/`
} : {}

if (process.env.NODE_ENV === 'development') require('dotenv').config()

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
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preload', href: '/images/standby.png', as: 'image' },
      { rel: 'preload', href: '/images/walk.png', as: 'image' },
      { rel: 'preload', href: '/images/attack.png', as: 'image' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
 loading: '~/components/Loader/index.vue',

  /*
  ** Global CSS
  */
 css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/firebase',
    '@nuxtjs/pwa'
  ],

  /*
  ** Firebase configuration
  */
  firebase: {
    config: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DATABASE_URL,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID
    },
    onFirebaseHosting: false,
    services: {
      realtimeDb: true,
      analytics: true
    }
  },

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
   extractCSS: process.env.NODE_ENV !== 'development',
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
    extend(config, ctx) {
    }
  }
}
