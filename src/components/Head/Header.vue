<template>
  <div class="head">
    <div class="iocn"></div>
    <div class="header-title">{{HeadTitle}}</div>
    <div class="cart-iocn"></div>
  </div>
</template>

<script>
export default {
  props:['HeadTitle'],
}
</script>

<style lang="less" scoped>
.head{
  position:fixed;
  top:0;
  left: 0;
  right: 0;
  height: 1.28rem;
  background-color: red;
}
</style>

