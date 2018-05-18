import Utils from '@/utils'
var mark = (function () {
  var imgs = []
  return function (params) {
    var img = new Image()
    imgs.push(img)
    var dataStr = ''
    for (var key in params) {
      dataStr += '&' + key + '=' + params[key]
    }
    /* eslint-disable */
    img.src = __STPATH__ + '?openid=' + Utils.app.openid + dataStr
    img.onerror = clear()
    img.onload = clear()
  }
  function clear() {
    imgs = []
  }
})()
export default mark
