<template>
  <div class="article">
    <Header HeadTitle = '海外直邮精选好物' HeadBol='false' CartBol='true'/>
    <div class="main-wrap">
      <div class="outer-box">
        <div class="box-img">
          <img src="https://img.thebeastshop.com/apppictures/2017-10-12/9dbe3e4e063f42573c14bb436b699ba5.png@0o_0l_750w_90q.png">
        </div>
      </div>
      <div class="nav-wrap" ref="move" :class="{'active':searchBarFixed}">
        <div class="nav-box">
          <div class="nav-item" v-for="item in categorie" :key="item.id">{{item.name}}</div>
        </div>
      </div>
      <!-- 个人护理大图 -->
      <div class="outer-box" ref="nurse">
        <div class="img-box img-box1" >
          <img src="https://img.thebeastshop.com/apppictures/2017-09-22/b6d1ec6361a4a4c1c5608b072f82c5bd.jpg@0o_0l_750w_90q.jpg">
        </div>
      </div>
      <!-- 个人护理商品数据 -->
      <div class="product-wrap">
        <div class="product-item" v-for="(item,index) in personal" :key="index">
          <div class="product-img">
            <img :src="item.img">
          </div>
          <div class="line">{{item.describe}}</div>
          <div class="brand-name">{{item.names}}</div>
          <div class="brand-name">{{item.name}}</div>
          <div class="price">￥{{item.price}}</div>
        </div>
      </div>
      <!-- 面部护理大图 -->
      <div class="outer-box" ref="face">
        <div class="img-box">
          <img src="https://img.thebeastshop.com/apppictures/2017-09-22/d2fb38ea9ad927293a7d97933e4578f9.jpg@0o_0l_750w_90q.jpg">
        </div>
      </div>
      <!-- 面部护理商品数据 -->
      <div class="product-wrap">
        <div class="product-item" v-for="(x,index) in nurse" :key="index">
          <div class="product-img">
            <img :src="x.img">
          </div>
          <div class="line">{{x.describe}}</div>
          <div class="brand-name">{{x.names}}</div>
          <div class="brand-name">{{x.name}}</div>
          <div class="price">￥{{x.price}}</div>
        </div>
      </div>
      <!-- 口服美容护理大图 -->
      <div class="outer-box" ref="hairdressing">
        <div class="img-box">
          <img src="https://img.thebeastshop.com/apppictures/2017-09-04/f07569c846b66b521dcfd594f2f22453.jpg@0o_0l_750w_90q.jpg">
        </div>
      </div>
      <!--口服美容的商品数据 -->
      <div class="product-wrap">
        <div class="product-item" v-for="(y,index) in beauty" :key="index">
          <div class="product-img">
            <img :src="y.img">
          </div>
          <div class="line">{{y.describe}}</div>
          <div class="brand-name">{{y.names}}</div>
          <div class="brand-name">{{y.name}}</div>
          <div class="price">￥{{y.price}}</div>
        </div>
      </div>
      <!-- 母婴大图 -->
      <div class="outer-box" ref="baby">
        <div class="img-box">
          <img src="https://img.thebeastshop.com/apppictures/2017-09-04/a777993c119c4e607c6835f556f3c23f.jpg@0o_0l_750w_90q.jpg">
        </div>
      </div>
      <!--母婴的商品数据 -->
      <div class="product-wrap">
        <div class="product-item" v-for="(z,index) in infant" :key="index">
          <div class="product-img">
            <img :src="z.img">
          </div>
          <div class="line">{{z.describe}}</div>
          <div class="brand-name">{{z.names}}</div>
          <div class="brand-name">{{z.name}}</div>
          <div class="price">￥{{z.price}}</div>
        </div>
      </div>
      <!-- footer -->
      <div class="footer">
        <img src="./images/footer-iocn.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Head/Header'
import api from '../../api'

