import Vue from 'vue'
import Router from 'vue-router'

//按需加载页面
const HomePage = resolve => require(['../pages/HomePage/HomePage.vue'], resolve)
const NewProduct = resolve => require(['../pages/NewProduct/NewProduct.vue'], resolve)
const Featured = resolve => require(['../pages/Featured/Featured.vue'], resolve)
const Mine = resolve => require(['../pages/Mine/Mine.vue'], resolve)
const Article = resolve => require(['../pages/Article/Article.vue'], resolve)


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path:'/new_product/:ID/:id',
      component:NewProduct,
      meta:{
        //缓存页面
        KeepAlive : true
      }
    },
    {
      path:'/featured',
      component:Featured
    },
    {
      path:'/mine',
      component:Mine
    },
    {
      path:'/article',
      component:Article
    }
  ]
})
