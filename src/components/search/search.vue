<template>
    <div class="input">
      <input type="text" class="search" @blur="search" v-model="value" @input="inputVal">
      <img  src="/static/images/搜索.svg" alt="">
      <slot></slot>
    </div>
</template>
<script>
import {mapState,mapMutations,mapActions} from "vuex"
import indexVue from '../../pages/home/index.vue';
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
         value: ""  
        }
    },
    computed:{
      page: state=>state.search.page
    },
    methods:{
      ...mapActions({
        sendSearch: "search/sendSearch"
      }),
      ...mapMutations({
        getSearchVal: "search/getSearchVal"
      }),
      inputVal(){
        this.getSearchVal(this.value)
      },
       search(){
        let arr = [];
        wx.getStorage({
          key: 'history',
          success: (res)=> {
            arr = JSON.parse(res.data)
            let ind =arr.findIndex(item=>item===this.value)
            if(ind === -1){
              arr.push(this.value)
            }
            wx.setStorage({
              key: "history",
              data: JSON.stringify(arr)
            })
          },
          fail: ()=>{
            arr.push(this.value)
            wx.setStorage({
              key: "history",
              data: JSON.stringify(arr)
            })
          }
        })
        
        this.sendSearch(this.value)
       }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.input{
  margin-bottom: 20rpx;
  display: flex;
  align-items: center;
  margin-top:10rpx;
}
input{
  font-size: 26rpx;
}
.search{
  flex: 1;
  height: 60rpx;
  background: #fff;
  border:1px solid #ccc;
  border-radius: 30rpx;
  padding-left: 60rpx;
  margin:0 auto;
}
.input img{
  width: 40rpx;
  height: 40rpx;
  position: absolute;
  top:20rpx;
  left:20rpx;
}

</style>