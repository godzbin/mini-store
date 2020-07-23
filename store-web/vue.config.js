// vue.config.js
const webpack = require('webpack')
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  pages: {
    index: {
      entry: `src/main.js`
    }
  },
  // 本地运行设置（webpack-dev-server）
  devServer: {
    // host: '0.0.0.0', //ip地址（默认localhost）
    // https: true,
    port: 8080, // 端口号
    proxy: { // 配置代理
      '/': {
        // target: 'https://spottrade.junengcloud.com',
        target: 'http://localhost:3000',
        changeOrigin: true,
        cookieDomainRewrite: ''
      }
    },
    // 当存在编译器错误或警告时，在浏览器中显示全屏覆盖
    overlay: {
      errors: true,
      warnings: true
    }
  },
  // 基本路径
  publicPath: './',
  // 打包文件目录
  outputDir: '../public',
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir: '',
  // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
  // indexPath: 'index.html',
  // 开发模式才显示lint错误
  lintOnSave: true,
  // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。
  // 如果你想要通过 Babel 显式转译一个依赖，可以在以下数组列出来（如果需要在本地调式ie浏览器的话，就把下面的判断去掉）
  transpileDependencies: process.env.NODE_ENV === 'development' ? [] : [],
  // 生产环境的 source map
  productionSourceMap: true,
  // 调整 webpack 配置（放置plugins等）
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: '',
    resolve: {
      alias: {
        '@': resolve('src'),
        service: resolve('src/api/index.js'),
        globalLoading: resolve('src/utils/globalLoading.js'),
        assets: resolve('src/assets')
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        $service: ['service', 'default'],
        $globalLoading: ['globalLoading', 'default']
      })
    ]
  },
  chainWebpack (config) {
  },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin 默认生产环境下是 true,开发环境下是 false（开发模式如果分离了就不能热加载了）
    // extract: false,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项，向 CSS 相关的 loader 传递选项
    loaderOptions: {
      // 加入全局css变量 和 混合函数
      // sass: {
      //   prependData: `@import "@/${process.env.ENTRY_PREFIX}/assets/styles/variables.scss"; @import "@/assets/styles/mixin.scss";`
      // }
    }
  }
}
