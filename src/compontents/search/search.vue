<template>
    <div class="input"  @click="goToSearch">
      <input type="text" class="search">
      <img v-if="searchBtn" src="/static/images/搜索.svg" alt="">
    </div>
</template>
<script>
export default {
    props:["homePage"],
    components:{

    },
    data(){
        return {
            searchBtn:true,
        }
    },
    computed:{

    },
    methods:{
        search(){
            this.searchBtn = false;
        },
        goToSearch(){
            wx.navigateTo({
                url: '/pages/search/main',
            })
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.input{
  margin-bottom: 20rpx;
  position: relative;
}
.search{
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
</style>