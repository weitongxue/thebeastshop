import Vue from 'vue'
import Router from 'vue-router'

//按需加载页面
const HomePage = resolve => require(['../pages/HomePage/HomePage.vue'], resolve)
const NewProduct = resolve => require(['../pages/NewProduct/NewProduct.vue'], resolve)
const Featured = resolve => require(['../pages/Featured/Featured.vue'], resolve)
const Mine = resolve => require(['../pages/Mine/Mine.vue'], resolve)


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path:'/new_product',
      component:NewProduct
    },
    {
      path:'/featured',
      component:Featured
    },
    {
      path:'/mine',
      component:Mine
    }
  ]
})
