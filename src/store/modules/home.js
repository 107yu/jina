import {getCategories,getList,getProducts,getSwiperDetail} from "../../service/index"
export default {
    //命名空间
    namespaced: true,
    state: {
        homeLists: [],
        homeProducts: [],
        categories: [], //分类标题
        swiperDetailInfo:{}, //轮播图详情
    },
    mutations: {
        categoryList(state,payload){
            payload.unshift({cname:"今日推荐"})
            state.categories = payload;
            // console.log(" categories",state.categories)
        },  
        homeList(state,payload){
            state.homeLists = payload;
            console.log("homeLists",state.homeLists)
        },
        homeProducts(state,payload){
            state.homeProducts = payload
            console.log("homeProducts",state.homeProducts)
        },
        swiperDetail(state,payload){   //轮播图的详细信息
            state.swiperDetailInfo = payload;
            console.log("state.swiperDetailInfo",state.swiperDetailInfo)
        }
    },
    actions: {
        async getCategoryLists({commit},payload){  //获取所有的分类标题
            let data = await getCategories(payload)
          
            if(data.res_code===1){
                commit("categoryList",data.result)
            }
        },
        async getProductLists({commit}){    //获取为你精选数据
            let data = await getProducts()
            if(data.res_code === 1){
                commit("homeProducts",data.result)
            }
        },
        async getHomeList({commit}){       //获取首页大部分数据
            let data = await getList()
            console.log(data.result,"404040404")
            if(data.res_code === 1){
                commit("homeList",data.result)
            }
        },
        async swiperDetail({commit},payload){ //轮播图的详情
            let data = await getSwiperDetail(payload)
            commit("swiperDetail",data)
        }
    }
}