<template>
    <div class="share">
        <div class="picture">
            <canvas canvas-id="shareCanvas" style="width: 100%; height:100%;"></canvas>
        </div>
        <ul class="footer">
            <li>
                <img src="/static/images/保存图片 copy 2.svg" alt="">
                <span>保存到相册</span>
            </li>
            <li>
                <img src="/static/images/分享微信.svg" alt="">
                <span>分享给朋友</span>
            </li>
        </ul>
    </div>
</template>
<script>
import {mapState,mapMutations,mapActions} from "vuex"
export default {
    data(){
        return {

        }
    },
    computed:{
        ...mapState({
            goodsDetail: state=>state.home.goodsDetail
        })
    },
    methods:{

    },
    created(){

    },
    mounted(){
        //title  
        // console.log(this.goodsDetail)
        const context = wx.createCanvasContext('shareCanvas');//绘制的上下文
        context.rect(0, 0, 320, 520);//绘制白色背景
        //填写标题文本：save()	保存当前环境的状态    restore()	返回之前保存过的路径状态和属性
        // context.setFontSize(20);
        // context.fillText(`富锦七星伴月月饼 8个/盒`, 10, 30)
        // context.fillText(`[在售价]199元`, 10, 60)
        // context.drawImage(this.avatar, 0, 0, 40, 40, 20, 12, 40, 40);
        context.draw(); //描绘在页面中
    }
}
</script>
<style scoped lang="scss">
    .share{
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }
    .picture{
        width: 100%;
        flex: 1;
        border-bottom: 1px solid red;
    }
    .footer{
        width: 100%;
        padding: 20rpx;
        display: flex;
        justify-content: space-between;
            li{
                flex: 1;
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
</style>