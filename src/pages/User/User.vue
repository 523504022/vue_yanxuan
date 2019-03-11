<template>
  <div class="user">
    <div class="herader">
      <div class="left">
        <a href="javascript:;">
          <i class="iconfont icon-shouye" @click="goTo('/home')"></i>
        </a>
      </div>
      <img src="./img/yanxuan.png" alt>
      <div class="search">
        <a href="javascript:;">
          <i class="iconfont icon-search"></i>
        </a>
      </div>
      <div class="right">
        <a href="javascript:;">
          <i class="iconfont icon-gouwuche" @click="goTo('/shopcar')"></i>
        </a>
      </div>
    </div>
    <div v-if="iFshow">
      <div class="logowrap">
        <img src="./img/logo.png" alt>
      </div>
      <div class="ipone" @click="shoujiGo">
        <div class="text">
          <i class="iconfont icon-shouji"></i>
          <span>手机号码登录</span>
        </div>
      </div>
      <div class="e-mail">
        <div class="text">
          <i class="iconfont icon-youxiang"></i>
          <span>邮箱账号登录</span>
        </div>
      </div>
      <div class="zhuce">
        <span>手机号快捷注册 ></span>
      </div>
      <img src="./img/denglu.png" alt>
    </div>
    <div v-else>
      <div class="zhuce_logo">
        <img src="./img/logo.png" alt="">
      </div>
      <input type="text" placeholder="请输入手机号" v-model="shoujiNum">
      <div class="more"></div>
      <input type="text" placeholder="请输入短信验证码">
      <div class="more"></div>
      <div class="button">获取验证码</div>
      <div class="go">
        <span>登录</span>
      </div>
      <div class="qita">
        <span>其他方式登录</span>
      </div>
      <div class="zhuce_zhuce">注册账号 ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iFshow: true,
      shoujiNum:''
    }
  },
  methods: {
    goTo(path) {
      this.$router.replace(path)
    },
    shoujiGo(){
      this.iFshow = !this.iFshow
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.user {
  background-color: #f4f4f4;
  width 100%
  height: 17.75rem;

  .herader {
    position: relative;
    width: 100%;
    height: 88px;
    background-color: #fff;
    border-bottom: 2px solid #eee;

    .left {
      float: left;
      margin: 10px 0 0 20px;
      width: 48px;
      height: 44px;

      a {
        display: block;
        width: 100%;
        height: 100%;

        i {
          font-size: 60px;
          color: black;
        }
      }
    }

    img {
      width: 172px;
      height: 54px;
      margin: 15px 0 0 220px;
    }

    .search {
      position: absolute;
      top: 15px;
      right: 130px;
      width: 48px;
      height: 44px;

      a {
        display: block;
        width: 100%;
        height: 100%;

        i {
          font-size: 60px;
          color: black;
        }
      }
    }

    .right {
      position: absolute;
      top: 5px;
      right: 50px;
      margin: 10px 0 0 60px;
      width: 48px;
      height: 44px;

      a {
        display: block;
        width: 100%;
        height: 100%;

        i {
          font-size: 60px;
          color: black;
        }
      }
    }
  }

  .logowrap {
    width: 100%;
    height: 410px;
    position: relative;

    img {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: 268px;
      height: 90px;
    }
  }

  .ipone {
    margin: 0 auto;
    width: 670px;
    height: 94px;
    border-radius: 7px;
    background-color: #b4282d;

    .text {
      width: 240px;
      height: 60px;
      margin: 0 auto;

      i {
        float: left;
        font-size: 40px;
        color: #fff;
        line-height: 90px;
      }

      span {
        float: left;
        margin-left: 20px;
        font-size: 28px;
        color: #fff;
        line-height: 90px;
      }
    }
  }

  .e-mail {
    margin: 30px auto;
    width: 670px;
    height: 94px;
    border-radius: 7px;
    background-color: #f4f4f4;
    border: 1px solid #b4282d;
    box-sizing: border-box;

    .text {
      width: 240px;
      height: 60px;
      margin: 0 auto;

      i {
        float: left;
        font-size: 44px;
        color: #b4282d;
        line-height: 90px;
      }

      span {
        float: left;
        margin-left: 20px;
        font-size: 28px;
        color: #b4282d;
        line-height: 90px;
      }
    }
  }

  .zhuce {
    width: 300px;
    height: 200px;
    margin: 0 auto;
    text-align: center;

    span {
      font-size: 26px;
    }
  }

  img {
    width: 60%;
    margin-left: 158px;
    margin-top: 250px;
  }
  .zhuce_logo{
    width: 100%;
    height 330px
    img {
      position absolute
      top -110px
      left 120px
      width 192px
      height 64px
    } 
  }
  input {
    width 80%
    margin 50px 0 0 50px
    background-color #f4f4f4
    outline:none
    height: 0.9rem;
    font-size: 0.4rem;
    line-height: 0.6rem;
  }
  .more{
    width 90%
    height 3px
    margin 0 auto
    background-color #000  
  }
  .button {
    position absolute
    top 580px
    left 500px
    width 190px
    height 62px
    background-color #fff
    border 1px solid #000
    border-radius 10px
    text-align center
    font-size 30px
    line-height 60px
  }
  .go {
    width: 90%;
    height: 95px;
    margin: 100px auto 0;
    background-color #b4282d
    border-radius 15px
    span {
      float: left;
      margin-left: 312px;
      font-size: 30px;
      color: #fff;
      line-height: 90px;
    }
  }
  .qita {
    width: 90%;
    height: 95px;
    margin: 20px auto 0;
    background-color #fff
    border-radius 15px
    border 1px solid #b4282d
    span {
      float: left;
      margin-left: 258px;
      font-size: 30px;
      color: #b4282d;
      line-height: 90px;
    }
  }
  .zhuce_zhuce{
    font-size 32px
    margin-top 20px
    margin-left 305px
  }
}
</style>