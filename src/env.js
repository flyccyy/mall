//这里是用jsonp或cors跨域的时候才这样配置环境，如果是代理，baseURL直接='/api'，需要配置不同的地址的话就在vue.config.js配置，只能直接改里面的target，只有一个，不能多个一起写，所以不同的环境的时候需要每次都去改


let baseURL;
//process.env.NODE_ENV获取nodejs里面环境变量的参数信息
switch (process.env.NODE_ENV) {
  case 'development':  //直接npm run serve时会传mode是development过来，直接npm run build时传的是production
    baseURL = 'http://dev-mall-pre.springboot.cn/api';
    break;   
  case 'test':
    baseURL = 'http://test-mall-pre.springboot.cn/api';
    break;
  case 'prev':
    baseURL = 'http://prev-mall-pre.springboot.cn/api';
    break;
  case 'prod':
    baseURL = 'http://mall-pre.springboot.cn/api';
    break;
  default :
    baseURL = 'http://mall-pre.springboot.cn/api';
    break;
}
export default {
  baseURL
}