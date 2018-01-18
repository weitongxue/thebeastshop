<template>
  <div id="app">
    <keep-alive>
      <!-- 缓存页面 -->
       <router-view v-if="$route.meta.KeepAlive"></router-view>
    </keep-alive>
    <!-- 不缓存 -->
    <router-view v-if="!$route.meta.KeepAlive"></router-view>
  </div>
</template>

<script>
import api from './api'
export default {
  created(){
    //获取服务器里的商品数据，并储存在本地数据库中
    let that = this
    async function getData (){
      //获取分类数据
      let res = await that.$http.get(api.host + '/categories')
      that.$store.commit("SAVE_CATEGORIES",res.data)
      let recommend = res.data[0].categorie[7].recommend
      that.$store.commit("SEAV_REXOMMEND",recommend)
      //获取商品数据
      let ruset = await that.$http.get(api.host + '/products')
      that.$store.commit("SAVE_PRODUCTS",ruset.data)
    }
    getData ()
  },
  name: 'app',
}
</script>

<style>
</style>
