<template>
  <div class="wrap">

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

    }
  },
  computed:{

  },
  methods:{
    ...mapActions({
      getGoodsInfo: "home/getGoodsInfo"
    })
  },
  created(){

  },
  mounted(){
    this.getGoodsInfo()
  }
}
</script>
<style scoped lang="">
.wrap{
  width: 100%;
  height: 100%;
}
</style>