<template>
    <div class="wrap">
      <scroll-view scroll-y style="height:100%">
        <div class="swiper" >
          <!-- <img src="../../../static/images/1.jpg" alt=""> -->
          <swiper 
           indicator-dots="true" 
           autoplay="true" 
           interval="2000" 
           duration="1000"
           indicator-active-color="#fff"
           v-if="goodsDetail.supplierProductPictureVoList && goodsDetail.supplierProductPictureVoList.length>0"
        >
            <block v-for="(val,index) in goodsDetail.supplierProductPictureVoList" :key="index">
                <swiper-item>
                    <image :src="val.imgUrl" class="slide-image" style='overflow:show'/>
                </swiper-item>
            </block>
        </swiper>
        <img v-if="goodsDetail.supplierProductPictureVoList && goodsDetail.supplierProductPictureVoList.length===0" :src="goodsDetail.mainImgUrl" alt="" >
        </div>
        <div class="tit">
          <div class="ones">
            <p>￥</p>
            <p class="price">{{goodsDetail.salesPrice}}</p>
            <s class="num">￥{{goodsDetail.vipPrice}}</s>
          </div>
          <p class="times" @click="changshare">分享赚：￥{{goodsDetail.memberDiscountPrice}}</p>
        </div>
        <div class="title">
          <div class="names">{{goodsDetail.title}}</div>
        <p>
            <span>快递包邮</span>
        </p>
        </div>
        <ul class="list">
          <li class="lis">
            <span>选择 规格</span>
            <div class="rights" @click="toShow">
              <span>颜色 尺码</span>
              <img src="../../../static/images/下一步.svg" alt="">
            </div>
          </li>
          <li>
            说明:{{goodsDetail.description}}
          </li>
        </ul>
        <div class="footer">
          <button @click="changshare">分享赚1.98</button>
          <button>立即购买</button>
        </div>  
      </scroll-view>
  </div>
</template>
<script>
import {mapState,mapMutations,mapActions} from "vuex"
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
          
        }
    },
    computed:{
      ...mapState({
        goodsDetail: state=>state.home.goodsDetail
      })
    },
    methods:{
      ...mapActions({
        getGoodsInfo: "home/getGoodsInfo"
      }),
      changshare(){
           wx.navigateTo({
                url: "/pages/share/main"
          });
      }
    },
    created(){

    },
    mounted(){
      this.getGoodsInfo({
        pid: this.$root.$root.$mp.query.id
      })
    }
}
</script>
<style lang="scss" scope>
.wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.swiper {
  width: 100%;
  height: 400rpx;
  img {
    width: 100%;
    height: 100%;
    display: block;
  }
}

.tit {
  display: flex;
  justify-content: space-between;
  padding: 0 34rpx;
  box-sizing: border-box;
  height: 84rpx;
  line-height: 84rpx;
  background: #FFF;
  color: #CCC;
}

.tit .ones {
  display: flex;

  p {
    font-size: 36rpx;
    color: #fc5d7b;
  }

  .price {
    font-size: 50rpx;
    margin-right: 10rpx;
  }

  .num {
    height: 84rpx;
    color:rgb(168, 120, 50);
    line-height: 84rpx;
  }
}

.tit .ones p:nth-child(1) {
  font-size: 35rpx;
  height: 84rpx;
  line-height: 84rpx;
}

.tit .times {
  float: right;
  font-size: 36rpx;
  color: #fc5d7b;
}

.title {
  width: 100%;
  padding: 30rpx;
  box-sizing: border-box;

  .names {
    font-size: 38rpx;
    color: #323a45;
  }

  p {
    display: flex;
    justify-content: space-between;
    line-height: 3;
    font-size: 32rpx;
    color: #999da2;
  }
}
.list {
  width: 100%;
  padding: 0 2%;
  box-sizing: border-box;

  .lis {
    display: flex;
    font-size: 33rpx;
    height: 80rpx;
    line-height: 80rpx;

    span {
      color: #676767;
    }

    .rights {
      flex: 1;
      color: #323a45;
      display: flex;
      padding: 0 10rpx;
      box-sizing: border-box;
      justify-content: space-between;

      img {
        width: 30rpx;
        height: 30rpx;
        margin-top: 10rpx;
      }
    }

    .to2color {
      color: #fc5d7b;
    }
  }
}

.pic {
  width: 100%;
  margin-bottom: 80rpx;
}

.pic img {
  width: 100%;
  display: block;
}

.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100rpx;
  border-top: 1rpx solid #ccc;
  text-align: center;
  display: flex;
  background:#fc5d7b ;

  .lefts {
    width: 30%;
    p {
      font-size: 32rpx;
    }
    img {
      width: 34rpx;
      height: 32rpx;
    }
  }

  button {
    width: 70%;
    background: #fc5d7b;
    font-size: 38rpx;
    color: #fff;
  }

  .colos {
    color: #FFF;
  }
}
</style>