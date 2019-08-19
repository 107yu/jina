<template>
  <div class="wrap">
    <div class="sessionCont">
      <img
        :id="scal === true ? 'actives':'banners'"
        :src="banner"
        alt
        mode="widthFix"
        @click="scals"
      />
      <p class="title">{{title}}</p>
      <!-- <scroll-view class="nav" scroll-x="true">
        <span v-for="(item,index) in list" :key="index" :class="index==ind ? 'active' : ''" @click="changeind(index,item)">{{item.anchorDesc}}</span>
      </scroll-view>-->
    </div>
    <scroll-view scroll-y="true" class="listWrap">
      <div class="cake">
        <span></span>
        <p v-for="(item,index) in list" :key="index">{{item.anchorName}}</p>
        <span></span>
      </div>
      <!-- </div> -->
      <div class="hot">
        <HotItem v-if="list[0] && list[0].products" :products="list[0].products" />
      </div>
    </scroll-view>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import HotItem from "@/components/hotItem";
export default {
  props: {},
  components: {
    HotItem
  },
  data() {
    return {
      scal: false
    };
  },
  computed: {
    ...mapState({
      list: state => state.sepcialList.list,
      banner: state => state.sepcialList.banner,
      title: state => state.sepcialList.title
    })
  },
  async onShow() {
    await this.specialList({
      siid: this.siid
    });
    wx.setNavigationBarTitle({ title: this.title });
  },
  onLoad(options) {
    this.siid = options.sild;
  },
  methods: {
    //专题
    ...mapActions({
      specialList: "sepcialList/getSepcialData"
    })
  },
  created() {},
  mounted() {
    
  }
};
</script>
<style scoped lang="scss">
@import "./scss/index.scss";
</style>