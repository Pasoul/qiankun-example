const { name } = require('./package');

module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    port: 3000
  },
  configureWebpack: {
    externals: {
      'vue-router': 'VueRouter',
      vue: 'Vue',
    },
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
};