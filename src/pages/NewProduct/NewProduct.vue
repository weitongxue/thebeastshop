<template>
  <div class="new-product">
    <Header :HeadTitle ='title' HeadBol = 'true'/>
    <div class="main-wrap">
      <!-- 导航 -->
      <nav>
        <div class="nav-item" @click="changeClass">
          上架时间
          <span class="iocn-wrap"><i class="iocn1" :class='[myClass]'></i></span>
        </div>
        <div class="nav-item" @click="changeStyle">
          商品价格
          <span class="iocn-wrap"><i class="iocn2" :class='[myStyle]'></i></span>
        </div>
        <div class="nav-item">
          筛选
          <span class="iocn-wrap"><i class="iocn3"></i></span>
        </div>
      </nav>
      <!-- 商品 -->
      <div class="product-wrap">
        <div class="product-item" v-for="(item,index) in sortProduct" :key="index">
          <div class="product-img">
            <img :src="item.img">
          </div>
          <div class="line">{{item.describe}}</div>
          <div class="brand-name">{{item.names}}</div>
          <div class="brand-name">{{item.name}}</div>
          <div class="price">￥{{item.price}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Head/Header'
import api from '../../api'
export default {
  created(){
    if(!this.products.length > 0){
      this.$http(api.host + '/products')
      .then(res =>{
        this.productInfo = res.data
        this.getPath()
      })
    }else{
      this.productInfo = this.products
      this.getPath()
    } 
  },
  data(){
    return {
      //商品数据(媒介)
      productInfo:[],
      //判断是上还是下(默认是上)
      direction:true,
      myClass:'',
      myStyle:'',
      //大分类id
      ID:'',
      //小分类id
      id:'',
      //渲染的数组对象
      showProductArr:[],
      //标题
      title:""
    }
  },
  //监听路由变化
  watch:{
   "$route":"getPath"  // 监听事件
  },
  methods:{
    getPath(){
      this.myClass = 'active2'
      this.myStyle = ''
      this.title = ''
      this.showProductArr = []
      let path = this.$route.params;    //获得当前路径
      this.ID = path.ID
      this.id = path.id
      //同时在页面变化时拿到对应的商品数据
      if(this.id == 0){
        //表示没有小分类，这个时候应该拿到的就是大分类对应的商品数据
        for(let i = 0 ; i < this.productInfo.length ; i++){
          if(this.ID == this.productInfo[i].categoriesId){
            this.showProductArr.push(this.productInfo[i])
          }
        }
      }else{
        //表示有小分类，这个时候应该拿到该大分类对应小分类的商品数据
        for(let j = 0 ; j < this.productInfo.length ; j++){
          if(this.ID == this.productInfo[j].categoriesId && this.id == this.productInfo[j].categorieId){
            this.showProductArr.push(this.productInfo[j])
          }
        }
      }
      //拿到对应的标题
      if(this.id == 0){
        for(let e = 0 ; e < this.categories.length ; e++){
          if(this.ID == this.categories[e].id){
            this.title = this.categories[e].name
          }
        }
      }else{
        for(let m = 0 ; m < this.categories.length ; m++){
          if(this.ID == this.categories[m].id){
            let categorie = this.categories[m].categorie
            for(let k = 0 ; k < categorie.length ; k++){
              if(this.id == categorie[k].id){
                this.title = categorie[k].name
              }
            }
          }
        }
      }
    },
    //切换按钮的class值,并实现对应的商品数据排序
    changeClass(){
      this.myStyle = ''
      if(this.direction){
        this.direction = false
        this.myClass = 'active1'
        //表示商品上架时间为升序
      }else{
        this.direction = true
        this.myClass = 'active2'
        //表示商品上架时间为降序
      }
    },
    changeStyle(){
      this.myClass = ''
      if(this.direction){
        this.direction = false
        this.myStyle = 'active1'
      }else{
        this.direction = true
        this.myStyle = 'active2'
      }
    },
  },
  components:{
    Header
  },
  computed:{
    //拿到分类数据
    categories(){
      return this.$store.state.categories
    },
    //拿到所有商品数据
    products(){
      return this.$store.state.products
    },
    //排序的商品
    sortProduct(){
      if(this.myClass == ''){
        //排序的是商品价格
        if(this.direction){
          return this.showProductArr.slice(0).sort((a,b)=>{
            return b.price - a.price
        })
        }else{
          return this.showProductArr.slice(0).sort((a,b)=>{
            return a.price - b.price
          })
        }
      }else if (this.myStyle == ''){
        //排序的是商品的上架时间
        if(this.direction){
          return this.showProductArr.slice(0).sort((a,b)=>{
            return b.time - a.time
        })
        }else{
          return this.showProductArr.slice(0).sort((a,b)=>{
            return a.time - b.time
          })
        }
      }
    }
  },
}
</script>

<style lang="less" scoped>
@import url('../../styles/base.less');
//头部
nav{
  position: fixed;
  width: 10rem;
  height: 1.1733rem;
  background-color: #fafafa;
  z-index: 100;
  display: flex;
  line-height: 1.1733rem;
  border-bottom: 1px solid #e6e7e8;
  .nav-item{
    flex: 1;
    border-left: 1px solid #e6e7e8;
    text-align: center;
    color:#4d4d4d;
    font-size: .37334rem;
    .iocn-wrap{
      display: inline-block;
      width: .1333rem;
      height: .2667rem;
      i{
        display: inline-block;
        width: .24rem;
        height: .26667rem;
      }
      .iocn1{
        background:url('./images/item-iocn3.png') 0 0 no-repeat;
      }
      .iocn2{
        background:url('./images/item-iocn3.png') 0 0 no-repeat;
      }
      .iocn3{
        background:url('./images/item-iocn2.png') 0 0 no-repeat;
        background-size: 100% 100%;
      }
      .active1{
        background: url('./images/item-iocn4.png') 0 0 no-repeat;
      }
      .active2{
        background: url('./images/item-iocn.png') 0 0 no-repeat;
      }
    }
  }
}
.product-wrap {
  overflow: hidden;
  padding-top: 1.8666rem;
  padding-left: .4rem;
  .product-item {
    float: left;
    width: 4.4rem;
    height: 6.96rem;
    font-size: 0.34666rem;
    margin-right: .4rem;
    text-align: left;
    font-weight: 400;
    color: #000;
    .product-img {
      width: 100%;
      height: 4.58666rem;
      background:url('./images/p.png');
      background-size: contain;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .line {
      width: 100%;
      height: .34666rem;
      line-height: .34666rem;
      font-size: .373333rem;
      margin-top: .186666rem;
      padding: .133333rem 0 .053333rem 0;
      color: #9a9a9a;
      .no-wrap();
    }
    .brand-name{
      .no-wrap();
      width: 100%;
      line-height: .453333rem;
      font-size: .34rem;
    }
    .price {
      color: #004c46;
      padding-top: .16rem;
      font-size: .4rem;
      position: relative;
      left: -.133333rem;
    }
  }
}

</style>


