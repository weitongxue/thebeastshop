<template>
  <div class="detail">
    <Header HeadTitle="品牌"/>
    <div class="main-wrap">
      <!-- 详情页的轮播图 -->
      <div class="bannars">
        <div class="swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide"><img src="./images/demo.jpg"></div>
              <div class="swiper-slide"><img src="./images/demo.jpg"></div>
              <div class="swiper-slide"><img src="./images/demo.jpg"></div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <!-- 商品详情 -->
      <div class="product-detail-wrap">
        <div class="brand-name">THE BEAST</div>
        <div class="name">永生植物装饰画</div>
        <div class="price">￥288.00</div>
      </div>
      <!-- 正品保证 -->
      <div class="product-badges">
        <div class="badges-item">
          <img src="./images/check-bg.png"> 正品保证
        </div>
        <div class="badges-item">
          <img src="./images/check-bg.png"> 品牌授权
        </div>
      </div>
      <!-- black-line -->
      <div class="line-bg"></div>
      <!--- 商品推荐理由和规格等- -->
      <div class="product-newbox">
        <!-- 推荐理由 -->
        <div class="p-detail-new one">
          <div class="product-tit">
            <div class="p-tit">Style notes</div>
            <div class="p-reason">推荐理由</div>
          </div>
          <div class="product-content">
            <div class="p-text">
              错落有致的淡水珍珠排列成优美的弧线，如强弱起伏的乐句，又如彗星划过夜空时留下的闪亮轨迹，经典的珍珠耳钉焕发出独特的节奏感与生命力，展现灵动之美。
            </div>
          </div>
        </div>
        <!-- 规格参数 -->
        <div class="p-detail-new">
          <div class="product-tit">
            <div class="p-tit">composition</div>
            <div class="p-reason">规格参数</div>
          </div>
          <div class="product-content">
            <div class="p-text">材质：金</div>
            <div class="p-text">产地：西班牙</div>
          </div>
        </div>
        <!-- 品牌故事 -->
        <div class="p-detail-new">
          <div class="product-tit">
            <div class="p-tit">brand story</div>
            <div class="p-reason">品牌故事</div>
          </div>
          <div class="product-content" style="padding-bottom:0.5333rem;">
            <div class="p-text">
              Annaya 是一个集合设计师的品牌，集合了全球青年设计师的创意个性作品。Annaya不属于哪一个国家，它属于喜爱以及热爱饰品的年轻人。<br>
              让每一个女孩都能在这里发现自己、找到自己，是Annaya的目标；趣味（FUN）、独特（UNIQUE）、年轻（YOUNG）是Annaya的态度；精良做工和高性价比，是Annaya对每个热爱时尚、追求美丽的女性的承诺。
            </div>
          </div>
        </div>
        <!-- 运输说明 -->
        <div class="p-detail-new expand">
          <div class="p-title-box">
            <p class="title" @click="showDown">运输说明 
              <span :class="{'up': shoeDownBol}"></span></p>
            <div class="product-content" v-if="shoeDownBol">
              <div class="p-text top">普通商品均由上海仓统一出库，付款后24小时内发货，预售或定制商品请参考页面预售发货时间，送达时效以快递公司实际配送为准，详情可以登录官网或者APP查询物流进度。特别提醒：法定节假日店休不发货，如遇店铺大型活动，发货时效稍有延后，具体可咨询在线客服。鲜花由上海仓统一使用联邦快递进行配送（部分特殊产品会由门店配送）。具体配送时间以联邦快递实际配送为准，详情可以登录官网或者APP查询物流进度。</div>
            </div>
          </div>
        </div>
        <!-- 退换货说明 -->
        <div class="p-detail-new expand">
          <div class="p-title-box">
            <p class="title" @click="showDown2">退换货说明 
              <span :class="{'up': shoeDownBol2}"></span></p>
            <div class="product-content" v-if="shoeDownBol2">
              <div class="p-text top"><div class="p-text">普通商品如有质量问题，请在签收后7日内联系客服。鲜花和永生花产品不接受7天无理由退换货，如有质量问题，请在签收后24小时内联系客服。</div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Head/Header'
window.onload = function () {
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    autoplayDisableOnInteraction:true,
    pagination : '.swiper-pagination',
    paginationType : 'bullets',
    paginationHide :true
  })
}
export default {
  components: {
    Header
  },
  data () {
    return {
      //展示运输说明下面的内容
      shoeDownBol: false,
      //展示退换货下面的内容
      shoeDownBol2: false,
    }
  },
  methods: {
    showDown () {
      this.shoeDownBol = !this.shoeDownBol
    },
    showDown2 () {
      this.shoeDownBol2 = !this.shoeDownBol2
    }
  }
}
</script>

<style lang="less" scoped>
@import url('../../styles/index.less');
.main {
  border-top: 1px solid #e6e7e8;
}
.bannars,.swiper-container {
  width: 10rem;
  height: 10.426667rem;
} 
.swiper-container {
  position: relative;
}
.swiper-wrapper {
  img {
    width: 100%;
    height: 100%;
  }
}
.swiper-pagination {
  position: absolute;
  left: 0;
  width: 100%;
  text-align: center;
  bottom: .533333rem;
  
}
.product-detail-wrap {
  margin-bottom: 0.85333rem;
  padding: 0;
  text-align: center;
  color: #282828;
  font-weight: 700;
  .brand-name {
    margin-top: .746666rem;
    margin-bottom: .213333rem;
    font-size: .34666rem;
  }
  .name {
    font-size: .48rem;
    letter-spacing: .04rem;
  }
  .price {
    color: #004c46;
    margin-top: .3rem;
    font-size: .53333rem;
  }
}
.product-badges {
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  padding: .5866rem 0;
  margin: 0 .4rem 1.1733rem;
  overflow: hidden;
  .badges-item { 
    float: left;
    margin-left: .2666rem;
    margin-right: .4266rem;
    img {
      position: relative;
      top: .023rem;
      width: .32rem;
      height: .32rem;
    }
  }
}
.line-bg {
  width: 100%;
  height: .10666rem;
  background: url('./images/line.png') 0 0 no-repeat;
  background-size: cover;
  margin-bottom: 0.8rem;
}
.p-detail-new {
  margin-top: 1.013rem;
  padding-top: 1.013rem;
  border-top: 1px solid #e6e6e6;
 }
 .p-detail-new.one {
  margin-top:0;
  padding-top:0;
  border:0;
 }
.product-tit {
  margin-bottom: .64rem;
  text-align: center;
  letter-spacing: .08rem;
  font-weight: 700;
  .p-tit {
    margin-bottom: .13333rem;
    color: #000;
    font-size: .74rem;
  }
  .p-reason {
    font-size: .3733rem;
    color: #2b2b2b;
  }
}
.product-content {
  padding: 0 .9rem;
  letter-spacing: .0533rem;
  font-size:.32rem;
  .p-text {
    line-height: .6rem;   
    font-weight: 700;
    color: #2d2d2d;
  }
}
.expand {
  padding-top: 0;
  border-top: none;
  margin-top:0;
}
.p-title-box {
  padding: .48rem 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  .title {
    font-size: 0.34667rem;
    font-weight: 700;
    padding-left: 0.8rem;
    position: relative;
    span {
      display: inline-block;
      width: .346667rem;
      height: .346667rem;
      background: url('./images/more-bg.png') center center no-repeat;
      background-size:100%;
      position: absolute;
      right: 0.4rem;
      top: .1rem;
    }
    span.up {
      transform: rotate(180deg);
    }
  }
}
.top {
  padding-top: .4rem;
}
</style>
