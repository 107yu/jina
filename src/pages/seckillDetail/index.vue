<template>
    <div class="wrap">
    <div class="swiper">
      <!-- <img src="../../../static/images/1.jpg" alt=""> -->
    </div>
    <div class="tit">
      <div class="ones">
        <p>￥</p>
        <p class="price">22.9</p>
        <s class="num">限时购200件</s>
      </div>
      <p class="times">距结束 11:24:39</p>
    </div>
    <div class="title">
      <div class="names">帮宝适啦啦库加大号XL128超薄透气婴儿纸尿裤非纸尿裤</div>
      <p>
        <span>快递包邮</span>
        <span>仅剩235件</span>
      </p>
    </div>
    <ul class="list">
      <li class="lis">
        <span>选择:</span>
        <div class="rights" @tap="toShow">
          <span>颜色 尺码</span>
          <!-- <img src="../../static/images/下一步.svg" alt=""> -->
        </div>
      </li>
      <li class="lis">
        <span>规格:</span>
        <div class="rights">
          <span>S M XL</span>
          <!-- <img src="../../static/images/下一步.svg" alt=""> -->
        </div>
      </li>
      <li class="lis">
        <span>领券:</span>
        <div class="rights">
          <span class="to2color">每满300减35券 满199减20券</span>
        </div>
      </li>
    </ul>
    <PopoutColor
         
    />
    <div class="footer">
      <div class="lefts">
        <!-- <img src="../../static/images/收藏未点击.svg" alt> -->
        <p>收藏</p>
      </div>
      <button>立即购买</button>
    </div>
  </div>
</template>
<script>

import PopoutColor from '../../components/popoutColor'

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
        // 控制模态框的限时隐藏
        toShow(){

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
  background: linear-gradient(
    217deg,
    rgba(248, 99, 103, 1) 0%,
    rgba(251, 37, 121, 1) 100%
  );
  color: #fff;
}

.tit .ones {
  display: flex;

  p {
    font-size: 36rpx;
  }

  .price {
    font-size: 50rpx;
    margin-right: 10rpx;
  }

  .num {
    height: 84rpx;
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
  background: #fff;

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
    background: linear-gradient(
      217deg,
      rgba(248, 99, 103, 1) 0%,
      rgba(251, 37, 121, 1) 100%
    );
    font-size: 38rpx;
    color: #fff;
  }

  .colos {
    color: #fc5d7b;
  }
}
</style>