<template>
    <div>
         <dl v-for="(item,index) in products" :key="index">
              <dt>
                  <img :src="item.mainImgUrl" alt="">
              </dt>
              <dd>
                  <p class="titleBox">
                  {{item.title}}
                  </p>
                  <div class="moneySpanBox">
                      <label for="" class="span1">
                          ￥ <span>{{item.salesPrice}}</span>
                      </label>
                      <label for="" class="span2">
                          赚￥
                          <span>{{item.memberDiscountPrice}}</span>
                      </label>
                  </div>
              </dd>
          </dl>
    </div>
</template>
<script>
export default {
    props:["products"],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    onLoad(){

    },
    mounted(){
    
    }
}
</script>
<style scoped lang="scss">
@import "./scss/index.scss";

</style>