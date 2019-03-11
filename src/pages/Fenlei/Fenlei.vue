<template>
  <div class="fenlei">
    <div class="header">
      <div class="search">
        <i class="iconfont icon-search"></i>
        <span>搜索商品,共21888款好物</span>
      </div>
    </div>
    <div class="classify">
      <ul>
        <li v-for="(item,index) in fenlei.categoryL1List" :key="index"
         @click="bianse(index)" :class="xuanzhong===index?'active':''">
          <a href="javascript:;">{{item.name}}</a>
        </li>
      </ul>
    </div>
    <router-view :list="list" />
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState} from 'vuex'
import { version } from 'punycode';
export default {
  data () {
    return {
      xuanzhong:0,
      list: []
    }
  },
  mounted () {
    this.$store.dispatch('getFenlei')
    new BScroll('.classify',{
      click:true
    })
  },

  computed:{
    ...mapState({
      fenlei: state => state.fenlei.fenlei
    }),
  },

  methods:{
    bianse(index){
      this.xuanzhong = index
      this.list = this.fenlei.categoryL1List[index].subCateList
    }
  },
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.fenlei
  .header 
    width 100%
    height 88px
    border-bottom 2px solid #eee
    position relative
    background-color #fff
    z-index 100
    .search
      width 690px
      height 56px
      background-color #ededed
      border-radius 7px
      position absolute
      top 0 
      bottom 0
      left 0
      right 0
      margin auto
      line-height 60px
      i 
        float left
        font-size 50px
        color #666
        margin-left 160px
      span 
        float left
        font-size 26px
        color #666
  .classify
    width 162px
    height 1148px
    float left
    ul 
      width 100%
      display flex
      flex-direction column
      border-right 2px solid #eee
      li 
        width 100%
        height 50px
        margin-top 40px
        &.active
          border-left 5px solid #b4282d
          a 
            color #b4282d
        a 
          display block
          color #666
          font-size 28px
          text-align center
          line-height 45px
  
           


</style>