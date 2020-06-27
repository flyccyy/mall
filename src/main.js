//习惯把插件放上面，组件放下面
import Vue from 'vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import env from './env.js'

const mock = true;
if(mock){
  require('./mock/api') //用require，不用import,因为import是预编译的时候就会加载进来存到内存，而require是执行到那里才会加载，这里如果mock是false，就不会执行
}

//这个项目的接口规范是：
// {
//   status:0,
//   data:[],
//   msg:''
// }

//根据前端的跨域方式做调整，比如当我们是接口代理的时候（接口的域名和我们前端的域名一样称为接口代理,localhost），地址不用写完整：axios.defaults.baseURL = '/api'
//如果是jsonp跨域或者cors跨域，即后端的域名跟前端的不一样的时候，地址就要写完整，比如axios.defaults.baseURL = 'http://www.baidu.com'

//这里是接口代理，如果是easymock,直接改这里的基地址
// axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000;

//根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;

//响应拦截：对返回的数据进行统一处理，未登录返回登录页
//接口错误拦截
axios.interceptors.response.use(function (response){
  // response.data 接口返回的值
  let res = response.data;
  if(res.status == 0) {
    return res.data; //这里的data是我们接口的data
  }else if(res.status == 10) {
    //这里是未登录
    window.location.href = '/#/login'
  }else {
    alert(res.msg);
  }
})
Vue.use(VueAxios,axios);



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
