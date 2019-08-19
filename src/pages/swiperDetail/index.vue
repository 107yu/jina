<template>
  <scroll-view scroll-y style="height:100%" @scroll="scroll">
    <div class="content" v-if="swiperDetailInfo.res_code===1">
      <div>
        <img :src="swiperDetailInfo.result.specialImg" alt="">
      </div>
      <div :class="['title',{'fixed':flag}]">
          <span>{{swiperDetailInfo.result.specialName}}</span>
      </div>
      <div class="main">
          <div class="hint">-------{{swiperDetailInfo.result.specialName}}-------</div>
          <!-- <scroll-view scroll-y style="height:100%"> -->
            <div class="list">
              <DlList 
                v-for="(item,index) in swiperDetailInfo.result.anchors[0].products" 
                :key="index"
                :img="item.mainImgUrl"
                :title="item.title"
                :price="item.salesPrice"
                :earnMoney="item.earnMoney"
                :id="item.basePid"
                >
                </DlList>
              </div>
          <!-- </scroll-view> -->
      </div>
    </div>
    <div v-if="swiperDetailInfo.res_code===1004" class="noGoods">
      <img src="/static/images/nogoods.png" alt="">
    </div>
  </scroll-view>
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
      flag: false,
    }
  },
  computed:{
    ...mapState({
      swiperDetailInfo: state=>state.home.swiperDetailInfo
    })
  },
  methods:{
    scroll(e){
      // console.log(e.target.scrollTop,this.swiperDetailInfo.result.shareImgHeight)
      if(e.target.scrollTop>240){
        this.flag = true
      } else {
        this.flag = false
      }
    }
  },
  created(){

  },
  mounted(){

  }
}
</script>
<style scoped lang="">
.wrap{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.title{
  width: 100%;
  padding: 20rpx;
  color: red;
  background: #fff;
  border-bottom: 1px solid #ccc;
}
.main{
  flex: 1;
}
.hint{
  width: 100%;
  height: 90rpx;
  line-height: 90rpx;
  text-align: center;
  background: #eee;
}
.list{
  display: flex;
  flex-wrap: wrap;
  background: #eee;
  padding:8rpx;
}
.fixed{
  position: fixed;
  top:0;
  left:0;
  z-index: 999;
}
.noGoods{
  width: 100%;
  height: 100%;
}
.noGoods img{
  width: 100%;
  height: 100%;
}
</style>