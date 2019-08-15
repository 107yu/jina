<template>
    <div class="homeList">
         <HomeBar homeBarHot="为你精选" describe="等你来抢" more="true"></HomeBar>
         <div class="homedl">
             <dl v-for="(item,index) in homeProducts && homeProducts" :key="index">
                 <dt>
                     <img :src="item.productVo.mainImgUrl" alt="">
                 </dt>
                 <dd>
                     <p class="shuo">{{item.productVo.title}}</p>
                     <p>
                         <span class="span">包邮</span>
                         <span class="span">包税</span>
                     </p>
                     <p class="jia">
                         <span class="qian">￥</span>
                         <span class="shu">{{item.productVo.salesPrice}}</span>
                         <span class="mony">￥{{item.productVo.vipPrice}}</span>
                         <img src="../../../static/images/黑卡.svg" alt="">
                         <span class="zhuan">赚￥{{item.productVo.earnMoney}}</span>
                     </p>
                 </dd>
             </dl>
         </div>
    </div>
</template>
<script>

import { mapState, mapActions } from "vuex";

export default {
    props:['homeProducts'],
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
    .homeList{
        width: 100%;
    }
    .homedl{
        width: 100%;
        dl{
            display:flex;
            padding-right:20rpx;
            box-sizing:border-box;
            margin:20rpx 0;
            dt img{
                width:200rpx;
                height:216rpx;
                margin:0 20rpx;
            }
            dd{
                display:-webkit-box;
                -webkit-box-orient:vertical;
                -webkit-line-clamp:2;
                font-size:28rpx;
                text-overflow:ellipsis;
                overflow:hidden;
                margin-bottom:20rpx;
                line-height:2;
                margin-bottom:10rpx;
                .span{
                    border:2rpx solid #fc5d7b;
                    color:#fc5d7b;
                    font-size:20rpx;
                    padding:2rpx 6rpx;
                    box-sizing:border-box;
                    margin:0 10rpx;
                }
                .jia{
                    color:#fc5d7b;
                    line-height:2;
                    .qian{
                        font-size:28rpx;
                    }
                    .shu{
                        font-size:44rpx;
                    }
                    .mony{
                        margin-left:10rpx;
                        color:#a87831;
                        font-size:20rpx;
                    }
                    img{
                        width:42rpx;
                        height:20rpx;
                        margin:0 6rpx;
                    }
                    .zhuan{
                        font-size:20rpx;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:#fc5d7b;
                        line-height:24rpx;
                        background:#ffe8ed;
                        margin-left:10rpx;
                        padding:4rpx 0;
                        box-sizing:border-box;
                    }
                }
            }
        }
    }
</style>