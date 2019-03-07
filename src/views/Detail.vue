<template>
  <div class="detail">
    <v-header :need-back="needBack"/>
    <div class="item loading" v-show="loading">
      <img src="../assets/loading.gif" alt="loading">
    </div>
    <div class="main-content" v-if="!loading">
      <h1 class="title">{{title}}</h1>
      <split/>
      <div class="answer-list">
        <div class="answer" v-for="(item,index) in answers" :key="index">
          <div class="answer-top">
            <img :src="item.userAvatar" :alt="item.userAvatar">
            <span>{{item.userName}}</span>
          </div>
          <div class="answer-content" v-html="item.content"></div>
          <div class="answer-date">编辑于 {{item.date}}</div>
          <div class="answer-bottom">
            <button class="answer-button answer-upvote">
              <i class="icon iconfont icon-up"></i>
              <span>赞同 {{item.upvote}}</span>
            </button>
            <button class="answer-button answer-downvote">
              <i class="icon iconfont icon-down1"></i>
            </button>
            <button class="answer-comment">
              <i class="icon iconfont icon-message1"></i>
              <span>评论 {{item.comment}}</span>
            </button>
            <button class="answer-favorite">
              <i class="icon iconfont icon-star"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Split from '../components/Split/Split'
  import VHeader from '../components/Header/Header'
  import axios from 'axios'
  import { STATUS } from '../common/constants'

  export default {
    components: {
      VHeader,
      Split
    },
    data () {
      return {
        needBack: true,
        id: this.$route.params.id,
        loading: false,
        title: '',
        answers: []
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
      console.log('detail id: ', this.id)
      this.getDetail()
    },
    methods: {
      getDetail () {
        this.loading = true
        axios.get('/detail', {
          params: {
            id: this.id
          }
        }).then(res => {
          this.loading = false
          let resData = res.data
          if (resData.status === STATUS.OK) {
            let data = resData.data
            this.title = data.title
            this.answers = data.answers
          }
        }).catch(err => {
          this.loading = false
          console.error(err)
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .detail
    .main-content
      .title
        padding 1rem 0.5rem
      .answer-list
        .answer
          border-bottom 0.1rem solid #ccc
          .answer-top
            padding 0.5rem
            img
              width 2rem
              height 2rem
            span
              color #777
              vertical-align top
              margin-left 0.3rem
          .answer-content
            padding 0 0.5rem
          .answer-date
            padding 0.5rem
            color #ccc
          .answer-bottom
            padding 0 0.5rem 0.5rem 0.5rem
            .answer-button
              color #0084ff
              background rgba(0, 132, 255, 0.1)
              border 0
              outline none
              border-radius 0.1rem
              padding 0.2rem 0.5rem
              span
                margin-left 0.2rem
              &:active
                background rgba(0, 132, 255, 0.2)
            .answer-downvote
              margin-left 0.5rem
            .answer-comment
              margin-left 1rem
              border 0
              outline none
              background #fff
              color #777
              i
                font-size 0.8rem
              span
                margin-left 0.2rem
            .answer-favorite
              border 0
              outline none
              background #fff
              color #777
              margin-left 0.5rem
              i
                font-size 1rem
</style>
