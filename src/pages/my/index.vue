<template>
  <div class="wrap">
    <header>
      <dl>
        <dt>
          <img  src="/static/my/user.svg" alt>
        </dt>
        <dd>
          <p class="name">
           dhsjfhjsdhfjd
          </p>
          <p class="codeNum">
            邀请码：gfghhhh
            <span @click="copy()">复制</span>
          </p>
        </dd>
      </dl>
    </header>
    <section>
      <div class="sec-top">
        <div class="top"><h3 @click="goTolist">我的订单</h3><div>查看所有的订单<img src="/static/my/next.svg" alt=""></div></div>
        <!-- <h3 @click="goTolist">我的订单</h3> -->
        <div class="wallet">
          <dl @click="goTolist">
            <dt>
              <img src="/static/my/payment.svg" alt>
            </dt>
            <dd>待付款</dd>
          </dl>
          <dl @click="goTolist">
            <dt>
              <img src="/static/my/shipments.svg" alt>
            </dt>
            <dd>待发货</dd>
          </dl>
          <dl @click="goTolist">
            <dt>
             <img src="/static/my/receiving.svg" alt>
            </dt>
            <dd>待收货</dd>
          </dl>
           <dl @click="goTolist">
            <dt>
              <!-- <span class="num">12</span> -->
              <img src="/static/my/refund.svg" alt>
            </dt>
            <dd>退款退货</dd>
          </dl>
        </div>
      </div>
      <div class="msg">
        <ul>
          <li @click="goto(1)">
            <div>
              <img class="img1" src="/static/my/tp1.svg" alt>
              <span>我的优惠卷</span>
            </div>
            <img class="img2" src="/static/my/next.svg" alt>
          </li>
          <li @click="goto(2)">
            <div>
              <img class="img1" src="/static/my/tp2.svg" alt>
              <span>收货地址</span>
            </div>
            <img class="img2" src="/static/my/next.svg" alt>
          </li>
          <li @click="goto(3)">
            <div>
              <img class="img1" src="/static/my/tp3.svg" alt>
              <span>联系客服</span>
            </div>
            <img class="img2" src="/static/my/next.svg" alt>
          </li> 
           <li @click="goto(4)">
            <div>
              <img class="img1" src="/static/my/tp5.svg" alt>
              <span>实名认证</span>
            </div>
            <img class="img2" src="/static/my/next.svg" alt>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: "",
      inviteCode: "",
      boo: false,
      trackId: ""
    };
  },
  components: {
    
  },
  onShow() {
   
  },
  methods: {
    copy() {
     
    },
    goTolist() {
     
    },
    goto() {
       wx.navigateTo({
          url: "/pages/site/sitelist/main"
      }); 
    }
  }
};
</script>

<style scoped lang="scss">
@import "./scss/index.scss";
</style>
