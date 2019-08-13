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
    overflow: hidden;
}
b{
    color:red;
}
</style>