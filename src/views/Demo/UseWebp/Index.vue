<template>
  <div class='useWebp' id='useWebp'>
    <div>
      <div>
        测试图片-png格式
      </div>
      <img src="~@/assets/error.png" style="width:2rem" ref="png" class="img">
      <div>
        {{pngContent.type}} {{pngContent.size}}
      </div>
    </div>
    <br/>
    <hr/>
    <br/>
    <div>
      <div>
        测试图片-webp格式
      </div>
      <img src="~@/assets/error.png" style="width:2rem" ref="webp" class="img" v-webp>
      <div>
        {{webpContent.type}} {{webpContent.size}}
      </div>
      <div>
        背景图片-webp格式
      </div>
      <div class="bgImage" v-webp="require('@/assets/error.png')"></div>
    </div>
    <pre>
两张肉眼分辨不出差别的图片，
在使用webp指定后，大小压缩了3.5倍。
使用方法：在img标签，使用v-webp
   &lt;img src="~@/assets/error.png"
   ref="webp" class="img" <b>v-webp</b>/&gt;
注意：v-webp指令只针对当前工程静态资源图片生效，
外链图片不支持。
    </pre>
  </div>
</template>
<script>
  export default {
    name: 'useWebp',
    components: {},
    data () {
      return {
        pngContent: {},
        webpContent: {}
      }
    },
    methods: {
      getReqImgSize (src) {
        return new Promise(function (resolve, reject) {
          var xhr = new XMLHttpRequest()
          xhr.open('GET', src, true)
          xhr.responseType = 'blob'
          xhr.onload = () => resolve({type: xhr.response.type, size: (xhr.response.size / 1024).toFixed(2) + 'kb'})
          xhr.send()
        })
      },
      getLocalImgSize (src) {
        let {initiatorType, decodedBodySize} = performance.getEntriesByName(src)[0]
        return {
          type: initiatorType,
          size: (decodedBodySize / 1024).toFixed(2) + 'kb'
        }
      }
    },
    async mounted () {
      // 获得图片类型和大小
      // 第一种方法，重新发送请求，从响应头中取得大小
      // this.pngContent = await this.getReqImgSize(this.$refs.png.src)
      // this.webpContent = await this.getReqImgSize(this.$refs.webp.src)

      // 第二种方法，从performance类种获得命中文件的请求响应信息
      this.$refs.png.onload = () => {
        this.pngContent = this.getLocalImgSize(this.$refs.png.src)
      }
      this.$refs.webp.onload = () => {
        this.webpContent = this.getLocalImgSize(this.$refs.webp.src)
      }
    }
  }
</script>
<style lang="less">
.bgImage {
  height: 307px;
  background: url("~@/assets/error.png") no-repeat 100% 50%;
}
</style>
