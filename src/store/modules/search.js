import {getSearch} from "../../service/index"
const state = {

}

const mutations = {

}

const actions = {
    async sendSearch({commit},payload){
        let data = await getSearch(payload)
        console.log(data)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}