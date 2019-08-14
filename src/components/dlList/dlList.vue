<template>
    <dl>
        <dt>
            <img :src="img" alt="">
        </dt>
        <dd>
            <p>{{title}}</p>
            <b>￥{{price}}</b>
            <slot></slot>
        </dd>
    </dl>
</template>
<script>
export default {
    props:["title","img","price"],
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
    width: 30%;
    font-size: 28rpx;
    background: #fff;
    border-radius: 10rpx;
    margin:10rpx 0 0 8rpx;
    padding: 8rpx;
}
dt {
    width: 100%;
    height: 200rpx;
    text-align: center;
}
img{
    width: 100%;
    height: 100%;
}
p{
    width: 100%;
    line-height: 40rpx;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 24rpx;
    margin:10rpx 0;
}
b{
    color:red;
}
</style>