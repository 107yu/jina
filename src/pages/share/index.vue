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
            userInfo:{
                avtar: 'http://img2.imgtn.bdimg.com/it/u=265535345,1890400617&fm=26&gp=0.jpg',
                nickName: '姬小胜是小狗',
                code: 'C5JSKWUU2888',
                goodsUrl:"https://img.alicdn.com/imgextra/i3/743750137/O1CN01nPCvEA1CsmoHlOLWB_!!0-item_pic.jpg_430x430q90.jpg",
                title:"美宝莲星钻小灯管口红女持久保湿滋润显白金鱼花火唇膏夏日限量版",
                vipPrice:"299",
                salesPrice:"399",
                qrCode: 'https://upapi.jinaup.com/static/image/QRCode.png'
            }
        }
    },
    computed:{
        ...mapState({
            goodsDetail: state=>state.productDetail.goodsDetail
        })
    },
    methods:{

    },
    created(){

    },
    mounted(){
        var context = wx.createCanvasContext('shareCanvas')   //绘制的上下文
        
        //绘制头像
        context.drawImage(this.userInfo.avtar, 10, 20, 50, 50);
        //绘制昵称
        context.save();
        context.setFillStyle('#5D9AFC');
        context.setFontSize(14);
        context.fillText(this.userInfo.nickName,70, 40,);

        context.setFillStyle('#000');
        context.fillText('分享给你一个商品', 75+context.measureText(this.userInfo.nickName).width, 40)
        
        context.fillText(`邀请码：${this.userInfo.code}`, 70,70)

        context.restore();

        //绘制商品图片：
        context.drawImage(this.goodsDetail.mainImgUrl,60,100,200,200)

        //绘制介绍文字：
        context.save()
        context.setFontSize(16)
        context.fillText(this.goodsDetail.title+"顺丰包邮",10,340)
        context.setFillStyle("red")
        context.setFontSize(16)
        context.fillText("￥"+this.goodsDetail.vipPrice+"元",10,370)
        context.setFontSize(12)
        context.setFillStyle("#333")
        context.fillText("￥"+this.goodsDetail.salesPrice+"元",70+context.measureText(this.goodsDetail.vipPrice).width,370)
        context.restore()

        //一条斜线
        context.save()
        context.moveTo(70+context.measureText(this.goodsDetail.vipPrice).width,365 );
        context.lineTo(120+context.measureText(this.goodsDetail.vipPrice).width,365);
        context.stroke();

        //二维码文字和图片：
        context.save()
        context.setFontSize(16)
        context.fillText("长按识别二维码访问",10,420)
        context.drawImage(this.userInfo.qrCode,240,360,60,60)
        context.restore()

        //生成图片：
        

        context.draw()
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
        display: flex;
        justify-content: space-between;
            li{
                flex: 1;
                text-align:center;
                font-size:30rpx;
                display:flex;
                flex-direction:column;
                img{
                    width:80rpx;
                    height:80rpx;
                    margin:15rpx auto
                }
            }
    }
</style>