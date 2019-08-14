<template>
    <dl>
        <dt>
            <img src="/static/images/2.png" alt="">
        </dt>
        <dd>
            <p>哈哈哈哈哈哈哈哈哈哈哈</p>
            <span class="size">规格：XL</span>
            <div>
                <b>￥52.5</b>
                <span>X1</span>
            </div>
        </dd>
    </dl>  
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
dl{
    display: flex;
    padding: 20rpx;
    border-bottom: 1px solid #eee;
}
dl dt {
    padding: 20rpx;
}
dt img{
    width: 120rpx;
    height: 120rpx;
}
dd{
    flex: 1;
    width: 100%;
    line-height: 40rpx;
}
dd p{
    font-size: 28rpx;
}
.size{
    color: #333;
}
dd>div{
    display:flex;
    justify-content: space-between;
}
</style>