<template>
  <div class="commentPage">
    <!-- 评论 -->
    <ul class="comment clearfix">
      <li v-for="(item,index) in comment" :key="index">
        <div class="com-l">
          <div class="com-l-img">
            <img class="head-img" src="~@/assets/images/usepic.jpg">
            <img class="sex-img" src="~@/assets/images/sexm.png">
          </div>
        </div>
        <div class="com-r">
          <div class="com-head">
            <span class="com-r-name">{{ item.comName }}</span>
            <i class="com-r-praise" @click="praiseNum(index)">{{ item.comPraise }}</i>
          </div>
          <p class="com-con">{{ item.comCon }}</p>
          <em class="com-time">{{ item.comTime }}</em>
        </div>
      </li>
    </ul>
    <!-- 输入评论 -->
    <div class="comment-input-content">
      <input type="text" v-model="comInput" placeholder="别憋着，说点啥!">
      <button type="button" @click="addComBtn">评论</button>
    </div>
  </div>
</template>
<script>
import API from '@/api'
export default {
  name: 'comment',
  components: {
  },
  data () {
    return {
      comment: null,
      comInput: '',
      commentList: [],
      checks: -1,
      isClickPraise: false
    }
  },
  methods: {
    addComBtn () {
      var comMessage = {comName: '', comCon: '', comPraise: '', comTime: ''}
      comMessage.comName = '王小二'
      comMessage.comCon = this.comInput
      comMessage.comPraise = Math.ceil(Math.random() * 1000)
      var nowDate = new Date()
      comMessage.comTime = nowDate.toLocaleString()
      this.comment.unshift(comMessage)
    },
    praiseNum (index) {
      if (this.isClickPraise) {
        return
      }
      let praNum = this.commentList[index].comPraise
      praNum += 1

      this.commentList[index].comPraise = praNum
      this.isClickPraise = true
    }
  },
  mounted () {
    API.getData.getInfo().then(result => {
      var data = result.data
      this.comment = data.comment
      this.commentList = data.comment
    })
  }
}
</script>
<style lang="less">
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
  color: #999;
  background: url(~@/assets/images/praise_icon.png) no-repeat left center;
  background-size: 20px 20px;
  padding: 0 20px 0 25px;
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
  z-index: 888;
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
  border: solid 1px #808992;
  outline: none;
  font-size: 14px;
  background: #fff url(~@/assets/images/comment-icon.png) no-repeat 5px center;
  background-size: 32px 32px;
  padding: 0 15px 0 35px;
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
</style>