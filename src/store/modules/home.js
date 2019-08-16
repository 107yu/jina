export default {
    //命名空间
    namespaced: true,
    state: {
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
    }
}