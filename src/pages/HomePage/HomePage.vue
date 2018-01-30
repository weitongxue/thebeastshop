<template>
  <div class="home">
    <Header HeadTitle ='野兽派' HeadBol ='true' CartBol = 'true'/>
    <div class="main-wrap">
      <!-- 导航 -->
      <nav>
        <ul>
          <router-link tag="li" to="/new_product/6/0">新鲜上架</router-link>
          <router-link tag="li" to="/new_product/5/0">本周主打</router-link>
          <router-link tag="li" to="/mine">我的账号</router-link>
        </ul>
      </nav>
      <!-- 轮播图 -->
      <div class="banner">
        <div class="swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="./images/banner-img1.jpg" alt="">
              </div>
              <div class="swiper-slide">
                <img src="./images/banner-img2.jpg" alt="">
              </div>
              <div class="swiper-slide">
                <img src="./images/banner-img3.gif" alt="">
              </div>
              <div class="swiper-slide">
                <img src="./images/banner-img4.jpg" alt="">
              </div>
          </div>
          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
      <div class="daily">
        <div class="daily-title">
          <div class="daily-text">
            BEAST DAILY
          </div>
          <div class="time">
            <div class="time-wrap">
              <div class="mouth">{{mouth}}</div>
              <div class="year">{{year}}</div>
            </div>
            <div class="date">{{date}}</div>
          </div>
        </div>
        <!-- 商品区 -->
        <div class="daily-item" v-if="item.id <8" v-for="(item,index) in categories[0].categorie" :key="index">
          <img :src="item.img">
          <div class="title">
            <div class="tag">{{item.name}}</div>
            <div class="text">{{item.title}}</div>
          </div>
          <div class="desc">{{item.text}}</div>
        </div>
      </div>
      <!-- 推荐商品 -->
      <div class="products">
        <div class="products-title">
          DEITOR'S  PICKS
          <div class="hint">编辑推荐</div>
        </div>
        <div class="products-wrap">
          <div class="list-wrap">
            <div class="list-product" v-for="(item,index) in recommend" :key="index">
              <div class="product-img">
                <img :src="item.img">
              </div>
              <div class="line bold">_</div>
              <div class="brand-name bold">{{item.name}}</div>
              <div class="name bold">{{item.names}}</div>
              <div class="price">￥{{item.price}}</div>
            </div>
          </div>
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
import Header from '../../components/Head/Header';
window.onload = function() {
  var mySwiper = new Swiper ('.swiper-container', {
    //控制方向
    direction: 'horizontal',
    //自动播放
    autoplay : 1500,
    autoplayDisableOnInteraction : false,
    //环（设置循环的方式）
    loop:false,
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
  })
} 
export default {
  mounted(){
    //获取年月日
    this.year = new Date().getFullYear()
    this.date = new Date().getDate()
    let mounted = new Date().getMonth() 
    for(let i = 0 ; i <this.mouths.length ; i++){
        if(mounted == i){
          this.mouth = this.mouths[i]
        }
    }
  },
  data(){
    return{
      //年月日
      year:'',
      mouth:'',
      date:'',
      mouths:['January','February','March','April','May','June','July','August','September','October','November','December'],
    }
  },
  components:{
    Header
  },
  computed:{
    categories(){
      return this.$store.state.categories
    },
    //获取推荐商品
    recommend(){
      return this.$store.state.recommend
    }
  }
}
</script>

<style lang="less" scoped>
@import url('../../styles/base.css');
@import url('../../styles/var.less');

