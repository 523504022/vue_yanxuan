<template>
  <div class="updateGoods-wrapper" >
    <div class="title">{{item.title}}</div>
    <div class="decs">{{item.subTitle}}</div>
    <ul class="updateGoods-goods">
      <li class="updateGood" v-for="(img, index) in item.itemList" :key="index">
        <img v-if="img" :src="img.itemUrl" alt>
      </li>
    </ul>
    <div class="info">
      <div class="seeNum">
        <i class="iconfont icon-kanguo"></i>
        <span>{{readCount}}人看过</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  computed: {
    // 对数字进行加工处理
    readCount() {
      const { readCount } = this.item
      if (readCount > 9999) {
        return Math.round(readCount / 10000) + 'w'
      } else if (readCount > 999) {
        return (readCount / 1000).toFixed(2) + 'k'
      } else {
        return
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.updateGoods-wrapper {
  width: 100%;
  background: #fff;
  margin: 0.2rem 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0.36rem 0.3rem;

  .title {
    font-size: 0.48rem;
    color: #333;
    line-height: 0.62rem;
    margin: -0.08rem 0 0.16rem 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .decs {
    width: 100%;
    font-size: 0.38rem;
    line-height: 0.4rem;
    padding-top: 0.18rem;
    color: #7f7f7f;
  }

  .updateGoods-goods {
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin: 0.24rem 0;

    .updateGood {
      width: 2.23333rem;
      height: 2.23333rem;
      border-radius: 0.04rem;
      overflow: hidden;
      background: #f4f4f4;
      margin-bottom: 0.08rem;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .info {
    font-size: 0.38rem;
    color: #999;
    line-height: 0.32rem;
    margin-top: 0.38rem;

    .seeNum {
      .iconfont {
        font-size: 0.38rem;
        margin-right: 0.1rem;
        vertical-align: middle;
      }

      span {
        display: inline-block;
        vertical-align: middle;
        font-size: 0.32rem;
      }
    }
  }
}
</style>
