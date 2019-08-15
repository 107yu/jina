<template>
  <div class="wrap">
    <section>
      <div class="shop_box">
        <div class="left_box">
          <img src="/static/images/meigou.svg" alt />
        </div>
        <dl>
          <dt>
            <div class="small_img"></div>
          </dt>
          <dd>
            <h1>帮宝适数据的飞鸟时代就发你说的九年四季度v从</h1>
            <h2>规格：XL</h2>
            <h3>
              <span>￥52.50</span>
              <div class="edit_count">
                <p>-</p>
                <span>1</span>
                <p>+</p>
              </div>
            </h3>
          </dd>
        </dl>
      </div>
    </section>
    <footer>
      <div class="lt">
        <img src="/static/images/meigou.svg" alt />全选
      </div>
      <div class="rt">
        <div>
          <span>总计:</span>
          <span>￥198.8</span>
        </div>
        <p class="edit">编辑</p>
        <p>去结算</p>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {
    //改变导航栏
    wx.setNavigationBarTitle({ title: "购物车" });
    wx.setNavigationBarColor({
      frontColor: "#ffffff",
      backgroundColor: "#56D2BF",
      animation: {
        duration: 400,
        timingFunc: "easeIn"
      }
    });
  }
};
</script>
<style scoped lang="scss">
.wrap {
  width: 100%;
  height: 100%;
  section {
    flex: 1;
    overflow: scroll;
    background: #f3f7f7;
    .shop_box {
      display: flex;
      padding: 20rpx 20rpx;
      background: #fff;
      border-radius: 5rpx;
      margin: 20rpx 15rpx;
      .left_box {
        width: 50rpx;
        height: 50rpx;
        padding-top: 60rpx;
        padding-right: 20rpx;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    dl {
      display: flex;
      dt {
        .small_img {
          margin-top: 10rpx;
          width: 160rpx;
          height: 160rpx;
          background: red;
        }
      }
      dd {
        padding: 0 20rpx;
        line-height: 50rpx;
        h1 {
          font-size: 32rpx;
        }
        h2 {
          font-size: 30rpx;
          color: #666;
        }
        h3 {
          display: flex;
          justify-content: space-between;
          align-items: center;
          span {
            color: #fc5d7b;
            font-size: 31rpx;
          }
          .edit_count {
            display: flex;
            span {
              width: 55rpx;
              height: 40rpx;
              line-height: 40rpx;
              text-align: center;
              border-top: 1px solid #ccc;
              border-bottom: 1px solid #ccc;
              font-size: 30rpx;
              color: #666;
            }
            p {
              width: 45rpx;
              height: 40rpx;
              text-align: center;
              line-height: 40rpx;
              border: 1px solid #ccc;
              color: #666;
            }
          }
        }
      }
    }
  }
  footer {
    display: flex;
    height: 105rpx;
    line-height: 105rpx;
    border-bottom: 1px solid #cdcdcd;
    justify-content: space-between;
    padding-left: 20rpx;
    .lt {
      display: flex;
      font-size: 32rpx;
      align-items: center;
      img {
        width: 45rpx;
        height: 45rpx;
        margin-right: 15rpx;
      }
    }
    .rt {
      display: flex;
      justify-content: space-around;
      > div {
        display: flex;
        font-size: 30rpx;
        padding: 0 20rpx;
        span:nth-child(2) {
          color: #fb2579;
        }
      }
      p {
        width: 160rpx;
        text-align: center;
        font-size: 33rpx;
      }
      .edit {
        background-image: linear-gradient(to right, #26c5fd, #35d5ec);
        color: #fff;
      }
      p:last-child {
        background-image: linear-gradient(to right, #fb2579, #f86367);
        color: #fff;
      }
    }
  }
}
</style>