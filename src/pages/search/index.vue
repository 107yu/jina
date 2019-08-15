<template>
  <div class="search">
    <scroll-view scroll-y style="height:100%" @scroll="scroll">
      <div class="main">
        <MySearch searchPage="searchPage">
          <span class="cancel">取消</span>
        </MySearch>
        <div  class="historySearch" v-if="!searchVal">
          <div class="historyTop">
            <span>历史记录</span>
            <span><img src="/static/images/删除.svg" alt=""></span>
          </div>
          <div class="historyContent">
            <span v-for="(item,index) in history" :key="index">{{item}}</span>
          </div>
        </div>
        <div class="content " v-if="searchList.message==='成功' && searchVal">
            <div :class="['title', {'fixed':flag}]">
              <span 
               v-for="(item,index) in searchTitle" 
               :key="index" :class="{'titleShow'
               :index===currenType}"
               @click="changeTitle(index)"
               >{{item.title}}</span>
            </div>
            <div class="contentList" >
                <dl v-for="(item,index) in searchList.result" :key="index" @click="goTODetail(item.basePid)">
                  <dt>
                    <img :src="item.mainImgUrl" alt="">
                  </dt>
                  <dd>
                    <p>{{item.title}}</p>
                    <div>
                      <b>￥{{item.salesPrice}}</b>
                      <span>￥{{item.vipPrice}}</span>
                    </div>
                  </dd>
                  <strong class="newBtn">NEW</strong>
                </dl>
            </div>
        </div>
        <div class="noGoods" v-if="searchList.message==='未查询到' && searchVal">
          <img src="/static/images/nogoods.png" alt="">
        </div>
      </div>
     </scroll-view>
  </div>
</template>
<script>
import {mapState,mapMutations,mapActions} from "vuex"
export default {
  props:{

  },
  components:{

  },
  data(){
    return {
      history: [],
      flag: false,
    }
  },
  computed:{
    ...mapState({
      searchList: state=>state.search.searchList,
      searchVal: state=>state.search.searchVal,
      searchTitle :state=>state.search.searchTitle,
      currenType: state=>state.search.currenType,
      currentValue: state=>state.search.currentValue
    })
  },
  methods:{
    scroll(e){
        if(e.target.scrollTop>=60){
          this.flag = true;
        }else {
          this.flag = false;
        }
      },
    ...mapMutations({
      changeType: "search/changeType",
     
    }),
    ...mapActions({
       sendSearch: "search/sendSearch"
    }),
    changeTitle(index){
      this.sendSearch({
        "queryWord": this.currentValue,
        "queryType": this.currenType,
        "querySort": "desc",
        "pageIndex": 1,
      })
      this.changeType(index)
    },
    goTODetail(id){
      wx.navigateTo({
          url: `/pages/commodityDetail/main?id=${id}`
      });
    }
  },
  created(){

  },
  mounted(){
     wx.getStorage({
      key: 'history',
      success: (res)=> {
        this.history = JSON.parse(res.data)
      },
      
    })
  }
}
</script>
<style scoped lang="">
.search{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;
}
.main{
  display: flex;
   width: 100%;
  height: 100%;
  display: flex;
  flex-direction:column;
}
.cancel{
  padding: 0 20rpx;
}
.historyTop{
  display: flex;
  justify-content: space-between;
  padding: 20rpx;
  font-size: 24rpx;
}
.historyTop img{
  width: 30rpx;
  height: 30rpx;
}
.historyContent{
  display: flex;
  flex-wrap: wrap;
}
.historyContent span{
  width: 23%;
  text-align: center;
  height: 50rpx;
  line-height:50rpx;
  background: #eee;
  margin-top:10rpx;
  margin-right: 6rpx;
  margin-left: 6rpx;
  font-size: 24rpx;
}
.title{
  width: 100%;
  height: 80rpx;
  display: flex;
  align-items: center;
  background: #fff;
}
.title span{
  height: 80rpx;
  line-height: 80rpx;
  flex: 1;
  text-align: center;
  font-size: 26rpx;
}
.contentList{
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  padding: 18rpx 10rpx 0;
  box-sizing: border-box;
  justify-content: space-between;
  box-sizing: border-box;
  background: #f3f7f7;
}
.contentList dl{
  width: 49%;
  height:536rpx ;
  background: #fff;
  margin-top:20rpx;
  border-radius: 20rpx;
  position: relative;
}
.contentList dl b{
  color: red;
}
p{
  width: 100%;
  height: 60rpx;
  line-height: 60rpx;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  font-size: 24rpx;
}
dt{
  text-align: center;
}
dt img{
  width: 295rpx;
  height: 277rpx;
 
}
.contentList div{
  display: flex;
}
.contentList div span{
  font-size: 24rpx;
  position: relative;
  top:10rpx;
  left:10rpx;
}
.newBtn{
  display: inline-block;
  position: absolute;
  width: 50rpx;
  height: 26rpx;
  border-radius: 4rpx;
  background: linear-gradient(270deg,#ffb848,#ff7737);
  top: 20rpx;
  right: 20rpx;
  color: #fff;
  font-size: 18rpx;
  text-align: center;
  line-height: 26rpx;

}
.noGoods{
  width: 100%;
  flex: 1;
  overflow: hidden;
}
.noGoods img{
  width: 100%;
  height: 100%;
}
.fixed{
  position: fixed;
  top:0;
  left:0;
  z-index: 999;
}
.titleShow{
  border-bottom: 1px solid green;
  color: green;
}
</style>