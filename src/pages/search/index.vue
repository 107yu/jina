<template>
  <div class="search">
     <MySearch>
       <span class="cancel">取消</span>
     </MySearch>
     <div class="historySearch">
       <div class="historyTop">
         <span>历史记录</span>
         <span><img src="/static/images/删除.svg" alt=""></span>
       </div>
       <div class="historyContent">
        
       </div>
     </div>
  </div>
</template>
<script>
export default {
  props:{

  },
  components:{

  },
  data(){
    return {

    }
  },
  computed:{

  },
  methods:{

  },
  created(){

  },
  mounted(){

  }
}
</script>
<style scoped lang="">
.cancel{
  padding: 0 20rpx;
}
.historyTop{
  display: flex;
  justify-content: space-between;
  padding: 20rpx;
  font-size: 24rpx;
}
.historyTop img{
  width: 30rpx;
  height: 30rpx;
}
.historyContent{
  display: flex;
  flex-wrap: wrap;
}
.historyContent span{
  width: 23%;
  text-align: center;
  height: 50rpx;
  line-height:50rpx;
  background: #eee;
  margin-top:10rpx;
  margin-right: 6rpx;
  margin-left: 6rpx;
}
</style>