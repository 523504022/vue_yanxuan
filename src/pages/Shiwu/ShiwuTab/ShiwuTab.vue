<template>
  <div class="shiwuTab">
    <div class="content">
      <div v-if="num===0">
        <Split/>
        <div v-for="(items,index) in tuijian" :key="index">
          <div v-for="(item,index) in items.topics" :key="index">
            <XuanMei v-if="item.style===1" :item="item"/>
            <Jingxuan v-if="item.style===2" :item="item"/>
            <Split/>
          </div>
        </div>
        <div v-for="(items,index) in tuijian2.result" :key="index+'2'">
          <div v-for="(item,index) in items.topics" :key="index">
            <XuanMei v-if="item.style===1" :item="item"/>
            <Jingxuan v-if="item.style===2" :item="item"/>
            <Style3 v-if="item.style===3" :item="item"/>
            <Style4 v-if="item.style===4" :item="item"/>
            <Split/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import XuanMei from '../../../components/XuanMei/XuanMei'
import Split from '../../../components/Split/Split'
import Jingxuan from '../../../components/Jingxuan/Jingxuan'
import Style3 from '../../../components/Style3/Style3'
import Style4 from '../../../components/Style4/Style4'
import BScroll from 'better-scroll'
import { clearTimeout } from 'timers';
export default {
  props:{
    num:Number
  },
  data () {
    return {
      page:1
    }
  },
  components: {
    XuanMei,
    Split,
    Jingxuan,
    Style3,
    Style4
  },

  mounted() {
    this.$store.dispatch('getTuijian')

    this.$nextTick(() => {
      let scroll = new BScroll('.shiwuTab', {
        click: true,
        pullUpLoad: true,
      })
      scroll.on('pullingUp', () => {
        let page = this.page++
        this.$store.dispatch('getTuijian2',page)
        console.log('数据来了',page)
        scroll.finishPullUp()
      })
      scroll.refresh()
    })

  },

  computed: {
    ...mapState({
      tuijian: state => state.shiwu.tuijian,
      tuijian2: state => state.shiwu.tuijian2
    })
  },
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.shiwuTab {
  margin-top: 150px;
  width: 100%;
  height: 1280px;

  .content {
    //padding-bottom: 200px;
  }
}
</style>