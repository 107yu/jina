<template>
  <div class="header">
    <scroll-view scroll-x style="height:100%">
      <ul>
        <li v-for="(item,index) in titles" :key="index" @click="changeTitle(index,item.cid)">
          <span :class="{'strong':index===ind}">{{item.cname}}</span>
          <b :class="{'show':index===ind}"></b>
        </li>
      </ul>
    </scroll-view>
  </div>
</template>
<script>
import { mapMutations, mapActions } from "vuex";
export default {
  props: ["titles"],
  components: {},
  data() {
    return {
      ind: 0
    };
  },
  computed: {},
  methods: {
    ...mapMutations({
      tabNav: "recommend/tabNav"
    }),
    ...mapActions({
      getCountData: "recommend/getCountData"
    }),
    //tap切换
    changeTitle(index, cid) {
      //首页样式联动分类页样式
      this.tabNav({ index: index - 1, id: cid });
      //分类页面列表数据
      this.getCountData({ pageIndex: 1, cid: cid, sortType: 1 });
      this.ind = index;
      if (index !== 0) {
        wx.navigateTo({
          url: "/pages/recommend/main"
        });
      }
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="">
.header {
  width: 100%;
  height: 100rpx;
}
ul {
  display: flex;
}
li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20rpx;
  flex-shrink: 0;
}
b {
  width: 50rpx;
  height: 10rpx;
  margin: 10rpx auto;
}
.strong {
  font-weight: 600;
}
.show {
  background: #56d2bf;
}
</style>