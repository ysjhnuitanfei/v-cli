import Cookies from 'js-cookie'
import toast from './toast'

// 测试cookie信息
// eslint-disable-next-line
var cookieTemp = {
  'vvc_imei': '353202049379759',
  'vvc_p': 'mjnanjing',
  'vvc_openid': '8790bf272227ee68',
  'vvc_an': '5.1.1',
  'vvc_elapsedtime': '1313285212',
  'vvc_av': '22',
  'vvc_app_version': '1063',
  'vvc_status': '1',
  'vvc_s': '2|7C2822906755',
  'vvc_q': 'caba99df-1267-4a1e-b691-90e91a158aab',
  'vvc_model': 'vivo+X7',
  'vvc_cs': '0',
  'vvc_r': 'NWJlYmVhNTc3ZDAyNzBhNmJjM2YuMTAxMzE0MTEuMTUwODQ4ODc1NjgzOQ%253D%253D',
  'vvc_u': '150100434a4e42345207f62d4b5b7300',
  'vvc_k': 'b4018c9fb002250a2525a35a2ba2af4c',
  'vvc_pn': 'com.bbk.appstore',
  'vvc_has': '1'
}
let __instance = (function () {
  let instance
  return (newInstance) => {
    if (newInstance) instance = newInstance
    return instance
  }
}())

class App {
  constructor () {
    if (__instance()) return __instance()
    this.init()
    __instance(this)
  }

  init () {
    var cookies = Cookies.get()

    this.cookies = cookies

    // 从cookie中读取openid,vivo_account_cookie_iqoo_openid未wap端openid
    this.openid = cookies['vvc_openid'] || cookies['openid'] || cookies['vivo_account_cookie_iqoo_openid']

    // 从cookie中读取openid,vivo_account_cookie_iqoo_vivotoken未wap端openid
    this.token = cookies['vvc_r'] || cookies['token'] || cookies['vivo_account_cookie_iqoo_vivotoken']

    var vvcPn = cookies['vvc_pn']

    // 是否是游戏中心
    this.isGameCenter = vvcPn == 'com.vivo.game'

    // 是否是官网
    this.isSpace = vvcPn == 'com.vivo.space'

    // 是否是应用商店
    this.isAppStore = vvcPn == 'com.bbk.appstore'

    // 是否是i音乐
    this.isiMusic = vvcPn == 'com.android.bbkmusic'

    // 是否是vivo浏览器
    this.isVivoBrowser = window.navigator.userAgent.indexOf('VivoBrowser') > -1

    // 当前h5环境
    // game:游戏中心
    // space:官网
    // store:应用商店
    // vivoBrowser:vivo浏览器
    this.current = this.isGameCenter ? 'game' : (this.isSpace ? 'space' : (this.isAppStore ? 'store' : (this.isVivoBrowser ? 'vivoBrowser' : 'other')))

    // 是否是vivo手机
    this.isVivo = window.navigator.userAgent.indexOf('vivo') > -1

    // 判断是否是微信环境
    this.isWeiXQ = /(micromessenger|webbrowser)/.test(navigator.userAgent.toLocaleLowerCase())

    // 当前执行环境
    this.env = process.env.NODE_ENV
  }

  /**
   * 登录方法
   * @param {*} params
   */
  login (params = {}) {
    // eslint-disable-next-line
    var callback = params.callback || new Function()
    var callbackPath = params.callbackPath || ''

    if (!(this.isSpace || this.isAppStore || this.isGameCenter)) {
      // eslint-disable-next-line
      location.href = __LOGINPATH__ + callbackPath
      return
    }
    window.onAccountsUpdate = callback
    var info = {
      info: {
        funName: 'onAccountsUpdate'
      }
    }
    return this.callClient('login', info)
  }

  /**
   * 查询当前环境是否支持分享
   */
  supportShare () {
    // 如果是官网需判断分享方法是否存在，存在才支持
    if (this.isSpace && window.vivospace && window.vivospace.doshare && window.vivospace.setShareChannelData) {
      return true
    }
    // 如果应用商店则支持分享，其他认为不支持
    if (this.isAppStore) {
      return true
    }
    return false
  }
  /**
   * 调用客户端分享功能
   * @param {*} param0
   */
  doShare ({ title = '', weiTitle = '', weiImg = '', weiLink = '' }) {
    // 如果是官方商城
    if (this.isAppStore) {
      var info = {
        info: {
          title,
          summary: weiTitle,
          imageUrl: weiImg,
          sharedUrl: weiLink
        }
      }
      return this.callClient('showShare', info)
    }

    // 如果是官网
    if (this.isSpace) {
      var shareObject = {
        title, weiTitle, weiImg, weiLink
      }
      var shareDetail = {
        qqspace: shareObject,
        qqfriend: shareObject,
        wxfriend: shareObject,
        wxspace: shareObject,
        weibo: shareObject
      }
      window.vivospace.setShareChannelData(JSON.stringify(shareDetail))
      window.vivospace.doshare()
      return
    }
    toast('仅支持官网APP和商店APP')
  }

  /**
   * 拷贝文本
   * @param {*} text
   */
  copy (text) {
    this.callClient('copyText', {
      'info': {
        'copyText': text || ''
      }
    })
    // 非客户端暂时不支持粘贴
    if (this.isSpace || this.isAppStore || this.isGameCenter) {
      toast('已复制到粘贴板')
    }
  }

  /**
   * 打开对应客户端的webview中的地址
   * @param {*} nativeType
   * @param {*} url
   */
  openVivoNativeURL (nativeType, url) {
    if (nativeType == 'game') {
      location.href = `vivogame://game.vivo.com/openjump?j_type=9&h5_link=${url}`
    } else if (nativeType == 'space') {
      location.href = `space://vivo.com/web?uri=${url}`
    } else if (nativeType == 'store') {
      location.href = `vivomarket://webview?url=${url}`
    } else {
      location.href = url
    }
  }

  callClient (funName, data) {
    if ((!this.isSpace || this.isAppStore || this.isGameCenter)) {
      toast('该功能不支持WAP端')
      return
    }
    if (typeof data == 'object') {
      if (!data['webErrorCatch']) {
        // 出错情况的回调
        data.webErrorCatch = 'BRIDGE_CALLBACK'
      }
      if (!data['localErrorCatch']) {
        data.localErrorCatch = 'true'
      }
      data = JSON.stringify(data)
    }
    // 全局其它异常情况回调
    window.BRIDGE_CALLBACK = function () {
      console.log('对不起，你的版本过低，不能使用该功能')
    }

    return window.AppWebClient.invokeLocal(funName, data)
  }
}

export default new App()
