// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入设置rem文件
import '@/styles/reset.js'
//引入样式文件
import './styles/index.less'
//引入mint-ui
import {Indicator} from 'mint-ui'

//引入延迟300的插件
import fastclick from 'fastclick'
fastclick.attach(document.body)

//引入vuex
import store from './store'

//引入http库
import axios from 'axios'
//绑定到原型上
Vue.prototype.$http = axios

//支持promise
import 'babel-polyfill'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
