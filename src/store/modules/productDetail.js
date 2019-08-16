import {
    getGoodsDetail,
    getGoodsDetailPicture,
    getGoodSku,
    getTemplates,
    getCoupon,
} from "../../service/index"
export default {
    //命名空间
    namespaced: true,
    state: {
        goodsid:"",//商品id
        goodsDetail: {}, // 商品详情信息
    },
    mutations: {
        goodsDetail(state,payload){  //获取商品详情
            state.goodsDetail = payload
            // console.log("state.goodsDetail",state.goodsDetail)
        }
    },
    actions: {
        async getGoodsInfo({commit},payload){   //获取商品干的详情
            let data = await getGoodsDetail(payload)
            if(data.res_code===1){
                commit("goodsDetail",data.result)
            }
        }
    }
}