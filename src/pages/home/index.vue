<template>
  <div class="wrap">
    <scroll-view scroll-y style="height:100%">
      <div class="search">
        <MySearch></MySearch>
        <p @click="goToSearch"></p>
      </div>
      <TapTitle :titles="categories"></TapTitle>
      <MySwiper :swiperList="homeLists[0] && homeLists[0].items"></MySwiper>
      <div class="introduce">
        <dl
          v-for="(item,index) in  homeLists[1] &&  homeLists[1].items"
          :key="index"
          @click="introduceChange(item)"
        >
          <dt>
            <img :src="item.imgUrl" alt />
          </dt>
          <dd>{{item.title}}</dd>
        </dl>
      </div>
      <HotImg :hotimg="homeLists[2] && homeLists[2]"></HotImg>
      <HomeRecommend
        :hotimg="homeLists[4] && homeLists[4]"
        :homeLi="homeLists[5] && homeLists[5].items"
      ></HomeRecommend>
      <HomeRecommend
        :hotimg="homeLists[6] && homeLists[6]"
        :homeLi="homeLists[7] && homeLists[7].items"
      ></HomeRecommend>
      <HomeRecommend
        :hotimg="homeLists[8] && homeLists[8]"
        :homeLi="homeLists[9] && homeLists[9].items"
      ></HomeRecommend>
      <HomeRecommend
        :hotimg="homeLists[10] && homeLists[10]"
        :homeLi="homeLists[11] && homeLists[11].items"
      ></HomeRecommend>
      <HomeRecommend
        :hotimg="homeLists[12] && homeLists[12]"
        :homeLi="homeLists[13] && homeLists[13].items"
      ></HomeRecommend>
      <homeList :homeProducts="homeProducts"></homeList>
    </scroll-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},
  computed: {
    ...mapState({
      homeLists: state => state.home.homeLists,
      categories: state => state.home.categories,
      homeProducts: state => state.home.homeProducts
    })
  },
  methods: {
    ...mapActions({
      getCategoryLists: "home/getCategoryLists",
      getProductLists: "home/getProductLists",
      getHomeList: "home/getHomeList",
      getSepcialData: "sepcialList/getSepcialData"
    }),
    goToSearch() {
      wx.navigateTo({
        url: "/pages/search/main"
      });
    },
    //专题
    introduceChange(item) {
      let str2 = item.jumpUrl.substring(
        item.jumpUrl.indexOf("businessId") + 11
      );
      let businessId = str2.substring(0, str2.indexOf("&"));
      let str3 = item.jumpUrl.substring(item.jumpUrl.indexOf("uiType") + 7);
      let uiType = str3;
      console.log(123, businessId, uiType, 456);
      wx.navigateTo({
        url:
          "/pages/introduceDetail/main?sild=" + businessId + "&uiType=" + uiType
      });
    }
  },
  created() {},
  mounted() {
    this.getCategoryLists();
    this.getProductLists();
    this.getHomeList();
  }
};
</script>

<style scoped>
</style>
