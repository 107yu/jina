<template>
    <div class="title">
        <div>
            <b>{{homeBarHot}}</b>
            <span>{{describe}}</span>
        </div>
        <span v-if="more">更多<i></i></span>
    </div>
</template>
<script>
export default {
    props:["homeBarHot","describe","more"],
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
.title{
    display: flex;
    justify-content:space-between;
    padding: 20rpx;
}
.title div{
    display: flex;
}
img{
    width: 40rpx;
    height: 40rpx;
    color: red;
}
b{
    font-weight: 700;
    padding-right: 10rpx;
    border-right: 1px solid #999;
}
i{
    display: inline-block;
    width: 20rpx;
    height: 20rpx;
    border-bottom:1px solid red;
    border-right:1px solid red;
    transform:rotate(-45deg)
}
.title>div>span{
    padding-left: 10rpx;
}
.title>span{
    color: red;
}
</style>