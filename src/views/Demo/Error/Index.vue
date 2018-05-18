<template>
  <div class='error' id='error'>
    这个页面我们来做点实验 😏<br/> 如果系统发生错误了，前端展示错误页 🤕
    <br/> 但是经过用户不断的刷新，系统恢复了，就应该关闭错误页。😂
    <br/>
    <a href="javacript:void 0" @click="error" style="color:red">
      点击我，我会出错。
    </a>
  </div>
</template>
<script>
import store from '@/store'
export default {
  name: 'error',
  components: {},
  data () {
    return {}
  },
  methods: {
    error () {
      store.commit('setError', { msg: '哎呀，竟然出错了1。', show: true })
    }
  },
  mounted () {
  }
}
</script>
