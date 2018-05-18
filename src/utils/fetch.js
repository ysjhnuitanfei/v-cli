import axios from 'axios'
import store from '../store'
import Utils from '../utils'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 20000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  // if (store.getters.token) {
  //   config.headers['X-Token'] = store.getters.token;
  // }
  if (!config.params) {
    config.params = {}
  }
  // 请求结束后，是否自动关闭loading
  config.autoCloseLoading = !config.params.noLoading

  // 开启
  if (!config.params.noLoading) {
    Utils.showLoading()
  }
  delete config.params.noLoading
  if (config.params.acceptError) {
    config.acceptError = true
    delete config.params.acceptError
  }
  if ((config.method + '').toLocaleLowerCase() == 'post') {
    // config.data = qs.stringify(config.params);
    config.data = config.params
    config.params = {}
  }
  // 非生产模式
  if (Utils.app.env !== 'production') {

  }
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    let getResData = response.config.getResData
    console.log(response.config.autoCloseLoading)
    if (response.config.autoCloseLoading) {
      Utils.hiddenLoading()
    }

    // 实际开发中，请删除以下代码
    if (response.data.code === undefined) {
      let msg = '接口不符合公司规范,访问：http://10.101.15.109:4567/topic/43/%E4%BA%92%E8%81%94%E7%BD%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%8E%A5%E5%8F%A3%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83'
      msg += '\n如果你正在使用脚手架测试，修改限制条件code为retCode，接口可以正常访问。但实际开发中，以脚手架初始化代码为标准。'
      msg += '\n前端作为数据展现层，需要主动推动服务端接口标准化。'
      alert(msg)
      console.error(msg)
      return returnData(response, getResData)
    }
    if (!response.data || (response.data && response.data.code != 0)) {
      if (response.config.acceptError) {
        return returnData(response, getResData)
      }
      // 20000:用户未登录
      // 20001:用户登录态过期
      if ([20000, 20001].indexOf(response.data.code) > -1) {
        Utils.app.login()
        return returnData(response, getResData)
      }
      store.commit('setError', { msg: '程序猿gg正在加紧修复，请稍后访问' || response.data.msg, show: true })
      throw returnData(response, getResData)
    } else {
      return returnData(response, getResData)
    }
  },
  error => {
    console.log('错误信息：' + error)
    store.commit('setError', { msg: error.message, show: true })
    return Promise.reject(error)
  }
)

function returnData (response, isResponse) {
  return isResponse ? response : (response.data || {})
}

export default service
