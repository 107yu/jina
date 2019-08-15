<template>
    <dl @click="showcommodity">
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
import {mapState,mapMutations,mapActions} from "vuex"
export default {
    props:["title","img","price","url","id"],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
        showcommodity() {
            //处理url地址，获取商品的id
            //basePid
            let id = "";
            if(this.id){
                id = this.id
            }else if(this.url){
                let arr = []
                this.url.split("//")[1].split("&").forEach((item)=>{
                    arr.push(item.split("=")) 
                })
                let obj= Object.fromEntries(arr)
                id = obj.businessId
            }
            wx.navigateTo({
                url: `/pages/commodityDetail/main?id=${id}`
            });
        }
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