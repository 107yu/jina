<template>
  <div>
    <HotImg :hotimg="hotimg"></HotImg>
    <HomeBar homeBarHot="精品好物" describe="等你来抢" more="true"></HomeBar>
    <div class="boutique">
      <DlList 
      v-for="(item,index) in homeLi" 
      :key="index"
      :img="item.imgUrl"
      :title="item.title"
      :price="item.vipPrice"
      :url="item.jumpUrl"
      ></DlList>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions,mapMutations } from "vuex";
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