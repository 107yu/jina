<template>
  <div class="box">
    <scroll-view scroll-x>
      <div class="box_nav">
        <p @click="gotoHome">今日推荐</p>
        <p
          v-for="(item,index) in navData"
          :class="index===ind?'active':null"
          :key="index"
          @click="tab(index,item.cid)"
        >{{item.cname}}</p>
      </div>
    </scroll-view>
    <scroll-view scroll-y @scroll="scrollload" class="section">
      <div class="head">
        <dl v-for="(item,index) in headData" :key="index" @click="headClick(item.cid)">
          <dt>
            <img :src="item.imgUrl" alt />
          </dt>
          <dd>{{item.cname}}</dd>
        </dl>
      </div>
      <ul>
        <li
          v-for="(item,index) in newNav"
          :key="index"
          @click="sortTab(item.sortType)"
        >{{item.cname}}</li>
        <li v-if="newNav[2].sortType===3">
          <img src="/static/images/downbg.svg" alt />
          <img src="/static/images/down.svg" alt />
        </li>
        <li v-if="newNav[2].sortType===4">
          <img src="/static/images/down.svg" alt />
          <img src="/static/images/downbg.svg" alt />
        </li>
      </ul>
      <div class="count">
        <div v-for="(item,index) in countData" :key="index">
          <recommendItem :item="item" />
        </div>
      </div>
    </scroll-view>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      navData: state => state.recommend.navData,
      ind: state => state.recommend.ind,
      headData: state => state.recommend.headData,
      newNav: state => state.recommend.newNav,
      countData: state => state.recommend.countData,
      current: state => state.recommend.current
    })
  },
  methods: {
    ...mapMutations({
      tabNav: "recommend/tabNav",
      sortTabs: "recommend/sortTabs",
      updatepull: "recommend/updatepull"
    }),
    ...mapActions({
      getNavData: "recommend/getNavData",
      getCountData: "recommend/getCountData"
    }),
    //顶部tab切换
    tab(index, id) {
      this.tabNav({ index: index, id: id });
      //顶部切换时联动下面数据
      this.getCountData({
        pageIndex: this.current.pageIndex,
        cid: id,
        sortType: this.current.sortType
      });
      this.mask();
    },
    //综合价格切换
    sortTab(sortType) {
      this.sortTabs({ sortType });
      this.getCountData({
        pageIndex: this.current.pageIndex,
        cid: this.current.cid,
        sortType: this.current.sortType
      });
      this.mask();
    },
    //点击head 第二块也切换视图
    headClick(id) {
      this.getCountData({
        pageIndex: this.current.pageIndex,
        cid: id,
        sortType: this.current.sortType
      });
      this.mask();
    },
    mask() {
      wx.showLoading({
        title: "加载中",
        mask: true
      });
      setTimeout(function() {
        wx.hideLoading();
      }, 500);
    },
    //去首页
    gotoHome() {
      wx.navigateBack({
        delta: 2
      })
    },
    //滚动事件
    scrollload() {
      // this.updatepull()
      // ++this.current.pageIndex
      // console.log(this.current.pageIndex)
    }
  },
  created() {
    //头部
    this.getNavData();
    //列表
    this.getCountData({ pageIndex: 1, cid: 1, sortType: 1 });
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  scroll-view {
    height: 80rpx;
    border-bottom: 1px solid #eee;
    .box_nav {
      width: 100%;
      height: 70rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        height: 70rpx;
        padding: 10rpx;
        flex-shrink: 0;
        margin-left: 10rpx;
        font-size: 28rpx;
        color: #666;
        line-height: 80rpx;
      }
      .active {
        color: #56d2bf;
        border-bottom: 1px solid #56d2bf;
      }
    }
  }
  .section {
    flex: 1;
    overflow: scroll;
    background: #f3f7f7;
    .head {
      display: flex;
      flex-wrap: wrap;
      background: #fff;
      padding: 25rpx 0;
      dl {
        width: 25%;
        height: 25%;
        text-align: center;
        dt {
          img {
            width: 100rpx;
            height: 100rpx;
          }
        }
        dd {
          font-size: 30rpx;
          color: #666;
        }
      }
    }
    ul {
      height: 80rpx;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 32rpx;
      margin-top: 20rpx;
      background: #fff;
      position: relative;
      li:last-child {
        display: flex;
        flex-direction: column;
        position: absolute;
        right: 65rpx;
        img:first-child {
          transform: rotate(270deg);
        }
        img {
          width: 23rpx;
          height: 23rpx;
          transform: rotate(90deg);
        }
      }
      .bg {
        color: #fc5d7b;
      }
    }
    .count {
      margin-top: 3rpx;
      display: flex;
      flex-wrap: wrap;
      div {
        width: 48.5%;
        background: #fff;
        border-radius: 5px;
        margin-left: 8rpx;
        margin-top: 8rpx;
      }
    }
  }
}
</style>