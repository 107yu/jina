<template>
    <div>
        <swiper 
           indicator-dots="true" autoplay="true" interval="1000" duration="1000"
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
                "/static/images/Bitmap(1).svg","/static/images/Bitmap(1).svg","/static/images/Bitmap(1).svg"
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

</style>