<template>
   <ul class="header">
        <li v-for="(item,index) in titles" :key="index" @click="changeTitle(index)">
            <span :class="{'strong':index===ind}">{{item}}</span>
            <b :class="{'show':index===ind}"></b>
        </li>
   </ul>
</template>
<script>
export default {
    props:["titles"],
    components:{

    },
    data(){
        return {
            ind: 0,
        }
    },
    computed:{

    },
    methods:{
         //tap切换
        changeTitle(index){
        this.ind = index
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.header{
  width: 100%;
  height: 100rpx;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

li{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
b{
  width: 50rpx;
  height: 10rpx;
  margin:10rpx auto;
}
.strong{
    font-weight: 600;
}
.show{
     background: #56D2BF;
}
</style>