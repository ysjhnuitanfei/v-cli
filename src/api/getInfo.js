import fetch from '../utils/fetch'
export default {
  /**
   * {API描述}
   */
  getInfo (params) {
    return fetch({
      url: 'http://mock.vivo.xyz/mockApi/i/api/home/getInfo.do',
      method: 'get',
      params
    })
  }
}
