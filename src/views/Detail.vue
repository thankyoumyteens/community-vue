<template>
  <div class="detail">
    <v-header :need-back="needBack"/>
    <div class="item loading" v-show="loading">
      <img src="../assets/loading.gif" alt="loading">
    </div>
    <div class="main-content" v-if="!loading">
      <h1 class="title">{{title}}</h1>
      <div class="answer-list">
        <div class="answer" v-for="(item,index) in answers" :key="index">
          <div class="answer-top">
            <img :src="item.userAvatar" :alt="item.userAvatar">
            <span>{{item.userName}}</span>
          </div>
          <div class="answer-content" v-html="item.content"></div>
          <div class="answer-date">发布于 {{item.date}}</div>
          <button class="answer-upvote">{{item.upvote}}</button>
          <div class="answer-comment">评论 {{item.comment}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import VHeader from '../components/Header/Header'
  import axios from 'axios'
  import { STATUS } from '../common/constants'

  export default {
    components: {
      VHeader
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

</style>
