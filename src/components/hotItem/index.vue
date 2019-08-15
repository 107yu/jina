<template>
  <div>
    <dl v-for="(item,index) in products && products" :key="index" @click="showcommodity({img:item.mainImgUrl,title:item.title,price:item.salesPrice,id:item.basePid,earnMoney:item.earnMoney})">
      <dt>
        <img :src="item.mainImgUrl" alt />
      </dt>
      <dd>
        <p class="titleBox">{{item.title}}</p>
        <div class="moneySpanBox">
          <label for class="span1">
            ￥
            <span>{{item.salesPrice}}</span>
          </label>
          <label for class="span2">
            赚￥
            <span>{{item.memberDiscountPrice}}</span>
          </label>
        </div>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  props: ["products"],
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    showcommodity() {
      wx.navigateTo({
        url: "/pages/commodityDetail/main"
      });
    }
  },
  created() {},
  onLoad() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
@import "./scss/index.scss";
</style>