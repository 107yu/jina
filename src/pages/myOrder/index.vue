<template>
  <scroll-view scroll-y style="height:100%">
    <div class="wrap">
        <div class="top">
          <span v-for="(item,index) in title" :key="index" @click="changeIndex(index)" :class="{'show':index===ind}">{{item}}</span>
        </div>
        <div class="main">
          <OriderList>
            <div class="btn">
                <span>取消订单</span>
                <span class="pay">去付款54.5</span>
            </div>
          </OriderList>
        </div>
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
        ind: 0,
    }
  },
  computed:{
    ...mapState({
      title: state=>state.orider.title
    })
  },
  methods:{
    changeIndex(index){
      this.ind = index;
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
  display: flex;
  flex-direction: column;
}
.top{
  width: 100%;
  height: 80rpx;
  display: flex;
  justify-content: space-evenly;
}
.top span{
  flex: 1;
  text-align: center;
  height: 80rpx;
  line-height: 80rpx;
}
.show{
  border-bottom: 6rpx solid #56D2BF;
}
.main{
  flex: 1;
  background: #eee;
}
.btn{
  display: flex;
}
.btn span{
    height: 60rpx;
    line-height: 60rpx;
    text-align: center;
    border:1px solid #ccc;
    margin:20rpx 20rpx 20rpx 0;
    padding: 0 20rpx;
}
.pay{
  background: red;
  color: #fff;
}
</style>