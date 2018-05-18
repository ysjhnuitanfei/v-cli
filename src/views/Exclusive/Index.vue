<template>
  <div class="page">
    <view-box ref="viewBox">
      <!-- <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">你最喜欢的歌</x-header> -->
      <div class="fullpage-container">
        <div class="fullpage-wp" v-fullpage="opts">
          <div class="page-1 f-page">
            <div class="ex-page"></div>
          </div>
          <div class="page-2 f-page">
            <div class="ex-content">
              <h1>在一条伤心的大街上</h1>
              <div class="form">
                <i class="label">独家</i>
                <span>i音乐</span>
              </div>
              <div class="ex-time">
                <span>2018年4月29日</span>
                <p>阅读210</p>
              </div>
              <div class="ex-con">
                <p>今天我们采访的这位的大家可能都见过，他就是我们著名歌手XXX，今天呢有幸请到了XXX来做我们的这个独家栏目的活动！</p>
                <p><img src="https://source.unsplash.com/collection/190727/1080x350"></p>
                <p>今天我们采访的这位的大家可能都见过，他就是我们著名歌手XXX，今天呢有幸请到了XXX来做我们的这个独家栏目的活动！</p>
                <p>今天我们采访的这位的大家可能都见过，他就是我们著名歌手XXX，今天呢有幸请到了XXX来做我们的这个独家栏目的活动！</p>
              </div>
            </div>
            <cell class="i-love-music" :title="usetitle" :inline-desc="usedesc">
              <img class="song-head" slot="icon" src="~@/assets/images/usepic.jpg">
              <div class="i-right-con" slot="default">
                <img class="play-btn" src="~@/assets/images/play.png">
                <img class="love-btn" src="~@/assets/images/love-no.png">
              </div>
            </cell>
            <Comment></Comment>
          </div>
        </div>
      </div>
    </view-box>
  </div>
</template>


<script>
import API from '@/api'
import { ViewBox, Toast, Cell } from 'vux'
import Comment from '@/public/Comment/Index.vue'

export default {
  name: 'exclusive',
  components: {
    ViewBox,
    Toast,
    Cell,
    Comment

  },
  data () {
    return {
      apiContent: null,
      usetitle: '青花瓷(Live)',
      usedesc: '周杰伦',
      opts: {
        start: 0,
        dir: 'v',
        duration: '1000'
      }
    }
  },
  methods: {
  },
  mounted () {
    API.getData.getInfo().then(result => {
      var data = result.data
      this.apiContent = data
    })
  }
}
</script>
<style lang="less">
.fullpage-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 111;
}
.f-page {
  height: 100%;
  background: #fff;
  overflow: auto;
}
.ex-page {
  position: relative;
  width: 100%;
  height: 100vh;
  background: url("~@/assets/images/page.jpg") no-repeat center center;
  background-size: 100% 100%;
  z-index: 999;
}
.ex-content {
  width: 100%;
  height: auto;
  padding: 0 20px;
  box-sizing: border-box;
  overflow: hidden;
}
.ex-content h1 {
  width: 100%;
  margin-top: 20px;
  line-height: 30px;
  font-size: 16px;
  font-weight: normal;
}
.ex-content .form {
  float: left;
  width: 100%;
  height: auto;
}
.ex-content .form i {
  float: left;
  height: 20px;
  padding: 0 10px;
  line-height: 20px;
  font-size: 12px;
  background: #00a7f2;
  border-radius: 10px;
  font-style: normal;
  color: #fff;
}
.ex-content .form span {
  float: left;
  height: 20px;
  line-height: 20px;
  margin-left: 10px;
  font-size: 14px;
  color: #333;
}
.ex-time {
  width: 100%;
  height: auto;
  overflow: hidden;
}
.ex-time span,
.ex-time p {
  float: left;
  display: inline-block;
  font-size: 12px;
  color: #808992;
}
.ex-time p {
  margin-left: 10px;
}
.ex-con {
  width: 100%;
  height: auto;
  overflow: hidden;
}
.ex-con p {
  margin-top: 5px;
  padding: 0;
  font-size: 14px;
  color: #333;
}

.i-love-music {
  width: 80%;
  left: 8%;
  margin-top: 20px;
  padding: 1% 2% !important;
  border: solid 1px #bebebe;
}
.i-love-music::before {
  border-width: 0 !important;
}
.i-love-music .vux-label {
  float: left;
  height: 20px;
  line-height: 20px;
  font-size: 16px;
  color: #333;
}
.i-love-music img.song-head {
  display: block;
  margin-right: 10px;
  width: 50px;
  height: 50px;
}
.i-love-music .vux-label-desc {
  width: 100%;
  float: left;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  color: #999;
}

.i-right-con {
  float: right;
  height: 35px;
}
.i-right-con img.play-btn {
  width: 30px;
  height: 30px;
}
.i-right-con img.love-btn {
  width: 34px;
  height: 34px;
}
</style>