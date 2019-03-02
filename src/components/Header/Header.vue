<template>
  <div class="header">
    <div class="back-icon" v-if="needBack">
      <i class="icon iconfont icon-arrow-left-o" @click="back"></i>
    </div>
    <div class="search-box">
      <i class="icon iconfont icon-search"></i>
      <input type="text" class="search-bar" placeholder="搜索内容">
    </div>
    <button class="link-btn" v-if="needAsk">
      <i class="icon iconfont icon-edit"></i>
      <span>提问</span>
    </button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      needBack: {
        type: Boolean,
        default: false
      },
      needAsk: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      /**
       * 返回上一页
       */
      back () {
        window.history.go(-1)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    width 100%
    height 2.5rem
    box-sizing border-box
    padding 0.5rem
    display flex
    background #fff
    box-shadow: 0 0.1rem 0.3rem 0 #ccc;
    .back-icon
      width 2.5rem
      height 1.5rem
      display flex
      align-items center
      justify-content left
      cursor pointer
    .search-box
      flex 1
      position relative
      .icon-search
        position absolute
        left 1rem
        top 50%
        transform translateY(-50%)
        color #777
        font-size 0.8em
      .search-bar
        width 100%
        background #eee
        border 0
        border-radius 0.2rem
        padding 0.3rem 0
        padding-left 2rem
        box-sizing border-box
    .link-btn
      border 0
      outline none
      background rgba(0, 0, 0, 0)
      cursor pointer
      .icon-edit
        color #0086b3
      span
        color #0086b3
        font-weight bold
</style>
