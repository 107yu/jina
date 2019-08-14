<template>
  <div  class="wrap">
    <scroll-view scroll-y style="height:100%">
    <div class="search">
      <MySearch></MySearch>
      <p @click="goToSearch"></p>
    </div>
    <TapTitle :titles="categories"></TapTitle>
    <MySwiper :swiperList="homeLists[0] && homeLists[0].items"></MySwiper>
    <div class="introduce">
      <dl v-for="(item,index) in  homeLists[1] &&  homeLists[1].items" :key="index">
        <dt>
          <img :src="item.imgUrl" alt="">
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
    </scroll-view>
  </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from "vuex"
export default {
  data() {
    return {};
  },
  components:{
    
  },
  data(){
    return {
      
    }
  },
  computed:{
    ...mapState({
      homeLists: state=>state.home.homeLists,
      categories: state=>state.home.categories
    })
  },
  methods:{
   ...mapActions({
     getCategoryLists: "home/getCategoryLists",
     getProductLists: "home/getProductLists",
     getHomeList: "home/getHomeList"
   }),
    goToSearch(){
      wx.navigateTo({
        url: '/pages/search/main',
      })     
    }
  },
  created(){

  },
  mounted(){
    this.getCategoryLists()
    this.getProductLists()
    this.getHomeList()
  }
}
</script>
<style scoped lang="">
.wrap{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.introduce{
  display: flex;
  padding: 20rpx 0;
  font-size: 24rpx;
  margin:20rpx 0;
}
.introduce dl{
  flex: 1;
  text-align: center;
}
.introduce dt{
  width: 100rpx;
  height: 100rpx;
  margin:0 auto;
  border-radius: 50%;
}
.introduce dt img{
  width: 100%;
  height: 100%;
}
.search>p{
  width:100%;
  height:80rpx;
  position: absolute;
  top:0;
  left: 0;
  z-index:999;
  opacity: 0;
}
</style>
