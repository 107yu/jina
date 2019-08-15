<template>
  <div class="wrap">
    <ul>
      <li>
        手机号
        <input type="text" placeholder="请输入新的手机号" v-model="current.phone" />
      </li>
      <li>
        验证码
        <input type="text" placeholder="请输入验证码" />
        <span @click="getauth">{{verifyCodeTime}}</span>
        <!-- <span v-else @click="getauth">{{verifyCodeTime}}</span> -->
      </li>
    </ul>
    <section>
      <div class="btn">
        <button open-type="getPhoneNumber" bindgetphonenumber="getPhoneNumber">验证后绑定新手机</button>
      </div>
    </section>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      current: state => state.login.current,
      countDown: state => state.login.countDown,
      verifyCodeTime: state => state.login.verifyCodeTime
    })
    //  setphone(){
    //    if(this.current.phone){
    //      return this.current.phone.slice(0,3)+'****'+this.current.phone.slice(7,11)
    //    }
    //  }
  },
  methods: {
    ...mapMutations({
      countdown: "login/countdown"
    }),
    ...mapActions({
      getAuthData: "login/getAuthData",
      getBoundPhone: "login/getBoundPhone"
    }),
    //获取验证码
    getauth() {
      if (
        !/^1(3|4|5|7|8)\d{9}$/.test(this.current.phone) ||
        !/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(this.current.phone)
      ) {
        wx.showToast({
          title: "请输入手机号", //提示的内容,
          icon: "none" //图标,
        });
      } else {
        this.getAuthData({ phoneNumber: this.current.phone });
        this.countdown();
      }
    },
    //登录
    getPhoneNumber(e) {
      console.log(e)
      // wx.openSetting({
      //     success(res) {
      //       console.log(res.authSetting);
      //     }
      //   });
    }
  },
  created() {},
  mounted() {
    wx.setNavigationBarTitle({ title: "绑定手机号" });
    wx.setNavigationBarColor({
      frontColor: "#000000",
      backgroundColor: "#ffffff",
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
  ul {
    li {
      height: 80rpx;
      display: flex;
      align-items: center;
      color: #666;
      font-size: 33rpx;
      padding: 0 20rpx;

      input {
        background: none;
        border: none;
        font-size: 30rpx;
        padding: 0 50rpx;
      }
      span {
        padding: 7rpx 15rpx;
        display: inline-block;
        flex-shrink: 0;
        border-radius: 50rpx;
        border: 1px solid #fc5d7b;
        color: #fc5d7b;
        font-size: 30rpx;
      }
    }
    li:first-child {
      border-bottom: 1px solid #f8f8f8;
    }
  }
  section {
    background: #f3f7f7;
    .btn {
      width: 100%;
      height: 80rpx;
      display: flex;
      justify-content: center;
      margin-top: 100rpx;
      button {
        width: 95%;
        height: 80rpx;
        background: #35d5ec;
        color: #fff;
        font-size: 31rpx;
        line-height: 80rpx;
        border: none;
      }
    }
  }
}
</style>