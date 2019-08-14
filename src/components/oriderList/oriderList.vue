<template>
    <div class="list">
        <div class="top">
            <span>2019-01-17 17:18:50</span>
            <span>待付款</span>
        </div>
        <div class="menu">
           <OriderDl></OriderDl>
           <OriderDl></OriderDl>
        </div>
        <div class="computed">
           共计；2件商品，合计：￥53.5
        </div>
        <div class="btn">
            <p></p>
            <slot></slot>
        </div>
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
.list{
    background: #fff;
    margin:20rpx;
    border-radius: 10rpx;
    font-size: 24rpx;
    box-sizing: border-box;
}
.top{
    display:flex;
    justify-content: space-between;
    padding: 20rpx;
}
.menu dl{
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
.computed{
    padding: 20rpx;
    text-align: right;
}
.btn{
    display: flex;
}
.btn p{
    flex: 1;
}
.btn div{
    display: flex;
}
.btn span{
    height: 60rpx;
    line-height: 60rpx;
    text-align: center;
    border:1px solid #ccc;
    margin:20rpx 20rpx 20rpx 0;
    padding: 0 20rpx;
}
</style>