import {getProductCoupon} from "@/service/index"
const state = {

}

const mutations = {

}

const actions = {
    async ProductCouponDetail({commit},payload){
        let data = await getProductCoupon(payload)
        console.log(data)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}
