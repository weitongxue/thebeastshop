<template>
  <div class="home">
    <Header HeadTitle ='野兽派'/>
    <div class="main-wrap">
      <!-- 导航 -->
      <nav>
        <ul>
          <router-link tag="li" to="/new_product">新鲜上架</router-link>
          <router-link tag="li" to="/featured">本周主打</router-link>
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
      mouths:['January','February','March','April','May','June','July','August','September','October','November','December']
    }
  },
  components:{
    Header
  }, 
}
</script>

<style lang="less" scoped>
@import url('../../styles/base.css');
@import url('../../styles/var.less');
nav{
  border-bottom: 1px solid #e6e7e8;
  position: fixed;
  width: 100%;
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
      font-weight: 500;
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
</style>



