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
@import url('../../styles/var.less');
.head{
  position:fixed;
  top:0;
  left: 0;
  right: 0;
  height: 1.28rem;
  line-height: 1.28rem;
  padding: 0 1.6rem;
  text-align: center;
  color:@color-text;
  font-size: .453333333333333rem;
}
</style>

