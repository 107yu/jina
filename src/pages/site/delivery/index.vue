<template>
<form @submit="submit" report-submit>
    <div class="outbox">
        <div class="chagne_add_data">
            <div class="user_change_data">
                <input class="user_address_data" type="text" placeholder="收货人">
                <span class="user_address_right"><img src="../../../../static/images/lt.svg" alt=""></span>
            </div>
            <div class="user_change_data">
                <input class="user_address_data" type="text" placeholder="手机号码">
                <span class="user_address_right user_address_right2"><i>+ 86</i><img src="../../../../static/images/lt.svg" alt=""></span>
            </div>
            <view class="user_change_data">
                <picker>
                    <view class="user_change_data">
                        <input class="user_address_data" type="text" placeholder="所在地区">
                        <span class="user_address_right"><img src="../../../../static/images/lt.svg" alt=""></span>
                    </view>
                </picker>
            </view>
            <div class="user_change_data user_textarea">
                <textarea  placeholder="详细地址：如道路、门牌号、小区、楼栋号、单元 室等"></textarea>
            </div>
        </div>
        <div class="user_data_title">
            <div class="user_title_type">
                <p class="title_type_tit">标签</p>
                <div class="user_every_type">
                    <span>家</span>
                    <span>公司</span>
                    <span>学校</span>
                    <span>其他</span>
                </div>
            </div>
            <div class="user_default_address">
                <p class="set_default_address">设为默认地址</p>
                <switch/>
            </div>
        </div>
        <button class="btn" @click="changbtn" form-type="submit">保存</button>
    </div>
</form>
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
        changbtn(){
             wx.navigateTo({
                url: "/pages/site/sitelist/main"
            }); 
    },
    created(){

    },
    mounted(){

    }

    }
    }
</script>
<style scoped lang="scss">
    .outbox{
    width:100%;
    height:100%;
    background:#f3f7f7;
    font-family:'PingFangSC-Regular';

}
.chagne_add_data{  /* 705.9rpx */
    width:100%;
    display:flex;
    flex-direction:column;
    background:#fff;
    margin-bottom:20rpx;

}
.user_change_data{
    width:702rpx;
    height:90rpx;
    margin:0 auto;
    display:flex;
    line-height:90rpx;
    border-bottom:2rpx solid #F6F6F6;
    font-size:28rpx;

}
.user_address_data{
    flex:1;
    height:90rpx;
    padding-left:10rpx;
    width:100%;

}
.user_address_right{
    display:inline-block;
    color:#9CA0A5;

}
.user_address_right img{
    width:10rpx;
    height:18rpx;

}
.user_address_right2{
    display: flex;
    align-items: center;
    color: #9CA0A5;
}
.user_address_right2 i{
    margin-right:20rpx;

}
picker{
    width:702rpx;
    margin:0 auto;

}
.picker{
    width: 100%;
}
.user_textarea{
    height:176rpx;
    font-weight:400;
    line-height:40rpx;
    font-size:28rpx;
    border-bottom:0;

}
.user_textarea textarea{
    width:616rpx;
    height:176rpx;
    margin:26rpx 10rpx;

}
.user_data_title{
    width:100%;
    height:286rpx;
    background:#fff;

}
.user_title_type{
    width:702rpx;
    margin:0 auto;
    border-bottom:2rpx solid #F6F6F6;

}
.title_type_tit{
    font-size:28rpx;
    font-weight:400;
    color:#323a45;
    margin-left:10rpx;
    height:62rpx;
    line-height:62rpx
}
.user_every_type{
    width:702rpx;
    height:134rpx;
    margin:0 auto;
    display:flex;

}
.user_every_type span{
    width:132rpx;
    height:52rpx;
    border-radius:300rpx;
    margin:2rpx 14rpx;
    border:2rpx solid #bbbbbb;
    font-size:30rpx;
    line-height:52rpx;
    text-align:center;
    color:#323a45;

}
.user_every_type span.type_active{
    background:rgba(51,214,197,1);
    color:#fff;
    border:1px solid rgba(51,214,197,1);
}
.user_default_address{
    display:flex;
    width:702rpx;
    margin:0 auto;
    height:90rpx;
    line-height:90rpx;
    font-size:28rpx;

}
.set_default_address{
    margin-left:10rpx;
    flex:1;

}
.user_change_button{
    width:100%;
    height:304rpx;
    display:flex;
    justify-content:space-around;
    align-items:center;
}

.btn{
    margin-top: 50rpx;
    color: #FFF;
    background:rgba(51,214,197,1);
}


</style>