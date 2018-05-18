import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['updateIndexPosition']),
    handler () {
      this.updateIndexPosition(window.scrollY)
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handler, false)
  },
  updated () {
    this.$nextTick(() => {
      window.scrollTo(0, this.$store.state.scrollTop.top)
    })
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handler, false)
  }
}
