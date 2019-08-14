<template>
    <div class="swiperBox">
        <swiper 
           indicator-dots="true" 
           autoplay="true" 
           interval="2000" 
           duration="1000"
           indicator-active-color="#fff"
        >
            <block v-for="(val,index) in swiperList" :key="index">
                <swiper-item @click="goToDetail(val.contentValue)">
                    <image :src="val.imgUrl" class="slide-image" style='overflow:show'/>
                </swiper-item>
            </block>
        </swiper>
    </div>
</template>
<script>
import {mapState,mapMutations,mapActions} from "vuex"
export default {
    props:["swiperList"],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
        ...mapActions({
            getSwiperDeatil: "home/swiperDetail"
        }),
        goToDetail(id){
            wx.navigateTo({
                url: '/pages/swiperDetail/main',
            })  
            this.getSwiperDeatil({
                siid:id
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
.swiperBox{
    width: 100%;
    overflow: hidden;
}
.swiperBox .slide-image{
    width: 100%;
}
</style>