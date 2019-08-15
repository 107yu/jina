<template>
    <div class="share">
        <div class="share_h2">
            <h2>超级飞侠如玩家较为爱车腐恶啊和覅发挥全程覅发挥全程</h2>
            <span class="pirce">【在售价22元】</span>
        </div>
        <div class="section"></div>
        <div class="footer">
            <ul>
                <li>
                    <img src="../../../static/images/保存图片 copy 2.svg" alt="">
                    <span>保存到相册</span>
                </li>
                <li>
                    <img src="../../../static/images/分享微信.svg" alt="">
                    <span>分享给朋友</span>
                </li>
            </ul>
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
<style scoped lang="scss">
    .share{
        width: 100%;
        height: 100%;
    }
    .share_h2{
        font-weight:600;
        font-size:40rpx;
        width:658rpx;
        margin:0 auto;
    }
    .pirce{
        width:690rpx;
        height:60rpx;
        margin:0 auto;
        margin-top:20rpx;
    }
    .section{
        width:700rpx;
        height: 750rpx;
        margin:30rpx auto 0;
        display:flex;
        justify-content:space-between;

    }
    .footer{
        height:175rpx;
        ul{
            display: flex;
            justify-content: space-between;
            li{
                text-align:center;
                font-size:30rpx;
                display:flex;
                flex-direction:column;
                img{
                    width:100rpx;
                    height:100rpx;
                    margin:15rpx auto
                }
            }
        }
    }
</style>