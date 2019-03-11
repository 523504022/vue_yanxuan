<template>
  <div class="bsCrollWarp">
    <div class="content">
      <img class="titleImg" :src="fenleiImg" alt>
      <ul class="contentWarp">
        <li v-for="(item,index) in list" :key="index">
          <img :src="item.wapBannerUrl" alt>
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: {
    list: Array,
    fenleiImg:''
  },
  mounted() {
    new BScroll('.bsCrollWarp', {
      click:true
    })
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.bsCrollWarp{
  width: 528px;
  height: 1148px;
  float: left;
  margin-left: 30px;
  .content {
    width: 100%;
    .titleImg {
      margin-top: 40px;
      width: 100%;
      height: 192px;
      margin-bottom: 32px;
    }

    .contentWarp {
      width: 100%;
      display: flex;
      flex-wrap: wrap;

      li {
        width: 144px;
        height: 216px;
        text-align: center;
        margin-right 32px
        img {
          width: 144px;
          height: 144px;
        }

        span {
          line-height: 35px;
        }
      }
    }
  }
}
</style>