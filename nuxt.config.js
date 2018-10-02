const laravelNuxt = require("laravel-nuxt");

module.exports = laravelNuxt({
  head: {
    titleTemplate: 'My App',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ]
  },
  // Options such as mode, srcDir and generate.dir are already handled for you.
  modules: [],
  plugins: ['~vuetify.js'],
  build: {
      vendor: ['vuetify'],
  },
  router: {
    middleware: 'interceptor'
  }

});