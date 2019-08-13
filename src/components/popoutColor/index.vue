<template>
    <div class="mwrap">
    <div class="cen">
      <p class="colSize">
        <span>
          <span style="margin-left:5px;">颜色·尺码</span>
        </span>
        <span>X</span>
      </p>
      <dl>
        <dt style="margin-right:5px;">
          <img src="" alt>
        </dt>
        <dd>
          <template v-if="onSku">
            <p v-if="isMiaoSha">￥399.50</p>
            <p v-else>￥399.50</p>
            <p>库存：4999</p>
          </template>
          <template v-else>
            <p>￥399.50</p>
            <p>库存：4999</p>
          </template>
        </dd>
      </dl>
      <div class="colors">
        <p class="aname">颜色</p>
        <ul>
          <li>灰色</li>
          <li>灰色</li>
          <li>灰色</li>
          <li>灰色</li>
          <li>灰色</li>
          <li>灰色</li>
        </ul>
      </div>
      <div class="colors">
        <p class="aname">尺码</p>
        <ul>
          <li>L(170/92A)</li>
          <li>L(170/92A)</li>
          <li>L(170/92A)</li>
          <li>L(170/92A)</li>
          <li>L(170/92A)</li>
          <li>L(170/92A)</li>
        </ul>
      </div>
      <div class="numbox">
        <span class="sl">数量</span>
        <div class="num">
          <span>-</span>
          <span>{{onSku.onNum}}</span>
          <span>+</span>
        </div>
      </div>
      <button class="btn">确定</button>
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
.mwrap {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  .cen {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #fff;

    .colSize {
      margin-top: 5px;
      display: flex;
      justify-content: space-between;
      padding: 0 2%;
      box-sizing: border-box;
      span:nth-child(1) {
        font-size: 15px;
      }
    }
    dl {
      display: flex;
      padding: 0 2%;
      box-sizing: border-box;
      dt img {
        width: 80px;
        height: 80px;
      }
      dd {
        p:nth-child(1) {
          font-size: 15px;
          color: #323a45;
          line-height: 2;
        }
        p:nth-child(2) {
          font-size: 15px;
          color: #999da2;
          line-height: 2;
        }
      }
    }
    .colors {
      padding: 0 2%;
      box-sizing: border-box;
      margin-top: 15px;
      .aname {
        color: #999da2;
        font-size: 15px;
        line-height: 2;
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          border: 1px solid #ccc;
          padding: 3px 8px;
          box-sizing: border-box;
          margin: 5px 10px;
          font-size: 12px;
          border-radius: 5px;
        }
        .bg {
          background: #33d6c5;
          color: #fff;
          border: 1px solid #33d6c5;
        }
      }
    }
    .numbox {
      padding: 0 2%;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      .sl {
        font-size: 15px;
        color: #999da2;
        line-height: 2;
      }
      .num {
        display: flex;
        span {
          display: block;
          line-height: 2;
          font-size: 14px;
          text-align: center;
          padding: 0px 10px;
          box-sizing: border-box;
          border: 1px solid #ccc;
        }
      }
    }
    .btn {
      width: 100%;
      height: 55px;
      line-height: 55px;
      text-align: center;
      color: #fff;
      background: linear-gradient(
        217deg,
        rgba(248, 99, 103, 1) 0%,
        rgba(251, 37, 121, 1) 100%
      );
    }
  }
}
</style>