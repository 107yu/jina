<template>
  <dl>
    <dt>
      <div class="small_img"></div>
    </dt>
    <dd>
      <h1>家宝 Gerber HDN+ 益生菌大米米粉4M+ 227g</h1>
      <p>包税</p>
      <h2>
        <h3>
          <span>￥22</span>
        </h3>
        <h4>
          <h5>￥216</h5>
          <span>赚￥20</span>
        </h4>
      </h2>
    </dd>
  </dl>
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
  created() {
    wx.setNavigationBarTitle({ title: "惊喜特惠 致敬新年" });
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
dl {
  padding: 10px 10px;
  dt {
    .small_img {
      background-image: linear-gradient(to right, #26c5fd, #fc5d7b);
    }
  }
  dd {
    h1 {
      font-size: 30rpx;
    }
    p{
      border:1px solid #fc5d7b;
      display: inline-block;
      color:#fc5d7b;
    }
    h2 {
      h3 {
        color: #fc5d7b;
        span {
        }
      }
      h4 {
        color: #666;
        font-size: 25rpx;
        margin-top: 20rpx;
        display: flex;
        h5{
        text-decoration: line-through;
        }
        span {
          color: #fc5d7b;
        }
      }
    }
  }
}
</style>