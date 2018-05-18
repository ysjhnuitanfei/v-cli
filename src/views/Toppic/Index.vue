<template>
  <div class="page">
    <view-box ref="viewBox">
      <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">你最喜欢的歌</x-header>
      <swiper loop auto :list="banner" :index="banner_index"></swiper>
      <div class="topic clearfix">
        <!-- 话题 -->
        <h1>什么时候开始喜欢单曲循环一首歌？</h1>
        <p>最近在头条上发了很多自认为很好听的音乐mv。不知道为什么有几个总是不被推荐 搞的小编很是郁闷。听说是头条为了打击重复视频而特意升级了后台。但是费了老半天劲才发表的东西一下子不被推荐也是伤心。 对于美妙的歌曲大家是不是跟小编一样喜欢单曲循环一首歌。今日，本人发布了一首《青花瓷》很是招人喜欢。
        </p>
        <cell class="i-love-music" :title="usetitle" :inline-desc="usedesc">
          <img class="song-head" slot="icon" src="~@/assets/images/usepic.jpg">
          <div class="i-right-con" slot="default">
            <img class="play-btn" src="~@/assets/images/play.png">
            <img class="love-btn" src="~@/assets/images/love-no.png">
          </div>
        </cell>
        <!-- 投票 -->
        <div class="vote clearfix">
          <h1 class="tc">你最爱听什么歌？</h1>
          <ul class="vote-list">
            <li class="vote-item" v-for="(item,index) in voteList" :key="index" @click="checkVote(index)">
              <span class="ellipsis">{{ item.vName }}</span>
              <p>{{ item.vVote }}票</p>
              <i class="check-vote-bg" :class="{' checks-vote-bg ':index==checks}"></i>
            </li>
          </ul>
        </div>
      </div>
      <!-- 评论 -->
      <Comment></Comment>
    </view-box>
  </div>
</template>


<script>
import API from '@/api'
import Utils from '@/utils'
import { ViewBox, XHeader, TransferDom, Swiper, Cell, Toast } from 'vux'
import Comment from '@/public/Comment/Index.vue'

export default {
  name: 'toppic',
  directives: {
    TransferDom
  },
  components: {
    ViewBox,
    XHeader,
    Swiper,
    Cell,
    Toast,
    Comment
  },
  data () {
    return {
      banner: baseList,
      list: [],
      banner_index: 0,
      usetitle: '青花瓷(Live)',
      usedesc: '周杰伦',
      voteList: [],
      checks: -1
    }
  },
  methods: {
    checkVote (index) {
      // 投票
      if (this.checks !== -1) {
        Utils.toast('您已投过票')
        return
      }
      this.checks = index
    }
  },
  mounted () {
    API.getData.getInfo().then(result => {
      var data = result.data
      this.list = data
      this.voteList = data.loveList
      this.commentList = data.comment
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
ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}
.tc {
  text-align: center;
}
.vux-swiper {
  height: 160px !important;
}
.topic {
  padding: 0 10px;
}
.topic h1 {
  font-size: 16px;
  font-weight: normal;
  height: 35px;
  line-height: 40px;
  color: #333;
}
.topic p {
  font-size: 12px;
  line-height: 20px;
  color: #666;
  text-align: justify;
}
.vux-indicator.vux-indicator-right {
  bottom: 0 !important;
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

.vote {
  margin-top: 20px;
}
.vote-list {
  width: 220px;
  height: auto;
  margin: auto;
}
.vote-list li {
  box-sizing: border-box;
  width: 100%;
  float: left;
  height: auto;
  margin-top: 8px;
  padding: 2px 10px;
  border-radius: 5px;
  border: solid 1px #808992;
}
.vote-list li span {
  float: left;
  width: 100px;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  color: #333;
}
.vote-list li p {
  float: left;
  margin-left: 10px;
  width: 60px;
  height: 30px;
  line-height: 30px;
  text-align: right;
  font-size: 14px;
}
.check-vote-bg {
  float: right;
  width: 20px;
  height: 20px;
  margin-top: 6px;
  background: url("~@/assets/images/radio_button_0.png") no-repeat center center;
  background-size: 100%;
}
.check-vote-bg.checks-vote-bg {
  background: url("~@/assets/images/radio_button_1.png") no-repeat center center;
  background-size: 100%;
}
.vote-list li img {
  float: right;
  width: 20px;
  height: 20px;
  margin-top: 6px;
}

.comment {
  margin-top: 40px;
  border-top: 1px solid #efefef;
}
.comment li {
  width: 100%;
  float: left;
  overflow: hidden;
}
.com-l {
  width: 70px;
  min-height: 80px;
  float: left;
}
.com-l .com-l-img {
  float: right;
  position: relative;
  margin-right: 10px;
  margin-top: 10px;
  width: 40px;
  height: 40px;
}
.com-l img.head-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.com-l img.sex-img {
  width: 18px;
  height: 18px;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 2;
}
.com-r {
  margin-left: 70px;
  height: auto;
  overflow: hidden;
  min-height: 50px;
  border-bottom: 1px solid #efefef;
}
.com-r .com-head {
  width: 100%;
  margin-top: 5px;
  height: 30px;
  line-height: 30px;
}
.com-r .com-head .com-r-name {
  float: left;
  width: 70%;
  font-size: 14px;
  color: #999;
}
.com-r .com-head .com-r-praise {
  float: right;
  font-size: 14px;
  font-style: normal;
  padding: 0 20px 0 25px;
  color: #999;
  background: url("~@/assets/images/praise_icon.png") no-repeat left center;
  background-size: 20px 20px;
}
.com-con {
  font-size: 14px;
  color: #333;
  padding-right: 30px;
  text-align: justify;
}
.com-time {
  width: 100%;
  float: left;
  line-height: 25px;
  font-size: 12px;
  color: #999;
  font-style: normal;
}

.comment-input-content {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background: #f5f5f5;
  z-index: 111;
  border-top: solid 1px #ebebeb;
}
.comment-input-content input {
  box-sizing: border-box;
  float: left;
  width: 68%;
  margin-left: 5%;
  margin-top: 5px;
  height: 30px;
  border-radius: 25px;
  padding: 0 15px 0 35px;
  border: solid 1px #808992;
  outline: none;
  font-size: 14px;
  background: #fff url("~@/assets/images/comment-icon.png") no-repeat 5px center;
  background-size: 32px 32px;
}
.comment-input-content button {
  float: right;
  margin-top: 5px;
  margin-right: 5%;
  width: 20%;
  height: 30px;
  border: none;
  background: #00a7f2;
  line-height: 30px;
  color: #fff;
  font-size: 14px;
  border-radius: 25px;
}

.toast-vote .weui-toast__content {
  font-size: 16px !important;
  padding: 5px 10px !important;
}
</style>