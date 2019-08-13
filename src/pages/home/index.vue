<template>
  <div class="home">
    <div class="input">
      <input type="text" class="search" @focus="search">
      <img v-if="searchBtn" src="/static/images/搜索.svg" alt="">
    </div>
    <TapTitle :titles="titles"></TapTitle>
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
    <HotImg :hotimg="homeLists[4] && homeLists[4]"></HotImg>
    <HomeBar homeBarHot="今日秒杀" describe="先下单先得" more="true"></HomeBar>
    <div class="boutique">
      <DlList 
      v-for="(item,index) in homeLists[5] && homeLists[5].items" 
      :key="index"
      :item="item"
      ></DlList>
    </div>
    <HomeBar homeBarHot="精品好物" describe="等你来抢" more="true"></HomeBar>
    <div class="boutique">
       <DlList 
        v-for="(item,index) in homeLists[7] && homeLists[7].items" 
        :key="index"
        :item="item"
        ></DlList>
    </div>
  </div>
</template>
<script>
import {mapState,mapMutations,mapActions} from "vuex"
export default {
  props:{

  },
  components:{
    
  },
  data(){
    return {
      titles: ["今日推荐","纸尿裤","母婴专场","服装","家居","小家电"],
      searchBtn:true,
    }
  },
  computed:{
    ...mapState({
      homeLists: state=>state.home.homeLists
    })
  },
  methods:{
   search(){
     this.searchBtn = false;
   },
   ...mapActions({
     getProduct: "home/getProductList",
     getHomeList1: "home/getHomeList",
     getHomeList: "home/getHomeList1"
   })
  },
  created(){

  },
  mounted(){
    this.getProduct()
    this.getHomeList1()
    this.getHomeList()
  }
}
</script>
<style scoped lang="">
.home{
  width: 100%;
  height: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  /* padding-top: 60rpx; */
}
/* .input{
  width: 100%;
  position: fixed;
  top:0;
  left:0;
} */
.input{
  margin-bottom: 10rpx;
}
.search{
  width: 90%;
  height: 60rpx;
  background: #fff;
  border:1px solid #ccc;
  border-radius: 30rpx;
  padding-left: 30rpx;
  margin:0 auto;
}
.input img{
  width: 40rpx;
  height: 40rpx;
  position: absolute;
  top:10rpx;
  left:30rpx;
}
.introduce{
  display: flex;
   padding: 20rpx 0;
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
/* .hotInfo{
  width: 100%;
  height: 200rpx;

}
.hotInfo img{
  width: 96%;
  height: 100%;
  margin: 0 2%;
  border-radius: 30rpx;

} */
.recommend{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.recommend li{
  width: 48%;
  height: 200rpx;
  background: pink;
  margin:5rpx 0;
}
.boutique{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>