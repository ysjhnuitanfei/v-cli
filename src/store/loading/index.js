// 定义store对象
var num = 0
const loading = {
  state: {
    isLoading: false
  },
  actions: {

  },
  mutations: {
    updateLoadingStatus (state, payload) {
      if (payload.isLoading) {
        num++
        setTimeout(() => {
          if (num > 0) {
            state.isLoading = true
          }
        }, 300)
      } else {
        num--
        if (num == 0) {
          state.isLoading = false
        }
      }
    }
  }
}

export default loading
