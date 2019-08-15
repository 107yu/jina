<template>
  <div class="wrap">
    <header class="header"><img src="/static/my/remind.svg" alt=""/>请在29:2内付款</header>
    <div class="item">
      <div class="money">
        <div class="div">订单应付金额(含邮)</div>
        <div>
          ￥
          <span>123</span>
        </div>
        <div>
          订单总计:
          <span>￥123</span>
        </div>
        <div>
          满减活动:
          <span>-￥5</span>
        </div>
      </div>
      <div class="payment">
        <div><p><img src="/static/my/zfb.svg" alt="" class="zf"/>支付宝支付</p><img src="/static/my/nocheck.svg" alt="" class="check"/></div>
        <div><p><img src="/static/my/wx.svg" alt="" class="zf"/>微信支付</p><img src="/static/my/nocheck.svg" alt="" class="check"/></div>
      </div>
    </div>
    <div @click="pay" class="foot">去支付</div>
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
  mounted() {}
};
</script>
<style scoped lang="scss">
@import "./scss/index.scss";
</style>