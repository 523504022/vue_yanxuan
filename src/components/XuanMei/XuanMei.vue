<template>
  <div class="xuanmei-wrapper">
    <div class="header">
      <div class="header-logo">
        <img class="header-logo-img" :src="item.avatar" alt>
      </div>
      <div class="header-author">{{item.nickname}}</div>
    </div>

    <div class="title">{{item.title}}</div>

    <div class="banner">
      <img class="banner-img" :src="item.picUrl" alt>
    </div>

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
.xuanmei-wrapper {
  width: 100%;
  padding: 0.36rem 0.34rem;
  box-sizing: border-box;

  .header {
    margin-bottom: 0.54rem;
    font-size: 0.38rem;
    color: #333;
    height: 0.38rem;
    line-height: 0.38rem;

    .header-logo {
      width: 0.56rem;
      height: 0.56rem;
      overflow: hidden;
      display: inline-block;
      border-radius: 50%;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      border: 0.01rem solid #d9d9d9;
      margin-right: 0.12rem;

      .header-logo-img {
        width: 100%;
        height: 100%;
      }
    }

    .header-author {
      display: inline-block;
      vertical-align: super;
    }
  }

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

  .banner {
    width: 100%;
    position: relative;
    margin-bottom: 0.2rem;
    overflow: hidden;
    border-radius: 0.08rem;

    .banner-img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .info {
    font-size: 0.22rem;
    color: #999;
    line-height: 0.32rem;
    margin-top: 0.18rem;

    .seeNum {
      .iconfont {
        font-size: 0.38rem;
        margin-right: 0.1rem;
        vertical-align: middle;
      }

      span {
        display: inline-block;
        vertical-align: middle;
        font-size: 0.36rem;
      }
    }
  }
}
</style>
