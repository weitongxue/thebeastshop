<template>
  <div id="app">
    <header/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Head/Header'
export default {
  name: 'App',
  components:{
    Header
  }
  
}
</script>

<style>
</style>
