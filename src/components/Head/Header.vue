<template>
  <div class="head">
    <div class="header-left">
      <div class="header-iocn" @click="ListBol = true"></div>
      <!-- 下拉选择框 -->
      <div class="beast-wrap" v-show="ListBol">
        <!-- 登录logo -->
        <div class="menu-member">
          <!-- logo -->
          <div class="menu-logo">
            <img src="./images/iocn.png" alt="">
          </div>
          <!-- 登录 -->
          <div class="menu-infos">
            <span>登录/快速注册</span>
            <i></i>
          </div>
          <!-- close图标 -->
          <span class="menu-close" @click="ListBol=false"></span>
        </div>
        <!-- 列表 -->
        <div class="menu-list">
          <div class="menu-group">
            <!-- 列表一 -->
            <div class="menu-item" @click="upHome">
              <h2>首页</h2>
            </div>
          </div>
          <!-- 列表二 -->
          <div class="menu-group">
            <div class="menu-item" @click="changeBol(item.id)" v-if="item.id >1 && item.id < 6" v-for="(item,index) in categories" :key="index">
              <h2>{{item.name}}<i :class="{'active' :item.Bol}"></i></h2>
              <ul class="menu-item-child" v-show="item.Bol">
                <li class="menu-child-item" @click="toProduct(item.id,x.id)" v-for="x in item.categorie" :key="x.id">{{x.name}}</li>
                <li class="menu-child-item">进入店铺</li>
              </ul>
            </div>
          </div>
          <!-- 列表三 -->
          <div class="menu-group">
            <div @click="topro" class="menu-item">
              <h2>新鲜上架</h2>
            </div>
            <div @click="toArticle(7,0)" class="menu-item">
              <h2>海外直邮</h2>
            </div>
            <div class="menu-item">
              <h2>折扣优惠</h2>
            </div>
            <div class="menu-item">
              <h2>实体店</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 标题 -->
    <div class="header-title">{{HeadTitle}}</div>
    <!-- 右边图标 -->
    <div class="header-right">
      <div class="search-iocn" v-if="HeadBol == 'true'">
        <span></span>
      </div>
      <div class="cart-iocn" v-if="CartBol == 'true'">
        <span></span>
      </div>
      <div class="favor-iocn" v-if=" FavorBol == 'true'">
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['HeadTitle','HeadBol','CartBol','FavorBol'],
  data(){
    return {
      //大分类的显示隐藏
      ListBol:false,
      //小分类的显示隐藏
      listBol:false,
    }
  },
  computed:{
    categories(){
      return this.$store.state.categories
    }
  },
  methods:{
    //跳转到首页
    upHome(){
      this.$router.push('/')
      this.ListBol = false
    },
    //跳转页面
    toProduct(ID,id){
      //ID，id是两个变量，所以在路由里要拼接
      this.$router.push(`/new_product/${ID}/${id}`)
      this.ListBol = false
    },
    topro(){
      this.$router.push(`/new_product/6/0`)
      this.ListBol = false
    },
    toArticle(ID,id){
      this.$router.push( `/article/${ID}/${id}`)
      this.ListBol = false
    },
    //下拉选项
    changeBol(id){
      for(let i = 0 ; i < this.categories.length ; i++){
        if(id === this.categories[i].id){
          this.categories[i].Bol = !this.categories[i].Bol
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import url('../../styles/var.less');
.head{
  z-index: 1000;
  position:fixed;
  top:0;
  left: 0;
  right: 0;
  height: 1.28rem;
  line-height: 1.28rem;
  padding: 0 1.6rem;
  text-align: center;
  color:@color-text;
  font-size:.4533rem;
  border-bottom:1px solid #e1e1e1;
  box-sizing: border-box;
  background-color: white;
}
.header-left{
  position: fixed;
  top: .4rem;
  left: .4rem;
  z-index: 10000;
}
.header-iocn{
  width: .5867rem;
  height: .5867rem;
  background: url('./images/head-iocn.png') center center no-repeat;
  background-size: 100%;
}
.beast-wrap{
  position: fixed;
  left: 0;
  right: 1.3333rem;
  top: 0;
  bottom: 0;
  background-color:#3c3c3c;
  z-index: 10000;
  overflow-y:scroll;
  .menu-member{
    overflow: hidden;
    padding: .9333rem 0 .9333rem .8rem;
    .menu-logo{
      float: left;
      width: 1.4933rem;
      height: 1.4933rem;
    }
    .menu-infos{
      letter-spacing: .04rem;
      color:#ccc;
      font-size: .3466rem;
      float: left;
      margin-left: .4rem;
      position: relative;
      top:.1067rem;
      i{
        position: absolute;
        top: .5333rem;
        right: -.32rem;
        display: block;
        width: 0.2666rem;
        height: 0.2666rem;
        background: url('./images/jiantou.png') 0 50% no-repeat;
        transform: rotate(270deg)
      }
    }
    .menu-close{
      position: absolute;
      top: .5333rem;
      right: .5333rem;
      background: url('./images/close.png') 0 0 no-repeat;
      width: .32rem;
      height: .32rem;
    }
  }
}
.header-right{
  z-index: 2;
  zoom:1;
  position: absolute;
  right: .4rem;
  top: 0;
  left:8rem;
  height: 100%;
  line-height: 1.28rem;
  .search-iocn{
    position: absolute;
    top: 0;
    left: 0;
    margin-top: .3467rem;
    width: .5867rem;
    height: .5867rem;
    span{
      margin-top: .0667rem;
      display: block;
      width: 100%;
      height: 100%;
      background: url('./images/search-iocn.png') center center no-repeat;
      background-size: 100%;
    }
  }
  .cart-iocn{
    position: absolute;
    top: 0;
    right: 0;
    margin-top: .3467rem;
    width: .5867rem;
    height: .5867rem;
    span{
      margin-top: .0667rem;
      display: block;
      width: 100%;
      height: 100%;
      background: url('./images/cart-iocn.png') center center no-repeat;
      background-size: 100%;
    }
  }
  .favor-iocn{
    position: absolute;
    top: 0;
    right: 0;
    margin-top: .3467rem;
    width: .5867rem;
    height: .5867rem;
    span{
      display: block;
      width: 100%;
      height: 100%;
      background: url('./images/favor.png') center center no-repeat;
      background-size: 100%;
    }
  }
}

.menu-list{
  letter-spacing: .04rem;
  border-top: 1px solid #4f4f4f;
  .menu-group{
    border-top: 1px solid #4f4f4f;
    border-bottom: 1px solid #4f4f4f;
    h2{
      padding: 0 .4rem;
      position: relative;
      font-weight: 400;
      height: 1.28rem;
      font-size: .4rem;
      text-align: left;
      color:white;
      border-top: 1px solid #4f4f4f;
      border-bottom: 1px solid #4f4f4f;
      i{
        position: absolute;
        top: 30%;
        right: .4rem;
        line-height: .3733rem;
        width: .1867rem;
        height: .3733rem;
        background: url('./images/list-post.png') center 50% no-repeat;
        background-size: 100%;
        transform: rotate(360deg)
      }
      i.active{
        transition: all 0.5s;
        transform: rotate(180deg);
      }
    }
    .menu-item-child{
      padding: .2666rem 0;
      background-color: #323232;
      list-style: none;
      .menu-child-item{
        text-align: left;
        height: 1.0666rem;
        padding-left: .9866rem;
        line-height: 1.0666rem;
        color:@list-text;
        font-size: .4rem;
      }
    }
  }
}
</style>

