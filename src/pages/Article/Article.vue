<template>
  <div class="article">
    <Header HeadTitle = '大家好才是真的好' HeadBol=''/>
    <div class="main-wrap">
      <div class="outer-box">
        <div class="box-img">
          <img src="./images/banner1.png" alt="">
        </div>
      </div>
      <div class="outer-box">
        <div class="box-nav"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Head/Header'
export default {
  components:{
    Header
  }
}
</script>

<style lang="less" scoped>
.outer-box{
  width: 100%;
  .box-img{
    margin-bottom: .4rem;
  }
}
</style>




