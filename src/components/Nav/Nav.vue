<template>
  <div class="nav">
    <router-link class="nav-item" to="/"><i class="link-icon icon iconfont icon-home"></i><span>首页</span></router-link>
    <router-link class="nav-item" to="/xf"><i class="link-icon icon iconfont icon-crossfilter"></i><span>想法</span></router-link>
    <router-link class="nav-item" to="/dx"><i class="link-icon icon iconfont icon-education"></i><span>大学</span></router-link>
    <router-link class="nav-item" to="/xx"><i class="link-icon icon iconfont icon-message"></i><span>消息</span></router-link>
    <router-link class="nav-item" to="/wd"><i class="link-icon icon iconfont icon-user"></i><span>我的</span></router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .nav
    position fixed
    bottom: 0
    left: 0
    right 0
    height 3rem
    display flex
    align-items center
    background #fff
    box-shadow: 0 -0.1rem 0.3rem 0 #ccc;
    .nav-item
      flex 1
      text-align center
      text-decoration none
      color #777
      &.router-link-exact-active
        color #0086b3
      .link-icon
        display block
        margin-bottom 0.3rem
</style>
