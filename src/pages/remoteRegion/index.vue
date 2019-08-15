<template>
  <scroll-view scroll-y="true" class="listWrap">
    <div class="sessionCont">
      <img
        :id="scal === true ? 'actives':'banners'"
        :src="banner"
        alt
        mode="widthFix"
        @click="scals"
      />
      <scroll-view class="nav" scroll-x="true">
        <span
          v-for="(item,index) in list"
          :key="index"
          :class="index==ind ? 'active title' : 'title'"
          @click="changeind(index,item)"
        >{{item.anchorDesc}}</span>
      </scroll-view>
    </div>

    <div v-for="(val,key) in list" :key="key">
      <div class="cake">
        <span></span>
        <p>{{val.anchorName}}</p>
        <span></span>
      </div>
      <div class="hot">
        <DlList
          v-for="(item,index) in val.products"
          :key="index"
          :img="item.mainImgUrl"
          :title="item.title"
          :price="item.salesPrice"
          :id="item.basePid"
          :earnMoney="item.earnMoney"
        />
      </div>
    </div>
  </scroll-view>
</template>
<script>
import { mapState, mapActions } from "vuex";
import DlList from "@/components/dlList/dlList";
export default {
  props: {},
  components: {
    DlList
  },
  data() {
    return {
      scal: false,
      ind: 0
    };
  },
  computed: {
    ...mapState({
      list: state => state.sepcialList.list,
      banner: state => state.sepcialList.banner,
      title: state => state.sepcialList.title
    })
  },
  async onShow() {
    await this.specialList({
      siid: this.siid
    });
    wx.setNavigationBarTitle({ title: this.title });
  },
  onLoad(options) {
    this.siid = options.sild;
  },
  methods: {
    //专题
    ...mapActions({
      specialList: "sepcialList/getSepcialData"
    }),
    changeind(index, item) {
      this.ind = index;
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
@import "./scss/index.scss";
</style>