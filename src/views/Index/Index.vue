<template>
  <ol id="index" class="unselect" v-if="fns">
    <li v-for="(item,index) in fns" :key="index">
      <router-link :to="item.path">{{item.name}}</router-link>
    </li>
    <br>
    <div>单个地址访问
      <router-link to="/changeBgColor">走你</router-link>
    </div>
  </ol>
</template>
<script>
import keepPageScroll from '@/mixins/keepPageScroll'
export default {
  mixins: [keepPageScroll],
  data () {
    return {
      fns: null
    }
  },
  mounted () {
    let fns = [
      {name: '通用样式', path: '/commonStyle'},
      {name: '改变背景色', path: '/changeBgColor'},
      {name: '返回键触发事件', path: '/backFn'},
      {name: '进入错误页', path: '/error'},
      {name: 'webp的使用', path: '/useWebp'},
      {name: '数据埋点', path: '/gap'},
      {name: '发起数据请求', path: '/getData'},
      {name: '记住当前页的scrollTop', path: '/scrollPage'},
      {name: '话题专栏', path: '/Toppic'},
      {name: '独家专访', path: '/Exclusive'},
      {name: '热点活动', path: '/Active'}
    ]
    // 模拟数据请求
    setTimeout(() => {
      this.fns = fns
    })
  }
}
</script>
<style lang="less">
#index {
  color: #06304b;
  height: 1500px;
  li {
    list-style-type: decimal;
    margin-left: 1.3rem;
  }
}
</style>
