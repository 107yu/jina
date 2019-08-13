<template>
    <div class="hotInfo" @click="showhotImg">
      <img :src="hotimg && hotimg.pictUrl" alt="">
    </div>
</template>
<script>
export default {
    props:["hotimg"],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
         showhotImg(){
            wx.navigateTo({
                url: '/pages/hotimgDetail/main',
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
.hotInfo{
  width: 100%;
  height: 200rpx;

}
.hotInfo img{
  width: 96%;
  height: 100%;
  margin: 0 2%;
  border-radius: 30rpx;

}
</style>