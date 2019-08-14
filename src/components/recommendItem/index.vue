<template>
  <dl>
    <dt>
      <img :src="item.mainImgUrl" alt />
    </dt>
    <dd>
      <h1>{{item.title}}</h1>
      <p>包税</p>
      <h2>
        <h3>
          <span>￥{{item.salesPrice}}</span>
        </h3>
        <h4>
          <h5>￥{{item.vipPrice}}</h5>
          <span>赚￥{{item.memberDiscountPrice}}</span>
        </h4>
      </h2>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    item: Object
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {
    // wx.setNavigationBarTitle({ title: "惊喜特惠 致敬新年" });
  },
  mounted() {
    console.log();
  }
};
</script>
<style scoped lang="scss">
dl {
  padding: 10px 10px;
  dt {
    text-align: center;
    img {
      width: 280rpx;
      height: 260rpx;
    }
  }
  dd {
    h1 {
      font-size: 30rpx;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    p {
      border: 1px solid #fc5d7b;
      display: inline-block;
      color: #fc5d7b;
      font-size: 20rpx;
      padding:0 8rpx;
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
        h5 {
          color: #a87831;
        }
        span {
          color: #fc5d7b;
          margin-left: 20rpx;
          background: #fbe1ec;
        }
      }
    }
  }
}
</style>