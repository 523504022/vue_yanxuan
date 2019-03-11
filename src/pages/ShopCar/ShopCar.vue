<template>
  <div class="shopCar">
    <div class="header">
      <h3>购物车</h3>
      <a href="javascript:;">领劵</a>
    </div>
    <div class="title">
      <ul>
        <li>
          ·30天无忧退货
        </li>
        <li>
          ·48小时快速退款
        </li>
        <li>
          ·满88元免邮费
        </li>
      </ul>
    </div>
    <div class="car">
      <img src="./img/gouwuche.png" alt="">
      <span>去添加点什么吧</span>
    </div>
    <div class="denglu">
      <div @click="$router.replace('/user')">
        登录
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.shopCar
  background-color #f4f4f4
  width 100%
  height 17.75rem
  .header 
    width 100%
    height 88px
    background-color #fff
    border-bottom 2px solid #eee
    h3 
      font-size 38px
      width 16%
      line-height 80px
      margin-left 320px
      float left
    a
      display block
      float right
      margin-right 55px
      line-height 80px
      color #B4282D
      font-size 32px
  .title
    width 100%
    height 100px
    ul 
      width 90%
      margin 0 auto 
      display flex
      justify-content space-between
      li 
        margin-top 20px
        font-size .32rem
        color #666
.car
  margin-top 380px
  width 100%
  height 300px
  img 
    display block
    width 248px
    height 248px
    margin-left 240px
  span 
    font-size .37333rem
    margin-left 282px
    color #999
.denglu
  div
    width 480px
    height 92px
    margin 30px auto 0
    background-color #B4282D
    border-radius 6px
    text-align center
    line-height 1.22667rem
    font-size .4rem
    color #fff
</style>