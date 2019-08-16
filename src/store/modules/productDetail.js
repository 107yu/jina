import {
    getGoodsDetail,
    getGoodSku,
    getGoodsDetailPicture,
    getGoodsTemplates,
    getGoodsCoupon,
} from "../../service/index"
export default {
    //命名空间
    namespaced: true,
    state: {
        goodsid:"",//商品id
        goodsDetail: {}, // 商品详情信息
        goodsSku: {},    //商品sku属性
        goodsDetailPicture: {},  //商品的产品详情图
        goodsTemplates: {},    //商品运费模板
        goodsCoupon: {},      //产品优惠券
    },
    mutations: {
        goodsDetail(state,payload){  //获取商品详情
            state.goodsDetail = payload
        },
        goodsSku(state,payload){  //获取商品sku属性
            state.goodsSku = payload
        },
        goodsDetailPicture(state,payload){   //获取商品的产品详情图
            state.goodsDetailPicture = payload
        },
        goodsTemplates(state,payload){  //获取商品运费模板
            state.goodsTemplates = payload
        },
        goodsCoupon(state,payload){  //获取商品de产品优惠券
            state.goodsCoupon = payload
        },
    },
    actions: {
        async getGoodsInfo({commit},payload){   //获取商品的详情
            let data = await getGoodsDetail(payload)
            if(data.res_code===1){
                commit("goodsDetail",data.result)
            }
            return data
        },
        async getSku({commit},payload){   //获取商品sku属性
            let data = await getGoodSku(payload)
            console.log(data,"sku")
            commit("goodsSku",data)
            // if(data.res_code===1){
               
            // }
        },
        async getDetailPicture({commit},payload){   //获取商品的产品详情图
            let data = await getGoodsDetailPicture(payload)
            console.log("getDetailPicture",data)
            commit("goodsDetailPicture",data)
            // if(data.res_code===1){
                
            // }
        },
        async getTemplates({commit},payload){   //获取商品运费模板
            let data = await getGoodsTemplates(payload)
            console.log("templates",data)
            commit("goodsTemplates",data)
            // if(data.res_code===1){
               
            // }
        },
        async getCoupon({commit},payload){   //获取商品de产品优惠券
            let data = await getGoodsCoupon(payload)
            console.log("coupon",data)
            commit("goodsCoupon",data)
            // if(data.res_code===1){
                
            // }
        },
    }
}