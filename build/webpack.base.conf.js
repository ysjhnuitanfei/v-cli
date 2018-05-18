'use strict'
const webpack = require('webpack')
const path = require('path')
const utils = require('./utils')
const config = require('./config')
const vueLoaderConfig = require('./vue-loader.conf')
const ToWebPWebpackPlugin = require('towebp-webpack-plugin')
const vuxLoader = require('vux-loader')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

var webpackConfig = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: ['babel-polyfill', './src/main.js']
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'development'
      ? config.dev.assetsPublicPath
      : config.build.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      ...(config.dev.useEslint ? [{
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter'),
          emitWarning: !config.dev.showEslintErrorsInOverlay
        }
      }] : []),
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1024,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __LOGINPATH__: "'" + config.public.loginPath + "'",
      __STPATH__: "'" + config.public.stPath + "'"
    }),
    new ToWebPWebpackPlugin({
      match: /(jpe?g|png)$/,
      srcContain: '.webp.',
      limit: 1024,
      webp: {
        quality: 75
      }
    })
  ],
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
module.exports = vuxLoader.merge(webpackConfig, {
  options: { showVuxVersionInfo: false },
  plugins: ['vux-ui', {
    name: 'after-less-parser',
    fn: function (e) {
      return this.resourcePath.replace(/\\/g, '/').indexOf('/vux/src/components') > -1 && (e = e.replace(/px(?!.less)/gi, 'PX')), e
    }
  }, {
    name: 'style-parser',
    fn: function (e) {
      return this.resourcePath.replace(/\\/g, '/').indexOf('/vux/src/components') > -1 && (e = e.replace(/px(?!.less)/gi, 'PX')), e
    }
  }]
})
