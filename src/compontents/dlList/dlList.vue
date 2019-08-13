<template>
    <dl>
        <dt>
            <img :src="item.imgUrl" alt="">
        </dt>
        <dd>
            <p>{{item.title}}</p>
            <b>￥{{item.vipPrice}}</b>
        </dd>
    </dl>
</template>
<script>
export default {
    props:["item"],
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
    margin-top:10rpx;
    font-size: 28rpx;
    margin:10rpx 0;
}
dt {
    width: 100%;
    height: 200rpx;
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

}
b{
    color:red;
}
</style>