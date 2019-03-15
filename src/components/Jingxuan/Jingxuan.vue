<!--
  识物: style: 2
  识物组推荐
-->
<template>
  <div class="groupItem-wrapper">
    <div class="groupItem-info">
      <div class="header">
        <div class="header-logo">
          <img class="header-logo-img" :src="item.avatar" alt>
        </div>
        <div class="header-author">{{item.nickname}}</div>
      </div>
      <div class="title">{{item.title}}</div>
      <div class="decs">{{item.subTitle}}</div>
      <div class="info">
        <div class="seeNum">
          <i class="iconfont icon-kanguo"></i>
          <span>{{readCount}}人看过</span>
        </div>
      </div>
    </div>
    <div class="banner">
      <img class="banner-img" :src="item.picUrl" alt>
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
        return Math.round(readCount/10000) + 'w'
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
.groupItem-wrapper {
  position: relative;
  padding: 0.32rem 0.3rem;
  width: 100%;
  background: #fff;
  margin: 0.2rem 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;

  .groupItem-info {
    width: 5.66667rem;

    .header {
      font-size: 0.38rem;
      color: #333;
      line-height: 0.36rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      .header-logo {
        display: inline-block;
        width: 0.56rem;
        height: 0.56rem;
        overflow: hidden;
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
      line-height: 0.58rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      padding-top: 0.32rem;
    }

    .decs {
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 0.38rem;
      line-height: 0.4rem;
      padding-top: 0.18rem;
      color: #7f7f7f;
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

  .banner {
    position: relative;
    width: 3.73333rem;
    height: 3.73333rem;
    overflow: hidden;
    border-radius: 0.08rem;

    .banner-img {
      /* width: 100% */
      position: absolute;
      left: 0;
      top: 0;
      display: block;
      height: 100%;
    }
  }
}
</style>
