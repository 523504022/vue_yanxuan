<template>
  <div>
    <router-view/>
    <Footer class="footer" v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import Footer from './components/Footer/Footer'
export default {
  components:{
    Footer
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
