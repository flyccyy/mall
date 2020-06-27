module.exports = {
  devServer:{
    host:'localhost',  //主机
    port:8081,
    proxy:{    //代理，如当方位/api时，会代理到我们所配置的地方去
      // '/activity':{
      //   target:'https://www.imooc.com',  //代理到慕课网
      //   changeOrigin:true,   //是否将主机头的原点更改为目标url地址
      //   pathRewrite:{
      //     '/activity':'/activity'   //路径的转换规则
      //   }
      // }
      '/api':{   //在每一个请求地址前都加上/api，这样就可以统一不同的接口
        target:'https://www.imooc.com',
        changeOrigin:true,   //要设置pathRewrite的话就要把changeOrigin设置为true
        pathRewrite:{
          'api':''   //作用是统一地址，真实的请求上是没有/api的，将请求的有/api的都变为空，比如/api/activity，最后就变为https://www.imooc.com/activity
        }
      }

    }
  }
}