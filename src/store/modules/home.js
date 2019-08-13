import {getProduct,getList,getList1} from "../../service/index"
export default {
    //命名空间
    namespaced: true,
    state: {
        homeLists: [],
    },
    mutations: {
        homeList(state,payload){
            state.homeLists = payload;
            console.log("homeLists",state.homeLists)
        }
    },
    actions: {
        async getProductList({commit},payload){
            let data = await getProduct(payload)
            //参数不对
            // console.log(data)
            // return data
        },
        async getHomeList1({commit}){
            let data = await getList1()
            // console.log(data)
            // return data
        },
        async getHomeList({commit}){
            let data = await getList()
            if(data.res_code===1){
                commit("homeList",data.result)
            }
        },
    }
}