<template>
  <div>
    <div class="header">
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" :placeholder="remen.defaultKeyword.keyword">
      </div>
      <a href="javascript:;" class="quxiao" @click="$router.back()">取消</a>
    </div>
    <div class="content">
      <div class="contentWarp">
        <h3>热门搜索</h3>
        <div>
          <span v-for="(item,index) in remen.hotKeywordVOList" 
          :key="index"
          :class="{on:item.highlight === 1}">
            {{item.keyword}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  mounted(){
    this.$store.dispatch('getRemen')
  },
  computed: {
    ...mapState({
      remen:state => state.search.remen
    })
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.header {
  width: 100%;
  height: 110px;

  // background red
  .search {
    float: left;
    width: 604px;
    height: 56px;
    background: #eee;
    margin-left: 20px;
    margin-top: 16px;
    border: 1px solid #eee;
    border-radius: 8px;

    i {
      font-size: 42px;
      display: block;
      margin: 10px 1px 0 40px;
      color: #999;
    }

    input {
      float: right;
      margin-top: -50px;
      margin-right: 30px;
      width: 80%;
      background-color: #eee;
      outline: none;
      height: 56px;
      font-size: 0.37333rem;
    }
  }

  .quxiao {
    float: right;
    width: 100px;
    height: 60px;
    text-align: center;
    font-size: 28px;
    line-height: 60px;
    margin: 15px 15px 0 0;
    color: #333;
  }
}
.content
  width 100%
  height 90px
  .contentWarp
    width 95%
    margin 0 auto
    h3 
      font-size 30px
      height 60px
      color #999
    div
      span 
        float left
        margin-right 40px
        margin-bottom 30px
        padding 2px 10px
        height 47px
        color #333
        font-size 26px
        line-height 48px
        border 1px solid #999
        border-radius 5px
        &.on 
          border 1px solid #b4282d
          color #b4282d
</style>