export default {
  mounted () {
    //监听窗口的滚动事件
    window.addEventListener('scroll',this.handleScroll)
  },
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
      scroll:'',
      productInfo:[],
       //大分类id
      ID:'',
      //小分类id
      id:'',
      //渲染的数组对象
      showProductArr:[],
      //个人护理数据
      personalArr:[],
      //面部护理数据
      nurseArr:[],
      //美容数据
      beautyArr:[],
      //母婴用品数据
      infantArr:[],
      //置顶的开关
      searchBarFixed:false,
    }
  },
  //监听路由变化
  watch:{
   "$route":"getPath"  // 监听事件
  },
  components:{
    Header
  },
  computed:{
    //所有的商品数据
    products(){
      return this.$store.state.products
    },
    //所有的分类信息
    categories(){
      return this.$store.state.categories
    },
    //小分类信息
    categorie(){
      for(let i = 0 ; i < this.categories.length ; i++){
        if(this.ID == this.categories[i].id){
          return this.categories[i].categorie
        }
      }
    },
    //个人护理的商品数据
    personal(){
      return this.getproduct(this.personalArr,1)
    },
    //面部护理的商品数据
    nurse(){
      return this.getproduct(this.nurseArr,2)
    },
    //口服美容的商品数据
    beauty(){
      return this.getproduct(this.beautyArr,3)
    },
    //母婴的商品数据
    infant(){
      return this.getproduct(this.infantArr,4)
    }
  },
  methods:{
    getPath(){
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
    },
    //获取小分类数据
    getproduct(arr,id){
      for(let i = 0 ; i < this.showProductArr.length ; i++){
        if(this.showProductArr[i].categorieId == id){
          arr.push(this.showProductArr[i])
        }
      }
      return arr
    },
    //添加置顶的方法
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      //获取要操作的元素，和元素距离窗口上方的距离
      var move = this.$refs.move
      var offsetTop = move.offsetTop
      //和窗口滚动的距离进行比较
      //因为置顶的时候offsetTop变成了96px
      if (scrollTop > offsetTop && scrollTop > 436) {
      this.searchBarFixed = true
      } else {
        this.searchBarFixed = false
      }
    },
    // toThis(id){
    //   var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    //   //获取分类图片的位置
    //   var nurse = this.$refs.nurse
    //   var face = this.$refs.face
    //   var hairdressing = this.$refs.hairdressing
    //   var baby = this.$refs.baby
    //   console.log(nurse.offsetTop,face.offsetTop,hairdressing.offsetTop,baby.offsetTop)
    //   switch (id){
    //     case 3 :
    //     return scrollTop = baby.offsetTop
    //     break;
    //   }
    // }
  },
}
</script>

<style lang="less" scoped>
@import url('../../styles/var.less');
@import url('../../styles/base.less');
.outer-box{
  width: 100%;
  .box-img{
    margin-bottom: .3rem;
  }
}
.nav-wrap::-webkit-scrollbar{
  display: none;
}
.nav-wrap{
  border-bottom: 2px solid @border-color;  
  border-top: 2px solid @border-color;
  position: absolute;
  transition: all 0.8s;
  width: 100%;
  height: 1.2rem;
  line-height: 1.2rem;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 100;
  color:@color-minText;
  margin-bottom: .4rem;
  background-color: #fafafa;
  overflow-x: scroll;
  .nav-box{
    touch-action: plan-x;
    width: 13.0667rem;
    height: 1.2rem;
    position: relative;
    white-space: nowrap;
    display: flex;
    .nav-item{
      flex: 1;
      padding:0 .26667rem ;
      text-align: center;
      font-size: .4rem;
      font-weight: 700;
    }
  }
}
.nav-wrap.active{
  position: fixed;
  top:1.2rem;
}
.img-box1{
  margin-top: 1.9rem!important;
}
.img-box{
  margin:0 0 .4rem 0;
  width: 100%;
  overflow: hidden;
  img{
    width: 100%;
  }
}
//商品数据
.product-wrap {
  overflow: hidden;
  padding-top: 1.8666rem;
  padding:0 .4rem;
  .product-item:nth-child(2n+1){
    float: left;
  }
  .product-item:nth-child(2n){
    float: right;
  }
  .product-item {
    width: 4.4rem;
    height: 6.96rem;
    font-size: 0.34666rem;
    text-align: left;
    font-weight: 400;
    color: #000;
    margin-bottom: .64rem;
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
.footer{
  padding: .32rem 0 .8rem;
  img{
    width: 1.2rem;
    height: .37333rem;
    display: block;
    margin:0 auto;
  }
}
</style>




