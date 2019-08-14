<template>
  <div>
    <HotImg :hotimg="hotimg"></HotImg>
    <HomeBar homeBarHot="精品好物" describe="等你来抢" more="true"></HomeBar>
    <div class="boutique" @click="showcommodity">
      <DlList 
            v-for="(item,index) in homeLi" 
            :key="index"
            :img="item.imgUrl"
            :title="item.title"
            :price="item.vipPrice"
          ></DlList>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: ["hotimg", "homeLi"],
  components: {},
  data() {
    return {};
  },
  computed: {
   
  },
  methods: {
    ...mapActions({
      ProductCouponDetail: state => state.productCoupon.ProductCouponDetail
    }),
    showcommodity() {
      wx.navigateTo({
        url: "/pages/commodityDetail/main"
      });
       // this.productCoupon({pid:,bid:,uid:,usiid:})
       // pid:549
       // bid:13357
       // uid:23
    }
  },
  created() {},
  mounted() {
     
  }
};
</script>
<style scoped lang="">
.boutique {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>