nav{
  border-bottom: 1px solid #e6e7e8;
  position: fixed;
  width: 100%;
  z-index: 100;
  background-color: #fff;
  ul{
    display: flex;
    flex-wrap: nowrap;
    li{
      width: 33.33%;
      padding: .24rem 0;
      text-align: center;
      font-size: .2932rem;
      box-sizing: border-box;
      border-right: 1px solid #e6e7e8;
      border-color: #bababa;
      &:nth-child(3){
        border-right: none;
      }
    }
  }
}
.banner{
  position: relative;
  width: 10rem;
  overflow: hidden;
  .swiper-container {
    position: relative;
    overflow: visible;
    width: 7.8933rem;
    height: 9.3333rem;
    margin:2rem auto;
    text-align: center;
    .swiper-wrapper{
      position: relative;
      width: 100%;
      height: 100%;
      .swiper-slide{
        img{
          width: 6.9333rem;
          height: 9.3333rem;
        }
      }
    }
  }  
}
.swiper-button-prev{
  width: .56rem;
  height: 9.3333rem;
  position: absolute;
  left: -1.0667rem;
  top: .2933rem;
  opacity: 0;
}
.swiper-button-next{
  width: .56rem;
  height: 9.3333rem;
  position: absolute;
  right: -1.0667rem;
  top: .2933rem;
  opacity: 0;
}
.daily{
  width: 8.6667rem;
  margin: 0 auto;
  border-top:.08rem solid #d8d8d8;
  .daily-title{
    padding: .4267rem;
    overflow: hidden;
    .daily-text{
      float: left;
      padding: .1067rem 0;
      font-size: .5867rem;
      font-weight: 600;
      font-family: beastBold;
    }
    .time{
      width: 3.6rem;
      float: right;
      padding: .1867rem .32rem;
      border-left: 2px solid #d8d8d8;
      box-sizing: border-box;
      overflow: hidden;
      .time-wrap{
        float: left;
        text-align: left;
        font-size: .3466rem;
      }
      .date{
        float:right;
        font-size: .6667rem;
        font-weight: 500;
        line-height: .72rem;
        font-family:  beastBold;
        color:@color-text;
      }
    }
  }
}
//商品区
.daily-item {
  padding-bottom: 1.3333rem;
  img {
    width:100%;
    height:5.6rem;
  }
  .title {
    margin: 0.8rem 0 0.37333rem;
    border-left: 0.053333rem solid #d8d8d8;
    padding-left: 0.32rem;
    .tag {
      font-size: .37334rem;
      color:#004c46;
    }
    .text{
      font-size: 0.53334rem;
    }
  }
  .desc {
    font-size: .3467rem;
    padding: 0 .1333rem 0 .373333rem;
  }
}
//商品推荐
.products{
  border-top: .08rem solid #d8d8d8;
  width: 8.6667rem;
  margin:0 auto;
  .products-title{
    width: 5.3333rem;
    padding: .48rem 0;
    font-size: .5867rem;
    position: relative;
    font-family: beastBold;
    font-weight: 600;
    color:#2b2b2b;
    .hint{
      font-size: .4rem;
      position: absolute;
      top: 40%;
      left: 100%;
      border-left: .0534rem solid #000;
      margin-left: .21334rem;
      padding-left: .21333rem;
      line-height: .4rem;
      width: 1.8667rem;
    }
  }
  .list-wrap{
    overflow: hidden;
    .list-product:nth-child(2n+1){
       float: left;
    }
    .list-product:nth-child(2n){
       float: right;
    }
    .list-product{
      font-size: .34667rem;
      width: 3.76rem;
      height: 6.4533rem;
      margin-bottom: .74667rem;
      .product-img{
        width: 100%;
        height: 4.0533rem;
        background:url('./images/p.png') 0 0 no-repeat;
        background-size: 100%;
        img{
          width: 3.8933rem;
          height: 4.0533rem;
        }
      }
      .line{
        margin:.13334rem 0;
        font-weight: 700;
        font-size: .37334rem;
      }
      .bold{
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 100%;
      }
      .brand-name{
        font-weight: 400;
        line-height: .45334rem;
        font-size: .37334rem;
        height: .45334rem;
      }
      .name{
        font-size: .4rem;
        height: .45334rem;
        line-height: .45334rem;
      }
      .price{
        padding-top: .16rem;
        text-align: center;
        color:@color-minText;
        font-size: .4rem;
      }
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



