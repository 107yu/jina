<template>
  <div class="wrap">
    <div class="sessionCont">
          <img :id="scal === true ? 'actives':'banners'" :src="banner" alt="" mode="widthFix" @click='scals'/>
      <p class="title">{{title}}</p>
       <!-- <scroll-view class="nav" scroll-x="true">
        <span v-for="(item,index) in list" :key="index" :class="index==ind ? 'active' : ''" @click="changeind(index,item)">{{item.anchorDesc}}</span>
      </scroll-view> -->
    </div>
    <div class="listWrap">
      <div>
        <div class="cake">
          <span></span>
          <p v-for="(item,index) in list" :key="index">{{item.anchorName}}</p>
          <span></span>
        </div>
      </div>
      <div class="hot">
         <hotItem />
          <!-- <dl v-for="(val,index) in item" :key="index">
              <dt>
                  <img src="" alt="">
              </dt>
              <dd>
                  <p class="titleBox">
                    酒店房间号圣诞节和激发环境恢复到几号放假好看的数据恢复快结婚时肯定会觉得和富人越与业务
                  </p>
                  <div class="moneySpanBox">
                      <label for="" class="span1">
                          ￥<span>79</span>
                      </label>
                      <label for="" class="span2">
                          赚￥
                          <span>5.45</span>
                      </label>
                  </div>
              </dd>
          </dl> -->
      </div>
    </div>
  </div>
</template>
<script>
import {mapState,mapActions} from "vuex"
import hotitem from '@/components/hotItem'
export default {
  props: {},
  components: {
    hotitem
  },
  data() {
    return {
        scal:false
    };
  },
  computed: {
      ...mapState({
        list: state => state.sepcialList.list,
        banner: state => state.sepcialList.banner,
        title: state => state.sepcialList.title,
      })
    },
    async onShow() {
      await this.specialList({
        siid: this.siid
      })
      wx.setNavigationBarTitle({title:this.title});
    },
    onLoad(options) {
      this.siid = options.sild;
    },
  methods: {
      //专题
      ...mapActions({
      specialList: "sepcialList/getSepcialData"
    }),
    
  },
  created() {
       
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
@import "./scss/index.scss";
</style>