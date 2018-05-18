<template>
  <div class='getData' id='getData' v-if="data">
    <div style="margin:.5rem">
      <flexbox>
        <flexbox-item>
          <x-button type="default" @click.native="getNextPage()">请求下页数据<br/>共两页数据</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button type="primary" @click.native="getNextPage(true)">发起请求<br/>自身消化错误处理</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button type="warn" @click.native="getNextPage(false)">发起错误请求<br/>系统级处理错误</x-button>
        </flexbox-item>
      </flexbox>
    </div>
    <x-table>
      <thead>
        <tr>
          <th>礼包名称</th>
          <th>剩余件数</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in data" :key="index">
          <td>{{item.brief}}</td>
          <td>{{item.stockAvailable}}件</td>
        </tr>
      </tbody>
    </x-table>
  </div>
</template>
<script>
  import API from '@/api'
  import Utils from '@/utils'
  import { XTable, XButton, Flexbox, FlexboxItem } from 'vux'
  export default {
    name: 'getData',
    components: {
      XTable,
      XButton,
      Flexbox,
      FlexboxItem
    },
    data () {
      return {
        pageNo: 0,
        data: null
      }
    },
    methods: {
      async getNextPage (errorLevel) {
        this.pageNo++
        if (errorLevel !== undefined) {
          this.pageNo = 1111111111111111
        }
        // API访问
        let response = await API.getData.getInfo({pageNo: this.pageNo, acceptError: errorLevel})
        let result = response.data
        if (errorLevel && result.retcode != 0) {
          Utils.toast('数据请求错误')
          return
        }
        this.$nextTick(() => {
          if (this.data) {
            this.data = result.data.benefits.concat(this.data)
          } else {
            this.data = result.data.benefits
          }
        })
      }
    },
    async mounted () {
      this.getNextPage()
    }
  }
</script>
<style lang="less">
.getData,
.weui-btn {
  font-size: 0.09rem !important;
}
</style>
