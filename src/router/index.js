import Vue from 'vue'
import Router from 'vue-router'

//按需加载页面
const HomePage = resolve => require(['../pages/HomePage/HomePage.vue'], resolve)
const NewProduct = resolve => require(['../pages/NewProduct/NewProduct.vue'], resolve)
const Mine = resolve => require(['../pages/Mine/Mine.vue'], resolve)
const Article = resolve => require(['../pages/Article/Article.vue'], resolve)
const Detail = resolve => require(['../pages/Detail/Detail.vue'], resolve)
const Register = resolve => require(['../pages/Register/Register.vue'], resolve)


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomePage,
      meta:{
        //不缓存页面
        KeepAlive : false
      }
    },
    {
      path:'/new_product/:ID/:id',
      component:NewProduct,
      meta:{
        //不缓存页面
        KeepAlive : false
      }
    },
    {
      path:'/mine',
      component:Mine,
      meta:{
        //不缓存页面
        KeepAlive : false
      }
    },
    {
      path:'/article/:ID/:id',
      component:Article,
      meta:{
        //不缓存页面
        KeepAlive : false
      }
    },
    {
      path:"/detail/:id",
      component:Detail
    },
    {
      path:"/register",
      component:Register
    }
  ]
})
