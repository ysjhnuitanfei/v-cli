var Fn = {
  newVnode: null,
  closeName: null,
  randomNum: 0,
  changeTag: false,
  _changeState () {
    // popstate发生改变
    if (history.state.id === 'init' + this.randomNum) {
      // changeState被触发
      this.changeTag = true
      this.newVnode.context[this.closeName]()
    }
  },
  onTouchMove (event) {
    event.preventDefault()
  },
  close () {
    // 移除popstate事件
    window.removeEventListener('popstate', this.changeState)
    window.removeEventListener('touchmove', this.onTouchMove)
    // 没有触发返回事件
    if (this.changeTag === false) {
      // 还原history.state
      window.history.go(-1)
    }
  },
  open (newVnode, closeName) {
    window.history.replaceState({ id: 'init' + this.randomNum }, '')
    window.history.pushState({ id: 'upgrade' + this.randomNum }, '')
    window.addEventListener('popstate', this.changeState)
    window.addEventListener('touchmove', this.onTouchMove)
  }
}
const backFn = {
  install (Vue, options = {}) {
    Vue.directive('backFn', {
      update: function (el, binding, newVnode, oldVnode) {
        var value = binding.value
        var node = newVnode.data.directives.find(x => x.name === 'backFn')
        if (node.value.show === node.oldValue.show || value === undefined) {
          return
        }
        var isShow = value.show
        var closeName = value.closeFn
        if (!el.Fn) {
          el.Fn = {
            ...Fn,
            randomNum: ~(new Date()),
            closeName,
            newVnode
          }
          el.Fn.changeState = el.Fn._changeState.bind(el.Fn)
        }
        if (isShow) {
          el.Fn.open()
        } else {
          el.Fn.close()
          el.Fn = null
        }
      }
    })
  }
}
export default backFn
