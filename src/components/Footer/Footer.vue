<template>
  <footer id="footer">
    <a
      href="javascript:;"
      class="guide_item"
      :class="{on: $route.path === '/home'}"
      @click="goTo('/home')"
    >
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </a>
    <a
      href="javascript:;"
      class="guide_item"
      :class="{on: $route.path === '/fenlei'}"
      @click="goTo('/fenlei')"
    >
      <span class="item_icon">
        <i class="iconfont icon-fenlei"></i>
      </span>
      <span>分类</span>
    </a>
    <a
      href="javascript:;"
      class="guide_item"
      :class="{on: $route.path === '/shiwu'}"
      @click="goTo('/shiwu')"
    >
      <span class="item_icon">
        <i class="iconfont icon-icon"></i>
      </span>
      <span>识物</span>
    </a>
    <a
      href="javascript:;"
      class="guide_item"
      :class="{on: $route.path === '/shopcar'}"
      @click="goTo('/shopcar')"
    >
      <span class="item_icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span>购物车</span>
    </a>
    <a
      href="javascript:;"
      class="guide_item"
      :class="{on: $route.path === '/user'}"
      @click="goTo('/user')"
    >
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>个人</span>
    </a>
  </footer>
</template>

<script>
export default {
  methods: {
    goTo(path) {
      this.$router.replace(path)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixins.styl"
  #footer  //footer
    border-top 1px solid #e4e4e4
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 98px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 10px
      color #999999
      &.on
        color #b4282d
      span
        font-size 22px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 48px
</style>