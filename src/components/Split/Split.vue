<template>
  <div class="split" ref="split"></div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      size: {
        type: Number,
        defaultValue: 1.0
      }
    },
    watch: {
      size () {
        this.setHeight()
      }
    },
    mounted () {
      this.setHeight()
    },
    methods: {
      /**
       * 自定义高度
       */
      setHeight () {
        if (this.size) {
          this.$refs.split.style.height = this.size + 'rem'
        } else {
          this.$refs.split.style.height = '1.0rem'
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .split
    width 100%
    height 1rem
    border-top 0.05rem solid rgba(7, 17, 27, 0.1)
    border-bottom 0.05rem solid rgba(7, 17, 27, 0.1)
    background #f3f5f7
</style>
