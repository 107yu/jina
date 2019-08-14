<template>
  <div class="box">
    <scroll-view scroll-x>
      <div class="box_nav">
        <p>今日推荐</p>
        <p
          v-for="(item,index) in navData"
          :class="index===ind?'active':null"
          :key="index"
          @click="tab(index,item.cid)"
        >{{item.cname}}</p>
      </div>
    </scroll-view>
    <section>
      <div class="head">
        <dl v-for="(item,index) in headData" :key="index">
          <dt>
            <img :src="item.imgUrl" alt />
          </dt>
          <dd>{{item.cname}}</dd>
        </dl>
      </div>
      <ul>
        <li v-for="(item,index) in newNav" :key="index">{{item.cname}}</li>
      </ul>
      <div class="count">
        <div>
          <recommendItem />
        </div>
         <div>
          <recommendItem />
        </div>
         <div>
          <recommendItem />
        </div>
      </div>
    </section>
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
      newNav: state => state.recommend.newNav
    })
  },
  methods: {
    ...mapMutations({
      tabNav: "recommend/tabNav"
    }),
    tab(index, id) {
      this.tabNav({ index: index, id: id });
    },
    ...mapActions({
      getNavData: "recommend/getNavData",
      getCountData: "recommend/getCountData"
    })
  },
  created() {
    this.getNavData();
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
  section {
    flex: 1;
    overflow: scroll;
    background: #f3f7f7;
    .head {
      display: flex;
      flex-wrap: wrap;
      background: #fff;
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

      li {
      }
      .bg {
        color: #fc5d7b;
      }
    }
    .count {
      margin-top: 20rpx;
      display: flex;
      flex-wrap: wrap;
      div{
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