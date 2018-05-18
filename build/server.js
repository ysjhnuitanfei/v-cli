// 引入express框架
const config = require('../package.json')
let express = require('express')
var proxyMiddleWare = require('http-proxy-middleware')
let path = require('path')
let port = 7777
let app = express()
var proxyTable = config.vivo.proxyTable
// 目标后端服务地址
Object.keys(proxyTable).forEach(keys => {
  var proxyOption = { target: proxyTable[keys].target, changeOrigoin: true }
  app.use(keys, proxyMiddleWare(proxyOption))
})
app.use(express.static(path.join(__dirname, '../dist')))
app.listen(port)
