import store from '@/store/'
import fetch from './fetch'
import toast from './toast'
import className from './className'
import app from './app'
function getOffsetTop (e) {
  var offsetTop = e.offsetTop
  if (e.offsetParent != null) offsetTop += getOffsetTop(e.offsetParent)
  return offsetTop
}
function showLoading () {
  store.commit('updateLoadingStatus', { isLoading: true })
}
function hiddenLoading () {
  store.commit('updateLoadingStatus', { isLoading: false })
}

export default {
  getOffsetTop,
  fetch,
  showLoading,
  hiddenLoading,
  className,
  toast,
  app
}
