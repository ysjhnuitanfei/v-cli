<template>
  <div class='error-page' v-if="error.show">
    <div style="overflow: auto">
      <img src="~@/assets/error.png" alt="" v-webp>
      <div class="text">
        每个项目的错误页。都各不相同，
        <div>{{error.msg}}</div>
      </div>
      <div class="btns">
        <div class="btn" @click="reloadPage">
          刷新当前页面
        </div>
        <div class="btn" @click="prevPage">
          返回上一页
        </div>
        <div class="btn" @click="skipIndex">
          返回首页
        </div>
        <div class="btn" @click="skipBBS">
          论坛报错
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import qs from 'qs'
export default {
  name: 'error',
  props: ['error'],
  methods: {
    skipBBS () {
      location.href = 'https://gamembbs.vivo.com.cn'
    },
    skipIndex () {
      this.$router.push('/')
    },
    reloadPage () {
      window.location.reload()
    },
    prevPage () {
      window.history.go(-1)
    }

  },
  mounted () {
    var msg = qs.parse(window.location.href.split('?')[1]).msg
    this.msg = msg || this.$store.state.error.msg
  }
}
</script>
<style lang="less">
.error-page {
  display: flex;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  text-align: center;
  max-width: 1080px;
  background: #fff;
  z-index: 2147483647;
  img {
    width: 355px;
    height: 237px;
  }
  .text {
    margin-top: 30px;
    font-size: 16px;
    color: #666666;
  }
  .btns {
    margin-top: 20px;
  }
  .btns .btn {
    display: inline-block;
    margin-bottom: 20px;
    width: 33%;
    font-size: 16px;
    height: 40px;
    line-height: 40px;
    color: #fff;
    background: rgb(10, 136, 240);
    border-radius: 3px;
    letter-spacing: 1px;
  }
}
</style>
