<template>
    <div class="wrap">
    <image src="/static/images/5.jpg" alt=""></image>
    <div class="refer">
      <input type="text" placeholder="请输入邀请码">
      <button @click="show">提交</button>
    </div>
    <div class="hint">- 无邀请码可选择以下团队加入 -</div>
    <ul class="list">
      <li>
        <image src="../../static/images/2.png" alt=""></image>
        <div class="content">
          <p class="name">无敌放屁猫</p>
          <p class="group">团队人数:13254651561</p>
        </div>
        <span>立即加入</span>
      </li>
      <li>
        <image src="../../static/images/2.png" alt=""></image>
        <div class="content">
          <p class="name">无敌放屁猫</p>
          <p class="group">团队人数:13254651561</p>
        </div>
        <span>立即加入</span>
      </li>
      <li>
        <image src="../../static/images/2.png" alt=""></image>
        <div class="content">
          <p class="name">无敌放屁猫</p>
          <p class="group">团队人数:13254651561</p>
        </div>
        <span>立即加入</span>
      </li>
      <li>
        <image src="../../static/images/2.png" alt=""></image>
        <div class="content">
          <p class="name">无敌放屁猫</p>
          <p class="group">团队人数:13254651561</p>
        </div>
        <span>立即加入</span>
      </li>
      <li>
        <image src="../../static/images/2.png" alt=""></image>
        <div class="content">
          <p class="name">无敌放屁猫</p>
          <p class="group">团队人数:13254651561</p>
        </div>
        <span>立即加入</span>
      </li>
      <li>
        <image src="../../static/images/2.png" alt=""></image>
        <div class="content">
          <p class="name">无敌放屁猫</p>
          <p class="group">团队人数:13254651561</p>
        </div>
        <span>立即加入</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  methods: {
    show(){
       wx.showToast({
          title: "请输入正确的邀请码",
          icon: "none",
          duration: 1000
       });
    }
  },

  created() {}
};
</script>

<style scoped lang="scss">
    .wrap {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;

    .wrap images {
      width: 100%;
      height:300rpx;
    }
    .refer {
      width: 100%;
      display: flex;
      margin-top: 20px;
      margin-bottom: 30rpx;

      input {
        width: 525rpx;
        height: 100rpx;
        background: rgba(243, 247, 247, 1);
        border-radius: 8rpx 0rpx 0rpx 8rpx;
        text-align: center;
        line-height: 100rpx;
        margin-left: 30rpx;
      }

      button {
        width:181rpx;
        height:97rpx;
        background:#33d6c5;
        border-radius:0rpx 8rpx 8rpx 0rpx;
        font-size:40rpx;
        font-family:PingFangSC-Semibold;
        font-weight:600;
        color:white;
        line-height:97rpx;
        margin-right:17rpx;
      }

      .able {
        background: rgba(147, 230, 222, 1);
      }
    }

    .visitor {
      width:440rpx;
      height:40rpx;
      font-size:30rpx;
      font-size:30rpx;
      font-family:PingFangSC-Medium;
      font-weight:500;
      color:#999da2;
      padding:24rpx 220rpx 54rpx 195rpx;

      dl{
        width:60%;
        height:100%;
        display: flex;
        align-items: center;
      }
      dl>dd>image{
        width:60rpx;
      }
      dl>dt{
        margin-left:10rpx;
      }
      dl>dt>p{
        font-size: 12rpx;
        color: #ccc;
      }
    }
    #show {
      display: none;
    }
    .hint {
     width:440rpx;
      height:40rpx;
      font-size:30rpx;
      font-size:30rpx;
      font-family:PingFangSC-Medium;
      font-weight:500;
      color:#999da2;
      padding:24rpx 220rpx 54rpx 195rpx;
    }
    .list {
      width: 100%;
      li {
        width: 100%;
        height: 180rpx;
        display: flex;
        align-items: center;

        image {
          width:130rpx;
          margin-top:13rpx;
          margin-left:20rpx;
          height:130rpx;
          border-radius:65rpx
        }

        .content {
          flex: 1;
          box-sizing: border-box;
          padding-left: 65rpx;
          .name {
            font-size: 26rpx;
            font-family: PingFangSC-Medium;
            font-weight: 500;
            color: rgba(50, 58, 69, 1);
            line-height: 70rpx;
          }

          .group {
            font-size: 24rpx;
            font-family: PingFangSC-Medium;
            font-weight: 500;
            color: rgba(153, 157, 162, 1);
            line-height: 20rpx;
          }
        }

        span {
          width:165rpx;
          height:64rpx;
          background:#33d6c5;
          border-radius:14rpx;
          text-align:center;
          line-height:64rpx;
          font-size:30rpx;
          font-family:PingFangSC-Regular;
          font-weight:400;
          color:white;
          margin-right:30rpx;
        }
      }
    }
    .mask {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background: rgba(145, 110, 110, 0.3);
      z-index: 99;
    }
    .btn {
      width: 80%;
      margin-left: 10%;
      margin-top: 50%;
      background: skyblue;
    }
    .masks{
      display: none;
    }
  }

</style>
