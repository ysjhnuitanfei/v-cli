import fetch from '../utils/fetch'
export default {
  /**
   * {API描述}
   */
  getInfo () {
    return fetch({
      url: '/api/backFn/getInfo.do',
      method: 'get'
    })
  }
}
