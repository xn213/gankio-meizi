const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/gankio-meizi/' : '/',
  configureWebpack: {
    resolve: {
      extensions: ['js', '.vue', '.json'],
      alias: {
        '@': resolve('src'),
        utils: resolve('src/utils'),
        api: resolve('src/api'),
        components: resolve('src/components'),
        pages: resolve('src/pages')
      }
    }
  }
}