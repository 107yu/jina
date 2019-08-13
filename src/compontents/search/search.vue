<template>
    <div class="input"  @click="goToSearch">
      <input type="text" class="search">
      <img  src="/static/images/搜索.svg" alt="">
      <slot></slot>
    </div>
</template>
<script>
export default {
    props:["homePage"],
    components:{

    },
    data(){
        return {
           
        }
    },
    computed:{

    },
    methods:{
        goToSearch(){
            if(this.homePage === "1"){
                 wx.navigateTo({
                    url: '/pages/search/main',
                })
                this.homePage = "0"
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
.input{
  margin-bottom: 20rpx;
  display: flex;
  align-items: center;
  margin-top:10rpx;
}
.search{
  flex: 1;
  height: 60rpx;
  background: #fff;
  border:1px solid #ccc;
  border-radius: 30rpx;
  padding-left: 60rpx;
  margin:0 auto;
}
.input img{
  width: 40rpx;
  height: 40rpx;
  position: absolute;
  top:20rpx;
  left:20rpx;
}
</style>