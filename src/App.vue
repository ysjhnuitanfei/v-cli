<template>
  <div style="width:100%;height:100%">
    <Error :error="error"></Error>
    <loading :loading="isLoading"></loading>
    <!-- <transition name="fade" mode="out-in"> -->
    <router-view></router-view>
    <!-- </transition> -->
  </div>
</template>

<script>
import Error from '@/public/Error/Index.vue'
import Loading from '@/public/Loading/Index.vue'
import { mapState } from 'vuex'
export default {
  components: {
    Loading,
    Error
  },
  watch: {
    '$route' (to, from) {
      this.$vux.alert.hide()
      this.$vux.toast.hide()
    }
  },
  computed: {
    ...mapState({
      isLoading: state => state.loading.isLoading,
      error: state => state.error
    })
  },
  mounted () {

  }
}
</script>
<style lang="less">
@import "./app.less";
</style>
