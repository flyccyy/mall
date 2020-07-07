<template>
  <div id="app">
  
    <router-view/>
  </div>
</template>
<script>
// import axios from 'axios'
import jsonp from 'jsonp'
import storage from './storage'
export default {
  data(){
    return {
      data:''
    }
  },
  mounted(){
  //   let url = "/api/activity/servicetime";
  //   // let url = "/activity/servicetime";
  //   // axios.get(url).then(res=>{
  //   //   console.log(res)
  //   // })
  //   jsonp(url,(err,res)=>{
  //     console.log(res)
  //     this.data = res;
  //   })
  // storage.setItem('a',1);
  // storage.setItem('abc',{a:1},'user');
  // this.axios.get('/mock/user/login.json').then((res)=>{
  //   this.data = res;
  // })
  }
}
</script>
<style lang="less">
@import '@/assets/less/reset.less';
</style>
