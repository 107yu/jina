<template>
    <div>
        <HotImg :hotimg="hotimg"></HotImg>
        <HomeBar homeBarHot="精品好物" describe="等你来抢" more="true"></HomeBar>
        <div class="boutique">
        <DlList 
            v-for="(item,index) in homeLi" 
            :key="index"
            :item="item"
            ></DlList>
        </div>
    </div>
</template>
<script>
export default {
    props:[
        "hotimg",
        "homeLi"
    ],
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
    mounted(){

    }
}
</script>
<style scoped lang="">
.boutique{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>