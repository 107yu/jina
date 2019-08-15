<template>
    <div>
        <canvas style="width: 320px; height: 520px;" canvas-id="canvas"></canvas>
    </div>
</template>
<script>
    // const userInfo = {
    //     avatar: 'https://avatars2.githubusercontent.com/u/8192412?s=40&v=4',
    //     name: '瞎捣鼓'
    // }

    const userInfo = {
      // avatar: 'https://avatars2.githubusercontent.com/u/8192412?s=40&v=4',
      name: '瞎捣鼓......',
      code: 'dasbdabdbaj',
      image:'http://img3.imgtn.bdimg.com/it/u=2555204911,3508488420&fm=26&gp=0.jpg'
    }

    const qrCode = 'https://upapi.jinaup.com/static/image/QRCode.png';
    const toBase64 = 'https://upapi.jinaup.com/api/open/product/image/to/base64/1.0.0';


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
      var context = wx.createCanvasContext('canvas');
      // context.drawImage(userInfo.avatar, 10, 0, 45, 45, 25, 35, 40, 40);
      context.save();
      
      //文本内容
      context.setFontSize(15);
      context.fillText(`${userInfo.name}分享给你一个商品`, 60, 40)

      //邀请码
      context.fillText(`邀请码: ${userInfo.code}`, 60, 65)
      context.restore();
      context.save();

      //大图片
      context.drawImage(userInfo.image, 10, 80, 300, 300, 0, 0);

      //生成二维码
      context.setFontSize(15);
      context.fillText('长按识别二维码访问', 20, 450);
      context.restore();
      context.drawImage(qrCode, 0, 0, 1000, 1000, 200, 400, 90, 90);
      context.draw();
    }
}
</script>
<style scoped lang="scss">
canvas {
    width: 100%;
    border: 1px solid #000;
  }
</style>