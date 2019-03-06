// vue.config.js

module.exports = {
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  },
  css: {
    extract: false
  },
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => {
        options.limit = 8000
        return options
      })
  }
}