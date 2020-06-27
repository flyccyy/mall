import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'home',
    component:()=>import('@/views/home.vue'),
    redirect:'/index',
    children:[
      {
        path:'index',
        name:'index',
        component:()=>import('@/views/index.vue')
      },
      {
        path:'product/:id',
        name:'product',
        component:()=>import('@/views/product.vue')
      },
      {
        path:'detail/:id',
        name:'detail',
        component:()=>import('@/views/detail.vue')
      },
    ]
  },
  //购物车组件单独分出来,因为如果放在order下，/order/cart 看起来有点奇怪
  {
    path:'/cart',
    name:'cart',
    component:()=>import('@/views/cart.vue')
  },
  {
    path:'/order',
    name:'order',
    component:()=>import('@/views/order.vue'),
    children:[
      {
        path:'list',
        name:'order-list',
        component:()=>import('@/views/orderList.vue'),
      },
      {
        path:'confirm',
        name:'order-confirm',
        component:()=>import('@/views/orderConfirm.vue'),
      },
      {
        path:'pay',
        name:'order-pay',
        component:()=>import('@/views/orderPay.vue'),
      },
      {
        path:'alipay',
        name:'alipay',
        component:()=>import('@/views/alipay.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
