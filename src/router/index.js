import Vue from 'vue'
import Router from 'vue-router'

const HomePage = resolve => require(['../pages/HomePage/HomePage.vue'], resolve)


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomePage
    }
  ]
})
