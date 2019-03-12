<template>
  <div>
    <div class="header">
      <div class="logo">
        <h1>
          <img src="./img/yanxuan.png" alt>
        </h1>
      </div>
      <div class="search" @click="$router.push('/search')">
        <i class="iconfont icon-search"></i>
        <span>搜索商品,共21909款好物</span>
      </div>
      <div class="denglu" @click="$router.replace('/user')">登录</div>
    </div>
    <nav class="nav">
      <div class="header-nav-some-wrap">
        <div class="header-nav-some" v-if="home.kingKongModule">
          <a href="javascript:;" class="active">
            <span>推荐</span>
          </a>
          <a
            href="javascript:;"
            v-for="(item,index) in home.kingKongModule.kingKongList"
            :key="index"
          >
            <span>{{item.text}}</span>
          </a>
        </div>
      </div>
      <div class="mask">
        <i class="iconfont icon-zhankai"></i>
      </div>
    </nav>
    <div class="lunbo">
      <div class="swiper-container" id="swiper1">
        <ul class="swiper-wrapper">
          <li class="swiper-slide">
            <a href="javascript:;">
              <img src="./img/lunbo1.jpg" alt>
            </a>
          </li>
          <li class="swiper-slide">
            <a href="javascript:;">
              <img src="./img/lunbo2.jpg" alt>
            </a>
          </li>
          <li class="swiper-slide">
            <a href="javascript:;">
              <img src="./img/lunbo3.jpg" alt>
            </a>
          </li>
          <li class="swiper-slide">
            <a href="javascript:;">
              <img src="./img/lunbo4.jpg" alt>
            </a>
          </li>
        </ul>
        <div class="swiper-scrollbar"></div>
      </div>
    </div>
    <div class="title">
      <img src="./img/title.png" alt>
    </div>
    <div class="fenlei">
      <ul v-if="home.kingKongModule">
        <li v-for="(item,index) in home.kingKongModule.kingKongList"
            :key="index">
          <a href="jacascirpt:;">
            <img :src="item.picUrl" alt>
            <span>{{item.text}}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="qianggou">
      <div class="top">
        <img src="./img/qianggou/1.gif" alt>
      </div>
      <div class="bottom">
        <div class="left">
          <img src="./img/qianggou/2.jpg" alt>
        </div>
        <div class="right">
          <img src="./img/qianggou/3.jpg" alt>
        </div>
      </div>
    </div>
    <div class="yuangong">
      <img src="./img/yuangong.png" alt>
    </div>
    <div class="paihang" v-if="home.sceneLightShoppingGuideModule">
      <div class="guanlicontent" 
      v-for="(item,index) in home.sceneLightShoppingGuideModule"
      :key="index">
        <div class="content">
          <p class="top">{{item.styleItem.title}}</p>
          <p class="bottom">{{item.styleItemdesc}}</p>
          <img v-for="(img,index) in item.styleItem.itemPicBeanList"
          :src="img.picUrl" 
          :key="index"
          alt> 
        </div>
      </div>
    </div>
    <div class="siren">
      <p>私人定制</p>
      <div class="swiper-container" id="swiper2">
        <ul class="swiper-wrapper">
          <div class="swiper-slide" 
          v-for="(items,index) in sirendingzhi"
          :key="index"
          >
            <li v-for="(item,index) in items" :key="index">
              <img :src="item.primaryPicUrl" alt>
              <span>{{item.name}}</span>
              <b>￥{{item.retailPrice}}</b>
            </li>
          </div>
        </ul>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="chenggao"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import { mapState } from 'vuex'
