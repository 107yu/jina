<template>
  <div class="home">
    <TapTitle :titles="titles"></TapTitle>
    <MySwiper></MySwiper>
    <div class="main">

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
      titles: ["今日推荐","纸尿裤","母婴专场","服装","家居","小家电"],
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
<style scoped lang="">
.home{
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #ccc;
}

</style>