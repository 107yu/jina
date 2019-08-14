<template>
    <div class="wrap">
        <div class="tupian">
            <img src="../../../static/images/1.jpg" alt="">
        </div>
        <div class="toy">
            <h2>玩具专区</h2>
        </div>
        <scroll-view scroll-y class="list">
            <p>-------●  玩具专区  ●-------</p>
            <div class="list_L" @click="changcommoddity">
                <dl>
                    <dt>
                        <img src="../../../static/images/2.png" alt="">
                    </dt>
                    <dd>
                        <p>超级飞侠如玩家较为爱车腐恶啊和覅发挥全程</p>
                        <b>￥25</b>
                    </dd>
                </dl>
                <dl>
                    <dt>
                        <img src="../../../static/images/2.png" alt="">
                    </dt>
                    <dd>
                        <p>超级飞侠如玩家较为爱车腐恶啊和覅发挥全程</p>
                        <b>￥25</b>
                    </dd>
                </dl>
                <dl>
                    <dt>
                        <img src="../../../static/images/2.png" alt="">
                    </dt>
                    <dd>
                        <p>超级飞侠如玩家较为爱车腐恶啊和覅发挥全程</p>
                        <b>￥25</b>
                    </dd>
                </dl>
                <dl>
                    <dt>
                        <img src="../../../static/images/2.png" alt="">
                    </dt>
                    <dd>
                        <p>超级飞侠如玩家较为爱车腐恶啊和覅发挥全程</p>
                        <b>￥25</b>
                    </dd>
                </dl>
                <dl>
                    <dt>
                        <img src="../../../static/images/2.png" alt="">
                    </dt>
                    <dd>
                        <p>超级飞侠如玩家较为爱车腐恶啊和覅发挥全程</p>
                        <b>￥25</b>
                    </dd>
                </dl>
                <dl>
                    <dt>
                        <img src="../../../static/images/2.png" alt="">
                    </dt>
                    <dd>
                        <p>超级飞侠如玩家较为爱车腐恶啊和覅发挥全程</p>
                        <b>￥25</b>
                    </dd>
                </dl>
                <dl>
                    <dt>
                        <img src="../../../static/images/2.png" alt="">
                    </dt>
                    <dd>
                        <p>超级飞侠如玩家较为爱车腐恶啊和覅发挥全程</p>
                        <b>￥25</b>
                    </dd>
                </dl>
            </div>
        </scroll-view>
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
        changcommoddity(){
             wx.navigateTo({
                url: "/pages/commodityDetail/main"
            });
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    .wrap{
        width: 100%;
        height: 100%;
        // overflow: scroll;
        }
    .tupian{
        width: 100%;
        height: 400rpx;
    }
    .toy{
        width: 100%;
        height:180rpx;
        padding-left: 15rpx;
        margin-top: 205rpx;
        h2{
            font-size: 42rpx;
            color: red;
        }
    }
    .list{
        width: 100%;
        overflow: scroll;
        height: 100%;
        background: rgb(243, 247, 247);
        p{
            text-align: center;
            margin-top: 20rpx;
        }
    }
    .list_L{
        margin-top: 40rpx;
        display: flex;
        flex-wrap: wrap;
        padding-left: 15rpx;
        dl{
            width: 30%;
            margin-top:10rpx;
            font-size: 28rpx;
            padding: 0 10rpx;
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
            font-size: 24rpx;
            margin:10rpx 0;
        }
        b{
            color:red;
        }
    }
</style>