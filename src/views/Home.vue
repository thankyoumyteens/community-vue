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
      <div class="item" v-show="!loading" @click="loadMore">加载更多</div>
      <div class="item loading" v-show="loading">
        <img src="../assets/loading.gif" alt="loading">
      </div>
    </div>
  </div>
</template>

<script>
  import VHeader from '../components/Header/Header'
  import Split from '../components/Split/Split'
  import axios from 'axios'
  import { STATUS } from '../common/constants'
  import Vue from 'vue'

  export default {
    components: {
      VHeader,
      Split
    },
    data () {
      return {
        list: [],
        loading: false,
        pageIndex: 1
      }
    },
    created () {
      this.getList()
    },
    methods: {
      loadMore() {
        this.pageIndex++
        this.getList()
      },
      getList () {
        this.loading = true
        axios.get('/list', {
          params: {
            pageIndex: this.pageIndex
          }
        }).then(res => {
          this.loading = false
          let resData = res.data
          if (resData.status === STATUS.OK) {
            let data = resData.data
            for (let i = 0; i < data.length; i++) {
              Vue.set(this.list, this.list.length, data[i])
            }
            console.log(this.list)
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
        &.loading
          text-align center
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
