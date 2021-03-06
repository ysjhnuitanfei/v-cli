'use strict'
// Template version: 1.2.4
// see http://vuejs-templates.github.io/webpack for documentation. https://github.com/vuejs/vue-loader/blob/master/docs/zh-cn/options.md

const path = require('path')
const fs = require('fs')
const ip = require('ip')
const vivoConf = JSON.parse(fs.readFileSync(path.join(__dirname, '../../', 'package.json'))).vivo
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  dev: {
    // webpack编译输出的二级文件夹
    assetsSubDirectory: 'static',
    assetsPublicPath: '/', // 资源的根目录
    // 开发服务器配置
    host: ip.address(), // ip地址。默认寻找本机ip
    port: vivoConf.devPort, // 开发端口号，当端口号被占用时，主动递增寻找可用的端口号
    autoOpenBrowser: true, // 服务启动时，是否自动打开浏览器
    errorOverlay: true, // 当出现编译器错误或警告时，在浏览器中显示全屏叠加
    notifyOnErrors: true, // 出现错误时，notifier调用操作系统的提示框
    poll: false, // 是否开启轮询监控代码发生更改 https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
    // Use Eslint Loader?
    // 设置true，项目在启动的时，会自动lint代码
    // 错误和警告将被显示在控制台
    useEslint: true,
    // 如果为true，在浏览器中
    // eslint错误和警告也会显示在错误覆盖
    showEslintErrorsInOverlay: false,
    /**
     * Source Maps
     */
    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'source-map',

    // 是否通过给文件名后加哈希查询值来避免生成的 source map 被缓存。
    // 关掉这一选项有益于 source map 调试。
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: false,

    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false,

    // 请求代理表，在这里可以配置特定的请求代理到对应的API接口
    // 例如将'/api/xxx'代理到'www.example.com/api/xxx'
    proxyTable: vivoConf.proxyTable
  },
  build: {
    // Template for index.html
    index: path.resolve(__dirname, `../../${isProd ? 'prodZip/' + vivoConf.prodZipName : 'dist'}/index.html`),

    // Paths
    assetsRoot: path.resolve(__dirname, `../../${isProd ? 'prodZip/' + vivoConf.prodZipName : 'dist'}`),
    assetsSubDirectory: 'static',

    // 如果是生产环境则更改为cdn地址
    assetsPublicPath: isProd ? vivoConf.cdnPath : '/',

    /**
     * Source Maps
     */
    productionSourceMap: false,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  public: {
    // 登录地址
    loginPath: vivoConf.loginPath,
    // 埋点地址
    stPath: vivoConf.stPath
  }
}
