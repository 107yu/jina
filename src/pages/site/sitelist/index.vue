<template>
    <div class="bigbox">
    <div class='addbigbox'>
      <div class="addressbox">
        <div class="addlittle">
          <p class='char name'>李小冉</p>
          <p class='char phone'>15825478997</p>
          <div class="addlebox">
            <div class='addimgbox'>
              <img class='addimg' src="../../../../static/images/Group 39.svg" alt="">
            </div>
            <p class='char addresstag'>[家]</p>
            <p class='char address'>北京市朝阳区焦化工厂小区3号楼2单元1005</p>
          </div>
        </div>
        <div class="addribox">
          <span class="borders"></span>
          <p class='char redact'>编辑</p>
        </div>
      </div>
      <div class="addressbox">
        <div class="addlittle">
          <p class='char name'>李小冉</p>
          <p class='char phone'>15825478997</p>
          <div class="addlebox">
            <div class='addimgbox'>
              <img class='addimg' src="../../../../static/images/Group 39.svg" alt="">
            </div>
            <p class='char addresstag'>[家]</p>
            <p class='char address'>北京市朝阳区焦化工厂小区3号楼2单元1005</p>
          </div>
        </div>
        <div class="addribox">
          <span class="borders"></span>
          <p class='char redact'>编辑</p>
        </div>
      </div>
      <div class="addressbox">
        <div class="addlittle">
          <p class='char name'>李小冉</p>
          <p class='char phone'>15825478997</p>
          <div class="addlebox">
            <div class='addimgbox'>
              <img class='addimg' src="../../../../static/images/Group 39.svg" alt="">
            </div>
            <p class='char addresstag'>[家]</p>
            <p class='char address'>北京市朝阳区焦化工厂小区3号楼2单元1005</p>
          </div>
        </div>
        <div class="addribox">
          <span class="borders"></span>
          <p class='char redact'>编辑</p>
        </div>
      </div>
    </div>
    <button class='addbtn'>新增收货地址</button>
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
    .bigbox {
        width:100%;
        height:100%;
        background:#f3f7f7;
        border:2rpx solid transparent;
        box-sizing:border-box;
        overflow-y:scroll;
  }

  .addbigbox {
    width: 100%;
    background: #fff;
  }

  .addressbox {
        width:702rpx;
        height:172rpx;
        border-bottom:1rpx solid #F6F6F6;
        position:relative;
        margin:0 24rpx;

  }

  .char {
    font-size:25rpx;
    color:#323A45;
    font-weight:400;

  }

  .name {
    padding:18rpx 0 12rpx 10rpx;

  }

  .phone {
    padding:0 0 0 10rpx;

  }

  .addresstag {
    color: #FC5D7B;
  }

  .addimgbox {
        width:52rpx;
        height:26rpx;
        border:1rpx dashed #323A45;
        margin:0 4rpx 0 0;
        display:flex;
        align-items:center;


  }

  .addimg {
        width:52rpx;
        height:26rpx;

  }

  .addlebox {
        width:592rpx;
        height:36rpx;
        margin:10rpx;
        display:flex;
        align-items:flex-end;
  }

  .borders {
        width:2rpx;
        height:60rpx;
        position:absolute;
        top:56rpx;
        right:96rpx;
        background:#F3F7F7;

  }

  .redact {
    color:#999DA2;
    position:absolute;
    top:68rpx;
    right:16rpx;

  }

  .addbtn {
    margin:0 auto;
    border:none;
    margin-top:120rpx;
    margin-bottom:120rpx;
    background:#33D6C5;
    color:#fff;
    font-size:36rpx;
    width:702rpx;
    border-radius:14rpx;
    height:100rpx;

  }
</style>