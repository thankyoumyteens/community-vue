<template>
  <div class="detail">
    <v-header :need-back="needBack"/>
    {{id}}
  </div>
</template>

<script type="text/ecmascript-6">
  import VHeader from '../components/Header/Header'

  export default {
    components: {
      VHeader
    },
    data () {
      return {
        needBack: true,
        id: this.$route.params.id
      }
    },
    /**
     * 当引入keep-alive的时候，
     * 页面第一次进入，钩子的触发顺序created-> mounted-> activated，
     * 退出时触发deactivated。
     * 当再次进入（前进或者后退）时，只触发activated
     */
    activated () {
      this.id = this.$route.params.id
      this.getDetail()
    },
    methods: {
      back () {
        window.history.go(-1)
      },
      getDetail () {
        console.log(this.id)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
