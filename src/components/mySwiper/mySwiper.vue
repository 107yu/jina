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
                <swiper-item>
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
    height: 300rpx;
    overflow: hidden;
}
.swiperBox .slide-image{
    width: 100%;
    height: 100%;
}

</style>