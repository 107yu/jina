import {
    getGoodsDetail,
    getGoodSku,
    getGoodsDetailPicture,
    getTemplates,
    getCoupon,
} from "../../service/index"
export default {
    //命名空间
    namespaced: true,
    state: {
        goodsid:"",//商品id
        basePid:"",
        bid:"",
        uid:"",
        goodsDetail: {}, // 商品详情信息
    },
    mutations: {
        goodsDetail(state,payload){  //获取商品详情
            state.goodsDetail = payload
            // console.log("state.goodsDetail",state.goodsDetail)
        }
    },
    actions: {
        async getGoodsInfo({commit},payload){   //获取商品的详情
            let data = await getGoodsDetail(payload)
            console.log("getGoodsInfo",data)
            if(data.res_code===1){
                commit("goodsDetail",data.result)
            }
            return data
        },
        async getSku({commit},payload){   //获取商品sku属性
            let data = await getGoodSku(payload)
            console.log(data,"sku")
            // if(data.res_code===1){
            //     commit("goodsDetail",data.result)
            // }
        },
        async getDetailPicture({commit},payload){   //获取商品的产品详情图
            let data = await getGoodsDetailPicture(payload)
            console.log("getDetailPicture",data)
            // if(data.res_code===1){
            //     commit("goodsDetail",data.result)
            // }
        },
        async templates({commit},payload){   //获取商品运费模板
            let data = await getTemplates(payload)
            console.log("templates",data)
            // if(data.res_code===1){
            //     commit("goodsDetail",data.result)
            // }
        },
        async coupon({commit},payload){   //获取商品de产品优惠券
            let data = await getCoupon(payload)
            console.log("coupon",data)
            // if(data.res_code===1){
            //     commit("goodsDetail",data.result)
            // }
        },
    }
}