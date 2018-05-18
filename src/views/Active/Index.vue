<template>
  <div class="page">
    <view-box ref="viewBox">
      <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">你最喜欢的歌</x-header>
      <swiper loop auto :list="banner" :index="banner_index"></swiper>
      <h1 class="ac-title">2018年度vivo音乐大奖提名投票选出你最爱的音乐</h1>
      <x-button class="ac-play-btn">播放全部</x-button>
      <group class="ac-sing-list" :title="singTitle">
        <cell v-for="(item, index) in singList" :key="index">
          <img class="song-head" slot="icon" src="~@/assets/images/usepic.jpg">
          <div slot="title">{{ item.sing_name }}</div>
          <div slot="after-title">{{ item.sing_poll }}票</div>
          <div class="ac-right-con" slot="default">
            <img class="play-btn" src="~@/assets/images/radio_button_0.png">
          </div>
        </cell>
      </group>
      <p class="ac-rule">活动规则：本次活动仅限vivo用户参与，去其用户评论的第一条汇总，然后随机抽取20名幸运奖，10名三等奖，3名二等奖，1名一等奖和一名特等奖，奖励会在活动结束收7个工作日陆续发放！</p>
      <Comment></Comment>
    </view-box>
  </div>
</template>


<script>
import API from '@/api'
import { ViewBox, XHeader, Swiper, Cell, XButton, Group } from 'vux'
import Comment from '@/public/Comment/Index.vue'

export default {
  name: 'active',
  components: {
    ViewBox,
    XHeader,
    Swiper,
    Cell,
    Comment,
    XButton,
    Group
  },
  data () {
    return {
      banner: baseList, // banner图
      banner_index: 0,
      singList: null, // 歌手列表
      singTitle: '最受欢迎的男歌手'
    }
  },
  methods: {

  },
  mounted () {
    // 获取投票歌手的信息
    API.getData.getInfo().then(result => {
      var data = result.data.sing
      this.singList = data
    })
  }
}
// 模拟接口返回的banner图
const baseList = [{
  img: 'https://source.unsplash.com/user/erondu/750x280'
  // title: '你最喜欢的一首歌是什么'
}, {
  img: 'https://source.unsplash.com/random/750x280'
  // title: '第一次听歌是什么时候'
}, {
  img: 'https://source.unsplash.com/category/nature/750x280'
  // title: '你喜欢哪个歌手'
}, {
  img: 'https://source.unsplash.com/category/food/750x280'
  // title: '最新活动'
}, {
  img: 'https://source.unsplash.com/collection/190727/750x280'
  // title: '来投你喜欢的歌一票吧'
}]
</script>
<style lang="less">
.vux-swiper {
  height: 160px !important;
}
.vux-indicator.vux-indicator-right {
  bottom: 0 !important;
}

.ac-title {
  box-sizing: border-box;
  width: 100%;
  height: auto;
  padding: 0 20%;
  margin-top: 30px;
  text-align: center;
  line-height: 1.4;
  font-size: 16px;
  font-weight: normal;
  color: #333;
}
.ac-play-btn {
  margin-top: 20px;
  width: 40% !important;
  background: #00a7f2 !important;
  color: #fff !important;
  line-height: 1.8 !important;
  font-size: 16px !important;
}

.ac-sing-list .weui-cells__title {
  font-size: 18px;
  color: #333;
  text-align: center;
}
.weui-cells {
  width: 80%;
  margin: auto;
}
.weui-cells::before,
.weui-cells::after {
  border: none !important;
}
.weui-cell {
  border: solid 1px #808992;
  margin-top: 10px;
}
.weui-cell__hd img {
  float: left;
  width: 40px;
  height: 40px;
}
.vux-cell-bd {
  margin-left: 10px;
}
.vux-cell-bd p div {
  float: left;
  width: auto;
  font-size: 14px;
  color: #333;
}
.vux-cell-bd p .vux-label div {
  width: 120px;
  margin-right: 10px;
  color: #666;
}
.ac-right-con {
  float: right;
  margin-right: 10px;
}
.ac-right-con img {
  float: left;
  margin-top: 2px;
  width: 25px;
  height: 25px;
}
.ac-rule {
  margin-top: 10px;
  padding: 5px 20px;
  font-size: 14px;
  color: #333;
  text-align: justify;
}
</style>