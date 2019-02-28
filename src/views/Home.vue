<template>
  <div class="home">
    <v-header class="v-header"/>
    <div class="list">
      <div class="item" v-for="(item,index) in list" :key="index">
        <h1 class="title">{{item.title}}</h1>
        <p class="content">{{item.content}}...</p>
        <div class="bottom-line">
          <span class="upvote">{{item.upvote}}赞同</span>
          <span> · </span>
          <span class="comment">{{item.comment}}评论</span>
        </div>
        <split size="0.5"/>
      </div>
    </div>
  </div>
</template>

<script>
  import VHeader from '../components/Header/Header'
  import Split from '../components/Split/Split'
  import axios from 'axios'
  import { STATUS } from '../common/constants'

  export default {
    components: {
      VHeader,
      Split
    },
    data () {
      return {
        list: []
      }
    },
    created () {
      axios.get('/list').then(res => {
        let resData = res.data
        if (resData.status === STATUS.OK) {
          let data = resData.data
          this.list = data
          console.log(this.list)
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home
    .v-header
      position fixed
      top 0
      left 0
    .list
      margin-top 2.5rem
      .item
        padding 0.2rem 0
        cursor pointer
        .title
          font-weight bold
          font-size 1.1rem
          padding 0.3rem
        .content
          padding 0.3rem
        .bottom-line
          padding 0.3rem
          color #777
</style>
