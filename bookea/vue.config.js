const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@components': '/src/components',
        '@views': '/src/views',
        '@store': '/src/store',
        '@services': '/src/services'
      }
    }
  }
})
