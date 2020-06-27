<template>
  <div>
  <!-- home.vue的作用：统一调用头尾部，只调用一次就好，这样就不用每个组件都调用相同的头尾 -->
  <!-- index.vue,detail.vue,product.vue是嵌套在home.vue里面的 -->
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from '../components/NavHeader.vue'
import NavFooter from '../components/NavFooter.vue'
export default {
  name:'home',
  components:{
    NavHeader,
    NavFooter
  }
}
</script>

<style>

</style>