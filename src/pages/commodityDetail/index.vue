<template>
    <div class="wrap">
    <div class="swiper" >
      <img src="../../../static/images/1.jpg" alt="">
    </div>
    <div class="tit">
      <div class="ones">
        <p>￥</p>
        <p class="price">22.9</p>
        <s class="num">￥18.88</s>
      </div>
      <p class="times">分享赚：￥499.00</p>
    </div>
    <div class="title">
       <div class="names">帮宝适啦啦库加大号XL128超薄透气婴儿纸尿裤非纸尿裤</div>
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
    </ul>
    <div class="footer">
      <button @click="changshare">分享赚1.98</button>
      <button>立即购买</button>
    </div>
  </div>
</template>
<script>
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

    },
    methods:{
      changshare(){
           wx.navigateTo({
                url: "/pages/share/main"
          });
      }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style lang="scss" scope>
.wrap {
  width: 100%;
  height: 100%;
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