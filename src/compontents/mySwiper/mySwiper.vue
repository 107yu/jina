<template>
    <div class="swiperBox">
        <swiper 
           indicator-dots="true" 
           autoplay="true" 
           interval="1000" 
           duration="1000"
           indicator-active-color="#fff"
        >
            <block v-for="(item,index) in imgUrls" :key="index">
                <swiper-item>
                    <image :src="item" class="slide-image"/>
                </swiper-item>
            </block>
        </swiper>
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
            indicatorDots: true,
            autoplay: true,
            interval: 5000,
            duration: 2000,
            imgUrls: [
               'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
                'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
                'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
            ],
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
}
.swiperBox .slide-image{
    width: 100%;
    height: 100%;
}

</style>