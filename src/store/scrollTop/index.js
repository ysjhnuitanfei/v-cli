// 定义store对象
const scrollTop = {
  state: {
    top: 0
  },
  actions: {
    updateIndexPosition ({ commit }, top) {
      commit({ type: 'updateIndexPosition', top: top })
    }
  },
  mutations: {
    updateIndexPosition (state, payload) {
      state.top = payload.top
    }
  }
}
export default scrollTop
