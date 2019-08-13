<script>
export default {
  created() {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */
    wx.login({
      success: async (res)=>{
        if (res.code) {
          //发起网络请求
          // let data = await login(res.code);
          // // console.log('res...', data);
          // wx.setStorageSync('openid', data.data.openid);
        } else {
          // console.log('登录失败！' + res.errMsg)
        }
      }
    })
  }
};
</script>

<style>
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
page {
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
}
.wrap section {
  flex: 1;
  overflow: scroll;
}
</style>