import BScroll from 'better-scroll'
export default {
  mounted() {
    let swiperLunbo = new Swiper('#swiper1', {
      loop: true,
      scrollbar: {
        el: '#swiper1 .swiper-scrollbar',
        hide: true,
      },
    })
    let swiper1 = new Swiper('#swiper2', {
      loop: true,
      pagination: {
        el: '#swiper2 .swiper-pagination',
      }
    })

    this.$store.dispatch('getHome')
  },
  computed: {
    ...mapState({
      home: state => state.home.home
    }),
    sirendingzhi(){
      const  {home}  = this
      if(home.personalShop){
        const personalShop = home.personalShop
        const len = personalShop.length
        let size = 3
        let newArr = []
        // 按照指定大小切割数组 每size个切割成一个新数组
        for (var i = 0; i < len; i += size) {
          let arr = personalShop.slice(i, i + size)
          newArr.push(arr)
        }
        return newArr
      }
    }
  },
  methods: {
    _initScroll() {
      new BScroll('.header-nav-some-wrap', {
        click: true,
        scrollX: true
      })
    }
  },
  watch:{
    // 数据来了再调用BScroll
    home(){
      this.$nextTick(() => {
        this._initScroll()
      })
    }
  }
}  
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.header {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 88px;
  background-color: #fff;

  .logo {
    float: left;
    margin: 25px 0 0 30px;

    img {
      width: 138px;
      height: 40px;
    }
  }

  .search {
    float: left;
    width: 442px;
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

    span {
      font-size: 28px;
      color: #999;
      float: right;
      margin-top: -38px;
      margin-right: 40px;
    }
  }

  .denglu {
    float: right;
    width: 74px;
    height: 40px;
    border: 1px solid #b4282d;
    border-radius: 5px;
    margin: 25px 15px 0 0;
    color: #b4282d;
    text-align: center;
    line-height: 40px;
  }
}

.nav {
  background-color: #fff;
  margin-top: 89px;
  width: 650px;
  height: 45px;

  .header-nav-some-wrap {
    flex: 5;
    display: flex;
    overflow: hidden;

    .header-nav-some {
      white-space: nowrap;
      display: flex;
      height: 100%;

      a {
        flex: 1 0 auto;
        margin-left: 0.26667rem;
        padding: 5px 0.21333rem;
        text-align: center;
        color: #333;
        font-size: 0.37333rem;

        &.active {
          color: #b4282d;
          border-bottom: 4px solid #b4282d;
        }
      }
    }
  }

  .mask {
    position: absolute;
    background-color: #fff;
    top: 89px;
    right: 0px;
    width: 70px;
    height: 45px;

    i {
      font-size: 35px;
      color: #999;
    }
  }
}

.lunbo {
  .swiper-container {
    width: 100%;
    height: 370px;

    img {
      width: 100%;
      height: 370px;
    }
  }
}

.title {
  position: relative;
  top: -10px;
  margin: 0 auto;
  width: 99%;
  height: 65px;
  background: blue;

  img {
    width: 100%;
    height: 100%;
  }
}

.fenlei {
  width: 100%;
  height: 341px;

  ul {
    width: 95%;
    height: 50%;
    margin-left 40px
    display: flex;
    flex-wrap wrap

    li {
      text-align: center;
      margin: 10px 30px 9px 0;
      
      img {
        width: 110px;
        height: 110px;
      }

      span {
        display: block;
        margin-top: 10px;
        color: black;
        font-size: 25px;
      }
    }
  }
}

.qianggou {
  margin-top: 40px;

  .left {
    float: left;
  }

  .right {
    float: right;
  }
}

.yuangong {
  width: 100%;
  height: 160px;

  img {
    width: 100%;
    height: 100%;
  }
}

.paihang {
  width: 90%;
  height: 576px;
  margin: 200px auto 0;
  background: #eee;
  border-bottom: 30px solid #fff;
  display: flex;
  flex-wrap: wrap;

  .guanlicontent {
    width: 335.5px;
    height: 286px;
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
    text-align: center;

    .top {
      font-size: 34px;
      line-height: 100px;
    }

    .bottom {
      color: #999;
    }

    img {
      width 150px
      height 150px
    }
  }
}

.siren {
  width: 100%;
  height: 410px;
  border-top: 20px solid #eee;
  background-color: #fff;

  p {
    display: block;
    margin: 40px 0 0 30px;
    font-size: 34px;
    color: #000;
  }

  ul {
    margin-top: 30px;
    width: 100%;
    height: 300px;

    // display: flex;
    .swiper-slide {
      width: 100%;
      height: 100%;
    }

    li {
      margin-left: 27px;
      width: 216px;
      height: 216px;
      background-color: #eee;
      float: left;

      img {
        width: 216px;
        height: 216px;
      }
    }

    span {
      display: block;
      width: 216px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    b {
      display: block;
      margin-left: 70px;
      margin-top: 5px;
      color: red;
    }
  }
}

.chenggao {
  width: 100%;
  height: 5000px;
}
</style>