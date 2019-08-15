import {getCategories,getList,getProducts,getSwiperDetail,getGoodsDetail} from "../../service/index"
export default {
    //命名空间
    namespaced: true,
    state: {
    },
    actions: {
        homeLists: [],
        homeProducts: [],
        categories: [], //分类标题
        swiperDetailInfo:{}, //轮播图详情
        goodsid:"",//商品id
        goodsDetail: {}, // 商品详情信息
    },
    mutations: {
        categoryList(state,payload){     //获取首页专题的头部信息
            payload.unshift({cname:"今日推荐"})
            state.categories = payload;
            // console.log(" categories",state.categories)
        },  
        homeList(state,payload){     //获取首页大部分数据
            state.homeLists = payload;
            // console.log("homeLists",state.homeLists)
        },
        homeProducts(state,payload){   //获取首页底部数据
            state.homeProducts = payload
            // console.log("homeProducts",state.homeProducts)
        },
        swiperDetail(state,payload){   //轮播图的详细信息
            state.swiperDetailInfo = payload;
            // console.log("state.swiperDetailInfo",state.swiperDetailInfo)
        },
        goodsDetail(state,payload){  //获取商品详情
            state.goodsDetail = payload
            // console.log("state.goodsDetail",state.goodsDetail)
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
            if(data.res_code === 1){
                commit("homeList",data.result)
            }
        },
        async swiperDetail({commit},payload){  //轮播图的详情
            let data = await getSwiperDetail(payload)
            commit("swiperDetail",data)
        },
        async getGoodsInfo({commit},payload){   //获取商品干的详情
            let data = await getGoodsDetail(payload)
            if(data.res_code===1){
                commit("goodsDetail",data.result)
            }
        }
    }
}